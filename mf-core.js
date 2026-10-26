/* ============================================================================
   THE MIDNIGHT FILES — core helpers: language, time, storage, sound, networking
   ============================================================================ */
window.MF = window.MF || {};
(function (MF) {
  'use strict';
  MF.cases = MF.cases || {};
  MF.registerCase = function (c) { MF.cases[c.id] = c; };
  MF.lang = 'both';                       // 'both' | 'en' | 'bm'

  /* ------------------------------------------------------------ text helpers */
  MF.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  // Bilingual object {en,bm} -> HTML according to chosen language
  MF.t = function (o) {
    if (o == null) return '';
    if (typeof o === 'string' || typeof o === 'number') return String(o);
    var en = o.en, bm = o.bm;
    if (MF.lang === 'en') return en || bm || '';
    if (MF.lang === 'bm') return bm || en || '';
    if (!bm || !en || bm === en) return bm || en || '';
    return '<span class="bm">' + bm + '</span><span class="en">' + en + '</span>';
  };
  // Plain-text version (no markup) for titles/tooltips
  MF.tp = function (o) {
    if (o == null) return '';
    if (typeof o === 'string' || typeof o === 'number') return String(o);
    var strip = function (x) { return String(x || '').replace(/<[^>]+>/g, ''); };
    if (MF.lang === 'en') return strip(o.en || o.bm);
    if (MF.lang === 'bm') return strip(o.bm || o.en);
    return (o.bm && o.en && o.bm !== o.en) ? strip(o.bm) + ' / ' + strip(o.en) : strip(o.bm || o.en);
  };
  MF.mm = function (s) { var p = s.split(':').map(Number); return (p[0] < 12 ? p[0] + 12 : p[0]) * 60 + p[1]; };
  MF.fmtTime = function (min) {
    var h = Math.floor(min / 60) % 24, m = Math.round(min % 60), ap = h >= 12 ? 'pm' : 'am';
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + ':' + (m < 10 ? '0' : '') + m + ' ' + ap;
  };
  MF.shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  MF.$ = function (sel, root) { return (root || document).querySelector(sel); };
  MF.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  MF.el = function (tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /* ------------------------------------------------------------ settings & difficulty */
  MF.DIFFICULTY = {
    junior:   { label: { en: 'Junior', bm: 'Junior' },   choices: 3, typed: false, freeHints: true,  tokens: 99, timerMin: 0,  scare: 0 },
    standard: { label: { en: 'Standard', bm: 'Standard' }, choices: 4, typed: false, freeHints: false, tokens: 3,  timerMin: 25, scare: 1 },
    advanced: { label: { en: 'Advanced', bm: 'Lanjutan' }, choices: 4, typed: true,  freeHints: false, tokens: 1,  timerMin: 15, scare: 2 }
  };
  MF.SCARE = [{ en: 'Off', bm: 'Tutup' }, { en: 'Low', bm: 'Rendah' }, { en: 'Medium', bm: 'Sederhana' }];

  /* ------------------------------------------------------------ safe storage */
  MF.store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }
  };

  /* ------------------------------------------------------------ sound (all synthesized — no audio files, tiny download) */
  MF.Sfx = {
    ctx: null, master: null, muted: false, vol: 0.55, _noise: null, _amb: null,
    init: function () {
      if (this.ctx) { this.resume(); return; }
      try {
        var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
        this.ctx = new AC(); this.master = this.ctx.createGain(); this.master.gain.value = this.muted ? 0 : this.vol; this.master.connect(this.ctx.destination);
        var len = this.ctx.sampleRate * 1.0, buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate), d = buf.getChannelData(0);
        for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        this._noise = buf;
      } catch (e) { this.ctx = null; }
    },
    resume: function () { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
    setVolume: function (v) { this.vol = v; if (this.master) this.master.gain.value = this.muted ? 0 : v; },
    setMuted: function (m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : this.vol; },
    tone: function (f, dur, type, vol, when, slide) {
      if (!this.ctx) return; var c = this.ctx, t = c.currentTime + (when || 0);
      var o = c.createOscillator(), g = c.createGain(); o.type = type || 'sine'; o.frequency.setValueAtTime(f, t);
      if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.15, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
    },
    noise: function (dur, vol, freq, when, q) {
      if (!this.ctx || !this._noise) return; var c = this.ctx, t = c.currentTime + (when || 0);
      var s = c.createBufferSource(); s.buffer = this._noise; var f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq || 800; f.Q.value = q || 0.8;
      var g = c.createGain(); g.gain.setValueAtTime(vol || 0.2, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(f); f.connect(g); g.connect(this.master); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
    },
    play: function (name) {
      if (!this.ctx || this.muted) return; this.resume();
      switch (name) {
        case 'step':   this.noise(0.09, 0.12, 380 + Math.random() * 120, 0, 1.2); break;
        case 'click':  this.tone(700, 0.05, 'square', 0.05); break;
        case 'pick':   this.tone(520, 0.1, 'triangle', 0.13); this.tone(780, 0.16, 'triangle', 0.13, 0.08); break;
        case 'good':   [523, 659, 784, 1047].forEach(function (f, i) { MF.Sfx.tone(f, 0.18, 'triangle', 0.14, i * 0.09); }); break;
        case 'bad':    this.tone(200, 0.28, 'sawtooth', 0.1, 0, 120); break;
        case 'page':   this.noise(0.18, 0.1, 2400, 0, 0.5); break;
        case 'open':   this.tone(300, 0.1, 'sine', 0.1); this.noise(0.12, 0.08, 1500); break;
        case 'creak':  this.tone(110, 0.9, 'sawtooth', 0.05, 0, 70); this.tone(113, 0.9, 'sawtooth', 0.04, 0.02, 75); break;
        case 'thump':  this.tone(70, 0.25, 'sine', 0.3, 0, 40); this.noise(0.1, 0.1, 200); break;
        case 'flicker': for (var i = 0; i < 6; i++) this.noise(0.04, 0.07, 3000, i * 0.11); break;
        case 'steps_far': for (var j = 0; j < 6; j++) { this.noise(0.1, 0.06, 260, j * 0.46, 1.4); this.tone(60, 0.1, 'sine', 0.05, j * 0.46); } break;
        case 'musicbox': [659, 784, 880, 784, 659, 523, 587, 659].forEach(function (f, k) { MF.Sfx.tone(f, 0.5, 'sine', 0.045, k * 0.42); MF.Sfx.tone(f * 2, 0.3, 'sine', 0.02, k * 0.42); }); break;
        case 'tick':   this.tone(1200, 0.03, 'square', 0.03); break;
        case 'alarm':  this.tone(880, 0.16, 'square', 0.07); this.tone(660, 0.16, 'square', 0.07, 0.2); break;
        case 'win':    [523, 659, 784, 1047, 784, 1047, 1319].forEach(function (f, k) { MF.Sfx.tone(f, 0.28, 'triangle', 0.14, k * 0.13); }); break;
        case 'sad':    [392, 349, 330, 262].forEach(function (f, k) { MF.Sfx.tone(f, 0.4, 'sine', 0.12, k * 0.25); }); break;
        /* ---- extra scary sounds (all made from simple tones and noise: no files to download) ---- */
        case 'bell':   this.tone(392, 2.6, 'sine', 0.16); this.tone(784, 1.8, 'sine', 0.07); this.tone(1180, 1.1, 'sine', 0.04); this.tone(196, 2.6, 'sine', 0.08); break;
        case 'bell3':  [0, 1.6, 3.2].forEach(function (w) { MF.Sfx.tone(392, 2.0, 'sine', 0.14, w); MF.Sfx.tone(784, 1.3, 'sine', 0.06, w); }); break;
        case 'whisper': for (var w1 = 0; w1 < 5; w1++) this.noise(0.35 + Math.random() * 0.2, 0.05, 2600 + Math.random() * 1800, w1 * 0.42, 2.4); break;
        case 'heartbeat': for (var h1 = 0; h1 < 5; h1++) { this.tone(58, 0.14, 'sine', 0.38, h1 * 0.85, 38); this.tone(52, 0.16, 'sine', 0.3, h1 * 0.85 + 0.22, 34); } break;
        case 'knock':  for (var k1 = 0; k1 < 3; k1++) { this.noise(0.07, 0.35, 260, k1 * 0.38, 2); this.tone(90, 0.09, 'sine', 0.25, k1 * 0.38, 60); } break;
        case 'scratch': for (var s1 = 0; s1 < 9; s1++) this.noise(0.09, 0.07, 3800 + Math.random() * 2500, s1 * 0.07, 1.6); break;
        case 'static': this.noise(0.9, 0.09, 5200, 0, 0.3); this.noise(0.6, 0.05, 1800, 0.2, 0.4); break;
        case 'wind':   this.noise(2.4, 0.07, 380, 0, 0.5); this.noise(2.4, 0.04, 700, 0.3, 0.6); break;
        case 'drip':   this.tone(1250, 0.09, 'sine', 0.09, 0, 640); this.tone(900, 0.12, 'sine', 0.04, 0.12, 500); break;
        case 'sting':  this.tone(880, 0.7, 'sawtooth', 0.09, 0, 2300); this.tone(930, 0.7, 'sawtooth', 0.07, 0.02, 2500); this.noise(0.4, 0.12, 4500, 0.05, 0.5); this.tone(70, 0.5, 'sine', 0.3, 0, 40); break;
        case 'slam':   this.tone(75, 0.3, 'sine', 0.38, 0, 38); this.noise(0.25, 0.25, 700, 0, 0.6); break;
        case 'thunder': this.noise(2.2, 0.22, 140, 0, 0.5); this.tone(48, 1.8, 'sine', 0.3, 0.1, 30); break;
        case 'voice':  this.tone(330, 1.4, 'triangle', 0.035, 0, 262); this.tone(247, 1.6, 'triangle', 0.03, 0.3, 196); this.noise(1.4, 0.025, 1400, 0, 3); break;
        case 'sos':    [0, 0.32, 0.64].forEach(function (w) { MF.Sfx.tone(560, 0.14, 'sine', 0.16, w); });
                       [1.1, 1.75, 2.4].forEach(function (w) { MF.Sfx.tone(560, 0.42, 'sine', 0.16, w); });
                       [3.2, 3.52, 3.84].forEach(function (w) { MF.Sfx.tone(560, 0.14, 'sine', 0.16, w); }); break;
        case 'unlock': this.tone(400, 0.1, 'square', 0.08); this.tone(800, 0.2, 'square', 0.08, 0.1); break;
      }
    },
    ambient: function (on) {
      if (!this.ctx) return;
      if (on && !this._amb) {
        var c = this.ctx, g = c.createGain(); g.gain.value = 0.02; g.connect(this.master);
        var o1 = c.createOscillator(), o2 = c.createOscillator(); o1.type = 'sine'; o2.type = 'sine'; o1.frequency.value = 55; o2.frequency.value = 55.7;
        o1.connect(g); o2.connect(g); o1.start(); o2.start(); this._amb = { g: g, o1: o1, o2: o2 };
      } else if (!on && this._amb) {
        try { this._amb.o1.stop(); this._amb.o2.stop(); this._amb.g.disconnect(); } catch (e) { /* ignore */ }
        this._amb = null;
      }
    }
  };

  /* ------------------------------------------------------------ networking: teacher "Hub" and student "Link"
     Two transports behind one tiny API:
       'peer'  – PeerJS (WebRTC). Works across school WiFi and home WiFi. Needs internet.
       'local' – BroadcastChannel. Works only between two tabs in the SAME browser (for testing on one laptop).
     When the teacher closes the page, the Hub stops sending pings and students are locked out. */
  var PEER_PREFIX = 'mfiles-';
  function Emitter() { this._h = {}; }
  Emitter.prototype.on = function (ev, fn) { (this._h[ev] = this._h[ev] || []).push(fn); return this; };
  Emitter.prototype.emit = function (ev) { var a = Array.prototype.slice.call(arguments, 1); (this._h[ev] || []).forEach(function (f) { try { f.apply(null, a); } catch (e) { console.error(e); } }); };

  MF.Hub = function (code, mode) {
    Emitter.call(this); var self = this; this.code = code; this.mode = mode || 'peer'; this.conns = {}; this.closed = false;
    if (this.mode === 'local') {
      this.ch = new BroadcastChannel(PEER_PREFIX + code); this.id = 'hub';
      this.ch.onmessage = function (e) { var d = e.data; if (d && d.to === 'hub') self.emit('msg', d.from, d.msg); };
      setTimeout(function () { self.emit('ready'); }, 30);
    } else {
      if (!window.Peer) { setTimeout(function () { self.emit('error', 'PeerJS not loaded'); }, 10); return; }
      this.peer = new window.Peer(PEER_PREFIX + code, { debug: 0 });
      this.peer.on('open', function () { self.emit('ready'); });
      this.peer.on('error', function (e) { self.emit('error', e && e.type ? e.type : String(e)); });
      this.peer.on('connection', function (c) {
        c.on('open', function () { self.conns[c.peer] = c; });
        c.on('data', function (m) { self.conns[c.peer] = c; self.emit('msg', c.peer, m); });
        c.on('close', function () { delete self.conns[c.peer]; self.emit('leave', c.peer); });
        c.on('error', function () { /* ignore */ });
      });
      this.peer.on('disconnected', function () { if (!self.closed) { try { self.peer.reconnect(); } catch (e) { /* ignore */ } } });
    }
  };
  MF.Hub.prototype = Object.create(Emitter.prototype);
  MF.Hub.prototype.send = function (id, msg) {
    try { if (this.mode === 'local') this.ch.postMessage({ from: 'hub', to: id, msg: msg }); else if (this.conns[id] && this.conns[id].open) this.conns[id].send(msg); } catch (e) { /* ignore */ }
  };
  MF.Hub.prototype.broadcast = function (msg) {
    if (this.mode === 'local') { try { this.ch.postMessage({ from: 'hub', to: '*', msg: msg }); } catch (e) { /* ignore */ } return; }
    for (var id in this.conns) this.send(id, msg);
  };
  MF.Hub.prototype.close = function () {
    this.closed = true; this.broadcast({ t: 'end' });
    var self = this; setTimeout(function () { try { if (self.ch) self.ch.close(); if (self.peer) self.peer.destroy(); } catch (e) { /* ignore */ } }, 250);
  };

  MF.Link = function (code, mode) {
    Emitter.call(this); var self = this; this.code = code; this.mode = mode || 'peer'; this.open = false; this.closed = false;
    this.id = 's' + Math.random().toString(36).slice(2, 9);
    if (this.mode === 'local') {
      this.ch = new BroadcastChannel(PEER_PREFIX + code);
      this.ch.onmessage = function (e) { var d = e.data; if (d && (d.to === '*' || d.to === self.id)) self.emit('msg', d.msg); };
      setTimeout(function () { self.open = true; self.emit('open'); }, 30);
    } else {
      if (!window.Peer) { setTimeout(function () { self.emit('error', 'PeerJS not loaded'); }, 10); return; }
      this.peer = new window.Peer(undefined, { debug: 0 });
      this.peer.on('open', function () {
        self.conn = self.peer.connect(PEER_PREFIX + code, { reliable: true });
        self.conn.on('open', function () { self.open = true; self.emit('open'); });
        self.conn.on('data', function (m) { self.emit('msg', m); });
        self.conn.on('close', function () { self.open = false; if (!self.closed) self.emit('close'); });
        self.conn.on('error', function () { self.emit('error', 'connection'); });
      });
      this.peer.on('error', function (e) { self.emit('error', e && e.type ? e.type : String(e)); });
    }
  };
  MF.Link.prototype = Object.create(Emitter.prototype);
  MF.Link.prototype.send = function (msg) {
    try { if (this.mode === 'local') this.ch.postMessage({ from: this.id, to: 'hub', msg: msg }); else if (this.conn && this.conn.open) this.conn.send(msg); } catch (e) { /* ignore */ }
  };
  MF.Link.prototype.close = function () { this.closed = true; try { if (this.ch) this.ch.close(); if (this.peer) this.peer.destroy(); } catch (e) { /* ignore */ } };

  MF.makeCode = function () { var a = 'ABCDEFGHJKMNPQRSTUVWXYZ', n = '23456789', s = ''; for (var i = 0; i < 3; i++) s += a[Math.floor(Math.random() * a.length)]; for (var j = 0; j < 2; j++) s += n[Math.floor(Math.random() * n.length)]; return s; };
})(window.MF);
