// Static level builder: procedural textured low-poly interior with BAKED warm lighting + AO in vertex colors.
// Each material is one merged mesh (~15 draw calls for the whole house). Unlit (MeshBasic) = cheap on mobile.
import {
  Mesh, Group, MeshLambertMaterial, MeshBasicMaterial, OctahedronGeometry, Points, PointsMaterial,
  BufferGeometry, BufferAttribute, AdditiveBlending, DoubleSide, BoxGeometry, CylinderGeometry,
  CanvasTexture, SRGBColorSpace, RepeatWrapping, ClampToEdgeWrapping,
} from 'three';
import { GeoBuilder, PX, NX, PY, NY, PZ, NZ } from './geo.js';
import { mulberry32, shade, clamp } from './util.js';
import { textures } from './textures.js';

export const WALL_H = 1.9;
const TRIM = 0x6e4a32, CROWN = 0xf6f0e6, RAIL = 0xf3ece0;
const ROOMS = [
  { wall: 0xf6e3c4, panel: 0x7f9e8a, curtain: 0xc65a4a }, // cream / sage panels
  { wall: 0xd8e4cf, panel: 0x6f8f7a, curtain: 0xe0a33a },
  { wall: 0xf1cfcb, panel: 0xb5767a, curtain: 0x6a5fa8 },
  { wall: 0xcfdeea, panel: 0x5e7896, curtain: 0xe07b5a },
  { wall: 0xd3ebe0, panel: 0x6aa58e, curtain: 0x3f8fa0 },
  { wall: 0xf4e7b6, panel: 0xb59a5a, curtain: 0x8a5a9a },
];
const BOOKS = [0xc8483f, 0x3e6fa8, 0xe8a33d, 0x4f9a5a, 0x7b5ea7, 0xe8dcc4, 0x2f4858, 0xd8735a, 0x8a6a4a];
const LEAF = [0x4c9a46, 0x5cb054, 0x3f8a48, 0x6cbf5a];
export const lootMat = () => new MeshLambertMaterial({ vertexColors: true, emissive: 0x2a2010 });

// ---------------------------------------------------------------- props
// which side of a prop faces the wall (its back); the front faces away
export function propBack(L, f) { return propFrame(L, f, null, null).back; }
function propFrame(L, f, B, forceBack) {
  const { W: GW, H: GH, ch } = L;
  const isWall = (x, y) => x < 0 || y < 0 || x >= GW || y >= GH || ch[y * GW + x] === '#';
  let back = forceBack;
  if (!back) {
    let best = 0;
    back = [0, -1];
    const sides = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    for (const s of sides) {
      let n = 0;
      if (s[1]) { const y = s[1] < 0 ? f.y0 - 1 : f.y0 + f.d; for (let x = f.x0; x < f.x0 + f.w; x++) n += isWall(x, y); n /= f.w; }
      else { const x = s[0] < 0 ? f.x0 - 1 : f.x0 + f.w; for (let y = f.y0; y < f.y0 + f.d; y++) n += isWall(x, y); n /= f.d; }
      if (n > best + 0.01) { best = n; back = s; }
    }
  }
  const rot = Math.atan2(-back[0], -back[1]);
  const W = back[0] ? f.d : f.w, D = back[0] ? f.w : f.d;
  const cx = f.x0 + f.w / 2, cz = f.y0 + f.d / 2, cs = Math.cos(rot), sn = Math.sin(rot);
  const wpos = (lx, lz) => [cx + lx * cs + lz * sn, cz - lx * sn + lz * cs];
  const b = (bld, lx, y, lz, w, h, d, col, o = {}) => {
    const [x, z] = wpos(lx, lz);
    bld.box(x, y, z, w, h, d, col, { ...o, ry: (o.ry || 0) + rot });
  };
  return { b, W, D, rot, wpos, back };
}

