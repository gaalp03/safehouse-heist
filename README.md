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
| Throw a coin (lures guards to where it lands; walk over it to pick it back up, 3 per run) | Q / G / Middle click | 🪙 |
| Knock out (from behind) / crack safe (hold) | E / Left click | ✋ |
| Pause / Restart / Mute | Esc or P / R / M | ⏸ button |

Level 2 — The Bank (unlocks after escaping Safe House): find the keycard in the manager's office, swipe it at the security door, crack the big vault (slow and loud: guards hear the drilling), then escape. Teller counters, offices, security room, 4 guards, 2 cameras. Pulsing laser grids in the corridor and across the vault trip the alarm; time your run or hold E at the breaker in the security room to cut the power.

Daily Challenge: one seeded run per day (Normal rules) with a mutator of the day (Paranoid Guards, Insomniac Owner, Gold Rush, Butterfingers, Rapid Response, Hungry Hound) and fixed contracts; separate daily best and a day streak.

Difficulty: Easy / Normal / Hard (menu) changes guard sight range, speed and reaction, coins (4/3/2), alarm timer (60/45/30 s) and radio delay; score multiplier ×0.75 / ×1 / ×1.5 with a separate best score per difficulty.

Guard dog: roams the kitchen and east hallway, follows your scent trail, barks when it finds you (pulls nearby guards in) and sniffs out wardrobes so a guard can drag you out. Throw a coin and it runs off to sniff it. Contract: don't get barked at.

Hiding: press E at a wardrobe to climb in and peek out through the slats (heartbeat when guards are close). Alerted guards lose you, unless one saw you get in: then he comes and drags you out. Contract: hide from an alerted guard.

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
