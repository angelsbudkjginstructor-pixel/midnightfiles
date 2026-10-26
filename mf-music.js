/* ============================================================================
   MF.Music — background music that is light enough for a Chromebook.
   - 3 small mono mp3 files (about 650 KB in total), loaded ONLY when first needed.
   - One track plays at a time. Tracks fade in / out (no heavy audio graph).
   - Modes:  menu    = intro track (Case Archive, briefing, waiting room)
             explore = soft waltz (walking around the case)
             tense   = horror track (time is low, final accusation, scary moments)
   - Safety: browsers block sound until the student clicks once; if play() is
     refused we wait for the next click/key and try again (no error shown).
   - Music pauses when the tab is hidden, when the teacher pauses / closes the
     game, and when the student turns music OFF in Settings.
   ============================================================================ */
(function (MF) {
  'use strict';
  var FILES = { menu: 'mus-intro.mp3', explore: 'mus-explore.mp3', tense: 'mus-tense.mp3' };
  var GAIN = { menu: 0.55, explore: 0.5, tense: 0.75 };   // relative loudness of each track
  var M = MF.Music = {
    on: MF.store ? MF.store.get('mf.music', true) !== false : true,   // student's music switch
    vol: 0.55,                                                          // master volume (shared with sound effects)
    mode: 'off', held: false, tracks: {}, cur: null, stingT: null, retry: false, hidden: false
  };

  function track(name) {
    var t = M.tracks[name];
    if (!t) { var a = new Audio(); a.preload = 'none'; a.loop = true; a.src = FILES[name]; a.volume = 0; t = M.tracks[name] = { a: a, v: 0, target: 0 }; }
    return t;
  }
  function level(name) { return Math.max(0, Math.min(1, M.vol * 0.7 * (GAIN[name] || 0.5))); }

  // fades every track toward its target volume (runs only while something is changing)
  var timer = null;
  function loop() {
    var moving = false;
    Object.keys(M.tracks).forEach(function (n) {
      var t = M.tracks[n], d = t.target - t.v;
      if (Math.abs(d) > 0.004) { t.v += d * 0.18 + (d > 0 ? 0.004 : -0.004); moving = true; } else t.v = t.target;
      t.v = Math.max(0, Math.min(1, t.v)); try { t.a.volume = t.v; } catch (e) { /* ignore */ }
      if (t.v === 0 && t.target === 0 && !t.a.paused) { try { t.a.pause(); } catch (e) { /* ignore */ } }
    });
    if (!moving) { clearInterval(timer); timer = null; }
  }
  function kick() { if (!timer) timer = setInterval(loop, 60); }

  function tryPlay(t) {
    if (!t.a.paused) return;
    var p; try { p = t.a.play(); } catch (e) { return; }
    if (p && p.catch) p.catch(function () { M.retry = true; });
  }
  // apply the wanted state: exactly one track audible, or none
  function apply() {
    var want = (M.on && !M.held && !M.hidden && FILES[M.mode]) ? M.mode : null;
    Object.keys(FILES).forEach(function (n) {
      if (n === want) { var t = track(n); t.target = level(n); tryPlay(t); }
      else if (M.tracks[n]) M.tracks[n].target = 0;
    });
    kick();
  }

  M.set = function (mode) { if (M.stingT) { clearTimeout(M.stingT); M.stingT = null; } M.mode = mode || 'off'; M.base = M.mode; apply(); };
  // play another track for a few seconds (e.g. a scary moment), then go back
  M.sting = function (mode, secs) {
    var back = M.base || M.mode; M.mode = mode; apply();
    if (M.stingT) clearTimeout(M.stingT);
    M.stingT = setTimeout(function () { M.stingT = null; M.mode = back; apply(); }, (secs || 8) * 1000);
  };
  M.hold = function (on) { M.held = !!on; apply(); };                      // teacher pause / lock screen
  M.setVolume = function (v) { M.vol = v; apply(); };
  M.setOn = function (on) { M.on = !!on; try { MF.store.set('mf.music', M.on); } catch (e) { /* ignore */ } apply(); };

  // browsers need one click first: try again on the next user action
  ['pointerdown', 'keydown'].forEach(function (ev) { window.addEventListener(ev, function () { if (M.retry) { M.retry = false; apply(); } }, true); });
  document.addEventListener('visibilitychange', function () { M.hidden = document.hidden; apply(); });
})(window.MF);
