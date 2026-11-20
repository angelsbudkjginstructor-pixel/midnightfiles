/* ============================================================================
   CASE 005 — THE SPORTS DAY TROPHY / PIALA HARI SUKAN   (School field at night)
   ----------------------------------------------------------------------------
   HIDDEN SOLUTION
   - Sports Night: Blue House really beat Red House 121 to 118 (judges' signed score sheet).
   - 7:00 Mei hands the signed sheet to the Sports Master, Coach Marcus VALE (Red House's coach).
     He wants Red to win (a promotion bonus). 7:25 he sees Red lost by 3 points.
   - 7:30 prize-giving was due. Vale asks to delay it to 8:30 "for the scoreboard".
   - 7:35 Vale takes the trophy with HIS key and hides it in the pole-vault mat bag in the Equipment Store.
   - 7:50 Vale climbs a ladder into the scoreboard hut with his S1 key and changes Red's long-jump score from 15 to 21
     (Red 124 beats Blue 121). A night camera catches him on the ladder.
   - 8:00 He "discovers" the trophy missing: a DECOY theft, so that nobody checks the scoreboard.
   - Footsteps and a whistle in the dark: Raj (Red) and Nadia (Blue) were secretly night-training on the track.
   TWIST: the stolen trophy is a decoy. The real crime is the scoreboard — and the culprit is the official.
   ============================================================================ */