function furniture(L, f, B, rng, lights) {
  const rr = (a, b) => a + rng() * (b - a);
  const P = B.plain, WD = B.woodfine, U = B.unlit;
  let fb;
  if (f.type === 'couch') {
    const tv = L.furn.find((o) => o.type === 'tv');
    fb = tv && tv.y0 < f.y0 ? [0, 1] : [0, -1];
  } else if (f.type === 'chair') {
    const t = L.furn.find((o) => o.type === 'table');
    if (t) {
      const dx = t.x0 + t.w / 2 - (f.x0 + 0.5), dz = t.y0 + t.d / 2 - (f.y0 + 0.5);
      fb = Math.abs(dx) > Math.abs(dz) ? [-Math.sign(dx), 0] : [0, -Math.sign(dz)];
    }
  } else if (f.type === 'desk' || f.type === 'table') fb = [0, -1];
  else if (f.type === 'slots') fb = f.y0 < L.H / 2 ? [0, -1] : [0, 1];
  const { b, W, D, wpos } = propFrame(L, f, B, fb);
  const light = (lx, y, lz, col, I, R) => { const [x, z] = wpos(lx, lz); lights.push({ x, y, z, col, I, R }); };
  // soft contact shadow
  b(B.shadow, 0, 0.012, 0, W + 0.35, 0.001, D + 0.35, 0xffffff, { faces: PY, fit: true });

  switch (f.type) {
    case 'crate': {
      // stacked shipping crates (two high, the top one nudged/rotated), stencil band + corner posts
      const CR = [0xa8794a, 0x8f6a44, 0xb98a55, 0x7d6a52];
      for (let i = 0; i < W; i++) for (let j = 0; j < D; j++) {
        const lx = -W / 2 + i + 0.5, lz = -D / 2 + j + 0.5;
        for (let k = 0; k < 2; k++) {
          const col = CR[(rng() * CR.length) | 0], s = k ? rr(0.72, 0.86) : 0.9, ry = k ? rr(-0.25, 0.25) : 0, ox = k ? rr(-0.06, 0.06) : 0;
          const y = k * 0.86;
          b(WD, lx + ox, y, lz + ox, s, 0.86, s, col, { ry, top: shade(col, 1.12) });
          b(WD, lx + ox, y + 0.38, lz + ox, s + 0.02, 0.1, s + 0.02, shade(col, 0.72), { ry, faces: 63 & ~4 & ~8 });
          for (const cx of [-1, 1]) for (const cz of [-1, 1]) b(WD, lx + ox + cx * (s / 2 - 0.03), y, lz + ox + cz * (s / 2 - 0.03), 0.07, 0.86, 0.07, shade(col, 0.6), { ry });
        }
        if (rng() < 0.3) b(P, lx, 0.38, lz + 0.46, 0.4, 0.12, 0.01, 0x22242f, { faces: 16 });
      }
      break;
    }
    case 'shelf': {
      const wal = 0x7a4e33, h = 1.6;
      for (const s of [-1, 1]) b(WD, s * (W / 2 - 0.04), 0, 0, 0.07, h, D - 0.12, wal);
      b(WD, 0, h - 0.06, 0, W - 0.02, 0.07, D - 0.08, wal);
      b(WD, 0, 0, -D / 2 + 0.09, W - 0.1, h, 0.03, shade(wal, 0.7));
      for (let k = 0; k < 4; k++) {
        const y = 0.06 + k * 0.38;
        b(WD, 0, y, 0, W - 0.1, 0.035, D - 0.18, wal);
        if (k === 3 && rng() < 0.5) { b(P, rr(-0.2, 0.2), y + 0.035, 0, 0.12, 0.2, 0.12, 0x3f8f9a); b(P, 0, y + 0.235, 0, 0.18, 0.18, 0.18, LEAF[1], { ry: 0.6 }); continue; }
        let x = -W / 2 + 0.1;
        while (x < W / 2 - 0.12) {
          const bw = rr(0.04, 0.09), bh = rr(0.2, 0.31), col = BOOKS[(rng() * BOOKS.length) | 0];
          if (rng() < 0.08) { x += 0.12; continue; }
          const lean = rng() < 0.1 ? 0.25 : 0;
          b(P, x + bw / 2, y + 0.035, 0.02, bw, bh, D - 0.32, col, { top: shade(col, 1.25) });
          if (bh > 0.25) b(P, x + bw / 2, y + 0.035 + bh * 0.7, 0.02, bw + 0.004, 0.025, D - 0.31, 0xf2d48a, { faces: PZ | NZ });
          x += bw + 0.006 + lean * 0.1;
        }
      }
      break;
    }
    case 'fridge': {
      const c = 0xe8eef2;
      b(P, 0, 0.04, 0, W - 0.12, 1.55, D - 0.14, c, { top: 0xd9e0e6 });
      b(P, 0, 0, 0.02, W - 0.16, 0.05, D - 0.2, 0x3a3a46);
      b(P, 0, 1.0, D / 2 - 0.068, W - 0.12, 0.015, 0.01, 0xaeb8c0, { faces: PZ });
      b(P, 0.3, 0.55, D / 2 - 0.04, 0.04, 0.35, 0.05, 0xb8c2cc);
      b(P, 0.3, 1.1, D / 2 - 0.04, 0.04, 0.3, 0.05, 0xb8c2cc);
      for (let k = 0; k < 4; k++) b(P, rr(-0.3, 0.15), rr(0.6, 1.45), D / 2 - 0.066, 0.06, 0.06, 0.01, BOOKS[k], { faces: PZ });
      b(P, -0.1, 1.15, D / 2 - 0.066, 0.18, 0.22, 0.008, 0xffffff, { faces: PZ, ry: 0.08 });
      break;
    }
    case 'bed': {
      const fr = 0x9a6644, duv = 0x5c8fc9;
      b(WD, 0, 0.08, 0, W - 0.06, 0.22, D - 0.06, fr);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b(WD, sx * (W / 2 - 0.09), 0, sz * (D / 2 - 0.09), 0.1, 0.1, 0.1, shade(fr, 0.7));
      b(WD, 0, 0, -D / 2 + 0.06, W, 1.05, 0.1, fr);
      b(WD, 0, 1.05, -D / 2 + 0.06, W + 0.06, 0.07, 0.14, shade(fr, 0.85));
      b(WD, 0, 0.45, -D / 2 + 0.115, W - 0.3, 0.45, 0.01, shade(fr, 1.15), { faces: PZ });
      b(P, 0, 0.3, 0.04, W - 0.14, 0.18, D - 0.22, 0xf7f4ee);
      b(P, 0, 0.33, 0.42, W - 0.08, 0.2, D - 0.95, duv, { top: shade(duv, 1.12) });
      b(P, 0, 0.36, -D / 2 + 1.08, W - 0.07, 0.19, 0.22, 0xf0ece4);
      for (const s of [-1, 1]) b(P, s * 0.45, 0.47, -D / 2 + 0.42, 0.78, 0.15, 0.4, 0xffffff, { ry: s * 0.04 });
      b(P, 0, 0.535, D / 2 - 0.42, W - 0.04, 0.03, 0.42, 0xe8a33d);
      b(P, 0, 0.3, D / 2 - 0.205, W - 0.04, 0.26, 0.02, 0xe8a33d, { faces: PZ });
      break;
    }
    case 'desk': {
      const wd = 0xb07a4a;
      b(WD, 0, 0.7, -0.45, W - 0.1, 0.06, 0.8, wd, { top: shade(wd, 1.1) });
      b(WD, -W / 2 + 0.35, 0, -0.45, 0.5, 0.7, 0.72, shade(wd, 0.9));
      for (let k = 0; k < 3; k++) { b(P, -W / 2 + 0.35, 0.08 + k * 0.21, -0.08, 0.42, 0.16, 0.01, shade(wd, 0.75), { faces: PZ }); b(P, -W / 2 + 0.35, 0.15 + k * 0.21, -0.07, 0.12, 0.025, 0.02, 0xd9b45a); }
      b(WD, W / 2 - 0.08, 0, -0.45, 0.06, 0.7, 0.72, shade(wd, 0.9));
      b(P, 0.15, 0.76, -0.7, 0.18, 0.04, 0.14, 0x2a2b36);
      b(P, 0.15, 0.8, -0.7, 0.05, 0.16, 0.05, 0x2a2b36);
      b(P, 0.15, 0.92, -0.7, 0.72, 0.44, 0.05, 0x22232d);
      b(U, 0.15, 0.95, -0.672, 0.64, 0.37, 0.01, 0x5fb4ff, { faces: PZ });
      b(U, 0.0, 1.05, -0.665, 0.25, 0.14, 0.008, 0xbfe6ff, { faces: PZ });
      b(U, 0.32, 1.0, -0.665, 0.18, 0.08, 0.008, 0xffd36e, { faces: PZ });
      b(P, 0.15, 0.76, -0.38, 0.55, 0.025, 0.18, 0x34353f);
      b(P, 0.55, 0.76, -0.38, 0.07, 0.03, 0.1, 0x34353f);
      b(P, -0.5, 0.76, -0.35, 0.3, 0.012, 0.22, 0xffffff, { ry: 0.2 });
      b(P, -0.5, 0.772, -0.35, 0.28, 0.012, 0.2, 0xf3efe0, { ry: -0.1 });
      b(P, 0.78, 0.76, -0.5, 0.08, 0.1, 0.08, 0xd8735a);
      // desk lamp
      b(P, -0.7, 0.76, -0.7, 0.14, 0.03, 0.14, 0x2a2b36);
      b(P, -0.7, 0.79, -0.7, 0.025, 0.32, 0.025, 0x2a2b36);
      b(U, -0.62, 1.05, -0.62, 0.16, 0.1, 0.16, 0xffd99a, { ry: 0.5 });
      light(-0.6, 1.0, -0.55, [1, 0.72, 0.42], 0.75, 2.6);
      // office chair
      b(P, 0, 0, 0.35, 0.5, 0.05, 0.05, 0x2a2b36); b(P, 0, 0, 0.35, 0.05, 0.05, 0.5, 0x2a2b36);
      b(P, 0, 0.05, 0.35, 0.05, 0.35, 0.05, 0x55565f);
      b(P, 0, 0.4, 0.35, 0.48, 0.09, 0.46, 0x3f8f9a, { top: 0x4aa3ad });
      b(P, 0, 0.49, 0.58, 0.46, 0.5, 0.08, 0x3f8f9a);
      break;
    }
    case 'counter': {
      const cab = 0xf1ece2, top = 0x3b3a48;
      b(P, 0, 0, 0.04, W - 0.02, 0.08, D - 0.2, 0x3a3a46);
      b(P, 0, 0.08, 0, W - 0.02, 0.72, D - 0.12, cab);
      const n = Math.max(1, Math.round(W / 0.5));
      for (let k = 0; k < n; k++) {
        const x = -W / 2 + (k + 0.5) * (W / n);
        b(P, x, 0.14, D / 2 - 0.055, W / n - 0.06, 0.6, 0.012, shade(cab, 0.93), { faces: PZ });
        b(P, x + (k % 2 ? -1 : 1) * (W / n / 2 - 0.08), 0.62, D / 2 - 0.04, 0.025, 0.12, 0.025, 0xb59a5a);
      }
      b(P, 0, 0.8, 0.02, W, 0.06, D - 0.06, top, { top: 0x4a4958 });
      b(B.tile, 0, 0.86, -D / 2 + 0.02, W, 0.48, 0.01, 0xffffff, { faces: PZ, us: 0.5 });
      b(P, 0, 1.36, -D / 2 + 0.2, W - 0.02, 0.48, 0.36, cab);
      for (let k = 0; k < n; k++) {
        const x = -W / 2 + (k + 0.5) * (W / n);
        b(P, x, 1.4, -D / 2 + 0.385, W / n - 0.06, 0.4, 0.012, shade(cab, 0.93), { faces: PZ });
        b(P, x, 1.43, -D / 2 + 0.4, 0.12, 0.025, 0.025, 0xb59a5a);
      }
      if (W >= 2) {
        b(P, 0.45, 0.855, 0.05, 0.6, 0.012, 0.42, 0x8e98a2, { faces: PY });
        b(P, 0.45, 0.86, -0.22, 0.04, 0.22, 0.04, 0xc3ccd6); b(P, 0.45, 1.05, -0.12, 0.04, 0.04, 0.2, 0xc3ccd6);
        b(WD, -0.45, 0.86, 0.05, 0.42, 0.03, 0.3, 0xd9a774, { ry: 0.1 });
        b(P, -0.35, 0.89, 0.05, 0.12, 0.06, 0.06, 0xd8735a);
      } else {
        b(P, 0, 0.86, -0.05, 0.22, 0.2, 0.16, 0xd8483f, { top: 0x2f2f38 });
        b(P, 0.1, 0.92, -0.05, 0.03, 0.12, 0.03, 0x2f2f38);
      }
      break;
    }
    case 'stove': {
      const top = 0x23232b;
      b(P, 0, 0, 0.04, W - 0.02, 0.08, D - 0.2, 0x3a3a46);
      b(P, 0, 0.08, 0, W - 0.04, 0.74, D - 0.12, 0xd6dce2);
      b(P, 0, 0.18, D / 2 - 0.055, W - 0.2, 0.42, 0.012, 0x2b2c34, { faces: PZ });
      b(U, 0, 0.26, D / 2 - 0.05, W - 0.36, 0.22, 0.01, 0x6a3a22, { faces: PZ });
      b(P, 0, 0.56, D / 2 - 0.04, W - 0.3, 0.03, 0.03, 0xb8c2cc);
      for (let k = 0; k < 4; k++) b(P, -0.3 + k * 0.2, 0.7, D / 2 - 0.05, 0.05, 0.05, 0.03, 0x2b2c34);
      b(P, 0, 0.82, 0.02, W - 0.02, 0.04, D - 0.06, top);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b(P, sx * 0.2, 0.86, sz * 0.17, 0.2, 0.012, 0.2, 0x4a4a55);
      b(P, 0.2, 0.872, 0.17, 0.3, 0.12, 0.3, 0x9aa4ae, { top: 0x6a7480 });
      b(P, 0, 1.42, -D / 2 + 0.24, W - 0.1, 0.18, 0.44, 0xc3ccd6);
      b(P, 0, 1.6, -D / 2 + 0.12, 0.3, 0.3, 0.22, 0xc3ccd6);
      b(B.tile, 0, 0.86, -D / 2 + 0.02, W, 0.56, 0.01, 0xffffff, { faces: PZ, us: 0.5 });
      break;
    }
    case 'couch': {
      const c = 0x2f8a8e, cl = 0x3aa0a4, leg = 0x5a3a26;
      for (const s of [-1, 1]) for (const z of [-1, 1]) b(WD, s * (W / 2 - 0.2), 0, z * (D / 2 - 0.15), 0.07, 0.1, 0.07, leg);
      b(P, 0, 0.1, 0, W - 0.08, 0.26, D - 0.12, shade(c, 0.85));
      b(P, 0, 0.1, -D / 2 + 0.17, W - 0.08, 0.66, 0.22, c);
      for (const s of [-1, 1]) { b(P, s * (W / 2 - 0.13), 0.1, 0.02, 0.22, 0.44, D - 0.1, c); b(P, s * (W / 2 - 0.13), 0.54, 0.02, 0.26, 0.06, D - 0.06, cl); }
      const n = 3, sw = (W - 0.6) / n;
      for (let k = 0; k < n; k++) {
        const x = -W / 2 + 0.3 + (k + 0.5) * sw;
        b(P, x, 0.36, 0.08, sw - 0.04, 0.13, D - 0.4, cl, { top: shade(cl, 1.1) });
        b(P, x, 0.42, -D / 2 + 0.34, sw - 0.06, 0.38, 0.14, cl, { ry: 0 });
      }
      b(P, -W / 2 + 0.6, 0.49, -0.12, 0.34, 0.3, 0.12, 0xf2b134, { ry: 0.3 });
      b(P, W / 2 - 0.65, 0.49, -0.12, 0.34, 0.3, 0.12, 0xe8654f, { ry: -0.25 });
      b(P, W / 2 - 1.3, 0.49, -0.1, 0.3, 0.27, 0.11, 0xf3ece0, { ry: 0.1 });
      b(P, -0.4, 0.49, 0.05, 1.0, 0.025, 0.55, 0xe8dcc4, { ry: 0.05 });
      break;
    }
    case 'tv': {
      const wal = 0x6e452e;
      for (const s of [-1, 1]) b(WD, s * (W / 2 - 0.15), 0, 0, 0.06, 0.12, 0.06, 0x2a2b36);
      b(WD, 0, 0.12, -0.05, W - 0.1, 0.38, D - 0.45, wal, { top: shade(wal, 1.15) });
      for (let k = 0; k < 3; k++) b(WD, -W / 2 + 0.05 + (k + 0.5) * ((W - 0.1) / 3), 0.16, D / 2 - 0.27, (W - 0.1) / 3 - 0.05, 0.3, 0.012, shade(wal, 1.2), { faces: PZ });
      b(P, 0, 0.62, -0.2, W - 0.4, 0.92, 0.07, 0x16171e);
      b(U, 0, 0.67, -0.163, W - 0.52, 0.8, 0.005, 0x2c4f9e, { faces: PZ });
      b(U, -0.3, 0.75, -0.159, 0.9, 0.35, 0.004, 0x5fa8e8, { faces: PZ });
      b(U, 0.5, 0.85, -0.158, 0.4, 0.22, 0.004, 0xffc857, { faces: PZ });
      b(U, 0.25, 0.73, -0.158, 0.3, 0.12, 0.004, 0x7ad37a, { faces: PZ });
      b(P, 0, 0.5, -0.02, W - 1.0, 0.07, 0.1, 0x22232b);
      b(P, W / 2 - 0.35, 0.5, -0.05, 0.16, 0.22, 0.16, 0xc8673f);
      for (let k = 0; k < 4; k++) b(P, W / 2 - 0.35 + rr(-0.05, 0.05), 0.68 + k * 0.05, -0.05, 0.22, 0.05, 0.08, LEAF[k % 4], { ry: k * 0.8 });
      b(P, -W / 2 + 0.4, 0.5, -0.05, 0.3, 0.06, 0.2, 0x2a2b36);
      light(0, 0.9, 0.35, [0.45, 0.62, 1.0], 0.7, 3.4);
      break;
    }
    case 'table': {
      const oak = 0xd39b62;
      b(WD, 0, 0.66, 0, W - 0.2, 0.07, D - 0.2, oak, { top: shade(oak, 1.08) });
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b(WD, sx * (W / 2 - 0.25), 0, sz * (D / 2 - 0.25), 0.08, 0.66, 0.08, shade(oak, 0.8));
      b(P, 0, 0.73, 0, 0.5, 0.006, D - 0.25, 0xc65a4a);
      b(P, 0, 0.736, 0, 0.36, 0.06, 0.36, 0xffffff, { top: 0xe8e2d6 });
      b(P, -0.06, 0.79, 0.02, 0.12, 0.12, 0.12, 0xe8654f); b(P, 0.08, 0.79, -0.04, 0.11, 0.11, 0.11, 0xf2b134, { ry: 0.5 }); b(P, 0.02, 0.84, 0.08, 0.1, 0.1, 0.1, 0x7ac25a, { ry: 0.2 });
      for (const [px, pz] of [[-0.45, -0.45], [0.45, 0.45]]) { b(P, px, 0.735, pz, 0.28, 0.012, 0.28, 0xffffff); b(P, px + 0.2, 0.735, pz, 0.03, 0.01, 0.2, 0xc3ccd6); }
      break;
    }
    case 'chair': {
      const oak = 0xb98154;
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b(WD, sx * 0.17, 0, sz * 0.17, 0.05, 0.42, 0.05, shade(oak, 0.8));
      b(WD, 0, 0.42, 0, 0.44, 0.05, 0.44, oak);
      b(P, 0, 0.47, 0, 0.38, 0.03, 0.38, 0xc65a4a);
      b(WD, 0, 0.47, -0.19, 0.42, 0.52, 0.05, oak);
      b(WD, 0, 0.82, -0.19, 0.3, 0.1, 0.06, shade(oak, 1.1));
      break;
    }
    case 'tub': {
      b(P, 0, 0, 0, W - 0.12, 0.58, D - 0.12, 0xf4f6f7, { top: 0xffffff });
      b(P, 0, 0.5, 0, W - 0.34, 0.06, D - 0.34, 0x8fd3ea, { faces: PY });
      b(P, 0, 0.58, -D / 2 + 0.15, 0.05, 0.2, 0.05, 0xc3ccd6); b(P, 0, 0.74, -D / 2 + 0.22, 0.05, 0.04, 0.18, 0xc3ccd6);
      b(P, 0.3, 0.56, 0.2, 0.12, 0.1, 0.14, 0xffd23f); b(P, 0.3, 0.64, 0.24, 0.08, 0.08, 0.08, 0xffd23f); b(P, 0.3, 0.66, 0.3, 0.04, 0.03, 0.05, 0xff8a3d);
      b(P, 0, 1.75, D / 2 - 0.08, W - 0.1, 0.025, 0.025, 0xc3ccd6);
      b(P, -W / 2 + 0.35, 0.6, D / 2 - 0.08, 0.6, 1.15, 0.03, 0x8fc8d8);
      for (let k = 0; k < 3; k++) b(P, -W / 2 + 0.15 + k * 0.2, 0.6, D / 2 - 0.06, 0.04, 1.15, 0.035, 0xf6f0e6);
      break;
    }
    case 'slots': {
      // a bank of proper casino slot cabinets, one per cell
      const gold = 0xe0b04a, chrome = 0xc9d2dc, dark = 0x17161f, lit = [0xff4f7a, 0x4cdcff, 0xffd75a, 0x7cff9a];
      for (let k = 0; k < W; k++) {
        const x = -W / 2 + k + 0.5, cab = [0xb3263a, 0x2a4ab3, 0x6a2ab3, 0x1f8a5a][(k + f.x0) % 4], cab2 = shade(cab, 0.62), glow = lit[(k + f.y0) % 4];
        b(P, x, 0, 0, 0.82, 0.12, 0.74, dark);                                   // plinth
        b(P, x, 0.02, 0.371, 0.8, 0.07, 0.008, gold, { faces: PZ });             // kick strip
        b(P, x, 0.12, -0.02, 0.76, 0.58, 0.66, cab2, { top: cab });              // lower cabinet
        b(P, x, 0.3, 0.315, 0.62, 0.3, 0.012, cab, { faces: PZ });               // lower panel
        b(P, x, 0.34, 0.32, 0.5, 0.2, 0.008, shade(cab, 1.3), { faces: PZ });    // panel art
        b(P, x, 0.17, 0.33, 0.36, 0.09, 0.09, chrome);                           // coin tray
        b(P, x, 0.21, 0.37, 0.28, 0.04, 0.03, 0x0d0d12, { faces: PZ | PY });
        b(P, x, 0.7, 0.1, 0.78, 0.07, 0.48, 0x24232e, { top: 0x2e2d3a });        // button deck
        for (let i = 0; i < 3; i++) b(U, x - 0.2 + i * 0.2, 0.77, 0.25, 0.13, 0.035, 0.09, [0xff3b4e, 0xffd23f, 0x3ddc84][i]);
        b(P, x, 0.77, -0.09, 0.76, 0.64, 0.52, cab);                             // upper cabinet
        for (const s of [-1, 1]) { b(P, x + s * 0.385, 0.12, 0.3, 0.035, 1.3, 0.05, chrome); b(P, x + s * 0.385, 0.12, -0.34, 0.03, 1.3, 0.04, shade(cab, 0.5)); }  // front chrome edges, dark rear
        b(P, x, 0.84, 0.172, 0.68, 0.48, 0.012, gold, { faces: PZ });            // screen bezel
        b(P, x, 0.87, 0.18, 0.6, 0.42, 0.01, 0x0b0b10, { faces: PZ });
        for (let r = 0; r < 3; r++) b(B.slotReel, x - 0.19 + r * 0.19, 0.89, 0.187, 0.17, 0.38, 0.004, [0xffffff, 0xfff4e0, 0xffffff][r], { faces: PZ, fit: true });
        b(U, x, 1.075, 0.19, 0.58, 0.014, 0.004, 0xff3040, { faces: PZ });       // payline
        b(P, x, 1.41, -0.06, 0.78, 0.26, 0.5, dark);                              // marquee box
        b(B.slotSign, x, 1.43, 0.192, 0.74, 0.22, 0.004, 0xffffff, { faces: PZ, fit: true });
        b(P, x, 1.67, -0.06, 0.46, 0.05, 0.3, chrome);                            // beacon base
        b(U, x, 1.72, -0.06, 0.2, 0.13, 0.2, glow);                               // beacon dome
        b(P, x + 0.43, 0.82, 0.02, 0.06, 0.14, 0.12, chrome);                     // lever housing
        b(P, x + 0.45, 0.86, 0.02, 0.035, 0.42, 0.035, chrome);                   // lever arm
        b(P, x + 0.45, 1.28, 0.02, 0.1, 0.1, 0.1, 0xe8303e, { top: 0xff6a74 });   // lever ball
      }
      light(0, 1.5, 0.7, [1, 0.5, 0.8], 0.9, 3.4);
      break;
    }
    case 'poker': {
      const felt = 0x1f7a4a, wood = 0x5a2a1a, chips = [0xe8483f, 0x2f7ae8, 0xf2c94c, 0x22242f, 0xf6f0e6];
      b(WD, 0, 0, 0, 0.6, 0.68, 0.6, wood);
      b(WD, 0, 0.68, 0, W - 0.1, 0.08, D - 0.1, wood, { top: shade(wood, 1.2) });
      b(P, 0, 0.76, 0, W - 0.34, 0.012, D - 0.34, felt, { faces: PY });
      b(P, 0, 0.775, 0, W - 0.9, 0.004, 0.02, 0xd9b45a, { faces: PY });
      for (let k = 0; k < 6; k++) { const a = (k / 6) * 6.28, rr = Math.min(W, D) * 0.32; b(P, Math.cos(a) * rr, 0.78, Math.sin(a) * rr, 0.08, 0.03 + (k % 3) * 0.03, 0.08, chips[k % 5]); }
      for (let k = 0; k < 4; k++) b(P, -0.2 + k * 0.13, 0.775, -0.05, 0.1, 0.006, 0.14, 0xffffff, { ry: (k - 1.5) * 0.2 });
      for (const [sx, sz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) b(WD, sx * (W / 2 + 0.3), 0, sz * (D / 2 + 0.3), 0.36, 0.48, 0.36, 0xb33951, { top: 0xd04a5a });
      light(0, 1.4, 0, [1, 0.85, 0.55], 0.9, 2.6);
      break;
    }
    case 'pedestal': {
      const stone = 0xe8e2d6, ex = [0xd9b45a, 0x3f8f9a, 0xb33951, 0x6a5fa8][(f.x0 + f.y0) % 4];
      b(P, 0, 0, 0, 0.62, 0.12, 0.62, shade(stone, 0.85));
      b(P, 0, 0.12, 0, 0.46, 0.7, 0.46, stone);
      b(P, 0, 0.82, 0, 0.6, 0.08, 0.6, shade(stone, 0.92));
      b(P, 0, 0.9, 0, 0.2, 0.22, 0.2, ex, { top: shade(ex, 1.2) });
      b(P, 0, 1.12, 0, 0.12, 0.1, 0.12, shade(ex, 1.15));
      b(P, 0.0, 0.45, 0.235, 0.24, 0.1, 0.01, 0xd9b45a, { faces: PZ });
      light(0, 1.6, 0, [1, 0.85, 0.6], 0.7, 2.0);
      break;
    }
    case 'statue': {
      const st = 0xb8b4ac, dk = shade(st, 0.8);
      b(P, 0, 0, 0, 0.8, 0.35, 0.8, dk, { top: st });
      b(P, 0, 0.35, 0, 0.62, 0.08, 0.62, st);
      b(P, -0.1, 0.43, 0, 0.16, 0.5, 0.18, st); b(P, 0.1, 0.43, 0, 0.16, 0.5, 0.18, st);
      b(P, 0, 0.93, 0, 0.42, 0.45, 0.24, st, { top: dk });
      b(P, -0.27, 0.95, 0.05, 0.12, 0.42, 0.13, st, { ry: 0.2 }); b(P, 0.27, 1.2, 0, 0.12, 0.42, 0.13, st, { ry: -0.6 });
      b(P, 0, 1.38, 0, 0.26, 0.3, 0.26, st, { top: dk });
      b(P, 0, 1.55, -0.02, 0.28, 0.08, 0.28, dk);
      break;
    }
    case 'case': {
      const wd = 0x2a1a22, brass = 0xd9b45a;
      b(WD, 0, 0, 0, W - 0.1, 0.78, D - 0.1, wd, { top: shade(wd, 1.3) });
      b(P, 0, 0.1, D / 2 - 0.06, W - 0.2, 0.55, 0.01, shade(wd, 1.4), { faces: PZ });
      b(P, 0, 0.78, 0, W - 0.06, 0.04, D - 0.06, brass);
      b(U, 0, 0.82, 0, W - 0.2, 0.012, D - 0.2, 0x3a2a5a, { faces: PY });
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b(P, sx * (W / 2 - 0.06), 0.82, sz * (D / 2 - 0.06), 0.04, 0.46, 0.04, brass);
      b(P, 0, 1.28, 0, W - 0.06, 0.03, D - 0.06, brass);
      light(0, 1.05, 0, [0.75, 0.85, 1.0], 0.9, 2.4);
      break;
    }
    case 'wardrobe': {
      const wd = 0x8a5a3c, lt = shade(wd, 1.18), dk = shade(wd, 0.7);
      b(WD, 0, 0, -0.06, 0.92, 1.72, 0.74, wd, { top: dk });
      b(WD, 0, 1.72, -0.06, 0.98, 0.06, 0.8, dk);
      b(WD, 0, 0, -0.06, 0.96, 0.08, 0.78, dk);
      for (const s of [-1, 1]) {
        b(WD, s * 0.225, 0.12, 0.315, 0.42, 1.54, 0.02, lt, { faces: PZ | PX | NX | PY });
        for (let k = 0; k < 9; k++) b(P, s * 0.225, 0.78 + k * 0.09, 0.327, 0.34, 0.025, 0.01, dk, { faces: PZ | PY });
        b(WD, s * 0.225, 0.2, 0.327, 0.34, 0.5, 0.008, shade(lt, 1.08), { faces: PZ });
        b(P, s * 0.04, 0.8, 0.34, 0.03, 0.12, 0.03, 0xd9b45a);
      }
      b(P, 0, 0.12, 0.33, 0.012, 1.54, 0.02, dk, { faces: PZ });
      break;
    }
    case 'teller': {
      const wd = 0x5a3a2a, top = 0xe8e2d6, H = 0.78;
      b(WD, 0, 0, 0.05, W, H, D - 0.3, wd, { top: shade(wd, 1.1) });
      b(P, 0, 0.08, D / 2 - 0.1, W - 0.02, H - 0.16, 0.01, shade(wd, 1.25), { faces: PZ });
      b(P, 0, H, 0.05, W + 0.02, 0.05, D - 0.2, top);
      const n = Math.max(1, Math.round(W));
      for (let k = 0; k <= n; k++) b(P, -W / 2 + (k * W) / n, H + 0.05, 0.05, 0.04, 0.82, 0.04, 0xd9b45a);
      b(P, 0, H + 0.87, 0.05, W, 0.04, 0.06, 0xd9b45a);
      for (let k = 0; k < n; k++) {
        const x = -W / 2 + (k + 0.5) * (W / n);
        b(P, x, H + 0.05, 0.05, 0.3, 0.06, 0.05, 0x2a2b36);
        if (k % 2 === 0) { b(P, x + 0.15, H + 0.05, -0.2, 0.3, 0.22, 0.04, 0x22232d); b(U, x + 0.15, H + 0.09, -0.177, 0.26, 0.15, 0.005, 0x5fb4ff, { faces: PZ }); }
        else b(P, x - 0.1, H + 0.05, -0.15, 0.22, 0.04, 0.16, 0x4fae5a, { top: 0x8fe08a });
      }
      break;
    }
    case 'plant': {
      b(P, 0, 0, 0, 0.36, 0.34, 0.36, 0xc8673f, { top: 0x4a3426 });
      b(P, 0, 0.3, 0, 0.42, 0.06, 0.42, 0xd8774f);
      b(WD, 0, 0.36, 0, 0.05, 0.5, 0.05, 0x6a4a2a);
      for (let k = 0; k < 9; k++) {
        const a = k * 2.4, r = rr(0.08, 0.26), y = rr(0.45, 1.2);
        b(P, Math.cos(a) * r, y, Math.sin(a) * r, rr(0.18, 0.3), 0.04, rr(0.1, 0.16), LEAF[k % 4], { ry: a });
      }
      break;
    }
    case 'night': {
      const wd = 0x9a6644;
      b(WD, 0, 0, 0, W - 0.38, 0.5, D - 0.4, wd, { top: shade(wd, 1.12) });
      b(WD, 0, 0.28, D / 2 - 0.195, W - 0.48, 0.16, 0.01, shade(wd, 1.2), { faces: PZ });
      b(P, 0, 0.35, D / 2 - 0.18, 0.06, 0.03, 0.02, 0xd9b45a);
      b(P, 0, 0.5, -0.05, 0.12, 0.03, 0.12, 0x3a3a46);
      b(P, 0, 0.53, -0.05, 0.05, 0.2, 0.05, 0xd9b45a);
      b(U, 0, 0.72, -0.05, 0.26, 0.18, 0.26, 0xffd9a0);
      b(P, 0.12, 0.5, 0.08, 0.12, 0.03, 0.16, 0x3e6fa8, { ry: 0.3 });
      light(0, 0.8, 0.05, [1, 0.7, 0.42], 0.9, 2.8);
      break;
    }
    case 'toilet': {
      b(P, 0, 0, 0.05, 0.36, 0.38, 0.46, 0xf6f7f8);
      b(P, 0, 0.38, 0.07, 0.4, 0.04, 0.5, 0xffffff);
      b(P, 0, 0.3, -D / 2 + 0.2, 0.44, 0.45, 0.2, 0xf6f7f8, { top: 0xffffff });
      b(P, 0.15, 0.7, -D / 2 + 0.25, 0.06, 0.02, 0.03, 0xc3ccd6);
      break;
    }
    case 'sink': {
      b(P, 0, 0, 0, W - 0.2, 0.8, D - 0.42, 0x6aa58e);
      b(P, 0, 0.12, D / 2 - 0.205, W - 0.3, 0.6, 0.01, shade(0x6aa58e, 1.15), { faces: PZ });
      b(P, 0, 0.8, 0, W - 0.14, 0.05, D - 0.36, 0xffffff);
      b(P, 0, 0.84, 0.02, 0.4, 0.015, 0.28, 0xc9d6de, { faces: PY });
      b(P, 0, 0.85, -D / 2 + 0.26, 0.04, 0.16, 0.04, 0xc3ccd6);
      b(P, 0, 1.0, -D / 2 + 0.03, 0.62, 0.72, 0.03, 0xd9b45a);
      b(U, 0, 1.04, -D / 2 + 0.05, 0.54, 0.64, 0.005, 0xb9d6e4, { faces: PZ });
      b(U, -0.12, 1.3, -D / 2 + 0.054, 0.12, 0.3, 0.004, 0xe6f4fa, { faces: PZ, ry: 0.0 });
      break;
    }
  }
}

// ---------------------------------------------------------------- lighting bake
function makeLighting(L, lights) {
  const { W, H } = L;
  const cellOf = (x, z) => (x < 0 || z < 0 || x >= W || z >= H ? -1 : Math.floor(z) * W + Math.floor(x));
  const opaque = (x, z) => { const c = cellOf(x, z); return c < 0 || L.opaque[c] === 1; };
  const los = (x0, z0, x1, z1) => {
    const dx = x1 - x0, dz = z1 - z0, n = Math.ceil(Math.hypot(dx, dz) / 0.15);
    for (let i = 1; i < n; i++) { const t = i / n; if (opaque(x0 + dx * t, z0 + dz * t)) return false; }
    return true;
  };
  const SUN = [-0.55, 0.7, 0.45], sl = Math.hypot(...SUN); SUN[0] /= sl; SUN[1] /= sl; SUN[2] /= sl;
  const out = [0, 0, 0];
  const solidW = (x, z) => { const c = cellOf(x, z); if (c < 0) return 0; return L.ch[c] === '#' ? 1 : (!L.walk[c] && !L.outdoor[c] ? 0.55 : 0); };
  function lightAt(px, py, pz, nx, ny, nz, omni) {
    const sx = px + nx * 0.14, sz = pz + nz * 0.14;
    const c = cellOf(sx, sz);
    const indoor = c >= 0 && !L.outdoor[c] && L.ch[c] !== '#';
    let r, g, b;
    if (!indoor) {
      const ndl = Math.max(0, nx * SUN[0] + ny * SUN[1] + nz * SUN[2]);
      const sky = 0.55 + 0.45 * ny;
      r = 0.5 * sky + 0.95 * ndl; g = 0.5 * sky + 0.8 * ndl; b = 0.62 * sky + 0.62 * ndl;
      if (L.def.night) {
        r *= 0.14; g *= 0.18; b *= 0.38;
        for (const l of lights) {
          if (!l.street) continue;
          const dx = l.x - px, dy = l.y - py, dz = l.z - pz, d = Math.hypot(dx, dy, dz);
          if (d > l.R) continue;
          const k = 1 - d / l.R, att = l.I * k * k, nd = Math.max(0, (nx * dx + ny * dy + nz * dz) / (d || 1)) * 0.7 + 0.3;
          r += l.col[0] * att * nd; g += l.col[1] * att * nd; b += l.col[2] * att * nd;
        }
      }
    } else {
      const a = 0.85 + 0.15 * ny;
      r = 0.2 * a; g = 0.19 * a; b = 0.27 * a;
      if (L.def.night) { r *= 0.6; g *= 0.65; b *= 0.85; }
      for (const l of lights) {
        const dx = l.x - px, dy = l.y - py, dz = l.z - pz, d = Math.hypot(dx, dy, dz);
        if (d > l.R) continue;
        if (!los(l.x, l.z, sx, sz)) continue;
        const k = 1 - d / l.R, att = l.I * k * k;
        const ndl = omni ? 0.7 : Math.max(0, (nx * dx + ny * dy + nz * dz) / (d || 1)) * 0.75 + 0.25;
        r += l.col[0] * att * ndl; g += l.col[1] * att * ndl; b += l.col[2] * att * ndl;
      }
    }
    // ambient occlusion
    let ao = 1;
    if (py < 0.06 || (indoor && py > WALL_H - 0.08)) {
      let s = 0;
      for (const [ox, oz] of [[0.28, 0.28], [-0.28, 0.28], [0.28, -0.28], [-0.28, -0.28]]) s += solidW(sx + ox, sz + oz);
      ao = 1 - 0.17 * s - (py < 0.06 ? 0.06 : 0.1);
    } else if (py < 0.3 && indoor) ao = 0.9 + py * 0.3;
    out[0] = r * ao; out[1] = g * ao; out[2] = b * ao;
    return out;
  }
  return lightAt;
}
function bake(bld, lightAt) {
  const p = bld.p, n = bld.n, c = bld.c;
  for (let i = 0; i < p.length; i += 3) {
    const l = lightAt(p[i], p[i + 1], p[i + 2], n[i], n[i + 1], n[i + 2], false);
    c[i] *= l[0]; c[i + 1] *= l[1]; c[i + 2] *= l[2];
  }
}

// ---------------------------------------------------------------- main build
// slot machine art: a reel strip (3 symbols) and a bulb-framed LUCKY 7 marquee
let _slotT = null;
function slotTextures() {
  if (_slotT) return _slotT;
  const mk = (w, h, fn) => { const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h); const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t; };
  const reel = mk(64, 128, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#b9b2a2'); bg.addColorStop(0.2, '#fffaf0'); bg.addColorStop(0.8, '#fffaf0'); bg.addColorStop(1, '#b9b2a2');
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    // top: cherry (partial), middle: 7, bottom: BAR (partial)
    g.fillStyle = '#2f9a3a'; g.fillRect(30, -2, 4, 14); g.fillStyle = '#e8303e';
    g.beginPath(); g.arc(24, 14, 9, 0, 6.3); g.arc(40, 16, 9, 0, 6.3); g.fill();
    g.font = 'bold 54px Arial Black, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 6; g.strokeStyle = '#1c1330'; g.strokeText('7', 32, 66); g.fillStyle = '#e8303e'; g.fillText('7', 32, 66);
    g.fillStyle = '#1c1330'; g.fillRect(8, 104, 48, 22); g.fillStyle = '#ffd23f'; g.font = 'bold 15px Arial Black, Arial, sans-serif'; g.fillText('BAR', 32, 116);
  });
  const sign = mk(256, 72, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#ff5fa2'); bg.addColorStop(1, '#a8207a');
    g.fillStyle = '#1c1330'; g.fillRect(0, 0, w, h); g.fillStyle = bg; g.fillRect(6, 6, w - 12, h - 12);
    for (let x = 12; x < w - 6; x += 16) for (const y of [11, h - 11]) { g.fillStyle = '#fff3b0'; g.beginPath(); g.arc(x, y, 3.4, 0, 6.3); g.fill(); }
    g.font = 'bold 38px Arial Black, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 7; g.strokeStyle = '#1c1330'; g.strokeText('LUCKY 7', w / 2, h / 2 + 2);
    const tg = g.createLinearGradient(0, 18, 0, 54); tg.addColorStop(0, '#fff6c0'); tg.addColorStop(1, '#ffb52e');
    g.fillStyle = tg; g.fillText('LUCKY 7', w / 2, h / 2 + 2);
  });
  return (_slotT = { reel, sign });
}

