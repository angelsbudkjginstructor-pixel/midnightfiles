/* ============================================================================
   CASE 004 — THE LIBRARY WHISPER / BISIKAN DI PERPUSTAKAAN    (School library at night)
   ----------------------------------------------------------------------------
   HIDDEN SOLUTION
   - The rare "Moon Atlas" (1789, worth RM 90,000) was kept in a locked glass case in the Rare Book Room.
     Only head librarian Miss Delphine MARSH has the case key.
   - 4:50 Dr Hale returns the atlas. 5:00 Marsh locks it in the case.
   - 6:10 Marsh agrees to SELL it secretly to a collector (Mr Quill) for RM 90,000. A school AUDIT of the
     Rare Room is on Monday: she must make it look like a THEFT.
   - 7:12 Marsh scans the atlas OUT with her own staff login and carries it in a tote bag (7:15, caught on the
     hall camera; little Ben is hiding behind a shelf and sees her). She hides it under the Sunday returns cart in the basement archive.
   - 7:45 Marsh "discovers" the theft and scares everybody with a GHOST story. From 8:05 she whispers
     "Give it back..." through the old SPEAKING TUBE that joins her office to the Stacks.
   - 8:15 Ben, too scared to speak, slips a coded note (Caesar +3) in the returns slot: "HER OFFICE".
   TWIST: the person who reported the crime IS the thief, and the "ghost" is the thief's own whisper.
   ============================================================================ */
