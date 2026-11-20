/* ============================================================================
   CASE 007 — THE NIGHT MARKET MIX-UP / KEKELIRUAN PASAR MALAM   (Pasar malam, Hungry Ghost month)
   ----------------------------------------------------------------------------
   HIDDEN SOLUTION
   - The temple treasurer Mr. Raman collected RM 3,600 (1,200 + 1,500 + 900) for the festival, in a fat envelope.
   - 7:00 the envelope is counted. 7:40 his nephew DANIAL (19, durian-lorry helper) buys 2 bundles of joss ("hell")
     money at the altar tent (RM 17, change RM 3, signs the book "D. Aziz"). He needs RM 3,500 for a motorbike repair bill.
   - 7:48 he buys tea at Auntie Mei's stall, wearing a RED CAP and a durian backpack.
   - 7:50-7:52 He swaps the cash for the joss money inside the envelope on the unguarded table (camera 7:52).
   - Uncle Chong, the durian seller, also wears a RED CAP: the witnesses mix the two men up.
   - 8:05 He hides the real cash in a durian crate in the lorry (code lock).
   - 8:20 Mr. Raman opens the envelope: the money has "turned into ghost money".
   TWIST: the "ghost money" is a cheap swap; two men in red caps cause the mix-up; the thief is family.
   ============================================================================ */