// seamless night landscape strip for the train windows: sky, moonlit hills, tree line, poles, far house lights
function landscapeTexture() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 128;
  const g = c.getContext('2d'), r = mulberry32(77), W = c.width, H = c.height;
  const sky = g.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#0d1430'); sky.addColorStop(0.55, '#24325e'); sky.addColorStop(1, '#3a3f66');
  g.fillStyle = sky; g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(230,236,255,0.8)';
  for (let i = 0; i < 70; i++) g.fillRect(r() * W, r() * H * 0.45, 1.5, 1.5);
  const wrap = (fn) => { fn(0); fn(-W); fn(W); };
  // far hills
  g.fillStyle = '#1b2446';
  g.beginPath(); g.moveTo(0, H);
  for (let x = 0; x <= W; x += 16) g.lineTo(x, 62 + Math.sin((x / W) * Math.PI * 6) * 10 + Math.sin((x / W) * Math.PI * 14) * 5);
  g.lineTo(W, H); g.fill();
  // house lights on the hills
  for (let i = 0; i < 14; i++) { const x = r() * W, y = 70 + r() * 14; wrap((o) => { g.fillStyle = '#ffd38a'; g.fillRect(x + o, y, 3, 2); }); }
  // tree line
  g.fillStyle = '#0c1226';
  for (let i = 0; i < 90; i++) {
    const x = r() * W, h = 14 + r() * 22, w = 8 + r() * 10;
    wrap((o) => { g.beginPath(); g.moveTo(x + o - w, H - 18); g.lineTo(x + o, H - 18 - h); g.lineTo(x + o + w, H - 18); g.fill(); });
  }
  g.fillRect(0, H - 20, W, 20);
  // telegraph poles + wire
  g.strokeStyle = '#05080f'; g.lineWidth = 3;
  for (let x = 40; x < W; x += 128) { g.beginPath(); g.moveTo(x, H); g.lineTo(x, 26); g.stroke(); g.fillStyle = '#05080f'; g.fillRect(x - 9, 30, 18, 3); }
  g.lineWidth = 1; g.beginPath();
  for (let x = 40; x < W + 128; x += 128) { g.moveTo(x, 31); g.quadraticCurveTo(x + 64, 40, x + 128, 31); }
  g.stroke();
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace; t.wrapS = RepeatWrapping; t.wrapT = ClampToEdgeWrapping;
  return t;
}

