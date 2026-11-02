# Safehouse Heist

A tiny, juicy first-person voxel stealth-heist game for the browser. Through the robber's eyes (gloved hands + crowbar, head bob, mouse/touch look), sneak into the house, crack the safe, grab the loot and get back to the getaway van. Three stars per level: **escape**, **70%+ loot**, **ghost (never spotted)**.

- Three.js (bundled locally, tree-shaken), no runtime CDN for game code
- All geometry and all audio are procedural: **zero image/audio/model files**
- Initial download: `index.html` + one JS bundle, ~160 KB gzipped. Levels are separate lazy-loaded chunks
- Mouse + keyboard and touch (dynamic virtual joystick + buttons), auto-detected
- CrazyGames SDK v3 integrated with a safe fallback everywhere else

## Play locally

The built game is committed, so no build is needed:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080 (ES modules need http://, not file://).

## Controls

| | Desktop | Touch |
|---|---|---|
| Look | Mouse (pointer lock, click the game to capture) | Drag on the right half |
| Move | WASD / Arrows | Drag on the left half (joystick) |
| Dash (noisy!) | Space / Shift / Right click | ⚡ |
| (Coin tip) Hit a security camera with a thrown coin to knock it out for 12 s | | |
| Crouch-sneak (half speed, quiet steps, slower detection; crouching behind low furniture hides you) | Z | 🦶 |
| Smoke bomb (guards, cameras and the dog cannot see into or through the cloud; 1 per run, 2 on Easy) | C / X | 💨 |
| Throw a coin (lures guards to where it lands; walk over it to pick it back up, 3 per run) | Q / G / Middle click | 🪙 |
| Knock out (from behind) / crack safe (hold) | E / Left click | ✋ |
| Pause / Restart / Mute | Esc or P / R / M | ⏸ button |

Level 2 — The Bank (unlocks after escaping Safe House): find the keycard in the manager's office, swipe it at the security door, crack the big vault (slow and loud: guards hear the drilling), then escape. Teller counters, offices, security room, 4 guards, 2 cameras. Bank clerks stand behind the teller counters: if one spots you they scream and sprint for a silent alarm button; knock them out before they reach it. Pulsing laser grids in the corridor and across the vault trip the alarm; time your run or hold E at the breaker in the security room to cut the power.

Hot streak: each escape in a row without a bust adds +10% stash cash (up to +50%); a bust resets it (the busted screen says how long a streak you lost).

Locker (menu): a daily login bonus (+$500 per consecutive day, up to $3,500) and every escape add cash to your stash (a bust keeps 25% of the loot you grabbed). Spend it on gear upgrades: Coin Pouch (+1 coin), Smoke Belt (+1 smoke), Soft Shoes (faster sneaking), Lockpick Kit (wider pick zone, faster safe cracking), Tailor (longer disguise). Gear is off on Daily and Ironman so those stay fair. The menu nudges you when you can afford something.

Outfits (Locker): 13 colour-only robber looks (hoodie, gloves, crowbar) unlocked by trophy count or specific achievements, with a live first-person preview.

Trophies (menu): lifetime stats (heists, escapes, busts, total loot, KOs, contracts, best times per level) and 33 achievements (Ghost, Photo Finish, Laser Dancer, Duct Rat, Nerves of Steel, Combo Breaker, Loyal Crew, Speed Demon, Pacifist, Clean Sweep, Phantom of the Vault, Wardrobe Ninja...), unlocks announced on the results screen.

Level 3 — The Jewelry Store (unlocks after escaping the Bank): a night heist with moonlit/street-lamp lighting. Hold E to smash glowing display cases (loud, jewels burst out; guards who spot a broken case raise the alarm), laser gates into the back rooms, a breaker, a locked office with the safe, and a rooftop escape through the roof hatch instead of the van.

Level 4 — The Museum (unlocks after the Jewelry Store): night heist through a grand hall of pedestals and statues, an antiquities gallery, a gem room and the locked curator's office. Sweeping ceiling spotlights glide along tracks; standing in a light pool builds detection and trips the alarm (smoke and hiding work; the breaker in the gem room kills them). Contract: never step into a spotlight; achievement: Night at the Museum.

City map menu: levels are pins on a stylised night city map (locked pins greyed, dashed heist route, pulsing Daily pin, total stars ★ x/27); tap a pin to see its info, PLAY starts it.

Yawning guards: when a guard pauses on patrol he sometimes yawns, shrinking his vision cone for ~2 s — a short window to slip past.

Level 5 — The Casino (unlocks after the Museum): neon casino floor with banks of slot machines, poker tables and a bar, security office with the keycard, counting room vault, VIP lounge. Hold E at a slot machine for a flashing, jingling jackpot that lures guards (and spits out cash). Two roaming security guards pick random routes across the floor. Contract: distract guards with a slot machine; achievement: High Roller.

Level 6 — The Penthouse (unlocks after the Casino): night-time luxury apartment. A laser-grid hallway with four staggered beams, a sweeping laser across the study in front of the wall safe, the owner asleep beside the keycard in a locked bedroom, a gallery and a kitchen with the breaker box. No van: climb the roof hatch and a getaway helicopter lifts you out over the city. Achievement: Sky High.

Level 7 — The Night Train (unlocks after the Penthouse): four carriages rushing through the night (baggage car, coach, dining car, mail car). A night landscape scrolls past every window, the carriage sways, wheels clack over the rail joints and a low rumble runs under everything. Pick the gangway lock, lift the keycard in the coach, slip past the bartender (he runs for the alarm button), get through the mail-car laser and crack the mail safe, then climb onto the roof for a helicopter pickup. Achievement: Great Train Robbery.

Level 8 — The Warehouse (unlocks after the Night Train): a stormy night at the docks. A maze of stacked crates (they block sight), a break room with the keycard and a TV you can switch on as a lure, a guard dog, sweeping searchlights, a roaming guard and the keycard office with the safe. Achievement: Dock Rat.

Level 9 — The Mansion Gala (unlocks after the Warehouse): you arrive through the staff kitchen dressed as a waiter (40 s disguise: from afar nobody looks twice). Cross the ballroom full of guests, who run for the wall panic buttons if they recognise you, lift the keycard in the library, get past the study guard to the wall safe, raid the gallery (the cloakroom vent leads straight in) and leave by the van. Achievement: Party Crasher.

Route recap: the results and busted screens animate a minimap of your run — your path (green while unseen, red while a guard was onto you), loot grabs, knockouts, where the alarm went off and where you got caught, plus the % of the run you were chased.

Ghost runs: your fastest/best escape per level and difficulty is saved as a route; on the next classic run the minimap shows it as a dashed purple line with a 👻 marker where your best run was at the same moment, the HUD shows its time, and the results screen says whether you beat it.

Settings (⚙ on the menu, or from pause): look sensitivity, field of view, music and SFX volume, invert look Y, screen shake on/off — saved with your progress.

Daily Challenge: one seeded run per day (Normal rules) on a heist picked from the ones you have unlocked (rotates daily, pinned once played) with a mutator of the day (Paranoid Guards, Insomniac Owner, Gold Rush, Butterfingers, Rapid Response, Hungry Hound) and fixed contracts; separate daily best and a day streak.

Difficulty: Easy / Normal / Hard / Ironman (unlocks after any Hard escape: sharper and faster guards, 1 coin, no smoke, 15 s police, ×2.5 score) (menu) changes guard sight range, speed and reaction, coins (4/3/2), alarm timer (60/45/30 s) and radio delay; score multiplier ×0.75 / ×1 / ×1.5 with a separate best score per difficulty.

Guard dog: roams the kitchen and east hallway, follows your scent trail, barks when it finds you (pulls nearby guards in) and sniffs out wardrobes so a guard can drag you out. Throw a coin and it runs off to sniff it. Contract: don't get barked at.

Tutorial: the very first PLAY starts a guided Safe House heist (7-step card: move, look, loot, sneak, pick the lock, crack the safe, escape) with gentler guards and no contracts; skip with T or a tap, replay from the menu.

Lockpicking: the safe room door in Safe House is locked. Press E to start picking and tap E whenever the pin sweeps through the green zone (3 pins, each faster and tighter). A slip rattles the lock and makes noise. Contract: pick a lock without a slip.

Hiding: press E at a wardrobe to climb in and peek out through the slats (heartbeat when guards are close). Alerted guards lose you, unless one saw you get in: then he comes and drags you out. Contract: hide from an alerted guard.

Air vents: low wall grates (marked on the minimap) linked in pairs across the Safe House, Bank, Museum, Casino and Penthouse. Press E to crawl through to the other room, unseen; the grate clanks when you pop out, so nearby guards come to check. Guards who watch you climb in raise the alarm on you. Contract: crawl through an air vent.

Thunderstorm (Jewelry Store, Penthouse): rain falls outside the windows and on the street, lightning flashes the whole scene, and the rolling thunder that follows masks your noise for ~2.5s (dash, smash, clank: guards hear only a third as far). Time your loud moves to the storm.

TV lure (Safe House, Penthouse): press E at a TV to switch it on. The flickering screen and babble pull nearby guards over ("Who turned the TV on?"), and the first to arrive switches it off for good. A free distraction that does not cost a coin. Contract: lure a guard with the TV.

Disguise: hold E over a knocked-out guard to put on his uniform (25 s, your sleeves turn guard-blue). From more than ~2 m away guards barely react to you and cameras ignore you entirely; up close they see your face, dashing gives you away, the dog still smells you, and any alert blows your cover ("You're not Dave!"). The stripped guard wakes up asking where his uniform went. Contract: wear a guard's uniform; achievement: Inside Man (escape in uniform).

Guard chatter: two calm guards passing each other trade a line ("Quiet night, huh?" / "Too quiet."), with storm, new-guy and missing-colleague variants.

Golden briefcase: on about half of normal runs a courier drops a golden briefcase somewhere in the building (announced, blinking on the minimap, with a 30 s countdown pill). Grab it for a 30%-of-stash bonus, or skip the risky detour. Achievement: Special Delivery.

Lucky cats: every heist hides a small golden lucky cat in its farthest corner. Find it for $1,000 and a collection counter (x/9); the menu tells you whether the selected heist's cat is still hidden. Achievements: Curious (first cat), Cat Collector (all 9, unlocks the Lucky Cat outfit).

Heist rank: every run earns XP (score/100 for an escape, a little for a bust), filling a bar from Rookie through Pickpocket, Burglar, Safecracker ... up to Legend. The results and busted screens animate the bar (with a RANK UP! moment), and the city map shows your rank. The menu also shows your next goal (missing stars on the selected heist, trophies to the next outfit, a streak-at-risk reminder for the Daily).

Daily Jobs: three new tasks every day (knock out 5 guards, steal $8,000, survive 3 close calls, pickpocket 3 guards ...), progress carries across runs (busts count too), $1,500 per job and $2,500 for all three. The menu shows the next open job, the JOBS button shows x/3, and the Jobs & Trophies screen lists them.

Heavy loot: gold bars (−6%) and paintings (−10%) slow you down while carried (max −35%, shown as a 🏋 badge); walk back near the van / exit to stash them and get your speed back. Contract: stash heavy loot before cracking the safe.

Pickpocketing: guards carry a visible wallet (and on keycard levels one carries a spare keycard). Behind an unaware guard, tap E to knock him out or HOLD E to lift the wallet / keycard (he gets slightly suspicious while you lift). Contract: pickpocket 2 guards; achievement: Sticky Fingers.

Radio check-ins: a few seconds after a knockout the guard's radio calls "Unit, report in!". Hold E next to him to answer "All clear" (he stays down 8 s longer); miss it and the nearest guard runs over to check (on Hard the alarm goes off). Contract: fake a radio check-in; achievement: Smooth Talker.

Wardrobe checks: after investigating or searching nearby, a guard may walk over and check a wardrobe — if you're inside, you're caught; each wardrobe is checked at most every 15 s.

Shift changes: on Normal a fresh guard walks in through the entrance at ~60 s and ~120 s (Hard/Ironman: 45 s / 90 s) and roams the building on random routes, so slow heists get harder. Off on Easy, Daily and the tutorial.

Smarter guards: a guard who sees a knocked-out colleague runs over and revives them; a guard who spots the opened safe rushes over and raises the alarm (Normal/Hard).

Bonus contracts: every run rolls 3 random side objectives (steal the painting, grab every jewel, lure a guard with a coin, no knockouts, never trigger the alarm, don't wake the owner, escape under 60s, never dash...). They are tracked live on the HUD, pay cash bonuses on the results screen and count toward an all-time total.

Alarm: an alerted guard radios the police after ~2.5 s (knock them out or break line of sight first), and the office camera trips it too. A 45 s police countdown starts with a siren and a police car closing in on the street; escape in time or hold E at the keypad by the front door to disarm.

HUD: crosshair (turns into a ring when an action is possible), minimap with guards and vision cones, objective marker with distance, threat arrows around the crosshair for suspicious/alerted guards, detection badges above heads. Leaving pointer lock (Esc) pauses the game. If pointer lock is unavailable the mouse falls back to drag-to-look.

## Development

```bash
npm install
npm run build   # bundles src/ -> js/ (esbuild, minified, code-split)
```

```
index.html            page, UI and CSS (upload entry point)
js/                   build output (commit it)
src/main.js           app shell: renderer, camera, FP HUD (minimap, markers), UI flow, SDK calls, dynamic resolution
src/game.js           gameplay: player, guards AI (vision cones, suspicion, chase, noise), loot, safe, scoring
src/world.js          procedural level mesh (merged into 1 draw call), safe, van, loot geometry
src/level.js          ASCII level parser (walkability, vision, furniture grouping)
src/levels/           data-driven levels; index.js is the lazy-loading registry
src/chars.js          box characters (guards, owner), squash & stretch
src/viewmodel.js      first-person hands + crowbar (2nd render pass, never clips into walls)
src/fx.js             instanced particles, screen shake, floating text
src/audio.js          WebAudio synth SFX + adaptive music
src/input.js          keyboard / mouse / touch
src/sdk.js            CrazyGames SDK v3 wrapper + save data
```

Adding a level: create `src/levels/levelN.js` in the same format as `level1.js` (ASCII map + guards + values) and register it in `src/levels/index.js`. See `docs/level2-bank.md` for the next level's plan.

## Look

- Procedural canvas textures generated at load (wood planks, wallpaper, wainscot panels, carpet, tiles, brick, rugs, grass, asphalt): no image files.
- Warm lamp + golden window light and ambient occlusion are **baked into vertex colors** at load, so the house renders unlit (cheap on mobile) with soft light pools and contact shadows; characters and hands get a light-probe tint from the same bake.
- Adaptive synthesized score: separate menu groove; in game 4 intensity levels (calm, suspicious, alert, alarm) that add arpeggios, drums and stabs, speed up the tempo and switch on bar lines over an Am-F-C-G pad progression. Surface-specific footsteps (wood, carpet, tile, grass, road) and stereo-panned, wall-muffled guard footsteps.
- Game feel: knockouts trigger hitstop + a short slow-motion window (audio muffled) with a zoom punch and camera roll kick; opening the safe/vault gets a longer slow-mo beat; smashing cases and grabbing valuables kick the camera; busts slam the zoom. Kicks respect the screen-shake setting.
- ACES tone mapping, gradient sky dome, fog, dust motes, lamp glows, window god-rays, guard flashlight beams, vignette, dash speed lines, paper-bill and sparkle particles.

## Performance

- Static level is merged into ~16 meshes (one per material); ~35-70 draw calls total in play, ~50k triangles
- Instanced loot and particles, blob shadows instead of shadow maps
- Pixel ratio capped (1.25 on mobile, 1.75 desktop), no MSAA on mobile, automatic resolution scaling if FPS drops

## CrazyGames upload notes

1. `npm run zip` → creates `safehouse-heist.zip` containing only `index.html` and `js/` (or zip those two by hand).
2. Upload as an **HTML5** game; `index.html` is at the zip root. Orientation: both. Fullscreen-friendly.
3. SDK usage (`src/sdk.js`, `src/main.js`):
   - `SDK.init()` on boot; `loadingStart()` / `loadingStop()` around level setup
   - `gameplayStart()` when a run starts or resumes; `gameplayStop()` on pause, menu, results, busted and during ads
   - `happytime()` on a successful escape
   - **Ads are disabled until full launch** (`ADS_ENABLED = false` in `src/sdk.js`); when enabled: midgame ad (`requestAd('midgame')`) only on Retry, at most every 150 s and never on the first run
   - Rewarded ad: optional "Second chance" button on the Busted screen (once per run, only shown when the SDK is active)
   - Audio is muted and suspended while an ad plays; the game pauses on tab blur / visibility change
   - Saves via `SDK.data` with a `localStorage` fallback
4. No external links, no own ads, English UI. Outside CrazyGames the SDK script fails or reports `disabled` and every call becomes a no-op.
5. Test with the CrazyGames QA tool / `?useLocalSdk=true` before submitting.
