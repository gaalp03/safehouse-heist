// Builds the static level as ONE merged vertex-colored mesh, plus a few dynamic props (safe, van, loot).
import { Mesh, Group, MeshLambertMaterial, OctahedronGeometry } from 'three';
import { GeoBuilder, PX, NX, PY, PZ, NZ } from './geo.js';
import { mulberry32, shade } from './util.js';

export const WALL_H = 1.45;
const C = {
  wallIn: 0xf4eee4, wallOut: 0xd2694c, wallTop: 0x2d3150, base: 0x2d3150, window: 0x9fd8ff, frame: 0xf4eee4,
  wood: [0xe0a96e, 0xd59b5d], carpet: [0x8090ec, 0x7a8ae6], tile: [0xf1f5f8, 0xd6e1ea],
  grass: [0x78cc5c, 0x6fc354, 0x82d466], walk: 0xc8ced8, asphalt: 0x4a5162, line: 0xffe066,
  trunk: 0x8b5a3c, leaf: [0x4fb04a, 0x5cc254, 0x3e9e45], fence: 0xffffff,
};
export const lootMat = () => new MeshLambertMaterial({ vertexColors: true, emissive: 0x262626 });

function furniture(g, f, rng) {
  const { x0, y0, w, d } = f;
  const cx = x0 + w / 2, cz = y0 + d / 2;
  switch (f.type) {
    case 'shelf': {
      g.box(cx, 0, cz, w - 0.08, 1.3, d - 0.12, 0x8a5a3b, { top: 0x6e4630 });
      const books = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0x6c7bf0, 0xff9f43];
      for (let k = 0; k < 3; k++) g.box(cx, 0.15 + k * 0.4, cz, w - 0.02, 0.22, d - 0.06, books[(k + x0) % 5], { faces: PX | NX | PZ | NZ });
      break;
    }
    case 'fridge':
      g.box(cx, 0, cz, w - 0.1, 1.4, d - 0.1, 0xe9f1f7, { top: 0xcfdbe4 });
      g.box(cx + 0.25, 0.6, cz + d / 2 - 0.04, 0.06, 0.4, 0.06, 0x5a6075);
      break;
    case 'bed':
      g.box(cx, 0, cz, w - 0.1, 0.3, d - 0.05, 0x9a6440);
      g.box(cx, 0.3, cz, w - 0.16, 0.16, d - 0.12, 0xffffff);
      g.box(cx, 0.32, cz + 0.4, w - 0.12, 0.18, d - 1.0, 0x5aa9e6, { top: 0x6fb8f0 });
      g.box(cx, 0.46, y0 + 0.35, w - 0.5, 0.12, 0.4, 0xfdfdfd);
      g.box(cx, 0, y0 + 0.05, w - 0.05, 0.85, 0.1, 0x7d4f33);
      break;
    case 'desk':
      g.box(cx, 0.6, cz, w - 0.1, 0.08, d - 0.15, 0xb07a4a);
      for (const sx of [-1, 1]) g.box(cx + sx * (w / 2 - 0.15), 0, cz, 0.12, 0.6, d - 0.3, 0x7d5535);
      g.box(cx - 0.2, 0.68, cz - 0.2, 0.6, 0.38, 0.06, 0x262a3b);
      g.box(cx - 0.2, 0.72, cz - 0.16, 0.52, 0.3, 0.02, 0x59d2ff, { faces: PZ });
      g.box(cx + 0.45, 0.68, cz + 0.2, 0.3, 0.05, 0.22, 0xffffff);
      break;
    case 'counter':
      g.box(cx, 0, cz, w - 0.02, 0.82, d - 0.1, 0xf1ebe0, { top: 0x4b5068 });
      g.box(cx, 0.1, cz + d / 2 - 0.04, w - 0.1, 0.02, 0.02, 0xc9c0b0, { faces: PZ });
      g.box(cx - 0.6, 0.82, cz - 0.05, 0.6, 0.04, 0.5, 0x9aa8b8);
      break;
    case 'couch':
      g.box(cx, 0, cz, w - 0.1, 0.38, d - 0.1, 0xee5a52, { top: 0xff6f66 });
      g.box(cx, 0.38, cz + d / 2 - 0.2, w - 0.1, 0.4, 0.25, 0xd9473f);
      for (const sx of [-1, 1]) g.box(cx + sx * (w / 2 - 0.15), 0.38, cz, 0.24, 0.22, d - 0.1, 0xd9473f);
      for (let k = 0; k < 3; k++) g.box(x0 + 0.9 + k * 1.6, 0.38, cz - 0.05, 0.4, 0.22, 0.12, 0xffd166, { ry: 0.2 });
      break;
    case 'tv':
      g.box(cx, 0, cz, w - 0.1, 0.45, d - 0.3, 0x5b3d2c, { top: 0x48301f });
      g.box(cx, 0.45, cz - 0.1, w - 0.5, 0.75, 0.1, 0x1d2030);
      g.box(cx, 0.5, cz - 0.04, w - 0.62, 0.62, 0.02, 0x3b4cc0, { faces: PZ });
      break;
    case 'table':
      g.box(cx, 0.65, cz, w - 0.1, 0.08, d - 0.1, 0xc98d55);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.box(cx + sx * (w / 2 - 0.15), 0, cz + sz * (d / 2 - 0.15), 0.1, 0.65, 0.1, 0x8b5d3a);
      g.box(cx, 0.73, cz, 0.36, 0.12, 0.36, 0xffffff);
      g.box(cx, 0.85, cz, 0.2, 0.12, 0.2, 0xff7b54);
      break;
    case 'tub':
      g.box(cx, 0, cz, w - 0.1, 0.55, d - 0.1, 0xffffff, { top: 0xffffff });
      g.box(cx, 0.5, cz, w - 0.35, 0.06, d - 0.35, 0x6fd3ff, { faces: PY });
      break;
  }
  rng();
}

