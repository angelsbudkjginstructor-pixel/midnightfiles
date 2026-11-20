/* ============================================================================
   CASE 008 — THE BROKEN SCIENCE LAB / MAKMAL SAINS YANG ROSAK   (Science fair night)
   ----------------------------------------------------------------------------
   HIDDEN SOLUTION
   - Maya's water-powered "Hydro-Cell" is due to be judged at 7:50 pm. It worked at 6:30 pm.
   - Lab technician Felix BRANDT has an identical twin, Leo, a rich energy-company judge who barely notices him.
     Felix wants to hand Leo the Hydro-Cell core so Leo will finally be impressed.
   - 6:15 Kofi (12) plays a harmless prank: UV-pen message "I SEE YOU" on the mirror and moves the skeleton.
   - 6:50 Leo joins the other judges in the Fair Hall (badge J2 in; judge camera 7:00; out 7:30).
   - 6:52 Felix badges into the Storeroom (F.B.). 6:55 Ms Rao sees "Felix" in the staff room: it was LEO passing through.
   - 6:58 Felix cuts the main switch (the lab clock, wired in series, stops at 6:58).
   - 7:00 Felix smashes the prototype with the rubber mallet (F.B. engraved) and leaves a thumbprint (a WHORL) on the case glass.
     He splashes a harmless cabbage-juice and baking-soda puddle (green) to look like "poison".
   - 7:05 He hides the core in the skeleton's chest (density-layer lock). 7:08 he badges out.
   TWIST: one man seen in two places is TWO men: identical twins. Their fingerprints are different.
   ============================================================================ */
