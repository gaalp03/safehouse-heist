// LEVEL 7 — THE NIGHT TRAIN. Legend as level1.js plus:
//  K keycard  D security door  L locked gangway door  R roof hatch (helicopter pickup)
// Four carriages rushing through the night: baggage car, coach, dining car and the mail car with the safe.
export default {
  id: 'train',
  name: 'Night Train',
  parTime: 140,
  tutorial: true,
  night: true,
  train: true,
  heli: true,
  noShift: true,
  lampScale: 1.2,
  carpet: 0x6a2a3a,
  safeName: 'mail safe',
  crackTime: 2.6,
  alarmTime: 40,
  map: [
    'ggggggggggggggggggggggggggggggggggggggggggggggg',
    'g#############################################g',
    'g#hh..hh..x.#y.y.y..yKy#kkkk..q..q#hh...S..hh#g',
    'g#..........#.$........#..........#..........#g',
    'g#P...$.....L............ii..ii...D.........R#g',
    'g#..........#.....$..J.#.ii..ii.$.#.G......G.#g',
    'g#hh..tt..G.#y.y.y..y.y#y..y......#hh..A...hh#g',
    'g#############################################g',
    'ggggggggggggggggggggggggggggggggggggggggggggggg',
  ],
  values: { cash: 220, gold: 950, jewel: 520, art: 1500, stash: 6500, bundle: 260, bundles: 10 },
  palette: [
    { wall: 0x6a4a3a, panel: 0x3a2418, curtain: 0xc9a86a },
    { wall: 0x2f4a3a, panel: 0x4a2e1e, curtain: 0xd9b45a },
    { wall: 0x5a2a32, panel: 0x3a2418, curtain: 0xe8d8b0 },
    { wall: 0x2a3550, panel: 0x1a2030, curtain: 0xd9b45a },
  ],
  decor: [
    { type: 'rug', rect: [13, 4, 10, 1], color: 0x8a2a3a },
    { type: 'rug', rect: [35, 4, 9, 1], color: 0x2a3a6a },
  ],
  guards: [
    { path: [[13, 4], [22, 4]], wait: 1.5, speed: 1.5 },
    { path: [[25, 3], [32, 3], [32, 6], [28, 6]], loop: true, wait: 1.0, speed: 1.4 },
    { post: [37, 4], face: -1.57, sweep: 0.8, sweepSpeed: 0.6 },
    { path: [[38, 3], [42, 5]], wait: 1.8, speed: 1.2 },
  ],
  clerks: [
    { post: [26, 3], face: 0, sweep: 0.6, sweepSpeed: 0.5, button: { x: 33, y: 3, dx: 1, dy: 0 } },
  ],
  panel: { x: 2, y: 5, dx: -1, dy: 0 },
  breaker: { x: 11, y: 5, dx: 1, dy: 0 },
  lasers: [
    { cells: [[23, 4]], on: 1.8, off: 1.6, phase: 0 },
    { cells: [[41, 2], [41, 3], [41, 4], [41, 5], [41, 6]], on: 2.0, off: 1.6, phase: 0.8 },
  ],
  cameras: [
    { pos: [13.4, 2.4], face: 2.3, sweep: 0.6, sweepSpeed: 0.6 },
    { pos: [44.6, 2.4], face: -2.3, sweep: 0.6, sweepSpeed: 0.7 },
  ],
  vents: [{ a: [5, 6, 0, 1], b: [31, 6, 0, 1] }],
  tips: ['the baggage-car vent comes out in the dining car.', 'the barman runs for the alarm button. Stop him or stay unseen.', 'the breaker in the baggage car kills the mail-car laser.'],
  brief: 'The overnight express carries a mail safe stuffed with bonds. Mind the gaps.',
};