export function buildWorld(L) {
  const g = new GeoBuilder();
  const { W, H, ch, floor } = L;
  const rng = mulberry32(1337);
  const isWall = (x, y) => x >= 0 && y >= 0 && x < W && y < H && ch[y * W + x] === '#';
  const isOut = (x, y) => x < 0 || y < 0 || x >= W || y >= H || L.outdoor[y * W + x] === 1;
  const roadTop = L.van ? L.van.y - 1 : H;

  // ---- surroundings (outside the playable grid) ----
  const ext = 40;
  const top = (x0, z0, x1, z1, col) => g.box((x0 + x1) / 2, -0.06, (z0 + z1) / 2, x1 - x0, 0.05, z1 - z0, col, { faces: PY });
  top(-ext, -ext, 0, roadTop, C.grass[0]);
  top(W, -ext, W + ext, roadTop, C.grass[0]);
  top(0, -ext, W, 0, C.grass[0]);
  top(-ext, roadTop, 0, roadTop + 1, C.walk);
  top(W, roadTop, W + ext, roadTop + 1, C.walk);
  top(-ext, roadTop + 1, 0, H, C.asphalt);
  top(W, roadTop + 1, W + ext, H, C.asphalt);
  top(-ext, H, W + ext, H + 1.2, C.walk);
  top(-ext, H + 1.2, W + ext, H + ext, C.grass[1]);
  for (let x = -ext; x < W + ext; x += 2.2) if (x < 0 || x > W - 1) g.box(x + 0.5, -0.01, roadTop + 2, 1.1, 0.02, 0.12, C.line, { faces: PY });
  for (let x = 0; x < W - 1; x += 2.2) g.box(x + 0.5, -0.01, roadTop + 2, 1.1, 0.02, 0.12, C.line, { faces: PY });

  // trees + neighbour houses
  const tree = (x, z) => {
    const s = 0.8 + rng() * 0.5, ry = rng() * 1.5;
    g.box(x, 0, z, 0.3 * s, 0.7 * s, 0.3 * s, C.trunk, { ry });
    g.box(x, 0.6 * s, z, 1.3 * s, 1.0 * s, 1.3 * s, C.leaf[(rng() * 3) | 0], { ry });
    g.box(x, 1.55 * s, z, 0.8 * s, 0.6 * s, 0.8 * s, C.leaf[(rng() * 3) | 0], { ry: ry + 0.4 });
  };
  for (let z = -ext + 2; z < roadTop - 0.5; z += 2.6) for (let x = -ext + 2; x < W + ext - 2; x += 2.6) {
    if (x > -1.5 && x < W + 1 && z > -1.5) continue;
    if (rng() < 0.55) tree(x + (rng() - 0.5) * 1.4, z + (rng() - 0.5) * 1.4);
  }
  const houseCols = [0xffb4a2, 0x9ad1d4, 0xffe29a, 0xc3b1e1, 0xa8e6a3];
  for (let x = -ext + 3, k = 0; x < W + ext; x += 7, k++) {
    const z = H + 4.5 + (k % 2) * 0.8, col = houseCols[k % 5];
    g.box(x, 0, z, 5, 2.2, 4, col, { top: shade(col, 0.7) });
    g.box(x, 2.2, z, 5.4, 0.35, 4.4, 0x5a4a6a);
    for (const wx of [-1.4, 1.4]) g.box(x + wx, 0.9, z - 2.01, 0.8, 0.7, 0.03, C.window, { faces: NZ | PZ });
    g.box(x, 0, z - 2.01, 0.7, 1.2, 0.03, 0x7a4b33, { faces: NZ | PZ });
    if (rng() < 0.8) tree(x + 3.3, z - 1.5);
  }
  // picket fence around the yard
  const fenceRun = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.round(len / 0.5), horiz = z0 === z1;
    g.box((x0 + x1) / 2, 0.28, (z0 + z1) / 2, horiz ? len : 0.06, 0.08, horiz ? 0.06 : len, C.fence);
    g.box((x0 + x1) / 2, 0.55, (z0 + z1) / 2, horiz ? len : 0.06, 0.08, horiz ? 0.06 : len, C.fence);
    for (let k = 0; k <= n; k++) {
      const t = k / n;
      g.box(x0 + (x1 - x0) * t, 0, z0 + (z1 - z0) * t, 0.12, 0.75, 0.12, C.fence);
    }
  };
  fenceRun(-0.05, -0.05, W + 0.05, -0.05);
  fenceRun(-0.05, -0.05, -0.05, roadTop - 0.05);
  fenceRun(W + 0.05, -0.05, W + 0.05, roadTop - 0.05);
  // road barriers at the edges of the playable street
  for (const bx of [-0.25, W + 0.25]) for (let z = roadTop; z < H; z += 0.5) {
    g.box(bx, 0, z + 0.25, 0.3, 0.7, 0.5, ((z * 2) | 0) % 2 ? 0xff4d5e : 0xffffff);
  }

  // ---- playable grid ----
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x, c = ch[i];
    if (c === '#') {
      // wall block: hidden faces culled, interior / exterior colors per side
      let faces = PY;
      const fc = [0, 0, C.wallTop, 0, 0, 0];
      const sides = [[1, 0, PX, 0], [-1, 0, NX, 1], [0, 1, PZ, 4], [0, -1, NZ, 5]];
      for (const [dx, dy, bit, fi] of sides) {
        if (isWall(x + dx, y + dy)) continue;
        faces |= bit;
        const out = isOut(x + dx, y + dy);
        fc[fi] = out ? C.wallOut : C.wallIn;
        if (!out) {
          // baseboard strip
          const bx = x + 0.5 + dx * 0.515, bz = y + 0.5 + dy * 0.515;
          g.box(bx, 0, bz, dx ? 0.03 : 1, 0.14, dy ? 0.03 : 1, C.base, { faces: bit | PY });
        } else if ((x + y) % 3 === 0) {
          // little windows on outside walls
          const wx = x + 0.5 + dx * 0.505, wz = y + 0.5 + dy * 0.505;
          g.box(wx, 0.55, wz, dx ? 0.02 : 0.6, 0.55, dy ? 0.02 : 0.6, C.window, { faces: bit });
          g.box(wx, 0.5, wz, dx ? 0.03 : 0.74, 0.07, dy ? 0.03 : 0.74, C.frame, { faces: bit | PY });
        }
      }
      g.box(x + 0.5, 0, y + 0.5, 1, WALL_H, 1, C.wallIn, { faces, fc });
      continue;
    }
    const f = floor[i];
    let col;
    if (f === 'wood') col = C.wood[y % 2] ;
    else if (f === 'carpet') col = C.carpet[(x + y) % 2];
    else if (f === 'tile') col = C.tile[(x + y) % 2];
    else if (f === 'grass') col = C.grass[(rng() * 3) | 0];
    else col = y === roadTop ? C.walk : C.asphalt;
    if (f !== 'grass' && f !== 'road') {
      let ao = 1;
      if (isWall(x + 1, y) || isWall(x - 1, y) || isWall(x, y + 1) || isWall(x, y - 1)) ao = 0.85;
      else if (isWall(x + 1, y + 1) || isWall(x - 1, y - 1) || isWall(x + 1, y - 1) || isWall(x - 1, y + 1)) ao = 0.93;
      col = shade(col, ao * (0.97 + rng() * 0.06));
    }
    g.box(x + 0.5, -0.05, y + 0.5, 1, 0.05, 1, col, { faces: PY });
    if (f === 'road' && y === roadTop + 1 && x % 2 === 0) g.box(x + 1, -0.01, y + 1, 1.1, 0.02, 0.12, C.line, { faces: PY });
  }
  for (const d of L.def.decor || []) {
    if (d.type === 'rug') {
      const [x, y, w, h] = d.rect;
      g.box(x + w / 2, 0, y + h / 2, w - 0.2, 0.02, h - 0.2, d.color, { faces: PY });
      g.box(x + w / 2, 0, y + h / 2, w - 0.5, 0.025, h - 0.5, shade(d.color, 0.85), { faces: PY });
    }
  }
  for (const f of L.furn) furniture(g, f, rng);

  const mesh = new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true }));
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  return mesh;
}

