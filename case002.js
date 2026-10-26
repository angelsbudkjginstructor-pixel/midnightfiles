/* ============================================================================
   CASE 002 — THE LIGHTS GO OUT / LAMPU PADAM   (School hall, Talent Night rehearsal)
   ----------------------------------------------------------------------------
   One complete, independent story. The engine reads it as data.

   HIDDEN SOLUTION  (the twist: the girl who screamed loudest staged the haunting herself)
   - Legend: "The Grey Girl" — Ivy, a student who vanished in the hall during a power cut in 1979.
     She plays the piano in the dark and sings "Ivy, Ivy, close your eyes".
   - 7:21  Amira (the star singer) pairs Hiro's missing smart plug with HER phone and plugs the
           stage-light controller into it: OFF for 40 seconds every 12 minutes, starting 7:28.
           She hides her small speaker (SoundPod-AMH) inside the piano.
   - 7:27  Ms. Adeyemi's programme photo catches Amira crouching at the side socket with her phone.
   - 7:28  Blackout 1: the piano "plays itself" (the speaker).
   - 7:40  Blackout 2: a girl's voice sings "Ivy, Ivy..." (Amira's own recording).
   - 7:52  Blackout 3: Amira presses her hand, painted with stage-blood make-up, on the dressing-room
           mirror and writes GET OUT. Hiro's night camera catches a small figure with a ring.
   - Amira screams the loudest of all and refuses to sing. The talent scout arrives at 8:35.
   MOTIVE: terrible stage fright. She wanted the show cancelled without admitting she was afraid.
   ============================================================================ */
