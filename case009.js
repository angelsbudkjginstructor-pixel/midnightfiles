/* ============================================================================
   CASE 009 — THE BIRTHDAY PARTY MYSTERY / MISTERI MAJLIS HARI JADI
   ----------------------------------------------------------------------------
   This file is ONE complete, independent story. The engine reads it as data.
   To add a new case: copy this file, change the data, register it in archive.js.

   HIDDEN SOLUTION (the game is generated from this — nothing is invented live):
   - Atuk's gold pocket watch was in a display box on the living-room cabinet.
   - 3:10 pm  Danish asks Aiman to see it. Aiman says no (Atuk said "don't touch").
   - ~3:20 pm Aiman, alone in the living room, takes the watch out to look closer.
              His fingers are sticky with pink juice. It slips, hits the floor,
              the glass cover cracks, the watch stops at 3:21. Juice spills too.
   - Aiman panics. He puts the empty box back, hides the watch in his toy robot
     bank (code lock), hides his pink-stained star socks in the laundry basket,
     puts on plain white socks. He leaves PINK STAR-SOCK PRINTS (19 cm).
   - 3:25 pm  Zack walks through (carrying paint things) — looks suspicious but
              was only making a SURPRISE gold photo frame in the shed.
   - 3:55 pm  Atuk opens the box: empty.
   RESPONSIBLE: Aiman (accident + hiding it because he was scared). NOT a theft.
   MISLEADING: Zack (lies "bathroom", gold paint, passes the shelf at 3:25),
               Danish (lies "never went inside", toy gold watch gift, argued),
               Mei Ling's camera (10 minutes fast — makes alibis look wrong).
   TWIST: the least suspected person (the birthday boy) did it, by accident,
          and the "perfect" photo alibis only work if you fix the camera clock.
   ============================================================================ */