export function buildSafe() {
  const mat = new MeshLambertMaterial({ vertexColors: true });
  const group = new Group();
  const b = new GeoBuilder();
  b.box(0, 0, 0, 0.9, 1.0, 0.8, 0x4a5170, { top: 0x5d6585 });
  b.box(0, 0.12, 0.38, 0.72, 0.76, 0.05, 0x15171f, { faces: PZ });
  b.box(0, 0.25, 0.3, 0.5, 0.18, 0.1, 0xffc93c, { top: 0xffe27a });
  b.box(-0.12, 0.45, 0.3, 0.2, 0.18, 0.1, 0xffc93c, { top: 0xffe27a });
  b.box(0.13, 0.45, 0.3, 0.2, 0.18, 0.1, 0x3fb950);
  group.add(new Mesh(b.build(), mat));
  const d = new GeoBuilder();
  d.box(0.36, 0.1, 0.03, 0.72, 0.8, 0.06, 0x7b85a8, { faces: 63 });
  d.box(0.36, 0.45, 0.07, 0.2, 0.2, 0.05, 0xffd23f, { faces: 63 });
  d.box(0.36, 0.53, 0.1, 0.04, 0.06, 0.03, 0x22242f, { faces: 63 });
  d.box(0.6, 0.35, 0.08, 0.06, 0.28, 0.06, 0xd8deea, { faces: 63 });
  const door = new Mesh(d.build(), mat);
  door.position.set(-0.36, 0, 0.4);
  group.add(door);
  return { group, door, mat };
}

