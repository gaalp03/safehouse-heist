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
