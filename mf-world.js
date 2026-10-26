/* ============================================================================
   MF.World — the 3D game world (Three.js).
   Low-poly, merged static geometry, 1 flashlight, few lights, no shadows.
   Builds the level from the case's world(W) function.
   ============================================================================ */
(function (MF) {
  'use strict';
  var WALL_T = 0.2, DOOR_H = 2.2, PLAYER_R = 0.28, EYE = 1.6, EYE_CROUCH = 1.05;

  function World(opts) {
    this.canvas = opts.canvas; this.C = opts.caseData; this.low = !!opts.low; this.scare = opts.scare || 0;
    this.sens = opts.sens || 0.0022; this.handlers = {}; this.running = false; this.paused = true; this.locked = false;
    this.keys = {}; this.aabbs = []; this.interactables = []; this.npcs = {}; this.rooms = []; this.lights = {}; this.flicker = {};
    this.statics = {}; this.fired = {}; this.pending = []; this.clockHands = null; this.figure = []; this.figureRevealed = false;
    this.player = { x: 0, z: 0, yaw: 0, pitch: 0, crouch: 0, bob: 0, stepT: 0 }; this.flash = true; this.target = null; this.currentRoom = null;
    this.frames = 0; this.fpsT = 0; this.slowCount = 0; this.matCache = {};
    this._init(); this._build(); this._bind();
  }
  World.prototype.on = function (ev, fn) { (this.handlers[ev] = this.handlers[ev] || []).push(fn); return this; };
  World.prototype.emit = function (ev, a, b) { (this.handlers[ev] || []).forEach(function (f) { try { f(a, b); } catch (e) { console.error(e); } }); };

  /* ------------------------------------------------------------ renderer / scene */
  World.prototype._init = function () {
    var low = this.low;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: !low, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(low ? 0.6 : Math.min(window.devicePixelRatio || 1, 1.25));
    this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(72, 1, 0.1, 90); this.scene.add(this.camera);
    this.ambient = new THREE.AmbientLight(0xffffff, low ? 0.7 : 0.3); this.scene.add(this.ambient);
    this.hemi = new THREE.HemisphereLight(0x9aa8d0, 0x4a3a2a, low ? 0.45 : 0.3); this.scene.add(this.hemi);
    this.spot = new THREE.SpotLight(0xfff0cc, 0.8, 16, 0.55, 0.7, 1); this.spot.position.set(0.15, -0.1, 0); this.spot.target.position.set(0, -0.05, -1); this.camera.add(this.spot); this.camera.add(this.spot.target);
    this.resize();
  };
  World.prototype.resize = function () { var w = window.innerWidth, h = window.innerHeight; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); };
  World.prototype.setLow = function (low) {
    this.low = low; this.renderer.setPixelRatio(low ? 0.6 : Math.min(window.devicePixelRatio || 1, 1.25)); this.resize();
    this.ambient.intensity = low ? 0.7 : 0.3; this.hemi.intensity = low ? 0.45 : 0.3;
    for (var id in this.lights) this.lights[id].light.visible = !low;
    if (this.scene.fog) this.scene.fog.far = low ? 40 : 60;
  };

  /* ------------------------------------------------------------ builder API handed to the case file */
  World.prototype.mat = function (c) { return this.matCache[c] || (this.matCache[c] = new THREE.MeshLambertMaterial({ color: c })); };
  World.prototype._addStatic = function (geo, color, x, y, z) {
    geo.translate(x, y, z); var ng = geo.index ? geo.toNonIndexed() : geo; geo.dispose && geo !== ng && geo.dispose();
    (this.statics[color] = this.statics[color] || []).push(ng);
  };
  World.prototype._mergeStatics = function () {
    for (var color in this.statics) {
      var arr = this.statics[color], n = 0; arr.forEach(function (g) { n += g.attributes.position.count; });
      var pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), o = 0;
      arr.forEach(function (g) { pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3); o += g.attributes.position.count; g.dispose(); });
      var geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
      geo.computeBoundingSphere(); this.scene.add(new THREE.Mesh(geo, this.mat(Number(color))));
    }
    this.statics = {};
  };
  World.prototype._build = function () {
    var self = this, C = this.C, H = 3.0;
    var W = {
      sky: function (c) { self.scene.background = new THREE.Color(c); self.scene.fog = new THREE.Fog(c, 16, self.low ? 40 : 60); },
      spawn: function (x, z, yaw) { self.player.x = x; self.player.z = z; self.player.yaw = yaw || 0; self.spawnPoint = { x: x, z: z, yaw: yaw || 0 }; },
      room: function (id, x0, z0, x1, z1, name, indoor, floorCol, ceilCol, ceilH) {
        self.rooms.push({ id: id, x0: x0, z0: z0, x1: x1, z1: z1, name: name, indoor: !!indoor });
        var f = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), self.mat(floorCol || 0x999999)); f.rotation.x = -Math.PI / 2; f.position.set((x0 + x1) / 2, 0, (z0 + z1) / 2); self.scene.add(f);
        if (indoor) { var c = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), self.mat(ceilCol || 0xeeeeee)); c.rotation.x = Math.PI / 2; c.position.set((x0 + x1) / 2, ceilH || H, (z0 + z1) / 2); self.scene.add(c); }
      },
      floor: function (x0, z0, x1, z1, col, y) { var f = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), self.mat(col)); f.rotation.x = -Math.PI / 2; f.position.set((x0 + x1) / 2, y || 0.003, (z0 + z1) / 2); self.scene.add(f); },
      box: function (cx, y0, cz, w, h, d, col, o) {
        o = o || {}; var geo = new THREE.BoxGeometry(w, h, d);
        if (o.name) { var m = new THREE.Mesh(geo, self.mat(col)); m.position.set(cx, y0 + h / 2, cz); m.name = o.name; self.scene.add(m); if (o.name === 'figure') self.figure.push(m); }
        else self._addStatic(geo, col, cx, y0 + h / 2, cz);
        if (o.collide !== false && h > 0.3) self.aabbs.push({ x0: cx - w / 2, x1: cx + w / 2, z0: cz - d / 2, z1: cz + d / 2, wall: false });
      },
      cyl: function (cx, y0, cz, r, h, col, o) {
        o = o || {}; self._addStatic(new THREE.CylinderGeometry(r, r, h, 8), col, cx, y0 + h / 2, cz);
        if (o.collide !== false && h > 0.3) self.aabbs.push({ x0: cx - r, x1: cx + r, z0: cz - r, z1: cz + r, wall: false });
      },
      ball: function (cx, cy, cz, r, col, o) {
        o = o || {};
        if (o.name) { var m = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), self.mat(col)); m.position.set(cx, cy, cz); m.name = o.name; self.scene.add(m); if (o.name === 'figure') self.figure.push(m); }
        else self._addStatic(new THREE.SphereGeometry(r, 8, 6), col, cx, cy, cz);
      },
      wallX: function (x, z0, z1, gaps, h, col) { self._wall('x', x, z0, z1, gaps, h, col); },
      wallZ: function (z, x0, x1, gaps, h, col) { self._wall('z', z, x0, x1, gaps, h, col); },
      light: function (id, x, y, z, col, intensity, dist) {
        var l = new THREE.PointLight(col, intensity, dist, 1); l.position.set(x, y, z); l.visible = !self.low; self.scene.add(l); self.lights[id] = { light: l, base: intensity };
      },
      decal: function (x, z, w, d, rot, col, o) { var m = new THREE.Mesh(new THREE.CircleGeometry(0.5, 14), self.mat(col)); m.rotation.x = -Math.PI / 2; m.rotation.z = rot || 0; m.scale.set(w, d, 1); m.position.set(x, (o && o.y) || 0.01, z); self.scene.add(m); },
      trail: function (pts) { self._trail(pts); },
      clock: function (x, y, z) { self._clock(x, y, z); },
      interact: function (o) { o.r = o.r || 0.5; self.interactables.push(o); },
      npc: function (o) { self._npc(o); }
    };
    C.world.call(C, W);
    this._mergeStatics();
  };
  World.prototype._wall = function (axis, pos, a, b, gaps, h, col) {
    var segs = [], cur = a; (gaps || []).slice().sort(function (p, q) { return p[0] - q[0]; }).forEach(function (g) { if (g[0] > cur) segs.push([cur, g[0]]); cur = g[1]; });
    if (cur < b) segs.push([cur, b]); var self = this;
    segs.forEach(function (s) {
      var len = s[1] - s[0], mid = (s[0] + s[1]) / 2;
      if (axis === 'x') { self._addStatic(new THREE.BoxGeometry(WALL_T, h, len), col, pos, h / 2, mid); self.aabbs.push({ x0: pos - WALL_T / 2, x1: pos + WALL_T / 2, z0: s[0], z1: s[1], wall: true }); }
      else { self._addStatic(new THREE.BoxGeometry(len, h, WALL_T), col, mid, h / 2, pos); self.aabbs.push({ x0: s[0], x1: s[1], z0: pos - WALL_T / 2, z1: pos + WALL_T / 2, wall: true }); }
    });
    (gaps || []).forEach(function (g) { if (h > DOOR_H) { var len = g[1] - g[0], mid = (g[0] + g[1]) / 2, lh = h - DOOR_H; if (axis === 'x') self._addStatic(new THREE.BoxGeometry(WALL_T, lh, len), col, pos, DOOR_H + lh / 2, mid); else self._addStatic(new THREE.BoxGeometry(len, lh, WALL_T), col, mid, DOOR_H + lh / 2, pos); } });
  };
  World.prototype._trail = function (pts) {
    if (!MF._printTex) {
      var c = document.createElement('canvas'); c.width = 128; c.height = 64; var g = c.getContext('2d');
      g.clearRect(0, 0, 128, 64); g.fillStyle = 'rgba(255,92,150,0.85)'; g.beginPath(); g.ellipse(64, 32, 58, 22, 0, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.95)';
      [[100, 32, 9], [78, 24, 7], [80, 42, 6]].forEach(function (s) { g.beginPath(); for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? s[2] * 0.45 : s[2]; g.lineTo(s[0] + Math.cos(a) * r, s[1] + Math.sin(a) * r); } g.closePath(); g.fill(); });
      MF._printTex = new THREE.CanvasTexture(c);
    }
    var m = new THREE.MeshBasicMaterial({ map: MF._printTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i], q = pts[Math.min(i + 1, pts.length - 1)], pr = pts[Math.max(i - 1, 0)]; var dx = (i === pts.length - 1 ? p[0] - pr[0] : q[0] - p[0]), dz = (i === pts.length - 1 ? p[1] - pr[1] : q[1] - p[1]);
      var th = Math.atan2(dz, dx), side = (i % 2 ? 1 : -1) * 0.07, ox = -Math.sin(th) * side, oz = Math.cos(th) * side;
      var holder = new THREE.Group(); holder.position.set(p[0] + ox, 0.014, p[1] + oz); holder.rotation.y = -th;
      var pl = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.17), m); pl.rotation.x = -Math.PI / 2; holder.add(pl); this.scene.add(holder);
    }
  };
  World.prototype._clock = function (x, y, z) {
    var g = new THREE.Group(); g.position.set(x, y, z);
    var face = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.06, 20), this.mat(0xfffdf5)); face.rotation.x = Math.PI / 2; g.add(face);
    var rim = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.03, 6, 20), this.mat(0x5a3b22)); g.add(rim);
    function hand(len, w, col, self) { var geo = new THREE.BoxGeometry(w, len, 0.012); geo.translate(0, len / 2, 0); var m = new THREE.Mesh(geo, self.mat(col)); m.position.z = 0.04; var pv = new THREE.Group(); pv.add(m); g.add(pv); return pv; }
    this.clockHands = { h: hand(0.17, 0.025, 0x222222, this), m: hand(0.25, 0.016, 0x222222, this) }; this.scene.add(g); this.setClock(MF.mm('3:55'));
  };
  World.prototype.setClock = function (min) {
    if (!this.clockHands) return; var h = Math.floor(min / 60) % 12, m = min % 60;
    this.clockHands.h.rotation.z = -((h + m / 60) * Math.PI / 6); this.clockHands.m.rotation.z = -(m * Math.PI / 30);
  };

  /* ------------------------------------------------------------ people (simple low-poly figures) */
  World.prototype._npc = function (o) {
    var g = new THREE.Group(), s = o.scale || 1, M = this;
    function part(w, h, d, col, x, y, z) { var m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M.mat(col)); m.position.set(x, y, z); g.add(m); return m; }
    part(0.17, 0.78, 0.2, o.pants, -0.1, 0.39, 0); part(0.17, 0.78, 0.2, o.pants, 0.1, 0.39, 0);
    part(0.19, 0.08, 0.26, 0xf5f5f5, -0.1, 0.04, 0.03); part(0.19, 0.08, 0.26, 0xf5f5f5, 0.1, 0.04, 0.03);
    part(0.46, 0.62, 0.26, o.shirt, 0, 1.09, 0);
    part(0.12, 0.58, 0.14, o.shirt, -0.3, 1.08, 0); part(0.12, 0.58, 0.14, o.shirt, 0.3, 1.08, 0);
    part(0.11, 0.12, 0.11, o.skin, -0.3, 0.74, 0); part(0.11, 0.12, 0.11, o.skin, 0.3, 0.74, 0);
    var head = new THREE.Group(); head.position.set(0, 1.55, 0); g.add(head);
    var hm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.32, 0.3), this.mat(o.skin)); head.add(hm);
    var hair = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.32), this.mat(o.hair)); hair.position.y = 0.15; head.add(hair);
    [-0.07, 0.07].forEach(function (x) { var e = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.02), M.mat(0x111111)); e.position.set(x, 0.03, 0.155); head.add(e); });
    if (o.hat) { var hat = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.1, 0.36), this.mat(o.hat)); hat.position.y = 0.2; head.add(hat); }
    if (o.scarf) { var sc = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.34), this.mat(o.scarf)); sc.position.y = 0.02; sc.scale.set(1.04, 1.1, 1.04); head.remove(hm); head.add(sc); head.add(hm); sc.material = this.mat(o.scarf); hm.scale.set(0.92, 0.9, 1.02); hm.position.z = 0.03; }
    if (o.camera) part(0.16, 0.1, 0.08, 0x111111, 0.2, 0.95, 0.18);
    if (o.gold) { part(0.14, 0.1, 0.14, 0xd4af37, -0.3, 0.72, 0.02); part(0.14, 0.1, 0.14, 0xd4af37, 0.3, 0.72, 0.02); }
    g.scale.setScalar(s); g.position.set(o.x, 0, o.z); g.rotation.y = o.rot || 0; this.scene.add(g);
    this.npcs[o.id] = { group: g, head: head, baseRot: o.rot || 0, x: o.x, z: o.z, scale: s, phase: Math.random() * 6 };
    this.aabbs.push({ x0: o.x - 0.28, x1: o.x + 0.28, z0: o.z - 0.28, z1: o.z + 0.28, wall: false });
    var P = (this.C.people || []).filter(function (p) { return p.id === o.id; })[0];
    this.interactables.push({ id: 'npc_' + o.id, npc: o.id, x: o.x, y: 1.1 * s, z: o.z, r: 0.6 * Math.max(0.8, s), label: { en: P ? P.name : o.id, bm: P ? P.name : o.id } });
  };

  /* ------------------------------------------------------------ input */
  World.prototype._bind = function () {
    var self = this, cv = this.canvas;
    this._kd = function (e) {
      if (!self.running) return; var k = e.code;
      if (k === 'Tab') { e.preventDefault(); if (!e.repeat) self.emit('notebook'); return; }
      if (self.paused || !self.locked) { if (k === 'Escape') return; return; }
      self.keys[k] = true;
      if (k === 'KeyE' && !e.repeat) self.interact();
      if (k === 'KeyF' && !e.repeat) { self.flash = !self.flash; self.spot.visible = self.flash; MF.Sfx.play('click'); self.emit('flash', self.flash); }
      if (['Space', 'ArrowUp', 'ArrowDown', 'ControlLeft'].indexOf(k) >= 0) e.preventDefault();
    };
    this._ku = function (e) { self.keys[e.code] = false; };
    this._mm = function (e) { if (!self.locked || self.paused) return; self.player.yaw -= e.movementX * self.sens; self.player.pitch = Math.max(-1.45, Math.min(1.45, self.player.pitch - e.movementY * self.sens)); };
    this._pl = function () { var was = self.locked; self.locked = document.pointerLockElement === cv; if (was !== self.locked) { if (!self.locked) self.keys = {}; self.emit('lock', self.locked); } };
    this._rz = function () { self.resize(); };
    this._bl = function () { self.keys = {}; };
    document.addEventListener('keydown', this._kd); document.addEventListener('keyup', this._ku); document.addEventListener('mousemove', this._mm);
    document.addEventListener('pointerlockchange', this._pl); window.addEventListener('resize', this._rz); window.addEventListener('blur', this._bl);
    cv.addEventListener('click', function () { if (self.running && !self.paused && !self.locked) self.lock(); });
  };
  World.prototype.lock = function () { try { var p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(function () { }); } catch (e) { /* ignore */ } };
  World.prototype.unlock = function () { try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { /* ignore */ } };
  World.prototype.setPaused = function (p) { this.paused = p; if (p) this.keys = {}; };
  // while a notebook/menu covers the screen we stop drawing the 3D world (saves battery and speeds up slow laptops)
  World.prototype.setFrozen = function (f) { this.frozen = !!f; if (!f) this.last = performance.now(); };

  /* ------------------------------------------------------------ player / collision */
  World.prototype._collide = function () {
    var p = this.player;
    for (var pass = 0; pass < 2; pass++) for (var i = 0; i < this.aabbs.length; i++) {
      var b = this.aabbs[i], cx = Math.max(b.x0, Math.min(p.x, b.x1)), cz = Math.max(b.z0, Math.min(p.z, b.z1)), dx = p.x - cx, dz = p.z - cz, d2 = dx * dx + dz * dz;
      if (d2 < PLAYER_R * PLAYER_R) {
        if (d2 > 1e-8) { var d = Math.sqrt(d2), push = PLAYER_R - d; p.x += dx / d * push; p.z += dz / d * push; }
        else { var l = p.x - b.x0, r = b.x1 - p.x, t = p.z - b.z0, bt = b.z1 - p.z, m = Math.min(l, r, t, bt); if (m === l) p.x = b.x0 - PLAYER_R; else if (m === r) p.x = b.x1 + PLAYER_R; else if (m === t) p.z = b.z0 - PLAYER_R; else p.z = b.z1 + PLAYER_R; }
      }
    }
  };
  World.prototype.roomAt = function (x, z) {
    var best = null; for (var i = 0; i < this.rooms.length; i++) { var r = this.rooms[i]; if (x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1) { if (!best || r.indoor) best = r; } } return best;
  };
  // does the straight line from the camera to a point cross a WALL? (used so you cannot interact through walls)
  World.prototype._blocked = function (ax, az, bx, bz) {
    for (var i = 0; i < this.aabbs.length; i++) {
      var b = this.aabbs[i]; if (!b.wall) continue;
      var tmin = 0, tmax = 1, dx = bx - ax, dz = bz - az, ok = true;
      [[dx, ax, b.x0, b.x1], [dz, az, b.z0, b.z1]].forEach(function (s) {
        if (!ok) return; var d = s[0], o = s[1], lo = s[2], hi = s[3];
        if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) ok = false; } else { var t1 = (lo - o) / d, t2 = (hi - o) / d; if (t1 > t2) { var tt = t1; t1 = t2; t2 = tt; } tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2); if (tmin > tmax) ok = false; }
      });
      if (ok) return true;
    }
    return false;
  };
  World.prototype._findTarget = function () {
    var p = this.player, ey = this.eyeY(), fx = -Math.sin(p.yaw) * Math.cos(p.pitch), fy = Math.sin(p.pitch), fz = -Math.cos(p.yaw) * Math.cos(p.pitch), best = null, bt = 2.7;
    for (var i = 0; i < this.interactables.length; i++) {
      var o = this.interactables[i], vx = o.x - p.x, vy = o.y - ey, vz = o.z - p.z, t = vx * fx + vy * fy + vz * fz; if (t < 0.15 || t > bt) continue;
      var px = vx - fx * t, py = vy - fy * t, pz = vz - fz * t; if (px * px + py * py + pz * pz > o.r * o.r) continue;
      if (this._blocked(p.x, p.z, o.x, o.z)) continue; best = o; bt = t;
    }
    return best;
  };
  World.prototype.eyeY = function () { return EYE + (EYE_CROUCH - EYE) * this.player.crouch; };
  World.prototype.interact = function () { if (this.target) this.emit('interact', this.target); };

  /* ------------------------------------------------------------ spooky moments (mild; teacher sets the scare level) */
  World.prototype.setScare = function (n) {
    this.scare = n; var hz = this.C.horror, show = hz && hz.figure && n >= hz.figure.minScare;
    this.figure.forEach(function (m) { m.visible = !!show; });
  };
  World.prototype._flicker = function (room, secs) { this.flicker[room] = { until: performance.now() + secs * 1000 }; MF.Sfx.play('flicker'); };
  World.prototype._runFx = function (fx) {
    var p = fx.split(':'); if (p[0] === 'flicker') this._flicker(p[1], parseFloat(p[2]) || 1.5); else if (p[0] === 'sfx') MF.Sfx.play(p[1]);
  };
  World.prototype._checkZones = function () {
    var hz = this.C.horror; if (!hz) return; var room = this.roomAt(this.player.x, this.player.z);
    if ((room && room.id) !== (this.currentRoom && this.currentRoom.id)) { this.currentRoom = room; this.emit('room', room); }
    if (!room || this.scare < 1) return; var self = this;
    (hz.zones || []).forEach(function (z) {
      if (z.room !== room.id || self.fired[z.id] || self.scare < (z.minScare || 1)) return; self.fired[z.id] = true;
      self.pending.push({ at: performance.now() + (z.delay || 0.6) * 1000, fx: z.fx });
    });
    var f = hz.figure;
    if (f && this.scare >= f.minScare && !this.figureRevealed && this.figure.length && room.id === f.room) {
      var fp = this.figure[0].position, dx = fp.x - this.player.x, dz = fp.z - this.player.z;
      if (dx * dx + dz * dz < f.revealDistance * f.revealDistance) { this.figureRevealed = true; this._flicker('CR', 1.2); MF.Sfx.play('thump'); this.emit('reveal', f.reveal); }
    }
  };

  /* ------------------------------------------------------------ main loop */
  World.prototype.start = function () { if (this.running) return; this.running = true; this.last = performance.now(); this.setScare(this.scare); this.spot.visible = this.flash; var self = this; this._raf = requestAnimationFrame(function loop(t) { if (!self.running) return; self._frame(t); self._raf = requestAnimationFrame(loop); }); };
  World.prototype.stop = function () { this.running = false; if (this._raf) cancelAnimationFrame(this._raf); this.unlock(); };
  World.prototype._frame = function (t) {
    var dt = Math.min(0.05, (t - this.last) / 1000); this.last = t; var p = this.player, k = this.keys, now = performance.now();
    if (!this.paused && this.locked) {
      var crouch = !!(k.ControlLeft || k.ControlRight || k.KeyC), run = !!(k.ShiftLeft || k.ShiftRight) && !crouch;
      p.crouch += ((crouch ? 1 : 0) - p.crouch) * Math.min(1, dt * 10);
      var sp = crouch ? 1.4 : run ? 4.3 : 2.5, ix = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0), iz = (k.KeyS || k.ArrowDown ? 1 : 0) - (k.KeyW || k.ArrowUp ? 1 : 0), l = Math.hypot(ix, iz);
      if (l > 0) {
        ix /= l; iz /= l; var sn = Math.sin(p.yaw), cs = Math.cos(p.yaw), mx = (ix * cs + iz * sn) * sp * dt, mz = (-ix * sn + iz * cs) * sp * dt;
        p.x += mx; p.z += mz; this._collide(); p.bob += dt * sp * 2.6; p.stepT += dt * sp;
        if (p.stepT > (run ? 1.5 : 1.15)) { p.stepT = 0; if (!crouch) MF.Sfx.play('step'); }
      }
    }
    // camera
    var bobY = Math.sin(p.bob) * 0.025; this.camera.position.set(p.x, this.eyeY() + bobY, p.z); this.camera.rotation.order = 'YXZ'; this.camera.rotation.y = p.yaw; this.camera.rotation.x = p.pitch;
    // interaction target
    if (!this.paused && this.locked) { var tg = this._findTarget(); if (tg !== this.target) { this.target = tg; this.emit('target', tg); } } else if (this.target) { this.target = null; this.emit('target', null); }
    // npc idle: face the player when near
    for (var id in this.npcs) {
      var n = this.npcs[id], dx = p.x - n.x, dz = p.z - n.z, d2 = dx * dx + dz * dz, want = d2 < 36 ? Math.atan2(dx, dz) : n.baseRot, cur = n.group.rotation.y, df = Math.atan2(Math.sin(want - cur), Math.cos(want - cur));
      n.group.rotation.y += df * Math.min(1, dt * 3); n.group.position.y = Math.sin(now / 900 + n.phase) * 0.006;
    }
    // flicker + scheduled spooky moments
    for (var rid in this.lights) {
      var L = this.lights[rid], f = this.flicker[rid]; if (f && now < f.until) L.light.intensity = L.base * (Math.random() < 0.5 ? 0.05 : 1.1); else { L.light.intensity = L.base; if (f) delete this.flicker[rid]; }
    }
    for (var i = this.pending.length - 1; i >= 0; i--) if (now >= this.pending[i].at) { var job = this.pending.splice(i, 1)[0]; job.fx.forEach(this._runFx, this); }
    this._zoneT = (this._zoneT || 0) + dt; if (this._zoneT > 0.25) { this._zoneT = 0; this._checkZones(); }
    if (!this.frozen) this.renderer.render(this.scene, this.camera);
    // slow-computer detector → suggests low graphics
    this.frames++; this.fpsT += dt;
    if (this.fpsT > 3) { var fps = this.frames / this.fpsT; this.frames = 0; this.fpsT = 0; this.fps = fps; if (!this.paused && this.locked && !this.low) { this.slowCount = fps < 24 ? this.slowCount + 1 : 0; if (this.slowCount >= 2) { this.slowCount = 0; this.emit('slow', fps); } } }
  };
  World.prototype.getState = function () { var p = this.player; return { x: +p.x.toFixed(2), z: +p.z.toFixed(2), yaw: +p.yaw.toFixed(2), flash: this.flash, fired: this.fired, figureRevealed: this.figureRevealed }; };
  World.prototype.setState = function (s) { if (!s) return; var p = this.player; p.x = s.x; p.z = s.z; p.yaw = s.yaw || 0; this.flash = s.flash !== false; this.fired = s.fired || {}; this.figureRevealed = !!s.figureRevealed; };
  World.prototype.dispose = function () {
    this.stop(); document.removeEventListener('keydown', this._kd); document.removeEventListener('keyup', this._ku); document.removeEventListener('mousemove', this._mm);
    document.removeEventListener('pointerlockchange', this._pl); window.removeEventListener('resize', this._rz); window.removeEventListener('blur', this._bl);
    try { this.scene.traverse(function (o) { if (o.geometry) o.geometry.dispose(); }); this.renderer.dispose(); } catch (e) { /* ignore */ }
  };
  MF.World = World;
})(window.MF);
