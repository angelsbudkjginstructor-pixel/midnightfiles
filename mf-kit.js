/* ============================================================================
   MF.kit — small helpers that make a NEW case short to write (used by cases 004-008).
   It only builds data in the same format as the older hand-written cases, so the
   engine and the fairness checker do not know the difference.
     kit.T / kit.mm / kit.paper     bilingual text, "h:mm" -> minutes, paper-note HTML
     kit.world(W, C, spec)          builds the 3D world from a short description (5 rooms + slots)
     kit.endings(o)                 the five standard endings
     kit.photo(id, draw)            registers a night/camera photo picture
     kit.art(name, w, h, draw)      registers a picture used by a puzzle
   Safe on the teacher page (no three.js there): everything is lazy.
   ============================================================================ */
(function (MF) {
  'use strict';
  var kit = MF.kit = {};
  kit.T = function (en, bm) { return { en: en, bm: bm }; };
  kit.mm = function (s) { var p = s.split(':').map(Number); return (p[0] < 12 ? p[0] + 12 : p[0]) * 60 + p[1]; };
  kit.paper = function (html, style) { return '<div class="paper hand" style="' + (style || '') + '">' + html + '</div>'; };
  /* a bilingual paper document: kit.doc(['EN html','BM html'], 'style') */
  kit.doc = function (en, bm, style) { return { en: kit.paper(en, style), bm: kit.paper(bm, style) }; };

  /* ---------- pictures ---------- */
  kit.art = function (name, w, hgt, draw) {
    if (!MF.art) return;
    MF.art[name] = function (canvas) { canvas.width = w; canvas.height = hgt; draw(canvas.getContext('2d'), w, hgt, MF.art.h); };
  };
  kit.photo = function (id, camLabel, draw) {
    if (!MF.art || !MF.art.photos) return;
    MF.art.photos[id] = function (c, W, H, o) {
      var h = MF.art.h; draw(c, W, H, h);
      for (var y = 0; y < H; y += 4) { c.fillStyle = 'rgba(0,0,0,0.17)'; c.fillRect(0, y, W, 1); }
      h.text(c, camLabel, 20, 36, 24, '#9affb0', 'left', true);
      var sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.5)');
      h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#9affb0', 'center', true);
    };
  };

  /* ---------- the standard five-room layout ---------- */
  var ROOMS = [
    { k: 'r1', b: [-9, -4, -1, 4] }, { k: 'cp', b: [-1, -1, 8, 1], h: 2.8 }, { k: 'r3', b: [1, -8, 7, -1] },
    { k: 'r4', b: [1, 1, 7, 8] }, { k: 'r5', b: [8, -3, 15, 3] }
  ];
  /* slots: d = desk with a paper on it, f = on the floor, w = on the wall (z = wall, s = side the player stands) */
  var SLOT = {
    r1d1: [-2.8, 3.0], r1d2: [-6.4, 3.0], r1d3: [-8.3, -2.6], r1d4: [-2.6, -3.0], r1f1: [-5.0, -1.2], r1w1: [-4.6, -3.9, 1], r1w2: [-7.0, -3.9, 1],
    cpf1: [2.2, 0.6], cpf2: [4.6, -0.6], cpf3: [6.4, 0.6], cpw1: [5.5, -0.9, 1], cpw2: [1.8, 0.9, -1],
    r3d1: [6.2, -6.8], r3d2: [2.2, -6.8], r3d3: [6.3, -3.2], r3f1: [5.0, -5.0], r3f2: [2.3, -3.0], r3w1: [4.0, -7.9, 1],
    r4d1: [4.0, 3.8], r4d2: [1.8, 6.8], r4d3: [6.2, 6.8], r4f1: [2.0, 4.5], r4f2: [6.0, 4.0], r4w1: [4.0, 7.9, -1],
    r5d1: [9.6, -2.4], r5d2: [14.2, 1.7], r5d3: [14.2, -2.0], r5f1: [12.0, 1.8], r5f2: [10.0, 2.2], r5w1: [11.5, -2.9, 1]
  };
  var NPCS = { r1n: [-6.8, 2.4], r1m: [-3.0, -2.2], r3n: [2.8, -3.0], r3m: [6.0, -3.2], r4n: [2.8, 5.8], r4m: [5.6, 6.0], r5n: [11.0, 1.6], r5m: [12.6, -1.5] };

  /* spec = { sky, fog:[near,far], mood, H, rooms:[{id,name,wall,floor,light,lightColor}] (5, in order r1,cp,r3,r4,r5),
              objs:[ [slot, itemId, colour?, label?, extra?] ], npcs:[{id,slot,rot,skin,shirt,pants,hair,scale,hat}],
              figs:[{name,slot|pos,kind:'coat'|'tall'}], texts:[[slot-ish x,y,z,rot,text,col,w,h]], decor:function(W) }  */
  kit.world = function (W, C, spec) {
    var H = spec.H || 3.0, R = spec.rooms, wc = R.map(function (r) { return r.wall; });
    W.sky(spec.sky || 0x05070e); W.fog((spec.fog || [5, 26])[0], (spec.fog || [5, 26])[1]);
    W.spawn(C.spawn.x, C.spawn.z, C.spawn.yaw);
    W.mood(spec.mood || { amb: 0.15, hemi: 0.13, ambLow: 0.55, hemiLow: 0.32 });
    ROOMS.forEach(function (rm, i) { var r = R[i], b = rm.b; W.room(r.id, b[0], b[1], b[2], b[3], r.name, true, r.wall, r.floor, rm.h); });
    var W1 = wc[0], WC = wc[1], W3 = wc[2], W4 = wc[3], W5 = wc[4];
    W.wallZ(-4, -9, -1, [], H, W1); W.wallZ(4, -9, -1, [], H, W1); W.wallX(-9, -4, 4, [], H, W1); W.wallX(-1, -4, 4, [[-1, 1]], H, W1);
    W.wallZ(-1, -1, 8, [[3, 4.2]], 2.8, WC); W.wallZ(1, -1, 8, [[3, 4.2]], 2.8, WC);
    W.wallZ(-8, 1, 7, [], H, W3); W.wallX(1, -8, -1, [], H, W3); W.wallX(7, -8, -1, [], H, W3);
    W.wallZ(8, 1, 7, [], H, W4); W.wallX(1, 1, 8, [], H, W4); W.wallX(7, 1, 8, [], H, W4);
    W.wallX(8, -3, 3, [[-1, 1]], H, W5); W.wallZ(-3, 8, 15, [], H, W5); W.wallZ(3, 8, 15, [], H, W5); W.wallX(15, -3, 3, [], H, W5);
    var LP = [[-4.5, 2.8, 0], [3.5, 2.4, 0], [4, 2.6, -4.5], [4, 2.6, 4.5], [12, 2.6, 0]];
    R.forEach(function (r, i) { W.light(r.id, LP[i][0], LP[i][1], LP[i][2], r.lightColor || 0x9fb0ff, r.lightI || 0.5, i === 1 ? 9 : 12); });
    var item = function (id) { return C.items.filter(function (x) { return x.id === id; })[0]; };
    var roomOf = function (slot) { return R[['r1', 'cp', 'r3', 'r4', 'r5'].indexOf(slot.slice(0, 2))].id; };
    (spec.objs || []).forEach(function (o) {
      var slot = o[0], id = o[1], col = o[2] || 0xe8e0c8, s = SLOT[slot], it = item(id), e = o[4] || {};
      if (!s) throw new Error('Unknown slot ' + slot);
      var label = o[3] || (it && it.title);
      var opt = { id: id, r: 0.6, label: label };
      if (it) opt.item = id; Object.keys(e).forEach(function (k) { opt[k] = e[k]; });
      var kind = slot.charAt(2), x = s[0], z = s[1];
      if (kind === 'd') { W.box(x, 0, z, 1.4, 0.8, 0.8, spec.desk || 0x4a3a2a); W.box(x, 0.8, z, 0.45, 0.05, 0.32, col, { collide: false }); opt.x = x; opt.y = 0.95; opt.z = z; opt.r = 0.55; }
      else if (kind === 'f') { W.box(x, 0, z, 0.4, 0.22, 0.3, col, { collide: false }); opt.x = x; opt.y = 0.25; opt.z = z; opt.r = 0.7; }
      else { W.box(x, 1.3, z, 1.2, 0.9, 0.05, col, { collide: false }); opt.x = x; opt.y = 1.35; opt.z = z + s[2] * 0.25; opt.r = 0.8; }
      W.interact(opt);
    });
    (spec.texts || []).forEach(function (t) { W.writing.apply(W, t); });
    (spec.figs || []).forEach(function (f) {
      var p = f.slot ? (SLOT[f.slot] || NPCS[f.slot]) : f.pos, x = p[0], z = p[1], c = f.color || 0x2a2f3a;
      if (f.kind === 'coat') { W.box(x, 0, z, 0.06, 1.8, 0.06, 0x3a3a3a); W.box(x, 0.7, z, 0.5, 1.0, 0.2, c, { collide: false, name: f.name }); W.ball(x, 1.85, z, 0.14, c, { name: f.name }); }
      else { W.box(x, 0, z, 0.5, 1.5, 0.28, c, { collide: false, name: f.name }); W.ball(x, 1.65, z, 0.16, c, { name: f.name }); }
    });
    if (spec.decor) spec.decor(W);
    (spec.npcs || []).forEach(function (n) {
      var p = NPCS[n.slot]; if (!p) throw new Error('Unknown npc slot ' + n.slot);
      W.npc({ id: n.id, x: p[0], z: p[1], rot: n.rot || 0, skin: n.skin || 0xd8a87a, shirt: n.shirt || 0x888888, pants: n.pants || 0x2c3e50, hair: n.hair || 0x222222, scale: n.scale || 1.0, hat: n.hat });
    });
  };

  /* ---------- the five standard endings ---------- */
  /* o = { secret:{title,text,when(r)}, perfect:{title,text}, missed:{title,text}, weak:{text}, wrong:{text} }  (all T objects)  */
  kit.endings = function (o) {
    var T = kit.T, top = function (r) { return r.ok.who && r.ok.what && r.ok.when && r.cov >= 4; };
    var out = [];
    if (o.secret) out.push({ id: 'secret', stars: 4, title: o.secret.title, when: function (r) { return top(r) && o.secret.when(r); }, text: o.secret.text });
    out.push({ id: 'perfect', stars: 3, title: o.perfect.title, when: function (r) { return top(r) && r.sec >= 2; }, text: o.perfect.text });
    out.push({ id: 'missed', stars: 2, title: o.missed.title, when: function (r) { return top(r) && r.sec < 2; }, text: o.missed.text });
    out.push({ id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'), when: function (r) { return r.ok.who; }, text: o.weak.text });
    out.push({ id: 'wrong', stars: 0, title: T('The wrong answer!', 'Jawapan yang salah!'), when: function () { return true; }, text: o.wrong.text });
    return out;
  };
})(window.MF);
