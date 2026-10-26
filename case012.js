/* ============================================================================
   CASE 012 — THE LIGHTHOUSE AT SKERRY POINT / RUMAH API SKERRY POINT   (Lighthouse island, storm)
   ----------------------------------------------------------------------------
   One complete, independent story. The engine reads it as data.

   HIDDEN SOLUTION  (two layers: a HUMAN crime that is proved by evidence, and a
   SUPERNATURAL surprise that appears only when the careful detective finds the old clues)
   HUMAN LAYER
   - Captain Declan Rourke, a salvage skipper, wants the supply ship MARY AOIFE II to wreck
     on the Skerry Rocks so his firm can claim the cargo (a £40,000 salvage fee).
   - 9:35  The Kestrel docks (tide still high enough). Rourke lands with a yellow hat and a case.
   - 9:40  Keeper Tomas leaves the lamp room (unlocked) to phone his sick daughter on the east steps.
   - 9:55  Rourke switches off the lamp and removes the main FUSE. He hides it in his sea chest.
   - 10:05 Rourke puts a FAKE flashing lantern on the NORTH cliff (3 flashes every 12 s) to pull
           ships toward the rocks. The real light is 2 flashes every 10 s.
   - 10:20 After this, the tide drops below 2.0 m: the jetty is dry. Rourke lies that he arrived at 11:00.
   SUPERNATURAL LAYER
   - 10:20 Dr. Haddad's night camera photographs a keeper's lantern waving in the locked lamp room
           window. Nobody on the island could have been there (everyone is accounted for).
           A pocket watch stopped at 10:20 lies on the sill. The 1953 logbook says Keeper Silas
           Marlowe promised to wave his lantern to warn any ship when the light fails.
   TWIST: the "ghost" really did help: Silas warned the ship; the human villain was caught by clues.
   ============================================================================ */
