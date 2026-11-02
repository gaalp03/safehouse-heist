// Guided first heist: a step-by-step card for brand-new players (Safe House only).
export const TUT_STEPS = [
  { text: ['Move with WASD', 'Drag the left side to move'], done: (g) => Math.hypot(g.player.x - g.L.start.x - 0.5, g.player.z - g.L.start.y - 0.5) > 1.6 },
  { text: ['Move the mouse to look around', 'Drag the right side to look around'], done: (g) => g.lookTotal > 1.2 },
  { text: ['Walk over cash to grab it', 'Walk over cash to grab it'], done: (g) => g.lootGot > 0 },
  { text: ['Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)', 'Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)'],
    done: (g) => g.kos > 0 || g.doors.some((d) => d.type === 'lock' && (d.open || Math.hypot(g.player.x - d.x - 0.5, g.player.z - d.y - 0.5) < 2.2)) },
  { text: ['Pick the lock: press E when the pin is in the green', 'Pick the lock: tap ✋ when the pin is in the green'], done: (g) => g.doors.every((d) => d.type !== 'lock' || d.open) },
  { text: ['Hold E at the safe to crack it', 'Hold ✋ at the safe to crack it'], done: (g) => g.hasStash },
  { text: ['Run back to the van with the stash!', 'Run back to the van with the stash!'], done: (g) => g.state === 'escape' },
];