(function () {
  const T = (en, bm) => ({ en, bm });
  const mm = (s) => { const [h, m] = s.split(':').map(Number); return (h < 12 ? h + 12 : h) * 60 + m; };
  const paper = (html, style) => `<div class="paper hand" style="${style || ''}">${html}</div>`;

  const C = {
    id: '002',
    num: 2,
    title: T('The Lights Go Out', 'Lampu Padam'),
    tagline: T('Every twelve minutes the hall goes black. Something plays the piano. Something sings. And something leaves a bloody hand on the mirror.', 'Setiap dua belas minit dewan menjadi gelap. Sesuatu bermain piano. Sesuatu menyanyi. Dan sesuatu meninggalkan tapak tangan berdarah pada cermin.'),
    place: T("St. Ivy's School Hall — Talent Night rehearsal", 'Dewan Sekolah St. Ivy — Latihan Malam Bakat'),
    premise: T(
      `It is 8:00 pm in St. Ivy's old school hall, at the dress rehearsal for Talent Night. Three times tonight — at 7:28, 7:40 and 7:52 — every light in the hall DIED. In the first darkness the piano played by itself. In the second, a girl's voice sang "Ivy, Ivy, close your eyes..." In the third, a bloody HANDPRINT and the words GET OUT appeared on the dressing-room mirror. Everyone says it is the Grey Girl, who vanished here in a power cut in 1979. Amira, the star singer, screamed the loudest and now refuses to sing. A talent scout arrives at 8:35. Who switched off the lights?`,
      `Sekarang pukul 8:00 malam di dewan lama Sekolah St. Ivy, semasa latihan penuh Malam Bakat. Tiga kali malam ini — pukul 7:28, 7:40 dan 7:52 — semua lampu dewan PADAM. Dalam gelap pertama piano bermain sendiri. Dalam gelap kedua, suara seorang budak perempuan menyanyi "Ivy, Ivy, close your eyes..." Dalam gelap ketiga, TAPAK TANGAN berdarah dan perkataan GET OUT muncul pada cermin bilik solek. Semua orang kata itu Gadis Kelabu, yang hilang di sini semasa bekalan elektrik terputus pada 1979. Amira, penyanyi utama, menjerit paling kuat dan kini enggan menyanyi. Pencari bakat tiba pukul 8:35. Siapa yang memadamkan lampu?`),
    mysteryType: 'Staged haunting / sabotage',
    subjects: ['science', 'math', 'english', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('8:00'), deadline: mm('8:35'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -4.5, z: 0, yaw: Math.PI / 2 },

    hidden: {
      culprit: 'amira',
      what: 'timer',
      window: [mm('7:21'), mm('7:52')],
      summary: T(
        `Amira staged the whole haunting. At 7:21 she paired Hiro's missing smart plug with her own phone and plugged the stage lights into it: OFF for 40 seconds every 12 minutes from 7:28. She hid her speaker in the piano to play the music and her own singing. At 7:52 she pressed her hand, painted with stage-blood make-up, on the mirror. She was terrified of singing for the talent scout and wanted the show cancelled without admitting she was afraid.`,
        `Amira merancang seluruh gangguan itu. Pukul 7:21 dia memasangkan palam pintar Hiro yang hilang dengan telefonnya sendiri dan menyambungkan lampu pentas kepadanya: MATI selama 40 saat setiap 12 minit dari 7:28. Dia menyorokkan pembesar suaranya dalam piano untuk memainkan muzik dan nyanyiannya sendiri. Pukul 7:52 dia menekan tangannya, yang dicat dengan solekan darah pentas, pada cermin. Dia sangat takut menyanyi untuk pencari bakat dan mahu persembahan dibatalkan tanpa mengaku dia takut.`),
      sequence: [
        [mm('7:15'), T("Hiro's smart plug goes missing from his tech bag.", 'Palam pintar Hiro hilang dari beg tekniknya.')],
        [mm('7:21'), T('The smart plug is paired with AMIRA-PHONE and set as a timer.', 'Palam pintar dipasangkan dengan AMIRA-PHONE dan ditetapkan sebagai pemasa.')],
        [mm('7:27'), T('Ms. Adeyemi photographs Amira at the side socket.', 'Cik Adeyemi merakam Amira di soket tepi.')],
        [mm('7:28'), T('Blackout 1 — the piano plays itself.', 'Gelap 1 — piano bermain sendiri.')],
        [mm('7:40'), T('Blackout 2 — a girl sings "Ivy, Ivy..."', 'Gelap 2 — budak perempuan menyanyi "Ivy, Ivy..."')],
        [mm('7:52'), T('Blackout 3 — a bloody handprint on the mirror.', 'Gelap 3 — tapak tangan berdarah pada cermin.')],
        [mm('8:35'), T('Deadline: the talent scout arrives.', 'Had masa: pencari bakat tiba.')]
      ],
      essentialClues: ['smart_plug', 'rehearsal_notes', 'piano_speaker', 'mirror_hand', 'grace_photo', 'hiro_cam', 'app_log', 'scout_letter', 'c_amira_stage'],
      misleading: [
        { item: 'solo_form', why: T('Lucas wanted the solo, but wanting something is not proof of doing something.', 'Lucas mahu solo itu, tetapi mahukan sesuatu bukan bukti melakukan sesuatu.') },
        { item: 'c_volkov_fuse', why: T('Mr. Volkov was at the fuse box — because he was trying to FIX the lights.', 'Encik Volkov berada di kotak fius — kerana dia cuba MEMBAIKI lampu.') },
        { item: 'ghost_poster', why: T('A ghost story is not evidence.', 'Cerita hantu bukan bukti.') },
        { item: 'hiro_bag', why: T('The smart plug belongs to Hiro, but someone else paired it with their phone.', 'Palam pintar milik Hiro, tetapi orang lain memasangkannya dengan telefon mereka.') }
      ]
    },

    people: [
      { id: 'amira', name: 'Amira Hassan', age: 13, role: T('Star singer', 'Penyanyi utama'), rel: T('Sings the big solo', 'Menyanyikan solo utama'), color: '#c2185b', suspect: true },
      { id: 'lucas', name: 'Lucas Ferreira', age: 12, role: T('Understudy singer', 'Penyanyi simpanan'), rel: T('Would sing if Amira cannot', 'Akan menyanyi jika Amira tidak boleh'), color: '#2e7d32', suspect: true },
      { id: 'volkov', name: 'Mr. Dmitri Volkov', age: 61, role: T('Caretaker and electrician', 'Penjaga dan juruelektrik'), rel: T('Looks after the fuse box', 'Menjaga kotak fius'), color: '#5d4037', suspect: true },
      { id: 'grace', name: 'Ms. Grace Adeyemi', age: 40, role: T('Music teacher', 'Guru muzik'), rel: T('Runs the rehearsal', 'Mengendalikan latihan'), color: '#7a5cc0', suspect: true },
      { id: 'hiro', name: 'Hiro Tanaka', age: 11, role: T('Sound and light crew', 'Krew bunyi dan cahaya'), rel: T('Owns the smart plugs', 'Pemilik palam pintar'), color: '#0277bd', suspect: true }
    ],

    items: [
      /* ---------------- MAIN HALL ---------------- */
      { id: 'rehearsal_notes', type: 'document', icon: '📋', title: T("Ms. Adeyemi's rehearsal notes", 'Nota latihan Cik Adeyemi'), where: T('Clipboard on the piano', 'Papan klip di atas piano'),
        desc: T(`Ms. Adeyemi wrote down every blackout.`, `Cik Adeyemi mencatat setiap kali lampu padam.`),
        puzzle: 'pz_timer', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<b>REHEARSAL — Talent Night</b><br>⚫ 7:28 — lights OUT (40 s). Piano played by itself!!<br>⚫ 7:40 — lights OUT (40 s). Singing?!<br>⚫ 7:52 — lights OUT (40 s). Mirror... GET OUT<br><small>Mr. Volkov says the fuse box is fine every time.</small>`), paper(`<b>LATIHAN — Malam Bakat</b><br>⚫ 7:28 — lampu PADAM (40 s). Piano bermain sendiri!!<br>⚫ 7:40 — lampu PADAM (40 s). Nyanyian?!<br>⚫ 7:52 — lampu PADAM (40 s). Cermin... GET OUT<br><small>Encik Volkov kata kotak fius baik setiap kali.</small>`)),
          fixedHtml: T(paper(`<b>REHEARSAL — solved</b> ✔<br>7:28 → 7:40 → 7:52 → <b>8:04</b> → 8:16 ...<br>Exactly every <b>12 minutes</b>, always <b>40 seconds</b>. That is a TIMER.`), paper(`<b>LATIHAN — selesai</b> ✔<br>7:28 → 7:40 → 7:52 → <b>8:04</b> → 8:16 ...<br>Tepat setiap <b>12 minit</b>, sentiasa <b>40 saat</b>. Itu PEMASA.`)) } },
      { id: 'smart_plug', type: 'device', icon: '🔌', title: T('Smart plug behind the stage curtain', 'Palam pintar di belakang tirai pentas'), where: T('Side wall socket by the stage', 'Soket dinding tepi pentas'),
        desc: T(`The stage-light controller is plugged into a small white smart plug, and the smart plug is in the wall. It has a tiny blue light and a sticker: "SmartPlug-3".`, `Pengawal lampu pentas dipasang pada palam pintar putih kecil, dan palam pintar itu pada dinding. Ia ada lampu biru kecil dan pelekat: "SmartPlug-3".`),
        puzzle: 'pz_circuit', inspect: { kind: 'puzzle-doc',
          html: T(paper(`🔌 <b>SmartPlug-3</b><br>WALL SOCKET → <b>SMART PLUG</b> → stage-light controller → all hall lights<br>Blue light: blinking (it is on Wi-Fi)<br><small>A smart plug can switch power OFF and ON by itself, using a phone app.</small>`), paper(`🔌 <b>SmartPlug-3</b><br>SOKET DINDING → <b>PALAM PINTAR</b> → pengawal lampu pentas → semua lampu dewan<br>Lampu biru: berkelip (ia pada Wi-Fi)<br><small>Palam pintar boleh mematikan dan menghidupkan kuasa sendiri, menggunakan aplikasi telefon.</small>`)),
          fixedHtml: T(paper(`🔌 <b>SmartPlug-3 — understood</b> ✔<br>When the smart plug switches OFF, the circuit is OPEN and EVERY hall light goes dark — while the fuse box stays fine.`), paper(`🔌 <b>SmartPlug-3 — difahami</b> ✔<br>Apabila palam pintar MATI, litar TERBUKA dan SEMUA lampu dewan gelap — sementara kotak fius kekal baik.`)) } },
      { id: 'piano_speaker', type: 'device', icon: '🎹', title: T('Speaker hidden inside the piano', 'Pembesar suara tersembunyi dalam piano'), where: T('Inside the old piano', 'Di dalam piano lama'),
        desc: T(`Under the piano lid, between the strings, is a small round speaker named "SoundPod-AMH". Its playlist: "piano_spooky.mp3", "ivy_song_ME.mp3".`, `Di bawah penutup piano, di antara tali, ada pembesar suara bulat kecil bernama "SoundPod-AMH". Senarai mainnya: "piano_spooky.mp3", "ivy_song_ME.mp3".`),
        inspect: { kind: 'doc', html: T(paper(`🎹 <b>SoundPod-AMH</b> (mini speaker)<br>Playlist:<br>1. piano_spooky.mp3 — 0:38<br>2. ivy_song_<b>ME</b>.mp3 — 0:35<br><small>"ME" — the singer recorded herself...</small>`), paper(`🎹 <b>SoundPod-AMH</b> (pembesar suara mini)<br>Senarai main:<br>1. piano_spooky.mp3 — 0:38<br>2. ivy_song_<b>ME</b>.mp3 — 0:35<br><small>"ME" — penyanyi itu merakam dirinya sendiri...</small>`)) } },
      { id: 'ghost_poster', type: 'document', icon: '📜', title: T('Old poster: "The Grey Girl"', 'Poster lama: "Gadis Kelabu"'), where: T('Hall noticeboard', 'Papan kenyataan dewan'),
        desc: T(`A faded poster from a school ghost walk.`, `Poster pudar dari lawatan hantu sekolah.`),
        inspect: { kind: 'doc', html: T(paper(`<b>THE GREY GIRL 👻</b><br>"In 1979 the lights failed during a concert. When they came back, a girl named Ivy was GONE. On dark nights she plays the piano and sings: <i>Ivy, Ivy, close your eyes...</i> If the lights go out — RUN."`, 'background:#dcd6c8'), paper(`<b>GADIS KELABU 👻</b><br>"Pada 1979 lampu padam semasa konsert. Apabila ia menyala semula, seorang budak bernama Ivy telah HILANG. Pada malam gelap dia bermain piano dan menyanyi: <i>Ivy, Ivy, close your eyes...</i> Jika lampu padam — LARI."`, 'background:#dcd6c8')) } },

      /* ---------------- BACKSTAGE CORRIDOR ---------------- */
      { id: 'solo_form', type: 'document', icon: '📝', title: T('Solo application form', 'Borang permohonan solo'), where: T('Backstage noticeboard', 'Papan kenyataan belakang pentas'),
        desc: T(`An application to sing the big solo.`, `Permohonan untuk menyanyikan solo utama.`),
        inspect: { kind: 'doc', html: T(paper(`<b>TALENT NIGHT — SOLO</b><br>Name: <b>Lucas Ferreira</b><br>"I really, really want this solo. I practise every day!"<br>Result: <s>Lucas</s> → <b>Amira</b> (Ms. Adeyemi)`), paper(`<b>MALAM BAKAT — SOLO</b><br>Nama: <b>Lucas Ferreira</b><br>"Saya betul-betul mahu solo ini. Saya berlatih setiap hari!"<br>Keputusan: <s>Lucas</s> → <b>Amira</b> (Cik Adeyemi)`)) } },

      /* ---------------- DRESSING ROOM ---------------- */
      { id: 'mirror_hand', type: 'physical', icon: '🖐️', title: T('Bloody handprint on the mirror', 'Tapak tangan berdarah pada cermin'), where: T('Dressing-room mirror', 'Cermin bilik solek'),
        desc: T(`A red handprint and the words GET OUT. Up close it smells of... strawberries? There is a small round gap on one finger, like a ring.`, `Tapak tangan merah dan perkataan GET OUT. Dari dekat ia berbau... strawberi? Ada lubang bulat kecil pada satu jari, seperti cincin.`),
        puzzle: 'pz_hand', inspect: { kind: 'puzzle-art', art: 'hand002' } },
      { id: 'makeup_tube', type: 'physical', icon: '💄', title: T('"Stage Blood" make-up', 'Solekan "Darah Pentas"'), where: T('Dressing table', 'Meja solek'),
        desc: T(`A tube of strawberry-scented "Stage Blood" make-up, almost empty. Everyone in the show can use the dressing table.`, `Tiub solekan "Darah Pentas" berbau strawberi, hampir habis. Semua orang dalam persembahan boleh menggunakan meja solek.`),
        inspect: { kind: 'doc', html: T(paper(`💄 <b>STAGE BLOOD</b> — strawberry scent<br>Washable · almost EMPTY<br><small>Fake blood for actors. It smells like the handprint.</small>`), paper(`💄 <b>DARAH PENTAS</b> — bau strawberi<br>Boleh dibasuh · hampir HABIS<br><small>Darah palsu untuk pelakon. Baunya sama seperti tapak tangan itu.</small>`)) } },
      { id: 'scout_letter', type: 'document', icon: '✉️', title: T('Letter about the talent scout', 'Surat tentang pencari bakat'), where: T("Amira's dressing-table drawer", 'Laci meja solek Amira'),
        desc: T(`A letter to Amira. Someone has scribbled in the margin, pressing very hard.`, `Surat kepada Amira. Seseorang telah menconteng di tepinya, menekan dengan sangat kuat.`),
        inspect: { kind: 'doc', html: T(paper(`"Dear Amira, the scout from the National Youth Choir arrives at <b>8:35</b> to hear YOU. This is your big chance — Mum and Dad are SO proud! ❤️"<br><span style="color:#b0141a;font-size:1.2em">i can't i can't i CAN'T i can't</span>`), paper(`"Amira sayang, pencari bakat dari Koir Belia Kebangsaan tiba pukul <b>8:35</b> untuk mendengar AWAK. Ini peluang besar awak — Mak dan Ayah SANGAT bangga! ❤️"<br><span style="color:#b0141a;font-size:1.2em">i can't i can't i CAN'T i can't</span>`)) } },
      { id: 'amira_diary', type: 'document', icon: '📔', title: T("Amira's diary page", 'Halaman diari Amira'), where: T("Amira's school bag", 'Beg sekolah Amira'),
        desc: T(`A torn diary page. Tears have made some words run.`, `Halaman diari yang koyak. Air mata telah mengaburkan beberapa perkataan.`),
        puzzle: 'pz_diary', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<i>"Last year I ____ on stage and my voice ____. Everyone ____. Tonight the scout is coming. If the lights go out, nobody can blame me..."</i>`, 'background:#f6e7ee'), paper(`<i>"Last year I ____ on stage and my voice ____. Everyone ____. Tonight the scout is coming. If the lights go out, nobody can blame me..."</i>`, 'background:#f6e7ee')),
          fixedHtml: T(paper(`<i>"Last year I <u>froze</u> on stage and my voice <u>broke</u>. Everyone <u>laughed</u>. Tonight the scout is coming. If the lights go out, nobody can blame me..."</i> ✔`, 'background:#f6e7ee'), paper(`<i>"Last year I <u>froze</u> on stage and my voice <u>broke</u>. Everyone <u>laughed</u>. Tonight the scout is coming. If the lights go out, nobody can blame me..."</i> ✔`, 'background:#f6e7ee')) } },

      /* ---------------- SOUND & LIGHT BOOTH ---------------- */
      { id: 'hiro_bag', type: 'physical', icon: '🎒', title: T("Hiro's tech bag", 'Beg teknik Hiro'), where: T('Sound and light booth', 'Bilik bunyi dan cahaya'),
        desc: T(`A bag with three labelled slots: SmartPlug-1, SmartPlug-2, SmartPlug-3. Slot 3 is EMPTY.`, `Beg dengan tiga slot berlabel: SmartPlug-1, SmartPlug-2, SmartPlug-3. Slot 3 KOSONG.`),
        inspect: { kind: 'doc', html: T(paper(`🎒 <b>HIRO'S KIT</b><br>✔ SmartPlug-1<br>✔ SmartPlug-2<br>⬜ SmartPlug-3 — <b>MISSING</b><br><small>The bag was left open on the booth chair.</small>`), paper(`🎒 <b>KIT HIRO</b><br>✔ SmartPlug-1<br>✔ SmartPlug-2<br>⬜ SmartPlug-3 — <b>HILANG</b><br><small>Beg ditinggalkan terbuka di atas kerusi bilik.</small>`)) } },
      { id: 'hiro_tablet', type: 'device', icon: '📱', title: T("Hiro's tablet (locked)", 'Tablet Hiro (berkunci)'), where: T('Sound and light booth desk', 'Meja bilik bunyi dan cahaya'),
        desc: T(`The tablet with the smart-plug app. It is locked with a 3-digit PIN. A sticky note: "PIN = finish my patterns".`, `Tablet dengan aplikasi palam pintar. Ia dikunci dengan PIN 3 digit. Nota lekat: "PIN = lengkapkan corak saya".`),
        puzzle: 'pz_app', inspect: { kind: 'puzzle-art', art: 'tablet002' } },
      { id: 'app_log', type: 'document', icon: '📶', title: T('Smart-plug app log', 'Log aplikasi palam pintar'), where: T("Hiro's tablet", 'Tablet Hiro'),
        desc: T(`The app shows who controls each smart plug.`, `Aplikasi menunjukkan siapa mengawal setiap palam pintar.`),
        inspect: { kind: 'doc', html: T(paper(`<b>SMART HOME — device log</b><br>SmartPlug-1 → HIRO-TABLET<br>SmartPlug-2 → HIRO-TABLET<br><b>SmartPlug-3 → paired with AMIRA-PHONE at 7:21 pm</b><br>Schedule: OFF 40 s · every 12 min · from 7:28 pm<br>Nearby: SoundPod-AMH → AMIRA-PHONE`, 'background:#e3eef6'), paper(`<b>RUMAH PINTAR — log peranti</b><br>SmartPlug-1 → HIRO-TABLET<br>SmartPlug-2 → HIRO-TABLET<br><b>SmartPlug-3 → dipasangkan dengan AMIRA-PHONE pukul 7:21 mlm</b><br>Jadual: MATI 40 s · setiap 12 min · dari 7:28 mlm<br>Berdekatan: SoundPod-AMH → AMIRA-PHONE`, 'background:#e3eef6')) } },

      /* ---------------- ELECTRICS ROOM ---------------- */
      { id: 'fuse_box', type: 'physical', icon: '⚡', title: T('Main fuse box', 'Kotak fius utama'), where: T('Electrics room', 'Bilik elektrik'),
        desc: T(`Every fuse is in place. The main switch is ON. Nothing here is broken.`, `Setiap fius di tempatnya. Suis utama HIDUP. Tiada apa yang rosak di sini.`),
        inspect: { kind: 'doc', html: T(paper(`⚡ <b>FUSE BOX — HALL</b><br>Main switch: ON ✔<br>Fuses 1–8: all OK ✔<br>Dust on the cover: <b>no fingerprints except Mr. Volkov's torch marks</b><br><small>The power was never cut HERE.</small>`), paper(`⚡ <b>KOTAK FIUS — DEWAN</b><br>Suis utama: HIDUP ✔<br>Fius 1–8: semua OK ✔<br>Habuk pada penutup: <b>tiada cap jari kecuali kesan lampu suluh Encik Volkov</b><br><small>Kuasa tidak pernah diputuskan DI SINI.</small>`)) } },
      { id: 'volkov_log', type: 'document', icon: '📓', title: T("Caretaker's night log", 'Log malam penjaga'), where: T('Electrics room desk', 'Meja bilik elektrik'),
        desc: T(`Mr. Volkov writes everything down.`, `Encik Volkov menulis segala-galanya.`),
        inspect: { kind: 'doc', html: T(paper(`<b>NIGHT LOG — D. Volkov</b><br>7:28 — lights out! Ran to fuse box: ALL FINE?!<br>7:40 — again! Fuse box fine. Strange.<br>7:45–8:00 — Lucas helped me carry 40 chairs (good boy)<br>7:52 — again!! Lucas and I in the store room. Fuse box fine.`), paper(`<b>LOG MALAM — D. Volkov</b><br>7:28 — lampu padam! Lari ke kotak fius: SEMUA BAIK?!<br>7:40 — lagi! Kotak fius baik. Pelik.<br>7:45–8:00 — Lucas tolong saya angkat 40 kerusi (budak baik)<br>7:52 — lagi!! Lucas dan saya di stor. Kotak fius baik.`)) } },

      /* ---------------- PHOTOS (given in interviews) ---------------- */
      { id: 'grace_photo', type: 'photo', icon: '📸', photo: true, title: T("Ms. Adeyemi's programme photo", 'Gambar program Cik Adeyemi'), art: 'grace002', stampT: mm('7:27'), stampLabel: T('Phone camera (correct time)', 'Kamera telefon (masa betul)'),
        desc: T(`A photo of the stage for the Talent Night programme.`, `Gambar pentas untuk program Malam Bakat.`),
        zoomNotice: T(`You zoom in on the edge of the photo: behind the curtain, a girl in a sparkly dress crouches by the side wall socket, looking at her phone. It is Amira. The photo time is 7:27 pm — one minute before the first blackout.`, `Anda zum tepi gambar: di belakang tirai, seorang budak perempuan bergaun berkilau mencangkung di sebelah soket dinding tepi, melihat telefonnya. Itu Amira. Masa gambar ialah 7:27 malam — satu minit sebelum gelap pertama.`),
        timeline: T('Amira crouches at the side socket with her phone.', 'Amira mencangkung di soket tepi dengan telefonnya.') },
      { id: 'hiro_cam', type: 'photo', icon: '📸', photo: true, title: T('Night-camera photo: dressing room', 'Gambar kamera malam: bilik solek'), art: 'cam002', stampT: mm('7:52'), stampLabel: T('Night camera (correct time)', 'Kamera malam (masa betul)'),
        desc: T(`Hiro's backstage night camera, pointed at the dressing-room door.`, `Kamera malam belakang pentas Hiro, menghala ke pintu bilik solek.`),
        zoomNotice: T(`You zoom in: in the dark, a SMALL figure in a long sparkly dress stands at the mirror with one hand pressed on the glass. A silver RING shines on that hand. The photo time is 7:52 pm.`, `Anda zum: dalam gelap, satu susuk KECIL bergaun panjang berkilau berdiri di cermin dengan sebelah tangan ditekan pada kaca. CINCIN perak bersinar pada tangan itu. Masa gambar ialah 7:52 malam.`),
        timeline: T('A small figure with a ring presses a hand on the mirror.', 'Susuk kecil bercincin menekan tangan pada cermin.') },

      /* ---------------- INFERENCES ---------------- */
      { id: 'inf_timer', kind: 'inference', type: 'deduction', icon: '💡', title: T('The blackouts follow a TIMER: every 12 minutes, 40 seconds', 'Gelap mengikut PEMASA: setiap 12 minit, 40 saat'),
        desc: T(`7:28, 7:40, 7:52 — exactly 12 minutes apart, always 40 seconds long. Ghosts do not keep timetables. Machines do.`, `7:28, 7:40, 7:52 — tepat 12 minit jaraknya, sentiasa 40 saat. Hantu tidak ikut jadual. Mesin ikut.`) },
      { id: 'inf_circuit', kind: 'inference', type: 'deduction', icon: '💡', title: T('The smart plug opened the circuit', 'Palam pintar membuka litar'),
        desc: T(`All hall lights get power through the smart plug. When it switches OFF, the circuit is open and the hall goes dark — while the fuse box stays perfectly fine.`, `Semua lampu dewan mendapat kuasa melalui palam pintar. Apabila ia MATI, litar terbuka dan dewan gelap — sementara kotak fius kekal baik.`) },
      { id: 'inf_hand', kind: 'inference', type: 'deduction', icon: '💡', title: T('The handprint is 15 cm long and has a RING mark', 'Tapak tangan 15 cm panjang dan ada kesan CINCIN'),
        desc: T(`Only Amira and Hiro have 15 cm hands. Only Amira wears a ring. The "blood" is strawberry stage make-up.`, `Hanya Amira dan Hiro ada tangan 15 cm. Hanya Amira memakai cincin. "Darah" itu solekan pentas strawberi.`) },
      { id: 'inf_app', kind: 'inference', type: 'deduction', icon: '💡', title: T("Amira's phone controlled the blackouts and the piano", 'Telefon Amira mengawal gelap dan piano'),
        desc: T(`SmartPlug-3 was paired with AMIRA-PHONE at 7:21 and set to switch off every 12 minutes from 7:28. The speaker in the piano, SoundPod-AMH, was also connected to AMIRA-PHONE.`, `SmartPlug-3 dipasangkan dengan AMIRA-PHONE pukul 7:21 dan ditetapkan mati setiap 12 minit dari 7:28. Pembesar suara dalam piano, SoundPod-AMH, juga disambungkan ke AMIRA-PHONE.`) },
      { id: 'inf_fear', kind: 'inference', type: 'deduction', icon: '💡', title: T('Amira was terrified of the stage', 'Amira sangat takut akan pentas'),
        desc: T(`Last year she froze on stage and everyone laughed. She hoped the blackouts would stop the show without anyone knowing she was afraid.`, `Tahun lalu dia kaku di pentas dan semua orang ketawa. Dia berharap gelap itu menghentikan persembahan tanpa sesiapa tahu dia takut.`) },

      /* ---------------- WITNESS CLAIMS ---------------- */
      { id: 'c_amira_stage', kind: 'claim', person: 'amira', t: mm('7:28'), type: 'statement', icon: '💬', title: T('Amira: "I was in the MIDDLE of the stage every time the lights went out!"', 'Amira: "Saya di TENGAH pentas setiap kali lampu padam!"'), desc: T('Amira says she was on stage, singing.', 'Amira berkata dia di pentas, menyanyi.') },
      { id: 'c_amira_ghost', kind: 'claim', person: 'amira', t: mm('7:52'), type: 'statement', icon: '💬', title: T('Amira: "I saw the Grey Girl\'s face in the mirror! She is REAL!"', 'Amira: "Saya nampak wajah Gadis Kelabu dalam cermin! Dia BENAR!"'), desc: T('Amira says the ghost made the handprint.', 'Amira berkata hantu membuat tapak tangan itu.') },
      { id: 'c_amira_scout', kind: 'claim', person: 'amira', t: 0, type: 'statement', icon: '💬', title: T('Amira: "I\'m not nervous at all about the scout!"', 'Amira: "Saya langsung tidak gementar tentang pencari bakat!"'), desc: T('She says she is excited, not scared.', 'Dia berkata dia teruja, bukan takut.') },
      { id: 'c_lucas_solo', kind: 'claim', person: 'lucas', t: 0, type: 'statement', icon: '💬', title: T('Lucas: "I don\'t even want the solo."', 'Lucas: "Saya pun tak mahu solo itu."'), desc: T('Lucas says he does not care about the solo.', 'Lucas berkata dia tidak peduli tentang solo.') },
      { id: 'c_lucas_chairs', kind: 'claim', person: 'lucas', t: mm('7:52'), type: 'statement', icon: '💬', title: T('Lucas: "At 7:52 I was carrying chairs with Mr. Volkov."', 'Lucas: "Pukul 7:52 saya mengangkat kerusi dengan Encik Volkov."'), desc: T('Lucas says he was in the store room.', 'Lucas berkata dia di stor.') },
      { id: 'c_volkov_fuse', kind: 'claim', person: 'volkov', t: mm('7:28'), type: 'statement', icon: '💬', title: T('Volkov: "Every blackout I ran to the fuse box. Nothing was wrong there!"', 'Volkov: "Setiap kali gelap saya lari ke kotak fius. Tiada yang salah di situ!"'), desc: T('Mr. Volkov tried to fix the lights.', 'Encik Volkov cuba membaiki lampu.') },
      { id: 'c_hiro_plug', kind: 'claim', person: 'hiro', t: mm('7:15'), type: 'statement', icon: '💬', title: T('Hiro: "SmartPlug-3 vanished from my bag at about 7:15!"', 'Hiro: "SmartPlug-3 hilang dari beg saya kira-kira 7:15!"'), desc: T('Hiro says someone took his smart plug.', 'Hiro berkata seseorang mengambil palam pintarnya.') },
      { id: 'c_grace_scout', kind: 'claim', person: 'grace', t: 0, type: 'statement', icon: '💬', title: T('Ms. Adeyemi: "Amira asked me TWICE today if the show could be cancelled."', 'Cik Adeyemi: "Amira tanya saya DUA KALI hari ini sama ada persembahan boleh dibatalkan."'), desc: T('The teacher noticed Amira was shaking.', 'Guru perasan Amira menggeletar.') }
    ],

    /* ------------------------------------------------------------------ CONTRADICTION / SUPPORT CHECKER */
    pairs: [
      { a: 'c_amira_stage', b: 'grace_photo', type: 'contradiction', person: 'amira',
        text: T('Amira says she was in the middle of the stage. At 7:27 — one minute before the first blackout — the photo shows her crouching at the side socket with her phone.', 'Amira berkata dia di tengah pentas. Pukul 7:27 — satu minit sebelum gelap pertama — gambar menunjukkan dia mencangkung di soket tepi dengan telefonnya.'),
        explain: T('She was at the very socket that controls the lights.', 'Dia berada di soket yang mengawal lampu itu.') },
      { a: 'c_amira_stage', b: 'hiro_cam', type: 'contradiction', person: 'amira',
        text: T('At 7:52 the night camera shows a small figure in a sparkly dress at the dressing-room mirror — not on stage.', 'Pukul 7:52 kamera malam menunjukkan susuk kecil bergaun berkilau di cermin bilik solek — bukan di pentas.'),
        explain: T('She was in the dressing room during the third blackout.', 'Dia di bilik solek semasa gelap ketiga.') },
      { a: 'c_amira_ghost', b: 'mirror_hand', type: 'contradiction', person: 'amira', requires: ['hand_solved'],
        text: T('Amira says a ghost made the handprint. It is 15 cm long, smells of strawberry stage make-up and has a ring mark — like her own hand.', 'Amira berkata hantu membuat tapak tangan itu. Ia 15 cm panjang, berbau solekan pentas strawberi dan ada kesan cincin — seperti tangannya sendiri.'),
        explain: T('A ghost does not wear make-up or a silver ring.', 'Hantu tidak memakai solekan atau cincin perak.') },
      { a: 'c_amira_scout', b: 'scout_letter', type: 'contradiction', person: 'amira',
        text: T('She says she is not nervous. On the scout letter she wrote "i can\'t i can\'t i CAN\'T".', 'Dia berkata dia tidak gementar. Pada surat pencari bakat dia menulis "i can\'t i can\'t i CAN\'T".'),
        explain: T('She was terrified of singing for the scout.', 'Dia sangat takut menyanyi untuk pencari bakat.') },
      { a: 'c_amira_scout', b: 'c_grace_scout', type: 'contradiction', person: 'amira',
        text: T('Amira says she is not nervous, but she asked Ms. Adeyemi twice if the show could be cancelled.', 'Amira berkata dia tidak gementar, tetapi dia bertanya Cik Adeyemi dua kali sama ada persembahan boleh dibatalkan.'),
        explain: T('She wanted the show to stop.', 'Dia mahu persembahan dihentikan.') },
      { a: 'c_lucas_solo', b: 'solo_form', type: 'contradiction', person: 'lucas',
        text: T('Lucas says he does not want the solo. His form says "I really, really want this solo".', 'Lucas berkata dia tidak mahu solo itu. Borangnya tertulis "Saya betul-betul mahu solo ini".'),
        explain: T('He lied because he was embarrassed — but wanting a solo is not a crime.', 'Dia berbohong kerana malu — tetapi mahukan solo bukan jenayah.') },
      { a: 'c_lucas_chairs', b: 'volkov_log', type: 'support', person: 'lucas',
        text: T('Mr. Volkov\'s log: "7:52 — Lucas and I in the store room."', 'Log Encik Volkov: "7:52 — Lucas dan saya di stor."') },
      { a: 'c_volkov_fuse', b: 'fuse_box', type: 'support', person: 'volkov',
        text: T('The fuse box is perfect: the power was never cut there.', 'Kotak fius sempurna: kuasa tidak pernah diputuskan di situ.') },
      { a: 'c_volkov_fuse', b: 'volkov_log', type: 'support', person: 'volkov',
        text: T('His log shows he checked the fuse box after every blackout.', 'Lognya menunjukkan dia memeriksa kotak fius selepas setiap gelap.') },
      { a: 'c_hiro_plug', b: 'hiro_bag', type: 'support', person: 'hiro',
        text: T('Slot 3 in Hiro\'s bag is empty, just as he says.', 'Slot 3 dalam beg Hiro kosong, tepat seperti katanya.') },
      { a: 'c_hiro_plug', b: 'app_log', type: 'support', person: 'hiro', requires: ['app_open'],
        text: T('The app shows SmartPlug-3 was paired with AMIRA-PHONE, not with Hiro\'s tablet.', 'Aplikasi menunjukkan SmartPlug-3 dipasangkan dengan AMIRA-PHONE, bukan tablet Hiro.') },
      { a: 'c_grace_scout', b: 'scout_letter', type: 'support', person: 'grace',
        text: T('The letter and the scribbles match what Ms. Adeyemi noticed.', 'Surat dan contengan itu sepadan dengan apa yang Cik Adeyemi perasan.') }
    ],

    /* ------------------------------------------------------------------ PUZZLES */
    puzzles: {
      pz_timer: { subject: 'math', title: T('Find the blackout pattern', 'Cari corak gelap'), grants: { flags: ['timer_solved'], items: ['inf_timer'] }, tokens: 0,
        intro: T('Look at the times on the rehearsal notes: 7:28, 7:40, 7:52.', 'Lihat masa pada nota latihan: 7:28, 7:40, 7:52.'),
        steps: [
          { type: 'number', q: T('How many minutes from 7:28 to 7:40?', 'Berapa minit dari 7:28 ke 7:40?'), answer: 12, options: [10, 12, 14, 20], unit: T('minutes', 'minit'),
            hints: [T('40 − 28 = ?', '40 − 28 = ?')] },
          { type: 'choice', q: T('If the pattern goes on, when is the NEXT blackout after 7:52?', 'Jika corak berterusan, bila gelap SETERUSNYA selepas 7:52?'), options: ['8:00', '8:02', '8:04', '8:12'], answer: '8:04',
            hints: [T('7:52 + 12 minutes. 52 + 12 = 64 → 1 hour and 4 minutes.', '7:52 + 12 minit. 52 + 12 = 64 → 1 jam dan 4 minit.')] },
          { type: 'choice', q: T('Exactly every 12 minutes, always 40 seconds. What does that tell you?', 'Tepat setiap 12 minit, sentiasa 40 saat. Apa maksudnya?'),
            options: [T('A ghost is very punctual.', 'Hantu sangat menepati masa.'), T('A TIMER is switching the lights off.', 'PEMASA sedang mematikan lampu.'), T('It is the storm.', 'Ia ribut.')], answer: 1,
            hints: [T('What kind of thing works on an exact schedule?', 'Benda apa yang bekerja mengikut jadual tepat?')] }
        ],
        after: T('A perfect 12-minute pattern. Something is switching the lights off on a timer!', 'Corak 12 minit yang sempurna. Sesuatu mematikan lampu dengan pemasa!') },

      pz_circuit: { subject: 'science', title: T('Follow the circuit', 'Ikut litar'), grants: { flags: ['circuit_solved'], items: ['inf_circuit'] }, tokens: 0,
        intro: T('Electricity flows in a circle (a circuit): WALL SOCKET → SMART PLUG → light controller → hall lights. A circuit must be CLOSED for the lights to work.', 'Elektrik mengalir dalam bulatan (litar): SOKET DINDING → PALAM PINTAR → pengawal lampu → lampu dewan. Litar mesti TERTUTUP untuk lampu berfungsi.'),
        steps: [
          { type: 'choice', q: T('The smart plug switches OFF. What happens to the circuit?', 'Palam pintar MATI. Apa berlaku kepada litar?'), options: [T('It stays closed', 'Ia kekal tertutup'), T('It becomes OPEN — electricity stops', 'Ia menjadi TERBUKA — elektrik berhenti')], answer: 1,
            hints: [T('OFF means the path is broken.', 'MATI bermaksud laluan terputus.')] },
          { type: 'choice', q: T('So what happens to the hall lights?', 'Jadi apa berlaku kepada lampu dewan?'), options: [T('They go dark', 'Ia menjadi gelap'), T('They get brighter', 'Ia menjadi lebih terang'), T('Nothing', 'Tiada apa')], answer: 0,
            hints: [T('No electricity, no light.', 'Tiada elektrik, tiada cahaya.')] },
          { type: 'choice', q: T('Mr. Volkov found the fuse box perfect every time. Why?', 'Encik Volkov dapati kotak fius sempurna setiap kali. Kenapa?'),
            options: [T('He is lying.', 'Dia berbohong.'), T('The circuit was opened at the smart plug, not at the fuse box.', 'Litar dibuka di palam pintar, bukan di kotak fius.'), T('Ghosts fix fuses.', 'Hantu membaiki fius.')], answer: 1,
            hints: [T('Where was the circuit broken?', 'Di mana litar diputuskan?')] }
        ],
        after: T('The smart plug opened the circuit — the fuse box was never the problem!', 'Palam pintar membuka litar — kotak fius bukan masalahnya!') },

      pz_hand: { subject: 'math', title: T('Measure the handprint', 'Ukur tapak tangan'), grants: { flags: ['hand_solved'], items: ['inf_hand'] }, tokens: 0,
        intro: T('Use the ruler beside the handprint. Then compare with the hand sizes everyone measured for their gloves for the show.', 'Guna pembaris di sebelah tapak tangan. Kemudian bandingkan dengan saiz tangan yang semua orang ukur untuk sarung tangan persembahan.'),
        art: 'hand002',
        steps: [
          { type: 'number', q: T('How long is the handprint (wrist to fingertip)?', 'Berapa panjang tapak tangan (pergelangan ke hujung jari)?'), answer: 15, options: [12, 15, 18, 21], unit: 'cm',
            hints: [T('Read the ruler where the longest finger ends.', 'Baca pembaris di mana jari paling panjang berakhir.')] },
          { type: 'choice', q: T('Glove list: Amira 15 cm · Lucas 18 cm · Mr. Volkov 21 cm · Ms. Adeyemi 19 cm · Hiro 15 cm. Who has a 15 cm hand?', 'Senarai sarung tangan: Amira 15 cm · Lucas 18 cm · Encik Volkov 21 cm · Cik Adeyemi 19 cm · Hiro 15 cm. Siapa ada tangan 15 cm?'),
            options: [T('Lucas and Hiro', 'Lucas dan Hiro'), T('Amira and Hiro', 'Amira dan Hiro'), T('Only Mr. Volkov', 'Hanya Encik Volkov')], answer: 1,
            hints: [T('Find the two people with 15 cm.', 'Cari dua orang dengan 15 cm.')] },
          { type: 'choice', q: T('The print has a RING gap on one finger. Hiro never wears rings. Amira wears a silver ring. Whose hand made the print?', 'Kesan itu ada lubang CINCIN pada satu jari. Hiro tidak pernah memakai cincin. Amira memakai cincin perak. Tangan siapa membuat kesan itu?'),
            options: ['Hiro', 'Amira', T('The Grey Girl', 'Gadis Kelabu')], answer: 'Amira',
            hints: [T('Size AND ring must both match.', 'Saiz DAN cincin mesti sepadan.')] }
        ],
        after: T('15 cm and a ring mark: the "ghost" handprint matches Amira — the girl who screamed the loudest!', '15 cm dan kesan cincin: tapak tangan "hantu" sepadan dengan Amira — budak yang menjerit paling kuat!') },

      pz_app: { subject: 'thinking', title: T("Unlock Hiro's tablet", 'Buka tablet Hiro'), grants: { flags: ['app_open'], items: ['app_log', 'inf_app'] }, tokens: 0,
        intro: T('Hiro\'s sticky note: "PIN = finish my patterns."', 'Nota lekat Hiro: "PIN = lengkapkan corak saya."'),
        art: 'tablet002',
        steps: [
          { type: 'code', q: T('Find the next number in each pattern, then enter the 3-digit PIN.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan PIN 3 digit.'),
            patterns: ['1, 2, 4, ?', '7, 6, 5, ?', '3, 5, 7, ?'], answer: '849',
            hints: [T('Pattern 1 DOUBLES. Pattern 2 goes down by 1.', 'Corak 1 DIDARAB DUA. Corak 2 turun 1.'), T('Pattern 3 goes up by 2. The PIN is 8, 4, 9.', 'Corak 3 naik 2. PIN ialah 8, 4, 9.')] }
        ],
        after: T('Unlocked! The app shows which phone controls SmartPlug-3...', 'Terbuka! Aplikasi menunjukkan telefon mana yang mengawal SmartPlug-3...') },

      pz_diary: { subject: 'english', title: T("Read Amira's diary", 'Baca diari Amira'), grants: { flags: ['diary_read'], items: ['inf_fear'] }, tokens: 1,
        intro: T('Tears have smudged the words. Choose the correct PAST TENSE.', 'Air mata mengaburkan perkataan. Pilih KALA LAMPAU yang betul.'),
        steps: [
          { type: 'cloze', q: T('Restore the diary:', 'Pulihkan diari:'),
            parts: ['Last year I ', { blank: ['freeze', 'froze', 'freezed'], answer: 'froze' }, ' on stage and my voice ', { blank: ['broke', 'breaked', 'break'], answer: 'broke' }, '. Everyone ', { blank: ['laugh', 'laughing', 'laughed'], answer: 'laughed' }, '.'],
            hints: [T('Freeze → froze. Break → broke.', 'Freeze → froze. Break → broke.'), T('Laugh is regular: add -ed.', 'Laugh biasa: tambah -ed.')] }
        ],
        after: T('Amira was not wicked. She was terrified. You earn 1 hint token.', 'Amira bukan jahat. Dia sangat takut. Anda dapat 1 token petunjuk.') }
    },

    /* ------------------------------------------------------------------ DEDUCTION QUESTIONS */
    questions: [
      { id: 'q_how', title: T('1. How did the lights go out?', '1. Bagaimana lampu padam?'),
        options: [
          { id: 'ghost', text: T('The Grey Girl switched them off.', 'Gadis Kelabu mematikannya.') },
          { id: 'fuse', text: T('A broken fuse.', 'Fius rosak.') },
          { id: 'timer', text: T('A smart plug on a timer opened the light circuit every 12 minutes.', 'Palam pintar dengan pemasa membuka litar lampu setiap 12 minit.'), correct: true },
          { id: 'storm', text: T('The storm.', 'Ribut.') }
        ],
        needs: [['smart_plug', 'inf_circuit'], ['rehearsal_notes', 'inf_timer']], needsFlags: ['circuit_solved', 'timer_solved'],
        hints: [T('Study the blackout times, then follow the circuit from the socket.', 'Kaji masa gelap, kemudian ikut litar dari soket.')] },
      { id: 'q_ghost', title: T('2. What were the piano, the singing and the bloody hand?', '2. Apakah piano, nyanyian dan tangan berdarah itu?'),
        options: [
          { id: 'real', text: T('A real ghost.', 'Hantu sebenar.') },
          { id: 'tricks', text: T('Tricks: a speaker in the piano and a hand painted with stage make-up.', 'Helah: pembesar suara dalam piano dan tangan dicat dengan solekan pentas.'), correct: true },
          { id: 'radio', text: T('A radio next door.', 'Radio di sebelah.') },
          { id: 'dream', text: T('Everyone imagined it.', 'Semua orang membayangkannya.') }
        ],
        needs: [['piano_speaker'], ['mirror_hand', 'inf_hand', 'makeup_tube']], needsFlags: ['hand_solved'],
        hints: [T('Look inside the piano. Smell and measure the handprint.', 'Lihat dalam piano. Hidu dan ukur tapak tangan.')] },
      { id: 'q_when', title: T('3. When was the trick set up?', '3. Bila helah itu disediakan?'),
        options: [
          { id: 'a', text: T('In 1979', 'Pada 1979') },
          { id: 'b', text: T('Around 7:21, just before the first blackout', 'Sekitar 7:21, sebelum gelap pertama'), correct: true },
          { id: 'c', text: T('At 7:52', 'Pukul 7:52') },
          { id: 'd', text: T('After 8:00', 'Selepas 8:00') }
        ],
        needs: [['grace_photo', 'app_log'], ['hiro_bag', 'c_hiro_plug']], needsFlags: [],
        hints: [T('When did the smart plug go missing? Who was at the socket at 7:27?', 'Bila palam pintar hilang? Siapa di soket pukul 7:27?')] },
      { id: 'q_who', title: T('4. Who switched off the lights?', '4. Siapa memadamkan lampu?'),
        options: [
          { id: 'amira', text: T('Amira, the star singer', 'Amira, penyanyi utama'), correct: true }, { id: 'lucas', text: T('Lucas', 'Lucas') },
          { id: 'volkov', text: T('Mr. Volkov', 'Encik Volkov') }, { id: 'grace', text: T('Ms. Adeyemi', 'Cik Adeyemi') }, { id: 'hiro', text: T('Hiro', 'Hiro') }
        ],
        needs: [['app_log', 'inf_app'], ['mirror_hand', 'inf_hand'], ['hiro_cam', 'grace_photo']], needsFlags: ['app_open', 'hand_solved'],
        hints: [T('Whose phone controls SmartPlug-3? Whose hand is 15 cm with a ring?', 'Telefon siapa mengawal SmartPlug-3? Tangan siapa 15 cm dengan cincin?')] },
      { id: 'q_why', title: T('5. WHY did she do it?', '5. KENAPA dia melakukannya?'),
        options: [
          { id: 'fame', text: T('To become famous as a ghost-hunter.', 'Untuk menjadi terkenal sebagai pemburu hantu.') },
          { id: 'lucas', text: T('To get Lucas into trouble.', 'Untuk menyusahkan Lucas.') },
          { id: 'fear', text: T('She was terrified of singing for the scout and wanted the show cancelled.', 'Dia sangat takut menyanyi untuk pencari bakat dan mahu persembahan dibatalkan.'), correct: true },
          { id: 'money', text: T('For money.', 'Untuk wang.') }
        ],
        needs: [['scout_letter', 'amira_diary', 'inf_fear'], ['c_grace_scout', 'c_amira_scout']], needsFlags: [],
        hints: [T('Read the scout letter — and what Amira scribbled on it.', 'Baca surat pencari bakat — dan apa yang Amira conteng padanya.')] }
    ],

    timeUp: { title: T('The scout is here!', 'Pencari bakat sudah tiba!'), text: T('The hall doors open. A woman with a notebook sits in the front row... and the lights flicker. Name the culprit NOW!', 'Pintu dewan terbuka. Seorang wanita dengan buku nota duduk di barisan hadapan... dan lampu berkelip. Namakan pelaku SEKARANG!') },
    conclusion: {
      who: { correct: 'amira' },
      what: { questionId: 'q_how' },
      when: { questionId: 'q_when' },
      whereQ: T('WHERE is the remote control for the blackouts?', 'DI MANA alat kawalan untuk gelap itu?'),
      where: [
        { id: 'phone', text: T("On Amira's phone (the smart-plug app)", 'Pada telefon Amira (aplikasi palam pintar)'), correct: true },
        { id: 'fuse', text: T('In the fuse box', 'Dalam kotak fius') }, { id: 'tablet', text: T("Only on Hiro's tablet", 'Hanya pada tablet Hiro') },
        { id: 'piano', text: T('Inside the piano', 'Dalam piano') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }
      ],
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_timer', label: T('The lights were on a timer', 'Lampu menggunakan pemasa'), items: ['smart_plug', 'inf_circuit', 'rehearsal_notes', 'inf_timer'] },
        { id: 'g_app', label: T("Amira's phone controlled it", 'Telefon Amira mengawalnya'), items: ['app_log', 'inf_app'] },
        { id: 'g_hand', label: T('The handprint is hers', 'Tapak tangan itu miliknya'), items: ['mirror_hand', 'inf_hand'] },
        { id: 'g_seen', label: T('Amira seen at the socket and the mirror', 'Amira dilihat di soket dan cermin'), items: ['grace_photo', 'hiro_cam'] },
        { id: 'g_motive', label: T('The motive', 'Motif'), items: ['scout_letter', 'amira_diary', 'inf_fear', 'c_grace_scout'] },
        { id: 'g_lie', label: T("Amira's lies", 'Pembohongan Amira'), items: ['c_amira_stage', 'c_amira_ghost', 'c_amira_scout'] }
      ],
      strongCoverage: 4,
      secondary: ['piano_speaker', 'makeup_tube', 'fuse_box', 'volkov_log', 'hiro_bag', 'ghost_poster'],
      secondaryNeeded: 2,
      lieFlags: ['c_amira_stage', 'c_amira_ghost', 'c_lucas_solo']
    },

    endings: [
      { id: 'secret', stars: 4, title: T('The Second Voice', 'Suara Kedua'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.has.amira_diary && r.flags.diary_read,
        text: T(
          `You solve the case — and you understand WHY. You sit with Amira and show her the diary. She cries, then laughs, then says sorry to everyone. Ms. Adeyemi holds her hand: "Brave is not 'not scared'. Brave is scared, and singing anyway." At 8:35 Amira sings for the scout, shaking at first, then strong and clear. The hall is silent... and then, from the empty balcony, a second voice — soft, old and kind — joins the last line: "Ivy, Ivy, open your eyes..." Nobody is up there. The smart plug is unplugged in your pocket. Case closed... mostly.`,
          `Anda menyelesaikan kes — dan anda faham KENAPA. Anda duduk bersama Amira dan menunjukkan diari itu. Dia menangis, kemudian ketawa, kemudian meminta maaf kepada semua orang. Cik Adeyemi memegang tangannya: "Berani bukan 'tidak takut'. Berani ialah takut, dan tetap menyanyi." Pukul 8:35 Amira menyanyi untuk pencari bakat, menggeletar pada mulanya, kemudian kuat dan jelas. Dewan senyap... dan kemudian, dari balkoni yang kosong, suara kedua — lembut, tua dan baik — menyertai baris terakhir: "Ivy, Ivy, open your eyes..." Tiada siapa di atas. Palam pintar sudah dicabut dan ada dalam poket anda. Kes selesai... hampir.`) },
      { id: 'perfect', stars: 3, title: T('Case Closed!', 'Kes Selesai!'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec >= 2,
        text: T(
          `Excellent! You proved the "ghost" was Amira: her phone ran the smart-plug timer and the speaker in the piano, and her hand left the make-up print. She admits she was terrified of the scout. Lucas, Hiro and Mr. Volkov are cleared. Ms. Adeyemi gives Amira a hug and a choice: tell the truth and try to sing. The lights stay on.`,
          `Hebat! Anda membuktikan "hantu" itu Amira: telefonnya menjalankan pemasa palam pintar dan pembesar suara dalam piano, dan tangannya meninggalkan kesan solekan. Dia mengaku sangat takut akan pencari bakat. Lucas, Hiro dan Encik Volkov dibersihkan. Cik Adeyemi memeluk Amira dan memberinya pilihan: berkata benar dan cuba menyanyi. Lampu kekal menyala.`) },
      { id: 'missed', stars: 2, title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec < 2,
        text: T(
          `Right answer, strong proof! But you missed some side clues (the piano speaker, the make-up, the fuse box, the caretaker's log or Hiro's bag). Because of that, Mr. Volkov and Hiro are still blamed by some people. Next time, check every room.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas beberapa petunjuk sampingan (pembesar suara piano, solekan, kotak fius, log penjaga atau beg Hiro). Kerana itu, Encik Volkov dan Hiro masih dipersalahkan oleh sesetengah orang. Lain kali, periksa setiap bilik.`) },
      { id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'),
        when: (r) => r.ok.who,
        text: T(`You named the right person — but your proof was too weak. Find the timer pattern, unlock the tablet and measure the handprint. Hurry: the scout is coming!`,
                `Anda menyebut orang yang betul — tetapi bukti anda terlalu lemah. Cari corak pemasa, buka tablet dan ukur tapak tangan. Cepat: pencari bakat sedang datang!`) },
      { id: 'wrong', stars: 0, title: T('The wrong answer!', 'Jawapan yang salah!'),
        when: () => true,
        text: T(`That is not right. Remember: the person who seems most frightened is not always innocent. Check whose phone controls the smart plug.`,
                `Itu tidak betul. Ingat: orang yang kelihatan paling takut tidak semestinya tidak bersalah. Semak telefon siapa mengawal palam pintar.`) }
    ],
    wrongWho: {
      lucas: T('Lucas wanted the solo and lied about it, but at 7:52 he was carrying chairs with Mr. Volkov (the caretaker\'s log proves it), and his hand is 18 cm.', 'Lucas mahukan solo itu dan berbohong, tetapi pukul 7:52 dia mengangkat kerusi dengan Encik Volkov (log penjaga membuktikannya), dan tangannya 18 cm.'),
      volkov: T('Mr. Volkov ran to the fuse box to FIX the lights. The fuse box was fine because the circuit was opened at the smart plug.', 'Encik Volkov lari ke kotak fius untuk MEMBAIKI lampu. Kotak fius baik kerana litar dibuka di palam pintar.'),
      grace: T('Ms. Adeyemi wrote down every blackout and took the photo that shows Amira at the socket. Her hand is 19 cm.', 'Cik Adeyemi mencatat setiap gelap dan mengambil gambar yang menunjukkan Amira di soket. Tangannya 19 cm.'),
      hiro: T('The smart plug is Hiro\'s, but it was paired with AMIRA-PHONE, not his tablet. His hand is 15 cm — but he wears no ring.', 'Palam pintar milik Hiro, tetapi ia dipasangkan dengan AMIRA-PHONE, bukan tabletnya. Tangannya 15 cm — tetapi dia tidak memakai cincin.')
    },

    /* ------------------------------------------------------------------ INTERVIEWS */
    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      amira: {
        greeting: T(`*She is shaking, mascara running down her face.* She was HERE. The Grey Girl. In the mirror. I'm not singing. I'm NOT going back out there!`, `*Dia menggeletar, maskara mengalir di mukanya.* Dia ada DI SINI. Gadis Kelabu. Dalam cermin. Saya tak akan menyanyi. Saya TAK AKAN keluar ke sana lagi!`),
        topics: [
          { id: 'stage', label: T('Where were you during the blackouts?', 'Di mana awak semasa gelap?'),
            lines: [T('In the MIDDLE of the stage, every time! Singing! Ask anyone!', 'Di TENGAH pentas, setiap kali! Menyanyi! Tanya sesiapa!')], claims: ['c_amira_stage'] },
          { id: 'ghost', label: T('What did you see in the mirror?', 'Apa yang awak nampak dalam cermin?'),
            lines: [T('Her FACE. Grey, wet hair... and then the hand. The bloody hand. She wants us OUT.', 'WAJAHNYA. Kelabu, rambut basah... dan kemudian tangan itu. Tangan berdarah. Dia mahu kita KELUAR.')], claims: ['c_amira_ghost'] },
          { id: 'scout', label: T('Are you nervous about the talent scout?', 'Adakah awak gementar tentang pencari bakat?'),
            lines: [T('Nervous? Me? Not at all. I can\'t WAIT. *She twists her silver ring round and round.*', 'Gementar? Saya? Langsung tidak. Saya tak SABAR. *Dia memusing-musingkan cincin peraknya.*')], claims: ['c_amira_scout'] },
          { id: 'truth', label: T('Amira... it was you, wasn\'t it?', 'Amira... awaklah, kan?'), after: 'amira_admit',
            lines: [T('*Long silence.* ...Last year I froze on stage. Everyone laughed. I couldn\'t do it again. Not in front of a SCOUT. Not in front of Mum and Dad. I thought if the lights kept going out, they would just... cancel it. And nobody would know I was scared.', '*Senyap lama.* ...Tahun lalu saya kaku di pentas. Semua orang ketawa. Saya tak boleh buat lagi. Bukan di depan PENCARI BAKAT. Bukan di depan Mak dan Ayah. Saya ingat kalau lampu terus padam, mereka akan... batalkan. Dan tiada siapa tahu saya takut.')] }
        ],
        present: {
          grace_photo: { lines: [T('That\'s... I dropped my earring there. That\'s all!', 'Itu... anting-anting saya jatuh di situ. Itu sahaja!')] },
          hiro_cam: { lines: [T('That could be ANYONE in a long dress! ...Anyone.', 'Itu boleh jadi SESIAPA yang berpakaian panjang! ...Sesiapa.')] },
          mirror_hand: { requiresFlag: 'hand_solved', lines: [T('*She hides her hand behind her back.*', '*Dia menyembunyikan tangannya di belakang.*')], lockedLines: [T('Don\'t make me look at it! (Maybe measure it first.)', 'Jangan paksa saya tengok! (Mungkin ukur dulu.)')] },
          app_log: { unlock: 'amira_admit', lines: [T('*Her face goes white.* AMIRA-PHONE... OK. OK. Please don\'t shout.', '*Mukanya menjadi pucat.* AMIRA-PHONE... OK. OK. Tolong jangan marah.')] },
          scout_letter: { lines: [T('That\'s PRIVATE! *She grabs it and crumples it.*', 'Itu PERIBADI! *Dia merampas dan merenyukkannya.*')] },
          amira_diary: { unlock: 'amira_admit', lines: [T('You read it... *She starts to cry.* Then you know how scared I am.', 'Awak baca... *Dia mula menangis.* Jadi awak tahu betapa takutnya saya.')] },
          smart_plug: { lines: [T('A plug? I don\'t know anything about plugs.', 'Palam? Saya tak tahu apa-apa tentang palam.')] }
        }
      },
      lucas: {
        greeting: T(`Is Amira OK? Everyone is saying it's my fault because I'm the understudy. That's so unfair.`, `Amira OK? Semua orang kata ini salah saya kerana saya penyanyi simpanan. Itu sangat tak adil.`),
        topics: [
          { id: 'solo', label: T('Do you want the solo?', 'Awak mahu solo itu?'),
            lines: [T('Me? No. I don\'t even want it. *He looks at his shoes.*', 'Saya? Tak. Saya pun tak mahu. *Dia memandang kasutnya.*')], claims: ['c_lucas_solo'] },
          { id: 'where', label: T('Where were you at 7:52?', 'Di mana awak pukul 7:52?'),
            lines: [T('Carrying chairs with Mr. Volkov in the store room. Forty chairs! When the lights went out, he dropped one on his foot.', 'Mengangkat kerusi dengan Encik Volkov di stor. Empat puluh kerusi! Bila lampu padam, dia jatuhkan satu atas kakinya.')], claims: ['c_lucas_chairs'] }
        ],
        present: {
          solo_form: { lines: [T('...OK, I wanted it. A LOT. But I would never scare anyone to get it. I was embarrassed, that\'s all.', '...OK, saya mahu. SANGAT mahu. Tetapi saya tak akan takutkan sesiapa untuk dapatnya. Saya malu, itu sahaja.')] },
          volkov_log: { lines: [T('See? It says I was with him!', 'Nampak? Ia kata saya bersama dia!')] },
          mirror_hand: { lines: [T('That hand is tiny. Look at mine — way bigger.', 'Tangan itu kecil. Tengok tangan saya — jauh lebih besar.')] }
        }
      },
      volkov: {
        greeting: T(`Forty years I look after this hall. Never, NEVER have the lights done this. *He rubs his sore foot.*`, `Empat puluh tahun saya menjaga dewan ini. Tidak pernah, TIDAK PERNAH lampu buat begini. *Dia menggosok kakinya yang sakit.*`),
        topics: [
          { id: 'fuse', label: T('What did you do when the lights went out?', 'Apa yang anda buat bila lampu padam?'),
            lines: [T('Ran to the fuse box! Every time! And every time — everything perfect. Fuses fine, switch ON. It makes no sense!', 'Lari ke kotak fius! Setiap kali! Dan setiap kali — semua sempurna. Fius baik, suis HIDUP. Tak masuk akal!')], claims: ['c_volkov_fuse'] },
          { id: 'ghost', label: T('Have you heard of the Grey Girl?', 'Pernah dengar tentang Gadis Kelabu?'),
            lines: [T('Ivy. 1979. They found her the next morning, asleep in the store room — perfectly fine. But nobody remembers that part. They prefer the scary version.', 'Ivy. 1979. Mereka jumpa dia keesokan paginya, tidur di stor — sihat sahaja. Tetapi tiada siapa ingat bahagian itu. Mereka lebih suka versi seram.')] }
        ],
        present: {
          smart_plug: { lines: [T('A SMART plug? In MY hall? On the stage-light controller?! So that is why my fuse box was fine!', 'Palam PINTAR? Dalam dewan SAYA? Pada pengawal lampu pentas?! Jadi itulah sebab kotak fius saya baik!')] },
          fuse_box: { lines: [T('You see? Perfect. Like I told you.', 'Nampak? Sempurna. Macam saya cakap.')] }
        }
      },
      grace: {
        greeting: T(`Detective, thank goodness. I've written down every blackout. Something is very wrong tonight — and I don't think it's a ghost.`, `Detektif, syukurlah. Saya sudah catat setiap gelap. Ada yang tak kena malam ini — dan saya rasa ia bukan hantu.`),
        topics: [
          { id: 'photo', label: T('Did you take any photos?', 'Adakah anda ambil gambar?'), gives: ['grace_photo'],
            lines: [T('One, at 7:27, for the programme. Just before the first blackout. Here.', 'Satu, pukul 7:27, untuk program. Sejurus sebelum gelap pertama. Nah.')] },
          { id: 'scout', label: T('How is Amira?', 'Bagaimana Amira?'),
            lines: [T('Poor thing. She was shaking all afternoon. She asked me TWICE if the show could be cancelled. I said no — the scout is coming especially for her.', 'Kasihan. Dia menggeletar sepanjang petang. Dia tanya saya DUA KALI sama ada persembahan boleh dibatalkan. Saya kata tidak — pencari bakat datang khas untuknya.')], claims: ['c_grace_scout'] },
          { id: 'notes', label: T('Where are your notes?', 'Di mana nota anda?'),
            lines: [T('On my clipboard, on top of the piano. Every blackout, to the minute.', 'Pada papan klip saya, di atas piano. Setiap gelap, tepat pada minitnya.')] }
        ],
        present: {
          mirror_hand: { lines: [T('That is our strawberry stage blood. Anyone could use it... but that is a very small hand.', 'Itu darah pentas strawberi kita. Sesiapa boleh guna... tetapi itu tangan yang sangat kecil.')] },
          scout_letter: { lines: [T('"I can\'t"... Oh, Amira. Why didn\'t she tell me?', '"I can\'t"... Oh, Amira. Kenapa dia tak beritahu saya?')] }
        }
      },
      hiro: {
        greeting: T(`Someone stole my smart plug! And my night camera caught something at 7:52. I'm too scared to look at it again.`, `Seseorang curi palam pintar saya! Dan kamera malam saya merakam sesuatu pukul 7:52. Saya terlalu takut nak tengok lagi.`),
        topics: [
          { id: 'plug', label: T('What happened to your smart plug?', 'Apa jadi pada palam pintar awak?'),
            lines: [T('SmartPlug-3 vanished from my bag at about 7:15. I left the bag on the chair when I went to get water.', 'SmartPlug-3 hilang dari beg saya kira-kira 7:15. Saya tinggalkan beg atas kerusi bila pergi ambil air.')], claims: ['c_hiro_plug'] },
          { id: 'cam', label: T('Can I see the night-camera photo?', 'Boleh saya lihat gambar kamera malam?'), gives: ['hiro_cam'],
            lines: [T('*He turns the screen away while you look.* 7:52, the dressing-room door. Is it... her?', '*Dia memalingkan skrin ketika anda melihat.* 7:52, pintu bilik solek. Adakah itu... dia?')] },
          { id: 'pin', label: T('How do I open your tablet?', 'Bagaimana saya buka tablet awak?'),
            lines: [T('My PIN is my number patterns. I wrote them on the sticky note so I don\'t forget. Finish them!', 'PIN saya ialah corak nombor saya. Saya tulis pada nota lekat supaya tak lupa. Lengkapkan!')] }
        ],
        present: {
          app_log: { lines: [T('AMIRA-PHONE?! This afternoon she asked me how smart plugs work. I showed her! Oh no...', 'AMIRA-PHONE?! Petang tadi dia tanya saya macam mana palam pintar berfungsi. Saya tunjukkan! Alamak...')] },
          smart_plug: { lines: [T('That\'s SmartPlug-3! Mine! But it\'s not on my tablet any more...', 'Itu SmartPlug-3! Saya punya! Tetapi ia tiada lagi dalam tablet saya...')] }
        }
      }
    },

    /* ------------------------------------------------------------------ SPOOKY MOMENTS (scare level 1 = Low, 2 = Medium) */
    horror: {
      zones: [
        { id: 'hl_piano', room: 'HL', once: true, minScare: 1, delay: 5, fx: ['blackout:1.6', 'sfx:musicbox'], text: T('🎹 The lights die — and in the darkness, the piano plays a slow, sad tune...', '🎹 Lampu padam — dan dalam gelap, piano memainkan lagu perlahan yang sedih...') },
        { id: 'hl_sing', room: 'HL', once: true, minScare: 2, delay: 22, fx: ['sfx:voice', 'flicker:HL:2', 'music:tense:9'], text: T('🎤 A girl\'s voice drifts from the balcony: "Ivy, Ivy, close your eyes..."', '🎤 Suara budak perempuan dari balkoni: "Ivy, Ivy, close your eyes..."') },
        { id: 'bs_steps', room: 'BS', once: true, minScare: 1, delay: 2, fx: ['sfx:steps_far'], text: T('👣 Light, quick footsteps run past behind the curtain.', '👣 Tapak kaki ringan dan laju berlari di belakang tirai.') },
        { id: 'dr_mirror', room: 'DR', once: true, minScare: 1, delay: 2, fx: ['flash:red', 'sfx:sting', 'shake:0.4'], text: T('🩸 For a second, the mirror shows a grey face behind you!', '🩸 Seketika, cermin menunjukkan wajah kelabu di belakang anda!') },
        { id: 'dr_heart', room: 'DR', once: true, minScare: 2, delay: 10, fx: ['sfx:heartbeat', 'blackout:1.4'], text: T('💓 The bulbs around the mirror pop out one by one...', '💓 Mentol di sekeliling cermin padam satu demi satu...') },
        { id: 'tb_static', room: 'TB', once: true, minScare: 1, delay: 3, fx: ['sfx:static', 'flicker:TB:1.5'], text: T('📺 Every screen in the booth fills with grey static.', '📺 Setiap skrin dalam bilik dipenuhi bintik kelabu.') },
        { id: 'er_slam', room: 'ER', once: true, minScare: 1, delay: 2, fx: ['sfx:slam', 'shake:0.5'], text: T('⚡ The electrics-room door slams. The fuse box buzzes like angry bees.', '⚡ Pintu bilik elektrik terhempas. Kotak fius berdengung seperti lebah marah.') },
        { id: 'er_whisper', room: 'ER', once: true, minScare: 2, delay: 9, fx: ['sfx:whisper', 'flicker:ER:2'], text: T('🗣️ A whisper in your ear: "Close your eyes..."', '🗣️ Bisikan di telinga anda: "Close your eyes..."') }
      ],
      figures: [
        { name: 'figure1', room: 'DR', minScare: 1, revealDistance: 3.0, flickerRoom: 'DR', sfx: 'sting', reveal: T('It is only a grey costume dress on a mannequin... but its head is turned toward you. Was it like that before?', 'Ia hanya gaun kostum kelabu pada patung... tetapi kepalanya berpaling ke arah anda. Adakah ia begitu tadi?') },
        { name: 'figure2', room: 'HL', minScare: 2, revealDistance: 3.4, flickerRoom: 'HL', reveal: T('Just a coat stand with a grey cloak. (A false alarm!)', 'Hanya penyangkut kot dengan jubah kelabu. (Penggera palsu!)') }
      ]
    },

    /* ------------------------------------------------------------------ EXIT TICKET */
    exitTicket: [
      { subject: 'science', q: T('A switch in a circuit turns OFF. What happens?', 'Suis dalam litar DIMATIKAN. Apa berlaku?'),
        options: [T('The circuit opens and the bulb goes out', 'Litar terbuka dan mentol padam'), T('The bulb gets brighter', 'Mentol lebih terang'), T('Nothing changes', 'Tiada perubahan')], answer: 0, why: T('Electricity needs a closed circuit to flow.', 'Elektrik perlukan litar tertutup untuk mengalir.') },
      { subject: 'math', q: T('Lights go out at 7:28, 7:40, 7:52... When is the next time?', 'Lampu padam pukul 7:28, 7:40, 7:52... Bila seterusnya?'),
        options: ['8:00', '8:04', '8:12', '7:64'], answer: 1, why: T('Add 12 minutes: 7:52 + 12 min = 8:04.', 'Tambah 12 minit: 7:52 + 12 min = 8:04.') },
      { subject: 'thinking', q: T('Amira was afraid, so she tricked everyone. What would have been a better choice?', 'Amira takut, jadi dia memperdaya semua orang. Apakah pilihan yang lebih baik?'),
        options: [T('Tell a trusted adult that she was scared', 'Beritahu orang dewasa dipercayai bahawa dia takut'), T('Run away', 'Lari'), T('Blame Lucas', 'Salahkan Lucas')], answer: 0, why: T('Being honest about fear is brave — and people can help.', 'Jujur tentang rasa takut ialah berani — dan orang boleh membantu.') }
    ],

    /* ------------------------------------------------------------------ 3D WORLD (built from this data) */
    world(W) {
      const H = 3.2, WALL = 0x5a4a5a, WALL2 = 0x463a46;
      W.sky(0x05040a); W.fog(5, 24); W.spawn(this.spawn.x, this.spawn.z, this.spawn.yaw);
      W.mood({ amb: 0.15, hemi: 0.13, ambLow: 0.55, hemiLow: 0.32 });

      /* ---- rooms (HL main hall, BS backstage, DR dressing room, TB sound booth, ER electrics room) ---- */
      W.room('HL', -9, -4, -1, 4, T('Main hall', 'Dewan utama'), true, 0x4a2f2f, 0x1a1418);
      W.room('BS', -1, -1, 8, 1, T('Backstage corridor', 'Lorong belakang pentas'), true, 0x3a3440, 0x16141a, 2.8);
      W.room('DR', 1, -8, 7, -1, T('Dressing room', 'Bilik solek'), true, 0x5a4450, 0x1c161a);
      W.room('TB', 1, 1, 7, 8, T('Sound and light booth', 'Bilik bunyi dan cahaya'), true, 0x2f3a44, 0x14181c);
      W.room('ER', 8, -3, 15, 3, T('Electrics room', 'Bilik elektrik'), true, 0x3a3a34, 0x121315);

      /* ---- walls ---- */
      W.wallZ(-4, -9, -1, [], H, WALL); W.wallZ(4, -9, -1, [], H, WALL); W.wallX(-9, -4, 4, [], H, WALL); W.wallX(-1, -4, 4, [[-1, 1]], H, WALL);
      W.wallZ(-1, -1, 8, [[3, 4.2]], 2.8, WALL2); W.wallZ(1, -1, 8, [[3, 4.2]], 2.8, WALL2);
      W.wallZ(-8, 1, 7, [], H, 0x6a5462); W.wallX(1, -8, -1, [], H, 0x6a5462); W.wallX(7, -8, -1, [], H, 0x6a5462);
      W.wallZ(8, 1, 7, [], H, 0x3c4854); W.wallX(1, 1, 8, [], H, 0x3c4854); W.wallX(7, 1, 8, [], H, 0x3c4854);
      W.wallX(8, -3, 3, [[-1, 1]], H, 0x44443c); W.wallZ(-3, 8, 15, [], H, 0x44443c); W.wallZ(3, 8, 15, [], H, 0x44443c); W.wallX(15, -3, 3, [], H, 0x44443c);

      /* ---- lights (point lights are off in Low graphics mode) ---- */
      W.light('HL', -6, 2.9, 0, 0xffc0a0, 0.45, 13); W.light('BS', 3.5, 2.4, 0, 0x9a8aff, 0.3, 9);
      W.light('DR', 4, 2.6, -6.5, 0xffd8a0, 0.55, 9); W.light('TB', 4, 2.6, 4.5, 0x60c0ff, 0.45, 10); W.light('ER', 11.5, 2.6, 0, 0xffe070, 0.35, 10);

      /* ================= MAIN HALL ================= */
      W.box(-8.1, 0, 0, 1.8, 0.55, 7.8, 0x5a3a28);                                                   // stage
      W.box(-7.15, 0, -3.1, 0.2, 3.1, 1.6, 0x7a1020, { collide: false }); W.box(-7.15, 0, 3.1, 0.2, 3.1, 1.6, 0x7a1020, { collide: false });   // curtains
      [[-3.2, -1.2], [-3.2, 0.4], [-3.2, 2.0], [-2.0, -1.2], [-2.0, 0.4], [-2.0, 2.0]].forEach((p) => W.box(p[0], 0, p[1], 0.5, 0.5, 0.5, 0x3a2a22, { collide: false }));   // chairs
      W.box(-4.8, 0, -3.1, 1.6, 1.0, 0.7, 0x111111);                                                 // piano
      W.box(-4.8, 1.0, -3.0, 0.4, 0.03, 0.3, 0xe8e0c8, { collide: false });                          // clipboard
      W.interact({ id: 'rehearsal_notes', x: -4.8, y: 1.1, z: -2.9, r: 0.45, label: T('Clipboard on the piano', 'Papan klip di atas piano'), item: 'rehearsal_notes' });
      W.interact({ id: 'piano_speaker', x: -4.1, y: 0.9, z: -2.7, r: 0.5, label: T('Piano lid', 'Penutup piano'), item: 'piano_speaker' });
      W.box(-6.6, 0.3, -3.92, 0.16, 0.16, 0.08, 0xf2f2f2, { collide: false });                        // smart plug at the side socket
      W.box(-6.6, 0.36, -3.86, 0.03, 0.03, 0.02, 0x2196f3, { collide: false });
      W.interact({ id: 'smart_plug', x: -6.6, y: 0.35, z: -3.7, r: 0.6, label: T('Side wall socket', 'Soket dinding tepi'), item: 'smart_plug' });
      W.box(-3.0, 1.5, 3.95, 0.9, 1.1, 0.05, 0xdcd6c8, { collide: false });
      W.interact({ id: 'ghost_poster', x: -3.0, y: 1.5, z: 3.75, r: 0.7, label: T('Old poster', 'Poster lama'), item: 'ghost_poster' });
      W.writing(-8.86, 2.3, 0, Math.PI / 2, T('TALENT NIGHT ✨', 'MALAM BAKAT ✨'), '#ffd27a', 2.6, 0.5);
      W.box(-1.6, 0, 3.3, 0.08, 1.9, 0.08, 0x3a2a22); W.box(-1.6, 0.9, 3.3, 0.5, 1.0, 0.3, 0x7a7a80, { collide: false, name: 'figure2' }); W.ball(-1.6, 1.6, 3.3, 0.15, 0x7a7a80, { name: 'figure2' });

      /* ================= BACKSTAGE CORRIDOR ================= */
      W.box(2.0, 1.4, -0.95, 0.9, 0.7, 0.05, 0xc8b88a, { collide: false });
      W.interact({ id: 'solo_form', x: 2.0, y: 1.4, z: -0.8, r: 0.6, label: T('Backstage noticeboard', 'Papan kenyataan belakang pentas'), item: 'solo_form' });
      W.writing(6.2, 1.7, -0.88, 0, T('QUIET PLEASE · SHOW IN PROGRESS', 'SENYAP · PERSEMBAHAN SEDANG BERLANGSUNG'), '#c9b4e8', 2.0, 0.5);

      /* ================= DRESSING ROOM ================= */
      W.box(4.0, 1.5, -7.84, 2.4, 1.3, 0.04, 0x9fb8c8, { collide: false });                          // mirror
      [2.8, 3.4, 4.0, 4.6, 5.2].forEach((x) => W.ball(x, 2.25, -7.8, 0.06, 0xfff2c0, { collide: false }));   // mirror bulbs
      W.box(4.4, 1.35, -7.8, 0.22, 0.3, 0.02, 0x9a0c12, { collide: false });                          // the handprint
      W.writing(3.6, 1.75, -7.79, 0, T('GET OUT', 'GET OUT'), '#9a0c12', 1.2, 0.4);
      W.interact({ id: 'mirror_hand', x: 4.2, y: 1.4, z: -7.6, r: 0.7, label: T('The bloody mirror', 'Cermin berdarah'), item: 'mirror_hand' });
      W.box(4.0, 0, -7.4, 2.6, 0.8, 0.8, 0x4a3438);                                                  // dressing table
      W.box(3.0, 0.8, -7.3, 0.1, 0.16, 0.05, 0xb0141a, { collide: false });
      W.interact({ id: 'makeup_tube', x: 3.0, y: 0.95, z: -7.2, r: 0.4, label: T('Make-up on the table', 'Solekan di atas meja'), item: 'makeup_tube' });
      W.interact({ id: 'scout_letter', x: 5.1, y: 0.7, z: -7.0, r: 0.5, label: T('Dressing-table drawer', 'Laci meja solek'), item: 'scout_letter' });
      W.box(6.4, 0, -3.8, 0.5, 0.45, 0.3, 0xc2185b, { collide: false });                             // Amira's bag
      W.interact({ id: 'amira_diary', x: 6.4, y: 0.4, z: -3.8, r: 0.5, label: T("Amira's school bag", 'Beg sekolah Amira'), item: 'amira_diary', needsFlag: 'app_open',
        lockedText: T('A pink school bag, zipped shut with a tiny padlock. You need a good reason to open someone\'s bag. (Find stronger evidence first.)', 'Beg sekolah merah jambu, dizip dengan mangga kecil. Anda perlukan sebab kukuh untuk membuka beg orang. (Cari bukti lebih kukuh dahulu.)') });
      W.box(1.8, 0, -6.8, 0.1, 1.2, 0.1, 0x333333); W.box(1.8, 0.6, -6.8, 0.55, 1.2, 0.35, 0x8a8a92, { collide: false, name: 'figure1' }); W.ball(1.8, 1.9, -6.8, 0.17, 0xc8c8c8, { name: 'figure1' });   // mannequin

      /* ================= SOUND & LIGHT BOOTH ================= */
      W.box(4.0, 0, 3.8, 2.0, 0.8, 0.9, 0x2a2f36);                                                   // mixing desk
      [3.3, 3.8, 4.3, 4.8].forEach((x) => W.box(x, 0.8, 3.6, 0.3, 0.05, 0.4, 0x445566, { collide: false }));
      W.box(3.2, 0.8, 4.0, 0.36, 0.03, 0.26, 0x111111, { collide: false });                           // tablet
      W.interact({ id: 'hiro_tablet', x: 3.2, y: 0.95, z: 4.0, r: 0.4, label: T("Hiro's tablet", 'Tablet Hiro'), item: 'hiro_tablet' });
      W.box(5.8, 0, 3.0, 0.5, 0.5, 0.5, 0x333a44); W.box(5.8, 0.5, 3.0, 0.4, 0.3, 0.25, 0x0277bd, { collide: false });   // chair + bag
      W.interact({ id: 'hiro_bag', x: 5.8, y: 0.7, z: 3.0, r: 0.5, label: T("Hiro's tech bag", 'Beg teknik Hiro'), item: 'hiro_bag' });
      W.box(4.0, 1.4, 7.9, 2.4, 1.0, 0.05, 0x10202a, { collide: false });                             // booth window

      /* ================= ELECTRICS ROOM ================= */
      W.box(14.9, 1.4, 0, 0.12, 1.0, 1.2, 0x5a5a50, { collide: false });                              // fuse box
      W.interact({ id: 'fuse_box', x: 14.6, y: 1.4, z: 0, r: 0.7, label: T('Main fuse box', 'Kotak fius utama'), item: 'fuse_box' });
      W.box(10.0, 0, -2.4, 1.4, 0.8, 0.7, 0x4a3a2a); W.box(10.0, 0.8, -2.4, 0.4, 0.03, 0.3, 0xe8e0c8, { collide: false });
      W.interact({ id: 'volkov_log', x: 10.0, y: 0.95, z: -2.4, r: 0.5, label: T("Caretaker's log", 'Log penjaga'), item: 'volkov_log' });
      [0, 0.45, 0.9, 1.35].forEach((y) => W.box(13.6, y, 2.2, 1.2, 0.08, 0.8, 0x6a5a40, { collide: y === 0 }));   // chair stack

      /* ================= PEOPLE ================= */
      W.npc({ id: 'grace', x: -3.6, z: -2.3, rot: Math.PI * 0.7, skin: 0x8a5a3a, shirt: 0x7a5cc0, pants: 0x2c2c3c, hair: 0x111111, scale: 0.98 });
      W.npc({ id: 'amira', x: 2.6, z: -3.4, rot: Math.PI * 0.35, skin: 0xb07a50, shirt: 0xc2185b, pants: 0xc2185b, hair: 0x1a1210, scale: 0.84 });
      W.npc({ id: 'hiro', x: 2.8, z: 5.6, rot: Math.PI * 0.2, skin: 0xe0b894, shirt: 0x0277bd, pants: 0x2c3e50, hair: 0x111111, scale: 0.8 });
      W.npc({ id: 'volkov', x: 12.4, z: -1.6, rot: Math.PI * 1.3, skin: 0xe8c0a0, shirt: 0x5d4037, pants: 0x2a2a2a, hair: 0xdddddd, scale: 1.02, hat: 0x3a3a3a });
      W.npc({ id: 'lucas', x: 11.2, z: 1.6, rot: Math.PI * 1.6, skin: 0xd8a87a, shirt: 0x2e7d32, pants: 0x3a3a4a, hair: 0x3a2a1a, scale: 0.86 });
    }
  };

  /* ====================================================================== PICTURES FOR THIS CASE */
  const A = MF.art, h = A.h;
  A.hand002 = (canvas) => {
    canvas.width = 640; canvas.height = 320; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 640, 320, '#9fb8c8');
    c.fillStyle = 'rgba(150,12,18,0.85)'; h.rect(c, 80, 150, 70, 90, 'rgba(150,12,18,0.85)');                // palm
    [[86, 60], [104, 40], [122, 46], [140, 70]].forEach((f) => h.rect(c, f[0], f[1], 14, 150 - f[1], 'rgba(150,12,18,0.85)'));
    c.fillStyle = '#9fb8c8'; c.fillRect(122, 104, 14, 10);                                                    // ring gap
    h.rect(c, 40, 140, 26, 70, 'rgba(150,12,18,0.85)');                                                        // thumb
    h.rect(c, 200, 30, 50, 260, '#f5e6a8'); for (let i = 0; i <= 20; i++) { const y = 240 - i * 10; h.line(c, 200, y, i % 5 === 0 ? 228 : 216, y, '#333', 2); if (i % 5 === 0) h.text(c, String(i), 236, y + 5, 14, '#222', 'left', true); }
    h.line(c, 104, 240, 196, 240, '#222', 1); h.line(c, 104, 40, 196, 90, '#222', 1);
    h.text(c, 'cm', 236, 22, 14, '#222', 'left', true); h.text(c, 'ring gap →', 150, 112, 13, '#111', 'left', true);
    h.rect(c, 300, 40, 310, 230, '#fffbe8'); h.text(c, 'GLOVE SIZES (hand length)', 316, 70, 16, '#222', 'left', true);
    [['Amira', '15 cm 💍'], ['Lucas', '18 cm'], ['Mr. Volkov', '21 cm'], ['Ms. Adeyemi', '19 cm 💍'], ['Hiro', '15 cm']].forEach((r, i) => { h.text(c, r[0], 320, 108 + i * 32, 18, '#333', 'left', true); h.text(c, r[1], 500, 108 + i * 32, 18, '#7a1a1a', 'left', true); });
  };
  A.tablet002 = (canvas) => {
    canvas.width = 620; canvas.height = 280; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 280, '#1b1f27');
    h.rect(c, 30, 30, 260, 220, '#0b0d12'); h.text(c, '🔒 Enter PIN', 160, 100, 24, '#9fd3ff', 'center', true); [0, 1, 2].forEach((i) => h.rect(c, 100 + i * 44, 140, 32, 40, '#223'));
    h.rect(c, 330, 40, 260, 200, '#ffe97a'); h.text(c, 'PIN = finish my patterns', 345, 78, 18, '#222', 'left', true);
    ['1, 2, 4, ?', '7, 6, 5, ?', '3, 5, 7, ?'].forEach((t, i) => h.text(c, t, 355, 125 + i * 38, 24, '#1a3a7a', 'left', true));
  };
  A.photos.grace002 = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#2a1a18'); h.rect(c, W * 0.1, H * 0.62, W * 0.8, H * 0.38, '#5a3a28');                 // stage
    h.rect(c, 0, 0, W * 0.16, H, '#7a1020'); h.rect(c, W * 0.84, 0, W * 0.16, H, '#7a1020');                       // curtains
    c.fillStyle = 'rgba(255,220,150,0.25)'; c.beginPath(); c.moveTo(W * 0.5, 0); c.lineTo(W * 0.3, H * 0.62); c.lineTo(W * 0.7, H * 0.62); c.fill();
    h.text(c, 'TALENT NIGHT', W * 0.5, H * 0.18, 34, '#ffd27a', 'center', true);
    h.rect(c, W * 0.03, H * 0.7, 46, 60, '#c2185b'); h.circ(c, W * 0.03 + 23, H * 0.67, 15, '#b07a50'); h.rect(c, W * 0.03 + 30, H * 0.74, 18, 26, '#111');   // Amira at the socket
    h.rect(c, W * 0.005, H * 0.86, 14, 14, '#f2f2f2');
    const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.55)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#fff', 'center', true);
  };
  A.photos.cam002 = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#0a120c'); h.rect(c, W * 0.3, H * 0.15, W * 0.4, H * 0.5, '#16261a');                     // mirror
    h.rect(c, W * 0.44, H * 0.4, 50, 150, '#2a3a2e'); h.circ(c, W * 0.44 + 25, H * 0.36, 20, '#2a3a2e');              // small figure
    h.rect(c, W * 0.44 + 44, H * 0.3, 18, 26, '#3a5a40'); h.circ(c, W * 0.44 + 52, H * 0.33, 4, '#e8ffe8');             // raised hand + ring glint
    for (let y = 0; y < H; y += 4) { c.fillStyle = 'rgba(0,0,0,0.16)'; c.fillRect(0, y, W, 1); }
    h.text(c, 'CAM 2  DRESSING RM', 20, 36, 22, '#9affb0', 'left', true); const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.5)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#9affb0', 'center', true);
  };

  MF.registerCase(C);
})();