export function buildWorld(L) {
  const T = textures();
  const B = {
    wood: new GeoBuilder(2), carpet: new GeoBuilder(1), tile: new GeoBuilder(1), wallpaper: new GeoBuilder(1),
    panel: new GeoBuilder(1), brick: new GeoBuilder(0.9), plaster: new GeoBuilder(2), grass: new GeoBuilder(3),
    asphalt: new GeoBuilder(3), concrete: new GeoBuilder(1), plain: new GeoBuilder(1), woodfine: new GeoBuilder(0.8),
    rug: new GeoBuilder(1), unlit: new GeoBuilder(1), shadow: new GeoBuilder(1), patch: new GeoBuilder(1),
    trainN: new GeoBuilder(8), trainS: new GeoBuilder(8), slotReel: new GeoBuilder(1), slotSign: new GeoBuilder(1),
  };
  const TRAIN = !!L.def.train;
  const { W, H, ch, floor } = L;
  const rng = mulberry32(1337);
  const rr = (a, b) => a + rng() * (b - a);
  const isWall = (x, y) => x >= 0 && y >= 0 && x < W && y < H && ch[y * W + x] === '#';
  const isOut = (x, y) => x < 0 || y < 0 || x >= W || y >= H || L.outdoor[y * W + x] === 1;
  const roadTop = L.van ? L.van.y - 1 : (L.def.roadTop ?? H);
  const NIGHT = !!L.def.night, LS = L.def.lampScale || 1;
  const lights = [], glows = [], rays = [];

  // ---- rooms (flood fill, doorways split rooms) ----
  const room = new Int16Array(W * H).fill(-1);
  const isDoor = (x, y) => !isWall(x, y) && ((isWall(x - 1, y) && isWall(x + 1, y)) || (isWall(x, y - 1) && isWall(x, y + 1)));
  const rooms = [];
  for (let i = 0; i < W * H; i++) {
    const x0 = i % W, y0 = (i / W) | 0;
    if (room[i] >= 0 || ch[i] === '#' || L.outdoor[i] || isDoor(x0, y0)) continue;
    const id = rooms.length, cells = [], st = [i];
    room[i] = id;
    while (st.length) {
      const j = st.pop(), x = j % W, y = (j / W) | 0;
      cells.push(j);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy, k = ny * W + nx;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H || room[k] >= 0 || ch[k] === '#' || L.outdoor[k] || isDoor(nx, ny)) continue;
        room[k] = id; st.push(k);
      }
    }
    const PAL = L.def.palette || ROOMS;
    rooms.push({ id, cells, pal: PAL[id % PAL.length] });
  }
  for (let i = 0; i < W * H; i++) if (room[i] < 0 && isDoor(i % W, (i / W) | 0)) {
    const x = i % W, y = (i / W) | 0;
    for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) { const k = (y + dy) * W + x + dx; if (room[k] >= 0) { room[i] = room[k]; break; } }
  }
  const palAt = (x, y) => { const r = x >= 0 && y >= 0 && x < W && y < H ? room[y * W + x] : -1; return r >= 0 ? rooms[r].pal : ROOMS[0]; };
  // ceiling lamps: spread through each room
  for (const r of rooms) {
    let x0 = 1e9, x1 = -1, y0 = 1e9, y1 = -1;
    for (const c of r.cells) { const x = c % W, y = (c / W) | 0; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    const lw = x1 - x0 + 1, lh = y1 - y0 + 1, long = Math.max(lw, lh), n = Math.max(1, Math.round(long / 6));
    for (let k = 0; k < n; k++) {
      const t = (k + 0.5) / n;
      const lx = lw >= lh ? x0 + lw * t : x0 + lw / 2, lz = lw >= lh ? y0 + lh / 2 : y0 + lh * t;
      lights.push({ x: lx, y: WALL_H - 0.4, z: lz, col: NIGHT ? [1, 0.7, 0.5] : [1, 0.74, 0.45], I: 1.75 * LS, R: 5.6, pendant: true });
    }
  }

  // ---- surroundings ----
  const ext = 40;
  const ground = (bld, x0, z0, x1, z1, col) => bld.box((x0 + x1) / 2, -0.06, (z0 + z1) / 2, x1 - x0, 0.05, z1 - z0, col, { faces: PY });
  if (TRAIN) {
    // trackbed: dark fields, a gravel bed, sleepers and two shiny rails running off into the night
    ground(B.grass, -ext, -ext, W + ext, 0.6, 0x6a7a6a);
    ground(B.grass, -ext, H - 0.6, W + ext, H + ext, 0x6a7a6a);
    ground(B.concrete, -ext, 0.6, W + ext, H - 0.6, 0x8a8478);
    for (let x = -ext; x < W + ext; x += 0.7) B.woodfine.box(x, -0.02, H / 2, 0.22, 0.05, H - 2.4, 0x5a3f2c, { faces: PY | PX | NX });
    for (const z of [H / 2 - 1.6, H / 2 + 1.6]) B.plain.box(W / 2, 0, z, W + ext * 2, 0.08, 0.1, 0xb8c0cc, { top: 0xe8eef6 });
  }
  if (!TRAIN) {
  ground(B.grass, -ext, -ext, 0, roadTop, 0xffffff);
  ground(B.grass, W, -ext, W + ext, roadTop, 0xffffff);
  ground(B.grass, 0, -ext, W, 0, 0xffffff);
  ground(B.concrete, -ext, roadTop, 0, roadTop + 1, 0xffffff);
  ground(B.concrete, W, roadTop, W + ext, roadTop + 1, 0xffffff);
  ground(B.asphalt, -ext, roadTop + 1, 0, H, 0xffffff);
  ground(B.asphalt, W, roadTop + 1, W + ext, H, 0xffffff);
  ground(B.concrete, -ext, H, W + ext, H + 1.2, 0xffffff);
  ground(B.grass, -ext, H + 1.2, W + ext, H + ext, 0xffffff);
  for (let x = -ext; x < W + ext; x += 2.2) B.plain.box(x + 0.5, -0.01, roadTop + 2, 1.1, 0.02, 0.12, 0xf2c94c, { faces: PY });
  const tree = (x, z) => {
    const s = 0.8 + rng() * 0.6, ry = rng() * 1.5;
    B.woodfine.box(x, 0, z, 0.28 * s, 0.9 * s, 0.28 * s, 0x7a5236, { ry });
    B.plain.box(x, 0.7 * s, z, 1.4 * s, 1.0 * s, 1.4 * s, LEAF[(rng() * 4) | 0], { ry });
    B.plain.box(x + 0.2 * s, 1.5 * s, z - 0.1 * s, 1.0 * s, 0.8 * s, 1.0 * s, LEAF[(rng() * 4) | 0], { ry: ry + 0.5 });
    B.plain.box(x - 0.1 * s, 2.15 * s, z + 0.1 * s, 0.6 * s, 0.5 * s, 0.6 * s, LEAF[(rng() * 4) | 0], { ry: ry + 0.9 });
  };
  for (let z = -ext + 2; z < roadTop - 0.5; z += 2.6) for (let x = -ext + 2; x < W + ext - 2; x += 2.6) {
    if (x > -1.5 && x < W + 1 && z > -1.5) continue;
    if (rng() < 0.55) tree(x + (rng() - 0.5) * 1.4, z + (rng() - 0.5) * 1.4);
  }
  const houseCols = [0xe8a48e, 0x9cc7c9, 0xeed79a, 0xb9a9d4, 0xa8d4a0];
  for (let x = -ext + 3, k = 0; x < W + ext; x += 7, k++) {
    const z = H + 4.5 + (k % 2) * 0.8, col = houseCols[k % 5];
    B.plain.box(x, 0, z, 5, 2.4, 4, col);
    B.plain.box(x, 2.4, z, 5.5, 0.3, 4.5, 0x5a4058);
    B.plain.box(x, 2.7, z, 4.2, 0.4, 3.4, 0x6a4a66);
    for (const wx of [-1.5, 1.5]) { B.unlit.box(x + wx, 0.95, z - 2.01, 0.8, 0.75, 0.02, 0xffd38a, { faces: NZ }); B.plain.box(x + wx, 0.9, z - 2.03, 0.95, 0.06, 0.06, 0xffffff); }
    B.woodfine.box(x, 0, z - 2.01, 0.75, 1.35, 0.03, 0x7a4b33, { faces: NZ });
    if (rng() < 0.8) tree(x + 3.3, z - 1.5);
  }
  const fenceRun = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.round(len / 0.45), horiz = z0 === z1;
    B.plain.box((x0 + x1) / 2, 0.28, (z0 + z1) / 2, horiz ? len : 0.05, 0.07, horiz ? 0.05 : len, 0xf6f0e6);
    B.plain.box((x0 + x1) / 2, 0.58, (z0 + z1) / 2, horiz ? len : 0.05, 0.07, horiz ? 0.05 : len, 0xf6f0e6);
    for (let k = 0; k <= n; k++) { const t = k / n; B.plain.box(x0 + (x1 - x0) * t, 0, z0 + (z1 - z0) * t, 0.1, 0.8, 0.1, 0xffffff); }
  };
  fenceRun(-0.05, -0.05, W + 0.05, -0.05);
  fenceRun(-0.05, -0.05, -0.05, roadTop - 0.05);
  fenceRun(W + 0.05, -0.05, W + 0.05, roadTop - 0.05);
  for (const bx of [-0.25, W + 0.25]) for (let z = roadTop; z < H; z += 0.5) B.plain.box(bx, 0, z + 0.25, 0.3, 0.7, 0.5, ((z * 2) | 0) % 2 ? 0xe8483f : 0xffffff);
  }

  // ---- grid: floors, walls, ceilings, doors, windows ----
  const quad = (bld, x, y, dx, dy, y0, h, col, seg = 2, o = {}) => {
    const bit = dx > 0 ? PX : dx < 0 ? NX : dy > 0 ? PZ : NZ;
    const fx = x + 0.5 + dx * 0.5 + dx * (o.off || 0), fz = y + 0.5 + dy * 0.5 + dy * (o.off || 0);
    for (let s = 0; s < seg; s++) {
      const t = (s + 0.5) / seg - 0.5;
      bld.box(fx + (dy ? t : 0), y0, fz + (dx ? t : 0), dx ? 0 : 1 / seg, h, dy ? 0 : 1 / seg, col, { faces: bit });
    }
  };
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x, c = ch[i];
    if (c === '#') {
      B.plain.box(x + 0.5, WALL_H, y + 0.5, 1, 0, 1, 0x3a2f4a, { faces: PY });
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        if (isWall(x + dx, y + dy)) continue;
        const out = isOut(x + dx, y + dy);
        const win = (TRAIN ? x % 2 === 0 && dy !== 0 : (x + y) % 3 === 0) && (out || (isOut(x - dx, y - dy) && !isWall(x - dx, y - dy)));
        const fx = x + 0.5 + dx * 0.5, fz = y + 0.5 + dy * 0.5, tw = (w) => [dx ? 0.03 : w, dy ? 0.03 : w];
        const bit = dx > 0 ? PX : dx < 0 ? NX : dy > 0 ? PZ : NZ;
        if (out && TRAIN) {
          // carriage exterior: navy steel with a gold stripe
          quad(B.plain, x, y, dx, dy, 0, WALL_H, 0x2a3552, 2);
          B.plain.box(fx + dx * 0.01, 0.62, fz + dy * 0.01, dx ? 0.02 : 1, 0.08, dy ? 0.02 : 1, 0xd9b45a, { faces: bit });
        } else if (out) {
          quad(B.brick, x, y, dx, dy, 0, WALL_H, 0xffffff, 2);
          B.plain.box(fx + dx * 0.02, 0, fz + dy * 0.02, ...[dx ? 0.04 : 1, 0.2, dy ? 0.04 : 1].slice(0, 1), 0.2, dy ? 0.04 : 1, 0x8a7a6a, { faces: bit | PY });
        } else {
          const pal = palAt(x + dx, y + dy);
          quad(B.panel, x, y, dx, dy, 0, 0.72, pal.panel, 2);
          quad(B.wallpaper, x, y, dx, dy, 0.72, 0.6, pal.wall, 2);
          quad(B.wallpaper, x, y, dx, dy, 1.32, WALL_H - 1.32, pal.wall, 2);
          const [w1, d1] = tw(1.0);
          B.woodfine.box(fx + dx * 0.015, 0, fz + dy * 0.015, w1, 0.13, d1, TRIM, { faces: bit | PY });
          B.plain.box(fx + dx * 0.02, 0.7, fz + dy * 0.02, dx ? 0.04 : 1, 0.05, dy ? 0.04 : 1, RAIL, { faces: bit | PY | NY });
          B.plain.box(fx + dx * 0.02, WALL_H - 0.1, fz + dy * 0.02, dx ? 0.04 : 1, 0.1, dy ? 0.04 : 1, CROWN, { faces: bit | NY });
        }
        if (win) {
          const wf = out ? 0xf6f0e6 : 0xffffff;
          if (TRAIN && !out) (dy > 0 ? B.trainN : B.trainS).box(fx + dx * 0.006, 0.82, fz + dy * 0.006, 0.62, 0.62, 0.01, 0xffffff, { faces: bit });
          else {
          B.unlit.box(fx + dx * 0.006, 0.82, fz + dy * 0.006, dx ? 0.01 : 0.62, 0.62, dy ? 0.01 : 0.62, out ? (NIGHT ? 0x3a4a6a : 0x6f9ec2) : (NIGHT ? 0x4a5a8a : 0xffe2b0), { faces: bit });
          B.unlit.box(fx + dx * 0.008, 1.14, fz + dy * 0.008, dx ? 0.01 : 0.62, 0.3, dy ? 0.01 : 0.62, out ? (NIGHT ? 0x4a5a7a : 0x8fb8d6) : (NIGHT ? 0x6a7aa8 : 0xfff1d0), { faces: bit });
          }
          B.plain.box(fx + dx * 0.02, 0.76, fz + dy * 0.02, dx ? 0.06 : 0.78, 0.06, dy ? 0.06 : 0.78, wf, { faces: 63 & ~NY });
          B.plain.box(fx + dx * 0.02, 1.44, fz + dy * 0.02, dx ? 0.05 : 0.74, 0.05, dy ? 0.05 : 0.74, wf);
          for (const s of [-1, 1]) B.plain.box(fx + dx * 0.02 + (dy ? s * 0.345 : 0), 0.8, fz + dy * 0.02 + (dx ? s * 0.345 : 0), dx ? 0.05 : 0.05, 0.66, dy ? 0.05 : 0.05, wf);
          B.plain.box(fx + dx * 0.02, 1.11, fz + dy * 0.02, dx ? 0.04 : 0.62, 0.035, dy ? 0.04 : 0.62, wf);
          B.plain.box(fx + dx * 0.02, 0.8, fz + dy * 0.02, dx ? 0.04 : 0.035, 0.64, dy ? 0.04 : 0.035, wf);
          if (!out) {
            const pal = palAt(x + dx, y + dy);
            for (const s of [-1, 1]) {
              const ox = dy ? s * 0.48 : 0, oz = dx ? s * 0.48 : 0;
              B.plain.box(fx + dx * 0.06 + ox, 0.55, fz + dy * 0.06 + oz, dx ? 0.06 : 0.2, 1.2, dy ? 0.06 : 0.2, pal.curtain, { top: shade(pal.curtain, 0.8) });
            }
            B.plain.box(fx + dx * 0.07, 1.68, fz + dy * 0.07, dx ? 0.03 : 1.2, 0.03, dy ? 0.03 : 1.2, 0xb59a5a);
            // window light: sun pool on the floor + light source + soft ray
            const px = fx + dx * 0.9, pz = fz + dy * 0.9;
            B.patch.box(px + (dy ? 0.25 : 0), 0.015, pz + (dx ? 0.25 : 0), dx ? 1.0 : 0.8, 0, dy ? 1.0 : 0.8, NIGHT ? 0x6f86d8 : 0xffd9a0, { faces: PY, fit: true });
            lights.push({ x: fx + dx * 0.6, y: 1.1, z: fz + dy * 0.6, col: NIGHT ? [0.45, 0.55, 1.0] : [1, 0.8, 0.55], I: NIGHT ? 0.6 : 0.95, R: 3.6 });
            rays.push([fx + dx * 0.03, fz + dy * 0.03, dx, dy]);
          }
        } else if (!out && (x * 5 + y * 3) % 7 === 0) {
          const art = [0xe8654f, 0x3f8f9a, 0xf2b134, 0x6a5fa8, 0x4f9a5a][(x + y * 2) % 5];
          B.woodfine.box(fx + dx * 0.025, 0.95, fz + dy * 0.025, dx ? 0.05 : 0.56, 0.46, dy ? 0.05 : 0.56, 0x5a3a26, { faces: 63 });
          B.plain.box(fx + dx * 0.035, 1.0, fz + dy * 0.035, dx ? 0.05 : 0.46, 0.36, dy ? 0.05 : 0.46, 0xf6f0e6, { faces: bit });
          B.plain.box(fx + dx * 0.04, 1.03, fz + dy * 0.04, dx ? 0.05 : 0.38, 0.3, dy ? 0.05 : 0.38, art, { faces: bit });
          B.plain.box(fx + dx * 0.045, 1.06, fz + dy * 0.045 , dx ? 0.05 : 0.16, 0.14, dy ? 0.05 : 0.16, shade(art, 0.65), { faces: bit });
          B.plain.box(fx + dx * 0.045 + (dy ? 0.1 : 0), 1.16, fz + dy * 0.045 + (dx ? 0.1 : 0), dx ? 0.05 : 0.08, 0.08, dy ? 0.05 : 0.08, 0xfff1c0, { faces: bit });
        }
      }
      continue;
    }
    const f = floor[i];
    const bld = f === 'wood' ? B.wood : f === 'carpet' ? B.carpet : f === 'tile' ? B.tile : f === 'grass' ? B.grass : y === roadTop ? B.concrete : B.asphalt;
    const tint = f === 'carpet' ? (L.def.carpet || 0x8e9be6) : f === 'tile' ? 0xffffff : 0xffffff;
    const sub = f === 'grass' || f === 'road' ? 1 : 2;
    for (let sy = 0; sy < sub; sy++) for (let sx = 0; sx < sub; sx++) bld.box(x + (sx + 0.5) / sub, -0.05, y + (sy + 0.5) / sub, 1 / sub, 0.05, 1 / sub, tint, { faces: PY });
    if (f === 'road' && y === roadTop + 1 && x % 2 === 0) B.plain.box(x + 1, -0.01, y + 1, 1.1, 0.02, 0.12, 0xf2c94c, { faces: PY });
    if (f !== 'grass' && f !== 'road') {
      for (let sy = 0; sy < 2; sy++) for (let sx = 0; sx < 2; sx++) B.plaster.box(x + 0.25 + sx * 0.5, WALL_H, y + 0.25 + sy * 0.5, 0.5, 0, 0.5, 0xf6efe4, { faces: NY });
    }
    const doorX = isWall(x - 1, y) && isWall(x + 1, y), doorY = isWall(x, y - 1) && isWall(x, y + 1);
    if (doorX || doorY) {
      const pal = palAt(x, y);
      B.plain.box(x + 0.5, 1.55, y + 0.5, 1, WALL_H - 1.55, 1, pal.wall, { faces: doorX ? (NY | PZ | NZ) : (NY | PX | NX) });
      B.plain.box(x + 0.5, 1.55, y + 0.5, doorX ? 1.04 : 1.12, 0.07, doorX ? 1.12 : 1.04, CROWN, { faces: 63 & ~PY });
      for (const s of [-1, 1]) B.plain.box(x + 0.5 + (doorX ? s * 0.48 : 0), 0, y + 0.5 + (doorY ? s * 0.48 : 0), doorX ? 0.07 : 1.12, 1.55, doorY ? 0.07 : 1.12, CROWN, { faces: 63 & ~NY & ~PY });
      // open door leaf resting against an adjacent wall (not for security doors)
      const opts = c === 'D' || c === 'L' ? [] : doorX ? [[-1, 1], [1, 1], [-1, -1], [1, -1]] : [[1, -1], [1, 1], [-1, -1], [-1, 1]];
      for (const [a, bb] of opts) {
        const cx = doorX ? x + a : x + bb, cy = doorX ? y + bb : y + a;
        if (!isWall(doorX ? x + a : x, doorX ? y : y + a) || isWall(cx, cy) || isOut(cx, cy)) continue;
        const ci = cy * W + cx;
        if (!L.walk[ci]) continue;
        const dcol = 0xa8774c;
        if (doorX) {
          const lz = bb > 0 ? y + 1 + 0.04 : y - 0.04, lx = a > 0 ? x + 1 + 0.44 : x - 0.44;
          B.woodfine.box(lx, 0, lz, 0.86, 1.5, 0.05, dcol, { faces: 63 });
          B.plain.box(lx + a * 0.32, 0.72, lz + bb * 0.035, 0.05, 0.05, 0.03, 0xd9b45a, { faces: 63 });
          for (const py of [0.15, 0.85]) B.woodfine.box(lx, py, lz + bb * 0.028, 0.6, 0.55, 0.01, shade(dcol, 1.12), { faces: bb > 0 ? PZ : NZ });
        } else {
          const lx = bb > 0 ? x + 1 + 0.04 : x - 0.04, lz = a > 0 ? y + 1 + 0.44 : y - 0.44;
          B.woodfine.box(lx, 0, lz, 0.05, 1.5, 0.86, dcol, { faces: 63 });
          B.plain.box(lx + bb * 0.035, 0.72, lz + a * 0.32, 0.03, 0.05, 0.05, 0xd9b45a, { faces: 63 });
          for (const py of [0.15, 0.85]) B.woodfine.box(lx + bb * 0.028, py, lz, 0.01, 0.55, 0.6, shade(dcol, 1.12), { faces: bb > 0 ? PX : NX });
        }
        break;
      }
    }
  }
  for (const d of L.def.decor || []) {
    if (d.type === 'rug') {
      const [x, y, w, h] = d.rect;
      B.rug.box(x + w / 2, 0, y + h / 2, w - 0.2, 0.02, h - 0.2, d.color, { faces: PY, fit: true });
    }
  }
  for (const f of L.furn) furniture(L, f, B, rng, lights);

  // pendant lamp fixtures
  for (const l of lights) {
    if (!l.pendant) continue;
    B.plain.box(l.x, l.y + 0.12, l.z, 0.02, WALL_H - l.y - 0.12, 0.02, 0x2a2b36);
    B.plain.box(l.x, WALL_H - 0.02, l.z, 0.16, 0.02, 0.16, 0xf6f0e6);
    B.plain.box(l.x, l.y + 0.02, l.z, 0.46, 0.12, 0.46, 0xe8dcc4, { faces: 63 & ~NY });
    B.plain.box(l.x, l.y + 0.14, l.z, 0.3, 0.06, 0.3, 0xd8cbb0);
    B.unlit.box(l.x, l.y - 0.04, l.z, 0.16, 0.08, 0.16, 0xfff1c8, { faces: 63 });
    B.unlit.box(l.x, l.y + 0.021, l.z, 0.44, 0.001, 0.44, 0xffe0a8, { faces: NY });
    glows.push(l.x, l.y - 0.02, l.z);
  }
  for (const l of lights) if (!l.pendant && l.I > 0.8 && l.y < 1.2 && l.col[2] < 0.5) glows.push(l.x, l.y - 0.05, l.z);
  if (NIGHT) {
    // street lamps along the sidewalk
    for (let x = -10; x < W + 12; x += 6) {
      const z = roadTop + 0.15;
      B.plain.box(x, 0, z, 0.12, 2.6, 0.12, 0x2a2b36);
      B.plain.box(x, 2.55, z + 0.35, 0.1, 0.08, 0.7, 0x2a2b36);
      B.unlit.box(x, 2.45, z + 0.65, 0.3, 0.1, 0.3, 0xffe2a0, { faces: 63 });
      lights.push({ x, y: 2.3, z: z + 0.7, col: [1, 0.78, 0.45], I: 1.6, R: 5.5, street: true });
      glows.push(x, 2.42, z + 0.65);
    }
  }
  if (L.roof) {
    // roof hatch: ladder + dark opening in the ceiling
    const x = L.roof.x + 0.5, z = L.roof.y + 0.5;
    for (const s of [-1, 1]) B.plain.box(x + s * 0.22, 0, z - 0.3, 0.05, WALL_H, 0.05, 0x8a94a4);
    for (let k = 0; k < 6; k++) B.plain.box(x, 0.25 + k * 0.28, z - 0.3, 0.44, 0.04, 0.04, 0xb8c2d0);
    B.unlit.box(x, WALL_H - 0.005, z - 0.1, 0.7, 0.01, 0.7, 0x0a0c18, { faces: NY });
    B.plain.box(x, WALL_H - 0.08, z - 0.1, 0.8, 0.08, 0.8, 0x6a7484, { faces: 63 & ~PY & ~NY });
  }

  // ---- bake lighting ----
  const lightAt = makeLighting(L, lights);
  for (const k of ['wood', 'carpet', 'tile', 'wallpaper', 'panel', 'brick', 'plaster', 'grass', 'asphalt', 'concrete', 'plain', 'woodfine', 'rug']) bake(B[k], lightAt);
  // light probe grid for dynamic characters
  L.light = new Float32Array(W * H * 3);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const v = lightAt(x + 0.5, 1.0, y + 0.5, 0, 0, 0, true);
    const i = (y * W + x) * 3;
    L.light[i] = v[0]; L.light[i + 1] = v[1]; L.light[i + 2] = v[2];
  }

  // ---- meshes ----
  const group = new Group();
  const mk = (bld, mat, order = 0) => {
    if (bld.empty) return;
    const m = new Mesh(bld.build(), mat);
    m.matrixAutoUpdate = false; m.updateMatrix(); m.renderOrder = order;
    group.add(m);
  };
  const lit = (map) => new MeshBasicMaterial({ vertexColors: true, map });
  mk(B.wood, lit(T.wood)); mk(B.carpet, lit(T.carpet)); mk(B.tile, lit(T.tile));
  mk(B.wallpaper, lit(T.wallpaper)); mk(B.panel, lit(T.panel)); mk(B.brick, lit(T.brick));
  mk(B.plaster, lit(T.plaster)); mk(B.grass, lit(T.grass)); mk(B.asphalt, lit(T.asphalt));
  mk(B.concrete, lit(T.concrete)); mk(B.plain, lit(T.plain)); mk(B.woodfine, lit(T.woodfine));
  mk(B.rug, new MeshBasicMaterial({ vertexColors: true, map: T.rug, polygonOffset: true, polygonOffsetFactor: -1 }));
  mk(B.unlit, new MeshBasicMaterial({ vertexColors: true, toneMapped: false }));
  if (!B.slotReel.empty) { const st = slotTextures(); mk(B.slotReel, new MeshBasicMaterial({ vertexColors: true, map: st.reel, toneMapped: false })); mk(B.slotSign, new MeshBasicMaterial({ vertexColors: true, map: st.sign, toneMapped: false })); }
  if (TRAIN) {
    // windows show a scrolling night landscape (north and south sides scroll in opposite uv directions)
    const tex = landscapeTexture(), mats = [];
    for (const [bld, sgn] of [[B.trainN, 1], [B.trainS, -1]]) {
      const t = tex.clone(); t.needsUpdate = true;
      t.repeat.set(1, 8 / 0.62); t.offset.set(0, -0.82 / 0.62);
      const m = new MeshBasicMaterial({ map: t, toneMapped: false });
      m.userData.sgn = sgn; mats.push(m);
      mk(bld, m);
    }
    group.userData.trainMats = mats;
  }
  mk(B.shadow, new MeshBasicMaterial({ map: T.shadow, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }), 1);
  mk(B.patch, new MeshBasicMaterial({ vertexColors: true, map: T.patch, transparent: true, depthWrite: false, blending: AdditiveBlending, polygonOffset: true, polygonOffsetFactor: -3 }), 2);

  // soft god-rays from windows (additive gradient quads)
  if (rays.length) {
    const pos = [], col = [], idx = [];
    for (const [fx, fz, dx, dy] of rays) {
      const tx = dy ? 1 : 0, tz = dx ? 1 : 0, base = pos.length / 3;
      const pts = [
        [fx - tx * 0.3, 1.4, fz - tz * 0.3, 0.16], [fx + tx * 0.3, 1.4, fz + tz * 0.3, 0.16],
        [fx + dx * 1.5 + tx * 0.75, 0.02, fz + dy * 1.5 + tz * 0.75, 0], [fx + dx * 1.5 - tx * 0.15, 0.02, fz + dy * 1.5 - tz * 0.15, 0],
        [fx - tx * 0.3, 0.82, fz - tz * 0.3, 0.12], [fx + tx * 0.3, 0.82, fz + tz * 0.3, 0.12],
        [fx + dx * 0.55 + tx * 0.55, 0.02, fz + dy * 0.55 + tz * 0.55, 0], [fx + dx * 0.55 - tx * 0.05, 0.02, fz + dy * 0.55 - tz * 0.05, 0],
      ];
      for (const p of pts) { pos.push(p[0], p[1], p[2]); if (NIGHT) col.push(0.5, 0.62, 1, p[3] * 0.9); else col.push(1, 0.85, 0.6, p[3]); }
      idx.push(base, base + 1, base + 2, base, base + 2, base + 3, base + 4, base + 5, base + 6, base + 4, base + 6, base + 7);
      idx.push(base, base + 1, base + 5, base, base + 5, base + 4);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
    g.setAttribute('color', new BufferAttribute(new Float32Array(col), 4));
    g.setIndex(idx);
    const m = new Mesh(g, new MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide }));
    m.renderOrder = 5;
    group.add(m);
  }
  // lamp glows (one Points draw call)
  if (glows.length) {
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(glows), 3));
    const m = new Points(g, new PointsMaterial({ map: T.glow, size: 1.1, color: 0xffc77a, transparent: true, depthWrite: false, blending: AdditiveBlending, sizeAttenuation: true }));
    m.renderOrder = 6;
    group.add(m);
  }
  return group;
}