export function buildVan() {
  const g = new GeoBuilder();
  const body = 0x6b4cff, stripe = 0xffd23f, glass = 0x24304f;
  g.box(0, 0.25, 0, 2.7, 1.05, 1.3, body, { top: 0x7d62ff });
  g.box(1.15, 0.25, 0, 0.6, 0.75, 1.32, body);
  g.box(0, 0.55, 0, 2.72, 0.14, 1.32, stripe, { faces: PX | NX | PZ | NZ });
  g.box(0.95, 0.78, 0, 0.4, 0.4, 1.34, glass, { faces: PZ | NZ });
  g.box(1.36, 0.78, 0, 0.04, 0.4, 1.1, glass, { faces: PX });
  g.box(-0.3, 0.75, -0.66, 1.4, 0.42, 0.03, glass, { faces: NZ });
  g.box(1.52, 0.35, 0.42, 0.06, 0.16, 0.24, 0xfff3b0, { faces: PX });
  g.box(1.52, 0.35, -0.42, 0.06, 0.16, 0.24, 0xfff3b0, { faces: PX });
  g.box(-1.37, 0.4, 0.45, 0.04, 0.18, 0.2, 0xff4d5e, { faces: NX });
  g.box(-1.37, 0.4, -0.45, 0.04, 0.18, 0.2, 0xff4d5e, { faces: NX });
  for (const wx of [-0.85, 0.85]) for (const wz of [-0.6, 0.6]) {
    g.box(wx, 0, wz, 0.5, 0.5, 0.22, 0x1c1e28, { faces: 63 });
    g.box(wx, 0.15, wz + Math.sign(wz) * 0.1, 0.22, 0.22, 0.04, 0xb8c0d0, { faces: wz > 0 ? PZ : NZ });
  }
  const m = new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true }));
  const grp = new Group();
  grp.add(m);
  return { group: grp, body: m };
}

