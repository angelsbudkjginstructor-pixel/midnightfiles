/* ============================================================================
   MF.Bank — bonus questions that earn HINT TOKENS.
   - Built-in bank: 5 subjects x 3 grade bands (low = Gr 1-3, mid = Gr 4-5, high = Gr 6-7+)
   - Teacher's own questions arrive from a Google Sheet (published as CSV) — the TEACHER page
     downloads and parses the sheet and sends the questions to students (so students never
     need to open the Google Sheet themselves).
   Safety checks: bad CSV rows are skipped (never crash), answers must match an option,
   and a question is never asked twice in the same case.
   ============================================================================ */
(function (MF) {
  'use strict';
  var B = MF.Bank = { builtin: [], custom: [] };

  function Q(subject, band, qen, qbm, opts, ans, hen, hbm) {
    B.builtin.push({ id: 'b' + (B.builtin.length + 1), subject: subject, band: band, q: { en: qen, bm: qbm }, opts: opts, a: ans, hint: hen ? { en: hen, bm: hbm } : null });
  }
  var T = function (en, bm) { return { en: en, bm: bm }; };

  /* ----------------------------------------------------------------- MATHS / MATEMATIK */
  Q('math', 'low', '5 + 7 = ?', '5 + 7 = ?', ['10', '11', '12', '13'], 2, 'Start at 7 and count up 5 more.', 'Mula dari 7 dan kira 5 lagi.');
  Q('math', 'low', 'What comes next? 2, 4, 6, ?', 'Apakah nombor seterusnya? 2, 4, 6, ?', ['7', '8', '9', '10'], 1, 'The numbers go up by 2.', 'Nombor bertambah 2.');
  Q('math', 'low', 'Which number is the biggest?', 'Nombor manakah paling besar?', ['19', '91', '29', '90'], 1, 'Look at the tens first.', 'Lihat puluh dahulu.');
  Q('math', 'mid', '3 × 8 = ?', '3 × 8 = ?', ['21', '24', '27', '32'], 1, '3 × 8 is the same as 8 + 8 + 8.', '3 × 8 sama dengan 8 + 8 + 8.');
  Q('math', 'mid', 'What is half of 50?', 'Apakah separuh daripada 50?', ['20', '25', '30', '15'], 1, 'Half means divide by 2.', 'Separuh bermaksud bahagi 2.');
  Q('math', 'mid', '1/2 + 1/2 = ?', '1/2 + 1/2 = ?', ['1/4', '1', '2', '1/2'], 1, 'Two halves make a whole.', 'Dua separuh jadi satu keseluruhan.');
  Q('math', 'high', 'What is 15% of 200?', 'Apakah 15% daripada 200?', ['20', '30', '40', '15'], 1, '10% of 200 is 20. 5% is half of that.', '10% daripada 200 ialah 20. 5% ialah separuhnya.');
  Q('math', 'high', 'A square has sides of 6 cm. What is its perimeter?', 'Sebuah segi empat sama bersisi 6 cm. Apakah perimeternya?', ['12 cm', '24 cm', '36 cm', '18 cm'], 1, 'Perimeter = add all 4 sides.', 'Perimeter = tambah semua 4 sisi.');
  Q('math', 'high', '0.5 + 0.25 = ?', '0.5 + 0.25 = ?', ['0.75', '0.30', '0.525', '0.7'], 0, 'Think of money: 50 sen + 25 sen.', 'Fikirkan wang: 50 sen + 25 sen.');

  /* ----------------------------------------------------------------- ENGLISH / BAHASA INGGERIS */
  Q('english', 'low', 'Which word is a noun (a name of a thing)?', 'Perkataan mana kata nama (nama benda)?', ['run', 'apple', 'quickly', 'happy'], 1, 'You can touch an apple!', 'Anda boleh sentuh epal!');
  Q('english', 'low', 'The dog ___ big.', 'The dog ___ big.', ['is', 'are', 'am'], 0, 'One dog = "is".', 'Satu anjing = "is".');
  Q('english', 'low', 'What is the opposite of "hot"?', 'Apakah lawan bagi "hot"?', ['cold', 'warm', 'big', 'sun'], 0, 'Ice is …?', 'Ais itu …?');
  Q('english', 'mid', 'What is the past tense of "go"?', 'Apakah bentuk lampau bagi "go"?', ['goed', 'went', 'gone', 'going'], 1, 'Yesterday I ___ to school.', 'Semalam saya ___ ke sekolah.');
  Q('english', 'mid', 'Which sentence is correct?', 'Ayat mana yang betul?', ['She don\'t like tea.', 'She doesn\'t like tea.', 'She not like tea.'], 1, 'With "she" we use "doesn\'t".', 'Dengan "she" kita guna "doesn\'t".');
  Q('english', 'mid', 'Which word means the same as "happy"?', 'Perkataan mana sama maksud dengan "happy"?', ['sad', 'glad', 'angry', 'tired'], 1, 'A synonym has a similar meaning.', 'Sinonim mempunyai maksud yang serupa.');
  Q('english', 'high', 'What is the plural of "child"?', 'Apakah bentuk jamak "child"?', ['childs', 'childes', 'children', 'childrens'], 2, 'It is an irregular plural.', 'Ia jamak tidak sekata.');
  Q('english', 'high', '___ going to the park. (They are)', '___ going to the park. (They are)', ['Their', 'There', 'They\'re'], 2, '"They\'re" is short for "they are".', '"They\'re" ialah singkatan "they are".');
  Q('english', 'high', 'In "The tall boy ran quickly", which word is an adjective?', 'Dalam "The tall boy ran quickly", perkataan mana kata sifat?', ['tall', 'boy', 'ran', 'quickly'], 0, 'An adjective describes a noun.', 'Kata sifat menerangkan kata nama.');

  /* ----------------------------------------------------------------- SCIENCE / SAINS */
  Q('science', 'low', 'Which one is a living thing?', 'Yang mana benda hidup?', ['rock', 'tree', 'chair', 'water'], 1, 'Living things grow and need food.', 'Benda hidup membesar dan perlukan makanan.');
  Q('science', 'low', 'What do plants need to grow?', 'Apa yang tumbuhan perlukan untuk membesar?', ['sunlight and water', 'sweets', 'plastic', 'loud noise'], 0, 'Think of a garden.', 'Fikirkan sebuah taman.');
  Q('science', 'low', 'How many legs does an insect have?', 'Berapa kaki seekor serangga?', ['4', '6', '8', '10'], 1, 'Think of an ant.', 'Fikirkan seekor semut.');
  Q('science', 'mid', 'At what temperature does water freeze?', 'Pada suhu berapa air membeku?', ['0 °C', '10 °C', '50 °C', '100 °C'], 0, 'Ice cubes are made in the freezer.', 'Ketulan ais dibuat dalam peti sejuk beku.');
  Q('science', 'mid', 'Which material is a good conductor of electricity?', 'Bahan mana konduktor elektrik yang baik?', ['wood', 'metal', 'plastic', 'rubber'], 1, 'Electric wires have it inside.', 'Wayar elektrik mempunyainya di dalam.');
  Q('science', 'mid', 'An animal that eats only plants is a …', 'Haiwan yang makan tumbuhan sahaja ialah …', ['carnivore', 'herbivore', 'omnivore', 'predator'], 1, 'Herb = plant.', 'Herb = tumbuhan.');
  Q('science', 'high', 'Which gas do plants take in for photosynthesis?', 'Gas apa diambil oleh tumbuhan untuk fotosintesis?', ['oxygen', 'carbon dioxide', 'nitrogen', 'helium'], 1, 'We breathe it OUT.', 'Kita hembus KELUAR gas ini.');
  Q('science', 'high', 'Which force pulls things down towards the Earth?', 'Daya apa menarik benda ke bawah ke arah Bumi?', ['magnetism', 'friction', 'gravity', 'wind'], 2, 'An apple falls from a tree because of it.', 'Epal jatuh dari pokok kerananya.');
  Q('science', 'high', 'Which one is a PHYSICAL change?', 'Yang mana perubahan FIZIKAL?', ['ice melting', 'wood burning', 'iron rusting', 'cake baking'], 0, 'In a physical change, no new substance is made.', 'Dalam perubahan fizikal, tiada bahan baru terhasil.');

  /* ----------------------------------------------------------------- GEOGRAPHY / GEOGRAFI */
  Q('geography', 'low', 'In which direction does the sun rise?', 'Matahari terbit di arah mana?', ['East', 'West', 'North', 'South'], 0, 'The sun rises in the E…', 'Matahari terbit di T…');
  Q('geography', 'low', 'What is the capital city of Malaysia?', 'Apakah ibu negara Malaysia?', ['Johor Bahru', 'Kuala Lumpur', 'Ipoh', 'Penang'], 1, 'The Petronas Twin Towers are there.', 'Menara Berkembar Petronas ada di sana.');
  Q('geography', 'low', 'Which one is a continent?', 'Yang mana sebuah benua?', ['Asia', 'Malaysia', 'Selangor', 'Pacific'], 0, 'A continent is a huge piece of land.', 'Benua ialah daratan yang sangat besar.');
  Q('geography', 'mid', 'What is the opposite direction of North?', 'Apakah arah bertentangan dengan Utara?', ['East', 'West', 'South', 'North-east'], 2, 'Look at a compass.', 'Lihat kompas.');
  Q('geography', 'mid', 'Which is the largest ocean?', 'Lautan mana yang terbesar?', ['Atlantic', 'Pacific', 'Indian', 'Arctic'], 1, 'Its name means "peaceful".', 'Namanya bermaksud "aman".');
  Q('geography', 'mid', 'What does the KEY (legend) on a map show?', 'Apakah yang ditunjukkan oleh KUNCI (petunjuk) pada peta?', ['what the symbols mean', 'the weather', 'the time', 'the price'], 0, 'A key opens the meaning of the map.', 'Kunci membuka maksud peta.');
  Q('geography', 'high', 'Which imaginary line divides the Earth into North and South halves?', 'Garisan khayalan mana membahagi Bumi kepada separuh Utara dan Selatan?', ['Equator', 'Prime Meridian', 'Tropic of Cancer', 'Date Line'], 0, 'Malaysia is close to it.', 'Malaysia dekat dengannya.');
  Q('geography', 'high', 'Malaysia is in which continent?', 'Malaysia terletak di benua mana?', ['Africa', 'Asia', 'Europe', 'Australia'], 1, 'Think of South-East ____.', 'Fikirkan Asia Tenggara.');
  Q('geography', 'high', 'Which direction is between North and East?', 'Arah mana di antara Utara dan Timur?', ['South-west', 'North-east', 'South-east', 'North-west'], 1, 'Combine the two names.', 'Gabungkan dua nama arah itu.');

  /* ----------------------------------------------------------------- CRITICAL THINKING / PEMIKIRAN KRITIS */
  Q('thinking', 'low', 'How can you check if a story is true?', 'Bagaimana anda boleh semak sama ada cerita itu benar?', ['Look for proof (evidence)', 'Believe it quickly', 'Shout loudly', 'Ignore it'], 0, 'Detectives look for clues.', 'Detektif mencari petunjuk.');
  Q('thinking', 'low', '"I SEE a wet floor." Is this an observation or an inference?', '"Saya NAMPAK lantai basah." Ini pemerhatian atau inferens?', ['Observation', 'Inference'], 0, 'Observation = what you see, hear or touch.', 'Pemerhatian = apa yang anda lihat, dengar atau sentuh.');
  Q('thinking', 'low', 'What should a detective do FIRST?', 'Apa yang detektif patut buat DAHULU?', ['Collect clues', 'Choose the answer', 'Go to sleep', 'Blame someone'], 0, 'Clues come before the answer.', 'Petunjuk datang sebelum jawapan.');
  Q('thinking', 'mid', '"The floor is wet, so someone spilled water." This is an …', '"Lantai basah, jadi seseorang menumpahkan air." Ini ialah …', ['observation', 'inference', 'measurement'], 1, 'It is an idea about WHY.', 'Ia idea tentang SEBAB.');
  Q('thinking', 'mid', 'Two witnesses tell different stories. What should you do?', 'Dua saksi bercerita berbeza. Apa patut anda buat?', ['Check the evidence', 'Pick the one you like', 'Ignore both', 'Guess'], 0, 'Evidence can show who is right.', 'Bukti boleh tunjukkan siapa yang betul.');
  Q('thinking', 'mid', 'A person told a lie. Does that ALWAYS mean they did the crime?', 'Seseorang berbohong. Adakah itu SENTIASA bermakna dia melakukan jenayah?', ['Yes, always', 'No — there can be other reasons', 'Only if they are older', 'Only if they are loud'], 1, 'Think: a surprise gift is a secret!', 'Fikirkan: hadiah kejutan ialah rahsia!');
  Q('thinking', 'high', 'Which is the STRONGEST evidence?', 'Yang mana bukti PALING kukuh?', ['A checked photo with a correct time', 'A rumour', 'A guess', 'Someone\'s opinion'], 0, 'Strong evidence can be checked.', 'Bukti kukuh boleh disemak.');
  Q('thinking', 'high', 'Only looking for clues that fit your first idea is called …', 'Hanya mencari petunjuk yang sesuai dengan idea pertama anda dipanggil …', ['bias', 'proof', 'a fact', 'a timeline'], 0, 'It stops you from seeing the whole story.', 'Ia menghalang anda melihat keseluruhan cerita.');
  Q('thinking', 'high', 'What is a "red herring" in a mystery?', 'Apakah "red herring" dalam sebuah misteri?', ['A clue that misleads you', 'The final answer', 'A witness name', 'A kind of fish only'], 0, 'It looks important but points the wrong way.', 'Ia nampak penting tetapi menunjuk ke arah yang salah.');

  /* ----------------------------------------------------------------- helpers */
  B.bandOf = function (grade) { var g = parseInt(grade, 10); if (isNaN(g)) return 'mid'; return g <= 3 ? 'low' : (g <= 5 ? 'mid' : 'high'); };

  // Tiny CSV parser that understands "quoted, values" and doubled quotes.
  B.parseCSV = function (text) {
    var rows = [], row = [], cur = '', inQ = false, i, ch;
    text = String(text || '').replace(/^﻿/, '');
    for (i = 0; i < text.length; i++) {
      ch = text[i];
      if (inQ) { if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else inQ = false; } else cur += ch; }
      else if (ch === '"') inQ = true;
      else if (ch === ',') { row.push(cur); cur = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cur); cur = ''; if (row.join('').trim()) rows.push(row); row = []; }
      else cur += ch;
    }
    row.push(cur); if (row.join('').trim()) rows.push(row);
    return rows;
  };

  // Turn CSV text into question objects. Columns (any order, header row required):
  //   subject, grade, question_en, question_bm, a, b, c, d, answer, hint
  // Returns { questions:[…], skipped:n, problems:[…] }  — never throws.
  B.fromCSV = function (text) {
    var out = { questions: [], skipped: 0, problems: [] };
    try {
      var rows = B.parseCSV(text); if (rows.length < 2) { out.problems.push('The sheet has no question rows.'); return out; }
      var head = rows[0].map(function (h) { return h.trim().toLowerCase().replace(/[^a-z_]/g, ''); });
      var col = function (names) { for (var i = 0; i < names.length; i++) { var k = head.indexOf(names[i]); if (k >= 0) return k; } return -1; };
      var cS = col(['subject', 'subjek']), cG = col(['grade', 'gred', 'band']), cE = col(['question_en', 'question', 'questionen', 'en']), cM = col(['question_bm', 'questionbm', 'bm', 'soalan']);
      var cO = ['a', 'b', 'c', 'd'].map(function (l) { return col([l, 'option' + l, 'option_' + l]); }), cA = col(['answer', 'jawapan', 'correct']), cH = col(['hint', 'petunjuk']);
      if (cE < 0 && cM < 0) { out.problems.push('No "question_en" or "question_bm" column found.'); return out; }
      for (var r = 1; r < rows.length; r++) {
        var row = rows[r], g = function (k) { return k >= 0 && row[k] != null ? String(row[k]).trim() : ''; };
        var qen = g(cE), qbm = g(cM), opts = cO.map(g).filter(function (x) { return x !== ''; });
        if ((!qen && !qbm) || opts.length < 2) { out.skipped++; out.problems.push('Row ' + (r + 1) + ': needs a question and at least 2 options.'); continue; }
        var ans = g(cA), idx = -1;
        if (/^[a-d]$/i.test(ans)) idx = ans.toLowerCase().charCodeAt(0) - 97; else idx = opts.map(function (o) { return o.toLowerCase(); }).indexOf(ans.toLowerCase());
        if (idx < 0 || idx >= opts.length) { out.skipped++; out.problems.push('Row ' + (r + 1) + ': the answer does not match an option.'); continue; }
        var sub = g(cS).toLowerCase(); if (/math|matematik/.test(sub)) sub = 'math'; else if (/eng|inggeris/.test(sub)) sub = 'english'; else if (/sci|sains/.test(sub)) sub = 'science'; else if (/geo/.test(sub)) sub = 'geography'; else if (/think|critical|kritis/.test(sub)) sub = 'thinking'; else sub = sub || 'any';
        var gr = g(cG).toLowerCase(), band = (gr === 'low' || gr === 'mid' || gr === 'high') ? gr : (gr ? B.bandOf(gr) : 'any');
        out.questions.push({ id: 'x' + r, subject: sub, band: band, q: { en: qen || qbm, bm: qbm || qen }, opts: opts, a: idx, hint: g(cH) ? { en: g(cH), bm: g(cH) } : null, custom: true });
      }
    } catch (e) { out.problems.push('Could not read the sheet: ' + e.message); }
    return out;
  };

  // Pick one question that has not been used yet. Teacher questions come first.
  // opts: { subjects:[…], grade:n|'all', used:{id:true}, custom:[…] }
  B.pick = function (o) {
    o = o || {}; var used = o.used || {}, subs = (o.subjects && o.subjects.length) ? o.subjects : ['math', 'english', 'science', 'geography', 'thinking'];
    var band = (o.grade && o.grade !== 'all') ? B.bandOf(o.grade) : null;
    var fits = function (q) { return !used[q.id] && (q.subject === 'any' || subs.indexOf(q.subject) >= 0) && (!band || q.band === 'any' || q.band === band); };
    var pool = (o.custom || []).filter(fits); if (!pool.length || Math.random() < 0.35) pool = pool.concat(B.builtin.filter(fits));
    if (!pool.length) pool = B.builtin.filter(function (q) { return !used[q.id]; });   // fall back to anything unused
    if (!pool.length) return null;
    var q = pool[Math.floor(Math.random() * pool.length)];
    // shuffle options but remember the right one
    var order = MF.shuffle(q.opts.map(function (_, i) { return i; }));
    return { id: q.id, subject: q.subject, q: q.q, hint: q.hint, opts: order.map(function (i) { return q.opts[i]; }), a: order.indexOf(q.a) };
  };
})(window.MF);
