/* ============================================================================
   CASE 003 — THE PAINTED WALL / DINDING YANG DICAT   (Old school wing, night before the unveiling)
   ----------------------------------------------------------------------------
   One complete, independent story. The engine reads it as data.

   HIDDEN SOLUTION  (the twist: the "girl in the wall" is REAL — a lost 1931 painting under the new mural)
   - 1931  Artist Elena Marsh painted "Rose in the Garden" on the hall wall (her little sister Rose).
   - 1972  It was painted over. Everyone forgot it.
   - This term: students and Ms. Haddad painted a bright new mural, "Our Town", on the same wall.
   - Mr. Hartmann (local historian, runs "Ghost Tours") found an auction catalogue: the lost Marsh mural
     would be worth £200,000 if recovered. He signed a contract: if the old wing is DEMOLISHED, he may
     remove and keep the wall materials.
   - 4:52 pm He buys paint remover. 7:55–8:30 pm he is back (gate card) and wipes the new paint off the
     face with remover — the old red paint runs like tears of blood. He scratches LET ME OUT and spreads the
     ghost story, so the school board will vote tomorrow to pull the "haunted" wing down.
   - 7:40 Ravi's photo: no girl (Tunde fixing his bird). 8:40 Ravi's photo: the girl is there, and a
     ghost-tour lantern shadow. 9:00 the cleaner finds her and screams.
   ============================================================================ */
