/* ============================================================================
   CASE 010 — THE LAST BELL / LOCENG TERAKHIR      (Abandoned school at night)
   ----------------------------------------------------------------------------
   One complete, independent story. The engine reads it as data.

   HIDDEN SOLUTION
   - Ashgrove School is closed and will be demolished at sunrise. Tonight the
     ghost-hunter Ingrid Larsen came to film a LIVE "real ghost" show.
   - The "ghost" is a TRICK that Ingrid built herself:
       * a dripping-bucket rig that rings the bell at 11:00 (started 10:35),
       * a plug-in timer that switches the lights off at 11:00 (23:00 on the dial),
       * a fishing line that pulls a black cloth off the blackboard, showing
         red STAGE PAINT words "I AM STILL HERE" (the paint looks like blood).
   - 10:38  Ingrid walks to the boiler room. 10:41 she climbs down the iron hatch
     into the old coal cellar to hide until 11:30 (a secret she shared with her
     niece Priya, who texted back nothing and keeps the secret).
   - The hatch has a DROP-BOLT on the OUTSIDE. When the lid fell shut the bolt
     dropped. Ingrid is TRAPPED. She taps SOS on the heating pipe (3 short,
     3 long, 3 short). Everyone thinks it is a ghost knocking.
   RESPONSIBLE: Ingrid (the "ghost" is her own trick — and she is now trapped).
   MISLEADING: Ken (lives secretly in the boiler room, lies "I was at the gate"),
               Priya (lies "I don't know where she went" to keep the secret),
               Mateo (did a white-sheet prank at 10:15, lies "I never came in"),
               Tanaka (demolition boss, keys and hard hat, but arrived 11:05).
   TWIST: the ghost is the victim — and the scariest sound in the school was a
          cry for help that nobody could read until it was decoded.
   ============================================================================ */
