/* ============================================================================
   Student page controller.
   - joins the teacher's room (code) and obeys the teacher: the game only runs while the
     teacher's session is OPEN. If the teacher pauses/closes, or the teacher page disappears
     (no heartbeat for ~13 s), the game LOCKS and progress is saved. When the teacher comes
     back, it unlocks again.
   - runs the screens: join -> waiting -> case archive -> briefing -> game.
   Safety checks: name/code validation, duplicate-join protection (one link at a time),
   automatic reconnect, progress saved before every lock, preview mode needs the teacher key.
   ============================================================================ */
(function () {
  'use strict';
  var MF = window.MF, E = MF.esc, $ = function (id) { return document.getElementById(id); };
  var X = function (en, bm) { return MF.t({ en: en, bm: bm }); };
  var P = new URLSearchParams(location.search);
  var NET = P.get('net') === 'local' ? 'local' : 'peer';                      // 'local' = test with two tabs, no internet
  var PREVIEW = P.get('preview') === '1' && !!MF.store.get('mf.teacherKey');  // teacher's own preview (key is set by teacher.html)
  var LOST_AFTER = 13000;                                                       // ms without a heartbeat = teacher is gone

  MF.lang = MF.store.get('mf.lang', 'both');
  var S = { name: '', code: '', link: null, st: null, lastPing: 0, joined: false, screen: 'join', game: null, world: null, uiOn: false, caseId: null,
    low: MF.store.get('mf.low', false), sens: MF.store.get('mf.sens', 0.0022), vol: MF.store.get('mf.vol', 0.55), scarePref: MF.store.get('mf.scare', 2),
    gate: null, ended: false, team: null, rev: -1, pendingShare: [], applyingShare: false, lastProg: 0, autoLow: false, sid: '' };
  try { S.sid = sessionStorage.getItem('mf.sid') || ('s' + Math.random().toString(36).slice(2, 9)); sessionStorage.setItem('mf.sid', S.sid); } catch (e) { S.sid = 's' + Math.random().toString(36).slice(2, 9); }
  MF.Sfx.setVolume(S.vol);

  var slug = function (s) { return String(s || 'x').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 24); };
  var saveKey = function (id) { return 'mf.save.' + (PREVIEW ? 'preview' : slug(S.name)) + '.' + id; };

  /* ------------------------------------------------------------------ screens */
  function show(id) {
    ['s-join', 's-wait', 's-archive', 's-brief'].forEach(function (i) { $(i).hidden = (i !== id); }); $('game').hidden = (id !== 'game'); S.screen = id.replace(/^s-/, '');
  }
  function langButtons() {
    return '<div class="seg lang-seg">' + [['both', 'BM + EN'], ['bm', 'Bahasa Malaysia'], ['en', 'English']].map(function (l) { return '<button class="btn ghost small' + (MF.lang === l[0] ? ' on' : '') + '" data-lang="' + l[0] + '">' + l[1] + '</button>'; }).join('') + '</div>';
  }
  function bindLang(root) {
    root.querySelectorAll('[data-lang]').forEach(function (b) { b.onclick = function () { setLang(b.getAttribute('data-lang')); }; });
  }
  function setLang(l) { MF.lang = l; MF.store.set('mf.lang', l); if (S.game) { UI().updateKeys(); } rerender(); }
  var UI = function () { return MF.UI; };
  function rerender() {
    if (S.screen === 'join') renderJoin(); else if (S.screen === 'wait') renderWait(); else if (S.screen === 'archive') renderArchive(); else if (S.screen === 'brief') renderBrief(S.caseId);
    if (S.gate) renderLock();
  }

  /* ---------------- join ---------------- */
  function renderJoin(status, cls) {
    var el = $('s-join'); var keepName = $('in-name') ? $('in-name').value : (MF.store.get('mf.name', '') || ''), keepCode = $('in-code') ? $('in-code').value : (P.get('c') || MF.store.get('mf.code', '') || '');
    el.innerHTML = '<h1 class="logo">THE MIDNIGHT FILES<small>DETECTIVE ACADEMY · AKADEMI DETEKTIF</small></h1>' +
      '<div class="card" style="margin-top:22px"><label class="field"><span>🕵️ ' + X('Your name', 'Nama anda') + '</span><input id="in-name" class="inp" maxlength="20" autocomplete="off"></label>' +
      '<label class="field"><span>🔑 ' + X('Room code from your teacher', 'Kod bilik daripada guru anda') + '</span><input id="in-code" class="inp code-big" maxlength="6" autocomplete="off" placeholder="ABC12"></label>' +
      '<button id="b-join" class="btn primary big" style="width:100%">▶ ' + X('Join', 'Sertai') + '</button><div id="j-status" class="status-line ' + (cls || '') + '">' + (status || '') + '</div>' +
      '<div style="margin-top:12px">' + langButtons() + '</div></div>' +
      '<p class="tip" style="margin-top:16px;text-align:center;max-width:520px">' + X('Use Google Chrome. The game starts when your teacher opens it.', 'Guna Google Chrome. Permainan bermula apabila guru anda membukanya.') + '</p>';
    $('in-name').value = keepName; $('in-code').value = keepCode; bindLang(el);
    $('b-join').onclick = join; ['in-name', 'in-code'].forEach(function (id) { $(id).onkeydown = function (e) { if (e.key === 'Enter') join(); }; });
    setTimeout(function () { (keepName ? $('in-code') : $('in-name')).focus(); }, 50);
  }
  function setStatus(h, cls) { var e = $('j-status'); if (e) { e.innerHTML = h || ''; e.className = 'status-line ' + (cls || ''); } }
  function join() {
    var name = $('in-name').value.trim().replace(/\s+/g, ' ').slice(0, 20), code = $('in-code').value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!name) { setStatus('⚠ ' + X('Please type your name.', 'Sila taip nama anda.'), 'bad'); return; }
    if (code.length < 4) { setStatus('⚠ ' + X('Please type the room code.', 'Sila taip kod bilik.'), 'bad'); return; }
    S.name = name; S.code = code; MF.store.set('mf.name', name); MF.store.set('mf.code', code);
    setStatus('⏳ ' + X('Connecting to your teacher…', 'Menyambung kepada guru anda…'));
    connect();
  }

  /* ------------------------------------------------------------------ network */
  function connect() {
    if (S.link) { try { S.link.close(); } catch (e) { /* ignore */ } S.link = null; }       // never keep two links open
    var link = S.link = new MF.Link(S.code, NET), mine = link;
    clearTimeout(S.joinTimer);
    if (!S.joined) S.joinTimer = setTimeout(function () { if (!S.joined && S.link === mine) { setStatus('✖ ' + X('Cannot find your teacher. Check the code and make sure the teacher page is open.', 'Tidak dapat mencari guru anda. Semak kod dan pastikan halaman guru dibuka.'), 'bad'); try { mine.close(); } catch (e) { /* ignore */ } } }, 10000);
    link.on('open', function () { if (S.link === mine) mine.send({ t: 'hello', sid: S.sid, name: S.name, v: 1 }); });
    link.on('msg', function (m) { if (S.link === mine) onMsg(m); });
    link.on('close', function () { if (S.link === mine) scheduleReconnect(); });
    link.on('error', function (e) {
      if (S.link !== mine) return;
      if (!S.joined) setStatus('✖ ' + (/unavailable|peer-unavailable/.test(String(e)) ? X('Room not found. Check the code and ask your teacher to open the teacher page.', 'Bilik tidak dijumpai. Semak kod dan minta guru membuka halaman guru.') : X('Connection problem: ', 'Masalah sambungan: ') + E(e)), 'bad'); else scheduleReconnect();
    });
  }
  function scheduleReconnect() {
    if (!S.joined || S.reconnecting) return; S.reconnecting = true;
    setTimeout(function () { S.reconnecting = false; if (Date.now() - S.lastPing > 2500) connect(); }, 3000);     // try again every 3 s while the teacher is away
  }
  function send(m) { if (S.link && S.link.open) S.link.send(m); }
  function onMsg(m) {
    if (!m || !m.t) return;
    if (m.t === 'state') { S.lastPing = Date.now(); S.ended = false; S.rev = m.rev; onState(m.s); }
    else if (m.t === 'ping') { S.lastPing = Date.now(); S.ended = false; if (m.rev !== S.rev) send({ t: 'need', sid: S.sid }); if (S.st && m.phase && m.phase !== S.st.phase) { S.st.phase = m.phase; applyGate(); routeIfWaiting(); } else if (S.gate) applyGate(); }
    else if (m.t === 'end') { S.ended = true; applyGate(); }
    else if (m.t === 'team') { S.team = m.team ? { name: m.team, members: m.members || [] } : null; if (S.screen === 'brief') renderBrief(S.caseId); }
    else if (m.t === 'msg') { if (UI().toast && S.game) UI().toast('📣 <b>' + X('Teacher', 'Guru') + ':</b> ' + E(m.text), 'ev', 9000); else alertBox(m.text); }
    else if (m.t === 'share') onShare(m);
    else if (m.t === 'reset') { if (m.sid === S.sid || !m.sid) resetMine(); }
  }
  function alertBox(text) { var e = $('j-status') || $('w-msg'); if (e) e.innerHTML = '📣 ' + E(text); }
  function sendProg(force) {
    var now = Date.now(); if (!S.joined || (!force && now - S.lastProg < 5000)) return; S.lastProg = now;
    var base = { t: 'prog', sid: S.sid, name: S.name, scr: S.screen, case: S.caseId, team: S.team ? S.team.name : null };
    if (S.game) { var r = S.world && S.world.currentRoom; base.room = r ? MF.tp(r.name) : ''; Object.assign(base, S.game.summary()); }
    send(base);
  }

  /* ------------------------------------------------------------------ teacher state → what the student sees */
  function onState(st) {
    var first = !S.joined; S.st = st; if (first) S.lastMode = st.mode;
    if (first) { S.joined = true; clearTimeout(S.joinTimer); S.lastPing = Date.now(); if (st.lang && !MF.store.get('mf.lang')) MF.lang = st.lang; }
    applyGate(); applyLive();
    if (first) { if (st.phase === 'open' || st.phase === 'paused') routeAfterOpen(); else { show('s-wait'); renderWait(); } return; }
    routeIfWaiting();
    var modeChanged = S.lastMode !== undefined && S.lastMode !== st.mode; S.lastMode = st.mode;
    if (modeChanged && (S.screen === 'archive' || S.screen === 'brief') && st.phase !== 'lobby') { routeAfterOpen(); return; }
    if (S.screen === 'archive') renderArchive(); else if (S.screen === 'brief' && st.mode !== 'free' && st.case && st.case !== S.caseId && MF.playable(st.case)) renderBrief(st.case);
  }
  function routeIfWaiting() { if (S.screen === 'wait' && S.st && (S.st.phase === 'open')) routeAfterOpen(); }
  function routeAfterOpen() {
    var st = S.st || {}; if (PREVIEW) { show('s-archive'); renderArchive(); return; }
    if (st.mode === 'free' || !st.case || !MF.playable(st.case)) { show('s-archive'); renderArchive(); } else { show('s-brief'); renderBrief(st.case); }
  }
  function applyLive() {                           // settings the teacher may change while playing
    if (!S.world || !S.st) return; S.world.setScare(effScare());
  }
  var effScare = function () { var st = S.st || {}, d = MF.DIFFICULTY[st.diff || 'standard']; var want = st.scare == null ? d.scare : st.scare; return Math.max(0, Math.min(want, S.scarePref)); };

  /* ------------------------------------------------------------------ the gate: is the student allowed to play right now? */
  function computeGate() {
    if (PREVIEW || !S.joined) return null;
    if (Date.now() - S.lastPing > LOST_AFTER) return 'lost';
    var ph = S.st && S.st.phase; if (S.ended || ph === 'closed') return 'closed'; if (ph === 'paused') return 'paused';
    if (ph === 'lobby' && S.screen === 'game') return 'paused'; return null;
  }
  function applyGate() {
    var g = computeGate(); if (g === S.gate) return; var was = S.gate; S.gate = g; renderLock();
    if (g) { if (S.world) { S.world.setPaused(true); S.world.unlock(); } MF.Sfx.ambient(false); saveNow(); sendProg(true); }
    else if (was) { if (S.screen === 'game') showOverlay('pause'); routeIfWaiting(); }
  }
  function renderLock() {
    var el = $('lock'); if (!S.gate) { el.hidden = true; return; }
    var T = { lost: ['📡', X('Connection lost', 'Sambungan terputus'), X('We cannot reach your teacher. Please wait — the game will continue by itself. Your progress is saved.', 'Kami tidak dapat menghubungi guru anda. Sila tunggu — permainan akan bersambung sendiri. Kemajuan anda disimpan.')],
      closed: ['🔒', X('The game is closed', 'Permainan ditutup'), X('Your teacher has ended the session. Your progress is saved on this computer.', 'Guru anda telah menamatkan sesi. Kemajuan anda disimpan pada komputer ini.')],
      paused: ['⏸️', X('Paused by your teacher', 'Dijeda oleh guru anda'), X('Please look at your teacher. The game will continue soon.', 'Sila pandang guru anda. Permainan akan bersambung sebentar lagi.')] }[S.gate];
    el.hidden = false; el.innerHTML = '<div class="em">' + T[0] + '</div><h1 class="logo" style="font-size:2.2em">' + T[1] + '</h1><p class="big-p" style="max-width:560px">' + T[2] + '</p>' + (S.gate === 'lost' ? '<div class="spinner"></div>' : '');
  }
  setInterval(function () { applyGate(); }, 1000);                    // heartbeat watchdog

  /* ---------------- waiting room ---------------- */
  function renderWait() {
    var el = $('s-wait'); el.innerHTML = '<h1 class="logo">THE MIDNIGHT FILES</h1><div class="card center" style="margin-top:20px"><div class="spinner"></div><h2>' + X('Connected!', 'Berjaya disambung!') + '</h2><p class="big-p">' + X('Hello', 'Hai') + ', <b>' + E(S.name) + '</b>! ' + X('Waiting for your teacher to open the game…', 'Menunggu guru anda membuka permainan…') + '</p><div id="w-msg" class="tip"></div>' + langButtons() + '</div>';
    bindLang(el);
  }

  /* ---------------- case archive ---------------- */
  function bestStars(id) { var s = MF.store.get(saveKey(id)); return s && s.ending ? s.ending.stars : null; }
  function renderArchive() {
    var el = $('s-archive'), st = S.st || {}, allowed = st.cases || MF.ARCHIVE.filter(function (c) { return c.ready; }).map(function (c) { return c.id; });
    var cards = MF.ARCHIVE.map(function (c) {
      var ok = MF.playable(c.id) && allowed.indexOf(c.id) >= 0, bs = ok ? bestStars(c.id) : null, saved = ok && MF.store.get(saveKey(c.id));
      return '<button class="case-card ' + (ok ? 'open' : 'locked') + '" data-id="' + c.id + '" ' + (ok ? '' : 'disabled') + '><span class="case-num">' + c.id + '</span><h3>' + MF.t(c.title) + '</h3><p>' + MF.t(c.tag) + '</p>' +
        '<span class="case-tag">' + (ok ? (saved && !saved.over ? '▶ ' + X('In progress', 'Sedang berjalan') : bs != null ? '✔ ' + X('Solved', 'Selesai') : X('Open', 'Dibuka')) : (MF.playable(c.id) ? '🔒 ' + X('Locked by teacher', 'Dikunci guru') : '🔒 ' + X('Coming soon', 'Akan datang'))) + '</span>' +
        (bs != null ? '<span class="stamp">' + '★'.repeat(bs) + '</span>' : '') + '</button>';
    }).join('');
    el.innerHTML = '<h1 class="logo" style="margin-top:6px">' + X('CASE ARCHIVE', 'ARKIB KES') + '<small>THE MIDNIGHT FILES</small></h1><p class="tip">' + (PREVIEW ? '👁 PREVIEW · ' : '') + '🕵️ <b>' + E(S.name || 'Preview') + '</b> · ' + X('Choose a case', 'Pilih satu kes') + '</p><div class="archive">' + cards + '</div><div style="margin-top:16px">' + langButtons() + '</div>';
    bindLang(el); el.querySelectorAll('.case-card.open').forEach(function (b) { b.onclick = function () { MF.Sfx.init(); MF.Sfx.play('click'); show('s-brief'); renderBrief(b.getAttribute('data-id')); }; });
  }

  /* ---------------- case briefing ---------------- */
  function makeCfg() {
    var st = S.st || {}, diff = st.diff || 'standard';
    return { diff: diff, scare: effScare(), subjects: st.subjects && st.subjects.length ? st.subjects : ['math', 'english', 'science', 'geography', 'thinking'], grade: st.grade || 'all', timerMin: st.timer == null ? undefined : st.timer, bank: st.bank || [] };
  }
  function renderBrief(id) {
    var C = MF.cases[id], el = $('s-brief'); S.caseId = id; if (!C) { show('s-archive'); renderArchive(); return; }
    var st = S.st || {}, cfg = makeCfg(), D = MF.DIFFICULTY[cfg.diff], saved = MF.store.get(saveKey(id)), canResume = saved && saved.v && !saved.over;
    var subj = cfg.subjects.map(function (s) { var m = MF.UI.SUBJ[s]; return m ? '<span class="chip" style="--kc:' + m.c + '">' + m.ic + ' ' + m.n() + '</span>' : ''; }).join(' ');
    var tmin = cfg.timerMin != null ? cfg.timerMin : D.timerMin;
    el.innerHTML = '<div class="card wide" style="margin-top:10px"><div class="case-label">CASE ' + C.id + '</div><h1 class="logo" style="font-size:2em;text-align:left">' + MF.t(C.title) + '</h1><p class="ins-where">📍 ' + MF.t(C.place) + '</p>' +
      '<p class="big-p">' + MF.t(C.premise) + '</p>' +
      '<div class="statrow" style="margin:.6em 0">' + '<span class="chip big" style="--kc:#60a5fa">🎚 ' + MF.t(D.label) + '</span>' + '<span class="chip big" style="--kc:#a855f7">👻 ' + X('Scare', 'Seram') + ': ' + MF.t(MF.SCARE[cfg.scare]) + '</span>' + '<span class="chip big" style="--kc:#f59e0b">⏱ ' + (tmin > 0 ? tmin + ' ' + X('min', 'min') : X('No timer', 'Tiada pemasa')) + '</span>' + (S.team ? '<span class="chip big" style="--kc:#34d399">🤝 ' + E(S.team.name) + '</span>' : '') + '</div>' +
      '<div style="margin:.4em 0">' + subj + '</div>' +
      '<div class="debrief"><h3>🎮 ' + X('Controls', 'Kawalan') + '</h3><div class="statrow" style="font-size:.95em"><span><kbd>W A S D</kbd> ' + X('move', 'bergerak') + '</span><span><kbd>Mouse</kbd> ' + X('look', 'melihat') + '</span><span><kbd>E</kbd> ' + X('look / talk', 'periksa / bual') + '</span><span><kbd>Shift</kbd> ' + X('run', 'lari') + '</span><span><kbd>Ctrl</kbd> / <kbd>C</kbd> ' + X('crouch', 'tunduk') + '</span><span><kbd>F</kbd> ' + X('flashlight', 'lampu suluh') + '</span><span><kbd>Tab</kbd> ' + X('notebook', 'buku nota') + '</span><span><kbd>Esc</kbd> ' + X('pause', 'jeda') + '</span></div></div>' +
      '<div id="b-err"></div><div class="t-ctrl">' + (canResume ? '<button class="btn primary big" id="b-resume">⏩ ' + X('Continue', 'Sambung') + '</button><button class="btn ghost" id="b-new">↺ ' + X('Start again', 'Mula semula') + '</button>' : '<button class="btn primary big" id="b-start">▶ ' + X('Start the case', 'Mulakan kes') + '</button>') + ((st.mode === 'free' || PREVIEW) ? '<button class="btn ghost" id="b-back">◀ ' + X('Archive', 'Arkib') + '</button>' : '') + '</div>' + langButtons() + '</div>';
    bindLang(el);
    var go = function (resume) { MF.Sfx.init(); startCase(id, resume); };
    if ($('b-start')) $('b-start').onclick = function () { go(false); }; if ($('b-resume')) $('b-resume').onclick = function () { go(true); };
    if ($('b-new')) $('b-new').onclick = function () { MF.store.del(saveKey(id)); renderBrief(id); };
    if ($('b-back')) $('b-back').onclick = function () { show('s-archive'); renderArchive(); };
  }

  /* ------------------------------------------------------------------ starting the game */
  function startCase(id, resume) {
    var C = MF.cases[id]; if (!C) return;
    var v = MF.validateCase(C);                                   // the fairness checker blocks illogical cases
    if (!v.ok) { $('b-err').innerHTML = '<div class="cmp-result bad" style="color:#222"><b>⛔ ' + X('This case is blocked by the checker:', 'Kes ini disekat oleh pemeriksa:') + '</b><ul>' + v.errors.map(function (e) { return '<li>' + E(e) + '</li>'; }).join('') + '</ul></div>'; return; }
    if (S.game) endGame(true);
    var cfg = makeCfg(); show('game');
    try {
      S.game = new MF.Game({ C: C, cfg: cfg, key: saveKey(id) });
      var loaded = resume && S.game.load(); if (!loaded) S.game.reset();
      S.world = new MF.World({ canvas: $('cv'), caseData: C, low: S.low, scare: cfg.scare, sens: S.sens });
    } catch (e) { console.error(e); show('s-brief'); $('b-err').innerHTML = '<div class="cmp-result bad" style="color:#222">⛔ 3D / WebGL: ' + E(e.message) + '<br>' + X('Please use Google Chrome and turn on hardware acceleration.', 'Sila guna Google Chrome dan hidupkan pecutan perkakasan.') + '</div>'; return; }
    if (loaded && S.game.S.pos) S.world.setState(S.game.S.pos);
    S.caseId = id; wireGame(); S.world.start(); S.world.setPaused(true);
    if (S.pendingShare.length) { S.pendingShare.splice(0).forEach(onShare); }
    if (S.game.S.over) { var r = S.game.lastResult(); if (r) { showOverlay('none'); UI().showEnding(r); return; } }
    showOverlay('start'); sendProg(true);
  }
  function wireGame() {
    var g = S.game, w = S.world, U = UI();
    U.init({ game: g, world: w, root: $('hud'), cfg: makeCfg(), hooks: {
      teacherPaused: function () { return !!S.gate; },
      onModalChange: function (open) {
        if (open) { $('ov').innerHTML = ''; return; }
        if (S.gate || !S.world || S.finishing) return;
        try { S.world.lock(); } catch (e) { /* needs a click */ }
        setTimeout(function () { if (S.world && !S.world.locked && !U.stack.length && !S.gate && !g.S.over && !$('ov').innerHTML) showOverlay('pause'); }, 250);
      },
      onEnding: function () { sendProg(true); },
      onFinish: function () { finishCase(); }
    } });
    w.on('target', function (t) { U.setTarget(t); });
    w.on('interact', onInteract);
    w.on('notebook', function () {
      var a = document.activeElement; if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) && U.stack.length) return;
      if (S.gate || g.S.over) return; if (U.isOpen('notebook')) { U.top().close(); return; } if (!U.stack.length) U.openNotebook();
    });
    w.on('lock', function (locked) { if (locked) { $('ov').innerHTML = ''; MF.Sfx.ambient(true); } else { MF.Sfx.ambient(false); if (!U.stack.length && !S.gate && !g.S.over && !S.finishing) showOverlay('pause'); } });
    w.on('room', function (r) { if (r) { g.S.rooms[r.id] = 1; U.updateHud(r.name); } });
    w.on('reveal', function (txt) { U.toast('😮 ' + MF.t(txt), 'warn', 5500); });
    w.on('flash', function (on) { var f = $('flashfx'); f.classList.toggle('on', false); document.getElementById('h-fl').style.opacity = on ? 1 : 0.35; });
    w.on('slow', function (fps) { if (!S.low) { setLow(true); U.toast('🐢 ' + X('Your computer is slow, so Low graphics was turned on.', 'Komputer anda perlahan, jadi Grafik rendah dihidupkan.'), 'warn', 6000); S.autoLow = true; } });
    g.on('timeup', function () { if (!g.S.over && !U.isOpen('timeup') && !U.isOpen('conclusion')) U.openTimeUp(); });
    g.on('found', function (it, via) { if (S.st && S.st.mode === 'teams' && !S.applyingShare && !/^team/.test(via || '')) send({ t: 'share', sid: S.sid, kind: 'item', id: it.id }); });
    g.on('flag', function (f) { if (S.st && S.st.mode === 'teams' && !S.applyingShare) send({ t: 'share', sid: S.sid, kind: 'flag', id: f }); });
    g.on('puzzle', function (pid, fromTeam) { if (S.st && S.st.mode === 'teams' && !fromTeam) send({ t: 'share', sid: S.sid, kind: 'pz', id: pid }); });
    g.on('solved', function () { sendProg(true); }); g.on('puzzle', function () { sendProg(true); });
    g.on('ending', function () { saveNow(); });
    document.body.classList.toggle('lowfx', S.low); U.updateHud(w.currentRoom ? w.currentRoom.name : undefined);
    if (S.tickT) clearInterval(S.tickT); S.tickN = 0;
    S.tickT = setInterval(tick, 250);
  }
  function tick() {
    var g = S.game, w = S.world; if (!g || !w) return; var U = UI();
    if (!g.S.over && w.locked && !w.paused && !U.stack.length && !S.gate) g.tick(0.25);
    U.updateHud(); w.setClock(g.clockMin());
    if (++S.tickN % 40 === 0) { g.S.pos = w.getState(); g.save(); }
    if (S.tickN % 20 === 0) sendProg(false);
  }
  function saveNow() { if (S.game && S.world) { try { S.game.S.pos = S.world.getState(); } catch (e) { /* ignore */ } S.game.save(); } }

  function onInteract(t) {
    var g = S.game, U = UI(); if (S.gate || U.stack.length) return;
    if (t.npc) return U.openDialogue(t.npc);
    if (t.item) return U.openItem(t.item);
    if (t.text === 'CLOCK') { var tm = MF.fmtTime(g.clockMin()); return U.openText(t.label, { en: 'The wall clock says ' + tm + '. (Remember: the camera clock may be different!)', bm: 'Jam dinding menunjukkan ' + tm + '. (Ingat: jam kamera mungkin berbeza!)' }); }
    if (t.text) return U.openText(t.label, t.text);
  }

  /* ------------------------------------------------------------------ team sharing */
  function onShare(m) {
    if (!S.game) { S.pendingShare.push(m); return; }
    var g = S.game; S.applyingShare = true;
    try {
      if (m.kind === 'item') { if (g.give(m.id, 'team')) { g.S.shared[m.id] = m.from; var it = g.item(m.id); if (it) UI().toast('🤝 <b>' + E(m.from || '') + '</b> ' + X('shared a clue:', 'berkongsi petunjuk:') + ' ' + MF.t(it.title), 'ev'); } }
      else if (m.kind === 'flag') g.setFlag(m.id); else if (m.kind === 'pz') g.completePuzzle(m.id, true);
    } catch (e) { console.error(e); }
    S.applyingShare = false;
  }

  /* ------------------------------------------------------------------ overlays: start / pause / settings */
  function showOverlay(mode) {
    var ov = $('ov'), U = UI(); ov.innerHTML = ''; if (mode === 'none' || S.gate || !S.world) return;
    if (U.stack.length) return; var box = document.createElement('div'); box.className = 'overlay'; ov.appendChild(box);
    var resume = function () { MF.Sfx.init(); MF.Sfx.resume(); ov.innerHTML = ''; S.world.setPaused(false); S.world.setFrozen(false); S.world.lock(); MF.Sfx.ambient(true); };
    if (mode === 'start') {
      var C = S.game.C; box.innerHTML = '<h1 class="logo" style="font-size:2.4em">' + MF.t(C.title) + '</h1><p class="big-p" style="max-width:640px">' + MF.t(C.tagline) + '</p><div class="menu-col"><button class="btn primary big" id="o-go">🖱️ ' + X('Click to start', 'Klik untuk mula') + '</button></div><p class="tip">' + X('Tip: press Esc to pause. Press Tab to open your notebook.', 'Petua: tekan Esc untuk jeda. Tekan Tab untuk membuka buku nota.') + '</p>';
      $('o-go').onclick = function () { S.world.setPaused(false); resume(); UI().toast('🎯 ' + X('Look around. Press E on things that glow!', 'Lihat sekeliling. Tekan E pada benda yang menarik!'), 'ev', 6000); };
      return;
    }
    // pause menu
    var st = S.st || {};
    box.innerHTML = '<h2>⏸ ' + X('Paused', 'Dijeda') + '</h2><div class="menu-col"><button class="btn primary big" id="o-go">▶ ' + X('Continue', 'Teruskan') + '</button><button class="btn accent" id="o-nb">📓 ' + X('Notebook', 'Buku nota') + '</button><button class="btn ghost" id="o-set">⚙ ' + X('Settings', 'Tetapan') + '</button>' + ((st.mode === 'free' || PREVIEW) ? '<button class="btn ghost" id="o-exit">🚪 ' + X('Leave the case', 'Keluar dari kes') + '</button>' : '') + '</div>';
    $('o-go').onclick = resume; $('o-nb').onclick = function () { ov.innerHTML = ''; S.world.setPaused(false); U.openNotebook(); };
    $('o-set').onclick = function () { showSettings(box); }; if ($('o-exit')) $('o-exit').onclick = function () { if (confirmLeave()) finishCase(); };
  }
  function confirmLeave() { return window.confirm(MF.tp({ en: 'Leave this case? Your progress is saved.', bm: 'Keluar dari kes ini? Kemajuan anda disimpan.' })); }
  function showSettings(box) {
    var st = S.st || {}, d = MF.DIFFICULTY[st.diff || 'standard'], cap = st.scare == null ? d.scare : st.scare;
    box.innerHTML = '<h2>⚙ ' + X('Settings', 'Tetapan') + '</h2><div class="card" style="text-align:left">' +
      '<div class="set-row"><b>🌐 ' + X('Language', 'Bahasa') + '</b>' + langButtons() + '</div>' +
      '<div class="set-row"><b>🖱️ ' + X('Mouse speed', 'Kelajuan tetikus') + '</b><input type="range" id="s-sens" min="0.0008" max="0.005" step="0.0002" value="' + S.sens + '"></div>' +
      '<div class="set-row"><b>🔊 ' + X('Volume', 'Kelantangan') + '</b><input type="range" id="s-vol" min="0" max="1" step="0.05" value="' + S.vol + '"></div>' +
      '<div class="set-row"><b>🖥️ ' + X('Low graphics', 'Grafik rendah') + '</b><button class="btn ghost small ' + (S.low ? 'on' : '') + '" id="s-low">' + (S.low ? '✔ ON' : 'OFF') + '</button></div>' +
      '<div class="set-row"><b>👻 ' + X('Scary moments', 'Detik seram') + '</b><div class="seg" id="s-scare">' + MF.SCARE.map(function (x, i) { return '<button class="btn ghost small ' + (effScare() === i ? 'on' : '') + '" data-n="' + i + '" ' + (i > cap ? 'disabled' : '') + '>' + MF.t(x) + '</button>'; }).join('') + '</div></div></div><button class="btn primary" id="s-back">◀ ' + X('Back', 'Kembali') + '</button>';
    bindLang(box); box.querySelectorAll('[data-lang]').forEach(function (b) { var f = b.onclick; b.onclick = function () { f(); showSettings(box); }; });
    $('s-sens').oninput = function () { S.sens = parseFloat(this.value); S.world.sens = S.sens; MF.store.set('mf.sens', S.sens); };
    $('s-vol').oninput = function () { S.vol = parseFloat(this.value); MF.Sfx.setVolume(S.vol); MF.store.set('mf.vol', S.vol); };
    $('s-low').onclick = function () { setLow(!S.low); showSettings(box); };
    box.querySelectorAll('#s-scare [data-n]').forEach(function (b) { b.onclick = function () { S.scarePref = parseInt(b.getAttribute('data-n'), 10); MF.store.set('mf.scare', S.scarePref); S.world.setScare(effScare()); showSettings(box); }; });
    $('s-back').onclick = function () { showOverlay('pause'); };
  }
  function setLow(on) { S.low = !!on; MF.store.set('mf.low', S.low); if (S.world) S.world.setLow(S.low); if (MF.UI.insp) MF.UI.insp.low = S.low; document.body.classList.toggle('lowfx', S.low); }

  /* ------------------------------------------------------------------ leaving a case */
  function endGame(silent) {
    clearInterval(S.tickT); S.tickT = null; saveNow(); UI().closeAll();
    if (S.world) { try { S.world.dispose(); } catch (e) { /* ignore */ } S.world = null; }
    if (MF.UI.insp) { try { MF.UI.insp.dispose(); } catch (e) { /* ignore */ } MF.UI.insp = null; MF.UI._inspCanvas = null; }
    MF.Sfx.ambient(false); S.game = null; $('ov').innerHTML = '';
  }
  function finishCase() {
    S.finishing = true; sendProg(true); endGame(); S.finishing = false; var st = S.st || {};
    if (PREVIEW || st.mode === 'free') { show('s-archive'); renderArchive(); }
    else { show('s-wait'); renderWait(); $('s-wait').querySelector('h2').textContent = MF.tp({ en: '🎉 Case finished!', bm: '🎉 Kes selesai!' }); }
  }
  function resetMine() { if (S.game) endGame(); S.pendingShare = []; ['009'].forEach(function (id) { MF.store.del(saveKey(id)); }); show('s-wait'); renderWait(); }

  window.addEventListener('beforeunload', function () { saveNow(); if (S.link) { try { send({ t: 'bye', sid: S.sid }); } catch (e) { /* ignore */ } } });
  window.addEventListener('keydown', function (e) { if (e.code === 'Tab' && S.screen === 'game') e.preventDefault(); }, true);

  /* ------------------------------------------------------------------ start */
  if (PREVIEW) {
    S.name = 'Preview'; S.joined = true; S.lastPing = Date.now() + 1e12;
    S.st = { phase: 'open', mode: 'free', diff: P.get('diff') || 'standard', scare: P.get('scare') != null ? parseInt(P.get('scare'), 10) : null, subjects: null, grade: 'all', cases: null, timer: P.get('timer') != null ? parseInt(P.get('timer'), 10) : null, bank: [] };
    show('s-archive'); renderArchive();
  } else renderJoin();
  if (P.get('c') && !PREVIEW) { /* the link carries the room code; students only need to type a name */ }
  window.MF_student = S;                                                    // handy for tests
})();
