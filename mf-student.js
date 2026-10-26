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

  MF.lang = 'en';   // default English only; the teacher's Language setting decides (BM + EN is for Bahasa lessons)
  var S = { name: '', code: '', link: null, st: null, lastPing: 0, joined: false, screen: 'join', game: null, world: null, uiOn: false, caseId: null,
    low: MF.store.get('mf.low', false), sens: MF.store.get('mf.sens', 0.0022), vol: MF.store.get('mf.vol', 0.55), scarePref: MF.store.get('mf.scare', 2),
    gate: null, ended: false, team: null, rev: -1, pendingShare: [], applyingShare: false, lastProg: 0, autoLow: false, sid: '' };
  try { S.sid = sessionStorage.getItem('mf.sid') || ('s' + Math.random().toString(36).slice(2, 9)); sessionStorage.setItem('mf.sid', S.sid); } catch (e) { S.sid = 's' + Math.random().toString(36).slice(2, 9); }
  MF.Sfx.setVolume(S.vol); if (MF.Music) MF.Music.setVolume(S.vol);

  var slug = function (s) { return String(s || 'x').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 24); };
  var saveKey = function (id) { return 'mf.save.' + (PREVIEW ? 'preview' : slug(S.name)) + '.' + id; };

  /* ------------------------------------------------------------------ screens */
  function show(id) {
    ['s-join', 's-wait', 's-archive', 's-brief'].forEach(function (i) { $(i).hidden = (i !== id); }); $('game').hidden = (id !== 'game'); $('helpbtn').hidden = (id === 'game'); S.screen = id.replace(/^s-/, ''); if (id !== 'game' && MF.Music) MF.Music.set('menu');
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
    else if (m.t === 'rank') onRank(m.ranks || []);
    else if (m.t === 'vote') onVote(m);
    else if (m.t === 'voteWait') onVoteWait(m);
    else if (m.t === 'voteEnd') onVoteEnd(m);
    else if (m.t === 'teamGo') onTeamGo(m);
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
    if (first) { S.joined = true; clearTimeout(S.joinTimer); S.lastPing = Date.now(); }
    if (st.lang && st.lang !== S.lastLang) { S.lastLang = st.lang; MF.lang = st.lang; MF.store.set('mf.lang', st.lang); if (!first) rerender(); }   // teacher's language choice always applies when it changes
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
    if (g) { if (S.world) { S.world.setPaused(true); S.world.unlock(); } ambientOff(); if (MF.Music) MF.Music.hold(true); saveNow(); sendProg(true); }
    else if (was) { if (MF.Music) MF.Music.hold(false); if (S.screen === 'game') showOverlay('pause'); routeIfWaiting(); }
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
      '<div class="debrief"><h3>🎮 ' + X('Controls', 'Kawalan') + '</h3><div class="statrow" style="font-size:.95em"><span><kbd>W A S D</kbd> ' + X('move', 'bergerak') + '</span><span><kbd>Mouse</kbd> ' + X('look', 'melihat') + '</span><span><kbd>E</kbd> ' + X('look / talk', 'periksa / bual') + '</span><span><kbd>Shift</kbd> ' + X('run', 'lari') + '</span><span><kbd>Ctrl</kbd> / <kbd>C</kbd> ' + X('crouch', 'tunduk') + '</span><span><kbd>F</kbd> ' + X('flashlight', 'lampu suluh') + '</span><span><kbd>Tab</kbd> ' + X('notebook', 'buku nota') + '</span><span><kbd>H</kbd> ' + X('help', 'bantuan') + '</span><span><kbd>Esc</kbd> ' + X('pause', 'jeda') + '</span></div><p class="tip">🏆 ' + (st.mode === 'teams' ? X('The FIRST team to solve the case wins! Your whole team must vote YES to accuse.', 'Pasukan PERTAMA yang menyelesaikan kes menang! Seluruh pasukan mesti mengundi YA untuk menuduh.') : st.mode === 'solo' ? X('The FIRST player to solve the case wins!', 'Pemain PERTAMA yang menyelesaikan kes menang!') : '') + ' ❄️ ' + X('A wrong accusation freezes you for 60 seconds.', 'Tuduhan salah membekukan anda selama 60 saat.') + ' <a href="#" id="b-help">❓ ' + X('How to play', 'Cara bermain') + '</a></p></div>' +
      '<div id="b-err"></div><div class="t-ctrl">' + (canResume ? '<button class="btn primary big" id="b-resume">⏩ ' + X('Continue', 'Sambung') + '</button><button class="btn ghost" id="b-new">↺ ' + X('Start again', 'Mula semula') + '</button>' : '<button class="btn primary big" id="b-start">▶ ' + X('Start the case', 'Mulakan kes') + '</button>') + ((st.mode === 'free' || PREVIEW) ? '<button class="btn ghost" id="b-back">◀ ' + X('Archive', 'Arkib') + '</button>' : '') + '</div>' + langButtons() + '</div>';
    bindLang(el);
    var go = function (resume) { MF.Sfx.init(); startCase(id, resume); };
    if ($('b-start')) $('b-start').onclick = function () { go(false); }; if ($('b-resume')) $('b-resume').onclick = function () { go(true); };
    if ($('b-new')) $('b-new').onclick = function () { MF.store.del(saveKey(id)); renderBrief(id); };
    $('b-help').onclick = function (e) { e.preventDefault(); openHelp(); };
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
        if (S.gate || !S.world || S.finishing || frozenLeft() > 0) return;     // frozen players stay still
        try { S.world.lock(); } catch (e) { /* needs a click */ }
        setTimeout(function () { if (S.world && !S.world.locked && !U.stack.length && !S.gate && !g.S.over && !$('ov').innerHTML) showOverlay('pause'); }, 250);
      },
      onEnding: function () { sendProg(true); },
      isRace: isRace, frozenLeft: frozenLeft, beforeAccuse: beforeAccuse, onAccused: onAccused,
      placeHtml: function () { return '<div id="place-badge"></div>'; },
      onFinish: function () { finishCase(); }
    } });
    w.on('target', function (t) { U.setTarget(t); });
    w.on('interact', onInteract);
    w.on('notebook', function () {
      var a = document.activeElement; if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) && U.stack.length) return;
      if (S.gate || g.S.over) return; if (U.isOpen('notebook')) { U.top().close(); return; } if (!U.stack.length) U.openNotebook();
    });
    w.on('lock', function (locked) { if (locked) { $('ov').innerHTML = ''; ambientOn(); } else { ambientOff(); if (!U.stack.length && !S.gate && !g.S.over && !S.finishing) showOverlay('pause'); } });
    w.on('room', function (r) { if (r) { g.S.rooms[r.id] = 1; U.updateHud(r.name); } });
    w.on('fx', function (kind) { var f = $('scarefx'); if (!f) return; f.className = ''; void f.offsetWidth; f.className = 'go ' + kind; });
    var openGates = function () { Object.keys(g.S.flags || {}).forEach(function (fl) { if (g.S.flags[fl]) w.openGate(fl); }); }; openGates();
    g.on('flag', function (fl) { w.openGate(fl); });
    g.on('ending', function () { if (MF.Music) { S.musicMode = 'menu'; MF.Music.set('menu'); } });
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
    var fz = frozenLeft();
    if (!g.S.over && !S.gate && (fz > 0 || (w.locked && !w.paused && !U.stack.length))) g.tick(0.25);   // a freeze does NOT stop the case timer
    drawFreeze(fz);
    U.updateHud(); w.setClock(g.clockMin());
    if (S.tickN % 4 === 3 && MF.Music && !S.gate && !g.S.over) {                       // once a second: switch music if needed
      var want = (U.isOpen('conclusion') || (w.locked && !w.paused)) ? wantMusic() : null;
      if (want && want !== S.musicMode) { S.musicMode = want; MF.Music.set(want); }
    }
    if (++S.tickN % 40 === 0) { g.S.pos = w.getState(); g.save(); }
    if (S.tickN % 20 === 0) sendProg(false);
  }
  function saveNow() { if (S.game && S.world) { try { S.game.S.pos = S.world.getState(); } catch (e) { /* ignore */ } S.game.save(); } }

  function onInteract(t) {
    var g = S.game, U = UI(); if (S.gate || U.stack.length) return;
    if (t.needsFlag && !g.flag(t.needsFlag)) return U.openText(t.label, t.lockedText || { en: 'It is locked or stuck. You need to find out how to open it.', bm: 'Ia dikunci atau tersekat. Anda perlu cari cara untuk membukanya.' });
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
    var resume = function () { MF.Sfx.init(); MF.Sfx.resume(); ov.innerHTML = ''; S.world.setPaused(false); S.world.setFrozen(false); S.world.lock(); ambientOn(); };
    if (mode === 'start') {
      var C = S.game.C; box.innerHTML = '<h1 class="logo" style="font-size:2.4em">' + MF.t(C.title) + '</h1><p class="big-p" style="max-width:640px">' + MF.t(C.tagline) + '</p><div class="menu-col"><button class="btn primary big" id="o-go">🖱️ ' + X('Click to start', 'Klik untuk mula') + '</button></div><p class="tip">' + X('Tip: press Esc to pause. Press Tab to open your notebook.', 'Petua: tekan Esc untuk jeda. Tekan Tab untuk membuka buku nota.') + '</p>';
      $('o-go').onclick = function () { S.world.setPaused(false); resume(); UI().toast('🎯 ' + X('Look around. Press E on things that glow!', 'Lihat sekeliling. Tekan E pada benda yang menarik!'), 'ev', 6000); };
      return;
    }
    // pause menu
    var st = S.st || {};
    box.innerHTML = '<h2>⏸ ' + X('Paused', 'Dijeda') + '</h2><div class="menu-col"><button class="btn primary big" id="o-go">▶ ' + X('Continue', 'Teruskan') + '</button><button class="btn accent" id="o-nb">📓 ' + X('Notebook', 'Buku nota') + '</button><button class="btn ghost" id="o-set">⚙ ' + X('Settings', 'Tetapan') + '</button><button class="btn ghost" id="o-help">❓ ' + X('How to play', 'Cara bermain') + '</button>' + ((st.mode === 'free' || PREVIEW) ? '<button class="btn ghost" id="o-exit">🚪 ' + X('Leave the case', 'Keluar dari kes') + '</button>' : '') + '</div>';
    $('o-go').onclick = resume; $('o-nb').onclick = function () { ov.innerHTML = ''; S.world.setPaused(false); U.openNotebook(); };
    $('o-set').onclick = function () { showSettings(box); }; $('o-help').onclick = function () { ov.innerHTML = ''; openHelp(); }; if ($('o-exit')) $('o-exit').onclick = function () { if (confirmLeave()) finishCase(); };
  }
  function confirmLeave() { return window.confirm(MF.tp({ en: 'Leave this case? Your progress is saved.', bm: 'Keluar dari kes ini? Kemajuan anda disimpan.' })); }
  function showSettings(box) {
    var st = S.st || {}, d = MF.DIFFICULTY[st.diff || 'standard'], cap = st.scare == null ? d.scare : st.scare;
    box.innerHTML = '<h2>⚙ ' + X('Settings', 'Tetapan') + '</h2><div class="card" style="text-align:left">' +
      '<div class="set-row"><b>🌐 ' + X('Language', 'Bahasa') + '</b>' + langButtons() + '</div>' +
      '<div class="set-row"><b>🖱️ ' + X('Mouse speed', 'Kelajuan tetikus') + '</b><input type="range" id="s-sens" min="0.0008" max="0.005" step="0.0002" value="' + S.sens + '"></div>' +
      '<div class="set-row"><b>🔊 ' + X('Volume', 'Kelantangan') + '</b><input type="range" id="s-vol" min="0" max="1" step="0.05" value="' + S.vol + '"></div>' +
      '<div class="set-row"><b>🎵 ' + X('Music', 'Muzik') + '</b><button class="btn ghost small ' + (MF.Music && MF.Music.on ? 'on' : '') + '" id="s-mus">' + (MF.Music && MF.Music.on ? '✔ ON' : 'OFF') + '</button></div>' +
      '<div class="set-row"><b>🖥️ ' + X('Low graphics', 'Grafik rendah') + '</b><button class="btn ghost small ' + (S.low ? 'on' : '') + '" id="s-low">' + (S.low ? '✔ ON' : 'OFF') + '</button></div>' +
      '<div class="set-row"><b>👻 ' + X('Scary moments', 'Detik seram') + '</b><div class="seg" id="s-scare">' + MF.SCARE.map(function (x, i) { return '<button class="btn ghost small ' + (effScare() === i ? 'on' : '') + '" data-n="' + i + '" ' + (i > cap ? 'disabled' : '') + '>' + MF.t(x) + '</button>'; }).join('') + '</div></div></div><button class="btn primary" id="s-back">◀ ' + X('Back', 'Kembali') + '</button>';
    bindLang(box); box.querySelectorAll('[data-lang]').forEach(function (b) { var f = b.onclick; b.onclick = function () { f(); showSettings(box); }; });
    $('s-sens').oninput = function () { S.sens = parseFloat(this.value); S.world.sens = S.sens; MF.store.set('mf.sens', S.sens); };
    $('s-vol').oninput = function () { S.vol = parseFloat(this.value); MF.Sfx.setVolume(S.vol); if (MF.Music) MF.Music.setVolume(S.vol); MF.store.set('mf.vol', S.vol); };
    $('s-low').onclick = function () { setLow(!S.low); showSettings(box); };
    $('s-mus').onclick = function () { MF.Music.setOn(!MF.Music.on); showSettings(box); };
    box.querySelectorAll('#s-scare [data-n]').forEach(function (b) { b.onclick = function () { S.scarePref = parseInt(b.getAttribute('data-n'), 10); MF.store.set('mf.scare', S.scarePref); S.world.setScare(effScare()); showSettings(box); }; });
    $('s-back').onclick = function () { showOverlay('pause'); };
  }
  /* ---- music + ambience follow what the student is doing ---- */
  function wantMusic() {
    var g = S.game, U = UI(); if (!g) return 'menu';
    if (U && U.isOpen && U.isOpen('conclusion')) return 'tense';
    var tl = g.timeLeft(); if (tl !== null && g.limit() > 0 && tl < g.limit() * 0.2) return 'tense';   // last 20% of the time
    return 'explore';
  }
  function ambientOn() { MF.Sfx.ambient(true); if (MF.Music) { S.musicMode = wantMusic(); MF.Music.set(S.musicMode); } }
  function ambientOff() { MF.Sfx.ambient(false); if (MF.Music) { S.musicMode = 'menu'; MF.Music.set('menu'); } }
  function setLow(on) { S.low = !!on; MF.store.set('mf.low', S.low); if (S.world) S.world.setLow(S.low); if (MF.UI.insp) MF.UI.insp.low = S.low; document.body.classList.toggle('lowfx', S.low); }


  /* ==================================================================== RACE: the first to solve the case wins
     Solo  : the first STUDENT who names the right culprit with enough proof wins. Others go on for 2nd, 3rd...
     Teams : the first TEAM wins. A team accusation needs a YES vote from every team-mate who is online.
     Wrong : a wrong (or badly proved) accusation freezes the player / whole team for 60 seconds.
     Safety checks: a win is reported only once per game; the teacher page decides the places (no cheating
     by two players claiming 1st); votes time out on the teacher page; the freeze is saved with the game. */
  var FREEZE_SECS = 60;
  function isRace() { var st = S.st || {}; return !PREVIEW && (st.mode === 'solo' || st.mode === 'teams'); }
  function inTeam() { return !!(S.st && S.st.mode === 'teams' && S.team && S.team.members && S.team.members.length > 1); }
  function myKey() { return (S.st && S.st.mode === 'teams' && S.team) ? 'T:' + S.team.name : 'S:' + S.sid; }
  function frozenLeft() { var g = S.game; if (!g || !g.S.frozenUntil || g.S.over) return 0; return Math.max(0, Math.ceil((g.S.frozenUntil - Date.now()) / 1000)); }
  function drawFreeze(left) {
    var f = $('freeze'); if (!f) return;
    if (left > 0 && !S.gate) {
      if (S.world && !UI().stack.length && (S.world.locked || !S.world.paused)) { S.world.unlock(); S.world.setPaused(true); $('ov').innerHTML = ''; }
      if (f.hidden) {
        f.hidden = false;
        f.innerHTML = '<div class="em">❄️</div><h1 class="logo" style="font-size:2.4em">' + X('FROZEN!', 'DIBEKUKAN!') + '</h1><div class="frz-n" id="frz-n"></div><p class="big-p">' + X('Wrong accusation. Use this time to think: which clue did you miss?', 'Tuduhan salah. Gunakan masa ini untuk berfikir: petunjuk mana yang anda terlepas?') + '</p><button class="btn accent" id="frz-nb">📓 ' + X('Read my notebook', 'Baca buku nota saya') + '</button>';
        $('frz-nb').onclick = function () { if (!UI().stack.length) UI().openNotebook(); };
      }
      $('frz-n').textContent = left;
    } else if (!f.hidden) { f.hidden = true; if (S.game && !S.game.S.over && !UI().stack.length) showOverlay('pause'); }
  }
  function onAccused(res) {
    var g = S.game; if (!g || !isRace()) return;
    var win = res.ending.stars >= 2 && res.r.ok.who;
    if (win) { if (!g.S.raceSent) { g.S.raceSent = true; g.save(); send({ t: 'solved', sid: S.sid, name: S.name, stars: res.ending.stars, end: res.ending.id, secs: Math.round(g.S.play) }); } }
    else { g.S.frozenUntil = Date.now() + FREEZE_SECS * 1000; g.save(); MF.Sfx.play('alarm'); }
    sendProg(true);
  }
  /* ---- places ---- */
  S.ranks = [];
  function placeName(n) { return n === 1 ? X('1st', 'Pertama') : n === 2 ? X('2nd', 'Kedua') : n === 3 ? X('3rd', 'Ketiga') : n + X('th', '');  }
  function onRank(list) {
    var before = S.ranks.length; S.ranks = list; fillPlace();
    if (list.length > before && S.game) {
      var newest = list[list.length - 1], mine = newest.key === myKey();
      if (!mine) { UI().toast((newest.place === 1 ? '🏆 ' : '🏁 ') + '<b>' + E(newest.label) + '</b> ' + X('solved the case — ', 'menyelesaikan kes — ') + placeName(newest.place) + '!' + (newest.place === 1 ? '<br>' + X('Keep going! 2nd and 3rd place are still open.', 'Teruskan! Tempat ke-2 dan ke-3 masih dibuka.') : ''), 'warn', 8000); MF.Sfx.play('page'); }
    }
  }
  function fillPlace() {
    var b = $('place-badge'); if (!b) return; var me = S.ranks.filter(function (r) { return r.key === myKey(); })[0];
    b.innerHTML = me ? '<div class="place-badge p' + Math.min(me.place, 4) + '">' + (me.place === 1 ? '🏆 ' : me.place === 2 ? '🥈 ' : me.place === 3 ? '🥉 ' : '🏁 ') + placeName(me.place) + ' ' + X('place!', 'tempat!') + (me.place === 1 ? ' ' + X('You solved it FIRST!', 'Anda menyelesaikannya PERTAMA!') : '') + '</div>' : '';
  }
  /* ---- team vote ---- */
  var vote = { wait: null, ask: null };
  function closeVoteBoxes() { if (vote.wait) { vote.wait.close(); vote.wait = null; } if (vote.ask) { vote.ask.close(); vote.ask = null; } }
  function nameOf(pid) { var g = S.game, p = g && g.C.people.filter(function (x) { return x.id === pid; })[0]; return p ? p.name : '?'; }
  function beforeAccuse(A, m) {
    if (!isRace() || !inTeam()) return false;
    m.close(); closeVoteBoxes();
    send({ t: 'propose', sid: S.sid, A: { who: A.who, what: A.what, when: A.when, where: A.where, picked: A.picked.slice() } });
    var w = vote.wait = UI().modal({ cls: 'small vote', title: '🗳️ ' + X('Team vote', 'Undian pasukan'), noClose: true, sticky: true });
    w.body.innerHTML = '<p class="big-p">' + X('You want to accuse', 'Anda mahu menuduh') + ' <b>' + E(nameOf(A.who)) + '</b>.<br>' + X('Waiting for your team-mates to vote…', 'Menunggu rakan sepasukan mengundi…') + '</p><p id="vote-n" class="tip"></p><div class="spinner"></div>';
    w.foot.appendChild(UI().btn(X('Cancel', 'Batal'), 'ghost', function () { send({ t: 'voteCancel', sid: S.sid }); closeVoteBoxes(); }));
    return true;
  }
  function onVoteWait(m) { var n = $('vote-n'); if (n) n.innerHTML = '✔ ' + m.yes + ' / ' + m.of + ' ' + X('voted YES', 'mengundi YA'); }
  function onVote(m) {
    if (!S.game || S.game.S.over) { send({ t: 'voteAns', sid: S.sid, id: m.id, yes: false, why: 'away' }); return; }
    closeVoteBoxes(); var U = UI();
    var a = vote.ask = U.modal({ cls: 'small vote', title: '🗳️ ' + X('Team vote', 'Undian pasukan'), noClose: true, sticky: true });
    a.body.innerHTML = '<p class="big-p"><b>' + E(m.by) + '</b> ' + X('wants your team to accuse', 'mahu pasukan anda menuduh') + ' <b>' + E(nameOf(m.who)) + '</b>.</p><p>' + X('Do you agree? If the answer is wrong, the WHOLE team is frozen for 60 seconds.', 'Adakah anda setuju? Jika jawapan salah, SELURUH pasukan dibekukan selama 60 saat.') + '</p>';
    var ans = function (yes) { send({ t: 'voteAns', sid: S.sid, id: m.id, yes: yes }); if (vote.ask) { vote.ask.close(); vote.ask = null; } if (yes) U.toast('🗳️ ' + X('You voted YES. Waiting for the others…', 'Anda mengundi YA. Menunggu yang lain…'), 'ev'); };
    a.foot.appendChild(U.btn('👎 ' + X('No, not yet', 'Tidak, belum lagi'), 'ghost', function () { ans(false); }));
    a.foot.appendChild(U.btn('👍 ' + X('Yes, accuse!', 'Ya, tuduh!'), 'danger', function () { ans(true); }));
    MF.Sfx.play('page');
  }
  function onVoteEnd(m) {
    closeVoteBoxes(); if (!S.game) return;
    UI().toast('🗳️ ' + (m.why === 'timeout' ? X('The vote timed out. Talk to your team and try again.', 'Masa undian tamat. Berbincang dengan pasukan dan cuba lagi.') : m.why === 'cancel' ? X('The accusation was cancelled.', 'Tuduhan dibatalkan.') : '<b>' + E(m.by || '') + '</b> ' + X('voted NO. Talk to your team!', 'mengundi TIDAK. Berbincang dengan pasukan anda!')), 'warn', 7000);
  }
  function onTeamGo(m) {
    var g = S.game; closeVoteBoxes(); if (!g || g.S.over || !m.A) return;
    UI().closeAll(); var res = g.accuse(m.A); UI().afterAccuse(res);
  }

  /* ==================================================================== HOW TO PLAY (help) */
  function helpHTML() {
    var st = S.st || {}, teams = st.mode === 'teams', race = isRace() || !S.joined;
    var li = function (ic, en, bm) { return '<li><span class="h-ic">' + ic + '</span><span>' + X(en, bm) + '</span></li>'; };
    return '<div class="help">' +
      '<section><h3>🎯 ' + X('Your mission', 'Misi anda') + '</h3><p>' + X('Find out WHO did it, HOW, WHEN — and PROVE it with evidence. Scary things happen, but every mystery has clues!', 'Cari SIAPA yang melakukannya, BAGAIMANA, BILA — dan BUKTIKAN dengan bukti. Perkara seram berlaku, tetapi setiap misteri ada petunjuk!') + '</p></section>' +
      '<section><h3>🎮 ' + X('Controls', 'Kawalan') + '</h3><div class="statrow"><span><kbd>W A S D</kbd> ' + X('move', 'bergerak') + '</span><span><kbd>Mouse</kbd> ' + X('look', 'lihat') + '</span><span><kbd>E</kbd> ' + X('look / talk', 'periksa / bual') + '</span><span><kbd>Shift</kbd> ' + X('run', 'lari') + '</span><span><kbd>F</kbd> ' + X('flashlight', 'lampu suluh') + '</span><span><kbd>Tab</kbd> ' + X('notebook', 'buku nota') + '</span><span><kbd>H</kbd> ' + X('help', 'bantuan') + '</span><span><kbd>Esc</kbd> ' + X('pause', 'jeda') + '</span></div></section>' +
      '<section><h3>🔎 ' + X('How to solve it', 'Cara menyelesaikannya') + '</h3><ol class="h-steps">' +
        li('👀', 'Explore every room. Press <b>E</b> on things that glow to collect evidence.', 'Terokai setiap bilik. Tekan <b>E</b> pada benda yang bercahaya untuk mengumpul bukti.') +
        li('💬', 'Talk to everyone. Ask questions, then <b>show evidence</b> — some people are lying!', 'Bercakap dengan semua orang. Tanya soalan, kemudian <b>tunjuk bukti</b> — ada yang berbohong!') +
        li('📓', 'Open your notebook (<b>Tab</b>). <b>Compare</b> two clues to catch a lie. Solve the puzzles to unlock secrets.', 'Buka buku nota (<b>Tab</b>). <b>Bandingkan</b> dua petunjuk untuk menangkap pembohongan. Selesaikan teka-teki untuk membuka rahsia.') +
        li('🧩', 'On the deduction board, answer the questions and link the evidence that proves each answer.', 'Di papan deduksi, jawab soalan dan pautkan bukti yang membuktikan setiap jawapan.') +
        li('🕵️', 'When you are sure, press <b>Name the culprit</b>. Choose who, what, when, where — and your BEST proof.', 'Apabila pasti, tekan <b>Namakan pelaku</b>. Pilih siapa, apa, bila, di mana — dan bukti TERBAIK anda.') +
      '</ol></section>' +
      '<section class="h-win"><h3>🏆 ' + X('How to WIN', 'Cara MENANG') + '</h3><ul class="h-steps">' +
        (teams ? li('🤝', 'Teams: clues you find are shared with your team automatically.', 'Pasukan: petunjuk yang anda jumpa dikongsi dengan pasukan secara automatik.') + li('🗳️', 'Teams: to accuse, EVERY team-mate must vote <b>YES</b>. Talk together first!', 'Pasukan: untuk menuduh, SETIAP ahli mesti mengundi <b>YA</b>. Berbincang dahulu!') + li('🥇', 'The FIRST team to name the right culprit with enough proof WINS.', 'Pasukan PERTAMA yang menamakan pelaku yang betul dengan bukti yang cukup MENANG.')
               : li('🥇', 'The FIRST player to name the right culprit with enough proof WINS.', 'Pemain PERTAMA yang menamakan pelaku yang betul dengan bukti yang cukup MENANG.')) +
        li('🥈', 'After the winner, everyone else keeps playing for 2nd and 3rd place until the time runs out.', 'Selepas pemenang, yang lain terus bermain untuk tempat ke-2 dan ke-3 sehingga masa tamat.') +
        li('❄️', 'A WRONG accusation freezes you' + (teams ? ' (and your whole team)' : '') + ' for 60 seconds. Then you can try again.', 'Tuduhan SALAH membekukan anda' + (teams ? ' (dan seluruh pasukan)' : '') + ' selama 60 saat. Kemudian anda boleh cuba lagi.') +
        li('⏳', 'Watch the timer at the top. When it ends, you must accuse.', 'Perhatikan pemasa di atas. Apabila tamat, anda mesti menuduh.') +
      '</ul>' + (race ? '' : '') + '</section>' +
      '<section><h3>💡 ' + X('Stuck?', 'Tersekat?') + '</h3><p>' + X('Hint tokens (💡) give hints on the deduction board. Answer bonus questions to earn more. Scary moments are just part of the story — you can turn them down in Settings (Esc → Settings).', 'Token petunjuk (💡) memberi petunjuk di papan deduksi. Jawab soalan bonus untuk mendapat lebih. Detik seram hanyalah sebahagian cerita — anda boleh merendahkannya di Tetapan (Esc → Tetapan).') + '</p></section></div>';
  }
  function openHelp() {
    if (S.screen === 'game' && S.game && UI().modal) { var m = UI().modal({ cls: 'help-m', title: X('How to play', 'Cara bermain'), icon: '❓' }); m.body.innerHTML = helpHTML(); m.foot.appendChild(UI().btn(X('Got it!', 'Faham!') + ' ✔', 'primary', function () { m.close(); })); return; }
    var hb = $('helpbox'); hb.hidden = false; hb.innerHTML = '<div class="modal help-m"><div class="mhead"><div class="mtitle"><span class="mic">❓</span><span>' + X('How to play', 'Cara bermain') + '</span></div><button class="mclose" id="hb-x">✕</button></div><div class="mbody">' + helpHTML() + '</div><div class="mfoot"><button class="btn primary" id="hb-ok">' + X('Got it!', 'Faham!') + ' ✔</button></div></div>';
    $('hb-x').onclick = $('hb-ok').onclick = function () { hb.hidden = true; hb.innerHTML = ''; };
  }

  /* ------------------------------------------------------------------ leaving a case */
  function endGame(silent) {
    clearInterval(S.tickT); S.tickT = null; saveNow(); UI().closeAll();
    if (S.world) { try { S.world.dispose(); } catch (e) { /* ignore */ } S.world = null; }
    if (MF.UI.insp) { try { MF.UI.insp.dispose(); } catch (e) { /* ignore */ } MF.UI.insp = null; MF.UI._inspCanvas = null; }
    ambientOff(); S.game = null; $('ov').innerHTML = ''; $('freeze').hidden = true;
  }
  function finishCase() {
    S.finishing = true; sendProg(true); endGame(); S.finishing = false; var st = S.st || {};
    if (PREVIEW || st.mode === 'free') { show('s-archive'); renderArchive(); }
    else { show('s-wait'); renderWait(); $('s-wait').querySelector('h2').textContent = MF.tp({ en: '🎉 Case finished!', bm: '🎉 Kes selesai!' }); }
  }
  function resetMine() { if (S.game) endGame(); S.pendingShare = []; Object.keys(MF.cases || {}).forEach(function (id) { MF.store.del(saveKey(id)); }); show('s-wait'); renderWait(); }

  window.addEventListener('beforeunload', function () { saveNow(); if (S.link) { try { send({ t: 'bye', sid: S.sid }); } catch (e) { /* ignore */ } } });
  window.addEventListener('keydown', function (e) { if (e.code === 'Tab' && S.screen === 'game') e.preventDefault(); }, true);
  window.addEventListener('keydown', function (e) {                          // H = How to play (during the game)
    var a = document.activeElement; if (e.code !== 'KeyH' || (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))) return;
    if (S.screen === 'game' && S.game && !S.gate && !UI().isOpen('help')) openHelp();
  });
  $('helpbtn').onclick = function () { MF.Sfx.init(); openHelp(); };

  /* ------------------------------------------------------------------ start */
  if (PREVIEW) {
    S.name = 'Preview'; S.joined = true; S.lastPing = Date.now() + 1e12;
    S.st = { phase: 'open', mode: 'free', lang: (MF.store.get('mf.t.settings') || {}).lang || 'en', diff: P.get('diff') || 'standard', scare: P.get('scare') != null ? parseInt(P.get('scare'), 10) : null, subjects: null, grade: 'all', cases: null, timer: P.get('timer') != null ? parseInt(P.get('timer'), 10) : null, bank: [] };
    show('s-archive'); renderArchive();
  } else renderJoin();
  if (P.get('c') && !PREVIEW) { /* the link carries the room code; students only need to type a name */ }
  window.MF_student = S;                                                    // handy for tests
})();