(function () {
  const T = (en, bm) => ({ en, bm });
  const mm = (s) => { const [h, m] = s.split(':').map(Number); return (h < 12 ? h + 12 : h) * 60 + m; };
  const paper = (html, style) => `<div class="paper hand" style="${style || ''}">${html}</div>`;

  const C = {
    id: '010',
    num: 10,
    title: T('The Last Bell', 'Loceng Terakhir'),
    tagline: T('A ghost-hunter vanished in a school that will be torn down at sunrise. The bell rings by itself. Is it a ghost... or something worse?',
               'Seorang pemburu hantu hilang di sekolah yang akan dirobohkan waktu matahari terbit. Loceng berbunyi sendiri. Hantu... atau sesuatu yang lebih buruk?'),
    place: T('Ashgrove School (closed)', 'Sekolah Ashgrove (ditutup)'),
    premise: T(
      `It is 11:20 pm. Old Ashgrove School closed ten years ago and will be demolished at sunrise. Tonight, ghost-hunter Ingrid Larsen came to film a LIVE show. At 10:40 she vanished. At exactly 11:00 the old bell rang by itself, every light died, and words in RED appeared on the blackboard: "I AM STILL HERE." Everyone says the ghost of the old bell-ringer took her. At midnight the power and water will be cut for the demolition. Find out what really happened before 11:55. Be careful: in a dark school, the scariest thing is not always the real thing.`,
      `Sekarang pukul 11:20 malam. Sekolah Ashgrove yang lama ditutup sepuluh tahun lalu dan akan dirobohkan waktu matahari terbit. Malam ini, pemburu hantu Ingrid Larsen datang untuk membuat rancangan LANGSUNG. Pukul 10:40 dia hilang. Tepat pukul 11:00 loceng lama berbunyi sendiri, semua lampu padam, dan tulisan MERAH muncul di papan hitam: "I AM STILL HERE." Semua orang kata hantu tukang loceng lama telah membawanya. Pada tengah malam bekalan elektrik dan air akan diputuskan untuk perobohan. Cari apa yang sebenarnya berlaku sebelum 11:55. Berhati-hati: di sekolah yang gelap, benda yang paling menakutkan belum tentu benda yang sebenar.`),
    mysteryType: 'Missing person / staged haunting',
    subjects: ['math', 'english', 'science', 'geography', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('11:20'), deadline: mm('11:55'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },

    hidden: {
      culprit: 'ingrid',
      what: 'staged_trapped',
      window: [mm('10:35'), mm('10:45')],
      summary: T(
        `Ingrid built a fake haunting for her live show: a dripping bucket to ring the bell, a timer plug for the lights, a line to pull the cloth off the red words. At 10:41 she climbed into the old cellar to hide. The hatch bolted itself behind her. She is trapped and is knocking SOS on the pipe — which everyone thinks is the ghost.`,
        `Ingrid membina hantu palsu untuk rancangan langsungnya: baldi menitis untuk membunyikan loceng, palam pemasa untuk lampu, tali untuk menarik kain daripada tulisan merah. Pada 10:41 dia turun ke bilik bawah tanah lama untuk bersembunyi. Pintu besi itu terkunci sendiri di belakangnya. Dia terperangkap dan mengetuk SOS pada paip — yang semua orang sangka hantu.`),
      sequence: [
        [mm('9:30'), T('Ingrid and Priya arrive. Ken signs them in.', 'Ingrid dan Priya tiba. Ken mendaftar mereka masuk.')],
        [mm('10:15'), T('Mateo sneaks in and does a white-sheet prank.', 'Mateo menyelinap masuk dan menyakat dengan cadar putih.')],
        [mm('10:35'), T('Ingrid starts the bucket rig on a ladder. Priya holds the ladder.', 'Ingrid memulakan alat baldi di atas tangga. Priya memegang tangga.')],
        [mm('10:38'), T('Ingrid walks to the boiler room with her bag.', 'Ingrid berjalan ke bilik dandang dengan begnya.')],
        [mm('10:41'), T('Ingrid goes down the hatch. It shuts and bolts.', 'Ingrid turun melalui pintu besi. Ia tertutup dan terkunci.')],
        [mm('10:50'), T('Tapping starts in the pipes: SOS.', 'Ketukan bermula pada paip: SOS.')],
        [mm('11:00'), T('The rig rings the bell, the timer cuts the lights, the cloth falls.', 'Alat itu membunyikan loceng, pemasa memadamkan lampu, kain jatuh.')],
        [mm('11:05'), T('Mr. Tanaka arrives and signs the gate log.', 'Encik Tanaka tiba dan menandatangani buku pintu pagar.')]
      ],
      essentialClues: ['bell_rig', 'timer_plug', 'receipt', 'script_page', 'cctv_hall', 'cctv_boiler', 'hatch', 'pipe_knock', 'c_priya_nowhere'],
      misleading: [
        { item: 'c_ken_gate', why: T('Ken lied because he secretly lives in the boiler room and is afraid to lose his job.', 'Ken berbohong kerana dia tinggal secara rahsia di bilik dandang dan takut hilang kerja.') },
        { item: 'c_mateo_out', why: T('Mateo lied because he did a harmless prank and was scared of trouble.', 'Mateo berbohong kerana dia membuat gurauan tidak berbahaya dan takut dimarahi.') },
        { item: 'white_sheet', why: T('The "ghost" in the corridor at 10:15 was only Mateo in a sheet.', '"Hantu" di koridor pukul 10:15 hanyalah Mateo bercadar.') },
        { item: 'board_writing', why: T('The red words look like blood but are stage paint.', 'Tulisan merah nampak seperti darah tetapi sebenarnya cat pentas.') },
        { item: 'notice', why: T('Tanaka looks scary but he only arrived at 11:05.', 'Tanaka nampak menakutkan tetapi dia hanya tiba pukul 11:05.') }
      ]
    },

    people: [
      { id: 'ingrid', name: 'Ingrid Larsen', age: 34, role: T('Ghost-hunter and live-show host (MISSING)', 'Pemburu hantu dan hos rancangan langsung (HILANG)'), rel: T('Priya\'s aunt', 'Ibu saudara Priya'), color: '#d94f6a', suspect: true },
      { id: 'priya', name: 'Priya Menon', age: 14, role: T('Camera helper', 'Pembantu kamera'), rel: T("Ingrid's niece", 'Anak saudara Ingrid'), color: '#b07fd0', suspect: true },
      { id: 'ken', name: 'Ken Boateng', age: 62, role: T('Night caretaker', 'Penjaga malam'), rel: T('Works at the school', 'Bekerja di sekolah'), color: '#8a7f72', suspect: true },
      { id: 'mateo', name: 'Mateo Rivera', age: 15, role: T('Teenager from the neighbourhood', 'Remaja kawasan sekitar'), rel: T('Sneaked in tonight', 'Menyelinap masuk malam ini'), color: '#e0a030', suspect: true },
      { id: 'tanaka', name: 'Hiroshi Tanaka', age: 48, role: T('Demolition manager', 'Pengurus perobohan'), rel: T('Has the keys', 'Memegang kunci'), color: '#4fa3e0', suspect: true }
    ],

    items: [
      /* ---------------- things in the world ---------------- */
      { id: 'bell_rig', type: 'physical', icon: '🪣', title: T('Dripping-bucket rig', 'Alat baldi menitis'), where: T('High shelf above the bell rope (Hall)', 'Para tinggi di atas tali loceng (Dewan)'),
        desc: T(`A plastic bucket with a thin tube that drips, one drop at a time, into a tin can tied to the bell rope. The can is heavy and tipped over. A fishing line runs from it along the ceiling beam.`, `Baldi plastik dengan tiub nipis yang menitis, setitik demi setitik, ke dalam tin yang diikat pada tali loceng. Tin itu berat dan telah terbalik. Tali pancing bermula dari situ sepanjang alang siling.`),
        inspect: { kind: 'model', model: 'rig010', notes: [
          T('The knots are neat double knots. A ghost does not tie knots — a person built this.', 'Simpulnya kemas, berganda. Hantu tidak mengikat simpul — manusia yang membinanya.'),
          T('The bucket drips into the can. When the can is heavy enough it tips and pulls the rope.', 'Baldi menitis ke dalam tin. Apabila tin cukup berat, ia terbalik dan menarik tali.') ] } },
      { id: 'cloth', type: 'physical', icon: '🧣', title: T('Black cloth and fishing line', 'Kain hitam dan tali pancing'), where: T('Floor under the blackboard (Classroom 3B)', 'Lantai di bawah papan hitam (Bilik 3B)'),
        desc: T(`A black cloth lies on the floor under the blackboard. A thin fishing line is tied to its top corner and runs up to a nail and away through the door toward the hall.`, `Kain hitam terletak di lantai bawah papan hitam. Tali pancing nipis diikat pada penjuru atasnya dan menuju ke paku lalu keluar melalui pintu ke arah dewan.`),
        inspect: { kind: 'doc', html: T(paper(`🧣 <b>Black cloth</b><br>It hung over the blackboard. When the line was pulled, it fell.<br><br>🎣 <b>Fishing line</b> → nail → corridor → <b>Hall</b>`), paper(`🧣 <b>Kain hitam</b><br>Ia tergantung di atas papan hitam. Apabila tali ditarik, ia jatuh.<br><br>🎣 <b>Tali pancing</b> → paku → koridor → <b>Dewan</b>`)) } },
      { id: 'timer_plug', type: 'device', icon: '🔌', title: T('Socket timer', 'Pemasa soket'), where: T('Fuse cupboard (Hall)', 'Almari fius (Dewan)'),
        desc: T(`A cheap plug-in timer between the wall and the hall lights. Its 24-hour dial has a little pin pointing at one number.`, `Pemasa palam murah antara dinding dan lampu dewan. Dailnya 24 jam dan ada pin kecil menunjuk satu nombor.`),
        puzzle: 'pz_timer', inspect: { kind: 'puzzle-art', art: 'dial010' } },
      { id: 'board_writing', type: 'document', icon: '🩸', title: T('Red words on the blackboard', 'Tulisan merah pada papan hitam'), where: T('Classroom 3B', 'Bilik 3B'),
        desc: T(`Big dripping red letters: I AM STILL HERE. They look like blood... but look closely.`, `Huruf merah besar yang meleleh: I AM STILL HERE. Ia nampak seperti darah... tetapi lihat betul-betul.`),
        puzzle: 'pz_paint', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<span style="color:#b01212;font-size:1.7em;font-weight:bold;text-shadow:1px 2px 0 #500">I AM STILL HERE</span><br><small>🔎 Shiny, with brush lines. Smells like paint. Dry at the edges.</small>`, 'background:#1c2a22;color:#ddd'),
                  paper(`<span style="color:#b01212;font-size:1.7em;font-weight:bold;text-shadow:1px 2px 0 #500">I AM STILL HERE</span><br><small>🔎 Berkilat, ada garis berus. Berbau cat. Kering di tepi.</small>`, 'background:#1c2a22;color:#ddd')),
          fixedHtml: T(paper(`<span style="color:#b01212;font-size:1.7em;font-weight:bold">I AM STILL HERE</span><br><small>✔ Painted with a brush. NOT blood.</small>`, 'background:#1c2a22;color:#ddd'),
                       paper(`<span style="color:#b01212;font-size:1.7em;font-weight:bold">I AM STILL HERE</span><br><small>✔ Dilukis dengan berus. BUKAN darah.</small>`, 'background:#1c2a22;color:#ddd')) } },
      { id: 'paint_tube', type: 'physical', icon: '🎨', title: T('Tube of "Stage Blood-Red" paint', 'Tiub cat "Merah Darah Pentas"'), where: T("Ingrid's gear bag (Hall)", 'Beg peralatan Ingrid (Dewan)'),
        desc: T(`An almost empty tube: STAGE PAINT — washable — BLOOD RED. The cap is sticky and the same dark red as the blackboard letters.`, `Tiub hampir kosong: CAT PENTAS — boleh dibasuh — MERAH DARAH. Penutupnya melekit dan merah gelap sama seperti huruf pada papan hitam.`),
        inspect: { kind: 'model', model: 'tube010', notes: [ T('It is made for plays and films. It is not real blood.', 'Ia dibuat untuk drama dan filem. Ia bukan darah sebenar.') ] } },
      { id: 'receipt', type: 'document', icon: '🧾', title: T('Hardware-store receipt', 'Resit kedai perkakas'), where: T("Ingrid's gear bag (Hall)", 'Beg peralatan Ingrid (Dewan)'),
        desc: T(`A receipt from today, 4:12 pm. Customer: I. LARSEN.`, `Resit hari ini, 4:12 petang. Pelanggan: I. LARSEN.`),
        inspect: { kind: 'doc', html: T(paper(`<b>HOMEFIX HARDWARE</b> — today 4:12 pm<br>1 × bucket<br>1 × thin tube, 3 m<br>1 × tin can<br>1 × fishing line, 20 m<br>1 × socket timer (24 h)<br>1 × red stage paint<br><b>Customer: I. LARSEN</b>`), paper(`<b>KEDAI PERKAKAS HOMEFIX</b> — hari ini 4:12 petang<br>1 × baldi<br>1 × tiub nipis, 3 m<br>1 × tin<br>1 × tali pancing, 20 m<br>1 × pemasa soket (24 j)<br>1 × cat pentas merah<br><b>Pelanggan: I. LARSEN</b>`)) } },
      { id: 'script_page', type: 'document', icon: '📄', title: T("Ingrid's torn plan page", 'Halaman rancangan Ingrid yang koyak'), where: T('Library table', 'Meja perpustakaan'),
        desc: T(`A torn page of notes in a neat hand. Some words are wrong or missing.`, `Halaman nota yang koyak dengan tulisan kemas. Ada perkataan salah atau hilang.`),
        puzzle: 'pz_script', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<b>SHOW PLAN — "THE GHOST OF ASHGROVE"</b><br>Ingrid ____ start the bucket at 10:35.<br>When the bell ____ at 11:00, the lights go out.<br>Ingrid must hide in the old cellar until 11:30.<br>Priya must ____ tell anyone.<br><small>(the paper is torn: some words are missing)</small>`, 'background:#efe8d4'),
                  paper(`<b>RANCANGAN — "HANTU ASHGROVE"</b><br>Ingrid ____ start the bucket at 10:35.<br>When the bell ____ at 11:00, the lights go out.<br>Ingrid must hide in the old cellar until 11:30.<br>Priya must ____ tell anyone.<br><small>(kertas koyak: ada perkataan hilang)</small>`, 'background:#efe8d4')),
          fixedHtml: T(paper(`<b>SHOW PLAN — "THE GHOST OF ASHGROVE"</b><br>Ingrid <u>will</u> start the bucket at 10:35.<br>When the bell <u>rings</u> at 11:00, the lights go out.<br>Ingrid must hide in the old cellar until 11:30.<br>Priya must <u>not</u> tell anyone. ✔`, 'background:#efe8d4'),
                       paper(`<b>RANCANGAN — "HANTU ASHGROVE"</b><br>Ingrid <u>will</u> start the bucket at 10:35.<br>When the bell <u>rings</u> at 11:00, the lights go out.<br>Ingrid must hide in the old cellar until 11:30.<br>Priya must <u>not</u> tell anyone. ✔`, 'background:#efe8d4')) } },
      { id: 'white_sheet', type: 'physical', icon: '👻', title: T('White bedsheet with eye-holes', 'Cadar putih berlubang mata'), where: T('Library bin', 'Tong sampah perpustakaan'),
        desc: T(`A white sheet with two holes cut for eyes, crumpled in the bin. A sticky note: "Mateo was here 😂".`, `Cadar putih dengan dua lubang untuk mata, renyuk dalam tong sampah. Nota lekat: "Mateo was here 😂".`),
        inspect: { kind: 'doc', html: T(paper(`👻 <b>White sheet</b><br>Two eye-holes. A little orange paint on one corner — the same colour as sneakers.<br><br><i>"Mateo was here 😂"</i>`), paper(`👻 <b>Cadar putih</b><br>Dua lubang mata. Sedikit cat oren pada satu penjuru — sama warna dengan kasut sukan.<br><br><i>"Mateo was here 😂"</i>`)) } },
      { id: 'ken_bed', type: 'physical', icon: '🛏️', title: T("Ken's secret bed", 'Katil rahsia Ken'), where: T('Boiler room corner', 'Sudut bilik dandang'),
        desc: T(`A blanket, a pillow, a flask of tea and a framed photo of two children. Someone SLEEPS here every night.`, `Selimut, bantal, termos teh dan gambar berbingkai dua kanak-kanak. Seseorang TIDUR di sini setiap malam.`),
        inspect: { kind: 'doc', html: T(paper(`🛏️ A made-up bed beside the warm boiler.<br>🫖 Flask of tea, still warm.<br>🖼️ Photo: "Ken with Ama and Kofi"<br><small>He has made this his home.</small>`), paper(`🛏️ Katil kemas di sebelah dandang yang hangat.<br>🫖 Termos teh, masih panas.<br>🖼️ Gambar: "Ken bersama Ama dan Kofi"<br><small>Dia menjadikan ini rumahnya.</small>`)) } },
      { id: 'warning_sign', type: 'document', icon: '⚠️', title: T('Fallen warning sign', 'Papan amaran yang jatuh'), where: T('Boiler-room floor, face down', 'Lantai bilik dandang, menghadap bawah'),
        desc: T(`A hand-painted sign lying face down in the dust, with a boot print on it.`, `Papan amaran lukisan tangan terbaring menghadap bawah dalam habuk, dengan kesan tapak kasut.`),
        inspect: { kind: 'doc', html: T(paper(`<b style="color:#b01212;font-size:1.4em">⚠ DANGER ⚠</b><br>NEVER close the cellar hatch!<br>The bolt drops by itself on the OUTSIDE.<br>Nobody can open it from below.<br><small>— K. Boateng, caretaker</small>`, 'background:#f2e7a6'), paper(`<b style="color:#b01212;font-size:1.4em">⚠ BAHAYA ⚠</b><br>JANGAN tutup pintu besi bilik bawah tanah!<br>Selaknya jatuh sendiri di LUAR.<br>Tiada siapa boleh membukanya dari bawah.<br><small>— K. Boateng, penjaga</small>`, 'background:#f2e7a6')) } },
      { id: 'hatch', type: 'physical', icon: '🚪', title: T('Iron cellar hatch', 'Pintu besi bilik bawah tanah'), where: T('Boiler-room floor', 'Lantai bilik dandang'),
        desc: T(`A heavy iron hatch in the floor. A thick drop-bolt on the OUTSIDE is down — locked. There are red handprints around the edge. Very faintly, from below: tap... tap...`, `Pintu besi berat di lantai. Selak jatuh yang tebal di LUAR sudah turun — terkunci. Ada cap tangan merah di sekeliling tepi. Sangat perlahan, dari bawah: tuk... tuk...`),
        inspect: { kind: 'doc', html: T(paper(`🚪 <b>Iron hatch</b><br>🔒 Bolt: DOWN (outside)<br>🖐️ Red handprints (paint?)<br>🔊 Faint tapping from below<br><small>Something — or someone — is under the floor.</small>`, 'background:#2a2a30;color:#eee'), paper(`🚪 <b>Pintu besi</b><br>🔒 Selak: TURUN (luar)<br>🖐️ Cap tangan merah (cat?)<br>🔊 Ketukan perlahan dari bawah<br><small>Sesuatu — atau seseorang — di bawah lantai.</small>`, 'background:#2a2a30;color:#eee')) } },
      { id: 'glove', type: 'physical', icon: '🧤', title: T('Red wool glove', 'Sarung tangan bulu merah'), where: T('Caught in the hatch edge', 'Tersangkut di tepi pintu besi'),
        desc: T(`A bright red wool glove with red paint on the fingers. Inside is a name tag: "Ingrid L."`, `Sarung tangan bulu merah terang dengan cat merah pada jari. Di dalamnya ada tag nama: "Ingrid L."`),
        inspect: { kind: 'model', model: 'glove010', notes: [ T('The paint on the fingers is the same stage paint as the blackboard.', 'Cat pada jari sama dengan cat pentas pada papan hitam.'), T('It was caught as the hatch shut.', 'Ia tersangkut apabila pintu besi tertutup.') ] } },
      { id: 'pipe_knock', type: 'physical', icon: '🔧', title: T('Knocking pipe', 'Paip yang mengetuk'), where: T('Boiler room, beside the hatch', 'Bilik dandang, di sebelah pintu besi'),
        desc: T(`An old heating pipe goes down into the floor beside the hatch. Ear to the metal: a pattern repeats again and again.`, `Paip pemanas lama masuk ke lantai di sebelah pintu besi. Telinga pada logam: satu corak berulang-ulang.`),
        puzzle: 'pz_sos', inspect: { kind: 'puzzle-art', art: 'morse010' } },
      { id: 'school_plan', type: 'document', icon: '🗺️', title: T('School plan', 'Pelan sekolah'), where: T('Hall wall', 'Dinding dewan'),
        desc: T(`The old evacuation plan with a compass rose.`, `Pelan keluar kecemasan lama dengan ros kompas.`),
        puzzle: 'pz_plan', inspect: { kind: 'puzzle-art', art: 'plan010' } },
      { id: 'notice', type: 'document', icon: '📢', title: T('Demolition notice', 'Notis perobohan'), where: T('Front door (Hall)', 'Pintu depan (Dewan)'),
        desc: T(`A big notice on the front door.`, `Notis besar pada pintu depan.`),
        inspect: { kind: 'doc', html: T(paper(`<b>📢 NOTICE — TANAKA DEMOLITION</b><br>This building will be demolished at 6:00 am.<br>POWER and WATER will be cut at MIDNIGHT tonight.<br>No entry. Danger of collapse.<br><small>H. Tanaka, site manager</small>`), paper(`<b>📢 NOTIS — PEROBOHAN TANAKA</b><br>Bangunan ini akan dirobohkan pukul 6:00 pagi.<br>Elektrik dan AIR akan diputuskan pada TENGAH MALAM ini.<br>Dilarang masuk. Bahaya runtuh.<br><small>H. Tanaka, pengurus tapak</small>`)) } },
      { id: 'gate_log', type: 'document', icon: '📒', title: T('Gate visitor log', 'Buku pelawat pintu pagar'), where: T('Guard desk (Hall)', 'Meja pengawal (Dewan)'),
        desc: T(`The caretaker's book where visitors must sign in.`, `Buku penjaga di mana pelawat mesti mendaftar.`),
        inspect: { kind: 'doc', html: T(paper(`<table class="tbl"><tr><th>Time</th><th>Name</th></tr><tr><td>9:30 pm</td><td>I. Larsen + P. Menon (2 people)</td></tr><tr><td>11:05 pm</td><td>H. Tanaka</td></tr></table><small>No other names.</small>`), paper(`<table class="tbl"><tr><th>Masa</th><th>Nama</th></tr><tr><td>9:30 mlm</td><td>I. Larsen + P. Menon (2 orang)</td></tr><tr><td>11:05 mlm</td><td>H. Tanaka</td></tr></table><small>Tiada nama lain.</small>`)) } },

      /* ---------------- CCTV pictures (the old cameras still work) ---------------- */
      { id: 'cctv_prank', type: 'photo', icon: '📺', photo: true, title: T('CCTV: Corridor 10:15', 'CCTV: Koridor 10:15'), art: 'cctv_prank', stampT: mm('10:15'), stampLabel: T('CCTV time', 'Masa CCTV'),
        desc: T(`A white shape moves down the corridor. The picture is grainy and green.`, `Bentuk putih bergerak di koridor. Gambar berbintik dan kehijauan.`),
        zoomNotice: T(`You zoom in: under the white sheet you can see jeans and ORANGE sneakers. It is a person in a bedsheet — not a ghost.`, `Anda zum: di bawah cadar putih ada seluar jeans dan kasut sukan ORENG. Ia seorang manusia bercadar — bukan hantu.`),
        timeline: T('A "ghost" in a sheet walks the corridor.', '"Hantu" bercadar berjalan di koridor.') },
      { id: 'cctv_hall', type: 'photo', icon: '📺', photo: true, title: T('CCTV: Hall 10:35', 'CCTV: Dewan 10:35'), art: 'cctv_hall', stampT: mm('10:35'), stampLabel: T('CCTV time', 'Masa CCTV'),
        desc: T(`A woman on a ladder next to the bell rope. A girl holds the ladder.`, `Seorang wanita di atas tangga di sebelah tali loceng. Seorang gadis memegang tangga.`),
        zoomNotice: T(`You zoom in: the woman is Ingrid. She ties a line to the bell rope and hangs a bucket on the beam. The girl holding the ladder is Priya. The wall clock says 10:35.`, `Anda zum: wanita itu Ingrid. Dia mengikat tali pada tali loceng dan menggantung baldi pada alang. Gadis yang memegang tangga ialah Priya. Jam dinding menunjukkan 10:35.`),
        timeline: T('Ingrid sets up the bucket on the ladder; Priya helps.', 'Ingrid memasang baldi di atas tangga; Priya membantu.') },
      { id: 'cctv_corr', type: 'photo', icon: '📺', photo: true, title: T('CCTV: Corridor 10:38', 'CCTV: Koridor 10:38'), art: 'cctv_corr', stampT: mm('10:38'), stampLabel: T('CCTV time', 'Masa CCTV'),
        desc: T(`A woman walks away down the corridor with a heavy bag.`, `Seorang wanita berjalan menjauh di koridor dengan beg berat.`),
        zoomNotice: T(`You zoom in: she wears bright RED wool gloves. It is Ingrid. She is walking EAST — toward the boiler room.`, `Anda zum: dia memakai sarung tangan bulu MERAH terang. Itu Ingrid. Dia berjalan ke TIMUR — menuju bilik dandang.`),
        timeline: T('Ingrid walks east toward the boiler room.', 'Ingrid berjalan ke timur menuju bilik dandang.') },
      { id: 'cctv_boiler', type: 'photo', icon: '📺', photo: true, title: T('CCTV: Boiler room 10:41', 'CCTV: Bilik dandang 10:41'), art: 'cctv_boiler', stampT: mm('10:41'), stampLabel: T('CCTV time', 'Masa CCTV'),
        desc: T(`A very dark room. Someone is kneeling on the floor. Then the picture goes still.`, `Bilik yang sangat gelap. Seseorang melutut di lantai. Kemudian gambar tidak bergerak.`),
        zoomNotice: T(`You zoom in: Ingrid is climbing DOWN through an open iron hatch in the floor. A sign lies face down beside it. This is the last time anyone sees her.`, `Anda zum: Ingrid sedang turun melalui pintu besi yang terbuka di lantai. Papan amaran terbaring menghadap bawah di sebelahnya. Inilah kali terakhir sesiapa melihatnya.`),
        timeline: T('Ingrid climbs down the hatch. Then: nothing.', 'Ingrid turun melalui pintu besi. Kemudian: tiada apa-apa.') },

      /* ---------------- inferences (earned by solving puzzles) ---------------- */
      { id: 'inf_rig', kind: 'inference', type: 'deduction', icon: '💡', title: T('The bell and lights were TIMED — started at 10:35', 'Loceng dan lampu telah DIMASAKAN — dimulakan pukul 10:35'),
        desc: T(`The timer shows 23:00 (11:00 pm). The bucket needs 300 drops × 5 seconds = 25 minutes. 11:00 − 25 min = 10:35. So it was started at 10:35 — BEFORE Ingrid vanished. Nobody needed to be there at 11:00. No ghost either.`, `Pemasa menunjukkan 23:00 (11:00 malam). Baldi perlukan 300 titik × 5 saat = 25 minit. 11:00 − 25 min = 10:35. Jadi ia dimulakan pukul 10:35 — SEBELUM Ingrid hilang. Tiada siapa perlu berada di situ pukul 11:00. Hantu pun tidak.`) },
      { id: 'inf_paint', kind: 'inference', type: 'deduction', icon: '💡', title: T('The red words are PAINT, written by a person', 'Tulisan merah ialah CAT, ditulis oleh manusia'),
        desc: T(`Observations: brush lines, paint smell, dry edges, same colour as the stage-paint tube. Best inference: a person painted it earlier. It is not blood.`, `Pemerhatian: garis berus, bau cat, tepi kering, warna sama dengan tiub cat pentas. Inferens terbaik: seseorang melukisnya lebih awal. Ia bukan darah.`) },
      { id: 'inf_script', kind: 'inference', type: 'deduction', icon: '💡', title: T('It was a PLANNED trick — and Ingrid planned to hide in the cellar', 'Ia helah YANG DIRANCANG — dan Ingrid merancang bersembunyi di bilik bawah tanah'),
        desc: T(`The restored plan: "Ingrid will start the bucket at 10:35. When the bell rings at 11:00, the lights go out. Ingrid must hide in the old cellar until 11:30. Priya must not tell anyone."`, `Rancangan yang dipulihkan: "Ingrid will start the bucket at 10:35. When the bell rings at 11:00, the lights go out. Ingrid must hide in the old cellar until 11:30. Priya must not tell anyone."`) },
      { id: 'inf_sos', kind: 'inference', type: 'deduction', icon: '💡', title: T('The knocking is SOS — a person asking for HELP', 'Ketukan itu SOS — seseorang meminta TOLONG'),
        desc: T(`Short-short-short, long-long-long, short-short-short = S-O-S, the international call for help. The knocking comes from UNDER the floor. It is not a ghost: it is someone trapped.`, `Pendek-pendek-pendek, panjang-panjang-panjang, pendek-pendek-pendek = S-O-S, panggilan antarabangsa untuk bantuan. Ketukan datang dari BAWAH lantai. Ia bukan hantu: ia seseorang yang terperangkap.`) },
      { id: 'inf_plan', kind: 'inference', type: 'deduction', icon: '💡', title: T('The cellar is under the BOILER ROOM, to the EAST', 'Bilik bawah tanah di bawah BILIK DANDANG, ke arah TIMUR'),
        desc: T(`Using the plan: the Hall is WEST, the boiler room is EAST at the end of the corridor, and the old coal cellar is directly BELOW the boiler room.`, `Menggunakan pelan: Dewan di BARAT, bilik dandang di TIMUR hujung koridor, dan bilik arang batu lama betul-betul di BAWAH bilik dandang.`) },

      /* ---------------- witness claims (collected during interviews) ---------------- */
      { id: 'c_ken_gate', kind: 'claim', person: 'ken', t: 0, type: 'statement', icon: '💬', title: T('Ken: "I stayed at the gate all night."', 'Ken: "Saya kekal di pintu pagar sepanjang malam."'), desc: T('Ken says he never left the gate.', 'Ken berkata dia tidak pernah meninggalkan pintu pagar.') },
      { id: 'c_ken_knock', kind: 'claim', person: 'ken', t: mm('10:50'), type: 'statement', icon: '💬', title: T('Ken: "Tapping in the pipes started at 10:50."', 'Ken: "Ketukan pada paip bermula pukul 10:50."'), desc: T('He heard tap-tap-tap, long-long-long, tap-tap-tap again and again from the boiler room.', 'Dia mendengar tuk-tuk-tuk, panjang-panjang-panjang, tuk-tuk-tuk berulang-ulang dari bilik dandang.') },
      { id: 'c_ken_bell', kind: 'claim', person: 'ken', t: mm('11:00'), type: 'statement', icon: '💬', title: T('Ken: "The bell rang at exactly 11:00."', 'Ken: "Loceng berbunyi tepat pukul 11:00."'), desc: T('The lights died at the same moment.', 'Lampu padam pada saat yang sama.') },
      { id: 'c_ken_lives', kind: 'claim', person: 'ken', t: 0, type: 'statement', icon: '💬', title: T('Ken: "I sleep in the boiler room. I put up a warning sign for the hatch."', 'Ken: "Saya tidur di bilik dandang. Saya pasang papan amaran untuk pintu besi."'), desc: T('Ken admits he lives at the school because his flat flooded.', 'Ken mengaku dia tinggal di sekolah kerana flatnya banjir.') },
      { id: 'c_priya_nowhere', kind: 'claim', person: 'priya', t: mm('10:40'), type: 'statement', icon: '💬', title: T('Priya: "I do not know where Ingrid went."', 'Priya: "Saya tidak tahu ke mana Ingrid pergi."'), desc: T('Priya says her aunt just disappeared.', 'Priya berkata ibu saudaranya tiba-tiba hilang.') },
      { id: 'c_priya_ladder', kind: 'claim', person: 'priya', t: mm('10:35'), type: 'statement', icon: '💬', title: T('Priya: "Ingrid was fixing the camera light on a ladder at 10:35."', 'Priya: "Ingrid membetulkan lampu kamera di atas tangga pukul 10:35."'), desc: T('Priya held the ladder.', 'Priya memegang tangga.') },
      { id: 'c_priya_text', kind: 'claim', person: 'priya', t: mm('10:40'), type: 'statement', icon: '💬', title: T('Priya: "At 10:40 Ingrid texted: Hiding. Do not tell. See you at 11:30."', 'Priya: "Pukul 10:40 Ingrid menghantar mesej: Hiding. Do not tell. See you at 11:30."'), desc: T('After seeing the plan, Priya shows the text message.', 'Selepas melihat rancangan, Priya menunjukkan mesej teks itu.') },
      { id: 'c_priya_plan', kind: 'claim', person: 'priya', t: 0, type: 'statement', icon: '💬', title: T('Priya: "It was all a TRICK for her live show. I only helped carry things."', 'Priya: "Semuanya HELAH untuk rancangan langsungnya. Saya hanya membantu mengangkat barang."'), desc: T('Priya did not know about the hatch.', 'Priya tidak tahu tentang pintu besi.') },
      { id: 'c_mateo_out', kind: 'claim', person: 'mateo', t: 0, type: 'statement', icon: '💬', title: T('Mateo: "I never came inside the school."', 'Mateo: "Saya tidak pernah masuk ke dalam sekolah."'), desc: T('Mateo says he stayed outside the fence.', 'Mateo berkata dia kekal di luar pagar.') },
      { id: 'c_mateo_sheet', kind: 'claim', person: 'mateo', t: mm('10:15'), type: 'statement', icon: '💬', title: T('Mateo: "I did ONE sheet prank at 10:15. That is all!"', 'Mateo: "Saya buat SATU gurauan cadar pukul 10:15. Itu sahaja!"'), desc: T('After seeing the evidence Mateo admits his prank.', 'Selepas melihat bukti, Mateo mengaku gurauannya.') },
      { id: 'c_mateo_blood', kind: 'claim', person: 'mateo', t: mm('11:00'), type: 'statement', icon: '💬', title: T('Mateo: "The red words are real BLOOD!"', 'Mateo: "Tulisan merah itu DARAH sebenar!"'), desc: T('Mateo saw the board at 11:00 and panicked.', 'Mateo melihat papan pukul 11:00 dan panik.') },
      { id: 'c_tanaka_late', kind: 'claim', person: 'tanaka', t: mm('11:05'), type: 'statement', icon: '💬', title: T('Tanaka: "I arrived at 11:05, after the bell."', 'Tanaka: "Saya tiba pukul 11:05, selepas loceng."'), desc: T('He signed the gate log when he came.', 'Dia menandatangani buku pintu pagar apabila datang.') },
      { id: 'c_tanaka_cellar', kind: 'claim', person: 'tanaka', t: 0, type: 'statement', icon: '💬', title: T('Tanaka: "There is an old coal cellar under the boiler room. Nobody has been down for ten years."', 'Tanaka: "Ada bilik arang batu lama di bawah bilik dandang. Sudah sepuluh tahun tiada siapa turun."'), desc: T('He knows the cellar from the building survey.', 'Dia tahu bilik itu daripada tinjauan bangunan.') }
    ],

    /* ------------------------------------------------------------------ CONTRADICTION / SUPPORT CHECKER */
    pairs: [
      { a: 'c_priya_nowhere', b: 'cctv_hall', type: 'contradiction', person: 'priya',
        text: T('Priya says she does not know where Ingrid went. But the 10:35 CCTV shows Priya holding the ladder while Ingrid builds something on the bell rope.', 'Priya berkata dia tidak tahu ke mana Ingrid pergi. Tetapi CCTV 10:35 menunjukkan Priya memegang tangga ketika Ingrid memasang sesuatu pada tali loceng.'),
        explain: T('Priya is hiding something. A small lie to protect her aunt — not a crime.', 'Priya menyembunyikan sesuatu. Pembohongan kecil untuk melindungi ibu saudaranya — bukan jenayah.') },
      { a: 'c_priya_ladder', b: 'cctv_hall', type: 'contradiction', person: 'priya',
        text: T('Priya called it "fixing a camera light". The CCTV shows a BUCKET and a LINE tied to the bell rope.', 'Priya menyebutnya "membetulkan lampu kamera". CCTV menunjukkan BALDI dan TALI diikat pada tali loceng.'),
        explain: T('She did not tell the whole truth: the "camera light" was the ghost trick.', 'Dia tidak berkata semua yang benar: "lampu kamera" itu ialah helah hantu.') },
      { a: 'c_priya_nowhere', b: 'c_priya_text', type: 'contradiction', person: 'priya', requires: ['priya_admitted'],
        text: T('Priya says she does not know where Ingrid is — but Ingrid texted her "Hiding. Do not tell. See you at 11:30."', 'Priya berkata dia tidak tahu di mana Ingrid — tetapi Ingrid menghantar mesej "Hiding. Do not tell. See you at 11:30."'),
        explain: T('Priya knew Ingrid was hiding on purpose. She did not know about the trap.', 'Priya tahu Ingrid bersembunyi dengan sengaja. Dia tidak tahu tentang perangkap itu.') },
      { a: 'c_ken_gate', b: 'ken_bed', type: 'contradiction', person: 'ken',
        text: T('Ken says he stayed at the gate all night. But there is a made-up bed in the boiler room, and the tea flask is still warm.', 'Ken berkata dia di pintu pagar sepanjang malam. Tetapi ada katil kemas di bilik dandang dan termos tehnya masih panas.'),
        explain: T('He lives there in secret. A sad secret, not a crime.', 'Dia tinggal di situ secara rahsia. Rahsia yang sedih, bukan jenayah.') },
      { a: 'c_mateo_out', b: 'cctv_prank', type: 'contradiction', person: 'mateo',
        text: T('Mateo says he never came in. The 10:15 CCTV shows a person in a bedsheet and orange sneakers — Mateo wears orange sneakers.', 'Mateo berkata dia tidak pernah masuk. CCTV 10:15 menunjukkan seorang bercadar berkasut sukan oren — Mateo memakai kasut sukan oren.'),
        explain: T('A harmless prank. He lied because he was scared of trouble.', 'Gurauan tidak berbahaya. Dia berbohong kerana takut dimarahi.') },
      { a: 'c_mateo_out', b: 'white_sheet', type: 'contradiction', person: 'mateo',
        text: T('The sheet in the library bin says "Mateo was here".', 'Cadar dalam tong sampah perpustakaan tertulis "Mateo was here".'), explain: T('Same prank, same boy.', 'Gurauan yang sama, budak yang sama.') },
      { a: 'c_mateo_blood', b: 'paint_tube', type: 'contradiction', person: 'mateo', requires: ['paint_solved'],
        text: T('Mateo says the red words are blood. The tube in the bag says STAGE PAINT, the same red.', 'Mateo berkata tulisan merah itu darah. Tiub dalam beg tertulis CAT PENTAS, merah yang sama.'), explain: T('He was frightened, so he believed the scariest idea.', 'Dia ketakutan, jadi dia percaya idea yang paling menakutkan.') },
      { a: 'c_mateo_blood', b: 'board_writing', type: 'contradiction', person: 'mateo', requires: ['paint_solved'],
        text: T('Brush lines, paint smell, dry edges: the words are paint, not blood.', 'Garis berus, bau cat, tepi kering: tulisan itu cat, bukan darah.'), explain: T('Fear makes things look worse than they are.', 'Ketakutan membuat sesuatu nampak lebih teruk daripada sebenarnya.') },
      { a: 'c_ken_lives', b: 'warning_sign', type: 'support', person: 'ken',
        text: T('The sign on the floor is signed K. Boateng: Ken really warned people about the hatch.', 'Papan di lantai ditandatangani K. Boateng: Ken memang memberi amaran tentang pintu besi.') },
      { a: 'c_ken_bell', b: 'timer_plug', type: 'support', person: 'ken', requires: ['rig_solved'],
        text: T('The timer was set to 23:00 — the bell and lights at 11:00. Ken is right.', 'Pemasa ditetapkan 23:00 — loceng dan lampu pukul 11:00. Ken betul.') },
      { a: 'c_ken_knock', b: 'pipe_knock', type: 'support', person: 'ken', requires: ['sos_decoded'],
        text: T('Ken heard knocking in the pipes — and it really is a repeating SOS pattern.', 'Ken mendengar ketukan pada paip — dan ia memang corak SOS yang berulang.') },
      { a: 'c_ken_knock', b: 'hatch', type: 'support', person: 'ken',
        text: T('The tapping is loudest at the hatch: it comes from below the floor.', 'Ketukan paling kuat di pintu besi: ia datang dari bawah lantai.') },
      { a: 'c_priya_plan', b: 'script_page', type: 'support', person: 'priya', requires: ['script_restored'],
        text: T('The restored plan says it was a planned show trick. Priya told the truth at last.', 'Rancangan yang dipulihkan berkata ia helah rancangan yang dirancang. Priya akhirnya berkata benar.') },
      { a: 'c_priya_text', b: 'cctv_corr', type: 'support', person: 'priya',
        text: T('CCTV 10:38 shows Ingrid walking away with her bag. The text at 10:40 fits.', 'CCTV 10:38 menunjukkan Ingrid berjalan pergi dengan begnya. Mesej pukul 10:40 sesuai.') },
      { a: 'c_mateo_sheet', b: 'cctv_prank', type: 'support', person: 'mateo',
        text: T('The CCTV at 10:15 matches Mateo\'s true story.', 'CCTV pukul 10:15 sepadan dengan cerita benar Mateo.') },
      { a: 'c_tanaka_late', b: 'gate_log', type: 'support', person: 'tanaka',
        text: T('The gate log says H. Tanaka signed in at 11:05 — after Ingrid vanished.', 'Buku pintu pagar mencatat H. Tanaka mendaftar pukul 11:05 — selepas Ingrid hilang.') },
      { a: 'c_tanaka_cellar', b: 'school_plan', type: 'support', person: 'tanaka', requires: ['plan_read'],
        text: T('The plan shows the old coal cellar below the boiler room. Tanaka is right.', 'Pelan menunjukkan bilik arang batu lama di bawah bilik dandang. Tanaka betul.') }
    ],

    /* ------------------------------------------------------------------ PUZZLES */
    puzzles: {
      pz_timer: { subject: 'math', title: T('Read the timer, find the start', 'Baca pemasa, cari masa mula'), grants: { flags: ['rig_solved'], items: ['inf_rig'] }, tokens: 0,
        intro: T('Read the 24-hour dial. Then use the drip speed to find when the rig was started.', 'Baca dail 24 jam. Kemudian guna kelajuan titisan untuk mencari bila alat itu dimulakan.'),
        art: 'dial010',
        steps: [
          { type: 'choice', q: T('The pin points at 23:00 on the 24-hour dial. What time is that on a normal clock?', 'Pin menunjuk 23:00 pada dail 24 jam. Pukul berapa pada jam biasa?'),
            options: ['9:00 pm', '10:00 pm', '11:00 pm', '11:00 am'], answer: '11:00 pm',
            hints: [T('After 12:00 the numbers keep counting up: 13:00 is 1 pm.', 'Selepas 12:00 nombor terus bertambah: 13:00 ialah 1 petang.'), T('23 − 12 = ?', '23 − 12 = ?')] },
          { type: 'number', q: T('The bucket drips one drop every 5 seconds. The can tips after 300 drops. How many MINUTES is that?', 'Baldi menitis satu titik setiap 5 saat. Tin terbalik selepas 300 titik. Berapa MINIT?'),
            answer: 25, options: [15, 20, 25, 30], unit: T('minutes', 'minit'),
            hints: [T('First find the seconds: 300 × 5.', 'Cari saat dahulu: 300 × 5.'), T('300 × 5 = 1500 seconds. There are 60 seconds in a minute: 1500 ÷ 60 = ?', '300 × 5 = 1500 saat. Satu minit ada 60 saat: 1500 ÷ 60 = ?')] },
          { type: 'choice', q: T('The bell rang at 11:00 pm and the rig needs 25 minutes. When must it have been STARTED?', 'Loceng berbunyi pukul 11:00 malam dan alat itu perlukan 25 minit. Bila ia mesti DIMULAKAN?'),
            options: ['10:25 pm', '10:35 pm', '10:45 pm', '11:25 pm'], answer: '10:35 pm',
            hints: [T('Go BACK in time from 11:00.', 'Undur masa dari 11:00.'), T('11:00 − 20 minutes = 10:40. Then 5 more minutes back.', '11:00 − 20 minit = 10:40. Kemudian undur 5 minit lagi.')] }
        ],
        after: T('The rig was started at 10:35 — before Ingrid vanished. Nobody had to be near the bell at 11:00. And no ghost, either!', 'Alat itu dimulakan pukul 10:35 — sebelum Ingrid hilang. Tiada siapa perlu berdekatan loceng pukul 11:00. Hantu pun tidak!') },

      pz_paint: { subject: 'science', title: T('Blood or paint?', 'Darah atau cat?'), grants: { flags: ['paint_solved'], items: ['inf_paint'] }, tokens: 0,
        intro: T('Separate what you SEE (observation) from what you THINK (inference).', 'Asingkan apa yang anda LIHAT (pemerhatian) daripada apa yang anda FIKIR (inferens).'),
        steps: [
          { type: 'classify', q: T('Sort each sentence:', 'Susun setiap ayat:'),
            statements: [
              { text: T('The letters have thin lines, like brush marks.', 'Huruf mempunyai garis nipis, seperti kesan berus.'), answer: 'observation' },
              { text: T('The red stuff smells like paint.', 'Bahan merah itu berbau cat.'), answer: 'observation' },
              { text: T('A person painted these words earlier.', 'Seseorang melukis perkataan ini lebih awal.'), answer: 'inference' },
              { text: T('A ghost wrote this in blood.', 'Hantu menulis ini dengan darah.'), answer: 'inference' }
            ],
            hints: [T('Observation = you can see, smell or touch it. Inference = your idea about why.', 'Pemerhatian = anda boleh nampak, bau atau sentuh. Inferens = idea anda tentang sebabnya.')] },
          { type: 'choice', q: T('Which inference is BEST supported by the observations?', 'Inferens mana yang PALING disokong oleh pemerhatian?'),
            options: [T('It is blood from the missing woman.', 'Ia darah wanita yang hilang.'), T('A person painted the words with a brush earlier.', 'Seseorang melukis perkataan dengan berus lebih awal.'), T('A ghost wrote the words just now.', 'Hantu menulis perkataan itu sebentar tadi.')],
            answer: 1, hints: [T('Blood does not leave brush lines or smell like paint.', 'Darah tidak meninggalkan garis berus atau berbau cat.')] }
        ],
        after: T('Observations: brush lines, paint smell, dry edges. Best inference: a person painted it earlier. It is not blood!', 'Pemerhatian: garis berus, bau cat, tepi kering. Inferens terbaik: seseorang melukisnya lebih awal. Ia bukan darah!') },

      pz_script: { subject: 'english', title: T('Restore the torn plan', 'Pulihkan rancangan yang koyak'), grants: { flags: ['script_restored'], items: ['inf_script'] }, tokens: 0,
        intro: T('Choose the correct word for each gap. Watch the verbs!', 'Pilih perkataan yang betul untuk setiap ruang kosong. Perhatikan kata kerja!'),
        steps: [
          { type: 'cloze', q: T('Fix the plan:', 'Betulkan rancangan:'),
            parts: ['Ingrid ', { blank: ['will', 'did', 'was'], answer: 'will' }, ' start the bucket at 10:35. When the bell ', { blank: ['ring', 'rings', 'ringed'], answer: 'rings' }, ' at 11:00, the lights go out. Ingrid must hide in the old cellar until 11:30. Priya must ', { blank: ['no', 'not', 'none'], answer: 'not' }, ' tell anyone.'],
            hints: [T('The start time is in the FUTURE, so use "will".', 'Masa mula ialah MASA DEPAN, jadi guna "will".'), T('"The bell ___" — one bell needs a verb ending with -s.', '"The bell ___" — satu loceng perlukan kata kerja berakhir -s.'), T('"must ___ tell" — you need the word that means NO to an action.', '"must ___ tell" — anda perlukan perkataan yang bermaksud TIDAK kepada satu perbuatan.')] }
        ],
        after: T('The plan says: "Ingrid will start the bucket at 10:35. When the bell rings at 11:00, the lights go out. Ingrid must hide in the old cellar until 11:30. Priya must not tell anyone." It was a planned trick!', 'Rancangan berbunyi: "Ingrid will start the bucket at 10:35. When the bell rings at 11:00, the lights go out. Ingrid must hide in the old cellar until 11:30. Priya must not tell anyone." Ia helah yang dirancang!') },

      pz_sos: { subject: 'thinking', title: T('Decode the knocking', 'Pecahkan kod ketukan'), grants: { flags: ['sos_decoded'], items: ['inf_sos'] }, tokens: 1,
        intro: T('Use the chart. A short tap is a dot (·). A long tap is a dash (—).', 'Guna carta. Ketukan pendek ialah titik (·). Ketukan panjang ialah garis (—).'),
        art: 'morse010',
        steps: [
          { type: 'choice', q: T('The pattern is: · · ·   — — —   · · ·  . Using the chart, which word is it?', 'Coraknya ialah: · · ·   — — —   · · ·  . Guna carta, perkataan apa ini?'),
            options: ['SOS', 'OSO', 'SSS', 'HELLO'], answer: 'SOS',
            hints: [T('S is · · · and O is — — —. Read the three groups one by one.', 'S ialah · · · dan O ialah — — —. Baca tiga kumpulan satu demi satu.')] },
          { type: 'choice', q: T('SOS is a call for ___.', 'SOS ialah panggilan untuk ___.'),
            options: [T('fun', 'keseronokan'), T('help', 'bantuan'), T('food', 'makanan')], answer: 1,
            hints: [T('Ships and planes use SOS when they are in danger.', 'Kapal dan kapal terbang guna SOS apabila dalam bahaya.')] },
          { type: 'choice', q: T('Ken thinks the knocking is a ghost. Which is the BEST thinking?', 'Ken fikir ketukan itu hantu. Pemikiran mana yang TERBAIK?'),
            options: [T('A ghost that knows Morse code is scary.', 'Hantu yang tahu kod Morse itu menakutkan.'), T('A person under the floor is tapping SOS to ask for help.', 'Seseorang di bawah lantai mengetuk SOS untuk meminta tolong.'), T('Old pipes make a perfect SOS all by themselves.', 'Paip lama membuat SOS yang sempurna dengan sendirinya.')],
            answer: 1, hints: [T('A repeating SOS needs someone who knows the code.', 'SOS yang berulang memerlukan seseorang yang tahu kod itu.')] }
        ],
        after: T('S-O-S! The knocking is a person asking for help — from UNDER the floor. You earn 1 hint token!', 'S-O-S! Ketukan itu seseorang meminta tolong — dari BAWAH lantai. Anda dapat 1 token petunjuk!') },

      pz_plan: { subject: 'geography', title: T('Read the school plan', 'Baca pelan sekolah'), grants: { flags: ['plan_read'], items: ['inf_plan'] }, tokens: 0,
        intro: T('Use the compass (N, S, E, W) and the room names on the plan.', 'Guna kompas (U, S, T, B) dan nama bilik pada pelan.'),
        art: 'plan010',
        steps: [
          { type: 'choice', q: T('You stand in the Hall. In which direction is the Boiler room?', 'Anda berdiri di Dewan. Bilik dandang ke arah mana?'),
            options: [T('North', 'Utara'), T('South', 'Selatan'), T('East', 'Timur'), T('West', 'Barat')], answer: 2,
            hints: [T('Find E (East) on the compass. Follow the long corridor to the right.', 'Cari T (Timur) pada kompas. Ikut koridor panjang ke kanan.')] },
          { type: 'choice', q: T('Which room is NORTH of the corridor?', 'Bilik mana di UTARA koridor?'),
            options: [T('Library', 'Perpustakaan'), T('Classroom 3B', 'Bilik 3B'), T('Hall', 'Dewan'), T('Boiler room', 'Bilik dandang')], answer: 1,
            hints: [T('North is at the TOP of the plan.', 'Utara berada di ATAS pelan.')] },
          { type: 'choice', q: T('Mr. Tanaka\'s survey says: "the old coal cellar is directly below the room with the big boiler." Which room is above the cellar?', 'Tinjauan Encik Tanaka berkata: "bilik arang batu lama betul-betul di bawah bilik dengan dandang besar." Bilik mana di atas bilik bawah tanah itu?'),
            options: [T('Library', 'Perpustakaan'), T('Hall', 'Dewan'), T('Boiler room', 'Bilik dandang'), T('Classroom 3B', 'Bilik 3B')], answer: 2,
            hints: [T('Which room has the big boiler on the plan?', 'Bilik mana ada dandang besar pada pelan?')] }
        ],
        after: T('The cellar is under the BOILER ROOM, to the EAST of the Hall.', 'Bilik bawah tanah di bawah BILIK DANDANG, ke TIMUR Dewan.') }
    },

    /* ------------------------------------------------------------------ DEDUCTION QUESTIONS */
    questions: [
      { id: 'q_how', title: T('1. What REALLY happened to Ingrid?', '1. Apa yang SEBENARNYA berlaku kepada Ingrid?'),
        options: [
          { id: 'ghost', text: T('The ghost of the bell-ringer took her.', 'Hantu tukang loceng membawanya pergi.') },
          { id: 'kidnap', text: T('Someone kidnapped her.', 'Seseorang menculiknya.') },
          { id: 'ran', text: T('She got scared and ran away.', 'Dia takut dan melarikan diri.') },
          { id: 'staged_trapped', text: T('She faked a haunting, hid in the cellar, and got trapped.', 'Dia mereka hantu palsu, bersembunyi di bilik bawah tanah, dan terperangkap.'), correct: true }
        ],
        needs: [['hatch', 'glove'], ['script_page', 'inf_script'], ['pipe_knock', 'inf_sos']], needsFlags: ['script_restored', 'sos_decoded'],
        hints: [T('Where does the tapping come from? What does it spell?', 'Dari mana ketukan datang? Apa yang dieja?'), T('Restore the torn plan. What did Ingrid plan to do?', 'Pulihkan rancangan yang koyak. Apa yang Ingrid rancang?')] },
      { id: 'q_when', title: T('2. When did Ingrid vanish?', '2. Bila Ingrid hilang?'),
        options: [
          { id: 'before', text: T('Before 10:00', 'Sebelum 10:00') },
          { id: 'win', text: T('Between 10:35 and 10:45', 'Antara 10:35 dan 10:45'), correct: true },
          { id: 'bell', text: T('At 11:00, when the bell rang', 'Pukul 11:00, apabila loceng berbunyi') },
          { id: 'after', text: T('After 11:10', 'Selepas 11:10') }
        ],
        needs: [['cctv_hall', 'cctv_corr'], ['cctv_boiler', 'inf_rig']], needsFlags: ['rig_solved'],
        hints: [T('Look at the CCTV times: when was Ingrid last seen?', 'Lihat masa CCTV: bila Ingrid terakhir dilihat?'), T('The bell and lights were on a timer — so 11:00 does NOT show when she vanished.', 'Loceng dan lampu menggunakan pemasa — jadi 11:00 TIDAK menunjukkan bila dia hilang.')] },
      { id: 'q_rig', title: T('3. What made the bell ring and the lights go out at 11:00?', '3. Apa yang membunyikan loceng dan memadamkan lampu pukul 11:00?'),
        options: [
          { id: 'ghost', text: T('The ghost of the bell-ringer.', 'Hantu tukang loceng.') },
          { id: 'ken', text: T('Ken pulled the rope.', 'Ken menarik tali.') },
          { id: 'rig', text: T('A timed rig: a dripping bucket and a plug timer.', 'Alat berpemasa: baldi menitis dan pemasa palam.'), correct: true },
          { id: 'mateo', text: T("Mateo's prank.", 'Gurauan Mateo.') }
        ],
        needs: [['bell_rig', 'cloth'], ['timer_plug', 'inf_rig']], needsFlags: ['rig_solved'],
        hints: [T('Look high above the bell rope. Then check the plug in the fuse cupboard.', 'Lihat tinggi di atas tali loceng. Kemudian semak palam dalam almari fius.')] },
      { id: 'q_who', title: T('4. Who built the ghost tricks?', '4. Siapa yang membina helah hantu itu?'),
        options: [
          { id: 'ken', text: T('Ken', 'Ken') }, { id: 'priya', text: T('Priya', 'Priya') }, { id: 'mateo', text: T('Mateo', 'Mateo') },
          { id: 'tanaka', text: T('Mr. Tanaka', 'Encik Tanaka') }, { id: 'ingrid', text: T('Ingrid herself', 'Ingrid sendiri'), correct: true }
        ],
        needs: [['receipt', 'paint_tube'], ['script_page', 'inf_script'], ['cctv_hall']], needsFlags: ['script_restored', 'paint_solved'],
        hints: [T('Who bought the timer, the line, the bucket and the paint today?', 'Siapa membeli pemasa, tali, baldi dan cat hari ini?'), T('Who is on the 10:35 CCTV building the rig?', 'Siapa dalam CCTV 10:35 yang membina alat itu?')] },
      { id: 'q_lie', title: T('5. Whose lie hides the most important truth?', '5. Pembohongan siapa yang menyembunyikan kebenaran paling penting?'),
        options: [
          { id: 'priya', text: T('Priya: "I do not know where Ingrid went."', 'Priya: "Saya tidak tahu ke mana Ingrid pergi."'), correct: true },
          { id: 'ken', text: T('Ken: "I stayed at the gate all night."', 'Ken: "Saya kekal di pintu pagar sepanjang malam."') },
          { id: 'mateo', text: T('Mateo: "I never came inside."', 'Mateo: "Saya tidak pernah masuk."') },
          { id: 'tanaka', text: T('Tanaka: "I arrived at 11:05."', 'Tanaka: "Saya tiba pukul 11:05."') }
        ],
        needs: [['c_priya_nowhere'], ['cctv_hall', 'c_priya_text']], needsFlags: [],
        hints: [T('Ken and Mateo lied for small, sad reasons. Which lie hides WHERE Ingrid is?', 'Ken dan Mateo berbohong kerana sebab kecil dan sedih. Pembohongan mana yang menyembunyikan DI MANA Ingrid?'), T('Compare what Priya says with the CCTV at 10:35.', 'Bandingkan kata Priya dengan CCTV pukul 10:35.')] }
    ],

    timeUp: { title: T('Midnight!', 'Tengah malam!'), text: T('The demolition crew cuts the power and water. The building groans in the dark. Name the truth NOW!', 'Pekerja perobohan memutuskan elektrik dan air. Bangunan itu berderit dalam gelap. Nyatakan kebenaran SEKARANG!') },
    conclusion: {
      who: { correct: 'ingrid' },
      what: { questionId: 'q_how' },
      when: { questionId: 'q_when' },
      whereQ: T('WHERE is Ingrid now?', 'DI MANA Ingrid sekarang?'),
      where: [
        { id: 'cellar', text: T('In the old coal cellar under the boiler room', 'Di bilik arang batu lama di bawah bilik dandang'), correct: true },
        { id: 'tower', text: T('In the bell tower', 'Di menara loceng') }, { id: 'library', text: T('In the library', 'Di perpustakaan') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }
      ],
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_trick', label: T('The timed rig (bell + lights)', 'Alat berpemasa (loceng + lampu)'), items: ['bell_rig', 'timer_plug', 'inf_rig'] },
        { id: 'g_prep', label: T("Ingrid's shopping and paint", 'Pembelian dan cat Ingrid'), items: ['receipt', 'paint_tube', 'inf_paint'] },
        { id: 'g_plan', label: T('The planned show trick', 'Helah rancangan yang dirancang'), items: ['script_page', 'inf_script'] },
        { id: 'g_when', label: T('CCTV: when she vanished', 'CCTV: bila dia hilang'), items: ['cctv_hall', 'cctv_corr', 'cctv_boiler'] },
        { id: 'g_trap', label: T('The trapped person under the floor', 'Orang terperangkap di bawah lantai'), items: ['hatch', 'glove', 'warning_sign', 'pipe_knock', 'inf_sos'] },
        { id: 'g_lie', label: T("Priya's secret", 'Rahsia Priya'), items: ['c_priya_nowhere', 'c_priya_text'] }
      ],
      strongCoverage: 4,
      secondary: ['ken_bed', 'white_sheet', 'gate_log', 'notice', 'cloth', 'school_plan'],
      secondaryNeeded: 2,
      lieFlags: ['c_ken_gate', 'c_priya_nowhere', 'c_mateo_out']
    },

    endings: [
      { id: 'secret', stars: 4, title: T('The Ghost Who Saved Her', 'Hantu Yang Menyelamatkannya'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.has.warning_sign && r.flags.hatch_trap_known && r.flags.ken_admitted,
        text: T(
          `You solve the case — and you also found Ken's warning sign. Ken stops hiding. "That bolt has a trick," he says, and he lifts the hatch with a crowbar and a special twist. Ingrid climbs out, cold and crying. "I only wanted a famous show," she says. "Your SOS saved you," you answer. Ken is not fired; he is thanked for knowing the school's secrets. The "ghost" of Ashgrove was a trick, a lie, a cry for help — and an honest caretaker. Case closed!`,
          `Anda menyelesaikan kes ini — dan anda juga menjumpai papan amaran Ken. Ken tidak lagi bersembunyi. "Selak itu ada helah," katanya, dan dia mengangkat pintu besi dengan linggis dan satu putaran khas. Ingrid memanjat keluar, kesejukan dan menangis. "Saya cuma mahu rancangan yang terkenal," katanya. "SOS awak menyelamatkan awak," jawab anda. Ken tidak dipecat; dia diucap terima kasih kerana tahu rahsia sekolah. "Hantu" Ashgrove ialah helah, pembohongan, jeritan meminta tolong — dan penjaga yang jujur. Kes selesai!`) },
      { id: 'perfect', stars: 3, title: T('Case Closed!', 'Kes Selesai!'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec >= 2,
        text: T(
          `Excellent detective work! You proved the ghost was a trick built by Ingrid herself, and that she is trapped under the boiler room. The rescue team lifts the hatch. Ingrid is cold but safe. Ken, Priya, Mateo and Mr. Tanaka are cleared: their small lies had sad or silly reasons. Remember: a scary story is not proof. Evidence is.`,
          `Kerja detektif yang hebat! Anda membuktikan hantu itu helah yang dibina Ingrid sendiri, dan dia terperangkap di bawah bilik dandang. Pasukan penyelamat mengangkat pintu besi. Ingrid kesejukan tetapi selamat. Ken, Priya, Mateo dan Encik Tanaka dibersihkan namanya: pembohongan kecil mereka mempunyai sebab yang sedih atau lucu. Ingat: cerita menakutkan bukan bukti. Bukti ialah bukti.`) },
      { id: 'missed', stars: 2, title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec < 2,
        text: T(
          `Right answer, strong proof! But you missed side clues: the caretaker's bed, Mateo's sheet, the gate log or the demolition notice. Because of that, Ken and Mateo are still blamed for things they did not do. Next time, look in every room.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: katil penjaga, cadar Mateo, buku pintu pagar atau notis perobohan. Kerana itu, Ken dan Mateo masih dipersalahkan atas perkara yang tidak mereka buat. Lain kali, periksa setiap bilik.`) },
      { id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'),
        when: (r) => r.ok.who,
        text: T(`You named the right person — but your proof was not strong enough. Go back, collect more clues, decode the knocking, read the timer, then try again before midnight.`,
                `Anda menyebut orang yang betul — tetapi bukti anda tidak cukup kukuh. Kembali, kumpul lebih banyak petunjuk, pecahkan ketukan itu, baca pemasa, kemudian cuba lagi sebelum tengah malam.`) },
      { id: 'wrong', stars: 0, title: T('The wrong answer!', 'Jawapan yang salah!'),
        when: () => true,
        text: T(`Oh no — that was not right. The dark made you jump at shadows. Remember: the scariest idea is not always the true one. Check WHO bought the supplies, who built the rig on the CCTV, and where the tapping comes from.`,
                `Alamak — itu tidak betul. Kegelapan membuat anda terperanjat dengan bayang-bayang. Ingat: idea paling menakutkan belum tentu yang benar. Semak SIAPA membeli bahan, siapa membina alat dalam CCTV, dan dari mana ketukan datang.`) }
    ],
    wrongWho: {
      ken: T('Ken lied about the gate and the boiler room was his secret home. But he arrived with no tools, the receipt is not his, and he is the one who wrote the warning sign.', 'Ken berbohong tentang pintu pagar dan bilik dandang ialah rumah rahsianya. Tetapi dia tidak membawa alat, resit bukan miliknya, dan dialah yang menulis papan amaran.'),
      priya: T('Priya lied to keep her aunt\'s secret and helped carry things. But the receipt, the paint and the plan are Ingrid\'s, and Priya did not know about the trap.', 'Priya berbohong untuk menyimpan rahsia ibu saudaranya dan membantu mengangkat barang. Tetapi resit, cat dan rancangan milik Ingrid, dan Priya tidak tahu tentang perangkap itu.'),
      mateo: T('Mateo did a prank at 10:15 and lied about it. But a sheet cannot ring a bell, change a timer or paint the board.', 'Mateo membuat gurauan pukul 10:15 dan berbohong tentangnya. Tetapi cadar tidak boleh membunyikan loceng, menukar pemasa atau melukis papan.'),
      tanaka: T('Tanaka looks scary with his keys and hard hat, but the gate log shows he arrived at 11:05 — after Ingrid vanished and after the rig was started.', 'Tanaka nampak menakutkan dengan kunci dan topi keledarnya, tetapi buku pintu pagar menunjukkan dia tiba pukul 11:05 — selepas Ingrid hilang dan selepas alat dimulakan.')
    },

    /* ------------------------------------------------------------------ INTERVIEWS */
    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      ken: {
        greeting: T(`Please... do not go near the boiler room. This school is cursed. The old bell-ringer's ghost walks here at night.`, `Tolong... jangan dekat bilik dandang. Sekolah ini disumpah. Hantu tukang loceng lama berjalan di sini waktu malam.`),
        topics: [
          { id: 'where', label: T('Where were you tonight?', 'Di mana anda malam ini?'),
            lines: [T('At the gate. All night. I never moved from my chair.', 'Di pintu pagar. Sepanjang malam. Saya tidak berganjak dari kerusi.')], claims: ['c_ken_gate'] },
          { id: 'bell', label: T('What happened at 11:00?', 'Apa yang berlaku pukul 11:00?'),
            lines: [T('Ding-dong! The bell rang by itself and every light died. Then... the red words on the blackboard!', 'Ding-dong! Loceng berbunyi sendiri dan semua lampu padam. Kemudian... tulisan merah pada papan hitam!')], claims: ['c_ken_bell'] },
          { id: 'knock', label: T('Did you hear anything strange?', 'Adakah anda dengar sesuatu yang pelik?'),
            lines: [T('Tapping in the pipes! Tap-tap-tap... long, long, long... tap-tap-tap. It started at 10:50 and it never stops. It is the ghost!', 'Ketukan pada paip! Tuk-tuk-tuk... panjang, panjang, panjang... tuk-tuk-tuk. Ia bermula pukul 10:50 dan tidak berhenti. Itu hantu!')], claims: ['c_ken_knock'] },
          { id: 'legend', label: T('Tell me about the ghost.', 'Ceritakan tentang hantu itu.'),
            lines: [T('They say Mr. Bell, the first caretaker, still rings the bell when a child is in danger. Nobody knows if it is true.', 'Mereka kata Encik Bell, penjaga pertama, masih membunyikan loceng apabila kanak-kanak dalam bahaya. Tiada siapa tahu sama ada ia benar.')] },
          { id: 'live', label: T('Do you live here, Ken?', 'Adakah anda tinggal di sini, Ken?'), after: 'ken_admit',
            lines: [T('...Yes. My flat flooded in spring. The school gave me a warm corner by the boiler. Please keep my secret.', '...Ya. Flat saya banjir pada musim bunga. Sekolah memberi saya sudut hangat di sebelah dandang. Tolong rahsiakan.')] }
        ],
        present: {
          ken_bed: { flags: ['ken_admitted'], unlock: 'ken_admit', claims: ['c_ken_lives'],
            lines: [T('...You found my bed. Yes, I sleep here since my flat flooded. I lied about the gate. Please do not tell Mr. Tanaka — I would lose my job. I only wanted to keep everyone safe. I even painted a warning sign for the hatch.', '...Anda jumpa katil saya. Ya, saya tidur di sini sejak flat saya banjir. Saya berbohong tentang pintu pagar. Tolong jangan beritahu Encik Tanaka — saya akan hilang kerja. Saya cuma mahu semua selamat. Saya malah melukis papan amaran untuk pintu besi itu.')] },
          warning_sign: { flags: ['hatch_trap_known'],
            lines: [T('My sign! It fell down. Listen: the bolt on that hatch drops by itself on the OUTSIDE. If anyone goes down and the lid shuts, they can NEVER open it from below!', 'Papan saya! Ia jatuh. Dengar: selak pintu besi itu jatuh sendiri di LUAR. Jika sesiapa turun dan penutup tertutup, mereka TIDAK BOLEH membukanya dari bawah!')] },
          hatch: { lines: [T('That is the old cellar hatch! Nobody should be down there. And the tapping... it comes from BELOW the floor!', 'Itu pintu besi bilik bawah tanah lama! Tiada siapa patut berada di bawah. Dan ketukan itu... datang dari BAWAH lantai!')] },
          inf_sos: { lines: [T('SOS?! Then it is not a ghost... it is a PERSON! Quick — the hatch!', 'SOS?! Kalau begitu bukan hantu... ia seorang MANUSIA! Cepat — pintu besi itu!')] },
          cctv_boiler: { lines: [T('She went DOWN into the cellar?! And the lid shut behind her... oh no, oh no.', 'Dia turun ke dalam bilik bawah tanah?! Dan penutup tertutup di belakangnya... alamak, alamak.')] },
          bell_rig: { lines: [T('Who hung that bucket up there? Not me. I do not climb ladders at my age!', 'Siapa gantung baldi itu di situ? Bukan saya. Saya tidak panjat tangga pada umur ini!')] },
          glove: { lines: [T('A red glove. The teacher wore bright red gloves tonight.', 'Sarung tangan merah. Cikgu itu memakai sarung tangan merah terang malam ini.')] }
        }
      },
      priya: {
        greeting: T('Please find my aunt Ingrid! I am so scared...', 'Tolong cari ibu saudara saya Ingrid! Saya sangat takut...'),
        topics: [
          { id: 'where', label: T('Where did Ingrid go?', 'Ke mana Ingrid pergi?'),
            lines: [T('I do not know! She was here and then she was gone. Maybe the ghost took her...', 'Saya tidak tahu! Dia ada di sini dan kemudian dia hilang. Mungkin hantu membawanya...')], claims: ['c_priya_nowhere'] },
          { id: 'ladder', label: T('What were you doing at 10:35?', 'Apa yang anda buat pukul 10:35?'),
            lines: [T('I held the ladder. Ingrid was fixing the camera light.', 'Saya memegang tangga. Ingrid membetulkan lampu kamera.')], claims: ['c_priya_ladder'] },
          { id: 'show', label: T('Tell me about tonight.', 'Ceritakan tentang malam ini.'),
            lines: [T('We came to film the "Ghost of Ashgrove" at 11:00. Ingrid said it would make her famous.', 'Kami datang untuk merakam "Hantu Ashgrove" pukul 11:00. Ingrid kata ia akan membuatnya terkenal.')] }
        ],
        present: {
          cctv_hall: { lines: [T('...You saw us on the camera. OK. It was not a camera light. But I promised not to tell!', '...Anda nampak kami pada kamera. Baiklah. Ia bukan lampu kamera. Tetapi saya berjanji tidak akan memberitahu!')] },
          script_page: { flags: ['priya_admitted'], claims: ['c_priya_text', 'c_priya_plan'], requiresFlag: 'script_restored',
            lines: [T('It was all a TRICK for her live show. The bell, the lights, the red words. I only carried bags. At 10:40 she texted me: "Hiding. Do not tell. See you at 11:30." But she never came back!', 'Semuanya HELAH untuk rancangan langsungnya. Loceng, lampu, tulisan merah. Saya hanya mengangkat beg. Pukul 10:40 dia menghantar mesej: "Hiding. Do not tell. See you at 11:30." Tetapi dia tidak pernah kembali!')],
            lockedLines: [T('That is just a torn paper. I cannot even read it... (Restore the page first!)', 'Itu cuma kertas koyak. Saya pun tak boleh baca... (Pulihkan halaman itu dahulu!)')] },
          receipt: { lines: [T('She bought all that today before we came. I carried the shopping bags.', 'Dia membeli semua itu hari ini sebelum kami datang. Saya mengangkat beg barang.')] },
          hatch: { lines: [T('Is she down THERE?! I did not know about any hatch!', 'Dia di BAWAH sana?! Saya tidak tahu tentang pintu besi!')] },
          inf_sos: { lines: [T('SOS... under the floor? Oh no. She did not know the hatch locks! Please hurry!', 'SOS... di bawah lantai? Alamak. Dia tidak tahu pintu besi itu terkunci! Tolong cepat!')] }
        }
      },
      mateo: {
        greeting: T('Ghosts are not real, okay? ...Okay? (He keeps looking at the dark corridor.)', 'Hantu tidak wujud, okay? ...Okay? (Dia asyik memandang koridor yang gelap.)'),
        topics: [
          { id: 'where', label: T('Did you come inside the school?', 'Adakah anda masuk ke dalam sekolah?'),
            lines: [T('No way! I stayed outside the fence all night.', 'Mana ada! Saya kekal di luar pagar sepanjang malam.')], claims: ['c_mateo_out'] },
          { id: 'bell', label: T('What did you see at 11:00?', 'Apa yang anda nampak pukul 11:00?'),
            lines: [T('The bell, the lights dying, and then the blackboard said I AM STILL HERE in BLOOD! The ghost is real!', 'Loceng, lampu padam, dan kemudian papan hitam tertulis I AM STILL HERE dengan DARAH! Hantu itu sebenar!')], claims: ['c_mateo_blood'] },
          { id: 'why', label: T('Why are you here?', 'Kenapa anda di sini?'),
            lines: [T('I wanted to catch that ghost-hunter on camera. Everybody says she is fake...', 'Saya mahu menangkap pemburu hantu itu pada kamera. Semua orang kata dia palsu...')] }
        ],
        present: {
          white_sheet: { flags: ['mateo_admitted'], claims: ['c_mateo_sheet'],
            lines: [T('OK, OK! The sheet is mine. I did ONE prank in the corridor at 10:15 and then I ran. That is all I did, I swear!', 'Baiklah! Cadar itu milik saya. Saya buat SATU gurauan di koridor pukul 10:15 dan kemudian lari. Itu sahaja yang saya buat, saya bersumpah!')] },
          cctv_prank: { flags: ['mateo_admitted'], claims: ['c_mateo_sheet'],
            lines: [T('...Those are my orange sneakers. Fine. One prank at 10:15. I am sorry!', '...Itu kasut sukan oren saya. Baiklah. Satu gurauan pukul 10:15. Maaf!')] },
          paint_tube: { lines: [T('Paint?! Not blood? I almost fainted for a tube of PAINT? I feel so silly.', 'Cat?! Bukan darah? Saya hampir pengsan kerana sebatang cat? Saya rasa bodoh.')] },
          cctv_hall: { lines: [T('Whoa. She built something on the bell rope! I told you she was a fake!', 'Wah. Dia membina sesuatu pada tali loceng! Saya dah kata dia penipu!')] }
        }
      },
      tanaka: {
        greeting: T('Everyone OUT! This building is unsafe! Power and water go off at midnight!', 'Semua KELUAR! Bangunan ini tidak selamat! Elektrik dan air akan putus pada tengah malam!'),
        topics: [
          { id: 'why', label: T('Why are you here?', 'Kenapa anda di sini?'),
            lines: [T('I am the demolition manager. Security phoned me about the bell, so I came to make sure nobody is inside.', 'Saya pengurus perobohan. Pengawal menelefon saya tentang loceng, jadi saya datang memastikan tiada sesiapa di dalam.')] },
          { id: 'late', label: T('When did you arrive?', 'Bila anda tiba?'),
            lines: [T('At 11:05, after the bell. I signed the gate log. Check it.', 'Pukul 11:05, selepas loceng. Saya mendaftar dalam buku pintu pagar. Semaklah.')], claims: ['c_tanaka_late'] },
          { id: 'cellar', label: T('Is there a cellar in this school?', 'Adakah ada bilik bawah tanah di sekolah ini?'),
            lines: [T('Yes: an old coal cellar under the boiler room. Nobody has been down there for ten years. The hatch has a bolt on the outside — very dangerous.', 'Ya: bilik arang batu lama di bawah bilik dandang. Sudah sepuluh tahun tiada siapa turun. Pintu besinya ada selak di luar — sangat bahaya.')], claims: ['c_tanaka_cellar'] },
          { id: 'midnight', label: T('What happens at midnight?', 'Apa yang berlaku pada tengah malam?'),
            lines: [T('Power and water are cut. If someone is trapped inside, we must find them BEFORE midnight.', 'Elektrik dan air diputuskan. Jika ada yang terperangkap di dalam, kita mesti jumpa mereka SEBELUM tengah malam.')] }
        ],
        present: {
          gate_log: { lines: [T('Yes. 11:05, H. Tanaka. Not a minute before.', 'Ya. 11:05, H. Tanaka. Tidak seminit pun lebih awal.')] },
          notice: { lines: [T('That is my notice. Demolition at 6:00 am. Nobody should be here at all.', 'Itu notis saya. Perobohan pukul 6:00 pagi. Sepatutnya tiada sesiapa di sini.')] },
          school_plan: { lines: [T('Our survey plan. The coal cellar is under the room with the big boiler.', 'Pelan tinjauan kami. Bilik arang batu di bawah bilik dengan dandang besar.')] },
          hatch: { lines: [T('The old cellar hatch! If anyone is down there, hurry — I have a crowbar in my truck.', 'Pintu besi bilik bawah tanah lama! Jika ada sesiapa di bawah, cepat — saya ada linggis dalam lori.')] }
        }
      }
    },

    /* ------------------------------------------------------------------ SPOOKY MOMENTS (scare level 1 = Low, 2 = Medium) */
    horror: {
      zones: [
        { id: 'hall_bell', room: 'HL', once: true, minScare: 1, delay: 4, fx: ['sfx:bell', 'shake:0.5'], text: T('🔔 A faint bell rings... and the rope sways by itself.', '🔔 Loceng berbunyi perlahan... dan tali bergoyang sendiri.') },
        { id: 'hall_whisper', room: 'HL', once: true, minScare: 2, delay: 16, fx: ['sfx:whisper'], text: T('🗣️ A whisper behind you: "Still here..."', '🗣️ Bisikan di belakang anda: "Still here..."') },
        { id: 'cr_flicker', room: 'CR', once: true, minScare: 1, delay: 1.2, fx: ['flicker:CR:2.5', 'sfx:creak'] },
        { id: 'cr_steps', room: 'CR', once: true, minScare: 2, delay: 5, fx: ['sfx:steps_far', 'shake:0.3'], text: T('👣 Slow footsteps in the dark... but nobody is there.', '👣 Langkah perlahan dalam gelap... tetapi tiada siapa di situ.') },
        { id: 'cls_scratch', room: 'CL', once: true, minScare: 1, delay: 2, fx: ['sfx:scratch', 'flicker:CL:1.5'], text: T('✍️ Scratching on the blackboard... nobody is there.', '✍️ Bunyi menggaru pada papan hitam... tiada siapa di situ.') },
        { id: 'cls_red', room: 'CL', once: true, minScare: 2, delay: 6, fx: ['flash:red', 'sfx:sting', 'shake:0.7', 'music:tense:9'], text: T('😱 The red words seem to GLOW for a second!', '😱 Tulisan merah itu seperti BERSINAR sesaat!') },
        { id: 'lib_voice', room: 'LB', once: true, minScare: 1, delay: 5, fx: ['sfx:voice'], text: T('🎶 A far-away voice hums a sad lullaby...', '🎶 Suara jauh bersenandung lagu dodoi yang sedih...') },
        { id: 'lib_slam', room: 'LB', once: true, minScare: 2, delay: 2.5, fx: ['sfx:slam', 'shake:0.6'], text: T('📚 A book crashes off the shelf!', '📚 Sebuah buku jatuh dari rak!') },
        { id: 'boil_knock', room: 'BO', once: true, minScare: 1, delay: 1, fx: ['sfx:sos', 'flicker:BO:1.6'], text: T('🔊 Tap... tap... Something knocks under the floor!', '🔊 Tuk... tuk... Sesuatu mengetuk di bawah lantai!') },
        { id: 'boil_dark', room: 'BO', once: true, minScare: 2, delay: 9, fx: ['blackout:2.2', 'sfx:heartbeat', 'music:tense:10'], text: T('🌑 The lights die... then slowly come back.', '🌑 Lampu padam... kemudian perlahan-lahan menyala semula.') }
      ],
      figures: [
        { name: 'figure1', room: 'CR', minScare: 2, revealDistance: 3.4, flickerRoom: 'CR', reveal: T("It is only Ken's long coat hanging on the coat stand! (A false alarm.)", 'Ia hanya kot panjang Ken yang tergantung pada penyangkut! (Penggera palsu.)') },
        { name: 'figure2', room: 'LB', minScare: 2, revealDistance: 3.0, flickerRoom: 'LB', sfx: 'sting', vanish: true, vanishAfter: 1.1, reveal: T('A pale shape stands at the window... it is only your own reflection in the dark glass!', 'Bentuk pucat berdiri di tingkap... ia hanya bayangan anda sendiri pada kaca gelap!') }
      ]
    },

    /* ------------------------------------------------------------------ EXIT TICKET */
    exitTicket: [
      { subject: 'math', q: T('A bucket drips 1 drop every 4 seconds. The can tips after 150 drops. How many MINUTES is that?', 'Baldi menitis 1 titik setiap 4 saat. Tin terbalik selepas 150 titik. Berapa MINIT?'),
        options: ['5', '10', '15', '20'], answer: 1, why: T('150 × 4 = 600 seconds. 600 ÷ 60 = 10 minutes.', '150 × 4 = 600 saat. 600 ÷ 60 = 10 minit.') },
      { subject: 'thinking', q: T('The red words looked like blood, but they were paint. What does this teach us?', 'Tulisan merah nampak seperti darah, tetapi ia cat. Apakah pengajarannya?'),
        options: [T('Scary things are not proof. Check the evidence first.', 'Perkara menakutkan bukan bukti. Semak bukti dahulu.'), T('Red always means blood.', 'Merah sentiasa bermaksud darah.'), T('Ghosts are real if it is dark.', 'Hantu sebenar jika gelap.')],
        answer: 0, why: T('Fear can make us believe the scariest idea. Evidence tells the truth.', 'Ketakutan boleh membuat kita percaya idea paling menakutkan. Bukti memberitahu kebenaran.') },
      { subject: 'english', q: T('Which sentence is correct?', 'Ayat mana yang betul?'),
        options: [T('The bell rings at 11:00.', 'The bell rings at 11:00.'), T('The bell ring at 11:00.', 'The bell ring at 11:00.'), T('The bell ringing at 11:00.', 'The bell ringing at 11:00.')], answer: 0,
        why: T('One bell (singular) needs a verb with -s: "rings".', 'Satu loceng (tunggal) perlukan kata kerja dengan -s: "rings".') }
    ],

    /* ------------------------------------------------------------------ 3D WORLD (built from this data) */
    world(W) {
      const H = 3.0, WALL = 0x6b6d78, WALL2 = 0x5a5c66;
      W.sky(0x05060c); W.fog(5, 26); W.spawn(this.spawn.x, this.spawn.z, this.spawn.yaw);
      W.mood({ amb: 0.14, hemi: 0.12, ambLow: 0.55, hemiLow: 0.32 });

      /* ---- rooms (HL hall, CR corridor, CL classroom 3B, LB library, BO boiler room) ---- */
      W.room('HL', -9, -4, -1, 4, T('Hall', 'Dewan'), true, 0x3a3a42, 0x1a1a22);
      W.room('CR', -1, -1, 8, 1, T('Corridor', 'Koridor'), true, 0x34343c, 0x1a1a22, 2.8);
      W.room('CL', 1, -8, 7, -1, T('Classroom 3B', 'Bilik 3B'), true, 0x3c3a36, 0x1a1a22);
      W.room('LB', 1, 1, 7, 8, T('Library', 'Perpustakaan'), true, 0x3a3630, 0x1a1a22);
      W.room('BO', 8, -3, 15, 3, T('Boiler room', 'Bilik dandang'), true, 0x2c2c30, 0x16161c);

      /* ---- walls (gaps are doorways) ---- */
      W.wallZ(-4, -9, -1, [], H, WALL); W.wallZ(4, -9, -1, [], H, WALL); W.wallX(-9, -4, 4, [], H, WALL); W.wallX(-1, -4, 4, [[-1, 1]], H, WALL);
      W.wallZ(-1, -1, 8, [[3, 4.2]], 2.8, WALL2); W.wallZ(1, -1, 8, [[3, 4.2]], 2.8, WALL2);
      W.wallZ(-8, 1, 7, [], H, WALL); W.wallX(1, -8, -1, [], H, WALL); W.wallX(7, -8, -1, [], H, WALL);
      W.wallZ(8, 1, 7, [], H, WALL); W.wallX(1, 1, 8, [], H, WALL); W.wallX(7, 1, 8, [], H, WALL);
      W.wallX(8, -3, 3, [[-1, 1]], H, 0x4a4a52); W.wallZ(-3, 8, 15, [], H, 0x4a4a52); W.wallZ(3, 8, 15, [], H, 0x4a4a52); W.wallX(15, -3, 3, [], H, 0x4a4a52);

      /* ---- lights: cold and dim. Point lights are switched off in Low graphics mode. ---- */
      W.light('HL', -4.5, 2.8, 0, 0x7f93ff, 0.55, 14); W.light('CR', 3.5, 2.4, 0, 0xffb878, 0.3, 9);
      W.light('CL', 4, 2.6, -4, 0x6f86d0, 0.5, 10); W.light('LB', 4, 2.6, 4.5, 0x6f86d0, 0.45, 10); W.light('BO', 12, 2.6, 0, 0xff9a50, 0.65, 11);

      /* ================= HALL ================= */
      W.box(-8.88, 0, -2.0, 0.12, 2.2, 1.0, 0x4a3322, { collide: false });                       // front door
      W.box(-4.2, 0, -3.3, 3.4, 0.9, 0.8, 0x4a3828);                                               // guard desk
      [-5.4, -4.7, -4.0, -3.3].forEach((x) => { W.box(x, 0.9, -3.5, 0.5, 0.4, 0.12, 0x151515, { collide: false }); W.box(x, 0.95, -3.43, 0.4, 0.3, 0.02, 0x2f6f45, { collide: false }); });
      W.interact({ id: 'cctv_prank', x: -5.4, y: 1.15, z: -3.35, r: 0.28, label: T('CCTV screen 1', 'Skrin CCTV 1'), item: 'cctv_prank' });
      W.interact({ id: 'cctv_hall', x: -4.7, y: 1.15, z: -3.35, r: 0.28, label: T('CCTV screen 2', 'Skrin CCTV 2'), item: 'cctv_hall' });
      W.interact({ id: 'cctv_corr', x: -4.0, y: 1.15, z: -3.35, r: 0.28, label: T('CCTV screen 3', 'Skrin CCTV 3'), item: 'cctv_corr' });
      W.interact({ id: 'cctv_boiler', x: -3.3, y: 1.15, z: -3.35, r: 0.28, label: T('CCTV screen 4', 'Skrin CCTV 4'), item: 'cctv_boiler' });
      W.box(-2.9, 0.9, -3.2, 0.35, 0.05, 0.28, 0x7a2a2a, { collide: false });
      W.interact({ id: 'gate_log', x: -2.9, y: 1.0, z: -3.2, r: 0.3, label: T('Visitor book', 'Buku pelawat'), item: 'gate_log' });
      W.box(-7.5, 1.2, -3.9, 1.2, 0.9, 0.05, 0xe8e0c8, { collide: false });
      W.interact({ id: 'school_plan', x: -7.5, y: 1.65, z: -3.7, r: 0.7, label: T('School plan on the wall', 'Pelan sekolah di dinding'), item: 'school_plan' });
      W.box(-8.88, 1.3, 2.7, 0.05, 0.8, 0.6, 0xf2f0e0, { collide: false });
      W.interact({ id: 'notice', x: -8.6, y: 1.7, z: 2.7, r: 0.6, label: T('Notice on the door', 'Notis pada pintu'), item: 'notice' });
      W.box(-2.2, 0.9, 3.82, 0.9, 1.0, 0.16, 0x666a70, { collide: false });                       // fuse cupboard
      W.interact({ id: 'timer_plug', x: -2.2, y: 1.4, z: 3.62, r: 0.6, label: T('Fuse cupboard', 'Almari fius'), item: 'timer_plug' });
      W.box(-5.0, 2.9, 0, 0.2, 0.2, 5, 0x3a2a1a, { collide: false });                              // ceiling beam
      W.cyl(-5, 2.0, 0, 0.3, 0.4, 0x9b7b2c, { collide: false });                                   // the bell
      W.box(-5, 0.9, 0, 0.04, 1.1, 0.04, 0xc9b07a, { collide: false });                             // bell rope
      W.cyl(-5, 2.25, 1.6, 0.25, 0.35, 0x3a6ea5, { collide: false });                              // bucket
      W.cyl(-5, 1.55, 0.35, 0.12, 0.2, 0xb0b6bd, { collide: false });                              // tin
      W.interact({ id: 'bell_rig', x: -5, y: 2.0, z: 1.0, r: 1.1, label: T('Something above the bell rope', 'Sesuatu di atas tali loceng'), item: 'bell_rig' });
      W.box(-5.7, 0, 1.0, 0.6, 2.2, 0.08, 0x8a6a45, { collide: false });                          // ladder
      W.box(-6.6, 0, 2.2, 0.7, 0.4, 0.5, 0x20252c);                                                // gear bag
      W.interact({ id: 'paint_tube', x: -6.6, y: 0.55, z: 2.0, r: 0.32, label: T('Gear bag: tube', 'Beg peralatan: tiub'), item: 'paint_tube' });
      W.interact({ id: 'receipt', x: -6.3, y: 0.45, z: 2.4, r: 0.32, label: T('Gear bag: paper', 'Beg peralatan: kertas'), item: 'receipt' });
      W.cyl(-7.6, 0, 3.0, 0.04, 1.6, 0x888888, { collide: false }); W.cyl(-7.6, 1.6, 3.0, 0.25, 0.04, 0xf0f0ff, { collide: false });   // ring-light tripod
      W.box(-7.2, 0, -2.6, 0.9, 0.7, 0.7, 0xb8b8c0, { collide: false }); W.box(-6.4, 0, -2.5, 0.9, 0.7, 0.7, 0xb0b0b8, { collide: false });   // dust-sheet shapes
      W.interact({ id: 'ladder_note', x: -5.7, y: 1.2, z: 1.0, r: 0.5, label: T('Ladder', 'Tangga'), text: T('A wooden ladder leaning under the bell rope. There is dust on every step except the top two.', 'Tangga kayu bersandar di bawah tali loceng. Ada habuk pada setiap anak tangga kecuali dua yang teratas.') });

      /* ================= CORRIDOR ================= */
      W.box(0.5, 0, -0.85, 2.0, 1.8, 0.3, 0x4a5a6a);                                               // lockers
      W.writing(6.2, 1.6, -0.88, 0, T('HE IS LISTENING', 'DIA SEDANG MENDENGAR'), '#a01010', 1.7, 0.5);
      W.box(6.8, 0, 0.65, 0.06, 1.7, 0.06, 0x3a2a1a);
      W.box(6.8, 0.8, 0.65, 0.45, 0.85, 0.28, 0x1f2a36, { collide: false, name: 'figure1' }); W.ball(6.8, 1.75, 0.65, 0.15, 0x1f2a36, { name: 'figure1' });
      W.interact({ id: 'coat_stand', x: 6.8, y: 1.0, z: 0.65, r: 0.6, label: T('Coat stand', 'Penyangkut baju'), text: T("A long dark coat on a coat stand. In the dark it can look like a person!", 'Kot panjang gelap pada penyangkut. Dalam gelap ia boleh kelihatan seperti orang!') });

      /* ================= CLASSROOM 3B ================= */
      W.box(4, 1.0, -7.88, 4.6, 1.4, 0.06, 0x1f3d2b, { collide: false });                          // blackboard
      W.writing(4, 1.72, -7.82, 0, T('I AM STILL HERE', 'I AM STILL HERE'), '#c01515', 4.0, 1.0);
      W.interact({ id: 'board_writing', x: 4, y: 1.7, z: -7.6, r: 1.5, label: T('Red words on the blackboard', 'Tulisan merah pada papan hitam'), item: 'board_writing' });
      W.box(2.4, 0.01, -7.0, 1.4, 0.04, 0.7, 0x111111, { collide: false });                         // fallen cloth
      W.interact({ id: 'cloth', x: 2.4, y: 0.1, z: -7.0, r: 0.6, label: T('Black cloth on the floor', 'Kain hitam di lantai'), item: 'cloth' });
      [[2.6, -4.2], [4.0, -4.2], [5.4, -4.2], [2.6, -2.8], [4.0, -2.8], [5.4, -2.8]].forEach(([x, z]) => W.box(x, 0, z, 0.9, 0.7, 0.6, 0x6a5238));   // pupils' desks
      W.box(6.0, 0, -6.5, 1.4, 0.8, 0.7, 0x5a4530);
      W.interact({ id: 'teacher_desk', x: 6.0, y: 0.9, z: -6.5, r: 0.7, label: T("Teacher's desk", 'Meja cikgu'), text: T('Old chalk, a broken ruler and a calendar stuck on the day the school closed.', 'Kapur lama, pembaris patah dan kalendar yang terhenti pada hari sekolah ditutup.') });

      /* ================= LIBRARY ================= */
      W.box(3.5, 0, 5.5, 2.4, 0.8, 1.2, 0x6a5238);                                                 // reading table
      W.box(3.3, 0.8, 5.5, 0.4, 0.02, 0.3, 0xefe8d4, { collide: false });
      W.interact({ id: 'script_page', x: 3.3, y: 0.95, z: 5.5, r: 0.5, label: T('Torn paper on the table', 'Kertas koyak di atas meja'), item: 'script_page' });
      W.cyl(6.2, 0, 2.0, 0.25, 0.5, 0x4a4f55);
      W.interact({ id: 'white_sheet', x: 6.2, y: 0.5, z: 2.0, r: 0.45, label: T('Something white in the bin', 'Sesuatu yang putih dalam tong'), item: 'white_sheet' });
      [3.2, 4.4, 5.6, 6.8].forEach((z) => W.box(6.7, 0, z, 0.5, 1.9, 1.0, 0x4a3828));                // shelves
      W.writing(4.9, 1.7, 7.88, Math.PI, T("DON'T LOOK BEHIND YOU", 'JANGAN TOLEH KE BELAKANG'), '#a01010', 2.6, 0.6);
      W.box(2.2, 1.0, 7.92, 1.6, 1.3, 0.05, 0x0a0f1a, { collide: false });                          // dark window
      W.box(2.2, 0, 7.3, 0.45, 1.5, 0.25, 0xd8dce8, { collide: false, name: 'figure2' }); W.ball(2.2, 1.65, 7.3, 0.17, 0xe8ecf4, { name: 'figure2' });

      /* ================= BOILER ROOM ================= */
      W.cyl(13.2, 0, -1.2, 0.9, 2.2, 0x5a4a40);                                                   // boiler
      W.box(12, 2.2, -2.9, 6, 0.15, 0.15, 0x7a6a5a, { collide: false });                           // pipes
      W.box(11.6, 0, 1.6, 1.3, 0.08, 1.3, 0x2b2f36, { collide: false });                           // iron hatch
      W.box(11.6, 0.08, 0.98, 0.7, 0.1, 0.12, 0x8a8f96, { collide: false });                       // drop-bolt (outside)
      [[11.0, 1.4], [12.2, 1.9], [11.9, 0.85], [11.3, 2.25]].forEach(([x, z]) => W.decal(x, z, 0.2, 0.26, 0.5, 0x7a0e0e, { y: 0.02 }));   // red paint handprints
      W.interact({ id: 'hatch', x: 11.6, y: 0.15, z: 1.6, r: 0.8, label: T('Iron hatch in the floor', 'Pintu besi di lantai'), item: 'hatch' });
      W.box(12.3, 0.09, 2.25, 0.2, 0.05, 0.12, 0xd01818, { collide: false });
      W.interact({ id: 'glove', x: 12.3, y: 0.12, z: 2.25, r: 0.4, label: T('Something red by the hatch', 'Sesuatu yang merah dekat pintu besi'), item: 'glove' });
      W.box(10.5, 0.01, 0.7, 0.5, 0.02, 0.4, 0xd8d0a0, { collide: false });
      W.interact({ id: 'warning_sign', x: 10.5, y: 0.1, z: 0.7, r: 0.45, label: T('Sign on the floor', 'Papan di lantai'), item: 'warning_sign' });
      W.cyl(10.0, 0, 2.5, 0.12, 1.4, 0x7a6a5a, { collide: false });
      W.interact({ id: 'pipe_knock', x: 10.0, y: 1.0, z: 2.5, r: 0.55, label: T('Old heating pipe', 'Paip pemanas lama'), item: 'pipe_knock' });
      W.box(14.0, 0, 1.8, 1.6, 0.35, 0.9, 0x6b6f5a); W.box(14.0, 0.35, 1.8, 1.5, 0.06, 0.8, 0x7a3a3a, { collide: false });
      W.interact({ id: 'ken_bed', x: 14.0, y: 0.5, z: 1.8, r: 0.9, label: T('A made-up bed', 'Katil yang kemas'), item: 'ken_bed' });

      /* ================= PEOPLE ================= */
      W.npc({ id: 'priya', x: -4.2, z: 2.6, rot: Math.PI * 0.5, skin: 0xd2a679, shirt: 0xb07fd0, pants: 0x2c3e50, hair: 0x120c08, scale: 0.85 });
      W.npc({ id: 'mateo', x: 5.2, z: 3.2, rot: Math.PI * 1.4, skin: 0xdcb08a, shirt: 0xe0a030, pants: 0x2a3a5a, hair: 0x1a120c, scale: 0.92 });
      W.npc({ id: 'tanaka', x: 5.5, z: -3.5, rot: Math.PI * 0.2, skin: 0xe0b894, shirt: 0x4fa3e0, pants: 0x333a44, hair: 0x181818, scale: 1.0, hat: 0xf0c020 });
      W.npc({ id: 'ken', x: 12.6, z: -0.6, rot: Math.PI * 0.8, skin: 0x8a5a3a, shirt: 0x8a7f72, pants: 0x3a3a3a, hair: 0xdddddd, scale: 1.0, hat: 0x5a5a5a });
    }
  };

  /* ====================================================================== PICTURES AND OBJECTS FOR THIS CASE */
  const A = MF.art, h = A.h;
  const cctv = (c, W, H, cam, stamp) => {                        // grainy green CCTV look
    const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0f1a14'); g.addColorStop(1, '#16251c'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  };
  const cctvOverlay = (c, W, H, cam, tmin) => {
    for (let y = 0; y < H; y += 4) { c.fillStyle = 'rgba(0,0,0,0.18)'; c.fillRect(0, y, W, 1); }
    for (let i = 0; i < 700; i++) { c.fillStyle = 'rgba(180,255,200,' + (Math.random() * 0.07) + ')'; c.fillRect(Math.random() * W, Math.random() * H, 2, 2); }
    h.text(c, cam, 20, 36, 24, '#9affb0', 'left', true); const hh = Math.floor(tmin / 60), m = tmin % 60; h.text(c, 'PM  ' + ((hh - 12) || 12) + ':' + (m < 10 ? '0' : '') + m, 20, H - 20, 26, '#9affb0', 'left', true);
    h.circ(c, W - 36, 30, 8, '#e33'); h.text(c, 'REC', W - 56, 38, 20, '#e33', 'right', true);
    const v = c.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.85); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.6)'); c.fillStyle = v; c.fillRect(0, 0, W, H);
  };
  const corridor = (c, W, H) => {                                 // one-point perspective corridor
    const vx = W / 2, vy = H * 0.45, bw = W * 0.12;
    c.fillStyle = '#1e3a2a'; c.beginPath(); c.moveTo(0, 0); c.lineTo(W, 0); c.lineTo(vx + bw, vy - bw * 0.7); c.lineTo(vx - bw, vy - bw * 0.7); c.fill();       // ceiling
    c.fillStyle = '#183024'; c.beginPath(); c.moveTo(0, H); c.lineTo(W, H); c.lineTo(vx + bw, vy + bw * 0.7); c.lineTo(vx - bw, vy + bw * 0.7); c.fill();       // floor
    c.fillStyle = '#244634'; c.beginPath(); c.moveTo(0, 0); c.lineTo(vx - bw, vy - bw * 0.7); c.lineTo(vx - bw, vy + bw * 0.7); c.lineTo(0, H); c.fill();        // left wall
    c.fillStyle = '#204030'; c.beginPath(); c.moveTo(W, 0); c.lineTo(vx + bw, vy - bw * 0.7); c.lineTo(vx + bw, vy + bw * 0.7); c.lineTo(W, H); c.fill();        // right wall
    h.rect(c, vx - bw, vy - bw * 0.7, bw * 2, bw * 1.4, '#0b140f');                                                                                            // far end
    [0.3, 0.55, 0.75].forEach((t) => { const x = W * t * 0.45, y1 = H * (0.25 + t * 0.15), y2 = H * (0.8 - t * 0.12); c.fillStyle = '#17291f'; c.fillRect(x, y1, W * 0.04 * (1 - t * 0.5), y2 - y1); });  // doors
    return { vx, vy };
  };
  const person = (c, x, y, s, o) => {                               // simple front/back figure, feet at (x,y)
    h.rect(c, x - 14 * s, y - 70 * s, 12 * s, 70 * s, o.pants || '#2c3e50'); h.rect(c, x + 2 * s, y - 70 * s, 12 * s, 70 * s, o.pants || '#2c3e50');
    h.rect(c, x - 20 * s, y - 135 * s, 40 * s, 68 * s, o.shirt || '#888'); h.circ(c, x, y - 152 * s, 15 * s, o.skin || '#d9b08c');
    c.fillStyle = o.hair || '#222'; c.beginPath(); c.arc(x, y - 156 * s, 16 * s, Math.PI, 0); c.fill();
    h.rect(c, x - 28 * s, y - 128 * s, 8 * s, 46 * s, o.shirt || '#888'); h.rect(c, x + 20 * s, y - 128 * s, 8 * s, 46 * s, o.shirt || '#888');
    h.circ(c, x - 24 * s, y - 80 * s, 7 * s, o.glove || o.skin || '#d9b08c'); h.circ(c, x + 24 * s, y - 80 * s, 7 * s, o.glove || o.skin || '#d9b08c');
  };
  A.photos.cctv_prank = (c, W, H, o) => {
    cctv(c, W, H); const p = corridor(c, W, H); const x = W * 0.5, y = H * 0.9;
    h.rect(c, x - 28, y - 60, 20, 60, '#2a4a8a'); h.rect(c, x + 8, y - 60, 20, 60, '#2a4a8a');                          // jeans
    h.rect(c, x - 32, y - 10, 28, 12, '#ff8a1c'); h.rect(c, x + 6, y - 10, 28, 12, '#ff8a1c');                         // ORANGE sneakers
    c.fillStyle = '#f3f3f3'; c.beginPath(); c.moveTo(x - 50, y - 60); c.quadraticCurveTo(x - 62, y - 210, x, y - 250); c.quadraticCurveTo(x + 62, y - 210, x + 50, y - 60); c.closePath(); c.fill();   // sheet
    h.circ(c, x - 15, y - 195, 9, '#111'); h.circ(c, x + 15, y - 195, 9, '#111');
    cctvOverlay(c, W, H, 'CAM 2  CORRIDOR', o.stampT);
  };
  A.photos.cctv_hall = (c, W, H, o) => {
    cctv(c, W, H); h.rect(c, 0, H * 0.72, W, H * 0.28, '#14221a'); h.rect(c, 0, 0, W, H * 0.72, '#1b2e23');
    h.line(c, W * 0.5, 0, W * 0.5, H * 0.55, '#b89f60', 4); h.circ(c, W * 0.5, H * 0.12, 26, '#8a7430');                  // bell + rope
    h.line(c, W * 0.34, H * 0.95, W * 0.44, H * 0.2, '#8a6a45', 6); h.line(c, W * 0.46, H * 0.95, W * 0.5, H * 0.2, '#8a6a45', 6);                           // ladder rails
    for (let i = 0; i < 7; i++) h.line(c, W * (0.35 + i * 0.012), H * (0.9 - i * 0.1), W * (0.47 + i * 0.006), H * (0.9 - i * 0.1), '#8a6a45', 4);
    person(c, W * 0.42, H * 0.42, 0.75, { shirt: '#4a4a66', pants: '#222', hair: '#d9502a', glove: '#e02020' });                                           // Ingrid on the ladder (red hair, red gloves)
    h.rect(c, W * 0.5, H * 0.14, 38, 44, '#3a6ea5'); h.line(c, W * 0.5, H * 0.18, W * 0.5, H * 0.46, '#cfe', 2);                                            // bucket + line
    person(c, W * 0.3, H * 0.93, 0.95, { shirt: '#9a6ac0', pants: '#2c3e50', hair: '#120c08' });                                                          // Priya holding the ladder
    A.clockFace(c, W * 0.14, H * 0.2, 40, 10, 35);
    cctvOverlay(c, W, H, 'CAM 1  HALL', o.stampT);
  };
  A.photos.cctv_corr = (c, W, H, o) => {
    cctv(c, W, H); corridor(c, W, H);
    person(c, W * 0.5, H * 0.62, 0.55, { shirt: '#4a4a66', pants: '#222', hair: '#d9502a', glove: '#e02020' });
    h.rect(c, W * 0.5 - 38, H * 0.62 - 70, 30, 34, '#20252c');                                                                                              // heavy bag
    cctvOverlay(c, W, H, 'CAM 2  CORRIDOR', o.stampT);
  };
  A.photos.cctv_boiler = (c, W, H, o) => {
    c.fillStyle = '#08100c'; c.fillRect(0, 0, W, H); h.rect(c, 0, H * 0.55, W, H * 0.45, '#101c15');
    h.rect(c, W * 0.7, H * 0.2, W * 0.2, H * 0.5, '#2a3a30'); h.rect(c, W * 0.1, H * 0.12, W * 0.7, 10, '#2a3a30');                                          // boiler + pipes
    c.fillStyle = '#050805'; c.beginPath(); c.moveTo(W * 0.3, H * 0.78); c.lineTo(W * 0.52, H * 0.78); c.lineTo(W * 0.56, H * 0.95); c.lineTo(W * 0.26, H * 0.95); c.closePath(); c.fill();   // open hatch
    h.rect(c, W * 0.34, H * 0.62, 70, 70, '#4a4a66'); h.circ(c, W * 0.34 + 35, H * 0.62 - 12, 22, '#d9502a'); h.circ(c, W * 0.34 - 6, H * 0.8, 10, '#e02020'); h.circ(c, W * 0.34 + 76, H * 0.8, 10, '#e02020');   // Ingrid going down
    h.rect(c, W * 0.17, H * 0.86, 56, 34, '#8c8868'); h.text(c, '⚠', W * 0.17 + 28, H * 0.86 + 24, 20, '#222', 'center', false);                          // sign (face down: grey back)
    cctvOverlay(c, W, H, 'CAM 3  BOILER RM', o.stampT);
  };
  A.dial010 = (canvas) => {
    canvas.width = 620; canvas.height = 260; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 260, '#e9e2cc');
    h.circ(c, 160, 130, 108, '#2b2f36'); h.circ(c, 160, 130, 96, '#f4f1e6');
    for (let i = 0; i < 24; i++) { const a = i * Math.PI / 12; const x = 160 + Math.sin(a) * 78, y = 130 - Math.cos(a) * 78; h.text(c, String(i), x, y + 5, i % 3 === 0 ? 17 : 12, i === 23 ? '#c0392b' : '#222', 'center', i % 3 === 0); h.line(c, 160 + Math.sin(a) * 92, 130 - Math.cos(a) * 92, 160 + Math.sin(a) * 96, 130 - Math.cos(a) * 96, '#222', 2); }
    const pa = 23 * Math.PI / 12; h.line(c, 160, 130, 160 + Math.sin(pa) * 66, 130 - Math.cos(pa) * 66, '#c0392b', 5); h.circ(c, 160, 130, 7, '#c0392b');
    h.text(c, 'SOCKET TIMER 24 h', 400, 70, 22, '#222', 'center', true); h.text(c, 'Pemasa soket 24 jam', 400, 94, 14, '#666', 'center');
    h.text(c, 'PIN → 23', 400, 150, 34, '#c0392b', 'center', true); h.text(c, 'After 12 the numbers keep going: 13 = 1 pm', 400, 190, 14, '#333', 'center'); h.text(c, 'Selepas 12 nombor terus bertambah: 13 = 1 petang', 400, 210, 12, '#666', 'center');
  };
  A.morse010 = (canvas) => {
    canvas.width = 620; canvas.height = 300; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 300, '#17202c');
    h.text(c, 'MORSE CHART / Carta Morse', 20, 28, 18, '#9fd0ff', 'left', true);
    const rows = [['S', ['.', '.', '.']], ['O', ['-', '-', '-']], ['E', ['.']], ['H', ['.', '.', '.', '.']], ['L', ['.', '-', '.', '.']]];
    const dots = (cx, cy, arr) => { let x = cx; arr.forEach((s) => { if (s === '.') { h.circ(c, x + 6, cy, 6, '#ffd54f'); x += 22; } else { h.rect(c, x, cy - 5, 30, 10, '#ffd54f'); x += 40; } }); };
    rows.forEach((r, i) => { const y = 62 + i * 34; h.text(c, r[0], 40, y + 7, 24, '#fff', 'center', true); h.text(c, '=', 70, y + 6, 20, '#789', 'center'); dots(90, y, r[1]); });
    h.text(c, 'KNOCKING PATTERN / Corak ketukan', 330, 62, 15, '#ff9a9a', 'left', true);
    dots(330, 100, ['.', '.', '.']); dots(330, 140, ['-', '-', '-']); dots(330, 180, ['.', '.', '.']);
    h.text(c, 'tap tap tap', 520, 106, 14, '#ccc', 'left'); h.text(c, 'long long long', 520, 146, 14, '#ccc', 'left'); h.text(c, 'tap tap tap', 520, 186, 14, '#ccc', 'left');
    h.text(c, '… then it starts again', 330, 250, 15, '#9fd0ff', 'left');
  };
  A.plan010 = (canvas) => {
    canvas.width = 720; canvas.height = 400; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 720, 400, '#ece4cd');
    const X = (x) => 40 + (x + 9) * 24, Z = (z) => 40 + (z + 8) * 20;
    const room = (x0, z0, x1, z1, name, bm, col) => { h.rect(c, X(x0), Z(z0), (x1 - x0) * 24, (z1 - z0) * 20, col); c.strokeStyle = '#4a3a2a'; c.lineWidth = 3; c.strokeRect(X(x0), Z(z0), (x1 - x0) * 24, (z1 - z0) * 20); h.text(c, name, X((x0 + x1) / 2), Z((z0 + z1) / 2) - 2, 15, '#222', 'center', true); h.text(c, bm, X((x0 + x1) / 2), Z((z0 + z1) / 2) + 15, 11, '#555', 'center'); };
    room(-9, -4, -1, 4, 'HALL', 'Dewan', '#d9e2f0'); room(-1, -1, 8, 1, 'CORRIDOR', 'Koridor', '#e8dcc0'); room(1, -8, 7, -1, 'CLASSROOM 3B', 'Bilik 3B', '#d8ecd8'); room(1, 1, 7, 8, 'LIBRARY', 'Perpustakaan', '#f0dcd8'); room(8, -3, 15, 3, 'BOILER ROOM', 'Bilik dandang', '#f0e0c0');
    h.circ(c, X(13.2), Z(-1.2), 16, '#8a7a6a'); h.text(c, 'boiler', X(13.2), Z(-1.2) + 4, 10, '#fff', 'center', true);
    h.circ(c, 660, 90, 40, '#fff'); c.strokeStyle = '#333'; c.lineWidth = 2; c.beginPath(); c.arc(660, 90, 40, 0, 6.3); c.stroke();
    h.line(c, 660, 120, 660, 60, '#c0392b', 5); h.text(c, 'N', 660, 50, 20, '#c0392b', 'center', true); h.text(c, 'S', 660, 142, 16, '#333', 'center', true); h.text(c, 'E', 712, 96, 16, '#333', 'right', true); h.text(c, 'W', 608, 96, 16, '#333', 'left', true);
    h.text(c, 'SCHOOL PLAN / Pelan sekolah', 40, 28, 18, '#222', 'left', true);
  };

  /* ---- 3D objects the student can turn around in their hands ---- */
  const M = MF.models, mat = (col, o) => new THREE.MeshLambertMaterial(Object.assign({ color: col }, o || {})), mesh = (g, m) => new THREE.Mesh(g, m);
  M.rig010 = () => {
    const g = new THREE.Group(); const bucket = mesh(new THREE.CylinderGeometry(0.55, 0.42, 0.75, 14), mat(0x3a6ea5)); bucket.position.y = 0.9; g.add(bucket);
    const tube = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 6), mat(0xdfe8f0)); tube.position.set(0.1, 0.2, 0); g.add(tube);
    const tin = mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.45, 12), mat(0xb0b6bd)); tin.position.set(0.1, -0.5, 0); tin.rotation.z = 0.5; g.add(tin);
    const line = mesh(new THREE.BoxGeometry(1.8, 0.02, 0.02), mat(0xf0f0f0)); line.position.set(0.9, -0.3, 0); line.rotation.z = 0.25; g.add(line);
    const drop = mesh(new THREE.SphereGeometry(0.05, 8, 6), mat(0x66aaff)); drop.position.set(0.1, -0.1, 0); g.add(drop); g.rotation.y = 0.5; return g;
  };
  M.tube010 = () => {
    const g = new THREE.Group(); const body = mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.5, 12), mat(0xb01818)); body.rotation.z = Math.PI / 2; g.add(body);
    const label = mesh(new THREE.BoxGeometry(0.8, 0.62, 0.62), mat(0xf2f2f2)); g.add(label); const cap = mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.3, 10), mat(0x7a0e0e)); cap.rotation.z = Math.PI / 2; cap.position.x = 0.9; g.add(cap);
    const drip = mesh(new THREE.SphereGeometry(0.1, 8, 6), mat(0x8a0f0f)); drip.position.set(1.1, -0.1, 0); g.add(drip); g.rotation.y = 0.6; g.rotation.x = 0.3; return g;
  };
  M.glove010 = () => {
    const g = new THREE.Group(); const palm = mesh(new THREE.BoxGeometry(0.9, 0.22, 1.0), mat(0xd01818)); g.add(palm);
    [-0.33, -0.11, 0.11, 0.33].forEach((x, i) => { const f = mesh(new THREE.BoxGeometry(0.2, 0.2, 0.7 - Math.abs(i - 1.5) * 0.08), mat(0xd01818)); f.position.set(x, 0, 0.85); g.add(f); });
    const th = mesh(new THREE.BoxGeometry(0.5, 0.2, 0.2), mat(0xd01818)); th.position.set(-0.6, 0, 0.2); th.rotation.y = 0.6; g.add(th);
    [[0.1, 0.15, 0.2], [0.3, 0.12, 0.8], [-0.2, 0.12, 0.7]].forEach((p) => { const s = mesh(new THREE.CircleGeometry(0.1, 8), mat(0x7a0e0e)); s.rotation.x = -Math.PI / 2; s.position.set(p[0], p[1], p[2]); g.add(s); });
    g.rotation.x = 0.5; g.rotation.y = 0.3; return g;
  };

  MF.registerCase(C);
})();