(function () {
  const T = (en, bm) => ({ en, bm });
  const mm = (s) => { const [h, m] = s.split(':').map(Number); return (h < 12 ? h + 12 : h) * 60 + m; };
  const paper = (html, style) => `<div class="paper hand" style="${style || ''}">${html}</div>`;

  const C = {
    id: '012',
    num: 12,
    title: T('The Lighthouse at Skerry Point', 'Rumah Api Skerry Point'),
    tagline: T('The light is out. A ship is coming. And an old keeper who died in 1953 may still be climbing the stairs.', 'Lampu padam. Sebuah kapal sedang menghampiri. Dan seorang penjaga lama yang meninggal pada 1953 mungkin masih menaiki tangga.'),
    place: T('Skerry Point Lighthouse (island)', 'Rumah Api Skerry Point (pulau)'),
    premise: T(
      `It is 10:30 pm on a wild, stormy night. The lamp of Skerry Point Lighthouse went DARK at 9:55 pm. The supply ship Mary Aoife II, with fourteen people on board, will pass the deadly Skerry Rocks at 11:05 — and the captain says she cannot wait. On the north cliff a strange light is flashing. The old keeper Paddy says it is the ghost of Silas Marlowe, who died in 1953 saving a ship. You reached the island across the causeway. Find out who put out the light, and why, before 11:05. Be careful: in a lighthouse, even the dark can have two explanations.`,
      `Sekarang pukul 10:30 malam yang ribut. Lampu Rumah Api Skerry Point menjadi GELAP pukul 9:55 malam. Kapal bekalan Mary Aoife II, dengan empat belas orang di atasnya, akan melintasi Batu Skerry yang berbahaya pukul 11:05 — dan kaptennya berkata dia tidak boleh menunggu. Di tebing utara ada cahaya aneh berkelip. Penjaga lama Paddy berkata itu hantu Silas Marlowe, yang meninggal pada 1953 menyelamatkan sebuah kapal. Anda tiba di pulau melalui jalan timbul. Cari siapa yang memadamkan lampu, dan kenapa, sebelum 11:05. Berhati-hati: dalam rumah api, kegelapan pun boleh ada dua penjelasan.`),
    mysteryType: 'Sabotage / false light / ghost',
    subjects: ['geography', 'math', 'science', 'english', 'thinking'],
    scareDefault: 2,
    clock: { start: mm('10:30'), deadline: mm('11:05'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },

    hidden: {
      culprit: 'rourke',
      what: 'fuse_removed',
      window: [mm('9:35'), mm('10:20')],
      summary: T(
        `Captain Rourke wanted the supply ship to wreck so that his company could claim the cargo. He landed at 9:35 while the tide was high, switched off the lamp at 9:55 and hid the main fuse in his sea chest. He put a fake flashing lantern on the north cliff to lead the ship toward the Skerry Rocks. By 10:20 the tide had gone out and the jetty was dry, so his claim "I arrived at 11:00" cannot be true. And at 10:20 something else happened that nobody can explain: a lantern waved in the locked lamp room, warning the ship.`,
        `Kapten Rourke mahu kapal bekalan karam supaya syarikatnya boleh menuntut muatan. Dia mendarat pukul 9:35 semasa air pasang masih tinggi, memadamkan lampu pukul 9:55 dan menyorokkan fius utama dalam petinya. Dia meletakkan lentera palsu yang berkelip di tebing utara untuk membawa kapal ke Batu Skerry. Menjelang 10:20 air telah surut dan jeti kering, jadi dakwaannya "saya tiba pukul 11:00" tidak boleh benar. Dan pada 10:20 sesuatu yang lain berlaku yang tiada siapa dapat jelaskan: lentera dilambai di bilik lampu yang berkunci, memberi amaran kepada kapal.`),
      sequence: [
        [mm('9:35'), T('The Kestrel docks at the jetty (the tide is high). Rourke lands.', 'Kestrel berlabuh di jeti (air pasang tinggi). Rourke mendarat.')],
        [mm('9:40'), T('Tomas leaves the lamp room to phone his daughter.', 'Tomas meninggalkan bilik lampu untuk menelefon anak perempuannya.')],
        [mm('9:55'), T('The lamp goes out. The main fuse is removed.', 'Lampu padam. Fius utama dikeluarkan.')],
        [mm('10:05'), T('A fake lantern starts flashing on the north cliff.', 'Lentera palsu mula berkelip di tebing utara.')],
        [mm('10:20'), T('The tide drops below 2.0 m. A lantern waves in the lamp-room window.', 'Air surut di bawah 2.0 m. Lentera dilambai di tingkap bilik lampu.')],
        [mm('10:22'), T('The ship radios: "We see a lantern wave. We are slowing down."', 'Kapal memanggil radio: "Kami nampak lentera dilambai. Kami memperlahankan."')],
        [mm('11:05'), T('Deadline: the ship must pass the rocks.', 'Had masa: kapal mesti melintasi batu.')]
      ],
      essentialClues: ['tide_table', 'boat_log', 'fat_jetty', 'lamp_switch', 'false_lantern', 'island_map', 'salvage_chest', 'yellow_hat', 'c_rourke_late', 'c_tomas_post'],
      misleading: [
        { item: 'c_tomas_post', why: T('Tomas lied about leaving his post because he was ashamed to leave the lamp unguarded, but he was only phoning his sick daughter.', 'Tomas berbohong tentang meninggalkan tempatnya kerana malu meninggalkan lampu tanpa pengawal, tetapi dia hanya menelefon anak perempuannya yang sakit.') },
        { item: 'c_paddy_silas', why: T('Old Paddy blames the ghost for everything. Ghost stories are not evidence of a crime.', 'Paddy tua menyalahkan hantu untuk segalanya. Cerita hantu bukan bukti jenayah.') },
        { item: 'radio_log', why: T('The radio log shows panic, but not who caused it.', 'Log radio menunjukkan panik, tetapi bukan siapa penyebabnya.') },
        { item: 'chart_card', why: T('The ship chart explains the real light, nothing about a suspect.', 'Kad carta kapal menerangkan cahaya sebenar, bukan suspek.') }
      ]
    },

    people: [
      { id: 'rourke', name: 'Declan Rourke', age: 55, role: T('Salvage boat skipper', 'Kapten bot penyelamat harta karam'), rel: T('Owns the boat Kestrel', 'Pemilik bot Kestrel'), color: '#2f6f9e', suspect: true },
      { id: 'tomas', name: 'Tomás Alvarez', age: 45, role: T('Lighthouse keeper on duty', 'Penjaga rumah api bertugas'), rel: T('Looks after the lamp', 'Menjaga lampu'), color: '#c0562b', suspect: true },
      { id: 'fatima', name: 'Dr. Fatima Haddad', age: 38, role: T('Seabird scientist', 'Saintis burung laut'), rel: T('Has night cameras on the cliffs', 'Ada kamera malam di tebing'), color: '#7a5cc0', suspect: true },
      { id: 'paddy', name: 'Pádraig "Paddy" O\'Brien', age: 78, role: T('Retired keeper', 'Bekas penjaga rumah api'), rel: T('Lives in the keeper\'s cottage', 'Tinggal di kotej penjaga'), color: '#8a9a5b', suspect: true },
      { id: 'aroha', name: 'Aroha Ngata', age: 15, role: T('Keeper\'s apprentice from New Zealand', 'Perantis penjaga dari New Zealand'), rel: T('Helps at the lighthouse', 'Membantu di rumah api'), color: '#33a3a3', suspect: true }
    ],

    items: [
      /* ---------------- LIGHTHOUSE BASE ---------------- */
      { id: 'tide_table', type: 'document', icon: '🌊', title: T('Tide table', 'Jadual pasang surut'), where: T('Lighthouse base wall', 'Dinding dasar rumah api'),
        desc: T(`Tonight's tide heights at the jetty. A boat needs at least 2.0 m of water to dock.`, `Ketinggian air pasang malam ini di jeti. Bot perlukan sekurang-kurangnya 2.0 m air untuk berlabuh.`),
        puzzle: 'pz_tide', inspect: { kind: 'puzzle-art', art: 'tide012' } },
      { id: 'island_map', type: 'document', icon: '🗺️', title: T('Island map', 'Peta pulau'), where: T('Lighthouse base wall', 'Dinding dasar rumah api'),
        desc: T(`A map of Skerry Point with a compass rose, the jetty, the cliff path and the dangerous rocks.`, `Peta Skerry Point dengan ros kompas, jeti, laluan tebing dan batu berbahaya.`),
        puzzle: 'pz_map', inspect: { kind: 'puzzle-art', art: 'plan012' } },
      { id: 'radio_log', type: 'document', icon: '📻', title: T('Radio log', 'Log radio'), where: T('Radio desk, lighthouse base', 'Meja radio, dasar rumah api'),
        desc: T(`Aroha's notes of every call tonight.`, `Nota Aroha tentang setiap panggilan malam ini.`),
        inspect: { kind: 'doc', html: T(paper(`<b>RADIO LOG — Skerry Point</b><br>9:55 pm — Coastguard: "Skerry light OUT. Please check."<br>10:22 pm — Mary Aoife II: "We see a <b>lantern waving</b> at the top of the tower, and a <b>strange flashing light</b> on the north cliff. Something is wrong. We are slowing down and keeping SOUTH."<br>10:25 pm — Captain: "Fuel is low. We will try the passage at 11:05 with or without the light."`), paper(`<b>LOG RADIO — Skerry Point</b><br>9:55 mlm — Pengawal Pantai: "Lampu Skerry PADAM. Sila semak."<br>10:22 mlm — Mary Aoife II: "Kami nampak <b>lentera dilambai</b> di puncak menara, dan <b>cahaya berkelip pelik</b> di tebing utara. Ada yang tidak kena. Kami memperlahankan dan kekal ke SELATAN."<br>10:25 mlm — Kapten: "Bahan api rendah. Kami akan cuba laluan pukul 11:05 dengan atau tanpa lampu."`)) } },
      { id: 'chart_card', type: 'document', icon: '🧭', title: T('Ship chart card', 'Kad carta kapal'), where: T('Pinned beside the radio', 'Dipin di sebelah radio'),
        desc: T(`The official light signature for Skerry Point, copied from the sea chart.`, `Tanda cahaya rasmi untuk Skerry Point, disalin daripada carta laut.`),
        inspect: { kind: 'doc', html: T(paper(`<b>SKERRY POINT LIGHT — chart card</b><br>Signature: <b>Fl(2) W 10 s</b><br>= <b>2 white flashes every 10 seconds</b><br>Height: 42 m · Range: 22 miles<br><small>Any other flash pattern is NOT this light.</small>`), paper(`<b>CAHAYA SKERRY POINT — kad carta</b><br>Tanda: <b>Fl(2) W 10 s</b><br>= <b>2 kilat putih setiap 10 saat</b><br>Tinggi: 42 m · Jarak: 22 batu<br><small>Corak kilat lain BUKAN cahaya ini.</small>`)) } },

      /* ---------------- LAMP ROOM ---------------- */
      { id: 'lamp_switch', type: 'physical', icon: '🔌', title: T('Lamp control box', 'Kotak kawalan lampu'), where: T('Lamp room', 'Bilik lampu'),
        desc: T(`The main switch is OFF. The glass cover is open, a paper seal is torn, and the slot where the big main FUSE should be is EMPTY.`, `Suis utama DIMATIKAN. Penutup kaca terbuka, meterai kertas koyak, dan slot untuk FIUS utama yang besar KOSONG.`),
        inspect: { kind: 'doc', html: T(paper(`🔌 <b>Lamp control box</b><br>🔴 Main switch: OFF<br>📄 Seal: torn by hand<br>⬜ Fuse slot: <b>EMPTY</b><br><small>The storm did not do this: lightning does not tear paper seals or take fuses out.</small>`), paper(`🔌 <b>Kotak kawalan lampu</b><br>🔴 Suis utama: MATI<br>📄 Meterai: dikoyak dengan tangan<br>⬜ Slot fius: <b>KOSONG</b><br><small>Ribut tidak melakukan ini: kilat tidak mengoyak meterai atau mengeluarkan fius.</small>`)) } },
      { id: 'keeper_log', type: 'document', icon: '📓', title: T("Tonight's keeper log", 'Log penjaga malam ini'), where: T('Lamp room desk', 'Meja bilik lampu'),
        desc: T(`Tomás's logbook for tonight. Some words are smudged by rain.`, `Buku log Tomás untuk malam ini. Beberapa perkataan comot kerana hujan.`),
        puzzle: 'pz_log', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<b>KEEPER LOG — Skerry Point</b><br>9:30 pm — Lamp ____ working perfectly.<br>9:40 pm — I ____ the lamp room to phone my daughter.<br>9:55 pm — The light ____ out.<br><small>(rain has smudged some words)</small>`, 'background:#e9e2cc'),
                  paper(`<b>LOG PENJAGA — Skerry Point</b><br>9:30 mlm — Lamp ____ working perfectly.<br>9:40 mlm — I ____ the lamp room to phone my daughter.<br>9:55 mlm — The light ____ out.<br><small>(hujan mengomotkan beberapa perkataan)</small>`, 'background:#e9e2cc')),
          fixedHtml: T(paper(`<b>KEEPER LOG</b><br>9:30 pm — Lamp <u>was</u> working perfectly.<br>9:40 pm — I <u>left</u> the lamp room to phone my daughter.<br>9:55 pm — The light <u>went</u> out. ✔`, 'background:#e9e2cc'),
                       paper(`<b>LOG PENJAGA</b><br>9:30 mlm — Lamp <u>was</u> working perfectly.<br>9:40 mlm — I <u>left</u> the lamp room to phone my daughter.<br>9:55 mlm — The light <u>went</u> out. ✔`, 'background:#e9e2cc')) } },
      { id: 'old_logbook', type: 'document', icon: '📕', title: T('Old logbook, 1953', 'Buku log lama, 1953'), where: T('Lamp room shelf', 'Rak bilik lampu'),
        desc: T(`A cracked leather logbook from 1953. The ink has faded and a few words are gone.`, `Buku log kulit yang retak dari 1953. Dakwat telah pudar dan beberapa perkataan hilang.`),
        puzzle: 'pz_oldlog', inspect: { kind: 'puzzle-doc',
          html: T(paper(`<i>"1953 — Silas Marlowe, Keeper.<br>The lamp ____ in the storm. I climbed the stairs and ____ the lamp by hand. The ship Mary Aoife was ____. If ever the light fails again and a ship is in danger, I will wave my lantern from this window."</i><br><small>(some words have faded)</small>`, 'background:#e4d6b0'),
                  paper(`<i>"1953 — Silas Marlowe, Penjaga.<br>The lamp ____ in the storm. I climbed the stairs and ____ the lamp by hand. The ship Mary Aoife was ____. If ever the light fails again and a ship is in danger, I will wave my lantern from this window."</i><br><small>(beberapa perkataan telah pudar)</small>`, 'background:#e4d6b0')),
          fixedHtml: T(paper(`<i>"1953 — Silas Marlowe, Keeper.<br>The lamp <u>failed</u> in the storm. I climbed the stairs and <u>lit</u> the lamp by hand. The ship Mary Aoife was <u>saved</u>. If ever the light fails again and a ship is in danger, I will wave my lantern from this window."</i> ✔`, 'background:#e4d6b0'),
                       paper(`<i>"1953 — Silas Marlowe, Penjaga.<br>The lamp <u>failed</u> in the storm. I climbed the stairs and <u>lit</u> the lamp by hand. The ship Mary Aoife was <u>saved</u>. If ever the light fails again and a ship is in danger, I will wave my lantern from this window."</i> ✔`, 'background:#e4d6b0')) } },
      { id: 'silas_watch', type: 'physical', icon: '⌚', title: T("An old keeper's pocket watch", 'Jam poket penjaga lama'), where: T('Window sill, lamp room', 'Birai tingkap, bilik lampu'),
        desc: T(`A tarnished brass pocket watch, damp and ice-cold. Engraved on the back: "S.M. — Skerry Keeper — 1953". It has stopped at exactly 10:20.`, `Jam poket tembaga pudar, lembap dan sejuk beku. Terukir di belakang: "S.M. — Penjaga Skerry — 1953". Ia berhenti tepat pukul 10:20.`),
        inspect: { kind: 'model', model: 'watch012', notes: [
          T('The glass is cold as ice but the room is warm. It was not here this afternoon (the sill was clean).', 'Kaca sejuk seperti ais tetapi bilik hangat. Ia tidak ada di sini petang tadi (birai bersih).'),
          T('Stopped at 10:20 — the same minute a lantern waved in the window.', 'Berhenti pada 10:20 — minit yang sama lentera dilambai di tingkap.') ] } },

      /* ---------------- CLIFF PATH ---------------- */
      { id: 'false_lantern', type: 'device', icon: '🏮', title: T('Flashing lantern with timer', 'Lentera berkelip dengan pemasa'), where: T('North cliff edge', 'Tepi tebing utara'),
        desc: T(`A battery lantern with a green lens and a small timer box taped to it. It flashes 3 times, pauses, and repeats.`, `Lentera bateri dengan kanta hijau dan kotak pemasa kecil dilekat padanya. Ia berkelip 3 kali, berhenti, dan berulang.`),
        puzzle: 'pz_flash', inspect: { kind: 'puzzle-art', art: 'flash012' } },
      { id: 'yellow_hat', type: 'physical', icon: '🧢', title: T('Yellow sou\'wester hat', 'Topi kuning pelaut'), where: T('Cliff path, caught on a thorn bush', 'Laluan tebing, tersangkut pada semak duri'),
        desc: T(`A wet yellow oilskin hat. Inside, written in marker: "D.R."`, `Topi minyak kuning yang basah. Di dalam, ditulis dengan penanda: "D.R."`),
        inspect: { kind: 'doc', html: T(paper(`🧢 <b>Yellow sou'wester</b><br>Size: large · Wet with sea spray<br>Inside: <b>"D.R."</b><br><small>It was dropped on the north cliff path, beside the flashing lantern.</small>`), paper(`🧢 <b>Topi kuning pelaut</b><br>Saiz: besar · Basah dengan percikan laut<br>Di dalam: <b>"D.R."</b><br><small>Ia terjatuh di laluan tebing utara, di sebelah lentera berkelip.</small>`)) } },

      /* ---------------- KEEPER'S COTTAGE ---------------- */
      { id: 'tomas_phone', type: 'document', icon: '📱', title: T("Tomás's phone log", 'Log telefon Tomás'), where: T('Cottage table', 'Meja kotej'),
        desc: T(`His phone, left on the table, showing the call history. (There is signal only on the east steps.)`, `Telefonnya, ditinggalkan di atas meja, menunjukkan sejarah panggilan. (Isyarat hanya ada di tangga timur.)`),
        inspect: { kind: 'doc', html: T(paper(`<b>CALL LOG</b><br>📞 "Sofia 💗" — <b>9:42 pm → 10:12 pm</b> (30 min)<br>📍 Signal: east steps only<br><small>Sofia is his daughter. She is ill.</small>`), paper(`<b>LOG PANGGILAN</b><br>📞 "Sofia 💗" — <b>9:42 mlm → 10:12 mlm</b> (30 min)<br>📍 Isyarat: tangga timur sahaja<br><small>Sofia ialah anak perempuannya. Dia sakit.</small>`)) } },

      /* ---------------- BOATHOUSE ---------------- */
      { id: 'boat_log', type: 'document', icon: '⚓', title: T("Kestrel's boat log", 'Log bot Kestrel'), where: T('Boathouse table', 'Meja rumah bot'),
        desc: T(`The skipper's own boat log. Each trip is written with a time.`, `Log bot milik kapten sendiri. Setiap perjalanan ditulis dengan masa.`),
        inspect: { kind: 'doc', html: T(paper(`<b>KESTREL — boat log</b><br>8:50 pm — Left the mainland<br><b>9:35 pm — Docked at Skerry jetty</b><br>10:20 pm — Water too low. Boat resting on the mud.<br><small>Skipper: D. Rourke</small>`), paper(`<b>KESTREL — log bot</b><br>8:50 mlm — Bertolak dari tanah besar<br><b>9:35 mlm — Berlabuh di jeti Skerry</b><br>10:20 mlm — Air terlalu rendah. Bot terletak di atas lumpur.<br><small>Kapten: D. Rourke</small>`)) } },
      { id: 'salvage_chest', type: 'physical', icon: '🧰', title: T("Skipper's sea chest", 'Peti laut kapten'), where: T('Boathouse corner', 'Sudut rumah bot'),
        desc: T(`A heavy brass-bound chest with a 3-digit lock. A note is taped inside the lid.`, `Peti berat bersalut tembaga dengan kunci 3 digit. Satu nota dilekat di dalam penutup.`),
        puzzle: 'pz_chest', inspect: { kind: 'puzzle-art', art: 'chest012' } },
      { id: 'spare_fuse', type: 'physical', icon: '🔋', title: T('Main lamp FUSE', 'FIUS utama lampu'), where: T("Inside Rourke's chest", 'Dalam peti Rourke'),
        desc: T(`A big ceramic fuse labelled: "SKERRY POINT — MAIN LAMP — 63 A". This is exactly what is missing from the lamp control box.`, `Fius seramik besar berlabel: "SKERRY POINT — LAMPU UTAMA — 63 A". Inilah yang hilang daripada kotak kawalan lampu.`),
        inspect: { kind: 'doc', html: T(paper(`🔋 <b>Main lamp fuse</b><br>"SKERRY POINT — MAIN LAMP — 63 A"<br><small>It fits the empty slot in the lamp control box. Put it back and the light shines again!</small>`), paper(`🔋 <b>Fius utama lampu</b><br>"SKERRY POINT — LAMPU UTAMA — 63 A"<br><small>Ia muat dalam slot kosong kotak kawalan lampu. Letakkan semula dan cahaya bersinar lagi!</small>`)) } },
      { id: 'salvage_contract', type: 'document', icon: '📃', title: T('Salvage contract', 'Kontrak penyelamatan'), where: T("Inside Rourke's chest", 'Dalam peti Rourke'),
        desc: T(`A signed contract with a company called Atlantic Salvage.`, `Kontrak bertandatangan dengan syarikat bernama Atlantic Salvage.`),
        inspect: { kind: 'doc', html: T(paper(`<b>ATLANTIC SALVAGE LTD</b><br>Skipper: D. Rourke<br>Pays <b>10%</b> of any wrecked cargo within 2 km of Skerry Point.<br>Mary Aoife II cargo: <b>£400,000</b><br>= fee of <b>£40,000</b><br><small>No wreck = no payment.</small>`), paper(`<b>ATLANTIC SALVAGE LTD</b><br>Kapten: D. Rourke<br>Membayar <b>10%</b> daripada mana-mana muatan karam dalam 2 km dari Skerry Point.<br>Muatan Mary Aoife II: <b>£400,000</b><br>= bayaran <b>£40,000</b><br><small>Tiada kapal karam = tiada bayaran.</small>`)) } },

      /* ---------------- given by Dr. Haddad ---------------- */
      { id: 'fat_jetty', type: 'photo', icon: '📸', photo: true, title: T('Night photo: the jetty', 'Gambar malam: jeti'), art: 'fat_jetty', stampT: mm('9:41'), stampLabel: T('Night camera (correct time)', 'Kamera malam (masa betul)'),
        desc: T(`A night-vision photo of the jetty taken by Dr. Haddad's cliff camera.`, `Gambar penglihatan malam jeti yang diambil kamera tebing Dr. Haddad.`),
        zoomNotice: T(`You zoom in: a boat named KESTREL is tied to the jetty, and a man in a yellow hat carries a small square case up the steps. The picture time is 9:41 pm.`, `Anda zum: sebuah bot bernama KESTREL ditambat di jeti, dan seorang lelaki bertopi kuning membawa kotak persegi kecil menaiki tangga. Masa gambar ialah 9:41 malam.`),
        timeline: T('The Kestrel is docked and a man in a yellow hat lands.', 'Kestrel berlabuh dan seorang lelaki bertopi kuning mendarat.') },
      { id: 'ghost_photo', type: 'photo', icon: '📸', photo: true, title: T('Night photo: the lamp room window', 'Gambar malam: tingkap bilik lampu'), art: 'ghost_photo', stampT: mm('10:20'), stampLabel: T('Night camera (correct time)', 'Kamera malam (masa betul)'),
        desc: T(`A night-vision photo of the top of the tower. A lantern glows in the lamp-room window.`, `Gambar penglihatan malam bahagian atas menara. Lentera bersinar di tingkap bilik lampu.`),
        zoomNotice: T(`You zoom in: inside the window stands a figure in a long coat and an old-fashioned keeper's cap, holding a lantern out like a signal. The lamp-room door was LOCKED. Everyone on the island is somewhere else at 10:20.`, `Anda zum: di dalam tingkap berdiri satu susuk berkot panjang dan topi penjaga lama, memegang lentera seperti isyarat. Pintu bilik lampu DIKUNCI. Semua orang di pulau berada di tempat lain pukul 10:20.`),
        timeline: T('A lantern waves in the locked lamp room. Who?', 'Lentera dilambai di bilik lampu yang berkunci. Siapa?') },

      /* ---------------- inferences ---------------- */
      { id: 'inf_tide', kind: 'inference', type: 'deduction', icon: '💡', title: T('The jetty was DRY after 10:20, so Rourke arrived BEFORE the light failed', 'Jeti KERING selepas 10:20, jadi Rourke tiba SEBELUM lampu padam'),
        desc: T(`A boat needs 2.0 m of water. By 11:00 the tide is only 1.1 m and the Kestrel would sit on mud. So Rourke could not have docked at 11:00 as he claims. His own boat log says he docked at 9:35 — before the lamp went out at 9:55.`, `Bot perlukan 2.0 m air. Menjelang 11:00 air hanya 1.1 m dan Kestrel akan berada di atas lumpur. Jadi Rourke tidak boleh berlabuh pukul 11:00 seperti dakwaannya. Log botnya sendiri menyatakan dia berlabuh pukul 9:35 — sebelum lampu padam pukul 9:55.`) },
      { id: 'inf_flash', kind: 'inference', type: 'deduction', icon: '💡', title: T('The cliff light is a FAKE: 15 flashes a minute, not 12', 'Cahaya tebing PALSU: 15 kilat seminit, bukan 12'),
        desc: T(`The real light flashes 2 every 10 s = 12 a minute. The cliff lantern flashes 3 every 12 s = 15 a minute. The pattern is wrong, so it is not the lighthouse: it is a false light placed to trick ships.`, `Cahaya sebenar berkelip 2 setiap 10 s = 12 seminit. Lentera tebing berkelip 3 setiap 12 s = 15 seminit. Coraknya salah, jadi ia bukan rumah api: ia cahaya palsu untuk memperdaya kapal.`) },
      { id: 'inf_log', kind: 'inference', type: 'deduction', icon: '💡', title: T('Tomás left the lamp room at 9:40 to phone his daughter', 'Tomás meninggalkan bilik lampu pukul 9:40 untuk menelefon anaknya'),
        desc: T(`The restored log and the phone record agree: Tomás left at 9:40 and spoke to Sofia from 9:42 to 10:12 on the east steps. He was far from the lamp at 9:55 — unlucky, not guilty.`, `Log yang dipulihkan dan rekod telefon sependapat: Tomás keluar pukul 9:40 dan bercakap dengan Sofia dari 9:42 hingga 10:12 di tangga timur. Dia jauh dari lampu pukul 9:55 — malang, bukan bersalah.`) },
      { id: 'inf_map', kind: 'inference', type: 'deduction', icon: '💡', title: T('A light on the NORTH cliff leads ships onto the Skerry Rocks', 'Cahaya di tebing UTARA membawa kapal ke Batu Skerry'),
        desc: T(`The safe channel is to the SOUTH. The Skerry Rocks lie to the NORTH-WEST, under the north cliff. A ship that steers for a light on the north cliff sails straight into the rocks.`, `Saluran selamat di SELATAN. Batu Skerry di BARAT LAUT, di bawah tebing utara. Kapal yang menuju cahaya di tebing utara akan terus berlanggar dengan batu.`) },
      { id: 'inf_chest', kind: 'inference', type: 'deduction', icon: '💡', title: T('MOTIVE and MEANS: the fuse and the salvage contract were in Rourke\'s chest', 'MOTIF dan CARA: fius dan kontrak penyelamatan ada dalam peti Rourke'),
        desc: T(`The missing lamp fuse and a contract that pays Rourke £40,000 only if the ship WRECKS were locked in his own chest.`, `Fius lampu yang hilang dan kontrak yang membayar Rourke £40,000 hanya jika kapal KARAM dikunci dalam petinya sendiri.`) },
      { id: 'inf_silas', kind: 'inference', type: 'deduction', icon: '💡', title: T('Silas Marlowe promised to wave his lantern when a ship is in danger', 'Silas Marlowe berjanji melambai lenteranya apabila kapal dalam bahaya'),
        desc: T(`The 1953 log: "If ever the light fails again and a ship is in danger, I will wave my lantern from this window." At 10:20 tonight a lantern WAVED from that window — and the radio log says the ship slowed down because of it. Rourke is a human villain. But the waving lantern has no human owner.`, `Log 1953: "If ever the light fails again and a ship is in danger, I will wave my lantern from this window." Pukul 10:20 malam ini lentera DILAMBAI dari tingkap itu — dan log radio berkata kapal memperlahankan kerananya. Rourke penjahat manusia. Tetapi lentera yang dilambai tiada pemilik manusia.`) },

      /* ---------------- witness claims ---------------- */
      { id: 'c_rourke_late', kind: 'claim', person: 'rourke', t: mm('11:00'), type: 'statement', icon: '💬', title: T('Rourke: "I only arrived at 11:00, after the light failed."', 'Rourke: "Saya hanya tiba pukul 11:00, selepas lampu padam."'), desc: T('Rourke says he docked at 11:00 pm.', 'Rourke berkata dia berlabuh pukul 11:00 malam.') },
      { id: 'c_rourke_cliff', kind: 'claim', person: 'rourke', t: 0, type: 'statement', icon: '💬', title: T('Rourke: "I was never on the north cliff."', 'Rourke: "Saya tidak pernah di tebing utara."'), desc: T('He says he never walked the cliff path.', 'Dia berkata dia tidak pernah berjalan di laluan tebing.') },
      { id: 'c_rourke_salvage', kind: 'claim', person: 'rourke', t: 0, type: 'statement', icon: '💬', title: T('Rourke: "I am a fishing skipper. I want NO wrecks!"', 'Rourke: "Saya kapten nelayan. Saya TIDAK mahu kapal karam!"'), desc: T('He says he has nothing to gain from a wreck.', 'Dia berkata dia tidak mendapat apa-apa daripada kapal karam.') },
      { id: 'c_tomas_post', kind: 'claim', person: 'tomas', t: 0, type: 'statement', icon: '💬', title: T('Tomás: "I never left the lamp room."', 'Tomás: "Saya tidak pernah meninggalkan bilik lampu."'), desc: T('Tomás says he stayed at his post all evening.', 'Tomás berkata dia kekal di tempatnya sepanjang malam.') },
      { id: 'c_tomas_phone', kind: 'claim', person: 'tomas', t: mm('9:42'), type: 'statement', icon: '💬', title: T('Tomás: "I phoned my sick daughter on the east steps from 9:42."', 'Tomás: "Saya menelefon anak perempuan saya yang sakit di tangga timur dari 9:42."'), desc: T('He admits he left the lamp unguarded.', 'Dia mengaku dia meninggalkan lampu tanpa pengawal.') },
      { id: 'c_fatima_boat', kind: 'claim', person: 'fatima', t: mm('9:41'), type: 'statement', icon: '💬', title: T('Fatima: "At 9:41 my camera saw the Kestrel docked."', 'Fatima: "Pukul 9:41 kamera saya nampak Kestrel berlabuh."'), desc: T('Her camera photographs the jetty every few minutes.', 'Kameranya merakam jeti setiap beberapa minit.') },
      { id: 'c_fatima_lantern', kind: 'claim', person: 'fatima', t: mm('10:20'), type: 'statement', icon: '💬', title: T('Fatima: "At 10:20 a lantern waved in the lamp room. But nobody was up there!"', 'Fatima: "Pukul 10:20 lentera dilambai di bilik lampu. Tetapi tiada siapa di atas!"'), desc: T('She is a scientist: she trusts her photo.', 'Dia saintis: dia percaya gambarnya.') },
      { id: 'c_paddy_hat', kind: 'claim', person: 'paddy', t: mm('9:50'), type: 'statement', icon: '💬', title: T('Paddy: "At 9:50 a man in a YELLOW hat passed my window with a lantern."', 'Paddy: "Pukul 9:50 seorang lelaki bertopi KUNING melintasi tingkap saya dengan lentera."'), desc: T('Old Paddy has sharp eyes.', 'Paddy tua bermata tajam.') },
      { id: 'c_paddy_silas', kind: 'claim', person: 'paddy', t: 0, type: 'statement', icon: '💬', title: T('Paddy: "Silas\'s ghost warns ships. It is HIM on the cliff!"', 'Paddy: "Hantu Silas memberi amaran kepada kapal. Itu DIA di tebing!"'), desc: T('Paddy blames the ghost for the flashing light.', 'Paddy menyalahkan hantu untuk cahaya berkelip.') },
      { id: 'c_aroha_lamp', kind: 'claim', person: 'aroha', t: mm('9:55'), type: 'statement', icon: '💬', title: T('Aroha: "The lamp died at 9:55. The coastguard called straight away."', 'Aroha: "Lampu padam pukul 9:55. Pengawal pantai terus menelefon."'), desc: T('Aroha was at the radio desk.', 'Aroha di meja radio.') }
    ],

    /* ------------------------------------------------------------------ CONTRADICTION / SUPPORT CHECKER */
    pairs: [
      { a: 'c_rourke_late', b: 'tide_table', type: 'contradiction', person: 'rourke', requires: ['tide_solved'],
        text: T('Rourke says he docked at 11:00. At 11:00 the tide is 1.1 m — too low for a boat that needs 2.0 m.', 'Rourke berkata dia berlabuh pukul 11:00. Pukul 11:00 air hanya 1.1 m — terlalu rendah untuk bot yang perlukan 2.0 m.'),
        explain: T('He could not have docked at 11:00. He must have landed earlier.', 'Dia tidak boleh berlabuh pukul 11:00. Dia mesti mendarat lebih awal.') },
      { a: 'c_rourke_late', b: 'boat_log', type: 'contradiction', person: 'rourke',
        text: T('His own boat log says: "9:35 pm — Docked at Skerry jetty." That is BEFORE the lamp went out.', 'Log botnya sendiri berkata: "9:35 mlm — Berlabuh di jeti Skerry." Itu SEBELUM lampu padam.'),
        explain: T('Rourke was on the island when the light was sabotaged.', 'Rourke berada di pulau apabila lampu disabotaj.') },
      { a: 'c_rourke_late', b: 'fat_jetty', type: 'contradiction', person: 'rourke',
        text: T('Dr. Haddad\'s 9:41 photo shows the Kestrel already docked and a man in a yellow hat landing.', 'Gambar 9:41 Dr. Haddad menunjukkan Kestrel sudah berlabuh dan lelaki bertopi kuning mendarat.'),
        explain: T('A time-stamped photo beats a claim.', 'Gambar bercap masa mengalahkan dakwaan.') },
      { a: 'c_rourke_cliff', b: 'yellow_hat', type: 'contradiction', person: 'rourke',
        text: T('Rourke says he was never on the north cliff. His hat "D.R." lay beside the flashing lantern.', 'Rourke berkata dia tidak pernah di tebing utara. Topinya "D.R." terletak di sebelah lentera berkelip.'),
        explain: T('He was on the cliff, next to the fake light.', 'Dia berada di tebing, di sebelah cahaya palsu.') },
      { a: 'c_rourke_salvage', b: 'salvage_contract', type: 'contradiction', person: 'rourke', requires: ['chest_open'],
        text: T('Rourke says he wants no wrecks. His contract pays him £40,000 ONLY if the ship wrecks.', 'Rourke berkata dia tidak mahu kapal karam. Kontraknya membayar £40,000 HANYA jika kapal karam.'),
        explain: T('That is a very strong motive.', 'Itu motif yang sangat kuat.') },
      { a: 'c_tomas_post', b: 'tomas_phone', type: 'contradiction', person: 'tomas',
        text: T('Tomás says he never left the lamp room. His phone shows a 30-minute call from the east steps.', 'Tomás berkata dia tidak pernah meninggalkan bilik lampu. Telefonnya menunjukkan panggilan 30 minit dari tangga timur.'),
        explain: T('He lied out of shame, to hide that he left the lamp unguarded. A human mistake, not a crime.', 'Dia berbohong kerana malu, untuk menyembunyikan dia meninggalkan lampu tanpa pengawal. Kesilapan manusia, bukan jenayah.') },
      { a: 'c_tomas_phone', b: 'tomas_phone', type: 'support',  person: 'tomas',
        text: T('The call log matches what Tomás says: 9:42 to 10:12 with his daughter.', 'Log panggilan sepadan dengan kata Tomás: 9:42 hingga 10:12 dengan anaknya.') },
      { a: 'c_fatima_boat', b: 'fat_jetty', type: 'support', person: 'fatima',
        text: T('The photo shows the Kestrel at 9:41, exactly as Dr. Haddad says.', 'Gambar menunjukkan Kestrel pukul 9:41, tepat seperti kata Dr. Haddad.') },
      { a: 'c_fatima_lantern', b: 'ghost_photo', type: 'support', person: 'fatima',
        text: T('Her 10:20 photo shows the lantern and a figure in the lamp-room window.', 'Gambar 10:20 beliau menunjukkan lentera dan susuk di tingkap bilik lampu.') },
      { a: 'c_fatima_lantern', b: 'silas_watch', type: 'support', person: 'fatima', requires: ['old_log_read'],
        text: T('The old keeper\'s watch stopped at 10:20 — the same minute as the lantern.', 'Jam penjaga lama berhenti pukul 10:20 — minit yang sama dengan lentera.') },
      { a: 'c_paddy_hat', b: 'yellow_hat', type: 'support', person: 'paddy',
        text: T('A yellow hat "D.R." on the cliff matches the man Paddy saw.', 'Topi kuning "D.R." di tebing sepadan dengan lelaki yang Paddy nampak.') },
      { a: 'c_paddy_silas', b: 'old_logbook', type: 'support', person: 'paddy', requires: ['old_log_read'],
        text: T('The old log says Silas promised to warn ships — Paddy knew the true story, but not the flashing cliff light: that was no ghost.', 'Log lama berkata Silas berjanji memberi amaran kepada kapal — Paddy tahu kisah benar, tetapi bukan cahaya tebing yang berkelip: itu bukan hantu.') },
      { a: 'c_aroha_lamp', b: 'radio_log', type: 'support', person: 'aroha',
        text: T('The radio log shows the coastguard calling at 9:55 about the light.', 'Log radio menunjukkan pengawal pantai menelefon pukul 9:55 tentang cahaya.') },
      { a: 'c_paddy_silas', b: 'false_lantern', type: 'contradiction', person: 'paddy', requires: ['flash_solved'],
        text: T('Paddy says the cliff light is Silas. But it flashes 15 times a minute with a timer and a battery — it is a machine, not a ghost.', 'Paddy berkata cahaya tebing ialah Silas. Tetapi ia berkelip 15 kali seminit dengan pemasa dan bateri — ia mesin, bukan hantu.'),
        explain: T('Paddy is honest but wrong about THIS light.', 'Paddy jujur tetapi salah tentang cahaya INI.') }
    ],

    /* ------------------------------------------------------------------ PUZZLES */
    puzzles: {
      pz_tide: { subject: 'geography', title: T('Read the tide table', 'Baca jadual pasang surut'), grants: { flags: ['tide_solved'], items: ['inf_tide'] }, tokens: 0,
        intro: T('A boat needs at least 2.0 m of water at the jetty to dock. Read the heights in the table.', 'Bot perlukan sekurang-kurangnya 2.0 m air di jeti untuk berlabuh. Baca ketinggian dalam jadual.'),
        art: 'tide012',
        steps: [
          { type: 'choice', q: T('At 11:00 pm the water is 1.1 m deep. Can the Kestrel dock?', 'Pukul 11:00 malam air sedalam 1.1 m. Bolehkah Kestrel berlabuh?'),
            options: [T('Yes', 'Ya'), T('No, it is below 2.0 m', 'Tidak, ia di bawah 2.0 m')], answer: 1,
            hints: [T('Compare 1.1 with 2.0. Which is bigger?', 'Bandingkan 1.1 dengan 2.0. Yang mana lebih besar?')] },
          { type: 'choice', q: T('What is the LAST time in the table when the water is still at least 2.0 m?', 'Pukul berapa TERAKHIR dalam jadual air masih sekurang-kurangnya 2.0 m?'),
            options: ['9:00 pm', '10:00 pm', '10:20 pm', '11:00 pm'], answer: '10:20 pm',
            hints: [T('Look down the right column. 2.0 m is exactly enough.', 'Lihat ke bawah lajur kanan. 2.0 m tepat mencukupi.')] },
          { type: 'choice', q: T('Rourke says he docked at 11:00 pm. What does the table prove?', 'Rourke berkata dia berlabuh pukul 11:00 malam. Apa yang dibuktikan jadual?'),
            options: [T('He is telling the truth.', 'Dia berkata benar.'), T('He could not have docked then: he must have arrived earlier.', 'Dia tidak boleh berlabuh waktu itu: dia mesti tiba lebih awal.'), T('The tide table is wrong.', 'Jadual pasang surut salah.')], answer: 1,
            hints: [T('After 10:20 the jetty is dry.', 'Selepas 10:20 jeti kering.')] }
        ],
        after: T('After 10:20 the jetty is dry. Rourke must have landed BEFORE the lamp failed, not at 11:00!', 'Selepas 10:20 jeti kering. Rourke mesti mendarat SEBELUM lampu padam, bukan pukul 11:00!') },

      pz_flash: { subject: 'math', title: T('Which light is real?', 'Cahaya mana yang sebenar?'), grants: { flags: ['flash_solved'], items: ['inf_flash'] }, tokens: 0,
        intro: T('The chart card says the real light is 2 flashes every 10 seconds. Count the flashes in ONE MINUTE (60 seconds) for each light.', 'Kad carta berkata cahaya sebenar ialah 2 kilat setiap 10 saat. Kira kilat dalam SATU MINIT (60 saat) untuk setiap cahaya.'),
        art: 'flash012',
        steps: [
          { type: 'number', q: T('REAL light: 2 flashes every 10 seconds. How many flashes in 60 seconds?', 'Cahaya SEBENAR: 2 kilat setiap 10 saat. Berapa kilat dalam 60 saat?'),
            answer: 12, options: [6, 10, 12, 15], unit: T('flashes', 'kilat'),
            hints: [T('60 ÷ 10 = 6 groups.', '60 ÷ 10 = 6 kumpulan.'), T('6 groups × 2 flashes = ?', '6 kumpulan × 2 kilat = ?')] },
          { type: 'number', q: T('CLIFF lantern: 3 flashes every 12 seconds. How many flashes in 60 seconds?', 'Lentera TEBING: 3 kilat setiap 12 saat. Berapa kilat dalam 60 saat?'),
            answer: 15, options: [9, 12, 15, 18], unit: T('flashes', 'kilat'),
            hints: [T('60 ÷ 12 = 5 groups.', '60 ÷ 12 = 5 kumpulan.'), T('5 groups × 3 flashes = ?', '5 kumpulan × 3 kilat = ?')] },
          { type: 'choice', q: T('The chart says the real lighthouse is 12 flashes a minute. What is the cliff lantern?', 'Carta berkata rumah api sebenar 12 kilat seminit. Apakah lentera tebing?'),
            options: [T('The real lighthouse', 'Rumah api sebenar'), T('A FAKE light with a different pattern', 'Cahaya PALSU dengan corak berbeza'), T('The same light seen twice', 'Cahaya yang sama dilihat dua kali')], answer: 1,
            hints: [T('12 is not 15. A different pattern means a different light.', '12 bukan 15. Corak berbeza bermaksud cahaya berbeza.')] }
        ],
        after: T('12 ≠ 15. The cliff lantern is a FAKE light made to trick ships!', '12 ≠ 15. Lentera tebing ialah cahaya PALSU untuk memperdaya kapal!') },

      pz_map: { subject: 'geography', title: T('Read the island map', 'Baca peta pulau'), grants: { flags: ['map_solved'], items: ['inf_map'] }, tokens: 0,
        intro: T('Use the compass (N, S, E, W) on the map.', 'Guna kompas (U, S, T, B) pada peta.'),
        art: 'plan012',
        steps: [
          { type: 'choice', q: T('In which direction are the Skerry Rocks from the lighthouse?', 'Batu Skerry ke arah mana dari rumah api?'),
            options: [T('South-east', 'Tenggara'), T('North-west', 'Barat Laut'), T('South', 'Selatan'), T('East', 'Timur')], answer: 1,
            hints: [T('Find the red X marks. N is up and W is left.', 'Cari tanda X merah. U di atas dan B di kiri.')] },
          { type: 'choice', q: T('Which side of the island is the SAFE channel?', 'Sebelah mana pulau saluran SELAMAT?'),
            options: [T('North', 'Utara'), T('South', 'Selatan'), T('West', 'Barat')], answer: 1,
            hints: [T('Follow the dashed arrow marked SAFE CHANNEL.', 'Ikut anak panah putus-putus bertanda SALURAN SELAMAT.')] },
          { type: 'choice', q: T('A ship sees a light on the NORTH cliff and steers toward it. What is in its way?', 'Kapal nampak cahaya di tebing UTARA dan menuju ke arahnya. Apa yang menghalang?'),
            options: [T('The safe channel', 'Saluran selamat'), T('The Skerry Rocks', 'Batu Skerry'), T('The jetty', 'Jeti')], answer: 1,
            hints: [T('The rocks lie under the north cliff.', 'Batu terletak di bawah tebing utara.')] }
        ],
        after: T('A light on the north cliff leads ships straight onto the Skerry Rocks. The false light is a trap!', 'Cahaya di tebing utara membawa kapal terus ke Batu Skerry. Cahaya palsu ialah perangkap!') },

      pz_log: { subject: 'english', title: T('Restore the keeper log', 'Pulihkan log penjaga'), grants: { flags: ['log_restored'], items: ['inf_log'] }, tokens: 0,
        intro: T('Choose the correct PAST TENSE word for each gap.', 'Pilih perkataan KALA LAMPAU yang betul untuk setiap ruang.'),
        steps: [
          { type: 'cloze', q: T('Fix the log:', 'Betulkan log:'),
            parts: ['9:30 pm — Lamp ', { blank: ['is', 'was', 'were'], answer: 'was' }, ' working perfectly. 9:40 pm — I ', { blank: ['leave', 'left', 'leaved'], answer: 'left' }, ' the lamp room to phone my daughter. 9:55 pm — The light ', { blank: ['go', 'goed', 'went'], answer: 'went' }, ' out.'],
            hints: [T('"Lamp ___" — one lamp in the past: was.', '"Lamp ___" — satu lampu pada masa lampau: was.'), T('Leave → left. Go → went.', 'Leave → left. Go → went.')] }
        ],
        after: T('Tomás LEFT the lamp room at 9:40 — to phone his daughter. His first story was not true, but his reason was human.', 'Tomás KELUAR dari bilik lampu pukul 9:40 — untuk menelefon anaknya. Cerita pertamanya tidak benar, tetapi sebabnya manusiawi.') },

      pz_chest: { subject: 'thinking', title: T("Crack Rourke's sea chest", 'Pecahkan peti laut Rourke'), grants: { flags: ['chest_open'], items: ['spare_fuse', 'salvage_contract', 'inf_chest'] }, tokens: 0,
        intro: T('The note inside the lid says: "Skipper\'s code: finish each pattern."', 'Nota di dalam penutup berkata: "Kod kapten: lengkapkan setiap corak."'),
        art: 'chest012',
        steps: [
          { type: 'code', q: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
            patterns: ['1, 1, 2, 3, ?', '10, 8, 6, ?', '1, 2, 4, ?'], answer: '548',
            hints: [T('Pattern 1: add the last two numbers (1+1=2, 1+2=3, 2+3=?).', 'Corak 1: tambah dua nombor terakhir (1+1=2, 1+2=3, 2+3=?).'), T('Pattern 2 goes DOWN by 2. Pattern 3 DOUBLES.', 'Corak 2 berkurang 2. Corak 3 DIDARAB DUA.'), T('The code is: 5, 4, 8.', 'Kodnya ialah: 5, 4, 8.')] }
        ],
        after: T('Click! Inside: the missing MAIN FUSE and a salvage contract!', 'Klik! Di dalam: FIUS UTAMA yang hilang dan kontrak penyelamatan!') },

      pz_oldlog: { subject: 'english', title: T('Read the old logbook', 'Baca buku log lama'), grants: { flags: ['old_log_read'], items: ['inf_silas'] }, tokens: 1,
        intro: T('Choose the correct PAST TENSE word for each gap in Silas\'s 1953 entry.', 'Pilih perkataan KALA LAMPAU yang betul untuk setiap ruang dalam catatan Silas 1953.'),
        steps: [
          { type: 'cloze', q: T('Restore the entry:', 'Pulihkan catatan:'),
            parts: ['The lamp ', { blank: ['fail', 'failed', 'failing'], answer: 'failed' }, ' in the storm. I climbed the stairs and ', { blank: ['lit', 'light', 'lighting'], answer: 'lit' }, ' the lamp by hand. The ship Mary Aoife was ', { blank: ['save', 'saved', 'saving'], answer: 'saved' }, '.'],
            hints: [T('Past tense: fail → failed. Light → lit.', 'Kala lampau: fail → failed. Light → lit.'), T('"was ___" needs the past participle: saved.', '"was ___" memerlukan past participle: saved.')] }
        ],
        after: T('Silas wrote: "If ever the light fails again and a ship is in danger, I will wave my lantern from this window." You earn 1 hint token! Look at the window sill...', 'Silas menulis: "If ever the light fails again and a ship is in danger, I will wave my lantern from this window." Anda dapat 1 token petunjuk! Lihat birai tingkap...') }
    },

    /* ------------------------------------------------------------------ DEDUCTION QUESTIONS */
    questions: [
      { id: 'q_how', title: T('1. How did the lighthouse go dark?', '1. Bagaimana rumah api menjadi gelap?'),
        options: [
          { id: 'storm', text: T('Lightning struck the lamp.', 'Kilat menyambar lampu.') },
          { id: 'battery', text: T('The battery simply ran out.', 'Bateri habis dengan sendirinya.') },
          { id: 'fuse_removed', text: T('Someone switched it off and removed the main fuse.', 'Seseorang mematikannya dan mengeluarkan fius utama.'), correct: true },
          { id: 'ghost', text: T('The ghost of Silas put it out.', 'Hantu Silas memadamkannya.') }
        ],
        needs: [['lamp_switch'], ['spare_fuse', 'inf_chest']], needsFlags: ['chest_open'],
        hints: [T('Look at the lamp control box: is the seal torn? Is the fuse slot empty? Where is the fuse?', 'Lihat kotak kawalan lampu: adakah meterai koyak? Adakah slot fius kosong? Di mana fius?')] },
      { id: 'q_false', title: T('2. What is the flashing light on the north cliff?', '2. Apakah cahaya berkelip di tebing utara?'),
        options: [
          { id: 'ghost', text: T("Silas's ghost.", 'Hantu Silas.') },
          { id: 'spare', text: T('The lighthouse spare light.', 'Cahaya simpanan rumah api.') },
          { id: 'fake', text: T('A FAKE light placed to trick ships onto the rocks.', 'Cahaya PALSU diletakkan untuk memperdaya kapal ke batu.'), correct: true },
          { id: 'boat', text: T('A fishing boat.', 'Bot nelayan.') }
        ],
        needs: [['false_lantern', 'inf_flash'], ['island_map', 'inf_map']], needsFlags: ['flash_solved', 'map_solved'],
        hints: [T('Count its flashes per minute and compare with the chart card.', 'Kira kilatnya seminit dan bandingkan dengan kad carta.'), T('Where are the Skerry Rocks? Which side is the safe channel?', 'Di mana Batu Skerry? Sebelah mana saluran selamat?')] },
      { id: 'q_when', title: T('3. When did the saboteur reach the island?', '3. Bila penyabotaj tiba di pulau?'),
        options: [
          { id: 'after', text: T('After 11:00', 'Selepas 11:00') },
          { id: 'before', text: T('Around 9:35 — before the lamp went out', 'Sekitar 9:35 — sebelum lampu padam'), correct: true },
          { id: 'mid', text: T('Around 10:30', 'Sekitar 10:30') },
          { id: 'never', text: T('He never came to the island', 'Dia tidak pernah datang ke pulau') }
        ],
        needs: [['boat_log', 'fat_jetty'], ['tide_table', 'inf_tide']], needsFlags: ['tide_solved'],
        hints: [T('Check the boat log, the 9:41 photo and what the tide table allows.', 'Semak log bot, gambar 9:41 dan apa yang dibenarkan jadual pasang surut.')] },
      { id: 'q_who', title: T('4. Who put out the light and set the false lantern?', '4. Siapa memadamkan lampu dan meletakkan lentera palsu?'),
        options: [
          { id: 'rourke', text: T('Captain Rourke', 'Kapten Rourke'), correct: true }, { id: 'tomas', text: T('Tomás, the keeper', 'Tomás, penjaga') },
          { id: 'fatima', text: T('Dr. Haddad', 'Dr. Haddad') }, { id: 'paddy', text: T('Old Paddy', 'Paddy tua') }, { id: 'aroha', text: T('Aroha', 'Aroha') }
        ],
        needs: [['yellow_hat'], ['salvage_contract'], ['c_rourke_late', 'boat_log']], needsFlags: ['chest_open'],
        hints: [T('Whose hat was on the cliff? Whose chest hid the fuse?', 'Topi siapa di tebing? Peti siapa menyorok fius?')] },
      { id: 'q_why', title: T('5. WHY did he do it?', '5. KENAPA dia melakukannya?'),
        options: [
          { id: 'scare', text: T('To scare the keeper.', 'Untuk menakutkan penjaga.') },
          { id: 'salvage', text: T('So the ship would wreck and he could claim £40,000 salvage.', 'Supaya kapal karam dan dia boleh menuntut £40,000 penyelamatan.'), correct: true },
          { id: 'steal', text: T('To steal the lamp.', 'Untuk mencuri lampu.') },
          { id: 'prank', text: T('It was a prank.', 'Ia gurauan.') }
        ],
        needs: [['salvage_contract', 'inf_chest'], ['false_lantern', 'inf_map']], needsFlags: ['chest_open', 'map_solved'],
        hints: [T('Read the contract: when does Rourke get paid?', 'Baca kontrak: bila Rourke dibayar?')] }
    ],

    timeUp: { title: T('The ship is coming!', 'Kapal sedang datang!'), text: T('The Mary Aoife II turns toward the rocks. There is no more time. Name the culprit NOW!', 'Mary Aoife II membelok ke arah batu. Tiada masa lagi. Namakan pelaku SEKARANG!') },
    conclusion: {
      who: { correct: 'rourke' },
      what: { questionId: 'q_how' },
      when: { questionId: 'q_when' },
      whereQ: T('WHERE is the missing fuse now?', 'DI MANA fius yang hilang sekarang?'),
      where: [
        { id: 'chest', text: T("In Rourke's locked sea chest in the boathouse", 'Dalam peti laut Rourke yang berkunci di rumah bot'), correct: true },
        { id: 'sea', text: T('Thrown into the sea', 'Dibuang ke laut') }, { id: 'cottage', text: T("In the keeper's cottage", 'Dalam kotej penjaga') },
        { id: 'coat', text: T("In Tomás's coat", 'Dalam kot Tomás') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }
      ],
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_dark', label: T('How the light went out', 'Bagaimana lampu padam'), items: ['lamp_switch', 'spare_fuse', 'inf_chest'] },
        { id: 'g_false', label: T('The fake light', 'Cahaya palsu'), items: ['false_lantern', 'inf_flash', 'island_map', 'inf_map'] },
        { id: 'g_time', label: T('When he landed (tide + log + photo)', 'Bila dia mendarat (pasang surut + log + gambar)'), items: ['tide_table', 'inf_tide', 'boat_log', 'fat_jetty'] },
        { id: 'g_hat', label: T('Rourke on the cliff', 'Rourke di tebing'), items: ['yellow_hat', 'c_paddy_hat'] },
        { id: 'g_motive', label: T('The motive', 'Motif'), items: ['salvage_contract', 'inf_chest'] },
        { id: 'g_lie', label: T("Rourke's lie", 'Pembohongan Rourke'), items: ['c_rourke_late', 'c_rourke_cliff', 'c_rourke_salvage'] }
      ],
      strongCoverage: 4,
      secondary: ['tomas_phone', 'radio_log', 'chart_card', 'keeper_log', 'inf_log'],
      secondaryNeeded: 2,
      lieFlags: ['c_rourke_late', 'c_rourke_cliff', 'c_tomas_post']
    },

    endings: [
      { id: 'secret', stars: 4, title: T('The Keeper Who Never Left', 'Penjaga Yang Tidak Pernah Pergi'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.has.ghost_photo && r.has.silas_watch && r.flags.old_log_read,
        text: T(
          `You solve the case — and you also followed the clue nobody could explain. Rourke is arrested at the jetty. You put the main fuse back, and the great lamp blazes: two white flashes every ten seconds. The Mary Aoife II slips safely through the south channel with all fourteen people. Dr. Haddad shows the 10:20 photo again: a lantern in a window that no living person could have reached. Old Paddy takes off his cap. "Silas kept his promise," he whispers. On the sill the pocket watch is ticking again... and the lantern in the lamp room window gives one slow, grateful wave before it fades. Case closed — and a ghost helped!`,
          `Anda menyelesaikan kes ini — dan anda juga mengikuti petunjuk yang tiada siapa dapat jelaskan. Rourke ditangkap di jeti. Anda memasang semula fius utama, dan lampu besar menyala terang: dua kilat putih setiap sepuluh saat. Mary Aoife II meluncur selamat melalui saluran selatan dengan kesemua empat belas orang. Dr. Haddad menunjukkan semula gambar 10:20: lentera di tingkap yang tiada manusia hidup dapat mencapainya. Paddy tua menanggalkan topinya. "Silas menepati janjinya," bisiknya. Di atas birai jam poket itu berdetik semula... dan lentera di tingkap bilik lampu memberi satu lambaian perlahan penuh terima kasih sebelum lenyap. Kes selesai — dan seorang hantu telah membantu!`) },
      { id: 'perfect', stars: 3, title: T('Case Closed!', 'Kes Selesai!'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec >= 2,
        text: T(
          `Excellent work! You proved Captain Rourke switched off the lamp, hid the fuse and set a fake light to wreck the ship for money. Rourke is arrested. You put the fuse back, the great lamp blazes and the Mary Aoife II slips past the rocks. Tomás is forgiven for leaving his post, Old Paddy is thanked for his sharp eyes, and Dr. Haddad's photos are kept as proof. One thing nobody could explain was the lantern in the lamp room window at 10:20... you decide to ask Old Paddy about it tomorrow.`,
          `Kerja yang hebat! Anda membuktikan Kapten Rourke memadamkan lampu, menyorokkan fius dan meletakkan cahaya palsu untuk karamkan kapal demi wang. Rourke ditangkap. Anda memasang semula fius, lampu besar menyala dan Mary Aoife II meluncur melepasi batu. Tomás dimaafkan kerana meninggalkan tempatnya, Paddy tua diucap terima kasih kerana mata tajamnya, dan gambar Dr. Haddad disimpan sebagai bukti. Satu perkara tiada siapa dapat jelaskan: lentera di tingkap bilik lampu pukul 10:20... anda memutuskan bertanya Paddy tua tentangnya esok.`) },
      { id: 'missed', stars: 2, title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        when: (r) => r.ok.who && r.ok.what && r.ok.when && r.cov >= 4 && r.sec < 2,
        text: T(
          `Right answer, strong proof! But you missed side clues: the phone log, the radio log, the chart card or the keeper log. Because of that, Tomás is still blamed for leaving his post and nobody understands what the ship saw at 10:22. Next time, look in every room.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: log telefon, log radio, kad carta atau log penjaga. Kerana itu, Tomás masih dipersalahkan kerana meninggalkan tempatnya dan tiada siapa faham apa yang kapal nampak pukul 10:22. Lain kali, periksa setiap bilik.`) },
      { id: 'weak', stars: 1, title: T('Right person, weak proof', 'Orang betul, bukti lemah'),
        when: (r) => r.ok.who,
        text: T(`You named the right person — but your proof was not strong enough. Go back, read the tide table, count the flashes, and open the sea chest. Hurry: the ship is coming!`,
                `Anda menyebut orang yang betul — tetapi bukti anda tidak cukup kukuh. Kembali, baca jadual pasang surut, kira kilat, dan buka peti laut. Cepat: kapal sedang datang!`) },
      { id: 'wrong', stars: 0, title: T('The wrong answer!', 'Jawapan yang salah!'),
        when: () => true,
        text: T(`Oh no — that was not right, and the clock is ticking for the ship. Check whose boat log says 9:35, whose hat lay on the cliff, and whose chest hid the fuse.`,
                `Alamak — itu tidak betul, dan masa bagi kapal semakin suntuk. Semak log bot siapa menyatakan 9:35, topi siapa terletak di tebing, dan peti siapa menyorok fius.`) }
    ],
    wrongWho: {
      tomas: T('Tomás lied about leaving his post, but he was on the east steps phoning his sick daughter from 9:42 to 10:12 (the phone log proves it). He wants the lamp lit more than anyone.', 'Tomás berbohong tentang meninggalkan tempatnya, tetapi dia di tangga timur menelefon anaknya yang sakit dari 9:42 hingga 10:12 (log telefon membuktikannya). Dia mahu lampu menyala lebih daripada sesiapa.'),
      fatima: T('Dr. Haddad is the scientist whose cameras caught the Kestrel and the lantern. A saboteur would not photograph the crime.', 'Dr. Haddad ialah saintis yang kameranya merakam Kestrel dan lentera. Penyabotaj tidak akan merakam jenayah.'),
      paddy: T('Old Paddy believes in ghosts and talks too much, but he is 78, he lives in the cottage, and he saw a man in a yellow hat — not himself.', 'Paddy tua percaya pada hantu dan banyak bercakap, tetapi dia berumur 78, tinggal di kotej, dan dia nampak lelaki bertopi kuning — bukan dirinya.'),
      aroha: T('Aroha was at the radio desk all evening: the radio log is in her handwriting, and the coastguard spoke to her at 9:55.', 'Aroha di meja radio sepanjang malam: log radio bertulisan tangannya, dan pengawal pantai bercakap dengannya pukul 9:55.')
    },

    /* ------------------------------------------------------------------ INTERVIEWS */
    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      rourke: {
        greeting: T(`Terrible night! Terrible! I came as soon as I heard the light had failed. I only want to help.`, `Malam yang dahsyat! Dahsyat! Saya datang sebaik sahaja dengar lampu padam. Saya cuma mahu membantu.`),
        topics: [
          { id: 'late', label: T('When did you arrive?', 'Bila anda tiba?'),
            lines: [T('At eleven o\'clock sharp, after the light failed. I saw the dark tower and rushed here by boat.', 'Tepat pukul sebelas, selepas lampu padam. Saya nampak menara gelap dan bergegas ke sini dengan bot.')], claims: ['c_rourke_late'] },
          { id: 'cliff', label: T('Were you on the north cliff?', 'Adakah anda di tebing utara?'),
            lines: [T('Me? On that slippery cliff in a storm? Never! I have not left the boathouse.', 'Saya? Di tebing licin dalam ribut? Tidak sekali-kali! Saya tidak keluar dari rumah bot.')], claims: ['c_rourke_cliff'] },
          { id: 'job', label: T('What is your job?', 'Apakah kerja anda?'),
            lines: [T('I am a fishing skipper. I hate wrecks, I always have. A wreck is a tragedy, not a business!', 'Saya kapten nelayan. Saya benci kapal karam, sentiasa begitu. Kapal karam ialah tragedi, bukan perniagaan!')], claims: ['c_rourke_salvage'] },
          { id: 'ship', label: T('Do you know the Mary Aoife II?', 'Adakah anda kenal Mary Aoife II?'),
            lines: [T('A fine supply ship. She carries medical equipment, fourteen people and a very expensive cargo. Why do you ask?', 'Kapal bekalan yang bagus. Dia membawa peralatan perubatan, empat belas orang dan muatan yang sangat mahal. Kenapa tanya?')] }
        ],
        present: {
          boat_log: { lines: [T('That log... must be a typing mistake! I docked at... eleven. I always write the time too early.', 'Log itu... pasti salah tulis! Saya berlabuh pukul... sebelas. Saya sentiasa menulis masa terlalu awal.')] },
          fat_jetty: { lines: [T('That is not me. Many men wear yellow hats on this coast!', 'Itu bukan saya. Ramai lelaki memakai topi kuning di pantai ini!')] },
          tide_table: { lines: [T('A table of numbers. I do not read tables. Tides? Ha! My boat can float on a puddle.', 'Jadual nombor. Saya tidak baca jadual. Pasang surut? Ha! Bot saya boleh terapung di atas lopak.')] },
          yellow_hat: { lines: [T('My hat?! ...I must have lost it on the way from the boat. That is all. I never went near the lantern!', 'Topi saya?! ...Saya pasti menghilangkannya dalam perjalanan dari bot. Itu sahaja. Saya tidak pernah mendekati lentera itu!')] },
          salvage_contract: { lines: [T('...That is private! That chest is MINE! So what? A contract is only paper. I did not touch your lamp!', '...Itu peribadi! Peti itu MILIK SAYA! Jadi? Kontrak cuma kertas. Saya tidak sentuh lampu awak!')] },
          spare_fuse: { lines: [T('...I picked it up to keep it dry. Honestly!', '...Saya mengambilnya untuk memastikannya kering. Sumpah!')] },
          false_lantern: { lines: [T('A lantern on the cliff? Never seen it. Must be that old ghost of Paddy\'s.', 'Lentera di tebing? Tidak pernah nampak. Mesti hantu lama Paddy itu.')] }
        }
      },
      tomas: {
        greeting: T(`The lamp is dead and a ship is coming. I have checked the switch ten times! What did I miss?`, `Lampu mati dan kapal sedang datang. Saya sudah semak suis sepuluh kali! Apa yang saya terlepas?`),
        topics: [
          { id: 'post', label: T('Were you in the lamp room all evening?', 'Adakah anda di bilik lampu sepanjang malam?'),
            lines: [T('Yes! All evening. I never left my post. Never.', 'Ya! Sepanjang malam. Saya tidak pernah meninggalkan tempat saya. Tidak pernah.')], claims: ['c_tomas_post'] },
          { id: 'switch', label: T('What happened to the lamp?', 'Apa berlaku kepada lampu?'),
            lines: [T('At 9:55 the lamp just died. The switch is OFF and the fuse is gone. I did not do that. Lightning does not take out fuses.', 'Pukul 9:55 lampu mati begitu sahaja. Suis MATI dan fius hilang. Saya tidak buat. Kilat tidak mengeluarkan fius.')] },
          { id: 'ghost', label: T('Do you believe in the ghost?', 'Adakah anda percaya hantu itu?'),
            lines: [T('I am an engineer. I believe in fuses. But tonight... I felt the stairs go cold.', 'Saya jurutera. Saya percaya fius. Tetapi malam ini... saya rasa tangga menjadi sejuk.')] },
          { id: 'daughter', label: T('Tomás... tell me the truth.', 'Tomás... beritahu saya kebenaran.'), after: 'tomas_admit',
            lines: [T('...I left at 9:40. My daughter Sofia is ill and the only signal is on the east steps. I was ashamed. I should have told you at once.', '...Saya keluar pukul 9:40. Anak saya Sofia sakit dan isyarat hanya ada di tangga timur. Saya malu. Saya sepatutnya beritahu anda serta-merta.')] }
        ],
        present: {
          tomas_phone: { unlock: 'tomas_admit', claims: ['c_tomas_phone'], lines: [T('...You found my phone. Yes. I called Sofia. That is where I really was.', '...Anda jumpa telefon saya. Ya. Saya menelefon Sofia. Di situlah saya sebenarnya.')] },
          keeper_log: { requiresFlag: 'log_restored', lines: [T('You fixed my log. Yes, I wrote it myself. I am sorry I lied.', 'Anda membetulkan log saya. Ya, saya menulisnya sendiri. Maaf saya berbohong.')], lockedLines: [T('That is my log, but I cannot read half of it after the rain... (Restore it first!)', 'Itu log saya, tetapi separuh tidak boleh dibaca selepas hujan... (Pulihkan dahulu!)')] },
          lamp_switch: { lines: [T('Yes! The seal is torn and the fuse is gone. Someone did this on purpose.', 'Ya! Meterai koyak dan fius hilang. Seseorang sengaja melakukannya.')] },
          spare_fuse: { lines: [T('THE FUSE! Quick, give it to me! ...No, wait. Let us finish the case first. We must be SURE who took it.', 'FIUS ITU! Cepat, beri saya! ...Tidak, tunggu. Mari selesaikan kes dahulu. Kita mesti PASTI siapa mengambilnya.')] },
          silas_watch: { lines: [T('Silas\'s watch... there is a photo of it in the museum. It cannot be here. Nobody found it in seventy years...', 'Jam Silas... ada gambarnya di muzium. Ia tidak boleh ada di sini. Tiada siapa menjumpainya dalam tujuh puluh tahun...')] },
          ghost_photo: { lines: [T('Who is that in my lamp room? The door was locked and I had the only key! Hmm... I did not have it. It was in my pocket on the east steps.', 'Siapa itu dalam bilik lampu saya? Pintu berkunci dan saya ada satu-satunya kunci! Hmm... Saya tidak ada. Ia dalam poket saya di tangga timur.')] }
        }
      },
      fatima: {
        greeting: T(`Dr. Fatima Haddad, seabird scientist. I don't believe in ghosts, but I do believe in my cameras.`, `Dr. Fatima Haddad, saintis burung laut. Saya tidak percaya hantu, tetapi saya percaya kamera saya.`),
        topics: [
          { id: 'photos', label: T('Can I see your camera photos?', 'Boleh saya lihat gambar kamera awak?'), gives: ['fat_jetty', 'ghost_photo'],
            lines: [T('Of course. My night cameras photograph the jetty and the tower every 20 minutes. Here are two photos from tonight. Their clocks are exactly right.', 'Tentu. Kamera malam saya merakam jeti dan menara setiap 20 minit. Ini dua gambar malam ini. Jamnya tepat.')] },
          { id: 'boat', label: T('What did your camera see at the jetty?', 'Apa yang kamera awak nampak di jeti?'),
            lines: [T('At 9:41 the Kestrel was already tied up and a man in a yellow hat was carrying a small case ashore.', 'Pukul 9:41 Kestrel sudah ditambat dan lelaki bertopi kuning membawa kotak kecil ke darat.')], claims: ['c_fatima_boat'] },
          { id: 'lantern', label: T('What did you see at the tower?', 'Apa yang awak nampak di menara?'),
            lines: [T('At 10:20 a lantern waved in the lamp-room window. I checked: everyone on the island was somewhere else. I am a scientist, and I have no explanation.', 'Pukul 10:20 lentera dilambai di tingkap bilik lampu. Saya semak: semua orang di pulau berada di tempat lain. Saya saintis, dan saya tiada penjelasan.')], claims: ['c_fatima_lantern'] }
        ],
        present: {
          ghost_photo: { lines: [T('That is my photo, yes. Look at the cap: it is a very old keeper\'s style.', 'Itu gambar saya, ya. Lihat topi itu: gaya penjaga yang sangat lama.')] },
          silas_watch: { lines: [T('Stopped at 10:20. The same minute as my photo. I do not like this coincidence.', 'Berhenti pukul 10:20. Minit yang sama dengan gambar saya. Saya tidak suka kebetulan ini.')] },
          false_lantern: { lines: [T('A timer and a battery. Whoever built this knew some science, but not enough to copy the real pattern.', 'Pemasa dan bateri. Sesiapa yang membinanya tahu sedikit sains, tetapi tidak cukup untuk meniru corak sebenar.')] },
          yellow_hat: { lines: [T('A big yellow hat! That is the hat in my 9:41 photo.', 'Topi kuning besar! Itulah topi dalam gambar 9:41 saya.')] }
        }
      },
      paddy: {
        greeting: T(`Mind the stairs, detective. They are cold tonight. Cold as Silas's hand.`, `Awas tangga itu, detektif. Ia sejuk malam ini. Sejuk seperti tangan Silas.`),
        topics: [
          { id: 'silas', label: T('Tell me about the ghost.', 'Ceritakan tentang hantu itu.'),
            lines: [T('Silas Marlowe, keeper in 1953. He climbed these stairs in a storm and lit the lamp by hand to save a ship, and his heart gave out at the top. They say he still waves his lantern when a ship is in danger. The light on the cliff? That is HIM, I tell you!', 'Silas Marlowe, penjaga pada 1953. Dia menaiki tangga ini dalam ribut dan menyalakan lampu dengan tangan untuk menyelamatkan kapal, dan jantungnya berhenti di puncak. Kata orang dia masih melambai lenterannya apabila kapal dalam bahaya. Cahaya di tebing? Itu DIA, saya beritahu!')], claims: ['c_paddy_silas'] },
          { id: 'window', label: T('Did you see anyone tonight?', 'Adakah awak nampak sesiapa malam ini?'),
            lines: [T('At ten to ten a man in a big yellow hat passed my window with a lantern in his hand. I thought nothing of it.', 'Sepuluh minit sebelum pukul sepuluh seorang lelaki bertopi kuning besar melintasi tingkap saya dengan lentera di tangan. Saya tidak fikir apa-apa.')], claims: ['c_paddy_hat'] },
          { id: 'keeper', label: T('You were a keeper too?', 'Awak juga penjaga?'),
            lines: [T('Forty years. I know every stair and every sound. And I tell you: tonight the old tower is breathing.', 'Empat puluh tahun. Saya kenal setiap anak tangga dan setiap bunyi. Dan saya beritahu awak: malam ini menara lama itu bernafas.')] }
        ],
        present: {
          old_logbook: { lines: [T('Silas\'s own book! Fifty years I looked for it. He wrote that promise himself. I knew he would not leave a ship to die.', 'Buku Silas sendiri! Lima puluh tahun saya mencarinya. Dia sendiri menulis janji itu. Saya tahu dia tidak akan membiarkan kapal karam.')] },
          silas_watch: { lines: [T('His watch! Cold as the grave and stopped at 10:20. Oh, Silas...', 'Jamnya! Sejuk seperti kubur dan berhenti pukul 10:20. Oh, Silas...')] },
          yellow_hat: { lines: [T('That is the hat I saw at my window!', 'Itulah topi yang saya nampak di tingkap saya!')] },
          false_lantern: { lines: [T('A battery? A timer? Well... not Silas then. I am an old fool.', 'Bateri? Pemasa? Nah... bukan Silas kalau begitu. Saya orang tua bodoh.')] },
          ghost_photo: { lines: [T('That cap! That is the cap Silas wears in the old photograph in the museum. Fifty years I waited to see him.', 'Topi itu! Itulah topi yang Silas pakai dalam gambar lama di muzium. Lima puluh tahun saya menunggu untuk melihatnya.')] }
        }
      },
      aroha: {
        greeting: T(`Kia ora! I'm Aroha, Tomás's apprentice. I run the radio. I'll help however I can!`, `Kia ora! Saya Aroha, perantis Tomás. Saya menjaga radio. Saya akan bantu sedaya upaya!`),
        topics: [
          { id: 'lamp', label: T('When did the lamp go out?', 'Bila lampu padam?'),
            lines: [T('Exactly 9:55! The coastguard called straight away. I wrote it in the radio log.', 'Tepat 9:55! Pengawal pantai terus menelefon. Saya tulis dalam log radio.')], claims: ['c_aroha_lamp'] },
          { id: 'ship', label: T('Tell me about the ship.', 'Ceritakan tentang kapal itu.'),
            lines: [T('Mary Aoife II. Fourteen people on board. Her captain says fuel is low and she must try the passage at 11:05. We have about half an hour!', 'Mary Aoife II. Empat belas orang di atas kapal. Kaptennya berkata bahan api rendah dan dia mesti cuba laluan pukul 11:05. Kita ada kira-kira setengah jam!')] },
          { id: 'help', label: T('Any advice for me?', 'Ada nasihat untuk saya?'),
            lines: [T('Check the tide table, the map and the radio log. Our chart card tells you what the real light looks like. And be careful on the cliff path!', 'Semak jadual pasang surut, peta dan log radio. Kad carta kami menunjukkan rupa cahaya sebenar. Dan berhati-hati di laluan tebing!')] }
        ],
        present: {
          radio_log: { lines: [T('Yes, I wrote that. The captain said a lantern waved at the top of the tower. But the lamp room door was locked, I checked!', 'Ya, saya tulis itu. Kapten berkata lentera dilambai di puncak menara. Tetapi pintu bilik lampu berkunci, saya semak!')] },
          chart_card: { lines: [T('Fl(2) W 10 s: two flashes every ten seconds. That is OUR light.', 'Fl(2) W 10 s: dua kilat setiap sepuluh saat. Itu cahaya KITA.')] },
          ghost_photo: { lines: [T('Oh... oh wow. Is that... no. No, no, no. I am not going up there alone!', 'Oh... oh wah. Adakah itu... tidak. Tidak, tidak, tidak. Saya tidak akan naik ke sana seorang diri!')] }
        }
      }
    },

    /* ------------------------------------------------------------------ SPOOKY MOMENTS (scare level 1 = Low, 2 = Medium) */
    horror: {
      zones: [
        { id: 'lb_bell', room: 'LB', once: true, minScare: 1, delay: 4, fx: ['sfx:bell', 'sfx:wind'], text: T('🔔 A bell tolls somewhere above... but the bell was removed in 1960.', '🔔 Loceng berdentang di atas... tetapi loceng itu dibuang pada 1960.') },
        { id: 'lb_whisper', room: 'LB', once: true, minScare: 2, delay: 16, fx: ['sfx:whisper', 'flicker:LB:1.5'], text: T('🗣️ A whisper on the stairs: "Not tonight... not tonight..."', '🗣️ Bisikan di tangga: "Not tonight... not tonight..."') },
        { id: 'cp_thunder', room: 'CP', once: true, minScare: 1, delay: 1.2, fx: ['flash:white', 'sfx:thunder', 'flicker:CP:2'], text: T('⚡ A thunderclap lights the cliff path white!', '⚡ Guruh menerangi laluan tebing putih!') },
        { id: 'cp_steps', room: 'CP', once: true, minScare: 2, delay: 5, fx: ['sfx:steps_far', 'sfx:wind', 'shake:0.3'], text: T('👣 Slow boots on the path behind you... but nobody is there.', '👣 Kasut perlahan di laluan di belakang anda... tetapi tiada siapa di situ.') },
        { id: 'lr_hum', room: 'LR', once: true, minScare: 1, delay: 3, fx: ['sfx:static', 'flicker:LR:2'], text: T('📡 The dead lamp hums, as if it remembers being alive.', '📡 Lampu mati itu berdengung, seolah-olah ia ingat pernah hidup.') },
        { id: 'lr_ghost', room: 'LR', once: true, minScare: 2, delay: 10, fx: ['flash:white', 'sfx:voice', 'shake:0.6', 'music:tense:10'], text: T('💡 For one second a lantern glows in the window — and a calm old voice says: "Not tonight, boy."', '💡 Selama satu saat lentera bersinar di tingkap — dan suara tua yang tenang berkata: "Not tonight, boy."') },
        { id: 'kc_knock', room: 'KC', once: true, minScare: 1, delay: 3, fx: ['sfx:knock'], text: T('🚪 Three slow knocks on the cottage door. Nobody outside.', '🚪 Tiga ketukan perlahan pada pintu kotej. Tiada siapa di luar.') },
        { id: 'kc_heart', room: 'KC', once: true, minScare: 2, delay: 9, fx: ['sfx:heartbeat', 'blackout:1.8'], text: T('🕯️ The candles go out all at once... then flicker back.', '🕯️ Semua lilin padam serentak... kemudian berkelip semula.') },
        { id: 'bh_drip', room: 'BH', once: true, minScare: 1, delay: 2, fx: ['sfx:drip', 'sfx:wind'], text: T('💧 Water drips and slaps against the dark jetty.', '💧 Air menitis dan menampar jeti yang gelap.') },
        { id: 'bh_slam', room: 'BH', once: true, minScare: 2, delay: 8, fx: ['sfx:slam', 'shake:0.7', 'music:tense:9'], text: T('🌊 The boathouse door SLAMS in the wind!', '🌊 Pintu rumah bot DIHEMPAS angin!') }
      ],
      figures: [
        { name: 'figure1', room: 'CP', minScare: 2, revealDistance: 3.4, flickerRoom: 'CP', reveal: T('It is only a flagpole with a flapping oilskin coat on it! (A false alarm.)', 'Ia hanya tiang bendera dengan kot minyak berkibar padanya! (Penggera palsu.)') },
        { name: 'figure2', room: 'LR', minScare: 2, revealDistance: 3.2, flickerRoom: 'LR', sfx: 'sting', reveal: T('A keeper\'s coat hangs on the hook... but the lantern beside it is WARM, and the coat is still swaying. Nobody came in.', 'Kot penjaga tergantung pada cangkuk... tetapi lentera di sebelahnya HANGAT, dan kot itu masih bergoyang. Tiada siapa masuk.') }
      ]
    },

    /* ------------------------------------------------------------------ EXIT TICKET */
    exitTicket: [
      { subject: 'math', q: T('A light flashes 2 times every 10 seconds. How many flashes in ONE MINUTE?', 'Cahaya berkelip 2 kali setiap 10 saat. Berapa kilat dalam SATU MINIT?'),
        options: ['6', '10', '12', '20'], answer: 2, why: T('60 ÷ 10 = 6 groups. 6 × 2 = 12 flashes.', '60 ÷ 10 = 6 kumpulan. 6 × 2 = 12 kilat.') },
      { subject: 'geography', q: T('A boat needs 2.0 m of water. The tide is 1.1 m. Can it dock?', 'Bot perlukan 2.0 m air. Air pasang 1.1 m. Bolehkah ia berlabuh?'),
        options: [T('Yes', 'Ya'), T('No — 1.1 m is less than 2.0 m', 'Tidak — 1.1 m kurang daripada 2.0 m')], answer: 1, why: T('Compare the numbers: 1.1 < 2.0.', 'Bandingkan nombor: 1.1 < 2.0.') },
      { subject: 'thinking', q: T('Some things in this case had a human explanation and one did not. What is the best attitude?', 'Sebahagian perkara dalam kes ini ada penjelasan manusia dan satu tidak. Sikap terbaik?'),
        options: [T('Stay curious: explain what you can with evidence, and admit what you cannot explain yet.', 'Kekal ingin tahu: jelaskan yang boleh dengan bukti, dan akui yang belum boleh dijelaskan.'), T('Believe every ghost story.', 'Percaya setiap cerita hantu.'), T('Pretend the strange part never happened.', 'Berpura-pura bahagian pelik tidak berlaku.')],
        answer: 0, why: T('Good detectives and scientists follow evidence — and are honest about the mystery that remains.', 'Detektif dan saintis yang baik mengikut bukti — dan jujur tentang misteri yang tinggal.') }
    ],

    /* ------------------------------------------------------------------ 3D WORLD (built from this data) */
    world(W) {
      const H = 3.0, WALL = 0x4d5560, WALL2 = 0x40464f;
      W.sky(0x05070e); W.fog(5, 26); W.spawn(this.spawn.x, this.spawn.z, this.spawn.yaw);
      W.mood({ amb: 0.15, hemi: 0.13, ambLow: 0.55, hemiLow: 0.32 });

      /* ---- rooms (LB lighthouse base, CP cliff path, LR lamp room, KC keeper's cottage, BH boathouse) ---- */
      W.room('LB', -9, -4, -1, 4, T('Lighthouse base', 'Dasar rumah api'), true, 0x42454c, 0x1c1e24);
      W.room('CP', -1, -1, 8, 1, T('Cliff path', 'Laluan tebing'), true, 0x38404a, 0x16191f, 2.8);
      W.room('LR', 1, -8, 7, -1, T('Lamp room', 'Bilik lampu'), true, 0x4a4a52, 0x181a20);
      W.room('KC', 1, 1, 7, 8, T("Keeper's cottage", 'Kotej penjaga'), true, 0x5a4636, 0x201814);
      W.room('BH', 8, -3, 15, 3, T('Boathouse and jetty', 'Rumah bot dan jeti'), true, 0x4a3b2c, 0x14161a);

      /* ---- walls ---- */
      W.wallZ(-4, -9, -1, [], H, WALL); W.wallZ(4, -9, -1, [], H, WALL); W.wallX(-9, -4, 4, [], H, WALL); W.wallX(-1, -4, 4, [[-1, 1]], H, WALL);
      W.wallZ(-1, -1, 8, [[3, 4.2]], 2.8, WALL2); W.wallZ(1, -1, 8, [[3, 4.2]], 2.8, WALL2);
      W.wallZ(-8, 1, 7, [], H, WALL); W.wallX(1, -8, -1, [], H, WALL); W.wallX(7, -8, -1, [], H, WALL);
      W.wallZ(8, 1, 7, [], H, 0x6a5440); W.wallX(1, 1, 8, [], H, 0x6a5440); W.wallX(7, 1, 8, [], H, 0x6a5440);
      W.wallX(8, -3, 3, [[-1, 1]], H, 0x4a3b2c); W.wallZ(-3, 8, 15, [], H, 0x4a3b2c); W.wallZ(3, 8, 15, [], H, 0x4a3b2c); W.wallX(15, -3, 3, [], H, 0x4a3b2c);

      /* ---- lights: cold blue storm light, warm lamp in the cottage. Point lights are off in Low graphics mode. ---- */
      W.light('LB', -4.5, 2.8, 0, 0x8ab4ff, 0.5, 14); W.light('CP', 3.5, 2.4, 0, 0x7f93ff, 0.3, 9);
      W.light('LR', 4, 2.6, -4, 0x9fb0ff, 0.45, 10); W.light('KC', 4, 2.6, 4.5, 0xffb870, 0.6, 10); W.light('BH', 12, 2.6, 0, 0xffa060, 0.5, 11);

      /* ================= LIGHTHOUSE BASE ================= */
      W.cyl(-5.0, 0, 0, 0.9, 3.0, 0x6a6f78);                                                       // central stair column
      W.box(-5.0, 0.0, 1.0, 1.2, 0.3, 0.9, 0x5a5f68, { collide: false });                          // first steps
      W.writing(-8.86, 1.9, 0.0, Math.PI / 2, T('SKERRY POINT LIGHT · 1887', 'RUMAH API SKERRY POINT · 1887'), '#b8c4d8', 2.6, 0.5);
      W.box(-3.3, 1.3, -3.9, 1.3, 1.0, 0.05, 0xe9e2c8, { collide: false });
      W.interact({ id: 'tide_table', x: -3.3, y: 1.4, z: -3.7, r: 0.8, label: T('Tide table on the wall', 'Jadual pasang surut di dinding'), item: 'tide_table' });
      W.box(-6.6, 1.3, -3.9, 1.4, 1.0, 0.05, 0xdcd3b4, { collide: false });
      W.interact({ id: 'island_map', x: -6.6, y: 1.4, z: -3.7, r: 0.8, label: T('Map of the island', 'Peta pulau'), item: 'island_map' });
      W.box(-2.8, 0, 2.8, 1.6, 0.8, 0.8, 0x4a3a2a);                                                // radio desk
      W.box(-2.8, 0.8, 2.8, 0.5, 0.25, 0.3, 0x222a30, { collide: false });                         // radio
      W.interact({ id: 'radio_log', x: -3.4, y: 0.95, z: 2.8, r: 0.4, label: T('Radio log', 'Log radio'), item: 'radio_log' });
      W.box(-2.1, 0.85, 3.85, 0.4, 0.3, 0.04, 0xf0e7b0, { collide: false });
      W.interact({ id: 'chart_card', x: -2.1, y: 1.0, z: 3.7, r: 0.4, label: T('Ship chart card', 'Kad carta kapal'), item: 'chart_card' });

      /* ================= CLIFF PATH ================= */
      W.writing(2.4, 1.6, -0.88, 0, T('DANGER — CLIFF EDGE|KEEP TO THE PATH', 'BAHAYA — TEPI TEBING|IKUT LALUAN'), '#c9b46a', 2.2, 0.7);
      W.box(4.0, 0.0, 0.7, 0.3, 0.12, 0.3, 0xe6c622, { collide: false });                          // yellow hat
      W.interact({ id: 'yellow_hat', x: 4.0, y: 0.12, z: 0.7, r: 0.4, label: T('Yellow hat on the thorn bush', 'Topi kuning pada semak duri'), item: 'yellow_hat' });
      W.box(6.2, 0.0, -0.7, 0.35, 0.3, 0.25, 0x2a3a2a, { collide: false });                         // fake lantern body
      W.box(6.2, 0.3, -0.7, 0.22, 0.22, 0.22, 0x33ff66, { collide: false });                        // green lens
      W.interact({ id: 'false_lantern', x: 6.2, y: 0.25, z: -0.7, r: 0.6, label: T('A flashing lantern', 'Lentera berkelip'), item: 'false_lantern' });
      W.box(6.9, 0, 0.7, 0.06, 1.8, 0.06, 0x3a3a3a);
      W.box(6.9, 0.7, 0.7, 0.5, 1.0, 0.2, 0x2a3138, { collide: false, name: 'figure1' }); W.ball(6.9, 1.85, 0.7, 0.14, 0x2a3138, { name: 'figure1' });
      W.interact({ id: 'flagpole', x: 6.9, y: 1.0, z: 0.7, r: 0.6, label: T('Flagpole', 'Tiang bendera'), text: T('A flagpole with an old oilskin coat tied on it, flapping in the wind. In the dark it can look like a person!', 'Tiang bendera dengan kot minyak lama diikat padanya, berkibar ditiup angin. Dalam gelap ia boleh kelihatan seperti orang!') });

      /* ================= LAMP ROOM ================= */
      W.cyl(4.0, 0, -4.5, 0.9, 0.9, 0x5a5f68);                                                     // pedestal
      W.cyl(4.0, 0.9, -4.5, 0.75, 1.5, 0xaad0e8, { collide: false });                              // great glass lens (dark)
      W.box(1.12, 1.0, -6.0, 0.14, 0.7, 0.5, 0x666a70, { collide: false });                         // lamp control box
      W.interact({ id: 'lamp_switch', x: 1.3, y: 1.3, z: -6.0, r: 0.7, label: T('Lamp control box', 'Kotak kawalan lampu'), item: 'lamp_switch' });
      W.box(6.2, 0, -6.8, 1.4, 0.8, 0.8, 0x4a3a2a);
      W.box(6.2, 0.8, -6.8, 0.4, 0.04, 0.3, 0xe8e0c8, { collide: false });
      W.interact({ id: 'keeper_log', x: 6.2, y: 0.95, z: -6.8, r: 0.5, label: T("Tonight's keeper log", 'Log penjaga malam ini'), item: 'keeper_log' });
      W.box(6.88, 0.9, -3.8, 0.12, 0.7, 0.9, 0x3a2a1a, { collide: false });                          // shelf
      W.box(6.8, 1.2, -3.8, 0.14, 0.25, 0.3, 0x6a3a2a, { collide: false });                          // the old red book
      W.interact({ id: 'old_logbook', x: 6.7, y: 1.25, z: -3.8, r: 0.5, label: T('Old leather logbook', 'Buku log kulit lama'), item: 'old_logbook' });
      W.box(4.0, 1.1, -7.92, 2.2, 1.4, 0.05, 0x0a0f1a, { collide: false });                          // dark window
      W.interact({ id: 'silas_watch', x: 4.0, y: 1.0, z: -7.6, r: 0.6, label: T('Window sill', 'Birai tingkap'), item: 'silas_watch', needsFlag: 'old_log_read',
        lockedText: T('Just dust and cold stone. Nothing on the sill. (Maybe you need to read something first...)', 'Hanya habuk dan batu sejuk. Tiada apa di birai. (Mungkin anda perlu membaca sesuatu dahulu...)') });
      W.box(2.2, 0, -7.2, 0.5, 1.5, 0.28, 0x2a2f3a, { collide: false, name: 'figure2' }); W.ball(2.2, 1.65, -7.2, 0.16, 0x2a2f3a, { name: 'figure2' });
      W.box(2.2, 1.7, -7.2, 0.3, 0.06, 0.3, 0x1a1e28, { collide: false, name: 'figure2' });         // cap

      /* ================= KEEPER'S COTTAGE ================= */
      W.box(4.0, 0, 3.8, 1.6, 0.8, 0.9, 0x6a4a2a);                                                 // table
      W.box(3.6, 0.8, 3.8, 0.3, 0.04, 0.18, 0x111111, { collide: false });                          // phone
      W.interact({ id: 'tomas_phone', x: 3.6, y: 0.95, z: 3.8, r: 0.4, label: T("Tomás's phone", 'Telefon Tomás'), item: 'tomas_phone' });
      W.box(6.65, 0, 2.2, 0.5, 1.1, 1.2, 0x4a3a30);                                                // fireplace
      W.box(6.6, 0.4, 2.2, 0.3, 0.3, 0.6, 0xff8a30, { collide: false });
      W.box(1.5, 0, 6.8, 1.3, 0.5, 0.9, 0x3a5a6a);                                                 // bed
      W.interact({ id: 'cottage_bed', x: 1.6, y: 0.7, z: 6.8, r: 0.8, label: T('Paddy\'s narrow bed', 'Katil sempit Paddy'), text: T('A narrow bed with a framed photo of a lighthouse crew from 1953. One man holds a lantern and wears a peaked cap.', 'Katil sempit dengan gambar berbingkai anak kapal rumah api dari 1953. Seorang lelaki memegang lentera dan memakai topi berpuncak.') });

      /* ================= BOATHOUSE ================= */
      W.box(11.8, 0.0, -1.6, 3.6, 0.6, 1.3, 0x7a4a2a);                                             // the Kestrel (hull)
      W.box(11.8, 0.6, -1.6, 1.2, 0.8, 0.9, 0xdadada, { collide: false });                          // cabin
      W.box(9.6, 0, -2.4, 0.9, 0.8, 0.7, 0x4a3a2a);
      W.box(9.5, 0.8, -2.4, 0.4, 0.04, 0.3, 0xe8e0c8, { collide: false });
      W.interact({ id: 'boat_log', x: 9.5, y: 0.95, z: -2.4, r: 0.5, label: T("Kestrel's boat log", 'Log bot Kestrel'), item: 'boat_log' });
      W.box(14.2, 0, 1.7, 1.2, 0.6, 0.8, 0x4a3a28); W.box(14.2, 0.6, 1.7, 1.1, 0.05, 0.7, 0xb08a2e, { collide: false });
      W.interact({ id: 'salvage_chest', x: 14.2, y: 0.8, z: 1.7, r: 0.8, label: T("Skipper's sea chest", 'Peti laut kapten'), item: 'salvage_chest' });
      W.box(14.6, 0, -1.8, 0.7, 0.7, 0.7, 0x6a5a40); W.box(14.5, 0.7, -2.2, 0.6, 0.6, 0.6, 0x6a5a40);   // crates
      W.box(14.97, 0.05, 0, 0.06, 0.1, 5.8, 0x0a1a30, { collide: false });                          // the dark sea beyond

      /* ================= PEOPLE ================= */
      W.npc({ id: 'aroha', x: -6.8, z: 2.4, rot: Math.PI * 0.5, skin: 0xc79a6a, shirt: 0x33a3a3, pants: 0x2c3e50, hair: 0x111111, scale: 0.88 });
      W.npc({ id: 'tomas', x: 2.8, z: -3.0, rot: Math.PI * 0.5, skin: 0xd8a87a, shirt: 0xc0562b, pants: 0x2c2c2c, hair: 0x1a1a1a, scale: 1.0, hat: 0x2a3a4a });
      W.npc({ id: 'paddy', x: 2.8, z: 5.8, rot: Math.PI * 0.2, skin: 0xe0b894, shirt: 0x8a9a5b, pants: 0x4a3a2a, hair: 0xeeeeee, scale: 0.97, hat: 0x3a3a3a });
      W.npc({ id: 'fatima', x: 5.6, z: 6.0, rot: Math.PI * 1.2, skin: 0xcfa07a, shirt: 0x7a5cc0, pants: 0x3a3a4a, hair: 0x1a1210, scale: 0.95 });
      W.npc({ id: 'rourke', x: 11.0, z: 1.6, rot: Math.PI * 1.4, skin: 0xd8a888, shirt: 0xe6c622, pants: 0x2a3a4a, hair: 0x7a5a3a, scale: 1.05, hat: 0xe6c622 });
    }
  };

  /* ====================================================================== PICTURES AND OBJECTS FOR THIS CASE */
  const A = MF.art, h = A.h;
  A.tide012 = (canvas) => {
    canvas.width = 640; canvas.height = 320; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 640, 320, '#e8e1cb');
    h.text(c, 'TIDE TABLE — Skerry jetty (tonight)', 20, 30, 20, '#222', 'left', true); h.text(c, 'Jadual pasang surut — jeti Skerry (malam ini)', 20, 50, 13, '#666', 'left');
    const rows = [['8:00 pm', 2.6], ['9:00 pm', 3.1], ['10:00 pm', 2.4], ['10:20 pm', 2.0], ['10:40 pm', 1.6], ['11:00 pm', 1.1]];
    rows.forEach((r, i) => { const y = 90 + i * 34; h.text(c, r[0], 40, y, 18, '#333', 'left', true); h.text(c, r[1].toFixed(1) + ' m', 180, y, 18, r[1] < 2.0 ? '#c0392b' : '#0a6', 'left', true); h.rect(c, 260, y - 16, r[1] * 90, 20, r[1] < 2.0 ? '#e79a8a' : '#8ccfa0'); });
    c.strokeStyle = '#c0392b'; c.lineWidth = 3; c.beginPath(); c.moveTo(260 + 2.0 * 90, 66); c.lineTo(260 + 2.0 * 90, 296); c.stroke();
    h.text(c, 'Kestrel needs 2.0 m', 260 + 2.0 * 90 + 8, 80, 14, '#c0392b', 'left', true); h.text(c, 'Kestrel perlukan 2.0 m', 260 + 2.0 * 90 + 8, 96, 11, '#a33', 'left');
  };
  A.flash012 = (canvas) => {
    canvas.width = 640; canvas.height = 280; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 640, 280, '#10151f');
    const sec = 20, W0 = 60, scale = 520 / 60;     // 60 seconds across
    h.text(c, 'REAL LIGHT — Fl(2) W 10 s', 20, 30, 18, '#ffe9a0', 'left', true); h.text(c, 'Cahaya SEBENAR — 2 kilat setiap 10 saat', 20, 48, 12, '#889', 'left');
    for (let t = 0; t < 60; t += 10) { h.rect(c, W0 + t * scale, 66, 8, 30, '#ffe9a0'); h.rect(c, W0 + (t + 2) * scale, 66, 8, 30, '#ffe9a0'); }
    h.line(c, W0, 100, W0 + 520, 100, '#556', 2); h.text(c, '0 s', W0, 118, 12, '#99a', 'center'); h.text(c, '60 s', W0 + 520, 118, 12, '#99a', 'center');
    h.text(c, 'CLIFF LANTERN (green)', 20, 160, 18, '#8dffb0', 'left', true); h.text(c, 'Lentera TEBING — 3 kilat setiap 12 saat', 20, 178, 12, '#889', 'left');
    for (let t = 0; t < 60; t += 12) { [0, 1.5, 3].forEach((o) => h.rect(c, W0 + (t + o) * scale, 196, 8, 30, '#8dffb0')); }
    h.line(c, W0, 230, W0 + 520, 230, '#556', 2); h.text(c, '0 s', W0, 248, 12, '#99a', 'center'); h.text(c, '60 s', W0 + 520, 248, 12, '#99a', 'center');
  };
  A.plan012 = (canvas) => {
    canvas.width = 720; canvas.height = 400; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 720, 400, '#bfd9ea');
    c.fillStyle = '#8fc79a'; c.beginPath(); c.ellipse(340, 210, 190, 115, 0, 0, 7); c.fill(); c.strokeStyle = '#4a7a55'; c.lineWidth = 3; c.stroke();
    h.circ(c, 340, 210, 16, '#fff'); h.text(c, 'Lighthouse', 340, 244, 14, '#222', 'center', true);
    c.strokeStyle = '#8a6a30'; c.lineWidth = 6; c.beginPath(); c.moveTo(270, 130); c.quadraticCurveTo(340, 100, 440, 135); c.stroke(); h.text(c, 'Cliff path / North cliff', 350, 112, 14, '#5a3a10', 'center', true);
    h.rect(c, 505, 200, 60, 12, '#8a6a30'); h.text(c, 'Jetty', 535, 232, 14, '#222', 'center', true);
    [[90, 70], [130, 100], [70, 120], [120, 45]].forEach((p) => { h.text(c, 'X', p[0], p[1], 30, '#c0392b', 'center', true); }); h.text(c, 'SKERRY ROCKS', 110, 150, 14, '#c0392b', 'center', true);
    c.strokeStyle = '#1f8a5a'; c.lineWidth = 5; c.setLineDash([12, 8]); c.beginPath(); c.moveTo(150, 350); c.lineTo(540, 350); c.stroke(); c.setLineDash([]);
    c.fillStyle = '#1f8a5a'; c.beginPath(); c.moveTo(550, 350); c.lineTo(525, 338); c.lineTo(525, 362); c.fill(); h.text(c, 'SAFE CHANNEL / Saluran selamat', 345, 380, 14, '#0a5a38', 'center', true);
    h.circ(c, 650, 70, 40, '#fff'); c.strokeStyle = '#333'; c.lineWidth = 2; c.beginPath(); c.arc(650, 70, 40, 0, 6.3); c.stroke(); h.line(c, 650, 100, 650, 40, '#c0392b', 5);
    h.text(c, 'N', 650, 30, 18, '#c0392b', 'center', true); h.text(c, 'S', 650, 122, 16, '#333', 'center', true); h.text(c, 'E', 702, 76, 16, '#333', 'right', true); h.text(c, 'W', 598, 76, 16, '#333', 'left', true);
    h.text(c, 'SKERRY POINT', 20, 30, 20, '#123', 'left', true);
  };
  A.chest012 = (canvas) => {
    canvas.width = 620; canvas.height = 260; const c = canvas.getContext('2d'); h.rect(c, 0, 0, 620, 260, '#cdbf9a');
    h.rect(c, 40, 80, 220, 140, '#5a3a20'); h.rect(c, 40, 60, 220, 30, '#6e4a2a'); h.rect(c, 40, 140, 220, 8, '#b08a2e'); h.rect(c, 140, 120, 40, 50, '#b08a2e'); [0, 1, 2].forEach((i) => h.text(c, '?', 128 + i * 24, 158, 22, '#222', 'center', true));
    h.rect(c, 300, 40, 280, 160, '#f3e9b5'); c.strokeStyle = '#b8a040'; c.lineWidth = 2; c.strokeRect(300, 40, 280, 160);
    h.text(c, "Skipper's code:", 320, 80, 22, '#222', 'left', true); h.text(c, 'finish each pattern.', 320, 112, 22, '#222', 'left', true); h.text(c, '— D.R.', 320, 160, 18, '#555', 'left');
  };
  A.photos.fat_jetty = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#0b160f'); h.rect(c, 0, H * 0.55, W, H * 0.45, '#0f2418'); h.rect(c, 0, H * 0.5, W, 14, '#1a3626');
    h.rect(c, W * 0.12, H * 0.62, W * 0.55, 18, '#3a5a40'); for (let i = 0; i < 9; i++) h.rect(c, W * 0.12 + i * 60, H * 0.62, 4, 40, '#244a30');
    c.fillStyle = '#2a4a34'; c.beginPath(); c.moveTo(W * 0.55, H * 0.76); c.lineTo(W * 0.92, H * 0.76); c.lineTo(W * 0.86, H * 0.9); c.lineTo(W * 0.6, H * 0.9); c.closePath(); c.fill(); h.rect(c, W * 0.66, H * 0.64, 70, 40, '#355a40'); h.text(c, 'KESTREL', W * 0.76, H * 0.86, 24, '#cfe', 'center', true);
    h.rect(c, W * 0.3, H * 0.4, 36, 100, '#4a6a50'); h.circ(c, W * 0.3 + 18, H * 0.37, 16, '#6a8a70'); c.fillStyle = '#ffe34a'; c.beginPath(); c.moveTo(W * 0.3 - 6, H * 0.36); c.lineTo(W * 0.3 + 42, H * 0.36); c.lineTo(W * 0.3 + 30, H * 0.32); c.lineTo(W * 0.3 + 6, H * 0.32); c.fill(); h.rect(c, W * 0.3 + 34, H * 0.54, 30, 24, '#2a2a2a');
    for (let y = 0; y < H; y += 4) { c.fillStyle = 'rgba(0,0,0,0.18)'; c.fillRect(0, y, W, 1); }
    h.text(c, 'CAM 2  JETTY', 20, 36, 24, '#9affb0', 'left', true); const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.5)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#9affb0', 'center', true);
  };
  A.photos.ghost_photo = (c, W, H, o) => {
    h.rect(c, 0, 0, W, H, '#080e16'); h.rect(c, W * 0.38, H * 0.18, W * 0.24, H * 0.82, '#1b2634');
    h.rect(c, W * 0.34, H * 0.12, W * 0.32, 18, '#2a3a4a'); c.fillStyle = '#2a3a4a'; c.beginPath(); c.moveTo(W * 0.34, H * 0.12); c.lineTo(W * 0.66, H * 0.12); c.lineTo(W * 0.5, H * 0.02); c.fill();
    const g = c.createRadialGradient(W * 0.5, H * 0.3, 10, W * 0.5, H * 0.3, 150); g.addColorStop(0, 'rgba(255,220,120,0.9)'); g.addColorStop(1, 'rgba(255,220,120,0)'); c.fillStyle = g; c.fillRect(W * 0.2, H * 0.05, W * 0.6, H * 0.5);
    h.rect(c, W * 0.44, H * 0.2, W * 0.12, 70, '#ffe9a0');                                           // lit window
    h.rect(c, W * 0.485, H * 0.24, 22, 52, '#10141c'); h.circ(c, W * 0.496, H * 0.225, 11, '#10141c'); c.fillStyle = '#10141c'; c.fillRect(W * 0.47, H * 0.205, 52, 6);   // figure + peaked cap
    h.rect(c, W * 0.53, H * 0.29, 10, 14, '#ffcf60'); h.line(c, W * 0.505, H * 0.28, W * 0.535, H * 0.3, '#10141c', 5);              // lantern held out
    for (let y = 0; y < H; y += 4) { c.fillStyle = 'rgba(0,0,0,0.16)'; c.fillRect(0, y, W, 1); }
    h.text(c, 'CAM 1  TOWER', 20, 36, 24, '#9affb0', 'left', true); const sx = W - 190, sy = H - 44; h.rect(c, sx, sy, 170, 34, 'rgba(0,0,0,0.5)'); h.text(c, MF.fmtTime(o.stampT || 0).toUpperCase(), sx + 85, sy + 25, 22, '#9affb0', 'center', true);
  };

  /* ---- 3D objects the student can turn around in their hands ---- */
  const M = MF.models, mat = (col, o) => new THREE.MeshLambertMaterial(Object.assign({ color: col }, o || {})), mesh = (g, m) => new THREE.Mesh(g, m);
  M.watch012 = () => {
    const g = new THREE.Group(); const body = mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.22, 28), mat(0x9b7b2c)); body.rotation.x = Math.PI / 2; g.add(body);
    const face = mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.05, 28), mat(0xe8e2cf)); face.rotation.x = Math.PI / 2; face.position.z = 0.12; g.add(face);
    const hh = mesh(new THREE.BoxGeometry(0.06, 0.4, 0.03), mat(0x222222)); hh.position.set(0, 0.14, 0.17); hh.rotation.z = 0.4; g.add(hh);
    const mh = mesh(new THREE.BoxGeometry(0.04, 0.55, 0.03), mat(0x222222)); mh.position.set(0.18, 0.1, 0.18); mh.rotation.z = -1.1; g.add(mh);
    const crown = mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.2, 10), mat(0x7a5a1c)); crown.position.y = 0.92; g.add(crown);
    const ring = mesh(new THREE.TorusGeometry(0.2, 0.04, 8, 14), mat(0x7a5a1c)); ring.position.y = 1.12; g.add(ring);
    g.rotation.y = 0.5; return g;
  };

  MF.registerCase(C);
})();