// ---------------------------------------------------------------- dynamic props
export function buildSafe() {
  const mat = new MeshLambertMaterial({ vertexColors: true });
  const group = new Group();
  const b = new GeoBuilder();
  const steel = 0x3e4560, dark = 0x262a3a, gold = 0xe8b33a;
  b.box(0, 0, 0, 0.94, 1.04, 0.84, steel, { top: 0x4b5373 });
  b.box(0, 0, 0, 0.98, 0.06, 0.88, dark);
  b.box(0, 0.98, 0, 0.98, 0.06, 0.88, dark);
  for (const s of [-1, 1]) b.box(s * 0.47, 0.06, 0, 0.04, 0.92, 0.86, dark);
  b.box(0, 0.12, 0.38, 0.74, 0.8, 0.05, 0x0f1016, { faces: PZ });
  b.box(0, 0.14, 0.2, 0.66, 0.02, 0.3, 0x2a2e3e, { faces: PY });
  b.box(0, 0.5, 0.2, 0.66, 0.02, 0.3, 0x2a2e3e, { faces: PY });
  for (let k = 0; k < 3; k++) { b.box(-0.18 + k * 0.18, 0.16, 0.24, 0.16, 0.08, 0.1, gold, { top: 0xffe27a, faces: 63 }); b.box(-0.09 + k * 0.18, 0.24, 0.24, 0.16, 0.08, 0.1, gold, { top: 0xffe27a, faces: 63 }); }
  for (let k = 0; k < 4; k++) b.box(-0.2 + k * 0.13, 0.52, 0.24, 0.11, 0.07 + (k % 2) * 0.03, 0.18, 0x3fb950, { top: 0x6fdc7a, faces: 63 });
  group.add(new Mesh(b.build(), mat));
  const d = new GeoBuilder();
  d.box(0.37, 0.1, 0.035, 0.74, 0.84, 0.07, 0x59618a, { faces: 63 });
  d.box(0.37, 0.16, 0.075, 0.62, 0.72, 0.02, 0x4b5373, { faces: 63 });
  d.box(0.37, 0.46, 0.09, 0.24, 0.24, 0.04, gold, { faces: 63 });
  d.box(0.37, 0.5, 0.115, 0.16, 0.16, 0.03, 0x22242f, { faces: 63 });
  for (let k = 0; k < 8; k++) { const a = (k * Math.PI) / 4; d.box(0.37 + Math.cos(a) * 0.105, 0.574 + Math.sin(a) * 0.105, 0.1, 0.02, 0.02, 0.03, 0xfff1c0, { faces: 63 }); }
  for (const a of [0, 2.1, 4.2]) d.box(0.62 + Math.cos(a) * 0.05, 0.45 + Math.sin(a) * 0.05, 0.12, 0.03, 0.03, 0.1, 0xd8deea, { faces: 63 });
  d.box(0.62, 0.45, 0.1, 0.06, 0.06, 0.06, 0xd8deea, { faces: 63 });
  for (const y of [0.2, 0.8]) d.box(0.03, y, 0.04, 0.06, 0.12, 0.09, dark, { faces: 63 });
  const door = new Mesh(d.build(), mat);
  door.position.set(-0.37, 0, 0.42);
  group.add(door);
  return { group, door, mat };
}

