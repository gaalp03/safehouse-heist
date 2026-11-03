// LEVEL 1 — SAFE HOUSE. Fully data-driven: map legend is parsed by src/level.js.
//  #  wall            .  wood floor      _  carpet        ,  tile        g grass   p pavement/road
//  h  shelf (tall)    f  fridge (tall)   b  bed           t  desk        k counter
//  c  couch           e  tv stand        i  table         u  bathtub
//  x  wardrobe (hide inside)   L  locked door (pick the lock)
//  q  plant         n  nightstand      r  stove         y  chair       o toilet  w sink
//  $  cash            G  gold bar        J  jewel         A  painting    S  THE SAFE (stash)
//  P  player start    V  getaway van (exit is the sidewalk tile above it)
// Designed as a step-by-step training heist: every room teaches one trick
// (sneak behind cover -> hide -> knock out -> radio -> disguise -> coin lure -> lock -> safe -> vent).
export default {
  id: 'safehouse',
  name: 'Safe House',
  parTime: 150,
  tutorial: true,
  map: [
    'gggggggggggggggggggggggggg',
    'g########################g',
    'g#h....q#q_____q#f,,,,,h#g',
    'g#.G.S..#__J____#,,,,,,,#g',
    'g#......L_______________#g',
    'g#.$....#___$___#,,$,,,,#g',
    'g#q....A#__ccc__#q,,,,,q#g',
    'g###################,####g',
    'g#h....q#,,,,,,,#......h#g',
    'g#.$....#,,,,,,,#.......#g',
    'g#....$.#,,,,,,,#.......#g',
    'g#......#,kkkkk,#.......#g',
    'g#q..$...,,,,,,,..x....q#g',
    'g###.####################g',
    'ggggpggggggggggggggggggggg',
    'ppppPppppppppppppppppppppp',
    'ppppppppVppppppppppppppppp',
    'pppppppppppppppppppppppppp',
  ],
  values: { cash: 100, gold: 500, jewel: 300, art: 800, stash: 1500, bundle: 125, bundles: 8 },
  decor: [
    { type: 'rug', rect: [2, 8, 6, 5], color: 0xffc857 },
    { type: 'rug', rect: [10, 3, 5, 3], color: 0xff9ec4 },
    { type: 'rug', rect: [3, 2, 4, 3], color: 0x4fb7a8 },
  ],
  guards: [
    // sneak room: watches the far wall; the low counter hides a crouching thief
    { post: [12, 8], face: 0, sweep: 0.9, sweepSpeed: 0.55 },
    // hide room: slow patrol across the middle
    { path: [[17, 9], [22, 9]], wait: 2.2, speed: 1.2 },
    // knockout room: stares out of the window, back to the door
    { post: [20, 3], face: Math.PI, sweep: 0.25, sweepSpeed: 0.35 },
    // lounge: blocks the lock, lure him away with a coin
    { post: [10, 4], face: Math.PI / 2, sweep: 0.5, sweepSpeed: 0.5 },
  ],
  panel: { x: 6, y: 13, dx: 0, dy: -1 },
  alarmTime: 60,
  vents: [{ a: [2, 4, -1, 0], b: [2, 10, -1, 0] }],
  tips: ['press Z to sneak: crouching behind the low counter hides you from the guard.', 'hide in the wardrobe until the patrolling guard walks away.', 'knock guards out from BEHIND with a click, then take the uniform.'],
  brief: "A crooked landlord stashes rent money in his bedroom safe. His guards are sleepy. Learn the ropes!",
};