// geometries centered at origin, used by InstancedMesh per loot type
export function lootGeometries() {
  const cash = new GeoBuilder();
  cash.box(0, -0.1, 0, 0.44, 0.13, 0.26, 0x3fb950, { top: 0x6fdc7a, faces: 63 });
  cash.box(0.03, 0.03, -0.02, 0.44, 0.13, 0.26, 0x3fb950, { top: 0x6fdc7a, faces: 63, ry: 0.25 });
  cash.box(0, -0.105, 0, 0.1, 0.14, 0.27, 0xf6e7a8, { faces: 63 });
  cash.box(0.03, 0.025, -0.02, 0.1, 0.14, 0.27, 0xf6e7a8, { faces: 63, ry: 0.25 });
  const gold = new GeoBuilder();
  gold.box(0, -0.12, 0, 0.5, 0.15, 0.26, 0xf5b301, { top: 0xffdd55, faces: 63 });
  gold.box(-0.06, 0.03, 0, 0.4, 0.13, 0.22, 0xf5b301, { top: 0xffe680, faces: 63, ry: 1.2 });
  const jewel = new GeoBuilder();
  const oct = new OctahedronGeometry(0.2, 0);
  oct.scale(1, 1.35, 1);
  jewel.add(oct, 0x3ee8ff);
  jewel.box(0, -0.32, 0, 0.3, 0.06, 0.3, 0xffd23f, { faces: 63 });
  const art = new GeoBuilder();
  art.box(0, -0.32, 0, 0.7, 0.66, 0.08, 0xc08440, { faces: 63 });
  art.box(0, -0.26, 0, 0.56, 0.54, 0.1, 0xff6b6b, { faces: PZ | NZ });
  art.box(-0.1, -0.2, 0, 0.22, 0.3, 0.11, 0x4ecdc4, { faces: PZ | NZ });
  art.box(0.12, -0.05, 0, 0.16, 0.16, 0.11, 0xffe66d, { faces: PZ | NZ });
  return { cash: cash.build(), gold: gold.build(), jewel: jewel.build(), art: art.build() };
}
