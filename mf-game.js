/* ============================================================================
   MF.Game — the rules of the investigation (no drawing here, only logic).
   Keeps the player's notebook, flags, puzzle results, deduction answers, timer,
   hint tokens, and saves/loads progress.

   Safety checks in this file:
   - every save/load is wrapped in try/catch (private windows / full storage never crash the game)
   - a saved game is only loaded if it belongs to the same case and the same version
   - an item can only be added once (no duplicates), claims are never added twice
   - hint tokens cannot go below zero
   ============================================================================ */
(function (MF) {
  'use strict';
  var VER = 2;

  function Game(opts) {
    this.C = opts.C; this.cfg = opts.cfg || {}; this.key = opts.key; this.h = {};
    this.D = MF.DIFFICULTY[this.cfg.diff] || MF.DIFFICULTY.standard;
    this.items = {}; var self = this; this.C.items.forEach(function (it) { self.items[it.id] = it; });
    this.S = this._fresh(); this.dirty = false;
  }
  Game.prototype.on = function (ev, fn) { (this.h[ev] = this.h[ev] || []).push(fn); return this; };
  Game.prototype.emit = function (ev, a, b, c) { (this.h[ev] || []).forEach(function (f) { try { f(a, b, c); } catch (e) { console.error(e); } }); };

  /* ------------------------------------------------------------------ state, save, load */
  Game.prototype._fresh = function () {
    return { v: VER, caseId: this.C.id, diff: this.cfg.diff || 'standard', startedAt: Date.now(), play: 0, ext: 0,
      found: {}, order: [], flags: {}, marks: {}, notes: {}, pz: {}, dlg: {}, pairs: {}, q: {}, ppl: {}, viewed: {}, shared: {},
      tokens: this.D.tokens, hints: 0, bonusUsed: {}, bonusRight: 0, bonusTry: 0, rooms: {}, accus: [], ending: null, exit: null, pos: null, over: false };
  };
  Game.prototype.hasSave = function () { var s = MF.store.get(this.key); return !!(s && s.v === VER && s.caseId === this.C.id && !s.over); };
  Game.prototype.peekSave = function () { var s = MF.store.get(this.key); return (s && s.v === VER && s.caseId === this.C.id) ? s : null; };
  Game.prototype.load = function () {
    var s = this.peekSave(); if (!s) return false;
    // keep only ids that still exist in the case file (protects against an updated case file)
    var self = this; Object.keys(s.found).forEach(function (id) { if (!self.items[id]) delete s.found[id]; });
    this.S = s; return true;
  };
  Game.prototype.reset = function () { MF.store.del(this.key); this.S = this._fresh(); this.emit('changed'); };
  Game.prototype.save = function () { try { MF.store.set(this.key, this.S); } catch (e) { /* ignore */ } };
  Game.prototype.touch = function () { this.save(); this.emit('changed'); };

  /* ------------------------------------------------------------------ evidence */
  Game.prototype.item = function (id) { return this.items[id] || null; };
  Game.prototype.has = function (id) { return !!this.S.found[id]; };
  Game.prototype.flag = function (f) { return !!this.S.flags[f]; };
  Game.prototype.kindOf = function (it) { if (!it) return 'confirmed'; if (it.kind === 'claim') return 'claim'; if (it.kind === 'inference') return 'inference'; return 'confirmed'; };
  // add an item to the notebook ONCE. Returns true only the first time.
  Game.prototype.give = function (id, via) {
    var it = this.items[id]; if (!it || this.S.found[id]) return false;
    this.S.found[id] = { t: Date.now(), via: via || 'found' }; this.S.order.push(id);
    this.emit('found', it, via); this.touch(); return true;
  };
  Game.prototype.setFlag = function (f) { if (!f || this.S.flags[f]) return false; this.S.flags[f] = true; this.emit('flag', f); this.touch(); return true; };
  Game.prototype.foundList = function () { var self = this; return this.S.order.map(function (id) { return self.items[id]; }).filter(Boolean); };
  Game.prototype.count = function () { return this.S.order.length; };
  Game.prototype.setMark = function (id, m) { if (m) this.S.marks[id] = m; else delete this.S.marks[id]; this.touch(); };
  Game.prototype.setNote = function (id, t) { this.S.notes[id] = String(t || '').slice(0, 300); this.save(); };
  Game.prototype.setPerson = function (id, m) { if (m) this.S.ppl[id] = m; else delete this.S.ppl[id]; this.touch(); };
  Game.prototype.markViewed = function (id) { this.S.viewed[id] = true; this.save(); };

  /* ------------------------------------------------------------------ contradiction / support checker */
  Game.prototype.claimStatus = function (id) {
    var st = 'unverified', self = this;
    (this.C.pairs || []).forEach(function (p, i) {
      if (!self.S.pairs[i] || (p.a !== id && p.b !== id)) return;
      if (p.type === 'contradiction') st = 'contradicted'; else if (st !== 'contradicted') st = 'supported';
    });
    return st;
  };
  // compare two items. r: 'none' (not related) | 'locked' (related, but something must be solved first) | 'contradiction' | 'support'
  Game.prototype.compare = function (a, b) {
    var pairs = this.C.pairs || [], self = this;
    for (var i = 0; i < pairs.length; i++) {
      var p = pairs[i]; if (!((p.a === a && p.b === b) || (p.a === b && p.b === a))) continue;
      var miss = (p.requires || []).filter(function (f) { return !self.S.flags[f]; });
      if (miss.length) return { r: 'locked', pair: p, miss: miss };
      var isNew = !this.S.pairs[i]; this.S.pairs[i] = true; if (isNew) { this.emit('pair', p); this.touch(); }
      return { r: p.type, pair: p, isNew: isNew, idx: i };
    }
    return { r: 'none' };
  };
  // a gentle nudge: one comparison the player has not made yet (costs a hint token)
  Game.prototype.pairHint = function () {
    var self = this, pairs = this.C.pairs || [];
    for (var i = 0; i < pairs.length; i++) { var p = pairs[i]; if (this.S.pairs[i] || !this.has(p.a) || !this.has(p.b)) continue; if ((p.requires || []).some(function (f) { return !self.S.flags[f]; })) continue; return p; }
    return null;
  };
  Game.prototype.pairsFor = function (pid) {
    var self = this; return (this.C.pairs || []).filter(function (p, i) { return self.S.pairs[i] && p.person === pid; });
  };

  /* ------------------------------------------------------------------ interviews */
  Game.prototype._d = function (pid) { return this.S.dlg[pid] || (this.S.dlg[pid] = { asked: {}, unlocked: {}, presented: {} }); };
  Game.prototype.topics = function (pid) {
    var d = this._d(pid), D = this.C.dialogue[pid]; if (!D) return [];
    return (D.topics || []).filter(function (t) { return !t.after || d.asked[t.after] || d.unlocked[t.after]; });
  };
  Game.prototype.ask = function (pid, tid) {
    var D = this.C.dialogue[pid], d = this._d(pid), t = (D.topics || []).filter(function (x) { return x.id === tid; })[0]; if (!t) return null;
    d.asked[tid] = true; var made = [], self = this;
    (t.gives || []).forEach(function (g) { if (self.give(g, 'dlg:' + pid)) made.push(g); });
    (t.claims || []).forEach(function (c) { if (self.give(c, 'dlg:' + pid)) made.push(c); });
    this.touch(); return { lines: t.lines, newItems: made };
  };
  Game.prototype.present = function (pid, itemId) {
    var D = this.C.dialogue[pid], d = this._d(pid), e = (D.present || {})[itemId], self = this, made = [];
    if (!e) return { lines: [this.C.dialogue.generic], matched: false, newItems: [] };
    if (e.requiresFlag && !this.S.flags[e.requiresFlag]) return { lines: e.lockedLines || [this.C.dialogue.generic], locked: true, matched: true, newItems: [] };
    d.presented[itemId] = true; if (e.unlock) d.unlocked[e.unlock] = true;
    (e.flags || []).forEach(function (f) { self.setFlag(f); });
    (e.claims || []).forEach(function (c) { if (self.give(c, 'dlg:' + pid)) made.push(c); });
    this.touch(); return { lines: e.lines, matched: true, newItems: made };
  };
  Game.prototype.newTopics = function (pid) { var d = this._d(pid); return this.topics(pid).filter(function (t) { return !d.asked[t.id]; }).length; };

  /* ------------------------------------------------------------------ puzzles */
  Game.prototype.puzzleDone = function (pid) { return !!this.S.pz[pid]; };
  Game.prototype.puzzleBlock = function (pid) {     // returns the missing item id if the puzzle cannot start yet
    var P = this.C.puzzles[pid], self = this, miss = null; (P.needs || []).forEach(function (id) { if (!self.has(id) && !miss) miss = id; }); return miss;
  };
  // mark a puzzle solved: grants flags + items (+ tokens). fromTeam = true when a team-mate solved it (no extra tokens)
  Game.prototype.completePuzzle = function (pid, fromTeam) {
    var P = this.C.puzzles[pid]; if (!P || this.S.pz[pid]) return [];
    this.S.pz[pid] = true; var made = [], self = this;
    (P.grants.flags || []).forEach(function (f) { self.setFlag(f); });
    (P.grants.items || []).forEach(function (i) { if (self.give(i, fromTeam ? 'team' : 'puzzle:' + pid)) made.push(i); });
    if (!fromTeam && P.tokens) this.addToken(P.tokens);
    this.emit('puzzle', pid, fromTeam); this.touch(); return made;
  };

  /* ------------------------------------------------------------------ hint tokens + bonus questions */
  Game.prototype.freeHints = function () { return !!this.D.freeHints; };
  Game.prototype.tokens = function () { return this.D.freeHints ? Infinity : this.S.tokens; };
  Game.prototype.addToken = function (n) { if (this.D.freeHints) return; this.S.tokens = Math.min(9, this.S.tokens + (n || 1)); this.emit('tokens'); this.touch(); };
  Game.prototype.spendToken = function () {
    if (this.D.freeHints) { this.S.hints++; this.touch(); return true; }
    if (this.S.tokens <= 0) return false; this.S.tokens--; this.S.hints++; this.emit('tokens'); this.touch(); return true;
  };
  Game.prototype.bonusLeft = function () { return Math.max(0, 6 - this.S.bonusRight); };
  Game.prototype.nextBonus = function () {
    if (this.bonusLeft() <= 0) return null;
    return MF.Bank.pick({ subjects: this.cfg.subjects, grade: this.cfg.grade, used: this.S.bonusUsed, custom: this.cfg.bank || [] });
  };
  Game.prototype.answerBonus = function (q, idx) {
    this.S.bonusUsed[q.id] = true; this.S.bonusTry++; var ok = idx === q.a;
    if (ok) { this.S.bonusRight++; this.addToken(1); } this.touch(); return ok;
  };

  /* ------------------------------------------------------------------ deduction board */
  Game.prototype.q = function (qid) { return this.S.q[qid] || (this.S.q[qid] = { choice: null, linked: [], solved: false, tries: 0, hint: 0 }); };
  Game.prototype.question = function (qid) { return this.C.questions.filter(function (x) { return x.id === qid; })[0]; };
  Game.prototype.toggleLink = function (qid, itemId) {
    var st = this.q(qid); if (st.solved) return; var i = st.linked.indexOf(itemId);
    if (i >= 0) st.linked.splice(i, 1); else if (this.has(itemId) && st.linked.length < 6) st.linked.push(itemId); this.touch();
  };
  Game.prototype.setChoice = function (qid, optId) { var st = this.q(qid); if (!st.solved) { st.choice = optId; this.touch(); } };
  // Does the linked evidence prove the question? (each group of 'needs' must be covered; flags must be set)
  Game.prototype.proofState = function (qid) {
    var q = this.question(qid), st = this.q(qid), self = this;
    var groupsMissing = (q.needs || []).filter(function (g) { return !g.some(function (id) { return st.linked.indexOf(id) >= 0 && self.has(id); }); }).length;
    var flagsMissing = (q.needsFlags || []).filter(function (f) { return !self.S.flags[f]; });
    return { groupsMissing: groupsMissing, flagsMissing: flagsMissing, ok: groupsMissing === 0 && flagsMissing.length === 0 };
  };
  // r: 'pick' | 'proof' (not enough proof yet) | 'wrong' | 'ok'
  Game.prototype.checkQuestion = function (qid) {
    var q = this.question(qid), st = this.q(qid); if (st.solved) return { r: 'ok' };
    if (!st.choice) return { r: 'pick' };
    var pf = this.proofState(qid);
    if (!pf.ok) { st.tries++; this.touch(); return { r: 'proof', pf: pf }; }
    var opt = q.options.filter(function (o) { return o.id === st.choice; })[0];
    if (!opt || !opt.correct) { st.tries++; this.touch(); return { r: 'wrong', auto: st.tries >= 2 }; }
    st.solved = true; this.emit('solved', qid); this.touch(); return { r: 'ok' };
  };
  Game.prototype.questionHint = function (qid) {      // spends a token; returns the hint or null (no tokens / no more hints)
    var q = this.question(qid), st = this.q(qid), hs = q.hints || [];
    if (st.hint >= hs.length) return { none: true };
    if (!this.spendToken()) return { noTokens: true };
    return { hint: hs[st.hint++] };
  };
  Game.prototype.solvedCount = function () { var self = this; return this.C.questions.filter(function (q) { return self.q(q.id).solved; }).length; };

  /* ------------------------------------------------------------------ final conclusion -> ending */
  Game.prototype.evaluate = function (a) {
    var C = this.C, cc = C.conclusion, self = this;
    var qWhat = this.question(cc.what.questionId), qWhen = this.question(cc.when.questionId);
    var right = function (q, id) { var o = q.options.filter(function (x) { return x.id === id; })[0]; return !!(o && o.correct); };
    var picked = (a.picked || []).filter(function (id) { return self.has(id); }).slice(0, cc.maxEvidence);
    var groups = cc.coreGroups.map(function (g) { return { id: g.id, label: g.label, got: g.items.some(function (i) { return picked.indexOf(i) >= 0; }) }; });
    var r = { ok: { who: a.who === cc.who.correct, what: right(qWhat, a.what), when: right(qWhen, a.when) },
      cov: groups.filter(function (g) { return g.got; }).length, sec: cc.secondary.filter(function (i) { return self.has(i); }).length,
      has: this.S.found, flags: this.S.flags, picked: picked };
    var wh = (cc.where || []).filter(function (w) { return w.id === a.where; })[0];
    var ending = C.endings.filter(function (e) { return e.when(r); })[0];
    return { r: r, ending: ending, groups: groups, whereOk: !!(wh && wh.correct), ans: a };
  };
  Game.prototype.accuse = function (a) {
    var res = this.evaluate(a); this.S.last = a; this.S.accus.push({ who: a.who, end: res.ending.id, t: Math.round(this.S.play) });
    if (res.ending.stars >= 2) { this.S.ending = { id: res.ending.id, stars: res.ending.stars }; this.S.over = true; this.emit('ending', res); }
    this.touch(); return res;
  };
  // rebuild the ending screen when a finished case is reopened
  Game.prototype.lastResult = function () { return this.S.last ? this.evaluate(this.S.last) : null; };
  Game.prototype.giveUp = function (res) { this.S.last = res.ans; this.S.ending = { id: res.ending.id, stars: res.ending.stars }; this.S.over = true; this.touch(); };

  /* ------------------------------------------------------------------ clock + timer */
  Game.prototype.baseLimit = function () { return (this.cfg.timerMin != null ? this.cfg.timerMin : this.D.timerMin) * 60; };
  Game.prototype.limit = function () { var b = this.baseLimit(); return b > 0 ? b + this.S.ext * 300 : 0; };
  Game.prototype.timeLeft = function () { var l = this.limit(); return l > 0 ? Math.max(0, l - this.S.play) : null; };
  Game.prototype.clockMin = function () {
    var c = this.C.clock, b = this.baseLimit(); if (b <= 0) return c.start;
    return c.start + (c.deadline - c.start) * (this.S.play / b);
  };
  Game.prototype.tick = function (dt) { this.S.play += dt; var tl = this.timeLeft(); if (tl === 0 && !this._timeUp) { this._timeUp = true; this.emit('timeup'); } };
  Game.prototype.extend = function () { if (this.S.ext >= 1) return false; this.S.ext++; this._timeUp = false; this.touch(); return true; };

  /* ------------------------------------------------------------------ progress summary (sent to the teacher) */
  Game.prototype.summary = function () {
    var S = this.S; return { ev: S.order.length, qs: this.solvedCount(), qn: this.C.questions.length, hints: S.hints, tok: this.D.freeHints ? '∞' : S.tokens,
      mins: Math.round(S.play / 60), end: S.ending ? S.ending.id : null, stars: S.ending ? S.ending.stars : null, ex: S.exit ? S.exit.score : null, acc: S.accus.length,
      rooms: Object.keys(S.rooms).length };
  };

  /* ------------------------------------------------------------------ timeline data for the notebook */
  // returns [{t, text, kind, id, warn}] sorted by time. Photo times depend on whether the camera clock was fixed.
  Game.prototype.timeline = function () {
    var out = [], self = this, fixed = this.flag('clock_fixed');
    this.foundList().forEach(function (it) {
      if (it.photo) {
        var fx = it.realT != null && self.flag(it.fixFlag || 'clock_fixed'), t = fx ? it.realT : (it.stampT != null ? it.stampT : (it.t || 0));   // photos without a time stamp use item.t
        out.push({ t: t, id: it.id, kind: 'photo', title: it.title, text: it.timeline, warn: it.realT != null && !fx, was: fx ? it.stampT : null });
      } else if (it.kind === 'claim' && it.t) out.push({ t: it.t, id: it.id, kind: 'claim', title: it.title, text: null });
    });
    out.sort(function (a, b) { return a.t - b.t; }); return out;
  };

  MF.Game = Game;
})(window.MF);