(function () {
  const T = (en, bm) => ({ en, bm });
  const mm = (s) => { const [h, m] = s.split(':').map(Number); return (h < 12 ? h + 12 : h) * 60 + m; };
  const paper = (html, style) => `<div class="paper hand" style="${style || ''}">${html}</div>`;

  const C = {
    id: '003',
    num: 3,
    title: T('The Painted Wall', 'Dinding Yang Dicat'),
    tagline: T('Overnight, a pale girl appeared inside the new mural. Her eyes are bleeding. And someone scratched three words beside her: LET ME OUT.', 'Dalam satu malam, seorang budak perempuan pucat muncul dalam mural baru. Matanya berdarah. Dan seseorang mencakar tiga perkataan di sebelahnya: LET ME OUT.'),
    place: T('Ravenscroft School — the old west wing', 'Sekolah Ravenscroft — sayap barat lama'),
    premise: T(
      `It is 9:10 pm in the old west wing of Ravenscroft School. Tomorrow the students' new mural, "Our Town", will be unveiled — and the school board will vote on whether to PULL DOWN this "haunted" wing. But at 9:00 the cleaner found something new in the mural: a pale girl with dark eyes, red streaks running down her cheeks like blood, and the words LET ME OUT scratched beside her. Nobody painted her. People whisper about the Girl in the Wall. At 9:45 a ghost-tour film crew arrives and the story will be everywhere. Find out who — or what — she is.`,
      `Sekarang pukul 9:10 malam di sayap barat lama Sekolah Ravenscroft. Esok mural baru murid-murid, "Our Town", akan dirasmikan — dan lembaga sekolah akan mengundi sama ada sayap "berhantu" ini akan DIROBOHKAN. Tetapi pukul 9:00 tukang cuci menjumpai sesuatu yang baru dalam mural: seorang budak perempuan pucat bermata gelap, garis merah mengalir di pipinya seperti darah, dan perkataan LET ME OUT dicakar di sebelahnya. Tiada siapa melukisnya. Orang berbisik tentang Gadis Dalam Dinding. Pukul 9:45 krew filem lawatan hantu tiba dan cerita ini akan tersebar ke mana-mana. Cari siapa — atau apa — dia.`),
    mysteryType: 'Vandalism / hidden treasure / fake haunting',
    subjects: ['science', 'geography', 'math', 'english', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('9:10'), deadline: mm('9:45'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -3.0, z: 0, yaw: Math.PI / 2 },

    hidden: {
      culprit: 'hartmann',
      what: 'old',
      window: [mm('7:55'), mm('8:30')],
      summary: T(
        `The girl in the wall is REAL — but she is paint, not a ghost. In 1931 the artist Elena Marsh painted her little sister Rose on this wall; the painting was covered over in 1972. Mr. Hartmann learned it could be worth £200,000. Between 7:55 and 8:30 he used paint remover to wipe away the new mural over Rose's face, so the old red paint ran like tears of blood. He scratched LET ME OUT and spread the ghost story so the board would demolish the wing — because his contract lets him keep the walls if it is pulled down.`,
        `Gadis dalam dinding itu BENAR — tetapi dia cat, bukan hantu. Pada 1931 pelukis Elena Marsh melukis adik perempuannya Rose pada dinding ini; lukisan itu ditutup pada 1972. Encik Hartmann mengetahui ia boleh bernilai £200,000. Antara 7:55 dan 8:30 dia menggunakan penanggal cat untuk mengelap mural baru di atas wajah Rose, jadi cat merah lama mengalir seperti air mata darah. Dia mencakar LET ME OUT dan menyebarkan cerita hantu supaya lembaga merobohkan sayap itu — kerana kontraknya membenarkan dia menyimpan dinding jika ia dirobohkan.`),
      sequence: [
        [mm('4:52'), T('Mr. Hartmann buys two cans of paint remover.', 'Encik Hartmann membeli dua tin penanggal cat.')],
        [mm('5:30'), T('Ms. Haddad locks up and goes home.', 'Cik Haddad mengunci dan pulang.')],
        [mm('7:20'), T('Tunde sneaks back to fix his painted bird.', 'Tunde datang semula senyap-senyap untuk membaiki lukisan burungnya.')],
        [mm('7:40'), T("Ravi's photo: the mural is normal. No girl.", 'Gambar Ravi: mural biasa. Tiada budak perempuan.')],
        [mm('7:55'), T("Mr. Hartmann's gate card: IN.", 'Kad pagar Encik Hartmann: MASUK.')],
        [mm('8:30'), T("Mr. Hartmann's gate card: OUT.", 'Kad pagar Encik Hartmann: KELUAR.')],
        [mm('8:40'), T("Ravi's photo: the girl's face has appeared.", 'Gambar Ravi: wajah budak perempuan telah muncul.')],
        [mm('9:00'), T('The cleaner finds the girl and screams.', 'Tukang cuci menjumpai budak perempuan itu dan menjerit.')],
        [mm('9:45'), T('Deadline: the ghost-tour film crew arrives.', 'Had masa: krew filem lawatan hantu tiba.')]
      ],
      essentialClues: ['mural', 'gate_log', 'ravi_740', 'ravi_840', 'remover_can', 'receipt', 'catalogue', 'salvage_contract', 'old_plan', 'c_hart_left'],
      misleading: [
        { item: 'turps_bottle', why: T("Ms. Haddad's turpentine is for oil paint, and she left at 5:30.", 'Turpentin Cik Haddad untuk cat minyak, dan dia keluar pukul 5:30.') },
        { item: 'c_tunde_home', why: T('Tunde lied about coming back — but only to fix his bird, before the girl appeared.', 'Tunde berbohong tentang datang semula — tetapi hanya untuk membaiki burungnya, sebelum budak perempuan itu muncul.') },
        { item: 'cleaning_cart', why: T("The cleaner's strong cleaner is for floors and she arrived at 9:00, after the face appeared.", 'Pencuci kuat tukang cuci untuk lantai dan dia tiba pukul 9:00, selepas wajah itu muncul.') },
        { item: 'ghost_flyer', why: T('A ghost-tour flyer is advertising, not evidence of a ghost.', 'Risalah lawatan hantu ialah iklan, bukan bukti hantu.') }
      ]
    },

    people: [
      { id: 'hartmann', name: 'Mr. Felix Hartmann', age: 57, role: T('Local historian, runs Ghost Tours', 'Ahli sejarah tempatan, mengendalikan Lawatan Hantu'), rel: T('Volunteers at the school', 'Sukarelawan di sekolah'), color: '#4a6a8a', suspect: true },
      { id: 'noor', name: 'Ms. Noor Haddad', age: 34, role: T('Art teacher', 'Guru seni'), rel: T('Led the new mural', 'Mengetuai mural baru'), color: '#c0562b', suspect: true },
      { id: 'tunde', name: 'Tunde Bello', age: 13, role: T('Student painter', 'Murid pelukis'), rel: T('Painted the bird on the mural', 'Melukis burung pada mural'), color: '#2e7d32', suspect: true },
      { id: 'lindqvist', name: 'Mrs. Ingrid Lindqvist', age: 62, role: T('Night cleaner', 'Tukang cuci malam'), rel: T('Found the girl at 9:00', 'Menjumpai budak perempuan pukul 9:00'), color: '#6a5a8a', suspect: true },
      { id: 'ravi', name: 'Ravi Kumar', age: 12, role: T('Photography club', 'Kelab fotografi'), rel: T('Photographs the mural every hour', 'Merakam mural setiap jam'), color: '#d4a017', suspect: true }
    ],

    items: [
      /* ---------------- GALLERY HALL ---------------- */
      { id: 'mural', type: 'physical', icon: '🖼️', title: T('The girl in the mural', 'Budak perempuan dalam mural'), where: T('Gallery hall, west wall', 'Dewan galeri, dinding barat'),
        desc: T(`In the middle of the bright new mural, the paint has been wiped away in a patch. Underneath is an older, faded painting: a girl's pale face. Red streaks run down from her eyes. The wall smells sharp and chemical.`, `Di tengah-tengah mural baru yang terang, cat telah dilap dalam satu tompok. Di bawahnya ada lukisan lama yang pudar: wajah pucat seorang budak perempuan. Garis merah mengalir dari matanya. Dinding berbau tajam seperti bahan kimia.`),
        puzzle: 'pz_layers', inspect: { kind: 'puzzle-art', art: 'mural003' } },
      { id: 'scratches', type: 'physical', icon: '🔪', title: T('Words scratched in the wall: LET ME OUT', 'Perkataan dicakar pada dinding: LET ME OUT'), where: T('Beside the girl', 'Di sebelah budak perempuan'),
        desc: T(`Thin, neat letters scratched with a sharp metal point. The letters are high up — about 1.8 m from the floor.`, `Huruf nipis dan kemas dicakar dengan hujung logam tajam. Huruf itu tinggi — kira-kira 1.8 m dari lantai.`),
        inspect: { kind: 'doc', html: T(paper(`🔪 <b>LET ME OUT</b><br>Scratched with: a sharp metal point<br>Height: <b>1.8 m</b> (a tall adult)<br><small>Neat, straight letters — not the shaky writing of a frightened child...</small>`), paper(`🔪 <b>LET ME OUT</b><br>Dicakar dengan: hujung logam tajam<br>Ketinggian: <b>1.8 m</b> (orang dewasa yang tinggi)<br><small>Huruf kemas dan lurus — bukan tulisan menggeletar budak yang ketakutan...</small>`)) } },
      { id: 'ghost_flyer', type: 'document', icon: '📄', title: T('Ghost-tour flyer', 'Risalah lawatan hantu'), where: T('Gallery hall, on a chair', 'Dewan galeri, di atas kerusi'),
        desc: T(`A brand-new flyer, printed today.`, `Risalah baru, dicetak hari ini.`),
        inspect: { kind: 'doc', html: T(paper(`<b>👻 HARTMANN'S GHOST TOURS</b><br>"SEE the Girl in the Wall of Ravenscroft before it's TOO LATE!"<br>"Sign our petition: <b>PULL DOWN THE HAUNTED WING</b> — for the children's safety!"<br><small>Printed: today, 3:15 pm</small>`, 'background:#e8e0f0'), paper(`<b>👻 LAWATAN HANTU HARTMANN</b><br>"LIHAT Gadis Dalam Dinding Ravenscroft sebelum TERLAMBAT!"<br>"Tandatangani petisyen kami: <b>ROBOHKAN SAYAP BERHANTU</b> — demi keselamatan kanak-kanak!"<br><small>Dicetak: hari ini, 3:15 petang</small>`, 'background:#e8e0f0')) } },
      { id: 'signature', type: 'physical', icon: '✒️', title: T('Hidden signature: "E. Marsh 1931"', 'Tandatangan tersembunyi: "E. Marsh 1931"'), where: T('Corner of the mural, under UV light', 'Sudut mural, di bawah cahaya UV'),
        desc: T(`Under the UV torch, letters glow through the new paint in the bottom corner: "E. Marsh — Rose in the Garden — 1931".`, `Di bawah lampu suluh UV, huruf bersinar melalui cat baru di sudut bawah: "E. Marsh — Rose in the Garden — 1931".`),
        inspect: { kind: 'doc', html: T(paper(`✒️ <span style="color:#7b3fe4"><b>E. Marsh — "Rose in the Garden" — 1931</b></span><br><small>Glowing under UV light, beneath the new paint. A REAL painting is hidden in this wall.</small>`, 'background:#1a1030;color:#e8dcff'), paper(`✒️ <span style="color:#b48cff"><b>E. Marsh — "Rose in the Garden" — 1931</b></span><br><small>Bersinar di bawah cahaya UV, di bawah cat baru. Lukisan SEBENAR tersembunyi dalam dinding ini.</small>`, 'background:#1a1030;color:#e8dcff')) } },

      /* ---------------- WEST CORRIDOR ---------------- */
      { id: 'old_plan', type: 'document', icon: '🗺️', title: T('School plan, 1931', 'Pelan sekolah, 1931'), where: T('Framed in the west corridor', 'Berbingkai di lorong barat'),
        desc: T(`An old plan of the school with grid squares (A–E, 1–5) and a compass. One square is marked with a tiny painted rose.`, `Pelan lama sekolah dengan petak grid (A–E, 1–5) dan kompas. Satu petak ditanda dengan bunga ros kecil.`),
        puzzle: 'pz_plan', inspect: { kind: 'puzzle-art', art: 'plan003' } },

      /* ---------------- ART ROOM ---------------- */
      { id: 'uv_torch', type: 'device', icon: '🔦', title: T('UV torch', 'Lampu suluh UV'), where: T('Art room shelf', 'Rak bilik seni'),
        desc: T(`A small purple-light torch used to check paintings. A label: "Some old paints and inks GLOW under UV light."`, `Lampu suluh cahaya ungu kecil untuk memeriksa lukisan. Label: "Sesetengah cat dan dakwat lama BERSINAR di bawah cahaya UV."`),
        puzzle: 'pz_uv', inspect: { kind: 'puzzle-doc',
          html: T(paper(`🔦 <b>UV torch</b><br>Ultraviolet (UV) light is invisible to our eyes, but it makes some materials GLOW.<br><small>Old zinc-white paint and some inks glow; new acrylic paint does not.</small>`), paper(`🔦 <b>Lampu suluh UV</b><br>Cahaya ultraungu (UV) tidak kelihatan oleh mata kita, tetapi ia membuat sesetengah bahan BERSINAR.<br><small>Cat putih zink lama dan sesetengah dakwat bersinar; cat akrilik baru tidak.</small>`)),
          fixedHtml: T(paper(`🔦 <b>UV torch — ready</b> ✔<br>Shine it on the mural's corners to see what is hidden under the new paint.`), paper(`🔦 <b>Lampu suluh UV — sedia</b> ✔<br>Suluh pada sudut mural untuk melihat apa yang tersembunyi di bawah cat baru.`)) } },
      { id: 'turps_bottle', type: 'physical', icon: '🧴', title: T('Bottle of turpentine', 'Botol turpentin'), where: T("Ms. Haddad's art cupboard", 'Almari seni Cik Haddad'),
        desc: T(`Turpentine for cleaning OIL paint brushes. The bottle is full and the cap is dusty.`, `Turpentin untuk mencuci berus cat MINYAK. Botol penuh dan penutupnya berhabuk.`),
        inspect: { kind: 'doc', html: T(paper(`🧴 <b>Turpentine</b> — for OIL paint<br>Level: <b>FULL</b> · cap: <b>dusty</b> (not opened for weeks)<br><small>The new mural is water-based ACRYLIC.</small>`), paper(`🧴 <b>Turpentin</b> — untuk cat MINYAK<br>Paras: <b>PENUH</b> · penutup: <b>berhabuk</b> (tidak dibuka berminggu-minggu)<br><small>Mural baru ialah AKRILIK berasaskan air.</small>`)) } },

      /* ---------------- GUARD OFFICE ---------------- */
      { id: 'gate_log', type: 'document', icon: '🪪', title: T('Gate card log', 'Log kad pagar'), where: T('Guard office screen', 'Skrin pejabat pengawal'),
        desc: T(`Every card that opened the west-wing gate today.`, `Setiap kad yang membuka pagar sayap barat hari ini.`),
        puzzle: 'pz_gate', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<b>WEST WING GATE — today</b><br>N. HADDAD — out 5:30 pm<br>T. BELLO (student) — in 7:20 pm · out 7:45 pm<br>F. HARTMANN (volunteer) — in <b>7:55 pm</b> · out <b>8:30 pm</b><br>I. LINDQVIST (cleaner) — in 9:00 pm<br>R. KUMAR (photo club) — in 7:35 pm (still inside)`, 'background:#dfe8e2'), paper(`<b>PAGAR SAYAP BARAT — hari ini</b><br>N. HADDAD — keluar 5:30 ptg<br>T. BELLO (murid) — masuk 7:20 mlm · keluar 7:45 mlm<br>F. HARTMANN (sukarelawan) — masuk <b>7:55 mlm</b> · keluar <b>8:30 mlm</b><br>I. LINDQVIST (tukang cuci) — masuk 9:00 mlm<br>R. KUMAR (kelab foto) — masuk 7:35 mlm (masih di dalam)`, 'background:#dfe8e2')),
          fixedHtml: T(paper(`<b>GATE LOG — read</b> ✔<br>Between Ravi's 7:40 and 8:40 photos, the only visitor who came AND went was <b>F. HARTMANN, 7:55–8:30 (35 min)</b>.`, 'background:#dfe8e2'), paper(`<b>LOG PAGAR — dibaca</b> ✔<br>Antara gambar Ravi 7:40 dan 8:40, satu-satunya pelawat yang datang DAN pergi ialah <b>F. HARTMANN, 7:55–8:30 (35 min)</b>.`, 'background:#dfe8e2')) } },

      /* ---------------- OLD STOREROOM ---------------- */
      { id: 'remover_can', type: 'physical', icon: '🥫', title: T('Can of paint remover', 'Tin penanggal cat'), where: T('Storeroom bin', 'Tong sampah stor'),
        desc: T(`A half-empty can of "PeelAway" paint remover and a rag with pale paint and RED streaks on it.`, `Tin penanggal cat "PeelAway" separuh kosong dan kain buruk dengan cat pucat dan garis MERAH padanya.`),
        inspect: { kind: 'doc', html: T(paper(`🥫 <b>PeelAway — PAINT REMOVER</b><br>"Dissolves NEW acrylic paint in minutes."<br>Level: half · Rag: pale paint + <b>old red paint</b><br><small>Price sticker: Brook Street Hardware</small>`), paper(`🥫 <b>PeelAway — PENANGGAL CAT</b><br>"Melarutkan cat akrilik BARU dalam beberapa minit."<br>Paras: separuh · Kain: cat pucat + <b>cat merah lama</b><br><small>Pelekat harga: Brook Street Hardware</small>`)) } },
      { id: 'tour_bag', type: 'physical', icon: '💼', title: T("Mr. Hartmann's tour bag", 'Beg lawatan Encik Hartmann'), where: T('Storeroom, behind the door', 'Stor, di belakang pintu'),
        desc: T(`A leather bag with a 3-digit lock and a brass tag: "F.H. — Ghost Tours". A paper sticks out of a pocket.`, `Beg kulit dengan kunci 3 digit dan tag tembaga: "F.H. — Lawatan Hantu". Sehelai kertas tersembul dari poket.`),
        puzzle: 'pz_bag', inspect: { kind: 'puzzle-art', art: 'bag003' } },
      { id: 'receipt', type: 'document', icon: '🧾', title: T('Hardware-store receipt', 'Resit kedai perkakas'), where: T("Outside pocket of the tour bag", 'Poket luar beg lawatan'),
        desc: T(`A receipt from Brook Street Hardware.`, `Resit dari Brook Street Hardware.`),
        inspect: { kind: 'doc', html: T(paper(`<b>BROOK STREET HARDWARE</b><br>PeelAway Paint Remover × 2 ...... £18.00<br>Scraper (metal point) × 1 ...... £4.50<br>Loyalty card: <b>F. HARTMANN</b><br>Today, <b>4:52 pm</b>`), paper(`<b>BROOK STREET HARDWARE</b><br>PeelAway Penanggal Cat × 2 ...... £18.00<br>Pengikis (hujung logam) × 1 ...... £4.50<br>Kad ahli: <b>F. HARTMANN</b><br>Hari ini, <b>4:52 ptg</b>`)) } },
      { id: 'catalogue', type: 'document', icon: '📕', title: T('Auction catalogue page', 'Halaman katalog lelongan'), where: T("Inside Mr. Hartmann's bag", 'Dalam beg Encik Hartmann'),
        desc: T(`A page from an art auction catalogue, circled in pencil.`, `Halaman katalog lelongan seni, dibulatkan dengan pensel.`),
        inspect: { kind: 'doc', html: T(paper(`<b>LOST MASTERPIECES</b><br>Elena Marsh, <i>"Rose in the Garden"</i>, 1931 — wall painting, Ravenscroft School. <b>Painted over in 1972.</b><br>"If ever recovered: estimated <b>£200,000</b>."<br><span style="color:#555">(circled in pencil: <b>"WEST WING — FOUND IT!"</b>)</span>`), paper(`<b>KARYA AGUNG YANG HILANG</b><br>Elena Marsh, <i>"Rose in the Garden"</i>, 1931 — lukisan dinding, Sekolah Ravenscroft. <b>Dicat semula pada 1972.</b><br>"Jika ditemui semula: anggaran <b>£200,000</b>."<br><span style="color:#555">(dibulatkan pensel: <b>"WEST WING — FOUND IT!"</b>)</span>`)) } },
      { id: 'salvage_contract', type: 'document', icon: '📃', title: T('Salvage contract', 'Kontrak penyelamatan'), where: T("Inside Mr. Hartmann's bag", 'Dalam beg Encik Hartmann'),
        desc: T(`A signed agreement with the demolition company.`, `Perjanjian bertandatangan dengan syarikat perobohan.`),
        inspect: { kind: 'doc', html: T(paper(`<b>SALVAGE AGREEMENT</b><br>IF the Ravenscroft west wing is <b>DEMOLISHED</b>, Hartmann Heritage Ltd may <b>remove and keep</b> any wall materials before the work begins.<br>Signed: <b>F. Hartmann</b>`), paper(`<b>PERJANJIAN PENYELAMATAN</b><br>JIKA sayap barat Ravenscroft <b>DIROBOHKAN</b>, Hartmann Heritage Ltd boleh <b>mengeluarkan dan menyimpan</b> sebarang bahan dinding sebelum kerja bermula.<br>Ditandatangani: <b>F. Hartmann</b>`)) } },
      { id: 'cleaning_cart', type: 'physical', icon: '🧹', title: T("Cleaner's cart", 'Troli tukang cuci'), where: T('Storeroom', 'Stor'),
        desc: T(`Mops, floor soap and a bottle of strong floor cleaner. The floor cleaner bottle is sealed.`, `Mop, sabun lantai dan botol pencuci lantai kuat. Botol pencuci lantai masih bermeterai.`),
        inspect: { kind: 'doc', html: T(paper(`🧹 <b>Cart — I. Lindqvist</b><br>Floor soap ✔ · Mop ✔<br>Strong floor cleaner: <b>SEALED</b> (never opened)<br><small>No paint on anything.</small>`), paper(`🧹 <b>Troli — I. Lindqvist</b><br>Sabun lantai ✔ · Mop ✔<br>Pencuci lantai kuat: <b>BERMETERAI</b> (tidak pernah dibuka)<br><small>Tiada cat pada apa-apa.</small>`)) } },
      { id: 'rose_letter', type: 'document', icon: '✉️', title: T("Elena Marsh's letter, 1931", 'Surat Elena Marsh, 1931'), where: T('Old storeroom cupboard', 'Almari lama stor'),
        desc: T(`A fragile letter folded inside an old paint box. Some words have faded.`, `Surat rapuh dilipat dalam kotak cat lama. Beberapa perkataan telah pudar.`),
        puzzle: 'pz_letter', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<i>"My little sister Rose ____ so ill this winter. I ____ her in the garden she loves, on the wall of her school, so she ____ always be here with her friends. If anyone ever finds her again — please, let her stay."</i><br>— Elena Marsh, 1931`, 'background:#efe4cc'), paper(`<i>"My little sister Rose ____ so ill this winter. I ____ her in the garden she loves, on the wall of her school, so she ____ always be here with her friends. If anyone ever finds her again — please, let her stay."</i><br>— Elena Marsh, 1931`, 'background:#efe4cc')),
          fixedHtml: T(paper(`<i>"My little sister Rose <u>was</u> so ill this winter. I <u>painted</u> her in the garden she loves, on the wall of her school, so she <u>will</u> always be here with her friends. If anyone ever finds her again — please, let her stay."</i> ✔<br>— Elena Marsh, 1931`, 'background:#efe4cc'), paper(`<i>"My little sister Rose <u>was</u> so ill this winter. I <u>painted</u> her in the garden she loves, on the wall of her school, so she <u>will</u> always be here with her friends. If anyone ever finds her again — please, let her stay."</i> ✔<br>— Elena Marsh, 1931`, 'background:#efe4cc')) } },

      /* ---------------- PHOTOS (given by Ravi) ---------------- */
      { id: 'ravi_740', type: 'photo', icon: '📸', photo: true, title: T("Ravi's photo: the mural at 7:40", 'Gambar Ravi: mural pukul 7:40'), art: 'r740', stampT: mm('7:40'), stampLabel: T('Camera (correct time)', 'Kamera (masa betul)'),
        desc: T(`Ravi photographs the mural every hour for the club.`, `Ravi merakam mural setiap jam untuk kelab.`),
        zoomNotice: T(`You zoom in: the mural is bright and normal — NO girl. Tunde is on a stool, painting his blue bird. The photo time is 7:40 pm.`, `Anda zum: mural terang dan biasa — TIADA budak perempuan. Tunde di atas bangku, melukis burung birunya. Masa gambar ialah 7:40 malam.`),
        timeline: T('The mural is normal. Tunde paints his bird.', 'Mural biasa. Tunde melukis burungnya.') },
      { id: 'ravi_840', type: 'photo', icon: '📸', photo: true, title: T("Ravi's photo: the mural at 8:40", 'Gambar Ravi: mural pukul 8:40'), art: 'r840', stampT: mm('8:40'), stampLabel: T('Camera (correct time)', 'Kamera (masa betul)'),
        desc: T(`The next photo, one hour later.`, `Gambar seterusnya, sejam kemudian.`),
        zoomNotice: T(`You zoom in: the GIRL'S FACE is now in the middle of the mural, with red streaks. On the floor lies a long shadow of a tall man holding a round "Ghost Tours" lantern. The photo time is 8:40 pm.`, `Anda zum: WAJAH BUDAK PEREMPUAN kini di tengah mural, dengan garis merah. Di lantai ada bayang panjang lelaki tinggi memegang tanglung bulat "Ghost Tours". Masa gambar ialah 8:40 malam.`),
        timeline: T("The girl's face has appeared. A ghost-tour lantern shadow.", 'Wajah budak perempuan telah muncul. Bayang tanglung lawatan hantu.') },

      /* ---------------- INFERENCES ---------------- */
      { id: 'inf_layers', kind: 'inference', type: 'deduction', icon: '💡', title: T('The girl is an OLDER painting UNDER the new mural', 'Budak perempuan itu lukisan LAMA DI BAWAH mural baru'),
        desc: T(`Paint on top is newer; paint underneath is older. The new mural was wiped away, and the girl was underneath — so she was painted FIRST. The red streaks are old red paint that ran when the remover touched it.`, `Cat di atas lebih baru; cat di bawah lebih lama. Mural baru dilap, dan budak perempuan itu di bawahnya — jadi dia dilukis DAHULU. Garis merah ialah cat merah lama yang mengalir apabila penanggal menyentuhnya.`) },
      { id: 'inf_plan', kind: 'inference', type: 'deduction', icon: '💡', title: T('The lost 1931 mural is on THIS wall', 'Mural 1931 yang hilang ada pada dinding INI'),
        desc: T(`The 1931 plan marks the rose painting in square B2 — the west wall of the gallery hall, the same wall as "Our Town".`, `Pelan 1931 menanda lukisan ros di petak B2 — dinding barat dewan galeri, dinding yang sama dengan "Our Town".`) },
      { id: 'inf_gate', kind: 'inference', type: 'deduction', icon: '💡', title: T('Only Mr. Hartmann came and went while the face appeared', 'Hanya Encik Hartmann datang dan pergi ketika wajah itu muncul'),
        desc: T(`No girl at 7:40; girl at 8:40. Tunde left at 7:45 (photo shows no girl then). Mr. Hartmann was inside from 7:55 to 8:30 — 35 minutes. The cleaner arrived at 9:00, after the 8:40 photo.`, `Tiada budak perempuan pukul 7:40; ada pukul 8:40. Tunde keluar 7:45 (gambar tunjuk tiada budak perempuan). Encik Hartmann di dalam dari 7:55 hingga 8:30 — 35 minit. Tukang cuci tiba 9:00, selepas gambar 8:40.`) },
      { id: 'inf_uv', kind: 'inference', type: 'deduction', icon: '💡', title: T('UV light can show hidden old paint', 'Cahaya UV boleh menunjukkan cat lama tersembunyi'),
        desc: T(`Old paints and inks glow under UV, new acrylic does not. Shine it on the mural to see what is underneath.`, `Cat dan dakwat lama bersinar di bawah UV, akrilik baru tidak. Suluh pada mural untuk melihat apa di bawahnya.`) },
      { id: 'inf_motive', kind: 'inference', type: 'deduction', icon: '💡', title: T('MOTIVE: if the wing is demolished, Hartmann keeps a £200,000 painting', 'MOTIF: jika sayap dirobohkan, Hartmann menyimpan lukisan £200,000'),
        desc: T(`He knew the lost Marsh mural was here ("FOUND IT!"), and his contract lets him remove the walls IF the wing is pulled down. A "haunted" wing is easier to demolish.`, `Dia tahu mural Marsh yang hilang ada di sini ("FOUND IT!"), dan kontraknya membenarkan dia mengeluarkan dinding JIKA sayap dirobohkan. Sayap "berhantu" lebih mudah dirobohkan.`) },
      { id: 'inf_rose', kind: 'inference', type: 'deduction', icon: '💡', title: T('The girl is Rose — painted so she could stay with her friends', 'Budak perempuan itu Rose — dilukis supaya dia kekal bersama kawannya'),
        desc: T(`Elena Marsh painted her very ill little sister on the school wall in 1931 and asked: "please, let her stay."`, `Elena Marsh melukis adiknya yang sangat sakit pada dinding sekolah pada 1931 dan meminta: "tolong, biarkan dia kekal."`) },

      /* ---------------- WITNESS CLAIMS ---------------- */
      { id: 'c_hart_left', kind: 'claim', person: 'hartmann', t: mm('5:00'), type: 'statement', icon: '💬', title: T('Hartmann: "I left at 5:00 and did not come back until the guard phoned me."', 'Hartmann: "Saya keluar pukul 5:00 dan tidak kembali sehingga pengawal menelefon saya."'), desc: T('He says he was at home all evening.', 'Dia berkata dia di rumah sepanjang malam.') },
      { id: 'c_hart_ghost', kind: 'claim', person: 'hartmann', t: 0, type: 'statement', icon: '💬', title: T('Hartmann: "This wing is haunted. Pull it down — for the children!"', 'Hartmann: "Sayap ini berhantu. Robohkan — demi kanak-kanak!"'), desc: T('He says he only cares about safety.', 'Dia berkata dia hanya peduli tentang keselamatan.') },
      { id: 'c_hart_know', kind: 'claim', person: 'hartmann', t: 0, type: 'statement', icon: '💬', title: T('Hartmann: "An old painting under the mural? Nonsense. There is nothing there."', 'Hartmann: "Lukisan lama di bawah mural? Mengarut. Tiada apa di situ."'), desc: T('He says there is no hidden painting.', 'Dia berkata tiada lukisan tersembunyi.') },
      { id: 'c_tunde_home', kind: 'claim', person: 'tunde', t: mm('5:00'), type: 'statement', icon: '💬', title: T('Tunde: "I went home at 5 like everyone else."', 'Tunde: "Saya balik pukul 5 macam orang lain."'), desc: T('Tunde says he was not here tonight.', 'Tunde berkata dia tiada di sini malam ini.') },
      { id: 'c_tunde_bird', kind: 'claim', person: 'tunde', t: mm('7:20'), type: 'statement', icon: '💬', title: T('Tunde: "OK — I came back 7:20 to 7:45 to fix my bird. There was NO girl then!"', 'Tunde: "OK — saya datang semula 7:20 hingga 7:45 untuk membaiki burung saya. TIADA budak perempuan masa itu!"'), desc: T('Tunde admits he sneaked back.', 'Tunde mengaku dia datang semula senyap-senyap.') },
      { id: 'c_noor_left', kind: 'claim', person: 'noor', t: mm('5:30'), type: 'statement', icon: '💬', title: T('Ms. Haddad: "I locked up and left at 5:30. Our mural is water-based acrylic."', 'Cik Haddad: "Saya mengunci dan keluar pukul 5:30. Mural kami akrilik berasaskan air."'), desc: T('She is heartbroken about the mural.', 'Dia patah hati tentang mural itu.') },
      { id: 'c_lind_found', kind: 'claim', person: 'lindqvist', t: mm('9:00'), type: 'statement', icon: '💬', title: T('Mrs. Lindqvist: "I arrived at 9:00 and she was already THERE, staring at me!"', 'Puan Lindqvist: "Saya tiba pukul 9:00 dan dia sudah ADA, merenung saya!"'), desc: T('She screamed and called the guard.', 'Dia menjerit dan memanggil pengawal.') },
      { id: 'c_ravi_photos', kind: 'claim', person: 'ravi', t: mm('7:40'), type: 'statement', icon: '💬', title: T('Ravi: "I photograph the mural every hour: 7:40 and 8:40."', 'Ravi: "Saya merakam mural setiap jam: 7:40 dan 8:40."'), desc: T('Between his photos, he was in the guard office developing prints.', 'Antara gambarnya, dia di pejabat pengawal mencetak gambar.') }
    ],

    /* ------------------------------------------------------------------ CONTRADICTION / SUPPORT CHECKER */
    pairs: [
      { a: 'c_hart_left', b: 'gate_log', type: 'contradiction', person: 'hartmann', requires: ['gate_solved'],
        text: T('Mr. Hartmann says he left at 5:00. His own gate card went IN at 7:55 pm and OUT at 8:30 pm.', 'Encik Hartmann berkata dia keluar pukul 5:00. Kad pagarnya sendiri MASUK pukul 7:55 malam dan KELUAR pukul 8:30 malam.'),
        explain: T('He was in the west wing exactly when the face appeared.', 'Dia berada di sayap barat tepat ketika wajah itu muncul.') },
      { a: 'c_hart_left', b: 'ravi_840', type: 'contradiction', person: 'hartmann',
        text: T('The 8:40 photo shows the shadow of a tall man with a round "Ghost Tours" lantern.', 'Gambar 8:40 menunjukkan bayang lelaki tinggi dengan tanglung bulat "Ghost Tours".'),
        explain: T('Only Mr. Hartmann carries a Ghost Tours lantern.', 'Hanya Encik Hartmann membawa tanglung Ghost Tours.') },
      { a: 'c_hart_left', b: 'receipt', type: 'contradiction', person: 'hartmann',
        text: T('At 4:52 pm he bought paint remover and a metal scraper — the tools that wiped the mural and scratched LET ME OUT.', 'Pukul 4:52 petang dia membeli penanggal cat dan pengikis logam — alat yang mengelap mural dan mencakar LET ME OUT.'),
        explain: T('He prepared the "haunting" before the evening.', 'Dia menyediakan "gangguan hantu" sebelum malam.') },
      { a: 'c_hart_know', b: 'catalogue', type: 'contradiction', person: 'hartmann', requires: ['bag_open'],
        text: T('He says there is no hidden painting. His catalogue page says "WEST WING — FOUND IT!" next to a £200,000 lost mural.', 'Dia berkata tiada lukisan tersembunyi. Halaman katalognya tertulis "WEST WING — FOUND IT!" di sebelah mural hilang £200,000.'),
        explain: T('He knew exactly what was under the paint.', 'Dia tahu apa yang ada di bawah cat itu.') },
      { a: 'c_hart_ghost', b: 'salvage_contract', type: 'contradiction', person: 'hartmann', requires: ['bag_open'],
        text: T('He says he wants the wing pulled down for the children. His contract lets him KEEP the walls if it is demolished.', 'Dia berkata dia mahu sayap dirobohkan demi kanak-kanak. Kontraknya membenarkan dia MENYIMPAN dinding jika ia dirobohkan.'),
        explain: T('His real reason is a £200,000 painting.', 'Sebab sebenarnya ialah lukisan £200,000.') },
      { a: 'c_hart_know', b: 'signature', type: 'contradiction', person: 'hartmann',
        text: T('Under UV light the wall itself says: "E. Marsh — Rose in the Garden — 1931".', 'Di bawah cahaya UV dinding itu sendiri tertulis: "E. Marsh — Rose in the Garden — 1931".'),
        explain: T('There IS a hidden painting.', 'MEMANG ada lukisan tersembunyi.') },
      { a: 'c_tunde_home', b: 'gate_log', type: 'contradiction', person: 'tunde', requires: ['gate_solved'],
        text: T('Tunde says he went home at 5. The gate log shows his card from 7:20 to 7:45 pm.', 'Tunde berkata dia pulang pukul 5. Log pagar menunjukkan kadnya dari 7:20 hingga 7:45 malam.'),
        explain: T('He sneaked back — to fix his bird, as the 7:40 photo shows.', 'Dia datang semula senyap-senyap — untuk membaiki burungnya, seperti gambar 7:40.') },
      { a: 'c_tunde_bird', b: 'ravi_740', type: 'support', person: 'tunde',
        text: T('The 7:40 photo shows Tunde painting his bird — and NO girl in the mural.', 'Gambar 7:40 menunjukkan Tunde melukis burungnya — dan TIADA budak perempuan dalam mural.') },
      { a: 'c_noor_left', b: 'gate_log', type: 'support', person: 'noor', requires: ['gate_solved'],
        text: T('Ms. Haddad\'s card went out at 5:30 and never came back.', 'Kad Cik Haddad keluar pukul 5:30 dan tidak pernah kembali.') },
      { a: 'c_noor_left', b: 'turps_bottle', type: 'support', person: 'noor',
        text: T('Her turpentine is full and dusty. It was not used tonight.', 'Turpentinnya penuh dan berhabuk. Ia tidak digunakan malam ini.') },
      { a: 'c_lind_found', b: 'cleaning_cart', type: 'support', person: 'lindqvist',
        text: T('Her strong cleaner is still sealed and there is no paint on her cart.', 'Pencuci kuatnya masih bermeterai dan tiada cat pada trolinya.') },
      { a: 'c_lind_found', b: 'ravi_840', type: 'support', person: 'lindqvist',
        text: T('The face was already there at 8:40, before she arrived at 9:00.', 'Wajah itu sudah ada pukul 8:40, sebelum dia tiba pukul 9:00.') },
      { a: 'c_ravi_photos', b: 'ravi_740', type: 'support', person: 'ravi',
        text: T('His photos have correct time stamps: 7:40 and 8:40.', 'Gambarnya mempunyai cap masa yang betul: 7:40 dan 8:40.') }
    ],

    /* ------------------------------------------------------------------ PUZZLES */
    puzzles: {
      pz_layers: { subject: 'science', title: T('Read the paint layers', 'Baca lapisan cat'), grants: { flags: ['layers_solved'], items: ['inf_layers'] }, tokens: 0,
        intro: T('Look at the edge of the wiped patch. You can see the layers like a sandwich: wall → OLD faded paint → NEW bright mural.', 'Lihat tepi tompok yang dilap. Anda boleh nampak lapisan seperti sandwic: dinding → cat LAMA pudar → mural BARU terang.'),
        art: 'mural003',
        steps: [
          { type: 'choice', q: T('Which layer was painted FIRST?', 'Lapisan mana dilukis DAHULU?'), options: [T('The new bright mural on top', 'Mural terang baru di atas'), T('The faded girl underneath', 'Budak perempuan pudar di bawah')], answer: 1,
            hints: [T('You paint the bottom layer first, then cover it.', 'Anda melukis lapisan bawah dahulu, kemudian menutupnya.')] },
          { type: 'choice', q: T('The wall smells of chemicals and the new paint is wiped off. What made the girl APPEAR?', 'Dinding berbau bahan kimia dan cat baru dilap. Apa yang membuat budak perempuan itu MUNCUL?'),
            options: [T('She painted herself.', 'Dia melukis dirinya sendiri.'), T('Someone wiped the new paint away with a chemical.', 'Seseorang mengelap cat baru dengan bahan kimia.'), T('Rain.', 'Hujan.')], answer: 1,
            hints: [T('What could dissolve paint?', 'Apa yang boleh melarutkan cat?')] },
          { type: 'classify', q: T('Observation or inference?', 'Pemerhatian atau inferens?'),
            statements: [
              { text: T('Red streaks run down from the eyes.', 'Garis merah mengalir dari mata.'), answer: 'observation' },
              { text: T('The wall smells of chemicals.', 'Dinding berbau bahan kimia.'), answer: 'observation' },
              { text: T('The red streaks are old paint that ran, not blood.', 'Garis merah ialah cat lama yang mengalir, bukan darah.'), answer: 'inference' }
            ], hints: [T('Can you SEE or SMELL it directly? Then it is an observation.', 'Bolehkah anda LIHAT atau HIDU terus? Maka ia pemerhatian.')] }
        ],
        after: T('The girl is an OLD painting under the new mural. Someone wiped the top layer away!', 'Budak perempuan itu lukisan LAMA di bawah mural baru. Seseorang mengelap lapisan atas!') },

      pz_uv: { subject: 'science', title: T('How does UV light work?', 'Bagaimana cahaya UV berfungsi?'), grants: { flags: ['uv_found'], items: ['inf_uv'] }, tokens: 0,
        intro: T('UV (ultraviolet) light is a kind of light our eyes cannot see. It makes some materials glow.', 'Cahaya UV (ultraungu) ialah sejenis cahaya yang mata kita tidak nampak. Ia membuat sesetengah bahan bersinar.'),
        steps: [
          { type: 'choice', q: T('Can our eyes see ultraviolet light?', 'Bolehkah mata kita nampak cahaya ultraungu?'), options: [T('Yes, it is bright purple', 'Ya, ia ungu terang'), T('No, it is invisible to us', 'Tidak, ia tidak kelihatan oleh kita')], answer: 1,
            hints: [T('The torch looks dim purple, but most UV is invisible.', 'Lampu suluh kelihatan ungu malap, tetapi kebanyakan UV tidak kelihatan.')] },
          { type: 'choice', q: T('Old paint glows under UV; new acrylic does not. If writing GLOWS through the new mural, what is it?', 'Cat lama bersinar di bawah UV; akrilik baru tidak. Jika tulisan BERSINAR melalui mural baru, apakah ia?'),
            options: [T('Something old hidden underneath', 'Sesuatu yang lama tersembunyi di bawah'), T('Fresh paint from tonight', 'Cat baru malam ini'), T('A reflection', 'Pantulan')], answer: 0,
            hints: [T('Only the OLD paint glows.', 'Hanya cat LAMA yang bersinar.')] }
        ],
        after: T('Now shine the UV torch on the corners of the mural!', 'Sekarang suluh lampu UV pada sudut-sudut mural!') },

      pz_gate: { subject: 'math', title: T('Read the gate log', 'Baca log pagar'), grants: { flags: ['gate_solved'], items: ['inf_gate'] }, tokens: 0,
        intro: T("Ravi's photos: NO girl at 7:40, girl at 8:40. Who was inside in between?", 'Gambar Ravi: TIADA budak perempuan pukul 7:40, ada pukul 8:40. Siapa di dalam di antaranya?'),
        steps: [
          { type: 'number', q: T('Mr. Hartmann was inside from 7:55 to 8:30. How many minutes is that?', 'Encik Hartmann di dalam dari 7:55 hingga 8:30. Berapa minit itu?'), answer: 35, options: [25, 30, 35, 45], unit: T('minutes', 'minit'),
            hints: [T('7:55 → 8:00 is 5 minutes. 8:00 → 8:30 is 30 minutes.', '7:55 → 8:00 ialah 5 minit. 8:00 → 8:30 ialah 30 minit.')] },
          { type: 'choice', q: T('Tunde left at 7:45. Could he have uncovered the face?', 'Tunde keluar pukul 7:45. Bolehkah dia mendedahkan wajah itu?'),
            options: [T('Yes', 'Ya'), T('No — at 7:40 there was no girl, and he was gone by 7:45', 'Tidak — pukul 7:40 tiada budak perempuan, dan dia sudah pergi pukul 7:45')], answer: 1,
            hints: [T('Look at the 7:40 photo and Tunde\'s OUT time.', 'Lihat gambar 7:40 dan masa KELUAR Tunde.')] },
          { type: 'choice', q: T('The cleaner came in at 9:00. Could she have done it?', 'Tukang cuci masuk pukul 9:00. Bolehkah dia melakukannya?'),
            options: [T('No — the face was already there at 8:40', 'Tidak — wajah itu sudah ada pukul 8:40'), T('Yes', 'Ya')], answer: 0,
            hints: [T('Compare 9:00 with the 8:40 photo.', 'Bandingkan 9:00 dengan gambar 8:40.')] }
        ],
        after: T('Only ONE person came and went while the face appeared: Mr. Hartmann, 7:55 to 8:30.', 'Hanya SATU orang datang dan pergi ketika wajah itu muncul: Encik Hartmann, 7:55 hingga 8:30.') },

      pz_plan: { subject: 'geography', title: T('Read the 1931 plan', 'Baca pelan 1931'), grants: { flags: ['plan_solved'], items: ['inf_plan'] }, tokens: 0,
        intro: T('Use the grid: letters go ACROSS (A–E), numbers go DOWN (1–5). N is up.', 'Guna grid: huruf MELINTANG (A–E), nombor MENEGAK (1–5). U di atas.'),
        art: 'plan003',
        steps: [
          { type: 'choice', q: T('In which grid square is the painted rose?', 'Dalam petak grid mana bunga ros yang dilukis?'), options: ['A1', 'B2', 'C4', 'E5'], answer: 'B2',
            hints: [T('Find the rose. Read the letter above it, then the number beside it.', 'Cari ros itu. Baca huruf di atasnya, kemudian nombor di sebelahnya.')] },
          { type: 'choice', q: T('Square B2 is on which wall of the Gallery Hall?', 'Petak B2 berada pada dinding mana Dewan Galeri?'), options: [T('North', 'Utara'), T('South', 'Selatan'), T('East', 'Timur'), T('West', 'Barat')], answer: 3,
            hints: [T('B is near the LEFT side of the map. Left = west.', 'B dekat sebelah KIRI peta. Kiri = barat.')] },
          { type: 'choice', q: T('The new mural "Our Town" is on the WEST wall of the Gallery Hall. What does that mean?', 'Mural baru "Our Town" berada pada dinding BARAT Dewan Galeri. Apa maksudnya?'),
            options: [T('The lost 1931 painting is under the new mural', 'Lukisan 1931 yang hilang berada di bawah mural baru'), T('The rose was in another building', 'Ros itu di bangunan lain')], answer: 0,
            hints: [T('Same hall, same wall.', 'Dewan sama, dinding sama.')] }
        ],
        after: T('The lost 1931 painting was always on THIS wall. Maybe the old storeroom has more secrets from 1931...', 'Lukisan 1931 yang hilang sentiasa berada pada dinding INI. Mungkin stor lama ada lebih banyak rahsia dari 1931...') },

      pz_bag: { subject: 'thinking', title: T("Open Mr. Hartmann's bag", 'Buka beg Encik Hartmann'), grants: { flags: ['bag_open'], items: ['catalogue', 'salvage_contract', 'inf_motive'] }, tokens: 0,
        intro: T('A brass tag on the lock: "Forgetful? Finish my patterns. — F.H."', 'Tag tembaga pada kunci: "Pelupa? Lengkapkan corak saya. — F.H."'),
        art: 'bag003',
        steps: [
          { type: 'code', q: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
            patterns: ['10, 8, 6, 4, ?', '9, 6, 3, ?', '0, 3, 6, ?'], answer: '209',
            hints: [T('Pattern 1 goes down by 2. Pattern 2 goes down by 3.', 'Corak 1 turun 2. Corak 2 turun 3.'), T('Pattern 3 goes up by 3. The code is 2, 0, 9.', 'Corak 3 naik 3. Kodnya 2, 0, 9.')] }
        ],
        after: T('Click! Inside: a page from an auction catalogue and a signed contract...', 'Klik! Di dalam: halaman katalog lelongan dan kontrak bertandatangan...') },

      pz_letter: { subject: 'english', title: T("Read Elena's letter", 'Baca surat Elena'), grants: { flags: ['letter_read'], items: ['inf_rose'] }, tokens: 1,
        intro: T('Choose the correct verb for each gap.', 'Pilih kata kerja yang betul untuk setiap ruang.'),
        steps: [
          { type: 'cloze', q: T('Restore the letter:', 'Pulihkan surat:'),
            parts: ['My little sister Rose ', { blank: ['is', 'was', 'were'], answer: 'was' }, ' so ill this winter. I ', { blank: ['paint', 'painted', 'painting'], answer: 'painted' }, ' her in the garden she loves, so she ', { blank: ['will', 'was', 'did'], answer: 'will' }, ' always be here with her friends.'],
            hints: [T('This winter is finished: was. I did it already: painted.', 'Musim sejuk ini sudah tamat: was. Saya sudah melakukannya: painted.'), T('"always be here" in the future: will.', '"always be here" pada masa depan: will.')] }
        ],
        after: T('The girl in the wall is Rose. Her sister painted her so she could stay. You earn 1 hint token.', 'Budak perempuan dalam dinding ialah Rose. Kakaknya melukisnya supaya dia boleh kekal. Anda dapat 1 token petunjuk.') }
    },

    /* ------------------------------------------------------------------ DEDUCTION QUESTIONS */
    questions: [
      { id: 'q_what', title: T('1. What is the girl in the wall?', '1. Apakah budak perempuan dalam dinding itu?'),
        options: [
          { id: 'ghost', text: T('A ghost trying to escape.', 'Hantu yang cuba melarikan diri.') },
          { id: 'new', text: T('A new drawing someone added tonight.', 'Lukisan baru yang ditambah seseorang malam ini.') },
          { id: 'old', text: T('A real 1931 painting under the new mural, uncovered with paint remover.', 'Lukisan sebenar 1931 di bawah mural baru, didedahkan dengan penanggal cat.'), correct: true },
          { id: 'damp', text: T('A damp stain.', 'Kesan lembap.') }
        ],
        needs: [['mural', 'inf_layers'], ['signature', 'old_plan', 'inf_plan']], needsFlags: ['layers_solved'],
        hints: [T('Which layer is older? What does the UV torch show? What does the 1931 plan say?', 'Lapisan mana lebih lama? Apa yang ditunjukkan lampu UV? Apa kata pelan 1931?')] },
      { id: 'q_blood', title: T('2. Why do her eyes look like they are bleeding?', '2. Kenapa matanya kelihatan berdarah?'),
        options: [
          { id: 'blood', text: T('It is real blood.', 'Ia darah sebenar.') },
          { id: 'paint', text: T('The remover made the OLD red paint run down the wall.', 'Penanggal menyebabkan cat merah LAMA mengalir di dinding.'), correct: true },
          { id: 'ketchup', text: T('Someone threw ketchup.', 'Seseorang membaling sos tomato.') },
          { id: 'rust', text: T('Rusty water from a pipe.', 'Air berkarat dari paip.') }
        ],
        needs: [['remover_can'], ['mural', 'inf_layers']], needsFlags: ['layers_solved'],
        hints: [T('Look at the rag in the storeroom bin.', 'Lihat kain buruk dalam tong sampah stor.')] },
      { id: 'q_when', title: T('3. When was the face uncovered?', '3. Bila wajah itu didedahkan?'),
        options: [
          { id: 'a', text: T('Before 5:30 pm', 'Sebelum 5:30 petang') },
          { id: 'b', text: T('Between 7:55 and 8:30 pm', 'Antara 7:55 dan 8:30 malam'), correct: true },
          { id: 'c', text: T('At 9:00 pm', 'Pukul 9:00 malam') },
          { id: 'd', text: T('In 1972', 'Pada 1972') }
        ],
        needs: [['ravi_740', 'ravi_840'], ['gate_log', 'inf_gate']], needsFlags: ['gate_solved'],
        hints: [T('No girl at 7:40, a girl at 8:40. Who came and went in between?', 'Tiada budak perempuan pukul 7:40, ada pukul 8:40. Siapa datang dan pergi di antaranya?')] },
      { id: 'q_who', title: T('4. Who uncovered the girl and scratched LET ME OUT?', '4. Siapa mendedahkan budak perempuan itu dan mencakar LET ME OUT?'),
        options: [
          { id: 'hartmann', text: T('Mr. Hartmann', 'Encik Hartmann'), correct: true }, { id: 'noor', text: T('Ms. Haddad', 'Cik Haddad') },
          { id: 'tunde', text: T('Tunde', 'Tunde') }, { id: 'lindqvist', text: T('Mrs. Lindqvist', 'Puan Lindqvist') }, { id: 'ravi', text: T('Ravi', 'Ravi') }
        ],
        needs: [['receipt', 'remover_can'], ['gate_log', 'inf_gate'], ['ravi_840', 'scratches']], needsFlags: ['gate_solved'],
        hints: [T('Who bought paint remover and a scraper? Whose card was used 7:55–8:30? Whose lantern?', 'Siapa membeli penanggal cat dan pengikis? Kad siapa digunakan 7:55–8:30? Tanglung siapa?')] },
      { id: 'q_why', title: T('5. WHY did he do it?', '5. KENAPA dia melakukannya?'),
        options: [
          { id: 'tour', text: T('Just to make his ghost tour more exciting.', 'Hanya untuk menjadikan lawatan hantunya lebih menarik.') },
          { id: 'money', text: T('To get the "haunted" wing demolished so he could take and sell the £200,000 painting.', 'Supaya sayap "berhantu" dirobohkan dan dia boleh mengambil dan menjual lukisan £200,000.'), correct: true },
          { id: 'hate', text: T('He hates the new mural.', 'Dia benci mural baru.') },
          { id: 'save', text: T('To save the old painting for the school.', 'Untuk menyelamatkan lukisan lama untuk sekolah.') }
        ],
        needs: [['catalogue', 'salvage_contract', 'inf_motive'], ['ghost_flyer', 'c_hart_ghost']], needsFlags: ['bag_open'],
        hints: [T('Read the catalogue and the contract in his bag. When does he get the walls?', 'Baca katalog dan kontrak dalam begnya. Bila dia dapat dinding itu?')] }
    ],

    timeUp: { title: T('The film crew is here!', 'Krew filem sudah tiba!'), text: T('Bright camera lights flood the dark hallway. In the mural, the girl seems to stare straight into the lens. Name the culprit NOW!', 'Lampu kamera terang menerangi lorong gelap. Dalam mural, budak perempuan itu seolah-olah merenung terus ke kamera. Namakan pelaku SEKARANG!') },
    conclusion: {
      who: { correct: 'hartmann' },
      what: { questionId: 'q_what' },
      when: { questionId: 'q_when' },
      whereQ: T('WHERE did the "girl in the wall" come from?', 'DARI MANA "gadis dalam dinding" datang?'),
      where: [
        { id: 'under', text: T('From UNDER the new mural — a 1931 painting on the west wall', 'Dari BAWAH mural baru — lukisan 1931 pada dinding barat'), correct: true },
        { id: 'grave', text: T('From the graveyard', 'Dari kubur') }, { id: 'art', text: T("From Ms. Haddad's art room", 'Dari bilik seni Cik Haddad') },
        { id: 'tunde', text: T("Tunde painted her tonight", 'Tunde melukisnya malam ini') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }
      ],
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_old', label: T('The girl is an old painting', 'Budak perempuan itu lukisan lama'), items: ['mural', 'inf_layers', 'signature', 'inf_plan', 'old_plan'] },
        { id: 'g_tools', label: T('His tools: remover and scraper', 'Alatnya: penanggal dan pengikis'), items: ['receipt', 'remover_can'] },
        { id: 'g_gate', label: T('He was there 7:55–8:30', 'Dia di sana 7:55–8:30'), items: ['gate_log', 'inf_gate'] },
        { id: 'g_photo', label: T('Before and after photos', 'Gambar sebelum dan selepas'), items: ['ravi_840', 'ravi_740'] },
        { id: 'g_motive', label: T('The motive', 'Motif'), items: ['catalogue', 'salvage_contract', 'inf_motive'] },
        { id: 'g_lie', label: T("Mr. Hartmann's lies", 'Pembohongan Encik Hartmann'), items: ['c_hart_left', 'c_hart_know', 'c_hart_ghost'] }
      ],
      strongCoverage: 4,
      secondary: ['scratches', 'ghost_flyer', 'turps_bottle', 'cleaning_cart', 'uv_torch'],
      secondaryNeeded: 2,
      lieFlags: ['c_hart_left', 'c_hart_know', 'c_tunde_home']
    },

    endings: [
      { id: 'secret', stars: 4, title: T('Let Her Stay', 'Biarkan Dia Kekal'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.has.rose_letter && r.flags.letter_read,
        text: T(
          `You solve the case — and you give the girl her name back. Mr. Hartmann is led away. You read Elena's letter aloud to the board: "If anyone ever finds her again — please, let her stay." Nobody votes to pull the wing down. Art experts carefully restore "Rose in the Garden", and the students paint "Our Town" on the opposite wall, so Rose can look at it forever. The hall is renamed Rose Hall. On the night it reopens, the guard swears the painted girl is smiling a little more than before... and that the red streaks under her eyes are gone.`,
          `Anda menyelesaikan kes — dan anda memulangkan nama budak perempuan itu. Encik Hartmann dibawa pergi. Anda membaca surat Elena dengan kuat kepada lembaga: "If anyone ever finds her again — please, let her stay." Tiada siapa mengundi untuk merobohkan sayap itu. Pakar seni memulihkan "Rose in the Garden" dengan teliti, dan murid-murid melukis "Our Town" pada dinding bertentangan, supaya Rose boleh melihatnya selama-lamanya. Dewan itu dinamakan Dewan Rose. Pada malam ia dibuka semula, pengawal bersumpah budak perempuan yang dilukis itu tersenyum sedikit lebih daripada sebelumnya... dan garis merah di bawah matanya sudah hilang.`) },
      { id: 'perfect', stars: 3, title: T('Case Closed!', 'Kes Selesai!'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec >= 2,
        text: T(
          `Brilliant! You proved the "ghost" is a real 1931 painting, and that Mr. Hartmann wiped the new paint away between 7:55 and 8:30 to scare the board into demolishing the wing — so he could take and sell the £200,000 painting. The vote is cancelled and the wing is safe. The film crew gets a much better story than a ghost: a lost masterpiece, found.`,
          `Hebat! Anda membuktikan "hantu" itu lukisan sebenar 1931, dan Encik Hartmann mengelap cat baru antara 7:55 dan 8:30 untuk menakutkan lembaga supaya merobohkan sayap itu — supaya dia boleh mengambil dan menjual lukisan £200,000 itu. Undian dibatalkan dan sayap itu selamat. Krew filem mendapat cerita yang lebih baik daripada hantu: karya agung yang hilang, ditemui semula.`) },
      { id: 'missed', stars: 2, title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec < 2,
        text: T(
          `Right answer, strong proof! But you missed some side clues (the scratched words, the flyer, the turpentine, the cleaner's cart or the UV torch). Because of that, Ms. Haddad and Mrs. Lindqvist are still under suspicion. Next time, check every room.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas beberapa petunjuk sampingan (perkataan yang dicakar, risalah, turpentin, troli tukang cuci atau lampu UV). Kerana itu, Cik Haddad dan Puan Lindqvist masih disyaki. Lain kali, periksa setiap bilik.`) },
      { id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'),
        when: (r) => r.ok.who,
        text: T(`You named the right person — but your proof was too weak. Read the paint layers, check the gate log and open the tour bag. Hurry: the film crew is coming!`,
                `Anda menyebut orang yang betul — tetapi bukti anda terlalu lemah. Baca lapisan cat, semak log pagar dan buka beg lawatan. Cepat: krew filem sedang datang!`) },
      { id: 'wrong', stars: 0, title: T('The wrong answer!', 'Jawapan yang salah!'),
        when: () => true,
        text: T(`That is not right. Ask: what is UNDER the new paint, who was inside between 7:40 and 8:40, and who gains if the wing is pulled down?`,
                `Itu tidak betul. Tanya: apa yang ada DI BAWAH cat baru, siapa di dalam antara 7:40 dan 8:40, dan siapa untung jika sayap itu dirobohkan?`) }
    ],
    wrongWho: {
      noor: T('Ms. Haddad left at 5:30 and never came back (gate log). Her turpentine is full and dusty, and she would never damage her students\' mural.', 'Cik Haddad keluar pukul 5:30 dan tidak pernah kembali (log pagar). Turpentinnya penuh dan berhabuk, dan dia tidak akan merosakkan mural murid-muridnya.'),
      tunde: T('Tunde sneaked back, but only from 7:20 to 7:45 to fix his bird — and the 7:40 photo shows NO girl yet.', 'Tunde datang semula senyap-senyap, tetapi hanya dari 7:20 hingga 7:45 untuk membaiki burungnya — dan gambar 7:40 menunjukkan BELUM ada budak perempuan.'),
      lindqvist: T('Mrs. Lindqvist arrived at 9:00, after the face appeared in the 8:40 photo. Her strong cleaner is still sealed.', 'Puan Lindqvist tiba pukul 9:00, selepas wajah itu muncul dalam gambar 8:40. Pencuci kuatnya masih bermeterai.'),
      ravi: T('Ravi took the photos that prove when the face appeared. He was printing in the guard office, and he is far too short to scratch letters 1.8 m high.', 'Ravi mengambil gambar yang membuktikan bila wajah itu muncul. Dia mencetak di pejabat pengawal, dan dia terlalu rendah untuk mencakar huruf setinggi 1.8 m.')
    },

    /* ------------------------------------------------------------------ INTERVIEWS */
    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      hartmann: {
        greeting: T(`Detective! Terrible, terrible. I WARNED them about this wing. The Girl in the Wall wants out. Tomorrow they must vote to pull it down — for the children's sake.`, `Detektif! Dahsyat, dahsyat. Saya sudah MEMBERI AMARAN tentang sayap ini. Gadis Dalam Dinding mahu keluar. Esok mereka mesti mengundi untuk merobohkannya — demi kanak-kanak.`),
        topics: [
          { id: 'left', label: T('Where were you this evening?', 'Di mana anda malam ini?'),
            lines: [T('At home with my books. I left at 5:00 and only came back when the guard phoned me at 9:05.', 'Di rumah dengan buku-buku saya. Saya keluar pukul 5:00 dan hanya kembali bila pengawal menelefon saya pukul 9:05.')], claims: ['c_hart_left'] },
          { id: 'ghost', label: T('What should happen to this wing?', 'Apa patut berlaku pada sayap ini?'),
            lines: [T('Pull it down! It is dangerous and haunted. I only think of the children\'s safety.', 'Robohkan! Ia berbahaya dan berhantu. Saya hanya fikir keselamatan kanak-kanak.')], claims: ['c_hart_ghost'] },
          { id: 'paint', label: T('Could there be an old painting under the mural?', 'Mungkinkah ada lukisan lama di bawah mural?'),
            lines: [T('Ha! Nonsense. I am the town historian. There is NOTHING under that paint but a grey wall.', 'Ha! Mengarut. Saya ahli sejarah bandar. TIADA apa di bawah cat itu kecuali dinding kelabu.')], claims: ['c_hart_know'] },
          { id: 'truth', label: T('Mr. Hartmann, tell me the truth.', 'Encik Hartmann, beritahu kebenaran.'), after: 'hart_admit',
            lines: [T('*He sits down heavily.* Two hundred thousand pounds, hidden under children\'s paint. If the wing came down, the wall was MINE. A ghost story was so easy... people WANT to be scared. I never thought a child would read the gate log.', '*Dia duduk dengan berat.* Dua ratus ribu paun, tersembunyi di bawah cat kanak-kanak. Jika sayap dirobohkan, dinding itu MILIK SAYA. Cerita hantu sangat mudah... orang MAHU takut. Saya tak sangka seorang budak akan membaca log pagar.')] }
        ],
        present: {
          gate_log: { requiresFlag: 'gate_solved', lines: [T('My card? Someone must have... borrowed it.', 'Kad saya? Mesti ada orang... meminjamnya.')], lockedLines: [T('A list of names. So what? (Read it carefully first.)', 'Senarai nama. Jadi? (Baca dengan teliti dahulu.)')] },
          receipt: { lines: [T('Paint remover is for... my garden shed. Yes. My shed.', 'Penanggal cat untuk... bangsal kebun saya. Ya. Bangsal saya.')] },
          ravi_840: { lines: [T('Lots of people have lanterns!', 'Ramai orang ada tanglung!')] },
          catalogue: { unlock: 'hart_admit', lines: [T('*His face goes grey.* You opened my bag...', '*Mukanya menjadi kelabu.* Awak buka beg saya...')] },
          salvage_contract: { unlock: 'hart_admit', lines: [T('That is a normal business paper! ...Normal.', 'Itu kertas perniagaan biasa! ...Biasa.')] },
          signature: { lines: [T('*He stares at the glowing letters and says nothing.*', '*Dia merenung huruf yang bersinar dan diam.*')] },
          remover_can: { lines: [T('Anyone could have left that there.', 'Sesiapa boleh tinggalkan itu di situ.')] }
        }
      },
      noor: {
        greeting: T(`Six weeks. Twenty children. And now someone has ruined it — and they're calling it a GHOST. *Her voice shakes with anger.*`, `Enam minggu. Dua puluh kanak-kanak. Dan kini seseorang merosakkannya — dan mereka panggil ia HANTU. *Suaranya menggeletar kerana marah.*`),
        topics: [
          { id: 'left', label: T('When did you leave?', 'Bila anda keluar?'),
            lines: [T('I locked up at 5:30 and went home. Our mural is water-based acrylic — any paint remover would wipe it off in minutes.', 'Saya mengunci pukul 5:30 dan pulang. Mural kami akrilik berasaskan air — mana-mana penanggal cat boleh mengelapnya dalam beberapa minit.')], claims: ['c_noor_left'] },
          { id: 'wall', label: T('What was on the wall before?', 'Apa yang ada di dinding sebelum ini?'),
            lines: [T('Just old grey paint from 1972. Mr. Hartmann was VERY interested when we started painting. He kept asking how thick our paint was.', 'Hanya cat kelabu lama dari 1972. Encik Hartmann SANGAT berminat bila kami mula melukis. Dia asyik bertanya betapa tebalnya cat kami.')] }
        ],
        present: {
          turps_bottle: { lines: [T('That\'s for my oil-painting club. Look — the cap is dusty. I haven\'t opened it in weeks.', 'Itu untuk kelab lukisan minyak saya. Tengok — penutupnya berhabuk. Saya tak buka berminggu-minggu.')] },
          signature: { lines: [T('E. Marsh... ELENA Marsh?! Her lost mural was HERE all along? Under our paint?!', 'E. Marsh... ELENA Marsh?! Mural hilangnya ada DI SINI selama ini? Di bawah cat kami?!')] },
          remover_can: { lines: [T('PeelAway! That would dissolve our acrylic like butter.', 'PeelAway! Itu boleh melarutkan akrilik kami macam mentega.')] }
        }
      },
      tunde: {
        greeting: T(`My bird's OK, right? Please tell me the ghost didn't touch my bird.`, `Burung saya OK, kan? Tolong beritahu hantu tak sentuh burung saya.`),
        topics: [
          { id: 'home', label: T('Were you here this evening?', 'Adakah awak di sini malam ini?'),
            lines: [T('No! I went home at 5, like everyone.', 'Tak! Saya balik pukul 5, macam semua orang.')], claims: ['c_tunde_home'] },
          { id: 'bird', label: T('Tell me about your bird.', 'Ceritakan tentang burung awak.'),
            lines: [T('It\'s a kingfisher. Bright blue. The wing was wrong and it was bugging me all day.', 'Ia burung pekaka. Biru terang. Sayapnya salah dan ia mengganggu saya sepanjang hari.')] }
        ],
        present: {
          gate_log: { unlock: 'tunde_admit', claims: ['c_tunde_bird'], lines: [T('...OK, I sneaked back at 7:20 to fix the wing. I left at 7:45. There was NO girl then, I promise! It was just our mural.', '...OK, saya datang semula pukul 7:20 untuk membaiki sayapnya. Saya keluar pukul 7:45. TIADA budak perempuan masa itu, saya janji! Cuma mural kami.')] },
          ravi_740: { unlock: 'tunde_admit', claims: ['c_tunde_bird'], lines: [T('That\'s me! Fixing my bird at 7:40. And look — no girl!', 'Itu saya! Membaiki burung pukul 7:40. Dan tengok — tiada budak perempuan!')] }
        }
      },
      lindqvist: {
        greeting: T(`Thirty years I clean this wing. Never... never have I seen her eyes before. *She crosses her arms tightly.*`, `Tiga puluh tahun saya membersihkan sayap ini. Tidak pernah... tidak pernah saya nampak matanya sebelum ini. *Dia memeluk tubuh dengan erat.*`),
        topics: [
          { id: 'found', label: T('What happened at 9:00?', 'Apa berlaku pukul 9:00?'),
            lines: [T('I came in at 9:00 with my cart, switched on the light, and she was THERE. Staring. Red tears. I screamed and ran to the guard.', 'Saya masuk pukul 9:00 dengan troli, hidupkan lampu, dan dia ADA di situ. Merenung. Air mata merah. Saya menjerit dan lari kepada pengawal.')], claims: ['c_lind_found'] },
          { id: 'legend', label: T('Do you know the legend?', 'Adakah anda tahu legenda itu?'),
            lines: [T('My grandmother went to this school. She said a sick little girl was "painted into the wall" so she could stay with her friends. We children thought it was a ghost story.', 'Nenek saya bersekolah di sini. Dia kata seorang budak perempuan kecil yang sakit "dilukis ke dalam dinding" supaya dia boleh kekal bersama kawan-kawannya. Kami budak-budak ingat itu cerita hantu.')] }
        ],
        present: {
          cleaning_cart: { lines: [T('My cart. Floor soap. The strong cleaner is still sealed — look.', 'Troli saya. Sabun lantai. Pencuci kuat masih bermeterai — tengok.')] },
          rose_letter: { lines: [T('"Let her stay"... Grandmother was right. Oh, the poor child.', '"Let her stay"... Nenek betul. Oh, kasihan budak itu.')] }
        }
      },
      ravi: {
        greeting: T(`I've got PROOF. Photos! I take one every hour for the photography club. But I'm too scared to look at the last one.`, `Saya ada BUKTI. Gambar! Saya ambil satu setiap jam untuk kelab fotografi. Tetapi saya terlalu takut nak tengok yang terakhir.`),
        topics: [
          { id: 'photos', label: T('Can I see your photos?', 'Boleh saya lihat gambar awak?'), gives: ['ravi_740', 'ravi_840'], claims: ['c_ravi_photos'],
            lines: [T('7:40 and 8:40. In between I was here in the guard office, printing. Look at the second one... the shadow on the floor.', '7:40 dan 8:40. Di antaranya saya di sini di pejabat pengawal, mencetak. Tengok yang kedua... bayang di lantai.')] },
          { id: 'gate', label: T('Who comes in and out?', 'Siapa keluar masuk?'),
            lines: [T('Everyone uses a gate card. The screen here shows every card. The guard lets me use it for my notes.', 'Semua orang guna kad pagar. Skrin di sini menunjukkan setiap kad. Pengawal benarkan saya guna untuk nota saya.')] }
        ],
        present: {
          ravi_840: { lines: [T('That lantern... it\'s round, with little ghost holes. Mr. Hartmann carries one exactly like that on his tours!', 'Tanglung itu... bulat, dengan lubang hantu kecil. Encik Hartmann bawa satu sebiji macam itu semasa lawatannya!')] }
        }
      }
    },

    /* ------------------------------------------------------------------ SPOOKY MOMENTS (scare level 1 = Low, 2 = Medium) */
    horror: {
      zones: [
        { id: 'gh_stare', room: 'GH', once: true, minScare: 1, delay: 3, fx: ['flicker:GH:2', 'sfx:sting'], text: T('👁️ The lights flicker... and for a moment the painted girl\'s eyes seem to follow you.', '👁️ Lampu berkelip... dan seketika mata budak perempuan yang dilukis seolah-olah mengikut anda.') },
        { id: 'gh_whisper', room: 'GH', once: true, minScare: 2, delay: 18, fx: ['sfx:whisper', 'music:tense:9'], text: T('🗣️ A tiny voice from INSIDE the wall: "Let me... stay..."', '🗣️ Suara kecil dari DALAM dinding: "Let me... stay..."') },
        { id: 'wc_steps', room: 'WC', once: true, minScare: 1, delay: 2, fx: ['sfx:steps_far', 'flicker:WC:1.5'], text: T('👣 Small bare footsteps run ahead of you down the corridor.', '👣 Tapak kaki kecil tanpa kasut berlari di hadapan anda di lorong.') },
        { id: 'ar_drip', room: 'AR', once: true, minScare: 1, delay: 3, fx: ['sfx:drip'], text: T('🩸 Drip... drip... red paint drips from a brush that nobody is holding.', '🩸 Titis... titis... cat merah menitis dari berus yang tiada siapa pegang.') },
        { id: 'go_static', room: 'GO', once: true, minScare: 2, delay: 6, fx: ['sfx:static', 'blackout:1.2'], text: T('📺 The CCTV screen shows the gallery... and a small figure standing in front of the mural. Then static.', '📺 Skrin CCTV menunjukkan galeri... dan satu susuk kecil berdiri di hadapan mural. Kemudian bintik-bintik.') },
        { id: 'st_slam', room: 'ST', once: true, minScare: 1, delay: 1.5, fx: ['sfx:slam', 'shake:0.5', 'flash:black'], text: T('🚪 The storeroom door slams shut behind you!', '🚪 Pintu stor terhempas di belakang anda!') },
        { id: 'st_heart', room: 'ST', once: true, minScare: 2, delay: 9, fx: ['sfx:heartbeat', 'flicker:ST:2'], text: T('💓 Under a dust sheet, something is the shape of a child...', '💓 Di bawah kain habuk, ada sesuatu berbentuk kanak-kanak...') }
      ],
      figures: [
        { name: 'figure1', room: 'GH', minScare: 1, revealDistance: 3.0, flickerRoom: 'GH', sfx: 'sting', reveal: T('It is only a cardboard cut-out of a student, made for tomorrow\'s unveiling. (A false alarm!)', 'Ia hanya potongan kadbod seorang murid, dibuat untuk perasmian esok. (Penggera palsu!)') },
        { name: 'figure2', room: 'ST', minScare: 2, revealDistance: 2.8, flickerRoom: 'ST', reveal: T('A dust sheet over an old school statue of a girl holding a rose... its stone cheeks are wet.', 'Kain habuk menutupi patung lama sekolah seorang budak perempuan memegang bunga ros... pipi batunya basah.') }
      ]
    },

    /* ------------------------------------------------------------------ EXIT TICKET */
    exitTicket: [
      { subject: 'science', q: T('Two layers of paint: blue on top, red underneath. Which was painted first?', 'Dua lapisan cat: biru di atas, merah di bawah. Yang mana dilukis dahulu?'),
        options: [T('Blue', 'Biru'), T('Red', 'Merah'), T('Both at the same time', 'Kedua-dua serentak')], answer: 1, why: T('The bottom layer always goes on first.', 'Lapisan bawah sentiasa dilukis dahulu.') },
      { subject: 'math', q: T('A visitor was inside from 7:55 to 8:30. How long was that?', 'Seorang pelawat di dalam dari 7:55 hingga 8:30. Berapa lama?'),
        options: ['25 min', '35 min', '45 min', '75 min'], answer: 1, why: T('5 minutes to 8:00, then 30 more = 35 minutes.', '5 minit ke 8:00, kemudian 30 lagi = 35 minit.') },
      { subject: 'geography', q: T('On a grid map, which comes FIRST in a grid reference like "B2"?', 'Pada peta grid, apa yang datang DAHULU dalam rujukan grid seperti "B2"?'),
        options: [T('The letter across (column)', 'Huruf melintang (lajur)'), T('The number down (row)', 'Nombor menegak (baris)')], answer: 0, why: T('Read across first, then up or down: B, then 2.', 'Baca melintang dahulu, kemudian ke atas atau bawah: B, kemudian 2.') }
    ],

    /* ------------------------------------------------------------------ 3D WORLD (built from this data) */
    world(W) {
      const H = 3.2, WALL = 0x5a5650, WALL2 = 0x48443e;
      W.sky(0x05050a); W.fog(5, 24); W.spawn(this.spawn.x, this.spawn.z, this.spawn.yaw);
      W.mood({ amb: 0.16, hemi: 0.13, ambLow: 0.55, hemiLow: 0.32 });

      /* ---- rooms (GH gallery hall, WC west corridor, AR art room, GO guard office, ST old storeroom) ---- */
      W.room('GH', -9, -4, -1, 4, T('Gallery hall (the mural)', 'Dewan galeri (mural)'), true, 0x3a3630, 0x18161a);
      W.room('WC', -1, -1, 8, 1, T('West corridor', 'Lorong barat'), true, 0x3e3a34, 0x161518, 2.8);
      W.room('AR', 1, -8, 7, -1, T('Art room', 'Bilik seni'), true, 0x4e4a44, 0x1c1a1c);
      W.room('GO', 1, 1, 7, 8, T('Guard office', 'Pejabat pengawal'), true, 0x2f3a44, 0x14181c);
      W.room('ST', 8, -3, 15, 3, T('Old storeroom', 'Stor lama'), true, 0x3a3a34, 0x121315);

      /* ---- walls ---- */
      W.wallZ(-4, -9, -1, [], H, WALL); W.wallZ(4, -9, -1, [], H, WALL); W.wallX(-9, -4, 4, [], H, 0x6a665e); W.wallX(-1, -4, 4, [[-1, 1]], H, WALL);
      W.wallZ(-1, -1, 8, [[3, 4.2]], 2.8, WALL2); W.wallZ(1, -1, 8, [[3, 4.2]], 2.8, WALL2);
      W.wallZ(-8, 1, 7, [], H, 0x6a6458); W.wallX(1, -8, -1, [], H, 0x6a6458); W.wallX(7, -8, -1, [], H, 0x6a6458);
      W.wallZ(8, 1, 7, [], H, 0x3c4854); W.wallX(1, 1, 8, [], H, 0x3c4854); W.wallX(7, 1, 8, [], H, 0x3c4854);
      W.wallX(8, -3, 3, [[-1, 1]], H, 0x44443c); W.wallZ(-3, 8, 15, [], H, 0x44443c); W.wallZ(3, 8, 15, [], H, 0x44443c); W.wallX(15, -3, 3, [], H, 0x44443c);

      /* ---- lights (point lights are off in Low graphics mode) ---- */
      W.light('GH', -6.5, 2.9, 0, 0xfff0d0, 0.5, 12); W.light('WC', 3.5, 2.4, 0, 0x9aa8ff, 0.3, 9);
      W.light('AR', 4, 2.6, -4.5, 0xffe8c0, 0.5, 10); W.light('GO', 4, 2.6, 4.5, 0x70c0ff, 0.45, 10); W.light('ST', 11.5, 2.6, 0, 0xffb060, 0.3, 10);

      /* ================= GALLERY HALL: the mural on the west wall ================= */
      W.box(-8.88, 1.6, 0, 0.04, 2.4, 7.4, 0x6fb4d8, { collide: false });                              // sky
      W.box(-8.86, 0.6, 0, 0.04, 0.8, 7.4, 0x5a9a48, { collide: false });                              // grass
      [[-2.6, 0.9, 0x9a5a3a], [-1.5, 1.2, 0xd8a040], [1.6, 1.0, 0xb05a6a], [2.8, 0.8, 0x7a7ac0]].forEach((b) => W.box(-8.85, 1.0 + b[1] / 2, b[0], 0.04, b[1], 0.9, b[2], { collide: false }));   // houses
      W.box(-8.85, 2.4, 2.0, 0.04, 0.25, 0.6, 0x1e88e5, { collide: false });                             // Tunde's kingfisher
      W.box(-8.84, 1.7, 0, 0.04, 1.3, 1.2, 0xb8ac94, { collide: false });                               // the wiped patch (old paint)
      W.box(-8.82, 1.85, 0, 0.04, 0.6, 0.45, 0xd8d0c4, { collide: false });                             // pale face
      W.box(-8.80, 1.92, -0.1, 0.04, 0.07, 0.07, 0x111111, { collide: false }); W.box(-8.80, 1.92, 0.1, 0.04, 0.07, 0.07, 0x111111, { collide: false });   // eyes
      W.box(-8.795, 1.6, -0.1, 0.04, 0.45, 0.03, 0x8a0f12, { collide: false }); W.box(-8.795, 1.62, 0.1, 0.04, 0.4, 0.03, 0x8a0f12, { collide: false });   // red streaks
      W.interact({ id: 'mural', x: -8.6, y: 1.7, z: 0, r: 0.9, label: T('The girl in the mural', 'Budak perempuan dalam mural'), item: 'mural' });
      W.writing(-8.80, 2.0, 1.25, Math.PI / 2, T('LET ME OUT', 'LET ME OUT'), '#e8e0d0', 1.1, 0.35);
      W.interact({ id: 'scratches', x: -8.6, y: 2.0, z: 1.25, r: 0.5, label: T('Scratched words', 'Perkataan dicakar'), item: 'scratches' });
      W.interact({ id: 'signature', x: -8.6, y: 0.45, z: -3.3, r: 0.5, label: T('Bottom corner of the mural', 'Sudut bawah mural'), item: 'signature', needsFlag: 'uv_found',
        lockedText: T('Just green paint in the corner... but it looks slightly bumpy, as if letters are hidden underneath. (Maybe a special light would show more.)', 'Hanya cat hijau di sudut... tetapi ia kelihatan sedikit timbul, seperti ada huruf tersembunyi di bawahnya. (Mungkin cahaya khas boleh menunjukkan lebih.)') });
      W.writing(-8.80, 2.95, 0, Math.PI / 2, T('"OUR TOWN" — Ravenscroft Year 7', '"OUR TOWN" — Ravenscroft Tahun 7'), '#f0e6c8', 3.2, 0.32);
      [[-4.2, -2.6], [-4.2, 2.8], [-3.2, -2.6]].forEach((p) => W.box(p[0], 0, p[1], 0.5, 0.5, 0.5, 0x3a2a22, { collide: false }));   // chairs
      W.box(-4.2, 0.5, 2.8, 0.3, 0.02, 0.2, 0xe8e0f0, { collide: false });
      W.interact({ id: 'ghost_flyer', x: -4.2, y: 0.6, z: 2.8, r: 0.4, label: T('Flyer on a chair', 'Risalah di atas kerusi'), item: 'ghost_flyer' });
      W.box(-1.8, 0, -3.3, 0.5, 1.4, 0.06, 0xb8a080, { collide: false, name: 'figure1' }); W.ball(-1.8, 1.55, -3.3, 0.18, 0xb8a080, { name: 'figure1' });   // cardboard cut-out

      /* ================= WEST CORRIDOR ================= */
      W.box(2.2, 1.5, -0.95, 1.1, 0.8, 0.05, 0xe4d6b0, { collide: false });
      W.interact({ id: 'old_plan', x: 2.2, y: 1.5, z: -0.8, r: 0.6, label: T('Framed 1931 plan', 'Pelan 1931 berbingkai'), item: 'old_plan' });
      W.writing(6.0, 1.7, -0.88, 0, T('WEST WING · 1887', 'SAYAP BARAT · 1887'), '#c8c0b0', 1.8, 0.45);

      /* ================= ART ROOM ================= */
      [[2.6, -5.5], [4.0, -6.2], [5.4, -5.5]].forEach((p) => { W.box(p[0], 0, p[1], 0.1, 1.5, 0.1, 0x6a4a2a); W.box(p[0], 1.0, p[1] + 0.1, 0.8, 0.6, 0.04, 0xf2ece0, { collide: false }); });   // easels
      W.box(6.88, 1.2, -4.0, 0.12, 0.05, 1.2, 0x5a4a3a, { collide: false });
      W.box(6.8, 1.3, -4.0, 0.12, 0.08, 0.25, 0x6a3ab0, { collide: false });                             // UV torch
      W.interact({ id: 'uv_torch', x: 6.7, y: 1.3, z: -4.0, r: 0.5, label: T('Torch on the shelf', 'Lampu suluh di atas rak'), item: 'uv_torch' });
      W.box(1.5, 0, -7.3, 0.9, 1.6, 0.6, 0x5a4a3a);                                                     // art cupboard
      W.interact({ id: 'turps_bottle', x: 1.9, y: 1.0, z: -7.0, r: 0.5, label: T('Art cupboard', 'Almari seni'), item: 'turps_bottle' });
      W.box(4.0, 0, -2.6, 2.2, 0.75, 1.0, 0x6a5a48);                                                    // big table

      /* ================= GUARD OFFICE ================= */
      W.box(4.0, 0, 3.8, 1.8, 0.8, 0.9, 0x2a2f36);
      W.box(4.0, 0.8, 4.1, 0.6, 0.45, 0.05, 0x111820, { collide: false }); W.box(4.0, 1.02, 4.07, 0.5, 0.35, 0.02, 0x2a6a8a, { collide: false });   // screen
      W.interact({ id: 'gate_log', x: 4.0, y: 1.0, z: 3.8, r: 0.5, label: T('Gate log screen', 'Skrin log pagar'), item: 'gate_log' });
      W.box(6.4, 0, 6.8, 0.8, 1.8, 0.5, 0x3a4a5a);                                                     // lockers

      /* ================= OLD STOREROOM ================= */
      W.box(10.0, 0, -2.4, 0.5, 0.6, 0.5, 0x3a3a3a);                                                    // bin
      W.interact({ id: 'remover_can', x: 10.0, y: 0.6, z: -2.4, r: 0.5, label: T('Storeroom bin', 'Tong sampah stor'), item: 'remover_can' });
      W.box(12.2, 0, -2.3, 1.0, 0.9, 0.6, 0x6a5a8a);                                                    // cleaning cart
      W.interact({ id: 'cleaning_cart', x: 12.2, y: 0.9, z: -2.3, r: 0.6, label: T("Cleaner's cart", 'Troli tukang cuci'), item: 'cleaning_cart' });
      W.box(14.2, 0, 1.7, 0.7, 0.45, 0.35, 0x5a3a20);                                                   // tour bag
      W.interact({ id: 'tour_bag', x: 14.2, y: 0.45, z: 1.7, r: 0.5, label: T('Leather bag (locked)', 'Beg kulit (berkunci)'), item: 'tour_bag' });
      W.interact({ id: 'receipt', x: 14.2, y: 0.3, z: 2.35, r: 0.35, label: T("Bag's outside pocket", 'Poket luar beg'), item: 'receipt' });
      W.box(14.8, 0, -1.5, 0.4, 2.0, 1.2, 0x4a3a2a);                                                    // old cupboard
      W.interact({ id: 'rose_letter', x: 14.4, y: 1.2, z: -1.5, r: 0.6, label: T('Old cupboard', 'Almari lama'), item: 'rose_letter', needsFlag: 'plan_solved',
        lockedText: T('An old cupboard full of dusty paint boxes from long ago. You do not know what you are looking for yet. (Learn about the wall\'s history first.)', 'Almari lama penuh kotak cat berhabuk dari zaman dahulu. Anda belum tahu apa yang anda cari. (Ketahui sejarah dinding itu dahulu.)') });
      W.box(12.6, 0, 2.3, 0.5, 1.2, 0.5, 0xdcdcd4, { collide: false, name: 'figure2' }); W.ball(12.6, 1.35, 2.3, 0.2, 0xdcdcd4, { name: 'figure2' });   // dust sheet statue

      /* ================= PEOPLE ================= */
      W.npc({ id: 'hartmann', x: -5.2, z: -2.6, rot: Math.PI * 0.75, skin: 0xe8c0a0, shirt: 0x4a6a8a, pants: 0x2a2a2a, hair: 0xb0b0b0, scale: 1.08, hat: 0x2a2a2a });
      W.npc({ id: 'noor', x: 2.6, z: -3.4, rot: Math.PI * 0.35, skin: 0xc79a6a, shirt: 0xc0562b, pants: 0x2c2c3c, hair: 0x1a1210, scale: 0.96 });
      W.npc({ id: 'tunde', x: 5.6, z: -3.0, rot: Math.PI * 1.4, skin: 0x7a4a2a, shirt: 0x2e7d32, pants: 0x3a3a4a, hair: 0x111111, scale: 0.86 });
      W.npc({ id: 'ravi', x: 2.8, z: 5.6, rot: Math.PI * 0.2, skin: 0xa8754f, shirt: 0xd4a017, pants: 0x2c3e50, hair: 0x111111, scale: 0.8 });
      W.npc({ id: 'lindqvist', x: 11.0, z: 1.4, rot: Math.PI * 1.6, skin: 0xf0d0b0, shirt: 0x6a5a8a, pants: 0x3a3a4a, hair: 0xe8e0c8, scale: 0.95 });
    }
  };

  /* ====================================================================== PICTURES FOR THIS CASE */
  const A = MF.art, h = A.h;
  A.mural003 = (canvas) => {
    canvas.width = 640; canvas.height = 320; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 640, 320, '#2a2622');
    h.rect(c, 30, 30, 300, 260, '#6fb4d8'); h.rect(c, 30, 220, 300, 70, '#5a9a48');                                 // new mural
    h.rect(c, 110, 70, 140, 160, '#b8ac94'); h.rect(c, 145, 95, 70, 90, '#d8d0c4'); h.rect(c, 160, 125, 10, 10, '#111'); h.rect(c, 190, 125, 10, 10, '#111');
    h.rect(c, 163, 137, 4, 50, '#8a0f12'); h.rect(c, 193, 137, 4, 44, '#8a0f12');
    h.text(c, 'wiped patch', 180, 250, 14, '#fff', 'center', true);
    const L = [['NEW bright mural (2024)', '#6fb4d8', 90], ['OLD faded painting', '#b8ac94', 150], ['WALL (bricks)', '#8a5a4a', 210]];
    h.text(c, 'Edge of the patch (side view):', 360, 60, 16, '#eee', 'left', true);
    L.forEach((l, i) => { h.rect(c, 360, l[2], 40, 40, l[1]); h.text(c, (i === 0 ? '▲ top  ' : i === 2 ? '▼ bottom  ' : '') + l[0], 410, l[2] + 26, 15, '#eee', 'left', true); });
  };
  A.plan003 = (canvas) => {
    canvas.width = 680; canvas.height = 400; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 680, 400, '#e4d6b0');
    const X0 = 70, Y0 = 50, S = 64; 'ABCDE'.split('').forEach((L, i) => h.text(c, L, X0 + i * S + S / 2, Y0 - 12, 20, '#333', 'center', true));
    for (let r = 0; r < 5; r++) h.text(c, String(r + 1), X0 - 22, Y0 + r * S + S / 2 + 7, 20, '#333', 'center', true);
    c.strokeStyle = '#8a7a5a'; c.lineWidth = 1; for (let i = 0; i <= 5; i++) { h.line(c, X0 + i * S, Y0, X0 + i * S, Y0 + 5 * S, '#8a7a5a', 1); h.line(c, X0, Y0 + i * S, X0 + 5 * S, Y0 + i * S, '#8a7a5a', 1); }
    h.rect(c, X0 + 4, Y0 + 4, S * 2 - 8, S * 2 - 8, 'rgba(90,70,50,0.25)'); h.text(c, 'GALLERY HALL', X0 + S, Y0 + S * 2 - 12, 13, '#3a2a1a', 'center', true);
    h.circ(c, X0 + S * 1.5, Y0 + S * 1.5, 12, '#c0392b'); h.circ(c, X0 + S * 1.5, Y0 + S * 1.5, 5, '#ffb0b0'); h.line(c, X0 + S * 1.5, Y0 + S * 1.5 + 12, X0 + S * 1.5, Y0 + S * 1.5 + 26, '#2e7d32', 3);
    h.rect(c, X0 + S * 2 + 4, Y0 + S + 20, S * 3 - 8, 24, 'rgba(90,70,50,0.25)'); h.text(c, 'corridor', X0 + S * 3.5, Y0 + S + 37, 12, '#3a2a1a', 'center', true);
    h.circ(c, 560, 120, 46, '#fff'); h.line(c, 560, 155, 560, 85, '#c0392b', 5); h.text(c, 'N', 560, 72, 20, '#c0392b', 'center', true); h.text(c, 'W', 504, 127, 18, '#333', 'center', true); h.text(c, 'E', 616, 127, 18, '#333', 'center', true); h.text(c, 'S', 560, 186, 18, '#333', 'center', true);
    h.text(c, 'RAVENSCROFT SCHOOL — 1931', 420, 260, 18, '#3a2a1a', 'left', true); h.text(c, '🌹 = "Rose in the Garden"', 420, 290, 16, '#7a1a1a', 'left', true); h.text(c, '      E. Marsh', 420, 314, 14, '#555', 'left', false);
  };
  A.bag003 = (canvas) => {
    canvas.width = 620; canvas.height = 280; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 280, '#2a1d14');
    h.rect(c, 30, 50, 280, 190, '#5a3a20'); h.rect(c, 30, 50, 280, 30, '#6e4a2a'); h.rect(c, 140, 140, 60, 50, '#b08a2e'); [0, 1, 2].forEach((i) => h.text(c, '?', 152 + i * 18, 172, 18, '#222', 'center', true));
    h.text(c, 'F.H. — GHOST TOURS', 170, 120, 16, '#e8d8b0', 'center', true);
    h.rect(c, 340, 40, 250, 200, '#d9c27a'); h.text(c, 'Forgetful? Finish', 355, 75, 18, '#222', 'left', true); h.text(c, 'my patterns.', 355, 98, 18, '#222', 'left', true);
    ['10, 8, 6, 4, ?', '9, 6, 3, ?', '0, 3, 6, ?'].forEach((t, i) => h.text(c, t, 360, 140 + i * 32, 22, '#5a1a1a', 'left', true));
  };
  function muralBase(c, W, H) {
    h.rect(c, 0, 0, W, H, '#20201c'); h.rect(c, W * 0.1, H * 0.1, W * 0.8, H * 0.62, '#6fb4d8'); h.rect(c, W * 0.1, H * 0.55, W * 0.8, H * 0.17, '#5a9a48');
    [[0.15, 0.35, '#9a5a3a'], [0.27, 0.3, '#d8a040'], [0.62, 0.32, '#b05a6a'], [0.75, 0.38, '#7a7ac0']].forEach((b) => h.rect(c, W * b[0], H * b[1], W * 0.09, H * (0.55 - b[1]), b[2]));
    h.rect(c, W * 0.66, H * 0.16, 46, 18, '#1e88e5');
  }
  A.photos.r740 = (c, W, H, o) => {
    muralBase(c, W, H); h.rect(c, W * 0.64, H * 0.5, 30, 60, '#2e7d32'); h.circ(c, W * 0.64 + 15, H * 0.47, 12, '#7a4a2a'); h.rect(c, W * 0.62, H * 0.66, 60, 30, '#555');   // Tunde on a stool
    const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.55)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#fff', 'center', true);
  };
  A.photos.r840 = (c, W, H, o) => {
    muralBase(c, W, H); h.rect(c, W * 0.42, H * 0.2, W * 0.16, H * 0.36, '#b8ac94'); h.rect(c, W * 0.46, H * 0.25, W * 0.08, H * 0.2, '#d8d0c4');
    h.rect(c, W * 0.475, H * 0.31, 8, 8, '#111'); h.rect(c, W * 0.515, H * 0.31, 8, 8, '#111'); h.rect(c, W * 0.477, H * 0.34, 3, 40, '#8a0f12'); h.rect(c, W * 0.517, H * 0.34, 3, 34, '#8a0f12');
    c.fillStyle = 'rgba(0,0,0,0.55)'; c.beginPath(); c.moveTo(W * 0.95, H * 0.98); c.lineTo(W * 0.62, H * 0.8); c.lineTo(W * 0.6, H * 0.84); c.lineTo(W * 0.92, H); c.fill();   // long shadow
    h.circ(c, W * 0.6, H * 0.8, 16, 'rgba(0,0,0,0.6)'); [-6, 0, 6].forEach((d) => h.circ(c, W * 0.6 + d, H * 0.8, 3, 'rgba(255,220,120,0.6)'));   // lantern shadow with holes
    const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.55)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#fff', 'center', true);
  };

  MF.registerCase(C);
})();