(function () {
  const kit = MF.kit, T = kit.T, mm = kit.mm, D = kit.doc;
  const C = {
    id: '005', num: 5,
    title: T('The Sports Day Trophy', 'Piala Hari Sukan'),
    tagline: T('The trophy vanished before the prize-giving. A whistle blows in the dark. And the scoreboard is lying.', 'Piala hilang sebelum penyampaian hadiah. Wisel berbunyi dalam gelap. Dan papan markah berbohong.'),
    place: T('Rowan School sports field', 'Padang sukan Sekolah Rowan'),
    premise: T(
      `It is 8:20 pm on Sports Night. The House Cup has disappeared from its cabinet just before the prize-giving. The scoreboard says Red House 124, Blue House 121. But Blue's captain Nadia swears the numbers are wrong, and a whistle keeps blowing on the dark track as if the ghost of the Headless Runner is still racing. The principal arrives at 9:00 pm to announce the winner. Find out what really happened. Sometimes the thing everyone is looking for is only there to keep them from looking somewhere else.`,
      `Sekarang pukul 8:20 malam pada Malam Sukan. Piala Rumah hilang dari kabinetnya sebelum penyampaian hadiah. Papan markah menunjukkan Rumah Merah 124, Rumah Biru 121. Tetapi kapten Biru, Nadia, bersumpah nombor itu salah, dan wisel terus berbunyi di trek yang gelap seolah-olah hantu Pelari Tanpa Kepala masih berlumba. Pengetua tiba pukul 9:00 malam untuk mengumumkan pemenang. Cari apa yang sebenarnya berlaku. Kadang-kadang benda yang semua orang cari hanya ada untuk menghalang mereka melihat ke tempat lain.`),
    mysteryType: 'Decoy theft / rigged scoreboard',
    subjects: ['math', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('8:20'), deadline: mm('9:00'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },
    timeUp: { title: T('The principal arrives!', 'Pengetua tiba!'), text: T('The principal reads the wrong score aloud. Name the culprit NOW before the wrong house gets the cup!', 'Pengetua membaca markah yang salah. Namakan pelaku SEKARANG sebelum rumah yang salah dapat piala!') },

    hidden: {
      culprit: 'vale', what: 'decoy_rigged', window: [mm('7:25'), mm('8:00')],
      summary: T(
        `Blue House really won, 121 to 118. Coach Vale, who wanted Red to win, hid the trophy in the pole-vault mat bag as a decoy so nobody would look at the scoreboard, then climbed the ladder at 7:50 and changed Red's long-jump score from 15 to 21. He also asked to delay the prize-giving by an hour to give himself time. The whistle in the dark was two children night-training.`,
        `Rumah Biru sebenarnya menang, 121 lawan 118. Jurulatih Vale, yang mahu Merah menang, menyorokkan piala dalam beg tilam lompat bergalah sebagai umpan supaya tiada siapa melihat papan markah, kemudian memanjat tangga pukul 7:50 dan menukar markah lompat jauh Merah dari 15 kepada 21. Dia juga meminta penyampaian hadiah ditangguh sejam untuk memberi dirinya masa. Wisel dalam gelap ialah dua kanak-kanak berlatih malam.`),
      sequence: [
        [mm('7:00'), T('Mei gives Vale the signed score sheet.', 'Mei memberi Vale helaian markah bertandatangan.')],
        [mm('7:25'), T('Vale sees Red lost by 3 points.', 'Vale nampak Merah kalah 3 mata.')],
        [mm('7:35'), T('Vale hides the trophy in the mat bag.', 'Vale menyorokkan piala dalam beg tilam.')],
        [mm('7:50'), T('Vale changes the scoreboard from the ladder.', 'Vale menukar papan markah dari tangga.')],
        [mm('8:00'), T('Vale announces the trophy is "stolen".', 'Vale mengumumkan piala "dicuri".')]
      ],
      essentialClues: ['score_sheet', 'panel_log', 'field_cam', 'trophy_found', 'run_sheet', 'key_board', 'c_vale_board'],
      misleading: [
        { item: 'c_nadia_cab', why: T('Nadia stood beside the cabinet because she was checking the score, not stealing.', 'Nadia berdiri di sebelah kabinet kerana menyemak markah, bukan mencuri.') },
        { item: 'raj_diary', why: T('Raj and Nadia night-training explains the whistle, not the trophy.', 'Raj dan Nadia berlatih malam menerangkan wisel, bukan piala.') },
        { item: 'whistle', why: T('A whistle proves someone blew it, not who changed the board.', 'Wisel membuktikan seseorang meniupnya, bukan siapa menukar papan.') },
        { item: 'event_poster', why: T('The poster only lists events and points.', 'Poster hanya menyenaraikan acara dan mata.') }
      ]
    },

    people: [
      { id: 'vale', name: 'Coach Marcus Vale', age: 44, role: T('Sports Master, Red House coach', 'Guru Sukan, jurulatih Rumah Merah'), rel: T('Runs Sports Night', 'Mengendalikan Malam Sukan'), color: '#d03a3a', suspect: true },
      { id: 'nadia', name: 'Nadia Rahman', age: 12, role: T('Blue House captain', 'Kapten Rumah Biru'), rel: T('Says the score is wrong', 'Kata markah salah'), color: '#2f6f9e', suspect: true },
      { id: 'raj', name: 'Raj Menon', age: 12, role: T('Red House captain', 'Kapten Rumah Merah'), rel: T('His house is "winning"', 'Rumahnya "menang"'), color: '#c0562b', suspect: true },
      { id: 'fong', name: 'Mrs. Fong', age: 57, role: T('Groundskeeper', 'Penjaga padang'), rel: T('Has a night camera on the field', 'Ada kamera malam di padang'), color: '#33a37a', suspect: true },
      { id: 'mei', name: 'Mei Lin', age: 14, role: T('Student timekeeper', 'Penjaga masa pelajar'), rel: T('Wrote the score sheet', 'Menulis helaian markah'), color: '#7a5cc0', suspect: true }
    ],

    items: [
      /* PAVILION */
      { id: 'score_sheet', type: 'document', icon: '📋', title: T('Judges\' score sheet', 'Helaian markah hakim'), where: T('Pavilion desk', 'Meja Pavilion'),
        desc: T(`The signed score sheet from the five events. Add the points for each house.`, `Helaian markah bertandatangan untuk lima acara. Tambah mata setiap rumah.`),
        puzzle: 'pz_sum', inspect: { kind: 'puzzle-doc',
          html: D('📋 <b>SCORE SHEET (signed by 3 judges)</b><br><table style="width:100%"><tr><td></td><td><b>Blue</b></td><td><b>Red</b></td></tr><tr><td>Egg & spoon</td><td>20</td><td>22</td></tr><tr><td>100 m</td><td>25</td><td>20</td></tr><tr><td>Relay</td><td>30</td><td>35</td></tr><tr><td>Long jump</td><td>18</td><td>15</td></tr><tr><td>Tug-of-war</td><td>28</td><td>26</td></tr></table>', '📋 <b>HELAIAN MARKAH (ditandatangani 3 hakim)</b><br><table style="width:100%"><tr><td></td><td><b>Biru</b></td><td><b>Merah</b></td></tr><tr><td>Telur & sudu</td><td>20</td><td>22</td></tr><tr><td>100 m</td><td>25</td><td>20</td></tr><tr><td>Berganti-ganti</td><td>30</td><td>35</td></tr><tr><td>Lompat jauh</td><td>18</td><td>15</td></tr><tr><td>Tarik tali</td><td>28</td><td>26</td></tr></table>'),
          fixedHtml: D('📋 Blue = 20+25+30+18+28 = <b>121</b><br>Red = 22+20+35+15+26 = <b>118</b><br><b>Blue really won!</b> ✔', '📋 Biru = 20+25+30+18+28 = <b>121</b><br>Merah = 22+20+35+15+26 = <b>118</b><br><b>Biru sebenarnya menang!</b> ✔') } },
      { id: 'trophy_cabinet', type: 'physical', icon: '🏆', title: T('The empty trophy cabinet', 'Kabinet piala kosong'), where: T('Pavilion', 'Pavilion'),
        desc: T(`The glass door is closed and locked. No broken glass, no scratches. The shelf where the House Cup stood is empty and clean.`, `Pintu kaca tertutup dan berkunci. Tiada kaca pecah, tiada calar. Rak tempat Piala Rumah berdiri kosong dan bersih.`),
        inspect: { kind: 'doc', html: D('🏆 <b>Cabinet</b><br>Lock: not forced<br>Glass: whole<br><small>It was opened with a KEY and locked again. A burglar would not lock up politely.</small>', '🏆 <b>Kabinet</b><br>Kunci: tidak dipaksa<br>Kaca: utuh<br><small>Ia dibuka dengan KUNCI dan dikunci semula. Pencuri tidak akan mengunci dengan sopan.</small>') } },
      { id: 'run_sheet', type: 'document', icon: '🕒', title: T('Evening run sheet', 'Helaian atur cara malam'), where: T('Pavilion notice board', 'Papan notis Pavilion'),
        desc: T(`The timetable for tonight with Coach Vale's pen notes.`, `Jadual malam ini dengan nota pen Jurulatih Vale.`),
        puzzle: 'pz_time', inspect: { kind: 'puzzle-doc',
          html: D('🕒 <b>RUN SHEET</b><br>Events end: 6:30 pm<br>Sheet handed to Vale: 7:00 pm<br>Prize-giving: <b>7:30 pm</b> <span style="color:#c00">(crossed out) → <b>8:30 pm</b></span><br><i>Vale\'s note: "Delay. Need time for the scoreboard."</i>', '🕒 <b>ATUR CARA</b><br>Acara tamat: 6:30 ptg<br>Helaian diberi kepada Vale: 7:00 mlm<br>Penyampaian hadiah: <b>7:30 mlm</b> <span style="color:#c00">(dipangkah) → <b>8:30 mlm</b></span><br><i>Nota Vale: "Tangguh. Perlu masa untuk papan markah."</i>'),
          fixedHtml: D('🕒 Delay: 7:30 → 8:30 = <b>60 minutes</b>.<br>From 7:25 (he saw the result) to 8:30 he had over an hour. ✔', '🕒 Penangguhan: 7:30 → 8:30 = <b>60 minit</b>.<br>Dari 7:25 (dia nampak keputusan) ke 8:30 dia ada lebih sejam. ✔') } },
      { id: 'event_poster', type: 'document', icon: '🖼️', title: T('Sports Night poster', 'Poster Malam Sukan'), where: T('Pavilion wall', 'Dinding Pavilion'),
        desc: T(`The poster lists the events and how many points a win gives.`, `Poster menyenaraikan acara dan berapa mata untuk satu kemenangan.`),
        inspect: { kind: 'doc', html: D('<b>SPORTS NIGHT</b><br>Five events. Blue House vs Red House.<br>Highest total wins the House Cup.<br><small>Scores are signed by 3 judges. The scoreboard copies the signed sheet.</small>', '<b>MALAM SUKAN</b><br>Lima acara. Rumah Biru lawan Rumah Merah.<br>Jumlah tertinggi memenangi Piala Rumah.<br><small>Markah ditandatangani 3 hakim. Papan markah menyalin helaian bertandatangan.</small>') } },
      /* TRACK PATH */
      { id: 'whistle', type: 'physical', icon: '📯', title: T('Silver whistle', 'Wisel perak'), where: T('Track edge', 'Tepi trek'),
        desc: T(`A silver sports whistle on a red cord. Scratched on it: "M.V."`, `Wisel sukan perak pada tali merah. Terukir: "M.V."`),
        inspect: { kind: 'doc', html: D('📯 <b>Silver whistle</b><br>Cord: red<br>Engraved: <b>M.V.</b><br><small>The whistle blowing in the dark was a different, plastic one. This is the coach\'s.</small>', '📯 <b>Wisel perak</b><br>Tali: merah<br>Terukir: <b>M.V.</b><br><small>Wisel yang berbunyi dalam gelap ialah yang lain, plastik. Ini milik jurulatih.</small>') } },
      { id: 'ladder_mud', type: 'physical', icon: '🪜', title: T('Muddy ladder', 'Tangga berlumpur'), where: T('Beside the scoreboard hut', 'Di sebelah pondok papan markah'),
        desc: T(`A long ladder leaning on the hut. The lowest rungs have FRESH red-clay mud and big boot prints at the bottom.`, `Tangga panjang bersandar pada pondok. Anak tangga bawah ada lumpur tanah liat merah BARU dan tapak but besar di bawah.`),
        inspect: { kind: 'doc', html: D('🪜 <b>Ladder</b><br>Fresh red-clay mud on the rungs<br>Boot prints: size 11 (large)<br><small>Mrs. Fong\'s clay is only on the Red House track. A grown-up used this ladder tonight.</small>', '🪜 <b>Tangga</b><br>Lumpur tanah liat merah baru pada anak tangga<br>Tapak but: saiz 11 (besar)<br><small>Tanah liat Puan Fong hanya di trek Rumah Merah. Orang dewasa menggunakan tangga ini malam ini.</small>') } },
      /* EQUIPMENT STORE */
      { id: 'mat_bag', type: 'physical', icon: '🎒', title: T('Pole-vault mat bag', 'Beg tilam lompat bergalah'), where: T('Equipment Store', 'Stor Peralatan'),
        desc: T(`A huge zipped bag with a 3-digit combination lock. A tag on it says "Think in patterns".`, `Beg besar berzip dengan kunci kombinasi 3 digit. Tag padanya berkata "Fikir dalam corak".`),
        puzzle: 'pz_lock', inspect: { kind: 'puzzle-doc',
          html: D('🎒 <b>Tag</b><br>"Think in patterns.<br>2, 4, 6, ?<br>9, 6, 3, ?<br>1, 3, 5, ?"', '🎒 <b>Tag</b><br>"Fikir dalam corak.<br>2, 4, 6, ?<br>9, 6, 3, ?<br>1, 3, 5, ?"'),
          fixedHtml: D('🎒 The lock clicks open. Inside, wrapped in a towel: the House Cup! ✔', '🎒 Kunci terbuka. Di dalam, dibalut tuala: Piala Rumah! ✔') } },
      { id: 'key_board', type: 'document', icon: '🔑', title: T('Key board', 'Papan kunci'), where: T('Equipment Store wall', 'Dinding Stor Peralatan'),
        desc: T(`The school key list: who holds which key.`, `Senarai kunci sekolah: siapa pegang kunci mana.`),
        inspect: { kind: 'doc', html: D('<b>KEY LIST</b><br>S1 — Scoreboard hut + trophy cabinet + store: <b>Sports Master (M. Vale) ONLY</b><br>S2 — Field gate: groundskeeper<br>Student captains: <b>no keys</b>', '<b>SENARAI KUNCI</b><br>S1 — Pondok papan markah + kabinet piala + stor: <b>Guru Sukan (M. Vale) SAHAJA</b><br>S2 — Pintu padang: penjaga padang<br>Kapten pelajar: <b>tiada kunci</b>') } },
      /* CHANGING ROOM */
      { id: 'raj_diary', type: 'document', icon: '📓', title: T("Raj's training diary", 'Diari latihan Raj'), where: T('Changing room bench', 'Bangku bilik persalinan'),
        desc: T(`A sports diary with a muddy cover and a plastic whistle clipped on.`, `Diari sukan berkulit berlumpur dengan wisel plastik terklip.`),
        inspect: { kind: 'doc', html: D('<b>RAJ\'S DIARY</b><br>"7:30 pm — secret race against Nadia on the dark track! We hid our torches in our caps so teachers would not see. We blew the whistle to start. <b>Scared of the ghost, but it was fun.</b>"', '<b>DIARI RAJ</b><br>"7:30 mlm — lumba rahsia lawan Nadia di trek gelap! Kami sembunyikan lampu suluh dalam topi supaya cikgu tidak nampak. Kami meniup wisel untuk bermula. <b>Takut hantu, tetapi seronok.</b>"') } },
      /* SCOREBOARD HUT */
      { id: 'panel_log', type: 'device', icon: '🔢', title: T('Scoreboard control panel', 'Panel kawalan papan markah'), where: T('Scoreboard hut', 'Pondok papan markah'),
        desc: T(`The board's control panel keeps a log of every change. It shows three lines.`, `Panel kawalan papan menyimpan log setiap perubahan. Ia menunjukkan tiga baris.`),
        puzzle: 'pz_panel', inspect: { kind: 'puzzle-doc',
          html: D('🔢 <b>PANEL LOG</b><br>6:30 pm — Red Long jump = <b>15</b> (typed by timekeeper)<br>7:50 pm — Red Long jump = <b>21</b> (manual edit)<br>Hut opened with key tag: <b>S1</b>', '🔢 <b>LOG PANEL</b><br>6:30 mlm — Lompat jauh Merah = <b>15</b> (ditaip penjaga masa)<br>7:50 mlm — Lompat jauh Merah = <b>21</b> (suntingan manual)<br>Pondok dibuka dengan tag kunci: <b>S1</b>'),
          fixedHtml: D('🔢 15 → 21 at 7:50 pm, key S1 = the Sports Master. ✔', '🔢 15 → 21 pukul 7:50 mlm, kunci S1 = Guru Sukan. ✔') } },
      { id: 'big_board', type: 'document', icon: '🟥', title: T('The big scoreboard', 'Papan markah besar'), where: T('Scoreboard hut wall', 'Dinding pondok papan markah'),
        desc: T(`The huge board outside shows RED 124 — BLUE 121.`, `Papan besar di luar menunjukkan MERAH 124 — BIRU 121.`),
        inspect: { kind: 'doc', html: D('🟥 <b>RED 124</b> — 🟦 <b>BLUE 121</b><br><small>The board must copy the signed sheet. Do the sums!</small>', '🟥 <b>MERAH 124</b> — 🟦 <b>BIRU 121</b><br><small>Papan mesti menyalin helaian bertandatangan. Buat pengiraan!</small>') } },
      /* granted */
      { id: 'trophy_found', type: 'physical', icon: '🏆', title: T('The House Cup, hidden in the mat bag', 'Piala Rumah, tersembunyi dalam beg tilam'), where: T('Equipment Store', 'Stor Peralatan'),
        desc: T(`The shiny cup, wrapped in a towel with "S.M." (Sports Master) stitched in the corner.`, `Piala berkilat, dibalut tuala dengan "S.M." (Guru Sukan) dijahit di penjuru.`),
        inspect: { kind: 'doc', html: D('🏆 <b>The House Cup</b><br>Wrapped in a towel marked <b>S.M.</b><br><small>A real thief would take it far away. This was hidden nearby on purpose, to be "missed".</small>', '🏆 <b>Piala Rumah</b><br>Dibalut tuala bertanda <b>S.M.</b><br><small>Pencuri sebenar akan membawanya jauh. Ini disembunyikan berdekatan dengan sengaja, untuk "hilang".</small>') } },
      { id: 'field_cam', type: 'photo', icon: '📸', photo: true, title: T('Field night camera, 7:50 pm', 'Kamera malam padang, 7:50 mlm'), art: 'field_cam', stampT: mm('7:50'), stampLabel: T('Field camera (correct time)', 'Kamera padang (masa betul)'),
        desc: T(`A night-vision photo of the scoreboard hut.`, `Gambar penglihatan malam pondok papan markah.`),
        zoomNotice: T(`You zoom in: a tall man in a red cap climbs the ladder to the scoreboard hut, a red whistle cord around his neck. It is 7:50 pm.`, `Anda zum: seorang lelaki tinggi bertopi merah memanjat tangga ke pondok papan markah, tali wisel merah di lehernya. Pukul 7:50 malam.`),
        timeline: T('A tall man in a red cap climbs to the scoreboard at 7:50 pm.', 'Lelaki tinggi bertopi merah memanjat ke papan markah pukul 7:50 mlm.') },
      { id: 'inf_sum', kind: 'inference', type: 'deduction', icon: '💡', title: T('Blue really won 121 to 118', 'Biru sebenarnya menang 121 lawan 118'), desc: T(`The signed sheet adds up to Blue 121, Red 118. The board shows Red 124: six extra points appeared from nowhere.`, `Helaian bertandatangan berjumlah Biru 121, Merah 118. Papan menunjukkan Merah 124: enam mata tambahan muncul entah dari mana.`) },
      { id: 'inf_delay', kind: 'inference', type: 'deduction', icon: '💡', title: T('Vale delayed the prize-giving by 60 minutes', 'Vale menangguhkan penyampaian hadiah 60 minit'), desc: T(`He saw the result at 7:25 and asked for an extra hour. That is exactly enough time to hide a cup and change a board.`, `Dia nampak keputusan pukul 7:25 dan meminta satu jam tambahan. Itu tepat cukup untuk menyorokkan piala dan menukar papan.`) },
      { id: 'inf_panel', kind: 'inference', type: 'deduction', icon: '💡', title: T('The board was edited by hand at 7:50 with key S1', 'Papan disunting dengan tangan pukul 7:50 dengan kunci S1'), desc: T(`Red long jump was 15 (typed) and became 21 (manual edit). Only the Sports Master holds S1.`, `Lompat jauh Merah ialah 15 (ditaip) dan menjadi 21 (suntingan manual). Hanya Guru Sukan memegang S1.`) },
      { id: 'inf_trophy', kind: 'inference', type: 'deduction', icon: '💡', title: T('The "stolen" cup was a DECOY hidden by the key-holder', 'Piala "dicuri" ialah UMPAN yang disorokkan pemegang kunci'), desc: T(`Locked cabinet, no break-in, the cup near the store, wrapped in the Sports Master's towel. The "theft" was there to keep everyone away from the scoreboard.`, `Kabinet berkunci, tiada pecah masuk, piala dekat stor, dibalut tuala Guru Sukan. "Kecurian" itu untuk menjauhkan semua orang daripada papan markah.`) },

      { id: 'c_vale_pav', kind: 'claim', person: 'vale', t: mm('7:50'), type: 'statement', icon: '💬', title: T('Vale: "I was folding flags in the pavilion at 7:50."', 'Vale: "Saya melipat bendera di pavilion pukul 7:50."'), desc: T('He says he never went near the scoreboard.', 'Dia kata dia tidak dekat papan markah.') },
      { id: 'c_vale_board', kind: 'claim', person: 'vale', t: 0, type: 'statement', icon: '💬', title: T('Vale: "The scoreboard is correct: Red wins 124 to 121!"', 'Vale: "Papan markah betul: Merah menang 124 lawan 121!"'), desc: T('He says the board is right.', 'Dia kata papan itu betul.') },
      { id: 'c_vale_theft', kind: 'claim', person: 'vale', t: 0, type: 'statement', icon: '💬', title: T('Vale: "A thief broke in and stole the cup!"', 'Vale: "Pencuri memecah masuk dan mencuri piala!"'), desc: T('He says the cup was stolen.', 'Dia kata piala dicuri.') },
      { id: 'c_nadia_cab', kind: 'claim', person: 'nadia', t: mm('7:40'), type: 'statement', icon: '💬', title: T('Nadia: "I stood by the cabinet only to read the scores!"', 'Nadia: "Saya berdiri di tepi kabinet hanya untuk baca markah!"'), desc: T('She says she did not touch the cup.', 'Dia kata dia tidak sentuh piala.') },
      { id: 'c_raj_run', kind: 'claim', person: 'raj', t: mm('7:30'), type: 'statement', icon: '💬', title: T('Raj: "I was in the changing room all evening."', 'Raj: "Saya di bilik persalinan sepanjang malam."'), desc: T('He says he never went on the track.', 'Dia kata dia tidak ke trek.') },
      { id: 'c_fong_cam', kind: 'claim', person: 'fong', t: mm('7:50'), type: 'statement', icon: '💬', title: T('Fong: "My camera caught a man on the ladder at 7:50."', 'Fong: "Kamera saya menangkap seorang lelaki di tangga pukul 7:50."'), desc: T('The groundskeeper has a photo.', 'Penjaga padang ada gambar.') },
      { id: 'c_mei_sheet', kind: 'claim', person: 'mei', t: mm('6:30'), type: 'statement', icon: '💬', title: T('Mei: "I wrote Red\'s long jump as 15."', 'Mei: "Saya tulis lompat jauh Merah 15."'), desc: T('The timekeeper says she wrote 15.', 'Penjaga masa kata dia tulis 15.') }
    ],

    pairs: [
      { a: 'c_vale_board', b: 'score_sheet', type: 'contradiction', person: 'vale', requires: ['sum_solved'],
        text: T('Vale says Red wins 124–121. The signed sheet adds to Blue 121, Red 118.', 'Vale kata Merah menang 124–121. Helaian bertandatangan berjumlah Biru 121, Merah 118.'), explain: T('The board does not match the signed sheet.', 'Papan tidak sepadan dengan helaian bertandatangan.') },
      { a: 'c_vale_board', b: 'panel_log', type: 'contradiction', person: 'vale', requires: ['panel_solved'],
        text: T('The panel log shows a manual edit 15 → 21 at 7:50 using key S1.', 'Log panel menunjukkan suntingan manual 15 → 21 pukul 7:50 dengan kunci S1.'), explain: T('Only the Sports Master holds S1.', 'Hanya Guru Sukan pegang S1.') },
      { a: 'c_vale_pav', b: 'field_cam', type: 'contradiction', person: 'vale',
        text: T('He says he was folding flags. The 7:50 photo shows a tall man in a red cap on the scoreboard ladder.', 'Dia kata dia melipat bendera. Gambar 7:50 menunjukkan lelaki tinggi bertopi merah di tangga papan markah.'), explain: T('A time-stamped photo beats a claim.', 'Gambar bercap masa mengalahkan dakwaan.') },
      { a: 'c_vale_theft', b: 'trophy_found', type: 'contradiction', person: 'vale', requires: ['lock_solved'],
        text: T('He says a thief took the cup. It was in the store, wrapped in his own towel.', 'Dia kata pencuri mengambil piala. Ia ada dalam stor, dibalut tuala miliknya sendiri.'), explain: T('A decoy theft.', 'Kecurian umpan.') },
      { a: 'c_vale_theft', b: 'trophy_cabinet', type: 'contradiction', person: 'vale',
        text: T('No break-in: the cabinet was opened with a key.', 'Tiada pecah masuk: kabinet dibuka dengan kunci.'), explain: T('Only S1 opens it.', 'Hanya S1 membukanya.') },
      { a: 'c_raj_run', b: 'raj_diary', type: 'contradiction', person: 'raj',
        text: T('Raj says he never went on the track. His diary says he raced Nadia at 7:30.', 'Raj kata dia tidak ke trek. Diarinya kata dia berlumba dengan Nadia pukul 7:30.'), explain: T('A harmless lie: he was scared of getting in trouble.', 'Pembohongan tidak berbahaya: dia takut kena marah.') },
      { a: 'c_fong_cam', b: 'field_cam', type: 'support', person: 'fong', text: T('The photo is exactly what Mrs. Fong described.', 'Gambar itu tepat seperti yang diterangkan Puan Fong.') },
      { a: 'c_mei_sheet', b: 'panel_log', type: 'support', person: 'mei', requires: ['panel_solved'], text: T('The log says the timekeeper typed 15 at 6:30, like Mei said.', 'Log menyatakan penjaga masa menaip 15 pukul 6:30, seperti kata Mei.') },
      { a: 'c_nadia_cab', b: 'score_sheet', type: 'support', person: 'nadia', requires: ['sum_solved'], text: T('Nadia was right: the sums say Blue won.', 'Nadia betul: pengiraan menunjukkan Biru menang.') }
    ],

    puzzles: {
      pz_sum: { subject: 'math', title: T('Add up the scores', 'Tambah markah'), grants: { flags: ['sum_solved'], items: ['inf_sum'] }, tokens: 0,
        intro: T('Add the five events for each house. Do the sums yourself — do not trust the board.', 'Tambah lima acara untuk setiap rumah. Buat pengiraan sendiri — jangan percaya papan.'),
        steps: [
          { type: 'number', q: T('Blue: 20 + 25 + 30 + 18 + 28 = ?', 'Biru: 20 + 25 + 30 + 18 + 28 = ?'), answer: 121, options: [111, 121, 131, 141], unit: T('points', 'mata'), hints: [T('20+25 = 45. 45+30 = 75.', '20+25 = 45. 45+30 = 75.'), T('75+18 = 93. 93+28 = ?', '75+18 = 93. 93+28 = ?')] },
          { type: 'number', q: T('Red: 22 + 20 + 35 + 15 + 26 = ?', 'Merah: 22 + 20 + 35 + 15 + 26 = ?'), answer: 118, options: [108, 118, 124, 128], unit: T('points', 'mata'), hints: [T('22+20 = 42. 42+35 = 77.', '22+20 = 42. 42+35 = 77.'), T('77+15 = 92. 92+26 = ?', '77+15 = 92. 92+26 = ?')] },
          { type: 'number', q: T('The board says Red 124. How many EXTRA points does it show? (124 − 118)', 'Papan kata Merah 124. Berapa mata TAMBAHAN? (124 − 118)'), answer: 6, options: [3, 4, 6, 8], unit: T('points', 'mata'), hints: [T('124 − 118 = ?', '124 − 118 = ?')] }
        ],
        after: T('Blue 121 beats Red 118. The board shows 6 extra points. Somebody changed it!', 'Biru 121 menewaskan Merah 118. Papan menunjukkan 6 mata tambahan. Seseorang mengubahnya!') },
      pz_time: { subject: 'math', title: T('Measure the delay', 'Ukur penangguhan'), grants: { flags: ['time_solved'], items: ['inf_delay'] }, tokens: 0,
        intro: T('Clock maths: how long was the prize-giving delayed?', 'Matematik jam: berapa lama penyampaian hadiah ditangguh?'),
        steps: [
          { type: 'number', q: T('From 7:30 pm to 8:30 pm is how many MINUTES?', 'Dari 7:30 mlm hingga 8:30 mlm berapa MINIT?'), answer: 60, options: [30, 45, 60, 90], unit: T('minutes', 'minit'), hints: [T('One whole hour = 60 minutes.', 'Satu jam penuh = 60 minit.')] },
          { type: 'number', q: T('Vale saw the result at 7:25 pm. How many minutes until the NEW prize-giving at 8:30?', 'Vale nampak keputusan pukul 7:25. Berapa minit hingga penyampaian BARU 8:30?'), answer: 65, options: [55, 60, 65, 75], unit: T('minutes', 'minit'), hints: [T('7:25 → 8:25 is 60 minutes, then 5 more.', '7:25 → 8:25 ialah 60 minit, kemudian 5 lagi.')] }
        ],
        after: T('Vale bought himself 65 minutes after seeing the result. Why would he need them?', 'Vale membeli 65 minit untuk dirinya selepas melihat keputusan. Kenapa dia memerlukannya?') },
      pz_lock: { subject: 'thinking', title: T('Open the mat bag', 'Buka beg tilam'), grants: { flags: ['lock_solved'], items: ['trophy_found', 'inf_trophy'] }, tokens: 0,
        intro: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
        steps: [{ type: 'code', q: T('Find the next number in each pattern.', 'Cari nombor seterusnya dalam setiap corak.'), patterns: ['2, 4, 6, ?', '9, 6, 3, ?', '1, 3, 5, ?'], answer: '807',
          hints: [T('Pattern 1 adds 2. Pattern 2 subtracts 3.', 'Corak 1 tambah 2. Corak 2 tolak 3.'), T('Pattern 3 adds 2.', 'Corak 3 tambah 2.'), T('The code is 8, 0, 7.', 'Kodnya ialah 8, 0, 7.')] }],
        after: T('Click! The House Cup is inside, wrapped in a towel marked S.M.!', 'Klik! Piala Rumah ada di dalam, dibalut tuala bertanda S.M.!') },
      pz_panel: { subject: 'thinking', title: T('Read the panel log', 'Baca log panel'), grants: { flags: ['panel_solved'], items: ['inf_panel'] }, tokens: 1,
        intro: T('Read the log carefully. Numbers and times tell the story.', 'Baca log dengan teliti. Nombor dan masa menceritakan kisahnya.'),
        steps: [
          { type: 'choice', q: T('What was Red\'s long-jump score on the signed sheet?', 'Berapa markah lompat jauh Merah pada helaian bertandatangan?'), options: ['12', '15', '21', '25'], answer: '15', hints: [T('Look at the long-jump row of the score sheet.', 'Lihat baris lompat jauh helaian markah.')] },
          { type: 'choice', q: T('What did the manual edit at 7:50 change it to?', 'Apa yang diubah oleh suntingan manual pukul 7:50?'), options: ['15', '18', '21', '26'], answer: '21', hints: [T('Read the second line of the log.', 'Baca baris kedua log.')] },
          { type: 'choice', q: T('Which key tag opened the hut? Check the key list.', 'Tag kunci mana membuka pondok? Semak senarai kunci.'), options: [T('S1 — the Sports Master', 'S1 — Guru Sukan'), T('S2 — the groundskeeper', 'S2 — penjaga padang'), T('A student captain', 'Kapten pelajar')], answer: 0, hints: [T('The log says S1. Who holds S1?', 'Log kata S1. Siapa pegang S1?')] }
        ],
        after: T('The score was changed by hand at 7:50 with the Sports Master\'s key. You earn 1 hint token!', 'Markah diubah dengan tangan pukul 7:50 dengan kunci Guru Sukan. Anda dapat 1 token petunjuk!') }
    },

    questions: [
      { id: 'q_how', title: T('1. What happened to the House Cup?', '1. Apa berlaku kepada Piala Rumah?'),
        options: [{ id: 'stolen', text: T('A thief stole it.', 'Pencuri mencurinya.') }, { id: 'ghost', text: T('The Headless Runner took it.', 'Pelari Tanpa Kepala mengambilnya.') },
          { id: 'decoy_rigged', text: T('It was HIDDEN as a decoy while the scoreboard was rigged.', 'Ia DISORONGKAN sebagai umpan semasa papan markah ditipu.'), correct: true }, { id: 'lost', text: T('It was lost by accident.', 'Ia hilang secara tidak sengaja.') }],
        needs: [['trophy_cabinet'], ['trophy_found', 'inf_trophy']], needsFlags: ['lock_solved'], hints: [T('Was the cabinet forced? Where was the cup found, and in whose towel?', 'Adakah kabinet dipaksa? Di mana piala ditemui, dan dalam tuala siapa?')] },
      { id: 'q_score', title: T('2. Which house REALLY won?', '2. Rumah mana SEBENARNYA menang?'),
        options: [{ id: 'red', text: T('Red, 124 to 121', 'Merah, 124 lawan 121') }, { id: 'blue', text: T('Blue, 121 to 118', 'Biru, 121 lawan 118'), correct: true }, { id: 'tie', text: T('A tie', 'Seri') }, { id: 'none', text: T('Nobody knows', 'Tiada siapa tahu') }],
        needs: [['score_sheet', 'inf_sum']], needsFlags: ['sum_solved'], hints: [T('Add the five events for each house yourself.', 'Tambah lima acara untuk setiap rumah sendiri.')] },
      { id: 'q_when', title: T('3. When was the scoreboard changed?', '3. Bila papan markah ditukar?'),
        options: [{ id: 'six', text: T('At 6:30 pm', 'Pukul 6:30 mlm') }, { id: 'seven50', text: T('At 7:50 pm', 'Pukul 7:50 mlm'), correct: true }, { id: 'eight', text: T('At 8:20 pm', 'Pukul 8:20 mlm') }, { id: 'never', text: T('Never', 'Tidak pernah') }],
        needs: [['panel_log', 'inf_panel'], ['field_cam']], needsFlags: ['panel_solved'], hints: [T('The log and the camera photo share a time.', 'Log dan gambar kamera berkongsi satu masa.')] },
      { id: 'q_who', title: T('4. Who rigged the scoreboard and hid the cup?', '4. Siapa menipu papan markah dan menyorokkan piala?'),
        options: [{ id: 'vale', text: T('Coach Vale', 'Jurulatih Vale'), correct: true }, { id: 'nadia', text: T('Nadia', 'Nadia') }, { id: 'raj', text: T('Raj', 'Raj') }, { id: 'fong', text: T('Mrs. Fong', 'Puan Fong') }, { id: 'mei', text: T('Mei', 'Mei') }],
        needs: [['key_board'], ['field_cam', 'ladder_mud'], ['trophy_found', 'panel_log']], needsFlags: ['panel_solved'], hints: [T('Who holds key S1? Who was on the ladder?', 'Siapa pegang kunci S1? Siapa di atas tangga?')] },
      { id: 'q_why', title: T('5. WHY did the "theft" happen?', '5. KENAPA "kecurian" itu berlaku?'),
        options: [{ id: 'prank', text: T('A prank by students.', 'Gurauan murid.') }, { id: 'decoy', text: T('To distract everyone and delay the prize-giving while the score was changed.', 'Untuk mengalihkan perhatian semua orang dan menangguh penyampaian hadiah semasa markah ditukar.'), correct: true },
          { id: 'sell', text: T('To sell the cup.', 'Untuk menjual piala.') }, { id: 'hide', text: T('To protect it from rain.', 'Untuk melindunginya daripada hujan.') }],
        needs: [['run_sheet', 'inf_delay'], ['panel_log', 'trophy_found']], needsFlags: ['time_solved'], hints: [T('How long did Vale delay the prize-giving, and what did he do with that time?', 'Berapa lama Vale menangguh penyampaian hadiah, dan apa dia buat dengan masa itu?')] }
    ],

    conclusion: {
      who: { correct: 'vale' }, what: { questionId: 'q_how' }, when: { questionId: 'q_when' },
      where: [{ id: 'bag', text: T('In the pole-vault mat bag, Equipment Store', 'Dalam beg tilam lompat bergalah, Stor Peralatan'), correct: true }, { id: 'cab', text: T('Still in the cabinet', 'Masih dalam kabinet') }, { id: 'track', text: T('Buried on the track', 'Ditanam di trek') }, { id: 'bus', text: T('In the school bus', 'Dalam bas sekolah') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }],
      whereQ: T('WHERE is the House Cup now?', 'DI MANA Piala Rumah sekarang?'),
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_sum', label: T('The sums are wrong', 'Pengiraan salah'), items: ['score_sheet', 'inf_sum', 'big_board'] },
        { id: 'g_panel', label: T('Edited at 7:50 with S1', 'Disunting pukul 7:50 dengan S1'), items: ['panel_log', 'inf_panel', 'key_board'] },
        { id: 'g_cam', label: T('Seen on the ladder', 'Dilihat di tangga'), items: ['field_cam', 'ladder_mud', 'whistle'] },
        { id: 'g_cup', label: T('The decoy cup', 'Piala umpan'), items: ['trophy_found', 'inf_trophy', 'trophy_cabinet'] },
        { id: 'g_delay', label: T('The delay (motive)', 'Penangguhan (motif)'), items: ['run_sheet', 'inf_delay'] },
        { id: 'g_lie', label: T("Vale's lies", 'Pembohongan Vale'), items: ['c_vale_pav', 'c_vale_board', 'c_vale_theft'] }
      ],
      strongCoverage: 4, secondary: ['raj_diary', 'event_poster', 'c_nadia_cab', 'c_mei_sheet', 'c_fong_cam'], secondaryNeeded: 2,
      lieFlags: ['c_vale_pav', 'c_vale_board', 'c_vale_theft', 'c_raj_run']
    },

    endings: kit.endings({
      secret: { title: T('The Night Runners', 'Pelari Malam'), when: (r) => r.has.raj_diary && r.has.field_cam,
        text: T(`You solve the case AND you find the truth about the "ghost": Raj and Nadia, rivals in the daytime, were racing in secret at night. The principal announces the REAL winner: Blue House. Then, to everyone's surprise, a new race is added to next year's Sports Day: "The Night Relay", Red and Blue running together. Coach Vale is replaced and the House Cup shines for all.`,
          `Anda menyelesaikan kes ini DAN menemui kebenaran tentang "hantu": Raj dan Nadia, pesaing pada siang hari, berlumba secara rahsia pada waktu malam. Pengetua mengumumkan pemenang SEBENAR: Rumah Biru. Kemudian, mengejutkan semua, satu perlumbaan baharu ditambah pada Hari Sukan tahun depan: "Relay Malam", Merah dan Biru berlari bersama. Jurulatih Vale digantikan dan Piala Rumah bersinar untuk semua.`) },
      perfect: { title: T('Case Closed!', 'Kes Selesai!'),
        text: T(`Excellent! You proved Coach Vale hid the cup as a decoy and changed the scoreboard from 15 to 21. Blue House wins 121 to 118. The principal gives Blue the cup and Vale loses his job as Sports Master. The headless runner was only two brave children.`,
          `Hebat! Anda membuktikan Jurulatih Vale menyorokkan piala sebagai umpan dan menukar papan markah dari 15 kepada 21. Rumah Biru menang 121 lawan 118. Pengetua memberi piala kepada Biru dan Vale kehilangan jawatan Guru Sukan. Pelari tanpa kepala hanyalah dua kanak-kanak berani.`) },
      missed: { title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        text: T(`Right answer, strong proof! But you missed side clues: the poster, the diary or the timekeeper's story. Because of that, nobody learns who was racing on the track, and the "ghost" stays a mystery.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: poster, diari atau cerita penjaga masa. Kerana itu, tiada siapa tahu siapa berlumba di trek, dan "hantu" kekal misteri.`) },
      weak: { text: T(`You named the right person, but the proof is weak. Add up the scores, read the panel log and open the mat bag. Hurry!`, `Anda menyebut orang yang betul, tetapi bukti lemah. Tambah markah, baca log panel dan buka beg tilam. Cepat!`) },
      wrong: { text: T(`Oh no — that was not right. Ask yourself: who holds the only S1 key, and whose red cap was on the ladder?`, `Alamak — itu tidak betul. Tanya diri anda: siapa pegang satu-satunya kunci S1, dan topi merah siapa di tangga?`) }
    }),
    wrongWho: {
      nadia: T('Nadia only wanted the correct score. She has no key and she was racing at 7:30.', 'Nadia hanya mahu markah betul. Dia tiada kunci dan dia berlumba pukul 7:30.'),
      raj: T('Raj lied about racing because he was scared, but he has no key and is just a child with a plastic whistle.', 'Raj berbohong tentang berlumba kerana takut, tetapi dia tiada kunci dan hanya kanak-kanak dengan wisel plastik.'),
      fong: T('Mrs. Fong is the one whose camera caught the culprit. She has the field-gate key only (S2).', 'Puan Fong ialah orang yang kameranya menangkap pelaku. Dia hanya ada kunci pintu padang (S2).'),
      mei: T('Mei typed the correct score at 6:30. The log proves it.', 'Mei menaip markah betul pukul 6:30. Log membuktikannya.')
    },

    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      vale: {
        greeting: T(`Terrible, terrible! A thief on Sports Night! Don't worry, the scoreboard is right: Red House wins!`, `Dahsyat, dahsyat! Pencuri pada Malam Sukan! Jangan risau, papan markah betul: Rumah Merah menang!`),
        topics: [
          { id: 'flags', label: T('Where were you at 7:50?', 'Di mana anda pukul 7:50?'), lines: [T('Folding flags in the pavilion, like every year. I never go near that scoreboard.', 'Melipat bendera di pavilion, seperti setiap tahun. Saya tidak pernah dekat papan itu.')], claims: ['c_vale_pav'] },
          { id: 'board', label: T('Is the scoreboard right?', 'Adakah papan markah betul?'), lines: [T('Of course! Red 124, Blue 121. I am the Sports Master. Numbers are my job!', 'Tentu! Merah 124, Biru 121. Saya Guru Sukan. Nombor kerja saya!')], claims: ['c_vale_board'] },
          { id: 'theft', label: T('What happened to the cup?', 'Apa berlaku kepada piala?'), lines: [T('Stolen! A thief with a master key. Awful. The students should be ashamed.', 'Dicuri! Pencuri dengan kunci induk. Dahsyat. Murid-murid patut malu.')], claims: ['c_vale_theft'] },
          { id: 'delay', label: T('Why delay the prize-giving?', 'Kenapa tangguh penyampaian hadiah?'), lines: [T('The board needed a checkup. Safety first!', 'Papan perlu pemeriksaan. Keselamatan dahulu!')] }
        ],
        present: {
          score_sheet: { lines: [T('Mei must have written it wrong! Children make mistakes!', 'Mei pasti tersalah tulis! Kanak-kanak buat silap!')] },
          field_cam: { lines: [T('That could be anyone in a red cap! ...Half the school wears red caps!', 'Itu boleh sesiapa bertopi merah! ...Separuh sekolah pakai topi merah!')] },
          panel_log: { lines: [T('...An old machine. A glitch. It happens.', '...Mesin lama. Kerosakan. Ia berlaku.')] },
          trophy_found: { lines: [T('...I put it away safely before the thief came! Yes! To protect it!', '...Saya simpan dengan selamat sebelum pencuri datang! Ya! Untuk melindunginya!')] },
          key_board: { lines: [T('...Yes, S1 is mine. And?', '...Ya, S1 milik saya. Jadi?')] },
          run_sheet: { lines: [T('...I just wanted everything perfect. That is all.', '...Saya cuma mahu semuanya sempurna. Itu sahaja.')] }
        }
      },
      nadia: {
        greeting: T(`The score is WRONG! I counted Blue's points myself and we won. Nobody listens to me!`, `Markah SALAH! Saya kira sendiri mata Biru dan kami menang. Tiada siapa dengar saya!`),
        topics: [
          { id: 'cab', label: T('Why were you by the cabinet?', 'Kenapa anda di tepi kabinet?'), lines: [T('To read the score poster next to it! I did not touch the cup, I promise.', 'Untuk membaca poster markah di sebelahnya! Saya tidak sentuh piala, saya berjanji.')], claims: ['c_nadia_cab'] },
          { id: 'run', label: T('Who is blowing the whistle?', 'Siapa meniup wisel?'), lines: [T('Not a ghost, I think. Maybe... Raj? He lies when he is scared.', 'Bukan hantu, saya rasa. Mungkin... Raj? Dia berbohong apabila takut.')] },
          { id: 'sum', label: T('How do you know Blue won?', 'Bagaimana anda tahu Biru menang?'), lines: [T('I added the signed sheet. Blue 121. The board says Red 124. That is 6 too many!', 'Saya tambah helaian bertandatangan. Biru 121. Papan kata Merah 124. Itu lebih 6!')] }
        ],
        present: { score_sheet: { lines: [T('YES! That is the real sheet. Do the sums!', 'YA! Itu helaian sebenar. Buat pengiraan!')] }, raj_diary: { lines: [T('...OK. We raced. It was Raj and me. But we never touched the cup!', '...Baik. Kami berlumba. Raj dan saya. Tetapi kami tidak sentuh piala!')] } }
      },
      raj: {
        greeting: T(`Red House rules! ...What? No, I was not doing anything. I was in the changing room.`, `Rumah Merah hebat! ...Apa? Tidak, saya tidak buat apa-apa. Saya di bilik persalinan.`),
        topics: [
          { id: 'room', label: T('Were you on the track?', 'Adakah anda di trek?'), lines: [T('No! Changing room all evening. Ask anyone.', 'Tidak! Bilik persalinan sepanjang malam. Tanya sesiapa.')], claims: ['c_raj_run'] },
          { id: 'honest', label: T('Raj... be honest.', 'Raj... jujurlah.'), after: 'raj_admit', lines: [T('...OK. I raced Nadia at 7:30. We used a plastic whistle. I was afraid I would get in trouble.', '...Baik. Saya berlumba dengan Nadia pukul 7:30. Kami guna wisel plastik. Saya takut kena marah.')] },
          { id: 'coach', label: T('Do you trust Coach Vale?', 'Adakah anda percaya Jurulatih Vale?'), lines: [T('He is nice but he always says "Red must win this year".', 'Dia baik tetapi dia selalu kata "Merah mesti menang tahun ini".')] }
        ],
        present: { raj_diary: { unlock: 'raj_admit', lines: [T('...You found my diary. OK, I lied. It was just a race.', '...Awak jumpa diari saya. Baik, saya berbohong. Ia cuma perlumbaan.')] } }
      },
      fong: {
        greeting: T(`Evening. I have a night camera on the field because of badgers. Tonight it caught something better.`, `Selamat petang. Saya ada kamera malam di padang kerana memerang. Malam ini ia menangkap sesuatu yang lebih baik.`),
        topics: [
          { id: 'photo', label: T('Can I see the camera photo?', 'Boleh saya lihat gambar kamera?'), gives: ['field_cam'], lines: [T('Here: 7:50 pm, a tall man on the scoreboard ladder. The camera clock is exact.', 'Ini: 7:50 mlm, lelaki tinggi di tangga papan markah. Jam kamera tepat.')], claims: ['c_fong_cam'] },
          { id: 'clay', label: T('Why is the ladder muddy?', 'Kenapa tangga berlumpur?'), lines: [T('That red clay is only on the Red track by the long-jump pit. Someone walked straight from there.', 'Tanah liat merah itu hanya di trek Merah dekat lubang lompat jauh. Seseorang berjalan terus dari situ.')] },
          { id: 'keys', label: T('Who has keys?', 'Siapa ada kunci?'), lines: [T('I have the field gate. The scoreboard hut and the store are the Sports Master\'s alone.', 'Saya ada pintu padang. Pondok papan markah dan stor milik Guru Sukan sahaja.')] }
        ],
        present: { key_board: { lines: [T('Right. Two keys, no students.', 'Betul. Dua kunci, tiada murid.')] }, ladder_mud: { lines: [T('Size 11 boots. Not a child.', 'But saiz 11. Bukan kanak-kanak.')] } }
      },
      mei: {
        greeting: T(`I'm Mei, I wrote the score sheet. Please tell them I did not make a mistake. I checked three times.`, `Saya Mei, saya menulis helaian markah. Tolong beritahu mereka saya tidak buat silap. Saya semak tiga kali.`),
        topics: [
          { id: 'sheet', label: T('What did you write for the long jump?', 'Apa anda tulis untuk lompat jauh?'), lines: [T('Red 15, Blue 18. I typed it into the panel at 6:30 and gave Coach Vale the signed sheet at seven.', 'Merah 15, Biru 18. Saya taip ke dalam panel pukul 6:30 dan beri Jurulatih Vale helaian bertandatangan pukul tujuh.')], claims: ['c_mei_sheet'] },
          { id: 'coach', label: T('How did Coach Vale react?', 'Bagaimana reaksi Jurulatih Vale?'), lines: [T('He went very quiet when he saw Blue won. Then he asked to delay the prize-giving.', 'Dia jadi sangat senyap apabila nampak Biru menang. Kemudian dia minta tangguh penyampaian hadiah.')] },
          { id: 'ghost', label: T('Have you heard the whistle?', 'Adakah anda dengar wisel?'), lines: [T('Yes! Two kids laughing out there. I thought it was the headless runner. It was too giggly for a ghost.', 'Ya! Dua kanak-kanak ketawa di luar sana. Saya sangka pelari tanpa kepala. Terlalu ketawa untuk hantu.')] }
        ],
        present: { panel_log: { requiresFlag: 'panel_solved', lines: [T('That is my 6:30 entry: 15. The 7:50 one is not mine!', 'Itu catatan 6:30 saya: 15. Yang 7:50 bukan saya!')], lockedLines: [T('That is the panel... I cannot read it properly. (Work it out first!)', 'Itu panel... saya tidak boleh baca dengan betul. (Selesaikan dahulu!)')] } }
      }
    },

    horror: {
      zones: [
        { id: 'pv_whistle', room: 'PV', once: true, minScare: 1, delay: 3, fx: ['sfx:whisper', 'sfx:wind'], text: T('📯 A whistle blows far away on the dark track...', '📯 Wisel berbunyi jauh di trek yang gelap...') },
        { id: 'pv_flicker', room: 'PV', once: true, minScare: 2, delay: 11, fx: ['sfx:heartbeat', 'flicker:PV:2'], text: T('💡 The pavilion lights flicker. Someone whispers "Rrrrrace me..."', '💡 Lampu pavilion berkelip. Seseorang berbisik "Lumbaaa saya..."') },
        { id: 'tr_steps', room: 'TR', once: true, minScare: 1, delay: 2, fx: ['sfx:steps_far', 'sfx:wind'], text: T('👣 Running feet pound the track beside you... nobody is there.', '👣 Kaki berlari menghentak trek di sebelah anda... tiada siapa di situ.') },
        { id: 'tr_thunder', room: 'TR', once: true, minScare: 2, delay: 6, fx: ['flash:white', 'sfx:thunder', 'shake:0.4'], text: T('⚡ Lightning! A figure with NO HEAD stands on the track... and is gone.', '⚡ Kilat! Susuk TANPA KEPALA berdiri di trek... dan hilang.') },
        { id: 'es_knock', room: 'ES', once: true, minScare: 1, delay: 3, fx: ['sfx:knock'], text: T('🚪 A ball rolls out of the dark by itself.', '🚪 Sebiji bola bergolek keluar dari gelap dengan sendirinya.') },
        { id: 'es_dark', room: 'ES', once: true, minScare: 2, delay: 8, fx: ['blackout:1.6', 'sfx:slam'], text: T('🔦 The store door SLAMS and the light dies.', '🔦 Pintu stor DIHEMPAS dan lampu padam.') },
        { id: 'cr_drip', room: 'CR', once: true, minScare: 1, delay: 2, fx: ['sfx:drip'], text: T('💧 A shower drips in the dark. Drip... drip...', '💧 Pancuran menitis dalam gelap. Titis... titis...') },
        { id: 'sh_hum', room: 'SH', once: true, minScare: 1, delay: 2, fx: ['sfx:static', 'flicker:SH:2'], text: T('📡 The scoreboard buzzes and its numbers flip by themselves.', '📡 Papan markah berdengung dan nombornya berbalik sendiri.') },
        { id: 'sh_stop', room: 'SH', once: true, minScare: 2, delay: 9, fx: ['sfx:voice', 'shake:0.6', 'music:tense:9'], text: T('⏱️ A stopwatch ticks in the dark... then stops at 00:00.', '⏱️ Jam randek berdetik dalam gelap... kemudian berhenti pada 00:00.') }
      ],
      figures: [
        { name: 'figure1', room: 'PV', minScare: 2, revealDistance: 3.2, flickerRoom: 'PV', reveal: T('A tracksuit hung on a coat stand with a cap. (False alarm.)', 'Sut trek tergantung pada penyangkut dengan topi. (Penggera palsu.)') },
        { name: 'figure2', room: 'SH', minScare: 2, revealDistance: 3.0, flickerRoom: 'SH', sfx: 'sting', reveal: T('A big training dummy, still swaying — but no wind blows in the hut.', 'Patung latihan besar, masih bergoyang — tetapi tiada angin di pondok.') }
      ]
    },

    exitTicket: [
      { subject: 'math', q: T('Blue scored 20, 25, 30, 18 and 28. What is the TOTAL?', 'Biru mendapat 20, 25, 30, 18 dan 28. Berapa JUMLAH?'), options: ['111', '121', '131', '141'], answer: 1, why: T('20+25+30+18+28 = 121.', '20+25+30+18+28 = 121.') },
      { subject: 'math', q: T('A prize-giving moves from 7:30 pm to 8:30 pm. How many minutes is that?', 'Penyampaian hadiah berpindah dari 7:30 mlm ke 8:30 mlm. Berapa minit?'), options: ['30', '45', '60', '90'], answer: 2, why: T('One hour = 60 minutes.', 'Satu jam = 60 minit.') },
      { subject: 'thinking', q: T('Everyone was looking for the missing cup. Why was that useful to the cheat?', 'Semua orang mencari piala hilang. Kenapa itu berguna kepada penipu?'), options: [T('It kept everyone from checking the scoreboard.', 'Ia menghalang semua orang daripada memeriksa papan markah.'), T('It was a coincidence.', 'Ia kebetulan.'), T('It made the cup shinier.', 'Ia menjadikan piala lebih berkilat.')], answer: 0, why: T('A decoy hides the real crime.', 'Umpan menyembunyikan jenayah sebenar.') }
    ],

    world(W) {
      kit.world(W, this, {
        sky: 0x050a14, fog: [6, 30], mood: { amb: 0.18, hemi: 0.15, ambLow: 0.55, hemiLow: 0.32 }, desk: 0x5a4a3a,
        rooms: [
          { id: 'PV', name: T('Pavilion', 'Pavilion'), wall: 0x4a5a6a, floor: 0x1c2228, lightColor: 0x9fc0ff },
          { id: 'TR', name: T('Track path', 'Laluan trek'), wall: 0x3a4a4a, floor: 0x3a1c14, lightColor: 0x88a8ff, lightI: 0.3 },
          { id: 'ES', name: T('Equipment Store', 'Stor Peralatan'), wall: 0x4a4440, floor: 0x14120f, lightColor: 0xffc080 },
          { id: 'CR', name: T('Changing room', 'Bilik persalinan'), wall: 0x3f5a5a, floor: 0x10181a, lightColor: 0xa8e8e0 },
          { id: 'SH', name: T('Scoreboard hut', 'Pondok papan markah'), wall: 0x5a3a3a, floor: 0x1a1010, lightColor: 0xff8888 }
        ],
        objs: [['r1d1', 'score_sheet', 0xf1ecd0], ['r1d2', 'trophy_cabinet', 0xaaddee], ['r1w1', 'run_sheet', 0xe9e2c8], ['r1w2', 'event_poster', 0xf0d890],
          ['cpf1', 'whistle', 0xcfd3d8], ['cpf2', 'ladder_mud', 0x9a6a3a], ['r3d1', 'mat_bag', 0x2a6a8a], ['r3w1', 'key_board', 0xcdbf9a],
          ['r4d1', 'raj_diary', 0xd0a040], ['r5d1', 'panel_log', 0x667788], ['r5w1', 'big_board', 0xdd5555]],
        texts: [[-8.86, 1.9, 0.0, Math.PI / 2, T('ROWAN SCHOOL · SPORTS NIGHT', 'SEKOLAH ROWAN · MALAM SUKAN'), '#d8e0f0', 2.8, 0.5]],
        figs: [{ name: 'figure1', slot: 'r1f1', kind: 'coat' }, { name: 'figure2', slot: 'r5f1', kind: 'tall' }],
        decor(W) { W.box(-8.4, 0, -3.4, 2.2, 0.8, 0.5, 0x3a3a46); W.box(11.0, 0, 2.4, 1.0, 2.0, 0.5, 0x3a2a2a, { collide: false }); },
        npcs: [
          { id: 'vale', slot: 'r5n', rot: Math.PI * 1.2, skin: 0xd8a888, shirt: 0xd03a3a, pants: 0x222222, hair: 0x3a2a1a, scale: 1.08, hat: 0xd03a3a },
          { id: 'nadia', slot: 'r1n', rot: Math.PI * 0.5, skin: 0xc79a6a, shirt: 0x2f6f9e, pants: 0x1a2a4a, hair: 0x111111, scale: 0.85 },
          { id: 'mei', slot: 'r1m', rot: Math.PI * 1.2, skin: 0xe0b894, shirt: 0x7a5cc0, pants: 0x2c3e50, hair: 0x111111, scale: 0.92 },
          { id: 'fong', slot: 'r3n', rot: Math.PI * 0.5, skin: 0xd8a87a, shirt: 0x33a37a, pants: 0x3a4a2a, hair: 0x9a9a9a, scale: 0.98 },
          { id: 'raj', slot: 'r4n', rot: Math.PI * 0.3, skin: 0x8a5a3a, shirt: 0xc0562b, pants: 0x2a2a2a, hair: 0x111111, scale: 0.86 }
        ]
      });
    }
  };
  kit.photo('field_cam', 'CAM 2  FIELD', (c, W, H, h) => {
    h.rect(c, 0, 0, W, H, '#0a120d'); h.rect(c, 0, H * 0.66, W, H * 0.34, '#10261a');
    h.rect(c, W * 0.55, H * 0.14, 150, H * 0.5, '#2a4a36'); h.rect(c, W * 0.58, H * 0.2, 100, 50, '#5a8a66'); h.text(c, '124 · 121', W * 0.63, H * 0.3, 22, '#dfffe0', 'center', true);   // board hut
    h.rect(c, W * 0.5, H * 0.1, 8, H * 0.58, '#6a8a74'); h.rect(c, W * 0.5 + 30, H * 0.1, 8, H * 0.58, '#6a8a74'); for (let i = 0; i < 6; i++) h.rect(c, W * 0.5, H * 0.14 + i * 40, 38, 5, '#6a8a74');   // ladder
    h.rect(c, W * 0.5 + 6, H * 0.2, 28, 86, '#4a6a52'); h.circ(c, W * 0.5 + 20, H * 0.18, 13, '#6a8a72'); h.rect(c, W * 0.5 + 6, H * 0.14, 28, 8, '#aa4444');   // man + red cap
  });
  MF.registerCase(C);
})();
