# Credits

Safehouse Heist is an original game. All content was created for this project.

- **Code, game design, level design:** original.
- **3D models:** none loaded. All geometry (house, furniture, characters, van, loot, trees) is generated procedurally from boxes at runtime (`src/world.js`, `src/chars.js`).
- **Textures / images:** none shipped. All textures are drawn procedurally on canvas at runtime (`src/textures.js`); lighting is baked procedurally (`src/world.js`).
- **Sound effects and music:** none loaded. Synthesized in real time with the Web Audio API (`src/audio.js`).
- **Fonts:** system fonts only.

## Third-party libraries

- [three.js](https://github.com/mrdoob/three.js) r187, MIT License, (c) 2010-2025 three.js authors. Bundled into `js/`.
- [esbuild](https://github.com/evanw/esbuild), MIT License (dev-time bundler only, not shipped).
- CrazyGames HTML5 SDK v3, loaded from `sdk.crazygames.com` as required by the CrazyGames platform.

No CC0 or other external assets are used. If any are added later, list them here with source URL and license.

## Font

- **Lilita One** by Juan Montoreano, SIL Open Font License 1.1 (embedded in index.html as a data URI; license text in `fonts/OFL.txt`). Used for all display text / HUD stickers.

## Sound effects

All recorded sound effects are **CC0 1.0 (public domain)**, free for commercial use, no attribution required (credited here anyway). They were trimmed, peak-normalized and re-encoded to mono 48 kbps MP3 (`sfx/`). A few sounds without a clearly licensed recording (dog bark, police siren, helicopter rotor, train clack, guard mumble, TV babble, heartbeat) and the adaptive music are still synthesized in code with WebAudio.

Sources:
- **Kenney** (kenney.nl): Audio pack (RPG, UI, Digital, Casino, Jingles) and Impact Sounds. License: CC0 1.0. Retrieved from the CC0 GitHub mirrors `ismetcabbar9-oss/kenney-audio-assets` and `Boyquotes/kenney-impact-sounds-for-godot`.
- **wyzowl/sfx-kit** (github.com/wyzowl/sfx-kit): 320 original sound effects. License: CC0 1.0.

| File | Original | Source / license |
|---|---|---|
| `sfx/step_wood0.mp3` | addons/kenney impact sounds/footstep_wood_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_wood1.mp3` | addons/kenney impact sounds/footstep_wood_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_wood2.mp3` | addons/kenney impact sounds/footstep_wood_002.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_wood3.mp3` | addons/kenney impact sounds/footstep_wood_003.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_wood4.mp3` | addons/kenney impact sounds/footstep_wood_004.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_carpet0.mp3` | addons/kenney impact sounds/footstep_carpet_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_carpet1.mp3` | addons/kenney impact sounds/footstep_carpet_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_carpet2.mp3` | addons/kenney impact sounds/footstep_carpet_002.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_carpet3.mp3` | addons/kenney impact sounds/footstep_carpet_003.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_carpet4.mp3` | addons/kenney impact sounds/footstep_carpet_004.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_tile0.mp3` | addons/kenney impact sounds/footstep_concrete_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_tile1.mp3` | addons/kenney impact sounds/footstep_concrete_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_tile2.mp3` | addons/kenney impact sounds/footstep_concrete_002.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_tile3.mp3` | addons/kenney impact sounds/footstep_concrete_003.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_tile4.mp3` | addons/kenney impact sounds/footstep_concrete_004.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_grass0.mp3` | addons/kenney impact sounds/footstep_grass_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_grass1.mp3` | addons/kenney impact sounds/footstep_grass_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_grass2.mp3` | addons/kenney impact sounds/footstep_grass_002.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_grass3.mp3` | addons/kenney impact sounds/footstep_grass_003.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/step_grass4.mp3` | addons/kenney impact sounds/footstep_grass_004.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/ko0.mp3` | addons/kenney impact sounds/impact_punch_heavy_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/ko1.mp3` | addons/kenney impact sounds/impact_punch_heavy_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/ko2.mp3` | addons/kenney impact sounds/impact_punch_heavy_002.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/ko3.mp3` | addons/kenney impact sounds/impact_punch_heavy_003.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/glass0.mp3` | addons/kenney impact sounds/impact_glass_heavy_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/glass1.mp3` | addons/kenney impact sounds/impact_glass_heavy_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/glass2.mp3` | addons/kenney impact sounds/impact_glass_heavy_002.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/clank0.mp3` | addons/kenney impact sounds/impact_metal_medium_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/clank1.mp3` | addons/kenney impact sounds/impact_metal_medium_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/slip0.mp3` | addons/kenney impact sounds/impact_metal_light_000.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/slip1.mp3` | addons/kenney impact sounds/impact_metal_light_001.ogg | Kenney Impact Sounds (kenney.nl), CC0 |
| `sfx/creak0.mp3` | Audio (295 files)/RPG sounds (50 sounds)/creak1.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/creak1.mp3` | Audio (295 files)/RPG sounds (50 sounds)/creak2.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/creak2.mp3` | Audio (295 files)/RPG sounds (50 sounds)/creak3.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/pin.mp3` | Audio (295 files)/RPG sounds (50 sounds)/metalClick.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/vent.mp3` | Audio (295 files)/RPG sounds (50 sounds)/metalLatch.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/pick0.mp3` | Audio (295 files)/RPG sounds (50 sounds)/handleCoins.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/pick1.mp3` | Audio (295 files)/RPG sounds (50 sounds)/handleCoins2.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/clink0.mp3` | Audio (295 files)/Casino sounds (50 sounds)/chipLay1.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/clink1.mp3` | Audio (295 files)/Casino sounds (50 sounds)/chipLay2.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/clink2.mp3` | Audio (295 files)/Casino sounds (50 sounds)/chipLay3.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/click.mp3` | Audio (295 files)/UI sounds (50 sounds)/click1.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/tvon.mp3` | Audio (295 files)/UI sounds (50 sounds)/switch3.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/zap.mp3` | Audio (295 files)/Digital sounds (60 sounds)/zap1.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/lost.mp3` | Audio (295 files)/Digital sounds (60 sounds)/lowDown.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/radioOk.mp3` | Audio (295 files)/Digital sounds (60 sounds)/twoTone1.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/win.mp3` | Audio (295 files)/Jingle sounds (85 sounds)/jingles_SAX/jingles_SAX00.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/bust.mp3` | Audio (295 files)/Jingle sounds (85 sounds)/jingles_HIT/jingles_HIT03.ogg | Kenney Audio Pack (kenney.nl), CC0 |
| `sfx/dash.mp3` | sounds/whooshes/whoosh-fast-medium.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/throw.mp3` | sounds/swishes-and-zips/swish-soft.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/gold.mp3` | sounds/money/money-coin-stack.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/jewel.mp3` | sounds/shimmers/shimmer-short-sparkle.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/art.mp3` | sounds/shimmers/shimmer-medium-bright.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/alert.mp3` | sounds/notifications/notification-attention-clear.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/tick.mp3` | sounds/mechanical/mechanical-ratchet-light.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/safe.mp3` | sounds/mechanical/mechanical-lock-heavy.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/coins.mp3` | sounds/money/money-coins-pour.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/alarm.mp3` | sounds/time/time-alarm.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/thunder.mp3` | sounds/cinematic-hits/cinematic-thunder-big.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/disarm.mp3` | sounds/digital/digital-decrypt.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/contract.mp3` | sounds/notifications/notification-success-chime.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/powerdown.mp3` | sounds/digital/digital-power-down.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/smoke.mp3` | sounds/appear-and-vanish/appear-poof.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/radio.mp3` | sounds/digital/digital-radio.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/jackpot.mp3` | sounds/money/money-register.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/nope.mp3` | sounds/digital/digital-denied.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/star.mp3` | sounds/tones/tone-ding-high.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/combo.mp3` | sounds/tones/tone-ding-mid.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
| `sfx/unlock.mp3` | sounds/notifications/notification-success-fanfare.wav | wyzowl/sfx-kit (github.com/wyzowl/sfx-kit), CC0 |
