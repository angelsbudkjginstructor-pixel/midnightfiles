/* ============================================================================
   CASE 001 — THE MISSING LUNCHBOX / KOTAK MAKANAN YANG HILANG   (School sleepover, night)
   ----------------------------------------------------------------------------
   One complete, independent story. The engine reads it as data.

   HIDDEN SOLUTION  (the twist: TWO different people — a prankster and a thief)
   - Legend: "The Hungry Cook" — Cook Agnes, dismissed in 1994, haunts the old kitchen and
     drags children's food (and children!) into it.
   - 8:50  Kenji (prankster) hides a speaker behind the old-kitchen vent: scratching every 6 min from 9:30.
   - 9:00  Oliver gives his red lunchbox to Ms. Nair. Inside: Grandma's recipe card for tomorrow's bake-off.
           Ms. Nair puts it in the staffroom fridge (keypad: NAIR 9:00).
   - 9:05  Ms. Nair photographs the fridge for the allergy list — the lunchbox is there.
   - 9:08  Ms. Nair goes out to the car park to take a phone call. The door locks itself.
   - 9:12  Caretaker Victor Lowe opens the staffroom with HIS code and takes the lunchbox.
   - 9:14  Zara (sneaking to the vending machine) takes a selfie: behind her, Lowe hurries to the old
           kitchen with something red under his coat.
   - 9:18  Lowe hides the lunchbox in his mother's old oven (code lock).
   - 9:25  Kenji drips beetroot juice ("blood") from the staffroom to the old kitchen, as his prank planned.
   - 9:30  The theft is discovered. The red trail makes everyone blame the ghost — or Kenji.
   MOTIVE: the recipe on the card was really Agnes's (Lowe's mother). Grandma won the 1994 bake-off
           with it, and Agnes lost her job. Lowe recognised it at dinner and wanted it back.
   ============================================================================ */
