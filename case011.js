/* ============================================================================
   CASE 011 — ROOM 13, HOTEL BELLADONNA / BILIK 13, HOTEL BELLADONNA   (Old hotel, stormy night)
   ----------------------------------------------------------------------------
   One complete, independent story. The engine reads it as data.

   HIDDEN SOLUTION
   - The Belladonna Pearls (and their brass stand) stood in a locked glass case in
     Room 13 for the hotel's 100th-birthday gala. Legend: the bride Isabella
     vanished from Room 13 on her wedding night in 1924 and "walks" when lights fail.
   - 9:34  Mrs. Sato photographs the pearls (her phone is still on TOKYO time: 6:34 am).
   - 9:35  Mr. Whitmore locks Room 13 and goes on stage. 9:38 the desk clerk leaves the desk.
   - 9:40  Storm blackout. The lobby clock stops. LEO, the friendly young bellboy (the
           player's "helper"), takes the spare key + case key from hook 13.
   - 9:41  "The Lady in White": Leo wears a white dust sheet and a torch in the corridor so
           guests run away from the third floor. Dr. Okafor sees gold buttons flash.
   - 9:44  Leo opens Room 13 and the case, a brass button is torn off by the latch, he writes
           "THEY ARE MINE" on the mirror with a red wax crayon, locks up again.
   - 9:47  Generator AUTO-starts (nobody touched the manual switch). Leo hides the 2.4 kg
           pearl piece in the lining of the luggage trolley, the sheet behind the piano and
           the key in his locker.
   MOTIVE: the pearls were taken from Leo's great-grandmother Isabella's family in 1924.
   TWIST: the ghost-story was a stage for a human thief — the FRIENDLY HELPER who guided you.
   ============================================================================ */