(function () {
  const kit = MF.kit, T = kit.T, mm = kit.mm, D = kit.doc;
  const C = {
    id: '007', num: 7,
    title: T('The Night Market Mix-up', 'Kekeliruan Pasar Malam'),
    tagline: T('The festival money turned into ghost money. Two men wore red caps. And only one is lying.', 'Wang perayaan bertukar menjadi wang hantu. Dua lelaki memakai topi merah. Dan hanya seorang berbohong.'),
    place: T('Pasar Malam Taman Bunga (Hungry Ghost month)', 'Pasar Malam Taman Bunga (bulan Hantu Lapar)'),
    premise: T(
      `It is 8:30 pm at the pasar malam during the Hungry Ghost month. Red lanterns sway, incense smoke drifts and drums beat somewhere in the dark. Temple treasurer Mr. Raman opened his fat envelope of RM 3,600 and found only paper "hell money" inside. People whisper that the hungry ghosts took it. Three witnesses saw "a man in a red cap" near the table, but there were TWO men in red caps tonight. You must separate fact from rumour before the market closes at 9:10 pm.`,
      `Sekarang pukul 8:30 malam di pasar malam pada bulan Hantu Lapar. Lampu lampion merah bergoyang, asap kemenyan berlegar dan gendang berbunyi di suatu tempat dalam gelap. Bendahari tokong, Encik Raman, membuka sampul tebalnya berisi RM 3,600 dan hanya menemui "wang neraka" kertas. Orang berbisik hantu lapar mengambilnya. Tiga saksi nampak "lelaki bertopi merah" dekat meja, tetapi ada DUA lelaki bertopi merah malam ini. Anda mesti membezakan fakta daripada khabar angin sebelum pasar tutup pukul 9:10 malam.`),
    mysteryType: 'Swapped cash / mistaken identity',
    subjects: ['math', 'geography'],
    scareDefault: 2,
    clock: { start: mm('8:30'), deadline: mm('9:10'), minutesPerRealSecond: 1 / 30 },
    spawn: { x: -8.0, z: 0, yaw: -Math.PI / 2 },
    timeUp: { title: T('The market closes!', 'Pasar tutup!'), text: T('The stalls are packing up and the thief walks away with the cash. Name the culprit NOW!', 'Gerai mengemas dan pencuri berjalan pergi dengan wang. Namakan pelaku SEKARANG!') },

    hidden: {
      culprit: 'danial', what: 'cash_swapped', window: [mm('7:40'), mm('8:05')],
      summary: T(
        `Danial, the treasurer's nephew, needed RM 3,500 for a motorbike repair. At 7:40 he bought two bundles of joss money, at 7:50 he swapped them for the cash in the unguarded envelope, and at 8:05 he hid the real money in a durian crate in the lorry. Uncle Chong also wore a red cap, so witnesses mixed the men up. A camera shows the red-cap man with a durian backpack: that is Danial, not Chong.`,
        `Danial, anak saudara bendahari, perlukan RM 3,500 untuk membaiki motosikal. Pukul 7:40 dia membeli dua ikat wang neraka, pukul 7:50 dia menukarnya dengan wang tunai dalam sampul yang tidak dijaga, dan pukul 8:05 dia menyorokkan wang sebenar dalam peti durian di lori. Pakcik Chong juga memakai topi merah, jadi saksi tersilap lelaki. Kamera menunjukkan lelaki topi merah dengan beg galas durian: itu Danial, bukan Chong.`),
      sequence: [
        [mm('7:00'), T('The cash (RM 3,600) is counted into the envelope.', 'Wang tunai (RM 3,600) dikira ke dalam sampul.')],
        [mm('7:40'), T('Danial buys 2 bundles of joss money at the altar.', 'Danial membeli 2 ikat wang neraka di altar.')],
        [mm('7:48'), T('Danial buys tea from Auntie Mei.', 'Danial membeli teh daripada Mak Cik Mei.')],
        [mm('7:52'), T('The camera sees the red-cap man at the envelope table.', 'Kamera nampak lelaki topi merah di meja sampul.')],
        [mm('8:05'), T('The real cash is hidden in the durian crate.', 'Wang sebenar disorok dalam peti durian.')],
        [mm('8:20'), T('Mr. Raman opens the envelope and finds ghost money.', 'Encik Raman membuka sampul dan menemui wang hantu.')]
      ],
      essentialClues: ['altar_receipt', 'stall_cam', 'mei_notebook', 'zip_tag', 'cash_found', 'c_danial_joss'],
      misleading: [
        { item: 'red_cap', why: T("Uncle Chong's red cap is the SECOND red cap, the one that causes the mix-up.", 'Topi merah Pakcik Chong ialah topi merah KEDUA, yang menyebabkan kekeliruan.') },
        { item: 'c_rosnah_saw', why: T('Rosnah honestly named the wrong man because of the cap.', 'Rosnah jujur menyebut lelaki yang salah kerana topi itu.') },
        { item: 'rules_poster', why: T('The poster is about festival customs, not about this theft.', 'Poster tentang adat perayaan, bukan tentang kecurian ini.') },
        { item: 'c_raman_bag', why: T('Mr. Raman honestly believes his bag stayed with him.', 'Encik Raman jujur percaya begnya sentiasa bersamanya.') }
      ]
    },

    people: [
      { id: 'danial', name: 'Danial Aziz', age: 19, role: T("Treasurer's nephew, lorry helper", 'Anak saudara bendahari, pembantu lori'), rel: T('Helps Uncle Chong with durians', 'Membantu Pakcik Chong dengan durian'), color: '#d03a3a', suspect: true },
      { id: 'chong', name: 'Uncle Chong', age: 57, role: T('Durian seller', 'Penjual durian'), rel: T('Also wears a red cap', 'Juga memakai topi merah'), color: '#c0562b', suspect: true },
      { id: 'mei', name: 'Auntie Mei', age: 49, role: T('Dumpling and tea seller', 'Penjual ladu dan teh'), rel: T('Keeps a sales notebook', 'Menyimpan buku jualan'), color: '#33a3a3', suspect: true },
      { id: 'rosnah', name: 'Kak Rosnah', age: 45, role: T('Fruit seller', 'Penjual buah'), rel: T('Has a stall camera', 'Ada kamera gerai'), color: '#7a5cc0', suspect: true },
      { id: 'raman', name: 'Mr. Raman', age: 60, role: T('Temple treasurer', 'Bendahari tokong'), rel: T('Lost the money', 'Kehilangan wang'), color: '#8a9a5b', suspect: true }
    ],

    items: [
      { id: 'cash_ledger', type: 'document', icon: '📒', title: T('Temple donation ledger', 'Buku derma tokong'), where: T('Fruit Row table', 'Meja Barisan Buah'),
        desc: T(`The ledger of what went into the envelope at 7:00 pm. Add it up.`, `Buku catatan apa yang masuk ke dalam sampul pukul 7:00 mlm. Tambahkannya.`),
        puzzle: 'pz_cash', inspect: { kind: 'puzzle-doc',
          html: D('📒 <b>DONATIONS (7:00 pm)</b><br>Lantern fund: RM 1,200<br>Offering plates: RM 1,500<br>Food stalls: RM 900<br>Notes: all RM 50 and RM 100.', '📒 <b>DERMA (7:00 mlm)</b><br>Dana lampion: RM 1,200<br>Pinggan persembahan: RM 1,500<br>Gerai makanan: RM 900<br>Nota: semua RM 50 dan RM 100.'),
          fixedHtml: D('📒 Total = RM 1,200 + 1,500 + 900 = <b>RM 3,600</b> of real money went in. Now the envelope has ZERO real notes. ✔', '📒 Jumlah = RM 1,200 + 1,500 + 900 = <b>RM 3,600</b> wang sebenar masuk. Kini sampul ada SIFAR nota sebenar. ✔') } },
      { id: 'torn_envelope', type: 'physical', icon: '✉️', title: T('The envelope of "ghost money"', 'Sampul "wang hantu"'), where: T('Fruit Row table', 'Meja Barisan Buah'),
        desc: T(`The fat envelope. Inside: two bundles of yellow joss paper printed "BANK OF HELL — 10,000,000". The paper still smells of incense and has a stuck-on price sticker: RM 8.50.`, `Sampul tebal. Di dalam: dua ikat kertas sembahyang kuning bercetak "BANK NERAKA — 10,000,000". Kertas masih berbau kemenyan dan ada pelekat harga: RM 8.50.`),
        inspect: { kind: 'doc', html: D('✉️ <b>Envelope contents</b><br>2 bundles of joss paper<br>Sticker: <b>RM 8.50</b> each (altar tent price)<br><small>Hungry ghosts do not shop. Someone BOUGHT these.</small>', '✉️ <b>Isi sampul</b><br>2 ikat kertas sembahyang<br>Pelekat: <b>RM 8.50</b> setiap satu (harga khemah altar)<br><small>Hantu lapar tidak membeli-belah. Seseorang MEMBELI ini.</small>') } },
      { id: 'market_map', type: 'document', icon: '🗺️', title: T('Market map', 'Peta pasar'), where: T('Fruit Row wall', 'Dinding Barisan Buah'),
        desc: T(`A map of the market with a grid: letters across, numbers down.`, `Peta pasar dengan grid: huruf melintang, nombor menurun.`),
        puzzle: 'pz_map', inspect: { kind: 'puzzle-doc',
          html: D('🗺️ <b>MAP (grid)</b><br>Fruit Row = <b>A2</b><br>Back Lane = <b>B2</b><br>Altar tent = <b>C1</b><br>Food court = <b>C2</b><br>Lorry park = <b>D2</b><br><small>North is up. West is left. The market gate is in the west.</small>', '🗺️ <b>PETA (grid)</b><br>Barisan Buah = <b>A2</b><br>Lorong Belakang = <b>B2</b><br>Khemah altar = <b>C1</b><br>Medan makanan = <b>C2</b><br>Tempat letak lori = <b>D2</b><br><small>Utara di atas. Barat di kiri. Pintu pasar di barat.</small>'),
          fixedHtml: D('🗺️ From the altar (C1) the quickest hidden path to the lorry park (D2) runs south-east through the Back Lane... passing the envelope table at A2/B2 on the way. ✔', '🗺️ Dari altar (C1) laluan tersembunyi paling pantas ke tempat letak lori (D2) menyusur tenggara melalui Lorong Belakang... melintasi meja sampul di A2/B2. ✔') } },
      { id: 'rules_poster', type: 'document', icon: '🏮', title: T('Hungry Ghost month poster', 'Poster bulan Hantu Lapar'), where: T('Fruit Row wall', 'Dinding Barisan Buah'),
        desc: T(`A poster about customs during the seventh lunar month.`, `Poster tentang adat dalam bulan lunar ketujuh.`),
        inspect: { kind: 'doc', html: D('<b>HUNGRY GHOST MONTH</b><br>Families burn joss paper and leave food for wandering spirits.<br><small>Do not pick up money from the roadside. Stay kind and respectful.</small>', '<b>BULAN HANTU LAPAR</b><br>Keluarga membakar kertas sembahyang dan meninggalkan makanan untuk roh yang merayau.<br><small>Jangan ambil wang di tepi jalan. Kekal baik dan hormat.</small>') } },
      /* BACK LANE */
      { id: 'red_cap', type: 'physical', icon: '🧢', title: T('A red cap on a crate', 'Topi merah di atas peti'), where: T('Back Lane', 'Lorong Belakang'),
        desc: T(`A red cap with "CHONG DURIAN" printed in white. It smells of durian.`, `Topi merah dengan "CHONG DURIAN" bercetak putih. Ia berbau durian.`),
        inspect: { kind: 'doc', html: D('🧢 <b>Red cap — CHONG DURIAN</b><br><small>Uncle Chong wears one. So does everyone who works at his lorry. There are TWO red caps tonight.</small>', '🧢 <b>Topi merah — CHONG DURIAN</b><br><small>Pakcik Chong memakai satu. Begitu juga semua yang bekerja di lorinya. Ada DUA topi merah malam ini.</small>') } },
      { id: 'zip_tag', type: 'physical', icon: '🏷️', title: T('A durian-shaped zip tag', 'Tag zip berbentuk durian'), where: T('Back Lane, near the lorry path', 'Lorong Belakang, dekat laluan lori'),
        desc: T(`A small rubber zip-puller shaped like a durian with "D.A." scratched underneath.`, `Penarik zip getah kecil berbentuk durian dengan "D.A." tercalar di bawah.`),
        inspect: { kind: 'doc', html: D('🏷️ <b>Zip tag</b><br>Rubber durian · initials <b>D.A.</b><br><small>It matches the backpack in the camera photo. Uncle Chong has no backpack at all.</small>', '🏷️ <b>Tag zip</b><br>Durian getah · inisial <b>D.A.</b><br><small>Ia sepadan dengan beg galas dalam gambar kamera. Pakcik Chong tiada beg galas langsung.</small>') } },
      /* ALTAR TENT */
      { id: 'altar_receipt', type: 'document', icon: '🧾', title: T('Altar tent receipt', 'Resit khemah altar'), where: T('Altar tent table', 'Meja khemah altar'),
        desc: T(`A receipt from the stall that sells joss paper, copy kept by the seller.`, `Resit daripada gerai yang menjual kertas sembahyang, salinan disimpan penjual.`),
        puzzle: 'pz_change', inspect: { kind: 'puzzle-doc',
          html: D('🧾 <b>ALTAR TENT</b><br>7:40 pm — Joss money bundles × 2 @ RM 8.50<br>Paid: RM 20.00<br>Change: ____<br><small>Customer: "D. Aziz" (signed in the book)</small>', '🧾 <b>KHEMAH ALTAR</b><br>7:40 mlm — Ikat wang neraka × 2 @ RM 8.50<br>Dibayar: RM 20.00<br>Baki: ____<br><small>Pelanggan: "D. Aziz" (ditandatangani dalam buku)</small>'),
          fixedHtml: D('🧾 2 × RM 8.50 = RM 17.00. Change = 20.00 − 17.00 = <b>RM 3.00</b>. The two bundles in the envelope cost RM 17. ✔', '🧾 2 × RM 8.50 = RM 17.00. Baki = 20.00 − 17.00 = <b>RM 3.00</b>. Dua ikat dalam sampul berharga RM 17. ✔') } },
      { id: 'altar_book', type: 'document', icon: '📖', title: T('Altar visitors book', 'Buku pelawat altar'), where: T('Altar tent', 'Khemah altar'),
        desc: T(`Everyone who buys joss paper signs this book.`, `Semua yang membeli kertas sembahyang menandatangani buku ini.`),
        inspect: { kind: 'doc', html: D('<b>VISITORS BOOK</b><br>7:15 — Mrs. Tan<br>7:28 — Mr. Lee<br><b>7:40 — D. Aziz</b> (2 bundles)<br>7:55 — A. Kaur', '<b>BUKU PELAWAT</b><br>7:15 — Puan Tan<br>7:28 — Encik Lee<br><b>7:40 — D. Aziz</b> (2 ikat)<br>7:55 — A. Kaur') } },
      /* FOOD COURT */
      { id: 'mei_notebook', type: 'document', icon: '📔', title: T("Auntie Mei's sales notebook", 'Buku jualan Mak Cik Mei'), where: T('Food court counter', 'Kaunter medan makanan'),
        desc: T(`Mei writes down every sale with the time and a few words about the customer.`, `Mei menulis setiap jualan dengan masa dan beberapa perkataan tentang pelanggan.`),
        inspect: { kind: 'doc', html: D('<b>SALES NOTEBOOK</b><br>7:46 — 3 dumplings, old lady<br><b>7:48 — hot tea, young man, RED CAP, DURIAN BACKPACK</b><br>7:55 — 2 dumplings, Uncle Chong (red cap, NO backpack, he never left his stall)', '<b>BUKU JUALAN</b><br>7:46 — 3 ladu, nenek tua<br><b>7:48 — teh panas, lelaki muda, TOPI MERAH, BEG GALAS DURIAN</b><br>7:55 — 2 ladu, Pakcik Chong (topi merah, TANPA beg galas, dia tidak tinggalkan gerainya)') } },
      /* LORRY PARK */
      { id: 'lorry_log', type: 'document', icon: '🚚', title: T('Lorry key log', 'Log kunci lori'), where: T('Lorry park noticeboard', 'Papan notis tempat letak lori'),
        desc: T(`Who took which lorry key, and when.`, `Siapa ambil kunci lori mana, dan bila.`),
        inspect: { kind: 'doc', html: D('<b>LORRY KEYS</b><br>Lorry 3 (durian): out 6:10 pm — <b>D. Aziz</b><br>Returned: 8:08 pm — <b>D. Aziz</b><br><small>He says he was "at the lorry all evening". The key was out the whole time, but that does not prove he stayed beside it.</small>', '<b>KUNCI LORI</b><br>Lori 3 (durian): keluar 6:10 mlm — <b>D. Aziz</b><br>Dipulangkan: 8:08 mlm — <b>D. Aziz</b><br><small>Dia kata dia "di lori sepanjang malam". Kunci keluar sepanjang masa, tetapi itu tidak membuktikan dia tinggal di sebelahnya.</small>') } },
      { id: 'durian_crate', type: 'physical', icon: '📦', title: T('Locked durian crate', 'Peti durian berkunci'), where: T('Back of Lorry 3', 'Belakang Lori 3'),
        desc: T(`A wooden crate with a 3-digit lock. A note says: "Chong's rule: keep counting!"`, `Peti kayu dengan kunci 3 digit. Nota berkata: "Peraturan Chong: teruskan mengira!"`),
        puzzle: 'pz_crate', inspect: { kind: 'puzzle-doc',
          html: D('📦 <b>Note on the lid</b><br>"Keep counting!<br>0, 3, 6, ?<br>9, 7, 5, ?<br>1, 2, 4, ?"', '📦 <b>Nota pada penutup</b><br>"Teruskan mengira!<br>0, 3, 6, ?<br>9, 7, 5, ?<br>1, 2, 4, ?"'),
          fixedHtml: D('📦 Click! Under a layer of durian husks: bundles of real notes! ✔', '📦 Klik! Di bawah lapisan kulit durian: ikat nota sebenar! ✔') } },
      { id: 'cash_found', type: 'physical', icon: '💵', title: T('The real cash, RM 3,600', 'Wang tunai sebenar, RM 3,600'), where: T('Inside the durian crate', 'Dalam peti durian'),
        desc: T(`Neat bundles of RM 50 and RM 100 notes with the temple's rubber band. A motorbike repair bill is stuffed under them.`, `Ikat nota RM 50 dan RM 100 dengan gelang getah tokong. Bil baikan motosikal terselit di bawahnya.`),
        inspect: { kind: 'doc', html: D('💵 <b>RM 3,600</b> with the temple\'s blue rubber band.<br>📄 Bill: <b>Motorbike repair RM 3,500</b>, due Friday, name <b>D. Aziz</b>.', '💵 <b>RM 3,600</b> dengan gelang getah biru tokong.<br>📄 Bil: <b>Baikan motosikal RM 3,500</b>, tarikh akhir Jumaat, nama <b>D. Aziz</b>.') } },
      { id: 'stall_cam', type: 'photo', icon: '📸', photo: true, title: T('Fruit stall camera, 7:52 pm', 'Kamera gerai buah, 7:52 mlm'), art: 'stall_cam', stampT: mm('7:52'), stampLabel: T('Stall camera (correct time)', 'Kamera gerai (masa betul)'),
        desc: T(`Kak Rosnah's camera that watches her fruit stall and the envelope table.`, `Kamera Kak Rosnah yang mengawasi gerai buah dan meja sampul.`),
        zoomNotice: T(`You zoom in: a young man in a red cap and a backpack with a durian-shaped zip tag stands at the envelope table. His hand is in the envelope. It is 7:52 pm. Uncle Chong (red cap, no backpack) is serving customers at his stall in the background.`, `Anda zum: lelaki muda bertopi merah dan beg galas dengan tag zip berbentuk durian berdiri di meja sampul. Tangannya dalam sampul. Pukul 7:52 mlm. Pakcik Chong (topi merah, tanpa beg galas) melayan pelanggan di gerainya di latar belakang.`),
        timeline: T('A young man with a red cap and a durian backpack opens the envelope at 7:52 pm.', 'Lelaki muda bertopi merah dan beg galas durian membuka sampul pukul 7:52 mlm.') },
      { id: 'inf_cash', kind: 'inference', type: 'deduction', icon: '💡', title: T('RM 3,600 of real cash went in — and none came out', 'RM 3,600 wang tunai sebenar masuk — dan tiada keluar'), desc: T(`The ledger adds up to RM 3,600. The envelope now holds only paper. The money did not "turn into" anything; somebody took it.`, `Buku derma berjumlah RM 3,600. Sampul kini hanya kertas. Wang tidak "bertukar"; seseorang mengambilnya.`) },
      { id: 'inf_change', kind: 'inference', type: 'deduction', icon: '💡', title: T('The ghost money was BOUGHT at 7:40 by D. Aziz', 'Wang hantu DIBELI pukul 7:40 oleh D. Aziz'), desc: T(`Two bundles at RM 8.50 = RM 17, change RM 3, signed "D. Aziz" at 7:40. The sticker on the envelope paper matches the altar price.`, `Dua ikat RM 8.50 = RM 17, baki RM 3, ditandatangani "D. Aziz" pukul 7:40. Pelekat pada kertas sampul sepadan dengan harga altar.`) },
      { id: 'inf_map', kind: 'inference', type: 'deduction', icon: '💡', title: T('The path altar → envelope table → Back Lane → lorry fits one man\'s route', 'Laluan altar → meja sampul → Lorong Belakang → lori sesuai dengan laluan seorang lelaki'), desc: T(`Altar C1 → table A2 → Back Lane B2 → lorry park D2. The man with the bag walked exactly that way, away from Chong's stall.`, `Altar C1 → meja A2 → Lorong Belakang B2 → tempat letak lori D2. Lelaki dengan beg berjalan tepat begitu, menjauhi gerai Chong.`) },
      { id: 'inf_crate', kind: 'inference', type: 'deduction', icon: '💡', title: T('MOTIVE: a RM 3,500 repair bill due Friday', 'MOTIF: bil baikan RM 3,500 tarikh akhir Jumaat'), desc: T(`The real cash and the bill were in Danial's own crate. He needed almost the whole amount.`, `Wang sebenar dan bil ada dalam peti Danial sendiri. Dia memerlukan hampir keseluruhan jumlahnya.`) },

      { id: 'c_danial_lorry', kind: 'claim', person: 'danial', t: mm('7:50'), type: 'statement', icon: '💬', title: T('Danial: "I was at the lorry all evening."', 'Danial: "Saya di lori sepanjang malam."'), desc: T('He says he never left the lorry park.', 'Dia kata dia tidak tinggalkan tempat letak lori.') },
      { id: 'c_danial_joss', kind: 'claim', person: 'danial', t: 0, type: 'statement', icon: '💬', title: T('Danial: "I never bought any joss money."', 'Danial: "Saya tidak pernah beli wang neraka."'), desc: T('He says he does not even go to the altar.', 'Dia kata dia tidak pergi altar pun.') },
      { id: 'c_chong_cap', kind: 'claim', person: 'chong', t: mm('7:50'), type: 'statement', icon: '💬', title: T('Chong: "I wear a red cap but I never left my stall."', 'Chong: "Saya pakai topi merah tetapi tidak tinggalkan gerai."'), desc: T('He says he stayed at his stall.', 'Dia kata dia kekal di gerainya.') },
      { id: 'c_mei_saw', kind: 'claim', person: 'mei', t: mm('7:48'), type: 'statement', icon: '💬', title: T('Mei: "A young man in a red cap bought tea at 7:48."', 'Mei: "Lelaki muda bertopi merah membeli teh pukul 7:48."'), desc: T('She wrote it in her notebook.', 'Dia menulisnya dalam bukunya.') },
      { id: 'c_rosnah_saw', kind: 'claim', person: 'rosnah', t: mm('7:52'), type: 'statement', icon: '💬', title: T('Rosnah: "A man in a red cap was at the table. It must be Chong!"', 'Rosnah: "Lelaki bertopi merah di meja. Mesti Chong!"'), desc: T('She guessed from the cap.', 'Dia meneka daripada topi.') },
      { id: 'c_raman_bag', kind: 'claim', person: 'raman', t: 0, type: 'statement', icon: '💬', title: T('Raman: "The money was in my envelope until I opened it!"', 'Raman: "Wang dalam sampul saya sehingga saya membukanya!"'), desc: T('He did not check it after 7:00.', 'Dia tidak menyemak selepas 7:00.') }
    ],

    pairs: [
      { a: 'c_danial_joss', b: 'altar_receipt', type: 'contradiction', person: 'danial', requires: ['change_solved'], text: T('He says he never bought joss money. A receipt shows 2 bundles for D. Aziz at 7:40.', 'Dia kata tidak pernah beli wang neraka. Resit menunjukkan 2 ikat untuk D. Aziz pukul 7:40.'), explain: T('He signed the book too.', 'Dia juga menandatangani buku.') },
      { a: 'c_danial_joss', b: 'altar_book', type: 'contradiction', person: 'danial', text: T('The altar book has "7:40 — D. Aziz (2 bundles)".', 'Buku altar ada "7:40 — D. Aziz (2 ikat)".'), explain: T('A signed book beats a claim.', 'Buku bertandatangan mengalahkan dakwaan.') },
      { a: 'c_danial_lorry', b: 'stall_cam', type: 'contradiction', person: 'danial', text: T('The 7:52 photo shows the red-cap man with a durian backpack at the envelope table, far from the lorry.', 'Gambar 7:52 menunjukkan lelaki topi merah dengan beg galas durian di meja sampul, jauh dari lori.'), explain: T('A time-stamped photo beats a claim.', 'Gambar bercap masa mengalahkan dakwaan.') },
      { a: 'c_danial_lorry', b: 'mei_notebook', type: 'contradiction', person: 'danial', text: T('Mei sold tea at 7:48 to a young man in a red cap with a durian backpack.', 'Mei menjual teh pukul 7:48 kepada lelaki muda bertopi merah dengan beg galas durian.'), explain: T('Danial\'s lorry is at the other end of the market.', 'Lori Danial di hujung lain pasar.') },
      { a: 'c_rosnah_saw', b: 'stall_cam', type: 'contradiction', person: 'rosnah', text: T('Rosnah says it must be Chong. The photo shows the man carries a backpack with a durian tag; Chong carries none and is at his stall.', 'Rosnah kata mesti Chong. Gambar menunjukkan lelaki membawa beg galas bertag durian; Chong tidak dan berada di gerainya.'), explain: T('An honest mistake caused by the red cap.', 'Kesilapan jujur kerana topi merah.') },
      { a: 'c_chong_cap', b: 'mei_notebook', type: 'support', person: 'chong', text: T('Mei\'s notebook says Chong bought dumplings at 7:55 and never left his stall.', 'Buku Mei kata Chong membeli ladu pukul 7:55 dan tidak tinggalkan gerainya.') },
      { a: 'c_mei_saw', b: 'mei_notebook', type: 'support', person: 'mei', text: T('Her notebook shows the same 7:48 sale.', 'Bukunya menunjukkan jualan 7:48 yang sama.') },
      { a: 'c_raman_bag', b: 'cash_ledger', type: 'support', person: 'raman', requires: ['cash_solved'], text: T('The ledger shows RM 3,600 was put in at 7:00 as he says.', 'Buku derma menunjukkan RM 3,600 dimasukkan pukul 7:00 seperti katanya.') }
    ],

    puzzles: {
      pz_cash: { subject: 'math', title: T('Count the donations', 'Kira derma'), grants: { flags: ['cash_solved'], items: ['inf_cash'] }, tokens: 0,
        intro: T('Add the three donation amounts.', 'Tambah tiga jumlah derma.'),
        steps: [
          { type: 'number', q: T('1,200 + 1,500 + 900 = ?', '1,200 + 1,500 + 900 = ?'), answer: 3600, options: [3000, 3400, 3600, 3900], unit: T('RM', 'RM'), hints: [T('1,200 + 1,500 = 2,700.', '1,200 + 1,500 = 2,700.'), T('2,700 + 900 = ?', '2,700 + 900 = ?')] },
          { type: 'number', q: T('If all notes were RM 100, how many notes make RM 3,600?', 'Jika semua nota RM 100, berapa nota membentuk RM 3,600?'), answer: 36, options: [3, 16, 36, 360], unit: T('notes', 'nota'), hints: [T('3,600 ÷ 100 = ?', '3,600 ÷ 100 = ?')] },
          { type: 'choice', q: T('The envelope now holds ZERO real notes. What does that mean?', 'Sampul kini ada SIFAR nota sebenar. Apa maksudnya?'), options: [T('Someone took the real money', 'Seseorang mengambil wang sebenar'), T('Ghosts ate it', 'Hantu memakannya'), T('It was never there', 'Ia tidak pernah ada')], answer: 0, hints: [T('The ledger proves RM 3,600 went in.', 'Buku derma membuktikan RM 3,600 masuk.')] }
        ],
        after: T('RM 3,600 went in, none came out. Money does not turn into paper by itself!', 'RM 3,600 masuk, tiada keluar. Wang tidak bertukar menjadi kertas sendiri!') },
      pz_change: { subject: 'math', title: T('Work out the change', 'Kira baki'), grants: { flags: ['change_solved'], items: ['inf_change'] }, tokens: 0,
        intro: T('Check the receipt: 2 bundles at RM 8.50, paid with RM 20.', 'Semak resit: 2 ikat RM 8.50, dibayar RM 20.'),
        steps: [
          { type: 'number', q: T('2 × RM 8.50 = RM ?', '2 × RM 8.50 = RM ?'), answer: 17, options: [15, 16, 17, 18], unit: T('RM', 'RM'), hints: [T('8.50 + 8.50 = ?', '8.50 + 8.50 = ?')] },
          { type: 'number', q: T('He paid RM 20. What is the change? (20 − 17)', 'Dia bayar RM 20. Berapa bakinya? (20 − 17)'), answer: 3, options: [2, 3, 4, 5], unit: T('RM', 'RM'), hints: [T('20 − 17 = ?', '20 − 17 = ?')] },
          { type: 'choice', q: T('The envelope paper has a RM 8.50 sticker. Where was it bought?', 'Kertas sampul ada pelekat RM 8.50. Di mana ia dibeli?'), options: [T('At the altar tent', 'Di khemah altar'), T('From a ghost', 'Daripada hantu'), T('From Mei', 'Daripada Mei')], answer: 0, hints: [T('The altar receipt says RM 8.50 per bundle.', 'Resit altar kata RM 8.50 seikat.')] }
        ],
        after: T('The joss money in the envelope was bought by D. Aziz at 7:40 pm!', 'Wang neraka dalam sampul dibeli oleh D. Aziz pukul 7:40 mlm!') },
      pz_map: { subject: 'geography', title: T('Read the market map', 'Baca peta pasar'), grants: { flags: ['map_solved'], items: ['inf_map'] }, tokens: 1,
        intro: T('Use the grid and compass: letters across, numbers down.', 'Guna grid dan kompas: huruf melintang, nombor menurun.'),
        steps: [
          { type: 'choice', q: T('Which square is the altar tent?', 'Petak mana khemah altar?'), options: ['A2', 'B2', 'C1', 'D2'], answer: 'C1', hints: [T('Read the list on the map.', 'Baca senarai pada peta.')] },
          { type: 'choice', q: T('The lorry park is D2 and the Fruit Row is A2. Which direction is the lorry park from the Fruit Row?', 'Tempat letak lori D2 dan Barisan Buah A2. Arah mana tempat letak lori dari Barisan Buah?'), options: [T('East', 'Timur'), T('West', 'Barat'), T('North', 'Utara'), T('South', 'Selatan')], answer: 0, hints: [T('Letters run left (west) to right (east): A → D is going east.', 'Huruf dari kiri (barat) ke kanan (timur): A → D ke timur.')] },
          { type: 'choice', q: T('The man walked from the altar (C1) to the table (A2), then to the lorry (D2). Is he moving WEST or EAST at the end?', 'Lelaki berjalan dari altar (C1) ke meja (A2), kemudian ke lori (D2). Dia bergerak ke BARAT atau TIMUR pada akhirnya?'), options: [T('East, towards the lorry park', 'Timur, ke tempat letak lori'), T('West, towards the gate', 'Barat, ke pintu pasar')], answer: 0, hints: [T('A2 → D2: A to D is east.', 'A2 → D2: A ke D ke timur.')] }
        ],
        after: T('Altar → table → Back Lane → lorry: a clear path away from Chong\'s stall. You earn 1 hint token!', 'Altar → meja → Lorong Belakang → lori: laluan jelas menjauhi gerai Chong. Anda dapat 1 token petunjuk!') },
      pz_crate: { subject: 'thinking', title: T('Open the durian crate', 'Buka peti durian'), grants: { flags: ['crate_open'], items: ['cash_found', 'inf_crate'] }, tokens: 0,
        intro: T('Find the next number in each pattern, then enter the 3-digit code.', 'Cari nombor seterusnya dalam setiap corak, kemudian masukkan kod 3 digit.'),
        steps: [{ type: 'code', q: T('Find the next number in each pattern.', 'Cari nombor seterusnya dalam setiap corak.'), patterns: ['0, 3, 6, ?', '9, 7, 5, ?', '1, 2, 4, ?'], answer: '938',
          hints: [T('Pattern 1 adds 3. Pattern 2 subtracts 2.', 'Corak 1 tambah 3. Corak 2 tolak 2.'), T('Pattern 3 doubles each time.', 'Corak 3 digandakan setiap kali.'), T('The code is 9, 3, 8.', 'Kodnya ialah 9, 3, 8.')] }],
        after: T('Click! The real cash and a repair bill are inside!', 'Klik! Wang sebenar dan bil baikan ada di dalam!') }
    },

    questions: [
      { id: 'q_how', title: T('1. What really happened to the RM 3,600?', '1. Apa sebenarnya berlaku kepada RM 3,600?'),
        options: [{ id: 'ghosts', text: T('The hungry ghosts turned it into paper.', 'Hantu lapar menukarnya jadi kertas.') }, { id: 'lost', text: T('Mr. Raman lost it.', 'Encik Raman kehilangannya.') }, { id: 'cash_swapped', text: T('Someone swapped the cash for bought joss paper.', 'Seseorang menukar wang tunai dengan kertas sembahyang yang dibeli.'), correct: true }, { id: 'robbed', text: T('A robber took the whole envelope.', 'Perompak mengambil seluruh sampul.') }],
        needs: [['torn_envelope', 'cash_ledger'], ['altar_receipt', 'inf_change']], needsFlags: ['change_solved'], hints: [T('The paper has a price sticker. Who bought it?', 'Kertas ada pelekat harga. Siapa membelinya?')] },
      { id: 'q_route', title: T('2. Which way did the man walk away?', '2. Ke arah mana lelaki itu berjalan pergi?'),
        options: [{ id: 'gate', text: T('West, to the market gate', 'Barat, ke pintu pasar') }, { id: 'lorry', text: T('East, along the Back Lane to the lorry park', 'Timur, melalui Lorong Belakang ke tempat letak lori'), correct: true }, { id: 'altar', text: T('North, to the temple', 'Utara, ke tokong') }, { id: 'nowhere', text: T('He stayed at the table', 'Dia kekal di meja') }],
        needs: [['market_map', 'inf_map'], ['zip_tag']], needsFlags: ['map_solved'], hints: [T('Read the grid: A to D is east.', 'Baca grid: A ke D ialah timur.')] },
      { id: 'q_when', title: T('3. When was the cash swapped?', '3. Bila wang tunai ditukar?'),
        options: [{ id: 'seven', text: T('At 7:00 pm', 'Pukul 7:00 mlm') }, { id: 'sevenfifty', text: T('Around 7:50 pm', 'Sekitar 7:50 mlm'), correct: true }, { id: 'eight20', text: T('At 8:20 pm', 'Pukul 8:20 mlm') }, { id: 'nine', text: T('After 9:00 pm', 'Selepas 9:00 mlm') }],
        needs: [['stall_cam'], ['mei_notebook', 'altar_book']], needsFlags: [], hints: [T('The camera photo shows the man at the envelope.', 'Gambar kamera menunjukkan lelaki di sampul.')] },
      { id: 'q_who', title: T('4. Who swapped the money?', '4. Siapa menukar wang itu?'),
        options: [{ id: 'danial', text: T('Danial Aziz', 'Danial Aziz'), correct: true }, { id: 'chong', text: T('Uncle Chong', 'Pakcik Chong') }, { id: 'mei', text: T('Auntie Mei', 'Mak Cik Mei') }, { id: 'rosnah', text: T('Kak Rosnah', 'Kak Rosnah') }, { id: 'raman', text: T('Mr. Raman', 'Encik Raman') }],
        needs: [['stall_cam'], ['altar_receipt', 'altar_book'], ['cash_found', 'zip_tag']], needsFlags: [], hints: [T('Which red-cap man has the backpack and the durian tag?', 'Lelaki topi merah mana ada beg galas dan tag durian?')] },
      { id: 'q_why', title: T('5. WHY did he do it?', '5. KENAPA dia melakukannya?'),
        options: [{ id: 'joke', text: T('A joke for Hungry Ghost month.', 'Gurauan untuk bulan Hantu Lapar.') }, { id: 'bill', text: T('He needed RM 3,500 for a motorbike repair bill due Friday.', 'Dia perlukan RM 3,500 untuk bil baikan motosikal tarikh akhir Jumaat.'), correct: true }, { id: 'ghost', text: T('A ghost made him.', 'Hantu memaksanya.') }, { id: 'donate', text: T('To give it to another temple.', 'Untuk diberi kepada tokong lain.') }],
        needs: [['cash_found', 'inf_crate']], needsFlags: ['crate_open'], hints: [T('Open the durian crate and read what is under the cash.', 'Buka peti durian dan baca apa di bawah wang.')] }
    ],

    conclusion: {
      who: { correct: 'danial' }, what: { questionId: 'q_how' }, when: { questionId: 'q_when' },
      where: [{ id: 'crate', text: T("In the locked durian crate in Chong's lorry", 'Dalam peti durian berkunci di lori Chong'), correct: true }, { id: 'altar', text: T('Under the altar', 'Di bawah altar') }, { id: 'burnt', text: T('Burnt as an offering', 'Dibakar sebagai persembahan') }, { id: 'temple', text: T('Back in the temple', 'Kembali di tokong') }, { id: 'unknown', text: T('I do not know yet', 'Saya belum tahu') }],
      whereQ: T('WHERE is the real cash now?', 'DI MANA wang tunai sebenar sekarang?'),
      maxEvidence: 6,
      coreGroups: [
        { id: 'g_ledger', label: T('Real money went in, paper came out', 'Wang sebenar masuk, kertas keluar'), items: ['cash_ledger', 'inf_cash', 'torn_envelope'] },
        { id: 'g_buy', label: T('He BOUGHT the ghost money', 'Dia MEMBELI wang hantu'), items: ['altar_receipt', 'inf_change', 'altar_book'] },
        { id: 'g_cam', label: T('Seen at the table with the backpack', 'Dilihat di meja dengan beg galas'), items: ['stall_cam', 'mei_notebook', 'zip_tag'] },
        { id: 'g_route', label: T('His route on the map', 'Laluannya pada peta'), items: ['market_map', 'inf_map'] },
        { id: 'g_cash', label: T('The cash and the bill', 'Wang tunai dan bil'), items: ['cash_found', 'inf_crate'] },
        { id: 'g_lie', label: T("Danial's lies", 'Pembohongan Danial'), items: ['c_danial_lorry', 'c_danial_joss'] }
      ],
      strongCoverage: 4, secondary: ['red_cap', 'lorry_log', 'rules_poster', 'c_chong_cap', 'c_mei_saw'], secondaryNeeded: 2,
      lieFlags: ['c_danial_lorry', 'c_danial_joss', 'c_rosnah_saw']
    },

    endings: kit.endings({
      secret: { title: T('The Honest Lanterns', 'Lampion Yang Jujur'), when: (r) => r.flags.map_solved && r.flags.cash_solved,
        text: T(`You solve the case AND you clear Uncle Chong's name in front of the whole market. Danial returns every ringgit and promises to work off his debt at the temple. The lanterns glow brighter, the drums play softly, and Uncle Chong gives a free durian to every witness who gave the wrong name, with a smile. "A red cap does not make a thief," says Auntie Mei.`,
          `Anda menyelesaikan kes ini DAN membersihkan nama Pakcik Chong di hadapan seluruh pasar. Danial memulangkan setiap ringgit dan berjanji bekerja membayar hutangnya di tokong. Lampion bersinar lebih terang, gendang berbunyi perlahan, dan Pakcik Chong memberi durian percuma kepada setiap saksi yang tersalah sebut nama, dengan senyuman. "Topi merah tidak menjadikan seseorang pencuri," kata Mak Cik Mei.`) },
      perfect: { title: T('Case Closed!', 'Kes Selesai!'),
        text: T(`Excellent! You proved Danial bought the joss money, swapped it for the cash at 7:50 and hid the real RM 3,600 in the durian crate. The cash goes back to the temple. The "ghost money" was only paper, and nobody blames the hungry ghosts any more.`,
          `Hebat! Anda membuktikan Danial membeli wang neraka, menukarnya dengan wang tunai pukul 7:50 dan menyorokkan RM 3,600 sebenar dalam peti durian. Wang dikembalikan ke tokong. "Wang hantu" hanyalah kertas, dan tiada siapa menyalahkan hantu lapar lagi.`) },
      missed: { title: T('Solved — but something was missed', 'Selesai — tetapi ada yang terlepas'),
        text: T(`Right answer, strong proof! But you missed side clues: the red cap, the lorry key log or the market poster. Uncle Chong's name is not fully cleared, and he still feels ashamed.`,
          `Jawapan betul, bukti kukuh! Tetapi anda terlepas petunjuk sampingan: topi merah, log kunci lori atau poster pasar. Nama Pakcik Chong tidak dibersihkan sepenuhnya, dan dia masih berasa malu.`) },
      weak: { text: T(`You named the right person, but the proof is weak. Check the receipt, the camera photo and the durian crate. Hurry!`, `Anda menyebut orang yang betul, tetapi bukti lemah. Semak resit, gambar kamera dan peti durian. Cepat!`) },
      wrong: { text: T(`Oh no — that was not right. Remember: two men wore red caps. Which one carried the durian backpack and bought the joss money?`, `Alamak — itu tidak betul. Ingat: dua lelaki memakai topi merah. Yang mana membawa beg galas durian dan membeli wang neraka?`) }
    }),
    wrongWho: {
      chong: T('Uncle Chong also wears a red cap, but Mei\'s notebook says he never left his stall and has no backpack.', 'Pakcik Chong juga memakai topi merah, tetapi buku Mei kata dia tidak tinggalkan gerainya dan tiada beg galas.'),
      mei: T('Auntie Mei kept an honest notebook that helped to solve the case.', 'Mak Cik Mei menyimpan buku jujur yang membantu menyelesaikan kes.'),
      rosnah: T('Kak Rosnah\'s camera caught the real thief. She only guessed wrongly from the cap.', 'Kamera Kak Rosnah menangkap pencuri sebenar. Dia hanya tersalah teka daripada topi.'),
      raman: T('Mr. Raman is the victim. He kept the ledger and trusted the wrong person.', 'Encik Raman ialah mangsa. Dia menyimpan buku derma dan mempercayai orang yang salah.')
    },

    dialogue: {
      generic: T("I don't know anything about that.", 'Saya tidak tahu apa-apa tentang itu.'),
      danial: {
        greeting: T(`Terrible, isn't it? Ghost money! My uncle is so upset. I only help at the durian lorry. I wish I could help more.`, `Dahsyat, kan? Wang hantu! Pak cik saya sangat sedih. Saya cuma membantu di lori durian. Saya harap boleh bantu lebih.`),
        topics: [
          { id: 'lorry', label: T('Where were you at 7:50?', 'Di mana anda pukul 7:50?'), lines: [T('At the lorry, the whole evening. Ask anyone!', 'Di lori, sepanjang malam. Tanya sesiapa!')], claims: ['c_danial_lorry'] },
          { id: 'joss', label: T('Have you bought joss paper today?', 'Adakah anda membeli kertas sembahyang hari ini?'), lines: [T('Joss money? No! I do not even go to the altar tent.', 'Wang neraka? Tidak! Saya tidak pergi khemah altar pun.')], claims: ['c_danial_joss'] },
          { id: 'cap', label: T('Do you wear a red cap?', 'Adakah anda memakai topi merah?'), lines: [T('Everyone at the lorry has one. It is the uniform.', 'Semua di lori ada satu. Itu pakaian seragam.')] },
          { id: 'uncle', label: T('How close are you to your uncle?', 'Seberapa rapat anda dengan pak cik?'), lines: [T('Very. He is... kind. He trusts me with everything.', 'Sangat. Dia... baik. Dia percaya saya dengan segalanya.')] }
        ],
        present: {
          altar_receipt: { requiresFlag: 'change_solved', lines: [T('...Anybody could use my name. It is a common name!', '...Sesiapa boleh guna nama saya. Ia nama biasa!')], lockedLines: [T('A receipt? I cannot read it from here. (Work out the change first!)', 'Resit? Saya tidak boleh baca dari sini. (Kira baki dahulu!)')] },
          altar_book: { lines: [T('...That handwriting could be anyone.', '...Tulisan itu boleh sesiapa.')] },
          stall_cam: { lines: [T('That is Chong! Or... any red cap! You cannot see my face.', 'Itu Chong! Atau... mana-mana topi merah! Awak tidak nampak muka saya.')] },
          mei_notebook: { lines: [T('...Auntie Mei must have mixed me up with someone.', '...Mak Cik Mei pasti tersalah saya dengan orang lain.')] },
          zip_tag: { lines: [T('...That is MY zip tag. I lost it ages ago... earlier... today.', '...Itu tag zip SAYA. Saya hilang lama dulu... awal... hari ini.')] },
          cash_found: { lines: [T('...Uncle... I am sorry. The bill was due Friday and I panicked. I was going to pay it back.', '...Pak cik... saya minta maaf. Bil tarikh akhir Jumaat dan saya panik. Saya akan bayar balik.')] }
        }
      },
      chong: {
        greeting: T(`Chong, durian king of Taman Bunga! Yes, I wear a red cap. No, I did not take the money. Do I look like a thief?`, `Chong, raja durian Taman Bunga! Ya, saya pakai topi merah. Tidak, saya tidak ambil wang itu. Nampak macam pencuri?`),
        topics: [
          { id: 'stall', label: T('Did you leave your stall?', 'Adakah anda tinggalkan gerai?'), lines: [T('Never! A durian stall never sleeps. Ask the customers!', 'Tidak pernah! Gerai durian tidak pernah tidur. Tanya pelanggan!')], claims: ['c_chong_cap'] },
          { id: 'boy', label: T('Tell me about Danial.', 'Ceritakan tentang Danial.'), lines: [T('Good boy, works hard. Lately he looks worried about money. A bike problem, he says.', 'Budak baik, rajin. Kebelakangan ini dia kelihatan risau tentang wang. Masalah motosikal, katanya.')] },
          { id: 'crate', label: T('What is in the durian crates?', 'Apa dalam peti durian?'), lines: [T('Durians! And husks. The back crate is locked with my counting rule.', 'Durian! Dan kulit. Peti belakang dikunci dengan peraturan mengira saya.')] }
        ],
        present: { red_cap: { lines: [T('My cap! Someone took it off the crate. I wear a spare tonight.', 'Topi saya! Seseorang mengambilnya dari peti. Saya pakai yang ganti malam ini.')] }, stall_cam: { lines: [T('That boy has a backpack... I have no backpack. That is not me!', 'Budak itu ada beg galas... saya tiada beg galas. Itu bukan saya!')] } }
      },
      mei: {
        greeting: T(`Mei's Dumplings. I write every sale in my notebook, with the time. Habit from my mother.`, `Ladu Mei. Saya tulis setiap jualan dalam buku, dengan masa. Tabiat daripada ibu saya.`),
        topics: [
          { id: 'tea', label: T('Who bought tea at 7:48?', 'Siapa beli teh pukul 7:48?'), lines: [T('A young man in a red cap with a backpack covered in durian stickers. He looked in a hurry.', 'Lelaki muda bertopi merah dengan beg galas penuh pelekat durian. Dia nampak tergesa-gesa.')], claims: ['c_mei_saw'] },
          { id: 'chong', label: T('And Uncle Chong?', 'Dan Pakcik Chong?'), lines: [T('He bought two dumplings at 7:55, red cap, no backpack. He never left his stall.', 'Dia beli dua ladu pukul 7:55, topi merah, tiada beg galas. Dia tidak tinggalkan gerainya.')] },
          { id: 'ghost', label: T('Do you believe in hungry ghosts?', 'Adakah anda percaya hantu lapar?'), lines: [T('I respect them and I leave food out. But ghosts do not buy price-stickered paper.', 'Saya hormati mereka dan meninggalkan makanan. Tetapi hantu tidak membeli kertas berpelekat harga.')] }
        ],
        present: { mei_notebook: { lines: [T('Yes, that is my handwriting. Write everything down, always.', 'Ya, itu tulisan saya. Tulis semuanya, sentiasa.')] }, torn_envelope: { lines: [T('That sticker! It is from the altar tent: RM 8.50.', 'Pelekat itu! Dari khemah altar: RM 8.50.')] } }
      },
      rosnah: {
        greeting: T(`Kak Rosnah, fruit seller. I have a small camera because of fruit thieves. Tonight it saw something bigger.`, `Kak Rosnah, penjual buah. Saya ada kamera kecil kerana pencuri buah. Malam ini ia nampak sesuatu yang lebih besar.`),
        topics: [
          { id: 'photo', label: T('Can I see your camera photo?', 'Boleh saya lihat gambar kamera anda?'), gives: ['stall_cam'], lines: [T('Here: 7:52 pm. The clock is correct. A man in a red cap at the envelope table. I thought it was Chong.', 'Ini: 7:52 mlm. Jam betul. Lelaki bertopi merah di meja sampul. Saya sangka Chong.')], claims: ['c_rosnah_saw'] },
          { id: 'table', label: T('Who guards the envelope table?', 'Siapa menjaga meja sampul?'), lines: [T('Nobody, between 7:30 and 8:20. Mr. Raman went to pray. A terrible mistake.', 'Tiada siapa, antara 7:30 dan 8:20. Encik Raman pergi bersembahyang. Kesilapan besar.')] },
          { id: 'cap', label: T('Why did you think it was Chong?', 'Kenapa anda sangka Chong?'), lines: [T('The red cap! Everybody knows the red cap. But look closer: he has a backpack.', 'Topi merah! Semua orang kenal topi merah. Tetapi lihat dekat: dia ada beg galas.')] }
        ],
        present: { stall_cam: { lines: [T('Yes. Zoom in: the backpack has a little durian on the zip.', 'Ya. Zum: beg galas itu ada durian kecil pada zip.')] }, zip_tag: { lines: [T('That little durian! That is the tag on the backpack in my photo!', 'Durian kecil itu! Itulah tag pada beg galas dalam gambar saya!')] } }
      },
      raman: {
        greeting: T(`I have been temple treasurer for twenty years. Twenty years! And now... paper money. The hungry ghosts are angry.`, `Saya bendahari tokong selama dua puluh tahun. Dua puluh tahun! Dan kini... wang kertas. Hantu lapar marah.`),
        topics: [
          { id: 'bag', label: T('Where was the envelope?', 'Di mana sampul itu?'), lines: [T('On the table, always on the table. I went to pray for a short while. It never left my sight... mostly.', 'Di atas meja, sentiasa di atas meja. Saya pergi bersembahyang sebentar. Ia tidak pernah hilang daripada penglihatan saya... kebanyakannya.')], claims: ['c_raman_bag'] },
          { id: 'amount', label: T('How much was it?', 'Berapa jumlahnya?'), lines: [T('RM 3,600. Three donations: lanterns, plates and food stalls. All real notes.', 'RM 3,600. Tiga derma: lampion, pinggan dan gerai makanan. Semua nota sebenar.')] },
          { id: 'nephew', label: T('Who knew about the money?', 'Siapa tahu tentang wang itu?'), lines: [T('Everyone on this row. And my nephew Danial, he helps Chong. He is a good boy.', 'Semua orang di barisan ini. Dan anak saudara saya Danial, dia bantu Chong. Dia budak baik.')] }
        ],
        present: { cash_found: { lines: [T('...Danial? My own nephew? ...Oh. Thank the ancestors it is found.', '...Danial? Anak saudara saya sendiri? ...Oh. Syukur kepada nenek moyang ia ditemui.')] }, altar_receipt: { requiresFlag: 'change_solved', lines: [T('D. Aziz... my nephew\'s name is Danial Aziz. Hm.', 'D. Aziz... nama anak saudara saya Danial Aziz. Hm.')], lockedLines: [T('A receipt... I cannot read the small print. (Work it out!)', 'Resit... saya tidak boleh baca tulisan kecil. (Kira!)')] } }
      }
    },

    horror: {
      zones: [
        { id: 'sa_drum', room: 'SA', once: true, minScare: 1, delay: 3, fx: ['sfx:heartbeat', 'sfx:wind'], text: T('🥁 A slow drum beat rolls through the dark market.', '🥁 Paluan gendang perlahan bergema di pasar yang gelap.') },
        { id: 'sa_lantern', room: 'SA', once: true, minScare: 2, delay: 11, fx: ['flicker:SA:2', 'sfx:whisper'], text: T('🏮 Every red lantern flickers at once and a whisper says "Hungry..."', '🏮 Setiap lampion merah berkelip serentak dan bisikan berkata "Lapar..."') },
        { id: 'bl_ash', room: 'BL', once: true, minScare: 1, delay: 2, fx: ['sfx:wind', 'sfx:steps_far'], text: T('🔥 Grey ashes of burnt joss paper swirl around your feet.', '🔥 Abu kelabu kertas sembahyang terbakar berpusar di kaki anda.') },
        { id: 'bl_voice', room: 'BL', once: true, minScare: 2, delay: 7, fx: ['sfx:voice', 'shake:0.4', 'music:tense:10'], text: T('👂 A child\'s laugh from nowhere: "Pay me back..."', '👂 Ketawa kanak-kanak entah dari mana: "Bayar balik..."') },
        { id: 'al_candle', room: 'AL', once: true, minScare: 1, delay: 3, fx: ['sfx:bell'], text: T('🕯️ The altar candles lean over, as if bowing.', '🕯️ Lilin altar condong, seolah-olah tunduk.') },
        { id: 'al_dark', room: 'AL', once: true, minScare: 2, delay: 9, fx: ['blackout:1.8', 'sfx:heartbeat'], text: T('🌑 The altar lights go out. Incense glows red in the dark.', '🌑 Lampu altar padam. Kemenyan menyala merah dalam gelap.') },
        { id: 'fc_chair', room: 'FC', once: true, minScare: 1, delay: 2, fx: ['sfx:scratch'], text: T('🪑 A plastic chair scrapes back from an empty table.', '🪑 Kerusi plastik ditarik dari meja kosong.') },
        { id: 'lp_horn', room: 'LP', once: true, minScare: 1, delay: 2, fx: ['sfx:sos', 'flash:red'], text: T('🚚 A lorry horn blares and red lights flash!', '🚚 Hon lori berbunyi dan lampu merah berkelip!') },
        { id: 'lp_slam', room: 'LP', once: true, minScare: 2, delay: 8, fx: ['sfx:slam', 'shake:0.7'], text: T('🚪 The lorry door SLAMS by itself.', '🚪 Pintu lori DIHEMPAS sendiri.') }
      ],
      figures: [
        { name: 'figure1', room: 'SA', minScare: 2, revealDistance: 3.2, flickerRoom: 'SA', reveal: T('Only a scarecrow mascot wearing a red cap! (False alarm.)', 'Hanya maskot orang-orangan memakai topi merah! (Penggera palsu.)') },
        { name: 'figure2', room: 'LP', minScare: 2, revealDistance: 3.0, flickerRoom: 'LP', sfx: 'sting', reveal: T('A tarpaulin on a crate... still moving, though no wind blows.', 'Kanvas di atas peti... masih bergerak, walaupun tiada angin.') }
      ]
    },

    exitTicket: [
      { subject: 'math', q: T('2 bundles cost RM 8.50 each. You pay RM 20. What is the change?', '2 ikat berharga RM 8.50 setiap satu. Anda bayar RM 20. Berapa baki?'), options: ['RM 2', 'RM 3', 'RM 4', 'RM 5'], answer: 1, why: T('2 × 8.50 = 17. 20 − 17 = 3.', '2 × 8.50 = 17. 20 − 17 = 3.') },
      { subject: 'geography', q: T('On a map, letters run left to right: A, B, C, D. Which direction is D from A?', 'Pada peta, huruf dari kiri ke kanan: A, B, C, D. Arah mana D dari A?'), options: [T('East', 'Timur'), T('West', 'Barat'), T('North', 'Utara')], answer: 0, why: T('Left is west, right is east. A → D is going right: east.', 'Kiri ialah barat, kanan timur. A → D ke kanan: timur.') },
      { subject: 'thinking', q: T('Two men wore red caps. What is a good way to know WHICH one did it?', 'Dua lelaki memakai topi merah. Apa cara baik untuk tahu YANG MANA melakukannya?'), options: [T('Look for other evidence (backpack, photo, notebook)', 'Cari bukti lain (beg galas, gambar, buku)'), T('Blame the loudest one', 'Salahkan yang paling lantang'), T('Guess from the cap', 'Teka daripada topi')], answer: 0, why: T('One detail is not enough. Combine several clues.', 'Satu butiran tidak cukup. Gabungkan beberapa petunjuk.') }
    ],

    world(W) {
      kit.world(W, this, {
        sky: 0x0a0508, fog: [6, 28], mood: { amb: 0.2, hemi: 0.16, ambLow: 0.55, hemiLow: 0.32 }, desk: 0x7a4a2a,
        rooms: [
          { id: 'SA', name: T('Fruit Row', 'Barisan Buah'), wall: 0x7a3a2a, floor: 0x241410, lightColor: 0xff8a5a },
          { id: 'BL', name: T('Back Lane', 'Lorong Belakang'), wall: 0x4a3030, floor: 0x1a1210, lightColor: 0xff6a4a, lightI: 0.3 },
          { id: 'AL', name: T('Altar tent', 'Khemah altar'), wall: 0x8a2a2a, floor: 0x2a1010, lightColor: 0xffa040 },
          { id: 'FC', name: T('Food court', 'Medan makanan'), wall: 0x6a5a3a, floor: 0x22190f, lightColor: 0xffd070 },
          { id: 'LP', name: T('Lorry park', 'Tempat letak lori'), wall: 0x3a3a44, floor: 0x15151a, lightColor: 0x88a0ff }
        ],
        objs: [['r1d1', 'cash_ledger', 0xf3eccb], ['r1d2', 'torn_envelope', 0xe8d0a0], ['r1w1', 'market_map', 0xe0d090], ['r1w2', 'rules_poster', 0xf0c040],
          ['cpf1', 'red_cap', 0xc02020], ['cpf2', 'zip_tag', 0x88aa44], ['r3d1', 'altar_receipt', 0xf8f8f0], ['r3d2', 'altar_book', 0xd0b080],
          ['r4d1', 'mei_notebook', 0xf8e8c0], ['r5d1', 'durian_crate', 0x9a7a3a], ['r5w1', 'lorry_log', 0xdddddd]],
        texts: [[-8.86, 1.9, 0.0, Math.PI / 2, T('PASAR MALAM TAMAN BUNGA', 'PASAR MALAM TAMAN BUNGA'), '#ffb040', 2.8, 0.5]],
        figs: [{ name: 'figure1', slot: 'r1f1', kind: 'coat', color: 0x8a2a2a }, { name: 'figure2', slot: 'r5f2', kind: 'tall' }],
        decor(W) { [[-7.5, 3.0], [-3.0, -3.2], [11.0, -2.3]].forEach((p) => W.box(p[0], 2.3, p[1], 0.5, 0.5, 0.5, 0xd02020, { collide: false })); },
        npcs: [
          { id: 'rosnah', slot: 'r1n', rot: Math.PI * 0.5, skin: 0xc79a6a, shirt: 0x7a5cc0, pants: 0x2c3e50, hair: 0x111111, scale: 0.96 },
          { id: 'raman', slot: 'r1m', rot: Math.PI * 1.2, skin: 0x8a5a3a, shirt: 0xeeeeee, pants: 0x222222, hair: 0xcccccc, scale: 0.98 },
          { id: 'mei', slot: 'r4n', rot: Math.PI * 0.3, skin: 0xe0b894, shirt: 0x33a3a3, pants: 0x2a3a4a, hair: 0x111111, scale: 0.92 },
          { id: 'chong', slot: 'r3n', rot: Math.PI * 0.5, skin: 0xd8b088, shirt: 0xc0562b, pants: 0x3a3a2a, hair: 0x333333, scale: 1.0, hat: 0xc02020 },
          { id: 'danial', slot: 'r5n', rot: Math.PI * 1.1, skin: 0xc79a6a, shirt: 0xd03a3a, pants: 0x2a2a3a, hair: 0x111111, scale: 1.02, hat: 0xc02020 }
        ]
      });
    }
  };
  kit.photo('stall_cam', 'CAM 4  FRUIT ROW', (c, W, H, h) => {
    h.rect(c, 0, 0, W, H, '#140a0a'); h.rect(c, 0, H * 0.7, W, H * 0.3, '#251414');
    for (let i = 0; i < 6; i++) { h.circ(c, 40 + i * 110, 40, 14, '#a33'); }                       // lanterns
    h.rect(c, W * 0.55, H * 0.5, 160, 40, '#5a3a22'); h.rect(c, W * 0.58, H * 0.46, 50, 14, '#e8d0a0');   // table + envelope
    h.rect(c, W * 0.5, H * 0.3, 34, 100, '#4a5a4a'); h.circ(c, W * 0.5 + 17, H * 0.27, 14, '#6a8a72'); h.rect(c, W * 0.5 - 2, H * 0.21, 40, 8, '#cc3030');   // red-cap man
    h.rect(c, W * 0.5 + 28, H * 0.34, 22, 40, '#3a4a3a'); h.circ(c, W * 0.5 + 40, H * 0.4, 5, '#88cc44');                                                   // backpack + durian tag
    h.rect(c, 40, H * 0.32, 30, 90, '#3a4a4a'); h.circ(c, 55, H * 0.29, 12, '#5a7a68'); h.rect(c, 40, H * 0.23, 32, 7, '#cc3030');                           // Chong in the back
  });
  MF.registerCase(C);
})();