(function () {
  const T = (en, bm) => ({ en, bm });
  const mm = (s) => { const [h, m] = s.split(':').map(Number); return (h < 12 ? h + 12 : h) * 60 + m; };

  const C = {
    id: '009',
    num: 9,
    title: T('The Birthday Party Mystery', 'Misteri Majlis Hari Jadi'),
    tagline: T("Atuk's gold watch has vanished! Everyone has an alibi... but someone is not telling the whole truth.",
               'Jam emas Atuk hilang! Semua orang ada alibi... tetapi ada yang tidak bercakap benar.'),
    place: T("Aiman's house", 'Rumah Aiman'),
    premise: T(
      "It is Aiman's 10th birthday. Atuk (his grandfather) wanted to give him a very special gift: an old gold pocket watch. At 3:55 pm, Atuk opens the display box — it is EMPTY! The cake will be cut at 4:25 pm. Find out what really happened before then. Be careful: the most suspicious person is not always the guilty one.",
      'Hari ini hari jadi Aiman yang ke-10. Atuk mahu memberinya hadiah yang sangat istimewa: sebuah jam saku emas yang lama. Pada pukul 3:55 petang, Atuk membuka kotak pameran — KOSONG! Kek akan dipotong pada pukul 4:25 petang. Cari apa yang sebenarnya berlaku sebelum itu. Berhati-hati: orang yang paling mencurigakan belum tentu bersalah.'),
    mysteryType: 'Missing item / accident hidden',
    subjects: ['math', 'english', 'science', 'geography'],
    scareDefault: 1,
    clock: { start: mm('3:55'), deadline: mm('4:25'), minutesPerRealSecond: 1 / 40 },
    spawn: { x: -4.6, z: 2.4, yaw: -0.6 },

    /* ------------------------------------------------------------------ HIDDEN SOLUTION */
    hidden: {
      culprit: 'aiman',
      what: 'accident_hidden',
      window: [mm('3:10'), mm('3:25')],
      summary: T(
        "Aiman took the watch out to look at it. His fingers were sticky with pink juice, it slipped and fell, the glass cracked and the watch stopped at 3:21. He was scared to tell the truth, so he hid the watch in his toy robot and hid his juicy socks.",
        'Aiman mengeluarkan jam itu untuk melihatnya. Jarinya melekit dengan jus merah jambu, jam itu terlepas dan jatuh, kacanya retak dan jam berhenti pada pukul 3:21. Dia takut untuk berterus-terang, lalu menyembunyikan jam itu dalam robot mainannya dan menyorokkan stokinnya yang basah.'),
      sequence: [
        [mm('2:05'), T('The watch is safe in its box (photo 1).', 'Jam selamat dalam kotaknya (gambar 1).')],
        [mm('3:00'), T('Atuk checks the watch, then goes to the garden gazebo.', 'Atuk memeriksa jam itu, kemudian pergi ke gazebo di taman.')],
        [mm('3:10'), T('Danish asks to see the watch. Aiman says no. Danish goes outside.', 'Danish minta melihat jam itu. Aiman berkata tidak. Danish keluar.')],
        [mm('3:15'), T('Aiman and Danish play in the garden.', 'Aiman dan Danish bermain di taman.')],
        [mm('3:20'), T('Aiman sneaks back in alone. The watch slips from his sticky fingers and the glass cracks (watch stops at 3:21).', 'Aiman menyelinap masuk seorang diri. Jam itu terlepas dari jarinya yang melekit dan kacanya retak (jam berhenti pada 3:21).')],
        [mm('3:23'), T('Aiman hides the watch in his robot and the socks in the laundry basket.', 'Aiman menyorokkan jam dalam robotnya dan stokin dalam bakul pakaian.')],
        [mm('3:25'), T('Zack walks past with paint things. The box already looks empty.', 'Zack lalu dengan barang cat. Kotak itu sudah kelihatan kosong.')],
        [mm('3:30'), T('Mak sees Aiman in plain white socks.', 'Mak nampak Aiman berstokin putih biasa.')],
        [mm('3:55'), T('Atuk opens the box: empty.', 'Atuk membuka kotak: kosong.')]
      ],
      essentialClues: ['shards', 'prints', 'ph_shelf', 'ph_zack', 'ph_garden1', 'ph_garden2', 'kitchen_note', 'shoe_rack', 'c_mak_socks', 'c_aiman_socks'],
      misleading: [
        { item: 'ph_zack', why: T('Zack looks guilty near the shelf, but he was carrying paint for a surprise gift and wears black socks.', 'Zack nampak bersalah dekat para, tetapi dia membawa cat untuk hadiah kejutan dan memakai stokin hitam.') },
        { item: 'c_zack_bathroom', why: T("Zack lied about the bathroom to protect his surprise.", 'Zack berbohong tentang bilik air untuk melindungi kejutannya.') },
        { item: 'c_danish_garden', why: T('Danish lied because he was embarrassed after arguing with Aiman.', 'Danish berbohong kerana malu selepas bertengkar dengan Aiman.') },
        { item: 'gift_table', why: T("Danish's toy gold watch gift looks like Atuk's watch.", 'Hadiah jam emas mainan Danish kelihatan seperti jam Atuk.') },
        { item: 'camera', why: T('The camera clock is 10 minutes fast, so photo times look wrong until fixed.', 'Jam kamera cepat 10 minit, jadi masa gambar kelihatan salah sehingga dibetulkan.') }
      ]
    },

    /* ------------------------------------------------------------------ PEOPLE */
    people: [
      { id: 'aiman', name: 'Aiman', age: 10, role: T('Birthday boy — Atuk\'s grandson', 'Budak sambutan — cucu Atuk'), rel: T('Host of the party', 'Tuan rumah majlis'), color: '#ef6f6c', suspect: true },
      { id: 'atuk', name: 'Atuk Hassan', age: 72, role: T('Owner of the watch', 'Pemilik jam'), rel: T("Aiman's grandfather", 'Datuk Aiman'), color: '#8a7f72', suspect: false },
      { id: 'mak', name: 'Puan Salmah', age: 38, role: T("Aiman's mother (cooking)", 'Ibu Aiman (memasak)'), rel: T("Aiman's mother", 'Ibu Aiman'), color: '#b07fd0', suspect: true },
      { id: 'danish', name: 'Danish', age: 10, role: T("Aiman's best friend", 'Kawan baik Aiman'), rel: T('Friend and classmate', 'Kawan sekelas'), color: '#4fa3e0', suspect: true },
      { id: 'meiling', name: 'Mei Ling', age: 11, role: T('Guest and party photographer', 'Tetamu dan jurugambar majlis'), rel: T('Classmate', 'Kawan sekelas'), color: '#4cc38a', suspect: true },
      { id: 'zack', name: 'Zack', age: 14, role: T("Aiman's older cousin", 'Sepupu Aiman yang lebih tua'), rel: T('Cousin', 'Sepupu'), color: '#e0a030', suspect: true }
    ],

    /* ------------------------------------------------------------------ ITEMS (evidence, claims, inferences) */
    items: [
      /* ---- physical / documents ---- */
      { id: 'box', type: 'physical', icon: '📦', title: T('Display box', 'Kotak pameran'), where: T('Living room cabinet', 'Kabinet ruang tamu'),
        desc: T('A small wooden box with a clear lid. It is empty. There is a damp pink smudge on the velvet inside.', 'Sebuah kotak kayu kecil dengan penutup lut sinar. Kosong. Ada kesan merah jambu yang lembap pada baldu di dalamnya.'),
        inspect: { kind: 'model', model: 'box', notes: [
          T('The brass latch is smooth. No scratches or bends — it was opened the normal way, not forced.', 'Selak tembaga licin. Tiada calar atau bengkok — ia dibuka secara biasa, bukan dipaksa.'),
          T('Inside the velvet: a sticky, damp pink smudge, like juice.', 'Dalam baldu: kesan merah jambu yang melekit dan lembap, seperti jus.') ] } },
      { id: 'shards', type: 'physical', icon: '🔍', title: T('Tiny glass pieces', 'Serpihan kaca kecil'), where: T('Living room carpet', 'Permaidani ruang tamu'),
        desc: T('Small, clear, CURVED pieces of glass in the carpet, with some pink juice drops next to them.', 'Serpihan kaca kecil, jernih dan MELENGKUNG pada permaidani, dengan titik jus merah jambu di sebelahnya.'),
        puzzle: 'pz_glass',
        inspect: { kind: 'model', model: 'shards', notes: [
          T('The pieces are thin and curved — not flat like window glass.', 'Serpihan itu nipis dan melengkung — bukan rata seperti kaca tingkap.') ] } },
      { id: 'juice_cup', type: 'physical', icon: '🥤', title: T('Fallen cup and spilled juice', 'Cawan jatuh dan jus tumpah'), where: T('Living room floor', 'Lantai ruang tamu'),
        desc: T('A plastic cup lying on its side. Pink sirap bandung (rose syrup drink) has spilled on the carpet. It is still sticky and a little wet.', 'Sebuah cawan plastik terbaring. Sirap bandung merah jambu tumpah pada permaidani. Ia masih melekit dan sedikit basah.'),
        inspect: { kind: 'model', model: 'cup', notes: [ T('The juice is sticky. Anyone who touched it would get sticky fingers.', 'Jus itu melekit. Sesiapa yang menyentuhnya akan berjari melekit.') ] } },
      { id: 'prints', type: 'physical', icon: '👣', title: T('Pink sock prints', 'Tapak stokin merah jambu'), where: T('Carpet → corridor → bedroom door', 'Permaidani → koridor → pintu bilik'),
        desc: T('Small pink sock prints with little star shapes. They start at the cabinet, go through the east door, along the corridor, and stop at a bedroom door.', 'Tapak stokin merah jambu kecil dengan bentuk bintang. Ia bermula di kabinet, melalui pintu timur, sepanjang koridor, dan berhenti di pintu sebuah bilik.'),
        puzzle: 'pz_foot', inspect: { kind: 'puzzle-art', art: 'footprint' } },
      { id: 'shoe_rack', type: 'document', icon: '👟', title: T('Shoe rack name tags', 'Tag nama di rak kasut'), where: T('Front door', 'Pintu depan'),
        desc: T('Everyone took off their shoes at the door. Mak wrote each child\'s shoe length inside the shoes so they would not get mixed up.', 'Semua orang menanggalkan kasut di pintu. Mak menulis panjang kasut setiap kanak-kanak dalam kasut supaya tidak bercampur.'),
        inspect: { kind: 'doc', html: T(
          '<h3>Shoe sizes</h3><table class="tbl"><tr><th>Name</th><th>Shoe length</th></tr><tr><td>Aiman</td><td>19 cm</td></tr><tr><td>Danish</td><td>21 cm</td></tr><tr><td>Mei Ling</td><td>22 cm</td></tr><tr><td>Zack</td><td>26 cm</td></tr><tr><td>Mak</td><td>24 cm</td></tr></table>',
          '<h3>Saiz kasut</h3><table class="tbl"><tr><th>Nama</th><th>Panjang kasut</th></tr><tr><td>Aiman</td><td>19 cm</td></tr><tr><td>Danish</td><td>21 cm</td></tr><tr><td>Mei Ling</td><td>22 cm</td></tr><tr><td>Zack</td><td>26 cm</td></tr><tr><td>Mak</td><td>24 cm</td></tr></table>') } },
      { id: 'plan', type: 'document', icon: '🗺️', title: T('House plan', 'Pelan rumah'), where: T('Living room wall', 'Dinding ruang tamu'),
        desc: T('A fire-exit plan of the house with a compass.', 'Pelan keluar kecemasan rumah dengan kompas.'),
        puzzle: 'pz_plan', inspect: { kind: 'puzzle-art', art: 'plan' } },
      { id: 'gift_table', type: 'physical', icon: '🎁', title: T('Present table', 'Meja hadiah'), where: T('Living room', 'Ruang tamu'),
        desc: T('Presents with name tags. One small flat box says "From Danish". It has a tiny sticker: "Pasar Malam — RM8". Inside is a toy gold-coloured watch with a plastic chain.', 'Hadiah dengan tag nama. Sebuah kotak kecil tertulis "Daripada Danish". Ada pelekat: "Pasar Malam — RM8". Di dalamnya sebuah jam mainan berwarna emas dengan rantai plastik.'),
        inspect: { kind: 'model', model: 'toywatch', notes: [ T('It is light and plastic. It is NOT Atuk\'s real watch. It was bought for RM8.', 'Ia ringan dan plastik. Ia BUKAN jam sebenar Atuk. Ia dibeli dengan harga RM8.') ] } },
      { id: 'kitchen_note', type: 'document', icon: '📝', title: T("Mak's baking note", 'Nota membakar Mak'), where: T('Kitchen fridge', 'Peti sejuk dapur'),
        desc: T('A note stuck on the fridge: "Cupcakes IN the oven: 3:05 pm. Bake: 25 minutes. OUT: ____". The oven timer is at 00:00.', 'Nota di peti sejuk: "Kek cawan MASUK ketuhar: 3:05 petang. Bakar: 25 minit. KELUAR: ____". Pemasa ketuhar pada 00:00.'),
        puzzle: 'pz_bake', inspect: { kind: 'puzzle-doc', html: T(
          '<div class="paper hand"><b>Cupcakes!</b><br>IN the oven: <u>3:05 pm</u><br>Bake: <u>25 minutes</u><br>OUT: ______<br><small>(Do not open the door!)</small></div>',
          '<div class="paper hand"><b>Kek cawan!</b><br>MASUK ketuhar: <u>3:05 petang</u><br>Bakar: <u>25 minit</u><br>KELUAR: ______<br><small>(Jangan buka pintu!)</small></div>'),
          fixedHtml: T('<div class="paper hand"><b>Cupcakes!</b><br>IN the oven: <u>3:05 pm</u><br>Bake: <u>25 minutes</u><br>OUT: <u>3:30 pm</u> ✔<br><small>(Mak stayed by the oven.)</small></div>', '<div class="paper hand"><b>Kek cawan!</b><br>MASUK ketuhar: <u>3:05 petang</u><br>Bakar: <u>25 minit</u><br>KELUAR: <u>3:30 petang</u> ✔<br><small>(Mak kekal di sisi ketuhar.)</small></div>') } },
      { id: 'wishlist', type: 'document', icon: '📃', title: T("Aiman's wish list", 'Senarai hajat Aiman'), where: T("Aiman's desk", 'Meja Aiman'),
        desc: T("A child's wish list for his birthday.", 'Senarai hajat hari jadi seorang kanak-kanak.'),
        inspect: { kind: 'doc', html: T(
          '<div class="paper hand"><b>MY WISH LIST</b><br>1. A robot kit<br>2. Football boots<br>3. A real watch like Atuk\'s! <small>(I will ask nicely and take care of it.)</small></div>',
          '<div class="paper hand"><b>SENARAI HAJAT SAYA</b><br>1. Set robot<br>2. Kasut bola<br>3. Jam tangan betul seperti Atuk! <small>(Saya akan minta dengan baik dan menjaganya.)</small></div>') } },
      { id: 'socks', type: 'physical', icon: '🧦', title: T('Pink-stained star socks', 'Stokin bintang bernoda merah jambu'), where: T("Aiman's laundry basket", 'Bakul pakaian Aiman'),
        desc: T('A pair of white-and-yellow STAR socks, stuffed at the bottom of a laundry basket. The toes are stained pink and still a little damp.', 'Sepasang stokin BINTANG putih-kuning, disumbat di dasar bakul pakaian. Hujungnya bernoda merah jambu dan masih sedikit lembap.'),
        inspect: { kind: 'model', model: 'socks', notes: [ T('The pink stain is sticky — the same kind of juice as on the living-room carpet.', 'Noda merah jambu itu melekit — jenis jus yang sama seperti pada permaidani ruang tamu.') ] } },
      { id: 'robot', type: 'physical', icon: '🤖', title: T('Toy robot bank', 'Robot tabung mainan'), where: T("Aiman's desk", 'Meja Aiman'),
        desc: T('A toy robot with a 3-number lock on its belly. Something small rattles inside.', 'Sebuah robot mainan dengan kunci 3 nombor di perutnya. Sesuatu yang kecil berbunyi di dalamnya.'),
        puzzle: 'pz_robot', inspect: { kind: 'model', model: 'robot', notes: [ T('Something small and heavy rattles inside when you shake it.', 'Sesuatu yang kecil dan berat berbunyi di dalam apabila digoncang.') ] } },
      { id: 'watch', type: 'physical', icon: '⌚', title: T("Atuk's gold watch", 'Jam emas Atuk'), where: T('Inside the toy robot', 'Di dalam robot mainan'),
        desc: T('The missing pocket watch! The glass cover is cracked and there is a sticky pink smudge. The hands have stopped at 3:21.', 'Jam saku yang hilang! Kaca penutupnya retak dan ada kesan merah jambu yang melekit. Jarumnya berhenti pada 3:21.'),
        inspect: { kind: 'model', model: 'watch', notes: [
          T('The hands stopped at 3:21 — the moment it hit the floor.', 'Jarum berhenti pada 3:21 — saat ia jatuh ke lantai.'),
          T('The glass is cracked from a fall, not a break-in.', 'Kaca retak kerana jatuh, bukan kerana pecah rumah.') ],
          back: T('You turn it over. Engraved on the back: "To my grandson Aiman — Honesty is worth more than gold. — Atuk"', 'Anda membaliknya. Terukir di belakang: "Untuk cucuku Aiman — Kejujuran lebih berharga daripada emas. — Atuk"'),
          backFlag: 'engraving_read' } },
      { id: 'shed_note', type: 'document', icon: '🧾', title: T("Torn note in the shed", 'Nota koyak di dalam bangsal'), where: T('Garden shed', 'Bangsal taman'),
        desc: T('A torn, messy note on the workbench. Some words are wrong or missing.', 'Nota yang koyak dan comot di atas meja kerja. Ada perkataan yang salah atau hilang.'),
        puzzle: 'pz_note', inspect: { kind: 'puzzle-doc',
          html: T('<div class="paper hand torn">I ____ making a surprise for Aiman.<br>Please do ____ tell anyone.<br>I ____ be back before the cake.<br><small>— Z (the paper is torn: some words are missing or wrong)</small></div>', '<div class="paper hand torn">I ____ making a surprise for Aiman.<br>Please do ____ tell anyone.<br>I ____ be back before the cake.<br><small>— Z (kertas koyak: ada perkataan hilang atau salah)</small></div>'),
          fixedHtml: T('<div class="paper hand">I <u>am</u> making a surprise for Aiman.<br>Please do <u>not</u> tell anyone.<br>I <u>will</u> be back before the cake.<br><small>— Z ✔</small></div>', '<div class="paper hand">I <u>am</u> making a surprise for Aiman.<br>Please do <u>not</u> tell anyone.<br>I <u>will</u> be back before the cake.<br><small>— Z ✔</small></div>') } },
      { id: 'gold_frame', type: 'physical', icon: '🖼️', title: T('Half-painted gold frame', 'Bingkai emas separuh dicat'), where: T('Garden shed', 'Bangsal taman'),
        desc: T('A wooden photo frame being painted gold. The paint is still WET. Inside is a photo of Aiman and Atuk, and a tag: "Happy Birthday Aiman — from Zack. DO NOT TOUCH!"', 'Sebuah bingkai gambar kayu sedang dicat emas. Cat masih BASAH. Di dalamnya gambar Aiman dan Atuk, dan tag: "Selamat Hari Jadi Aiman — daripada Zack. JANGAN SENTUH!"'),
        inspect: { kind: 'model', model: 'frame', notes: [ T('Gold spray paint, brushes and a paint can are next to it. The paint is wet — it was painted in the last few minutes.', 'Cat semburan emas, berus dan tin cat ada di sebelahnya. Cat itu basah — ia dicat beberapa minit lalu.') ] } },
      { id: 'camera', type: 'device', icon: '📷', title: "Mei Ling's camera", where: T("Mei Ling", 'Mei Ling'),
        desc: T("Mei Ling's digital camera with 5 photos from the party. Each photo shows a time stamp.", 'Kamera digital Mei Ling dengan 5 gambar majlis. Setiap gambar menunjukkan cap masa.'),
        puzzle: 'pz_camera', inspect: { kind: 'camera' } },

      /* ---- photos (all come from the camera) ---- */
      { id: 'ph_arrival', type: 'photo', icon: '🖼️', photo: true, title: T('Photo 1', 'Gambar 1'), art: 'photo_arrival', stampT: mm('2:15'), realT: mm('2:05'),
        desc: T('Aiman with the display box and the watch in it, at the start of the party.', 'Aiman dengan kotak pameran dan jam di dalamnya, pada permulaan majlis.'),
        zoomNotice: T('You zoom in: the gold watch sits in the box. Aiman is wearing white-and-yellow STAR socks.', 'Anda zum: jam emas ada dalam kotak. Aiman memakai stokin BINTANG putih-kuning.'),
        timeline: T('The watch is in its box.', 'Jam ada dalam kotaknya.') },
      { id: 'ph_shelf', type: 'photo', icon: '🖼️', photo: true, title: T('Photo 2', 'Gambar 2'), art: 'photo_shelf', stampT: mm('3:20'), realT: mm('3:10'), clockT: mm('3:10'),
        desc: T('Aiman and Danish next to the cabinet in the living room. The wall clock is behind them.', 'Aiman dan Danish di sebelah kabinet di ruang tamu. Jam dinding ada di belakang mereka.'),
        zoomNotice: T('You zoom in: the watch is still in the box. The WALL CLOCK says 3:10 — but the camera stamp says 3:20! Danish wears stripy socks, Aiman wears STAR socks.', 'Anda zum: jam masih dalam kotak. JAM DINDING menunjukkan 3:10 — tetapi cap kamera menunjukkan 3:20! Danish memakai stokin belang, Aiman memakai stokin BINTANG.'),
        timeline: T('Danish and Aiman by the cabinet; the watch is still in the box.', 'Danish dan Aiman di kabinet; jam masih dalam kotak.') },
      { id: 'ph_garden1', type: 'photo', icon: '🖼️', photo: true, title: T('Photo 3', 'Gambar 3'), art: 'photo_garden1', stampT: mm('3:25'), realT: mm('3:15'),
        desc: T('Aiman and Danish playing football in the garden. Atuk is in the gazebo behind them. There is no clock in this photo.', 'Aiman dan Danish bermain bola di taman. Atuk berada di gazebo di belakang mereka. Tiada jam dalam gambar ini.'),
        zoomNotice: T('You zoom in: Atuk is sitting in the gazebo with a cup of tea. Aiman and Danish are both in the picture.', 'Anda zum: Atuk duduk di gazebo dengan secawan teh. Aiman dan Danish kedua-duanya ada dalam gambar.'),
        timeline: T('Aiman, Danish and Atuk are in the garden.', 'Aiman, Danish dan Atuk berada di taman.') },
      { id: 'ph_garden2', type: 'photo', icon: '🖼️', photo: true, title: T('Photo 4', 'Gambar 4'), art: 'photo_garden2', stampT: mm('3:33'), realT: mm('3:23'),
        desc: T('Danish kicking a football in the garden. Atuk is in the gazebo. There is no clock in this photo.', 'Danish menendang bola di taman. Atuk berada di gazebo. Tiada jam dalam gambar ini.'),
        zoomNotice: T('You zoom in: Danish is alone with the ball. Atuk is still in the gazebo. Where is Aiman?', 'Anda zum: Danish bersendirian dengan bola. Atuk masih di gazebo. Di mana Aiman?'),
        timeline: T('Danish in the garden; Atuk in the gazebo; Aiman is NOT in the photo.', 'Danish di taman; Atuk di gazebo; Aiman TIDAK ada dalam gambar.') },
      { id: 'ph_zack', type: 'photo', icon: '🖼️', photo: true, title: T('Photo 5', 'Gambar 5'), art: 'photo_zack', stampT: mm('3:35'), realT: mm('3:25'), clockT: mm('3:25'),
        desc: T('Zack walking through the living room with a big bag. The cabinet and the wall clock are in the picture.', 'Zack berjalan melalui ruang tamu dengan beg besar. Kabinet dan jam dinding ada dalam gambar.'),
        zoomNotice: T('You zoom in: the display box on the cabinet looks EMPTY. The WALL CLOCK says 3:25 (stamp says 3:35). Zack wears plain BLACK socks and a gold paint can sticks out of his bag. Faint pink marks are on the carpet.', 'Anda zum: kotak pameran di atas kabinet kelihatan KOSONG. JAM DINDING menunjukkan 3:25 (cap menunjukkan 3:35). Zack memakai stokin HITAM biasa dan tin cat emas terkeluar dari begnya. Ada kesan merah jambu samar pada permaidani.'),
        timeline: T('Zack passes through; the box is already empty.', 'Zack lalu; kotak sudah kosong.') },

      /* ---- inferences (earned by solving puzzles) ---- */
      { id: 'inf_camera', kind: 'inference', type: 'deduction', icon: '💡', title: T('Camera clock is 10 minutes fast', 'Jam kamera cepat 10 minit'),
        desc: T('The wall clock says 3:10 but the camera stamp says 3:20. REAL time = camera time − 10 minutes. Garden photos are really 3:15 and 3:23.', 'Jam dinding menunjukkan 3:10 tetapi cap kamera 3:20. Masa SEBENAR = masa kamera − 10 minit. Gambar taman sebenarnya pukul 3:15 dan 3:23.') },
      { id: 'inf_glass', kind: 'inference', type: 'deduction', icon: '💡', title: T('Something with a round glass cover fell', 'Sesuatu dengan penutup kaca bulat terjatuh'),
        desc: T('Observation: small curved clear pieces + sticky juice. Inference: a round glass cover (like a watch glass) fell and cracked here. It was dropped — not a break-in.', 'Pemerhatian: serpihan kecil melengkung + jus melekit. Inferens: penutup kaca bulat (seperti kaca jam) jatuh dan retak di sini. Ia terjatuh — bukan pecah rumah.') },
      { id: 'inf_foot', kind: 'inference', type: 'deduction', icon: '💡', title: T('Prints are 19 cm — Aiman’s foot size', 'Tapak 19 cm — saiz kaki Aiman'),
        desc: T('The sock prints are 19 cm long. Aiman 19 cm ✔, Danish 21, Mei Ling 22, Zack 26, Mak 24. Aiman also owns star socks.', 'Tapak stokin sepanjang 19 cm. Aiman 19 cm ✔, Danish 21, Mei Ling 22, Zack 26, Mak 24. Aiman juga ada stokin bintang.') },
      { id: 'inf_bake', kind: 'inference', type: 'deduction', icon: '💡', title: T('Mak was in the kitchen 3:05 – 3:30', 'Mak berada di dapur 3:05 – 3:30'),
        desc: T('3:05 + 25 minutes = 3:30. The cupcakes needed Mak at the oven the whole time.', '3:05 + 25 minit = 3:30. Kek cawan memerlukan Mak di ketuhar sepanjang masa.') },
      { id: 'inf_note', kind: 'inference', type: 'deduction', icon: '💡', title: T('Zack was making a surprise in the shed', 'Zack membuat kejutan di bangsal'),
        desc: T('The restored note: "I am making a surprise for Aiman. Please do not tell anyone. I will be back before the cake." Zack\'s gold paint has an innocent reason.', 'Nota yang dipulihkan: "I am making a surprise for Aiman. Please do not tell anyone. I will be back before the cake." Cat emas Zack ada sebab yang tidak bersalah.') },
      { id: 'inf_plan', kind: 'inference', type: 'deduction', icon: '💡', title: T('East from the cabinet leads to Aiman’s bedroom', 'Timur dari kabinet menuju bilik Aiman'),
        desc: T('Using the plan: the prints go EAST through the corridor, to the bedroom at the end.', 'Menggunakan pelan: tapak menuju TIMUR melalui koridor, ke bilik di hujung.') },

      /* ---- witness claims (collected during interviews) ---- */
      { id: 'c_atuk_seen3', kind: 'claim', person: 'atuk', t: mm('3:00'), type: 'statement', icon: '💬', title: T('Atuk: "I saw the watch at 3:00."', 'Atuk: "Saya nampak jam itu pukul 3:00."'), desc: T('Atuk checked the box at 3:00. The watch was there.', 'Atuk memeriksa kotak pukul 3:00. Jam ada di situ.') },
      { id: 'c_atuk_empty', kind: 'claim', person: 'atuk', t: mm('3:55'), type: 'statement', icon: '💬', title: T('Atuk: "At 3:55 the box was empty."', 'Atuk: "Pukul 3:55 kotak itu kosong."'), desc: T('Atuk opened the box at 3:55 to give Aiman the gift.', 'Atuk membuka kotak pukul 3:55 untuk memberi hadiah kepada Aiman.') },
      { id: 'c_atuk_gazebo', kind: 'claim', person: 'atuk', t: mm('3:15'), type: 'statement', icon: '💬', title: T('Atuk: "I sat in the gazebo all afternoon."', 'Atuk: "Saya duduk di gazebo sepanjang petang."'), desc: T('Atuk says he was in the garden gazebo with tea until 3:55.', 'Atuk berkata dia di gazebo taman dengan teh sehingga 3:55.') },
      { id: 'c_mak_kitchen', kind: 'claim', person: 'mak', t: mm('3:20'), type: 'statement', icon: '💬', title: T('Mak: "I stayed in the kitchen until the cupcakes were done."', 'Mak: "Saya kekal di dapur sehingga kek cawan siap."'), desc: T('Mak says she did not leave the oven from 3:05.', 'Mak berkata dia tidak meninggalkan ketuhar sejak 3:05.') },
      { id: 'c_mak_socks', kind: 'claim', person: 'mak', t: mm('3:30'), type: 'statement', icon: '💬', title: T('Mak: "At 3:30 Aiman wore plain white socks."', 'Mak: "Pukul 3:30 Aiman memakai stokin putih biasa."'), desc: T('Mak saw Aiman come out of the corridor looking pale. He had plain white socks and said his star socks got wet.', 'Mak nampak Aiman keluar dari koridor dengan wajah pucat. Dia memakai stokin putih biasa dan berkata stokin bintangnya basah.') },
      { id: 'c_danish_garden', kind: 'claim', person: 'danish', t: mm('3:10'), type: 'statement', icon: '💬', title: T('Danish: "I never went into the living room."', 'Danish: "Saya tidak pernah masuk ke ruang tamu."'), desc: T('Danish says he stayed in the garden all afternoon.', 'Danish berkata dia kekal di taman sepanjang petang.') },
      { id: 'c_danish_admit', kind: 'claim', person: 'danish', t: mm('3:10'), type: 'statement', icon: '💬', title: T('Danish: "I went in at 3:10 to ask to see the watch."', 'Danish: "Saya masuk pukul 3:10 untuk minta melihat jam."'), desc: T('After seeing the photo, Danish admits he asked Aiman to see the watch. Aiman said no, so Danish went outside.', 'Selepas melihat gambar, Danish mengaku dia meminta Aiman menunjukkan jam. Aiman berkata tidak, jadi Danish keluar.') },
      { id: 'c_danish_stayed', kind: 'claim', person: 'danish', t: mm('3:20'), type: 'statement', icon: '💬', title: T('Danish: "After 3:15 I stayed outside with the ball."', 'Danish: "Selepas 3:15 saya kekal di luar dengan bola."'), desc: T('Danish says he played football in the garden after the argument.', 'Danish berkata dia bermain bola di taman selepas pertengkaran itu.') },
      { id: 'c_meiling_camera', kind: 'claim', person: 'meiling', t: 0, type: 'statement', icon: '💬', title: T('Mei Ling: "My camera clock is always exactly right."', 'Mei Ling: "Jam kamera saya sentiasa tepat."'), desc: T('Mei Ling is sure her camera shows the correct time.', 'Mei Ling yakin kameranya menunjukkan masa yang betul.') },
      { id: 'c_meiling_gone', kind: 'claim', person: 'meiling', t: mm('3:20'), type: 'statement', icon: '💬', title: T('Mei Ling: "Aiman disappeared from our game for a while."', 'Mei Ling: "Aiman hilang dari permainan kami seketika."'), desc: T('Mei Ling says Aiman left the garden game. She thought he went to the toilet. He came back when the cupcakes came out.', 'Mei Ling berkata Aiman meninggalkan permainan di taman. Dia sangka Aiman ke tandas. Dia kembali apabila kek cawan dikeluarkan.') },
      { id: 'c_zack_bathroom', kind: 'claim', person: 'zack', t: mm('3:15'), type: 'statement', icon: '💬', title: T('Zack: "I was in the bathroom from 3:10 to 3:30."', 'Zack: "Saya di bilik air dari 3:10 hingga 3:30."'), desc: T('Zack says his tummy hurt, so he stayed in the bathroom.', 'Zack berkata perutnya sakit, jadi dia di bilik air.') },
      { id: 'c_zack_shed', kind: 'claim', person: 'zack', t: mm('3:15'), type: 'statement', icon: '💬', title: T('Zack: "I was in the shed making a surprise for Aiman."', 'Zack: "Saya di bangsal membuat kejutan untuk Aiman."'), desc: T('Zack admits he lied about the bathroom to keep his gift secret. At 3:25 he went to wash his hands.', 'Zack mengaku dia berbohong tentang bilik air untuk merahsiakan hadiahnya. Pukul 3:25 dia pergi membasuh tangan.') },
      { id: 'c_aiman_where', kind: 'claim', person: 'aiman', t: mm('3:20'), type: 'statement', icon: '💬', title: T('Aiman: "I played in the garden with Danish and Mei Ling all the time."', 'Aiman: "Saya bermain di taman dengan Danish dan Mei Ling sepanjang masa."'), desc: T('Aiman says he only went to the toilet once and never went near the cabinet again.', 'Aiman berkata dia hanya ke tandas sekali dan tidak pernah mendekati kabinet lagi.') },
      { id: 'c_aiman_socks', kind: 'claim', person: 'aiman', t: 0, type: 'statement', icon: '💬', title: T('Aiman: "I wore my star socks all day."', 'Aiman: "Saya memakai stokin bintang sepanjang hari."'), desc: T('Aiman says his birthday star socks stayed on all day.', 'Aiman berkata stokin bintang hari jadinya dipakai sepanjang hari.') },
      { id: 'c_aiman_notouch', kind: 'claim', person: 'aiman', t: 0, type: 'statement', icon: '💬', title: T('Aiman: "I never touched the watch."', 'Aiman: "Saya tidak pernah menyentuh jam itu."'), desc: T('Aiman says Atuk told him not to touch it, so he did not.', 'Aiman berkata Atuk menyuruhnya jangan sentuh, jadi dia tidak menyentuhnya.') },
      { id: 'c_aiman_refused', kind: 'claim', person: 'aiman', t: mm('3:10'), type: 'statement', icon: '💬', title: T('Aiman: "Danish wanted to hold it but I said no."', 'Aiman: "Danish mahu memegangnya tetapi saya kata tidak."'), desc: T('Aiman says he refused to let Danish hold the watch at 3:10.', 'Aiman berkata dia enggan membenarkan Danish memegang jam pukul 3:10.') }
    ],

    /* ------------------------------------------------------------------ CONTRADICTION / SUPPORT CHECKER */
    pairs: [
      { a: 'c_danish_garden', b: 'ph_shelf', type: 'contradiction', person: 'danish',
        text: T('Danish said he never went into the living room. But Photo 2 shows him at the cabinet at 3:10.', 'Danish berkata dia tidak pernah masuk ruang tamu. Tetapi Gambar 2 menunjukkan dia di kabinet pukul 3:10.'),
        explain: T('A small, embarrassed lie. He only went in to ask to see the watch. That is not stealing.', 'Pembohongan kecil kerana malu. Dia hanya masuk untuk minta melihat jam. Itu bukan mencuri.') },
      { a: 'c_zack_bathroom', b: 'gold_frame', type: 'contradiction', person: 'zack',
        text: T('Zack says he was in the bathroom. But the gold frame in the shed has WET paint — he was painting it just now.', 'Zack berkata dia di bilik air. Tetapi bingkai emas di bangsal bercat BASAH — dia baru mengecatnya.'),
        explain: T('Zack lied to protect a surprise gift. His gold paint has an innocent reason.', 'Zack berbohong untuk melindungi hadiah kejutan. Cat emasnya ada sebab yang tidak bersalah.') },
      { a: 'c_zack_bathroom', b: 'shed_note', type: 'contradiction', person: 'zack', requires: ['note_restored'],
        text: T('The restored note shows Zack was making a surprise, not sitting in the bathroom.', 'Nota yang dipulihkan menunjukkan Zack membuat kejutan, bukan duduk di bilik air.'),
        explain: T('Another sign Zack\'s lie was about the surprise.', 'Satu lagi tanda pembohongan Zack tentang kejutan.') },
      { a: 'c_meiling_camera', b: 'ph_shelf', type: 'contradiction', person: 'meiling', requires: ['clock_fixed'],
        text: T('Mei Ling says her camera is exactly right. But in Photo 2 the wall clock says 3:10 and the camera says 3:20.', 'Mei Ling berkata kameranya tepat. Tetapi dalam Gambar 2 jam dinding 3:10 dan kamera 3:20.'),
        explain: T('Not a lie — she just did not know. The camera is 10 minutes fast.', 'Bukan pembohongan — dia tidak tahu. Kamera cepat 10 minit.') },
      { a: 'c_aiman_socks', b: 'c_mak_socks', type: 'contradiction', person: 'aiman',
        text: T('Aiman says he wore his star socks all day. Mak saw plain white socks on him at 3:30.', 'Aiman berkata dia memakai stokin bintang sepanjang hari. Mak nampak stokin putih biasa pada pukul 3:30.'),
        explain: T('He changed his socks. Why would he change them just when the juice spilled and the watch vanished?', 'Dia menukar stokinnya. Kenapa dia menukar tepat ketika jus tumpah dan jam hilang?') },
      { a: 'c_aiman_socks', b: 'socks', type: 'contradiction', person: 'aiman',
        text: T('Aiman says he wore the star socks all day. But they were hidden at the bottom of his laundry basket, stained and damp.', 'Aiman berkata dia memakai stokin bintang sepanjang hari. Tetapi ia tersembunyi di dasar bakul pakaiannya, bernoda dan lembap.'),
        explain: T('The stained socks match the sticky juice by the cabinet.', 'Stokin bernoda itu sepadan dengan jus melekit di kabinet.') },
      { a: 'c_aiman_where', b: 'c_meiling_gone', type: 'contradiction', person: 'aiman',
        text: T('Aiman says he played with them all the time. Mei Ling says he disappeared from the game for a while.', 'Aiman berkata dia bermain bersama mereka sepanjang masa. Mei Ling berkata dia hilang dari permainan seketika.'),
        explain: T('Aiman had time alone between 3:15 and about 3:28.', 'Aiman mempunyai masa bersendirian antara 3:15 dan kira-kira 3:28.') },
      { a: 'c_aiman_where', b: 'ph_garden2', type: 'contradiction', person: 'aiman', requires: ['clock_fixed'],
        text: T('Photo 4 (really 3:23) shows Danish alone with the ball. Aiman is not there.', 'Gambar 4 (sebenarnya 3:23) menunjukkan Danish bersendirian dengan bola. Aiman tiada di situ.'),
        explain: T('At the key time, Aiman was NOT in the garden.', 'Pada waktu penting, Aiman TIDAK berada di taman.') },
      { a: 'c_aiman_notouch', b: 'prints', type: 'contradiction', person: 'aiman', requires: ['foot_measured'],
        text: T('The star-sock prints are 19 cm — Aiman\'s size — and lead from the cabinet to his bedroom.', 'Tapak stokin bintang sepanjang 19 cm — saiz Aiman — dan menuju dari kabinet ke biliknya.'),
        explain: T('Someone with Aiman\'s foot and star socks stood at the cabinet after the juice spilled.', 'Seseorang dengan kaki dan stokin bintang Aiman berdiri di kabinet selepas jus tumpah.') },
      { a: 'c_mak_kitchen', b: 'kitchen_note', type: 'support', person: 'mak', requires: ['bake_solved'],
        text: T('The note: in at 3:05, 25 minutes → out at 3:30. Mak could not leave the oven. Her story holds up.', 'Nota: masuk 3:05, 25 minit → keluar 3:30. Mak tidak boleh meninggalkan ketuhar. Ceritanya kukuh.') },
      { a: 'c_danish_stayed', b: 'ph_garden2', type: 'support', person: 'danish', requires: ['clock_fixed'],
        text: T('With the camera fixed, Danish is in the garden at 3:15 AND 3:23. He was outside during the key time.', 'Dengan kamera dibetulkan, Danish di taman pukul 3:15 DAN 3:23. Dia di luar semasa waktu penting.') },
      { a: 'c_danish_stayed', b: 'ph_garden1', type: 'support', person: 'danish', requires: ['clock_fixed'],
        text: T('Photo 3 (really 3:15) shows Danish playing in the garden.', 'Gambar 3 (sebenarnya 3:15) menunjukkan Danish bermain di taman.') },
      { a: 'c_zack_shed', b: 'gold_frame', type: 'support', person: 'zack',
        text: T('The wet gold paint and the tag match Zack\'s true story.', 'Cat emas yang basah dan tag sepadan dengan cerita sebenar Zack.') },
      { a: 'c_zack_shed', b: 'ph_zack', type: 'support', person: 'zack',
        text: T('Photo 5: Zack carries paint things and wears BLACK socks — not the pink star prints.', 'Gambar 5: Zack membawa barang cat dan memakai stokin HITAM — bukan tapak bintang merah jambu.') },
      { a: 'c_atuk_gazebo', b: 'ph_garden1', type: 'support', person: 'atuk',
        text: T('Atuk is in the gazebo in Photo 3. His story is true.', 'Atuk ada di gazebo dalam Gambar 3. Ceritanya benar.') },
      { a: 'c_atuk_gazebo', b: 'ph_garden2', type: 'support', person: 'atuk',
        text: T('Atuk is in the gazebo again in Photo 4.', 'Atuk ada di gazebo lagi dalam Gambar 4.') },
      { a: 'c_atuk_seen3', b: 'ph_shelf', type: 'support', person: 'atuk',
        text: T('Photo 2 (3:10) still shows the watch in the box. Atuk was right.', 'Gambar 2 (3:10) masih menunjukkan jam dalam kotak. Atuk betul.') }
    ],

    /* ------------------------------------------------------------------ PUZZLES (educational, inside the story) */
    puzzles: {
      pz_camera: { subject: 'math', title: T('Fix the camera clock', 'Betulkan jam kamera'), grants: { flags: ['clock_fixed'], items: ['inf_camera'] }, tokens: 0,
        intro: T("Photo 2 shows a wall clock. Compare it with the camera's time stamp.", 'Gambar 2 menunjukkan jam dinding. Bandingkan dengan cap masa kamera.'),
        art: 'clockcompare',
        steps: [
          { type: 'number', q: T('The wall clock says 3:10. The camera stamp says 3:20. How many minutes FAST is the camera?', 'Jam dinding menunjukkan 3:10. Cap kamera 3:20. Berapa minit kamera itu CEPAT?'),
            answer: 10, options: [5, 10, 15, 20], unit: T('minutes', 'minit'),
            hints: [T('Subtract the real time (wall clock) from the camera time.', 'Tolak masa sebenar (jam dinding) daripada masa kamera.'), T('3:20 − 3:10 = ?', '3:20 − 3:10 = ?')] },
          { type: 'choice', q: T('Photo 4 has the stamp 3:33 and NO clock. What is the REAL time of Photo 4?', 'Gambar 4 bercap 3:33 dan TIADA jam. Apakah masa SEBENAR Gambar 4?'),
            options: ['3:13', '3:23', '3:33', '3:43'], answer: '3:23',
            hints: [T('The camera is fast, so the real time is EARLIER.', 'Kamera cepat, jadi masa sebenar LEBIH AWAL.'), T('3:33 − 10 minutes = ?', '3:33 − 10 minit = ?')] }
        ],
        after: T('The camera is 10 minutes fast! Photo 3 was really 3:15 and Photo 4 was really 3:23.', 'Kamera cepat 10 minit! Gambar 3 sebenarnya 3:15 dan Gambar 4 sebenarnya 3:23.') },

      pz_foot: { subject: 'math', title: T('Measure the footprint', 'Ukur tapak kaki'), grants: { flags: ['foot_measured'], items: ['inf_foot'] }, tokens: 0,
        intro: T('Read the ruler under the sock print. Then match the size with the shoe tags.', 'Baca pembaris di bawah tapak stokin. Kemudian padankan saiz dengan tag kasut.'),
        art: 'footprint', needs: ['shoe_rack'],
        steps: [
          { type: 'number', q: T('How long is the sock print? (centimetres)', 'Berapa panjang tapak stokin itu? (sentimeter)'), answer: 19, options: [17, 19, 21, 24], unit: T('cm', 'cm'),
            hints: [T('Find where the toe ends on the ruler. Start from 0 at the heel.', 'Cari di mana hujung jari kaki pada pembaris. Mula dari 0 di tumit.'), T('The toe touches the line between 18 and 20.', 'Hujung jari kaki menyentuh garisan antara 18 dan 20.')] },
          { type: 'choice', q: T('The shoe tags say: Aiman 19, Danish 21, Mei Ling 22, Zack 26, Mak 24. Whose foot matches the print best?', 'Tag kasut: Aiman 19, Danish 21, Mei Ling 22, Zack 26, Mak 24. Kaki siapa paling sepadan dengan tapak itu?'),
            options: ['Aiman', 'Danish', 'Mei Ling', 'Zack'], answer: 'Aiman',
            hints: [T('Compare your measurement with the numbers on the tags.', 'Bandingkan ukuran anda dengan nombor pada tag.')] }
        ],
        after: T('The print is 19 cm — the same as Aiman\'s shoe length. Remember: Photo evidence also shows who wears STAR socks!', 'Tapak itu 19 cm — sama dengan panjang kasut Aiman. Ingat: Bukti gambar juga menunjukkan siapa memakai stokin BINTANG!') },

      pz_note: { subject: 'english', title: T('Restore the torn note', 'Pulihkan nota yang koyak'), grants: { flags: ['note_restored'], items: ['inf_note'] }, tokens: 0,
        intro: T('Choose the correct word for each gap to read the note.', 'Pilih perkataan yang betul untuk setiap ruang kosong supaya nota boleh dibaca.'),
        steps: [
          { type: 'cloze', q: T('Fix the note:', 'Betulkan nota:'),
            parts: ['I ', { blank: ['am', 'is', 'are'], answer: 'am' }, ' making a surprise for Aiman. Please do ', { blank: ['no', 'not', 'none'], answer: 'not' }, ' tell anyone. I ', { blank: ['did', 'will', 'was'], answer: 'will' }, ' be back before the cake.'],
            hints: [T('"I ___ making" — which word goes with "I"?', '"I ___ making" — perkataan mana yang sesuai dengan "I"?'), T('"Please do ___ tell" — you need a word that means NO to an action.', '"Please do ___ tell" — anda perlukan perkataan yang bermaksud TIDAK kepada satu perbuatan.'), T('The cake is in the FUTURE, so use "will".', 'Kek itu akan datang (MASA DEPAN), jadi guna "will".')] }
        ],
        after: T('The note says: "I am making a surprise for Aiman. Please do not tell anyone. I will be back before the cake." — Zack.', 'Nota itu berbunyi: "I am making a surprise for Aiman. Please do not tell anyone. I will be back before the cake." — Zack.') },

      pz_glass: { subject: 'science', title: T('Observation or inference?', 'Pemerhatian atau inferens?'), grants: { flags: ['glass_reasoned'], items: ['inf_glass'] }, tokens: 0,
        intro: T('A good detective separates what she SEES (observation) from what she THINKS (inference).', 'Detektif yang baik membezakan apa yang dia LIHAT (pemerhatian) dengan apa yang dia FIKIR (inferens).'),
        steps: [
          { type: 'classify', q: T('Sort each sentence:', 'Susun setiap ayat:'),
            statements: [
              { text: T('The glass pieces are small, thin, clear and curved.', 'Serpihan kaca itu kecil, nipis, jernih dan melengkung.'), answer: 'observation' },
              { text: T('There are sticky pink drops next to the glass.', 'Ada titisan merah jambu yang melekit di sebelah kaca.'), answer: 'observation' },
              { text: T('A round glass cover broke when it fell.', 'Penutup kaca bulat pecah apabila ia jatuh.'), answer: 'inference' },
              { text: T('A thief smashed a window.', 'Pencuri memecahkan tingkap.'), answer: 'inference' }
            ],
            hints: [T('Observation = you can see, touch or measure it. Inference = your idea about why.', 'Pemerhatian = anda boleh nampak, sentuh atau ukur. Inferens = idea anda tentang sebabnya.')] },
          { type: 'choice', q: T('Which inference is BEST supported by the observations?', 'Inferens mana yang PALING disokong oleh pemerhatian?'),
            options: [T('A window was smashed from outside.', 'Tingkap dipecahkan dari luar.'), T('Something with a round glass cover was dropped and cracked.', 'Sesuatu dengan penutup kaca bulat dijatuhkan dan retak.'), T('A thief cut a hole in the glass.', 'Pencuri memotong lubang pada kaca.')],
            answer: 1, hints: [T('The pieces are CURVED, not flat like a window.', 'Serpihan itu MELENGKUNG, bukan rata seperti tingkap.')] }
        ],
        after: T('Good thinking! Observations: small curved glass + sticky juice. Best inference: a round glass cover (like a watch glass) was dropped.', 'Bagus! Pemerhatian: kaca melengkung kecil + jus melekit. Inferens terbaik: penutup kaca bulat (seperti kaca jam) terjatuh.') },

      pz_bake: { subject: 'math', title: T('How long in the oven?', 'Berapa lama dalam ketuhar?'), grants: { flags: ['bake_solved'], items: ['inf_bake'] }, tokens: 0,
        intro: T('Add the baking time to the start time.', 'Tambah masa membakar kepada masa mula.'),
        steps: [
          { type: 'choice', q: T('The cupcakes went IN at 3:05 and bake for 25 minutes. What time do they come OUT?', 'Kek cawan MASUK pukul 3:05 dan dibakar 25 minit. Pukul berapa ia KELUAR?'),
            options: ['3:20', '3:25', '3:30', '3:35'], answer: '3:30',
            hints: [T('3:05 + 20 minutes = 3:25. Then add 5 more.', '3:05 + 20 minit = 3:25. Kemudian tambah 5 lagi.')] },
          { type: 'choice', q: T('Mak watched the oven the whole time. Could she be in the living room at 3:20?', 'Mak menjaga ketuhar sepanjang masa. Bolehkah dia berada di ruang tamu pukul 3:20?'),
            options: [T('Yes, easily.', 'Ya, mudah.'), T('No — she was still baking until 3:30.', 'Tidak — dia masih membakar sehingga 3:30.')], answer: 1,
            hints: [T('Is 3:20 before or after 3:30?', 'Adakah 3:20 sebelum atau selepas 3:30?')] }
        ],
        after: T('Mak stayed in the kitchen from 3:05 to 3:30. She has an alibi for the key time.', 'Mak kekal di dapur dari 3:05 hingga 3:30. Dia ada alibi pada waktu penting.') },

      pz_plan: { subject: 'geography', title: T('Read the house plan', 'Baca pelan rumah'), grants: { flags: ['plan_read'], items: ['inf_plan'] }, tokens: 1,
        intro: T('Use the compass (N, S, E, W) on the plan.', 'Gunakan kompas (U, S, T, B) pada pelan.'),
        art: 'plan',
        steps: [
          { type: 'choice', q: T('The pink prints go from the cabinet toward the EAST door. Which room is at the end of the east corridor?', 'Tapak merah jambu menuju pintu TIMUR. Bilik mana di hujung koridor timur?'),
            options: [T('Kitchen', 'Dapur'), T('Garden', 'Taman'), T("Aiman's bedroom", 'Bilik Aiman'), T('Front door', 'Pintu depan')], answer: 2,
            hints: [T('Find E (East) on the compass. Follow the corridor on the plan to the right.', 'Cari T (Timur) pada kompas. Ikut koridor pada pelan ke arah kanan.')] },
          { type: 'choice', q: T('In which direction is the garden from the living room?', 'Taman berada ke arah mana dari ruang tamu?'),
            options: [T('North', 'Utara'), T('South', 'Selatan'), T('East', 'Timur'), T('West', 'Barat')], answer: 1,
            hints: [T('North is at the top of the plan.', 'Utara berada di bahagian atas pelan.')] }
        ],
        after: T('East of the cabinet: corridor → Aiman\'s bedroom. You earn 1 hint token for using the map!', 'Timur dari kabinet: koridor → bilik Aiman. Anda dapat 1 token petunjuk kerana menggunakan peta!') },

      pz_robot: { subject: 'math', title: T('Crack the robot lock', 'Pecahkan kunci robot'), grants: { flags: ['robot_open'], items: ['watch'] }, tokens: 0,
        intro: T('Robo shows 3 number patterns. The next number in each pattern is a digit of the lock code.', 'Robo menunjukkan 3 corak nombor. Nombor seterusnya dalam setiap corak ialah digit kod kunci.'),
        art: 'robotpatterns',
        steps: [
          { type: 'code', q: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
            patterns: ['2, 4, 6, ?', '9, 7, 5, ?', '1, 3, 5, ?'], answer: '837',
            hints: [T('Pattern 1 goes UP by 2 each time.', 'Corak 1 bertambah 2 setiap kali.'), T('Pattern 2 goes DOWN by 2. Pattern 3 goes UP by 2.', 'Corak 2 berkurang 2. Corak 3 bertambah 2.'), T('The code is: 8, 3, 7.', 'Kodnya ialah: 8, 3, 7.')] }
        ],
        after: T('Click! The robot opens. Inside: Atuk\'s gold watch!', 'Klik! Robot itu terbuka. Di dalamnya: jam emas Atuk!') }
    },

    /* ------------------------------------------------------------------ DEDUCTION QUESTIONS (the Deduction Board) */
    questions: [
      { id: 'q_how', title: T('1. How did the watch leave the box?', '1. Bagaimana jam itu keluar dari kotak?'),
        options: [
          { id: 'steal', text: T('It was stolen from outside for money.', 'Ia dicuri dari luar untuk wang.') },
          { id: 'prank', text: T('A guest took it as a prank.', 'Seorang tetamu mengambilnya untuk bergurau.') },
          { id: 'accident_hidden', text: T('It was dropped by accident, and someone hid it.', 'Ia terjatuh tanpa sengaja, dan seseorang menyorokkannya.'), correct: true },
          { id: 'lost', text: T('Atuk forgot where he put it.', 'Atuk lupa di mana dia meletakkannya.') }
        ],
        needs: [['shards'], ['box', 'juice_cup']], needsFlags: [],
        hints: [T('Look closely at the floor in front of the cabinet.', 'Lihat betul-betul lantai di hadapan kabinet.'), T('Was the latch forced? What are the little glass pieces from?', 'Adakah selak dipaksa? Kaca kecil itu daripada apa?')] },
      { id: 'q_when', title: T('2. When did the watch disappear?', '2. Bila jam itu hilang?'),
        options: [
          { id: 'before3', text: T('Before 3:00', 'Sebelum 3:00') },
          { id: 'stamp', text: T('Between 3:20 and 3:35', 'Antara 3:20 dan 3:35') },
          { id: 'win', text: T('Between 3:10 and 3:25', 'Antara 3:10 dan 3:25'), correct: true },
          { id: 'after330', text: T('After 3:30', 'Selepas 3:30') }
        ],
        needs: [['ph_shelf'], ['ph_zack']], needsFlags: [],
        hints: [T('Find a photo where the watch is still in the box, and another where it is gone.', 'Cari gambar yang jam masih dalam kotak, dan satu lagi yang jam sudah hilang.'), T('Read the WALL CLOCK in the photos, not only the camera stamp.', 'Baca JAM DINDING dalam gambar, bukan hanya cap kamera.')] },
      { id: 'q_alibi', title: T('3. Who has NO alibi for 3:10 – 3:25 and was alone near the cabinet?', '3. Siapa TIADA alibi untuk 3:10 – 3:25 dan bersendirian dekat kabinet?'),
        options: [
          { id: 'mak', text: T('Mak', 'Mak') }, { id: 'danish', text: T('Danish', 'Danish') }, { id: 'meiling', text: T('Mei Ling', 'Mei Ling') },
          { id: 'zack', text: T('Zack', 'Zack') }, { id: 'aiman', text: T('Aiman', 'Aiman'), correct: true }
        ],
        needs: [['kitchen_note', 'inf_bake'], ['ph_garden1', 'ph_garden2'], ['shed_note', 'gold_frame', 'inf_note']], needsFlags: ['clock_fixed', 'bake_solved'],
        hints: [T('Check each person: where were they between 3:10 and 3:25? Fix the camera clock first!', 'Semak setiap orang: di mana mereka antara 3:10 dan 3:25? Betulkan jam kamera dahulu!'), T('Mak: baking note. Danish & Mei Ling: garden photos. Zack: the shed.', 'Mak: nota membakar. Danish & Mei Ling: gambar taman. Zack: bangsal.')] },
      { id: 'q_prints', title: T('4. Whose feet made the pink star-sock prints?', '4. Kaki siapa yang membuat tapak stokin bintang merah jambu?'),
        options: [
          { id: 'aiman', text: T('Aiman', 'Aiman'), correct: true }, { id: 'danish', text: T('Danish', 'Danish') },
          { id: 'zack', text: T('Zack', 'Zack') }, { id: 'meiling', text: T('Mei Ling', 'Mei Ling') }
        ],
        needs: [['prints'], ['shoe_rack', 'inf_foot'], ['ph_arrival', 'ph_shelf', 'ph_garden1', 'socks', 'c_mak_socks']], needsFlags: ['foot_measured'],
        hints: [T('Measure the prints. Then check the shoe tags.', 'Ukur tapak itu. Kemudian semak tag kasut.'), T('Who wears STAR socks? Zoom into the photos!', 'Siapa memakai stokin BINTANG? Zum gambar-gambar itu!')] },
      { id: 'q_lie', title: T('5. Whose story does NOT match the evidence, in a way that matters most?', '5. Cerita siapa yang TIDAK sepadan dengan bukti, dengan cara yang paling penting?'),
        options: [
          { id: 'aiman', text: T('Aiman: "I wore my star socks all day."', 'Aiman: "Saya memakai stokin bintang sepanjang hari."'), correct: true },
          { id: 'danish', text: T('Danish: "I never went in the living room."', 'Danish: "Saya tidak pernah masuk ruang tamu."') },
          { id: 'zack', text: T('Zack: "I was in the bathroom."', 'Zack: "Saya di bilik air."') },
          { id: 'mak', text: T('Mak: "I stayed in the kitchen."', 'Mak: "Saya kekal di dapur."') }
        ],
        needs: [['c_mak_socks'], ['c_aiman_socks']], needsFlags: [],
        hints: [T('Danish and Zack lied too — but their lies have innocent reasons. Which lie hides the truth?', 'Danish dan Zack juga berbohong — tetapi pembohongan mereka ada sebab yang tidak bersalah. Pembohongan mana yang menyembunyikan kebenaran?'), T('Compare what Aiman says about his socks with what Mak saw.', 'Bandingkan kata Aiman tentang stokinnya dengan apa yang Mak nampak.')] }
    ],

    /* ------------------------------------------------------------------ FINAL CONCLUSION */
    conclusion: {
      who: { correct: 'aiman' },
      what: { questionId: 'q_how' },
      when: { questionId: 'q_when' },
      where: [
        { id: 'bedroom', text: T("In Aiman's bedroom (toy robot)", 'Di bilik Aiman (robot mainan)'), correct: true },
        { id: 'garden', text: T('In the garden', 'Di taman') }, { id: 'kitchen', text: T('In the kitchen', 'Di dapur') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }
      ],
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_prints', label: T('Pink star-sock prints', 'Tapak stokin bintang merah jambu'), items: ['prints', 'inf_foot'] },
        { id: 'g_accident', label: T('It was an accident, not a theft', 'Ia kemalangan, bukan kecurian'), items: ['shards', 'inf_glass', 'juice_cup', 'box'] },
        { id: 'g_window', label: T('The watch vanished 3:10 – 3:25', 'Jam hilang 3:10 – 3:25'), items: ['ph_shelf', 'ph_zack'] },
        { id: 'g_camera', label: T('Photo alibis (camera fixed)', 'Alibi gambar (kamera dibetulkan)'), items: ['ph_garden1', 'ph_garden2', 'inf_camera'] },
        { id: 'g_mak', label: T("Mak's alibi", 'Alibi Mak'), items: ['kitchen_note', 'inf_bake'] },
        { id: 'g_zack', label: T("Zack's innocent secret", 'Rahsia Zack yang tidak bersalah'), items: ['shed_note', 'gold_frame', 'inf_note'] },
        { id: 'g_socks', label: T("Aiman's changed socks", 'Stokin Aiman yang ditukar'), items: ['socks', 'c_mak_socks', 'c_aiman_socks'] }
      ],
      strongCoverage: 4,
      secondary: ['gold_frame', 'gift_table', 'wishlist', 'watch'],
      secondaryNeeded: 2,
      lieFlags: ['c_danish_garden', 'c_zack_bathroom', 'c_aiman_socks']
    },

    endings: [
      { id: 'secret', stars: 4, title: T('The Real Treasure', 'Harta Yang Sebenar'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.has.watch && r.flags.engraving_read && r.has.gold_frame,
        text: T(
          "You solve the case, and you found the watch AND the message on its back: \"Honesty is worth more than gold.\" Aiman is crying, but Atuk hugs him. \"Thank you for telling the truth,\" he says. Zack shows his gold frame and everyone claps. Danish gives his toy watch. The best gift today was honesty. Case closed!",
          "Anda menyelesaikan kes ini, dan anda menjumpai jam itu DAN pesanan di belakangnya: \"Kejujuran lebih berharga daripada emas.\" Aiman menangis, tetapi Atuk memeluknya. \"Terima kasih kerana berkata benar,\" katanya. Zack menunjukkan bingkai emasnya dan semua orang bertepuk tangan. Danish memberikan jam mainannya. Hadiah terbaik hari ini ialah kejujuran. Kes selesai!") },
      { id: 'perfect', stars: 3, title: T('Case Closed!', 'Kes Selesai!'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec >= 2,
        text: T(
          "Excellent detective work! You proved that it was Aiman — by accident. He dropped the watch with sticky fingers, got scared and hid it. Atuk is not angry: he is proud that Aiman told the truth in the end. Zack and Danish are cleared, and their small lies are forgiven.",
          "Kerja detektif yang hebat! Anda membuktikan ia Aiman — secara tidak sengaja. Dia menjatuhkan jam dengan jari melekit, takut dan menyorokkannya. Atuk tidak marah: dia bangga Aiman akhirnya berkata benar. Zack dan Danish dibersihkan namanya, dan pembohongan kecil mereka dimaafkan.") },
      { id: 'missed', stars: 2, title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec < 2,
        text: T(
          "You found the right answer with strong proof! But you missed some side clues: Zack's surprise frame, Danish's toy-watch present, Aiman's wish list or the watch itself. Because of that, Zack and Danish still feel blamed. Next time, look in every room.",
          "Anda menjumpai jawapan yang betul dengan bukti kukuh! Tetapi anda terlepas beberapa petunjuk sampingan: bingkai kejutan Zack, hadiah jam mainan Danish, senarai hajat Aiman atau jam itu sendiri. Kerana itu, Zack dan Danish masih rasa dipersalahkan. Lain kali, periksa setiap bilik.") },
      { id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'),
        when: (r) => r.ok.who,
        text: T(
          "You named the right person — but your explanation did not have enough evidence. A real detective must PROVE it. Go back, collect more clues, fix the camera clock, compare the stories, then try again.",
          "Anda menyebut orang yang betul — tetapi penjelasan anda tidak cukup bukti. Detektif sebenar mesti MEMBUKTIKANNYA. Kembali, kumpulkan lebih banyak petunjuk, betulkan jam kamera, bandingkan cerita, kemudian cuba lagi.") },
      { id: 'wrong', stars: 0, title: T('The wrong person!', 'Orang yang salah!'),
        when: () => true,
        text: T(
          "Oh no — that was not the right person. Misleading clues fooled you. Remember: the most suspicious person is not always the guilty one. Look again at WHO could be alone in the living room between 3:10 and 3:25, and whose feet made the prints.",
          "Alamak — itu bukan orang yang betul. Petunjuk mengelirukan telah menipu anda. Ingat: orang yang paling mencurigakan belum tentu bersalah. Lihat semula SIAPA yang boleh bersendirian di ruang tamu antara 3:10 dan 3:25, dan kaki siapa yang membuat tapak itu.") }
    ],
    wrongWho: {
      zack: T("Zack looked guilty: he lied about the bathroom, had gold paint on his hands and walked past the cabinet. But the gold paint was for a SURPRISE FRAME for Aiman, his socks are black (not star socks) and his foot is 26 cm.", 'Zack nampak bersalah: dia berbohong tentang bilik air, ada cat emas di tangan dan lalu di kabinet. Tetapi cat emas itu untuk BINGKAI KEJUTAN untuk Aiman, stokinnya hitam (bukan bintang) dan kakinya 26 cm.'),
      danish: T('Danish argued with Aiman and lied about the living room. But he was in the garden at 3:15 and 3:23 (once the camera clock is fixed) and his foot is 21 cm.', 'Danish bertengkar dengan Aiman dan berbohong tentang ruang tamu. Tetapi dia di taman pada 3:15 dan 3:23 (selepas jam kamera dibetulkan) dan kakinya 21 cm.'),
      meiling: T('Mei Ling was taking photos in the garden at the key time and her foot is 22 cm.', 'Mei Ling mengambil gambar di taman pada waktu penting dan kakinya 22 cm.'),
      mak: T('Mak was baking: 3:05 + 25 minutes = 3:30. She could not leave the oven.', 'Mak sedang membakar: 3:05 + 25 minit = 3:30. Dia tidak boleh meninggalkan ketuhar.'),
      atuk: T("Atuk is the owner and was in the gazebo in both garden photos.", 'Atuk ialah pemilik dan berada di gazebo dalam kedua-dua gambar taman.')
    },

    /* ------------------------------------------------------------------ INTERVIEWS */
    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      atuk: {
        greeting: T("Detective, thank you for coming. My father's gold watch is gone from its box. I wanted to give it to Aiman at cake time...", 'Detektif, terima kasih kerana datang. Jam emas ayah saya hilang dari kotaknya. Saya mahu memberikannya kepada Aiman semasa memotong kek...'),
        topics: [
          { id: 'watch', label: T('Tell me about the watch', 'Ceritakan tentang jam itu'),
            lines: [T('It is a gold pocket watch with a clear glass cover. It is very old. The back has a message I wrote for Aiman.', 'Ia jam saku emas dengan penutup kaca jernih. Ia sangat lama. Di belakangnya ada pesanan yang saya tulis untuk Aiman.'), T('But I care more about the children being honest than about gold.', 'Tetapi saya lebih mengambil berat tentang kejujuran kanak-kanak daripada emas.')] },
          { id: 'seen', label: T('When did you last see it?', 'Bila kali terakhir anda melihatnya?'),
            lines: [T('At 3:00 I opened the box and looked. It was there. I closed the box and went to sit in the gazebo.', 'Pukul 3:00 saya membuka kotak dan melihatnya. Ia ada. Saya tutup kotak dan pergi duduk di gazebo.'), T('At 3:55 I came back to give the gift. The box was empty.', 'Pukul 3:55 saya kembali untuk memberi hadiah. Kotak itu kosong.')],
            claims: ['c_atuk_seen3', 'c_atuk_empty'] },
          { id: 'where', label: T('Where were you this afternoon?', 'Di mana anda petang ini?'),
            lines: [T('In the gazebo in the garden with my tea. I did not come inside until 3:55.', 'Di gazebo di taman dengan teh saya. Saya tidak masuk ke dalam sehingga 3:55.')],
            claims: ['c_atuk_gazebo'] },
          { id: 'box', label: T('Was the box locked?', 'Adakah kotak itu dikunci?'),
            lines: [T('No. It only has a little brass latch. The key was lost many years ago. Anyone could open it normally.', 'Tidak. Ia hanya ada selak tembaga kecil. Kuncinya hilang bertahun-tahun lalu. Sesiapa boleh membukanya dengan biasa.')] },
          { id: 'suspect', label: T('Who do you think took it?', 'Siapa yang anda fikir mengambilnya?'),
            lines: [T('Hmm. Zack looks worried and keeps hiding something. But I will not accuse anyone without proof.', 'Hmm. Zack nampak risau dan menyembunyikan sesuatu. Tetapi saya tidak akan menuduh sesiapa tanpa bukti.')] }
        ],
        present: {
          ph_arrival: { lines: [T('Ah, my watch in its box at the start of the party. A nice photo.', 'Ah, jam saya dalam kotaknya pada permulaan majlis. Gambar yang cantik.')] },
          watch: { lines: [T('...You found it. The glass is cracked. Who...? Please — I only want to know the TRUTH. Not to punish.', '...Anda menjumpainya. Kacanya retak. Siapa...? Tolong — saya hanya mahu tahu KEBENARAN. Bukan untuk menghukum.')] }
        }
      },
      mak: {
        greeting: T('Oh dear, please find the watch before the cake. I must also watch my cupcakes!', 'Aduhai, tolong cari jam itu sebelum kek. Saya juga perlu menjaga kek cawan saya!'),
        topics: [
          { id: 'kitchen', label: T('Where were you this afternoon?', 'Di mana anda petang ini?'),
            lines: [T('In the kitchen. The cupcakes went in at 3:05 and I stayed beside the oven until they were done. I did not leave.', 'Di dapur. Kek cawan masuk pukul 3:05 dan saya kekal di sebelah ketuhar sehingga siap. Saya tidak keluar.')],
            claims: ['c_mak_kitchen'] },
          { id: 'passed', label: T('Did you pass through the living room?', 'Adakah anda melalui ruang tamu?'), after: 'kitchen',
            lines: [T('Only when the cupcakes came out — I carried them to the garden.', 'Hanya apabila kek cawan keluar — saya membawanya ke taman.'), T('Aiman came out of the corridor, pale. His socks were plain white! I asked, "Where are your new star socks?" He said they got wet.', 'Aiman keluar dari koridor, pucat. Stokinnya putih biasa! Saya tanya, "Mana stokin bintang baru kamu?" Dia kata ia basah.')],
            claims: ['c_mak_socks'] },
          { id: 'aiman', label: T('How is Aiman acting?', 'Bagaimana kelakuan Aiman?'),
            lines: [T('Quiet. Poor boy — too much excitement, I think.', 'Senyap. Kasihan — terlalu teruja, saya rasa.')] },
          { id: 'guests', label: T('Who else came into the house?', 'Siapa lagi yang masuk ke rumah?'),
            lines: [T('Zack carried a big bag in and out. Danish and Mei Ling mostly played outside.', 'Zack membawa beg besar keluar masuk. Danish dan Mei Ling kebanyakannya bermain di luar.')] }
        ],
        present: {
          kitchen_note: { lines: [T('Yes, that is my baking note. 3:05 and 25 minutes. I could not leave the oven.', 'Ya, itu nota membakar saya. 3:05 dan 25 minit. Saya tidak boleh meninggalkan ketuhar.')] },
          socks: { lines: [T("Those are Aiman's new star socks! Why are they stained pink?...", 'Itu stokin bintang baru Aiman! Kenapa ia bernoda merah jambu?...')] },
          prints: { lines: [T('Tiny sock prints with stars... that looks like the pattern of the birthday socks I gave Aiman.', 'Tapak stokin kecil dengan bintang... itu seperti corak stokin hari jadi yang saya beri kepada Aiman.')] },
          ph_zack: { lines: [T('That is Zack with his big bag. He is always carrying something.', 'Itu Zack dengan beg besarnya. Dia sentiasa membawa sesuatu.')] }
        }
      },
      danish: {
        greeting: T("I didn't take it! I only wanted to SEE it!", 'Saya tak ambil! Saya cuma mahu MELIHATNYA!'),
        topics: [
          { id: 'where', label: T('Where were you this afternoon?', 'Di mana anda petang ini?'),
            lines: [T('In the garden the whole time, playing football. I never went into the living room after lunch.', 'Di taman sepanjang masa, bermain bola. Saya tidak pernah masuk ruang tamu selepas makan tengah hari.')],
            claims: ['c_danish_garden'] },
          { id: 'watch', label: T('What do you think of the watch?', 'Apa pendapat anda tentang jam itu?'),
            lines: [T('It is so cool, like pirate treasure. I love watches.', 'Ia sangat hebat, seperti harta karun lanun. Saya suka jam tangan.')] },
          { id: 'friend', label: T('Are you and Aiman friends?', 'Adakah anda dan Aiman berkawan?'),
            lines: [T('Best friends! Even if he can be grumpy.', 'Kawan baik! Walaupun dia kadang-kadang berangin.')] },
          { id: 'after', label: T('What did you do after 3:15?', 'Apa yang anda buat selepas 3:15?'), after: 'admit',
            lines: [T('I stayed outside kicking the ball. Ask Mei Ling — she took photos of me.', 'Saya kekal di luar menendang bola. Tanya Mei Ling — dia mengambil gambar saya.')],
            claims: ['c_danish_stayed'] }
        ],
        present: {
          ph_shelf: { flags: ['danish_admitted'], unlock: 'admit', claims: ['c_danish_admit'],
            lines: [T('Okay, okay... I DID go in. At 3:10 I asked Aiman to show me the watch. He said Atuk told him not to touch it.', 'Okay, okay... Saya MEMANG masuk. Pukul 3:10 saya minta Aiman tunjukkan jam itu. Dia kata Atuk suruh jangan sentuh.'), T('I got angry and went outside. I was embarrassed, so I lied. Sorry!', 'Saya marah dan keluar. Saya malu, jadi saya berbohong. Maaf!')] },
          gift_table: { lines: [T("That's my present for Aiman — a toy gold watch from the night market! I wanted to compare it with Atuk's real one.", 'Itu hadiah saya untuk Aiman — jam emas mainan dari pasar malam! Saya mahu membandingkannya dengan jam sebenar Atuk.'), T("Please don't tell him, it's a surprise.", 'Tolong jangan beritahu dia, ia kejutan.')] },
          ph_garden2: { lines: [T('See? That is me playing football. I stayed outside.', 'Nampak? Itu saya bermain bola. Saya kekal di luar.')] },
          prints: { lines: [T('Those prints are small... my feet are bigger than that!', 'Tapak itu kecil... kaki saya lebih besar daripada itu!')] }
        }
      },
      meiling: {
        greeting: T('I take photos of everything! My camera is the best. Its clock is always exactly right.', 'Saya ambil gambar semuanya! Kamera saya yang terbaik. Jamnya sentiasa tepat.'),
        topics: [
          { id: 'camera', label: T('Can I see your camera?', 'Boleh saya lihat kamera anda?'), gives: ['camera'],
            lines: [T('Sure! Be careful. My camera clock is always exactly right.', 'Boleh! Hati-hati. Jam kamera saya sentiasa tepat.')],
            claims: ['c_meiling_camera'] },
          { id: 'photos', label: T('What did you photograph?', 'Apa yang anda ambil gambar?'),
            lines: [T('Everyone! The start of the party, Danish and Aiman by the cabinet, football in the garden, and Zack walking through with his bag.', 'Semua orang! Permulaan majlis, Danish dan Aiman di kabinet, bola di taman, dan Zack berjalan dengan begnya.')] },
          { id: 'aiman', label: T('Where was Aiman?', 'Di mana Aiman?'), after: 'camera',
            lines: [T('He played with us, then he was gone for a while. I thought he went to the toilet. He came back when the cupcakes arrived.', 'Dia bermain dengan kami, kemudian dia hilang seketika. Saya sangka dia ke tandas. Dia kembali apabila kek cawan tiba.')],
            claims: ['c_meiling_gone'] },
          { id: 'danish', label: T('Was Danish in the garden all the time?', 'Adakah Danish di taman sepanjang masa?'), after: 'camera',
            lines: [T('Yes! He kept kicking the ball and shouting. He is so loud. Check my photos.', 'Ya! Dia asyik menendang bola dan menjerit. Dia sangat bising. Semak gambar saya.')] }
        ],
        present: {
          ph_shelf: { lines: [T('That is Danish and Aiman by the cabinet. Everything looks normal. The clock on the wall... hmm, it says 3:10, but my camera says 3:20? That is strange.', 'Itu Danish dan Aiman di kabinet. Semuanya nampak biasa. Jam di dinding... hmm, ia 3:10, tetapi kamera saya 3:20? Pelik.')] },
          inf_camera: { lines: [T('My camera was 10 minutes fast?! I never noticed. Sorry!', 'Kamera saya cepat 10 minit?! Saya tidak perasan. Maaf!')] }
        }
      },
      zack: {
        greeting: T("Why are you looking at me? I didn't do anything!", 'Kenapa awak pandang saya? Saya tak buat apa-apa!'),
        topics: [
          { id: 'where', label: T('Where were you between 3:10 and 3:30?', 'Di mana anda antara 3:10 dan 3:30?'),
            lines: [T('In the bathroom. My tummy hurt.', 'Di bilik air. Perut saya sakit.')],
            claims: ['c_zack_bathroom'] },
          { id: 'hands', label: T('What is on your hands?', 'Apa yang ada di tangan anda?'),
            lines: [T("Uh... nothing. It's, um, gold marker. Yes. Marker.", 'Err... tak ada apa-apa. Ia, um, pen penanda emas. Ya. Pen penanda.')] },
          { id: 'money', label: T('Do you need money?', 'Adakah anda perlukan wang?'),
            lines: [T('Who told you that?! I... just saved my pocket money for something. It is private!', 'Siapa kata begitu?! Saya... cuma menyimpan duit poket untuk sesuatu. Ia peribadi!')] }
        ],
        present: {
          shed_note: { flags: ['zack_admitted'], claims: ['c_zack_shed'], requiresFlag: 'note_restored',
            lines: [T('Okay... you found my note. I made a surprise frame for Aiman with a photo of him and Atuk. I was in the shed painting it.', 'Okay... anda jumpa nota saya. Saya buat bingkai kejutan untuk Aiman dengan gambar dia dan Atuk. Saya di bangsal mengecatnya.'), T('I lied about the bathroom because it is a SURPRISE. At 3:25 I walked through to wash my hands. I did not touch the box!', 'Saya berbohong tentang bilik air kerana ia KEJUTAN. Pukul 3:25 saya lalu untuk membasuh tangan. Saya tidak sentuh kotak itu!')],
            lockedLines: [T("That's... a note? I can't even read it. (It is too torn to read. Fix the note first!)", 'Itu... nota? Saya pun tak boleh baca. (Ia terlalu koyak. Betulkan nota dahulu!)')] },
          gold_frame: { flags: ['zack_admitted'], claims: ['c_zack_shed'],
            lines: [T('You found my frame! It is a birthday gift. I lied about the bathroom to keep it secret. Please do not spoil it!', 'Anda jumpa bingkai saya! Ia hadiah hari jadi. Saya berbohong tentang bilik air untuk merahsiakannya. Tolong jangan rosakkan!')] },
          ph_zack: { lines: [T('That is me with my paint things! I was going to wash my hands. See my black socks? I did not touch the box.', 'Itu saya dengan barang cat saya! Saya mahu membasuh tangan. Nampak stokin hitam saya? Saya tidak sentuh kotak itu.')] },
          prints: { lines: [T('My feet are way bigger than that. And I wear black socks.', 'Kaki saya jauh lebih besar daripada itu. Dan saya pakai stokin hitam.')] }
        }
      },
      aiman: {
        greeting: T('Hi... are you the detective? I hope you find Atuk\'s watch. (He looks at the floor.)', 'Hai... awak detektif itu? Saya harap awak jumpa jam Atuk. (Dia memandang lantai.)'),
        topics: [
          { id: 'where', label: T('Where were you this afternoon?', 'Di mana anda petang ini?'),
            lines: [T('Playing in the garden with Danish and Mei Ling, all the time. I only went to the toilet once. I did not go near the cabinet.', 'Bermain di taman dengan Danish dan Mei Ling, sepanjang masa. Saya hanya ke tandas sekali. Saya tidak pergi dekat kabinet.')],
            claims: ['c_aiman_where'] },
          { id: 'touch', label: T('Did you touch the watch?', 'Adakah anda menyentuh jam itu?'),
            lines: [T('No! Atuk said not to touch it. I never touched it.', 'Tidak! Atuk suruh jangan sentuh. Saya tidak pernah menyentuhnya.')],
            claims: ['c_aiman_notouch'] },
          { id: 'socks', label: T('Nice socks! Tell me about them.', 'Stokin yang cantik! Ceritakan tentang ia.'),
            lines: [T('Thanks! Mak gave me star socks for my birthday. I wore them all day.', 'Terima kasih! Mak beri saya stokin bintang untuk hari jadi saya. Saya memakainya sepanjang hari.')],
            claims: ['c_aiman_socks'] },
          { id: 'watch', label: T('What does the watch mean to you?', 'Apa makna jam itu bagi anda?'),
            lines: [T("I wanted one so much. It's on my wish list. But I would never take it!", 'Saya sangat mahukannya. Ia ada dalam senarai hajat saya. Tetapi saya tidak akan mengambilnya!')] }
        ],
        present: {
          ph_shelf: { lines: [T('Danish wanted to hold it, but I said no. Atuk told me not to touch it.', 'Danish mahu memegangnya, tetapi saya kata tidak. Atuk suruh jangan sentuh.')], claims: ['c_aiman_refused'] },
          ph_garden2: { lines: [T('Um... I was in the toilet then. Yes. The toilet.', 'Err... saya di tandas masa itu. Ya. Tandas.')] },
          prints: { lines: [T("That's not mine! Anyone could make that! (His voice shakes.)", 'Itu bukan saya! Sesiapa boleh buat begitu! (Suaranya bergetar.)')] },
          socks: { lines: [T('I... I don\'t want to talk about that. (He looks very scared.)', 'Saya... saya tak mahu bercakap tentang itu. (Dia kelihatan sangat takut.)')] },
          c_mak_socks: { lines: [T('Mak is wrong. Maybe she forgot. (He looks away.)', 'Mak silap. Mungkin dia lupa. (Dia memandang ke tepi.)')] },
          wishlist: { lines: [T('Yes, that is my list. I wanted a watch like Atuk\'s, but I would ask nicely!', 'Ya, itulah senarai saya. Saya mahu jam seperti Atuk, tetapi saya akan minta dengan baik!')] }
        }
      }
    },

    /* ------------------------------------------------------------------ SPOOKY MOMENTS (mild, age 8–15) */
    horror: {
      zones: [
        { id: 'corr_flicker', room: 'CR', once: true, minScare: 1, fx: ['flicker:CR:2.5', 'sfx:creak'] },
        { id: 'corr_steps', room: 'CR', once: true, minScare: 2, delay: 3, fx: ['sfx:steps_far'] },
        { id: 'br_door', room: 'BR', once: true, minScare: 1, fx: ['sfx:creak', 'flicker:BR:1.5'] },
        { id: 'garden_swing', room: 'GD', once: true, minScare: 1, fx: ['sfx:creak'] },
        { id: 'lr_music', room: 'LR', once: true, minScare: 2, delay: 25, fx: ['sfx:musicbox'] }
      ],
      figure: { room: 'CR', minScare: 2, revealDistance: 3.2,
        reveal: T("It is only Atuk's raincoat and hat on the coat stand! (A false alarm.)", 'Ia hanya baju hujan dan topi Atuk pada penyangkut! (Penggera palsu.)') }
    },

    /* ------------------------------------------------------------------ EXIT TICKET (quick check after the ending) */
    exitTicket: [
      { subject: 'math', q: T('The camera stamp said 3:33 but the camera was 10 minutes fast. What was the REAL time?', 'Cap kamera 3:33 tetapi kamera cepat 10 minit. Pukul berapa masa SEBENAR?'),
        options: ['3:13', '3:23', '3:33', '3:43'], answer: 1, why: T('3:33 − 10 minutes = 3:23.', '3:33 − 10 minit = 3:23.') },
      { subject: 'thinking', q: T('Danish lied about the living room, but he was NOT guilty. What does this teach us?', 'Danish berbohong tentang ruang tamu, tetapi dia TIDAK bersalah. Apakah pengajarannya?'),
        options: [T('People can lie for innocent reasons, so we need evidence.', 'Orang boleh berbohong atas sebab tidak bersalah, jadi kita perlukan bukti.'), T('Anyone who lies is always guilty.', 'Sesiapa yang berbohong sentiasa bersalah.'), T('Quiet people are the guilty ones.', 'Orang yang pendiam yang bersalah.')],
        answer: 0, why: T('A lie is a clue, not proof. Always check it against the evidence.', 'Pembohongan ialah petunjuk, bukan bukti. Sentiasa semak dengan bukti.') },
      { subject: 'english', q: T('Atuk wrote on the watch: "Honesty is worth more than ____."', 'Atuk menulis pada jam: "Honesty is worth more than ____."'),
        options: [T('gold', 'emas'), T('toys', 'mainan'), T('cake', 'kek')], answer: 0, why: T('"Honesty is worth more than gold."', '"Kejujuran lebih berharga daripada emas."') }
    ],

    /* ------------------------------------------------------------------ 3D WORLD (built from this data) */
    world(W) {
      const H = 3.0;
      W.sky(0x222a44);
      W.spawn(this.spawn.x, this.spawn.z, this.spawn.yaw);

      /* ---- rooms ---- */
      W.room('LR', -6, -4, 2, 4, T('Living room', 'Ruang tamu'), true, 0xd9c7a3, 0xe6d9bf);
      W.room('KT', -6, -10, 2, -4, T('Kitchen', 'Dapur'), true, 0xe8e4da, 0xf0efe6);
      W.room('CR', 2, -1, 10, 1, T('Corridor', 'Koridor'), true, 0x9c8a74, 0xbdb4a4, 2.6);
      W.room('BR', 10, -4, 16, 4, T("Aiman's bedroom", 'Bilik Aiman'), true, 0xc9b99a, 0xaecbe0);
      W.room('GD', -10, 4, 14, 20, T('Garden', 'Taman'), false, 0x4f8a45);

      /* ---- walls (gaps are doorways) ---- */
      W.wallZ(-4, -6, 2, [[-3, -1]], H, 0xe6d9bf);       // LR north (kitchen door)
      W.wallZ(4, -6, 2, [[-2, 0]], H, 0xe6d9bf);         // LR south (garden sliding door)
      W.wallX(-6, -4, 4, [], H, 0xe6d9bf);               // LR west (front door is decoration)
      W.wallX(2, -4, 4, [[-1, 1]], H, 0xe6d9bf);         // LR east (corridor)
      W.wallZ(-10, -6, 2, [], H, 0xf0efe6);              // KT north
      W.wallX(-6, -10, -4, [], H, 0xf0efe6);             // KT west
      W.wallX(2, -10, -4, [], H, 0xf0efe6);              // KT east
      W.wallZ(-1, 2, 10, [], 2.6, 0xbdb4a4);             // CR north
      W.wallZ(1, 2, 10, [], 2.6, 0xbdb4a4);              // CR south
      W.wallZ(-4, 10, 16, [], H, 0xaecbe0);              // BR north
      W.wallZ(4, 10, 16, [], H, 0xaecbe0);               // BR south
      W.wallX(16, -4, 4, [], H, 0xaecbe0);               // BR east
      W.wallX(10, -4, 4, [[-1, 1]], H, 0xaecbe0);        // BR west (bedroom door)
      // garden boundary
      W.wallZ(4, -10, -6, [], 1.4, 0x8d6b4b); W.wallZ(4, 2, 10, [], 1.4, 0x8d6b4b);
      W.wallX(-10, 4, 20, [], 1.4, 0x8d6b4b); W.wallX(14, 4, 20, [], 1.4, 0x8d6b4b); W.wallZ(20, -10, 14, [], 1.4, 0x8d6b4b);

      /* ---- lights ---- */
      W.light('LR', -2, 2.7, 0, 0xffe2b0, 0.5, 12);
      W.light('KT', -2, 2.7, -7, 0xfff1d6, 0.5, 10);
      W.light('CR', 6, 2.3, 0, 0xffd9a0, 0.3, 9);
      W.light('BR', 13, 2.7, 0, 0xcfe4ff, 0.5, 10);
      W.light('GD', 2, 4, 11, 0xffb98a, 0.4, 22);

      /* ================= LIVING ROOM ================= */
      // decorative front door (west wall)
      W.box(-5.88, 0, 2.7, 0.12, 2.2, 1.0, 0x6b4630, { collide: false });
      W.box(-5.8, 1.0, 2.1, 0.08, 0.1, 0.1, 0xd4af37, { collide: false });
      // shoe rack + shoes
      W.box(-5.45, 0, 0.9, 0.5, 0.45, 1.5, 0x7a5a3a);
      [[0.3, 0x4a90d9], [0.6, 0xd9534f], [0.9, 0x5cb85c], [1.2, 0x333333], [1.45, 0x888888]].forEach(([dz, c]) => W.box(-5.45, 0.45, 0.2 + dz, 0.3, 0.12, 0.14, c, { collide: false }));
      W.interact({ id: 'shoe_rack', x: -5.2, y: 0.7, z: 0.9, r: 0.8, label: T('Shoe rack', 'Rak kasut'), item: 'shoe_rack' });
      // sofa + cushions
      W.box(-4.5, 0, -3.3, 2.4, 0.5, 0.9, 0x5b7fa6);
      W.box(-4.5, 0.5, -3.65, 2.4, 0.6, 0.2, 0x4d6e94);
      W.box(-5.55, 0, -3.3, 0.25, 0.7, 0.9, 0x4d6e94);
      W.box(-3.45, 0, -3.3, 0.25, 0.7, 0.9, 0x4d6e94);
      W.interact({ id: 'sofa', x: -4.5, y: 0.7, z: -3.2, r: 1.0, label: T('Sofa', 'Sofa'), text: T('You check the cushions. Only a lost button and some popcorn. Nothing important.', 'Anda memeriksa kusyen. Hanya sebutir butang dan sedikit bertih jagung. Tiada yang penting.') });
      // coffee table
      W.box(-4.0, 0, -0.6, 1.4, 0.4, 0.8, 0x8a6a45);
      W.box(-4.0, 0.4, -0.6, 0.35, 0.18, 0.35, 0xf5d86e, { collide: false });
      // TV unit
      W.box(-5.6, 0, -1.6, 0.5, 0.5, 1.6, 0x3a3a3a); W.box(-5.7, 0.5, -1.6, 0.08, 0.7, 1.3, 0x111111, { collide: false });
      W.interact({ id: 'tv', x: -5.5, y: 0.9, z: -1.6, r: 0.7, label: T('TV', 'TV'), text: T('The TV is switched off. Nobody has watched it today.', 'TV ditutup. Tiada siapa menontonnya hari ini.') });
      // plant
      W.cyl(-5.4, 0, 3.4, 0.22, 0.4, 0xb5651d); W.ball(-5.4, 0.85, 3.4, 0.4, 0x3f9142);
      W.interact({ id: 'plant', x: -5.4, y: 0.8, z: 3.4, r: 0.5, label: T('Plant', 'Pokok'), text: T('A big green plant. The soil is damp. Nothing hidden here.', 'Pokok hijau yang besar. Tanahnya lembap. Tiada apa tersembunyi di sini.') });
      // display cabinet + box (THE scene)
      W.box(0.9, 0, -3.65, 1.8, 1.0, 0.5, 0x6b4630);
      W.box(0.9, 1.0, -3.65, 0.42, 0.12, 0.3, 0x8a6a45, { collide: false });          // box base
      W.box(0.9, 1.12, -3.65, 0.42, 0.03, 0.3, 0xa9d6ff, { collide: false });         // clear lid
      W.box(0.9, 1.52, -3.9, 1.2, 0.6, 0.04, 0xd8b26e, { collide: false });           // picture frame
      W.interact({ id: 'box', x: 0.9, y: 1.1, z: -3.55, r: 0.45, label: T('Display box', 'Kotak pameran'), item: 'box' });
      // spilled juice + cup + glass
      W.decal(0.45, -2.85, 0.7, 0.55, 0.4, 0xff7aa8, { y: 0.012 });
      W.cyl(0.2, 0, -2.6, 0.06, 0.12, 0xff4d88, { collide: false });
      W.interact({ id: 'juice_cup', x: 0.35, y: 0.1, z: -2.8, r: 0.5, label: T('Cup on the floor', 'Cawan di lantai'), item: 'juice_cup' });
      for (let i = 0; i < 6; i++) W.box(1.15 + (i % 3) * 0.06, 0.01, -3.1 + Math.floor(i / 3) * 0.07, 0.04, 0.012, 0.03, 0xcfefff, { collide: false });
      W.interact({ id: 'shards', x: 1.2, y: 0.05, z: -3.05, r: 0.4, label: T('Something on the carpet', 'Sesuatu di permaidani'), item: 'shards' });
      // pink footprint trail (LR → corridor → bedroom door)
      W.trail([[0.9, -2.75], [1.15, -2.1], [1.0, -1.5], [1.45, -0.9], [1.7, -0.45], [2.5, -0.1], [3.4, 0.1], [4.4, -0.1], [5.4, 0.1], [6.4, -0.1], [7.4, 0.1], [8.4, -0.1], [9.4, 0.1], [10.3, 0.0]]);
      W.interact({ id: 'prints_a', x: 1.2, y: 0.05, z: -2.2, r: 0.55, label: T('Pink marks on the carpet', 'Kesan merah jambu di permaidani'), item: 'prints' });
      W.interact({ id: 'prints_b', x: 9.6, y: 0.05, z: 0.0, r: 0.6, label: T('Pink marks on the floor', 'Kesan merah jambu di lantai'), item: 'prints' });
      // gift table
      W.box(0.8, 0, 2.3, 1.6, 0.7, 1.0, 0xffffff);
      [[0.4, 0.7, 0xe74c3c], [0.9, 0.7, 0x3498db], [1.3, 0.7, 0x2ecc71]].forEach(([dx, y, c], i) => W.box(0.15 + dx * 0.8, y, 2.2 + (i - 1) * 0.1, 0.3, 0.25, 0.3, c, { collide: false }));
      W.box(0.5, 0.7, 2.5, 0.28, 0.06, 0.2, 0xf1c40f, { collide: false });
      W.interact({ id: 'gift_table', x: 0.8, y: 0.9, z: 2.3, r: 0.9, label: T('Present table', 'Meja hadiah'), item: 'gift_table' });
      // wall clock (shows game time) above kitchen door
      W.clock(-2, 2.55, -3.88);
      W.interact({ id: 'wall_clock', x: -2, y: 2.4, z: -3.7, r: 0.6, label: T('Wall clock', 'Jam dinding'), text: 'CLOCK' });
      // house plan on east wall
      W.box(1.9, 1.3, 2.7, 0.06, 0.7, 1.0, 0xf5f0e0, { collide: false });
      W.box(1.88, 1.3, 2.7, 0.04, 0.78, 1.08, 0x6b4630, { collide: false });
      W.interact({ id: 'plan', x: 1.8, y: 1.5, z: 2.7, r: 0.7, label: T('House plan on the wall', 'Pelan rumah di dinding'), item: 'plan' });
      // drawer
      W.box(-5.6, 0, 3.8, 0.5, 0.8, 0.4, 0x7a5a3a);
      W.interact({ id: 'drawer', x: -5.5, y: 0.8, z: 3.75, r: 0.55, label: T('Drawer', 'Laci'), text: T('You search the drawer: napkins, birthday candles, a spare front-door key. Nothing about the watch.', 'Anda mencari dalam laci: napkin, lilin hari jadi, kunci pintu depan simpanan. Tiada kaitan dengan jam.') });
      // balloons
      [[-3, 2.4, -3.5, 0xe74c3c], [-1.2, 2.5, -3.6, 0x3498db], [1.5, 2.3, 3.5, 0xf1c40f], [-5.5, 2.4, 0, 0x2ecc71], [1.2, 2.5, -1.2, 0xe67e22]].forEach(([x, y, z, c]) => W.ball(x, y, z, 0.22, c));

      /* ================= KITCHEN ================= */
      W.box(-2.9, 0, -9.6, 5.0, 0.9, 0.7, 0xdcd6c8);           // counter
      W.box(-2.5, 0.9, -9.6, 0.9, 0.08, 0.6, 0x333333, { collide: false }); // stove top
      W.box(-2.5, 0, -9.3, 0.9, 0.9, 0.05, 0x222222, { collide: false });   // oven door
      W.box(-5.55, 0, -8, 0.8, 1.9, 0.8, 0xf2f2f2);            // fridge
      W.box(-5.12, 1.35, -8, 0.02, 0.2, 0.18, 0xfff8b0, { collide: false }); // note on fridge
      W.interact({ id: 'kitchen_note', x: -5.05, y: 1.4, z: -8, r: 0.55, label: T('Note on the fridge', 'Nota di peti sejuk'), item: 'kitchen_note' });
      W.interact({ id: 'oven_timer', x: -2.5, y: 0.8, z: -9.2, r: 0.5, label: T('Oven timer', 'Pemasa ketuhar'), text: T('The oven timer shows 00:00. The cupcakes are done and sitting on the counter.', 'Pemasa ketuhar menunjukkan 00:00. Kek cawan sudah siap di atas kaunter.') });
      W.box(0.6, 0, -6.9, 1.4, 0.8, 1.0, 0xdcd6c8);            // cake table
      W.cyl(0.6, 0.8, -6.9, 0.36, 0.2, 0xfff2c8); W.cyl(0.6, 1.0, -6.9, 0.25, 0.15, 0xff8fb1);
      for (let i = 0; i < 5; i++) W.cyl(0.6 + Math.cos(i * 1.26) * 0.16, 1.15, -6.9 + Math.sin(i * 1.26) * 0.16, 0.012, 0.1, 0xffee58, { collide: false });
      W.interact({ id: 'cake', x: 0.6, y: 1.0, z: -6.9, r: 0.6, label: T('Birthday cake', 'Kek hari jadi'), text: T('A big chocolate cake with 10 candles. Nobody has cut it yet. It smells delicious!', 'Kek coklat besar dengan 10 batang lilin. Belum ada yang memotongnya. Baunya sedap!') });
      W.box(-1.4, 0, -6.0, 1.2, 0.9, 0.6, 0xb8a98a);
      W.box(-3.5, 0.9, -9.5, 0.6, 0.12, 0.45, 0xf4b6c2, { collide: false });
      W.interact({ id: 'fridge', x: -5.1, y: 1.0, z: -7.4, r: 0.55, label: T('Fridge', 'Peti sejuk'), text: T('Cold drinks, a jar of sambal and lots of party food. Nothing to do with the case.', 'Minuman sejuk, sebotol sambal dan banyak makanan majlis. Tiada kaitan dengan kes.') });

      /* ================= CORRIDOR ================= */
      W.box(5.0, 1.0, -0.92, 0.9, 0.65, 0.04, 0xd8b26e, { collide: false });
      W.interact({ id: 'family_photos', x: 5, y: 1.2, z: -0.8, r: 0.7, label: T('Family photos', 'Gambar keluarga'), text: T('A young Atuk holds a gold pocket watch. The note says: "The Hassan family watch — passed down since 1950." It is old and precious.', 'Atuk muda memegang jam saku emas. Nota berbunyi: "Jam keluarga Hassan — diwarisi sejak 1950." Ia lama dan berharga.') });
      // coat stand with hat + coat (the "figure")
      W.box(9.2, 0, 0.55, 0.06, 1.7, 0.06, 0x3a2a1a);
      W.box(9.2, 0.8, 0.55, 0.45, 0.85, 0.28, 0x1f2a36, { collide: false, name: 'figure' });
      W.ball(9.2, 1.75, 0.55, 0.15, 0x1f2a36, { name: 'figure' });
      W.box(9.2, 1.88, 0.55, 0.34, 0.05, 0.34, 0x151515, { collide: false, name: 'figure' });
      W.interact({ id: 'coat_stand', x: 9.2, y: 1.0, z: 0.55, r: 0.6, label: T('Coat stand', 'Penyangkut baju'), text: T("Atuk's raincoat and hat. A coat stand in the dark can look like a person!", 'Baju hujan dan topi Atuk. Penyangkut baju dalam gelap boleh kelihatan seperti orang!') });

      /* ================= BEDROOM ================= */
      W.box(12.8, 0, -3.0, 2.2, 0.5, 1.8, 0x5a8f6a); W.box(12.8, 0.5, -3.6, 2.2, 0.3, 0.5, 0xf5f5f5, { collide: false });
      W.interact({ id: 'bed', x: 12.8, y: 0.6, z: -2.9, r: 1.0, label: T('Bed', 'Katil'), text: T('A neat bed with a football blanket. You look under the pillow: nothing.', 'Katil kemas dengan selimut bola. Anda lihat di bawah bantal: tiada apa-apa.') });
      W.box(15.5, 0, 0.4, 0.8, 0.75, 2.6, 0x8a6a45);        // desk
      W.box(15.55, 0.75, 1.2, 0.5, 0.01, 0.8, 0xfff8e0, { collide: false });
      W.interact({ id: 'wishlist', x: 15.2, y: 0.8, z: 1.2, r: 0.6, label: T('Paper on the desk', 'Kertas di atas meja'), item: 'wishlist' });
      // robot bank
      W.box(15.5, 0.75, -0.3, 0.4, 0.5, 0.3, 0x9aa5b1); W.box(15.5, 1.25, -0.3, 0.3, 0.25, 0.25, 0xc3ccd6, { collide: false }); W.box(15.28, 1.3, -0.3, 0.05, 0.05, 0.05, 0xff4040, { collide: false });
      W.interact({ id: 'robot', x: 15.3, y: 1.1, z: -0.3, r: 0.55, label: T('Toy robot', 'Robot mainan'), item: 'robot' });
      // wardrobe
      W.box(14.8, 0, 3.4, 2.0, 2.0, 0.7, 0x7a5a3a);
      W.interact({ id: 'wardrobe', x: 14.8, y: 1.0, z: 3.0, r: 0.9, label: T('Wardrobe', 'Almari'), text: T('Shirts, shorts and a school bag. All neatly folded. Nothing unusual.', 'Baju, seluar pendek dan beg sekolah. Semuanya terlipat kemas. Tiada yang pelik.') });
      // laundry basket
      W.cyl(11.2, 0, 3.2, 0.34, 0.6, 0xe0cda0);
      W.interact({ id: 'socks', x: 11.2, y: 0.55, z: 3.2, r: 0.55, label: T('Laundry basket', 'Bakul pakaian'), item: 'socks' });
      W.box(11.0, 0.9, -3.9, 0.02, 0.9, 1.3, 0xffd166, { collide: false });  // poster
      W.box(12.8, 0.001, 1.2, 2.4, 0.01, 1.8, 0xdca8a8, { collide: false }); // rug

      /* ================= GARDEN ================= */
      // party table + balloons
      W.box(-3.2, 0, 8.0, 2.0, 0.8, 0.9, 0xffffff);
      [[-3.8, 0xe74c3c], [-3.2, 0x3498db], [-2.6, 0xf1c40f]].forEach(([x, c]) => W.cyl(x, 0.8, 8.0, 0.12, 0.2, c, { collide: false }));
      [[-3.5, 1.9, 7.6, 0xe74c3c], [-2.9, 2.1, 8.4, 0x3498db], [-4.2, 2.0, 8.2, 0xf1c40f]].forEach(([x, y, z, c]) => W.ball(x, y, z, 0.25, c));
      W.ball(2.2, 0.15, 10.3, 0.15, 0xffffff);
      W.interact({ id: 'football', x: 2.2, y: 0.2, z: 10.3, r: 0.5, label: T('Football', 'Bola sepak'), text: T('A muddy football. The kids have been playing hard.', 'Bola sepak berlumpur. Budak-budak bermain bersungguh-sungguh.') });
      // gazebo (Atuk's seat)
      [[5.5, 6], [8.5, 6], [5.5, 9], [8.5, 9]].forEach(([x, z]) => W.box(x, 0, z, 0.15, 2.4, 0.15, 0xb08a5a));
      W.box(7, 2.4, 7.5, 3.6, 0.15, 3.6, 0x8c5a3a, { collide: false });
      W.box(7, 0.4, 7.5, 1.0, 0.45, 0.5, 0xd8b26e);
      W.interact({ id: 'gazebo', x: 7, y: 0.8, z: 7.5, r: 1.2, label: T('Gazebo', 'Gazebo'), text: T("Atuk's chair and a half-finished cup of tea. From here you can see the whole garden — and the living-room door.", 'Kerusi Atuk dan secawan teh separuh habis. Dari sini anda boleh melihat seluruh taman — dan pintu ruang tamu.') });
      W.box(-8, 0, 10, 0.1, 1.9, 0.1, 0x777777); W.box(-7, 0, 10, 0.1, 1.9, 0.1, 0x777777); W.box(-7.5, 1.9, 10, 1.2, 0.08, 0.1, 0x777777, { collide: false }); W.box(-7.5, 0.5, 10, 0.5, 0.06, 0.25, 0x8a6a45, { collide: false });
      // shed
      W.wallZ(14, 8, 11, [[9, 10]], 2.4, 0xa07850);
      W.wallZ(17, 8, 11, [], 2.4, 0xa07850);
      W.wallX(8, 14, 17, [], 2.4, 0xa07850);
      W.wallX(11, 14, 17, [], 2.4, 0xa07850);
      W.box(9.5, 2.4, 15.5, 3.4, 0.12, 3.4, 0x6b4630, { collide: false });
      W.floor(8, 14, 11, 17, 0x8a7a66, 0.005);
      W.light('SH', 9.5, 2.2, 15.5, 0xffe9b0, 0.45, 6);
      W.box(9.5, 0, 16.5, 2.4, 0.9, 0.7, 0x7a5a3a);          // workbench
      W.box(9.0, 0.9, 16.5, 0.4, 0.04, 0.3, 0xfff8e0, { collide: false });
      W.interact({ id: 'shed_note', x: 9.0, y: 1.0, z: 16.5, r: 0.5, label: T('Torn note', 'Nota koyak'), item: 'shed_note' });
      W.box(10.0, 0.9, 16.5, 0.5, 0.45, 0.04, 0xd4af37, { collide: false });
      W.box(10.0, 0.9, 16.45, 0.5, 0.05, 0.4, 0xd4af37, { collide: false });
      W.interact({ id: 'gold_frame', x: 10.0, y: 1.1, z: 16.45, r: 0.5, label: T('Gold frame', 'Bingkai emas'), item: 'gold_frame' });
      W.cyl(10.7, 0, 16.0, 0.12, 0.35, 0xd4af37, { collide: false });
      W.interact({ id: 'paint_can', x: 10.7, y: 0.3, z: 16.0, r: 0.4, label: T('Gold spray paint', 'Cat semburan emas'), text: T('A can of gold spray paint. Brand new. Part of it has been used.', 'Tin cat semburan emas. Baru. Sebahagiannya telah digunakan.') });

      /* ================= PEOPLE ================= */
      W.npc({ id: 'atuk', x: -2.6, z: -1.4, rot: Math.PI * 0.55, skin: 0xd9b38c, shirt: 0x9aa7a0, pants: 0x55606a, hair: 0xdddddd, scale: 1.0, hat: 0x6b5b4b });
      W.npc({ id: 'mak', x: -1.4, z: -8.2, rot: Math.PI * 0.2, skin: 0xe0b894, shirt: 0xb07fd0, pants: 0x444466, hair: 0x2a1a10, scale: 0.98, scarf: 0xcfa3f0 });
      W.npc({ id: 'aiman', x: -2.6, z: 1.8, rot: Math.PI * 0.8, skin: 0xe0b894, shirt: 0xef6f6c, pants: 0x3b5998, hair: 0x1a1a1a, scale: 0.72 });
      W.npc({ id: 'danish', x: 1.8, z: 9.2, rot: Math.PI * 1.2, skin: 0xdcb08a, shirt: 0x4fa3e0, pants: 0x2c3e50, hair: 0x2b1b0e, scale: 0.72 });
      W.npc({ id: 'meiling', x: -2.0, z: 6.8, rot: Math.PI * 0.9, skin: 0xf0d2b0, shirt: 0x4cc38a, pants: 0x34495e, hair: 0x0d0d0d, scale: 0.78, camera: true });
      W.npc({ id: 'zack', x: 7.2, z: 12.6, rot: Math.PI * 0.2, skin: 0xd2a679, shirt: 0xe0a030, pants: 0x222222, hair: 0x241a12, scale: 0.95, gold: true });
    }
  };

  MF.registerCase(C);
})();