(function () {
  const T = (en, bm) => ({ en, bm });
  const mm = (s) => { const [h, m] = s.split(':').map(Number); return (h < 12 ? h + 12 : h) * 60 + m; };
  const paper = (html, style) => `<div class="paper hand" style="${style || ''}">${html}</div>`;

  const C = {
    id: '011',
    num: 11,
    title: T('Room 13, Hotel Belladonna', 'Bilik 13, Hotel Belladonna'),
    tagline: T('A stormy night. A blackout. A bride in white. And the pearls in Room 13 are GONE.', 'Malam ribut. Gelap gelita. Pengantin berbaju putih. Dan mutiara di Bilik 13 LENYAP.'),
    place: T('Hotel Belladonna, Scottish Highlands', 'Hotel Belladonna, Tanah Tinggi Scotland'),
    premise: T(
      `It is 10:10 pm at the old Hotel Belladonna in the Scottish Highlands. The hotel is 100 years old tonight. In locked Room 13 stood its treasure: the Belladonna Pearls. At 9:40 a storm cut the power. Guests saw "the Lady in White", the ghost of the bride Isabella who vanished in Room 13 a century ago. When the lights came back, the glass case was EMPTY and red words glowed on the mirror. Leo, the cheerful young bellboy, offers to guide you around. Find who really took the pearls before 10:45, when the police boat arrives. Careful: ghost stories make great cover for a thief.`,
      `Sekarang pukul 10:10 malam di Hotel Belladonna yang lama di Tanah Tinggi Scotland. Malam ini hotel berusia 100 tahun. Di dalam Bilik 13 yang berkunci tersimpan hartanya: Mutiara Belladonna. Pukul 9:40 ribut memutuskan elektrik. Tetamu nampak "Wanita Berbaju Putih", hantu pengantin Isabella yang hilang di Bilik 13 seratus tahun lalu. Apabila lampu kembali, kotak kaca itu KOSONG dan tulisan merah bersinar pada cermin. Leo, budak bellboy yang ceria, menawarkan diri memandu anda. Cari siapa sebenarnya yang mengambil mutiara itu sebelum 10:45, apabila bot polis tiba. Berhati-hati: cerita hantu ialah penutup yang hebat untuk pencuri.`),
    mysteryType: 'Locked-room theft / staged haunting',
    subjects: ['geography', 'math', 'science', 'english', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('10:10'), deadline: mm('10:45'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },

    hidden: {
      culprit: 'leo',
      what: 'spare_key',
      window: [mm('9:40'), mm('9:47')],
      summary: T(
        `Leo took the spare key for Room 13 from the unattended desk when the storm cut the power at 9:40. He dressed as the "Lady in White" to scare guests away, opened the room and the case, tore a brass button off his jacket, hid the pearl piece in his luggage trolley and the key in his locker. He did it because the pearls once belonged to his own family.`,
        `Leo mengambil kunci simpanan Bilik 13 dari meja yang tidak dijaga apabila ribut memutuskan elektrik pukul 9:40. Dia berpakaian sebagai "Wanita Berbaju Putih" untuk menakutkan tetamu, membuka bilik dan kotak itu, tertanggal sebutir butang tembaga dari jaketnya, menyorokkan mutiara dalam troli bagasinya dan kunci dalam lokernya. Dia berbuat begitu kerana mutiara itu dahulu milik keluarganya sendiri.`),
      sequence: [
        [mm('9:34'), T('Mrs. Sato photographs the pearls. Her phone is still on Tokyo time.', 'Puan Sato bergambar mutiara itu. Telefonnya masih pada waktu Tokyo.')],
        [mm('9:35'), T('Mr. Whitmore locks Room 13 and goes on stage.', 'Encik Whitmore mengunci Bilik 13 dan naik ke pentas.')],
        [mm('9:38'), T('The desk clerk goes to help in the ballroom. The desk is empty.', 'Kerani meja pergi membantu di dewan. Meja kosong.')],
        [mm('9:40'), T('Blackout. The lobby clock stops. Leo takes key 13.', 'Gelap gelita. Jam lobi berhenti. Leo mengambil kunci 13.')],
        [mm('9:41'), T('The "Lady in White" appears on the third floor.', '"Wanita Berbaju Putih" muncul di tingkat tiga.')],
        [mm('9:42'), T('Whitmore is on stage in front of 60 guests (photo). Dr. Okafor sees gold buttons flash.', 'Whitmore di atas pentas di hadapan 60 tetamu (gambar). Dr. Okafor nampak butang emas berkilat.')],
        [mm('9:44'), T('Leo opens the room and the case. A button tears off. He writes on the mirror.', 'Leo membuka bilik dan kotak. Sebutir butang tertanggal. Dia menulis pada cermin.')],
        [mm('9:47'), T('The generator starts by itself. Leo hides the pearls in his trolley.', 'Penjana hidup sendiri. Leo menyorokkan mutiara dalam trolinya.')],
        [mm('10:05'), T('Whitmore opens Room 13: the case is empty.', 'Whitmore membuka Bilik 13: kotak kosong.')]
      ],
      essentialClues: ['phone_photo', 'clock_stopped', 'key_board', 'room_door', 'brass_button', 'laundry_ticket', 'generator_log', 'dust_sheet', 'trolley', 'locker', 'c_leo_base', 'c_okafor_buttons'],
      misleading: [
        { item: 'bank_letter', why: T('Whitmore has money problems, but he was on stage in front of 60 people at 9:42.', 'Whitmore ada masalah wang, tetapi dia di atas pentas di hadapan 60 orang pukul 9:42.') },
        { item: 'red_apron', why: T('Chef Luca\'s apron is red with TOMATO sauce, not with anything from Room 13.', 'Apron Chef Luca merah dengan sos TOMATO, bukan sesuatu dari Bilik 13.') },
        { item: 'c_sato_want', why: T('Mrs. Sato wanted to buy the pearls, but her phone call log and photo place her elsewhere.', 'Puan Sato mahu membeli mutiara itu, tetapi log panggilan dan gambarnya meletakkannya di tempat lain.') },
        { item: 'c_sato_ghost', why: T('The "ghost" Mrs. Sato saw was a person under a sheet.', '"Hantu" yang dilihat Puan Sato ialah seorang manusia di bawah cadar.') },
        { item: 'c_whit_key', why: T('Whitmore\'s key never left his belt: the thief used the SPARE.', 'Kunci Whitmore tidak pernah meninggalkan tali pinggangnya: pencuri menggunakan kunci SIMPANAN.') }
      ]
    },

    people: [
      { id: 'leo', name: 'Leo Santos', age: 19, role: T('Bellboy — your cheerful guide', 'Bellboy — pemandu anda yang ceria'), rel: T('Works at the hotel', 'Bekerja di hotel'), color: '#c0392b', suspect: true },
      { id: 'whitmore', name: 'Alistair Whitmore', age: 62, role: T('Hotel owner', 'Pemilik hotel'), rel: T('Holds the master key', 'Memegang kunci induk'), color: '#5d6d7e', suspect: true },
      { id: 'sato', name: 'Yuki Sato', age: 58, role: T('Antique collector from Tokyo', 'Pengumpul barang antik dari Tokyo'), rel: T('Guest in Room 12', 'Tetamu Bilik 12'), color: '#e08fb0', suspect: true },
      { id: 'okafor', name: 'Dr. Amara Okafor', age: 45, role: T('Doctor from Lagos', 'Doktor dari Lagos'), rel: T('Guest in Room 11', 'Tetamu Bilik 11'), color: '#2e9e6a', suspect: true },
      { id: 'bianchi', name: 'Luca Bianchi', age: 50, role: T('Night chef', 'Chef malam'), rel: T('Cooks the gala dinner', 'Memasak makan malam gala'), color: '#d4ac0d', suspect: true }
    ],

    items: [
      /* ---------------- LOBBY ---------------- */
      { id: 'clock_stopped', type: 'physical', icon: '🕰️', title: T('Stopped lobby clock', 'Jam lobi yang berhenti'), where: T('Lobby wall', 'Dinding lobi'),
        desc: T(`The big electric lobby clock hangs dead. Its hands show one exact time.`, `Jam elektrik besar lobi terhenti. Jarumnya menunjukkan satu masa tepat.`),
        puzzle: 'pz_dark', inspect: { kind: 'puzzle-art', art: 'clock011' } },
      { id: 'world_clocks', type: 'physical', icon: '🌍', title: T('World clocks', 'Jam dunia'), where: T('Lobby wall, above the desk', 'Dinding lobi, di atas meja'),
        desc: T(`Four clocks for guests: Scotland (the hotel), Tokyo, Lagos and Rome. They all show the same moment.`, `Empat jam untuk tetamu: Scotland (hotel), Tokyo, Lagos dan Rome. Semuanya menunjukkan saat yang sama.`),
        puzzle: 'pz_zone', inspect: { kind: 'puzzle-art', art: 'clocks011' } },
      { id: 'switch_log', type: 'document', icon: '☎️', title: T('Switchboard call log', 'Log papan suis telefon'), where: T('Front desk', 'Meja depan'),
        desc: T(`The hotel phone system records every call, even during a blackout (it has a battery).`, `Sistem telefon hotel merekodkan setiap panggilan, walaupun semasa gelap (ia ada bateri).`),
        inspect: { kind: 'doc', html: T(paper(`<table class="tbl"><tr><th>Room</th><th>Call</th><th>Time</th></tr><tr><td>12</td><td>+81 (Japan)</td><td><b>9:38 pm → 9:52 pm</b></td></tr><tr><td>11</td><td>(none)</td><td>—</td></tr></table>`), paper(`<table class="tbl"><tr><th>Bilik</th><th>Panggilan</th><th>Masa</th></tr><tr><td>12</td><td>+81 (Jepun)</td><td><b>9:38 mlm → 9:52 mlm</b></td></tr><tr><td>11</td><td>(tiada)</td><td>—</td></tr></table>`)) } },
      { id: 'generator_log', type: 'document', icon: '📋', title: T('Generator log', 'Log penjana'), where: T('Lobby, beside the fuse board', 'Lobi, sebelah papan fius'),
        desc: T(`A paper log taped beside the emergency generator control.`, `Log kertas dilekat di sebelah kawalan penjana kecemasan.`),
        inspect: { kind: 'doc', html: T(paper(`<b>EMERGENCY GENERATOR — LOG</b><br>Mode: <b>AUTO</b> (starts 7 minutes after a power cut)<br>Last event: AUTO-START at <b>9:47 pm</b><br>Manual switch seal: <b style="color:#0a7">UNBROKEN</b><br><small>Nobody touched the switch tonight.</small>`), paper(`<b>PENJANA KECEMASAN — LOG</b><br>Mod: <b>AUTO</b> (hidup 7 minit selepas elektrik putus)<br>Peristiwa akhir: AUTO-HIDUP pukul <b>9:47 mlm</b><br>Meterai suis manual: <b style="color:#0a7">TIDAK PECAH</b><br><small>Tiada siapa menyentuh suis malam ini.</small>`)) } },
      { id: 'key_board', type: 'document', icon: '🗝️', title: T('Desk key board', 'Papan kunci meja'), where: T('Front desk', 'Meja depan'),
        desc: T(`Rows of hooks with brass keys. Hook 13 is EMPTY. A note is pinned under it.`, `Baris cangkuk dengan kunci tembaga. Cangkuk 13 KOSONG. Satu nota dipin di bawahnya.`),
        inspect: { kind: 'doc', html: T(paper(`<b>KEY BOARD</b><br>Hook 13 (Room 13): <b style="color:#b01212">EMPTY</b> — SPARE door key + display-case key<br><hr><small>Desk note: "9:38 pm — Maria to ballroom to help with the speech. Desk unattended."</small>`), paper(`<b>PAPAN KUNCI</b><br>Cangkuk 13 (Bilik 13): <b style="color:#b01212">KOSONG</b> — kunci pintu SIMPANAN + kunci kotak pameran<br><hr><small>Nota meja: "9:38 mlm — Maria ke dewan untuk membantu ucapan. Meja tidak dijaga."</small>`)) } },
      { id: 'laundry_ticket', type: 'document', icon: '🧾', title: T('Laundry ticket', 'Tiket dobi'), where: T('Desk drawer', 'Laci meja'),
        desc: T(`A hotel laundry ticket for a jacket.`, `Tiket dobi hotel untuk sehelai jaket.`),
        inspect: { kind: 'doc', html: T(paper(`<b>HOTEL BELLADONNA — LAUNDRY</b><br>Item: Bellboy jacket (maroon)<br>Name: <b>L. SANTOS</b><br>Returned today <b>4:00 pm</b><br>Brass buttons: <b>8 of 8 ✔</b>`), paper(`<b>HOTEL BELLADONNA — DOBI</b><br>Barang: Jaket bellboy (merah hati)<br>Nama: <b>L. SANTOS</b><br>Dipulangkan hari ini <b>4:00 ptg</b><br>Butang tembaga: <b>8 daripada 8 ✔</b>`)) } },
      { id: 'trolley', type: 'physical', icon: '🧳', title: T('Luggage trolley', 'Troli bagasi'), where: T('Lobby, by the stairs', 'Lobi, dekat tangga'),
        desc: T(`The bellboy's trolley with a printed load sheet and a built-in weighing scale.`, `Troli bellboy dengan helaian muatan bercetak dan penimbang terbina.`),
        puzzle: 'pz_weight', inspect: { kind: 'puzzle-art', art: 'trolley011' } },
      { id: 'dust_sheet', type: 'physical', icon: '👻', title: T('White dust sheet', 'Cadar habuk putih'), where: T('Behind the grand piano', 'Di belakang piano agam'),
        desc: T(`A big white dust sheet, damp at the hem, stuffed behind the piano. It is stamped "HB — 3rd floor linen".`, `Cadar habuk putih besar, lembap di hujung, disumbat di belakang piano. Ia dicap "HB — linen tingkat 3".`),
        puzzle: 'pz_sheet', inspect: { kind: 'puzzle-doc',
          html: T(paper(`🛏️ <b>White dust sheet "HB — 3rd floor linen"</b><br>• A small torn hole at head height, like a face-hole.<br>• Hem is damp and has dusty footprints.<br>• A strand of <b>maroon wool thread</b> is caught on it.<br>• A smell of floor polish.`, 'background:#e9e6f2'),
                  paper(`🛏️ <b>Cadar habuk putih "HB — linen tingkat 3"</b><br>• Satu lubang kecil setinggi kepala, seperti lubang muka.<br>• Hujung lembap dan ada kesan tapak berhabuk.<br>• Seutas <b>benang bulu merah hati</b> tersangkut.<br>• Bau pengilat lantai.`, 'background:#e9e6f2')),
          fixedHtml: T(paper(`🛏️ <b>White dust sheet</b> — a PERSON wore this as a "ghost" costume. ✔<br><small>Maroon thread = the same colour as a bellboy jacket.</small>`, 'background:#e9e6f2'),
                       paper(`🛏️ <b>Cadar habuk putih</b> — SEORANG MANUSIA memakainya sebagai kostum "hantu". ✔<br><small>Benang merah hati = warna yang sama dengan jaket bellboy.</small>`, 'background:#e9e6f2')) } },
      { id: 'locker', type: 'physical', icon: '🔐', title: T('Staff locker no. 7', 'Loker kakitangan no. 7'), where: T('Staff corner, lobby', 'Sudut kakitangan, lobi'),
        desc: T(`A dented grey locker with a 3-digit combination lock and a name plate: L. SANTOS. A sticky note is stuck to the door.`, `Loker kelabu kemik dengan kunci kombinasi 3 digit dan tanda nama: L. SANTOS. Nota lekat melekap pada pintu.`),
        puzzle: 'pz_locker', inspect: { kind: 'puzzle-art', art: 'locker011' } },
      { id: 'spare_key', type: 'physical', icon: '🔑', title: T('Spare key 13 and case key', 'Kunci simpanan 13 dan kunci kotak'), where: T("Inside Leo's locker", 'Dalam loker Leo'),
        desc: T(`A heavy brass key tagged "13" and a tiny key for the display case, tied together with red thread. Both belong on hook 13.`, `Kunci tembaga berat bertag "13" dan kunci kecil untuk kotak pameran, diikat dengan benang merah. Kedua-duanya milik cangkuk 13.`),
        inspect: { kind: 'doc', html: T(paper(`🔑 <b>Key tag: 13</b><br>🗝️ Tiny case key<br>🧵 Red thread<br><small>This should be hanging on the desk key board.</small>`), paper(`🔑 <b>Tag kunci: 13</b><br>🗝️ Kunci kotak kecil<br>🧵 Benang merah<br><small>Ini sepatutnya tergantung pada papan kunci meja.</small>`)) } },
      { id: 'family_letter', type: 'document', icon: '✉️', title: T('Old family letter', 'Surat keluarga lama'), where: T("Inside Leo's locker", 'Dalam loker Leo'),
        desc: T(`A very old letter with faded ink. Some words have worn away.`, `Surat yang sangat lama dengan dakwat pudar. Beberapa perkataan sudah hilang.`),
        puzzle: 'pz_letter', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<i>"Dear Leo,<br>In 1924 your great-grandmother Isabella ____ the Belladonna Pearls on her wedding day. The hotel family said she ____ them and sent her away. She never ____ them again."</i><br><small>(some words have worn away)</small>`, 'background:#efe2c4'),
                  paper(`<i>"Dear Leo,<br>In 1924 your great-grandmother Isabella ____ the Belladonna Pearls on her wedding day. The hotel family said she ____ them and sent her away. She never ____ them again."</i><br><small>(beberapa perkataan sudah haus)</small>`, 'background:#efe2c4')),
          fixedHtml: T(paper(`<i>"Dear Leo,<br>In 1924 your great-grandmother Isabella <u>wore</u> the Belladonna Pearls on her wedding day. The hotel family said she <u>stole</u> them and sent her away. She never <u>saw</u> them again."</i> ✔`, 'background:#efe2c4'),
                       paper(`<i>"Dear Leo,<br>In 1924 your great-grandmother Isabella <u>wore</u> the Belladonna Pearls on her wedding day. The hotel family said she <u>stole</u> them and sent her away. She never <u>saw</u> them again."</i> ✔`, 'background:#efe2c4')) } },

      /* ---------------- BALLROOM ---------------- */
      { id: 'stage_photo', type: 'photo', icon: '📸', photo: true, title: T('Gala photo: the speech', 'Gambar gala: ucapan'), art: 'stage_photo', stampT: mm('9:42'), stampLabel: T('Photographer camera (correct time)', 'Kamera jurugambar (masa betul)'),
        desc: T(`The hotel photographer's picture of the owner giving his speech on stage.`, `Gambar jurugambar hotel pemilik memberi ucapan di atas pentas.`),
        zoomNotice: T(`You zoom in: Mr. Whitmore stands at the microphone with the big clock behind him showing 9:42. About sixty guests fill the room. He could NOT have been in Room 13.`, `Anda zum: Encik Whitmore berdiri di mikrofon dengan jam besar di belakangnya menunjukkan 9:42. Kira-kira enam puluh tetamu memenuhi dewan. Dia TIDAK mungkin berada di Bilik 13.`),
        timeline: T('Whitmore gives his speech on stage in front of everyone.', 'Whitmore memberi ucapan di pentas di hadapan semua orang.') },
      { id: 'bank_letter', type: 'document', icon: '🏦', title: T('Bank letter', 'Surat bank'), where: T("Whitmore's table, ballroom stage", 'Meja Whitmore, pentas dewan'),
        desc: T(`An official letter with a red stamp.`, `Surat rasmi dengan cop merah.`),
        inspect: { kind: 'doc', html: T(paper(`<b>HIGHLAND BANK — FINAL NOTICE</b><br>Loan: £120,000<br>Due: this Friday<br><small>If unpaid, the hotel will be sold.</small>`), paper(`<b>HIGHLAND BANK — NOTIS AKHIR</b><br>Pinjaman: £120,000<br>Tarikh akhir: Jumaat ini<br><small>Jika tidak dibayar, hotel akan dijual.</small>`)) } },

      /* ---------------- KITCHEN ---------------- */
      { id: 'red_apron', type: 'physical', icon: '🥼', title: T('Chef\'s red-stained apron', 'Apron chef bernoda merah'), where: T('Kitchen hook', 'Cangkuk dapur'),
        desc: T(`A white apron with a big red stain. Next to it, a pot of red sauce.`, `Apron putih dengan kesan merah besar. Di sebelahnya periuk sos merah.`),
        inspect: { kind: 'doc', html: T(paper(`🥼 <b>Apron</b><br>The red stain smells of tomato and basil. The pot beside it is Chef Luca's tomato sauce.<br><small>Not wax. Not paint. Just dinner.</small>`), paper(`🥼 <b>Apron</b><br>Kesan merah berbau tomato dan selasih. Periuk di sebelahnya sos tomato Chef Luca.<br><small>Bukan lilin. Bukan cat. Cuma makan malam.</small>`)) } },
      { id: 'order_slip', type: 'document', icon: '🧾', title: T('Kitchen order slips', 'Slip pesanan dapur'), where: T('Kitchen printer', 'Pencetak dapur'),
        desc: T(`The kitchen printer prints a time on every order, even in a blackout (it has a battery).`, `Pencetak dapur mencetak masa pada setiap pesanan, walaupun semasa gelap (ia ada bateri).`),
        inspect: { kind: 'doc', html: T(paper(`<table class="tbl"><tr><th>Time</th><th>Order</th></tr><tr><td>9:36 pm</td><td>12 × soup</td></tr><tr><td><b>9:42 pm</b></td><td>12 × flambé dessert (chef signs)</td></tr><tr><td>9:55 pm</td><td>12 × coffee</td></tr></table>`), paper(`<table class="tbl"><tr><th>Masa</th><th>Pesanan</th></tr><tr><td>9:36 mlm</td><td>12 × sup</td></tr><tr><td><b>9:42 mlm</b></td><td>12 × pencuci mulut flambé (chef tandatangan)</td></tr><tr><td>9:55 mlm</td><td>12 × kopi</td></tr></table>`)) } },

      /* ---------------- ROOM 13 ---------------- */
      { id: 'room_door', type: 'physical', icon: '🚪', title: T('Door of Room 13', 'Pintu Bilik 13'), where: T('Room 13', 'Bilik 13'),
        desc: T(`The old brass lock is clean. No scratches, no bent metal.`, `Kunci tembaga lama itu bersih. Tiada calar, tiada logam bengkok.`),
        inspect: { kind: 'doc', html: T(paper(`🚪 <b>Room 13 door</b><br>🔍 Lock: NOT forced, NOT scratched.<br>📏 The windows are painted shut on the 3rd floor.<br><small>Whoever came in had a KEY.</small>`), paper(`🚪 <b>Pintu Bilik 13</b><br>🔍 Kunci: TIDAK dipaksa, TIDAK bercalar.<br>📏 Tingkap dicat mati di tingkat 3.<br><small>Sesiapa yang masuk mempunyai KUNCI.</small>`)) } },
      { id: 'glass_case', type: 'physical', icon: '🏺', title: T('Empty display case', 'Kotak pameran kosong'), where: T('Room 13, centre', 'Bilik 13, tengah'),
        desc: T(`A glass case on a stand. The small lock is NOT broken. Inside: an empty velvet cushion and a dent where a heavy brass stand stood.`, `Kotak kaca di atas pelantar. Kunci kecil TIDAK rosak. Di dalam: kusyen baldu kosong dan lekuk tempat pelantar tembaga berat berada.`),
        inspect: { kind: 'doc', html: T(paper(`🏺 <b>Display case</b><br>🔓 Opened with its own tiny key.<br>🟤 A deep dent: the pearls sat on a <b>heavy</b> brass stand.<br><small>Pearls + stand + velvet box = 2.4 kg.</small>`), paper(`🏺 <b>Kotak pameran</b><br>🔓 Dibuka dengan kunci kecilnya sendiri.<br>🟤 Lekuk dalam: mutiara berada di atas pelantar tembaga yang <b>berat</b>.<br><small>Mutiara + pelantar + kotak baldu = 2.4 kg.</small>`)) } },
      { id: 'brass_button', type: 'physical', icon: '🔘', title: T('Brass button', 'Butang tembaga'), where: T('Floor beside the case', 'Lantai sebelah kotak'),
        desc: T(`A shiny brass button with a little torn thread. Engraved on the front: "HB".`, `Butang tembaga berkilat dengan sedikit benang koyak. Terukir di hadapan: "HB".`),
        inspect: { kind: 'model', model: 'button011', notes: [
          T('"HB" = Hotel Belladonna. Only BELLBOYS and DOORMEN wear brass uniform buttons. Chefs, guests and the owner do not.', '"HB" = Hotel Belladonna. Hanya BELLBOY dan PENGAWAL PINTU memakai butang seragam tembaga. Chef, tetamu dan pemilik tidak.'),
          T('It has a bit of maroon thread: a maroon jacket.', 'Ada sedikit benang merah hati: jaket merah hati.') ] } },
      { id: 'red_writing', type: 'document', icon: '🪞', title: T('Red words on the mirror', 'Tulisan merah pada cermin'), where: T('Room 13 mirror', 'Cermin Bilik 13'),
        desc: T(`Big red letters on the old mirror: THEY ARE MINE.`, `Huruf merah besar pada cermin lama: THEY ARE MINE.`),
        inspect: { kind: 'doc', html: T(paper(`<span style="color:#b01212;font-size:1.6em;font-weight:bold;text-shadow:1px 2px 0 #500">THEY ARE MINE</span><br><small>🔎 Waxy and thick, not wet. Like a red wax crayon from the lobby kids' corner. Written at the height of an adult. Not blood.</small>`, 'background:#241a28;color:#ddd'), paper(`<span style="color:#b01212;font-size:1.6em;font-weight:bold;text-shadow:1px 2px 0 #500">THEY ARE MINE</span><br><small>🔎 Berlilin dan tebal, tidak basah. Seperti krayon lilin merah dari sudut kanak-kanak lobi. Ditulis pada ketinggian orang dewasa. Bukan darah.</small>`, 'background:#241a28;color:#ddd')) } },

      /* ---------------- given by a witness ---------------- */
      { id: 'phone_photo', type: 'photo', icon: '📱', photo: true, title: T("Mrs. Sato's phone photo", 'Gambar telefon Puan Sato'), art: 'phone_photo', stampT: 6 * 60 + 34, realT: 21 * 60 + 34, fixFlag: 'zone_solved', stampLabel: T('Phone time (still on TOKYO time)', 'Masa telefon (masih waktu TOKYO)'),
        desc: T(`Mrs. Sato's picture of the Belladonna Pearls on their brass stand, taken through the open door of Room 13.`, `Gambar Puan Sato mengenai Mutiara Belladonna di atas pelantar tembaga, diambil melalui pintu terbuka Bilik 13.`),
        zoomNotice: T(`You zoom in: the pearl strand is whole and the case is locked with its tiny key in the lock. The phone says 6:34 AM — but she has not changed it from Tokyo. Fix the time-zone puzzle to see the real time here.`, `Anda zum: untaian mutiara itu lengkap dan kotak berkunci dengan kunci kecilnya dalam kunci. Telefon menunjukkan 6:34 PAGI — tetapi dia belum menukarnya dari Tokyo. Selesaikan teka-teki zon waktu untuk melihat masa sebenar di sini.`),
        timeline: T('The pearls are still in the case (phone photo).', 'Mutiara masih dalam kotak (gambar telefon).') },

      /* ---------------- inferences ---------------- */
      { id: 'inf_zone', kind: 'inference', type: 'deduction', icon: '💡', title: T('The pearls were still there at 9:34 pm (UK time)', 'Mutiara masih ada pukul 9:34 malam (waktu UK)'),
        desc: T(`Tokyo is 9 hours AHEAD of the UK. The phone says 6:34 AM in Tokyo, so it was 6:34 − 9 hours = 9:34 PM the evening before in Scotland. The pearls were safe at 9:34.`, `Tokyo 9 jam LEBIH AWAL daripada UK. Telefon menunjukkan 6:34 PAGI di Tokyo, jadi di Scotland ia pukul 6:34 − 9 jam = 9:34 MALAM semalam. Mutiara selamat pukul 9:34.`) },
      { id: 'inf_dark', kind: 'inference', type: 'deduction', icon: '💡', title: T('The theft window: 9:40 to 9:47 (7 dark minutes)', 'Tempoh kecurian: 9:40 hingga 9:47 (7 minit gelap)'),
        desc: T(`The lobby clock stopped at 9:40 when the power failed. The generator auto-started at 9:47: 9:47 − 9:40 = 7 minutes. Combined with the 9:34 photo and the locked door at 9:35, the thief struck in the dark.`, `Jam lobi berhenti pukul 9:40 apabila elektrik terputus. Penjana hidup sendiri pukul 9:47: 9:47 − 9:40 = 7 minit. Digabung dengan gambar 9:34 dan pintu berkunci pukul 9:35, pencuri bertindak dalam gelap.`) },
      { id: 'inf_weight', kind: 'inference', type: 'deduction', icon: '💡', title: T('The trolley hides 2.4 kg too much — the pearl stand!', 'Troli menyorok 2.4 kg terlebih — pelantar mutiara!'),
        desc: T(`The bags on the load sheet add up to 31.6 kg, but the scale shows 34.0 kg. 34.0 − 31.6 = 2.4 kg, exactly the weight of the pearls + stand + velvet box. The trolley lining hides them.`, `Beg pada helaian muatan berjumlah 31.6 kg, tetapi penimbang menunjukkan 34.0 kg. 34.0 − 31.6 = 2.4 kg, tepat berat mutiara + pelantar + kotak baldu. Pelapik troli menyorok mereka.`) },
      { id: 'inf_sheet', kind: 'inference', type: 'deduction', icon: '💡', title: T('The "Lady in White" was a PERSON in a sheet, wearing maroon', '"Wanita Berbaju Putih" ialah SEORANG MANUSIA bercadar, berpakaian merah hati'),
        desc: T(`Observations: face-hole, footprints, maroon thread, polish smell. Best inference: someone with a maroon jacket wore the sheet as a costume. It was not a ghost.`, `Pemerhatian: lubang muka, kesan tapak, benang merah hati, bau pengilat. Inferens terbaik: seseorang berjaket merah hati memakai cadar itu sebagai kostum. Ia bukan hantu.`) },
      { id: 'inf_locker', kind: 'inference', type: 'deduction', icon: '💡', title: T("The missing key was hidden in Leo's own locker", 'Kunci yang hilang disorok dalam loker Leo sendiri'),
        desc: T(`The locker has Leo's name on it and the spare key to Room 13 was inside. Leo said the key never left the hook.`, `Loker itu bernama Leo dan kunci simpanan Bilik 13 ada di dalamnya. Leo berkata kunci itu tidak pernah meninggalkan cangkuk.`) },
      { id: 'inf_letter', kind: 'inference', type: 'deduction', icon: '💡', title: T('MOTIVE: the pearls once belonged to Leo\'s family', 'MOTIF: mutiara itu dahulu milik keluarga Leo'),
        desc: T(`The restored letter: Isabella WORE the pearls, the hotel family said she STOLE them, and she NEVER SAW them again. Leo wanted them back. (Still: taking them was wrong. The law, not a thief, must decide who owns them.)`, `Surat yang dipulihkan: Isabella MEMAKAI mutiara itu, keluarga hotel berkata dia MENCURINYA, dan dia TIDAK PERNAH MELIHATNYA lagi. Leo mahu ia kembali. (Namun: mengambilnya salah. Undang-undang, bukan pencuri, mesti memutuskan siapa pemiliknya.)`) },

      /* ---------------- witness claims ---------------- */
      { id: 'c_leo_base', kind: 'claim', person: 'leo', t: mm('9:47'), type: 'statement', icon: '💬', title: T('Leo: "I was in the basement and switched the generator on myself at 9:47."', 'Leo: "Saya di bawah tanah dan menghidupkan penjana sendiri pukul 9:47."'), desc: T('Leo says he was in the basement from 9:35 to 9:50 and flipped the switch.', 'Leo berkata dia di bawah tanah dari 9:35 hingga 9:50 dan menekan suis.') },
      { id: 'c_leo_button', kind: 'claim', person: 'leo', t: 0, type: 'statement', icon: '💬', title: T('Leo: "I lost a button off my jacket weeks ago."', 'Leo: "Saya kehilangan butang jaket beberapa minggu lalu."'), desc: T('Leo says the button is old and could be from anywhere.', 'Leo berkata butang itu lama dan boleh dari mana-mana.') },
      { id: 'c_leo_key', kind: 'claim', person: 'leo', t: 0, type: 'statement', icon: '💬', title: T('Leo: "The spare key never leaves the hook. I never touched it."', 'Leo: "Kunci simpanan tidak pernah meninggalkan cangkuk. Saya tidak pernah menyentuhnya."'), desc: T('Leo says he has never touched key 13.', 'Leo berkata dia tidak pernah menyentuh kunci 13.') },
      { id: 'c_leo_ghost', kind: 'claim', person: 'leo', t: mm('9:41'), type: 'statement', icon: '💬', title: T('Leo: "I SAW the Lady in White! The ghost is real!"', 'Leo: "Saya NAMPAK Wanita Berbaju Putih! Hantu itu sebenar!"'), desc: T('Leo says he saw the ghost at 9:41.', 'Leo berkata dia nampak hantu itu pukul 9:41.') },
      { id: 'c_leo_family', kind: 'claim', person: 'leo', t: 0, type: 'statement', icon: '💬', title: T('Leo: "Those pearls were my great-grandmother\'s. They were STOLEN from her."', 'Leo: "Mutiara itu milik moyang saya. Ia DICURI daripadanya."'), desc: T('After seeing the letter, Leo confesses why.', 'Selepas melihat surat itu, Leo mengaku sebabnya.') },
      { id: 'c_whit_stage', kind: 'claim', person: 'whitmore', t: mm('9:42'), type: 'statement', icon: '💬', title: T('Whitmore: "I was on stage from 9:35 to 9:55."', 'Whitmore: "Saya di atas pentas dari 9:35 hingga 9:55."'), desc: T('Sixty guests saw him.', 'Enam puluh tetamu melihatnya.') },
      { id: 'c_whit_key', kind: 'claim', person: 'whitmore', t: 0, type: 'statement', icon: '💬', title: T('Whitmore: "My key never left my belt."', 'Whitmore: "Kunci saya tidak pernah meninggalkan tali pinggang."'), desc: T('He says only HIS key opens Room 13.', 'Dia berkata hanya kuncinya membuka Bilik 13.') },
      { id: 'c_whit_debt', kind: 'claim', person: 'whitmore', t: 0, type: 'statement', icon: '💬', title: T('Whitmore: "Yes, I owe the bank £120,000. But I did not take my own pearls."', 'Whitmore: "Ya, saya berhutang £120,000 kepada bank. Tetapi saya tidak mengambil mutiara sendiri."'), desc: T('He admits money trouble.', 'Dia mengaku masalah wang.') },
      { id: 'c_sato_want', kind: 'claim', person: 'sato', t: 0, type: 'statement', icon: '💬', title: T('Sato: "I offered to BUY the pearls last year. But I was on the phone to Tokyo at 9:41."', 'Sato: "Saya menawarkan untuk MEMBELI mutiara itu tahun lalu. Tetapi saya menelefon Tokyo pukul 9:41."'), desc: T('Mrs. Sato wanted the pearls but says she was in her room on a call.', 'Puan Sato mahu mutiara itu tetapi berkata dia di biliknya menelefon.') },
      { id: 'c_sato_ghost', kind: 'claim', person: 'sato', t: mm('9:41'), type: 'statement', icon: '💬', title: T('Sato: "I saw a white shape with a little light in the corridor!"', 'Sato: "Saya nampak bentuk putih dengan cahaya kecil di koridor!"'), desc: T('She saw it through her door crack.', 'Dia melihatnya melalui celah pintu.') },
      { id: 'c_okafor_buttons', kind: 'claim', person: 'okafor', t: mm('9:42'), type: 'statement', icon: '💬', title: T('Okafor: "At 9:42 I saw GOLD BUTTONS flash under a white shape near Room 13."', 'Okafor: "Pukul 9:42 saya nampak BUTANG EMAS berkilat di bawah bentuk putih dekat Bilik 13."'), desc: T('Dr. Okafor looked out of Room 11 by torchlight.', 'Dr. Okafor mengintai dari Bilik 11 dengan cahaya lampu suluh.') },
      { id: 'c_okafor_noise', kind: 'claim', person: 'okafor', t: mm('9:44'), type: 'statement', icon: '💬', title: T('Okafor: "I heard a key turn in the lock of Room 13 and a small tinkle."', 'Okafor: "Saya dengar kunci diputar pada kunci Bilik 13 dan bunyi kecil denting."'), desc: T('A key turned — so the door was opened with a KEY.', 'Kunci diputar — jadi pintu dibuka dengan KUNCI.') },
      { id: 'c_chef_kitchen', kind: 'claim', person: 'bianchi', t: mm('9:42'), type: 'statement', icon: '💬', title: T('Chef Luca: "I was in the kitchen with twelve dessert plates."', 'Chef Luca: "Saya di dapur dengan dua belas pinggan pencuci mulut."'), desc: T('He cooked the flambé dessert at 9:42.', 'Dia memasak pencuci mulut flambé pukul 9:42.') },
      { id: 'c_chef_apron', kind: 'claim', person: 'bianchi', t: 0, type: 'statement', icon: '💬', title: T('Chef Luca: "The red is just tomato sauce!"', 'Chef Luca: "Merah itu sos tomato sahaja!"'), desc: T('Chef Luca says the apron stain is dinner.', 'Chef Luca berkata kesan pada apron ialah makan malam.') }
    ],

    /* ------------------------------------------------------------------ CONTRADICTION / SUPPORT CHECKER */
    pairs: [
      { a: 'c_leo_base', b: 'generator_log', type: 'contradiction', person: 'leo',
        text: T('Leo says he switched the generator on himself at 9:47. The log says it was AUTOMATIC and the manual-switch seal is unbroken.', 'Leo berkata dia menghidupkan penjana sendiri pukul 9:47. Log berkata ia AUTOMATIK dan meterai suis manual tidak pecah.'),
        explain: T('Leo invented the basement story. If he was not in the basement, where was he at 9:40-9:47?', 'Leo mereka cerita bawah tanah itu. Jika dia tidak di bawah tanah, di mana dia pukul 9:40-9:47?') },
      { a: 'c_leo_base', b: 'c_okafor_buttons', type: 'contradiction', person: 'leo',
        text: T('Leo says he was in the basement. Dr. Okafor saw gold uniform buttons flash near Room 13 at 9:42.', 'Leo berkata dia di bawah tanah. Dr. Okafor nampak butang seragam emas berkilat dekat Bilik 13 pukul 9:42.'),
        explain: T('Someone in a uniform with gold buttons was on the third floor. Who wears them?', 'Seseorang berseragam butang emas berada di tingkat tiga. Siapa memakainya?') },
      { a: 'c_leo_button', b: 'laundry_ticket', type: 'contradiction', person: 'leo',
        text: T('Leo says he lost a button "weeks ago". The laundry ticket says his jacket had ALL 8 buttons at 4:00 pm today.', 'Leo berkata dia kehilangan butang "beberapa minggu lalu". Tiket dobi berkata jaketnya ada SEMUA 8 butang pukul 4:00 petang hari ini.'),
        explain: T('The button came off tonight, not weeks ago.', 'Butang itu tertanggal malam ini, bukan beberapa minggu lalu.') },
      { a: 'c_leo_key', b: 'key_board', type: 'contradiction', person: 'leo',
        text: T('Leo says the spare key never leaves the hook. Hook 13 is EMPTY.', 'Leo berkata kunci simpanan tidak pernah meninggalkan cangkuk. Cangkuk 13 KOSONG.'),
        explain: T('Somebody took the spare key while the desk was empty.', 'Seseorang mengambil kunci simpanan semasa meja kosong.') },
      { a: 'c_leo_key', b: 'spare_key', type: 'contradiction', person: 'leo', requires: ['locker_open'],
        text: T("The spare key and the case key were hidden in Leo's own locker.", 'Kunci simpanan dan kunci kotak disorok dalam loker Leo sendiri.'),
        explain: T('Proof: Leo had key 13.', 'Bukti: Leo ada kunci 13.') },
      { a: 'c_leo_ghost', b: 'dust_sheet', type: 'contradiction', person: 'leo', requires: ['sheet_solved'],
        text: T('Leo "saw" a ghost, but the "ghost" was a dust sheet with a maroon thread — the colour of his jacket.', 'Leo "nampak" hantu, tetapi "hantu" itu cadar habuk dengan benang merah hati — warna jaketnya.'),
        explain: T('He pretended to be scared of what he made himself.', 'Dia berpura-pura takut kepada sesuatu yang dia buat sendiri.') },
      { a: 'c_whit_key', b: 'key_board', type: 'contradiction', person: 'whitmore',
        text: T('Whitmore says only HIS key opens Room 13. But hook 13 holds a SPARE key (and it is missing).', 'Whitmore berkata hanya KUNCINYA membuka Bilik 13. Tetapi cangkuk 13 menyimpan kunci SIMPANAN (dan ia hilang).'),
        explain: T('Whitmore forgot (or did not think of) the spare key. A mistake, not a lie.', 'Whitmore terlupa (atau tidak terfikir) kunci simpanan. Kesilapan, bukan pembohongan.') },
      { a: 'c_sato_ghost', b: 'dust_sheet', type: 'support', person: 'sato', requires: ['sheet_solved'],
        text: T('Mrs. Sato saw a white shape with a small light: a person in a sheet carrying a torch.', 'Puan Sato nampak bentuk putih dengan cahaya kecil: seseorang bercadar membawa lampu suluh.') },
      { a: 'c_sato_want', b: 'switch_log', type: 'support', person: 'sato',
        text: T('The switchboard log shows Room 12 on a call to Japan from 9:38 to 9:52. Mrs. Sato has an alibi.', 'Log papan suis menunjukkan Bilik 12 menelefon Jepun dari 9:38 hingga 9:52. Puan Sato ada alibi.') },
      { a: 'c_okafor_buttons', b: 'brass_button', type: 'support', person: 'okafor',
        text: T('Dr. Okafor saw gold buttons; a gold "HB" button lay on the floor of Room 13.', 'Dr. Okafor nampak butang emas; butang "HB" emas terletak di lantai Bilik 13.') },
      { a: 'c_okafor_noise', b: 'room_door', type: 'support', person: 'okafor',
        text: T('She heard a KEY turn. The lock was not forced. It fits.', 'Dia dengar KUNCI diputar. Kunci tidak dipaksa. Ia sesuai.') },
      { a: 'c_whit_stage', b: 'stage_photo', type: 'support', person: 'whitmore',
        text: T('The 9:42 photo shows Whitmore on stage in front of sixty guests. Alibi confirmed.', 'Gambar 9:42 menunjukkan Whitmore di pentas di hadapan enam puluh tetamu. Alibi disahkan.') },
      { a: 'c_whit_debt', b: 'bank_letter', type: 'support', person: 'whitmore',
        text: T('The bank letter proves the money trouble — a motive, but he has an alibi.', 'Surat bank membuktikan masalah wang — motif, tetapi dia ada alibi.') },
      { a: 'c_chef_kitchen', b: 'order_slip', type: 'support', person: 'bianchi',
        text: T('The 9:42 flambé order is signed by the chef. He was cooking in the kitchen.', 'Pesanan flambé 9:42 ditandatangani chef. Dia memasak di dapur.') },
      { a: 'c_chef_apron', b: 'red_apron', type: 'support', person: 'bianchi',
        text: T('The stain smells of tomato. Chef Luca told the truth.', 'Kesan itu berbau tomato. Chef Luca berkata benar.') },
      { a: 'c_leo_family', b: 'family_letter', type: 'support', person: 'leo', requires: ['letter_restored'],
        text: T('The restored letter says the pearls belonged to Leo\'s great-grandmother. Now we know WHY.', 'Surat yang dipulihkan berkata mutiara itu milik moyang Leo. Sekarang kita tahu KENAPA.') }
    ],

    /* ------------------------------------------------------------------ PUZZLES */
    puzzles: {
      pz_zone: { subject: 'geography', title: T('Time zones: Tokyo vs Scotland', 'Zon waktu: Tokyo lawan Scotland'), grants: { flags: ['zone_solved'], items: ['inf_zone'] }, tokens: 0,
        intro: T('Use the world clocks. Tokyo is AHEAD of Scotland. When it is a certain time in Scotland, it is LATER in Tokyo.', 'Guna jam dunia. Tokyo LEBIH AWAL daripada Scotland. Apabila sesuatu waktu di Scotland, di Tokyo ia LEBIH LEWAT.'),
        art: 'clocks011',
        steps: [
          { type: 'choice', q: T('The clocks show noon (12:00) in Scotland and 9:00 pm in Tokyo. How many hours AHEAD is Tokyo?', 'Jam menunjukkan tengah hari (12:00) di Scotland dan 9:00 malam di Tokyo. Berapa jam Tokyo LEBIH AWAL?'),
            options: ['7 hours', '8 hours', '9 hours', '10 hours'], answer: '9 hours',
            hints: [T('Count from 12:00 up to 9:00 pm (21:00).', 'Kira dari 12:00 hingga 9:00 malam (21:00).'), T('12 + 9 = 21.', '12 + 9 = 21.')] },
          { type: 'choice', q: T("Mrs. Sato's phone is still on Tokyo time and says 6:34 AM. To get Scotland time you go BACK 9 hours. What time was it in Scotland?", 'Telefon Puan Sato masih waktu Tokyo dan menunjukkan 6:34 PAGI. Untuk waktu Scotland anda UNDUR 9 jam. Pukul berapa di Scotland?'),
            options: ['9:34 pm the evening before', '3:34 pm', '9:34 am', '3:34 am'], answer: '9:34 pm the evening before',
            hints: [T('6:34 am minus 6 hours is 12:34 am (midnight). Then 3 more hours back.', '6:34 pagi tolak 6 jam ialah 12:34 pagi (tengah malam). Kemudian undur 3 jam lagi.'), T('12:34 am minus 3 hours = 9:34 pm of the day before.', '12:34 pagi tolak 3 jam = 9:34 malam hari sebelumnya.')] },
          { type: 'choice', q: T('The blackout began at 9:40 pm. Was the necklace still in its case BEFORE the blackout?', 'Ribut bermula pukul 9:40 malam. Adakah rantai itu masih dalam kotaknya SEBELUM gelap?'),
            options: [T('Yes — the photo shows it at 9:34', 'Ya — gambar menunjukkannya pukul 9:34'), T('No — it was already gone', 'Tidak — ia sudah hilang'), T('We cannot know', 'Kita tidak tahu')], answer: 0,
            hints: [T('Is 9:34 before or after 9:40?', 'Adakah 9:34 sebelum atau selepas 9:40?')] }
        ],
        after: T('The pearls were safe at 9:34 pm. The theft happened AFTER that. Tokyo is 9 hours ahead of Scotland!', 'Mutiara selamat pukul 9:34 malam. Kecurian berlaku SELEPAS itu. Tokyo 9 jam lebih awal daripada Scotland!') },

      pz_dark: { subject: 'science', title: T('The blackout', 'Gelap gelita'), grants: { flags: ['dark_solved'], items: ['inf_dark'] }, tokens: 0,
        intro: T('Electric things stop when the power is cut. Use the clock and the generator note to find the dark window.', 'Barang elektrik berhenti apabila elektrik diputuskan. Guna jam dan nota penjana untuk mencari tempoh gelap.'),
        art: 'clock011',
        steps: [
          { type: 'choice', q: T('Why did the lobby clock stop at 9:40?', 'Kenapa jam lobi berhenti pukul 9:40?'),
            options: [T('A ghost touched it.', 'Hantu menyentuhnya.'), T('The electricity was cut, so the electric clock lost power.', 'Elektrik diputuskan, jadi jam elektrik hilang kuasa.'), T('Someone turned the hands back.', 'Seseorang memusing jarum ke belakang.')], answer: 1,
            hints: [T('An electric clock needs electricity to keep ticking.', 'Jam elektrik perlukan elektrik untuk terus berdetik.')] },
          { type: 'number', q: T('The generator started by itself at 9:47. How many MINUTES was it dark (9:40 to 9:47)?', 'Penjana hidup sendiri pukul 9:47. Berapa MINIT ia gelap (9:40 hingga 9:47)?'),
            answer: 7, options: [5, 6, 7, 8], unit: T('minutes', 'minit'),
            hints: [T('Count from 9:40 to 9:47. 47 − 40 = ?', 'Kira dari 9:40 ke 9:47. 47 − 40 = ?')] },
          { type: 'choice', q: T('A thief wants to move without being seen. Which time window fits best?', 'Pencuri mahu bergerak tanpa dilihat. Tempoh mana paling sesuai?'),
            options: ['9:35 – 9:40', '9:40 – 9:47', '9:47 – 10:05', 'Before 9:30'], answer: '9:40 – 9:47',
            hints: [T('When was everything DARK and everyone confused?', 'Bila semuanya GELAP dan semua orang keliru?')] }
        ],
        after: T('Window: 9:40 to 9:47 — seven dark minutes. The thief used the storm.', 'Tempoh: 9:40 hingga 9:47 — tujuh minit gelap. Pencuri menggunakan ribut.') },

      pz_weight: { subject: 'math', title: T('Does the trolley add up?', 'Adakah troli itu sepadan?'), grants: { flags: ['weight_solved'], items: ['inf_weight'] }, tokens: 0,
        intro: T('Add the weights on the load sheet, then compare with the scale.', 'Tambah berat pada helaian muatan, kemudian bandingkan dengan penimbang.'),
        art: 'trolley011',
        steps: [
          { type: 'number', q: T('Add the three bags on the load sheet: 12.5 + 8.3 + 10.8 = ? kg', 'Tambah tiga beg pada helaian muatan: 12.5 + 8.3 + 10.8 = ? kg'),
            answer: 31.6, options: [30.6, 31.6, 32.6, 33.6], unit: T('kg', 'kg'),
            hints: [T('12.5 + 8.3 = 20.8.', '12.5 + 8.3 = 20.8.'), T('20.8 + 10.8 = ?', '20.8 + 10.8 = ?')] },
          { type: 'number', q: T('The scale shows 34.0 kg. How many kg MORE than the load sheet?', 'Penimbang menunjukkan 34.0 kg. Berapa kg LEBIH daripada helaian muatan?'),
            answer: 2.4, options: [1.4, 2.4, 3.4, 2.0], unit: T('kg', 'kg'),
            hints: [T('34.0 − 31.6.', '34.0 − 31.6.'), T('34.0 − 31.0 = 3.0, then take away 0.6 more.', '34.0 − 31.0 = 3.0, kemudian tolak 0.6 lagi.')] },
          { type: 'choice', q: T('Something hidden in the trolley lining weighs 2.4 kg. The display case note said "pearls + stand + velvet box = 2.4 kg". What is hidden?', 'Sesuatu yang tersembunyi dalam pelapik troli berat 2.4 kg. Nota kotak pameran berkata "mutiara + pelantar + kotak baldu = 2.4 kg". Apa yang tersembunyi?'),
            options: [T('The pearls, stand and box', 'Mutiara, pelantar dan kotak'), T("A guest's coat", 'Kot tetamu'), T('Nothing — the scale is wrong', 'Tiada apa — penimbang salah')], answer: 0,
            hints: [T('Look at the weight of the missing display piece.', 'Lihat berat bahagian pameran yang hilang.')] }
        ],
        after: T('34.0 − 31.6 = 2.4 kg: the exact weight of the missing display piece. The pearls are in the trolley lining!', '34.0 − 31.6 = 2.4 kg: berat tepat bahagian pameran yang hilang. Mutiara dalam pelapik troli!') },

      pz_sheet: { subject: 'thinking', title: T('Ghost or costume?', 'Hantu atau kostum?'), grants: { flags: ['sheet_solved'], items: ['inf_sheet'] }, tokens: 0,
        intro: T('Separate what you SEE (observation) from what you THINK (inference).', 'Asingkan apa yang anda LIHAT (pemerhatian) daripada apa yang anda FIKIR (inferens).'),
        steps: [
          { type: 'classify', q: T('Sort each sentence:', 'Susun setiap ayat:'),
            statements: [
              { text: T('The sheet has a hole at head height.', 'Cadar itu ada lubang setinggi kepala.'), answer: 'observation' },
              { text: T('A maroon thread is caught on it.', 'Seutas benang merah hati tersangkut padanya.'), answer: 'observation' },
              { text: T('Someone wore this as a costume.', 'Seseorang memakai ini sebagai kostum.'), answer: 'inference' },
              { text: T('Isabella\'s ghost left it behind.', 'Hantu Isabella meninggalkannya.'), answer: 'inference' }
            ],
            hints: [T('Observation = you can see or touch it. Inference = your idea about why.', 'Pemerhatian = anda boleh nampak atau sentuh. Inferens = idea anda tentang sebabnya.')] },
          { type: 'choice', q: T('Which inference is BEST supported by the observations?', 'Inferens mana yang PALING disokong oleh pemerhatian?'),
            options: [T('A real ghost used the sheet.', 'Hantu sebenar menggunakan cadar itu.'), T('A person in a maroon jacket wore the sheet as a costume.', 'Seseorang berjaket merah hati memakai cadar sebagai kostum.'), T('The sheet fell off a shelf by itself.', 'Cadar jatuh dari rak dengan sendirinya.')],
            answer: 1, hints: [T('Ghosts do not leave wool threads, face-holes or footprints.', 'Hantu tidak meninggalkan benang bulu, lubang muka atau kesan tapak.')] }
        ],
        after: T('A person in a sheet and a maroon jacket — not a ghost. Who at the hotel wears maroon?', 'Seseorang bercadar dan berjaket merah hati — bukan hantu. Siapa di hotel yang memakai merah hati?') },

      pz_locker: { subject: 'thinking', title: T("Crack Leo's locker", 'Pecahkan loker Leo'), grants: { flags: ['locker_open'], items: ['spare_key', 'family_letter', 'inf_locker'] }, tokens: 0,
        intro: T('The sticky note says: "My code = the NEXT number in each pattern. Easy!"', 'Nota lekat berkata: "Kod saya = nombor SETERUSNYA dalam setiap corak. Mudah!"'),
        art: 'locker011',
        steps: [
          { type: 'code', q: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
            patterns: ['0, 1, 2, ?', '1, 2, 4, ?', '13, 10, 7, ?'], answer: '384',
            hints: [T('Pattern 1 goes UP by 1 each time.', 'Corak 1 bertambah 1 setiap kali.'), T('Pattern 2 DOUBLES. Pattern 3 goes DOWN by 3.', 'Corak 2 DIDARAB DUA. Corak 3 berkurang 3.'), T('The code is: 3, 8, 4.', 'Kodnya ialah: 3, 8, 4.')] }
        ],
        after: T('Click! Inside the locker: the spare key to Room 13 — and an old letter!', 'Klik! Dalam loker: kunci simpanan Bilik 13 — dan surat lama!') },

      pz_letter: { subject: 'english', title: T('Restore the old letter', 'Pulihkan surat lama'), grants: { flags: ['letter_restored'], items: ['inf_letter'] }, tokens: 0,
        intro: T('Choose the correct PAST TENSE verb for each gap. Watch the irregular verbs!', 'Pilih kata kerja KALA LAMPAU yang betul untuk setiap ruang. Perhatikan kata kerja tak sekata!'),
        steps: [
          { type: 'cloze', q: T('Fix the letter:', 'Betulkan surat:'),
            parts: ['In 1924 your great-grandmother Isabella ', { blank: ['wear', 'wore', 'worn'], answer: 'wore' }, ' the Belladonna Pearls on her wedding day. The hotel family said she ', { blank: ['steal', 'stole', 'stolen'], answer: 'stole' }, ' them and sent her away. She never ', { blank: ['see', 'seen', 'saw'], answer: 'saw' }, ' them again.'],
            hints: [T('It happened in 1924: use the PAST tense. Wear → wore.', 'Ia berlaku pada 1924: guna kala LAMPAU. Wear → wore.'), T('Steal → stole. See → saw.', 'Steal → stole. See → saw.')] }
        ],
        after: T('"Isabella wore the pearls... said she stole them... never saw them again." The pearls were once HER family\'s. Now you know the motive.', '"Isabella wore the pearls... said she stole them... never saw them again." Mutiara itu dahulu milik keluarga ISABELLA. Kini anda tahu motifnya.') }
    },

    /* ------------------------------------------------------------------ DEDUCTION QUESTIONS */
    questions: [
      { id: 'q_how', title: T('1. How did the thief get into locked Room 13?', '1. Bagaimana pencuri masuk ke Bilik 13 yang berkunci?'),
        options: [
          { id: 'ghost', text: T('The ghost walked through the wall.', 'Hantu berjalan menembusi dinding.') },
          { id: 'window', text: T('Through the window.', 'Melalui tingkap.') },
          { id: 'spare_key', text: T('With the SPARE key from the desk key board.', 'Dengan kunci SIMPANAN dari papan kunci meja.'), correct: true },
          { id: 'forced', text: T('By breaking the lock.', 'Dengan memecahkan kunci.') }
        ],
        needs: [['key_board'], ['room_door', 'c_okafor_noise'], ['glass_case']], needsFlags: [],
        hints: [T('Is the lock scratched or broken? Does hook 13 hold a key?', 'Adakah kunci bercalar atau rosak? Adakah cangkuk 13 menyimpan kunci?')] },
      { id: 'q_when', title: T('2. When were the pearls stolen?', '2. Bila mutiara dicuri?'),
        options: [
          { id: 'before', text: T('Before 9:30', 'Sebelum 9:30') },
          { id: 'pre', text: T('Between 9:34 and 9:40 (before the blackout)', 'Antara 9:34 dan 9:40 (sebelum gelap)') },
          { id: 'dark', text: T('Between 9:40 and 9:47 (during the blackout)', 'Antara 9:40 dan 9:47 (semasa gelap)'), correct: true },
          { id: 'late', text: T('After 10:00', 'Selepas 10:00') }
        ],
        needs: [['phone_photo', 'inf_zone'], ['clock_stopped', 'inf_dark'], ['generator_log']], needsFlags: ['zone_solved', 'dark_solved'],
        hints: [T('The photo is at 9:34 (UK time). The clock stopped at 9:40. The power came back at 9:47.', 'Gambar pukul 9:34 (waktu UK). Jam berhenti pukul 9:40. Kuasa kembali pukul 9:47.')] },
      { id: 'q_ghost', title: T('3. What was the "Lady in White"?', '3. Apakah "Wanita Berbaju Putih"?'),
        options: [
          { id: 'ghost', text: T("The ghost of Isabella.", 'Hantu Isabella.') },
          { id: 'okafor', text: T('Dr. Okafor in a nightgown.', 'Dr. Okafor berpakaian tidur.') },
          { id: 'sheet', text: T('A person wearing a white dust sheet.', 'Seorang manusia memakai cadar habuk putih.'), correct: true },
          { id: 'mirror', text: T('A reflection in the old mirror.', 'Bayang pada cermin lama.') }
        ],
        needs: [['dust_sheet', 'inf_sheet'], ['c_sato_ghost', 'c_okafor_buttons']], needsFlags: ['sheet_solved'],
        hints: [T('Look behind the grand piano. What colour thread is on the sheet?', 'Lihat di belakang piano agam. Apa warna benang pada cadar?')] },
      { id: 'q_who', title: T('4. Who took the Belladonna Pearls?', '4. Siapa mengambil Mutiara Belladonna?'),
        options: [
          { id: 'leo', text: T('Leo, the bellboy', 'Leo, si bellboy'), correct: true }, { id: 'whitmore', text: T('Mr. Whitmore', 'Encik Whitmore') },
          { id: 'sato', text: T('Mrs. Sato', 'Puan Sato') }, { id: 'okafor', text: T('Dr. Okafor', 'Dr. Okafor') }, { id: 'bianchi', text: T('Chef Luca', 'Chef Luca') }
        ],
        needs: [['brass_button'], ['laundry_ticket'], ['trolley', 'inf_weight']], needsFlags: ['weight_solved'],
        hints: [T('Who wears brass "HB" buttons? How many buttons did the laundry ticket count?', 'Siapa memakai butang tembaga "HB"? Berapa butang dalam tiket dobi?'), T('Check what the trolley is hiding.', 'Semak apa yang troli itu sembunyikan.')] },
      { id: 'q_lie', title: T("5. Whose story falls apart?", '5. Cerita siapa yang runtuh?'),
        options: [
          { id: 'leo_base', text: T('Leo: "I switched the generator on in the basement."', 'Leo: "Saya menghidupkan penjana di bawah tanah."'), correct: true },
          { id: 'whit_key', text: T('Whitmore: "My key never left my belt."', 'Whitmore: "Kunci saya tidak pernah meninggalkan tali pinggang."') },
          { id: 'sato_call', text: T('Sato: "I was on the phone to Tokyo."', 'Sato: "Saya menelefon Tokyo."') },
          { id: 'chef', text: T('Chef: "The red is tomato sauce."', 'Chef: "Merah itu sos tomato."') }
        ],
        needs: [['c_leo_base'], ['generator_log', 'c_okafor_buttons']], needsFlags: [],
        hints: [T('Three of these are TRUE. Check each against the logs.', 'Tiga daripadanya BENAR. Semak setiap satu dengan log.'), T('Was the generator switched on by hand?', 'Adakah penjana dihidupkan dengan tangan?')] }
    ],

    timeUp: { title: T('The police boat is here!', 'Bot polis sudah tiba!'), text: T('Blue lights flash across the loch. The inspector wants a name. Who took the pearls?', 'Lampu biru berkelip di seberang tasik. Inspektor mahukan nama. Siapa mengambil mutiara itu?') },
    conclusion: {
      who: { correct: 'leo' },
      what: { questionId: 'q_how' },
      when: { questionId: 'q_when' },
      whereQ: T('WHERE are the pearls now?', 'DI MANA mutiara itu sekarang?'),
      where: [
        { id: 'trolley', text: T('Hidden in the lining of the luggage trolley in the lobby', 'Tersembunyi dalam pelapik troli bagasi di lobi'), correct: true },
        { id: 'oven', text: T('In the kitchen oven', 'Dalam ketuhar dapur') }, { id: 'wardrobe', text: T('In the wardrobe of Room 13', 'Dalam almari Bilik 13') },
        { id: 'piano', text: T('Inside the grand piano', 'Dalam piano agam') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }
      ],
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_key', label: T('The spare key', 'Kunci simpanan'), items: ['key_board', 'spare_key', 'inf_locker', 'room_door'] },
        { id: 'g_time', label: T('The time window (9:40-9:47)', 'Tempoh masa (9:40-9:47)'), items: ['phone_photo', 'inf_zone', 'clock_stopped', 'inf_dark', 'generator_log'] },
        { id: 'g_button', label: T('The brass button', 'Butang tembaga'), items: ['brass_button', 'laundry_ticket'] },
        { id: 'g_ghost', label: T('The "ghost" was a costume', '"Hantu" ialah kostum'), items: ['dust_sheet', 'inf_sheet'] },
        { id: 'g_hide', label: T('Where the pearls are hidden', 'Tempat mutiara disorok'), items: ['trolley', 'inf_weight'] },
        { id: 'g_alibi', label: T("Leo's broken alibi", 'Alibi Leo yang runtuh'), items: ['c_leo_base', 'c_okafor_buttons'] }
      ],
      strongCoverage: 4,
      secondary: ['red_apron', 'order_slip', 'stage_photo', 'bank_letter', 'red_writing', 'switch_log'],
      secondaryNeeded: 2,
      lieFlags: ['c_leo_base', 'c_leo_button', 'c_leo_key']
    },

    endings: [
      { id: 'secret', stars: 4, title: T("Isabella's Pearls Come Home", 'Mutiara Isabella Pulang'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.has.family_letter && r.flags.leo_caught,
        text: T(
          `You solve the case — and you found the old letter in Leo's locker. Leo does not run. "They were my great-grandmother's," he says quietly. The police find the pearls in the trolley lining, safe. Mr. Whitmore reads the letter and goes pale: the hotel's own old records show the 1924 accusation was never proved. A judge will decide who owns the pearls — properly, in court, not in the dark. Leo must answer for the theft, but now the truth about Isabella is out. The "ghost" of Room 13 was a bride's family asking to be heard. Case closed!`,
          `Anda menyelesaikan kes ini — dan anda menjumpai surat lama dalam loker Leo. Leo tidak lari. "Ia milik moyang saya," katanya perlahan. Polis menjumpai mutiara dalam pelapik troli, selamat. Encik Whitmore membaca surat itu dan menjadi pucat: rekod lama hotel sendiri menunjukkan tuduhan 1924 tidak pernah dibuktikan. Seorang hakim akan memutuskan siapa pemilik mutiara — dengan betul, di mahkamah, bukan dalam gelap. Leo mesti bertanggungjawab atas kecurian, tetapi kini kebenaran tentang Isabella telah terbongkar. "Hantu" Bilik 13 ialah keluarga pengantin yang meminta didengari. Kes selesai!`) },
      { id: 'perfect', stars: 3, title: T('Case Closed!', 'Kes Selesai!'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec >= 2,
        text: T(
          `Excellent! The friendly helper who guided you was the thief. You proved it with the spare key, the torn button, the 2.4 kg of extra weight in the trolley and Leo's broken alibi. The police open the trolley lining: the Belladonna Pearls are safe. Whitmore, Sato, Okafor and Chef Luca are cleared. Remember: a nice person can still do a wrong thing — only evidence tells the truth.`,
          `Hebat! Pembantu mesra yang memandu anda ialah pencurinya. Anda membuktikannya dengan kunci simpanan, butang koyak, berat tambahan 2.4 kg dalam troli dan alibi Leo yang runtuh. Polis membuka pelapik troli: Mutiara Belladonna selamat. Whitmore, Sato, Okafor dan Chef Luca dibersihkan namanya. Ingat: orang yang baik masih boleh melakukan perkara salah — hanya bukti memberitahu kebenaran.`) },
      { id: 'missed', stars: 2, title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec < 2,
        text: T(
          `Right answer, strong proof! But you missed side clues: the stage photo, the order slips, the bank letter or the red words on the mirror. Because of that, Mr. Whitmore and Chef Luca are still under suspicion. Next time, look in every room.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: gambar pentas, slip pesanan, surat bank atau tulisan merah pada cermin. Kerana itu, Encik Whitmore dan Chef Luca masih disyaki. Lain kali, periksa setiap bilik.`) },
      { id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'),
        when: (r) => r.ok.who,
        text: T(`You named the right person — but your proof was not strong enough. Go back, collect more clues (the time zones, the generator log, the trolley), then try again before 10:45.`,
                `Anda menyebut orang yang betul — tetapi bukti anda tidak cukup kukuh. Kembali, kumpul lebih banyak petunjuk (zon waktu, log penjana, troli), kemudian cuba lagi sebelum 10:45.`) },
      { id: 'wrong', stars: 0, title: T('The wrong answer!', 'Jawapan yang salah!'),
        when: () => true,
        text: T(`Oh no — that was not right. Thunder and ghost stories made you look at the wrong person. Check who wears brass buttons, whose alibi has a log or a photo, and what the trolley weighs.`,
                `Alamak — itu tidak betul. Guruh dan cerita hantu membuat anda memandang orang yang salah. Semak siapa memakai butang tembaga, alibi siapa ada log atau gambar, dan berapa berat troli itu.`) }
    ],
    wrongWho: {
      whitmore: T('Whitmore is in deep money trouble — but the 9:42 photo shows him on stage in front of sixty guests, and a thief needed the dark to reach Room 13.', 'Whitmore ada masalah wang besar — tetapi gambar 9:42 menunjukkan dia di pentas di hadapan enam puluh tetamu, dan pencuri memerlukan kegelapan untuk sampai ke Bilik 13.'),
      sato: T('Mrs. Sato wanted the pearls, but the switchboard log shows she was on an international call from 9:38 to 9:52, right through the blackout.', 'Puan Sato mahu mutiara itu, tetapi log papan suis menunjukkan dia dalam panggilan antarabangsa dari 9:38 hingga 9:52, sepanjang gelap.'),
      okafor: T('Dr. Okafor lives next to Room 13, but she is the witness who SAW the gold buttons and HEARD the key turn. A thief does not call attention to the crime.', 'Dr. Okafor tinggal bersebelahan Bilik 13, tetapi dialah saksi yang NAMPAK butang emas dan DENGAR kunci diputar. Pencuri tidak menarik perhatian kepada jenayah.'),
      bianchi: T("Chef Luca's apron is red with TOMATO sauce, and the kitchen printer shows him signing the 9:42 dessert order, a floor below Room 13.", 'Apron Chef Luca merah dengan sos TOMATO, dan pencetak dapur menunjukkan dia menandatangani pesanan pencuci mulut 9:42, satu tingkat di bawah Bilik 13.')
    },

    /* ------------------------------------------------------------------ INTERVIEWS */
    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      leo: {
        greeting: T(`Detective! I am Leo, the bellboy. I know every corner of Hotel Belladonna. I will help you find the pearls!`, `Detektif! Saya Leo, si bellboy. Saya kenal setiap sudut Hotel Belladonna. Saya akan bantu anda mencari mutiara itu!`),
        topics: [
          { id: 'help', label: T('Can you help me?', 'Boleh awak bantu saya?'),
            lines: [T('Of course! Talk to Dr. Okafor and Mrs. Sato in Room 13. Check the kitchen too. And remember: this hotel is haunted. The Lady in White did this, I am sure.', 'Tentu! Bercakap dengan Dr. Okafor dan Puan Sato di Bilik 13. Semak dapur juga. Dan ingat: hotel ini berhantu. Wanita Berbaju Putih yang buat, saya pasti.')] },
          { id: 'base', label: T('Where were you at 9:40?', 'Di mana awak pukul 9:40?'),
            lines: [T('In the basement! The storm cut the power, so I ran to fix it. At 9:47 I switched the generator on myself. I was the hero of the night!', 'Di bawah tanah! Ribut memutuskan elektrik, jadi saya berlari membetulkannya. Pukul 9:47 saya menghidupkan penjana sendiri. Saya wira malam ini!')], claims: ['c_leo_base'] },
          { id: 'ghost', label: T('Did you see the Lady in White?', 'Adakah awak nampak Wanita Berbaju Putih?'),
            lines: [T('YES! A white shape, floating, with a tiny light! I nearly dropped my torch. She is real!', 'YA! Bentuk putih, terapung, dengan cahaya kecil! Saya hampir menjatuhkan lampu suluh saya. Dia sebenar!')], claims: ['c_leo_ghost'] },
          { id: 'key', label: T('Who can take the spare key to Room 13?', 'Siapa boleh ambil kunci simpanan Bilik 13?'),
            lines: [T('Nobody! It never leaves hook 13 on the desk board. I never touched it, not once.', 'Tiada siapa! Ia tidak pernah meninggalkan cangkuk 13 pada papan meja. Saya tidak pernah menyentuhnya, sekali pun.')], claims: ['c_leo_key'] },
          { id: 'legend', label: T('Tell me the legend.', 'Ceritakan legenda itu.'),
            lines: [T('Isabella married in 1924 and vanished from Room 13 on her wedding night. They say she walks the halls when the lights fail, looking for her pearls.', 'Isabella berkahwin pada 1924 dan hilang dari Bilik 13 pada malam perkahwinannya. Kata orang dia berjalan di lorong apabila lampu padam, mencari mutiaranya.')] },
          { id: 'confess', label: T('Leo... tell me the truth.', 'Leo... beritahu saya kebenaran.'), after: 'leo_confess',
            lines: [T('...The pearls were never the hotel\'s. They were my great-grandmother\'s. I only wanted them HOME. I am sorry I lied to you, Detective.', '...Mutiara itu tidak pernah milik hotel. Ia milik moyang saya. Saya cuma mahu ia PULANG. Maaf saya berbohong kepada awak, Detektif.')] }
        ],
        present: {
          brass_button: { claims: ['c_leo_button'], lines: [T('A button? Oh, I lost one off my jacket weeks ago. It could be from anywhere!', 'Butang? Oh, saya kehilangan satu pada jaket saya beberapa minggu lalu. Ia boleh dari mana-mana!')] },
          laundry_ticket: { lines: [T('Eight buttons... at four o\'clock... I... must have mixed up the days. It was a busy week!', 'Lapan butang... pukul empat... Saya... mesti tersilap hari. Minggu ini sibuk!')] },
          key_board: { lines: [T('The hook is empty?! Then... then someone sneaked in during the blackout. Not me!', 'Cangkuk kosong?! Kalau begitu... seseorang menyelinap semasa gelap. Bukan saya!')] },
          generator_log: { lines: [T('Automatic? I... I was sure I felt a switch. Probably the lights were flickering and I got confused.', 'Automatik? Saya... saya pasti saya rasa ada suis. Mungkin lampu berkelip dan saya keliru.')] },
          dust_sheet: { lines: [T('A sheet?! So the ghost left it behind! How spooky!', 'Cadar?! Jadi hantu itu meninggalkannya! Seramnya!')] },
          trolley: { lines: [T('My trolley is heavy because of old wheels and a stack of wet towels. Please do not cut it open!', 'Troli saya berat kerana roda lama dan timbunan tuala basah. Tolong jangan potong ia!')] },
          inf_weight: { lines: [T('Two kilos... extra? Wet towels weigh a lot! That is all!', 'Dua kilo... lebih? Tuala basah berat! Itu sahaja!')] },
          spare_key: { flags: ['leo_caught'], unlock: 'leo_confess', lines: [T('...That is the spare key. From my own locker. How... how did you open it?', '...Itu kunci simpanan. Dari loker saya sendiri. Bagaimana... bagaimana awak membukanya?')] },
          family_letter: { flags: ['leo_caught'], unlock: 'leo_confess', claims: ['c_leo_family'], lines: [T('That letter... Mum gave it to me before she passed. Those pearls were Isabella\'s. The hotel family called her a thief and took them. I just wanted them back!', 'Surat itu... Mak beri kepada saya sebelum dia meninggal. Mutiara itu milik Isabella. Keluarga hotel memanggilnya pencuri dan mengambilnya. Saya cuma mahu ia kembali!')] },
          red_writing: { lines: [T('"THEY ARE MINE"... the ghost is angry! Let us all stay away from Room 13!', '"THEY ARE MINE"... hantu itu marah! Mari semua jauhi Bilik 13!')] }
        }
      },
      whitmore: {
        greeting: T(`My pearls! My beautiful pearls! This is a disaster on the night of our 100th birthday!`, `Mutiara saya! Mutiara saya yang cantik! Ini bencana pada malam hari jadi ke-100 kami!`),
        topics: [
          { id: 'stage', label: T('Where were you at 9:42?', 'Di mana anda pukul 9:42?'),
            lines: [T('On stage, giving my speech. Sixty guests were listening. I never left until 9:55.', 'Di atas pentas, memberi ucapan. Enam puluh tetamu mendengar. Saya tidak berganjak sehingga 9:55.')], claims: ['c_whit_stage'] },
          { id: 'key', label: T('Who has keys to Room 13?', 'Siapa ada kunci Bilik 13?'),
            lines: [T('Only ME. I locked it at 9:35 and my key stayed on my belt. Nobody else has a key!', 'Hanya SAYA. Saya mengunci pada 9:35 dan kunci saya kekal pada tali pinggang. Tiada orang lain ada kunci!')], claims: ['c_whit_key'] },
          { id: 'pearls', label: T('Why are the pearls so special?', 'Kenapa mutiara itu begitu istimewa?'),
            lines: [T('They were made for the bride Isabella in 1924. Our hotel was built around that wedding. They are our treasure.', 'Ia dibuat untuk pengantin Isabella pada 1924. Hotel kami dibina sekitar perkahwinan itu. Ia harta kami.')] },
          { id: 'money', label: T('Do you have money problems?', 'Adakah anda ada masalah wang?'), after: 'whit_money',
            lines: [T('...Yes. I owe the bank £120,000. But why would I steal my own pearls?', '...Ya. Saya berhutang £120,000 kepada bank. Tetapi kenapa saya mencuri mutiara sendiri?')], claims: ['c_whit_debt'] }
        ],
        present: {
          bank_letter: { flags: ['whit_admitted'], unlock: 'whit_money', claims: ['c_whit_debt'], lines: [T('...You found the letter. Yes, I am in trouble. But I was on STAGE. Ask the photographer!', '...Anda jumpa surat itu. Ya, saya dalam kesulitan. Tetapi saya di PENTAS. Tanya jurugambar!')] },
          stage_photo: { lines: [T('There! 9:42, my speech. You see? I am innocent.', 'Itu dia! 9:42, ucapan saya. Nampak? Saya tidak bersalah.')] },
          key_board: { lines: [T('A SPARE key? On hook 13? I... forgot we even kept one. Oh no.', 'Kunci SIMPANAN? Pada cangkuk 13? Saya... terlupa kami ada menyimpannya. Alamak.')] },
          brass_button: { lines: [T('That is a bellboy\'s button. Only my bellboys and doormen have them.', 'Itu butang bellboy. Hanya bellboy dan pengawal pintu saya yang memakainya.')] },
          family_letter: { lines: [T('Isabella\'s letter?! My grandfather never told me... I must read the old hotel books tonight.', 'Surat Isabella?! Datuk saya tidak pernah beritahu... Saya mesti baca buku lama hotel malam ini.')] }
        }
      },
      sato: {
        greeting: T(`Oh my goodness. A ghost! I saw it with my own eyes!`, `Aduhai. Hantu! Saya nampak dengan mata sendiri!`),
        topics: [
          { id: 'phone', label: T('Can I see your photos?', 'Boleh saya lihat gambar awak?'), gives: ['phone_photo'],
            lines: [T('Of course. I photographed the pearls through the open door before the party. Here, take it. My phone is still on Tokyo time, I forgot to change it!', 'Tentu. Saya bergambar mutiara itu melalui pintu terbuka sebelum majlis. Ini, ambil. Telefon saya masih waktu Tokyo, saya terlupa menukarnya!')] },
          { id: 'want', label: T('Did you want the pearls?', 'Adakah awak mahu mutiara itu?'),
            lines: [T('I offered to BUY them last year. But at 9:41 I was on the phone to my son in Tokyo, in my room.', 'Saya menawarkan untuk MEMBELINYA tahun lalu. Tetapi pukul 9:41 saya menelefon anak saya di Tokyo, di bilik saya.')], claims: ['c_sato_want'] },
          { id: 'ghost', label: T('What did you see?', 'Apa yang awak nampak?'),
            lines: [T('Through the crack of my door: a white shape with a tiny light, gliding down the corridor. I screamed and locked the door!', 'Melalui celah pintu saya: bentuk putih dengan cahaya kecil, meluncur di koridor. Saya menjerit dan mengunci pintu!')], claims: ['c_sato_ghost'] }
        ],
        present: {
          switch_log: { lines: [T('Yes, the phone call: 9:38 to 9:52. Fourteen minutes with my son.', 'Ya, panggilan telefon: 9:38 hingga 9:52. Empat belas minit dengan anak saya.')] },
          dust_sheet: { lines: [T('A SHEET?! I was frightened by a bedsheet! How embarrassing.', 'CADAR?! Saya ketakutan oleh cadar! Memalukan.')] },
          phone_photo: { lines: [T('Yes, that is my photo of the pearls. They were perfect.', 'Ya, itu gambar mutiara saya. Ia sempurna.')] }
        }
      },
      okafor: {
        greeting: T(`Detective, I am a doctor. I notice things. Ask me what I saw.`, `Detektif, saya doktor. Saya perasan perkara. Tanya apa yang saya nampak.`),
        topics: [
          { id: 'saw', label: T('What did you see at 9:42?', 'Apa yang awak nampak pukul 9:42?'),
            lines: [T('I opened my door by torchlight. A white shape stood near Room 13, and under the sheet GOLD BUTTONS flashed in my light. Four, I think.', 'Saya membuka pintu dengan cahaya lampu suluh. Bentuk putih berdiri dekat Bilik 13, dan di bawah cadar BUTANG EMAS berkilat dalam cahaya saya. Empat, rasanya.')], claims: ['c_okafor_buttons'] },
          { id: 'noise', label: T('Did you hear anything?', 'Adakah awak dengar sesuatu?'),
            lines: [T('At about 9:44 I heard a KEY turn in the lock of Room 13 and a tiny tinkle, like a small key on a ring.', 'Kira-kira pukul 9:44 saya dengar KUNCI diputar pada kunci Bilik 13 dan denting kecil, seperti kunci kecil pada gelang.')], claims: ['c_okafor_noise'] },
          { id: 'room', label: T('Why are you in Room 13 now?', 'Kenapa awak di Bilik 13 sekarang?'),
            lines: [T('I came to see what happened. As a doctor I always check a scene.', 'Saya datang melihat apa berlaku. Sebagai doktor saya sentiasa menyemak tempat kejadian.')] }
        ],
        present: {
          brass_button: { lines: [T('Gold! That is exactly what I saw flash under the sheet.', 'Emas! Itulah yang saya nampak berkilat di bawah cadar.')] },
          room_door: { lines: [T('Not forced... yes, that matches the key sound I heard.', 'Tidak dipaksa... ya, itu sepadan dengan bunyi kunci yang saya dengar.')] },
          red_writing: { lines: [T('Waxy. Someone used a crayon. A ghost would not need a crayon.', 'Berlilin. Seseorang guna krayon. Hantu tidak perlukan krayon.')] }
        }
      },
      bianchi: {
        greeting: T(`Mamma mia! The gala is ruined and my dessert is getting cold!`, `Mamma mia! Gala ini musnah dan pencuci mulut saya makin sejuk!`),
        topics: [
          { id: 'where', label: T('Where were you at 9:42?', 'Di mana anda pukul 9:42?'),
            lines: [T('Here, in my kitchen, flaming twelve desserts. The printer even printed my signature time!', 'Di sini, dalam dapur saya, menyalakan dua belas pencuci mulut. Pencetak malah mencetak masa tandatangan saya!')], claims: ['c_chef_kitchen'] },
          { id: 'apron', label: T('What is the red stain on your apron?', 'Apakah kesan merah pada apron anda?'),
            lines: [T('Tomato sauce! Not wax. Not paint. Taste it if you like!', 'Sos tomato! Bukan lilin. Bukan cat. Rasalah kalau mahu!')], claims: ['c_chef_apron'] },
          { id: 'leo', label: T('Do you know the bellboy?', 'Adakah anda kenal bellboy itu?'),
            lines: [T('Leo? A sweet boy. Always helping. He asks me many questions about the old hotel records, though.', 'Leo? Budak yang baik. Sentiasa membantu. Dia banyak bertanya tentang rekod lama hotel, walaupun.')] }
        ],
        present: {
          order_slip: { lines: [T('Yes! 9:42, twelve flambé desserts, signed Luca.', 'Ya! 9:42, dua belas pencuci mulut flambé, tandatangan Luca.')] },
          red_apron: { lines: [T('My apron! Tomato, I told you!', 'Apron saya! Tomato, saya dah kata!')] },
          red_writing: { lines: [T('That is not my sauce. The sauce is wet and smells of basil!', 'Itu bukan sos saya. Sos itu basah dan berbau selasih!')] }
        }
      }
    },

    /* ------------------------------------------------------------------ SPOOKY MOMENTS (scare level 1 = Low, 2 = Medium) */
    horror: {
      zones: [
        { id: 'lb_piano', room: 'LB', once: true, minScare: 1, delay: 5, fx: ['sfx:bell3', 'flicker:LB:1.5'], text: T('🎹 The grand piano plays three slow notes... nobody is touching it.', '🎹 Piano agam memainkan tiga nota perlahan... tiada siapa menyentuhnya.') },
        { id: 'lb_whisper', room: 'LB', once: true, minScare: 2, delay: 18, fx: ['sfx:whisper'], text: T('🗣️ A whisper from the stairs: "Isabella..."', '🗣️ Bisikan dari tangga: "Isabella..."') },
        { id: 'gc_flicker', room: 'GC', once: true, minScare: 1, delay: 1.2, fx: ['flicker:GC:2.5', 'sfx:thunder'], text: T('⚡ Thunder! The corridor lights flicker.', '⚡ Guruh! Lampu koridor berkelip.') },
        { id: 'gc_steps', room: 'GC', once: true, minScare: 2, delay: 5, fx: ['sfx:steps_far', 'shake:0.3'], text: T('👣 Slow footsteps behind you... but the corridor is empty.', '👣 Langkah perlahan di belakang anda... tetapi koridor kosong.') },
        { id: 'ba_thunder', room: 'BA', once: true, minScare: 1, delay: 2, fx: ['sfx:thunder', 'blackout:1.6'], text: T('🌩️ A thunderclap! The ballroom goes dark for a moment.', '🌩️ Guruh berdentum! Dewan gelap seketika.') },
        { id: 'ba_voice', room: 'BA', once: true, minScare: 2, delay: 8, fx: ['sfx:voice'], text: T('🎶 Far away, a woman hums a wedding song...', '🎶 Jauh, seorang wanita bersenandung lagu perkahwinan...') },
        { id: 'ki_drip', room: 'KI', once: true, minScare: 1, delay: 3, fx: ['sfx:drip'], text: T('💧 Drip... drip... drip... in the dark kitchen.', '💧 Titik... titik... titik... dalam dapur gelap.') },
        { id: 'ki_slam', room: 'KI', once: true, minScare: 2, delay: 7, fx: ['sfx:slam', 'shake:0.6'], text: T('🚪 A cupboard door SLAMS shut!', '🚪 Pintu almari DIHEMPAS!') },
        { id: 'r13_scratch', room: 'R13', once: true, minScare: 1, delay: 1.5, fx: ['sfx:scratch', 'flicker:R13:1.8'], text: T('✍️ Something scratches on the mirror glass...', '✍️ Sesuatu menggaru kaca cermin...') },
        { id: 'r13_glow', room: 'R13', once: true, minScare: 2, delay: 6, fx: ['flash:red', 'sfx:sting', 'shake:0.7', 'music:tense:9'], text: T('😱 The red words seem to GLOW for a second!', '😱 Tulisan merah itu seperti BERSINAR sesaat!') }
      ],
      figures: [
        { name: 'figure1', room: 'GC', minScare: 2, revealDistance: 3.4, flickerRoom: 'GC', reveal: T('It is only a white curtain flapping in the draft from a broken window! (A false alarm.)', 'Ia hanya langsir putih berkibar dalam angin dari tingkap pecah! (Penggera palsu.)') },
        { name: 'figure2', room: 'R13', minScare: 2, revealDistance: 3.0, flickerRoom: 'R13', sfx: 'sting', vanish: true, vanishAfter: 1.1, reveal: T('A pale bride stands by the wardrobe... it is only your own reflection in the old mirror!', 'Pengantin pucat berdiri di tepi almari... ia hanya bayangan anda sendiri pada cermin lama!') }
      ]
    },

    /* ------------------------------------------------------------------ EXIT TICKET */
    exitTicket: [
      { subject: 'geography', q: T('It is 3:00 pm in Scotland. Tokyo is 9 hours ahead. What time is it in Tokyo?', 'Pukul 3:00 petang di Scotland. Tokyo 9 jam lebih awal. Pukul berapa di Tokyo?'),
        options: ['12:00 am (midnight)', '6:00 am', '9:00 pm', '6:00 pm'], answer: 0, why: T('3:00 pm + 9 hours = 12:00 am (midnight).', '3:00 petang + 9 jam = 12:00 pagi (tengah malam).') },
      { subject: 'thinking', q: T('Leo was friendly and helpful — but he was the thief. What does this teach us?', 'Leo mesra dan membantu — tetapi dia pencurinya. Apakah pengajarannya?'),
        options: [T('Nice people never do wrong.', 'Orang baik tidak pernah buat salah.'), T('Check the evidence, not how nice someone seems.', 'Semak bukti, bukan betapa baiknya seseorang kelihatan.'), T('Always blame the quietest person.', 'Sentiasa salahkan orang yang paling pendiam.')],
        answer: 1, why: T('Feelings can fool us. Evidence tells the truth.', 'Perasaan boleh memperdaya kita. Bukti memberitahu kebenaran.') },
      { subject: 'english', q: T('Which sentence is correct?', 'Ayat mana yang betul?'),
        options: [T('Yesterday the thief took the key.', 'Yesterday the thief took the key.'), T('Yesterday the thief take the key.', 'Yesterday the thief take the key.'), T('Yesterday the thief taken the key.', 'Yesterday the thief taken the key.')], answer: 0,
        why: T('"Yesterday" is the past, and take → took.', '"Yesterday" ialah masa lampau, dan take → took.') }
    ],

    /* ------------------------------------------------------------------ 3D WORLD (built from this data) */
    world(W) {
      const H = 3.0, WALL = 0x5d4b4f, WALL2 = 0x4f4348;
      W.sky(0x05060c); W.fog(5, 26); W.spawn(this.spawn.x, this.spawn.z, this.spawn.yaw);
      W.mood({ amb: 0.15, hemi: 0.12, ambLow: 0.55, hemiLow: 0.32 });

      /* ---- rooms (LB lobby, GC grand corridor, BA ballroom, KI kitchen, R13 room 13) ---- */
      W.room('LB', -9, -4, -1, 4, T('Lobby', 'Lobi'), true, 0x4a3a30, 0x201a1a);
      W.room('GC', -1, -1, 8, 1, T('Grand corridor', 'Koridor utama'), true, 0x3d2f35, 0x201a1a, 2.8);
      W.room('BA', 1, -8, 7, -1, T('Ballroom', 'Dewan tari'), true, 0x4f3a30, 0x201a1a);
      W.room('KI', 1, 1, 7, 8, T('Kitchen', 'Dapur'), true, 0x4a4f52, 0x1a1c1e);
      W.room('R13', 8, -3, 15, 3, T('Room 13', 'Bilik 13'), true, 0x3a2f44, 0x1d1824);

      /* ---- walls ---- */
      W.wallZ(-4, -9, -1, [], H, WALL); W.wallZ(4, -9, -1, [], H, WALL); W.wallX(-9, -4, 4, [], H, WALL); W.wallX(-1, -4, 4, [[-1, 1]], H, WALL);
      W.wallZ(-1, -1, 8, [[3, 4.2]], 2.8, WALL2); W.wallZ(1, -1, 8, [[3, 4.2]], 2.8, WALL2);
      W.wallZ(-8, 1, 7, [], H, WALL); W.wallX(1, -8, -1, [], H, WALL); W.wallX(7, -8, -1, [], H, WALL);
      W.wallZ(8, 1, 7, [], H, WALL); W.wallX(1, 1, 8, [], H, WALL); W.wallX(7, 1, 8, [], H, WALL);
      W.wallX(8, -3, 3, [[-1, 1]], H, 0x4a3a52); W.wallZ(-3, 8, 15, [], H, 0x4a3a52); W.wallZ(3, 8, 15, [], H, 0x4a3a52); W.wallX(15, -3, 3, [], H, 0x4a3a52);

      /* ---- lights: candlelight-warm and dim. Point lights are switched off in Low graphics mode. ---- */
      W.light('LB', -4.5, 2.8, 0, 0xffc27a, 0.5, 14); W.light('GC', 3.5, 2.4, 0, 0xffc27a, 0.3, 9);
      W.light('BA', 4, 2.6, -4, 0x9fb0ff, 0.45, 10); W.light('KI', 4, 2.6, 4.5, 0xffd9a0, 0.45, 10); W.light('R13', 12, 2.6, 0, 0xc9a8ff, 0.5, 11);

      /* ================= LOBBY ================= */
      W.box(-8.88, 0, 2.3, 0.12, 2.4, 1.6, 0x3a2418, { collide: false });                          // grand front doors
      W.box(-4.2, 0, -3.3, 3.4, 0.9, 0.8, 0x5a3a28);                                               // front desk
      W.box(-4.2, 1.0, -3.88, 3.0, 1.1, 0.08, 0x2f2218, { collide: false });                       // key board panel
      [-5.2, -4.6, -4.0, -3.4, -2.8].forEach((x) => W.box(x, 1.4, -3.8, 0.05, 0.1, 0.05, 0xc9a24a, { collide: false }));   // keys on hooks
      W.interact({ id: 'key_board', x: -4.2, y: 1.5, z: -3.7, r: 0.8, label: T('Key board behind the desk', 'Papan kunci di belakang meja'), item: 'key_board' });
      W.box(-3.0, 0.9, -3.2, 0.4, 0.05, 0.3, 0xe8e0c8, { collide: false });
      W.interact({ id: 'switch_log', x: -3.0, y: 1.0, z: -3.2, r: 0.3, label: T('Switchboard log', 'Log papan suis'), item: 'switch_log' });
      W.box(-5.4, 0.9, -3.2, 0.4, 0.05, 0.3, 0xe0d6b8, { collide: false });
      W.interact({ id: 'laundry_ticket', x: -5.4, y: 1.0, z: -3.2, r: 0.3, label: T('Paper in the desk drawer', 'Kertas dalam laci meja'), item: 'laundry_ticket' });
      W.cyl(-7.6, 1.6, -3.9, 0.45, 0.1, 0xf4efe2, { collide: false });                              // world clocks (plate)
      W.interact({ id: 'world_clocks', x: -7.6, y: 1.7, z: -3.75, r: 0.9, label: T('World clocks', 'Jam dunia'), item: 'world_clocks' });
      W.cyl(-6.2, 2.0, -3.9, 0.4, 0.1, 0xe8e0cf, { collide: false });                                // the stopped lobby clock
      W.interact({ id: 'clock_stopped', x: -6.2, y: 2.1, z: -3.75, r: 0.9, label: T('Lobby clock (stopped)', 'Jam lobi (berhenti)'), item: 'clock_stopped' });
      W.box(-2.6, 0.9, 3.82, 0.9, 1.0, 0.16, 0x666a70, { collide: false });                          // fuse board
      W.interact({ id: 'generator_log', x: -2.6, y: 1.4, z: 3.62, r: 0.6, label: T('Generator log', 'Log penjana'), item: 'generator_log' });
      W.box(-6.5, 0, 2.8, 2.0, 1.0, 1.0, 0x1c1410);                                                // grand piano
      W.box(-7.7, 0.02, 3.6, 0.9, 0.5, 0.7, 0xe9e6f0, { collide: false });                         // sheet stuffed behind the piano
      W.interact({ id: 'dust_sheet', x: -7.7, y: 0.4, z: 3.5, r: 0.55, label: T('Something white behind the piano', 'Sesuatu yang putih di belakang piano'), item: 'dust_sheet' });
      W.box(-3.4, 0.0, 2.0, 0.9, 0.2, 0.7, 0x3a2a1a); W.box(-3.4, 0.2, 2.0, 0.8, 0.9, 0.6, 0x2a4a6a);  // luggage trolley with bags
      W.cyl(-3.0, 0.05, 2.5, 0.12, 0.1, 0x222222, { collide: false });
      W.interact({ id: 'trolley', x: -3.4, y: 0.8, z: 2.0, r: 0.8, label: T('Luggage trolley', 'Troli bagasi'), item: 'trolley' });
      W.box(-8.7, 0, -3.0, 0.4, 1.9, 0.7, 0x6a6e72);                                               // staff locker
      W.interact({ id: 'locker', x: -8.45, y: 1.3, z: -3.0, r: 0.7, label: T('Staff locker no. 7', 'Loker kakitangan no. 7'), item: 'locker' });
      W.writing(-8.86, 1.9, 0.2, Math.PI / 2, T('HOTEL BELLADONNA · 100 YEARS', 'HOTEL BELLADONNA · 100 TAHUN'), '#c9a24a', 2.4, 0.5);

      /* ================= GRAND CORRIDOR ================= */
      W.writing(2.6, 1.6, -0.88, 0, T('SHE WALKS|WHEN THE LIGHTS FAIL', 'DIA BERJALAN|APABILA LAMPU PADAM'), '#a8863a', 2.0, 0.7);
      W.box(6.8, 0, 0.7, 0.06, 1.7, 0.06, 0x3a2a1a);
      W.box(6.8, 0.2, 0.7, 0.5, 1.6, 0.2, 0xe8e8f4, { collide: false, name: 'figure1' }); W.ball(6.8, 1.9, 0.7, 0.14, 0xf0f0fa, { name: 'figure1' });
      W.interact({ id: 'curtain', x: 6.8, y: 1.0, z: 0.7, r: 0.6, label: T('White curtain', 'Langsir putih'), text: T('A white curtain by a cracked window, flapping in the storm draft. In the dark it can look like a person!', 'Langsir putih dekat tingkap retak, berkibar dalam angin ribut. Dalam gelap ia boleh kelihatan seperti orang!') });

      /* ================= BALLROOM ================= */
      W.box(4, 0, -7.2, 5.0, 0.4, 1.4, 0x3a2a1a);                                                  // stage
      W.box(4, 0.4, -7.0, 0.5, 1.1, 0.4, 0x2a1a10);                                                // podium
      W.box(2.2, 0.4, -7.2, 0.6, 0.02, 0.4, 0x222a38, { collide: false });
      W.interact({ id: 'stage_photo', x: 2.2, y: 0.6, z: -7.2, r: 0.5, label: T("Photographer's screen", 'Skrin jurugambar'), item: 'stage_photo' });
      W.box(5.8, 0.4, -7.4, 0.5, 0.05, 0.4, 0xe8e0c8, { collide: false });
      W.interact({ id: 'bank_letter', x: 5.8, y: 0.55, z: -7.4, r: 0.4, label: T("Whitmore's papers", 'Kertas Whitmore'), item: 'bank_letter' });
      W.writing(4, 2.2, -7.86, 0, T('100 YEARS OF BELLADONNA', '100 TAHUN BELLADONNA'), '#d4b04a', 4.2, 0.8);
      [[2.4, -3.8], [4.2, -3.8], [6.0, -3.8], [2.4, -2.2], [6.0, -2.2]].forEach(([x, z]) => W.cyl(x, 0, z, 0.55, 0.75, 0xe8e4dc));   // round gala tables
      W.interact({ id: 'gala_tables', x: 4.2, y: 0.9, z: -3.8, r: 0.9, label: T('Gala tables', 'Meja gala'), text: T('Round tables with white cloths and half-eaten soup. The guests ran out when the lights died.', 'Meja bulat dengan alas putih dan sup separuh dimakan. Tetamu lari keluar apabila lampu padam.') });

      /* ================= KITCHEN ================= */
      W.box(2.2, 0, 3.0, 1.0, 0.9, 3.2, 0x7a7e82);                                                 // counter + stove
      W.box(2.1, 1.1, 2.4, 0.4, 0.4, 0.4, 0xb0231d, { collide: false });                           // red sauce pot
      W.box(1.12, 1.4, 5.5, 0.08, 0.8, 0.5, 0xf0f0f0, { collide: false });                         // apron
      W.interact({ id: 'red_apron', x: 1.25, y: 1.4, z: 5.5, r: 0.5, label: T('Apron on the hook', 'Apron pada cangkuk'), item: 'red_apron' });
      W.box(6.4, 0, 6.0, 0.9, 0.95, 0.8, 0x5a5e62);
      W.box(6.4, 0.95, 6.0, 0.4, 0.05, 0.3, 0xe8e0c8, { collide: false });
      W.interact({ id: 'order_slip', x: 6.4, y: 1.05, z: 6.0, r: 0.4, label: T('Order printer', 'Pencetak pesanan'), item: 'order_slip' });
      W.box(4.5, 0, 4.0, 1.6, 0.9, 1.0, 0x8a8e92);
      W.interact({ id: 'kitchen_note', x: 4.5, y: 1.0, z: 4.0, r: 0.8, label: T('Big work table', 'Meja kerja besar'), text: T('Twelve dessert plates with burnt sugar and a half-used lighter. The kitchen is warm and smells of tomato and basil.', 'Dua belas pinggan pencuci mulut dengan gula hangus dan pemetik api separuh guna. Dapur hangat dan berbau tomato dan selasih.') });

      /* ================= ROOM 13 ================= */
      W.box(12, 0, 0, 1.0, 0.8, 1.0, 0x2a1f30);                                                    // display stand
      W.box(12, 0.8, 0, 0.9, 0.6, 0.9, 0x9fc4e0, { collide: false });                              // glass case (empty)
      W.interact({ id: 'glass_case', x: 12, y: 1.1, z: 0, r: 0.9, label: T('Empty glass case', 'Kotak kaca kosong'), item: 'glass_case' });
      W.interact({ id: 'room_door', x: 8.25, y: 1.2, z: 0.9, r: 0.6, label: T('Door of Room 13', 'Pintu Bilik 13'), item: 'room_door' });
      W.box(11.0, 0.03, 0.9, 0.06, 0.03, 0.06, 0xd4a82a, { collide: false });
      W.interact({ id: 'brass_button', x: 11.0, y: 0.1, z: 0.9, r: 0.35, label: T('Something shiny on the floor', 'Sesuatu yang berkilat di lantai'), item: 'brass_button' });
      W.box(14.88, 0.7, 0, 0.05, 1.9, 1.5, 0x1b2630, { collide: false });                          // mirror
      W.writing(14.84, 1.6, 0, -Math.PI / 2, T('THEY ARE MINE', 'THEY ARE MINE'), '#c01515', 1.5, 0.45);
      W.interact({ id: 'red_writing', x: 14.6, y: 1.5, z: 0, r: 1.0, label: T('Red words on the mirror', 'Tulisan merah pada cermin'), item: 'red_writing' });
      W.box(13.4, 0, -2.2, 1.9, 0.5, 1.1, 0x5a3a52);                                               // bed
      W.box(9.2, 0, -2.5, 0.7, 2.0, 1.2, 0x3a2a1a);                                                // wardrobe
      W.box(9.8, 0.0, 2.3, 0.5, 1.5, 0.28, 0xe9e4f0, { collide: false, name: 'figure2' }); W.ball(9.8, 1.65, 2.3, 0.16, 0xf0ece8, { name: 'figure2' });   // pale bride (it is only a reflection)

      /* ================= PEOPLE ================= */
      W.npc({ id: 'leo', x: -5.9, z: -0.8, rot: Math.PI * 0.5, skin: 0xc79a6a, shirt: 0x8a1c2a, pants: 0x222222, hair: 0x1a120c, scale: 0.95, hat: 0x8a1c2a });
      W.npc({ id: 'whitmore', x: 3.6, z: -5.6, rot: Math.PI, skin: 0xe0b894, shirt: 0x4b5563, pants: 0x2d3340, hair: 0xe0e0e0, scale: 1.0 });
      W.npc({ id: 'bianchi', x: 4.8, z: 5.6, rot: Math.PI * 1.2, skin: 0xd8a87a, shirt: 0xf4f4f4, pants: 0x2c2c2c, hair: 0x1a1a1a, scale: 1.0, hat: 0xffffff });
      W.npc({ id: 'sato', x: 10.9, z: 2.0, rot: Math.PI * 1.3, skin: 0xf0d0b0, shirt: 0xe08fb0, pants: 0x3a2a4a, hair: 0x2a2a2a, scale: 0.9 });
      W.npc({ id: 'okafor', x: 12.8, z: -1.9, rot: Math.PI * 0.7, skin: 0x7a4a2a, shirt: 0x2e9e6a, pants: 0x2c3e50, hair: 0x111111, scale: 1.0 });
    }
  };

  /* ====================================================================== PICTURES AND OBJECTS FOR THIS CASE */
  const A = MF.art, h = A.h;
  A.clock011 = (canvas) => {
    canvas.width = 620; canvas.height = 250; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 250, '#f0e8d4');
    A.clockFace(c, 130, 125, 96, 9, 40); h.text(c, 'STOPPED', 130, 240, 18, '#c0392b', 'center', true);
    h.text(c, '⚡ ELECTRIC CLOCK', 260, 60, 22, '#222', 'left', true); h.text(c, 'Jam elektrik', 260, 82, 14, '#666', 'left');
    h.text(c, 'It stopped when the power was cut.', 260, 120, 17, '#333', 'left'); h.text(c, 'Ia berhenti apabila elektrik diputuskan.', 260, 140, 13, '#666', 'left');
    h.rect(c, 260, 160, 330, 62, '#fff7d6'); c.strokeStyle = '#a88'; c.lineWidth = 2; c.strokeRect(260, 160, 330, 62);
    h.text(c, 'Generator AUTO-START: 9:47 pm', 275, 188, 19, '#0a6', 'left', true); h.text(c, 'Penjana hidup sendiri: 9:47 mlm', 275, 208, 13, '#666', 'left');
  };
  A.clocks011 = (canvas) => {
    canvas.width = 620; canvas.height = 250; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 250, '#efe6cf');
    const cl = [['SCOTLAND (hotel)', 12, 0], ['TOKYO', 9, 0], ['LAGOS', 1, 0], ['ROME', 1, 0]]; const lab = ['12:00 noon', '9:00 pm', '1:00 pm', '1:00 pm'];
    cl.forEach((k, i) => { const x = 85 + i * 150; A.clockFace(c, x, 100, 58, k[1], k[2]); h.text(c, k[0], x, 190, 14, '#222', 'center', true); h.text(c, lab[i], x, 212, 16, '#c0392b', 'center', true); });
    h.text(c, 'The same moment, four cities / Saat yang sama, empat bandar', 310, 20, 15, '#555', 'center', true);
  };
  A.trolley011 = (canvas) => {
    canvas.width = 620; canvas.height = 280; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 280, '#e9e2cc');
    h.rect(c, 20, 20, 300, 240, '#fff'); c.strokeStyle = '#555'; c.lineWidth = 2; c.strokeRect(20, 20, 300, 240);
    h.text(c, 'LOAD SHEET / Helaian muatan', 40, 50, 18, '#222', 'left', true);
    [['Blue suitcase (Rm 8)', '12.5 kg'], ['Red duffel (Rm 5)', '8.3 kg'], ['Brown trunk (Rm 2)', '10.8 kg']].forEach((r, i) => { h.text(c, r[0], 40, 100 + i * 42, 17, '#333', 'left'); h.text(c, r[1], 300, 100 + i * 42, 19, '#c0392b', 'right', true); });
    h.text(c, 'Total = ?', 300, 240, 20, '#555', 'right', true);
    h.rect(c, 350, 60, 250, 160, '#2b2f36'); h.rect(c, 365, 75, 220, 80, '#0e3d2a'); h.text(c, '34.0 kg', 475, 135, 52, '#7dffb5', 'center', true);
    h.text(c, 'SCALE reading / Bacaan penimbang', 475, 185, 13, '#ccc', 'center'); h.text(c, '⚖', 475, 212, 22, '#ccc', 'center');
  };
  A.locker011 = (canvas) => {
    canvas.width = 620; canvas.height = 260; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 260, '#d7d0bd');
    h.rect(c, 40, 20, 180, 230, '#7b8087'); c.strokeStyle = '#444'; c.lineWidth = 3; c.strokeRect(40, 20, 180, 230); h.rect(c, 56, 40, 148, 8, '#555'); h.rect(c, 56, 56, 148, 8, '#555');
    h.rect(c, 70, 130, 120, 50, '#2b2f36'); [0, 1, 2].forEach((i) => { h.rect(c, 82 + i * 36, 140, 28, 30, '#111'); h.text(c, '?', 96 + i * 36, 163, 24, '#7dffb5', 'center', true); });
    h.rect(c, 70, 200, 70, 26, '#e0c040'); h.text(c, 'L. SANTOS', 105, 218, 13, '#222', 'center', true);
    h.rect(c, 260, 40, 300, 150, '#fff7a8'); c.strokeStyle = '#b8a040'; c.lineWidth = 2; c.strokeRect(260, 40, 300, 150);
    h.text(c, 'My code =', 280, 80, 22, '#222', 'left', true); h.text(c, 'the NEXT number in', 280, 112, 20, '#222', 'left', true); h.text(c, 'each pattern. Easy! 😉', 280, 142, 20, '#222', 'left', true);
    h.text(c, '(patterns are in the puzzle)', 280, 172, 13, '#666', 'left');
  };
  A.photos.stage_photo = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#2a1a22'); h.rect(c, 0, H * 0.7, W, H * 0.3, '#3a2a22'); h.rect(c, W * 0.1, H * 0.08, W * 0.8, 40, '#a88a30'); h.text(c, '100 YEARS OF BELLADONNA', W * 0.5, H * 0.08 + 29, 26, '#2a1a22', 'center', true);
    A.clockFace(c, W * 0.82, H * 0.3, 50, 9, 42);
    h.rect(c, W * 0.46, H * 0.42, 14, H * 0.3, '#222'); h.circ(c, W * 0.468, H * 0.4, 10, '#222');                                    // mic stand
    h.rect(c, W * 0.38, H * 0.5, 50, 140, '#4b5563'); h.circ(c, W * 0.38 + 25, H * 0.46, 22, '#e0b894'); c.fillStyle = '#ddd'; c.beginPath(); c.arc(W * 0.38 + 25, H * 0.45, 23, Math.PI, 0); c.fill();   // Whitmore
    for (let i = 0; i < 22; i++) { const x = 30 + (i % 11) * 82 + (i > 10 ? 40 : 0), y = H * 0.84 + (i > 10 ? 34 : 0); h.circ(c, x, y, 18, '#1a1218'); h.rect(c, x - 22, y + 14, 44, 30, '#1a1218'); }
    const sx = W - 170, sy = H - 44; h.rect(c, sx, sy, 160, 34, 'rgba(0,0,0,0.45)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 80, sy + 25, 22, '#ffb347', 'center', true);
  };
  A.photos.phone_photo = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#111'); h.rect(c, 60, 30, W - 120, H - 60, '#1e1a26'); h.rect(c, 90, 70, W - 180, H - 160, '#2a2236');
    h.rect(c, W * 0.38, H * 0.62, W * 0.24, 50, '#b08a2e'); h.rect(c, W * 0.45, H * 0.45, W * 0.1, H * 0.2, '#b08a2e');                  // brass stand
    for (let i = 0; i < 17; i++) { const a = Math.PI * (0.1 + i * 0.05); h.circ(c, W * 0.5 + Math.cos(a + Math.PI) * W * 0.17, H * 0.45 + Math.sin(a + Math.PI) * -H * 0.22 + 20, 13, '#f7f3ec'); }   // pearl strand
    c.strokeStyle = 'rgba(160,220,255,0.6)'; c.lineWidth = 3; c.strokeRect(W * 0.25, H * 0.15, W * 0.5, H * 0.6);                           // glass edge
    h.text(c, '📱  ' + MF.fmtTime(o.stampT || 0).toUpperCase(), 100, 56, 22, '#9fe', 'left', true); h.text(c, 'JST (Tokyo time)', W - 100, 56, 18, '#9fe', 'right', true);
  };

  /* ---- 3D object the student can turn around in their hands ---- */
  const M = MF.models, mat = (col, o) => new THREE.MeshLambertMaterial(Object.assign({ color: col }, o || {})), mesh = (g, m) => new THREE.Mesh(g, m);
  M.button011 = () => {
    const g = new THREE.Group(); const disc = mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.18, 24), mat(0xd4a82a)); disc.rotation.x = Math.PI / 2; g.add(disc);
    const rim = mesh(new THREE.TorusGeometry(0.72, 0.07, 8, 24), mat(0xe6c14a)); g.add(rim); const dome = mesh(new THREE.CylinderGeometry(0.32, 0.5, 0.1, 16), mat(0xe6c14a)); dome.rotation.x = Math.PI / 2; dome.position.z = 0.12; g.add(dome);
    const hb = mesh(new THREE.BoxGeometry(0.5, 0.06, 0.04), mat(0x7a5a10)); hb.position.z = 0.19; g.add(hb);
    const thr = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 6), mat(0x7a1c2a)); thr.position.set(0.1, -0.5, -0.12); thr.rotation.z = 0.3; g.add(thr);
    g.rotation.y = 0.5; return g;
  };

  MF.registerCase(C);
})();