export function buildVan() {
  const g = new GeoBuilder();
  const body = 0x5b46d6, stripe = 0xf2b134, glass = 0x24304f;
  g.box(0, 0.25, 0, 2.7, 1.05, 1.3, body, { top: 0x6d58e8 });
  g.box(1.15, 0.25, 0, 0.6, 0.75, 1.32, body);
  g.box(0, 0.55, 0, 2.72, 0.14, 1.32, stripe, { faces: PX | NX | PZ | NZ });
  g.box(0.95, 0.78, 0, 0.4, 0.4, 1.34, glass, { faces: PZ | NZ });
  g.box(1.36, 0.78, 0, 0.04, 0.4, 1.1, glass, { faces: PX });
  g.box(-0.3, 0.75, -0.66, 1.4, 0.42, 0.03, glass, { faces: NZ });
  g.box(0, 1.3, 0, 1.6, 0.06, 1.0, 0x2a2b36);
  g.box(1.5, 0.22, 0, 0.12, 0.12, 1.34, 0x2a2b36);
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

// getaway helicopter (Penthouse roof extraction). Nose points +x like the van.
export function buildHeli() {
  const g = new GeoBuilder();
  const body = 0x22252f, stripe = 0xf2b134, glass = 0x6fb7ff, dark = 0x14161c;
  g.box(0, 0, 0, 2.2, 1.0, 1.1, body, { top: 0x2c303c });
  g.box(1.25, 0.1, 0, 0.5, 0.75, 0.95, glass);
  g.box(0.35, 0.45, 0, 1.0, 0.36, 1.12, glass, { faces: PZ | NZ });
  g.box(0, 0.32, 0, 2.22, 0.1, 1.12, stripe, { faces: PX | NX | PZ | NZ });
  g.box(-1.9, 0.45, 0, 1.9, 0.26, 0.26, body);
  g.box(-2.8, 0.45, 0, 0.3, 0.75, 0.08, stripe);
  g.box(0, 1.0, 0, 0.5, 0.22, 0.5, dark);
  for (const z of [-0.62, 0.62]) {
    g.box(0, -0.42, z, 2.2, 0.07, 0.08, dark, { faces: 63 });
    g.box(0.5, -0.24, z * 0.92, 0.07, 0.36, 0.07, dark, { faces: 63 });
    g.box(-0.5, -0.24, z * 0.92, 0.07, 0.36, 0.07, dark, { faces: 63 });
  }
  g.box(1.5, -0.28, 0, 0.1, 0.12, 0.3, 0xfff3b0);
  const grp = new Group();
  grp.add(new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true })));
  const rotor = new Group(), bladeMat = new MeshBasicMaterial({ color: 0x0c0d12 });
  for (let i = 0; i < 2; i++) { const b = new Mesh(new BoxGeometry(5.2, 0.04, 0.22), bladeMat); b.rotation.y = i * Math.PI / 2; rotor.add(b); }
  rotor.position.y = 1.16; grp.add(rotor);
  const tail = new Group();
  tail.add(new Mesh(new BoxGeometry(0.04, 0.9, 0.12), bladeMat), new Mesh(new BoxGeometry(0.04, 0.12, 0.9), bladeMat));
  tail.position.set(-2.8, 0.55, 0.1); grp.add(tail);
  // searchlight beam (additive cone hanging under the nose)
  const beam = new Mesh(new CylinderGeometry(0.08, 1.6, 6, 16, 1, true),
    new MeshBasicMaterial({ color: 0xfff1c0, transparent: true, opacity: 0.16, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }));
  beam.position.set(1.5, -3.3, 0); grp.add(beam);
  const blink = new Mesh(new BoxGeometry(0.1, 0.1, 0.1), new MeshBasicMaterial({ color: 0xff2a3a }));
  blink.position.set(-2.8, 0.95, 0); grp.add(blink);
  grp.visible = false;
  return { group: grp, rotor, tail, beam, blink };
}