(function () {
  const T = (en, bm) => ({ en, bm });
  const mm = (s) => { const [h, m] = s.split(':').map(Number); return (h < 12 ? h + 12 : h) * 60 + m; };
  const paper = (html, style) => `<div class="paper hand" style="${style || ''}">${html}</div>`;

  const C = {
    id: '001',
    num: 1,
    title: T('The Missing Lunchbox', 'Kotak Makanan Yang Hilang'),
    tagline: T('A lunchbox vanished in the night. A trail of red drops leads to a kitchen that has been locked for thirty years.', 'Sebuah kotak makanan hilang pada waktu malam. Jejak titisan merah menuju ke dapur yang telah dikunci selama tiga puluh tahun.'),
    place: T('Hollow Oak School — Camp-In Night', 'Sekolah Hollow Oak — Malam Berkhemah'),
    premise: T(
      `It is 9:40 pm at Hollow Oak School's Camp-In Night. The children are sleeping in the classroom... or trying to. At 9:30 Oliver's red lunchbox VANISHED from the locked staffroom fridge. A trail of red drops — like blood — runs down the dark hallway to the old kitchen, closed since 1994, and someone has written "STILL HUNGRY" on its door. Every few minutes, something SCRATCHES inside the walls. The children whisper about the Hungry Cook, who drags food into her kitchen... and sometimes children too. At 10:15 the head teacher arrives and will cancel the camp. Find out what really happened before then.`,
      `Sekarang pukul 9:40 malam di Malam Berkhemah Sekolah Hollow Oak. Kanak-kanak tidur di bilik darjah... atau cuba untuk tidur. Pukul 9:30 kotak makanan merah Oliver HILANG dari peti sejuk bilik guru yang berkunci. Jejak titisan merah — seperti darah — menuju sepanjang lorong gelap ke dapur lama, yang ditutup sejak 1994, dan seseorang menulis "STILL HUNGRY" pada pintunya. Setiap beberapa minit, sesuatu MENCAKAR di dalam dinding. Kanak-kanak berbisik tentang Tukang Masak Lapar, yang menyeret makanan ke dapurnya... dan kadang-kadang kanak-kanak juga. Pukul 10:15 guru besar akan tiba dan membatalkan perkhemahan. Cari apa yang sebenarnya berlaku sebelum itu.`),
    mysteryType: 'Theft hidden behind a prank / two culprits',
    subjects: ['science', 'math', 'english', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('9:40'), deadline: mm('10:15'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },

    hidden: {
      culprit: 'lowe',
      what: 'two',
      window: [mm('9:08'), mm('9:30')],
      summary: T(
        `There were TWO different people. Kenji played a "Hungry Cook" prank: a hidden speaker made the scratching and beetroot juice made the "blood". But Kenji never took the lunchbox. The thief was the caretaker, Mr. Lowe. At 9:12 he opened the staffroom with his own code, took the lunchbox and hid it in his mother's old oven. The recipe card inside was really his mother Agnes's recipe — the one Oliver's grandma used to win the 1994 bake-off, after which Agnes lost her job.`,
        `Ada DUA orang yang berbeza. Kenji membuat gurauan "Tukang Masak Lapar": pembesar suara tersembunyi membuat bunyi cakaran dan jus bit membuat "darah". Tetapi Kenji tidak pernah mengambil kotak makanan itu. Pencurinya ialah penjaga sekolah, Encik Lowe. Pukul 9:12 dia membuka bilik guru dengan kodnya sendiri, mengambil kotak makanan dan menyorokkannya dalam ketuhar lama ibunya. Kad resipi di dalamnya sebenarnya resipi ibunya, Agnes — yang digunakan nenek Oliver untuk memenangi pertandingan membuat kek 1994, selepas itu Agnes kehilangan kerjanya.`),
      sequence: [
        [mm('8:50'), T('Kenji hides a speaker behind the old-kitchen vent.', 'Kenji menyorokkan pembesar suara di belakang lubang angin dapur lama.')],
        [mm('9:00'), T('Ms. Nair puts Oliver\'s lunchbox in the staffroom fridge.', 'Cik Nair meletakkan kotak makanan Oliver dalam peti sejuk bilik guru.')],
        [mm('9:05'), T('Ms. Nair photographs the fridge. The lunchbox is there.', 'Cik Nair merakam gambar peti sejuk. Kotak makanan ada di situ.')],
        [mm('9:08'), T('Ms. Nair goes outside for a phone call. The door locks itself.', 'Cik Nair keluar untuk panggilan telefon. Pintu terkunci sendiri.')],
        [mm('9:12'), T('Mr. Lowe opens the staffroom with his code and takes the lunchbox.', 'Encik Lowe membuka bilik guru dengan kodnya dan mengambil kotak makanan.')],
        [mm('9:14'), T('Zara\'s selfie: Mr. Lowe hurries to the old kitchen with something red.', 'Swafoto Zara: Encik Lowe bergegas ke dapur lama dengan sesuatu yang merah.')],
        [mm('9:25'), T('Kenji drips beetroot juice down the hallway.', 'Kenji menitiskan jus bit di sepanjang lorong.')],
        [mm('9:30'), T('The lunchbox is missing. The scratching starts (every 6 minutes).', 'Kotak makanan hilang. Bunyi cakaran bermula (setiap 6 minit).')],
        [mm('10:15'), T('Deadline: the head teacher arrives.', 'Had masa: guru besar tiba.')]
      ],
      essentialClues: ['red_drops', 'speaker', 'kenji_note', 'door_log', 'fridge_photo', 'corridor_photo', 'lunchbox', 'recipe_card', 'lowe_photo', 'c_lowe_room'],
      misleading: [
        { item: 'beet_bottle', why: T('The beetroot bottle proves Kenji made the "blood" — but not that he took the lunchbox.', 'Botol bit membuktikan Kenji membuat "darah" — tetapi bukan dia mengambil kotak makanan.') },
        { item: 'crisp_packet', why: T('Zara sneaked out for crisps. Breaking the rules is not the same as stealing.', 'Zara keluar senyap-senyap untuk kerepek. Melanggar peraturan tidak sama dengan mencuri.') },
        { item: 'c_nair_phone', why: T('Ms. Nair left the staffroom, but the keypad shows she did not come back until 9:30.', 'Cik Nair meninggalkan bilik guru, tetapi papan kekunci menunjukkan dia tidak kembali sehingga 9:30.') },
        { item: 'legend_poster', why: T('A ghost story is not evidence.', 'Cerita hantu bukan bukti.') }
      ]
    },

    people: [
      { id: 'lowe', name: 'Victor Lowe', age: 58, role: T('Night caretaker', 'Penjaga sekolah malam'), rel: T('Has keys and a door code', 'Ada kunci dan kod pintu'), color: '#6b7a3a', suspect: true },
      { id: 'kenji', name: 'Kenji Mori', age: 12, role: T('Student, loves horror films', 'Murid, suka filem seram'), rel: T('The class prankster', 'Pelawak kelas'), color: '#c0392b', suspect: true },
      { id: 'zara', name: 'Zara Ahmed', age: 11, role: T('Student, bake-off rival', 'Murid, pesaing pertandingan kek'), rel: T('Also entering the bake-off', 'Juga menyertai pertandingan kek'), color: '#d4a017', suspect: true },
      { id: 'nair', name: 'Ms. Priya Nair', age: 31, role: T('Teacher in charge tonight', 'Guru bertugas malam ini'), rel: T('Has the staffroom code', 'Ada kod bilik guru'), color: '#7a5cc0', suspect: true },
      { id: 'oliver', name: 'Oliver Bennett', age: 10, role: T('Student — his lunchbox is gone', 'Murid — kotak makanannya hilang'), rel: T('The victim', 'Mangsa'), color: '#2f6f9e', suspect: false }
    ],

    items: [
      /* ---------------- CLASSROOM (sleeping area) ---------------- */
      { id: 'beet_bottle', type: 'physical', icon: '🧃', title: T('Empty beetroot juice bottle', 'Botol jus bit kosong'), where: T("Kenji's backpack, classroom", 'Beg Kenji, bilik darjah'),
        desc: T(`An empty bottle of beetroot juice with a sticky red ring at the bottom. Kenji's name is on the label.`, `Botol jus bit kosong dengan cincin merah melekit di bawahnya. Nama Kenji pada labelnya.`),
        inspect: { kind: 'doc', html: T(paper(`🧃 <b>BEET-IT! beetroot juice</b><br>EMPTY · sticky red inside<br>Label: <b>"KENJI M. — 6B"</b><br><small>Beetroot juice is very, very red.</small>`), paper(`🧃 <b>Jus bit BEET-IT!</b><br>KOSONG · merah melekit di dalam<br>Label: <b>"KENJI M. — 6B"</b><br><small>Jus bit sangat, sangat merah.</small>`)) } },
      { id: 'kenji_note', type: 'document', icon: '📝', title: T('"Operation Hungry Cook" plan', 'Rancangan "Operasi Tukang Masak Lapar"'), where: T("Inside Kenji's sleeping bag", 'Dalam beg tidur Kenji'),
        desc: T(`A secret plan in Kenji's handwriting.`, `Rancangan rahsia dalam tulisan tangan Kenji.`),
        inspect: { kind: 'doc', html: T(paper(`<b>OPERATION HUNGRY COOK 👻</b><br>1. 8:50 — speaker behind the kitchen vent (scratch sound, every 6 min)<br>2. 9:25 — beetroot "blood" from staffroom → old kitchen<br>3. write STILL HUNGRY on the kitchen door<br><b>RULES: Don't touch anything REAL. Don't take anything. Just SCARE!</b><br><small>(I don't know the staffroom code anyway 😞)</small>`), paper(`<b>OPERASI TUKANG MASAK LAPAR 👻</b><br>1. 8:50 — pembesar suara di belakang lubang angin dapur (bunyi cakaran, setiap 6 min)<br>2. 9:25 — "darah" bit dari bilik guru → dapur lama<br>3. tulis STILL HUNGRY pada pintu dapur<br><b>PERATURAN: Jangan sentuh apa-apa yang BENAR. Jangan ambil apa-apa. Cuma TAKUTKAN!</b><br><small>(Lagipun saya tak tahu kod bilik guru 😞)</small>`)) } },
      { id: 'legend_poster', type: 'document', icon: '📜', title: T('Camp-In ghost story poster', 'Poster cerita hantu perkhemahan'), where: T('Classroom wall', 'Dinding bilik darjah'),
        desc: T(`A spooky poster for tonight's story time.`, `Poster seram untuk masa bercerita malam ini.`),
        inspect: { kind: 'doc', html: T(paper(`<b>THE HUNGRY COOK 👻</b><br>"In 1994, Cook Agnes was sent away from Hollow Oak. Her kitchen was locked forever. But on dark nights she comes back... and she is STILL HUNGRY. She drags food into her kitchen. Leave nothing in the fridge!"<br><small>Story time: 8:30 pm — told by Mr. Lowe</small>`, 'background:#e8dcc0'), paper(`<b>TUKANG MASAK LAPAR 👻</b><br>"Pada 1994, Tukang Masak Agnes dihantar pergi dari Hollow Oak. Dapurnya dikunci selama-lamanya. Tetapi pada malam gelap dia kembali... dan dia MASIH LAPAR. Dia menyeret makanan ke dapurnya. Jangan tinggalkan apa-apa dalam peti sejuk!"<br><small>Masa bercerita: 8:30 malam — diceritakan oleh Encik Lowe</small>`, 'background:#e8dcc0')) } },

      /* ---------------- HALLWAY ---------------- */
      { id: 'red_drops', type: 'physical', icon: '🩸', title: T('Trail of red drops', 'Jejak titisan merah'), where: T('Hallway floor, staffroom → old kitchen', 'Lantai lorong, bilik guru → dapur lama'),
        desc: T(`Dark red drops on the floor, like blood. They smell a little sweet... and earthy.`, `Titisan merah gelap di lantai, seperti darah. Baunya sedikit manis... dan berbau tanah.`),
        puzzle: 'pz_drops', inspect: { kind: 'puzzle-doc',
          html: T(paper(`🩸 <b>Red drops</b><br>Colour: dark red · Smell: sweet, like soil<br>Ms. Nair's first-aid kit has <b>soap water</b>.<br><small>Science test: real blood stays RED in soap water. Beetroot juice turns YELLOW-BROWN.</small>`), paper(`🩸 <b>Titisan merah</b><br>Warna: merah gelap · Bau: manis, seperti tanah<br>Kit pertolongan cemas Cik Nair ada <b>air sabun</b>.<br><small>Ujian sains: darah sebenar kekal MERAH dalam air sabun. Jus bit bertukar KUNING-PERANG.</small>`)),
          fixedHtml: T(paper(`🩸 <b>Red drops — TESTED</b><br>In soap water the drop turned <b>yellow-brown</b>. ✔<br>It is <b>beetroot juice</b>, not blood!`), paper(`🩸 <b>Titisan merah — DIUJI</b><br>Dalam air sabun titisan itu bertukar <b>kuning-perang</b>. ✔<br>Ia <b>jus bit</b>, bukan darah!`)) } },
      { id: 'speaker', type: 'device', icon: '🔊', title: T('Tiny speaker behind the vent', 'Pembesar suara kecil di belakang lubang angin'), where: T('Hallway vent beside the old kitchen', 'Lubang angin lorong di sebelah dapur lama'),
        desc: T(`A small speaker taped behind the vent, with a timer screen.`, `Pembesar suara kecil dilekat di belakang lubang angin, dengan skrin pemasa.`),
        puzzle: 'pz_speaker', inspect: { kind: 'puzzle-doc',
          html: T(paper(`🔊 <b>Mini speaker</b> · sound: "SCRATCH_04.mp3"<br>Timer screen: <b>first play 9:30 pm · repeat every 6 min</b><br><small>Sticker: "Property of K.M."</small>`), paper(`🔊 <b>Pembesar suara mini</b> · bunyi: "SCRATCH_04.mp3"<br>Skrin pemasa: <b>main pertama 9:30 mlm · ulang setiap 6 min</b><br><small>Pelekat: "Milik K.M."</small>`)),
          fixedHtml: T(paper(`🔊 <b>Mini speaker — SOLVED</b><br>9:30 → 9:36 → 9:42 → 9:48 ✔<br>The "ghost" scratches exactly every 6 minutes. Ghosts do not use timers!`), paper(`🔊 <b>Pembesar suara mini — SELESAI</b><br>9:30 → 9:36 → 9:42 → 9:48 ✔<br>"Hantu" mencakar tepat setiap 6 minit. Hantu tidak guna pemasa!`)) } },
      { id: 'crisp_packet', type: 'physical', icon: '🥔', title: T('Crisp packet', 'Bungkusan kerepek'), where: T('Hallway, by the vending machine', 'Lorong, di sebelah mesin layan diri'),
        desc: T(`A fresh "Chilli Crunch" crisp packet. The vending machine slip inside says 9:13 pm.`, `Bungkusan kerepek "Chilli Crunch" yang baru. Resit mesin di dalamnya tertulis 9:13 malam.`),
        inspect: { kind: 'doc', html: T(paper(`🥔 <b>Chilli Crunch</b> (half eaten)<br>Machine slip: <b>9:13 pm</b><br><small>Zara told everyone Chilli Crunch is her favourite.</small>`), paper(`🥔 <b>Chilli Crunch</b> (separuh dimakan)<br>Resit mesin: <b>9:13 mlm</b><br><small>Zara memberitahu semua orang Chilli Crunch kegemarannya.</small>`)) } },

      /* ---------------- STAFFROOM ---------------- */
      { id: 'door_log', type: 'document', icon: '🔢', title: T('Staffroom keypad log', 'Log papan kekunci bilik guru'), where: T('Staffroom door screen', 'Skrin pintu bilik guru'),
        desc: T(`The keypad records every code that opens the door. The door locks itself when it closes.`, `Papan kekunci merekodkan setiap kod yang membuka pintu. Pintu terkunci sendiri apabila ditutup.`),
        puzzle: 'pz_keypad', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<b>DOOR LOG — STAFFROOM</b><br>9:00 pm — code 1 (NAIR) ✔ open<br>9:08 pm — door closed 🔒<br>9:12 pm — code 4 (LOWE) ✔ open<br>9:16 pm — door closed 🔒<br>9:30 pm — code 1 (NAIR) ✔ open<br><small>Students have no code.</small>`, 'background:#dfe8e2'), paper(`<b>LOG PINTU — BILIK GURU</b><br>9:00 mlm — kod 1 (NAIR) ✔ buka<br>9:08 mlm — pintu ditutup 🔒<br>9:12 mlm — kod 4 (LOWE) ✔ buka<br>9:16 mlm — pintu ditutup 🔒<br>9:30 mlm — kod 1 (NAIR) ✔ buka<br><small>Murid tiada kod.</small>`, 'background:#dfe8e2')),
          fixedHtml: T(paper(`<b>DOOR LOG — read</b> ✔<br>Between 9:08 and 9:30 the door opened only ONCE: <b>9:12 — LOWE</b>.`, 'background:#dfe8e2'), paper(`<b>LOG PINTU — dibaca</b> ✔<br>Antara 9:08 dan 9:30 pintu dibuka SEKALI sahaja: <b>9:12 — LOWE</b>.`, 'background:#dfe8e2')) } },

      /* ---------------- CARETAKER'S ROOM ---------------- */
      { id: 'lowe_photo', type: 'physical', icon: '🖼️', title: T('Framed photo: "Me and Mum, 1990"', 'Gambar berbingkai: "Saya dan Mak, 1990"'), where: T("Caretaker's desk", 'Meja penjaga'),
        desc: T(`An old photo of a boy and a smiling cook in a tall white hat, in this school's kitchen. On the back: "Victor & Mum (Agnes), Hollow Oak kitchen, 1990".`, `Gambar lama seorang budak lelaki dan tukang masak tersenyum bertopi putih tinggi, di dapur sekolah ini. Di belakang: "Victor & Mak (Agnes), dapur Hollow Oak, 1990".`),
        inspect: { kind: 'doc', html: T(paper(`🖼️ <i>A boy and a cook in a tall white hat, laughing in a big school kitchen.</i><br>Back: <b>"Victor &amp; Mum (Agnes), Hollow Oak kitchen, 1990"</b><br><small>Agnes... the "Hungry Cook" was Mr. Lowe's MOTHER.</small>`, 'background:#efe6d2'), paper(`🖼️ <i>Seorang budak lelaki dan tukang masak bertopi putih tinggi, ketawa di dapur sekolah yang besar.</i><br>Belakang: <b>"Victor &amp; Mak (Agnes), dapur Hollow Oak, 1990"</b><br><small>Agnes... "Tukang Masak Lapar" ialah IBU Encik Lowe.</small>`, 'background:#efe6d2')) } },
      { id: 'lowe_keys', type: 'physical', icon: '🗝️', title: T("Caretaker's key ring", 'Gugusan kunci penjaga'), where: T("Hook in the caretaker's room", 'Cangkuk di bilik penjaga'),
        desc: T(`Many keys. A tag says "Staffroom code: 4". One old iron key is labelled "OLD KITCHEN" — it is shiny, as if used tonight.`, `Banyak kunci. Satu tag tertulis "Kod bilik guru: 4". Satu kunci besi lama berlabel "DAPUR LAMA" — ia berkilat, seperti baru digunakan malam ini.`),
        inspect: { kind: 'doc', html: T(paper(`🗝️ <b>Key ring — V. LOWE</b><br>Tag: "Staffroom keypad: code 4"<br>"OLD KITCHEN" key: <b>shiny, no dust</b><br><small>Every other key is dusty.</small>`), paper(`🗝️ <b>Gugusan kunci — V. LOWE</b><br>Tag: "Papan kekunci bilik guru: kod 4"<br>Kunci "DAPUR LAMA": <b>berkilat, tiada habuk</b><br><small>Kunci lain semuanya berhabuk.</small>`)) } },
      { id: 'old_news', type: 'document', icon: '📰', title: T('Newspaper, 1994', 'Surat khabar, 1994'), where: T("Caretaker's wall, in a frame", 'Dinding penjaga, dalam bingkai'),
        desc: T(`A yellow newspaper page. Damp has rubbed out some words.`, `Halaman surat khabar kuning. Lembapan telah memadam beberapa perkataan.`),
        puzzle: 'pz_news', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<b>HOLLOW OAK GAZETTE — June 1994</b><br>"Mrs. June Bennett ____ the Grand Bake-Off with her Midnight Chocolate Cake. The same day, school cook Agnes Lowe ____ her job. She said the recipe ____ HERS."<br><small>(damp has rubbed out some words)</small>`, 'background:#e9dfc4'), paper(`<b>HOLLOW OAK GAZETTE — Jun 1994</b><br>"Mrs. June Bennett ____ the Grand Bake-Off with her Midnight Chocolate Cake. The same day, school cook Agnes Lowe ____ her job. She said the recipe ____ HERS."<br><small>(lembapan memadam beberapa perkataan)</small>`, 'background:#e9dfc4')),
          fixedHtml: T(paper(`<b>HOLLOW OAK GAZETTE — June 1994</b><br>"Mrs. June Bennett <u>won</u> the Grand Bake-Off with her Midnight Chocolate Cake. The same day, school cook Agnes Lowe <u>lost</u> her job. She said the recipe <u>was</u> HERS." ✔`, 'background:#e9dfc4'), paper(`<b>HOLLOW OAK GAZETTE — Jun 1994</b><br>"Mrs. June Bennett <u>won</u> the Grand Bake-Off with her Midnight Chocolate Cake. The same day, school cook Agnes Lowe <u>lost</u> her job. She said the recipe <u>was</u> HERS." ✔`, 'background:#e9dfc4')) } },
      { id: 'oven_note', type: 'document', icon: '🗒️', title: T('Note: "Mum\'s oven"', 'Nota: "Ketuhar Mak"'), where: T("Caretaker's desk drawer", 'Laci meja penjaga'),
        desc: T(`A note in Mr. Lowe's writing about the old oven lock.`, `Nota dalam tulisan Encik Lowe tentang kunci ketuhar lama.`),
        inspect: { kind: 'doc', html: T(paper(`🗒️ <i>"Mum's oven — the lock code is in her number game. Finish each pattern."</i><br>2, 4, 6, ?<br>9, 7, 5, ?<br>1, 3, 5, ?`, 'background:#f3ecc8'), paper(`🗒️ <i>"Ketuhar Mak — kod kuncinya dalam permainan nombornya. Lengkapkan setiap corak."</i><br>2, 4, 6, ?<br>9, 7, 5, ?<br>1, 3, 5, ?`, 'background:#f3ecc8')) } },

      /* ---------------- OLD KITCHEN ---------------- */
      { id: 'old_oven', type: 'physical', icon: '🔒', title: T('Old iron oven with a code lock', 'Ketuhar besi lama berkunci kod'), where: T('Old kitchen', 'Dapur lama'),
        desc: T(`A huge black oven. Fresh fingerprints in the dust on the handle. A 3-digit lock.`, `Ketuhar hitam besar. Cap jari baru dalam habuk pada pemegang. Kunci 3 digit.`),
        puzzle: 'pz_oven', inspect: { kind: 'puzzle-art', art: 'oven001' } },
      { id: 'lunchbox', type: 'physical', icon: '🍱', title: T("Oliver's red lunchbox", 'Kotak makanan merah Oliver'), where: T('Inside the old oven', 'Dalam ketuhar lama'),
        desc: T(`Oliver's red lunchbox! The sandwich is still inside — nobody ate anything. Only the recipe card was taken out and put back on top.`, `Kotak makanan merah Oliver! Sandwic masih di dalam — tiada siapa makan apa-apa. Hanya kad resipi dikeluarkan dan diletakkan semula di atas.`),
        inspect: { kind: 'doc', html: T(paper(`🍱 <b>Red lunchbox — "OLIVER B."</b><br>Sandwich: <b>not eaten</b> · Apple: <b>not eaten</b><br>Recipe card: on top, slightly creased<br><small>The thief was not hungry...</small>`), paper(`🍱 <b>Kotak makanan merah — "OLIVER B."</b><br>Sandwic: <b>tidak dimakan</b> · Epal: <b>tidak dimakan</b><br>Kad resipi: di atas, sedikit berkedut<br><small>Pencuri itu tidak lapar...</small>`)) } },
      { id: 'recipe_card', type: 'document', icon: '🎂', title: T('Recipe card: Midnight Chocolate Cake', 'Kad resipi: Kek Coklat Tengah Malam'), where: T("Inside Oliver's lunchbox", 'Dalam kotak makanan Oliver'),
        desc: T(`Grandma Bennett's famous recipe. In the bottom corner, very small, old handwriting.`, `Resipi terkenal Nenek Bennett. Di sudut bawah, sangat kecil, tulisan tangan lama.`),
        inspect: { kind: 'doc', html: T(paper(`🎂 <b>MIDNIGHT CHOCOLATE CAKE</b><br>200 g dark chocolate · 3 eggs · a pinch of chilli...<br><small style="font-size:.75em">bottom corner, faded: <b>"from the kitchen of Agnes L. — 1989"</b></small>`, 'background:#fbf1de'), paper(`🎂 <b>KEK COKLAT TENGAH MALAM</b><br>200 g coklat gelap · 3 biji telur · secubit cili...<br><small style="font-size:.75em">sudut bawah, pudar: <b>"from the kitchen of Agnes L. — 1989"</b></small>`, 'background:#fbf1de')) } },
      { id: 'grandma_letter', type: 'document', icon: '✉️', title: T('An old letter in a recipe tin', 'Surat lama dalam tin resipi'), where: T('Old kitchen shelf', 'Rak dapur lama'),
        desc: T(`A letter that was never posted, dated 1995.`, `Surat yang tidak pernah dihantar, bertarikh 1995.`),
        inspect: { kind: 'doc', html: T(paper(`<i>"Dear Agnes, I am so sorry. The cake was YOUR recipe and I said it was mine. You lost your job because of me. I was too ashamed to tell anyone. One day, I hope my family can make this right. — June Bennett, 1995"</i>`, 'background:#f1e8d8'), paper(`<i>"Agnes yang dikasihi, saya amat menyesal. Kek itu resipi AWAK dan saya kata ia milik saya. Awak hilang kerja kerana saya. Saya terlalu malu untuk memberitahu sesiapa. Suatu hari, saya harap keluarga saya dapat membetulkannya. — June Bennett, 1995"</i>`, 'background:#f1e8d8')) } },

      /* ---------------- PHOTOS (given in interviews) ---------------- */
      { id: 'fridge_photo', type: 'photo', icon: '📸', photo: true, title: T("Ms. Nair's fridge photo", 'Gambar peti sejuk Cik Nair'), art: 'fridge001', stampT: mm('9:05'), stampLabel: T('Phone camera (correct time)', 'Kamera telefon (masa betul)'),
        desc: T(`A phone photo of the staffroom fridge for the allergy list.`, `Gambar telefon peti sejuk bilik guru untuk senarai alahan.`),
        zoomNotice: T(`You zoom in: on the middle shelf is a RED lunchbox with "OLIVER B." on it. The photo time is 9:05 pm.`, `Anda zum: di rak tengah ada kotak makanan MERAH bertulis "OLIVER B.". Masa gambar ialah 9:05 malam.`),
        timeline: T("Oliver's lunchbox is in the fridge.", 'Kotak makanan Oliver ada dalam peti sejuk.') },
      { id: 'corridor_photo', type: 'photo', icon: '📸', photo: true, title: T("Zara's secret selfie", 'Swafoto rahsia Zara'), art: 'corr001', stampT: mm('9:14'), stampLabel: T('Phone camera (correct time)', 'Kamera telefon (masa betul)'),
        desc: T(`Zara's selfie in the dark hallway, with crisps.`, `Swafoto Zara di lorong gelap, dengan kerepek.`),
        zoomNotice: T(`You zoom in on the background: a tall man in a caretaker's jacket hurries toward the old kitchen door, holding something RED under his coat. The photo time is 9:14 pm.`, `Anda zum latar belakang: seorang lelaki tinggi berjaket penjaga bergegas ke pintu dapur lama, memegang sesuatu yang MERAH di bawah kotnya. Masa gambar ialah 9:14 malam.`),
        timeline: T('A man in a caretaker\'s jacket carries something red to the old kitchen.', 'Lelaki berjaket penjaga membawa sesuatu yang merah ke dapur lama.') },

      /* ---------------- INFERENCES ---------------- */
      { id: 'inf_drops', kind: 'inference', type: 'deduction', icon: '💡', title: T('The "blood" is beetroot juice', '"Darah" itu jus bit'),
        desc: T(`In soap water the red drop turned yellow-brown. Real blood stays red. The trail is beetroot juice — like the empty bottle in Kenji's bag.`, `Dalam air sabun titisan merah bertukar kuning-perang. Darah sebenar kekal merah. Jejak itu jus bit — seperti botol kosong dalam beg Kenji.`) },
      { id: 'inf_speaker', kind: 'inference', type: 'deduction', icon: '💡', title: T('The scratching is a speaker on a timer', 'Bunyi cakaran ialah pembesar suara dengan pemasa'),
        desc: T(`The scratches come at 9:30, 9:36, 9:42... exactly every 6 minutes, from a speaker marked "K.M.". A machine, not a ghost.`, `Cakaran berlaku pukul 9:30, 9:36, 9:42... tepat setiap 6 minit, daripada pembesar suara bertanda "K.M.". Mesin, bukan hantu.`) },
      { id: 'inf_keypad', kind: 'inference', type: 'deduction', icon: '💡', title: T('Only LOWE\'s code opened the door while the lunchbox vanished', 'Hanya kod LOWE membuka pintu ketika kotak makanan hilang'),
        desc: T(`The lunchbox was there at 9:05. Ms. Nair left at 9:08 and came back at 9:30. In between, the door opened only once: 9:12, code 4 — Mr. Lowe. Students have no code.`, `Kotak makanan ada pukul 9:05. Cik Nair keluar pukul 9:08 dan kembali pukul 9:30. Di antaranya, pintu dibuka sekali sahaja: 9:12, kod 4 — Encik Lowe. Murid tiada kod.`) },
      { id: 'inf_recipe', kind: 'inference', type: 'deduction', icon: '💡', title: T('The recipe was really Agnes\'s', 'Resipi itu sebenarnya milik Agnes'),
        desc: T(`The card says "from the kitchen of Agnes L. — 1989". The thief ate nothing: he only wanted the recipe card.`, `Kad itu tertulis "from the kitchen of Agnes L. — 1989". Pencuri tidak makan apa-apa: dia hanya mahu kad resipi itu.`) },
      { id: 'inf_motive', kind: 'inference', type: 'deduction', icon: '💡', title: T('MOTIVE: Agnes lost her job when the recipe was taken', 'MOTIF: Agnes hilang kerja apabila resipinya diambil'),
        desc: T(`In 1994 Oliver's grandma won the bake-off with the Midnight Cake, and cook Agnes LOWE lost her job, saying the recipe was hers. Agnes was Mr. Lowe's mother.`, `Pada 1994 nenek Oliver memenangi pertandingan dengan Kek Tengah Malam, dan tukang masak Agnes LOWE hilang kerja, berkata resipi itu miliknya. Agnes ialah ibu Encik Lowe.`) },

      /* ---------------- WITNESS CLAIMS ---------------- */
      { id: 'c_lowe_room', kind: 'claim', person: 'lowe', t: mm('9:12'), type: 'statement', icon: '💬', title: T('Lowe: "I stayed in my room all evening. I never went to the staffroom."', 'Lowe: "Saya duduk di bilik sepanjang malam. Saya tidak pernah ke bilik guru."'), desc: T('Mr. Lowe says he did not leave his room.', 'Encik Lowe berkata dia tidak keluar dari biliknya.') },
      { id: 'c_lowe_agnes', kind: 'claim', person: 'lowe', t: 0, type: 'statement', icon: '💬', title: T('Lowe: "Agnes? Never knew her. It\'s just a story."', 'Lowe: "Agnes? Tak pernah kenal. Itu cuma cerita."'), desc: T('He says the Hungry Cook means nothing to him.', 'Dia berkata Tukang Masak Lapar tidak bermakna apa-apa baginya.') },
      { id: 'c_kenji_bed', kind: 'claim', person: 'kenji', t: 0, type: 'statement', icon: '💬', title: T('Kenji: "I was in my sleeping bag the WHOLE time!"', 'Kenji: "Saya dalam beg tidur SEPANJANG masa!"'), desc: T('Kenji says he did nothing.', 'Kenji berkata dia tidak buat apa-apa.') },
      { id: 'c_kenji_admit', kind: 'claim', person: 'kenji', t: mm('9:25'), type: 'statement', icon: '💬', title: T('Kenji: "The blood and the scratching were my prank. But I NEVER took the lunchbox!"', 'Kenji: "Darah dan cakaran itu gurauan saya. Tetapi saya TIDAK PERNAH ambil kotak makanan!"'), desc: T('Kenji admits the prank only.', 'Kenji mengaku gurauan sahaja.') },
      { id: 'c_zara_asleep', kind: 'claim', person: 'zara', t: 0, type: 'statement', icon: '💬', title: T('Zara: "I was asleep. I didn\'t leave the classroom."', 'Zara: "Saya tidur. Saya tidak keluar dari bilik darjah."'), desc: T('Zara says she never left.', 'Zara berkata dia tidak pernah keluar.') },
      { id: 'c_zara_snack', kind: 'claim', person: 'zara', t: mm('9:13'), type: 'statement', icon: '💬', title: T('Zara: "OK... I sneaked out for crisps at 9:13. I took a selfie."', 'Zara: "OK... Saya keluar senyap-senyap beli kerepek pukul 9:13. Saya ambil swafoto."'), desc: T('Zara admits she left for a snack.', 'Zara mengaku dia keluar untuk makanan ringan.') },
      { id: 'c_nair_phone', kind: 'claim', person: 'nair', t: mm('9:08'), type: 'statement', icon: '💬', title: T('Ms. Nair: "I was outside on the phone from 9:08 to 9:30."', 'Cik Nair: "Saya di luar menelefon dari 9:08 hingga 9:30."'), desc: T('Her mother called. The staffroom door locked behind her.', 'Ibunya menelefon. Pintu bilik guru terkunci di belakangnya.') },
      { id: 'c_oliver_box', kind: 'claim', person: 'oliver', t: mm('9:00'), type: 'statement', icon: '💬', title: T('Oliver: "My lunchbox went in the fridge at 9:00. Grandma\'s recipe card was inside!"', 'Oliver: "Kotak makanan saya masuk peti sejuk pukul 9:00. Kad resipi Nenek ada di dalam!"'), desc: T('Oliver showed the recipe card to everyone at dinner.', 'Oliver menunjukkan kad resipi kepada semua orang semasa makan malam.') }
    ],

    /* ------------------------------------------------------------------ CONTRADICTION / SUPPORT CHECKER */
    pairs: [
      { a: 'c_lowe_room', b: 'door_log', type: 'contradiction', person: 'lowe', requires: ['keypad_read'],
        text: T('Mr. Lowe says he never went to the staffroom. The keypad says code 4 — LOWE — opened it at 9:12.', 'Encik Lowe berkata dia tidak pernah ke bilik guru. Papan kekunci berkata kod 4 — LOWE — membukanya pukul 9:12.'),
        explain: T('He was in the staffroom while Ms. Nair was outside.', 'Dia berada di bilik guru semasa Cik Nair di luar.') },
      { a: 'c_lowe_room', b: 'corridor_photo', type: 'contradiction', person: 'lowe',
        text: T("Zara's 9:14 selfie shows a man in a caretaker's jacket hurrying to the old kitchen with something red.", 'Swafoto Zara pukul 9:14 menunjukkan lelaki berjaket penjaga bergegas ke dapur lama dengan sesuatu yang merah.'),
        explain: T('He was not in his room.', 'Dia tidak berada di biliknya.') },
      { a: 'c_lowe_agnes', b: 'lowe_photo', type: 'contradiction', person: 'lowe',
        text: T('He says he never knew Agnes. His own photo says "Victor & Mum (Agnes), 1990".', 'Dia berkata dia tidak pernah kenal Agnes. Gambarnya sendiri tertulis "Victor & Mak (Agnes), 1990".'),
        explain: T('The Hungry Cook was his mother. He hid it.', 'Tukang Masak Lapar ialah ibunya. Dia menyembunyikannya.') },
      { a: 'c_kenji_bed', b: 'kenji_note', type: 'contradiction', person: 'kenji',
        text: T('Kenji says he did nothing. His own plan lists the speaker, the beetroot "blood" and the words on the door.', 'Kenji berkata dia tidak buat apa-apa. Rancangannya sendiri menyenaraikan pembesar suara, "darah" bit dan tulisan pada pintu.'),
        explain: T('Kenji made the scary prank.', 'Kenji membuat gurauan seram itu.') },
      { a: 'c_kenji_bed', b: 'beet_bottle', type: 'contradiction', person: 'kenji',
        text: T('An empty beetroot juice bottle with his name was in his bag.', 'Botol jus bit kosong bernama dia ada dalam begnya.'),
        explain: T('The red "blood" came from Kenji.', '"Darah" merah datang daripada Kenji.') },
      { a: 'c_kenji_admit', b: 'door_log', type: 'support', person: 'kenji', requires: ['keypad_read'],
        text: T('Kenji says he could not get into the staffroom. The log agrees: no student code opened the door.', 'Kenji berkata dia tidak boleh masuk bilik guru. Log bersetuju: tiada kod murid membuka pintu.') },
      { a: 'c_kenji_admit', b: 'kenji_note', type: 'support', person: 'kenji',
        text: T('His plan says: "Don\'t take anything. Just SCARE!" Nothing about the lunchbox.', 'Rancangannya berkata: "Jangan ambil apa-apa. Cuma TAKUTKAN!" Tiada apa tentang kotak makanan.') },
      { a: 'c_zara_asleep', b: 'crisp_packet', type: 'contradiction', person: 'zara',
        text: T('Zara says she never left. Her favourite crisps were bought from the hallway machine at 9:13.', 'Zara berkata dia tidak pernah keluar. Kerepek kegemarannya dibeli dari mesin lorong pukul 9:13.'),
        explain: T('She sneaked out for a snack — breaking a rule, not stealing.', 'Dia keluar senyap-senyap untuk makanan ringan — melanggar peraturan, bukan mencuri.') },
      { a: 'c_zara_snack', b: 'corridor_photo', type: 'support', person: 'zara',
        text: T('Her selfie at 9:14 shows her with crisps — and someone else in the background.', 'Swafotonya pukul 9:14 menunjukkan dia dengan kerepek — dan orang lain di latar belakang.') },
      { a: 'c_nair_phone', b: 'door_log', type: 'support', person: 'nair', requires: ['keypad_read'],
        text: T('The log shows Ms. Nair\'s code at 9:00 and 9:30 only. She was outside in between.', 'Log menunjukkan kod Cik Nair pukul 9:00 dan 9:30 sahaja. Dia di luar di antaranya.') },
      { a: 'c_oliver_box', b: 'fridge_photo', type: 'support', person: 'oliver',
        text: T('The 9:05 photo shows Oliver\'s red lunchbox in the fridge.', 'Gambar 9:05 menunjukkan kotak makanan merah Oliver dalam peti sejuk.') }
    ],

    /* ------------------------------------------------------------------ PUZZLES */
    puzzles: {
      pz_drops: { subject: 'science', title: T('Test the red drops', 'Uji titisan merah'), grants: { flags: ['drops_tested'], items: ['inf_drops'] }, tokens: 0,
        intro: T('Real blood stays RED in soap water. Beetroot juice turns YELLOW-BROWN, because soap water is a base.', 'Darah sebenar kekal MERAH dalam air sabun. Jus bit bertukar KUNING-PERANG, kerana air sabun ialah bes.'),
        steps: [
          { type: 'choice', q: T('You put one red drop in soap water. It turns yellow-brown. What is it?', 'Anda masukkan satu titisan merah dalam air sabun. Ia bertukar kuning-perang. Apakah ia?'),
            options: [T('Real blood', 'Darah sebenar'), T('Beetroot juice', 'Jus bit'), T('Red paint', 'Cat merah')], answer: 1,
            hints: [T('Which one changes colour in soap water?', 'Yang mana berubah warna dalam air sabun?')] },
          { type: 'classify', q: T('Observation (you can see/smell it) or inference (you work it out)?', 'Pemerhatian (anda boleh lihat/hidu) atau inferens (anda fikirkan)?'),
            statements: [
              { text: T('The drops are dark red.', 'Titisan itu merah gelap.'), answer: 'observation' },
              { text: T('The drops smell sweet and earthy.', 'Titisan itu berbau manis dan tanah.'), answer: 'observation' },
              { text: T('Someone made a fake blood trail on purpose.', 'Seseorang sengaja membuat jejak darah palsu.'), answer: 'inference' }
            ], hints: [T('Can you SEE or SMELL it? Then it is an observation.', 'Bolehkah anda LIHAT atau HIDU? Maka ia pemerhatian.')] }
        ],
        after: T('It is beetroot juice! Somebody made a fake blood trail.', 'Ia jus bit! Seseorang membuat jejak darah palsu.') },

      pz_speaker: { subject: 'math', title: T('When does the ghost scratch?', 'Bila hantu mencakar?'), grants: { flags: ['speaker_solved'], items: ['inf_speaker'] }, tokens: 0,
        intro: T('The speaker timer says: first play 9:30 pm, then every 6 minutes.', 'Pemasa pembesar suara berkata: main pertama 9:30 malam, kemudian setiap 6 minit.'),
        steps: [
          { type: 'choice', q: T('9:30 + 6 minutes = ?', '9:30 + 6 minit = ?'), options: ['9:34', '9:36', '9:40', '9:46'], answer: '9:36',
            hints: [T('30 + 6 = 36', '30 + 6 = 36')] },
          { type: 'choice', q: T('What time is the scratch AFTER 9:42?', 'Pukul berapa cakaran SELEPAS 9:42?'), options: ['9:44', '9:46', '9:48', '9:50'], answer: '9:48',
            hints: [T('42 + 6 = ?', '42 + 6 = ?')] },
          { type: 'number', q: T('How many scratches from 9:30 to 10:00 (count 9:30 and 10:00 too)?', 'Berapa cakaran dari 9:30 hingga 10:00 (kira 9:30 dan 10:00 juga)?'), answer: 6, options: [5, 6, 7, 30], unit: T('scratches', 'cakaran'),
            hints: [T('9:30, 9:36, 9:42, 9:48, 9:54, 10:00 — count them.', '9:30, 9:36, 9:42, 9:48, 9:54, 10:00 — kira.')] }
        ],
        after: T('The scratching comes exactly every 6 minutes. That is a timer — not a ghost!', 'Cakaran berlaku tepat setiap 6 minit. Itu pemasa — bukan hantu!') },

      pz_keypad: { subject: 'math', title: T('Read the door log', 'Baca log pintu'), grants: { flags: ['keypad_read'], items: ['inf_keypad'] }, tokens: 0,
        intro: T('The lunchbox was in the fridge at 9:05 (photo). Ms. Nair left at 9:08. Read the log carefully.', 'Kotak makanan ada dalam peti sejuk pukul 9:05 (gambar). Cik Nair keluar pukul 9:08. Baca log dengan teliti.'),
        steps: [
          { type: 'choice', q: T('Whose code opened the door at 9:12?', 'Kod siapa membuka pintu pukul 9:12?'), options: ['NAIR', 'LOWE', 'KENJI', T('Nobody', 'Tiada siapa')], answer: 'LOWE',
            hints: [T('Find 9:12 in the log.', 'Cari 9:12 dalam log.')] },
          { type: 'number', q: T('How many minutes after Ms. Nair left (9:08) did the door open again?', 'Berapa minit selepas Cik Nair keluar (9:08) pintu dibuka semula?'), answer: 4, options: [2, 4, 8, 12], unit: T('minutes', 'minit'),
            hints: [T('12 − 8 = ?', '12 − 8 = ?')] },
          { type: 'choice', q: T('Could a student open the door?', 'Bolehkah murid membuka pintu?'), options: [T('Yes, any time', 'Ya, bila-bila masa'), T('No — students have no code', 'Tidak — murid tiada kod')], answer: 1,
            hints: [T('Read the small line at the bottom.', 'Baca baris kecil di bawah.')] }
        ],
        after: T('Between 9:08 and 9:30 only ONE code opened the door: Mr. Lowe\'s, at 9:12.', 'Antara 9:08 dan 9:30 hanya SATU kod membuka pintu: kod Encik Lowe, pukul 9:12.') },

      pz_oven: { subject: 'thinking', title: T('Open the old oven', 'Buka ketuhar lama'), grants: { flags: ['oven_open'], items: ['lunchbox', 'recipe_card', 'inf_recipe'] }, tokens: 0,
        intro: T('Scratched on the oven door: "Finish each pattern." (Mr. Lowe\'s note has the same patterns.)', 'Tercakar pada pintu ketuhar: "Lengkapkan setiap corak." (Nota Encik Lowe ada corak yang sama.)'),
        art: 'oven001',
        steps: [
          { type: 'code', q: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
            patterns: ['2, 4, 6, ?', '9, 7, 5, ?', '1, 3, 5, ?'], answer: '837',
            hints: [T('Pattern 1 goes up by 2. Pattern 2 goes DOWN by 2.', 'Corak 1 naik 2. Corak 2 TURUN 2.'), T('Pattern 3: odd numbers. The code is 8, 3, 7.', 'Corak 3: nombor ganjil. Kodnya 8, 3, 7.')] }
        ],
        after: T('CLUNK. The heavy door swings open... and inside is Oliver\'s red lunchbox!', 'KLUNK. Pintu berat terbuka... dan di dalamnya kotak makanan merah Oliver!') },

      pz_news: { subject: 'english', title: T('Restore the 1994 newspaper', 'Pulihkan surat khabar 1994'), grants: { flags: ['news_read'], items: ['inf_motive'] }, tokens: 1,
        intro: T('Choose the correct PAST TENSE word for each gap.', 'Pilih perkataan KALA LAMPAU yang betul untuk setiap ruang.'),
        steps: [
          { type: 'cloze', q: T('Fix the newspaper:', 'Betulkan surat khabar:'),
            parts: ['Mrs. June Bennett ', { blank: ['win', 'won', 'winned'], answer: 'won' }, ' the Grand Bake-Off. The same day, cook Agnes Lowe ', { blank: ['lose', 'losed', 'lost'], answer: 'lost' }, ' her job. She said the recipe ', { blank: ['is', 'was', 'were'], answer: 'was' }, ' HERS.'],
            hints: [T('Win → won. Lose → lost.', 'Win → won. Lose → lost.'), T('One recipe in the past: was.', 'Satu resipi pada masa lampau: was.')] }
        ],
        after: T('Agnes LOWE... the Hungry Cook was Mr. Lowe\'s mother! You earn 1 hint token. Maybe the old kitchen keeps more secrets...', 'Agnes LOWE... Tukang Masak Lapar ialah ibu Encik Lowe! Anda dapat 1 token petunjuk. Mungkin dapur lama menyimpan lebih banyak rahsia...') }
    },

    /* ------------------------------------------------------------------ DEDUCTION QUESTIONS */
    questions: [
      { id: 'q_how', title: T('1. What made the "Hungry Cook" haunting?', '1. Apa yang menyebabkan gangguan "Tukang Masak Lapar"?'),
        options: [
          { id: 'ghost', text: T('A real ghost.', 'Hantu sebenar.') },
          { id: 'prank', text: T('A prank: beetroot "blood" and a hidden speaker on a timer.', 'Gurauan: "darah" bit dan pembesar suara tersembunyi dengan pemasa.'), correct: true },
          { id: 'pipes', text: T('Old pipes and rust.', 'Paip lama dan karat.') },
          { id: 'rats', text: T('Rats in the walls.', 'Tikus dalam dinding.') }
        ],
        needs: [['red_drops', 'inf_drops'], ['speaker', 'inf_speaker']], needsFlags: ['drops_tested', 'speaker_solved'],
        hints: [T('Test the drops with soap water. Look at the speaker\'s timer.', 'Uji titisan dengan air sabun. Lihat pemasa pembesar suara.')] },
      { id: 'q_two', title: T('2. Did the prankster take the lunchbox?', '2. Adakah pelawak itu mengambil kotak makanan?'),
        options: [
          { id: 'same', text: T('Yes — the prankster did everything.', 'Ya — pelawak itu melakukan segalanya.') },
          { id: 'two', text: T('No — the prank and the theft were done by TWO different people.', 'Tidak — gurauan dan kecurian dilakukan oleh DUA orang berbeza.'), correct: true },
          { id: 'ghost', text: T('The ghost took it.', 'Hantu mengambilnya.') },
          { id: 'lost', text: T('Nobody — Oliver lost it.', 'Tiada siapa — Oliver menghilangkannya.') }
        ],
        needs: [['kenji_note', 'c_kenji_admit'], ['door_log', 'inf_keypad']], needsFlags: ['keypad_read'],
        hints: [T('Read Kenji\'s RULES. Could a student open the staffroom?', 'Baca PERATURAN Kenji. Bolehkah murid membuka bilik guru?')] },
      { id: 'q_when', title: T('3. When was the lunchbox taken?', '3. Bila kotak makanan diambil?'),
        options: [
          { id: 'a', text: T('Before 9:05', 'Sebelum 9:05') },
          { id: 'b', text: T('At about 9:12, while Ms. Nair was outside', 'Kira-kira 9:12, semasa Cik Nair di luar'), correct: true },
          { id: 'c', text: T('At 9:25, with the red drops', 'Pukul 9:25, bersama titisan merah') },
          { id: 'd', text: T('After 9:30', 'Selepas 9:30') }
        ],
        needs: [['fridge_photo'], ['door_log', 'inf_keypad']], needsFlags: ['keypad_read'],
        hints: [T('When was it last seen? When did the door open next?', 'Bila kali terakhir ia dilihat? Bila pintu dibuka seterusnya?')] },
      { id: 'q_who', title: T('4. Who took the lunchbox?', '4. Siapa mengambil kotak makanan?'),
        options: [
          { id: 'lowe', text: T('Mr. Lowe, the caretaker', 'Encik Lowe, penjaga'), correct: true }, { id: 'kenji', text: T('Kenji', 'Kenji') },
          { id: 'zara', text: T('Zara', 'Zara') }, { id: 'nair', text: T('Ms. Nair', 'Cik Nair') }
        ],
        needs: [['corridor_photo', 'lowe_keys'], ['lunchbox', 'recipe_card'], ['c_lowe_room', 'door_log']], needsFlags: ['oven_open'],
        hints: [T('Whose code? Who is in the 9:14 selfie? Whose oven hid it?', 'Kod siapa? Siapa dalam swafoto 9:14? Ketuhar siapa menyoroknya?')] },
      { id: 'q_why', title: T('5. WHY did he take it?', '5. KENAPA dia mengambilnya?'),
        options: [
          { id: 'hungry', text: T('He was hungry.', 'Dia lapar.') },
          { id: 'sell', text: T('To sell the lunchbox.', 'Untuk menjual kotak makanan.') },
          { id: 'recipe', text: T('To get back his mother\'s recipe, which was taken from her in 1994.', 'Untuk mendapatkan semula resipi ibunya, yang diambil daripadanya pada 1994.'), correct: true },
          { id: 'scare', text: T('To scare Oliver.', 'Untuk menakutkan Oliver.') }
        ],
        needs: [['recipe_card', 'inf_recipe'], ['lowe_photo', 'old_news', 'inf_motive']], needsFlags: ['news_read'],
        hints: [T('Read the tiny writing on the recipe card, and the 1994 newspaper.', 'Baca tulisan kecil pada kad resipi, dan surat khabar 1994.')] }
    ],

    timeUp: { title: T('The head teacher is here!', 'Guru besar sudah tiba!'), text: T('Car lights sweep across the dark windows. The head teacher wants an answer NOW.', 'Lampu kereta menyuluh tingkap yang gelap. Guru besar mahukan jawapan SEKARANG.') },
    conclusion: {
      who: { correct: 'lowe' },
      what: { questionId: 'q_two' },
      when: { questionId: 'q_when' },
      whereQ: T('WHERE is the lunchbox now?', 'DI MANA kotak makanan itu sekarang?'),
      where: [
        { id: 'oven', text: T('Locked in the old oven in the old kitchen', 'Dikunci dalam ketuhar lama di dapur lama'), correct: true },
        { id: 'bag', text: T("In Kenji's backpack", 'Dalam beg Kenji') }, { id: 'bin', text: T('In the hallway bin', 'Dalam tong sampah lorong') },
        { id: 'eaten', text: T('Eaten by the ghost', 'Dimakan hantu') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }
      ],
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_door', label: T('Who opened the staffroom', 'Siapa membuka bilik guru'), items: ['door_log', 'inf_keypad'] },
        { id: 'g_seen', label: T('Mr. Lowe seen with something red', 'Encik Lowe dilihat dengan sesuatu yang merah'), items: ['corridor_photo'] },
        { id: 'g_box', label: T('The lunchbox in his mother\'s oven', 'Kotak makanan dalam ketuhar ibunya'), items: ['lunchbox', 'recipe_card', 'lowe_keys'] },
        { id: 'g_motive', label: T('The motive', 'Motif'), items: ['inf_recipe', 'inf_motive', 'old_news', 'lowe_photo'] },
        { id: 'g_prank', label: T('The prank was separate', 'Gurauan itu berasingan'), items: ['kenji_note', 'inf_drops', 'inf_speaker', 'c_kenji_admit'] },
        { id: 'g_lie', label: T("Mr. Lowe's lies", 'Pembohongan Encik Lowe'), items: ['c_lowe_room', 'c_lowe_agnes'] }
      ],
      strongCoverage: 4,
      secondary: ['fridge_photo', 'crisp_packet', 'beet_bottle', 'legend_poster', 'oven_note'],
      secondaryNeeded: 2,
      lieFlags: ['c_lowe_room', 'c_lowe_agnes', 'c_kenji_bed', 'c_zara_asleep']
    },

    endings: [
      { id: 'secret', stars: 4, title: T('The Cook Who Was Never Hungry', 'Tukang Masak Yang Tidak Pernah Lapar'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.has.grandma_letter && r.flags.news_read,
        text: T(
          `You solve BOTH mysteries — and you find the letter nobody ever read. Mr. Lowe sits down slowly. "Mum cried for years," he says. "I only wanted her recipe back." Oliver reads his grandma's letter and his eyes fill with tears. The next day, Oliver and Mr. Lowe bake the Midnight Chocolate Cake together, and the card now says: "Agnes Lowe's recipe". Kenji has to clean the hallway, and Zara is in trouble for the crisps. That night the scratching stops for good... but some children say they smelled warm chocolate in the old kitchen. Case closed!`,
          `Anda menyelesaikan KEDUA-DUA misteri — dan anda menjumpai surat yang tiada siapa pernah baca. Encik Lowe duduk perlahan-lahan. "Mak menangis bertahun-tahun," katanya. "Saya cuma mahu resipinya kembali." Oliver membaca surat neneknya dan matanya berkaca. Keesokan harinya, Oliver dan Encik Lowe membakar Kek Coklat Tengah Malam bersama, dan kad itu kini tertulis: "Resipi Agnes Lowe". Kenji perlu membersihkan lorong, dan Zara dimarahi kerana kerepek. Malam itu bunyi cakaran berhenti selama-lamanya... tetapi ada kanak-kanak kata mereka terhidu coklat panas di dapur lama. Kes selesai!`) },
      { id: 'perfect', stars: 3, title: T('Case Closed!', 'Kes Selesai!'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec >= 2,
        text: T(
          `Brilliant! You proved there were TWO people: Kenji made the scary prank, but Mr. Lowe took the lunchbox at 9:12 with his own door code and hid it in his mother's oven. He confesses: the recipe was really his mother's. The head teacher will talk to both families. Oliver gets his lunchbox back — and a lot to think about.`,
          `Hebat! Anda membuktikan ada DUA orang: Kenji membuat gurauan seram, tetapi Encik Lowe mengambil kotak makanan pukul 9:12 dengan kod pintunya sendiri dan menyorokkannya dalam ketuhar ibunya. Dia mengaku: resipi itu sebenarnya milik ibunya. Guru besar akan bercakap dengan kedua-dua keluarga. Oliver mendapat semula kotak makanannya — dan banyak perkara untuk difikirkan.`) },
      { id: 'missed', stars: 2, title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec < 2,
        text: T(
          `Right answer, strong proof! But you missed some side clues (the fridge photo, the crisp packet, the beetroot bottle, the poster or the oven note). Because of that, Zara and Kenji are still blamed for more than they did. Next time, check every room.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas beberapa petunjuk sampingan (gambar peti sejuk, bungkusan kerepek, botol bit, poster atau nota ketuhar). Kerana itu, Zara dan Kenji masih dipersalahkan lebih daripada yang mereka lakukan. Lain kali, periksa setiap bilik.`) },
      { id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'),
        when: (r) => r.ok.who,
        text: T(`You named the right person — but your proof was too weak. Read the door log, open the old oven, and find out why. Hurry before 10:15!`,
                `Anda menyebut orang yang betul — tetapi bukti anda terlalu lemah. Baca log pintu, buka ketuhar lama, dan cari sebabnya. Cepat sebelum 10:15!`) },
      { id: 'wrong', stars: 0, title: T('The wrong answer!', 'Jawapan yang salah!'),
        when: () => true,
        text: T(`That is not right. Remember: the person who made the scary prank is not always the person who took the lunchbox. Check who could open the staffroom door.`,
                `Itu tidak betul. Ingat: orang yang membuat gurauan seram tidak semestinya orang yang mengambil kotak makanan. Semak siapa yang boleh membuka pintu bilik guru.`) }
    ],
    wrongWho: {
      kenji: T('Kenji made the fake blood and the scratching speaker, but students have no staffroom code. His own plan says "Don\'t take anything".', 'Kenji membuat darah palsu dan pembesar suara cakaran, tetapi murid tiada kod bilik guru. Rancangannya sendiri berkata "Jangan ambil apa-apa".'),
      zara: T('Zara sneaked out for crisps at 9:13, but she has no door code — and her selfie shows someone else carrying the red lunchbox.', 'Zara keluar senyap-senyap untuk kerepek pukul 9:13, tetapi dia tiada kod pintu — dan swafotonya menunjukkan orang lain membawa kotak makanan merah.'),
      nair: T('Ms. Nair was outside on the phone from 9:08 to 9:30. Her code was not used in between, and she took the photo that proves the lunchbox was there.', 'Cik Nair di luar menelefon dari 9:08 hingga 9:30. Kodnya tidak digunakan di antaranya, dan dia mengambil gambar yang membuktikan kotak makanan ada di situ.')
    },

    /* ------------------------------------------------------------------ INTERVIEWS */
    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      lowe: {
        greeting: T(`*He looks up slowly from his mug.* ...Back to bed, detective. Nothing good walks these halls after dark.`, `*Dia mengangkat muka perlahan dari cawannya.* ...Pergi tidur, detektif. Tiada yang baik berjalan di lorong ini selepas gelap.`),
        topics: [
          { id: 'room', label: T('Where were you this evening?', 'Di mana anda malam ini?'),
            lines: [T('Right here. In my room. All evening. I never went near the staffroom.', 'Di sini. Dalam bilik saya. Sepanjang malam. Saya tidak pernah mendekati bilik guru.')], claims: ['c_lowe_room'] },
          { id: 'story', label: T('Tell me about the Hungry Cook.', 'Ceritakan tentang Tukang Masak Lapar.'),
            lines: [T('They locked her kitchen in 1994. They say she still walks at night, dragging food to her oven... and children who are out of bed. *He smiles, but his eyes do not.*', 'Mereka mengunci dapurnya pada 1994. Kata orang dia masih berjalan pada waktu malam, menyeret makanan ke ketuhar... dan kanak-kanak yang keluar dari katil. *Dia tersenyum, tetapi matanya tidak.*')] },
          { id: 'agnes', label: T('Did you know Cook Agnes?', 'Adakah anda kenal Tukang Masak Agnes?'),
            lines: [T('Agnes? Never knew her. It is just a story for frightening children.', 'Agnes? Tak pernah kenal. Itu cuma cerita untuk menakutkan kanak-kanak.')], claims: ['c_lowe_agnes'] },
          { id: 'truth', label: T('Mr. Lowe... please tell me the truth.', 'Encik Lowe... tolong beritahu kebenaran.'), after: 'lowe_admit',
            lines: [T('...At dinner the boy showed everyone that card. MUM\'S cake. Mum\'s handwriting. She lost her job over that recipe and cried for years. I just... wanted it back. I never wanted to hurt the boy.', '...Semasa makan malam budak itu menunjukkan kad itu kepada semua orang. Kek MAK. Tulisan tangan Mak. Dia hilang kerja kerana resipi itu dan menangis bertahun-tahun. Saya cuma... mahu ia kembali. Saya tidak pernah mahu menyakiti budak itu.')] }
        ],
        present: {
          door_log: { requiresFlag: 'keypad_read', lines: [T('That machine is always wrong. Always.', 'Mesin itu selalu salah. Selalu.')], lockedLines: [T('Numbers and times. What do they mean to you? (Read the log properly first.)', 'Nombor dan masa. Apa maknanya pada awak? (Baca log itu dengan betul dahulu.)')] },
          corridor_photo: { lines: [T('*His hand shakes.* Lots of men wear a jacket like that.', '*Tangannya menggeletar.* Ramai lelaki memakai jaket begitu.')] },
          lowe_photo: { lines: [T('Put that down! ...Yes. She was my mum. Agnes Lowe. The best cook this school ever had.', 'Letak itu! ...Ya. Dia ibu saya. Agnes Lowe. Tukang masak terbaik sekolah ini.')] },
          recipe_card: { unlock: 'lowe_admit', lines: [T('*He stares at the tiny writing.* "From the kitchen of Agnes L." ...You found it. Then you know.', '*Dia merenung tulisan kecil itu.* "From the kitchen of Agnes L." ...Awak jumpa. Jadi awak tahu.')] },
          lunchbox: { unlock: 'lowe_admit', lines: [T('*He closes his eyes.* Her oven. Of course you opened her oven.', '*Dia menutup mata.* Ketuhar dia. Tentu awak buka ketuhar dia.')] },
          grandma_letter: { lines: [T('*He reads it twice. A tear runs down his cheek.* She was sorry... Mum never knew. Mum never knew.', '*Dia membacanya dua kali. Air mata mengalir di pipinya.* Dia menyesal... Mak tak pernah tahu. Mak tak pernah tahu.')] },
          kenji_note: { lines: [T('That boy and his tricks. He made the whole school scream.', 'Budak itu dan helahnya. Dia membuat seluruh sekolah menjerit.')] }
        }
      },
      kenji: {
        greeting: T(`Did you HEAR it?! The scratching?! The Hungry Cook is REAL! *He is grinning a little too much.*`, `Awak DENGAR?! Bunyi cakaran?! Tukang Masak Lapar itu BENAR! *Dia tersengih sedikit terlalu banyak.*`),
        topics: [
          { id: 'bed', label: T('Where were you tonight?', 'Di mana awak malam ini?'),
            lines: [T('In my sleeping bag! The WHOLE time! I didn\'t do anything!', 'Dalam beg tidur saya! SEPANJANG masa! Saya tak buat apa-apa!')], claims: ['c_kenji_bed'] },
          { id: 'ghost', label: T('Do you believe in the ghost?', 'Awak percaya hantu itu?'),
            lines: [T('Totally. 100%. Definitely. She wrote "STILL HUNGRY" on the door! In BLOOD!', 'Betul-betul. 100%. Pasti. Dia tulis "STILL HUNGRY" pada pintu! Dengan DARAH!')] },
          { id: 'code', label: T('Can you open the staffroom?', 'Bolehkah awak buka bilik guru?'), after: 'kenji_admit',
            lines: [T('No way! Students don\'t have a code. I tried 1-2-3-4 once. Didn\'t work. The lunchbox wasn\'t me, I SWEAR.', 'Tak mungkin! Murid tiada kod. Saya pernah cuba 1-2-3-4. Tak jadi. Kotak makanan bukan saya, SUMPAH.')] }
        ],
        present: {
          kenji_note: { unlock: 'kenji_admit', claims: ['c_kenji_admit'], lines: [T('...OK, OK! The beetroot blood and the scratching speaker were me. It was just a prank! But I NEVER took the lunchbox. Read my rules!', '...OK, OK! Darah bit dan pembesar suara cakaran itu saya. Cuma gurauan! Tetapi saya TIDAK PERNAH ambil kotak makanan. Baca peraturan saya!')] },
          beet_bottle: { unlock: 'kenji_admit', claims: ['c_kenji_admit'], lines: [T('That... is just juice. Fine! The "blood" was me. But NOT the lunchbox!', 'Itu... cuma jus. Baiklah! "Darah" itu saya. Tetapi BUKAN kotak makanan!')] },
          speaker: { lines: [T('Hey, that\'s my speaker! Scratch sound number 4. Scary, right?', 'Hei, itu pembesar suara saya! Bunyi cakaran nombor 4. Seram, kan?')] },
          corridor_photo: { lines: [T('Whoa... that\'s Mr. Lowe in the back! What is he carrying?!', 'Wah... itu Encik Lowe di belakang! Apa yang dia bawa?!')] }
        }
      },
      zara: {
        greeting: T(`I didn't take it! Everyone thinks I did because of the bake-off. That's not fair!`, `Saya tak ambil! Semua orang fikir saya ambil kerana pertandingan kek. Itu tak adil!`),
        topics: [
          { id: 'asleep', label: T('Did you leave the classroom?', 'Adakah awak keluar dari bilik darjah?'),
            lines: [T('No. I was asleep. Really.', 'Tidak. Saya tidur. Betul.')], claims: ['c_zara_asleep'] },
          { id: 'bake', label: T('Tell me about the bake-off.', 'Ceritakan tentang pertandingan kek.'),
            lines: [T('It\'s tomorrow. Oliver showed everyone his grandma\'s card at dinner. Mr. Lowe went really quiet when he saw it. Like he saw a ghost.', 'Esok. Oliver tunjuk kad neneknya kepada semua orang semasa makan malam. Encik Lowe jadi sangat senyap bila nampak. Macam dia nampak hantu.')] },
          { id: 'selfie', label: T('Can I see your phone photos?', 'Boleh saya lihat gambar telefon awak?'), after: 'zara_admit', gives: ['corridor_photo'],
            lines: [T('Fine. Here\'s my crisp selfie. Wait... who is THAT behind me?', 'Baiklah. Ini swafoto kerepek saya. Tunggu... siapa ITU di belakang saya?')] }
        ],
        present: {
          crisp_packet: { unlock: 'zara_admit', claims: ['c_zara_snack'], lines: [T('...OK. I sneaked out for Chilli Crunch at 9:13. I took a selfie in the dark hallway. It was SO creepy. Please don\'t tell Ms. Nair!', '...OK. Saya keluar senyap-senyap beli Chilli Crunch pukul 9:13. Saya ambil swafoto di lorong gelap. SANGAT seram. Tolong jangan beritahu Cik Nair!')] },
          corridor_photo: { lines: [T('That\'s Mr. Lowe! He was walking so fast. I thought he was the ghost!', 'Itu Encik Lowe! Dia berjalan sangat laju. Saya ingat dia hantu!')] }
        }
      },
      nair: {
        greeting: T(`I'm so sorry about all this. I only stepped outside for a few minutes, and now the whole camp is in tears.`, `Saya minta maaf tentang semua ini. Saya cuma keluar beberapa minit, dan kini seluruh perkhemahan menangis.`),
        topics: [
          { id: 'where', label: T('Where were you between 9:00 and 9:30?', 'Di mana anda antara 9:00 dan 9:30?'),
            lines: [T('I put Oliver\'s lunchbox in the fridge at 9:00. At 9:08 my mother called, so I went out to the car park. The door locks itself. I came back at 9:30 and it was gone.', 'Saya letak kotak makanan Oliver dalam peti sejuk pukul 9:00. Pukul 9:08 ibu saya menelefon, jadi saya keluar ke tempat letak kereta. Pintu terkunci sendiri. Saya kembali pukul 9:30 dan ia sudah hilang.')], claims: ['c_nair_phone'] },
          { id: 'photo', label: T('Did you take any photos?', 'Adakah anda ambil gambar?'), gives: ['fridge_photo'],
            lines: [T('Yes! At 9:05 I photographed the fridge for the allergy list. Here.', 'Ya! Pukul 9:05 saya merakam peti sejuk untuk senarai alahan. Nah.')] },
          { id: 'codes', label: T('Who has a door code?', 'Siapa ada kod pintu?'),
            lines: [T('Only staff. My code is 1. Mr. Lowe the caretaker has code 4. Students have none.', 'Hanya staf. Kod saya 1. Encik Lowe penjaga ada kod 4. Murid tiada.')] }
        ],
        present: {
          door_log: { lines: [T('9:12, code 4? That\'s Mr. Lowe\'s code! But he said he never left his room...', '9:12, kod 4? Itu kod Encik Lowe! Tetapi dia kata dia tidak pernah keluar dari biliknya...')] },
          beet_bottle: { lines: [T('Beetroot! So the blood is FAKE. Thank goodness.', 'Bit! Jadi darah itu PALSU. Syukurlah.')] }
        }
      },
      oliver: {
        greeting: T(`*He is hugging his pillow.* My lunchbox... the ghost took it. Grandma's card was inside!`, `*Dia memeluk bantalnya.* Kotak makanan saya... hantu ambil. Kad Nenek ada di dalam!`),
        topics: [
          { id: 'box', label: T('When did you last see your lunchbox?', 'Bila kali terakhir awak nampak kotak makanan awak?'),
            lines: [T('At 9:00 Ms. Nair put it in the staffroom fridge. Grandma\'s recipe card was inside, for the bake-off tomorrow.', 'Pukul 9:00 Cik Nair letak dalam peti sejuk bilik guru. Kad resipi Nenek ada di dalam, untuk pertandingan kek esok.')], claims: ['c_oliver_box'] },
          { id: 'grandma', label: T('Tell me about your grandma.', 'Ceritakan tentang nenek awak.'),
            lines: [T('She won a big prize here in 1994 with that cake. She never talked about it. She always looked sad when I asked.', 'Dia menang hadiah besar di sini pada 1994 dengan kek itu. Dia tak pernah bercakap tentangnya. Dia selalu nampak sedih bila saya tanya.')] }
        ],
        present: {
          lunchbox: { lines: [T('MY LUNCHBOX! You found it! ...My sandwich is still here. The ghost wasn\'t hungry?', 'KOTAK MAKANAN SAYA! Awak jumpa! ...Sandwic saya masih ada. Hantu tak lapar?')] },
          grandma_letter: { lines: [T('That\'s Grandma\'s writing... She was sorry. All these years.', 'Itu tulisan Nenek... Dia menyesal. Selama bertahun-tahun.')] }
        }
      }
    },

    /* ------------------------------------------------------------------ SPOOKY MOMENTS (scare level 1 = Low, 2 = Medium) */
    horror: {
      zones: [
        { id: 'cr_scratch', room: 'CR', once: true, minScare: 1, delay: 5, fx: ['sfx:scratch', 'flicker:CR:1.2'], text: T('😱 Something SCRATCHES inside the wall, right behind your head.', '😱 Sesuatu MENCAKAR di dalam dinding, betul-betul di belakang kepala anda.') },
        { id: 'cr_whisper', room: 'CR', once: true, minScare: 2, delay: 20, fx: ['sfx:whisper'], text: T('🗣️ A child whispers in the dark: "She\'s coming... she\'s still hungry..."', '🗣️ Seorang kanak-kanak berbisik dalam gelap: "Dia datang... dia masih lapar..."') },
        { id: 'hw_flicker', room: 'HW', once: true, minScare: 1, delay: 1.5, fx: ['flicker:HW:2.5', 'sfx:flicker'], text: T('💡 The hallway lights stutter. The red drops shine like wet blood.', '💡 Lampu lorong berkelip. Titisan merah berkilat seperti darah basah.') },
        { id: 'hw_steps', room: 'HW', once: true, minScare: 2, delay: 7, fx: ['sfx:steps_far', 'shake:0.3'], text: T('👣 Slow footsteps behind you... they stop when you stop.', '👣 Tapak kaki perlahan di belakang anda... ia berhenti apabila anda berhenti.') },
        { id: 'sr_hum', room: 'SR', once: true, minScare: 1, delay: 3, fx: ['sfx:static'], text: T('🧊 The fridge door creaks open by itself... and slowly closes.', '🧊 Pintu peti sejuk terbuka sendiri... dan perlahan-lahan tertutup.') },
        { id: 'ct_tick', room: 'CT', once: true, minScare: 1, delay: 4, fx: ['sfx:musicbox'], text: T('🎵 An old music box plays one sad tune and stops.', '🎵 Kotak muzik lama memainkan satu lagu sedih dan berhenti.') },
        { id: 'ok_slam', room: 'OK', once: true, minScare: 1, delay: 1, fx: ['sfx:slam', 'shake:0.5', 'flash:black'], text: T('🚪 The old kitchen door SLAMS behind you!', '🚪 Pintu dapur lama TERHEMPAS di belakang anda!') },
        { id: 'ok_cook', room: 'OK', once: true, minScare: 2, delay: 6, fx: ['blackout:1.6', 'sfx:voice', 'music:tense:10'], text: T('🔪 In the darkness, pots clatter... and a woman\'s voice sighs: "Still... hungry..."', '🔪 Dalam gelap, periuk berdentang... dan suara wanita mengeluh: "Masih... lapar..."') },
        { id: 'ok_heart', room: 'OK', once: true, minScare: 2, delay: 15, fx: ['sfx:heartbeat', 'flicker:OK:2'], text: T('💓 Your heart is pounding. The oven door seems to breathe.', '💓 Jantung anda berdegup kencang. Pintu ketuhar seolah-olah bernafas.') }
      ],
      figures: [
        { name: 'figure1', room: 'OK', minScare: 1, revealDistance: 3.2, flickerRoom: 'OK', sfx: 'sting', reveal: T('It is only an old cook\'s apron and tall hat hanging on a hook... swinging, though there is no wind.', 'Ia hanya apron dan topi tinggi tukang masak lama tergantung pada cangkuk... berayun, walaupun tiada angin.') },
        { name: 'figure2', room: 'HW', minScare: 2, revealDistance: 2.6, flickerRoom: 'HW', reveal: T('Just a mop and bucket standing in the corner. (A false alarm!)', 'Hanya mop dan baldi berdiri di sudut. (Penggera palsu!)') }
      ]
    },

    /* ------------------------------------------------------------------ EXIT TICKET */
    exitTicket: [
      { subject: 'science', q: T('A red drop turns yellow-brown in soap water. What is it most likely?', 'Titisan merah bertukar kuning-perang dalam air sabun. Apakah ia kemungkinan besar?'),
        options: [T('Blood', 'Darah'), T('Beetroot juice', 'Jus bit'), T('Water', 'Air')], answer: 1, why: T('Beetroot juice changes colour in soap water (a base). Blood stays red.', 'Jus bit berubah warna dalam air sabun (bes). Darah kekal merah.') },
      { subject: 'math', q: T('A sound plays every 6 minutes, starting at 9:30. When is the 3rd sound?', 'Bunyi dimainkan setiap 6 minit, bermula 9:30. Bila bunyi ke-3?'),
        options: ['9:36', '9:42', '9:48', '9:39'], answer: 1, why: T('9:30 (1st), 9:36 (2nd), 9:42 (3rd).', '9:30 (pertama), 9:36 (kedua), 9:42 (ketiga).') },
      { subject: 'thinking', q: T('Kenji made the scary prank. Does that prove he took the lunchbox?', 'Kenji membuat gurauan seram. Adakah itu membuktikan dia mengambil kotak makanan?'),
        options: [T('Yes, of course', 'Ya, sudah tentu'), T('No — each action needs its own evidence', 'Tidak — setiap tindakan perlukan buktinya sendiri')], answer: 1, why: T('Two things that happen together can be done by two different people.', 'Dua perkara yang berlaku bersama boleh dilakukan oleh dua orang berbeza.') }
    ],

    /* ------------------------------------------------------------------ 3D WORLD (built from this data) */
    world(W) {
      const H = 3.0, WALL = 0x5d6a5a, WALL2 = 0x4c5649;
      W.sky(0x04060c); W.fog(5, 24); W.spawn(this.spawn.x, this.spawn.z, this.spawn.yaw);
      W.mood({ amb: 0.16, hemi: 0.13, ambLow: 0.55, hemiLow: 0.32 });

      /* ---- rooms (CR classroom, HW hallway, SR staffroom, CT caretaker's room, OK old kitchen) ---- */
      W.room('CR', -9, -4, -1, 4, T('Classroom 6B (sleeping area)', 'Bilik 6B (tempat tidur)'), true, 0x3d4a5a, 0x1c2228);
      W.room('HW', -1, -1, 8, 1, T('Dark hallway', 'Lorong gelap'), true, 0x4a4436, 0x181a1e, 2.8);
      W.room('SR', 1, -8, 7, -1, T('Staffroom', 'Bilik guru'), true, 0x50504a, 0x1a1c20);
      W.room('CT', 1, 1, 7, 8, T("Caretaker's room", 'Bilik penjaga'), true, 0x5a4636, 0x201814);
      W.room('OK', 8, -3, 15, 3, T('The old kitchen (closed 1994)', 'Dapur lama (ditutup 1994)'), true, 0x3a3a34, 0x121315);

      /* ---- walls ---- */
      W.wallZ(-4, -9, -1, [], H, WALL); W.wallZ(4, -9, -1, [], H, WALL); W.wallX(-9, -4, 4, [], H, WALL); W.wallX(-1, -4, 4, [[-1, 1]], H, WALL);
      W.wallZ(-1, -1, 8, [[3, 4.2]], 2.8, WALL2); W.wallZ(1, -1, 8, [[3, 4.2]], 2.8, WALL2);
      W.wallZ(-8, 1, 7, [], H, 0x6a6a62); W.wallX(1, -8, -1, [], H, 0x6a6a62); W.wallX(7, -8, -1, [], H, 0x6a6a62);
      W.wallZ(8, 1, 7, [], H, 0x6a5440); W.wallX(1, 1, 8, [], H, 0x6a5440); W.wallX(7, 1, 8, [], H, 0x6a5440);
      W.wallX(8, -3, 3, [[-1, 1]], H, 0x3e3d36); W.wallZ(-3, 8, 15, [], H, 0x3e3d36); W.wallZ(3, 8, 15, [], H, 0x3e3d36); W.wallX(15, -3, 3, [], H, 0x3e3d36);

      /* ---- lights (point lights are off in Low graphics mode) ---- */
      W.light('CR', -5, 2.8, 0, 0x8aa0ff, 0.45, 13); W.light('HW', 3.5, 2.4, 0, 0xffd27a, 0.3, 9);
      W.light('SR', 4, 2.6, -4.5, 0xdfe8ff, 0.5, 10); W.light('CT', 4, 2.6, 4.5, 0xffb870, 0.55, 10); W.light('OK', 11.5, 2.6, 0, 0xff6040, 0.35, 10);

      /* ================= CLASSROOM ================= */
      [[-7.5, -2.6], [-6, -2.6], [-4.5, -2.6], [-7.5, 2.6], [-6, 2.6]].forEach((p) => W.box(p[0], 0, p[1], 0.8, 0.18, 1.8, 0x2f5f8f, { collide: false }));   // sleeping bags
      W.box(-2.4, 0, 3.2, 1.4, 0.75, 0.7, 0x6a4a2a);                                                  // teacher desk
      W.writing(-8.86, 1.7, 0, Math.PI / 2, T('CAMP-IN NIGHT 🏕️', 'MALAM BERKHEMAH 🏕️'), '#c9d6e8', 2.4, 0.5);
      W.box(-8.9, 1.2, -2.2, 0.05, 1.1, 0.8, 0xe8dcc0, { collide: false });
      W.interact({ id: 'legend_poster', x: -8.7, y: 1.3, z: -2.2, r: 0.7, label: T('Ghost story poster', 'Poster cerita hantu'), item: 'legend_poster' });
      W.box(-3.2, 0, -2.6, 0.5, 0.45, 0.35, 0xc0392b, { collide: false });                            // Kenji's backpack
      W.interact({ id: 'beet_bottle', x: -3.2, y: 0.4, z: -2.6, r: 0.5, label: T("Kenji's backpack", 'Beg Kenji'), item: 'beet_bottle' });
      W.interact({ id: 'kenji_note', x: -4.5, y: 0.2, z: -2.6, r: 0.6, label: T("Kenji's sleeping bag", 'Beg tidur Kenji'), item: 'kenji_note' });

      /* ================= HALLWAY ================= */
      [1.2, 2.0, 2.9, 4.6, 5.5, 6.3, 7.2].forEach((x, i) => W.box(x, 0.01, (i % 2 ? 0.25 : -0.2), 0.14, 0.01, 0.14, 0x8a0f12, { collide: false }));   // red drops
      W.interact({ id: 'red_drops', x: 2.0, y: 0.1, z: 0, r: 0.7, label: T('Red drops on the floor', 'Titisan merah di lantai'), item: 'red_drops' });
      W.box(7.3, 2.0, -0.95, 0.5, 0.3, 0.05, 0x777777, { collide: false });                          // vent
      W.interact({ id: 'speaker', x: 7.3, y: 2.0, z: -0.8, r: 0.6, label: T('Rattling vent', 'Lubang angin bergetar'), item: 'speaker' });
      W.writing(6.0, 1.6, -0.88, 0, T('STILL HUNGRY', 'STILL HUNGRY'), '#b0141a', 2.0, 0.55);
      W.box(5.3, 0, 0.72, 0.8, 1.8, 0.5, 0x1e5a8a);                                                  // vending machine
      W.box(5.3, 1.1, 0.46, 0.6, 0.6, 0.02, 0x9fd3ff, { collide: false });
      W.box(4.6, 0.0, 0.6, 0.18, 0.04, 0.12, 0xe8452a, { collide: false });                          // crisp packet
      W.interact({ id: 'crisp_packet', x: 4.6, y: 0.1, z: 0.6, r: 0.4, label: T('Crisp packet', 'Bungkusan kerepek'), item: 'crisp_packet' });
      W.box(0.3, 0, 0.75, 0.3, 1.3, 0.3, 0x556070, { collide: false, name: 'figure2' }); W.ball(0.3, 1.4, 0.75, 0.16, 0x556070, { name: 'figure2' });   // mop "figure"

      /* ================= STAFFROOM ================= */
      W.box(6.3, 0, -6.9, 1.0, 2.0, 0.8, 0xe8eef2);                                                  // fridge
      W.interact({ id: 'fridge', x: 6.3, y: 1.2, z: -6.4, r: 0.8, label: T('Staffroom fridge', 'Peti sejuk bilik guru'), text: T('Milk, yoghurts, Ms. Nair\'s salad... and an EMPTY space on the middle shelf, exactly the size of a lunchbox. A cold red smear on the shelf edge smells of nothing.', 'Susu, yogurt, salad Cik Nair... dan ruang KOSONG di rak tengah, tepat sebesar kotak makanan. Calitan merah sejuk di tepi rak tidak berbau apa-apa.') });
      W.box(4.6, 1.2, -1.12, 0.3, 0.4, 0.06, 0x223344, { collide: false });                          // keypad
      W.interact({ id: 'door_log', x: 4.6, y: 1.3, z: -1.3, r: 0.5, label: T('Door keypad screen', 'Skrin papan kekunci pintu'), item: 'door_log' });
      W.box(3.0, 0, -5.0, 2.0, 0.75, 1.0, 0x6a5a48);                                                 // table
      W.box(1.6, 0, -7.4, 1.2, 0.9, 0.5, 0x5a4a3a);

      /* ================= CARETAKER'S ROOM ================= */
      W.box(4.0, 0, 3.8, 1.6, 0.8, 0.9, 0x6a4a2a);                                                   // desk
      W.box(4.4, 0.8, 3.8, 0.3, 0.36, 0.05, 0x8a6a3a, { collide: false });                            // frame
      W.interact({ id: 'lowe_photo', x: 4.4, y: 1.0, z: 3.8, r: 0.4, label: T('Framed photo', 'Gambar berbingkai'), item: 'lowe_photo' });
      W.box(3.4, 0.8, 3.9, 0.3, 0.02, 0.2, 0xf3ecc8, { collide: false });
      W.interact({ id: 'oven_note', x: 3.4, y: 0.95, z: 3.9, r: 0.4, label: T('Desk drawer', 'Laci meja'), item: 'oven_note' });
      W.box(6.88, 1.4, 2.6, 0.06, 0.25, 0.5, 0xb08a2e, { collide: false });                            // keys on hook
      W.interact({ id: 'lowe_keys', x: 6.7, y: 1.4, z: 2.6, r: 0.5, label: T('Key ring on a hook', 'Gugusan kunci pada cangkuk'), item: 'lowe_keys' });
      W.box(6.9, 1.4, 5.6, 0.05, 0.8, 0.6, 0xe9dfc4, { collide: false });
      W.interact({ id: 'old_news', x: 6.7, y: 1.5, z: 5.6, r: 0.6, label: T('Framed old newspaper', 'Surat khabar lama berbingkai'), item: 'old_news' });
      W.box(1.6, 0, 6.8, 1.0, 0.5, 1.9, 0x3a5a6a);                                                   // camp bed

      /* ================= OLD KITCHEN ================= */
      W.box(14.0, 0, -1.6, 1.6, 1.3, 1.2, 0x1a1a1a);                                                 // the old oven
      W.box(13.2, 0.4, -1.6, 0.05, 0.6, 0.9, 0x333333, { collide: false });
      W.interact({ id: 'old_oven', x: 13.1, y: 0.8, z: -1.6, r: 0.8, label: T('Huge old oven', 'Ketuhar lama yang besar'), item: 'old_oven' });
      W.box(11.0, 0, -2.4, 2.4, 0.9, 0.9, 0x55524a);                                                 // worktop
      [10.2, 10.8, 11.5].forEach((x) => W.cyl(x, 0.9, -2.4, 0.18, 0.22, 0x777777, { collide: false }));   // pots
      W.box(14.85, 1.1, 1.8, 0.25, 0.05, 1.2, 0x4a3a2a, { collide: false });                          // shelf
      W.box(14.75, 1.15, 1.8, 0.25, 0.22, 0.3, 0x8a3a2a, { collide: false });                          // recipe tin
      W.interact({ id: 'grandma_letter', x: 14.6, y: 1.25, z: 1.8, r: 0.5, label: T('Rusty recipe tin', 'Tin resipi berkarat'), item: 'grandma_letter', needsFlag: 'news_read',
        lockedText: T('A rusty tin. The lid is stuck with old grease... and a label in old handwriting you cannot read yet. (Find out about the 1994 kitchen first.)', 'Tin berkarat. Penutupnya melekat dengan gris lama... dan label dalam tulisan lama yang belum boleh dibaca. (Ketahui tentang dapur 1994 dahulu.)') });
      W.writing(8.12, 1.7, 2.0, Math.PI / 2, T('STILL HUNGRY', 'STILL HUNGRY'), '#8a0f12', 1.8, 0.5);
      W.box(12.0, 0.6, 2.85, 0.5, 1.2, 0.12, 0xdedede, { collide: false, name: 'figure1' }); W.box(12.0, 1.4, 2.85, 0.28, 0.4, 0.12, 0xf2f2f2, { collide: false, name: 'figure1' });   // apron + cook's hat

      /* ================= PEOPLE ================= */
      W.npc({ id: 'kenji', x: -6.8, z: 1.4, rot: Math.PI * 0.5, skin: 0xe0b894, shirt: 0xc0392b, pants: 0x2c3e50, hair: 0x111111, scale: 0.82 });
      W.npc({ id: 'zara', x: -4.0, z: 1.6, rot: Math.PI * 0.6, skin: 0xa8754f, shirt: 0xd4a017, pants: 0x3a3a4a, hair: 0x1a1210, scale: 0.8 });
      W.npc({ id: 'oliver', x: -7.6, z: -1.2, rot: Math.PI * 0.4, skin: 0xf0c8a0, shirt: 0x2f6f9e, pants: 0x4a4a5a, hair: 0x8a5a2a, scale: 0.76 });
      W.npc({ id: 'nair', x: 2.6, z: -3.2, rot: Math.PI * 0.4, skin: 0xb07a50, shirt: 0x7a5cc0, pants: 0x2c2c3c, hair: 0x111111, scale: 0.96 });
      W.npc({ id: 'lowe', x: 2.8, z: 5.6, rot: Math.PI * 0.2, skin: 0xe0b894, shirt: 0x6b7a3a, pants: 0x3a3a2a, hair: 0x9a9a9a, scale: 1.04, hat: 0x3a3a2a });
    }
  };

  /* ====================================================================== PICTURES FOR THIS CASE */
  const A = MF.art, h = A.h;
  A.oven001 = (canvas) => {
    canvas.width = 620; canvas.height = 280; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 280, '#22201c');
    h.rect(c, 30, 30, 260, 220, '#111'); h.rect(c, 50, 60, 220, 120, '#2a2a2a'); h.rect(c, 120, 196, 80, 34, '#555'); [0, 1, 2].forEach((i) => h.text(c, '?', 136 + i * 24, 220, 22, '#ddd', 'center', true));
    h.text(c, 'A.L.', 160, 128, 34, '#6a5a3a', 'center', true);
    h.rect(c, 320, 40, 270, 200, '#f3ecc8'); h.text(c, 'Finish each pattern:', 340, 80, 20, '#222', 'left', true);
    ['2, 4, 6, ?', '9, 7, 5, ?', '1, 3, 5, ?'].forEach((t, i) => h.text(c, t, 350, 125 + i * 38, 24, '#7a1a1a', 'left', true));
  };
  A.photos.fridge001 = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#dfe6ea'); h.rect(c, W * 0.2, H * 0.05, W * 0.6, H * 0.9, '#f4f7f8'); [0.32, 0.55, 0.78].forEach((y) => h.rect(c, W * 0.22, H * y, W * 0.56, 6, '#b8c4c8'));
    h.rect(c, W * 0.26, H * 0.2, 60, 70, '#ffffff'); h.text(c, 'MILK', W * 0.26 + 30, H * 0.2 + 40, 16, '#2a6fb0', 'center', true);
    h.rect(c, W * 0.45, H * 0.4, 150, 80, '#c62828'); h.rect(c, W * 0.45, H * 0.4, 150, 14, '#e53935'); h.text(c, 'OLIVER B.', W * 0.45 + 75, H * 0.4 + 52, 20, '#fff', 'center', true);
    h.rect(c, W * 0.28, H * 0.62, 90, 50, '#7cb342'); h.text(c, 'salad - P.N.', W * 0.28 + 45, H * 0.62 + 32, 12, '#fff', 'center', true);
    const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.55)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#fff', 'center', true);
  };
  A.photos.corr001 = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#14161c'); c.fillStyle = '#20232c'; c.beginPath(); c.moveTo(0, H); c.lineTo(W * 0.38, H * 0.45); c.lineTo(W * 0.62, H * 0.45); c.lineTo(W, H); c.fill();
    h.rect(c, W * 0.47, H * 0.3, W * 0.06, H * 0.15, '#2c2a24');                                            // far door
    h.rect(c, W * 0.505, H * 0.31, 16, 46, '#4b5a2a'); h.circ(c, W * 0.505 + 8, H * 0.295, 7, '#3a3a2a'); h.rect(c, W * 0.505 + 2, H * 0.34, 12, 10, '#c62828');   // man + red box
    h.circ(c, W * 0.2, H * 0.55, 90, '#a8754f'); h.rect(c, W * 0.08, H * 0.42, 240, 70, '#1a1210'); h.circ(c, W * 0.17, H * 0.55, 10, '#111'); h.circ(c, W * 0.25, H * 0.55, 10, '#111');
    c.strokeStyle = '#111'; c.lineWidth = 5; c.beginPath(); c.arc(W * 0.21, H * 0.62, 26, 0.1, 3); c.stroke();
    h.rect(c, W * 0.3, H * 0.72, 70, 90, '#e8452a'); h.text(c, 'CHILLI', W * 0.3 + 35, H * 0.72 + 50, 14, '#fff', 'center', true);
    const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.55)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#fff', 'center', true);
  };

  MF.registerCase(C);
})();
