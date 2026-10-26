/* ============================================================================
   MF.validateCase(case)  — logical consistency checker.
   A case is NOT playable unless it passes. It is used:
     1) by the game before a case starts (blocks launch on errors), and
     2) by the developer test script (node).
   It checks that the hidden solution can really be deduced from clues that the
   player can actually discover, and that red herrings are explainable.
   ============================================================================ */
(function (root) {
  const MF = root.MF = root.MF || {};

  // Records what the world builder creates, so we know which items a player can physically reach.
  function makeRecorder() {
    const rec = { interacts: [], npcs: [], rooms: [] };
    const noop = () => undefined;
    const W = new Proxy({}, {
      get(_, name) {
        if (name === 'interact') return (o) => { rec.interacts.push(o); };
        if (name === 'npc') return (o) => { rec.npcs.push(o); };
        if (name === 'room') return (id) => { rec.rooms.push(id); };
        return noop;
      }
    });
    return { W, rec };
  }

  MF.validateCase = function (C) {
    const errors = [], warnings = [];
    const err = (m) => errors.push(m), warn = (m) => warnings.push(m);

    // ---- basic structure ----
    ['id', 'title', 'items', 'questions', 'puzzles', 'dialogue', 'conclusion', 'endings', 'world', 'people', 'hidden'].forEach((k) => { if (!C[k]) err('Missing field: ' + k); });
    if (errors.length) return { ok: false, errors, warnings };

    const itemIds = new Set();
    C.items.forEach((it) => { if (itemIds.has(it.id)) err('Duplicate item id: ' + it.id); itemIds.add(it.id); });
    const has = (id) => itemIds.has(id);
    const people = new Set(C.people.map((p) => p.id));

    // ---- what can a player physically obtain? ----
    const { W, rec } = makeRecorder();
    try { C.world.call(C, W); } catch (e) { err('World builder crashed: ' + e.message); }
    const obtainable = new Set();           // items reachable
    const reasons = {};                      // how each item is obtained
    const flagsSettable = new Set();
    const add = (id, why) => { if (!has(id)) { err('Unknown item "' + id + '" obtained via ' + why); return; } if (!obtainable.has(id)) { obtainable.add(id); reasons[id] = why; } };

    rec.interacts.forEach((o) => { if (o.item) add(o.item, 'world:' + o.id); });
    // dialogue grants + claims
    Object.keys(C.dialogue).forEach((pid) => {
      if (pid === 'generic') return;
      if (!people.has(pid)) err('Dialogue for unknown person: ' + pid);
      const d = C.dialogue[pid];
      if (!rec.npcs.find((n) => n.id === pid)) err('Person "' + pid + '" has dialogue but is not placed in the world');
      (d.topics || []).forEach((t) => {
        (t.gives || []).forEach((g) => add(g, 'dialogue:' + pid + '.' + t.id));
        (t.claims || []).forEach((c) => add(c, 'dialogue:' + pid + '.' + t.id));
        if (t.after && !(d.topics || []).find((x) => x.id === t.after) && !Object.values(d.present || {}).find((p) => p.unlock === t.after)) err('Topic ' + pid + '.' + t.id + ' needs unknown "after": ' + t.after);
      });
      Object.keys(d.present || {}).forEach((pk) => {
        const p = d.present[pk];
        if (!has(pk)) err('Present-evidence key unknown: ' + pid + '.' + pk);
        (p.claims || []).forEach((c) => add(c, 'dialogue:' + pid + '.present.' + pk));
        (p.flags || []).forEach((f) => flagsSettable.add(f));
      });
    });
    // puzzles grant items + flags; photos come from the camera
    Object.keys(C.puzzles).forEach((pid) => {
      const p = C.puzzles[pid];
      (p.grants.items || []).forEach((i) => { if (!has(i)) err('Puzzle ' + pid + ' grants unknown item ' + i); });
      (p.grants.flags || []).forEach((f) => flagsSettable.add(f));
      if (!p.steps || !p.steps.length) err('Puzzle ' + pid + ' has no steps');
      (p.steps || []).forEach((s, i) => {
        if (s.type === 'choice' || s.type === 'number') {
          const opts = s.options || [];
          if (!opts.length) err(pid + ' step ' + (i + 1) + ' has no options');
          if (s.type === 'number' && opts.indexOf(s.answer) < 0) err(pid + ' step ' + (i + 1) + ': answer not in options');
          if (s.type === 'choice' && typeof s.answer === 'number' && (s.answer < 0 || s.answer >= opts.length)) err(pid + ' step ' + (i + 1) + ': answer index out of range');
          if (s.type === 'choice' && typeof s.answer === 'string' && opts.indexOf(s.answer) < 0) err(pid + ' step ' + (i + 1) + ': answer not in options');
        }
        if (s.type === 'cloze') s.parts.forEach((pt) => { if (pt.blank && pt.blank.indexOf(pt.answer) < 0) err(pid + ': cloze answer not in choices'); });
        if (s.type === 'code' && !/^\d+$/.test(s.answer)) err(pid + ': code answer must be digits');
        if (!s.hints || !s.hints.length) warn(pid + ' step ' + (i + 1) + ' has no hints (students need hints after a wrong answer)');
      });
    });
    // puzzle-granted items are obtainable only if the puzzle itself is reachable (item.puzzle linked & item obtainable)
    C.items.forEach((it) => {
      if (it.puzzle) {
        if (!C.puzzles[it.puzzle]) err('Item ' + it.id + ' links unknown puzzle ' + it.puzzle);
        else if (obtainable.has(it.id)) (C.puzzles[it.puzzle].grants.items || []).forEach((g) => add(g, 'puzzle:' + it.puzzle));
      }
    });
    // photos reachable through the camera
    if (obtainable.has('camera')) C.items.filter((i) => i.photo).forEach((p) => add(p.id, 'camera'));
    // every puzzle must be attached to an obtainable item (else the player can never start it)
    Object.keys(C.puzzles).forEach((pid) => { if (!C.items.find((i) => i.puzzle === pid && obtainable.has(i.id))) err('Puzzle ' + pid + ' can never be started (no reachable item opens it)'); });
    // watch is obtained through robot puzzle
    // ---- item sanity ----
    C.items.forEach((it) => {
      if (!it.title || !it.desc) err('Item ' + it.id + ' needs title and desc');
      if (it.kind === 'claim' && !people.has(it.person)) err('Claim ' + it.id + ' has unknown person ' + it.person);
      if (!obtainable.has(it.id)) warn('Item "' + it.id + '" can never be obtained by the player');
    });

    // ---- pairs (contradiction / support checker) ----
    (C.pairs || []).forEach((p, i) => {
      if (!has(p.a) || !has(p.b)) err('Pair #' + (i + 1) + ' uses unknown item(s) ' + p.a + ' / ' + p.b);
      (p.requires || []).forEach((f) => { if (!flagsSettable.has(f)) err('Pair #' + (i + 1) + ' requires flag "' + f + '" that no puzzle or dialogue can set'); });
      if (p.type === 'contradiction' && !p.explain) warn('Contradiction #' + (i + 1) + ' has no explanation (every contradiction must be explainable)');
    });

    // ---- deduction questions: every one must be solvable ----
    C.questions.forEach((q) => {
      const correct = q.options.filter((o) => o.correct);
      if (correct.length !== 1) err('Question ' + q.id + ' must have exactly one correct option');
      (q.needs || []).forEach((grp, gi) => {
        grp.forEach((id) => { if (!has(id)) err(q.id + ' needs unknown item ' + id); });
        if (!grp.some((id) => obtainable.has(id))) err('Question ' + q.id + ' group ' + (gi + 1) + ' [' + grp.join(', ') + '] cannot be satisfied — no clue in it can be found');
      });
      (q.needsFlags || []).forEach((f) => { if (!flagsSettable.has(f)) err('Question ' + q.id + ' needs flag "' + f + '" that nothing sets'); });
      if (!q.hints || !q.hints.length) warn('Question ' + q.id + ' has no hints');
    });

    // ---- conclusion ----
    const cc = C.conclusion;
    if (!people.has(cc.who.correct)) err('Conclusion culprit is not a person');
    if (C.hidden.culprit !== cc.who.correct) err('Hidden solution culprit differs from conclusion culprit');
    const qWhat = C.questions.find((q) => q.id === cc.what.questionId), qWhen = C.questions.find((q) => q.id === cc.when.questionId);
    if (!qWhat || !qWhen) err('Conclusion refers to unknown questions');
    else {
      if (qWhat.options.find((o) => o.correct).id !== C.hidden.what) err('Hidden "what" does not match the correct answer of ' + qWhat.id);
    }
    cc.coreGroups.forEach((g) => { g.items.forEach((id) => { if (!has(id)) err('Core group ' + g.id + ' has unknown item ' + id); }); if (!g.items.some((id) => obtainable.has(id))) err('Core group ' + g.id + ' can never be satisfied'); });
    if (cc.strongCoverage > cc.coreGroups.length) err('strongCoverage is larger than the number of core groups');
    if (cc.maxEvidence < cc.strongCoverage) err('maxEvidence is smaller than strongCoverage: a player could never reach strong proof');
    cc.secondary.forEach((id) => { if (!has(id)) err('Unknown secondary item ' + id); });
    if (cc.secondaryNeeded > cc.secondary.filter((id) => obtainable.has(id)).length) err('Not enough obtainable secondary evidence');

    // essential + misleading clues listed in the hidden solution must exist and (essential) be obtainable
    (C.hidden.essentialClues || []).forEach((id) => { if (!has(id)) err('Essential clue unknown: ' + id); else if (!obtainable.has(id)) err('Essential clue cannot be obtained: ' + id); });
    (C.hidden.misleading || []).forEach((m) => { if (!has(m.item)) err('Misleading clue unknown: ' + m.item); if (!m.why) err('Misleading clue ' + m.item + ' has no explanation'); });

    // ---- ORACLE PLAYER: collect everything, answer correctly, must reach the best ending; wrong answer must reach "wrong" ----
    const all = {}; obtainable.forEach((id) => { all[id] = true; });
    const flags = {}; flagsSettable.forEach((f) => { flags[f] = true; });
    const result = (who, whatId, whenId, picked) => {
      const ok = { who: who === cc.who.correct, what: !!(qWhat && qWhat.options.find((o) => o.id === whatId && o.correct)), when: !!(qWhen && qWhen.options.find((o) => o.id === whenId && o.correct)) };
      const cov = cc.coreGroups.filter((g) => g.items.some((i) => picked.includes(i))).length;
      const sec = cc.secondary.filter((i) => all[i]).length;
      return { ok, cov, sec, has: all, flags, picked };
    };
    const bestPick = cc.coreGroups.map((g) => g.items.find((i) => obtainable.has(i))).filter(Boolean).slice(0, cc.maxEvidence);
    const pick = (r) => (C.endings.find((e) => e.when(r)) || {}).id;
    const best = pick(result(cc.who.correct, qWhat.options.find((o) => o.correct).id, qWhen.options.find((o) => o.correct).id, bestPick));
    if (best !== 'secret' && best !== 'perfect') err('The oracle player (all clues, correct answers) reaches ending "' + best + '", not a top ending — the solution cannot be proven');
    const wrongP = C.people.find((p) => p.id !== cc.who.correct && p.suspect);
    const wrongEnd = pick(result(wrongP.id, 'steal', 'stamp', bestPick));
    if (wrongEnd !== 'wrong') err('Accusing the wrong person should give the "wrong" ending, got ' + wrongEnd);
    const weakEnd = pick(result(cc.who.correct, qWhat.options.find((o) => o.correct).id, qWhen.options.find((o) => o.correct).id, [bestPick[0]]));
    if (weakEnd !== 'weak') err('Right person with almost no evidence should give "weak", got ' + weakEnd);
    const ids = C.endings.map((e) => e.id);
    if (ids.length < 4) warn('Fewer than 4 endings');
    if (ids[ids.length - 1] !== 'wrong') warn('Last ending should be the catch-all "wrong"');

    // every suspect must have an explainable path (cleared or guilty)
    C.people.filter((p) => p.suspect && p.id !== cc.who.correct).forEach((p) => { if (!C.conclusion || !(C.wrongWho || {})[p.id]) warn('No "wrongly accused" explanation for ' + p.id); });

    // ---- hint text sanity ----
    if (!C.horror) warn('No horror/thriller moments defined');

    return { ok: errors.length === 0, errors, warnings, obtainable: Array.from(obtainable), reasons, bestEnding: best };
  };
})(typeof window !== 'undefined' ? window : globalThis);
