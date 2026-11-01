// Parses an ASCII level definition into grids used by rendering, collision, vision and pathfinding.
export const FLOOR = { '.': 'wood', _: 'carpet', ',': 'tile', g: 'grass', p: 'road' };
export const FURN = {
  h: 'shelf', f: 'fridge', b: 'bed', t: 'desk', k: 'counter', c: 'couch', e: 'tv', i: 'table', u: 'tub',
  q: 'plant', n: 'night', r: 'stove', y: 'chair', o: 'toilet', w: 'sink',
};
const TALL = new Set(['h', 'f']);
export const LOOT = { $: 'cash', G: 'gold', J: 'jewel', A: 'art' };

export function parseLevel(def) {
  const rows = def.map;
  const H = rows.length, W = Math.max(...rows.map((r) => r.length));
  const N = W * H;
  const ch = new Array(N);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) ch[y * W + x] = rows[y][x] || 'g';

  const walk = new Uint8Array(N), opaque = new Uint8Array(N), outdoor = new Uint8Array(N);
  const floor = new Array(N);
  const loot = [], furn = [];
  let start = { x: 1, y: 1 }, safe = null, van = null;

  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x, c = ch[i];
    if (c === '#') { opaque[i] = 1; continue; }
    if (FURN[c]) { opaque[i] = TALL.has(c) ? 1 : 0; walk[i] = 0; }
    else if (c === 'S') { safe = { x, y }; walk[i] = 0; }
    else walk[i] = 1;
    if (LOOT[c]) loot.push({ type: LOOT[c], x, y });
    if (c === 'P') start = { x, y };
    if (c === 'V') van = { x, y };
  }
  // infer floor type for non-floor symbols from nearest floor char
  for (let i = 0; i < N; i++) {
    const c = ch[i];
    if (c === '#') continue;
    if (FLOOR[c]) { floor[i] = FLOOR[c]; continue; }
    const x0 = i % W, y0 = (i / W) | 0;
    let found = 'wood';
    search: for (let r = 1; r < 6; r++) {
      for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        const x = x0 + dx, y = y0 + dy;
        if (x < 0 || y < 0 || x >= W || y >= H) continue;
        const f = FLOOR[ch[y * W + x]];
        if (f) { found = f; break search; }
      }
    }
    floor[i] = found;
  }
  for (let i = 0; i < N; i++) outdoor[i] = floor[i] === 'grass' || floor[i] === 'road' ? 1 : 0;

  // van footprint (3 x 2 cells) is solid; exit zone is the tile north of it
  let exit = { x: start.x + 0.5, z: start.y + 0.5 };
  if (van) {
    for (let y = van.y; y <= van.y + 1; y++) for (let x = van.x - 1; x <= van.x + 1; x++) {
      if (x >= 0 && y >= 0 && x < W && y < H) walk[y * W + x] = 0;
    }
    exit = { x: van.x + 0.5, z: van.y - 0.5 };
  }

  // group contiguous furniture of the same char into rectangles
  const seen = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    const c = ch[i];
    if (!FURN[c] || seen[i]) continue;
    let x0 = i % W, y0 = (i / W) | 0, x1 = x0, y1 = y0;
    const stack = [i]; seen[i] = 1;
    while (stack.length) {
      const j = stack.pop(), x = j % W, y = (j / W) | 0;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const k = ny * W + nx;
        if (!seen[k] && ch[k] === c) { seen[k] = 1; stack.push(k); }
      }
    }
    furn.push({ c, type: FURN[c], x0, y0, w: x1 - x0 + 1, d: y1 - y0 + 1 });
  }

  return { W, H, ch, walk, opaque, outdoor, floor, loot, furn, start, safe, van, exit, def };
}