export function buildPolice() {
  const g = new GeoBuilder();
  const white = 0xf4f6f8, black = 0x22242f, glass = 0x24304f;
  g.box(0, 0.22, 0, 2.5, 0.45, 1.2, white, { top: 0xffffff });
  g.box(-0.1, 0.67, 0, 1.3, 0.38, 1.1, white);
  g.box(-0.1, 0.72, 0, 1.32, 0.28, 1.12, glass, { faces: PX | NX | PZ | NZ });
  g.box(0, 0.3, 0, 2.52, 0.16, 1.22, black, { faces: PX | NX | PZ | NZ });
  g.box(1.26, 0.32, 0.38, 0.03, 0.1, 0.22, 0xfff3b0, { faces: PX });
  g.box(1.26, 0.32, -0.38, 0.03, 0.1, 0.22, 0xfff3b0, { faces: PX });
  for (const wx of [-0.8, 0.8]) for (const wz of [-0.56, 0.56]) g.box(wx, 0, wz, 0.46, 0.46, 0.2, 0x1c1e28, { faces: 63 });
  const body = new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true }));
  const grp = new Group();
  grp.add(body);
  const red = new Mesh(new BoxGeometry(0.3, 0.12, 0.5), new MeshBasicMaterial({ color: 0xff2a3a }));
  const blue = new Mesh(new BoxGeometry(0.3, 0.12, 0.5), new MeshBasicMaterial({ color: 0x2a6aff }));
  red.position.set(-0.1, 1.11, 0.26); blue.position.set(-0.1, 1.11, -0.26);
  grp.add(red, blue);
  return { group: grp, red, blue };
}

