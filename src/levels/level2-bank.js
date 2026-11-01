// LEVEL 2 — THE BANK (design stub). Loaded lazily; the menu shows a "Coming soon" screen.
// Full plan: docs/level2-bank.md. When ready, add `map`, `guards`, etc. in the same format as level1.js
// and drop `comingSoon`. New mechanics are listed under `plan.mechanics` so the loader can grow into them.
export default {
  id: 'bank',
  name: 'The Bank',
  comingSoon: true,
  parTime: 150,
  teaser: [
    'Two floors: lobby, offices & the deep vault',
    'Keycards that open security doors',
    'Laser grids you can time or switch off',
    'Drill the vault while you hold the line',
    'Bigger loot, heavier bags, faster getaway',
  ],
  plan: {
    mechanics: ['keycard', 'securityDoor', 'laserGrid', 'drill', 'heavyLoot', 'alarmTimer'],
    rooms: ['street', 'lobby', 'tellers', 'offices', 'securityRoom', 'vaultCorridor', 'vault'],
  },
  map: null,
};