(function () {
  const kit = MF.kit, T = kit.T, mm = kit.mm, D = kit.doc;
  const C = {
    id: '004', num: 4,
    title: T('The Library Whisper', 'Bisikan Di Perpustakaan'),
    tagline: T('A priceless book is gone, the shelves whisper "give it back" — and the person who called for help is smiling.', 'Sebuah buku bernilai hilang, rak berbisik "pulangkan" — dan orang yang meminta tolong sedang tersenyum.'),
    place: T('Oakridge School Library', 'Perpustakaan Sekolah Oakridge'),
    premise: T(
      `It is 8:30 pm on Reading Night. The rare Moon Atlas (1789), the most valuable book in Oakridge School, has vanished from its locked case. Since eight o'clock a thin voice has been whispering from the shelves: "Give... it... back...". The librarian, Miss Marsh, says it is the ghost of old Edith Lorne, who guarded the library for forty years. Someone also slipped a strange coded note into the returns slot. The school board comes on Monday. Find the truth before 9:10 pm. Remember: a whisper is only a sound, and sounds have sources.`,
      `Sekarang pukul 8:30 malam pada Malam Membaca. Atlas Bulan yang jarang ada (1789), buku paling bernilai di Sekolah Oakridge, hilang daripada kotaknya yang berkunci. Sejak pukul lapan suara halus berbisik dari rak: "Pulangkan... ia...". Pustakawan, Cik Marsh, berkata itu hantu Edith Lorne tua yang menjaga perpustakaan selama empat puluh tahun. Seseorang juga menyelitkan nota berkod yang pelik ke dalam lubang pemulangan buku. Lembaga sekolah datang Isnin. Cari kebenaran sebelum 9:10 malam. Ingat: bisikan hanyalah bunyi, dan bunyi ada sumbernya.`),
    mysteryType: 'Staged theft / false ghost',
    subjects: ['english', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('8:30'), deadline: mm('9:10'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },
    timeUp: { title: T('The lights go out!', 'Lampu padam!'), text: T('The library lights die. Monday comes, the book is gone for ever. Name the culprit NOW!', 'Lampu perpustakaan padam. Isnin tiba, buku hilang selama-lamanya. Namakan pelaku SEKARANG!') },

    hidden: {
      culprit: 'marsh', what: 'staged_theft', window: [mm('6:10'), mm('8:15')],
      summary: T(
        `Miss Marsh secretly sold the Moon Atlas to a collector for RM 90,000. Because the school audit was on Monday, she scanned the book out with her own login at 7:12 pm, hid it under the returns cart in the basement archive, and then "discovered" a theft. To blame a ghost she whispered through the old speaking tube from her office. Little Ben saw her carry the bag and sent a coded note: HER OFFICE.`,
        `Cik Marsh menjual Atlas Bulan secara rahsia kepada pengumpul dengan harga RM 90,000. Oleh sebab audit sekolah pada hari Isnin, dia mengimbas buku itu keluar dengan log masuknya sendiri pukul 7:12 malam, menyorokkannya di bawah troli pemulangan di arkib bawah tanah, kemudian "menemui" kecurian. Untuk menyalahkan hantu dia berbisik melalui tiub bercakap lama dari pejabatnya. Ben kecil nampak dia membawa beg dan menghantar nota berkod: PEJABATNYA.`),
      sequence: [
        [mm('4:50'), T('Dr Hale returns the atlas. Marsh locks it in the case at 5:00.', 'Dr Hale memulangkan atlas. Marsh mengunci di dalam kotak pukul 5:00.')],
        [mm('6:10'), T('Marsh agrees to sell the atlas to Mr Quill.', 'Marsh bersetuju menjual atlas kepada Encik Quill.')],
        [mm('7:12'), T('Marsh scans the atlas OUT and carries it away in a tote bag.', 'Marsh mengimbas atlas KELUAR dan membawanya dalam beg tote.')],
        [mm('7:45'), T('Marsh "discovers" the theft.', 'Marsh "menemui" kecurian.')],
        [mm('8:05'), T('The whispering starts, through the speaking tube.', 'Bisikan bermula, melalui tiub bercakap.')],
        [mm('8:15'), T('Ben slips the coded note into the returns slot.', 'Ben menyelitkan nota berkod ke lubang pemulangan.')]
      ],
      essentialClues: ['rare_case', 'scan_log', 'hall_cam', 'whisper_tube', 'sale_email', 'atlas_found', 'c_marsh_never'],
      misleading: [
        { item: 'c_hale_left', why: T('Dr Hale was angry she would not lend the atlas again, but he left at 5:05 and has no key.', 'Dr Hale marah dia tidak mahu meminjamkan atlas lagi, tetapi dia pulang pukul 5:05 dan tiada kunci.') },
        { item: 'c_okoro_keys', why: T('Mr Okoro has keys to every DOOR but not to the glass case.', 'Encik Okoro ada kunci semua PINTU tetapi bukan kotak kaca.') },
        { item: 'return_note', why: T('A note can point somewhere, but it is not proof by itself.', 'Nota boleh menunjuk ke suatu tempat tetapi bukan bukti dengan sendirinya.') },
        { item: 'archive_memo', why: T('A memo about the returns cart is only a routine staff note.', 'Memo tentang troli pemulangan hanyalah nota kakitangan biasa.') }
      ]
    },

    people: [
      { id: 'marsh', name: 'Miss Delphine Marsh', age: 52, role: T('Head librarian', 'Ketua pustakawan'), rel: T('Reported the theft', 'Melaporkan kecurian'), color: '#8a4a7a', suspect: true },
      { id: 'hale', name: 'Dr. Arthur Hale', age: 60, role: T('History teacher', 'Guru sejarah'), rel: T('Studied the atlas for years', 'Mengkaji atlas bertahun-tahun'), color: '#2f6f9e', suspect: true },
      { id: 'okoro', name: 'Mr. Samuel Okoro', age: 58, role: T('Night caretaker', 'Penjaga malam'), rel: T('Holds the door keys', 'Memegang kunci pintu'), color: '#c0562b', suspect: true },
      { id: 'ben', name: 'Ben Carter', age: 11, role: T('Year 6 student, ghost-story fan', 'Murid Tahun 6, peminat cerita hantu'), rel: T('Stayed late for Reading Night', 'Tinggal lewat untuk Malam Membaca'), color: '#33a3a3', suspect: true },
      { id: 'priya', name: 'Priya Nair', age: 14, role: T('Student librarian', 'Pustakawan pelajar'), rel: T('Shelves books after school', 'Menyusun buku selepas sekolah'), color: '#7a5cc0', suspect: true }
    ],

    items: [
      /* ---------- READING HALL ---------- */
      { id: 'return_note', type: 'document', icon: '✉️', title: T('Coded note from the returns slot', 'Nota berkod dari lubang pemulangan'), where: T('Reading Hall desk', 'Meja Dewan Bacaan'),
        desc: T(`A scrap of paper in pencil, folded small. It reads: KHU RIILFH. The letters look like a secret code.`, `Secebis kertas bertulis pensel, dilipat kecil. Tertulis: KHU RIILFH. Huruf-hurufnya seperti kod rahsia.`),
        puzzle: 'pz_cipher', inspect: { kind: 'puzzle-doc',
          html: D('✉️ <b>The note</b><br><span style="font-size:1.6em;letter-spacing:4px"><b>KHU RIILFH</b></span><br><small>Written in pencil by a child? Each letter was moved 3 places FORWARD in the alphabet (A→D, B→E ...).</small>', '✉️ <b>Nota itu</b><br><span style="font-size:1.6em;letter-spacing:4px"><b>KHU RIILFH</b></span><br><small>Ditulis dengan pensel oleh kanak-kanak? Setiap huruf dialihkan 3 tempat KE HADAPAN dalam abjad (A→D, B→E ...).</small>'),
          fixedHtml: D('✉️ <b>KHU RIILFH</b> = <b>HER OFFICE</b> ✔<br><small>Each letter was shifted back 3 places.</small>', '✉️ <b>KHU RIILFH</b> = <b>HER OFFICE</b> ✔<br><small>Setiap huruf dialihkan balik 3 tempat.</small>') } },
      { id: 'catalog_pc', type: 'device', icon: '🖥️', title: T('Library computer', 'Komputer perpustakaan'), where: T('Reading Hall', 'Dewan Bacaan'),
        desc: T(`The catalogue computer. The "audit trail" for the Moon Atlas is on screen, but some words are missing.`, `Komputer katalog. "Jejak audit" untuk Atlas Bulan ada pada skrin, tetapi beberapa perkataan hilang.`),
        puzzle: 'pz_pc', inspect: { kind: 'puzzle-doc',
          html: D('🖥️ <b>CATALOGUE — AUDIT TRAIL</b><br>Item: <b>912.3 MOO — The Moon Atlas</b><br>"At 7:12 pm the atlas ____ scanned out by user MARSH_D. The case ____ with a key, not by force. Nobody ____ it back."<br><small>(some words are missing)</small>', '🖥️ <b>KATALOG — JEJAK AUDIT</b><br>Item: <b>912.3 MOO — The Moon Atlas</b><br>"At 7:12 pm the atlas ____ scanned out by user MARSH_D. The case ____ with a key, not by force. Nobody ____ it back."<br><small>(beberapa perkataan hilang)</small>', 'background:#e6eef5'),
          fixedHtml: D('🖥️ "At 7:12 pm the atlas <u>was</u> scanned out by user MARSH_D. The case <u>opened</u> with a key, not by force. Nobody <u>brought</u> it back." ✔', '🖥️ "At 7:12 pm the atlas <u>was</u> scanned out by user MARSH_D. The case <u>opened</u> with a key, not by force. Nobody <u>brought</u> it back." ✔', 'background:#e6eef5') } },
      { id: 'loan_card', type: 'document', icon: '🗒️', title: T('Atlas loan card', 'Kad pinjaman atlas'), where: T('Reading Hall notice wall', 'Dinding notis Dewan Bacaan'),
        desc: T(`The loan card for the Moon Atlas. The last line shows who borrowed it and when it came back.`, `Kad pinjaman Atlas Bulan. Baris terakhir menunjukkan siapa meminjam dan bila ia dipulangkan.`),
        inspect: { kind: 'doc', html: D('<b>LOAN CARD — Moon Atlas</b><br>Borrower: Dr A. Hale (reference use)<br>Out: Fri 3:00 pm<br><b>Returned: Fri 4:50 pm</b><br>"Locked in the rare case at 5:00 pm — D. Marsh"', '<b>KAD PINJAMAN — Moon Atlas</b><br>Peminjam: Dr A. Hale (rujukan)<br>Keluar: Jum 3:00 ptg<br><b>Dipulangkan: Jum 4:50 ptg</b><br>"Dikunci dalam kotak pada 5:00 ptg — D. Marsh"') } },

      /* ---------- THE STACKS ---------- */
      { id: 'whisper_tube', type: 'physical', icon: '📯', title: T('Old speaking tube', 'Tiub bercakap lama'), where: T('Stacks wall, aisle 4', 'Dinding Rak, lorong 4'),
        desc: T(`A brass mouthpiece in the wall, dusty, with a plate. From inside comes a faint draught... and the whispering voice.`, `Corong tembaga pada dinding, berhabuk, dengan plat. Dari dalam datang angin halus... dan suara berbisik itu.`),
        puzzle: 'pz_tube', inspect: { kind: 'puzzle-doc',
          html: D('📯 <b>BRASS PLATE</b><br>"SPEAKING TUBE No. 4<br>Stacks, aisle 4 ⇄ Librarian\'s Office<br>Speak softly. Sound travels along the pipe."', '📯 <b>PLAT TEMBAGA</b><br>"TIUB BERCAKAP No. 4<br>Rak, lorong 4 ⇄ Pejabat Pustakawan<br>Cakap perlahan. Bunyi bergerak sepanjang paip."'),
          fixedHtml: D('📯 The tube joins the <b>Stacks</b> and the <b>Librarian\'s Office</b>. A whisper at one end comes out at the other. ✔', '📯 Tiub ini menyambung <b>Rak</b> dan <b>Pejabat Pustakawan</b>. Bisikan di satu hujung keluar di hujung lain. ✔') } },

      /* ---------- RARE BOOK ROOM ---------- */
      { id: 'rare_case', type: 'physical', icon: '🔐', title: T('The empty glass case', 'Kotak kaca kosong'), where: T('Rare Book Room', 'Bilik Buku Jarang'),
        desc: T(`The glass lid is shut and locked. The velvet inside is empty with a dust outline of a book. There are NO scratches, NO broken glass, and the small brass lock is clean.`, `Penutup kaca tertutup dan berkunci. Baldu di dalam kosong dengan garis habuk sebuah buku. TIADA calar, TIADA kaca pecah, dan kunci tembaga kecil itu bersih.`),
        inspect: { kind: 'doc', html: D('🔐 <b>The case</b><br>🔒 Lock: not forced, no scratches<br>🪟 Glass: whole<br>🟫 Velvet: empty, dust outline<br><small>Someone opened it with the KEY and locked it again. Thieves who break in leave marks.</small>', '🔐 <b>Kotak itu</b><br>🔒 Kunci: tidak dipaksa, tiada calar<br>🪟 Kaca: utuh<br>🟫 Baldu: kosong, garis habuk<br><small>Seseorang membukanya dengan KUNCI dan mengunci semula. Pencuri yang memecah masuk meninggalkan kesan.</small>') } },
      { id: 'key_board', type: 'document', icon: '🔑', title: T('Key sign-out sheet', 'Helaian log kunci'), where: T('Rare Book Room wall', 'Dinding Bilik Buku Jarang'),
        desc: T(`The sheet that says who may hold the key of the glass case.`, `Helaian yang menyatakan siapa boleh memegang kunci kotak kaca.`),
        inspect: { kind: 'doc', html: D('<b>RARE CASE KEY</b><br>Holder: <b>D. Marsh ONLY</b><br>Spare: sealed in the school safe (seal NOT broken)<br>Caretaker keys: doors only<br><small>No one else can open the case.</small>', '<b>KUNCI KOTAK JARANG</b><br>Pemegang: <b>D. Marsh SAHAJA</b><br>Simpanan: dimeterai dalam peti besi sekolah (meterai TIDAK pecah)<br>Kunci penjaga: pintu sahaja<br><small>Tiada orang lain boleh membuka kotak itu.</small>') } },

      /* ---------- LIBRARIAN'S OFFICE ---------- */
      { id: 'desk_drawer', type: 'physical', icon: '🗄️', title: T("Marsh's locked drawer", 'Laci berkunci Marsh'), where: T("Librarian's Office desk", 'Meja Pejabat Pustakawan'),
        desc: T(`A locked desk drawer with a 3-digit lock. A sticky note says: "Finish each pattern."`, `Laci meja berkunci dengan kunci 3 digit. Nota melekit berkata: "Lengkapkan setiap corak."`),
        puzzle: 'pz_drawer', inspect: { kind: 'puzzle-doc',
          html: D('🗄️ <b>Sticky note</b><br>"Finish each pattern.<br>3, 5, 7, ?<br>8, 6, 4, ?<br>1, 2, 3, 1, 2, 3, ?"', '🗄️ <b>Nota melekit</b><br>"Lengkapkan setiap corak.<br>3, 5, 7, ?<br>8, 6, 4, ?<br>1, 2, 3, 1, 2, 3, ?"'),
          fixedHtml: D('🗄️ Click! The drawer is open: an email and an audit letter. ✔', '🗄️ Klik! Laci terbuka: sekeping e-mel dan surat audit. ✔') } },
      { id: 'tube_cap', type: 'physical', icon: '📯', title: T('Office end of the tube', 'Hujung tiub di pejabat'), where: T("Librarian's Office wall", 'Dinding Pejabat Pustakawan'),
        desc: T(`The brass cap of the speaking tube hangs open. The mouthpiece is still WARM from breath, and the dust around it has been wiped.`, `Penutup tembaga tiub bercakap tergantung terbuka. Corongnya masih HANGAT daripada nafas, dan habuk di sekelilingnya telah dilap.`),
        inspect: { kind: 'doc', html: D('📯 <b>Office end of tube No. 4</b><br>Cap: open · Mouthpiece: warm and damp<br>Dust: wiped clean around it<br><small>Someone spoke into it very recently.</small>', '📯 <b>Hujung tiub No. 4 di pejabat</b><br>Penutup: terbuka · Corong: hangat dan lembap<br>Habuk: dilap bersih sekelilingnya<br><small>Seseorang bercakap ke dalamnya baru-baru ini.</small>') } },
      { id: 'cough_drop', type: 'physical', icon: '🍋', title: T('Lemon cough-drop wrapper', 'Pembalut gula-gula batuk lemon'), where: T('Floor under the tube, Office', 'Lantai di bawah tiub, Pejabat'),
        desc: T(`A fresh yellow wrapper: "ThroatEase Lemon". It smells sharply of lemon.`, `Pembalut kuning baru: "ThroatEase Lemon". Ia berbau lemon yang tajam.`),
        inspect: { kind: 'doc', html: D('🍋 <b>ThroatEase Lemon</b><br><small>Whoever whispers a lot sucks these. The voice in the stacks smelled of lemon too: a faint lemon scent hung near the tube. Miss Marsh always has these in her pocket.</small>', '🍋 <b>ThroatEase Lemon</b><br><small>Sesiapa yang banyak berbisik menghisap gula-gula ini. Suara di rak juga berbau lemon: bau lemon halus berlegar dekat tiub. Cik Marsh sentiasa ada ini dalam poketnya.</small>') } },

      /* ---------- BASEMENT ARCHIVE ---------- */
      { id: 'archive_memo', type: 'document', icon: '📋', title: T('Staff memo about the cart', 'Memo kakitangan tentang troli'), where: T('Basement Archive table', 'Meja Arkib Bawah Tanah'),
        desc: T(`A routine memo about where the returns cart is kept.`, `Memo rutin tentang di mana troli pemulangan disimpan.`),
        inspect: { kind: 'doc', html: D('<b>STAFF MEMO</b><br>On Fridays the Sunday returns cart is rolled to the Basement Archive and covered with a cloth. <b>Nobody checks it until Monday.</b>', '<b>MEMO KAKITANGAN</b><br>Pada hari Jumaat troli pemulangan Ahad ditolak ke Arkib Bawah Tanah dan ditutup dengan kain. <b>Tiada siapa memeriksanya sehingga Isnin.</b>') } },
      { id: 'returns_cart', type: 'physical', icon: '🛒', title: T('Covered returns cart', 'Troli pemulangan bertutup'), where: T('Basement Archive', 'Arkib Bawah Tanah'),
        desc: T(`A cart under a grey cloth with a small padlock. A tally slip hangs from it.`, `Troli di bawah kain kelabu dengan mangga kecil. Slip kiraan tergantung padanya.`),
        puzzle: 'pz_cart', inspect: { kind: 'puzzle-doc',
          html: D('🛒 <b>TALLY SLIP</b><br>Top shelf: <b>7</b> books<br>Middle shelf: <b>9</b> books<br>Bottom shelf: hidden under the cloth<br>TOTAL on the cart: <b>21</b><br><small>The padlock opens when you know how many are hidden.</small>', '🛒 <b>SLIP KIRAAN</b><br>Rak atas: <b>7</b> buku<br>Rak tengah: <b>9</b> buku<br>Rak bawah: tersembunyi di bawah kain<br>JUMLAH di atas troli: <b>21</b><br><small>Mangga terbuka apabila anda tahu berapa yang tersembunyi.</small>'),
          fixedHtml: D('🛒 The padlock clicks open. Under the cloth: a tote bag with a heavy book inside! ✔', '🛒 Mangga terbuka. Di bawah kain: beg tote dengan sebuah buku berat di dalamnya! ✔') } },

      /* ---------- granted by puzzles or people ---------- */
      { id: 'scan_log', type: 'document', icon: '🧾', title: T('Scan record: atlas OUT at 7:12', 'Rekod imbas: atlas KELUAR 7:12'), where: T('Library computer', 'Komputer perpustakaan'),
        desc: T(`The computer shows the Moon Atlas was scanned out at 7:12 pm by the staff login MARSH_D, and never scanned back.`, `Komputer menunjukkan Atlas Bulan diimbas keluar pukul 7:12 malam oleh log masuk kakitangan MARSH_D, dan tidak pernah diimbas masuk.`),
        inspect: { kind: 'doc', html: D('🧾 <b>912.3 MOO — Moon Atlas</b><br>7:12 pm — status: <b>OUT</b><br>User: <b>MARSH_D</b> (staff)<br>Return scan: none', '🧾 <b>912.3 MOO — Moon Atlas</b><br>7:12 mlm — status: <b>KELUAR</b><br>Pengguna: <b>MARSH_D</b> (kakitangan)<br>Imbasan pulang: tiada') } },
      { id: 'sale_email', type: 'document', icon: '📧', title: T('Secret sale email', 'E-mel jualan rahsia'), where: T("Inside Marsh's drawer", 'Dalam laci Marsh'),
        desc: T(`A printed email to Miss Marsh from a book collector.`, `E-mel bercetak kepada Cik Marsh daripada seorang pengumpul buku.`),
        inspect: { kind: 'doc', html: D('<b>From: R. Quill, collector</b><br>"Agreed: <b>RM 90,000</b> for the Moon Atlas. Bring it Saturday 9 am. <b>Tell nobody at the school.</b>"', '<b>Daripada: R. Quill, pengumpul</b><br>"Setuju: <b>RM 90,000</b> untuk Atlas Bulan. Bawa Sabtu 9 pagi. <b>Jangan beritahu sesiapa di sekolah.</b>"') } },
      { id: 'audit_notice', type: 'document', icon: '📨', title: T('Audit letter', 'Surat audit'), where: T("Inside Marsh's drawer", 'Dalam laci Marsh'),
        desc: T(`A letter from the school board.`, `Surat daripada lembaga sekolah.`),
        inspect: { kind: 'doc', html: D('<b>SCHOOL BOARD</b><br>"On <b>Monday 8 am</b> the board will count every book in the Rare Book Room. Missing books must be explained."', '<b>LEMBAGA SEKOLAH</b><br>"Pada <b>Isnin 8 pagi</b> lembaga akan mengira setiap buku di Bilik Buku Jarang. Buku hilang mesti dijelaskan."') } },
      { id: 'atlas_found', type: 'physical', icon: '📖', title: T('The Moon Atlas in a tote bag', 'Atlas Bulan dalam beg tote'), where: T('Under the returns cart, Basement Archive', 'Di bawah troli pemulangan, Arkib Bawah Tanah'),
        desc: T(`A canvas tote bag with the stitched name "D. MARSH". Inside: the Moon Atlas, safe and sound.`, `Beg tote kanvas dengan nama berjahit "D. MARSH". Di dalam: Atlas Bulan, selamat dan baik.`),
        inspect: { kind: 'doc', html: D('📖 <b>The Moon Atlas, 1789</b><br>Found inside a tote stitched <b>"D. MARSH"</b>.<br><small>A real thief would have run away with it, not hidden it in the school.</small>', '📖 <b>Atlas Bulan, 1789</b><br>Ditemui dalam beg tote berjahit <b>"D. MARSH"</b>.<br><small>Pencuri sebenar akan melarikannya, bukan menyorokkan dalam sekolah.</small>') } },
      { id: 'hall_cam', type: 'photo', icon: '📸', photo: true, title: T('Hall camera photo, 7:15 pm', 'Gambar kamera dewan, 7:15 mlm'), art: 'hall_cam', stampT: mm('7:15'), stampLabel: T('Hall camera (correct time)', 'Kamera dewan (masa betul)'),
        desc: T(`A photo from the corridor camera outside the Rare Book Room.`, `Gambar daripada kamera koridor di luar Bilik Buku Jarang.`),
        zoomNotice: T(`You zoom in: a tall woman with a canvas tote leaves the Rare Book Room. She has glasses on a chain. Behind a shelf a small boy in a school cap is hiding. It is 7:15 pm.`, `Anda zum: seorang wanita tinggi dengan beg tote kanvas keluar dari Bilik Buku Jarang. Dia berkaca mata dengan rantai. Di belakang rak seorang budak lelaki kecil bertopi sekolah bersembunyi. Pukul 7:15 malam.`),
        timeline: T('A tall woman with a tote leaves the Rare Room at 7:15 pm.', 'Wanita tinggi dengan beg tote keluar dari Bilik Jarang pukul 7:15 mlm.') },

      /* ---------- inferences ---------- */
      { id: 'inf_note', kind: 'inference', type: 'deduction', icon: '💡', title: T('The note points to HER OFFICE', 'Nota menunjuk ke PEJABATNYA'),
        desc: T(`KHU RIILFH = HER OFFICE. A child who saw something was too scared to say it aloud. Look in the Librarian's Office.`, `KHU RIILFH = PEJABATNYA. Kanak-kanak yang nampak sesuatu terlalu takut untuk menyebutnya. Lihat di Pejabat Pustakawan.`) },
      { id: 'inf_scan', kind: 'inference', type: 'deduction', icon: '💡', title: T('Marsh took the atlas at 7:12 — before she "found" the theft at 7:45', 'Marsh mengambil atlas pukul 7:12 — sebelum dia "menemui" kecurian pukul 7:45'),
        desc: T(`The case was opened with the only key (hers), and the computer says MARSH_D scanned the book out 33 minutes before she shouted "thief!".`, `Kotak dibuka dengan satu-satunya kunci (miliknya), dan komputer berkata MARSH_D mengimbas buku keluar 33 minit sebelum dia menjerit "pencuri!".`) },
      { id: 'inf_tube', kind: 'inference', type: 'deduction', icon: '💡', title: T('The "ghost" whisper came through the tube from the Office', 'Bisikan "hantu" datang melalui tiub dari Pejabat'),
        desc: T(`A speaking tube carries a whisper from the Librarian's Office to aisle 4. The office end is warm and the lemon wrapper is there. A ghost does not need a pipe.`, `Tiub bercakap membawa bisikan dari Pejabat Pustakawan ke lorong 4. Hujung pejabat hangat dan pembalut lemon ada di situ. Hantu tidak perlukan paip.`) },
      { id: 'inf_motive', kind: 'inference', type: 'deduction', icon: '💡', title: T('MOTIVE: sell for RM 90,000 before Monday\'s audit', 'MOTIF: jual RM 90,000 sebelum audit Isnin'),
        desc: T(`She sold the atlas in secret, and on Monday the board would count the Rare Room. A "theft" with a ghost story hides the sale.`, `Dia menjual atlas secara rahsia, dan pada hari Isnin lembaga akan mengira Bilik Jarang. "Kecurian" dengan cerita hantu menyembunyikan jualan itu.`) },
      { id: 'inf_cart', kind: 'inference', type: 'deduction', icon: '💡', title: T('A thief would run away; Marsh HID it inside the school', 'Pencuri akan lari; Marsh MENYORONGKANNYA dalam sekolah'),
        desc: T(`The atlas is still in the building, in her own bag, under a cart nobody checks until Monday. She planned to take it out on Saturday morning.`, `Atlas masih dalam bangunan, dalam begnya sendiri, di bawah troli yang tiada siapa periksa sehingga Isnin. Dia merancang membawanya keluar pagi Sabtu.`) },

      /* ---------- witness claims ---------- */
      { id: 'c_marsh_force', kind: 'claim', person: 'marsh', t: mm('7:45'), type: 'statement', icon: '💬', title: T('Marsh: "Thieves broke into my case!"', 'Marsh: "Pencuri memecah masuk kotak saya!"'), desc: T('She says the case was forced.', 'Dia kata kotak itu dipaksa.') },
      { id: 'c_marsh_never', kind: 'claim', person: 'marsh', t: mm('7:12'), type: 'statement', icon: '💬', title: T('Marsh: "I never touched the atlas after 5:00."', 'Marsh: "Saya tidak sentuh atlas selepas 5:00."'), desc: T('She says she locked it at five and never saw it again.', 'Dia kata dia mengunci pukul lima dan tidak melihatnya lagi.') },
      { id: 'c_marsh_ghost', kind: 'claim', person: 'marsh', t: 0, type: 'statement', icon: '💬', title: T('Marsh: "The whisper is the ghost of Edith Lorne!"', 'Marsh: "Bisikan itu hantu Edith Lorne!"'), desc: T('She says a ghost is whispering.', 'Dia kata hantu sedang berbisik.') },
      { id: 'c_marsh_sell', kind: 'claim', person: 'marsh', t: 0, type: 'statement', icon: '💬', title: T('Marsh: "I would NEVER sell a school book!"', 'Marsh: "Saya TIDAK AKAN jual buku sekolah!"'), desc: T('She says she loves the books too much.', 'Dia kata dia terlalu sayang buku.') },
      { id: 'c_hale_left', kind: 'claim', person: 'hale', t: mm('5:05'), type: 'statement', icon: '💬', title: T('Hale: "I gave it back at 4:50 and went home at 5:05."', 'Hale: "Saya pulangkan pukul 4:50 dan pulang pukul 5:05."'), desc: T('He says he was home before the theft.', 'Dia kata dia sudah di rumah sebelum kecurian.') },
      { id: 'c_okoro_keys', kind: 'claim', person: 'okoro', t: 0, type: 'statement', icon: '💬', title: T('Okoro: "My keys open doors, not the glass case."', 'Okoro: "Kunci saya buka pintu, bukan kotak kaca."'), desc: T('The caretaker says he cannot open the case.', 'Penjaga berkata dia tidak boleh buka kotak itu.') },
      { id: 'c_ben_home', kind: 'claim', person: 'ben', t: mm('7:15'), type: 'statement', icon: '💬', title: T('Ben: "I was in the Reading Hall all night! I saw NOTHING."', 'Ben: "Saya di Dewan Bacaan sepanjang malam! Saya TIDAK nampak apa-apa."'), desc: T('He says he saw nothing.', 'Dia kata dia tidak nampak apa-apa.') },
      { id: 'c_priya_empty', kind: 'claim', person: 'priya', t: mm('7:40'), type: 'statement', icon: '💬', title: T('Priya: "At 7:40 the case was already empty and locked."', 'Priya: "Pukul 7:40 kotak itu sudah kosong dan berkunci."'), desc: T('The student librarian found it empty.', 'Pustakawan pelajar mendapati ia kosong.') }
    ],

    pairs: [
      { a: 'c_marsh_force', b: 'rare_case', type: 'contradiction', person: 'marsh',
        text: T('Marsh says thieves broke in. The case has no scratches and the lock is clean: it was opened with a key.', 'Marsh kata pencuri memecah masuk. Kotak tiada calar dan kunci bersih: ia dibuka dengan kunci.'),
        explain: T('Only Marsh holds the key (the key sheet says so).', 'Hanya Marsh memegang kunci (helaian kunci kata begitu).') },
      { a: 'c_marsh_never', b: 'scan_log', type: 'contradiction', person: 'marsh', requires: ['pc_solved'],
        text: T('She says she never touched it after 5:00. The computer says MARSH_D scanned it out at 7:12.', 'Dia kata dia tidak sentuh selepas 5:00. Komputer kata MARSH_D mengimbasnya keluar pukul 7:12.'),
        explain: T('Her own login is on the record.', 'Log masuknya sendiri ada dalam rekod.') },
      { a: 'c_marsh_never', b: 'hall_cam', type: 'contradiction', person: 'marsh',
        text: T('The 7:15 photo shows a tall woman with a tote leaving the Rare Room. It is Marsh.', 'Gambar 7:15 menunjukkan wanita tinggi dengan beg tote keluar dari Bilik Jarang. Itulah Marsh.'),
        explain: T('A time-stamped photo beats a claim.', 'Gambar bercap masa mengalahkan dakwaan.') },
      { a: 'c_marsh_ghost', b: 'whisper_tube', type: 'contradiction', person: 'marsh', requires: ['tube_solved'],
        text: T('Marsh blames a ghost. The whisper really came along a pipe from her own office.', 'Marsh menyalahkan hantu. Bisikan sebenarnya datang melalui paip dari pejabatnya sendiri.'),
        explain: T('A ghost does not need a pipe, a warm mouthpiece and lemon sweets.', 'Hantu tidak perlukan paip, corong hangat dan gula-gula lemon.') },
      { a: 'c_marsh_sell', b: 'sale_email', type: 'contradiction', person: 'marsh', requires: ['drawer_open'],
        text: T('She says she would never sell a school book. Her drawer holds a RM 90,000 deal for it.', 'Dia kata dia tidak akan jual buku sekolah. Lacinya ada tawaran RM 90,000 untuknya.'),
        explain: T('That is a strong motive.', 'Itu motif yang kuat.') },
      { a: 'c_ben_home', b: 'hall_cam', type: 'contradiction', person: 'ben',
        text: T('Ben says he saw nothing, but the camera shows him hiding behind a shelf at 7:15.', 'Ben kata dia tidak nampak apa-apa, tetapi kamera menunjukkan dia bersembunyi di belakang rak pukul 7:15.'),
        explain: T('He was scared. He saw Marsh and sent the coded note instead.', 'Dia takut. Dia nampak Marsh dan menghantar nota berkod sebaliknya.') },
      { a: 'c_hale_left', b: 'loan_card', type: 'support', person: 'hale',
        text: T('The loan card says he returned the atlas at 4:50, as he told us.', 'Kad pinjaman kata dia memulangkan atlas pukul 4:50, seperti katanya.') },
      { a: 'c_okoro_keys', b: 'key_board', type: 'support', person: 'okoro',
        text: T('The key sheet says caretaker keys open doors only.', 'Helaian kunci kata kunci penjaga hanya buka pintu.') },
      { a: 'c_priya_empty', b: 'rare_case', type: 'support', person: 'priya',
        text: T('The case is empty and locked, exactly as Priya said.', 'Kotak kosong dan berkunci, tepat seperti kata Priya.') }
    ],

    puzzles: {
      pz_cipher: { subject: 'thinking', title: T('Crack the coded note', 'Pecahkan nota berkod'), grants: { flags: ['note_read'], items: ['inf_note'] }, tokens: 1,
        intro: T('Each letter was moved 3 places forward. To decode, go BACK 3 places (D→A).', 'Setiap huruf dialihkan 3 tempat ke hadapan. Untuk menyahkod, undur 3 tempat (D→A).'),
        steps: [
          { type: 'choice', q: T('Go back 3 places from K. Which letter is it?', 'Undur 3 tempat dari K. Huruf apa?'), options: ['G', 'H', 'I', 'N'], answer: 'H',
            hints: [T('K, then J, I, H — three steps back.', 'K, kemudian J, I, H — tiga langkah ke belakang.')] },
          { type: 'choice', q: T('Decode RIILFH (R→O, I→F, L→I, F→C, H→E). What word is it?', 'Nyahkod RIILFH (R→O, I→F, L→I, F→C, H→E). Apakah perkataannya?'), options: ['OFFICE', 'OFFSET', 'ORIGIN'], answer: 'OFFICE',
            hints: [T('Write each decoded letter in a row.', 'Tulis setiap huruf yang dinyahkod dalam satu baris.')] },
          { type: 'choice', q: T('The note says HER OFFICE. Which room is that?', 'Nota berkata PEJABATNYA. Bilik mana itu?'), options: [T('Reading Hall', 'Dewan Bacaan'), T("Librarian's Office", 'Pejabat Pustakawan'), T('Basement Archive', 'Arkib Bawah Tanah')], answer: 1,
            hints: [T('Whose office is in a library?', 'Pejabat siapa dalam perpustakaan?')] }
        ],
        after: T('HER OFFICE! A child who saw something is pointing at the librarian. You earn 1 hint token.', 'PEJABATNYA! Kanak-kanak yang nampak sesuatu menunjuk kepada pustakawan. Anda dapat 1 token petunjuk.') },
      pz_pc: { subject: 'english', title: T('Restore the audit trail', 'Pulihkan jejak audit'), grants: { flags: ['pc_solved'], items: ['scan_log', 'inf_scan'] }, tokens: 0,
        intro: T('Choose the correct PAST TENSE word for each gap.', 'Pilih perkataan KALA LAMPAU yang betul untuk setiap ruang.'),
        steps: [{ type: 'cloze', q: T('Fix the audit trail:', 'Betulkan jejak audit:'),
          parts: ['At 7:12 pm the Moon Atlas ', { blank: ['is', 'was', 'were'], answer: 'was' }, ' scanned out by user MARSH_D. The case ', { blank: ['open', 'opened', 'opens'], answer: 'opened' }, ' with a key, not by force. Nobody ', { blank: ['bring', 'brought', 'brings'], answer: 'brought' }, ' it back.'],
          hints: [T('The atlas = one thing, in the past: was.', 'Atlas = satu benda, masa lampau: was.'), T('Bring → brought. Open → opened.', 'Bring → brought. Open → opened.')] }],
        after: T('MARSH_D scanned the atlas out at 7:12 pm. That is before she "found" the theft!', 'MARSH_D mengimbas atlas keluar pukul 7:12 malam. Itu sebelum dia "menemui" kecurian!') },
      pz_tube: { subject: 'thinking', title: T('Follow the speaking tube', 'Ikut tiub bercakap'), grants: { flags: ['tube_solved'], items: ['inf_tube'] }, tokens: 0,
        intro: T('Read the brass plate and think about how sound travels along a pipe.', 'Baca plat tembaga dan fikirkan bagaimana bunyi bergerak sepanjang paip.'),
        steps: [
          { type: 'choice', q: T('Which two places does the tube join?', 'Dua tempat mana disambung oleh tiub?'), options: [T('Stacks and Librarian\'s Office', 'Rak dan Pejabat Pustakawan'), T('Stacks and Basement', 'Rak dan Bawah Tanah'), T('Hall and Rare Room', 'Dewan dan Bilik Jarang')], answer: 0,
            hints: [T('Read the second line of the plate.', 'Baca baris kedua pada plat.')] },
          { type: 'choice', q: T('Why can a soft whisper be heard clearly at the other end?', 'Kenapa bisikan lembut boleh didengar jelas di hujung lain?'), options: [T('The pipe keeps the sound inside, so it does not spread out', 'Paip menyimpan bunyi di dalam, jadi ia tidak merebak'), T('Whispers are louder than shouts', 'Bisikan lebih kuat daripada jeritan'), T('Ghosts make pipes sing', 'Hantu membuat paip menyanyi')], answer: 0,
            hints: [T('Think of a tube telephone made from two cups and string.', 'Fikirkan telefon dua cawan dan tali.')] },
          { type: 'choice', q: T('At 8:05 the whisper came out in aisle 4. Who could have been at the OTHER end?', 'Pukul 8:05 bisikan keluar di lorong 4. Siapa mungkin berada di hujung SATU LAGI?'), options: [T('Someone in the Librarian\'s Office', 'Seseorang di Pejabat Pustakawan'), T('Nobody — it is a ghost', 'Tiada siapa — ia hantu'), T('Someone in the Basement', 'Seseorang di Bawah Tanah')], answer: 0,
            hints: [T('The other end of the tube is in the office.', 'Hujung satu lagi tiub di pejabat.')] }
        ],
        after: T('The "ghost" is a living voice in the Librarian\'s Office! Check that end of the tube.', '"Hantu" ialah suara hidup di Pejabat Pustakawan! Periksa hujung tiub itu.') },
      pz_drawer: { subject: 'thinking', title: T('Open the locked drawer', 'Buka laci berkunci'), grants: { flags: ['drawer_open'], items: ['sale_email', 'audit_notice', 'inf_motive'] }, tokens: 0,
        intro: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
        steps: [{ type: 'code', q: T('Find the next number in each pattern.', 'Cari nombor seterusnya dalam setiap corak.'), patterns: ['3, 5, 7, ?', '8, 6, 4, ?', '1, 2, 3, 1, 2, 3, ?'], answer: '921',
          hints: [T('Pattern 1 adds 2. Pattern 2 subtracts 2.', 'Corak 1 tambah 2. Corak 2 tolak 2.'), T('Pattern 3 repeats 1, 2, 3.', 'Corak 3 mengulang 1, 2, 3.'), T('The code is 9, 2, 1.', 'Kodnya ialah 9, 2, 1.')] }],
        after: T('Click! An email selling the atlas for RM 90,000 — and an audit letter!', 'Klik! E-mel menjual atlas dengan RM 90,000 — dan surat audit!') },
      pz_cart: { subject: 'math', title: T('Open the returns cart', 'Buka troli pemulangan'), grants: { flags: ['cart_open'], items: ['atlas_found', 'inf_cart'] }, tokens: 0,
        intro: T('The total on the cart is 21. How many books are hidden on the bottom shelf?', 'Jumlah di atas troli ialah 21. Berapa buku tersembunyi di rak bawah?'),
        steps: [{ type: 'number', q: T('Top 7 + middle 9 + hidden ? = 21. How many are hidden?', 'Atas 7 + tengah 9 + tersembunyi ? = 21. Berapa tersembunyi?'), answer: 5, options: [3, 5, 7, 9], unit: T('books', 'buku'),
          hints: [T('7 + 9 = 16.', '7 + 9 = 16.'), T('21 − 16 = ?', '21 − 16 = ?')] }],
        after: T('The padlock opens: a tote stitched "D. MARSH" with the Moon Atlas inside!', 'Mangga terbuka: beg tote berjahit "D. MARSH" dengan Atlas Bulan di dalamnya!') }
    },

    questions: [
      { id: 'q_how', title: T('1. What really happened to the Moon Atlas?', '1. Apa sebenarnya berlaku kepada Atlas Bulan?'),
        options: [{ id: 'forced', text: T('Thieves broke into the case.', 'Pencuri memecah kotak.') }, { id: 'ghost', text: T("The ghost of Edith Lorne took it.", 'Hantu Edith Lorne mengambilnya.') },
          { id: 'staged_theft', text: T('Someone with the key took it and STAGED a theft.', 'Seseorang yang ada kunci mengambilnya dan MENGATUR kecurian.'), correct: true }, { id: 'borrowed', text: T('It was only borrowed and will come back.', 'Ia hanya dipinjam dan akan dipulangkan.') }],
        needs: [['rare_case', 'key_board'], ['scan_log', 'inf_scan']], needsFlags: ['pc_solved'],
        hints: [T('Is the case scratched? Who holds the key? What does the computer say?', 'Adakah kotak bercalar? Siapa pegang kunci? Apa kata komputer?')] },
      { id: 'q_voice', title: T('2. What made the whispering voice?', '2. Apa membuat suara berbisik itu?'),
        options: [{ id: 'ghost', text: T('A ghost.', 'Hantu.') }, { id: 'wind', text: T('The wind in the roof.', 'Angin di bumbung.') },
          { id: 'tube', text: T("A person whispering through the speaking tube from the Office.", 'Seorang berbisik melalui tiub bercakap dari Pejabat.'), correct: true }, { id: 'radio', text: T('A radio left on.', 'Radio yang dibiarkan terpasang.') }],
        needs: [['whisper_tube', 'inf_tube'], ['tube_cap', 'cough_drop']], needsFlags: ['tube_solved'],
        hints: [T('Where does the brass plate say the tube goes? Is the other end warm?', 'Ke mana plat tembaga kata tiub itu pergi? Adakah hujung satu lagi hangat?')] },
      { id: 'q_when', title: T('3. When was the atlas taken from the case?', '3. Bila atlas diambil dari kotak?'),
        options: [{ id: 'five', text: T('Before 5:00 pm', 'Sebelum 5:00 ptg') }, { id: 'seven', text: T('About 7:12 pm, before the "discovery"', 'Sekitar 7:12 mlm, sebelum "penemuan"'), correct: true },
          { id: 'eight', text: T('After 8:00 pm, when the whispers began', 'Selepas 8:00 mlm, apabila bisikan bermula') }, { id: 'sat', text: T('On Saturday', 'Pada hari Sabtu') }],
        needs: [['scan_log', 'inf_scan'], ['hall_cam']], needsFlags: ['pc_solved'],
        hints: [T('Check the scan record and the 7:15 camera photo.', 'Semak rekod imbas dan gambar kamera 7:15.')] },
      { id: 'q_who', title: T('4. Who took the atlas?', '4. Siapa mengambil atlas?'),
        options: [{ id: 'marsh', text: T('Miss Marsh, the librarian', 'Cik Marsh, pustakawan'), correct: true }, { id: 'hale', text: T('Dr. Hale', 'Dr. Hale') }, { id: 'okoro', text: T('Mr. Okoro', 'Encik Okoro') }, { id: 'ben', text: T('Ben', 'Ben') }, { id: 'priya', text: T('Priya', 'Priya') }],
        needs: [['scan_log'], ['hall_cam', 'atlas_found'], ['sale_email', 'rare_case']], needsFlags: ['pc_solved'],
        hints: [T('Whose login, whose key, whose tote bag?', 'Log masuk siapa, kunci siapa, beg tote siapa?')] },
      { id: 'q_why', title: T('5. WHY did she do it?', '5. KENAPA dia melakukannya?'),
        options: [{ id: 'scare', text: T('To scare the students.', 'Untuk menakutkan murid.') }, { id: 'sell', text: T('To sell it for RM 90,000 and hide the sale before the audit.', 'Untuk menjualnya RM 90,000 dan menyembunyikan jualan sebelum audit.'), correct: true },
          { id: 'protect', text: T('To protect the book from damage.', 'Untuk melindungi buku daripada rosak.') }, { id: 'prank', text: T('A Reading Night joke.', 'Gurauan Malam Membaca.') }],
        needs: [['sale_email', 'inf_motive'], ['audit_notice']], needsFlags: ['drawer_open'],
        hints: [T('Open the locked drawer: read the email and the board letter.', 'Buka laci berkunci: baca e-mel dan surat lembaga.')] }
    ],

    conclusion: {
      who: { correct: 'marsh' }, what: { questionId: 'q_how' }, when: { questionId: 'q_when' },
      where: [
        { id: 'cart', text: T('In her tote bag under the returns cart, Basement Archive', 'Dalam beg tote di bawah troli pemulangan, Arkib Bawah Tanah'), correct: true },
        { id: 'case', text: T('Still in the glass case', 'Masih dalam kotak kaca') }, { id: 'river', text: T('Thrown in the river', 'Dibuang ke sungai') },
        { id: 'hale', text: T("In Dr. Hale's bag", 'Dalam beg Dr. Hale') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }],
      whereQ: T('WHERE is the Moon Atlas now?', 'DI MANA Atlas Bulan sekarang?'),
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_key', label: T('Opened with the key (no break-in)', 'Dibuka dengan kunci (bukan pecah masuk)'), items: ['rare_case', 'key_board'] },
        { id: 'g_scan', label: T('Her login at 7:12', 'Log masuknya pukul 7:12'), items: ['scan_log', 'inf_scan'] },
        { id: 'g_cam', label: T('Seen and found with the book', 'Dilihat dan ditemui bersama buku'), items: ['hall_cam', 'atlas_found', 'inf_cart'] },
        { id: 'g_tube', label: T('The ghost voice is the tube', 'Suara hantu ialah tiub'), items: ['whisper_tube', 'inf_tube', 'tube_cap', 'cough_drop'] },
        { id: 'g_motive', label: T('The motive', 'Motif'), items: ['sale_email', 'audit_notice', 'inf_motive'] },
        { id: 'g_lie', label: T("Marsh's lies", 'Pembohongan Marsh'), items: ['c_marsh_force', 'c_marsh_never', 'c_marsh_ghost', 'c_marsh_sell'] }
      ],
      strongCoverage: 4,
      secondary: ['loan_card', 'archive_memo', 'return_note', 'inf_note', 'c_priya_empty'], secondaryNeeded: 2,
      lieFlags: ['c_marsh_force', 'c_marsh_never', 'c_ben_home']
    },

    endings: kit.endings({
      secret: { title: T('The Boy Who Whispered Back', 'Budak Yang Berbisik Kembali'), when: (r) => r.has.hall_cam && r.flags.note_read,
        text: T(`You solve the case AND you decode Ben's secret note. Miss Marsh is led away. The Moon Atlas goes back under glass. The principal thanks the brave boy who could not speak out loud but spoke in code. On the wall of the library a new sign goes up: "Every voice matters — even a whisper." Ben is made Junior Detective of Oakridge.`,
          `Anda menyelesaikan kes ini DAN menyahkod nota rahsia Ben. Cik Marsh dibawa pergi. Atlas Bulan dikembalikan ke bawah kaca. Pengetua berterima kasih kepada budak berani yang tidak boleh bersuara tetapi bercakap dengan kod. Di dinding perpustakaan tanda baharu dipasang: "Setiap suara penting — walaupun bisikan." Ben dilantik Detektif Junior Oakridge.`) },
      perfect: { title: T('Case Closed!', 'Kes Selesai!'),
        text: T(`Excellent! You proved Miss Marsh took the Moon Atlas with her own key, scanned it out at 7:12, hid it in her bag under the returns cart and whispered through the tube to blame a ghost. The atlas comes back. The "ghost" of Edith Lorne can rest. Dr. Hale, Mr. Okoro, Priya and Ben are thanked.`,
          `Hebat! Anda membuktikan Cik Marsh mengambil Atlas Bulan dengan kuncinya sendiri, mengimbasnya keluar pukul 7:12, menyorokkannya dalam begnya di bawah troli pemulangan dan berbisik melalui tiub untuk menyalahkan hantu. Atlas dikembalikan. "Hantu" Edith Lorne boleh berehat. Dr. Hale, Encik Okoro, Priya dan Ben diucapkan terima kasih.`) },
      missed: { title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        text: T(`Right answer, strong proof! But you missed side clues: the loan card, the staff memo, the coded note or Priya's story. Because of that, Dr. Hale is still whispered about, and Ben never gets thanked. Next time, check every room.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: kad pinjaman, memo kakitangan, nota berkod atau cerita Priya. Kerana itu, Dr. Hale masih dibisikkan orang, dan Ben tidak diucapkan terima kasih. Lain kali, periksa setiap bilik.`) },
      weak: { text: T(`You named the right person, but your proof is not strong enough. Check the key sheet, the computer and the tube. Hurry!`, `Anda menyebut orang yang betul, tetapi bukti anda tidak cukup kukuh. Semak helaian kunci, komputer dan tiub. Cepat!`) },
      wrong: { text: T(`Oh no — that was not right. Ask yourself: who holds the only key, whose login scanned the atlas out, and whose office is at the other end of the tube?`, `Alamak — itu tidak betul. Tanya diri anda: siapa pegang satu-satunya kunci, log masuk siapa mengimbas atlas keluar, dan pejabat siapa di hujung tiub?`) }
    }),
    wrongWho: {
      hale: T('Dr. Hale was angry, but he returned the atlas at 4:50 (loan card), went home at 5:05 and has no key to the case.', 'Dr. Hale marah, tetapi dia memulangkan atlas pukul 4:50 (kad pinjaman), pulang pukul 5:05 dan tiada kunci kotak.'),
      okoro: T('Mr. Okoro holds only door keys. The key sheet proves he cannot open the glass case.', 'Encik Okoro hanya pegang kunci pintu. Helaian kunci membuktikan dia tidak boleh buka kotak kaca.'),
      ben: T('Ben is eleven and was hiding because he was scared. He is the one who sent the coded note.', 'Ben berumur sebelas tahun dan bersembunyi kerana takut. Dialah yang menghantar nota berkod.'),
      priya: T('Priya found the empty case at 7:40 and told the truth. She has no key and no login for the atlas.', 'Priya menemui kotak kosong pukul 7:40 dan bercakap benar. Dia tiada kunci dan tiada log masuk untuk atlas.')
    },

    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      marsh: {
        greeting: T(`Oh, it is TERRIBLE! The Moon Atlas, stolen under my nose! And that voice... it must be Edith Lorne herself.`, `Oh, DAHSYAT! Atlas Bulan, dicuri di depan mata saya! Dan suara itu... pasti Edith Lorne sendiri.`),
        topics: [
          { id: 'force', label: T('How was the case opened?', 'Bagaimana kotak dibuka?'), lines: [T('Broken into, obviously! I locked it at five and nobody else has a key. A clever thief!', 'Dipecah masuk, sudah tentu! Saya kunci pukul lima dan tiada orang lain ada kunci. Pencuri bijak!')], claims: ['c_marsh_force'] },
          { id: 'never', label: T('When did you last see the atlas?', 'Bila kali terakhir anda lihat atlas?'), lines: [T('At five o\'clock, when I locked it away. I never touched it again.', 'Pukul lima, apabila saya menguncinya. Saya tidak sentuh lagi.')], claims: ['c_marsh_never'] },
          { id: 'ghost', label: T('Who is whispering?', 'Siapa yang berbisik?'), lines: [T('Edith Lorne! She guarded these books for forty years. She is angry that someone took one.', 'Edith Lorne! Dia menjaga buku-buku ini selama empat puluh tahun. Dia marah kerana seseorang mengambil satu.')], claims: ['c_marsh_ghost'] },
          { id: 'sell', label: T('Would a librarian ever sell a rare book?', 'Adakah pustakawan akan menjual buku jarang?'), lines: [T('Never! I would rather die. A book belongs to the school, always.', 'Tidak sekali-kali! Saya lebih rela mati. Buku milik sekolah, sentiasa.')], claims: ['c_marsh_sell'] }
        ],
        present: {
          rare_case: { lines: [T('...The thief must have had a very thin wire. Yes. A clever wire.', '...Pencuri pasti ada dawai yang sangat nipis. Ya. Dawai pintar.')] },
          scan_log: { lines: [T('That computer is old! It makes mistakes! MARSH_D... someone used my login!', 'Komputer itu lama! Ia buat kesilapan! MARSH_D... seseorang guna log masuk saya!')] },
          hall_cam: { lines: [T('A tall woman? Half the school is tall. That could be anyone!', 'Wanita tinggi? Separuh sekolah tinggi. Itu boleh sesiapa sahaja!')] },
          whisper_tube: { lines: [T('That old pipe? It has been blocked for years... a ghost can use anything.', 'Paip lama itu? Ia tersumbat bertahun-tahun... hantu boleh guna apa sahaja.')] },
          cough_drop: { lines: [T('Everyone likes lemon sweets. Do not look at me like that!', 'Semua orang suka gula-gula lemon. Jangan pandang saya begitu!')] },
          sale_email: { lines: [T('...Where did you find that?! That is PRIVATE. I only wanted to protect the book from the audit... I mean...', '...Di mana anda jumpa itu?! Itu PERIBADI. Saya cuma mahu melindungi buku daripada audit... maksud saya...')] },
          atlas_found: { lines: [T('...You found it. Oh. Then it is over. I needed the money. I am so ashamed.', '...Anda jumpa. Oh. Maka tamatlah. Saya perlukan wang. Saya sangat malu.')] }
        }
      },
      hale: {
        greeting: T(`Dr. Hale, history. I studied that atlas for twenty years. If it is gone, a piece of history is gone.`, `Dr. Hale, sejarah. Saya mengkaji atlas itu selama dua puluh tahun. Jika ia hilang, sebahagian sejarah hilang.`),
        topics: [
          { id: 'left', label: T('When did you leave?', 'Bila anda pulang?'), lines: [T('I gave it back at ten to five and went home at five past. Ask the loan card.', 'Saya pulangkan pukul lima kurang sepuluh dan pulang pukul lima lebih lima. Tanya kad pinjaman.')], claims: ['c_hale_left'] },
          { id: 'angry', label: T('Were you angry with Miss Marsh?', 'Adakah anda marah dengan Cik Marsh?'), lines: [T('A little. She refused to lend me the atlas for the weekend. She said "never again". Strange, she used to be generous.', 'Sedikit. Dia enggan meminjamkan atlas pada hujung minggu. Dia kata "tidak lagi". Aneh, dulu dia pemurah.')] },
          { id: 'value', label: T('How valuable is the atlas?', 'Berapa bernilai atlas itu?'), lines: [T('Ninety thousand ringgit at least. A collector once offered even more to the school.', 'Sekurang-kurangnya sembilan puluh ribu ringgit. Seorang pengumpul pernah menawarkan lebih kepada sekolah.')] }
        ],
        present: { loan_card: { lines: [T('That is my signature. See: 4:50 pm.', 'Itu tandatangan saya. Lihat: 4:50 ptg.')] }, sale_email: { lines: [T('Quill! I know that collector. He has been pestering the school for years.', 'Quill! Saya kenal pengumpul itu. Dia mengganggu sekolah bertahun-tahun.')] } }
      },
      okoro: {
        greeting: T(`Evening. I lock the doors at six and walk the rounds. Tonight the library feels... watched.`, `Selamat petang. Saya kunci pintu pukul enam dan membuat rondaan. Malam ini perpustakaan terasa... diperhatikan.`),
        topics: [
          { id: 'keys', label: T('Can you open the glass case?', 'Bolehkah anda buka kotak kaca?'), lines: [T('My keys open every DOOR in the school. The glass case has its own tiny key, and that is Miss Marsh\'s.', 'Kunci saya buka setiap PINTU di sekolah. Kotak kaca ada kunci kecil sendiri, dan itu milik Cik Marsh.')], claims: ['c_okoro_keys'] },
          { id: 'camera', label: T('Is there a camera?', 'Ada kamera?'), gives: ['hall_cam'], lines: [T('One in the Rare Room corridor. Here is the photo from 7:15, I printed it when the trouble started. The time on it is correct.', 'Satu di koridor Bilik Jarang. Ini gambar pukul 7:15, saya cetak apabila kecoh bermula. Masanya betul.')] },
          { id: 'pipe', label: T('What is that old brass tube?', 'Apakah tiub tembaga lama itu?'), lines: [T('Old speaking pipe from 1930. It goes down to the librarian\'s office. Nobody has used it for fifty years, I thought.', 'Paip bercakap lama dari 1930. Ia ke pejabat pustakawan. Tiada siapa guna selama lima puluh tahun, saya sangka.')] }
        ],
        present: { key_board: { lines: [T('Yes, doors only. I cannot open that case even if I wanted.', 'Ya, pintu sahaja. Saya tidak boleh buka kotak itu walaupun mahu.')] }, whisper_tube: { lines: [T('Careful. A voice carried well in that pipe when I was young.', 'Berhati-hati. Suara bergema baik dalam paip itu semasa saya muda.')] } }
      },
      ben: {
        greeting: T(`Hi... I love ghost stories but this one is TOO REAL. Please do not tell Miss Marsh I am talking to you.`, `Hai... Saya suka cerita hantu tetapi yang ini TERLALU NYATA. Tolong jangan beritahu Cik Marsh saya bercakap dengan awak.`),
        topics: [
          { id: 'home', label: T('Where were you at 7:15?', 'Di mana anda pukul 7:15?'), lines: [T('In the Reading Hall all night! I saw NOTHING. Nothing at all!', 'Di Dewan Bacaan sepanjang malam! Saya TIDAK nampak apa-apa. Langsung tiada!')], claims: ['c_ben_home'] },
          { id: 'cap', label: T('Why do you look so scared?', 'Kenapa anda nampak takut?'), lines: [T('Because... because some people are very scary when grown-ups do not believe me.', 'Kerana... kerana sesetengah orang sangat menakutkan apabila orang dewasa tidak percaya saya.')] },
          { id: 'truth', label: T('Ben, tell me what you really saw.', 'Ben, beritahu saya apa yang anda sebenarnya nampak.'), after: 'ben_admit', lines: [T('...I was hiding to scare Priya. I saw a tall lady with a bag leave the Rare Room. I could not say it, so I wrote it in code. Did you read it?', '...Saya bersembunyi untuk menakutkan Priya. Saya nampak wanita tinggi dengan beg keluar dari Bilik Jarang. Saya tidak boleh sebut, jadi saya tulis dalam kod. Awak baca?')] }
        ],
        present: { hall_cam: { unlock: 'ben_admit', lines: [T('That is me behind the shelf! ...OK. I saw her. I wrote the note. Please keep me safe.', 'Itu saya di belakang rak! ...Baik. Saya nampak dia. Saya tulis nota itu. Tolong lindungi saya.')] }, return_note: { requiresFlag: 'note_read', lines: [T('You cracked my code! I learned it from a spy book. Nobody else could read it.', 'Awak pecahkan kod saya! Saya belajar dari buku perisik. Tiada orang lain boleh baca.')], lockedLines: [T('That is... just a paper. I do not know what it says. (Decode it first!)', 'Itu... cuma kertas. Saya tidak tahu apa ia kata. (Nyahkod dahulu!)')] } }
      },
      priya: {
        greeting: T(`I am Priya, I shelve books after school. I found the empty case... my hands are still shaking.`, `Saya Priya, saya menyusun buku selepas sekolah. Saya menemui kotak kosong... tangan saya masih menggeletar.`),
        topics: [
          { id: 'empty', label: T('What did you see at 7:40?', 'Apa yang anda nampak pukul 7:40?'), lines: [T('The case was already empty and the glass was locked. Nothing was broken. I ran to get Miss Marsh.', 'Kotak sudah kosong dan kaca berkunci. Tiada apa pecah. Saya berlari mencari Cik Marsh.')], claims: ['c_priya_empty'] },
          { id: 'marsh', label: T('Did Miss Marsh act strangely?', 'Adakah Cik Marsh bertindak pelik?'), lines: [T('She cried "THIEF!" really loudly — but she did not look surprised. And she kept saying "ghost, ghost".', 'Dia menjerit "PENCURI!" sangat kuat — tetapi dia tidak nampak terkejut. Dan dia asyik berkata "hantu, hantu".')] },
          { id: 'help', label: T('Any advice?', 'Ada nasihat?'), lines: [T('Look at the computer, the Rare Room and the Librarian\'s Office. And be careful in the basement. It is dark.', 'Lihat komputer, Bilik Jarang dan Pejabat Pustakawan. Dan berhati-hati di bawah tanah. Ia gelap.')] }
        ],
        present: { rare_case: { lines: [T('Exactly as I found it. The lock is clean.', 'Tepat seperti saya temui. Kunci bersih.')] }, scan_log: { lines: [T('MARSH_D... but she said she never touched it?', 'MARSH_D... tetapi dia kata dia tidak sentuh?')] } }
      }
    },

    horror: {
      zones: [
        { id: 'rh_whisper', room: 'RH', once: true, minScare: 1, delay: 3, fx: ['sfx:whisper'], text: T('🗣️ From the shelves, very soft: "Give... it... back..."', '🗣️ Dari rak, sangat lembut: "Pulangkan... ia..."') },
        { id: 'rh_flicker', room: 'RH', once: true, minScare: 2, delay: 12, fx: ['sfx:heartbeat', 'flicker:RH:2'], text: T('💡 The reading lamps flicker and a book falls open by itself.', '💡 Lampu bacaan berkelip dan sebuah buku terbuka sendiri.') },
        { id: 'st_slide', room: 'ST', once: true, minScare: 1, delay: 2, fx: ['sfx:scratch'], text: T('📚 A book slides off a shelf behind you. Nobody is there.', '📚 Sebuah buku tergelincir dari rak di belakang anda. Tiada siapa di situ.') },
        { id: 'st_voice', room: 'ST', once: true, minScare: 2, delay: 7, fx: ['sfx:voice', 'shake:0.4', 'music:tense:10'], text: T('👂 The brass tube breathes: "I... see... you..."', '👂 Tiub tembaga bernafas: "Aku... nampak... kau..."') },
        { id: 'rb_dark', room: 'RB', once: true, minScare: 1, delay: 3, fx: ['sfx:knock'], text: T('🚪 Three slow knocks on the glass case from the inside.', '🚪 Tiga ketukan perlahan pada kotak kaca dari dalam.') },
        { id: 'rb_blackout', room: 'RB', once: true, minScare: 2, delay: 9, fx: ['blackout:1.8', 'sfx:heartbeat'], text: T('🕯️ The lights go out for one second... and a cold breath touches your neck.', '🕯️ Lampu padam sesaat... dan nafas sejuk menyentuh tengkuk anda.') },
        { id: 'lo_clock', room: 'LO', once: true, minScare: 1, delay: 2, fx: ['sfx:bell'], text: T('⏰ A clock chimes thirteen times.', '⏰ Jam berdenting tiga belas kali.') },
        { id: 'ar_drip', room: 'AR', once: true, minScare: 1, delay: 2, fx: ['sfx:drip', 'sfx:steps_far'], text: T('💧 Dripping... and slow steps on the floor above.', '💧 Menitis... dan langkah perlahan di lantai atas.') },
        { id: 'ar_slam', room: 'AR', once: true, minScare: 2, delay: 8, fx: ['sfx:slam', 'shake:0.7', 'flash:white'], text: T('🚪 The archive door SLAMS shut behind you!', '🚪 Pintu arkib DIHEMPAS tertutup di belakang anda!') }
      ],
      figures: [
        { name: 'figure1', room: 'RH', minScare: 2, revealDistance: 3.2, flickerRoom: 'RH', reveal: T('It is only a coat stand with a long scarf! (False alarm.)', 'Ia hanya penyangkut kot dengan skarf panjang! (Penggera palsu.)') },
        { name: 'figure2', room: 'AR', minScare: 2, revealDistance: 3.0, flickerRoom: 'AR', sfx: 'sting', reveal: T('A dust sheet over an old statue... but the sheet is still swaying. Something was just here.', 'Kain habuk di atas patung lama... tetapi kain itu masih bergoyang. Sesuatu baru sahaja di sini.') }
      ]
    },

    exitTicket: [
      { subject: 'english', q: T('Choose the correct past tense: "Miss Marsh ____ the atlas out at 7:12."', 'Pilih kala lampau yang betul: "Miss Marsh ____ the atlas out at 7:12."'), options: ['scan', 'scanned', 'scanning', 'scans'], answer: 1, why: T('Past tense of scan = scanned.', 'Kala lampau scan = scanned.') },
      { subject: 'thinking', q: T('A code moves each letter 3 places forward. What does the letter D stand for?', 'Kod menggerakkan setiap huruf 3 tempat ke hadapan. D mewakili huruf apa?'), options: ['A', 'B', 'G', 'C'], answer: 0, why: T('Go back 3: D, C, B, A.', 'Undur 3: D, C, B, A.') },
      { subject: 'thinking', q: T('Everyone believed in the ghost. What is the best way to find out what is REAL?', 'Semua orang percaya hantu. Apakah cara terbaik untuk tahu apa yang NYATA?'), options: [T('Look for evidence: where did the sound come from?', 'Cari bukti: dari mana bunyi itu datang?'), T('Believe the loudest person.', 'Percaya orang paling lantang.'), T('Run away.', 'Lari.')], answer: 0, why: T('Evidence beats stories.', 'Bukti mengalahkan cerita.') }
    ],

    world(W) {
      kit.world(W, this, {
        sky: 0x070509, mood: { amb: 0.17, hemi: 0.14, ambLow: 0.55, hemiLow: 0.32 },
        rooms: [
          { id: 'RH', name: T('Reading Hall', 'Dewan Bacaan'), wall: 0x5b4636, floor: 0x24190f, lightColor: 0xffc890 },
          { id: 'ST', name: T('The Stacks', 'Rak Buku'), wall: 0x4a3a2c, floor: 0x1b140d, lightColor: 0xffb870, lightI: 0.35 },
          { id: 'RB', name: T('Rare Book Room', 'Bilik Buku Jarang'), wall: 0x3f3a52, floor: 0x14121c, lightColor: 0xb8a8ff },
          { id: 'LO', name: T("Librarian's Office", 'Pejabat Pustakawan'), wall: 0x6a5240, floor: 0x241912, lightColor: 0xffd29a },
          { id: 'AR', name: T('Basement Archive', 'Arkib Bawah Tanah'), wall: 0x3a3f46, floor: 0x121418, lightColor: 0x88a8c8 }
        ],
        objs: [['r1d1', 'return_note', 0xf3eccb], ['r1d2', 'catalog_pc', 0x6688aa], ['r1w1', 'loan_card', 0xe9e2c8], ['cpw1', 'whisper_tube', 0xb08a2e],
          ['r3d1', 'rare_case', 0x99ccdd], ['r3w1', 'key_board', 0xcdbf9a], ['r4d1', 'desk_drawer', 0x7a5a3a], ['r4w1', 'tube_cap', 0xb08a2e], ['r4f1', 'cough_drop', 0xe6d933],
          ['r5d1', 'archive_memo', 0xe8e0c8], ['r5d2', 'returns_cart', 0x7a7a80]],
        texts: [[-8.86, 1.9, 0.0, Math.PI / 2, T('OAKRIDGE SCHOOL LIBRARY · SILENCE PLEASE', 'PERPUSTAKAAN SEKOLAH OAKRIDGE · SILA DIAM'), '#d8c8a0', 2.8, 0.5]],
        figs: [{ name: 'figure1', slot: 'r1f1', kind: 'coat' }, { name: 'figure2', slot: 'r5f1', kind: 'tall' }],
        decor(W) {   // bookshelves, so it feels like a library
          [[-8.2, -3.4], [-5.6, -3.4], [-2.2, -3.2]].forEach((p) => W.box(p[0], 0, p[1], 1.8, 2.2, 0.5, 0x4a3320));
          [[2.0, -0.55], [6.8, 0.55]].forEach((p) => W.box(p[0], 0, p[1], 0.9, 1.8, 0.35, 0x4a3320, { collide: false }));
          W.box(14.0, 0, 0.0, 1.4, 1.6, 0.9, 0x555555);
        },
        npcs: [
          { id: 'marsh', slot: 'r1n', rot: Math.PI * 0.5, skin: 0xd8a888, shirt: 0x8a4a7a, pants: 0x2a2a3a, hair: 0x8a8a8a, scale: 1.05 },
          { id: 'priya', slot: 'r1m', rot: Math.PI * 1.2, skin: 0xc79a6a, shirt: 0x7a5cc0, pants: 0x2c3e50, hair: 0x111111, scale: 0.95 },
          { id: 'hale', slot: 'r3n', rot: Math.PI * 0.5, skin: 0xe0b894, shirt: 0x2f6f9e, pants: 0x4a3a2a, hair: 0xdddddd, scale: 1.0 },
          { id: 'ben', slot: 'r4n', rot: Math.PI * 0.3, skin: 0xe0b894, shirt: 0x33a3a3, pants: 0x2c3e50, hair: 0x5a3a1a, scale: 0.78, hat: 0x2a3a6a },
          { id: 'okoro', slot: 'r5n', rot: Math.PI * 1.1, skin: 0x8a5a3a, shirt: 0xc0562b, pants: 0x2c2c2c, hair: 0x111111, scale: 1.02 }
        ]
      });
    }
  };

  /* ---- the 7:15 hall-camera picture ---- */
  kit.photo('hall_cam', 'CAM 3  RARE CORRIDOR', (c, W, H, h) => {
    h.rect(c, 0, 0, W, H, '#0b140f'); h.rect(c, 0, H * 0.62, W, H * 0.38, '#112218');
    for (let i = 0; i < 5; i++) { h.rect(c, 20 + i * 120, H * 0.18, 70, H * 0.44, '#1d3326'); for (let j = 0; j < 4; j++) h.rect(c, 26 + i * 120, H * 0.22 + j * 38, 58, 6, '#2d4a38'); }
    h.rect(c, W * 0.64, H * 0.2, 90, H * 0.42, '#2a4a36');                                         // Rare Room door
    h.rect(c, W * 0.5, H * 0.34, 34, 96, '#4a6a52'); h.circ(c, W * 0.5 + 17, H * 0.31, 15, '#6a8a72');   // tall woman
    h.rect(c, W * 0.5 + 30, H * 0.5, 30, 38, '#3a5a42'); h.line(c, W * 0.5 + 30, H * 0.46, W * 0.5 + 40, H * 0.5, '#3a5a42', 3);   // tote bag
    h.rect(c, W * 0.1 + 20, H * 0.46, 26, 60, '#3a5540'); h.circ(c, W * 0.1 + 33, H * 0.43, 12, '#5a7a62'); h.rect(c, W * 0.1 + 20, H * 0.4, 26, 6, '#2a4030');   // Ben with cap
  });
  MF.registerCase(C);
})();