(function () {
  const kit = MF.kit, T = kit.T, mm = kit.mm, D = kit.doc;
  const C = {
    id: '008', num: 8,
    title: T('The Broken Science Lab', 'Makmal Sains Yang Rosak'),
    tagline: T('A glowing green puddle, a message in the mirror, a skeleton that moved — and a man who was in two places at once.', 'Lopak hijau bercahaya, mesej pada cermin, rangka yang bergerak — dan seorang lelaki yang berada di dua tempat serentak.'),
    place: T('Hartwell School Science Lab', 'Makmal Sains Sekolah Hartwell'),
    premise: T(
      `It is 7:10 pm on Science Fair night. In the lab, Maya's Hydro-Cell is smashed and its glowing core is missing. A green puddle glows on the floor, the mirror says "I SEE YOU", and the plastic skeleton has moved to a new corner. Judging starts at 7:50 pm. Everyone agrees on one thing: technician Felix was in the staff room at 6:55 — yet his badge was in the storeroom. Is it a ghost, poison or something else? Use science to decide: colours, circuits, fingerprints and density never lie.`,
      `Sekarang pukul 7:10 malam pada malam Pameran Sains. Dalam makmal, Hydro-Cell Maya hancur dan terasnya yang bercahaya hilang. Lopak hijau bercahaya di lantai, cermin menulis "I SEE YOU", dan rangka plastik telah berpindah ke sudut baru. Pengadilan bermula pukul 7:50 malam. Semua bersetuju tentang satu perkara: juruteknik Felix berada di bilik kakitangan pukul 6:55 — namun lencananya di stor. Hantu, racun atau sesuatu yang lain? Guna sains untuk memutuskan: warna, litar, cap jari dan ketumpatan tidak pernah berbohong.`),
    mysteryType: 'Sabotage / identical twins',
    subjects: ['science', 'math', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('7:10'), deadline: mm('7:50'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },
    timeUp: { title: T('Judging begins!', 'Pengadilan bermula!'), text: T('The judges walk in and Maya has nothing to show. Name the culprit NOW!', 'Hakim masuk dan Maya tiada apa untuk ditunjukkan. Namakan pelaku SEKARANG!') },

    hidden: {
      culprit: 'felix', what: 'smash_steal', window: [mm('6:52'), mm('7:08')],
      summary: T(
        `Felix wanted to impress his identical twin, judge Leo, so he smashed Maya's Hydro-Cell at 7:00 and stole its core. He cut the main switch at 6:58 (the lab clock stopped), used the mallet marked F.B., splashed a harmless green puddle to scare people and hid the core in the skeleton. His badge puts him in the storeroom 6:52–7:08. Ms Rao saw Leo in the staff room and thought it was Felix. Kofi's UV-pen message was only a prank.`,
        `Felix mahu mengagumkan kembar seiras, hakim Leo, jadi dia menghancurkan Hydro-Cell Maya pukul 7:00 dan mencuri terasnya. Dia memotong suis utama pukul 6:58 (jam makmal berhenti), guna tukul bertanda F.B., menumpahkan lopak hijau tidak berbahaya untuk menakutkan orang dan menyorokkan teras dalam rangka. Lencananya meletakkannya di stor 6:52–7:08. Cik Rao nampak Leo di bilik kakitangan dan menyangka Felix. Mesej pen UV Kofi hanya gurauan.`),
      sequence: [
        [mm('6:15'), T('Kofi writes "I SEE YOU" with a UV pen (a prank).', 'Kofi menulis "I SEE YOU" dengan pen UV (gurauan).')],
        [mm('6:30'), T('The prototype works.', 'Prototaip berfungsi.')],
        [mm('6:52'), T('Felix badges into the Storeroom.', 'Felix mengimbas lencana ke Stor.')],
        [mm('6:58'), T('The main switch is cut: the lab clock stops.', 'Suis utama dipotong: jam makmal berhenti.')],
        [mm('7:00'), T('The prototype is smashed. Leo is on camera with the judges.', 'Prototaip dihancurkan. Leo di kamera bersama hakim.')],
        [mm('7:08'), T('Felix badges out.', 'Felix mengimbas keluar.')]
      ],
      essentialClues: ['broken_prototype', 'mallet', 'stopped_clock', 'badge_reader', 'case_glass', 'felix_note', 'core_found', 'c_felix_alone'],
      misleading: [
        { item: 'c_rao_staff', why: T('Ms Rao honestly saw a man who looked like Felix: it was his twin Leo.', 'Cik Rao jujur nampak lelaki seperti Felix: itu kembarnya Leo.') },
        { item: 'c_kofi_prank', why: T('Kofi did the mirror message and the skeleton, but never touched the prototype.', 'Kofi melakukan mesej cermin dan rangka, tetapi tidak menyentuh prototaip.') },
        { item: 'mirror_uv', why: T('The mirror message is a prank, not the crime.', 'Mesej cermin ialah gurauan, bukan jenayah.') },
        { item: 'c_leo_judge', why: T('Leo looks identical to Felix but was with the judges.', 'Leo kelihatan serupa dengan Felix tetapi bersama hakim.') }
      ]
    },

    people: [
      { id: 'felix', name: 'Felix Brandt', age: 38, role: T('Lab technician', 'Juruteknik makmal'), rel: T("Leo's identical twin", 'Kembar seiras Leo'), color: '#c0562b', suspect: true },
      { id: 'leo', name: 'Dr. Leo Brandt', age: 38, role: T('Guest judge (Brandt Energy)', 'Hakim jemputan (Brandt Energy)'), rel: T("Felix's identical twin", 'Kembar seiras Felix'), color: '#2f6f9e', suspect: true },
      { id: 'maya', name: 'Maya Okafor', age: 13, role: T('Student inventor', 'Pencipta pelajar'), rel: T('Built the Hydro-Cell', 'Membina Hydro-Cell'), color: '#7a5cc0', suspect: true },
      { id: 'rao', name: 'Ms. Priyanka Rao', age: 45, role: T('Head of Science', 'Ketua Sains'), rel: T('Runs the fair', 'Menganjur pameran'), color: '#33a3a3', suspect: true },
      { id: 'kofi', name: 'Kofi Mensah', age: 12, role: T('Student helper, prankster', 'Pembantu pelajar, nakal'), rel: T('Loves UV pens', 'Suka pen UV'), color: '#8a9a5b', suspect: true }
    ],

    items: [
      { id: 'broken_prototype', type: 'physical', icon: '🔋', title: T('The smashed Hydro-Cell', 'Hydro-Cell yang hancur'), where: T('Main Lab bench', 'Bangku Makmal Utama'),
        desc: T(`The prototype is in pieces. The case was hit from ABOVE with something soft but heavy (rubber marks, no sharp cuts). The glowing core is gone from its holder.`, `Prototaip berkecai. Kotak dipukul dari ATAS dengan sesuatu yang lembut tetapi berat (kesan getah, tiada potongan tajam). Teras bercahaya hilang dari pemegangnya.`),
        inspect: { kind: 'doc', html: D('🔋 <b>Hydro-Cell</b><br>Damage: rubber-mallet marks<br>Core holder: EMPTY<br>Power wires: cut cleanly<br><small>The core was taken on purpose. Someone knew exactly what to take.</small>', '🔋 <b>Hydro-Cell</b><br>Kerosakan: kesan tukul getah<br>Pemegang teras: KOSONG<br>Wayar kuasa: dipotong kemas<br><small>Teras diambil dengan sengaja. Seseorang tahu tepat apa untuk diambil.</small>') } },
      { id: 'proto_log', type: 'document', icon: '📒', title: T("Maya's test log", 'Log ujian Maya'), where: T('Main Lab desk', 'Meja Makmal Utama'),
        desc: T(`Maya's careful notes of her last test.`, `Nota teliti Maya tentang ujian terakhirnya.`),
        inspect: { kind: 'doc', html: D('<b>TEST LOG</b><br>6:30 pm — Hydro-Cell lights the LED for 10 minutes ✔<br>6:40 pm — Locked in the display case<br>Case key: Felix and Ms. Rao only', '<b>LOG UJIAN</b><br>6:30 mlm — Hydro-Cell menyalakan LED selama 10 minit ✔<br>6:40 mlm — Dikunci dalam kotak paparan<br>Kunci kotak: Felix dan Cik Rao sahaja') } },
      { id: 'stopped_clock', type: 'device', icon: '🕰️', title: T('The stopped lab clock', 'Jam makmal yang berhenti'), where: T('Main Lab wall', 'Dinding Makmal Utama'),
        desc: T(`A wall clock that stopped at exactly 6:58. It is wired in the same circuit as the lab lights.`, `Jam dinding yang berhenti tepat pukul 6:58. Ia disambung dalam litar yang sama dengan lampu makmal.`),
        puzzle: 'pz_circuit', inspect: { kind: 'puzzle-doc',
          html: D('🕰️ <b>The clock</b><br>Stopped at <b>6:58</b>.<br>Wiring card: "Lights → Clock → Main switch (in the Storeroom). All in ONE loop."', '🕰️ <b>Jam itu</b><br>Berhenti pada <b>6:58</b>.<br>Kad pendawaian: "Lampu → Jam → Suis utama (di Stor). Semua dalam SATU gelung."'),
          fixedHtml: D('🕰️ One loop = a SERIES circuit. Cut it anywhere and everything stops. The clock froze the moment the power was cut: <b>6:58</b>. ✔', '🕰️ Satu gelung = litar SIRI. Potong di mana-mana dan semuanya berhenti. Jam beku sebaik kuasa dipotong: <b>6:58</b>. ✔') } },
      { id: 'green_puddle', type: 'physical', icon: '🧪', title: T('The glowing green puddle', 'Lopak hijau bercahaya'), where: T('Main Lab floor', 'Lantai Makmal Utama'),
        desc: T(`A green puddle on the floor beside a cracked jar labelled "RED CABBAGE JUICE". It smells like a salad. A small pH colour chart is taped to the bench.`, `Lopak hijau di lantai di sebelah balang retak berlabel "JUS KOBIS MERAH". Ia berbau seperti salad. Carta warna pH kecil dilekat pada bangku.`),
        puzzle: 'pz_ph', inspect: { kind: 'puzzle-doc',
          html: D('🧪 <b>pH CHART (red cabbage juice)</b><br>🔴 Red = ACID (like lemon)<br>🟣 Purple = NEUTRAL (like water)<br>🟢 Green = BASE (like baking soda)<br><small>The puddle is GREEN.</small>', '🧪 <b>CARTA pH (jus kobis merah)</b><br>🔴 Merah = ASID (seperti lemon)<br>🟣 Ungu = NEUTRAL (seperti air)<br>🟢 Hijau = BES (seperti soda penaik)<br><small>Lopak itu HIJAU.</small>'),
          fixedHtml: D('🧪 Cabbage juice + baking soda = a harmless GREEN base. Someone mixed it on purpose to look like poison. ✔', '🧪 Jus kobis + soda penaik = BES HIJAU tidak berbahaya. Seseorang mencampurnya dengan sengaja supaya kelihatan seperti racun. ✔') } },
      /* PREP CORRIDOR */
      { id: 'mallet', type: 'physical', icon: '🔨', title: T('Rubber mallet', 'Tukul getah'), where: T('Prep corridor floor', 'Lantai koridor persediaan'),
        desc: T(`A heavy black rubber mallet with "F.B." burned into the handle. A tiny piece of the Hydro-Cell's blue plastic is stuck to it.`, `Tukul getah hitam berat dengan "F.B." terbakar pada pemegang. Secebis plastik biru Hydro-Cell melekat padanya.`),
        inspect: { kind: 'doc', html: D('🔨 <b>Mallet — "F.B."</b><br>Blue plastic stuck to the head (same as the prototype case).<br><small>F.B. = Felix Brandt. Leo\'s initials would be L.B.</small>', '🔨 <b>Tukul — "F.B."</b><br>Plastik biru melekat pada kepala (sama seperti kotak prototaip).<br><small>F.B. = Felix Brandt. Inisial Leo ialah L.B.</small>') } },
      { id: 'kofi_pen', type: 'physical', icon: '🖊️', title: T('A UV pen', 'Pen UV'), where: T('Prep corridor floor', 'Lantai koridor persediaan'),
        desc: T(`A small purple pen with a UV light on the cap. "K.M." is scratched on the side.`, `Pen ungu kecil dengan lampu UV pada penutup. "K.M." tercalar di tepi.`),
        inspect: { kind: 'doc', html: D('🖊️ <b>UV pen, "K.M."</b><br>Writes invisible ink that glows under UV light.<br><small>This made the "I SEE YOU" on the mirror. K.M. = Kofi Mensah.</small>', '🖊️ <b>Pen UV, "K.M."</b><br>Menulis dakwat tak kelihatan yang bercahaya di bawah UV.<br><small>Ini membuat "I SEE YOU" pada cermin. K.M. = Kofi Mensah.</small>') } },
      { id: 'badge_reader', type: 'device', icon: '💳', title: T('Door badge reader', 'Pembaca lencana pintu'), where: T('Prep corridor wall', 'Dinding koridor persediaan'),
        desc: T(`Every door scan is recorded with a time. This is the log for tonight.`, `Setiap imbasan pintu direkod dengan masa. Ini log untuk malam ini.`),
        puzzle: 'pz_badge', inspect: { kind: 'puzzle-doc',
          html: D('💳 <b>BADGE LOG</b><br><b>Badge F.B.</b> — Storeroom IN 6:52 pm · OUT 7:08 pm<br><b>Badge J2 (Judge Leo)</b> — Fair Hall IN 6:50 pm · OUT 7:30 pm<br>Ms Rao — Staff Room 6:30–7:20<br><small>Badges open doors; a person must carry them.</small>', '💳 <b>LOG LENCANA</b><br><b>Lencana F.B.</b> — Stor MASUK 6:52 mlm · KELUAR 7:08 mlm<br><b>Lencana J2 (Hakim Leo)</b> — Dewan Pameran MASUK 6:50 mlm · KELUAR 7:30 mlm<br>Cik Rao — Bilik Kakitangan 6:30–7:20<br><small>Lencana membuka pintu; seseorang mesti membawanya.</small>'),
          fixedHtml: D('💳 Felix: 6:52 → 7:08 = <b>16 minutes</b> in the storeroom.<br>Leo: 6:50 → 7:30 = <b>40 minutes</b> in the Fair Hall.<br>At 7:00 only <b>Felix</b> could be at the lab. ✔', '💳 Felix: 6:52 → 7:08 = <b>16 minit</b> di stor.<br>Leo: 6:50 → 7:30 = <b>40 minit</b> di Dewan Pameran.<br>Pukul 7:00 hanya <b>Felix</b> boleh berada di makmal. ✔') } },
      { id: 'mirror_uv', type: 'physical', icon: '🪞', title: T('Mirror with glowing letters', 'Cermin dengan huruf bercahaya'), where: T('Prep corridor wall', 'Dinding koridor persediaan'),
        desc: T(`Under the UV torch the mirror shows "I SEE YOU" in glowing purple letters, written in tiny uneven handwriting.`, `Di bawah lampu UV cermin menunjukkan "I SEE YOU" dengan huruf ungu bercahaya, dalam tulisan kecil tidak rata.`),
        inspect: { kind: 'doc', html: D('🪞 <b>"I SEE YOU"</b><br>Glowing UV ink, small unsteady letters, written at a child\'s height.<br><small>Scary! But a grown-up would write higher up.</small>', '🪞 <b>"I SEE YOU"</b><br>Dakwat UV bercahaya, huruf kecil tidak stabil, ditulis pada ketinggian kanak-kanak.<br><small>Menakutkan! Tetapi orang dewasa akan menulis lebih tinggi.</small>') } },
      /* STOREROOM */
      { id: 'skeleton', type: 'physical', icon: '💀', title: T('"Mr. Bones" the plastic skeleton', '"Encik Tulang" rangka plastik'), where: T('Storeroom corner', 'Sudut stor'),
        desc: T(`The classroom skeleton, moved into a corner. His chest has a small door with a jar-shaped lock: three coloured layers must be set in the right order.`, `Rangka bilik darjah, dipindah ke sudut. Dadanya ada pintu kecil dengan kunci berbentuk balang: tiga lapisan warna mesti disusun dalam urutan betul.`),
        puzzle: 'pz_density', inspect: { kind: 'puzzle-doc',
          html: D('💀 <b>Chest lock — layer jar</b><br>Liquids: 🍯 honey · 💧 water · 🛢️ oil<br><small>Density (grams per cup): honey 340 g · water 240 g · oil 220 g. The heavy liquid sinks, the light one floats.</small>', '💀 <b>Kunci dada — balang lapisan</b><br>Cecair: 🍯 madu · 💧 air · 🛢️ minyak<br><small>Ketumpatan (gram secawan): madu 340 g · air 240 g · minyak 220 g. Cecair berat tenggelam, ringan terapung.</small>'),
          fixedHtml: D('💀 Bottom: honey. Middle: water. Top: oil. The lock clicks: the glowing core is inside! ✔', '💀 Bawah: madu. Tengah: air. Atas: minyak. Kunci berbunyi klik: teras bercahaya ada di dalam! ✔') } },
      { id: 'storeroom_log', type: 'document', icon: '📦', title: T('Storeroom hook board', 'Papan cangkuk stor'), where: T('Storeroom wall', 'Dinding stor'),
        desc: T(`A board with a hook for each tool. One hook is empty.`, `Papan dengan cangkuk untuk setiap alat. Satu cangkuk kosong.`),
        inspect: { kind: 'doc', html: D('<b>TOOL HOOKS</b><br>Hook 4: RUBBER MALLET — <b>EMPTY</b><br>Main switch box: lid OPEN, switch OFF<br><small>The main switch is in this room.</small>', '<b>CANGKUK ALAT</b><br>Cangkuk 4: TUKUL GETAH — <b>KOSONG</b><br>Kotak suis utama: penutup TERBUKA, suis MATI<br><small>Suis utama ada di bilik ini.</small>') } },
      /* STAFF ROOM */
      { id: 'fair_program', type: 'document', icon: '📰', title: T('Science Fair programme', 'Program Pameran Sains'), where: T('Staff room table', 'Meja bilik kakitangan'),
        desc: T(`The printed programme for tonight, with a photo and names.`, `Program bercetak malam ini, dengan gambar dan nama.`),
        inspect: { kind: 'doc', html: D('<b>HARTWELL SCIENCE FAIR</b><br>Guest judge: <b>Dr. Leo Brandt</b>, Brandt Energy<br>Lab technician: <b>Felix Brandt</b><br><i>"Brothers, and TWINS! They look exactly the same: only the badge tells them apart."</i>', '<b>PAMERAN SAINS HARTWELL</b><br>Hakim jemputan: <b>Dr. Leo Brandt</b>, Brandt Energy<br>Juruteknik makmal: <b>Felix Brandt</b><br><i>"Adik-beradik, dan KEMBAR! Mereka kelihatan sama persis: hanya lencana membezakan mereka."</i>') } },
      { id: 'staff_rota', type: 'document', icon: '📋', title: T('Staff rota', 'Rota kakitangan'), where: T('Staff room wall', 'Dinding bilik kakitangan'),
        desc: T(`Who works where tonight.`, `Siapa bekerja di mana malam ini.`),
        inspect: { kind: 'doc', html: D('<b>ROTA</b><br>Felix: lab + storeroom duty 6:30–8:00<br>Ms. Rao: staff room and fair desk<br>Judges: Fair Hall 6:50–7:30', '<b>ROTA</b><br>Felix: tugas makmal + stor 6:30–8:00<br>Cik Rao: bilik kakitangan dan meja pameran<br>Hakim: Dewan Pameran 6:50–7:30') } },
      /* FAIR HALL */
      { id: 'case_glass', type: 'physical', icon: '🔍', title: T('The display case glass', 'Kaca kotak paparan'), where: T('Fair Hall display table', 'Meja paparan Dewan Pameran'),
        desc: T(`The glass lid of Maya's empty display case. A clear thumbprint is on it, powdered grey.`, `Penutup kaca kotak paparan Maya yang kosong. Cap ibu jari jelas ada padanya, diserbuk kelabu.`),
        puzzle: 'pz_print', inspect: { kind: 'puzzle-doc',
          html: D('🔍 <b>FINGERPRINT TYPES</b><br>🔁 <b>LOOP</b> — lines go in and out like a hairpin<br>🌀 <b>WHORL</b> — lines make circles like a spiral<br>⛰️ <b>ARCH</b> — lines rise like a little hill<br><small>The print on the glass: <b>circles (a spiral)</b>.<br>Card: Felix R-thumb = WHORL · Leo R-thumb = LOOP</small>', '🔍 <b>JENIS CAP JARI</b><br>🔁 <b>LOOP</b> — garis masuk dan keluar seperti sepit<br>🌀 <b>WHORL</b> — garis membentuk bulatan seperti lingkaran<br>⛰️ <b>ARCH</b> — garis naik seperti bukit kecil<br><small>Cap pada kaca: <b>bulatan (lingkaran)</b>.<br>Kad: Ibu jari kanan Felix = WHORL · Leo = LOOP</small>'),
          fixedHtml: D('🔍 The print is a <b>WHORL</b> = Felix\'s right thumb, NOT Leo\'s (loop). Identical twins have different fingerprints! ✔', '🔍 Cap itu ialah <b>WHORL</b> = ibu jari kanan Felix, BUKAN Leo (loop). Kembar seiras ada cap jari berbeza! ✔') } },
      { id: 'judge_sheet', type: 'document', icon: '🗒️', title: T("Judges' meeting sheet", 'Helaian mesyuarat hakim'), where: T('Fair Hall table', 'Meja Dewan Pameran'),
        desc: T(`The signed attendance sheet for the judges' meeting.`, `Helaian kehadiran bertandatangan untuk mesyuarat hakim.`),
        inspect: { kind: 'doc', html: D('<b>JUDGES\' MEETING</b><br>6:50–7:30 pm, Fair Hall<br>Signed: Dr. L. Brandt ✔ · Dr. Chen ✔ · Prof. Lim ✔<br><small>No judge left the room.</small>', '<b>MESYUARAT HAKIM</b><br>6:50–7:30 mlm, Dewan Pameran<br>Ditandatangani: Dr. L. Brandt ✔ · Dr. Chen ✔ · Prof. Lim ✔<br><small>Tiada hakim meninggalkan bilik.</small>') } },
      { id: 'felix_note', type: 'document', icon: '✉️', title: T("Felix's note to Leo", 'Nota Felix kepada Leo'), where: T('Inside the skeleton', 'Dalam rangka'),
        desc: T(`A folded note inside the skeleton's chest, next to the glowing core.`, `Nota berlipat dalam dada rangka, di sebelah teras bercahaya.`),
        inspect: { kind: 'doc', html: D('<b>Leo —</b><br>"I will bring you Maya\'s core before the judging. You always say I never make anything. Maybe now you will finally be proud of me.<br>— F."', '<b>Leo —</b><br>"Saya akan bawa teras Maya sebelum pengadilan. Awak selalu kata saya tidak pernah buat apa-apa. Mungkin kali ini awak akan bangga dengan saya.<br>— F."') } },
      { id: 'core_found', type: 'physical', icon: '🔆', title: T('The glowing Hydro-Cell core', 'Teras Hydro-Cell bercahaya'), where: T("Inside Mr. Bones's chest", 'Dalam dada Encik Tulang'),
        desc: T(`The small glass core, still glowing faintly blue, wrapped in a lab towel stamped "F. BRANDT".`, `Teras kaca kecil, masih bercahaya biru samar, dibalut tuala makmal bercop "F. BRANDT".`),
        inspect: { kind: 'doc', html: D('🔆 <b>The core</b><br>Towel stamped <b>F. BRANDT</b><br><small>The person who hid it also kept the evidence tidy... and wrote a note.</small>', '🔆 <b>Teras itu</b><br>Tuala bercop <b>F. BRANDT</b><br><small>Orang yang menyorokkannya juga menyimpan bukti dengan kemas... dan menulis nota.</small>') } },
      { id: 'judge_cam', type: 'photo', icon: '📸', photo: true, title: T('Fair Hall camera, 7:00 pm', 'Kamera Dewan Pameran, 7:00 mlm'), art: 'judge_cam', stampT: mm('7:00'), stampLabel: T('Fair Hall camera (correct time)', 'Kamera Dewan Pameran (masa betul)'),
        desc: T(`A photo of the judges' table in the Fair Hall.`, `Gambar meja hakim di Dewan Pameran.`),
        zoomNotice: T(`You zoom in: Dr. Leo Brandt sits at the judges' table with a "JUDGE" badge, talking to two other judges. It is exactly 7:00 pm.`, `Anda zum: Dr. Leo Brandt duduk di meja hakim dengan lencana "HAKIM", bercakap dengan dua hakim lain. Tepat pukul 7:00 mlm.`),
        timeline: T('Leo sits with the judges at 7:00 pm.', 'Leo duduk bersama hakim pukul 7:00 mlm.') },

      { id: 'inf_ph', kind: 'inference', type: 'deduction', icon: '💡', title: T('The green glow is a harmless pH scare, not poison', 'Cahaya hijau ialah gurauan pH tidak berbahaya, bukan racun'), desc: T(`Cabbage juice turns green with a base. It is a salad, not poison. Someone made it to scare people.`, `Jus kobis bertukar hijau dengan bes. Ia salad, bukan racun. Seseorang membuatnya untuk menakutkan orang.`) },
      { id: 'inf_clock', kind: 'inference', type: 'deduction', icon: '💡', title: T('The power was cut at 6:58 from the storeroom', 'Kuasa dipotong pukul 6:58 dari stor'), desc: T(`The clock is in series with the lights and the main switch, which is in the storeroom. It stopped when the switch was thrown: 6:58.`, `Jam bersiri dengan lampu dan suis utama, yang ada di stor. Ia berhenti apabila suis ditutup: 6:58.`) },
      { id: 'inf_badge', kind: 'inference', type: 'deduction', icon: '💡', title: T('At 7:00 Felix was in the storeroom; Leo was with the judges', 'Pukul 7:00 Felix di stor; Leo bersama hakim'), desc: T(`Badges: F.B. in the storeroom 6:52–7:08; J2 in the Fair Hall 6:50–7:30. The camera confirms Leo at 7:00.`, `Lencana: F.B. di stor 6:52–7:08; J2 di Dewan Pameran 6:50–7:30. Kamera mengesahkan Leo pukul 7:00.`) },
      { id: 'inf_print', kind: 'inference', type: 'deduction', icon: '💡', title: T('The thumbprint on the glass is Felix\'s WHORL, not Leo\'s loop', 'Cap ibu jari pada kaca ialah WHORL Felix, bukan loop Leo'), desc: T(`Identical twins have identical DNA but different fingerprints. This spiral is Felix's.`, `Kembar seiras ada DNA sama tetapi cap jari berbeza. Lingkaran ini milik Felix.`) },

      { id: 'c_felix_alone', kind: 'claim', person: 'felix', t: mm('6:55'), type: 'statement', icon: '💬', title: T('Felix: "At 6:55 I was in the staff room, ask Ms. Rao!"', 'Felix: "Pukul 6:55 saya di bilik kakitangan, tanya Cik Rao!"'), desc: T('He says he has an alibi.', 'Dia kata dia ada alibi.') },
      { id: 'c_felix_store', kind: 'claim', person: 'felix', t: 0, type: 'statement', icon: '💬', title: T('Felix: "I never went in the storeroom tonight."', 'Felix: "Saya tidak masuk stor malam ini."'), desc: T('He says he stayed out of the storeroom.', 'Dia kata dia tidak masuk stor.') },
      { id: 'c_felix_mallet', kind: 'claim', person: 'felix', t: 0, type: 'statement', icon: '💬', title: T('Felix: "That mallet could belong to anyone."', 'Felix: "Tukul itu boleh milik sesiapa."'), desc: T('He says "F.B." means nothing.', 'Dia kata "F.B." tidak bermakna.') },
      { id: 'c_leo_judge', kind: 'claim', person: 'leo', t: mm('7:00'), type: 'statement', icon: '💬', title: T('Leo: "I sat with the judges from 6:50 to 7:30."', 'Leo: "Saya duduk bersama hakim dari 6:50 hingga 7:30."'), desc: T('He says he never left the Fair Hall.', 'Dia kata dia tidak keluar dari Dewan Pameran.') },
      { id: 'c_rao_staff', kind: 'claim', person: 'rao', t: mm('6:55'), type: 'statement', icon: '💬', title: T('Rao: "I saw Felix in the staff room at 6:55."', 'Rao: "Saya nampak Felix di bilik kakitangan pukul 6:55."'), desc: T('She believes she saw the technician.', 'Dia percaya dia nampak juruteknik.') },
      { id: 'c_kofi_prank', kind: 'claim', person: 'kofi', t: mm('6:15'), type: 'statement', icon: '💬', title: T('Kofi: "I only did the mirror message. I never touched the prototype!"', 'Kofi: "Saya cuma buat mesej cermin. Saya tidak sentuh prototaip!"'), desc: T('He admits a harmless prank.', 'Dia mengaku gurauan tidak berbahaya.') },
      { id: 'c_maya_test', kind: 'claim', person: 'maya', t: mm('6:30'), type: 'statement', icon: '💬', title: T('Maya: "My Hydro-Cell worked perfectly at 6:30."', 'Maya: "Hydro-Cell saya berfungsi sempurna pukul 6:30."'), desc: T('She tested it herself.', 'Dia menguji sendiri.') }
    ],

    pairs: [
      { a: 'c_felix_alone', b: 'badge_reader', type: 'contradiction', person: 'felix', requires: ['badge_solved'], text: T('Felix says he was in the staff room at 6:55. His own badge F.B. was in the storeroom from 6:52 to 7:08.', 'Felix kata dia di bilik kakitangan pukul 6:55. Lencananya F.B. di stor dari 6:52 hingga 7:08.'), explain: T('A badge opens doors only when its owner carries it.', 'Lencana membuka pintu hanya apabila pemiliknya membawanya.') },
      { a: 'c_felix_store', b: 'storeroom_log', type: 'contradiction', person: 'felix', text: T('The mallet hook in the storeroom is empty and the main switch is OFF.', 'Cangkuk tukul di stor kosong dan suis utama MATI.'), explain: T('Someone was in there, and Felix has the key.', 'Seseorang ada di situ, dan Felix ada kunci.') },
      { a: 'c_felix_mallet', b: 'mallet', type: 'contradiction', person: 'felix', text: T('"F.B." burned into the mallet, with blue plastic from the prototype on the head.', '"F.B." terbakar pada tukul, dengan plastik biru prototaip pada kepala.'), explain: T('F.B. = Felix Brandt.', 'F.B. = Felix Brandt.') },
      { a: 'c_felix_alone', b: 'case_glass', type: 'contradiction', person: 'felix', requires: ['print_solved'], text: T('A WHORL thumbprint on the glass matches Felix, not Leo.', 'Cap ibu jari WHORL pada kaca sepadan dengan Felix, bukan Leo.'), explain: T('Identical twins have different fingerprints.', 'Kembar seiras ada cap jari berbeza.') },
      { a: 'c_rao_staff', b: 'fair_program', type: 'contradiction', person: 'rao', text: T('Ms Rao saw a man who looks like Felix at 6:55. The programme shows Felix has an identical twin, Leo, a guest in the building.', 'Cik Rao nampak lelaki seperti Felix pukul 6:55. Program menunjukkan Felix ada kembar seiras, Leo, tetamu di bangunan itu.'), explain: T('She was honest but mixed up the twins.', 'Dia jujur tetapi tersilap kembar itu.') },
      { a: 'c_leo_judge', b: 'judge_cam', type: 'support', person: 'leo', text: T('The 7:00 photo shows Leo at the judges\' table.', 'Gambar 7:00 menunjukkan Leo di meja hakim.') },
      { a: 'c_leo_judge', b: 'judge_sheet', type: 'support', person: 'leo', text: T('The signed sheet says no judge left the room.', 'Helaian bertandatangan kata tiada hakim keluar bilik.') },
      { a: 'c_kofi_prank', b: 'kofi_pen', type: 'support', person: 'kofi', requires: ['ph_solved'], text: T('His "K.M." UV pen explains the mirror message.', 'Pen UV "K.M." menerangkan mesej cermin.') },
      { a: 'c_maya_test', b: 'proto_log', type: 'support', person: 'maya', text: T('Her test log says it worked at 6:30.', 'Log ujiannya kata ia berfungsi 6:30.') }
    ],

    puzzles: {
      pz_ph: { subject: 'science', title: T('Read the colour chart', 'Baca carta warna'), grants: { flags: ['ph_solved'], items: ['inf_ph'] }, tokens: 0,
        intro: T('Red cabbage juice is an indicator: it changes colour with acids and bases.', 'Jus kobis merah ialah penunjuk: ia bertukar warna dengan asid dan bes.'),
        steps: [
          { type: 'choice', q: T('The puddle is GREEN. What does the chart say it is?', 'Lopak itu HIJAU. Apa kata carta ia ialah?'), options: [T('An acid', 'Asid'), T('Neutral', 'Neutral'), T('A base', 'Bes')], answer: 2, hints: [T('Red = acid, purple = neutral, green = ?', 'Merah = asid, ungu = neutral, hijau = ?')] },
          { type: 'choice', q: T('Which kitchen item makes cabbage juice turn green?', 'Barang dapur mana menjadikan jus kobis hijau?'), options: [T('Lemon juice', 'Jus lemon'), T('Baking soda', 'Soda penaik'), T('Plain water', 'Air kosong')], answer: 1, hints: [T('Baking soda is a base.', 'Soda penaik ialah bes.')] },
          { type: 'choice', q: T('So is the glowing puddle poison?', 'Jadi adakah lopak bercahaya itu racun?'), options: [T('No: it is harmless cabbage juice and baking soda, made to scare people', 'Tidak: ia jus kobis dan soda penaik tidak berbahaya, dibuat untuk menakutkan orang'), T('Yes, deadly', 'Ya, maut'), T('It is a ghost', 'Ia hantu')], answer: 0, hints: [T('It smells like a salad.', 'Ia berbau seperti salad.')] }
        ],
        after: T('The "poison" is a harmless salad trick. The real danger is somewhere else!', '"Racun" ialah helah salad tidak berbahaya. Bahaya sebenar di tempat lain!') },
      pz_circuit: { subject: 'science', title: T('Why did the clock stop?', 'Kenapa jam berhenti?'), grants: { flags: ['circuit_solved'], items: ['inf_clock'] }, tokens: 1,
        intro: T('A series circuit is ONE loop. If the loop is broken, everything stops.', 'Litar siri ialah SATU gelung. Jika gelung putus, semuanya berhenti.'),
        steps: [
          { type: 'choice', q: T('Lights, clock and main switch are in ONE loop. What happens when the switch is turned OFF?', 'Lampu, jam dan suis utama dalam SATU gelung. Apa berlaku apabila suis dimatikan?'), options: [T('Everything in the loop stops', 'Semua dalam gelung berhenti'), T('Only the lights stop', 'Hanya lampu berhenti'), T('Nothing changes', 'Tiada perubahan')], answer: 0, hints: [T('Electricity flows around ONE loop. Break it anywhere and it stops everywhere.', 'Elektrik mengalir dalam SATU gelung. Putuskan di mana-mana dan ia berhenti di mana-mana.')] },
          { type: 'choice', q: T('The clock stopped at 6:58. What does that tell you?', 'Jam berhenti pukul 6:58. Apa itu beritahu anda?'), options: [T('The time the power was cut', 'Masa kuasa dipotong'), T('The time the fair opens', 'Masa pameran dibuka'), T('Nothing at all', 'Tiada apa-apa')], answer: 0, hints: [T('A clock without power stays at the time it lost power.', 'Jam tanpa kuasa kekal pada masa ia kehilangan kuasa.')] },
          { type: 'choice', q: T('The main switch is in the Storeroom. Where must the saboteur have gone at 6:58?', 'Suis utama di Stor. Ke mana penyabotaj pergi pukul 6:58?'), options: [T('The Storeroom', 'Stor'), T('The Fair Hall', 'Dewan Pameran'), T('The staff room', 'Bilik kakitangan')], answer: 0, hints: [T('Switches are where the switch box is.', 'Suis ada di tempat kotak suis.')] }
        ],
        after: T('Someone stood in the Storeroom at 6:58 and threw the switch. You earn 1 hint token!', 'Seseorang berdiri di Stor pukul 6:58 dan menutup suis. Anda dapat 1 token petunjuk!') },
      pz_badge: { subject: 'math', title: T('Who could be where?', 'Siapa boleh di mana?'), grants: { flags: ['badge_solved'], items: ['inf_badge'] }, tokens: 0,
        intro: T('Work out how long each badge stayed in its room.', 'Kira berapa lama setiap lencana kekal di biliknya.'),
        steps: [
          { type: 'number', q: T('Felix\'s badge: Storeroom IN 6:52, OUT 7:08. How many MINUTES?', 'Lencana Felix: Stor MASUK 6:52, KELUAR 7:08. Berapa MINIT?'), answer: 16, options: [8, 14, 16, 18], unit: T('minutes', 'minit'), hints: [T('6:52 → 7:00 is 8 minutes. 7:00 → 7:08 is 8 more.', '6:52 → 7:00 ialah 8 minit. 7:00 → 7:08 ialah 8 lagi.')] },
          { type: 'number', q: T('Leo\'s badge: Fair Hall IN 6:50, OUT 7:30. How many MINUTES?', 'Lencana Leo: Dewan Pameran MASUK 6:50, KELUAR 7:30. Berapa MINIT?'), answer: 40, options: [30, 35, 40, 45], unit: T('minutes', 'minit'), hints: [T('6:50 → 7:30 is 40 minutes.', '6:50 → 7:30 ialah 40 minit.')] },
          { type: 'choice', q: T('At 7:00 pm, which twin could be near the lab and storeroom?', 'Pukul 7:00 mlm, kembar mana boleh berada dekat makmal dan stor?'), options: ['Felix', 'Leo'], answer: 'Felix', hints: [T('Leo was in the Fair Hall until 7:30.', 'Leo di Dewan Pameran sehingga 7:30.')] }
        ],
        after: T('At 7:00 only Felix was free to be at the lab. Leo was with the judges!', 'Pukul 7:00 hanya Felix bebas berada di makmal. Leo bersama hakim!') },
      pz_print: { subject: 'science', title: T('Match the fingerprint', 'Padankan cap jari'), grants: { flags: ['print_solved'], items: ['inf_print'] }, tokens: 0,
        intro: T('Fingerprints come in three main types. Read the card.', 'Cap jari ada tiga jenis utama. Baca kad.'),
        steps: [
          { type: 'choice', q: T('Which fingerprint type has lines that make CIRCLES (a spiral)?', 'Jenis cap jari mana ada garisan yang membentuk BULATAN (lingkaran)?'), options: ['Loop', 'Whorl', 'Arch'], answer: 'Whorl', hints: [T('Whorl = swirl.', 'Whorl = pusaran.')] },
          { type: 'choice', q: T('Identical twins have the same DNA. Do they have the same fingerprints?', 'Kembar seiras ada DNA sama. Adakah cap jari mereka sama?'), options: [T('Yes, exactly the same', 'Ya, betul-betul sama'), T('No, fingerprints are different', 'Tidak, cap jari berbeza')], answer: 1, hints: [T('Fingerprints form in the womb and are different even in twins.', 'Cap jari terbentuk dalam kandungan dan berbeza walaupun pada kembar.')] },
          { type: 'choice', q: T('The glass print is a WHORL. Felix = whorl, Leo = loop. Whose print is it?', 'Cap pada kaca ialah WHORL. Felix = whorl, Leo = loop. Cap siapa?'), options: ['Felix', 'Leo', 'Maya'], answer: 'Felix', hints: [T('Match the type: whorl.', 'Padankan jenis: whorl.')] }
        ],
        after: T('The thumbprint is Felix\'s! Twins can look alike but their fingerprints never match.', 'Cap ibu jari itu milik Felix! Kembar boleh kelihatan serupa tetapi cap jari mereka tidak pernah sama.') },
      pz_density: { subject: 'science', title: T('Set the layer lock', 'Tetapkan kunci lapisan'), grants: { flags: ['density_solved'], items: ['core_found', 'felix_note'] }, tokens: 0,
        intro: T('Heavier (denser) liquids sink. Lighter ones float on top.', 'Cecair lebih berat (padat) tenggelam. Yang ringan terapung di atas.'),
        steps: [
          { type: 'choice', q: T('Which liquid is the HEAVIEST per cup (densest)?', 'Cecair mana PALING BERAT secawan (paling padat)?'), options: [T('Honey (340 g)', 'Madu (340 g)'), T('Water (240 g)', 'Air (240 g)'), T('Oil (220 g)', 'Minyak (220 g)')], answer: 0, hints: [T('Find the biggest number of grams.', 'Cari bilangan gram terbesar.')] },
          { type: 'choice', q: T('Which liquid floats on TOP?', 'Cecair mana terapung di ATAS?'), options: [T('Honey', 'Madu'), T('Water', 'Air'), T('Oil', 'Minyak')], answer: 2, hints: [T('The lightest one floats.', 'Yang paling ringan terapung.')] },
          { type: 'choice', q: T('Order from BOTTOM to TOP?', 'Susunan dari BAWAH ke ATAS?'), options: [T('Honey, water, oil', 'Madu, air, minyak'), T('Oil, water, honey', 'Minyak, air, madu'), T('Water, honey, oil', 'Air, madu, minyak')], answer: 0, hints: [T('Heaviest at the bottom, lightest on top.', 'Paling berat di bawah, paling ringan di atas.')] }
        ],
        after: T('Click! Inside the skeleton\'s chest: the glowing core and a folded note!', 'Klik! Dalam dada rangka: teras bercahaya dan nota berlipat!') }
    },

    questions: [
      { id: 'q_how', title: T('1. What happened to the Hydro-Cell?', '1. Apa berlaku kepada Hydro-Cell?'),
        options: [{ id: 'accident', text: T('It broke by accident.', 'Ia pecah secara tidak sengaja.') }, { id: 'ghost', text: T('The lab ghost smashed it.', 'Hantu makmal menghancurkannya.') }, { id: 'smash_steal', text: T('Someone smashed it with a mallet and stole the core.', 'Seseorang menghancurkannya dengan tukul dan mencuri teras.'), correct: true }, { id: 'prank', text: T('It was Kofi\'s prank.', 'Ia gurauan Kofi.') }],
        needs: [['broken_prototype', 'mallet'], ['stopped_clock', 'inf_clock']], needsFlags: ['circuit_solved'], hints: [T('Look at the damage, the mallet and the stopped clock.', 'Lihat kerosakan, tukul dan jam yang berhenti.')] },
      { id: 'q_green', title: T('2. What are the glowing green puddle and the mirror message?', '2. Apakah lopak hijau bercahaya dan mesej cermin?'),
        options: [{ id: 'poison', text: T('Poison from the lab.', 'Racun dari makmal.') }, { id: 'prank', text: T("A harmless pH trick and Kofi's UV-pen prank.", 'Helah pH tidak berbahaya dan gurauan pen UV Kofi.'), correct: true }, { id: 'acid', text: T('Dangerous acid.', 'Asid berbahaya.') }, { id: 'ghost', text: T('Ghost writing.', 'Tulisan hantu.') }],
        needs: [['green_puddle', 'inf_ph'], ['mirror_uv', 'kofi_pen']], needsFlags: ['ph_solved'], hints: [T('What colour does cabbage juice turn with a base? Whose initials are on the UV pen?', 'Apa warna jus kobis dengan bes? Inisial siapa pada pen UV?')] },
      { id: 'q_when', title: T('3. When did the sabotage happen?', '3. Bila sabotaj berlaku?'),
        options: [{ id: 'six30', text: T('6:30 pm', '6:30 mlm') }, { id: 'sevenish', text: T('About 6:58–7:00 pm, while Felix was in the storeroom', 'Sekitar 6:58–7:00 mlm, semasa Felix di stor'), correct: true }, { id: 'seven30', text: T('7:30 pm', '7:30 mlm') }, { id: 'eight', text: T('After 8:00 pm', 'Selepas 8:00 mlm') }],
        needs: [['stopped_clock', 'inf_clock'], ['badge_reader', 'inf_badge']], needsFlags: ['circuit_solved', 'badge_solved'], hints: [T('The clock stopped when power was cut. Who was in the storeroom?', 'Jam berhenti apabila kuasa dipotong. Siapa di stor?')] },
      { id: 'q_who', title: T('4. Who did it?', '4. Siapa yang melakukannya?'),
        options: [{ id: 'felix', text: T('Felix, the technician', 'Felix, juruteknik'), correct: true }, { id: 'leo', text: T('Leo, the judge', 'Leo, hakim') }, { id: 'maya', text: T('Maya', 'Maya') }, { id: 'rao', text: T('Ms. Rao', 'Cik Rao') }, { id: 'kofi', text: T('Kofi', 'Kofi') }],
        needs: [['case_glass', 'inf_print'], ['badge_reader', 'inf_badge'], ['mallet', 'felix_note', 'core_found']], needsFlags: ['print_solved'], hints: [T('Whose thumbprint, whose badge, whose mallet? Remember the twins!', 'Cap ibu jari siapa, lencana siapa, tukul siapa? Ingat kembar itu!')] },
      { id: 'q_why', title: T('5. WHY did he do it?', '5. KENAPA dia melakukannya?'),
        options: [{ id: 'money', text: T('For money.', 'Untuk wang.') }, { id: 'proud', text: T('To give the core to his twin Leo so Leo would finally be proud of him.', 'Untuk memberi teras kepada kembarnya Leo supaya Leo akhirnya bangga dengannya.'), correct: true }, { id: 'hate', text: T('He hates Maya.', 'Dia benci Maya.') }, { id: 'prank', text: T('A joke for the fair.', 'Gurauan untuk pameran.') }],
        needs: [['felix_note'], ['fair_program']], needsFlags: ['density_solved'], hints: [T('Open the skeleton and read the note.', 'Buka rangka dan baca nota.')] }
    ],

    conclusion: {
      who: { correct: 'felix' }, what: { questionId: 'q_how' }, when: { questionId: 'q_when' },
      where: [{ id: 'skel', text: T("Inside the skeleton's chest in the Storeroom", 'Dalam dada rangka di Stor'), correct: true }, { id: 'bin', text: T('In the lab bin', 'Dalam tong sampah makmal') }, { id: 'case', text: T('In the display case', 'Dalam kotak paparan') }, { id: 'coat', text: T("In Leo's coat", 'Dalam kot Leo') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }],
      whereQ: T('WHERE is the glowing core hidden?', 'DI MANA teras bercahaya disorokkan?'),
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_smash', label: T('How it was smashed', 'Bagaimana ia dihancurkan'), items: ['broken_prototype', 'mallet'] },
        { id: 'g_time', label: T('The clock and the badge', 'Jam dan lencana'), items: ['stopped_clock', 'inf_clock', 'badge_reader', 'inf_badge'] },
        { id: 'g_print', label: T('The thumbprint', 'Cap ibu jari'), items: ['case_glass', 'inf_print'] },
        { id: 'g_twin', label: T('The twin alibi', 'Alibi kembar'), items: ['judge_cam', 'judge_sheet', 'fair_program'] },
        { id: 'g_core', label: T('The hidden core and note', 'Teras tersembunyi dan nota'), items: ['core_found', 'felix_note'] },
        { id: 'g_lie', label: T("Felix's lies", 'Pembohongan Felix'), items: ['c_felix_alone', 'c_felix_store', 'c_felix_mallet'] }
      ],
      strongCoverage: 4, secondary: ['green_puddle', 'inf_ph', 'kofi_pen', 'mirror_uv', 'proto_log'], secondaryNeeded: 2,
      lieFlags: ['c_felix_alone', 'c_felix_store', 'c_felix_mallet', 'c_rao_staff']
    },

    endings: kit.endings({
      secret: { title: T('The Twin Who Was Proud', 'Kembar Yang Bangga'), when: (r) => r.flags.ph_solved && r.has.judge_cam,
        text: T(`You solve the case AND the whole mystery of the green glow. Felix confesses and returns the core. Leo, who always overlooked his brother, hugs him: "You did not need to steal for me. I was always proud." Maya rebuilds the Hydro-Cell in time and wins the fair, Kofi gets a special award for honest pranking, and the green "poison" becomes the science club's favourite demo.`,
          `Anda menyelesaikan kes ini DAN seluruh misteri cahaya hijau. Felix mengaku dan memulangkan teras. Leo, yang selalu mengabaikan abangnya, memeluknya: "Awak tidak perlu mencuri untuk saya. Saya sentiasa bangga." Maya membina semula Hydro-Cell tepat pada masanya dan memenangi pameran, Kofi mendapat anugerah istimewa kerana bergurau secara jujur, dan "racun" hijau menjadi demo kegemaran kelab sains.`) },
      perfect: { title: T('Case Closed!', 'Kes Selesai!'),
        text: T(`Excellent! You proved Felix cut the power at 6:58, smashed the prototype at 7:00 and hid the core in the skeleton. His thumbprint, his badge and his mallet gave him away, while his twin Leo sat with the judges. Maya gets her core back and judging begins.`,
          `Hebat! Anda membuktikan Felix memotong kuasa pukul 6:58, menghancurkan prototaip pukul 7:00 dan menyorokkan teras dalam rangka. Cap ibu jari, lencana dan tukulnya mendedahkannya, sementara kembarnya Leo duduk bersama hakim. Maya mendapat terasnya semula dan pengadilan bermula.`) },
      missed: { title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        text: T(`Right answer, strong proof! But you missed side clues: the pH puddle, the UV pen or Maya's log. Because of that nobody understands the glowing "poison", and Kofi is still blamed for everything.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: lopak pH, pen UV atau log Maya. Kerana itu tiada siapa faham "racun" bercahaya itu, dan Kofi masih dipersalahkan untuk semuanya.`) },
      weak: { text: T(`You named the right person, but the proof is weak. Check the fingerprint, the badge log and the stopped clock. Hurry!`, `Anda menyebut orang yang betul, tetapi bukti lemah. Semak cap jari, log lencana dan jam berhenti. Cepat!`) },
      wrong: { text: T(`Oh no — that was not right. Remember the twins: whose thumbprint is a whorl, and whose badge was in the storeroom at 6:58?`, `Alamak — itu tidak betul. Ingat kembar itu: cap ibu jari siapa whorl, dan lencana siapa di stor pukul 6:58?`) }
    }),
    wrongWho: {
      leo: T('Leo looks exactly like Felix, but he sat with three judges from 6:50 to 7:30 (camera + signed sheet), and his thumbprint is a loop.', 'Leo kelihatan sama seperti Felix, tetapi dia duduk bersama tiga hakim dari 6:50 hingga 7:30 (kamera + helaian bertandatangan), dan cap ibu jarinya loop.'),
      maya: T('Maya is the inventor. She tested the cell at 6:30 and wants it to win.', 'Maya ialah pencipta. Dia menguji sel pukul 6:30 dan mahu ia menang.'),
      rao: T('Ms Rao runs the fair and honestly mixed up the twins.', 'Cik Rao mengendalikan pameran dan jujur tersilap kembar itu.'),
      kofi: T('Kofi only made the mirror message with his UV pen. A prank is not sabotage.', 'Kofi hanya membuat mesej cermin dengan pen UV. Gurauan bukan sabotaj.')
    },

    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      felix: {
        greeting: T(`Felix Brandt, lab technician. What a disaster! Poor Maya. I was in the staff room at five to seven; ask anyone.`, `Felix Brandt, juruteknik makmal. Bencana! Kasihan Maya. Saya di bilik kakitangan pukul tujuh kurang lima; tanya sesiapa.`),
        topics: [
          { id: 'alone', label: T('Where were you at 6:55?', 'Di mana anda pukul 6:55?'), lines: [T('Staff room, having tea. Ms Rao saw me.', 'Bilik kakitangan, minum teh. Cik Rao nampak saya.')], claims: ['c_felix_alone'] },
          { id: 'store', label: T('Did you go to the storeroom?', 'Adakah anda ke stor?'), lines: [T('No, never. I have no reason to be in there.', 'Tidak, tidak pernah. Saya tiada sebab ke sana.')], claims: ['c_felix_store'] },
          { id: 'mallet', label: T('Is that your mallet?', 'Adakah itu tukul anda?'), lines: [T('F.B. could be anyone. Ben, Frank, Fiona...', 'F.B. boleh sesiapa. Ben, Frank, Fiona...')], claims: ['c_felix_mallet'] },
          { id: 'leo', label: T('Do you get on with your brother?', 'Adakah anda rapat dengan abang anda?'), lines: [T('Leo? He is a big shot. We rarely talk. He has never asked what I do.', 'Leo? Dia orang besar. Kami jarang bercakap. Dia tidak pernah tanya apa kerja saya.')] }
        ],
        present: {
          badge_reader: { requiresFlag: 'badge_solved', lines: [T('...The reader must be broken. Badges can be borrowed. Leo could have borrowed mine!', '...Pembaca pasti rosak. Lencana boleh dipinjam. Leo boleh pinjam lencana saya!')], lockedLines: [T('A log? I cannot read that without my glasses. (Work it out first!)', 'Log? Saya tidak boleh baca tanpa cermin mata. (Selesaikan dahulu!)')] },
          mallet: { lines: [T('...I lent it to someone. I forget who.', '...Saya pinjamkan kepada seseorang. Saya lupa siapa.')] },
          case_glass: { requiresFlag: 'print_solved', lines: [T('...Fine. A whorl. That is mine. I touched the case when I helped Maya lock it up at 6:40!', '...Baik. Whorl. Itu milik saya. Saya sentuh kotak itu semasa membantu Maya mengunci pada 6:40!')], lockedLines: [T('A thumbprint? Anyone can touch glass.', 'Cap ibu jari? Sesiapa boleh sentuh kaca.')] },
          felix_note: { lines: [T('...Where did you find that? ...Oh. It is over. I only wanted Leo to see me.', '...Di mana anda jumpa itu? ...Oh. Tamatlah. Saya cuma mahu Leo nampak saya.')] },
          core_found: { lines: [T('...I am sorry. I was going to return it after the judging... I swear.', '...Saya minta maaf. Saya akan pulangkan selepas pengadilan... saya bersumpah.')] }
        }
      },
      leo: {
        greeting: T(`Dr. Leo Brandt, Brandt Energy. Judging a school fair is the highlight of my year. Is there a problem?`, `Dr. Leo Brandt, Brandt Energy. Menghakimi pameran sekolah ialah kemuncak tahun saya. Ada masalah?`),
        topics: [
          { id: 'judge', label: T('Where were you at 7:00?', 'Di mana anda pukul 7:00?'), lines: [T('At the judges\' table with Dr. Chen and Prof. Lim, from ten to seven until half past.', 'Di meja hakim bersama Dr. Chen dan Prof. Lim, dari tujuh kurang sepuluh hingga tujuh setengah.')], claims: ['c_leo_judge'] },
          { id: 'twin', label: T('You look like Felix...', 'Anda seperti Felix...'), lines: [T('We are identical twins. Strangers mix us up all the time. He is the quiet one.', 'Kami kembar seiras. Orang asing selalu tersilap kami. Dia yang pendiam.')] },
          { id: 'felix', label: T('What do you think of your brother?', 'Apa pendapat anda tentang abang anda?'), lines: [T('He is clever with his hands. I never told him. I should have.', 'Dia pandai dengan tangan. Saya tidak pernah beritahu. Saya sepatutnya.')] }
        ],
        present: { judge_cam: { lines: [T('That is me at the table. Seven o\'clock on the dot.', 'Itu saya di meja. Tepat pukul tujuh.')] }, felix_note: { lines: [T('...He wrote that to ME? Oh, Felix...', '...Dia tulis itu kepada SAYA? Oh, Felix...')] } }
      },
      maya: {
        greeting: T(`My Hydro-Cell! It took me six months! It lit an LED for ten minutes, I wrote it down!`, `Hydro-Cell saya! Ia mengambil masa enam bulan! Ia menyalakan LED selama sepuluh minit, saya tulis!`),
        topics: [
          { id: 'test', label: T('When did it work?', 'Bila ia berfungsi?'), lines: [T('At 6:30. Then Mr. Felix and I locked it in the case at 6:40.', 'Pukul 6:30. Kemudian Encik Felix dan saya mengunci dalam kotak pukul 6:40.')], claims: ['c_maya_test'] },
          { id: 'core', label: T('What is special about the core?', 'Apa istimewa tentang teras?'), lines: [T('It uses salt water and a special metal. It glows faint blue while it works.', 'Ia guna air garam dan logam khas. Ia bercahaya biru samar semasa berfungsi.')] },
          { id: 'enemy', label: T('Who would want it?', 'Siapa mahukannya?'), lines: [T('A big energy company would. Dr. Brandt\'s company, maybe? But he is the judge!', 'Syarikat tenaga besar akan mahukannya. Syarikat Dr. Brandt, mungkin? Tetapi dia hakim!')] }
        ],
        present: { broken_prototype: { lines: [T('My poor cell...! Someone did this on purpose!', 'Sel saya yang malang...! Seseorang melakukan ini dengan sengaja!')] }, proto_log: { lines: [T('Yes, that is my handwriting. I always log my tests.', 'Ya, itu tulisan saya. Saya sentiasa log ujian saya.')] } }
      },
      rao: {
        greeting: T(`Ms Rao, Head of Science. Tonight was meant to be perfect. A glowing puddle! A message in the mirror! The parents will panic.`, `Cik Rao, Ketua Sains. Malam ini sepatutnya sempurna. Lopak bercahaya! Mesej pada cermin! Ibu bapa akan panik.`),
        topics: [
          { id: 'staff', label: T('Who did you see at 6:55?', 'Siapa anda nampak pukul 6:55?'), lines: [T('Felix, in the staff room. He nodded at me and left. Quite normal, I thought.', 'Felix, di bilik kakitangan. Dia mengangguk dan pergi. Nampak biasa, saya fikir.')], claims: ['c_rao_staff'] },
          { id: 'camera', label: T('Any camera photos?', 'Ada gambar kamera?'), gives: ['judge_cam'], lines: [T('The Fair Hall camera. Here is the 7:00 photo of the judges. The clock is right.', 'Kamera Dewan Pameran. Ini gambar 7:00 hakim. Jam betul.')] },
          { id: 'keys', label: T('Who holds the case key?', 'Siapa pegang kunci kotak?'), lines: [T('Felix and me. And I was at the fair desk all evening.', 'Felix dan saya. Dan saya di meja pameran sepanjang malam.')] }
        ],
        present: { fair_program: { lines: [T('Oh! The Brandt twins... I saw Leo walk by in the same jacket and thought it was Felix! How silly of me.', 'Oh! Kembar Brandt... Saya nampak Leo lalu dengan jaket sama dan sangka Felix! Bodohnya saya.')] }, badge_reader: { lines: [T('Those badges do not lie, at least.', 'Lencana itu tidak berbohong, sekurang-kurangnya.')] } }
      },
      kofi: {
        greeting: T(`Hi! I did NOT break anything! Okay, I did the mirror. That's all. I swear on my UV pen.`, `Hai! Saya TIDAK memecahkan apa-apa! Baik, saya buat cermin. Itu sahaja. Saya bersumpah dengan pen UV saya.`),
        topics: [
          { id: 'prank', label: T('What did you do tonight?', 'Apa anda buat malam ini?'), lines: [T('At quarter past six I wrote "I SEE YOU" on the mirror and moved Mr. Bones. It was a joke!', 'Pukul enam suku saya tulis "I SEE YOU" pada cermin dan pindahkan Encik Tulang. Gurauan!')], claims: ['c_kofi_prank'] },
          { id: 'puddle', label: T('Did you make the green puddle?', 'Adakah anda membuat lopak hijau?'), lines: [T('No! I would never. That is a proper prank, not mine. Too clever.', 'Tidak! Saya tidak akan. Itu gurauan sebenar, bukan saya. Terlalu pandai.')] },
          { id: 'man', label: T('Did you see a man near the storeroom?', 'Adakah anda nampak lelaki dekat stor?'), lines: [T('Mr. Felix walked in at about seven. He looked very serious. Then the lights went out.', 'Encik Felix masuk sekitar tujuh. Dia kelihatan sangat serius. Kemudian lampu padam.')] }
        ],
        present: { kofi_pen: { lines: [T('That is mine! I lost it in the corridor. Please do not tell Ms Rao!', 'Itu milik saya! Saya hilang di koridor. Tolong jangan beritahu Cik Rao!')] }, mirror_uv: { lines: [T('Yes. The letters are uneven because I wrote them standing on my tiptoes.', 'Ya. Huruf tidak rata kerana saya menulis sambil berjingkit.')] } }
      }
    },

    horror: {
      zones: [
        { id: 'ml_glow', room: 'ML', once: true, minScare: 1, delay: 3, fx: ['sfx:static', 'flicker:ML:2'], text: T('🧪 The green puddle glows brighter, as if it is breathing.', '🧪 Lopak hijau bercahaya lebih terang, seolah-olah bernafas.') },
        { id: 'ml_beaker', room: 'ML', once: true, minScare: 2, delay: 11, fx: ['sfx:heartbeat', 'sfx:whisper'], text: T('🔬 Every glass jar on the shelf starts to hum... then stops.', '🔬 Setiap balang kaca di rak mula berdengung... kemudian berhenti.') },
        { id: 'pc_drip', room: 'PC', once: true, minScare: 1, delay: 2, fx: ['sfx:drip', 'sfx:steps_far'], text: T('💧 A tap drips in the dark. Somewhere a door creaks.', '💧 Paip menitis dalam gelap. Di suatu tempat pintu berkeriut.') },
        { id: 'pc_mirror', room: 'PC', once: true, minScare: 2, delay: 8, fx: ['blackout:1.7', 'sfx:voice', 'shake:0.4'], text: T('🪞 The lights die... and the mirror shows glowing purple eyes: "I SEE YOU".', '🪞 Lampu padam... dan cermin menunjukkan mata ungu bercahaya: "I SEE YOU".') },
        { id: 'sr_rattle', room: 'SR', once: true, minScare: 1, delay: 3, fx: ['sfx:scratch'], text: T('💀 Bones rattle in the corner. Clack... clack...', '💀 Tulang berderak di sudut. Klak... klak...') },
        { id: 'sr_slam', room: 'SR', once: true, minScare: 2, delay: 8, fx: ['sfx:slam', 'shake:0.7', 'music:tense:9'], text: T('🚪 The storeroom door SLAMS and a skeleton hand drops from the shelf!', '🚪 Pintu stor DIHEMPAS dan tangan rangka jatuh dari rak!') },
        { id: 'sf_kettle', room: 'SF', once: true, minScare: 1, delay: 2, fx: ['sfx:bell'], text: T('☕ The kettle whistles by itself... then goes silent.', '☕ Cerek berbunyi sendiri... kemudian senyap.') },
        { id: 'fh_proj', room: 'FH', once: true, minScare: 1, delay: 3, fx: ['sfx:knock', 'flicker:FH:2'], text: T('📽️ The projector switches on: an empty chair, a shadow behind it.', '📽️ Projektor menyala: kerusi kosong, bayang di belakangnya.') },
        { id: 'fh_flash', room: 'FH', once: true, minScare: 2, delay: 9, fx: ['flash:white', 'sfx:thunder', 'shake:0.5'], text: T('⚡ A camera flash! Two identical shadows stand side by side... then one.', '⚡ Kilatan kamera! Dua bayang serupa berdiri sebelah-menyebelah... kemudian satu.') }
      ],
      figures: [
        { name: 'figure1', room: 'ML', minScare: 2, revealDistance: 3.2, flickerRoom: 'ML', reveal: T('A lab coat on a hook with a skeleton-print scarf! (False alarm.)', 'Kot makmal pada cangkuk dengan skarf bercorak rangka! (Penggera palsu.)') },
        { name: 'figure2', room: 'SF', minScare: 2, revealDistance: 3.0, flickerRoom: 'SF', sfx: 'sting', reveal: T('A tall coat rack with a hat... still swaying a little.', 'Rak kot tinggi dengan topi... masih bergoyang sedikit.') }
      ]
    },

    exitTicket: [
      { subject: 'science', q: T('Red cabbage juice turns GREEN. What does that show?', 'Jus kobis merah bertukar HIJAU. Apa ia tunjukkan?'), options: [T('A base (like baking soda)', 'Bes (seperti soda penaik)'), T('An acid (like lemon)', 'Asid (seperti lemon)'), T('Poison', 'Racun')], answer: 0, why: T('Red = acid, purple = neutral, green = base.', 'Merah = asid, ungu = neutral, hijau = bes.') },
      { subject: 'science', q: T('Identical twins have the same DNA. Do they have the same fingerprints?', 'Kembar seiras ada DNA sama. Adakah cap jari mereka sama?'), options: [T('No: fingerprints are different', 'Tidak: cap jari berbeza'), T('Yes: exactly the same', 'Ya: betul-betul sama')], answer: 0, why: T('Fingerprints form in the womb and are unique, even in twins.', 'Cap jari terbentuk dalam kandungan dan unik, walaupun pada kembar.') },
      { subject: 'math', q: T('A badge was in a room from 6:52 to 7:08. How many minutes is that?', 'Lencana berada dalam bilik dari 6:52 hingga 7:08. Berapa minit?'), options: ['8', '14', '16', '20'], answer: 2, why: T('6:52 → 7:00 = 8, 7:00 → 7:08 = 8. Total 16.', '6:52 → 7:00 = 8, 7:00 → 7:08 = 8. Jumlah 16.') }
    ],

    world(W) {
      kit.world(W, this, {
        sky: 0x050810, mood: { amb: 0.16, hemi: 0.13, ambLow: 0.55, hemiLow: 0.32 }, desk: 0x3a4a52,
        rooms: [
          { id: 'ML', name: T('Main Lab', 'Makmal Utama'), wall: 0x4a5a5a, floor: 0x14201f, lightColor: 0x9fffd8 },
          { id: 'PC', name: T('Prep corridor', 'Koridor persediaan'), wall: 0x3a4650, floor: 0x12161a, lightColor: 0x88a8ff, lightI: 0.3 },
          { id: 'SR', name: T('Storeroom', 'Stor'), wall: 0x4a403a, floor: 0x16120e, lightColor: 0xffb870 },
          { id: 'SF', name: T('Staff room', 'Bilik kakitangan'), wall: 0x5a5448, floor: 0x1c1a14, lightColor: 0xffe0a0 },
          { id: 'FH', name: T('Fair Hall', 'Dewan Pameran'), wall: 0x3a3a58, floor: 0x12121e, lightColor: 0xb8a8ff }
        ],
        objs: [['r1d1', 'broken_prototype', 0x4488cc], ['r1d2', 'proto_log', 0xf3eccb], ['r1w1', 'stopped_clock', 0xdddddd], ['r1f1', 'green_puddle', 0x33ff77],
          ['cpf1', 'mallet', 0x222222], ['cpf2', 'kofi_pen', 0x8a4acc], ['cpw1', 'badge_reader', 0x4a6a88], ['cpw2', 'mirror_uv', 0xb0b0e0],
          ['r3d1', 'skeleton', 0xe8e8e0], ['r3w1', 'storeroom_log', 0xdcd0a8], ['r4d1', 'fair_program', 0xf0e8d0], ['r4w1', 'staff_rota', 0xe0e0c0],
          ['r5d1', 'case_glass', 0xaaddee], ['r5d2', 'judge_sheet', 0xf0f0e0]],
        texts: [[-8.86, 1.9, 0.0, Math.PI / 2, T('HARTWELL SCIENCE LAB · FAIR NIGHT', 'MAKMAL SAINS HARTWELL · MALAM PAMERAN'), '#9fffd8', 2.8, 0.5]],
        figs: [{ name: 'figure1', slot: 'r1m', kind: 'coat' }, { name: 'figure2', slot: 'r4m', kind: 'tall' }],
        decor(W) { W.box(-6.0, 0.0, -3.0, 2.0, 0.9, 0.7, 0x3a5058); W.box(-8.2, 0, 0.0, 0.5, 1.4, 1.2, 0x2a3a40, { collide: false }); W.box(12.0, 0, 0.0, 2.4, 0.8, 1.0, 0x4a4a5a); },
        npcs: [
          { id: 'maya', slot: 'r1n', rot: Math.PI * 0.5, skin: 0x8a5a3a, shirt: 0x7a5cc0, pants: 0x2c3e50, hair: 0x111111, scale: 0.88 },
          { id: 'kofi', slot: 'r3m', rot: Math.PI * 1.2, skin: 0x7a4a2a, shirt: 0x8a9a5b, pants: 0x2a2a3a, hair: 0x111111, scale: 0.84 },
          { id: 'felix', slot: 'r3n', rot: Math.PI * 0.5, skin: 0xd8a888, shirt: 0xc0562b, pants: 0x2a2a2a, hair: 0x4a3a2a, scale: 1.02 },
          { id: 'rao', slot: 'r4n', rot: Math.PI * 0.3, skin: 0xc79a6a, shirt: 0x33a3a3, pants: 0x2a3a4a, hair: 0x111111, scale: 0.96 },
          { id: 'leo', slot: 'r5n', rot: Math.PI * 1.1, skin: 0xd8a888, shirt: 0x2f6f9e, pants: 0x2a2a2a, hair: 0x4a3a2a, scale: 1.02 }
        ]
      });
    }
  };
  kit.photo('judge_cam', 'CAM 5  FAIR HALL', (c, W, H, h) => {
    h.rect(c, 0, 0, W, H, '#0a0f14'); h.rect(c, 0, H * 0.7, W, H * 0.3, '#10181e');
    h.rect(c, W * 0.2, H * 0.52, W * 0.6, 24, '#2a3a44');                                                                        // judges table
    [0.28, 0.46, 0.64].forEach((x, i) => { h.rect(c, W * x, H * 0.3, 40, 90, i === 1 ? '#4a6a8a' : '#3a4a52'); h.circ(c, W * x + 20, H * 0.27, 15, '#6a8a9a'); });  // three judges
    h.rect(c, W * 0.46 + 8, H * 0.36, 24, 12, '#ffe34a'); h.text(c, 'JUDGE', W * 0.46 + 20, H * 0.375, 9, '#222', 'center', true);   // Leo's badge
  });
  MF.registerCase(C);
})();
