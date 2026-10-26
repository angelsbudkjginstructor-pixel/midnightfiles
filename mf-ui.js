/* ============================================================================
   MF.UI (part 1) — HUD, pop-up windows, toasts, evidence viewer (3D rotate, photo zoom,
   camera gallery, documents) and the educational puzzle runner.
   Part 2 (mf-notebook.js) adds the notebook, interviews, deduction board, accusation and endings.
   Safety checks: all text is escaped, every window is closed with one function (no stuck
   screens), pop-ups never stack the same evidence twice.
   ============================================================================ */
(function (MF) {
  'use strict';
  var E = MF.esc, el = MF.el;
  var X = function (en, bm) { return MF.t({ en: en, bm: bm }); };            // bilingual label helper
  var UI = MF.UI = { stack: [], g: null, w: null, root: null, cfg: {}, hooks: {} };

  /* subject colours + names (used on puzzle cards) */
  UI.SUBJ = {
    math: { ic: '➗', c: '#3b82f6', n: function () { return X('Maths', 'Matematik'); } },
    english: { ic: '🔤', c: '#ef4444', n: function () { return X('English', 'Bahasa Inggeris'); } },
    science: { ic: '🔬', c: '#22c55e', n: function () { return X('Science', 'Sains'); } },
    geography: { ic: '🧭', c: '#f59e0b', n: function () { return X('Geography', 'Geografi'); } },
    thinking: { ic: '🧠', c: '#a855f7', n: function () { return X('Critical thinking', 'Pemikiran kritis'); } }
  };
  /* evidence categories → colour + label (colour-coded everywhere) */
  UI.KIND = {
    physical: { ic: '🔎', c: '#3b82f6', n: function () { return X('Object', 'Objek'); } },
    document: { ic: '📄', c: '#f59e0b', n: function () { return X('Document', 'Dokumen'); } },
    photo: { ic: '🖼️', c: '#a855f7', n: function () { return X('Photo', 'Gambar'); } },
    device: { ic: '📷', c: '#14b8a6', n: function () { return X('Device', 'Peranti'); } },
    claim: { ic: '💬', c: '#f97316', n: function () { return X('Witness claim', 'Kenyataan saksi'); } },
    inference: { ic: '💡', c: '#22c55e', n: function () { return X('Inference', 'Inferens'); } }
  };
  UI.catOf = function (it) { if (!it) return 'physical'; if (it.kind === 'claim') return 'claim'; if (it.kind === 'inference') return 'inference'; return it.type === 'photo' ? 'photo' : (it.type === 'device' ? 'device' : (it.type === 'document' ? 'document' : 'physical')); };
  UI.badge = function (it) {
    var c = UI.catOf(it), k = UI.KIND[c]; return '<span class="kbadge" style="--kc:' + k.c + '">' + k.ic + ' ' + k.n() + '</span>';
  };
  // "confirmed / witness claim / inference / unverified" status line
  UI.statusBadge = function (it) {
    var g = UI.g, cat = UI.catOf(it);
    if (cat === 'claim') { var st = g.claimStatus(it.id); return st === 'contradicted' ? '<span class="sbadge bad">⚠ ' + X('Does not match evidence', 'Tidak sepadan dengan bukti') + '</span>' : st === 'supported' ? '<span class="sbadge good">✔ ' + X('Supported by evidence', 'Disokong oleh bukti') + '</span>' : '<span class="sbadge unk">❓ ' + X('Unverified claim', 'Kenyataan belum disahkan') + '</span>'; }
    if (cat === 'inference') return '<span class="sbadge inf">💡 ' + X('Inference — a conclusion from evidence', 'Inferens — kesimpulan daripada bukti') + '</span>';
    return '<span class="sbadge good">✔ ' + X('Confirmed evidence', 'Bukti disahkan') + '</span>';
  };

  /* ------------------------------------------------------------------ setup */
  UI.init = function (ctx) {
    UI.g = ctx.game; UI.w = ctx.world; UI.root = ctx.root; UI.cfg = ctx.cfg || {}; UI.hooks = ctx.hooks || {}; UI.stack = [];
    UI.buildHud();
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && UI.stack.length) { var top = UI.stack[UI.stack.length - 1]; if (!top.opts.noClose) { e.preventDefault(); top.close(); } } });
  };
  UI.buildHud = function () {
    var r = UI.root; r.innerHTML = '';
    r.innerHTML = '<div class="hud-tl"><div class="hud-pill" id="h-room">—</div><div class="hud-pill" id="h-clock">🕒 —</div><div class="hud-bar" id="h-bar" hidden><i id="h-barfill"></i><span id="h-bartxt"></span></div></div>' +
      '<div class="hud-tr"><div class="hud-pill" id="h-ev" title="Evidence">📋 0</div><div class="hud-pill" id="h-tok" title="Hint tokens">💡 0</div><div class="hud-pill" id="h-fl" title="Flashlight (F)">🔦</div></div>' +
      '<div class="hud-aim" id="h-aim"><i></i></div><div class="hud-label" id="h-label" hidden></div>' +
      '<div class="hud-keys" id="h-keys"></div><div id="toasts"></div>';
    UI.updateKeys();
  };
  UI.updateKeys = function () {
    var k = document.getElementById('h-keys'); if (!k) return;
    k.innerHTML = '<b>WASD</b> ' + X('move', 'bergerak') + ' · <b>E</b> ' + X('look / talk', 'periksa / bual') + ' · <b>Shift</b> ' + X('run', 'lari') + ' · <b>Ctrl/C</b> ' + X('crouch', 'tunduk') + ' · <b>F</b> ' + X('flashlight', 'lampu suluh') + ' · <b>Tab</b> ' + X('notebook', 'buku nota') + ' · <b>H</b> ' + X('help', 'bantuan') + ' · <b>Esc</b> ' + X('pause', 'jeda');
  };
  UI.setTarget = function (t) {
    var l = document.getElementById('h-label'), a = document.getElementById('h-aim'); if (!l) return;
    if (!t) { l.hidden = true; a.classList.remove('on'); return; }
    var verb = t.npc ? X('Talk to', 'Bual dengan') : X('Look at', 'Periksa');
    l.innerHTML = '<kbd>E</kbd> ' + verb + ' <b>' + MF.t(t.label) + '</b>'; l.hidden = false; a.classList.add('on');
  };
  UI.updateHud = function (roomName) {
    var g = UI.g, set = function (id, h) { var e = document.getElementById(id); if (e && e.innerHTML !== h) e.innerHTML = h; };
    if (roomName !== undefined) set('h-room', '📍 ' + MF.t(roomName));
    set('h-clock', '🕒 ' + MF.fmtTime(g.clockMin()));
    set('h-ev', '📋 ' + g.count());
    set('h-tok', '💡 ' + (g.freeHints() ? '∞' : g.tokens()));
    var tl = g.timeLeft(), bar = document.getElementById('h-bar');
    if (tl == null) bar.hidden = true; else {
      bar.hidden = false; var lim = g.limit(); document.getElementById('h-barfill').style.width = Math.max(0, tl / lim * 100) + '%';
      var m = Math.floor(tl / 60), s = Math.floor(tl % 60); document.getElementById('h-bartxt').textContent = '⏳ ' + m + ':' + (s < 10 ? '0' : '') + s; bar.classList.toggle('low', tl < 120);
    }
  };
  UI.toast = function (html, cls, ms) {
    var box = document.getElementById('toasts'); if (!box) return; var t = el('div', 'toast ' + (cls || ''), html); box.appendChild(t);
    while (box.children.length > 4) box.removeChild(box.firstChild);
    setTimeout(function () { t.classList.add('out'); setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 400); }, ms || 3800);
  };
  UI.newEvidenceToast = function (it) { UI.toast('<b>' + X('Added to notebook', 'Ditambah ke buku nota') + '</b><br>' + (it.icon || '') + ' ' + MF.t(it.title), 'ev'); MF.Sfx.play('pick'); };

  /* ------------------------------------------------------------------ pop-up windows */
  // o: { cls, title, icon, noClose, onClose }
  UI.modal = function (o) {
    o = o || {}; var back = el('div', 'mback'), box = el('div', 'modal ' + (o.cls || '')), head = el('div', 'mhead'), body = el('div', 'mbody'), foot = el('div', 'mfoot');
    head.innerHTML = '<div class="mtitle">' + (o.icon ? '<span class="mic">' + o.icon + '</span>' : '') + '<span>' + (o.title || '') + '</span></div>';
    var m = { back: back, box: box, head: head, body: body, foot: foot, opts: o, closed: false };
    if (!o.noClose) { var x = el('button', 'mclose', '✕'); x.title = 'Esc'; x.onclick = function () { m.close(); }; head.appendChild(x); }
    box.appendChild(head); box.appendChild(body); box.appendChild(foot); back.appendChild(box);
    m.setTitle = function (h) { head.querySelector('.mtitle span:last-child').innerHTML = h; };
    m.close = function () {
      if (m.closed) return; m.closed = true; var i = UI.stack.indexOf(m); if (i >= 0) UI.stack.splice(i, 1);
      if (back.parentNode) back.parentNode.removeChild(back); if (o.onClose) { try { o.onClose(); } catch (e) { console.error(e); } } UI._sync();
    };
    back.addEventListener('mousedown', function (e) { if (e.target === back && !o.noClose && !o.sticky) m.close(); });
    document.getElementById('modals').appendChild(back); UI.stack.push(m); UI._sync(); return m;
  };
  UI.closeAll = function () { while (UI.stack.length) UI.stack[UI.stack.length - 1].close(); };
  UI.top = function () { return UI.stack[UI.stack.length - 1] || null; };
  UI.isOpen = function (cls) { return UI.stack.some(function (m) { return (m.opts.cls || '').indexOf(cls) >= 0; }); };
  UI._sync = function () {
    var open = UI.stack.length > 0, w = UI.w; if (!w) return;
    w.setFrozen(open);
    if (open) { w.unlock(); w.setPaused(true); } else if (!(UI.hooks.teacherPaused && UI.hooks.teacherPaused())) { w.setPaused(false); }
    if (UI.hooks.onModalChange) UI.hooks.onModalChange(open);
  };
  UI.btn = function (html, cls, fn) { var b = el('button', 'btn ' + (cls || ''), html); if (fn) b.onclick = fn; return b; };

  /* ------------------------------------------------------------------ opening evidence */
  UI.openItem = function (id, opts) {
    var g = UI.g, it = g.item(id); if (!it) return;
    opts = opts || {}; var isNew = g.give(id, 'found'); if (isNew) UI.newEvidenceToast(it);
    var ins = it.inspect || {}, cat = UI.catOf(it);
    if (it.photo) return UI.openPhoto(it);
    if (ins.kind === 'camera') return UI.openCamera(it);
    var m = UI.modal({ cls: 'inspect', title: MF.t(it.title), icon: it.icon, onClose: function () { UI.disposeInspector(); } });
    var left = el('div', 'ins-left'), right = el('div', 'ins-right'); m.body.appendChild(left); m.body.appendChild(right);
    var notes = el('div', 'ins-notes'); var info = '<p class="ins-where">📍 ' + (it.where ? MF.t(it.where) : '') + '</p><div class="ins-status">' + UI.badge(it) + ' ' + UI.statusBadge(it) + '</div><p class="ins-desc">' + MF.t(it.desc) + '</p>';
    right.innerHTML = info; right.appendChild(notes);
    var kind = ins.kind;
    if (kind === 'model') UI._inspect3d(it, left, notes, m);
    else if (kind === 'doc' || kind === 'puzzle-doc') {
      var html = (kind === 'puzzle-doc' && it.puzzle && g.puzzleDone(it.puzzle) && ins.fixedHtml) ? ins.fixedHtml : ins.html; left.innerHTML = '<div class="paper-wrap">' + MF.t(html) + '</div>';
    } else if (kind === 'puzzle-art') {
      var cv = el('canvas', 'art-cv'); left.appendChild(cv); MF.art.paint(ins.art, cv, it);
    } else { left.innerHTML = '<div class="big-ic">' + (it.icon || '🔎') + '</div>'; }
    UI._itemFooter(it, m);
    return m;
  };
  UI._itemFooter = function (it, m) {
    var g = UI.g, f = m.foot; f.innerHTML = '';
    if (it.puzzle) {
      var P = g.C.puzzles[it.puzzle], done = g.puzzleDone(it.puzzle), sub = UI.SUBJ[P.subject] || UI.SUBJ.thinking;
      var b = UI.btn((done ? '✔ ' : '🧩 ') + MF.t(P.title) + ' <span class="chip" style="--kc:' + sub.c + '">' + sub.ic + ' ' + sub.n() + '</span>', done ? 'ghost' : 'primary', function () {
        var miss = g.puzzleBlock(it.puzzle);
        if (miss) { UI.toast('🔒 ' + X('You need another clue first: ', 'Anda perlukan petunjuk lain dahulu: ') + '<b>' + MF.t(g.item(miss).title) + '</b>', 'warn'); MF.Sfx.play('bad'); return; }
        UI.openPuzzle(it.puzzle, function () { UI.refreshItem(it, m); });
      });
      f.appendChild(b);
    }
    var mk = el('div', 'mark-btns'); [['rel', '⭐', X('Important', 'Penting')], ['irr', '🚫', X('Not important', 'Tidak penting')], ['unsure', '❔', X('Not sure', 'Tidak pasti')]].forEach(function (a) {
      var bb = UI.btn(a[1] + ' ' + a[2], 'ghost small' + (g.S.marks[it.id] === a[0] ? ' on' : ''), function () { g.setMark(it.id, g.S.marks[it.id] === a[0] ? null : a[0]); mk.querySelectorAll('.btn').forEach(function (x) { x.classList.remove('on'); }); if (g.S.marks[it.id]) bb.classList.add('on'); MF.Sfx.play('click'); });
      mk.appendChild(bb);
    });
    if (!it.photo) f.appendChild(mk);
    f.appendChild(UI.btn(X('Close', 'Tutup'), 'ghost', function () { m.close(); }));
  };
  UI.refreshItem = function (it, m) { if (m.closed) return; m.close(); UI.openItem(it.id); };

  /* 3D evidence you can turn with the mouse */
  UI._inspect3d = function (it, left, notes, m) {
    var g = UI.g, ins = it.inspect, cv = UI._inspCanvas || (UI._inspCanvas = el('canvas', 'insp-cv'));
    left.appendChild(cv); left.insertAdjacentHTML('beforeend', '<div class="drag-tip">🖱️ ' + X('Drag to turn it · Scroll to zoom', 'Seret untuk memusing · Tatal untuk zum') + '</div>');
    try {
      if (!UI.insp) UI.insp = new MF.Inspector(cv, UI.w.low);
      UI.insp.setModel(ins.model); UI.insp.low = UI.w.low;
    } catch (e) { left.innerHTML = '<div class="big-ic">' + (it.icon || '🔎') + '</div><p>3D not available</p>'; return; }
    requestAnimationFrame(function () { UI.insp.resize(cv.clientWidth || 480, cv.clientHeight || 360); UI.insp.start(); });
    (ins.notes || []).forEach(function (n) { notes.insertAdjacentHTML('beforeend', '<div class="note-line">🔎 ' + MF.t(n) + '</div>'); });
    if (ins.back) {
      var backBox = el('div', 'back-reveal'); backBox.hidden = true; notes.appendChild(backBox);
      var reveal = function () {
        if (!backBox.hidden) return; backBox.hidden = false; backBox.innerHTML = '🔍 ' + MF.t(ins.back); MF.Sfx.play('good');
        if (ins.backFlag) { g.setFlag(ins.backFlag); UI.toast('✨ ' + X('You found a hidden message!', 'Anda menjumpai pesanan tersembunyi!'), 'ev', 4500); }
      };
      var turn = UI.btn('↻ ' + X('Turn it over', 'Balikkan'), 'ghost small', function () { UI.insp.autoRot = false; UI.insp.yaw = Math.PI; });
      left.appendChild(turn);
      if ((ins.backFlag && g.flag(ins.backFlag))) { backBox.hidden = false; backBox.innerHTML = '🔍 ' + MF.t(ins.back); }
      UI._backWatch = setInterval(function () { if (!UI.insp || m.closed) { clearInterval(UI._backWatch); return; } if (UI.insp.facingBack()) reveal(); }, 200);
    }
  };
  UI.disposeInspector = function () { if (UI._backWatch) { clearInterval(UI._backWatch); UI._backWatch = null; } if (UI.insp) UI.insp.stop(); };

  /* ------------------------------------------------------------------ photos (zoom reveals details) */
  // draws a photo into a container with zoom + pan; calls onZoom() when the player zooms in enough
  UI.photoWidget = function (it, onZoom) {
    var wrap = el('div', 'pv'), vp = el('div', 'pv-vp'), cv = el('canvas', 'pv-cv'); vp.appendChild(cv); wrap.appendChild(vp);
    MF.art.paint(it.art, cv, it);
    var z = 1, tx = 0, ty = 0, drag = false, lx = 0, ly = 0, fired = false;
    var apply = function () { var lim = (z - 1) * 260; tx = Math.max(-lim, Math.min(lim, tx)); ty = Math.max(-lim * 0.6, Math.min(lim * 0.6, ty)); cv.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + z + ')'; if (z >= 2 && !fired) { fired = true; if (onZoom) onZoom(); } zl.textContent = Math.round(z * 100) + '%'; };
    var ctr = el('div', 'pv-ctr'), zl = el('span', 'pv-zl', '100%');
    var plus = UI.btn('🔍＋ ' + X('Zoom in', 'Zum masuk'), 'primary small', function () { z = Math.min(4, z + 0.75); apply(); MF.Sfx.play('click'); });
    var minus = UI.btn('－', 'ghost small', function () { z = Math.max(1, z - 0.75); if (z === 1) { tx = 0; ty = 0; } apply(); });
    var rst = UI.btn('⟲', 'ghost small', function () { z = 1; tx = 0; ty = 0; apply(); });
    ctr.appendChild(plus); ctr.appendChild(minus); ctr.appendChild(rst); ctr.appendChild(zl); wrap.appendChild(ctr);
    vp.addEventListener('wheel', function (e) { e.preventDefault(); z = Math.max(1, Math.min(4, z + (e.deltaY < 0 ? 0.35 : -0.35))); if (z === 1) { tx = 0; ty = 0; } apply(); }, { passive: false });
    vp.addEventListener('pointerdown', function (e) { drag = true; lx = e.clientX; ly = e.clientY; vp.setPointerCapture(e.pointerId); vp.classList.add('grab'); });
    vp.addEventListener('pointerup', function () { drag = false; vp.classList.remove('grab'); });
    vp.addEventListener('pointermove', function (e) { if (!drag || z === 1) return; tx += e.clientX - lx; ty += e.clientY - ly; lx = e.clientX; ly = e.clientY; apply(); });
    return wrap;
  };
  UI.photoBody = function (it, host) {
    var g = UI.g; host.innerHTML = '';
    var fixed = g.flag(it.fixFlag || 'clock_fixed') && it.realT != null, stamp = it.stampT != null ? MF.fmtTime(it.stampT) : '';
    var wrap = UI.photoWidget(it, function () { g.markViewed(it.id + ':zoom'); notice.hidden = false; notice.innerHTML = '🔍 ' + MF.t(it.zoomNotice); MF.Sfx.play('good'); });
    var side = el('div', 'pv-side');
    side.innerHTML = (it.stampT != null ? '<p class="ins-where">📷 ' + (it.stampLabel ? MF.t(it.stampLabel) : X('Camera time stamp', 'Cap masa kamera')) + ': <b>' + stamp + '</b>' + (fixed ? ' → ' + X('real time', 'masa sebenar') + ': <b class="okt">' + MF.fmtTime(it.realT) + '</b>' : '') + '</p>' : '<p class="ins-where">📍 ' + (it.where ? MF.t(it.where) : '') + '</p>') + '<p class="ins-desc">' + MF.t(it.desc) + '</p>';
    var notice = el('div', 'zoom-notice'); notice.hidden = true; side.appendChild(notice);
    if (g.S.viewed[it.id + ':zoom']) { notice.hidden = false; notice.innerHTML = '🔍 ' + MF.t(it.zoomNotice); }
    else side.insertAdjacentHTML('beforeend', '<p class="tip">💡 ' + X('Zoom in to look for small details!', 'Zum masuk untuk mencari butiran kecil!') + '</p>');
    host.appendChild(wrap); host.appendChild(side);
  };
  UI.openPhoto = function (it) {
    var g = UI.g, m = UI.modal({ cls: 'inspect photo', title: MF.t(it.title), icon: '🖼️' }); var host = el('div', 'pv-host'); m.body.appendChild(host); UI.photoBody(it, host);
    UI._itemFooter(it, m); return m;
  };
  /* camera gallery with the "check the clock" puzzle */
  UI.openCamera = function (it) {
    var g = UI.g, m = UI.modal({ cls: 'inspect camera', title: MF.t(it.title), icon: '📷' }); var body = m.body;
    var render = function () {
      body.innerHTML = ''; m.foot.innerHTML = '';
      var intro = el('p', 'ins-desc', MF.t(it.desc) + '<br><span class="tip">💡 ' + X('Tap a photo to look closely. Photos you open are saved in your notebook.', 'Ketik gambar untuk melihatnya dengan teliti. Gambar yang dibuka disimpan dalam buku nota.') + '</span>');
      body.appendChild(intro);
      var grid = el('div', 'gallery'); body.appendChild(grid);
      g.C.items.filter(function (x) { return x.photo; }).forEach(function (p) {
        var card = el('button', 'gcard' + (g.has(p.id) ? ' seen' : '')), c = el('canvas'); c.width = 240; c.height = 150;
        var tmp = el('canvas'); MF.art.paint(p.art, tmp, p); c.getContext('2d').drawImage(tmp, 0, 0, 240, 150);
        card.appendChild(c); card.insertAdjacentHTML('beforeend', '<span>' + MF.t(p.title) + '<br><small>📷 ' + MF.fmtTime(p.stampT) + '</small></span>' + (g.has(p.id) ? '<i class="tick">✔</i>' : ''));
        card.onclick = function () { g.give(p.id, 'camera') && UI.newEvidenceToast(p); showPhoto(p); }; grid.appendChild(card);
      });
      var done = g.puzzleDone(it.puzzle), P = g.C.puzzles[it.puzzle];
      var cb = UI.btn((done ? '✔ ' : '⏱ ') + MF.t(P.title), done ? 'ghost' : 'primary', function () {
        if (!g.has('ph_shelf') || !g.S.viewed['ph_shelf:zoom']) { UI.toast('🔍 ' + X('Open Photo 2 and zoom in first. Look carefully at the wall behind the boys.', 'Buka Gambar 2 dan zum dahulu. Lihat dinding di belakang budak-budak itu.'), 'warn', 5000); MF.Sfx.play('bad'); return; }
        UI.openPuzzle(it.puzzle, function () { render(); });
      });
      m.foot.appendChild(cb); m.foot.appendChild(UI.btn(X('Close', 'Tutup'), 'ghost', function () { m.close(); }));
    };
    var showPhoto = function (p) {
      body.innerHTML = ''; m.foot.innerHTML = ''; var host = el('div', 'pv-host'); body.appendChild(host); UI.photoBody(p, host);
      m.foot.appendChild(UI.btn('◀ ' + X('Back to camera', 'Kembali ke kamera'), 'primary', function () { render(); }));
      var mk = el('div', 'mark-btns'); [['rel', '⭐', X('Important', 'Penting')], ['irr', '🚫', X('Not important', 'Tidak penting')]].forEach(function (a) {
        var bb = UI.btn(a[1] + ' ' + a[2], 'ghost small' + (g.S.marks[p.id] === a[0] ? ' on' : ''), function () { g.setMark(p.id, g.S.marks[p.id] === a[0] ? null : a[0]); showPhoto(p); }); mk.appendChild(bb);
      }); m.foot.appendChild(mk);
    };
    render(); return m;
  };

  /* ------------------------------------------------------------------ small text popup (e.g. "the sofa has only popcorn") */
  UI.openText = function (label, text) {
    var m = UI.modal({ cls: 'small', title: MF.t(label), icon: '🔎' }); m.body.innerHTML = '<p class="big-p">' + MF.t(text) + '</p>';
    m.foot.appendChild(UI.btn(X('OK', 'OK'), 'primary', function () { m.close(); })); return m;
  };

  /* ====================================================================== PUZZLE RUNNER */
  // Educational puzzles inside the story. Junior = 3 choices + free hints; Standard = 4 choices; Advanced = type the answer.
  UI.openPuzzle = function (pid, onDone) {
    var g = UI.g, P = g.C.puzzles[pid], D = g.D, sub = UI.SUBJ[P.subject] || UI.SUBJ.thinking, step = 0, hintN = 0, wrongs = 0;
    var m = UI.modal({ cls: 'puzzle', title: MF.t(P.title), icon: '🧩', sticky: true });
    var steps = P.steps.map(function (s) { return UI._prepStep(s, D); });
    var dots = el('div', 'pz-dots'), card = el('div', 'pz-card'), hintBox = el('div', 'pz-hint'), msg = el('div', 'pz-msg'), foot = m.foot;
    m.body.innerHTML = '<div class="pz-top"><span class="chip big" style="--kc:' + sub.c + '">' + sub.ic + ' ' + sub.n() + '</span><p class="pz-intro">' + MF.t(P.intro) + '</p></div>';
    if (P.art && MF.art[P.art]) { var cv = el('canvas', 'art-cv pz-art'); m.body.appendChild(cv); MF.art.paint(P.art, cv); }
    m.body.appendChild(dots); m.body.appendChild(card); m.body.appendChild(msg); m.body.appendChild(hintBox);

    function drawDots() { dots.innerHTML = steps.map(function (s, i) { return '<i class="' + (i < step ? 'done' : i === step ? 'cur' : '') + '"></i>'; }).join(''); }
    function say(html, cls) { msg.className = 'pz-msg ' + (cls || ''); msg.innerHTML = html; }
    function wrong() {
      wrongs++; MF.Sfx.play('bad'); card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
      say('✖ ' + X('Not quite. Try again!', 'Belum tepat. Cuba lagi!') + (wrongs >= 2 ? ' ' + X('Tap 💡 Hint to get help.', 'Ketik 💡 Petunjuk untuk bantuan.') : ''), 'bad'); hintBtn.hidden = false;
    }
    var hintBtn = UI.btn('💡 ' + X('Hint', 'Petunjuk'), 'ghost small', function () {
      var hs = steps[step].src.hints || []; if (!hs.length) return;
      if (hintN >= hs.length) { say(X('No more hints. You can do it!', 'Tiada petunjuk lagi. Anda boleh!'), ''); return; }
      // first hint is free; the next ones cost a token (unless Junior)
      if (hintN > 0 && !D.freeHints) { if (!g.spendToken()) { UI.toast('💡 ' + X('No hint tokens. Answer a bonus question in the notebook to earn one!', 'Tiada token petunjuk. Jawab soalan bonus dalam buku nota untuk mendapatkannya!'), 'warn', 5000); return; } UI.updateHud(); }
      else g.S.hints++;
      hintBox.innerHTML = '<div class="hint-line">💡 ' + MF.t(hs[hintN]) + '</div>'; hintN++; MF.Sfx.play('page');
    });
    hintBtn.hidden = true; foot.appendChild(hintBtn);
    var nextBtn = UI.btn(X('Next', 'Seterusnya') + ' ▶', 'primary', function () { advance(); }); nextBtn.hidden = true;
    var closeBtn = UI.btn(X('Leave', 'Keluar'), 'ghost', function () { m.close(); }); foot.appendChild(nextBtn); foot.appendChild(closeBtn);

    function right() {
      MF.Sfx.play('good'); say('✔ ' + X('Correct!', 'Betul!'), 'good'); hintBtn.hidden = true; nextBtn.hidden = false; card.classList.add('locked');
      nextBtn.innerHTML = (step === steps.length - 1 ? X('Finish', 'Selesai') : X('Next', 'Seterusnya')) + ' ▶'; nextBtn.focus();
    }
    function advance() {
      step++; hintN = 0; wrongs = 0; hintBox.innerHTML = ''; msg.innerHTML = '';
      if (step >= steps.length) return finish(); nextBtn.hidden = true; show();
    }
    function finish() {
      var made = g.completePuzzle(pid); card.remove(); dots.remove(); hintBox.remove(); nextBtn.remove(); hintBtn.remove();
      MF.Sfx.play('win'); say('', '');
      msg.className = 'pz-after'; msg.innerHTML = '<div class="pz-star">⭐</div><p>' + MF.t(P.after) + '</p>' + made.map(function (id) { var it = g.item(id); return '<div class="pz-new">' + (it.icon || '') + ' ' + X('New in your notebook:', 'Baru dalam buku nota:') + ' <b>' + MF.t(it.title) + '</b></div>'; }).join('') +
        (P.tokens ? '<div class="pz-new">💡 +' + P.tokens + ' ' + X('hint token', 'token petunjuk') + '</div>' : '');
      UI.updateHud(); closeBtn.innerHTML = X('Continue', 'Teruskan') + ' ▶'; closeBtn.className = 'btn primary';
      closeBtn.onclick = function () { m.close(); if (onDone) onDone(made); if (made.indexOf('watch') >= 0) UI.openItem('watch'); };
    }
    function show() { drawDots(); card.className = 'pz-card'; card.innerHTML = ''; say('', ''); UI._renderStep(steps[step], card, right, wrong); }
    show(); return m;
  };

  // Prepare one step for the current difficulty (reduce/keep choices, decide typed answers)
  UI._prepStep = function (s, D) {
    var st = { src: s, type: s.type };
    if (s.type === 'choice' || s.type === 'number') {
      var opts = s.options.slice(), ans = (typeof s.answer === 'number' && s.type === 'choice') ? s.answer : opts.indexOf(s.answer);
      var list = opts.map(function (o, i) { return { o: o, i: i }; });
      if (D.choices === 3 && list.length > 3) { var wrongs = MF.shuffle(list.filter(function (x) { return x.i !== ans; })).slice(0, 2); list = list.filter(function (x) { return x.i === ans || wrongs.indexOf(x) >= 0; }); }
      st.list = list; st.ans = ans; st.typed = (s.type === 'number' && D.typed);
    }
    return st;
  };
  UI._renderStep = function (st, card, right, wrong) {
    var s = st.src; card.insertAdjacentHTML('beforeend', '<div class="pz-q">' + MF.t(s.q) + '</div>');
    var body = el('div', 'pz-body'); card.appendChild(body);
    if (st.type === 'choice' || (st.type === 'number' && !st.typed)) {
      body.className += ' choices';
      st.list.forEach(function (x, k) {
        var label = (typeof x.o === 'object') ? MF.t(x.o) : E(x.o) + (s.type === 'number' && s.unit ? ' ' + MF.t(s.unit) : '');
        var b = el('button', 'choice', '<b>' + 'ABCD'[k] + '</b><span>' + label + '</span>');
        b.onclick = function () { if (card.classList.contains('locked')) return; if (x.i === st.ans) { b.classList.add('ok'); right(); } else { b.classList.add('no'); b.disabled = true; wrong(); } };
        body.appendChild(b);
      });
    } else if (st.type === 'number') {          // Advanced: type the number
      body.innerHTML = '<input class="num-in" type="number" inputmode="numeric" autocomplete="off" placeholder="?"> <span class="unit">' + (s.unit ? MF.t(s.unit) : '') + '</span>';
      var inp = body.querySelector('input'), go = UI.btn(X('Check', 'Semak'), 'primary', function () { if (card.classList.contains('locked')) return; var v = parseFloat(inp.value); if (v === s.answer) { inp.classList.add('ok'); right(); } else { inp.classList.add('no'); wrong(); } });
      inp.addEventListener('keydown', function (e) { e.stopPropagation(); if (e.key === 'Enter') go.click(); }); body.appendChild(go); setTimeout(function () { inp.focus(); }, 50);
    } else if (st.type === 'cloze') {
      var wrap = el('div', 'cloze'); var sels = [];
      s.parts.forEach(function (p) {
        if (typeof p === 'string') wrap.insertAdjacentHTML('beforeend', '<span>' + E(p) + '</span>');
        else { var sel = el('select', 'cz-sel'); sel.innerHTML = '<option value="">…</option>' + p.blank.map(function (o) { return '<option>' + E(o) + '</option>'; }).join(''); sel.addEventListener('keydown', function (e) { e.stopPropagation(); }); wrap.appendChild(sel); sels.push({ sel: sel, ans: p.answer }); }
      });
      body.appendChild(wrap);
      var chk = UI.btn(X('Check', 'Semak'), 'primary', function () {
        if (card.classList.contains('locked')) return; var allOk = true;
        sels.forEach(function (x) { var ok = x.sel.value === x.ans; x.sel.classList.toggle('ok', ok); x.sel.classList.toggle('no', !ok && x.sel.value !== ''); if (!ok) allOk = false; });
        if (allOk) right(); else wrong();
      }); body.appendChild(chk);
    } else if (st.type === 'classify') {
      var rows = [], list = el('div', 'classify'); body.appendChild(list);
      s.statements.forEach(function (sx) {
        var row = el('div', 'cls-row'); row.innerHTML = '<div class="cls-text">' + MF.t(sx.text) + '</div>';
        var bo = el('button', 'cls-b', '👁️ ' + X('Observation', 'Pemerhatian')), bi = el('button', 'cls-b', '💭 ' + X('Inference', 'Inferens')), val = null;
        bo.onclick = function () { val = 'observation'; bo.classList.add('on'); bi.classList.remove('on'); row.classList.remove('no'); };
        bi.onclick = function () { val = 'inference'; bi.classList.add('on'); bo.classList.remove('on'); row.classList.remove('no'); };
        row.appendChild(bo); row.appendChild(bi); list.appendChild(row); rows.push({ row: row, get: function () { return val; }, ans: sx.answer });
      });
      var chk2 = UI.btn(X('Check', 'Semak'), 'primary', function () {
        if (card.classList.contains('locked')) return; var allOk = true;
        rows.forEach(function (r) { var ok = r.get() === r.ans; r.row.classList.toggle('no', !ok); r.row.classList.toggle('ok', ok); if (!ok) allOk = false; });
        if (allOk) right(); else wrong();
      }); body.appendChild(chk2);
    } else if (st.type === 'code') {
      var pl = el('div', 'patterns'); (s.patterns || []).forEach(function (p, i) { pl.insertAdjacentHTML('beforeend', '<div class="pat"><b>' + (i + 1) + '</b> ' + E(p) + '</div>'); }); body.appendChild(pl);
      var codeRow = el('div', 'code-row'); var ins = []; for (var i = 0; i < s.answer.length; i++) { var d = el('input', 'code-in'); d.maxLength = 1; d.inputMode = 'numeric'; d.autocomplete = 'off'; d.addEventListener('keydown', function (e) { e.stopPropagation(); }); d.addEventListener('input', function () { if (this.value && this.nextElementSibling && this.nextElementSibling.tagName === 'INPUT') this.nextElementSibling.focus(); }); ins.push(d); codeRow.appendChild(d); }
      body.appendChild(codeRow);
      var op = UI.btn('🔓 ' + X('Open', 'Buka'), 'primary', function () { if (card.classList.contains('locked')) return; var v = ins.map(function (x) { return x.value; }).join(''); if (v === s.answer) { ins.forEach(function (x) { x.classList.add('ok'); }); right(); } else { ins.forEach(function (x) { x.classList.add('no'); }); setTimeout(function () { ins.forEach(function (x) { x.classList.remove('no'); }); }, 600); wrong(); } });
      body.appendChild(op); setTimeout(function () { ins[0].focus(); }, 50);
    }
  };
})(window.MF);
