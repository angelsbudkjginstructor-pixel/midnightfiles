# THE MIDNIGHT FILES — Teacher Guide / Panduan Cikgu

A first-person 3D detective game for Chrome. Students play **only while the teacher page is open**.
Permainan detektif 3D untuk Chrome. Murid hanya boleh bermain **semasa halaman cikgu dibuka**.

Case 009 "The Birthday Party Mystery" is ready (easy, with a twist). Cases 001–008 and 010 show "Coming soon".

---

## 1. Put it online (GitHub Pages) — one time
1. Make a new GitHub repository (Public), e.g. `midnight-files`.
2. Click **Add file > Upload files**. Drag **all the files in this folder** (NOT the zip itself). Keep them in ONE flat folder — no sub-folders.
3. **Settings > Pages > Branch: main / (root) > Save.** Wait ~1 minute.
4. Your game is at `https://YOURNAME.github.io/midnight-files/`
   - Teacher page: `.../teacher.html`
   - Students use the link the teacher page shows (`.../index.html?c=CODE`).

## 2. Run a class (every lesson)
1. Open `teacher.html` in Chrome. Keep this tab OPEN (do not close it; you can switch to other tabs/windows).
2. Choose: **mode** (Solo / Teams / Free choice of case), **level** (Junior / Standard / Advanced), scare level, timer, grade and subjects.
3. Send the **link** (Copy button) or tell students the **room code**.
4. Students type their name and wait in the lobby. Press **Open** to start. **Pause** freezes everyone. **Close** ends the session and locks all students (their progress is saved first).
5. Watch the table: online, evidence found, questions, hints, minutes, result, exit ticket. **Export CSV** to keep scores.
6. **Preview** button lets you play the case yourself without a code.

Students: WASD move, mouse look, E use/inspect, Shift run, Ctrl crouch, F flashlight, Tab notebook, Esc pause.
Tip: Ctrl+W closes the browser tab and the game; students should use Esc (pause) instead.

## 3. Levels
| Level | Choices | Hints | Timer | Scare |
|---|---|---|---|---|
| Junior | 3 | free | none | 0 (none) |
| Standard | 4 | 3 tokens | 25 min | 1 |
| Advanced | typed answers | 1 token | 15 min | 2 |

Students can only turn scare **down**, never above the teacher setting. A low-graphics switch is in the pause menu (it also turns on automatically on slow computers).

## 4. Your own questions (Google Sheet or CSV)
In teacher.html click **Sample CSV** to get the template. Columns:
`subject, grade, question_en, question_bm, a, b, c, d, answer, hint`
- subject: math, english, science, geography, thinking
- grade: 1–7 (or `all`); answer: a, b, c or d
- Paste a Google Sheet link (Share > Anyone with link can view) and press Load. Bad rows are skipped and counted.
There are also 45 built-in questions (5 subjects x 3 grade bands).

## 5. Adding another case (for later)
One case = one file (copy `case009.js`, change the data, call `MF.registerCase`). Add it to `index.html` and `teacher.html` script lists and set `ready:true` in `archive.js`. The built-in **validator** runs before each case starts and blocks a case that cannot be solved fairly.

## 6. Important limits (please read)
- **Teacher control is "soft".** A static website cannot stop a determined student who knows the teacher page address or opens the preview link on their own. It works well for a normal class.
- **Needs internet.** The room uses PeerJS (free public server). Some strict school networks block it; if students cannot join, try a phone hotspot or another network.
- Progress is saved in each student's browser (same computer + same name). Clearing browser data erases it.
- Chrome on a normal laptop/desktop is recommended. Not made for phones.
- Tested: full play-through, teacher open/pause/close, lock + resume, save/resume, time-up + 5 min extension, wrong/weak answers (headless Chrome, local transport). The live PeerJS connection, real mouse pointer-lock and many students at once were not testable here — please do a 2-computer trial before class.

Files: index.html (student), teacher.html, style.css, mf-*.js (engine), case009.js, archive.js, three.min.js, peerjs.min.js.
