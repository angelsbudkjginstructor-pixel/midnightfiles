/* ============================================================================
   MF.UI (part 2) — Detective Notebook (Evidence / People / Timeline / Deduction Board),
   interviews with "present evidence", bonus questions, final accusation, endings, exit ticket.
   Safety checks: nothing is graded until the player presses the final accuse button,
   evidence picks are limited, and every screen can be left without losing progress.
   ============================================================================ */
(function (MF) {
  'use strict';
  var UI = MF.UI, E = MF.esc, el = MF.el;
  var X = function (en, bm) { return MF.t({ en: en, bm: bm }); };
  var person = function (id) { return UI.g.C.people.filter(function (p) { return p.id === id; })[0]; };
  var avatar = function (p, sz) { return '<span class="avatar ' + (sz || '') + '" style="background:' + (p ? p.color : '#888') + '">' + E(p ? p.name[0] : '?') + '</span>'; };

  /* ====================================================================== NOTEBOOK */
  UI.openNotebook = function (tab) {
    if (UI.isOpen('notebook')) return; var g = UI.g, cur = tab || UI._nbTab || 'ev';
    var m = UI.modal({ cls: 'notebook', title: X('Detective Notebook', 'Buku Nota Detektif'), icon: '📓', onClose: function () { UI._nbTab = cur; UI.updateHud(); } });
    var tabs = el('div', 'nb-tabs'), pane = el('div', 'nb-pane'); m.body.appendChild(tabs); m.body.appendChild(pane);
    var defs = [['ev', '📋', X('Evidence', 'Bukti')], ['ppl', '👥', X('People', 'Orang')], ['tl', '🕒', X('Timeline', 'Garis masa')], ['db', '🧩', X('Deduction Board', 'Papan Deduksi')]];
    function draw() {
      tabs.innerHTML = ''; defs.forEach(function (d) { var b = el('button', 'nb-tab' + (cur === d[0] ? ' on' : ''), d[1] + ' <span>' + d[2] + '</span>'); b.onclick = function () { cur = d[0]; draw(); MF.Sfx.play('page'); }; tabs.appendChild(b); });
      pane.innerHTML = ''; pane.className = 'nb-pane t-' + cur;
      ({ ev: nbEvidence, ppl: nbPeople, tl: nbTimeline, db: nbBoard })[cur](pane, draw, m);
      foot();
    }
    function foot() {
      m.foot.innerHTML = '';
      m.foot.appendChild(el('span', 'tok-pill', '💡 ' + X('Hint tokens', 'Token petunjuk') + ': <b>' + (g.freeHints() ? '∞' : g.tokens()) + '</b>'));
      if (!g.freeHints()) m.foot.appendChild(UI.btn('⭐ ' + X('Earn a token', 'Dapatkan token'), 'ghost small', function () { UI.openBonus(function () { draw(); }); }));
      var sp = el('span', 'spacer'); m.foot.appendChild(sp);
      m.foot.appendChild(UI.btn(X('Close', 'Tutup') + ' (Tab)', 'primary', function () { m.close(); }));
    }
    draw(); return m;
  };

  /* ---------------------------------------------------------------- Evidence tab */
  function nbEvidence(pane, redraw) {
    var g = UI.g, filter = UI._evFilter || 'all', sel = UI._evSel && g.has(UI._evSel) ? UI._evSel : null, cmp = null;
    var left = el('div', 'ev-left'), right = el('div', 'ev-right'); pane.appendChild(left); pane.appendChild(right);
    var fl = el('div', 'ev-filters');
    [['all', X('All', 'Semua')], ['confirmed', '✔ ' + X('Confirmed', 'Disahkan')], ['claim', '💬 ' + X('Statements', 'Kenyataan')], ['inference', '💡 ' + X('Inferences', 'Inferens')], ['rel', '⭐'], ['irr', '🚫']].forEach(function (f) {
      var b = el('button', 'chipbtn' + (filter === f[0] ? ' on' : ''), f[1]); b.onclick = function () { UI._evFilter = f[0]; redraw(); }; fl.appendChild(b);
    }); left.appendChild(fl);
    var banner = el('div', 'cmp-banner'); banner.hidden = true; left.appendChild(banner);
    var list = el('div', 'ev-grid'); left.appendChild(list);
    var items = g.foundList().filter(function (it) {
      var cat = UI.g.kindOf(it); if (filter === 'all') return true; if (filter === 'rel' || filter === 'irr') return g.S.marks[it.id] === filter;
      return cat === filter;
    });
    if (!items.length) list.innerHTML = '<p class="empty">' + X('Nothing here yet. Explore the house and press E on things!', 'Belum ada apa-apa. Terokai rumah dan tekan E pada sesuatu!') + '</p>';
    items.forEach(function (it) {
      var cat = UI.catOf(it), k = UI.KIND[cat], mk = g.S.marks[it.id], st = cat === 'claim' ? g.claimStatus(it.id) : null;
      var c = el('button', 'ev-card' + (sel === it.id ? ' sel' : '') + (mk === 'irr' ? ' dim' : ''));
      c.style.setProperty('--kc', k.c);
      c.innerHTML = '<span class="ev-ic">' + (it.icon || k.ic) + '</span><span class="ev-t">' + MF.t(it.title) + '</span><span class="ev-flags">' + (mk === 'rel' ? '⭐' : mk === 'irr' ? '🚫' : mk === 'unsure' ? '❔' : '') + (st === 'contradicted' ? '⚠' : st === 'supported' ? '✔' : '') + '</span>';
      c.onclick = function () {
        if (cmp) { doCompare(cmp, it.id); return; } UI._evSel = it.id; sel = it.id; MF.Sfx.play('click');
        list.querySelectorAll('.ev-card').forEach(function (x) { x.classList.remove('sel'); }); c.classList.add('sel'); detail();
      };
      list.appendChild(c);
    });
    function detail(resultHtml) {
      right.innerHTML = ''; if (!sel) { right.innerHTML = '<p class="empty">👈 ' + X('Choose an item to read about it.', 'Pilih satu item untuk membacanya.') + '</p>' + compareHelp(); return; }
      var it = g.item(sel), cat = UI.catOf(it), k = UI.KIND[cat];
      var box = el('div', 'ev-detail'); box.style.setProperty('--kc', k.c);
      box.innerHTML = '<h3>' + (it.icon || '') + ' ' + MF.t(it.title) + '</h3><div class="ins-status">' + UI.badge(it) + ' ' + UI.statusBadge(it) + '</div>' + (it.where ? '<p class="ins-where">📍 ' + MF.t(it.where) + '</p>' : '') + '<p class="ins-desc">' + MF.t(it.desc) + '</p>';
      if (it.photo && it.stampT != null) { var fixed = g.flag(it.fixFlag || 'clock_fixed'); box.insertAdjacentHTML('beforeend', '<p class="ins-where">📷 ' + MF.fmtTime(it.stampT) + (it.realT == null ? '' : (fixed ? ' → <b class="okt">' + MF.fmtTime(it.realT) + '</b>' : ' <span class="warn-t">(' + X('camera time — not checked', 'masa kamera — belum disemak') + ')</span>')) + '</p>'); }
      if (g.S.shared[it.id]) box.insertAdjacentHTML('beforeend', '<p class="tip">🤝 ' + X('Shared by your team', 'Dikongsi oleh pasukan anda') + '</p>');
      var marks = el('div', 'mark-btns'); [['rel', '⭐', X('Important', 'Penting')], ['irr', '🚫', X('Not important', 'Tidak penting')], ['unsure', '❔', X('Not sure', 'Tidak pasti')]].forEach(function (a) {
        marks.appendChild(UI.btn(a[1] + ' ' + a[2], 'ghost small' + (g.S.marks[it.id] === a[0] ? ' on' : ''), function () { g.setMark(it.id, g.S.marks[it.id] === a[0] ? null : a[0]); redraw(); }));
      }); box.appendChild(marks);
      var note = el('textarea', 'note-in'); note.placeholder = MF.tp({ en: 'My notes…', bm: 'Nota saya…' }); note.value = g.S.notes[it.id] || ''; note.maxLength = 300;
      note.addEventListener('keydown', function (e) { e.stopPropagation(); }); note.addEventListener('input', function () { g.setNote(it.id, note.value); }); box.appendChild(note);
      var act = el('div', 'ev-actions');
      if (cat !== 'inference') act.appendChild(UI.btn('🔍 ' + X('Look closely', 'Lihat dengan teliti'), 'primary small', function () { UI.openItem(it.id); }));
      act.appendChild(UI.btn('⚖ ' + X('Compare with…', 'Bandingkan dengan…'), 'accent small', function () { cmp = it.id; banner.hidden = false; banner.innerHTML = '⚖ ' + X('Now tap a second item to compare with', 'Ketik item kedua untuk dibandingkan dengan') + ' <b>' + MF.t(it.title) + '</b> <button class="chipbtn" id="cmp-x">✕</button>'; banner.querySelector('#cmp-x').onclick = function () { cmp = null; banner.hidden = true; }; }));
      box.appendChild(act); if (resultHtml) { var r = el('div', 'cmp-result', resultHtml.html); r.classList.add(resultHtml.cls); box.appendChild(r); }
      right.appendChild(box);
    }
    function compareHelp() { return '<div class="help-box">⚖ <b>' + X('Compare tool', 'Alat perbandingan') + '</b><br>' + X('Pick a witness statement, then compare it with a clue. Does the clue agree with the story, or does it show a mistake or a lie?', 'Pilih satu kenyataan saksi, kemudian bandingkan dengan petunjuk. Adakah petunjuk itu bersetuju dengan cerita, atau menunjukkan kesilapan atau pembohongan?') + '</div>'; }
    function doCompare(a, b) {
      cmp = null; banner.hidden = true; if (a === b) { detail(); return; }
      var r = g.compare(a, b), A = g.item(a), B = g.item(b), res;
      var head = '<div class="cmp-pair"><span>' + (A.icon || '') + ' ' + MF.t(A.title) + '</span> ⚖ <span>' + (B.icon || '') + ' ' + MF.t(B.title) + '</span></div>';
      if (r.r === 'contradiction') { MF.Sfx.play('bad'); res = { cls: 'bad', html: head + '<b>⚠ ' + X('They do NOT match!', 'Kedua-duanya TIDAK sepadan!') + '</b><p>' + MF.t(r.pair.text) + '</p>' + (r.pair.explain ? '<p class="why">💭 ' + MF.t(r.pair.explain) + '</p>' : '') }; if (r.isNew) UI.toast('⚠ ' + X('Contradiction found!', 'Percanggahan dijumpai!'), 'warn'); }
      else if (r.r === 'support') { MF.Sfx.play('good'); res = { cls: 'good', html: head + '<b>✔ ' + X('They match!', 'Kedua-duanya sepadan!') + '</b><p>' + MF.t(r.pair.text) + '</p>' }; if (r.isNew) UI.toast('✔ ' + X('Story confirmed!', 'Cerita disahkan!'), 'ev'); }
      else if (r.r === 'locked') { MF.Sfx.play('click'); res = { cls: 'lock', html: head + '<b>🔒 ' + X('Not sure yet…', 'Belum pasti…') + '</b><p>' + X('These two ARE connected, but something is not ready. Have you checked every clue, solved the puzzles on your evidence, and fixed anything that looks wrong?', 'Kedua-duanya BERKAITAN, tetapi ada yang belum siap. Sudahkah anda semak setiap petunjuk, selesaikan teka-teki pada bukti anda, dan betulkan apa yang kelihatan salah?') + '</p>' }; }
      else { MF.Sfx.play('click'); res = { cls: 'none', html: head + '<b>🤷 ' + X('No link found', 'Tiada kaitan dijumpai') + '</b><p>' + X('These two do not seem to be connected. Try another pair!', 'Kedua-duanya nampaknya tidak berkaitan. Cuba pasangan lain!') + '</p>' }; }
      sel = a; UI._evSel = a; detail(res); redraw_keep(a);
    }
    function redraw_keep() { list.querySelectorAll('.ev-card').forEach(function (x) { x.classList.remove('sel'); }); }
    detail();
    // tools row at the bottom of the left column
    var tools = el('div', 'ev-tools');
    tools.appendChild(UI.btn('💡 ' + X('Suggest a comparison', 'Cadang satu perbandingan'), 'ghost small', function () {
      var p = g.pairHint(); if (!p) { UI.toast(X('No new idea right now. Keep exploring and solving puzzles!', 'Tiada idea baru sekarang. Teruskan meneroka dan selesaikan teka-teki!'), 'warn'); return; }
      if (!g.spendToken()) { UI.toast('💡 ' + X('No hint tokens.', 'Tiada token petunjuk.'), 'warn'); return; }
      UI.toast('💡 ' + X('Try comparing', 'Cuba bandingkan') + ' <b>' + MF.t(g.item(p.a).title) + '</b> ⚖ <b>' + MF.t(g.item(p.b).title) + '</b>', 'ev', 7000); redraw();
    }));
    left.appendChild(tools);
  }

  /* ---------------------------------------------------------------- People tab */
  function nbPeople(pane, redraw) {
    var g = UI.g, grid = el('div', 'ppl-grid'); pane.appendChild(grid);
    g.C.people.forEach(function (p) {
      var card = el('div', 'ppl-card'); card.style.setProperty('--kc', p.color);
      var claims = g.foundList().filter(function (it) { return it.kind === 'claim' && it.person === p.id; });
      var pairs = g.pairsFor(p.id), mk = g.S.ppl[p.id];
      card.innerHTML = '<div class="ppl-head">' + avatar(p, 'lg') + '<div><b>' + E(p.name) + '</b><br><small>' + MF.t(p.role) + '</small><br><small>' + MF.t(p.rel) + ' · ' + (p.age || '') + '</small></div></div>';
      var body = el('div', 'ppl-body');
      if (!claims.length) body.innerHTML = '<p class="empty small">' + X('You have not interviewed this person yet.', 'Anda belum menemu bual orang ini.') + '</p>';
      claims.forEach(function (c) {
        var st = g.claimStatus(c.id); body.insertAdjacentHTML('beforeend', '<div class="ppl-claim ' + st + '">' + (st === 'contradicted' ? '⚠ ' : st === 'supported' ? '✔ ' : '❓ ') + MF.t(c.title) + '</div>');
      });
      pairs.forEach(function (pr) { if (pr.explain && pr.type === 'contradiction') body.insertAdjacentHTML('beforeend', '<div class="ppl-why">💭 ' + MF.t(pr.explain) + '</div>'); });
      card.appendChild(body);
      var mkRow = el('div', 'mark-btns'); [['suspect', '🔴', X('Suspect', 'Suspek')], ['unsure', '🟡', X('Not sure', 'Tidak pasti')], ['cleared', '🟢', X('Cleared', 'Dibersihkan')]].forEach(function (a) {
        mkRow.appendChild(UI.btn(a[1] + ' ' + a[2], 'ghost small' + (mk === a[0] ? ' on' : ''), function () { g.setPerson(p.id, mk === a[0] ? null : a[0]); redraw(); }));
      }); card.appendChild(mkRow); grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- Timeline tab */
  function nbTimeline(pane, redraw) {
    var g = UI.g, rows = g.timeline(), fixed = g.flag('clock_fixed');
    var top = el('div', 'tl-top', fixed ? '✔ ' + X('Camera clock fixed: photo times are now the REAL times.', 'Jam kamera dibetulkan: masa gambar kini masa SEBENAR.') : '⚠ ' + X('Photo times come from a camera. Are they really correct? Check them!', 'Masa gambar datang dari kamera. Adakah ia benar-benar betul? Semaklah!'));
    top.className = 'tl-top ' + (fixed ? 'good' : 'warn'); pane.appendChild(top);
    var line = el('div', 'tl'); pane.appendChild(line);
    if (!rows.length) line.innerHTML = '<p class="empty">' + X('Collect photos and witness statements to build the timeline.', 'Kumpulkan gambar dan kenyataan saksi untuk membina garis masa.') + '</p>';
    rows.forEach(function (r) {
      var it = g.item(r.id), cat = UI.catOf(it), k = UI.KIND[cat], row = el('div', 'tl-row'); row.style.setProperty('--kc', k.c);
      row.innerHTML = '<div class="tl-time">' + MF.fmtTime(r.t) + (r.was ? '<small>' + MF.tp({ en: 'was', bm: 'dulu' }) + ' ' + MF.fmtTime(r.was) + '</small>' : '') + (r.warn ? '<small class="warn-t">⚠ ' + MF.tp({ en: 'unchecked', bm: 'belum disemak' }) + '</small>' : '') + '</div><div class="tl-dot"></div><div class="tl-card"><b>' + (it.icon || '') + ' ' + MF.t(r.title) + '</b>' + (r.text ? '<br><span>' + MF.t(r.text) + '</span>' : '') + '</div>';
      row.querySelector('.tl-card').onclick = function () { UI.openItem(r.id); };
      line.appendChild(row);
    });
    var nt = el('textarea', 'note-in tl-note'); nt.placeholder = MF.tp({ en: 'My timeline ideas (e.g. "The watch was in the box at 3:10, gone by 3:25")', bm: 'Idea garis masa saya (cth. "Jam dalam kotak pukul 3:10, hilang pukul 3:25")' }); nt.value = g.S.notes.__tl || ''; nt.maxLength = 400;
    nt.addEventListener('keydown', function (e) { e.stopPropagation(); }); nt.addEventListener('input', function () { g.setNote('__tl', nt.value); }); pane.appendChild(nt);
  }

  /* ---------------------------------------------------------------- Deduction board */
  function nbBoard(pane, redraw, m) {
    var g = UI.g, open = UI._dbOpen || (g.C.questions.filter(function (q) { return !g.q(q.id).solved; })[0] || g.C.questions[0]).id;
    var head = el('div', 'db-head', '🧩 <b>' + X('Answer the 5 questions. Pick an answer AND link the evidence that proves it.', 'Jawab 5 soalan. Pilih jawapan DAN pautkan bukti yang membuktikannya.') + '</b> ' + g.solvedCount() + '/' + g.C.questions.length + ' ✔');
    pane.appendChild(head);
    var list = el('div', 'db-list'); pane.appendChild(list);
    g.C.questions.forEach(function (q) {
      var st = g.q(q.id), card = el('div', 'db-q' + (st.solved ? ' solved' : '') + (open === q.id ? ' open' : ''));
      var title = el('button', 'db-title', (st.solved ? '✅ ' : '⬜ ') + MF.t(q.title)); title.onclick = function () { UI._dbOpen = open === q.id ? null : q.id; redraw(); }; card.appendChild(title);
      if (open === q.id) {
        var body = el('div', 'db-body'); card.appendChild(body);
        var opts = el('div', 'db-opts'); q.options.forEach(function (o) {
          var b = el('button', 'db-opt' + (st.choice === o.id ? ' on' : '') + (st.solved && o.correct ? ' ok' : ''), '<i>' + (st.choice === o.id ? '◉' : '○') + '</i> ' + MF.t(o.text)); b.disabled = st.solved; b.onclick = function () { g.setChoice(q.id, o.id); MF.Sfx.play('click'); redraw(); }; opts.appendChild(b);
        }); body.appendChild(opts);
        body.insertAdjacentHTML('beforeend', '<div class="db-linkhead">📎 ' + X('Evidence that proves my answer', 'Bukti yang membuktikan jawapan saya') + ' <small>(' + st.linked.length + '/6)</small></div>');
        var links = el('div', 'db-links'); var found = g.foundList();
        if (!found.length) links.innerHTML = '<p class="empty small">' + X('No evidence yet.', 'Belum ada bukti.') + '</p>';
        found.forEach(function (it) {
          var cat = UI.catOf(it), k = UI.KIND[cat], on = st.linked.indexOf(it.id) >= 0, c = el('button', 'link-chip' + (on ? ' on' : ''), (it.icon || '') + ' ' + MF.t(it.title)); c.style.setProperty('--kc', k.c); c.disabled = st.solved;
          c.onclick = function () { g.toggleLink(q.id, it.id); MF.Sfx.play('click'); redraw(); }; links.appendChild(c);
        }); body.appendChild(links);
        var res = el('div', 'db-res'); body.appendChild(res);
        if (st.solved) res.innerHTML = '<div class="cmp-result good"><b>✔ ' + X('Proven!', 'Terbukti!') + '</b></div>';
        var bar = el('div', 'db-bar');
        if (!st.solved) {
          bar.appendChild(UI.btn('✔ ' + X('Check my answer', 'Semak jawapan saya'), 'primary', function () {
            var r = g.checkQuestion(q.id), out = '';
            if (r.r === 'pick') out = '<div class="cmp-result none">' + X('Pick an answer first.', 'Pilih jawapan dahulu.') + '</div>';
            else if (r.r === 'proof') { MF.Sfx.play('bad'); out = '<div class="cmp-result lock"><b>🔒 ' + X('Not enough proof yet.', 'Bukti belum mencukupi.') + '</b><br>' + (r.pf.flagsMissing.length ? X('Some of your clues are not understood yet. Solve the puzzles on them (🧩) and fix anything that looks wrong.', 'Sesetengah petunjuk belum difahami. Selesaikan teka-teki padanya (🧩) dan betulkan apa yang kelihatan salah.') + '<br>' : '') + (r.pf.groupsMissing ? X('Link more of the RIGHT evidence — you are missing proof in ', 'Pautkan lebih banyak bukti yang BETUL — anda kurang bukti dalam ') + r.pf.groupsMissing + X(' area(s).', ' bahagian.') : '') + '</div>'; }
            else if (r.r === 'wrong') { MF.Sfx.play('bad'); out = '<div class="cmp-result bad"><b>✖ ' + X('Your evidence does not support that answer.', 'Bukti anda tidak menyokong jawapan itu.') + '</b><br>' + X('Read your evidence again. Think about what it really shows.', 'Baca semula bukti anda. Fikirkan apa yang sebenarnya ia tunjukkan.') + '</div>'; }
            else { MF.Sfx.play('good'); UI.toast('✅ ' + X('Question solved!', 'Soalan diselesaikan!'), 'ev'); redraw(); return; }
            res.innerHTML = out;
          }));
          bar.appendChild(UI.btn('💡 ' + X('Hint', 'Petunjuk') + (g.freeHints() ? '' : ' (−1 💡)'), 'ghost', function () {
            var h = g.questionHint(q.id);
            if (h.none) { res.innerHTML = '<div class="cmp-result none">' + X('No more hints for this question.', 'Tiada lagi petunjuk untuk soalan ini.') + '</div>'; return; }
            if (h.noTokens) { UI.toast('💡 ' + X('No hint tokens. Earn one with a bonus question!', 'Tiada token petunjuk. Dapatkan satu dengan soalan bonus!'), 'warn', 5000); return; }
            res.innerHTML = '<div class="cmp-result hint">💡 ' + MF.t(h.hint) + '</div>'; MF.Sfx.play('page'); UI.updateHud(); foot_refresh();
          }));
        }
        body.appendChild(bar);
      }
      list.appendChild(card);
    });
    function foot_refresh() { var t = m.foot.querySelector('.tok-pill b'); if (t) t.textContent = g.freeHints() ? '∞' : g.tokens(); }
    var go = el('div', 'db-accuse'); go.appendChild(UI.btn('🕵️ ' + X("I'm ready to name the culprit!", 'Saya sudah bersedia menamakan pelaku!'), 'danger big', function () {
      var n = g.solvedCount();
      if (n < 3 && !UI._warnedAccuse) { UI._warnedAccuse = true; UI.toast('⚠ ' + X('You have solved only ' + n + ' of 5 questions. Press the button again if you are sure.', 'Anda baru menyelesaikan ' + n + ' daripada 5 soalan. Tekan butang sekali lagi jika anda pasti.'), 'warn', 6000); return; }
      m.close(); UI.openConclusion();
    })); pane.appendChild(go);
  }

  /* ====================================================================== INTERVIEWS */
  UI.openDialogue = function (pid) {
    var g = UI.g, C = g.C, P = person(pid), D = C.dialogue[pid]; if (!P || !D) return;
    var d = g._d(pid), first = !d.greeted; d.greeted = true;
    var m = UI.modal({ cls: 'dialogue', title: E(P.name), icon: '💬', onClose: function () { UI.updateHud(); } });
    var left = el('div', 'dlg-left'), right = el('div', 'dlg-right'); m.body.appendChild(left); m.body.appendChild(right);
    left.innerHTML = avatar(P, 'xl') + '<div class="dlg-name">' + E(P.name) + '</div><div class="dlg-role">' + MF.t(P.role) + '</div>';
    var bubble = el('div', 'bubble'), menu = el('div', 'dlg-menu'), extra = el('div', 'dlg-extra'); right.appendChild(bubble); right.appendChild(extra); right.appendChild(menu);

    function speak(lines, then) {
      var i = 0; menu.innerHTML = ''; extra.innerHTML = '';
      (function show() {
        bubble.innerHTML = '<span class="speaker" style="color:' + P.color + '">' + E(P.name) + ':</span> ' + MF.t(lines[i]); MF.Sfx.play('page');
        menu.innerHTML = ''; var nb = UI.btn(i < lines.length - 1 ? X('Next', 'Seterusnya') + ' ▶' : X('OK', 'OK') + ' ✔', 'primary', function () { if (i < lines.length - 1) { i++; show(); } else if (then) then(); }); menu.appendChild(nb); nb.focus();
      })();
    }
    function news(ids) { ids.forEach(function (id) { var it = g.item(id); if (it) UI.newEvidenceToast(it); }); UI.updateHud(); }
    function home() {
      menu.innerHTML = ''; extra.innerHTML = '';
      if (g.has('camera') && pid === 'meiling') extra.appendChild(UI.btn('📷 ' + X('Open the camera', 'Buka kamera'), 'accent small', function () { UI.openItem('camera'); }));
      g.topics(pid).forEach(function (t) {
        var asked = d.asked[t.id], b = UI.btn((asked ? '✓ ' : '❓ ') + MF.t(t.label), 'topic' + (asked ? ' asked' : ''), function () { var r = g.ask(pid, t.id); speak(r.lines, function () { news(r.newItems); home(); }); }); menu.appendChild(b);
      });
      menu.appendChild(UI.btn('📎 ' + X('Show evidence', 'Tunjuk bukti'), 'accent', showPicker));
      menu.appendChild(UI.btn('👋 ' + X('Goodbye', 'Selamat tinggal'), 'ghost', function () { m.close(); }));
    }
    function showPicker() {
      menu.innerHTML = ''; extra.innerHTML = '<div class="pick-head">📎 ' + X('Choose evidence to show', 'Pilih bukti untuk ditunjukkan') + '</div>';
      var grid = el('div', 'pick-grid'); extra.appendChild(grid); var list = g.foundList().filter(function (it) { return it.id !== 'camera'; });
      if (!list.length) grid.innerHTML = '<p class="empty small">' + X('You have no evidence yet.', 'Anda belum ada bukti.') + '</p>';
      list.forEach(function (it) {
        var k = UI.KIND[UI.catOf(it)], c = el('button', 'link-chip', (it.icon || '') + ' ' + MF.t(it.title)); c.style.setProperty('--kc', k.c);
        c.onclick = function () { var r = g.present(pid, it.id); speak(r.lines, function () { news(r.newItems); home(); }); }; grid.appendChild(c);
      });
      menu.appendChild(UI.btn('◀ ' + X('Back', 'Kembali'), 'ghost', home));
    }
    if (first) speak([D.greeting], home); else { bubble.innerHTML = '<span class="speaker" style="color:' + P.color + '">' + E(P.name) + ':</span> ' + X('Yes, detective? What would you like to ask?', 'Ya, detektif? Apa yang anda mahu tanya?'); home(); }
    return m;
  };

  /* ====================================================================== BONUS QUESTION (earn a hint token) */
  UI.openBonus = function (done) {
    var g = UI.g, q = g.nextBonus(); if (!q) { UI.toast('⭐ ' + X('You have earned all the bonus tokens for this case!', 'Anda telah mendapat semua token bonus untuk kes ini!'), 'ev'); return; }
    var sub = UI.SUBJ[q.subject] || { ic: '⭐', c: '#eab308', n: function () { return X('Bonus', 'Bonus'); } };
    var m = UI.modal({ cls: 'puzzle small', title: X('Bonus question', 'Soalan bonus'), icon: '⭐', sticky: true }), answered = false;
    m.body.innerHTML = '<div class="pz-top"><span class="chip big" style="--kc:' + sub.c + '">' + sub.ic + ' ' + sub.n() + '</span><p class="pz-intro">' + X('Answer correctly to win 1 hint token!', 'Jawab dengan betul untuk menang 1 token petunjuk!') + '</p></div>';
    var card = el('div', 'pz-card'); card.innerHTML = '<div class="pz-q">' + MF.t(q.q) + '</div>'; var body = el('div', 'pz-body choices'); card.appendChild(body); m.body.appendChild(card);
    var msg = el('div', 'pz-msg'); m.body.appendChild(msg);
    q.opts.forEach(function (o, i) {
      var b = el('button', 'choice', '<b>' + 'ABCD'[i] + '</b><span>' + MF.t(o) + '</span>');
      b.onclick = function () {
        if (answered) return; answered = true; var ok = g.answerBonus(q, i); b.classList.add(ok ? 'ok' : 'no');
        if (!ok) body.children[q.a].classList.add('ok');
        msg.className = 'pz-msg ' + (ok ? 'good' : 'bad'); msg.innerHTML = ok ? '✔ ' + X('Correct! +1 💡 hint token', 'Betul! +1 💡 token petunjuk') : '✖ ' + X('Not this time. The right answer is shown in green.', 'Belum berjaya. Jawapan betul ditunjukkan dengan warna hijau.') + (q.hint ? '<br>💡 ' + MF.t(q.hint) : '');
        MF.Sfx.play(ok ? 'good' : 'bad'); UI.updateHud();
        m.foot.innerHTML = ''; m.foot.appendChild(UI.btn(X('Continue', 'Teruskan') + ' ▶', 'primary', function () { m.close(); if (done) done(); }));
      }; body.appendChild(b);
    });
    m.foot.appendChild(UI.btn(X('Cancel', 'Batal'), 'ghost', function () { m.close(); }));
  };

  /* ====================================================================== TIME UP */
  UI.openTimeUp = function () {
    // each case may give its own time-up story (C.timeUp = {title, text}); otherwise a general message
    var g = UI.g, tu = g.C.timeUp || {}, m = UI.modal({ cls: 'small timeup', title: '⏰ ' + (tu.title ? MF.t(tu.title) : X('Time is up!', 'Masa tamat!')), noClose: true });
    m.body.innerHTML = '<p class="big-p">' + (tu.text ? MF.t(tu.text) : X('There is no more time. It is time to name the culprit!', 'Tiada masa lagi. Sudah tiba masanya menamakan pelaku!')) + '</p>';
    m.foot.appendChild(UI.btn('🕵️ ' + X('Accuse now', 'Tuduh sekarang'), 'danger', function () { m.close(); UI.openConclusion(); }));
    if (g.S.ext < 1) m.foot.appendChild(UI.btn('⏱ ' + X('5 more minutes (once)', '5 minit lagi (sekali)'), 'ghost', function () { g.extend(); m.close(); UI.toast('⏱ +5 ' + X('minutes', 'minit'), 'ev'); }));
    MF.Sfx.play('alarm');
  };

  /* ====================================================================== FINAL ACCUSATION */
  UI.openConclusion = function () {
    if (UI.hooks.frozenLeft && UI.hooks.frozenLeft() > 0) { UI.toast('❄️ ' + X('You are frozen for a wrong accusation. Wait ' + UI.hooks.frozenLeft() + ' s.', 'Anda dibekukan kerana tuduhan salah. Tunggu ' + UI.hooks.frozenLeft() + ' saat.'), 'warn', 4000); return; }
    var g = UI.g, C = g.C, cc = C.conclusion, step = 0, A = { who: null, what: null, when: null, where: null, picked: [] };
    var qWhat = g.question(cc.what.questionId), qWhen = g.question(cc.when.questionId);
    [['what', qWhat], ['when', qWhen]].forEach(function (a) { var st = g.q(a[1].id); if (st.solved) A[a[0]] = st.choice; });
    var m = UI.modal({ cls: 'conclusion', title: '🕵️ ' + X('The Final Answer', 'Jawapan Akhir'), noClose: false });
    var dots = el('div', 'pz-dots'), box = el('div', 'cl-box'); m.body.appendChild(dots); m.body.appendChild(box);
    var steps = ['who', 'what', 'when', 'where', 'proof', 'review'];
    function nav() {
      m.foot.innerHTML = '';
      if (step > 0) m.foot.appendChild(UI.btn('◀ ' + X('Back', 'Kembali'), 'ghost', function () { step--; draw(); }));
      m.foot.appendChild(el('span', 'spacer'));
      var key = steps[step], okNext = key === 'who' ? !!A.who : key === 'what' ? !!A.what : key === 'when' ? !!A.when : key === 'where' ? !!A.where : key === 'proof' ? A.picked.length > 0 : true;
      if (key === 'review') m.foot.appendChild(UI.btn('🔎 ' + X('Name the culprit!', 'Namakan pelaku!'), 'danger big', accuse));
      else { var nb = UI.btn(X('Next', 'Seterusnya') + ' ▶', 'primary', function () { step++; draw(); }); nb.disabled = !okNext; m.foot.appendChild(nb); }
    }
    function draw() {
      dots.innerHTML = steps.map(function (s, i) { return '<i class="' + (i < step ? 'done' : i === step ? 'cur' : '') + '"></i>'; }).join(''); box.innerHTML = '';
      var key = steps[step];
      if (key === 'who') {
        box.innerHTML = '<h3>1. ' + X('WHO is responsible?', 'SIAPA yang bertanggungjawab?') + '</h3>'; var grid = el('div', 'who-grid');
        C.people.filter(function (p) { return p.suspect; }).forEach(function (p) {
          var b = el('button', 'who-card' + (A.who === p.id ? ' on' : ''), avatar(p, 'lg') + '<b>' + E(p.name) + '</b><small>' + MF.t(p.role) + '</small>'); b.style.setProperty('--kc', p.color); b.onclick = function () { A.who = p.id; MF.Sfx.play('click'); draw(); }; grid.appendChild(b);
        }); box.appendChild(grid);
      } else if (key === 'what' || key === 'when') {
        var q = key === 'what' ? qWhat : qWhen; box.innerHTML = '<h3>' + (key === 'what' ? '2. ' + X('WHAT happened?', 'APA yang berlaku?') : '3. ' + X('WHEN did it happen?', 'BILA ia berlaku?')) + '</h3>'; var l = el('div', 'db-opts');
        q.options.forEach(function (o) { var b = el('button', 'db-opt' + (A[key] === o.id ? ' on' : ''), '<i>' + (A[key] === o.id ? '◉' : '○') + '</i> ' + MF.t(o.text)); b.onclick = function () { A[key] = o.id; MF.Sfx.play('click'); draw(); }; l.appendChild(b); }); box.appendChild(l);
      } else if (key === 'where') {
        box.innerHTML = '<h3>4. ' + (cc.whereQ ? MF.t(cc.whereQ) : X('WHERE is the missing thing now?', 'DI MANA benda yang hilang itu sekarang?')) + '</h3>'; var l2 = el('div', 'db-opts');
        cc.where.forEach(function (o) { var b = el('button', 'db-opt' + (A.where === o.id ? ' on' : ''), '<i>' + (A.where === o.id ? '◉' : '○') + '</i> ' + MF.t(o.text)); b.onclick = function () { A.where = o.id; MF.Sfx.play('click'); draw(); }; l2.appendChild(b); }); box.appendChild(l2);
      } else if (key === 'proof') {
        box.innerHTML = '<h3>5. ' + X('What is your PROOF?', 'Apakah BUKTI anda?') + ' <small>(' + A.picked.length + '/' + cc.maxEvidence + ')</small></h3><p class="tip">' + X('Pick the BEST evidence. A good proof shows who, what, when — and why the others are innocent.', 'Pilih bukti TERBAIK. Bukti yang baik menunjukkan siapa, apa, bila — dan kenapa orang lain tidak bersalah.') + '</p>';
        var gr = el('div', 'db-links'); g.foundList().forEach(function (it) {
          var k = UI.KIND[UI.catOf(it)], on = A.picked.indexOf(it.id) >= 0, c = el('button', 'link-chip' + (on ? ' on' : ''), (it.icon || '') + ' ' + MF.t(it.title)); c.style.setProperty('--kc', k.c);
          c.onclick = function () { var i = A.picked.indexOf(it.id); if (i >= 0) A.picked.splice(i, 1); else if (A.picked.length < cc.maxEvidence) A.picked.push(it.id); else UI.toast(X('You can pick at most ' + cc.maxEvidence + ' pieces of evidence.', 'Anda boleh pilih paling banyak ' + cc.maxEvidence + ' bukti.').replace(/<[^>]+>/g, ' '), 'warn'); MF.Sfx.play('click'); draw(); }; gr.appendChild(c);
        }); box.appendChild(gr);
      } else {
        var pw = person(A.who), qa = function (q, id) { var o = q.options.filter(function (x) { return x.id === id; })[0]; return o ? MF.t(o.text) : '—'; }, wo = cc.where.filter(function (x) { return x.id === A.where; })[0];
        box.innerHTML = '<h3>6. ' + X('Check your answer', 'Semak jawapan anda') + '</h3><div class="review"><div>👤 <b>' + X('Who', 'Siapa') + ':</b> ' + (pw ? E(pw.name) : '—') + '</div><div>❓ <b>' + X('What', 'Apa') + ':</b> ' + qa(qWhat, A.what) + '</div><div>🕒 <b>' + X('When', 'Bila') + ':</b> ' + qa(qWhen, A.when) + '</div><div>📍 <b>' + X('Where', 'Di mana') + ':</b> ' + (wo ? MF.t(wo.text) : '—') + '</div><div>📎 <b>' + X('Proof', 'Bukti') + ':</b> ' + A.picked.map(function (id) { return (g.item(id).icon || '') + ' ' + MF.t(g.item(id).title); }).join(' · ') + '</div></div><p class="tip">⚠ ' + X('You cannot take it back, so check carefully!', 'Anda tidak boleh menariknya balik, jadi semak dengan teliti!') + '</p>';
      }
      nav();
    }
    function accuse() {
      // Teams race: the accusation first goes to a team vote (the hook returns true when it takes over)
      if (UI.hooks.beforeAccuse && UI.hooks.beforeAccuse(A, m)) return;
      var res = g.accuse(A); m.close(); UI.afterAccuse(res);
    }
    draw(); return m;
  };

  /* what happens after the accusation */
  UI.afterAccuse = function (res) {
    var g = UI.g, e = res.ending;
    if (UI.hooks.onAccused) UI.hooks.onAccused(res);                 // race: tell the teacher (win) or start the 60 s freeze (wrong)
    if (e.stars >= 2) { MF.Sfx.play('win'); return UI.showEnding(res); }
    // wrong or weak: give a chance to keep investigating (no spoilers about the right person)
    MF.Sfx.play('sad');
    var m = UI.modal({ cls: 'small result-no', title: MF.t(e.title), icon: '😕', noClose: true });
    var extra = (e.id === 'wrong' && g.C.wrongWho && g.C.wrongWho[res.ans.who]) ? '<div class="cmp-result bad"><b>💭 ' + X('Why this person is innocent', 'Kenapa orang ini tidak bersalah') + '</b><br>' + MF.t(g.C.wrongWho[res.ans.who]) + '</div>' : '';
    m.body.innerHTML = '<p class="big-p">' + MF.t(e.text) + '</p>' + extra;
    m.foot.appendChild(UI.btn('🔎 ' + X('Keep investigating', 'Teruskan menyiasat'), 'primary', function () { m.close(); }));
    var race = UI.hooks.isRace && UI.hooks.isRace();
    if (race) m.body.insertAdjacentHTML('beforeend', '<div class="cmp-result bad"><b>❄️ ' + X('Wrong accusation! You are frozen for 60 seconds.', 'Tuduhan salah! Anda dibekukan selama 60 saat.') + '</b><br>' + X('Then check your evidence again and try once more.', 'Kemudian semak bukti anda semula dan cuba sekali lagi.') + '</div>');
    else m.foot.appendChild(UI.btn(X('Show me the solution', 'Tunjukkan penyelesaian'), 'ghost', function () { g.giveUp(res); m.close(); UI.showEnding(res); }));   // no spoilers during a race
  };

  /* ====================================================================== ENDING + DEBRIEF */
  UI.showEnding = function (res) {
    var g = UI.g, C = g.C, e = res.ending, culprit = person(C.conclusion.who.correct);
    var m = UI.modal({ cls: 'ending', title: MF.t(e.title), icon: '🏁', noClose: true, sticky: true });
    var stars = ''; for (var i = 0; i < 4; i++) stars += '<i class="' + (i < e.stars ? 'on' : '') + '">★</i>';
    var b = m.body; b.innerHTML = (UI.hooks.placeHtml ? UI.hooks.placeHtml() : '') + '<div class="stars">' + stars + '</div><p class="big-p end-text">' + MF.t(e.text) + '</p>';
    var sec = function (title, html, cls) { b.insertAdjacentHTML('beforeend', '<section class="debrief ' + (cls || '') + '"><h3>' + title + '</h3>' + html + '</section>'); };
    sec('📖 ' + X('What REALLY happened', 'Apa yang SEBENARNYA berlaku'), '<p>' + MF.t(C.hidden.summary) + '</p><ol class="seq">' + C.hidden.sequence.map(function (s) { return '<li><b>' + MF.fmtTime(s[0]) + '</b> ' + MF.t(s[1]) + '</li>'; }).join('') + '</ol>');
    sec('📎 ' + X('Your proof', 'Bukti anda'), '<ul class="proof">' + res.groups.map(function (gr) { return '<li class="' + (gr.got ? 'got' : 'miss') + '">' + (gr.got ? '✔ ' : '✖ ') + MF.t(gr.label) + '</li>'; }).join('') + '</ul><p class="tip">' + X('Green = you used it as proof. Red = it was available, but you did not use it.', 'Hijau = anda guna sebagai bukti. Merah = ada tersedia, tetapi anda tidak menggunakannya.') + '</p>');
    sec('🙂 ' + X('Why the others are innocent', 'Kenapa orang lain tidak bersalah'), C.people.filter(function (p) { return p.id !== culprit.id && C.wrongWho[p.id]; }).map(function (p) { return '<div class="why-row">' + avatar(p) + '<div><b>' + E(p.name) + '</b><br>' + MF.t(C.wrongWho[p.id]) + '</div></div>'; }).join(''));
    sec('🎭 ' + X('Red herrings (clues that fooled us)', 'Petunjuk palsu (yang menipu kita)'), '<ul class="rh">' + C.hidden.misleading.map(function (r) { var it = g.item(r.item); return '<li><b>' + (it.icon || '') + ' ' + MF.t(it.title) + '</b> — ' + MF.t(r.why) + '</li>'; }).join('') + '</ul>');
    var S = g.S; sec('📊 ' + X('Your detective report', 'Laporan detektif anda'), '<div class="statrow"><span>📋 ' + g.count() + ' ' + X('evidence', 'bukti') + '</span><span>🧩 ' + g.solvedCount() + '/' + C.questions.length + '</span><span>💡 ' + S.hints + ' ' + X('hints', 'petunjuk') + '</span><span>⏱ ' + Math.round(S.play / 60) + ' ' + X('min', 'min') + '</span></div>');
    m.foot.appendChild(UI.btn('📝 ' + X('Exit ticket', 'Tiket keluar') + ' ▶', 'primary big', function () { m.close(); UI.openExitTicket(); }));
    if (UI.hooks.onEnding) UI.hooks.onEnding(res);
  };

  /* ====================================================================== EXIT TICKET */
  UI.openExitTicket = function () {
    var g = UI.g, T = g.C.exitTicket || [], i = 0, score = 0;
    if (!T.length) { return UI._finish(); }
    var m = UI.modal({ cls: 'puzzle small', title: '📝 ' + X('Exit ticket', 'Tiket keluar'), noClose: true, sticky: true });
    var holder = el('div'); m.body.appendChild(holder);
    function show() {
      var q = T[i], sub = UI.SUBJ[q.subject] || UI.SUBJ.thinking; holder.innerHTML = '<div class="pz-top"><span class="chip big" style="--kc:' + sub.c + '">' + sub.ic + ' ' + sub.n() + '</span><p class="pz-intro">' + (i + 1) + ' / ' + T.length + '</p></div>';
      var card = el('div', 'pz-card'); card.innerHTML = '<div class="pz-q">' + MF.t(q.q) + '</div>'; var body = el('div', 'pz-body choices'); card.appendChild(body); holder.appendChild(card);
      var msg = el('div', 'pz-msg'); holder.appendChild(msg); m.foot.innerHTML = ''; var done = false;
      q.options.forEach(function (o, k) {
        var b = el('button', 'choice', '<b>' + 'ABCD'[k] + '</b><span>' + MF.t(o) + '</span>');
        b.onclick = function () {
          if (done) return; done = true; var ok = k === q.answer; if (ok) score++; b.classList.add(ok ? 'ok' : 'no'); body.children[q.answer].classList.add('ok');
          msg.className = 'pz-msg ' + (ok ? 'good' : 'bad'); msg.innerHTML = (ok ? '✔ ' + X('Correct!', 'Betul!') : '✖ ' + X('Not quite.', 'Belum tepat.')) + ' ' + (q.why ? MF.t(q.why) : ''); MF.Sfx.play(ok ? 'good' : 'bad');
          m.foot.appendChild(UI.btn(i < T.length - 1 ? X('Next', 'Seterusnya') + ' ▶' : X('Finish', 'Selesai') + ' ✔', 'primary', function () { if (i < T.length - 1) { i++; show(); } else { g.S.exit = { score: score, of: T.length }; g.touch(); m.close(); UI._finish(score, T.length); } }));
        }; body.appendChild(b);
      });
    }
    show();
  };
  UI._finish = function (score, of) {
    var m = UI.modal({ cls: 'small', title: '🎉 ' + X('Case complete!', 'Kes selesai!'), noClose: true, sticky: true });
    m.body.innerHTML = '<div class="stars">' + [0, 1, 2, 3].map(function (i) { return '<i class="' + (i < (UI.g.S.ending ? UI.g.S.ending.stars : 0) ? 'on' : '') + '">★</i>'; }).join('') + '</div><p class="big-p">' + (of ? '📝 ' + X('Exit ticket', 'Tiket keluar') + ': <b>' + score + ' / ' + of + '</b><br>' : '') + X('Great job, detective!', 'Syabas, detektif!') + '</p>';
    m.foot.appendChild(UI.btn(X('Finish', 'Selesai') + ' ▶', 'primary big', function () { m.close(); if (UI.hooks.onFinish) UI.hooks.onFinish(); }));
  };
})(window.MF);
