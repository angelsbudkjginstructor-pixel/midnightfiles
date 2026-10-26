/* ============================================================================
   MF.models + MF.Inspector — small 3D objects the student can pick up, rotate,
   and look at from every side. (Uses its own tiny renderer, only while open.)
   ============================================================================ */
(function (MF) {
  'use strict';
  var M = MF.models = {};
  function mat(c, o) { return new THREE.MeshLambertMaterial(Object.assign({ color: c }, o || {})); }
  function mesh(g, m) { return new THREE.Mesh(g, m); }
  function tex(w, h, draw) { var c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); var t = new THREE.CanvasTexture(c); return t; }

  /* ---- display box (wooden, clear lid propped open, velvet inside, pink smudge, brass latch) ---- */
  M.box = function () {
    var g = new THREE.Group();
    var base = mesh(new THREE.BoxGeometry(2.0, 0.5, 1.3), mat(0x8a6a45)); g.add(base);
    var velvet = mesh(new THREE.BoxGeometry(1.8, 0.04, 1.1), mat(0x3a1f2b)); velvet.position.y = 0.26; g.add(velvet);
    var pink = mesh(new THREE.CircleGeometry(0.22, 12), mat(0xff7aa8)); pink.rotation.x = -Math.PI / 2; pink.position.set(0.3, 0.285, 0.1); g.add(pink);
    var hinge = new THREE.Group(); hinge.position.set(0, 0.25, -0.65);
    var lid = mesh(new THREE.BoxGeometry(2.0, 0.05, 1.3), mat(0xa9d6ff, { transparent: true, opacity: 0.4 })); lid.position.set(0, 0, 0.65); hinge.add(lid);
    hinge.rotation.x = -1.2; g.add(hinge);
    var latch = mesh(new THREE.BoxGeometry(0.25, 0.14, 0.06), mat(0xd4af37)); latch.position.set(0, 0.12, 0.66); g.add(latch);
    g.rotation.x = 0.35; return g;
  };
  /* ---- curved glass shards + pink drops ---- */
  M.shards = function () {
    var g = new THREE.Group(), glass = mat(0xcfefff, { transparent: true, opacity: 0.6, side: THREE.DoubleSide });
    var floor = mesh(new THREE.CircleGeometry(1.5, 20), mat(0xcdbb9a)); floor.rotation.x = -Math.PI / 2; floor.position.y = -0.05; g.add(floor);
    var specs = [[-0.6, -0.2, 0.9, 1.0, 0.5], [0.2, 0.3, 1.4, 0.8, 0.35], [0.7, -0.4, 0.2, 1.1, 0.4], [-0.1, -0.7, 2.4, 0.9, 0.3], [0.4, 0.6, 3.5, 0.7, 0.3], [-0.8, 0.5, 4.6, 0.9, 0.35]];
    specs.forEach(function (s) { var sh = mesh(new THREE.CylinderGeometry(s[4], s[4], 0.04, 10, 1, true, s[2], s[3]), glass); sh.position.set(s[0], 0.03, s[1]); sh.rotation.z = 1.2 + s[2] * 0.1; g.add(sh); });
    [[0.0, 0.0, 0.18], [0.35, -0.15, 0.1], [-0.4, 0.2, 0.12]].forEach(function (d) { var dr = mesh(new THREE.CircleGeometry(d[2], 10), mat(0xff7aa8)); dr.rotation.x = -Math.PI / 2; dr.position.set(d[0], -0.03, d[1]); g.add(dr); });
    g.rotation.x = 0.7; return g;
  };
  /* ---- fallen cup + juice puddle ---- */
  M.cup = function () {
    var g = new THREE.Group();
    var puddle = mesh(new THREE.CircleGeometry(1.1, 18), mat(0xff7aa8)); puddle.rotation.x = -Math.PI / 2; puddle.position.set(0.5, -0.3, 0); g.add(puddle);
    var cup = mesh(new THREE.CylinderGeometry(0.42, 0.3, 0.9, 14, 1, true), mat(0xff4d88, { side: THREE.DoubleSide })); cup.rotation.z = Math.PI / 2; cup.position.set(-0.4, -0.05, 0); g.add(cup);
    var bottom = mesh(new THREE.CircleGeometry(0.3, 14), mat(0xff4d88)); bottom.rotation.y = Math.PI / 2; bottom.position.set(-0.85, -0.05, 0); g.add(bottom);
    g.rotation.x = 0.7; return g;
  };
  /* ---- toy gold watch (plastic) ---- */
  M.toywatch = function () {
    var g = new THREE.Group();
    var body = mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.14, 24), mat(0xe7c94a)); body.rotation.x = Math.PI / 2; g.add(body);
    var face = mesh(new THREE.CircleGeometry(0.5, 24), mat(0xfff8d8)); face.position.z = 0.075; g.add(face);
    var strap = mesh(new THREE.TorusGeometry(0.85, 0.08, 6, 20), mat(0xe7c94a)); strap.position.y = 0.0; strap.scale.set(0.8, 1.2, 1); g.add(strap);
    var tag = mesh(new THREE.BoxGeometry(0.5, 0.3, 0.02), mat(0xffffff)); tag.position.set(0.9, -0.5, 0.2); tag.rotation.z = -0.4; g.add(tag);
    g.rotation.x = 0.2; return g;
  };
  /* ---- the missing gold pocket watch (front: cracked glass, stopped hands 3:21 · back: engraving) ---- */
  M.watch = function () {
    var g = new THREE.Group(), gold = mat(0xd4af37);
    var body = mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.24, 32), gold); body.rotation.x = Math.PI / 2; g.add(body);
    var ring = mesh(new THREE.TorusGeometry(0.2, 0.05, 8, 16), gold); ring.position.y = 1.12; g.add(ring);
    var crown = mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.2, 10), gold); crown.position.y = 1.0; g.add(crown);
    var chain = mesh(new THREE.TorusGeometry(0.5, 0.025, 6, 30, Math.PI), gold); chain.position.set(0, 1.25, 0); g.add(chain);
    var face = mesh(new THREE.CircleGeometry(0.82, 32), new THREE.MeshLambertMaterial({ map: tex(256, 256, function (c, w, h) {
      c.fillStyle = '#fffbea'; c.fillRect(0, 0, w, h); c.fillStyle = '#222'; c.font = 'bold 26px serif'; c.textAlign = 'center';
      for (var i = 1; i <= 12; i++) { var a = i * Math.PI / 6; c.fillText(String(i), w / 2 + Math.sin(a) * 100, h / 2 - Math.cos(a) * 100 + 9); }
      function hand(a, len, wd) { c.strokeStyle = '#111'; c.lineWidth = wd; c.beginPath(); c.moveTo(w / 2, h / 2); c.lineTo(w / 2 + Math.sin(a) * len, h / 2 - Math.cos(a) * len); c.stroke(); }
      hand((3 + 21 / 60) * Math.PI / 6, 62, 8); hand(21 * Math.PI / 30, 92, 5);
      c.fillStyle = '#ff7aa8'; c.beginPath(); c.arc(190, 190, 14, 0, 7); c.fill();       // sticky pink smudge
    }) })); face.position.z = 0.13; g.add(face);
    var glass = mesh(new THREE.CircleGeometry(0.82, 32), mat(0xd8f1ff, { transparent: true, opacity: 0.25 })); glass.position.z = 0.15; g.add(glass);
    var crack = tex(256, 256, function (c, w, h) { c.clearRect(0, 0, w, h); c.strokeStyle = 'rgba(255,255,255,0.95)'; c.lineWidth = 3; c.beginPath(); c.moveTo(60, 40); c.lineTo(130, 120); c.lineTo(200, 100); c.moveTo(130, 120); c.lineTo(110, 210); c.moveTo(130, 120); c.lineTo(220, 190); c.stroke(); });
    var cm = mesh(new THREE.CircleGeometry(0.82, 32), new THREE.MeshBasicMaterial({ map: crack, transparent: true })); cm.position.z = 0.16; g.add(cm);
    var back = mesh(new THREE.CircleGeometry(0.88, 32), new THREE.MeshLambertMaterial({ map: tex(256, 256, function (c, w, h) {
      c.fillStyle = '#c9a227'; c.fillRect(0, 0, w, h); c.strokeStyle = '#8a6d12'; c.lineWidth = 2;
      c.beginPath(); c.arc(w / 2, h / 2, 108, 0, 7); c.stroke(); c.beginPath(); c.arc(w / 2, h / 2, 96, 0, 7); c.stroke();
      c.fillStyle = '#6e5510'; c.font = 'italic 17px serif'; c.textAlign = 'center';
      c.fillText('~ ~ ~ ~ ~ ~ ~', w / 2, 92); c.fillText('To my grandson', w / 2, 122); c.fillText('~ ~ ~ ~ ~ ~', w / 2, 152); c.fillText('~ Atuk ~', w / 2, 182);
    }) })); back.position.z = -0.13; back.rotation.y = Math.PI; g.add(back);
    g.rotation.x = 0.15; return g;
  };
  /* ---- pink-stained star socks ---- */
  M.socks = function () {
    var g = new THREE.Group();
    var t = tex(256, 256, function (c, w, h) {
      c.fillStyle = '#fffbe6'; c.fillRect(0, 0, w, h);
      function st(x, y, r, col) { c.fillStyle = col; c.beginPath(); for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; c.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } c.closePath(); c.fill(); }
      for (var y = 28; y < h; y += 56) for (var x = 28 + ((y / 56) % 2) * 28; x < w; x += 56) st(x, y, 17, '#f1c40f');
      var gr = c.createRadialGradient(w * 0.8, h * 0.85, 4, w * 0.8, h * 0.85, 120); gr.addColorStop(0, 'rgba(255,90,150,0.9)'); gr.addColorStop(1, 'rgba(255,90,150,0)'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    });
    [0, 1].forEach(function (i) {
      var m = new THREE.MeshLambertMaterial({ map: t }), s = new THREE.Group();
      var leg = mesh(new THREE.BoxGeometry(0.62, 0.12, 1.1), m); leg.position.set(-0.4, 0, -0.2); s.add(leg);
      var foot = mesh(new THREE.BoxGeometry(1.1, 0.12, 0.6), m); foot.position.set(0.0, 0, 0.45); s.add(foot);
      s.position.set(0, i * 0.15, i * 0.35 - 0.2); s.rotation.y = i * 0.35; g.add(s);
    });
    g.rotation.x = 0.9; return g;
  };
  /* ---- toy robot bank with 3-dial lock ---- */
  M.robot = function () {
    var g = new THREE.Group(), grey = mat(0x9aa5b1);
    var body = mesh(new THREE.BoxGeometry(1.3, 1.5, 0.9), grey); body.position.y = -0.2; g.add(body);
    var head = mesh(new THREE.BoxGeometry(0.9, 0.7, 0.8), mat(0xc3ccd6)); head.position.y = 0.85; g.add(head);
    [-0.2, 0.2].forEach(function (x) { var e = mesh(new THREE.BoxGeometry(0.16, 0.16, 0.05), mat(0x00e0ff)); e.position.set(x, 0.9, 0.42); g.add(e); });
    var ant = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 6), grey); ant.position.y = 1.4; g.add(ant); var ball = mesh(new THREE.SphereGeometry(0.08, 8, 6), mat(0xff4040)); ball.position.y = 1.62; g.add(ball);
    var panel = mesh(new THREE.BoxGeometry(0.9, 0.5, 0.04), mat(0x333a44)); panel.position.set(0, -0.2, 0.47); g.add(panel);
    [-0.28, 0, 0.28].forEach(function (x) { var d = mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.06, 12), mat(0xf4d03f)); d.rotation.x = Math.PI / 2; d.position.set(x, -0.2, 0.51); g.add(d); });
    [-0.85, 0.85].forEach(function (x) { var a = mesh(new THREE.BoxGeometry(0.3, 1.0, 0.4), grey); a.position.set(x, -0.1, 0); g.add(a); });
    g.rotation.x = 0.1; return g;
  };
  /* ---- half-painted gold frame ---- */
  M.frame = function () {
    var g = new THREE.Group(), gold = mat(0xd4af37);
    [[0, 0.75, 2.0, 0.22], [0, -0.75, 2.0, 0.22]].forEach(function (b) { var m = mesh(new THREE.BoxGeometry(b[2], b[3], 0.2), gold); m.position.set(b[0], b[1], 0); g.add(m); });
    [[-0.9, 0, 0.22, 1.7], [0.9, 0, 0.22, 1.7]].forEach(function (b) { var m = mesh(new THREE.BoxGeometry(b[2], b[3], 0.2), gold); m.position.set(b[0], b[1], 0); g.add(m); });
    var photo = mesh(new THREE.PlaneGeometry(1.5, 1.2), new THREE.MeshLambertMaterial({ map: tex(256, 200, function (c, w, h) {
      c.fillStyle = '#bde0fe'; c.fillRect(0, 0, w, h); c.fillStyle = '#6aa84f'; c.fillRect(0, 140, w, 60);
      c.fillStyle = '#ef6f6c'; c.fillRect(70, 90, 30, 50); c.fillStyle = '#e0b894'; c.beginPath(); c.arc(85, 78, 16, 0, 7); c.fill();
      c.fillStyle = '#9aa7a0'; c.fillRect(140, 80, 36, 60); c.fillStyle = '#d9b38c'; c.beginPath(); c.arc(158, 68, 17, 0, 7); c.fill();
      c.fillStyle = '#333'; c.font = '14px sans-serif'; c.fillText('Aiman & Atuk', 70, 30);
    }) })); photo.position.z = 0.05; g.add(photo);
    var tagm = mesh(new THREE.BoxGeometry(0.7, 0.3, 0.02), mat(0xffffff)); tagm.position.set(0.55, -0.95, 0.2); tagm.rotation.z = 0.15; g.add(tagm);
    var sheen = mesh(new THREE.PlaneGeometry(2.0, 0.22), new THREE.MeshBasicMaterial({ color: 0xfff2b0, transparent: true, opacity: 0.35 })); sheen.position.set(0, 0.75, 0.11); g.add(sheen);
    g.rotation.x = -0.25; return g;
  };

  /* ------------------------------------------------------------ Inspector (rotate with the mouse) */
  MF.Inspector = function (canvas, low) {
    this.canvas = canvas; this.low = !!low;
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !low, alpha: true });
    this.renderer.setPixelRatio(low ? 0.8 : Math.min(window.devicePixelRatio || 1, 1.5));
    this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50); this.camera.position.set(0, 0, 5.2);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.75)); var d = new THREE.DirectionalLight(0xffffff, 0.8); d.position.set(2, 3, 4); this.scene.add(d);
    this.pivot = new THREE.Group(); this.scene.add(this.pivot); this.model = null; this.yaw = 0; this.pitch = 0; this.spin = 0; this.running = false;
    var self = this, drag = false, lx = 0, ly = 0;
    canvas.addEventListener('pointerdown', function (e) { drag = true; lx = e.clientX; ly = e.clientY; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointerup', function () { drag = false; });
    canvas.addEventListener('pointermove', function (e) { if (!drag) return; var dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY; self.yaw += dx * 0.012; self.pitch = Math.max(-1.3, Math.min(1.3, self.pitch + dy * 0.01)); self.spin += Math.abs(dx) * 0.012; self.autoRot = false; });
    canvas.addEventListener('wheel', function (e) { e.preventDefault(); self.camera.position.z = Math.max(2.6, Math.min(8, self.camera.position.z + e.deltaY * 0.004)); }, { passive: false });
    this.autoRot = true;
  };
  MF.Inspector.prototype.setModel = function (id) {
    if (this.model) { this.pivot.remove(this.model); this.model = null; }
    var build = MF.models[id]; if (!build) return;
    var m = build(); var box = new THREE.Box3().setFromObject(m), size = new THREE.Vector3(), ctr = new THREE.Vector3(); box.getSize(size); box.getCenter(ctr);
    var k = 2.6 / Math.max(size.x, size.y, size.z); m.scale.multiplyScalar(k); m.position.sub(ctr.multiplyScalar(k)); // centre
    var wrap = new THREE.Group(); wrap.add(m); this.model = wrap; this.pivot.add(wrap); this.yaw = 0; this.pitch = 0; this.spin = 0; this.autoRot = true; this.camera.position.z = 5.2;
  };
  MF.Inspector.prototype.resize = function (w, h) { this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); };
  // true when the back of the object is facing the viewer (used to reveal engravings)
  MF.Inspector.prototype.facingBack = function () { return Math.cos(this.yaw) < -0.55; };
  MF.Inspector.prototype.start = function () { if (this.running) return; this.running = true; var self = this; (function loop() { if (!self.running) return; if (self.autoRot) self.yaw += 0.004; self.pivot.rotation.y = self.yaw; self.pivot.rotation.x = self.pitch; self.renderer.render(self.scene, self.camera); requestAnimationFrame(loop); })(); };
  MF.Inspector.prototype.stop = function () { this.running = false; };
  MF.Inspector.prototype.dispose = function () { this.running = false; try { this.renderer.dispose(); } catch (e) { /* ignore */ } };
})(window.MF);
