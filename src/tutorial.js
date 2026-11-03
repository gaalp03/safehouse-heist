// Guided first heist: a step-by-step card for brand-new players (Safe House only).
// Every room of the Safe House teaches one trick; `at` drives the on-screen marker for that step.
const inRect = (g, x0, z0, x1, z1) => g.player.x >= x0 && g.player.x <= x1 && g.player.z >= z0 && g.player.z <= z1;
export const TUT_STEPS = [
  { text: ['Move with WASD', 'Drag the left side to move'], done: (g) => Math.hypot(g.player.x - g.L.start.x - 0.5, g.player.z - g.L.start.y - 0.5) > 1.6 },
  { text: ['Move the mouse to look around', 'Drag the right side to look around'], done: (g) => g.lookTotal > 1.2 },
  { text: ['Go in through the front door and grab the cash', 'Go in through the front door and grab the cash'], done: (g) => g.lootGot > 0 },
  { text: ['Press SPACE to dash: fast, but guards can HEAR it', 'Tap DASH to dash: fast, but guards can HEAR it'], done: (g) => g.dashes > 0 },
  { text: ['Press Z to sneak: slow, silent and low', 'Tap the boot to sneak: slow, silent and low'], done: (g) => g.player.crouch, at: { x: 8.5, z: 12.5, label: 'NEXT ROOM' } },
  { text: ['Stay crouched BEHIND the low counter and sneak past the guard', 'Stay crouched BEHIND the low counter and sneak past the guard'],
    done: (g) => inRect(g, 16.6, 7.5, 24, 13), at: { x: 16.5, z: 12.5, label: 'SNEAK HERE' } },
  { text: ['A guard patrols here! Press E at the wardrobe to hide inside', 'A guard patrols here! Tap ✋ at the wardrobe to hide inside'],
    done: (g) => g.hidesUsed > 0, at: { x: 18.5, z: 11.6, label: 'WARDROBE' } },
  { text: ['Wait until he walks away, then press E to step out', 'Wait until he walks away, then tap ✋ to step out'], done: (g) => !g.player.hiding },
  { text: ['Sneak up BEHIND the guard upstairs and CLICK to hit him', 'Sneak up BEHIND the guard upstairs and tap HIT'],
    done: (g) => g.kos > 0, at: { x: 20.5, z: 4.6, label: 'HIT FROM BEHIND' } },
  { text: ['His radio will call in! Stay next to him and HOLD E to answer', 'His radio will call in! Stay next to him and HOLD ✋ to answer'], done: (g) => g.radioFaked > 0 },
  { text: ['HOLD E on him to wear his uniform: guards won\'t spot you from afar', 'HOLD ✋ on him to wear his uniform: guards won\'t spot you from afar'], done: (g) => g.disguises > 0 },
  { text: ['A guard blocks the lounge. Press Q to throw a coin and lure him away', 'A guard blocks the lounge. Tap the coin to throw it and lure him away'],
    done: (g) => g.coinsThrown > 0, at: { x: 15.5, z: 4.5, label: 'LOUNGE' } },
  { text: ['SMOKE BOMB: press C to drop one. Guards can\'t see into or through the cloud!', 'SMOKE BOMB: tap the cloud button. Guards can\'t see into or through the cloud!'],
    done: (g) => g.smokesUsed > 0 && g.time - (g.smokeAt || 0) > 1.2, at: { x: 13.5, z: 4.5, label: 'DROP SMOKE HERE' } },
  { text: ['Pick the lock: press E when the pin is in the green', 'Pick the lock: tap ✋ when the pin is in the green'],
    done: (g) => g.doors.every((d) => d.type !== 'lock' || d.open), at: { x: 8.5, z: 4.5, label: 'LOCKED DOOR' } },
  { text: ['HOLD E at the safe to crack it', 'HOLD ✋ at the safe to crack it'], done: (g) => g.hasStash, at: { x: 5.5, z: 4.4, label: 'SAFE' } },
  { text: ['Press E at the air vent: a secret shortcut back to the entrance', 'Tap ✋ at the air vent: a secret shortcut back to the entrance'],
    done: (g) => g.ventsUsed > 0 || inRect(g, 1, 7.6, 8, 13), at: { x: 2.4, z: 4.5, label: 'AIR VENT' } },
  { text: ['Run back to the van with the stash!', 'Run back to the van with the stash!'], done: (g) => g.state === 'escape' },
];
