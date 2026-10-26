/* ============================================================================
   CASE ARCHIVE — the list of all planned cases.
   A case is PLAYABLE only when its file (e.g. case009.js) is loaded AND it passes the
   fairness checker. The other cases are shown as "Coming soon" so the archive looks complete
   and the teacher can see what is planned.

   HOW TO ADD A NEW CASE (see README.md):
     1) copy case009.js to caseNNN.js and change the story data
     2) add  <script src="caseNNN.js"></script>  to index.html and teacher.html
     3) change  ready:true  for that case below.
   ============================================================================ */
(function (MF) {
  'use strict';
  var T = function (en, bm) { return { en: en, bm: bm }; };
  MF.ARCHIVE = [
    { id: '001', title: T('The Missing Lunchbox', 'Kotak Makanan Yang Hilang'), tag: T('A lunchbox vanishes before recess.', 'Kotak makanan hilang sebelum rehat.'), level: 1, subjects: ['math', 'english'] },
    { id: '002', title: T('The Lights Go Out', 'Lampu Padam'), tag: T('Who switched off the school hall lights?', 'Siapa memadamkan lampu dewan sekolah?'), level: 1, subjects: ['science', 'thinking'] },
    { id: '003', title: T('The Painted Wall', 'Dinding Yang Dicat'), tag: T('A new mural has a mysterious extra colour.', 'Mural baru ada warna tambahan yang misteri.'), level: 2, subjects: ['english', 'geography'] },
    { id: '004', title: T('The Library Whisper', 'Bisikan Di Perpustakaan'), tag: T('A book is returned with a secret note.', 'Sebuah buku dikembalikan dengan nota rahsia.'), level: 2, subjects: ['english', 'thinking'] },
    { id: '005', title: T('The Sports Day Trophy', 'Piala Hari Sukan'), tag: T('The trophy is gone — and the scoreboard is wrong.', 'Piala hilang — dan papan markah salah.'), level: 2, subjects: ['math', 'thinking'] },
    { id: '006', title: T('The Squeaky Staircase', 'Tangga Yang Berkeriut'), tag: T('Strange noises at night in the old school block.', 'Bunyi pelik pada waktu malam di blok sekolah lama.'), level: 3, subjects: ['science', 'thinking'] },
    { id: '007', title: T('The Night Market Mix-up', 'Kekeliruan Pasar Malam'), tag: T('Two stalls, one stolen bag, three witnesses.', 'Dua gerai, satu beg dicuri, tiga saksi.'), level: 3, subjects: ['math', 'geography'] },
    { id: '008', title: T('The Broken Science Lab', 'Makmal Sains Yang Rosak'), tag: T('A mess in the lab. Accident or sabotage?', 'Makmal bersepah. Kemalangan atau sabotaj?'), level: 3, subjects: ['science', 'thinking'] },
    { id: '009', title: T('The Birthday Party Mystery', 'Misteri Majlis Hari Jadi'), tag: T("Atuk's gold watch has vanished!", 'Jam emas Atuk hilang!'), level: 1, subjects: ['math', 'english', 'science', 'geography'], ready: true },
    { id: '010', title: T('The Last Bell', 'Loceng Terakhir'), tag: T('An abandoned school. A bell that rings by itself. A ghost-hunter who vanished.', 'Sekolah terbiar. Loceng yang berbunyi sendiri. Pemburu hantu yang hilang.'), level: 3, subjects: ['math', 'english', 'thinking'], scary: true, ready: true },
    { id: '011', title: T('Room 13, Hotel Belladonna', 'Bilik 13, Hotel Belladonna'), tag: T('A stormy night, a blackout and a bride who walks the halls.', 'Malam ribut, gelap gelita dan pengantin yang berjalan di lorong.'), level: 3, subjects: ['geography', 'math', 'science'], scary: true, ready: true },
    { id: '012', title: T('The Lighthouse at Skerry Point', 'Rumah Api Skerry Point'), tag: T('The light is on... but the keeper died years ago.', 'Lampu menyala... tetapi penjaga sudah lama meninggal.'), level: 4, subjects: ['geography', 'science', 'thinking'], scary: true, ready: true }
  ];
  MF.playable = function (id) {
    var a = MF.ARCHIVE.filter(function (c) { return c.id === id; })[0]; return !!(a && a.ready && MF.cases[id]);
  };
})(window.MF);
