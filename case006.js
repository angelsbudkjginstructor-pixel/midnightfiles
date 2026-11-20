/* ============================================================================
   CASE 006 — THE SQUEAKY STAIRCASE / TANGGA YANG BERKERIUT   (Old school block at night)
   ----------------------------------------------------------------------------
   HIDDEN SOLUTION
   - Block C is a 1962 school building. Cobalt Land Ltd. will pay RM 4 million for the land, but ONLY if
     the block is declared unsafe. Their inspector, Gideon PELL, pre-typed an "UNSAFE" report at 6:45 pm.
   - 7:30 Pell arrives. 7:45 he unscrews the 3rd stair tread so it squeaks, ties a fishing line from the
     tread lever (a hinged plank in room 3B) up through the attic hatch, so "footsteps" squeak by themselves.
   - 8:05 he opens a vent behind a hidden panel to make an icy draught ("cold spots").
     A night camera (science club, Ms Ada) photographs him on the stairs at 8:12.
   - The tapping and scratching in the attic is NOT Pell: barn owl chicks in the attic (feathers, pellets).
   TWIST: the hidden study behind the panel holds the founder's 1975 deed: "this land shall NEVER be sold" —
          his plan was pointless; and one "ghost" noise was just owls.
   ============================================================================ */
(function () {
  const kit = MF.kit, T = kit.T, mm = kit.mm, D = kit.doc;
  const C = {
    id: '006', num: 6,
    title: T('The Squeaky Staircase', 'Tangga Yang Berkeriut'),
    tagline: T('Footsteps go UP the stairs and never come down. The air turns to ice. And something is tapping in the attic.', 'Langkah naik tangga dan tidak pernah turun. Udara menjadi sejuk beku. Dan sesuatu mengetuk di loteng.'),
    place: T('Old Block C, Alder School', 'Blok C Lama, Sekolah Alder'),
    premise: T(
      `It is 9:00 pm. Old Block C of Alder School is being inspected tonight and the Science Club is staying to measure "paranormal" sounds. For an hour the staircase has squeaked by itself, one step at a time, going UP and never coming down. A cold spot hangs on the landing and something taps in the attic. The inspector, Mr. Pell, says the building is unsafe and must be closed tomorrow. Is the old block haunted, rotten, or is someone making it seem so? Find the truth before the inspector files his report at 9:40 pm.`,
      `Sekarang pukul 9:00 malam. Blok C Lama Sekolah Alder diperiksa malam ini dan Kelab Sains tinggal untuk mengukur bunyi "paranormal". Selama sejam tangga berkeriut sendiri, satu langkah demi satu langkah, naik ke atas dan tidak pernah turun. Satu tempat sejuk menggantung di tangga dan sesuatu mengetuk di loteng. Pemeriksa, Encik Pell, berkata bangunan tidak selamat dan mesti ditutup esok. Adakah blok lama ini berhantu, reput, atau ada seseorang menjadikannya kelihatan begitu? Cari kebenaran sebelum pemeriksa memfailkan laporannya pukul 9:40 malam.`),
    mysteryType: 'Fake haunting / property fraud',
    subjects: ['science', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('9:00'), deadline: mm('9:40'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },
    timeUp: { title: T('The report is filed!', 'Laporan difailkan!'), text: T('Mr. Pell files "UNSAFE" and the old block will be closed. Name the culprit NOW!', 'Encik Pell memfailkan "TIDAK SELAMAT" dan blok lama akan ditutup. Namakan pelaku SEKARANG!') },

    hidden: {
      culprit: 'pell', what: 'staged', window: [mm('7:30'), mm('8:12')],
      summary: T(
        `Inspector Pell works for Cobalt Land, which wants to buy the school land if Block C is declared unsafe. He typed his UNSAFE report at 6:45 pm, before he arrived. Then he loosened a stair tread, tied a fishing line to a lever so the stairs squeaked by themselves, and opened a vent to make a cold draught. The tapping in the attic was a family of barn owls, and the founder's deed hidden in the secret study says the land can never be sold anyway.`,
        `Pemeriksa Pell bekerja untuk Cobalt Land, yang mahu membeli tanah sekolah jika Blok C diisytiharkan tidak selamat. Dia menaip laporan TIDAK SELAMAT pukul 6:45 petang, sebelum dia tiba. Kemudian dia melonggarkan satu papak tangga, mengikat tali pancing pada tuil supaya tangga berkeriut sendiri, dan membuka lubang angin untuk angin sejuk. Ketukan di loteng ialah keluarga burung hantu, dan surat hak pengasas yang tersembunyi dalam bilik rahsia berkata tanah tidak boleh dijual langsung.`),
      sequence: [
        [mm('6:45'), T('Pell types the UNSAFE report.', 'Pell menaip laporan TIDAK SELAMAT.')],
        [mm('7:30'), T('Pell arrives at Block C.', 'Pell tiba di Blok C.')],
        [mm('7:45'), T('He loosens the tread and ties the line.', 'Dia melonggarkan papak dan mengikat tali.')],
        [mm('8:05'), T('He opens the vent for the cold spot.', 'Dia membuka lubang angin untuk tempat sejuk.')],
        [mm('8:12'), T('The science club camera photographs him.', 'Kamera kelab sains merakamnya.')],
        [mm('8:30'), T('The "haunting" begins.', '"Gangguan hantu" bermula.')]
      ],
      essentialClues: ['loose_tread', 'fishing_line', 'lever_board', 'inspection_report', 'stair_cam', 'boot_print', 'cobalt_letter', 'c_pell_time'],
      misleading: [
        { item: 'c_tan_repair', why: T('Mr. Tan repaired the stairs; he is not the saboteur.', 'Encik Tan membaiki tangga; dia bukan penyabotaj.') },
        { item: 'feathers', why: T('Feathers explain the attic noise, not the stairs.', 'Bulu menerangkan bunyi loteng, bukan tangga.') },
        { item: 'club_poster', why: T('The club poster only shows when Ms Ada planned her visit.', 'Poster kelab hanya menunjukkan bila Cik Ada merancang lawatan.') },
        { item: 'attic_window', why: T('A broken attic window explains how owls got in.', 'Tingkap loteng pecah menerangkan bagaimana burung hantu masuk.') }
      ]
    },

    people: [
      { id: 'pell', name: 'Gideon Pell', age: 49, role: T('Building inspector (Cobalt Land)', 'Pemeriksa bangunan (Cobalt Land)'), rel: T('Says the block is unsafe', 'Kata blok tidak selamat'), color: '#6a6f7a', suspect: true },
      { id: 'ada', name: 'Ms. Ada Adeyemi', age: 34, role: T('Science teacher, club leader', 'Guru sains, ketua kelab'), rel: T('Measures the "haunting"', 'Mengukur "gangguan hantu"'), color: '#33a3a3', suspect: true },
      { id: 'tan', name: 'Mr. Tan Wei', age: 51, role: T('Carpenter and caretaker', 'Tukang kayu dan penjaga'), rel: T('Rebuilt the stairs in June', 'Membina semula tangga pada Jun'), color: '#c0562b', suspect: true },
      { id: 'sam', name: 'Sam Ortiz', age: 13, role: T('Science Club member, prankster', 'Ahli Kelab Sains, nakal'), rel: T('Loves ghost stories', 'Suka cerita hantu'), color: '#7a5cc0', suspect: true },
      { id: 'alder', name: 'Mrs. Rose Alder', age: 71, role: T("Founder's granddaughter", 'Cucu pengasas'), rel: T('Wants to save the school', 'Mahu menyelamatkan sekolah'), color: '#8a9a5b', suspect: true }
    ],

    items: [
      { id: 'inspection_report', type: 'document', icon: '📄', title: T('The UNSAFE report', 'Laporan TIDAK SELAMAT'), where: T('Ground Hall desk', 'Meja Dewan Bawah'),
        desc: T(`A typed report from Cobalt Land's inspector. Look at the print date at the bottom.`, `Laporan bertaip daripada pemeriksa Cobalt Land. Lihat tarikh cetak di bawah.`),
        inspect: { kind: 'doc', html: D('<b>BUILDING REPORT — BLOCK C</b><br>Verdict: <b>UNSAFE. Close immediately.</b><br>Inspector: G. Pell<br><small style="color:#c00">Printed: Friday <b>6:45 pm</b></small><br><small>Pell says he reached the school at 7:30 pm.</small>', '<b>LAPORAN BANGUNAN — BLOK C</b><br>Keputusan: <b>TIDAK SELAMAT. Tutup segera.</b><br>Pemeriksa: G. Pell<br><small style="color:#c00">Dicetak: Jumaat <b>6:45 ptg</b></small><br><small>Pell kata dia tiba di sekolah pukul 7:30 mlm.</small>') } },
      { id: 'repair_log', type: 'document', icon: '🛠️', title: T('Stair repair log', 'Log baikan tangga'), where: T('Ground Hall notice board', 'Papan notis Dewan Bawah'),
        desc: T(`The repair record for the staircase.`, `Rekod baikan untuk tangga.`),
        inspect: { kind: 'doc', html: D('<b>REPAIR LOG</b><br>June: staircase rebuilt in solid oak by W. Tan<br>Load test: <b>400 kg — PASSED</b><br>Next check: next June', '<b>LOG BAIKAN</b><br>Jun: tangga dibina semula dengan kayu oak oleh W. Tan<br>Ujian beban: <b>400 kg — LULUS</b><br>Pemeriksaan seterusnya: Jun depan') } },
      { id: 'school_history', type: 'document', icon: '🏫', title: T('School history plaque', 'Plak sejarah sekolah'), where: T('Ground Hall wall', 'Dinding Dewan Bawah'),
        desc: T(`A plaque about the founding of the school.`, `Plak tentang penubuhan sekolah.`),
        inspect: { kind: 'doc', html: D('<b>ALDER SCHOOL — founded 1962</b><br>By Edith Alder, who taught here for 40 years.<br>"A school is a promise to the children."<br><small>The staircase has 14 steps.</small>', '<b>SEKOLAH ALDER — ditubuhkan 1962</b><br>Oleh Edith Alder, yang mengajar di sini selama 40 tahun.<br>"Sekolah ialah janji kepada kanak-kanak."<br><small>Tangga ada 14 anak tangga.</small>') } },
      { id: 'thermo_chart', type: 'document', icon: '🌡️', title: T('Science Club temperature chart', 'Carta suhu Kelab Sains'), where: T('Ground Hall wall', 'Dinding Dewan Bawah'),
        desc: T(`Ms Ada's club measured the temperature at five places. Where is the cold spot coming from?`, `Kelab Cik Ada mengukur suhu di lima tempat. Dari mana datangnya tempat sejuk itu?`),
        puzzle: 'pz_cold', inspect: { kind: 'puzzle-doc',
          html: D('🌡️ <b>TEMPERATURE CHART</b><br>Ground Hall: <b>21°C</b><br>Staircase bottom: <b>21°C</b><br>Staircase landing: <b>13°C</b><br>Classroom 3B: <b>21°C</b><br>Behind the landing wall: <b>10°C</b><br><small>Cold air is heavy and flows downhill from its source.</small>', '🌡️ <b>CARTA SUHU</b><br>Dewan Bawah: <b>21°C</b><br>Bawah tangga: <b>21°C</b><br>Landing tangga: <b>13°C</b><br>Bilik 3B: <b>21°C</b><br>Di belakang dinding landing: <b>10°C</b><br><small>Udara sejuk berat dan mengalir ke bawah dari sumbernya.</small>'),
          fixedHtml: D('🌡️ The landing is <b>8°C</b> colder than the hall (21 − 13). The coldest air (10°C) is BEHIND the wall: a hidden space is letting cold air in. ✔', '🌡️ Landing <b>8°C</b> lebih sejuk daripada dewan (21 − 13). Udara paling sejuk (10°C) ada DI BELAKANG dinding: ruang tersembunyi membocorkan udara sejuk. ✔') } },
      /* STAIRCASE */
      { id: 'loose_tread', type: 'physical', icon: '🪵', title: T('The squeaky 3rd step', 'Anak tangga ketiga yang berkeriut'), where: T('Staircase, step 3', 'Tangga, anak tangga 3'),
        desc: T(`The third step has been unscrewed: bright NEW scratches around the screw holes, fresh sawdust and the screws put back only half-way. The wood itself is solid oak.`, `Anak tangga ketiga telah dibuka skrunya: calar BARU yang terang di sekeliling lubang skru, habuk papan baru dan skru dipasang separuh sahaja. Kayunya pepejal oak.`),
        inspect: { kind: 'doc', html: D('🪵 <b>Step 3</b><br>Wood: solid oak, healthy<br>Screws: loosened by hand, fresh scratches<br>A squeak is made by a LOOSE tread, not a rotten one.<br><small>Rotten wood is soft and brown. This is clean and hard.</small>', '🪵 <b>Anak tangga 3</b><br>Kayu: oak pepejal, sihat<br>Skru: dilonggarkan dengan tangan, calar baru<br>Keriut dibuat oleh papak LONGGAR, bukan reput.<br><small>Kayu reput lembut dan perang. Ini bersih dan keras.</small>') } },
      { id: 'fishing_line', type: 'physical', icon: '🎣', title: T('Almost invisible fishing line', 'Tali pancing hampir tidak nampak'), where: T('Along the banister', 'Sepanjang tangan tangga'),
        desc: T(`A clear fishing line tied to the bottom of step 3 runs up the banister and disappears into the attic hatch.`, `Tali pancing jernih diikat di bawah anak tangga 3 melalui tangan tangga dan hilang ke dalam pintu loteng.`),
        inspect: { kind: 'doc', html: D('🎣 <b>Fishing line</b><br>From step 3 → up the banister → into the attic hatch.<br><small>A person pulling the line from upstairs makes the step squeak, "by itself".</small>', '🎣 <b>Tali pancing</b><br>Dari anak tangga 3 → ke atas tangan tangga → ke pintu loteng.<br><small>Orang yang menarik tali dari atas membuat anak tangga berkeriut, "sendiri".</small>') } },
      { id: 'panel_lock', type: 'physical', icon: '🔐', title: T('Panel with a combination lock', 'Panel dengan kunci kombinasi'), where: T('Landing wall', 'Dinding landing'),
        desc: T(`A small wooden panel in the landing wall with a brass 3-digit lock. Icy air leaks around its edge. A carved note: "Count on it."`, `Panel kayu kecil pada dinding landing dengan kunci tembaga 3 digit. Udara sejuk bocor di tepinya. Nota terukir: "Kira atasnya."`),
        puzzle: 'pz_panel', inspect: { kind: 'puzzle-doc',
          html: D('🔐 <b>Carved on the panel</b><br>"Count on it.<br>2, 4, 6, ?<br>8, 6, 4, ?<br>1, 1, 2, 3, 5, ?"', '🔐 <b>Terukir pada panel</b><br>"Kira atasnya.<br>2, 4, 6, ?<br>8, 6, 4, ?<br>1, 1, 2, 3, 5, ?"'),
          fixedHtml: D('🔐 The panel swings open: a hidden STUDY behind the landing wall. ✔', '🔐 Panel terbuka: sebuah BILIK KAJIAN tersembunyi di belakang dinding landing. ✔') } },
      /* CLASSROOM */
      { id: 'lever_board', type: 'physical', icon: '⚖️', title: T('Hinged plank with a string', 'Papak berengsel dengan tali'), where: T('Classroom 3B, behind the door', 'Bilik 3B, di belakang pintu'),
        desc: T(`A long plank on a hinge with a string at the LONG end running to the attic hatch. A short end presses on a pipe going down to the staircase.`, `Papak panjang pada engsel dengan tali di hujung PANJANG menuju ke pintu loteng. Hujung pendek menekan paip yang turun ke tangga.`),
        puzzle: 'pz_lever', inspect: { kind: 'puzzle-doc',
          html: D('⚖️ <b>The plank</b><br>Hinge (pivot) near the SHORT end.<br>Pull at the LONG end → the short end moves a little but PUSHES hard.<br><small>This is a lever.</small>', '⚖️ <b>Papak itu</b><br>Engsel (pivot) dekat hujung PENDEK.<br>Tarik di hujung PANJANG → hujung pendek bergerak sedikit tetapi MENOLAK kuat.<br><small>Ini ialah tuil.</small>'),
          fixedHtml: D('⚖️ A lever turns a small pull into a strong push: someone built it to make the step squeak from far away. ✔', '⚖️ Tuil menukar tarikan kecil kepada tolakan kuat: seseorang membinanya untuk membuat anak tangga berkeriut dari jauh. ✔') } },
      { id: 'club_poster', type: 'document', icon: '📌', title: T('Science Club poster', 'Poster Kelab Sains'), where: T('Classroom 3B wall', 'Dinding Bilik 3B'),
        desc: T(`A poster about tonight's Science Club ghost-measuring night.`, `Poster tentang malam mengukur hantu Kelab Sains malam ini.`),
        inspect: { kind: 'doc', html: D('<b>SCIENCE CLUB — GHOST NIGHT</b><br>Arrive 8:30 pm. Bring a thermometer.<br><small>"Ghosts do not exist. But strange sounds always have causes!" — Ms Ada</small>', '<b>KELAB SAINS — MALAM HANTU</b><br>Tiba 8:30 mlm. Bawa termometer.<br><small>"Hantu tidak wujud. Tetapi bunyi pelik sentiasa ada sebab!" — Cik Ada</small>') } },
      /* ATTIC */
      { id: 'owl_pellet', type: 'physical', icon: '🪶', title: T('A grey pellet full of tiny bones', 'Pelet kelabu penuh tulang kecil'), where: T('Attic floor', 'Lantai loteng'),
        desc: T(`A dry grey lump the size of a thumb. Inside: tiny mouse bones and fur. A food-chain card lies beside it.`, `Seketul kering kelabu sebesar ibu jari. Di dalam: tulang tikus kecil dan bulu. Kad rantai makanan ada di sebelahnya.`),
        puzzle: 'pz_pellet', inspect: { kind: 'puzzle-doc',
          html: D('🪶 <b>FOOD-CHAIN CARD</b><br>Seeds → Mouse → <b>Barn owl</b><br>Barn owls swallow mice whole and cough up the bones and fur as a pellet.<br><small>Young owls chatter, hiss and click their beaks at night.</small>', '🪶 <b>KAD RANTAI MAKANAN</b><br>Biji → Tikus → <b>Burung hantu</b><br>Burung hantu menelan tikus bulat-bulat dan memuntahkan tulang dan bulu sebagai pelet.<br><small>Anak burung hantu berdecit, mendesis dan mengetuk paruh pada waktu malam.</small>'),
          fixedHtml: D('🪶 The pellet = a barn owl\'s. The attic tapping is owl chicks clicking their beaks. ✔', '🪶 Pelet = milik burung hantu. Ketukan loteng ialah anak burung hantu mengetuk paruh. ✔') } },
      { id: 'feathers', type: 'physical', icon: '🪽', title: T('Soft pale feathers', 'Bulu lembut pucat'), where: T('Attic beam', 'Alang loteng'),
        desc: T(`Pale, very soft feathers with fringed edges. They make no sound when waved.`, `Bulu pucat yang sangat lembut dengan tepi berumbai. Ia tidak berbunyi apabila dikibas.`),
        inspect: { kind: 'doc', html: D('🪽 <b>Feathers</b><br>Fringed edges = silent flight (owls).<br><small>A real ghost leaves no feathers.</small>', '🪽 <b>Bulu</b><br>Tepi berumbai = terbang senyap (burung hantu).<br><small>Hantu sebenar tidak meninggalkan bulu.</small>') } },
      { id: 'attic_window', type: 'document', icon: '🪟', title: T('Broken attic window', 'Tingkap loteng pecah'), where: T('Attic wall', 'Dinding loteng'),
        desc: T(`A cracked pane high in the wall, with a nest of straw below.`, `Cermin retak tinggi pada dinding, dengan sarang jerami di bawahnya.`),
        inspect: { kind: 'doc', html: D('<b>Broken pane</b><br>Old crack with weathered edges and a straw nest beneath.<br><small>The owls came in months ago. This has nothing to do with tonight\'s stairs.</small>', '<b>Cermin pecah</b><br>Retak lama dengan tepi usang dan sarang jerami di bawah.<br><small>Burung hantu masuk beberapa bulan lalu. Ini tiada kaitan dengan tangga malam ini.</small>') } },
      /* HIDDEN STUDY */
      { id: 'founders_deed', type: 'document', icon: '📜', title: T("Founder's deed, 1975", 'Surat hak pengasas, 1975'), where: T('Hidden study desk', 'Meja bilik kajian tersembunyi'),
        desc: T(`A yellowed legal paper in a glass frame. Some words have faded.`, `Kertas undang-undang kekuning-kuningan dalam bingkai kaca. Beberapa perkataan telah pudar.`),
        puzzle: 'pz_deed', inspect: { kind: 'puzzle-doc',
          html: D('📜 <b>DEED OF GIFT, 1975</b><br>"This land ____ given to the children of Alder for ever. It ____ never be sold. If anyone tries, the land will ____ to the town."', '📜 <b>SURAT PEMBERIAN, 1975</b><br>"This land ____ given to the children of Alder for ever. It ____ never be sold. If anyone tries, the land will ____ to the town."'),
          fixedHtml: D('📜 "This land <u>was</u> given to the children of Alder for ever. It <u>shall</u> never be sold. If anyone tries, the land will <u>pass</u> to the town." ✔', '📜 "This land <u>was</u> given to the children of Alder for ever. It <u>shall</u> never be sold. If anyone tries, the land will <u>pass</u> to the town." ✔') },
        needsFlag: 'panel_open' },
      { id: 'pell_bag', type: 'physical', icon: '💼', title: T("Pell's inspector bag", 'Beg pemeriksa Pell'), where: T('Hidden study floor', 'Lantai bilik kajian tersembunyi'),
        desc: T(`A black bag with the logo "Cobalt Land". Inside: a screwdriver, a reel of fishing line, and a letter.`, `Beg hitam berlogo "Cobalt Land". Di dalam: pemutar skru, gelendong tali pancing, dan sepucuk surat.`),
        inspect: { kind: 'doc', html: D('💼 <b>Inspector bag</b><br>🪛 Screwdriver (fresh sawdust)<br>🎣 Reel of the same clear fishing line<br>✉️ Letter from Cobalt Land (see below)', '💼 <b>Beg pemeriksa</b><br>🪛 Pemutar skru (habuk papan baru)<br>🎣 Gelendong tali pancing jernih yang sama<br>✉️ Surat daripada Cobalt Land (lihat bawah)') } },
      { id: 'cobalt_letter', type: 'document', icon: '✉️', title: T('Letter from Cobalt Land', 'Surat daripada Cobalt Land'), where: T("In Pell's bag", 'Dalam beg Pell'),
        desc: T(`A letter to Pell about the land.`, `Surat kepada Pell tentang tanah.`),
        inspect: { kind: 'doc', html: D('<b>COBALT LAND LTD</b><br>"We will pay <b>RM 4,000,000</b> for the Alder land <b>if Block C is declared UNSAFE</b>. You get 10%: <b>RM 400,000</b>. Make it convincing."', '<b>COBALT LAND LTD</b><br>"Kami akan bayar <b>RM 4,000,000</b> untuk tanah Alder <b>jika Blok C diisytiharkan TIDAK SELAMAT</b>. Anda dapat 10%: <b>RM 400,000</b>. Buat ia meyakinkan."') }, needsFlag: 'panel_open' },
      { id: 'boot_print', type: 'physical', icon: '👢', title: T('Boot prints with a logo', 'Tapak but berlogo'), where: T('Dust in the hidden study', 'Habuk dalam bilik kajian tersembunyi'),
        desc: T(`Clear prints in the dust: size 10 safety boots with a small "CL" logo in the heel, leading from the panel to the bag.`, `Tapak jelas dalam habuk: but keselamatan saiz 10 dengan logo "CL" kecil pada tumit, dari panel ke beg.`),
        inspect: { kind: 'doc', html: D('👢 <b>Boot prints</b><br>Size 10 · heel logo <b>CL</b> (Cobalt Land safety boots)<br><small>Mr. Tan wears size 8 work boots. Pell wears CL boots.</small>', '👢 <b>Tapak but</b><br>Saiz 10 · logo tumit <b>CL</b> (but keselamatan Cobalt Land)<br><small>Encik Tan pakai but kerja saiz 8. Pell pakai but CL.</small>') }, needsFlag: 'panel_open' },
      { id: 'stair_cam', type: 'photo', icon: '📸', photo: true, title: T('Club camera photo, 8:12 pm', 'Gambar kamera kelab, 8:12 mlm'), art: 'stair_cam', stampT: mm('8:12'), stampLabel: T('Club camera (correct time)', 'Kamera kelab (masa betul)'),
        desc: T(`A night photo of the staircase from the Science Club camera.`, `Gambar malam tangga daripada kamera Kelab Sains.`),
        zoomNotice: T(`You zoom in: a man in a hi-vis jacket kneels on step 3 with a screwdriver, a tool bag beside him. It is 8:12 pm, before the club arrived.`, `Anda zum: seorang lelaki berjaket reflektif melutut di anak tangga 3 dengan pemutar skru, beg alat di sebelahnya. Pukul 8:12 mlm, sebelum kelab tiba.`),
        timeline: T('A man in hi-vis kneels at step 3 with a screwdriver at 8:12 pm.', 'Lelaki berjaket reflektif melutut di anak tangga 3 dengan pemutar skru pukul 8:12 mlm.') },

      { id: 'inf_cold', kind: 'inference', type: 'deduction', icon: '💡', title: T('Cold air is coming from a hidden space behind the landing wall', 'Udara sejuk datang dari ruang tersembunyi di belakang dinding landing'), desc: T(`8°C colder than the hall, coldest BEHIND the wall: not a ghost, a draught from an open vent.`, `8°C lebih sejuk daripada dewan, paling sejuk DI BELAKANG dinding: bukan hantu, angin dari lubang angin terbuka.`) },
      { id: 'inf_lever', kind: 'inference', type: 'deduction', icon: '💡', title: T('A lever and a line make the step squeak from afar', 'Tuil dan tali membuat anak tangga berkeriut dari jauh'), desc: T(`Fishing line + hinged plank + a loosened step: a machine, not a spirit. Someone with tools built it.`, `Tali pancing + papak berengsel + anak tangga longgar: mesin, bukan roh. Seseorang yang ada alat membinanya.`) },
      { id: 'inf_owl', kind: 'inference', type: 'deduction', icon: '💡', title: T('The attic tapping is barn owl chicks', 'Ketukan loteng ialah anak burung hantu'), desc: T(`Pellets and fringed feathers: owls live in the attic. That "ghost" is innocent.`, `Pelet dan bulu berumbai: burung hantu tinggal di loteng. "Hantu" itu tidak bersalah.`) },
      { id: 'inf_deed', kind: 'inference', type: 'deduction', icon: '💡', title: T('The land can NEVER be sold: Pell\'s plan was pointless', 'Tanah TIDAK BOLEH dijual: rancangan Pell sia-sia'), desc: T(`The deed says the land passes to the town if anyone tries to sell. Cobalt's RM 4 million would never have been legal.`, `Surat hak berkata tanah beralih kepada bandar jika sesiapa cuba menjual. RM 4 juta Cobalt tidak akan sah.`) },

      { id: 'c_pell_time', kind: 'claim', person: 'pell', t: mm('7:30'), type: 'statement', icon: '💬', title: T('Pell: "I arrived at 8:30 and the stairs were already squeaking."', 'Pell: "Saya tiba pukul 8:30 dan tangga sudah berkeriut."'), desc: T('He says the squeaking started before he came.', 'Dia kata keriut bermula sebelum dia datang.') },
      { id: 'c_pell_safe', kind: 'claim', person: 'pell', t: 0, type: 'statement', icon: '💬', title: T('Pell: "The old stairs are rotten and dangerous!"', 'Pell: "Tangga lama reput dan berbahaya!"'), desc: T('He says the wood is rotten.', 'Dia kata kayu reput.') },
      { id: 'c_pell_study', kind: 'claim', person: 'pell', t: 0, type: 'statement', icon: '💬', title: T('Pell: "I have never seen any hidden room."', 'Pell: "Saya tidak pernah nampak bilik tersembunyi."'), desc: T('He says he knows nothing about a secret study.', 'Dia kata dia tidak tahu bilik rahsia.') },
      { id: 'c_tan_repair', kind: 'claim', person: 'tan', t: 0, type: 'statement', icon: '💬', title: T('Tan: "I rebuilt those stairs in solid oak. They hold 400 kg."', 'Tan: "Saya bina tangga itu dengan oak pepejal. Ia tahan 400 kg."'), desc: T('The carpenter defends his work.', 'Tukang kayu mempertahankan kerjanya.') },
      { id: 'c_ada_cold', kind: 'claim', person: 'ada', t: 0, type: 'statement', icon: '💬', title: T('Ada: "The cold spot is a draught, not a ghost."', 'Ada: "Tempat sejuk ialah angin, bukan hantu."'), desc: T('The science teacher says it is air.', 'Guru sains kata ia udara.') },
      { id: 'c_alder_deed', kind: 'claim', person: 'alder', t: 0, type: 'statement', icon: '💬', title: T('Alder: "My grandmother hid the school papers somewhere in this block."', 'Alder: "Nenek saya menyorok kertas sekolah di suatu tempat dalam blok ini."'), desc: T('She believes the founding papers are hidden.', 'Dia percaya kertas penubuhan tersembunyi.') }
    ],

    pairs: [
      { a: 'c_pell_time', b: 'inspection_report', type: 'contradiction', person: 'pell', text: T('He says he arrived at 7:30 and decided on the spot. His UNSAFE report was printed at 6:45 pm, before he arrived.', 'Dia kata tiba 7:30 dan memutuskan serta-merta. Laporan TIDAK SELAMAT dicetak pukul 6:45 ptg, sebelum dia tiba.'), explain: T('The verdict was decided before he even saw the stairs.', 'Keputusan dibuat sebelum dia melihat tangga.') },
      { a: 'c_pell_time', b: 'stair_cam', type: 'contradiction', person: 'pell', text: T('The 8:12 photo shows him kneeling at step 3 with a screwdriver. He claims he arrived at 8:30.', 'Gambar 8:12 menunjukkan dia melutut di anak tangga 3 dengan pemutar skru. Dia kata tiba 8:30.'), explain: T('He was there 18 minutes before he says.', 'Dia ada di situ 18 minit lebih awal daripada katanya.') },
      { a: 'c_pell_safe', b: 'loose_tread', type: 'contradiction', person: 'pell', text: T('He says the wood is rotten. Step 3 is clean oak with fresh screwdriver scratches.', 'Dia kata kayu reput. Anak tangga 3 ialah oak bersih dengan calar pemutar skru baru.'), explain: T('Loosened, not rotten.', 'Dilonggarkan, bukan reput.') },
      { a: 'c_pell_safe', b: 'repair_log', type: 'contradiction', person: 'pell', text: T('The log says the stairs were rebuilt in June and passed a 400 kg test.', 'Log berkata tangga dibina semula Jun dan lulus ujian 400 kg.'), explain: T('Safe stairs cannot be "rotten".', 'Tangga selamat tidak boleh "reput".') },
      { a: 'c_pell_study', b: 'boot_print', type: 'contradiction', person: 'pell', requires: ['panel_open'], text: T('CL-logo boot prints lead from the panel to his own bag in the hidden study.', 'Tapak but logo CL dari panel ke beg miliknya dalam bilik kajian tersembunyi.'), explain: T('He has been inside the hidden room.', 'Dia pernah masuk bilik tersembunyi itu.') },
      { a: 'c_tan_repair', b: 'repair_log', type: 'support', person: 'tan', text: T('The repair log matches what Mr. Tan says.', 'Log baikan sepadan dengan kata Encik Tan.') },
      { a: 'c_ada_cold', b: 'thermo_chart', type: 'support', person: 'ada', requires: ['cold_solved'], text: T('The chart shows cold air leaking from behind the wall, just as she says.', 'Carta menunjukkan udara sejuk bocor dari belakang dinding, seperti katanya.') },
      { a: 'c_alder_deed', b: 'founders_deed', type: 'support', person: 'alder', requires: ['deed_read'], text: T('The deed in the hidden study is exactly the paper she hoped to find.', 'Surat hak dalam bilik tersembunyi ialah kertas yang dia harap temui.') }
    ],

    puzzles: {
      pz_cold: { subject: 'science', title: T('Track the cold air', 'Jejaki udara sejuk'), grants: { flags: ['cold_solved'], items: ['inf_cold'] }, tokens: 0,
        intro: T('Read the chart. Cold air leaks from where it is coldest.', 'Baca carta. Udara sejuk bocor dari tempat paling sejuk.'),
        steps: [
          { type: 'number', q: T('The hall is 21°C and the landing is 13°C. How many degrees colder is the landing?', 'Dewan 21°C dan landing 13°C. Berapa darjah lebih sejuk landing?'), answer: 8, options: [6, 7, 8, 9], unit: T('°C', '°C'), hints: [T('21 − 13 = ?', '21 − 13 = ?')] },
          { type: 'choice', q: T('Where is the air COLDEST?', 'Di mana udara PALING sejuk?'), options: [T('Ground Hall', 'Dewan Bawah'), T('On the stairs', 'Di tangga'), T('Behind the landing wall', 'Di belakang dinding landing')], answer: 2, hints: [T('Find the lowest number: 10°C.', 'Cari nombor paling rendah: 10°C.')] },
          { type: 'choice', q: T('So where is the cold air coming from?', 'Jadi dari mana datangnya udara sejuk?'), options: [T('A ghost', 'Hantu'), T('A hidden space behind the wall with a vent open', 'Ruang tersembunyi di belakang dinding dengan lubang angin terbuka'), T('The classroom heater', 'Pemanas bilik darjah')], answer: 1, hints: [T('Cold air flows out from its source.', 'Udara sejuk mengalir keluar dari sumbernya.')] }
        ],
        after: T('A cold draught from a hidden space! There is a secret door in the landing wall.', 'Angin sejuk dari ruang tersembunyi! Ada pintu rahsia di dinding landing.') },
      pz_panel: { subject: 'thinking', title: T('Open the secret panel', 'Buka panel rahsia'), grants: { flags: ['panel_open'], items: [] }, tokens: 0,
        intro: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
        steps: [{ type: 'code', q: T('Find the next number in each pattern.', 'Cari nombor seterusnya dalam setiap corak.'), patterns: ['2, 4, 6, ?', '8, 6, 4, ?', '1, 1, 2, 3, 5, ?'], answer: '828',
          hints: [T('Pattern 1 adds 2. Pattern 2 subtracts 2.', 'Corak 1 tambah 2. Corak 2 tolak 2.'), T('Pattern 3: add the last two numbers (3+5=?).', 'Corak 3: tambah dua nombor terakhir (3+5=?).'), T('The code is 8, 2, 8.', 'Kodnya ialah 8, 2, 8.')] }],
        after: T('The panel opens. Inside the hidden study: dust, a desk, and a black inspector bag!', 'Panel terbuka. Dalam bilik tersembunyi: habuk, meja, dan beg pemeriksa hitam!') },
      pz_lever: { subject: 'science', title: T('How does the lever work?', 'Bagaimana tuil berfungsi?'), grants: { flags: ['lever_solved'], items: ['inf_lever'] }, tokens: 1,
        intro: T('A lever is a bar that turns around a pivot. Look at where the pivot is.', 'Tuil ialah bar yang berputar pada pangsi. Lihat di mana pangsi.'),
        steps: [
          { type: 'choice', q: T('The pivot is near the SHORT end. Which end moves FARTHER when pulled?', 'Pangsi dekat hujung PENDEK. Hujung mana bergerak LEBIH JAUH apabila ditarik?'), options: [T('The long end', 'Hujung panjang'), T('The short end', 'Hujung pendek'), T('Both the same', 'Kedua-duanya sama')], answer: 0, hints: [T('The longer end swings in a bigger circle.', 'Hujung lebih panjang berayun dalam bulatan lebih besar.')] },
          { type: 'choice', q: T('The short end moves little but pushes HARD. What does the lever do?', 'Hujung pendek bergerak sedikit tetapi menolak KUAT. Apa tuil buat?'), options: [T('Turns a small pull into a strong push', 'Menukar tarikan kecil kepada tolakan kuat'), T('Makes things lighter', 'Menjadikan benda lebih ringan'), T('Makes sound', 'Menghasilkan bunyi')], answer: 0, hints: [T('Think of a seesaw: a small push far from the middle lifts a big load.', 'Fikir jongkang-jongket: tolakan kecil jauh dari tengah mengangkat beban besar.')] },
          { type: 'choice', q: T('A string runs from the long end to the attic. Who needs to be at the other end?', 'Tali dari hujung panjang ke loteng. Siapa perlu berada di hujung satu lagi?'), options: [T('A person pulling the string, or the string tied so it pulls by itself', 'Seseorang menarik tali, atau tali diikat supaya menarik sendiri'), T('A ghost', 'Hantu'), T('Nobody at all', 'Tiada sesiapa')], answer: 0, hints: [T('Machines do not move by magic.', 'Mesin tidak bergerak dengan sihir.')] }
        ],
        after: T('A hand-made machine for squeaking the stairs! You earn 1 hint token.', 'Mesin buatan tangan untuk membuat tangga berkeriut! Anda dapat 1 token petunjuk.') },
      pz_pellet: { subject: 'science', title: T('Who made the pellet?', 'Siapa membuat pelet?'), grants: { flags: ['owl_solved'], items: ['inf_owl'] }, tokens: 0,
        intro: T('Use the food-chain card.', 'Guna kad rantai makanan.'),
        steps: [
          { type: 'choice', q: T('In the chain Seeds → Mouse → Barn owl, which animal is the PREDATOR?', 'Dalam rantai Biji → Tikus → Burung hantu, haiwan mana PEMANGSA?'), options: [T('Mouse', 'Tikus'), T('Barn owl', 'Burung hantu'), T('Seeds', 'Biji')], answer: 1, hints: [T('A predator hunts and eats other animals.', 'Pemangsa memburu dan makan haiwan lain.')] },
          { type: 'choice', q: T('What is inside the grey pellet?', 'Apa di dalam pelet kelabu?'), options: [T('Mouse bones and fur', 'Tulang dan bulu tikus'), T('Seeds', 'Biji'), T('Metal', 'Logam')], answer: 0, hints: [T('Read the card: owls cough up what they cannot digest.', 'Baca kad: burung hantu muntah apa yang tidak boleh dicerna.')] },
          { type: 'choice', q: T('Who is making the clicking and tapping in the attic at night?', 'Siapa membuat bunyi klik dan ketukan di loteng pada waktu malam?'), options: [T('Young owls clicking their beaks', 'Anak burung hantu mengetuk paruh'), T('A ghost', 'Hantu'), T('Mr. Pell', 'Encik Pell')], answer: 0, hints: [T('The card says young owls click their beaks at night.', 'Kad berkata anak burung hantu mengetuk paruh pada waktu malam.')] }
        ],
        after: T('The attic "ghost" is a family of barn owls. Innocent and a little bit cute!', '"Hantu" loteng ialah keluarga burung hantu. Tidak bersalah dan agak comel!') },
      pz_deed: { subject: 'english', title: T('Restore the old deed', 'Pulihkan surat hak lama'), grants: { flags: ['deed_read'], items: ['inf_deed'] }, tokens: 0,
        intro: T('Choose the correct word for each gap.', 'Pilih perkataan yang betul untuk setiap ruang.'),
        steps: [{ type: 'cloze', q: T('Restore the deed:', 'Pulihkan surat hak:'),
          parts: ['"This land ', { blank: ['is', 'was', 'were'], answer: 'was' }, ' given to the children of Alder for ever. It ', { blank: ['shall', 'shell', 'shale'], answer: 'shall' }, ' never be sold. If anyone tries, the land will ', { blank: ['pass', 'past', 'passed'], answer: 'pass' }, ' to the town."'],
          hints: [T('A gift in the past: "was given".', 'Hadiah pada masa lampau: "was given".')  , T('"shall" means must / will. After "will" use the base verb: pass.', '"shall" bermaksud mesti. Selepas "will" guna kata dasar: pass.')] }],
        after: T('The land can NEVER be sold. Cobalt\'s plan was pointless from the start!', 'Tanah TIDAK BOLEH dijual. Rancangan Cobalt sia-sia sejak awal!') }
    },

    questions: [
      { id: 'q_how', title: T('1. What is making the "haunted" stairs squeak?', '1. Apa membuat tangga "berhantu" berkeriut?'),
        options: [{ id: 'ghost', text: T('A ghost climbing.', 'Hantu mendaki.') }, { id: 'rotten', text: T('The stairs are rotten and falling apart.', 'Tangga reput dan hancur.') }, { id: 'staged', text: T('Someone loosened a step and rigged a lever and a line.', 'Seseorang melonggarkan anak tangga dan memasang tuil dan tali.'), correct: true }, { id: 'wind', text: T('The wind.', 'Angin.') }],
        needs: [['loose_tread', 'repair_log'], ['fishing_line', 'lever_board', 'inf_lever']], needsFlags: ['lever_solved'], hints: [T('Is the wood rotten? What does the line connect?', 'Adakah kayu reput? Apa disambung oleh tali?')] },
      { id: 'q_tap', title: T('2. What is tapping in the attic?', '2. Apa mengetuk di loteng?'),
        options: [{ id: 'ghost', text: T('A ghost.', 'Hantu.') }, { id: 'pell', text: T("Pell's machine.", 'Mesin Pell.') }, { id: 'owls', text: T('Barn owl chicks clicking their beaks.', 'Anak burung hantu mengetuk paruh.'), correct: true }, { id: 'pipes', text: T('Hot water pipes.', 'Paip air panas.') }],
        needs: [['owl_pellet', 'inf_owl'], ['feathers', 'attic_window']], needsFlags: ['owl_solved'], hints: [T('Look at the pellet and the feathers.', 'Lihat pelet dan bulu.')] },
      { id: 'q_when', title: T('3. When did the saboteur start working on the stairs?', '3. Bila penyabotaj mula bekerja pada tangga?'),
        options: [{ id: 'before', text: T('Before 6:45 pm', 'Sebelum 6:45 ptg') }, { id: 'early', text: T('Around 7:45–8:12 pm, before the club arrived', 'Sekitar 7:45–8:12 mlm, sebelum kelab tiba'), correct: true }, { id: 'late', text: T('After 9:00 pm', 'Selepas 9:00 mlm') }, { id: 'never', text: T('Never', 'Tidak pernah') }],
        needs: [['stair_cam'], ['inspection_report']], needsFlags: [], hints: [T('The camera photo and the report time are your clues.', 'Gambar kamera dan masa laporan ialah petunjuk anda.')] },
      { id: 'q_who', title: T('4. Who rigged the staircase?', '4. Siapa memasang perangkap pada tangga?'),
        options: [{ id: 'pell', text: T('Mr. Pell', 'Encik Pell'), correct: true }, { id: 'ada', text: T('Ms. Ada', 'Cik Ada') }, { id: 'tan', text: T('Mr. Tan', 'Encik Tan') }, { id: 'sam', text: T('Sam', 'Sam') }, { id: 'alder', text: T('Mrs. Alder', 'Puan Alder') }],
        needs: [['stair_cam'], ['boot_print', 'pell_bag'], ['inspection_report', 'cobalt_letter']], needsFlags: ['panel_open'], hints: [T('Whose boots, whose bag, whose early report?', 'But siapa, beg siapa, laporan awal siapa?')] },
      { id: 'q_why', title: T('5. WHY did he do it?', '5. KENAPA dia melakukannya?'),
        options: [{ id: 'fun', text: T('For fun.', 'Untuk keseronokan.') }, { id: 'land', text: T('So the block is declared unsafe and Cobalt Land can buy the land (he gets RM 400,000).', 'Supaya blok diisytiharkan tidak selamat dan Cobalt Land boleh membeli tanah (dia dapat RM 400,000).'), correct: true }, { id: 'save', text: T('To save the school.', 'Untuk menyelamatkan sekolah.') }, { id: 'ghost', text: T('He believes in ghosts.', 'Dia percaya hantu.') }],
        needs: [['cobalt_letter'], ['founders_deed', 'inf_deed', 'inspection_report']], needsFlags: ['panel_open'], hints: [T('Read the letter from Cobalt Land and the old deed.', 'Baca surat daripada Cobalt Land dan surat hak lama.')] }
    ],

    conclusion: {
      who: { correct: 'pell' }, what: { questionId: 'q_how' }, when: { questionId: 'q_when' },
      where: [{ id: 'study', text: T("In his bag in the hidden study behind the landing", 'Dalam begnya di bilik tersembunyi di belakang landing'), correct: true }, { id: 'car', text: T('In his car', 'Dalam keretanya') }, { id: 'attic', text: T('In the attic', 'Di loteng') }, { id: 'river', text: T('In the river', 'Dalam sungai') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }],
      whereQ: T('WHERE are his tools and the Cobalt letter hidden?', 'DI MANA alat dan surat Cobalt disorokkan?'),
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_tread', label: T('Loosened, not rotten', 'Dilonggarkan, bukan reput'), items: ['loose_tread', 'repair_log'] },
        { id: 'g_machine', label: T('The lever machine', 'Mesin tuil'), items: ['fishing_line', 'lever_board', 'inf_lever'] },
        { id: 'g_cam', label: T('Seen at step 3 at 8:12', 'Dilihat di anak tangga 3 pukul 8:12'), items: ['stair_cam', 'inspection_report'] },
        { id: 'g_bag', label: T('His boots and bag', 'But dan begnya'), items: ['boot_print', 'pell_bag'] },
        { id: 'g_motive', label: T('The motive', 'Motif'), items: ['cobalt_letter', 'inf_deed', 'founders_deed'] },
        { id: 'g_lie', label: T("Pell's lies", 'Pembohongan Pell'), items: ['c_pell_time', 'c_pell_safe', 'c_pell_study'] }
      ],
      strongCoverage: 4, secondary: ['thermo_chart', 'inf_cold', 'owl_pellet', 'feathers', 'school_history'], secondaryNeeded: 2,
      lieFlags: ['c_pell_time', 'c_pell_safe', 'c_pell_study']
    },

    endings: kit.endings({
      secret: { title: T('The Owls of Block C', 'Burung Hantu Blok C'), when: (r) => r.flags.owl_solved && r.flags.deed_read,
        text: T(`You solve the case AND you protect the owls. Mr. Pell is arrested and Cobalt Land is fined. Mrs. Alder frames her grandmother's deed in the hall, and the Science Club builds a safe owl box in the attic. The staircase never squeaks again. Every spring the owl chicks tap out their "Hello" over the old block.`,
          `Anda menyelesaikan kes ini DAN melindungi burung hantu. Encik Pell ditangkap dan Cobalt Land didenda. Puan Alder membingkaikan surat hak neneknya di dewan, dan Kelab Sains membina kotak burung hantu yang selamat di loteng. Tangga tidak berkeriut lagi. Setiap musim bunga anak burung hantu mengetuk "Helo" mereka di atas blok lama.`) },
      perfect: { title: T('Case Closed!', 'Kes Selesai!'),
        text: T(`Excellent! You proved Mr. Pell loosened the step, built the lever and line, opened the vent and printed his UNSAFE report before he arrived — all for a RM 4 million land deal. The old block is saved and the stairs hold 400 kg again.`,
          `Hebat! Anda membuktikan Encik Pell melonggarkan anak tangga, membina tuil dan tali, membuka lubang angin dan mencetak laporan TIDAK SELAMAT sebelum dia tiba — semua demi tawaran tanah RM 4 juta. Blok lama diselamatkan dan tangga menahan 400 kg semula.`) },
      missed: { title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        text: T(`Right answer, strong proof! But you missed side clues: the temperature chart, the owl pellet or the plaque. Because of that the "attic ghost" is still feared, and the owls get no new home.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: carta suhu, pelet burung hantu atau plak. Kerana itu "hantu loteng" masih ditakuti, dan burung hantu tidak mendapat rumah baru.`) },
      weak: { text: T(`You named the right person, but the proof is weak. Check the step, the lever and the 8:12 photo. Hurry!`, `Anda menyebut orang yang betul, tetapi bukti lemah. Semak anak tangga, tuil dan gambar 8:12. Cepat!`) },
      wrong: { text: T(`Oh no — that was not right. Ask yourself: whose report was printed before he arrived, and whose boots left the CL prints?`, `Alamak — itu tidak betul. Tanya diri anda: laporan siapa dicetak sebelum dia tiba, dan but siapa meninggalkan tapak CL?`) }
    }),
    wrongWho: {
      ada: T('Ms Ada measures the sounds because she does not believe in ghosts. She arrived at 8:30 with the club.', 'Cik Ada mengukur bunyi kerana dia tidak percaya hantu. Dia tiba 8:30 bersama kelab.'),
      tan: T("Mr. Tan built the stairs well; the repair log proves it. He wears size 8 boots, not the CL size 10.", 'Encik Tan membina tangga dengan baik; log baikan membuktikannya. Dia pakai but saiz 8, bukan CL saiz 10.'),
      sam: T('Sam loves pranks but arrived at 8:30 with the club and has no tools.', 'Sam suka bergurau tetapi tiba 8:30 bersama kelab dan tiada alat.'),
      alder: T('Mrs. Alder wants to SAVE the school. Closing it would hurt her most.', 'Puan Alder mahu MENYELAMATKAN sekolah. Penutupan paling menyakitkannya.')
    },

    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      pell: {
        greeting: T(`Inspector Pell. I regret to say this building is a death trap. Squeaking stairs, cold spots... it has to be closed tonight.`, `Pemeriksa Pell. Saya kesal berkata bangunan ini perangkap maut. Tangga berkeriut, tempat sejuk... ia mesti ditutup malam ini.`),
        topics: [
          { id: 'time', label: T('When did you arrive?', 'Bila anda tiba?'), lines: [T('At half past eight. The stairs were already squeaking. I only noted what I saw.', 'Pukul lapan setengah. Tangga sudah berkeriut. Saya hanya mencatat apa yang saya nampak.')], claims: ['c_pell_time'] },
          { id: 'safe', label: T('Are the stairs really rotten?', 'Adakah tangga benar-benar reput?'), lines: [T('Rotten to the core. Dangerous. Children could fall through.', 'Reput hingga ke dalam. Bahaya. Kanak-kanak boleh jatuh.')], claims: ['c_pell_safe'] },
          { id: 'study', label: T('Do you know about a hidden room?', 'Adakah anda tahu bilik tersembunyi?'), lines: [T('A hidden room? Nonsense. I have never seen one.', 'Bilik tersembunyi? Karut. Saya tidak pernah nampak.')], claims: ['c_pell_study'] },
          { id: 'job', label: T('Who do you work for?', 'Anda bekerja untuk siapa?'), lines: [T('A land-management company. Independent. Totally independent.', 'Syarikat pengurusan tanah. Bebas. Sangat bebas.')] }
        ],
        present: {
          inspection_report: { lines: [T('...A typing error with the time. The printer clock is wrong!', '...Kesilapan taip masa. Jam pencetak salah!')] },
          loose_tread: { lines: [T('Old wood does that. Screws loosen over the years.', 'Kayu lama begitu. Skru longgar dari tahun ke tahun.')] },
          stair_cam: { lines: [T('...I was only testing the step. As an inspector I may test any step.', '...Saya cuma menguji anak tangga. Sebagai pemeriksa saya boleh uji mana-mana anak tangga.')] },
          boot_print: { lines: [T('...Lots of people wear those boots!', '...Ramai orang pakai but itu!')] },
          cobalt_letter: { lines: [T('...That is a private letter. Fine. Yes, I wanted that land. A building is just a building.', '...Itu surat peribadi. Baik. Ya, saya mahu tanah itu. Bangunan cuma bangunan.')] },
          founders_deed: { lines: [T('...Forever? Never be sold? ...Oh no. I did all this for nothing.', '...Selama-lamanya? Tidak boleh dijual? ...Oh tidak. Saya buat semua ini sia-sia.')] }
        }
      },
      ada: {
        greeting: T(`Ms Ada, Science Club. I love weird noises, because every one of them has a cause. Let's find it.`, `Cik Ada, Kelab Sains. Saya suka bunyi pelik, kerana setiap satu ada sebab. Mari cari.`),
        topics: [
          { id: 'cold', label: T('What about the cold spot?', 'Bagaimana tentang tempat sejuk?'), lines: [T('Cold air flows from somewhere. My thermometers say the landing wall is the coldest. A draught, not a ghost.', 'Udara sejuk mengalir dari suatu tempat. Termometer saya kata dinding landing paling sejuk. Angin, bukan hantu.')], claims: ['c_ada_cold'] },
          { id: 'photo', label: T('Any camera photos?', 'Ada gambar kamera?'), gives: ['stair_cam'], lines: [T('My club camera takes a photo every four minutes. Here is the 8:12 one. The clock is correct.', 'Kamera kelab saya mengambil gambar setiap empat minit. Ini yang 8:12. Jam betul.')] },
          { id: 'arrive', label: T('When did your club arrive?', 'Bila kelab anda tiba?'), lines: [T('At 8:30 pm. Before that Mr. Pell had the building alone.', 'Pukul 8:30 mlm. Sebelum itu Encik Pell sendirian di bangunan.')] }
        ],
        present: { lever_board: { requiresFlag: 'lever_solved', lines: [T('A lever! Someone built a squeak machine. Brilliant — and wicked.', 'Tuil! Seseorang membina mesin keriut. Bijak — dan jahat.')], lockedLines: [T('A plank on a hinge... I need to understand how it works. (Solve it first!)', 'Papak pada engsel... saya perlu faham cara ia berfungsi. (Selesaikan dahulu!)')] }, owl_pellet: { lines: [T('A pellet! Barn owls. We have owls?! I must tell the wildlife group.', 'Pelet! Burung hantu. Kita ada burung hantu?! Saya mesti beritahu kumpulan hidupan liar.')] } }
      },
      tan: {
        greeting: T(`Tan Wei, carpenter. Those stairs are my pride. If somebody says they are rotten, they are wrong.`, `Tan Wei, tukang kayu. Tangga itu kebanggaan saya. Jika seseorang kata ia reput, mereka salah.`),
        topics: [
          { id: 'oak', label: T('Tell me about the stairs.', 'Ceritakan tentang tangga.'), lines: [T('Solid oak, rebuilt in June. 400 kilos load test, passed.', 'Oak pepejal, dibina semula Jun. Ujian beban 400 kilo, lulus.')], claims: ['c_tan_repair'] },
          { id: 'step3', label: T('Is step 3 normally loose?', 'Adakah anak tangga 3 biasanya longgar?'), lines: [T('Never! I tightened every screw myself. Someone has been at it with a screwdriver.', 'Tidak pernah! Saya ketatkan setiap skru sendiri. Seseorang telah mengusiknya dengan pemutar skru.')] },
          { id: 'boots', label: T('What boots do you wear?', 'Apa but yang anda pakai?'), lines: [T('Size 8 work boots, brown. Nothing fancy.', 'But kerja saiz 8, perang. Tiada yang mewah.')] }
        ],
        present: { loose_tread: { lines: [T('I know my screws. Someone has been at this step with a screwdriver tonight.', 'Saya kenal skru saya. Seseorang telah menggunakan pemutar skru pada anak tangga ini malam ini.')] }, boot_print: { lines: [T('Not mine. I wear 8, those are 10.', 'Bukan saya. Saya pakai 8, itu 10.')] } }
      },
      sam: {
        greeting: T(`Cool, a real detective! I love ghost stories. I heard something TAP in the attic, like a tiny skeleton hand.`, `Hebat, detektif sebenar! Saya suka cerita hantu. Saya dengar sesuatu KETUK di loteng, seperti tangan rangka kecil.`),
        topics: [
          { id: 'tap', label: T('What did you hear?', 'Apa yang anda dengar?'), lines: [T('Tick-tick-tick! And a hiss. I ran. Then I saw feathers on the floor.', 'Tik-tik-tik! Dan desisan. Saya lari. Kemudian saya nampak bulu di lantai.')] },
          { id: 'prank', label: T('Did you prank anyone?', 'Adakah anda kenakan sesiapa?'), lines: [T('Me? Not tonight! I wanted a REAL ghost. Honest.', 'Saya? Bukan malam ini! Saya mahu hantu SEBENAR. Jujur.')] },
          { id: 'inspector', label: T('What do you think of Mr. Pell?', 'Apa pendapat anda tentang Encik Pell?'), lines: [T('He told us the stairs were rotten before he even touched them. Weird.', 'Dia kata tangga reput sebelum dia sentuh pun. Pelik.')] }
        ],
        present: { feathers: { lines: [T('Those! I saw them near the beam! Silent wings.', 'Itu! Saya nampak berhampiran alang! Sayap senyap.')] } }
      },
      alder: {
        greeting: T(`Rose Alder. My grandmother Edith built this school with her own hands. I will not let them close it.`, `Rose Alder. Nenek saya Edith membina sekolah ini dengan tangannya sendiri. Saya tidak akan benarkan mereka menutupnya.`),
        topics: [
          { id: 'papers', label: T('Do you know of any founding papers?', 'Adakah anda tahu kertas penubuhan?'), lines: [T('She hid the school papers somewhere in this block. She always said "behind the landing".', 'Dia menyorok kertas sekolah di suatu tempat dalam blok ini. Dia sentiasa berkata "di belakang landing".')], claims: ['c_alder_deed'] },
          { id: 'land', label: T('Is the land valuable?', 'Adakah tanah itu bernilai?'), lines: [T('Companies keep calling. She would turn in her grave.', 'Syarikat terus menelefon. Dia akan berasa sedih di kuburnya.')] },
          { id: 'code', label: T('Did she use a code?', 'Adakah dia guna kod?'), lines: [T('She loved number patterns: "count on it", she always said.', 'Dia suka corak nombor: "kira atasnya", katanya selalu.')] }
        ],
        present: { founders_deed: { requiresFlag: 'deed_read', lines: [T('There it is! Grandmother\'s promise! The school can never be sold!', 'Itu dia! Janji nenek! Sekolah tidak boleh dijual!')], lockedLines: [T('Old paper... I cannot read it. Fix the faded words!', 'Kertas lama... saya tidak boleh baca. Betulkan perkataan pudar!')] } }
      }
    },

    horror: {
      zones: [
        { id: 'gh_creak', room: 'GH', once: true, minScare: 1, delay: 3, fx: ['sfx:scratch', 'sfx:wind'], text: T('🪜 SQUEAK... SQUEAK... slow steps climb the stairs by themselves.', '🪜 KERIUT... KERIUT... langkah perlahan menaiki tangga sendiri.') },
        { id: 'gh_flicker', room: 'GH', once: true, minScare: 2, delay: 11, fx: ['flicker:GH:2', 'sfx:heartbeat'], text: T('💡 The lights flicker and a cold finger of air touches your neck.', '💡 Lampu berkelip dan jari udara sejuk menyentuh tengkuk anda.') },
        { id: 'sc_cold', room: 'SC', once: true, minScare: 1, delay: 2, fx: ['sfx:whisper', 'flash:blue'], text: T('❄️ Your breath turns to white mist on the landing.', '❄️ Nafas anda menjadi kabus putih di landing.') },
        { id: 'sc_squeak', room: 'SC', once: true, minScare: 2, delay: 7, fx: ['sfx:scratch', 'shake:0.5', 'music:tense:10'], text: T('👣 SQUEAK! Step 3 sinks under an invisible foot.', '👣 KERIUT! Anak tangga 3 tenggelam di bawah kaki tidak kelihatan.') },
        { id: 'uc_chalk', room: 'UC', once: true, minScare: 1, delay: 3, fx: ['sfx:scratch'], text: T('✏️ Chalk scrapes on the blackboard: it writes a single "?".', '✏️ Kapur menggaris papan hitam: ia menulis satu "?".') },
        { id: 'at_screech', room: 'AT', once: true, minScare: 1, delay: 2, fx: ['sfx:voice', 'flash:white'], text: T('🦉 A SCREECH from the dark! Two huge eyes blink and are gone.', '🦉 JERITAN dari gelap! Dua mata besar berkelip dan hilang.') },
        { id: 'at_tap', room: 'AT', once: true, minScare: 2, delay: 8, fx: ['sfx:knock', 'blackout:1.6'], text: T('🔦 Tap-tap-tap in the dark. Hissing. Something SOFT brushes your face.', '🔦 Ketuk-ketuk-ketuk dalam gelap. Mendesis. Sesuatu LEMBUT menyentuh muka anda.') },
        { id: 'hs_music', room: 'HS', once: true, minScare: 1, delay: 3, fx: ['sfx:musicbox'], text: T('🎵 A music box plays by itself, slow and out of tune.', '🎵 Kotak muzik berbunyi sendiri, perlahan dan sumbang.') },
        { id: 'hs_dust', room: 'HS', once: true, minScare: 2, delay: 9, fx: ['sfx:slam', 'shake:0.6'], text: T('🚪 The panel door SLAMS behind you!', '🚪 Pintu panel DIHEMPAS di belakang anda!') }
      ],
      figures: [
        { name: 'figure1', room: 'GH', minScare: 2, revealDistance: 3.2, flickerRoom: 'GH', reveal: T('A mop and a coat on a stand! (False alarm.)', 'Mop dan kot pada penyangkut! (Penggera palsu.)') },
        { name: 'figure2', room: 'HS', minScare: 2, revealDistance: 3.0, flickerRoom: 'HS', sfx: 'sting', reveal: T('An old school coat on a hook... but the hook is still swinging.', 'Kot sekolah lama pada cangkuk... tetapi cangkuk itu masih berayun.') }
      ]
    },

    exitTicket: [
      { subject: 'science', q: T('A lever has its pivot near one end. What does it do?', 'Tuil mempunyai pangsi dekat satu hujung. Apa ia buat?'), options: [T('Turns a small pull at the long end into a strong push at the short end', 'Menukar tarikan kecil di hujung panjang kepada tolakan kuat di hujung pendek'), T('Makes things disappear', 'Menghilangkan benda'), T('Makes sounds louder', 'Menguatkan bunyi')], answer: 0, why: T('A lever multiplies force.', 'Tuil menggandakan daya.') },
      { subject: 'science', q: T('Seeds → Mouse → Barn owl. Which animal is the PREDATOR?', 'Biji → Tikus → Burung hantu. Haiwan mana PEMANGSA?'), options: ['Seeds', 'Mouse', 'Barn owl'], answer: 2, why: T('The predator hunts and eats other animals.', 'Pemangsa memburu dan makan haiwan lain.') },
      { subject: 'thinking', q: T('Scary noises at night. What is the BEST first step?', 'Bunyi menakutkan pada waktu malam. Apakah langkah pertama TERBAIK?'), options: [T('Look for a cause with evidence', 'Cari sebab dengan bukti'), T('Run away screaming', 'Lari menjerit'), T('Believe the first story you hear', 'Percaya cerita pertama yang didengar')], answer: 0, why: T('Every sound has a cause. Measure, look, and test.', 'Setiap bunyi ada sebab. Ukur, lihat dan uji.') }
    ],

    world(W) {
      kit.world(W, this, {
        sky: 0x06070c, mood: { amb: 0.15, hemi: 0.12, ambLow: 0.55, hemiLow: 0.32 },
        rooms: [
          { id: 'GH', name: T('Ground Hall', 'Dewan Bawah'), wall: 0x4e5258, floor: 0x1c1f24, lightColor: 0x9fb8e8 },
          { id: 'SC', name: T('The Squeaky Staircase', 'Tangga Berkeriut'), wall: 0x3e4048, floor: 0x14161a, lightColor: 0x88a0ff, lightI: 0.3 },
          { id: 'UC', name: T('Classroom 3B', 'Bilik 3B'), wall: 0x57534a, floor: 0x1e1c18, lightColor: 0xe0e0c0 },
          { id: 'AT', name: T('The Attic', 'Loteng'), wall: 0x403a34, floor: 0x16120e, lightColor: 0xffb870, lightI: 0.35 },
          { id: 'HS', name: T('Hidden Study', 'Bilik Kajian Tersembunyi'), wall: 0x3c3a52, floor: 0x12121c, lightColor: 0xc0a8ff }
        ],
        objs: [['r1d1', 'inspection_report', 0xf1ecd0], ['r1d2', 'repair_log', 0xe0d8b8], ['r1w1', 'school_history', 0xd8c88a], ['r1w2', 'thermo_chart', 0xc8e0f0],
          ['cpf1', 'loose_tread', 0x8a6a3a], ['cpf2', 'fishing_line', 0xdddddd], ['cpw1', 'panel_lock', 0xb08a2e],
          ['r3d1', 'lever_board', 0x8a6a3a], ['r3w1', 'club_poster', 0xd8f0d8],
          ['r4d1', 'owl_pellet', 0x8a8a90], ['r4f1', 'feathers', 0xf0e8d8], ['r4w1', 'attic_window', 0x9fc0e0],
          ['r5d1', 'founders_deed', 0xe8dca8, null, { needsFlag: 'panel_open', lockedText: T('The study door is bolted from inside. Open the panel lock on the landing first.', 'Pintu bilik kajian dikunci dari dalam. Buka kunci panel di landing dahulu.') }],
          ['r5d2', 'pell_bag', 0x222222, null, { needsFlag: 'panel_open', lockedText: T('Dark and sealed. Open the landing panel first.', 'Gelap dan tertutup. Buka panel landing dahulu.') }],
          ['r5f1', 'boot_print', 0x8a8a8a, null, { needsFlag: 'panel_open', lockedText: T('Nothing visible in the dark. Open the landing panel first.', 'Tiada apa kelihatan dalam gelap. Buka panel landing dahulu.') }],
          ['r5f2', 'cobalt_letter', 0xf0f0f0, null, { needsFlag: 'panel_open', lockedText: T('Nothing visible in the dark. Open the landing panel first.', 'Tiada apa kelihatan dalam gelap. Buka panel landing dahulu.') }]],
        texts: [[-8.86, 1.9, 0.0, Math.PI / 2, T('ALDER SCHOOL · BLOCK C · 1962', 'SEKOLAH ALDER · BLOK C · 1962'), '#c8c8d0', 2.8, 0.5]],
        figs: [{ name: 'figure1', slot: 'r1f1', kind: 'coat' }, { name: 'figure2', slot: 'r5m', kind: 'tall' }],
        decor(W) { W.box(2.0, 0, 0.0, 2.4, 0.3, 0.9, 0x5a4a3a, { collide: false }); W.box(3.0, 0.3, 0.0, 2.0, 0.3, 0.9, 0x5a4a3a, { collide: false }); W.box(5.0, 0.0, -6.0, 2.0, 1.4, 0.4, 0x2a2a30); },
        npcs: [
          { id: 'ada', slot: 'r1n', rot: Math.PI * 0.5, skin: 0x8a5a3a, shirt: 0x33a3a3, pants: 0x2c3e50, hair: 0x111111, scale: 0.98 },
          { id: 'sam', slot: 'r1m', rot: Math.PI * 1.2, skin: 0xd8a87a, shirt: 0x7a5cc0, pants: 0x2a2a3a, hair: 0x2a1a0a, scale: 0.85 },
          { id: 'tan', slot: 'r3n', rot: Math.PI * 0.5, skin: 0xd8b088, shirt: 0xc0562b, pants: 0x3a3a2a, hair: 0x222222, scale: 1.0 },
          { id: 'pell', slot: 'r4n', rot: Math.PI * 0.3, skin: 0xe0b894, shirt: 0xdddd33, pants: 0x2a2a2a, hair: 0x555555, scale: 1.04, hat: 0xdddd33 },
          { id: 'alder', slot: 'r5n', rot: Math.PI * 1.1, skin: 0xe0b894, shirt: 0x8a9a5b, pants: 0x4a3a2a, hair: 0xeeeeee, scale: 0.94 }
        ]
      });
    }
  };
  kit.photo('stair_cam', 'CAM 1  STAIRS', (c, W, H, h) => {
    h.rect(c, 0, 0, W, H, '#0a0f12'); h.rect(c, 0, H * 0.7, W, H * 0.3, '#12201c');
    for (let i = 0; i < 8; i++) { h.rect(c, W * 0.3 + i * 38, H * 0.62 - i * 28, 150, 24, '#2a4438'); }
    h.rect(c, W * 0.3 + 2 * 38 + 20, H * 0.36, 40, 80, '#7a8a50'); h.circ(c, W * 0.3 + 2 * 38 + 40, H * 0.32, 14, '#6a8a72');    // man kneeling (hi-vis)
    h.rect(c, W * 0.3 + 2 * 38 + 70, H * 0.56, 30, 22, '#222a28'); h.line(c, W * 0.3 + 2 * 38 + 30, H * 0.5, W * 0.3 + 2 * 38 + 50, H * 0.58, '#aaffcc', 3);   // bag + screwdriver
  });
  MF.registerCase(C);
})();