export function buildSecDoor(alongX) {
  const g = new GeoBuilder();
  const w = 1.0, h = 1.55, t = 0.16;
  g.box(0, 0, 0, alongX ? w : t, h, alongX ? t : w, 0x8a94a4, { faces: 63, top: 0x6a7484 });
  for (let k = 0; k < 6; k++) g.box(0, 0.08 + k * 0.08, 0, alongX ? w + 0.004 : t + 0.004, 0.04, alongX ? t + 0.004 : w + 0.004, k % 2 ? 0x22242f : 0xf2c94c, { faces: 1 | 2 | 16 | 32 });
  g.box(0, 0.75, 0, alongX ? 0.3 : t + 0.02, 0.3, alongX ? t + 0.02 : 0.3, 0x3a4252, { faces: 63 });
  g.box(0, 1.2, 0, alongX ? 0.5 : t + 0.01, 0.08, alongX ? t + 0.01 : 0.5, 0x5a6474, { faces: 63 });
  const grp = new Group();
  grp.add(new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true })));
  const led = new Mesh(new BoxGeometry(alongX ? 0.12 : t + 0.04, 0.12, alongX ? t + 0.04 : 0.12), new MeshBasicMaterial({ color: 0xff2a3a }));
  led.position.y = 0.95;
  grp.add(led);
  return { group: grp, led };
}
// wall vent grate (faces +z, hinged at the bottom so it can flap open)
export function buildVent() {
  const g = new GeoBuilder();
  g.box(0, 0, 0, 0.74, 0.46, 0.05, 0x8a94a4, { faces: 63, top: 0x9aa4b4 });
  g.box(0, 0.05, 0.026, 0.62, 0.36, 0.01, 0x101218, { faces: 16 });
  for (let k = 0; k < 5; k++) g.box(0, 0.08 + k * 0.07, 0.035, 0.62, 0.03, 0.03, 0xb0b8c4, { faces: 63 });
  for (const sx of [-0.33, 0.33]) for (const sy of [0.03, 0.41]) g.box(sx, sy, 0.03, 0.03, 0.03, 0.01, 0x4a5262, { faces: 16 });
  const flap = new Group();
  flap.add(new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true })));
  const grp = new Group();
  grp.add(flap);
  return { group: grp, flap };
}

export function buildBreaker() {
  const g = new GeoBuilder();
  g.box(0, 0, 0, 0.42, 0.56, 0.1, 0x6a7484, { faces: 63, top: 0x7a8494 });
  g.box(0, 0.06, 0.051, 0.36, 0.44, 0.01, 0x4a5262, { faces: 16 });
  g.box(-0.08, 0.36, 0.06, 0.12, 0.12, 0.01, 0xf2c94c, { faces: 16 });
  g.box(-0.08, 0.38, 0.065, 0.03, 0.08, 0.01, 0x22242f, { faces: 16 });
  for (let k = 0; k < 3; k++) g.box(-0.1 + k * 0.1, 0.12, 0.065, 0.06, 0.12, 0.03, 0x22242f, { faces: 63 });
  const grp = new Group();
  grp.add(new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true })));
  const lever = new Group();
  const lg = new GeoBuilder();
  lg.box(0, 0, 0.04, 0.05, 0.2, 0.05, 0xd8333a, { faces: 63 });
  lg.box(0, 0.18, 0.04, 0.09, 0.06, 0.08, 0x22242f, { faces: 63 });
  lever.add(new Mesh(lg.build(), new MeshLambertMaterial({ vertexColors: true })));
  lever.position.set(0.12, 0.3, 0.06);
  grp.add(lever);
  const led = new Mesh(new BoxGeometry(0.05, 0.05, 0.02), new MeshBasicMaterial({ color: 0xff2a3a }));
  led.position.set(0.12, 0.5, 0.06);
  grp.add(led);
  return { group: grp, lever, led };
}
// laser curtain across a line of cells: 4 horizontal beams + emitter posts
export function buildLaser(cells) {
  const xs = cells.map((c) => c[0]), ys = cells.map((c) => c[1]);
  const alongX = new Set(ys).size === 1;
  const x0 = Math.min(...xs), x1 = Math.max(...xs) + 1, y0 = Math.min(...ys), y1 = Math.max(...ys) + 1;
  const len = alongX ? x1 - x0 : y1 - y0, cx = (x0 + x1) / 2, cz = (y0 + y1) / 2;
  const beams = new GeoBuilder(), posts = new GeoBuilder();
  for (const y of [0.25, 0.55, 0.85, 1.15]) beams.box(cx, y, cz, alongX ? len : 0.025, 0.025, alongX ? 0.025 : len, 0xff3040, { faces: 63 });
  for (const s of [-1, 1]) {
    const px = alongX ? cx + s * (len / 2 - 0.05) : cx, pz = alongX ? cz : cz + s * (len / 2 - 0.05);
    posts.box(px, 0, pz, 0.1, 1.3, 0.1, 0x3a3f4e, { faces: 63, top: 0xff3040 });
    for (const y of [0.25, 0.55, 0.85, 1.15]) posts.box(px, y - 0.02, pz, 0.12, 0.06, 0.12, 0xff6070, { faces: 63 });
  }
  const mat = new MeshBasicMaterial({ color: 0xff3040, transparent: true, opacity: 0.9, depthWrite: false, blending: AdditiveBlending, toneMapped: false });
  const beamMesh = new Mesh(beams.build(), mat);
  beamMesh.renderOrder = 6;
  const grp = new Group();
  grp.add(beamMesh, new Mesh(posts.build(), new MeshLambertMaterial({ vertexColors: true })));
  return { group: grp, mat, alongX, line: alongX ? cz : cx, lo: alongX ? x0 : y0, hi: alongX ? x1 : y1 };
}
export function buildWoodDoor(alongX) {
  const g = new GeoBuilder();
  const col = 0x8a5a3c, lt = shade(col, 1.15);
  // leaf extends from the hinge (origin) along +x (or +z)
  const L = 0.98, T = 0.07, H = 1.52;
  const bx = (x, y, z, w, h, d, c, o) => (alongX ? g.box(x, y, z, w, h, d, c, o) : g.box(z, y, x, d, h, w, c, o));
  bx(L / 2, 0, 0, L, H, T, col, { faces: 63, top: shade(col, 0.8) });
  for (const s of [-1, 1]) for (const py of [0.15, 0.85]) bx(L / 2, py, s * 0.036, 0.62, 0.55, 0.01, lt, { faces: alongX ? (s > 0 ? 16 : 32) : (s > 0 ? 1 : 2) });
  for (const s of [-1, 1]) {
    bx(L - 0.14, 0.72, s * 0.05, 0.06, 0.06, 0.04, 0xd9b45a, { faces: 63 });
    bx(L - 0.14, 0.62, s * 0.042, 0.05, 0.1, 0.02, 0x3a3a46, { faces: 63 });
  }
  const pivot = new Group();
  pivot.add(new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true })));
  return { group: pivot, led: null };
}
export function buildKeycard() {
  const g = new GeoBuilder();
  g.box(0, -0.1, 0, 0.34, 0.22, 0.03, 0x2f7ae8, { faces: 63 });
  g.box(0, -0.06, 0, 0.35, 0.05, 0.035, 0xf2c94c, { faces: 63 });
  g.box(-0.09, -0.16, 0, 0.1, 0.06, 0.036, 0xffffff, { faces: 63 });
  g.box(0.12, 0.0, 0, 0.05, 0.05, 0.036, 0x22242f, { faces: 63 });
  const m = new Mesh(g.build(), new MeshBasicMaterial({ vertexColors: true }));
  const grp = new Group(); grp.add(m);
  return grp;
}

export function buildPanel() {
  const g = new GeoBuilder();
  g.box(0, 0, 0, 0.32, 0.42, 0.06, 0xe8e2d6, { faces: 63 });
  g.box(0, 0.24, 0.031, 0.22, 0.1, 0.01, 0x1f3a2f, { faces: 16 });
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) g.box(-0.07 + c * 0.07, 0.04 + r * 0.06, 0.035, 0.05, 0.04, 0.012, 0x9aa4b0, { faces: 63 });
  const grp = new Group();
  grp.add(new Mesh(g.build(), new MeshLambertMaterial({ vertexColors: true })));
  const led = new Mesh(new BoxGeometry(0.05, 0.05, 0.02), new MeshBasicMaterial({ color: 0x3ddc84 }));
  led.position.set(0.11, 0.36, 0.035);
  grp.add(led);
  return { group: grp, led };
}

// geometries centered at origin, used by InstancedMesh per loot type
export function lootGeometries() {
  const cash = new GeoBuilder();
  for (let k = 0; k < 3; k++) {
    const y = -0.12 + k * 0.075, ry = (k - 1) * 0.15;
    cash.box(k * 0.015, y, 0, 0.44, 0.07, 0.24, 0x4fae5a, { top: 0x8fe08a, faces: 63, ry });
    cash.box(k * 0.015, y - 0.002, 0, 0.09, 0.075, 0.245, 0xf3e3a0, { faces: 63, ry });
  }
  const gold = new GeoBuilder();
  gold.box(-0.13, -0.13, 0, 0.24, 0.12, 0.42, 0xe8a520, { top: 0xffd75a, faces: 63 });
  gold.box(0.13, -0.13, 0, 0.24, 0.12, 0.42, 0xe8a520, { top: 0xffd75a, faces: 63 });
  gold.box(0, -0.01, 0, 0.24, 0.12, 0.42, 0xf0b02a, { top: 0xffe680, faces: 63 });
  const jewel = new GeoBuilder();
  const oct = new OctahedronGeometry(0.17, 0);
  oct.scale(1.15, 1.2, 1.15);
  jewel.add(oct, 0x4cdcff, 0, 0.02, 0);
  jewel.box(0, -0.3, 0, 0.34, 0.06, 0.34, 0x6a2a4a, { faces: 63 });
  jewel.box(0, -0.24, 0, 0.26, 0.05, 0.26, 0xf2c94c, { faces: 63 });
  jewel.box(0, -0.19, 0, 0.12, 0.05, 0.12, 0xf2c94c, { faces: 63 });
  const art = new GeoBuilder();
  art.box(0, -0.34, 0, 0.74, 0.7, 0.08, 0xc08a3a, { faces: 63 });
  art.box(0, -0.29, 0, 0.62, 0.6, 0.09, 0x2f4858, { faces: PZ | NZ });
  art.box(0, -0.29, 0, 0.62, 0.22, 0.095, 0x3f8f9a, { faces: PZ | NZ });
  art.box(0.14, -0.02, 0, 0.16, 0.16, 0.1, 0xf2b134, { faces: PZ | NZ });
  art.box(-0.12, -0.14, 0, 0.3, 0.12, 0.1, 0xe8654f, { faces: PZ | NZ });
  return { cash: cash.build(), gold: gold.build(), jewel: jewel.build(), art: art.build() };
}
