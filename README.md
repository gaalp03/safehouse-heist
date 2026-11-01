# Safehouse Heist

A tiny, juicy voxel stealth-heist game for the browser. Sneak into the house, crack the safe, grab the loot and get back to the getaway van. Three stars per level: **escape**, **70%+ loot**, **ghost (never spotted)**.

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
| Move | WASD / Arrows | Drag anywhere |
| Dash (noisy!) | Space / Shift / Right click | ⚡ |
| Knock out (from behind) / crack safe (hold) | E / Left click | ✋ |
| Pause / Restart / Mute | P or Esc / R / M | ⏸ button |

## Development

```bash
npm install
npm run build   # bundles src/ -> js/ (esbuild, minified, code-split)
```

```
index.html            page, UI and CSS (upload entry point)
js/                   build output (commit it)
src/main.js           app shell: renderer, camera, UI flow, SDK calls, dynamic resolution
src/game.js           gameplay: player, guards AI (vision cones, suspicion, chase, noise), loot, safe, scoring
src/world.js          procedural level mesh (merged into 1 draw call), safe, van, loot geometry
src/level.js          ASCII level parser (walkability, vision, furniture grouping)
src/levels/           data-driven levels; index.js is the lazy-loading registry
src/chars.js          box characters, x-ray silhouette, squash & stretch
src/fx.js             instanced particles, screen shake, floating text
src/audio.js          WebAudio synth SFX + adaptive music
src/input.js          keyboard / mouse / touch
src/sdk.js            CrazyGames SDK v3 wrapper + save data
```

Adding a level: create `src/levels/levelN.js` in the same format as `level1.js` (ASCII map + guards + values) and register it in `src/levels/index.js`. See `docs/level2-bank.md` for the next level's plan.

## Performance

- Whole static level is one merged vertex-colored mesh; ~50 draw calls total in play
- Instanced loot and particles, blob shadows instead of shadow maps
- Pixel ratio capped (1.25 on mobile, 1.75 desktop), no MSAA on mobile, automatic resolution scaling if FPS drops

## CrazyGames upload notes

1. `npm run zip` → creates `safehouse-heist.zip` containing only `index.html` and `js/` (or zip those two by hand).
2. Upload as an **HTML5** game; `index.html` is at the zip root. Orientation: both. Fullscreen-friendly.
3. SDK usage (`src/sdk.js`, `src/main.js`):
   - `SDK.init()` on boot; `loadingStart()` / `loadingStop()` around level setup
   - `gameplayStart()` when a run starts or resumes; `gameplayStop()` on pause, menu, results, busted and during ads
   - `happytime()` on a successful escape
   - Midgame ad (`requestAd('midgame')`) only on Retry, at most every 150 s and never on the first run
   - Rewarded ad: optional "Second chance" button on the Busted screen (once per run, only shown when the SDK is active)
   - Audio is muted and suspended while an ad plays; the game pauses on tab blur / visibility change
   - Saves via `SDK.data` with a `localStorage` fallback
4. No external links, no own ads, English UI. Outside CrazyGames the SDK script fails or reports `disabled` and every call becomes a no-op.
5. Test with the CrazyGames QA tool / `?useLocalSdk=true` before submitting.
