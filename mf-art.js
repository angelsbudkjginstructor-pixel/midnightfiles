/* ============================================================================
   MF.art — flat 2D pictures drawn with code (no image files = small download).
   photos, footprint ruler, house plan, clock comparison.
   ============================================================================ */
(function (MF) {
  'use strict';
  var A = MF.art = {};

  /* ------------------------------------------------------------ drawing helpers */
  function rect(c, x, y, w, h, col) { c.fillStyle = col; c.fillRect(x, y, w, h); }
  function circ(c, x, y, r, col) { c.fillStyle = col; c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill(); }
  function line(c, x1, y1, x2, y2, col, w) { c.strokeStyle = col; c.lineWidth = w || 2; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); }
  function text(c, s, x, y, size, col, align, bold) { c.fillStyle = col || '#222'; c.font = (bold ? 'bold ' : '') + (size || 16) + 'px "Trebuchet MS", Arial, sans-serif'; c.textAlign = align || 'left'; c.fillText(s, x, y); }
  function star(c, x, y, r, col) {
    c.fillStyle = col; c.beginPath();
    for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; c.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
    c.closePath(); c.fill();
  }
  A.h = { rect: rect, circ: circ, line: line, text: text, star: star };   // drawing helpers shared with case files
  A.clockFace = function (c, cx, cy, r, h, m) {
    circ(c, cx, cy, r + 5, '#5a3b22'); circ(c, cx, cy, r, '#fffdf5');
    for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; line(c, cx + Math.sin(a) * r * 0.82, cy - Math.cos(a) * r * 0.82, cx + Math.sin(a) * r * 0.94, cy - Math.cos(a) * r * 0.94, '#333', Math.max(1.5, r / 14)); }
    var ha = ((h % 12) + m / 60) * Math.PI / 6, ma = m * Math.PI / 30;
    line(c, cx, cy, cx + Math.sin(ha) * r * 0.5, cy - Math.cos(ha) * r * 0.5, '#222', Math.max(2.5, r / 8));
    line(c, cx, cy, cx + Math.sin(ma) * r * 0.78, cy - Math.cos(ma) * r * 0.78, '#222', Math.max(1.8, r / 12));
    circ(c, cx, cy, Math.max(2, r / 14), '#c0392b');
  };
  // simple child / person figure. feet at (x, y). s = scale. socks: 'star' | 'stripe' | 'black' | 'white' | 'slipper'
  function person(c, x, y, s, o) {
    var skin = o.skin || '#e0b894', shirt = o.shirt || '#4fa3e0', pants = o.pants || '#2c3e50', hair = o.hair || '#222';
    var lh = 70 * s, bh = 78 * s, bw = 50 * s;
    // legs
    rect(c, x - 22 * s, y - lh, 18 * s, lh - 12 * s, pants); rect(c, x + 4 * s, y - lh, 18 * s, lh - 12 * s, pants);
    // socks / feet
    [x - 22 * s, x + 4 * s].forEach(function (fx, idx) {
      var sk = o.socks || 'white', fw = 22 * s, fy = y - 14 * s;
      if (sk === 'slipper') { rect(c, fx - 2 * s, fy + 4 * s, fw + 4 * s, 10 * s, '#c58b4c'); return; }
      if (sk === 'black') rect(c, fx - 2 * s, fy - 6 * s, fw + 2 * s, 20 * s, '#1b1b1b');
      else if (sk === 'white') rect(c, fx - 2 * s, fy - 6 * s, fw + 2 * s, 20 * s, '#f5f5f5');
      else if (sk === 'stripe') { rect(c, fx - 2 * s, fy - 6 * s, fw + 2 * s, 20 * s, '#ffffff'); for (var k = 0; k < 4; k++) rect(c, fx - 2 * s, fy - 6 * s + k * 5 * s, fw + 2 * s, 2.4 * s, '#2e86de'); }
      else if (sk === 'star') { rect(c, fx - 2 * s, fy - 6 * s, fw + 2 * s, 20 * s, '#fffbe6'); star(c, fx + 5 * s, fy, 4.2 * s, '#f1c40f'); star(c, fx + 14 * s, fy + 7 * s, 3.8 * s, '#f1c40f'); star(c, fx + 4 * s, fy + 10 * s, 3.2 * s, '#f39c12'); }
    });
    // body
    rect(c, x - bw / 2, y - lh - bh, bw, bh, shirt);
    // arms
    var pose = o.pose || 'down';
    if (pose === 'point') { rect(c, x + bw / 2, y - lh - bh + 6 * s, 40 * s, 10 * s, skin); rect(c, x - bw / 2 - 10 * s, y - lh - bh + 6 * s, 10 * s, 50 * s, shirt); }
    else if (pose === 'carry') { rect(c, x - bw / 2 - 8 * s, y - lh - bh + 8 * s, 10 * s, 48 * s, shirt); rect(c, x + bw / 2 - 2 * s, y - lh - bh + 8 * s, 10 * s, 48 * s, shirt); }
    else if (pose === 'kick') { rect(c, x - bw / 2 - 10 * s, y - lh - bh + 6 * s, 10 * s, 46 * s, shirt); rect(c, x + bw / 2, y - lh - bh + 6 * s, 10 * s, 46 * s, shirt); }
    else { rect(c, x - bw / 2 - 10 * s, y - lh - bh + 6 * s, 10 * s, 50 * s, shirt); rect(c, x + bw / 2, y - lh - bh + 6 * s, 10 * s, 50 * s, shirt); }
    // head
    circ(c, x, y - lh - bh - 20 * s, 22 * s, skin);
    c.fillStyle = hair; c.beginPath(); c.arc(x, y - lh - bh - 24 * s, 23 * s, Math.PI, 0); c.fill();
    circ(c, x - 8 * s, y - lh - bh - 20 * s, 2.4 * s, '#222'); circ(c, x + 8 * s, y - lh - bh - 20 * s, 2.4 * s, '#222');
    c.strokeStyle = '#a0522d'; c.lineWidth = 2 * s; c.beginPath(); c.arc(x, y - lh - bh - 12 * s, 7 * s, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke();
    if (o.gold) { rect(c, x - bw / 2 - 10 * s, y - lh - bh + 40 * s, 12 * s, 16 * s, '#d4af37'); }
  }
  function cabinet(c, x, y, s, state) {      // state: 'watch' | 'empty'
    rect(c, x, y - 120 * s, 230 * s, 120 * s, '#6b4630'); rect(c, x + 6 * s, y - 112 * s, 218 * s, 50 * s, '#7a5a3a');
    // picture frame above
    rect(c, x + 40 * s, y - 260 * s, 150 * s, 100 * s, '#d8b26e'); rect(c, x + 50 * s, y - 250 * s, 130 * s, 80 * s, '#9ec9e8');
    // display box on top
    rect(c, x + 85 * s, y - 145 * s, 70 * s, 26 * s, '#8a6a45'); rect(c, x + 88 * s, y - 143 * s, 64 * s, 8 * s, '#3a1f2b');
    if (state === 'watch') { circ(c, x + 120 * s, y - 138 * s, 11 * s, '#d4af37'); circ(c, x + 120 * s, y - 138 * s, 8 * s, '#fff3c4'); line(c, x + 120 * s, y - 138 * s, x + 120 * s, y - 143 * s, '#222', 1.5 * s); line(c, x + 120 * s, y - 138 * s, x + 124 * s, y - 138 * s, '#222', 1.5 * s); }
    c.fillStyle = 'rgba(190,225,255,0.45)'; c.fillRect(x + 85 * s, y - 154 * s, 70 * s, 14 * s);   // clear lid
    c.strokeStyle = '#cfe9ff'; c.lineWidth = 1.5 * s; c.strokeRect(x + 85 * s, y - 154 * s, 70 * s, 14 * s);
  }
  function livingRoom(c, W, H, hh, mn, boxState) {
    rect(c, 0, 0, W, H * 0.66, '#e6d9bf'); rect(c, 0, H * 0.66, W, H * 0.34, '#cdbb9a');
    rect(c, 0, H * 0.66 - 6, W, 6, '#a58b63');
    // balloon + window light
    circ(c, W * 0.1, H * 0.2, 22, '#e74c3c'); circ(c, W * 0.17, H * 0.14, 20, '#3498db');
    A.clockFace(c, W * 0.5, H * 0.16, 36, hh, mn);
    cabinet(c, W * 0.52, H * 0.78, 1.5, boxState);
  }
  function stamp(c, W, H, minutes) {
    var h = Math.floor(minutes / 60) % 12 || 12, m = minutes % 60;
    var s = h + ':' + (m < 10 ? '0' : '') + m + ' PM';
    rect(c, W - 170, H - 44, 160, 34, 'rgba(0,0,0,0.45)'); text(c, s, W - 90, H - 18, 24, '#ffb347', 'center', true);
    c.strokeStyle = 'rgba(255,255,255,0.7)'; c.lineWidth = 3; c.strokeRect(6, 6, W - 12, H - 12);
  }

  /* ------------------------------------------------------------ the five camera photos (960 x 600 so zoom stays sharp) */
  A.photos = {
    photo_arrival: function (c, W, H, o) {
      livingRoom(c, W, H, 2, 5, 'watch');
      person(c, W * 0.43, H * 0.93, 1.55, { shirt: '#ef6f6c', pants: '#3b5998', hair: '#1a1a1a', socks: 'star', pose: 'down' });
      circ(c, W * 0.8, H * 0.22, 24, '#f1c40f'); circ(c, W * 0.87, H * 0.28, 22, '#2ecc71');
      stamp(c, W, H, o.stampT);
    },
    photo_shelf: function (c, W, H, o) {
      livingRoom(c, W, H, 3, 10, 'watch');
      person(c, W * 0.36, H * 0.93, 1.55, { shirt: '#ef6f6c', pants: '#3b5998', hair: '#1a1a1a', socks: 'star', pose: 'down' });
      person(c, W * 0.2, H * 0.93, 1.55, { shirt: '#4fa3e0', pants: '#2c3e50', hair: '#2b1b0e', socks: 'stripe', pose: 'point' });
      stamp(c, W, H, o.stampT);
    },
    photo_garden1: function (c, W, H, o) { garden(c, W, H); gazebo(c, W, H, true);
      person(c, W * 0.3, H * 0.9, 1.5, { shirt: '#ef6f6c', pants: '#3b5998', hair: '#1a1a1a', socks: 'slipper', pose: 'kick' });
      person(c, W * 0.52, H * 0.9, 1.5, { shirt: '#4fa3e0', pants: '#2c3e50', hair: '#2b1b0e', socks: 'slipper', pose: 'kick' });
      circ(c, W * 0.41, H * 0.88, 14, '#ffffff'); stamp(c, W, H, o.stampT); },
    photo_garden2: function (c, W, H, o) { garden(c, W, H); gazebo(c, W, H, true);
      person(c, W * 0.42, H * 0.9, 1.5, { shirt: '#4fa3e0', pants: '#2c3e50', hair: '#2b1b0e', socks: 'slipper', pose: 'kick' });
      circ(c, W * 0.55, H * 0.88, 14, '#ffffff'); stamp(c, W, H, o.stampT); },
    photo_zack: function (c, W, H, o) {
      livingRoom(c, W, H, 3, 25, 'empty');
      // faint pink marks on the carpet
      c.fillStyle = 'rgba(255,120,170,0.55)';
      [[0.56, 0.9], [0.6, 0.86], [0.64, 0.92], [0.67, 0.87]].forEach(function (p, i) { c.beginPath(); c.ellipse(W * p[0], H * p[1], 14, 7, 0.3 * i, 0, Math.PI * 2); c.fill(); });
      person(c, W * 0.28, H * 0.95, 1.6, { shirt: '#e0a030', pants: '#222', hair: '#241a12', socks: 'black', pose: 'carry', gold: true });
      rect(c, W * 0.34, H * 0.62, 70, 70, '#3a4a5a'); rect(c, W * 0.355, H * 0.57, 20, 36, '#d4af37'); // bag + gold paint can
      stamp(c, W, H, o.stampT);
    }
  };
  function garden(c, W, H) {
    var g = c.createLinearGradient(0, 0, 0, H * 0.5); g.addColorStop(0, '#f6b26b'); g.addColorStop(1, '#fde8c0'); c.fillStyle = g; c.fillRect(0, 0, W, H * 0.5);
    rect(c, 0, H * 0.5, W, H * 0.5, '#5b9a4a'); rect(c, 0, H * 0.46, W, 26, '#8d6b4b');
    for (var i = 0; i < 30; i++) rect(c, i * W / 30, H * 0.46, 8, 30, '#7a5a3a');
  }
  function gazebo(c, W, H, atuk) {
    var x = W * 0.74, y = H * 0.52;
    rect(c, x, y - 170, 10, 170, '#b08a5a'); rect(c, x + 150, y - 170, 10, 170, '#b08a5a');
    c.fillStyle = '#8c5a3a'; c.beginPath(); c.moveTo(x - 20, y - 165); c.lineTo(x + 80, y - 230); c.lineTo(x + 180, y - 165); c.closePath(); c.fill();
    if (atuk) {
      rect(c, x + 55, y - 30, 50, 20, '#d8b26e');
      rect(c, x + 62, y - 100, 36, 70, '#9aa7a0'); circ(c, x + 80, y - 118, 15, '#d9b38c'); c.fillStyle = '#ddd'; c.beginPath(); c.arc(x + 80, y - 123, 15, Math.PI, 0); c.fill();
      rect(c, x + 100, y - 70, 12, 10, '#ffffff');   // tea cup
    }
  }
  // paint any photo onto a canvas
  A.paintPhoto = function (canvas, item) { canvas.width = 960; canvas.height = 600; var c = canvas.getContext('2d'); (A.photos[item.art] || function () { })(c, 960, 600, { stampT: item.stampT }); };

  /* ------------------------------------------------------------ footprint with ruler (maths measuring) */
  A.footprint = function (canvas) {
    canvas.width = 640; canvas.height = 300; var c = canvas.getContext('2d');
    rect(c, 0, 0, 640, 300, '#d9c7a3');
    var px = 22, ox = 36, base = 250;                 // 22 px per cm
    // sock print: heel at 0 cm, toe at 19 cm
    c.fillStyle = 'rgba(255,92,150,0.75)'; c.beginPath();
    c.moveTo(ox, base - 60); c.quadraticCurveTo(ox - 10, base - 100, ox + 60, base - 110); c.lineTo(ox + 19 * px - 70, base - 118);
    c.quadraticCurveTo(ox + 19 * px + 4, base - 120, ox + 19 * px, base - 66); c.quadraticCurveTo(ox + 19 * px - 10, base - 40, ox + 19 * px - 70, base - 50);
    c.lineTo(ox + 60, base - 44); c.quadraticCurveTo(ox - 8, base - 40, ox, base - 60); c.fill();
    star(c, ox + 19 * px - 48, base - 82, 11, 'rgba(255,255,255,0.9)'); star(c, ox + 19 * px - 100, base - 76, 9, 'rgba(255,255,255,0.9)'); star(c, ox + 19 * px - 78, base - 100, 7, 'rgba(255,255,255,0.8)');
    // ruler
    rect(c, ox - 16, base, 25 * px + 40, 40, '#f4e5b0'); c.strokeStyle = '#6b5a2a'; c.lineWidth = 2; c.strokeRect(ox - 16, base, 25 * px + 40, 40);
    for (var i = 0; i <= 25; i++) { var x = ox + i * px; line(c, x, base, x, base + (i % 5 === 0 ? 22 : 14), '#4a3d17', i % 5 === 0 ? 2.5 : 1.5); if (i % 2 === 0) text(c, String(i), x, base + 36, 14, '#3a2d0a', 'center', true); }
    text(c, 'cm', ox + 25 * px + 14, base + 36, 14, '#3a2d0a', 'left', true);
    line(c, ox, base - 130, ox, base, 'rgba(0,0,0,0.35)', 1.5);
    text(c, '0', ox, base - 134, 14, '#333', 'center', true);
  };

  /* ------------------------------------------------------------ house plan with compass (geography) */
  A.plan = function (canvas) {
    canvas.width = 640; canvas.height = 470; var c = canvas.getContext('2d');
    rect(c, 0, 0, 640, 470, '#f7f1df'); c.strokeStyle = '#3d3a33'; c.lineWidth = 3;
    var s = 14, ox = 40, oy = 150;                   // world (x,z) -> plan px
    function R(x0, z0, x1, z1, col, label, lx, lz) { var X = ox + (x0 + 6) * s, Y = oy + (z0 + 10) * s * 0.78 - 110, w = (x1 - x0) * s, h = (z1 - z0) * s * 0.78; rect(c, X, Y, w, h, col); c.strokeRect(X, Y, w, h); if (label) text(c, label, X + w / 2, Y + h / 2 + 5, 15, '#222', 'center', true); return { X: X, Y: Y, w: w, h: h }; }
    R(-6, -10, 2, -4, '#fde8c0', 'Kitchen / Dapur');
    R(-6, -4, 2, 4, '#e6d9bf', 'Living room / Ruang tamu');
    R(2, -1, 10, 1, '#d9cdb8', 'Corridor / Koridor');
    R(10, -4, 16, 4, '#bcd6ea', "Aiman's room / Bilik Aiman");
    R(-10, 4, 14, 20, '#bfe3b0', 'Garden / Taman');
    R(8, 14, 11, 17, '#d3b88f', 'Shed');
    R(5.5, 6, 8.5, 9, '#c9a87a', 'Gazebo');
    var cab = { x: ox + (0.9 + 6) * s, y: oy + (-3.8 + 10) * s * 0.78 - 110 }; circ(c, cab.x, cab.y, 6, '#6b4630'); text(c, 'cabinet', cab.x, cab.y - 9, 12, '#6b4630', 'center', true);
    var fd = { x: ox + 0, y: oy + (3 + 10) * s * 0.78 - 110 }; rect(c, fd.x - 4, fd.y - 12, 8, 24, '#8a3b2a'); text(c, 'Front door', fd.x + 8, fd.y + 4, 12, '#8a3b2a', 'left', true);
    // compass
    var cx = 560, cy = 90; circ(c, cx, cy, 52, '#fffdf5'); c.strokeStyle = '#3d3a33'; c.lineWidth = 2.5; c.beginPath(); c.arc(cx, cy, 52, 0, 7); c.stroke();
    line(c, cx, cy - 46, cx, cy + 46, '#3d3a33', 2); line(c, cx - 46, cy, cx + 46, cy, '#3d3a33', 2);
    c.fillStyle = '#c0392b'; c.beginPath(); c.moveTo(cx, cy - 46); c.lineTo(cx - 8, cy - 14); c.lineTo(cx + 8, cy - 14); c.closePath(); c.fill();
    text(c, 'N / U', cx, cy - 58, 15, '#c0392b', 'center', true); text(c, 'S', cx, cy + 74, 15, '#222', 'center', true);
    text(c, 'E / T', cx + 74, cy + 5, 15, '#222', 'left', true); text(c, 'W / B', cx - 74, cy + 5, 15, '#222', 'right', true);
    text(c, 'HOUSE PLAN / PELAN RUMAH', 36, 36, 20, '#3d3a33', 'left', true);
    text(c, 'N=North/Utara  S=South/Selatan  E=East/Timur  W=West/Barat', 36, 60, 13, '#555', 'left');
  };

  /* ------------------------------------------------------------ wall clock vs camera stamp (maths) */
  A.clockcompare = function (canvas) {
    canvas.width = 620; canvas.height = 210; var c = canvas.getContext('2d');
    rect(c, 0, 0, 620, 210, '#efe6cf');
    A.clockFace(c, 110, 105, 62, 3, 10); text(c, 'Wall clock in Photo 2', 110, 196, 14, '#333', 'center', true); text(c, 'Jam dinding dalam Gambar 2', 110, 14, 12, '#666', 'center');
    rect(c, 330, 36, 250, 120, '#222'); rect(c, 340, 46, 230, 100, '#0e3d2a'); text(c, '3:20 PM', 455, 112, 46, '#7dffb5', 'center', true);
    text(c, 'Camera time stamp (Photo 2)', 455, 182, 14, '#333', 'center', true); text(c, 'Cap masa kamera (Gambar 2)', 455, 14, 12, '#666', 'center');
    text(c, '≠', 262, 118, 54, '#c0392b', 'center', true);
  };

  /* paint any art by id */
  A.paint = function (id, canvas, item) {
    if (A.photos[id]) return A.paintPhoto(canvas, item || {});
    if (A[id] && typeof A[id] === 'function') A[id](canvas);
  };
})(window.MF);
