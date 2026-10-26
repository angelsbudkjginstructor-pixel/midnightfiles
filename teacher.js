/* ============================================================================
   Teacher control page.
   - makes a room code; students join with it (PeerJS = direct browser-to-browser, no server of ours)
   - Open / Pause / Close the session. Students are locked unless the phase is OPEN.
   - A heartbeat (ping) goes out every 2 s from a Web Worker (browsers slow down timers on hidden tabs,
     a worker is not slowed down). If this page is closed, the students stop getting pings and lock.
   - modes: solo (one case for everybody) · teams (shared evidence) · free (students choose a case)
   - reads the teacher's own question bank from a Google Sheet (published as CSV)
   Safety checks: room-code clash -> new code automatically; settings saved on this computer;
   bad sheet rows are skipped; the sheet is never required.
   ============================================================================ */
(function () {
  'use strict';
  var MF = window.MF, E = MF.esc, $ = function (id) { return document.getElementById(id); };
  var NET = new URLSearchParams(location.search).get('net') === 'local' ? 'local' : 'peer';
  var X = function (en, bm) { return en + ' <span class="tip">/ ' + bm + '</span>'; };
  var KEY = 'mf.t.settings';
  var SUBJ = [['math', 'Maths · Matematik'], ['english', 'English · B. Inggeris'], ['science', 'Science · Sains'], ['geography', 'Geography · Geografi'], ['thinking', 'Critical thinking · Pemikiran kritis']];

  MF.store.set('mf.teacherKey', 'k' + Date.now());                               // lets THIS browser use the student preview link
  var cfg = Object.assign({ mode: 'solo', case: '009', cases: ['009'], diff: 'standard', scare: null, subjects: SUBJ.map(function (s) { return s[0]; }), grade: 'all', timer: null, lang: 'both', sheet: '' }, MF.store.get(KEY, {}));
  var T = { code: MF.store.get('mf.t.code') || MF.makeCode(), hub: null, phase: 'lobby', rev: 1, students: {}, byConn: {}, bank: [], bankMsg: '', ready: false, err: '' };

  /* ------------------------------------------------------------------ page */
  $('app').innerHTML =
    '<div class="t-head"><h1>🕵️ THE MIDNIGHT FILES — ' + X('Teacher Control', 'Kawalan Guru') + '</h1><span id="t-pill" class="state-pill st-lobby"></span><button class="btn ghost small" id="b-prev">👁 ' + X('Preview', 'Pratonton') + '</button></div>' +
    '<div class="t-grid"><div>' +
    '<div class="t-card"><h2>🔑 ' + X('Room', 'Bilik') + '</h2><div class="t-code" id="t-code">…</div><div id="t-link" class="tip" style="word-break:break-all;margin:.5em 0"></div>' +
    '<div class="t-ctrl"><button class="btn ghost small" id="b-copyl">📋 ' + X('Copy link', 'Salin pautan') + '</button><button class="btn ghost small" id="b-copyc">📋 ' + X('Copy code', 'Salin kod') + '</button><button class="btn ghost small" id="b-newc">🔄 ' + X('New code', 'Kod baru') + '</button></div><div id="t-net" class="status-line"></div></div>' +
    '<div class="t-card"><h2>🎛 ' + X('Session', 'Sesi') + '</h2><div class="t-ctrl"><button class="btn primary" id="b-open">▶ ' + X('Open game', 'Buka') + '</button><button class="btn accent" id="b-pause">⏸ ' + X('Pause', 'Jeda') + '</button><button class="btn danger" id="b-close">⏹ ' + X('Close', 'Tutup') + '</button></div>' +
    '<p class="tip" id="t-hint"></p><p class="tip">⚠ ' + X('Keep this page open while students play. If you close it, every student is locked.', 'Biarkan halaman ini terbuka semasa murid bermain. Jika ditutup, semua murid dikunci.') + '</p></div>' +
    '<div class="t-card"><h2>⚙ ' + X('Game settings', 'Tetapan permainan') + '</h2>' +
    '<div class="t-row"><label>' + X('Mode', 'Mod') + '</label><select id="c-mode" class="t-sel"><option value="solo">🧍 Solo — ' + 'one case for everyone · satu kes untuk semua</option><option value="teams">🤝 Teams — share clues · kongsi petunjuk</option><option value="free">🗂 Free choice — students pick · murid pilih</option></select></div>' +
    '<div class="t-row" id="r-case"><label>' + X('Case', 'Kes') + '</label><select id="c-case" class="t-sel"></select></div>' +
    '<div class="t-row" id="r-cases" hidden><label>' + X('Unlocked', 'Dibuka') + '</label><div id="c-cases"></div></div>' +
    '<div class="t-row"><label>' + X('Level', 'Tahap') + '</label><select id="c-diff" class="t-sel"><option value="junior">🟢 Junior (3 choices, free hints, no timer)</option><option value="standard">🟡 Standard (4 choices, 3 tokens, 25 min)</option><option value="advanced">🔴 Advanced (type answers, 1 token, 15 min)</option></select></div>' +
    '<div class="t-row"><label>👻 ' + X('Scare', 'Seram') + '</label><select id="c-scare" class="t-sel"><option value="">Default for level</option><option value="0">Off · Tutup</option><option value="1">Low · Rendah</option><option value="2">Medium · Sederhana</option></select></div>' +
    '<div class="t-row"><label>⏱ ' + X('Timer', 'Pemasa') + '</label><select id="c-timer" class="t-sel"><option value="">Default for level</option><option value="0">No timer · Tiada</option><option value="10">10 min</option><option value="15">15 min</option><option value="20">20 min</option><option value="25">25 min</option><option value="30">30 min</option><option value="40">40 min</option></select></div>' +
    '<div class="t-row"><label>🎓 ' + X('Grade', 'Gred') + '</label><select id="c-grade" class="t-sel"><option value="all">All · Semua</option>' + [1, 2, 3, 4, 5, 6, 7].map(function (g) { return '<option value="' + g + '">Grade ' + g + '</option>'; }).join('') + '</select></div>' +
    '<div class="t-row"><label>📚 ' + X('Subjects', 'Subjek') + '</label><div id="c-subj"></div></div>' +
    '<div class="t-row"><label>🌐 ' + X('Language', 'Bahasa') + '</label><select id="c-lang" class="t-sel"><option value="both">BM + English</option><option value="bm">Bahasa Malaysia</option><option value="en">English</option></select></div></div>' +
    '<div class="t-card"><h2>📊 ' + X('My questions (Google Sheet)', 'Soalan saya (Google Sheet)') + '</h2><p class="tip">' + X('Optional. Publish your sheet as CSV (File → Share → Publish to web → CSV) and paste the link.', 'Pilihan. Terbitkan sheet sebagai CSV (Fail → Kongsi → Terbit ke web → CSV) dan tampal pautan.') + '</p>' +
    '<input id="c-sheet" class="inp" style="font-size:.9em" placeholder="https://docs.google.com/spreadsheets/d/e/…/pub?output=csv"><div class="t-ctrl"><button class="btn accent small" id="b-sheet">⬇ ' + X('Load', 'Muat') + '</button><button class="btn ghost small" id="b-tpl">📄 ' + X('Sample sheet', 'Contoh sheet') + '</button></div><div id="t-sheet" class="tip"></div></div>' +
    '<div class="t-card"><h2>📣 ' + X('Message to students', 'Mesej kepada murid') + '</h2><input id="c-msg" class="inp" style="font-size:.95em" maxlength="140" placeholder="Example: 5 minutes left!"><div class="t-ctrl"><button class="btn accent small" id="b-msg">📤 ' + X('Send', 'Hantar') + '</button></div></div>' +
    '</div><div>' +
    '<div class="t-card"><h2>👥 ' + X('Students', 'Murid') + ' <span id="t-count" class="pill"></span></h2>' +
    '<div class="t-ctrl"><select id="c-tsize" class="t-sel narrow"><option value="2">Teams of 2</option><option value="3">Teams of 3</option><option value="4">Teams of 4</option></select><button class="btn ghost small" id="b-teams">🤝 ' + X('Make teams', 'Bentuk pasukan') + '</button><button class="btn ghost small" id="b-noteams">✖ ' + X('Clear teams', 'Kosongkan') + '</button><button class="btn ghost small" id="b-csv">⬇ CSV</button></div>' +
    '<div class="t-scroll"><table class="t-table"><thead><tr><th>' + 'Name</th><th>Team</th><th>Now</th><th>📋</th><th>🧩</th><th>💡</th><th>⏱</th><th>Result</th><th>📝</th><th></th></tr></thead><tbody id="t-rows"></tbody></table></div><p class="tip">📋 evidence · 🧩 deduction questions solved · 💡 hints used · ⏱ minutes · 📝 exit ticket</p></div>' +
    '</div></div>';

  /* ------------------------------------------------------------------ settings <-> controls */
  function fillControls() {
    var ready = MF.ARCHIVE.filter(function (c) { return MF.playable(c.id); });
    $('c-case').innerHTML = ready.map(function (c) { return '<option value="' + c.id + '">' + c.id + ' · ' + MF.tp(c.title) + '</option>'; }).join('');
    $('c-cases').innerHTML = ready.map(function (c) { return '<label class="t-chk"><input type="checkbox" data-case="' + c.id + '"> ' + c.id + ' ' + E(c.title.en) + '</label>'; }).join('');
    $('c-subj').innerHTML = SUBJ.map(function (s) { return '<label class="t-chk"><input type="checkbox" data-subj="' + s[0] + '"> ' + s[1] + '</label>'; }).join('<br>');
    $('c-mode').value = cfg.mode; $('c-case').value = cfg.case; $('c-diff').value = cfg.diff; $('c-scare').value = cfg.scare == null ? '' : cfg.scare; $('c-timer').value = cfg.timer == null ? '' : cfg.timer; $('c-grade').value = cfg.grade; $('c-lang').value = cfg.lang; $('c-sheet').value = cfg.sheet || '';
    document.querySelectorAll('[data-case]').forEach(function (i) { i.checked = cfg.cases.indexOf(i.getAttribute('data-case')) >= 0; });
    document.querySelectorAll('[data-subj]').forEach(function (i) { i.checked = cfg.subjects.indexOf(i.getAttribute('data-subj')) >= 0; });
    $('r-case').hidden = cfg.mode === 'free'; $('r-cases').hidden = cfg.mode !== 'free';
  }
  function readControls() {
    cfg.mode = $('c-mode').value; cfg.case = $('c-case').value; cfg.diff = $('c-diff').value; cfg.scare = $('c-scare').value === '' ? null : parseInt($('c-scare').value, 10);
    cfg.timer = $('c-timer').value === '' ? null : parseInt($('c-timer').value, 10); cfg.grade = $('c-grade').value; cfg.lang = $('c-lang').value; cfg.sheet = $('c-sheet').value.trim();
    cfg.cases = Array.prototype.slice.call(document.querySelectorAll('[data-case]:checked')).map(function (i) { return i.getAttribute('data-case'); });
    cfg.subjects = Array.prototype.slice.call(document.querySelectorAll('[data-subj]:checked')).map(function (i) { return i.getAttribute('data-subj'); });
    if (!cfg.subjects.length) cfg.subjects = SUBJ.map(function (s) { return s[0]; });
    $('r-case').hidden = cfg.mode === 'free'; $('r-cases').hidden = cfg.mode !== 'free'; MF.store.set(KEY, cfg);
  }
  function stateObj() {
    return { phase: T.phase, mode: cfg.mode, case: cfg.case, cases: cfg.cases.length ? cfg.cases : [cfg.case], diff: cfg.diff, scare: cfg.scare, subjects: cfg.subjects, grade: cfg.grade, timer: cfg.timer, lang: cfg.lang, bank: T.bank };
  }
  function pushState() { T.rev++; if (T.hub) T.hub.broadcast({ t: 'state', rev: T.rev, s: stateObj() }); draw(); }

  /* ------------------------------------------------------------------ network */
  function startHub() {
    if (T.hub) { try { T.hub.close(); } catch (e) { /* ignore */ } T.hub = null; }
    T.ready = false; T.err = ''; MF.store.set('mf.t.code', T.code); drawNet();
    var hub = T.hub = new MF.Hub(T.code, NET);
    hub.on('ready', function () { T.ready = true; drawNet(); });
    hub.on('error', function (e) {
      if (/unavailable-id/.test(String(e))) { T.code = MF.makeCode(); startHub(); return; }      // code already used by someone else -> take another
      T.err = String(e); drawNet();
    });
    hub.on('msg', onMsg);
    hub.on('leave', function (id) { var sid = T.byConn[id]; if (sid && T.students[sid]) { T.students[sid].off = true; draw(); } });
  }
  function onMsg(id, m) {
    if (!m || !m.t) return;
    var s;
    if (m.t === 'hello') {
      s = T.students[m.sid] || (T.students[m.sid] = { sid: m.sid, name: m.name, team: null, prog: {} }); s.name = String(m.name || '?').slice(0, 20); s.conn = id; s.last = Date.now(); s.off = false; T.byConn[id] = m.sid;
      T.hub.send(id, { t: 'state', rev: T.rev, s: stateObj() }); if (s.team) sendTeam(s); draw(); return;
    }
    s = T.students[m.sid] || T.students[T.byConn[id]]; if (!s) return;
    s.conn = id; s.last = Date.now(); s.off = false;
    if (m.t === 'need') T.hub.send(id, { t: 'state', rev: T.rev, s: stateObj() });
    else if (m.t === 'prog') { s.prog = m; draw(); }
    else if (m.t === 'bye') { s.off = true; draw(); }
    else if (m.t === 'share' && s.team) Object.keys(T.students).forEach(function (k) { var o = T.students[k]; if (o !== s && o.team === s.team && !o.off && o.conn) T.hub.send(o.conn, { t: 'share', from: s.name, kind: m.kind, id: m.id }); });
  }
  function sendTeam(s) { if (!T.hub || !s.conn) return; var mem = Object.keys(T.students).map(function (k) { return T.students[k]; }).filter(function (o) { return s.team && o.team === s.team; }).map(function (o) { return o.name; }); T.hub.send(s.conn, { t: 'team', team: s.team, members: mem }); }
  function sendAllTeams() { Object.keys(T.students).forEach(function (k) { var s = T.students[k]; if (s.conn) { if (s.team) sendTeam(s); else T.hub.send(s.conn, { t: 'team', team: null }); } }); }

  /* heartbeat: Worker timers keep ticking even when this tab is in the background */
  var beat = function () { if (T.hub && T.ready) T.hub.broadcast({ t: 'ping', rev: T.rev, phase: T.phase, ts: Date.now() }); };
  try { var w = new Worker(URL.createObjectURL(new Blob(['setInterval(function(){postMessage(1)},2000)'], { type: 'text/javascript' }))); w.onmessage = beat; }
  catch (e) { setInterval(beat, 2000); }
  setInterval(draw, 2500);

  /* ------------------------------------------------------------------ drawing */
  function drawNet() {
    $('t-code').textContent = T.code; var base = location.href.replace(/teacher\.html.*$/, '') + 'index.html?c=' + T.code + (NET === 'local' ? '&net=local' : ''); $('t-link').innerHTML = '🔗 ' + E(base);
    $('t-net').className = 'status-line ' + (T.err ? 'bad' : T.ready ? 'good' : ''); $('t-net').innerHTML = T.err ? '✖ ' + E(T.err) + ' — check your internet and press "New code".' : T.ready ? '✔ ' + X('Room is ready. Share the code with students.', 'Bilik sedia. Kongsi kod dengan murid.') : '⏳ ' + X('Creating room…', 'Mencipta bilik…');
  }
  function draw() {
    var pill = $('t-pill'); var L = { lobby: ['st-lobby', '⏳ Waiting · Menunggu'], open: ['st-open', '▶ OPEN · Dibuka'], paused: ['st-paused', '⏸ Paused · Dijeda'], closed: ['st-closed', '⏹ Closed · Ditutup'] }[T.phase]; pill.className = 'state-pill ' + L[0]; pill.textContent = L[1];
    $('t-hint').innerHTML = T.phase === 'open' ? '✔ ' + X('Students can play now.', 'Murid boleh bermain sekarang.') : '🔒 ' + X('Students are locked until you press Open.', 'Murid dikunci sehingga anda tekan Buka.');
    var now = Date.now(), list = Object.keys(T.students).map(function (k) { return T.students[k]; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
    var on = list.filter(function (s) { return !s.off && now - (s.last || 0) < 20000; }).length; $('t-count').textContent = on + ' online / ' + list.length;
    var tb = $('t-rows'), active = document.activeElement && tb.contains(document.activeElement); if (active) return;       // do not redraw while a team box is open
    tb.innerHTML = list.map(function (s) {
      var p = s.prog || {}, off = s.off || now - (s.last || 0) > 20000, res = p.end ? ('★'.repeat(p.stars || 0) + ' ' + p.end) : '';
      return '<tr class="' + (off ? 'off' : '') + '"><td><b>' + E(s.name) + '</b></td><td><input class="t-sel" style="width:84px;padding:.1em .3em" data-team="' + s.sid + '" value="' + E(s.team || '') + '" placeholder="–"></td><td>' + (off ? '<span class="pill r">offline</span>' : '<span class="pill g">' + E(p.scr === 'game' ? (p.room || 'in game') : (p.scr || 'joined')) + '</span>') + (p.case ? ' <span class="pill">#' + E(p.case) + '</span>' : '') + '</td><td>' + (p.ev != null ? p.ev : '') + '</td><td>' + (p.qs != null ? p.qs + '/' + p.qn : '') + '</td><td>' + (p.hints != null ? p.hints : '') + '</td><td>' + (p.mins != null ? p.mins : '') + '</td><td>' + E(res) + '</td><td>' + (p.ex != null ? p.ex + '/3' : '') + '</td><td><button class="btn ghost small" data-reset="' + s.sid + '" title="Reset this student\'s saved game">↺</button></td></tr>';
    }).join('') || '<tr><td colspan="10" class="empty">' + X('No students yet. Give them the room code.', 'Belum ada murid. Beri mereka kod bilik.') + '</td></tr>';
    tb.querySelectorAll('[data-team]').forEach(function (i) { i.onchange = function () { var s = T.students[i.getAttribute('data-team')]; s.team = i.value.trim().slice(0, 14) || null; sendAllTeams(); }; });
    tb.querySelectorAll('[data-reset]').forEach(function (b) { b.onclick = function () { var s = T.students[b.getAttribute('data-reset')]; if (s && s.conn && window.confirm('Reset ' + s.name + "'s saved game?")) T.hub.send(s.conn, { t: 'reset', sid: s.sid }); }; });
  }

  /* ------------------------------------------------------------------ buttons */
  function bind() {
    ['c-mode', 'c-case', 'c-diff', 'c-scare', 'c-timer', 'c-grade', 'c-lang'].forEach(function (id) { $(id).onchange = function () { readControls(); pushState(); }; });
    $('c-cases').onchange = $('c-subj').onchange = function () { readControls(); pushState(); };
    $('b-open').onclick = function () { readControls(); if (cfg.mode !== 'free' && !MF.playable(cfg.case)) { alert('This case is not ready yet.'); return; } T.phase = 'open'; pushState(); };
    $('b-pause').onclick = function () { T.phase = 'paused'; pushState(); };
    $('b-close').onclick = function () { T.phase = 'closed'; pushState(); if (T.hub) T.hub.broadcast({ t: 'end' }); };
    $('b-copyl').onclick = function () { copy(location.href.replace(/teacher\.html.*$/, '') + 'index.html?c=' + T.code + (NET === 'local' ? '&net=local' : '')); };
    $('b-copyc').onclick = function () { copy(T.code); };
    $('b-newc').onclick = function () { if (Object.keys(T.students).length && !window.confirm('A new code disconnects all students. Continue?')) return; T.code = MF.makeCode(); T.students = {}; T.byConn = {}; startHub(); draw(); };
    $('b-prev').onclick = function () { readControls(); window.open('index.html?preview=1&diff=' + cfg.diff + (cfg.scare != null ? '&scare=' + cfg.scare : '') + (cfg.timer != null ? '&timer=' + cfg.timer : ''), '_blank'); };
    $('b-msg').onclick = function () { var t = $('c-msg').value.trim(); if (t && T.hub) { T.hub.broadcast({ t: 'msg', text: t }); $('c-msg').value = ''; } };
    $('c-msg').onkeydown = function (e) { if (e.key === 'Enter') $('b-msg').click(); };
    $('b-teams').onclick = function () {
      var n = parseInt($('c-tsize').value, 10), ons = Object.keys(T.students).map(function (k) { return T.students[k]; }).filter(function (s) { return !s.off; });
      var sh = MF.shuffle(ons); sh.forEach(function (s, i) { s.team = 'Team ' + (Math.floor(i / n) + 1); }); sendAllTeams(); draw();
    };
    $('b-noteams').onclick = function () { Object.keys(T.students).forEach(function (k) { T.students[k].team = null; }); sendAllTeams(); draw(); };
    $('b-csv').onclick = exportCSV;
    $('b-sheet').onclick = function () { readControls(); loadSheet(); };
    $('b-tpl').onclick = function () {
      download('midnight-files-questions-sample.csv', 'subject,grade,question_en,question_bm,a,b,c,d,answer,hint\nmath,3,"What is 6 + 7?","Berapakah 6 + 7?",11,12,13,14,C,"Count up from 6"\nscience,4,"Which is a living thing?","Yang mana benda hidup?",rock,tree,chair,water,B,"Living things grow"\n');
    };
  }
  function copy(t) { try { navigator.clipboard.writeText(t); } catch (e) { /* ignore */ } }
  function download(name, text) { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + text], { type: 'text/csv' })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500); }
  function exportCSV() {
    var rows = [['Name', 'Team', 'Case', 'Evidence', 'Questions solved', 'Hints used', 'Minutes', 'Ending', 'Stars', 'Exit ticket (of 3)', 'Accusations']];
    Object.keys(T.students).forEach(function (k) { var s = T.students[k], p = s.prog || {}; rows.push([s.name, s.team || '', p.case || '', p.ev == null ? '' : p.ev, p.qs == null ? '' : p.qs, p.hints == null ? '' : p.hints, p.mins == null ? '' : p.mins, p.end || '', p.stars == null ? '' : p.stars, p.ex == null ? '' : p.ex, p.acc == null ? '' : p.acc]); });
    download('midnight-files-' + new Date().toISOString().slice(0, 10) + '.csv', rows.map(function (r) { return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(','); }).join('\n'));
  }

  /* Google Sheet -> custom questions */
  function sheetUrl(u) {
    var m = u.match(/spreadsheets\/d\/([a-zA-Z0-9_-]+)/); if (m && u.indexOf('/d/e/') < 0) return 'https://docs.google.com/spreadsheets/d/' + m[1] + '/gviz/tq?tqx=out:csv';
    return u;
  }
  function loadSheet() {
    var u = cfg.sheet; if (!u) { T.bank = []; $('t-sheet').innerHTML = 'No sheet — the built-in questions are used.'; pushState(); return; }
    $('t-sheet').innerHTML = '⏳ Loading…';
    fetch(sheetUrl(u)).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); }).then(function (txt) {
      var res = MF.Bank.fromCSV(txt); T.bank = res.questions.slice(0, 300);
      $('t-sheet').innerHTML = (T.bank.length ? '<span class="msg-ok">✔ ' + T.bank.length + ' questions loaded</span>' : '<span class="msg-bad">✖ No usable questions</span>') + (res.skipped ? ' · ' + res.skipped + ' rows skipped' : '') + (res.problems.length ? '<br><small>' + res.problems.slice(0, 4).map(E).join('<br>') + '</small>' : '');
      pushState();
    }).catch(function (e) { T.bank = []; $('t-sheet').innerHTML = '<span class="msg-bad">✖ Could not read the sheet (' + E(e.message) + '). Make sure it is published to the web as CSV, or shared as "anyone with the link".</span>'; pushState(); });
  }

  window.addEventListener('beforeunload', function () { if (T.hub) { try { T.hub.close(); } catch (e) { /* ignore */ } } });
  fillControls(); bind(); drawNet(); startHub(); draw(); if (cfg.sheet) loadSheet();
  window.MF_teacher = T;                                                         // handy for tests
})();
