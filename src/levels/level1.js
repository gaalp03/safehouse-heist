// LEVEL 1 — SAFE HOUSE. Fully data-driven: map legend is parsed by src/level.js.
//  #  wall            .  wood floor      _  carpet        ,  tile        g grass   p pavement/road
//  h  shelf (tall)    f  fridge (tall)   b  bed           t  desk        k counter
//  c  couch           e  tv stand        i  table         u  bathtub
//  $  cash            G  gold bar        J  jewel         A  painting    S  THE SAFE (stash)
//  P  player start    V  getaway van (exit is the sidewalk tile above it)
export default {
  id: 'safehouse',
  name: 'Safe House',
  parTime: 75,
  tutorial: true,
  map: [
    'gggggggggggggggggggggggggggggg',
    'g############################g',
    'g#hhh....#____bb____#h.....h#g',
    'g#.......#____bb____#.......#g',
    'g#..tt...#____bb____#...S...#g',
    'g#..tt.G.#__J____J__#.......#g',
    'g#.......#__________#...A...#g',
    'g####.#######.########.######g',
    'g#...........................g',
    'g#....$.........$.......$...#g',
    'g#####.#########.######.#####g',
    'g#h....eee....h#,kkkkf#,,,uu#g',
    'g#.............#,,,,,,#,,,uu#g',
    'g#..$.......$..#,,ii,,#,,,,J#g',
    'g#...ccccc.....#,$ii,,#,,,,,#g',
    'g#......G......#,,,,,,#,,,,,#g',
    'g#.............#,,,,,f#,,,,,#g',
    'g######.#####################g',
    'gggggggpgggggggggggggggggggggg',
    'pppppppPpppppppppppppppppppppp',
    'ppppVppppppppppppppppppppppppp',
    'pppppppppppppppppppppppppppppp',
  ],
  values: { cash: 100, gold: 500, jewel: 300, art: 800, stash: 1500, bundle: 125, bundles: 8 },
  decor: [
    { type: 'rug', rect: [4, 12, 7, 2], color: 0xffc857 },
    { type: 'rug', rect: [11, 3, 2, 3], color: 0xff9ec4 },
    { type: 'rug', rect: [22, 4, 5, 3], color: 0xb33951 },
    { type: 'rug', rect: [3, 3, 4, 3], color: 0x4fb7a8 },
  ],
  guards: [
    { path: [[3, 8], [26, 9]], wait: 1.6, speed: 1.9 },
    { path: [[4, 12], [12, 12], [12, 15], [4, 15]], loop: true, wait: 0.8, speed: 1.6 },
    { post: [26, 5], face: -2.36, sweep: 0.8, sweepSpeed: 0.9 },
  ],
  owner: { bed: [14, 2, 2, 3], patrol: [[11, 5], [18, 5], [13, 8], [21, 8]], speed: 1.5 },
  cameras: [{ pos: [8.75, 2.25], face: -0.8, sweep: 0.75, sweepSpeed: 0.8 }],
};
