// Chunky box characters. Each part is one vertex-colored mesh; one material per character (hit-flash + light probe tint).
import { Group, Mesh, MeshLambertMaterial, MeshBasicMaterial, ConeGeometry, AdditiveBlending, DoubleSide } from 'three';
import { GeoBuilder } from './geo.js';
import { textures } from './textures.js';
import { shade } from './util.js';

const cache = {};
const part = (key, fn) => {
  if (!cache[key]) { const g = new GeoBuilder(); fn(g); cache[key] = g.build(); }
  return cache[key];
};
const A = 63;
const LOOKS = {
  player: { skin: 0xf2c6a0, shirt: 0x2fa89a, pants: 0x3a3d55, shoe: 0x22242f, belt: 0x272a3a, hat: 0xe8483f, vest: 0x2fa89a },
  guard: { skin: 0xe8b58a, shirt: 0x7fa7d9, pants: 0x2a3150, shoe: 0x1b1e2b, belt: 0x1b1e2b, hat: 0x1f2a52, vest: 0x26304f },
  owner: { skin: 0xf4c6a2, shirt: 0xf28fb0, pants: 0xf28fb0, shoe: 0xfff0f5, belt: 0xd96d92, hat: 0x8fc8f0, vest: 0xf28fb0 },
};

function face(g, s, kind) {
  const z = 0.222;
  for (const ex of [-0.11, 0.11]) {
    g.box(ex, 0.13, z, 0.1, 0.09, 0.02, 0xffffff, { faces: 16 | 4 });
    g.box(ex + 0.012, 0.135, z + 0.01, 0.05, 0.065, 0.02, 0x1c1d26, { faces: 16 });
    g.box(ex + 0.025, 0.165, z + 0.02, 0.018, 0.018, 0.01, 0xffffff, { faces: 16 });
    g.box(ex, 0.235, z, 0.12, 0.03, 0.025, kind === 'owner' ? 0x8a6a5a : 0x3a2a22, { faces: A, ry: ex > 0 ? -0.15 : 0.15 });
  }
  g.box(0, 0.03, z + 0.01, 0.07, 0.09, 0.05, shade(s.skin, 0.88), { faces: A });
  for (const ex of [-0.255, 0.255]) g.box(ex, 0.08, 0, 0.03, 0.1, 0.08, shade(s.skin, 0.92), { faces: A });
}

function headGeo(kind, s) {
  return part(kind + 'head', (g) => {
    g.box(0, -0.06, 0, 0.5, 0.48, 0.44, s.skin, { faces: A });
    if (kind === 'player') {
      g.box(0, 0.07, 0, 0.53, 0.15, 0.47, 0x16171f, { faces: A });
      for (const ex of [-0.11, 0.11]) { g.box(ex, 0.08, 0.236, 0.1, 0.09, 0.02, 0xffffff, { faces: 16 }); g.box(ex, 0.085, 0.247, 0.045, 0.055, 0.02, 0x16171f, { faces: 16 }); }
      g.box(0, -0.15, 0.225, 0.14, 0.035, 0.02, 0x9a5a4a, { faces: 16 });
      g.box(0, 0.24, 0, 0.55, 0.2, 0.49, s.hat, { faces: A });
      g.box(0, 0.22, 0, 0.56, 0.06, 0.5, shade(s.hat, 0.8), { faces: A & ~4 & ~8 });
      g.box(0, 0.44, 0, 0.14, 0.12, 0.14, 0xffffff, { faces: A });
    } else if (kind === 'guard') {
      face(g, s, kind);
      g.box(0, -0.1, 0.23, 0.24, 0.06, 0.04, 0x5a3a26, { faces: A });
      g.box(0, 0.2, 0, 0.54, 0.16, 0.48, s.hat, { faces: A });
      g.box(0, 0.35, -0.02, 0.5, 0.06, 0.44, shade(s.hat, 1.15), { faces: A });
      g.box(0, 0.2, 0.29, 0.5, 0.04, 0.2, shade(s.hat, 0.8), { faces: A });
      g.box(0, 0.26, 0.245, 0.11, 0.1, 0.02, 0xf2c94c, { faces: 16 });
      g.box(0, 0.282, 0.256, 0.05, 0.05, 0.01, 0xe8483f, { faces: 16 });
    } else {
      face(g, s, kind);
      g.box(0, -0.12, 0.225, 0.12, 0.04, 0.02, 0xc0606a, { faces: 16 });
      g.box(0, 0.18, 0, 0.53, 0.14, 0.47, s.hat, { faces: A });
      g.box(0.06, 0.31, -0.04, 0.34, 0.13, 0.32, s.hat, { faces: A });
      g.box(0.14, 0.42, -0.1, 0.18, 0.1, 0.18, shade(s.hat, 1.1), { faces: A });
      g.box(0.2, 0.47, -0.14, 0.13, 0.13, 0.13, 0xffffff, { faces: A });
      g.box(0, 0.12, 0, 0.535, 0.04, 0.475, 0xffffff, { faces: A & ~4 & ~8 });
    }
  });
}

export function makeCharacter(kind) {
  const s = LOOKS[kind];
  const mat = new MeshLambertMaterial({ vertexColors: true });
  const root = new Group(), body = new Group();
  root.add(body);
  const meshes = [];
  const mk = (geo, parent, x = 0, y = 0, z = 0) => {
    const m = new Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); meshes.push(m); return m;
  };
  const legGeo = part(kind + 'leg', (g) => {
    g.box(0, -0.36, 0, 0.18, 0.36, 0.21, s.pants, { faces: A });
    g.box(0, -0.37, 0.035, 0.2, 0.1, 0.29, s.shoe, { faces: A, top: shade(s.shoe, 1.3) });
    if (kind === 'owner') g.box(0, -0.3, 0.06, 0.205, 0.04, 0.25, 0xffffff, { faces: A });
    if (kind === 'guard') g.box(0, -0.12, 0, 0.185, 0.02, 0.215, shade(s.pants, 0.8), { faces: A & ~4 & ~8 });
  });
  const torsoGeo = part(kind + 'torso', (g) => {
    g.box(0, 0.34, 0, 0.5, 0.45, 0.3, s.shirt, { faces: A });
    if (kind === 'guard') {
      g.box(0, 0.4, 0, 0.53, 0.38, 0.33, s.vest, { faces: A });
      g.box(0, 0.56, 0.166, 0.1, 0.22, 0.01, s.shirt, { faces: 16 });
      g.box(-0.13, 0.6, 0.168, 0.11, 0.1, 0.02, 0xf2c94c, { faces: A });
      g.box(0.14, 0.62, 0.168, 0.12, 0.04, 0.02, 0xffffff, { faces: A });
      g.box(0.16, 0.48, 0.17, 0.08, 0.12, 0.05, 0x22242f, { faces: A });
      g.box(0.18, 0.6, 0.18, 0.015, 0.08, 0.015, 0x22242f, { faces: A });
      g.box(0, 0.33, 0, 0.55, 0.08, 0.35, 0x1b1e2b, { faces: A });
      g.box(0, 0.33, 0.176, 0.08, 0.07, 0.01, 0xc3ccd6, { faces: 16 });
      for (const sx of [-0.2, 0.2]) g.box(sx, 0.3, 0.1, 0.09, 0.1, 0.1, 0x2a2b36, { faces: A });
    } else if (kind === 'player') {
      g.box(0, 0.33, 0, 0.52, 0.08, 0.32, s.belt, { faces: A });
      g.box(0, 0.42, 0.155, 0.3, 0.14, 0.02, shade(s.shirt, 0.8), { faces: 16 });
      g.box(0, 0.72, -0.12, 0.42, 0.14, 0.12, shade(s.shirt, 0.85), { faces: A });
    } else {
      for (let k = 0; k < 4; k++) g.box(0, 0.38 + k * 0.1, 0, 0.51, 0.035, 0.31, 0xffffff, { faces: A & ~4 & ~8 });
      for (let k = 0; k < 3; k++) g.box(0, 0.42 + k * 0.11, 0.155, 0.04, 0.04, 0.02, 0xffffff, { faces: 16 });
      g.box(0, 0.74, 0.14, 0.3, 0.06, 0.04, shade(s.shirt, 0.85), { faces: A });
    }
  });
  const armGeo = (side) => part(kind + 'arm' + side, (g) => {
    g.box(0, -0.2, 0, 0.15, 0.22, 0.17, kind === 'guard' ? s.shirt : s.shirt, { faces: A });
    g.box(0, -0.37, 0, 0.14, 0.18, 0.16, kind === 'guard' ? s.shirt : shade(s.shirt, 0.95), { faces: A });
    g.box(0, -0.48, 0, 0.13, 0.11, 0.14, kind === 'player' ? 0x2a2c3d : s.skin, { faces: A });
    if (kind === 'guard') g.box(0, -0.06, 0, 0.16, 0.1, 0.18, s.vest, { faces: A });
    if (kind === 'guard' && side === 'R') {
      g.box(0, -0.66, 0.06, 0.07, 0.24, 0.07, 0x2a2b36, { faces: A });
      g.box(0, -0.73, 0.06, 0.095, 0.08, 0.095, 0xc3ccd6, { faces: A });
      g.box(0, -0.735, 0.06, 0.07, 0.01, 0.07, 0xfff6cc, { faces: 8 });
    }
  });
  const legL = new Group(); legL.position.set(-0.12, 0.36, 0); body.add(legL); mk(legGeo, legL);
  const legR = new Group(); legR.position.set(0.12, 0.36, 0); body.add(legR); mk(legGeo, legR);
  mk(torsoGeo, body);
  const armL = new Group(); armL.position.set(-0.33, 0.77, 0); body.add(armL); mk(armGeo('L'), armL);
  const armR = new Group(); armR.position.set(0.33, 0.77, 0); body.add(armR); mk(armGeo('R'), armR);
  const head = new Group(); head.position.set(0, 0.84, 0); body.add(head); mk(headGeo(kind, s), head);
  let bag = null, beam = null;
  if (kind === 'player') {
    bag = new Group(); bag.position.set(0, 0.66, -0.16); body.add(bag);
    mk(part('bag', (g) => {
      g.box(0, -0.25, -0.18, 0.42, 0.44, 0.34, 0xc9a063, { faces: A });
      g.box(0, 0.19, -0.18, 0.14, 0.1, 0.14, 0xa47d45, { faces: A });
      g.box(0, -0.12, -0.355, 0.16, 0.2, 0.01, 0x7d5d30, { faces: 32 });
    }), bag);
  }
  if (kind === 'guard') {
    // flashlight beam (additive cone) held in the right hand
    const cg = new ConeGeometry(0.75, 3.4, 14, 1, true);
    cg.translate(0, -1.7, 0);
    beam = new Mesh(cg, new MeshBasicMaterial({
      map: textures().beam, color: 0xffe6a8, transparent: true, opacity: 0.32, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, fog: false,
    }));
    beam.position.set(0, -0.74, 0.06);
    beam.renderOrder = 6;
    armR.add(beam);
  }
  // natural slim proportions (body group is scaled in animateChar; head + beam are counter-scaled)
  const WX = { player: 0.76, guard: 0.72, owner: 0.78 }[kind], WZ = { player: 0.88, guard: 0.8, owner: 0.86 }[kind];
  if (kind !== 'player') head.scale.set(0.9 / WX, 1, 0.92 / WZ);
  if (beam) beam.scale.set(1 / WX, 1 / WZ, 1);
  return { kind, root, body, legL, legR, armL, armR, head, bag, beam, mat, meshes, phase: 0, sq: 1, sqv: 0, flash: 0, wx: WX, wz: WZ };
}

export function animateChar(c, dt, move, t) {
  c.phase += dt * (5 + 9 * move);
  const sw = Math.sin(c.phase) * 0.8 * move;
  c.legL.rotation.x = sw; c.legR.rotation.x = -sw;
  if (!c.armOverride) {
    c.armL.rotation.x = -sw * 0.9;
    // guards hold the flashlight forward, slightly swaying
    c.armR.rotation.x = c.beam ? -1.35 + Math.sin(c.phase * 0.5) * 0.06 * move + Math.sin(t * 1.3) * 0.03 : sw * 0.9;
  }
  c.body.position.y = Math.abs(Math.sin(c.phase)) * 0.07 * move + (1 - move) * Math.sin(t * 2.2) * 0.012;
  c.head.rotation.y = c.beam ? Math.sin(t * 0.9) * 0.15 * (1 - move) : 0;
  c.sqv += (1 - c.sq) * 260 * dt;
  c.sqv *= Math.exp(-11 * dt);
  c.sq += c.sqv * dt;
  const sq = Math.max(0.5, c.sq), w = 1 / Math.sqrt(sq);
  c.body.scale.set(w * c.wx, sq, w * c.wz);
  if (c.flash > 0) {
    c.flash -= dt;
    const k = Math.max(0, c.flash) * 6;
    c.mat.emissive.setRGB(k, k, k);
  }
}
// tint by baked light probe so characters sit in the same lighting as the room
export function probe(c, L, x, z, dt) {
  if (!L.light) return;
  const cx = Math.max(0, Math.min(L.W - 1, Math.floor(x))), cz = Math.max(0, Math.min(L.H - 1, Math.floor(z)));
  const i = (cz * L.W + cx) * 3, k = 1 - Math.exp(-6 * dt), m = 1.55;
  const col = c.mat.color;
  col.r += (Math.max(0.82, Math.min(1.5, L.light[i] * m)) - col.r) * k;
  col.g += (Math.max(0.78, Math.min(1.5, L.light[i + 1] * m)) - col.g) * k;
  col.b += (Math.max(0.78, Math.min(1.5, L.light[i + 2] * m)) - col.b) * k;
}
export const squash = (c, amt) => { c.sq = amt; c.sqv = 0; };

// Guard dog: chunky box pup with floppy ears, collar and a wagging tail.
export function makeDog() {
  const mat = new MeshLambertMaterial({ vertexColors: true });
  const fur = 0xc98a4a, dark = 0x7a4a26, white = 0xf6ead8;
  const root = new Group(), body = new Group();
  root.add(body);
  const mk = (fn, parent, x = 0, y = 0, z = 0) => { const g = new GeoBuilder(); fn(g); const m = new Mesh(g.build(), mat); m.position.set(x, y, z); parent.add(m); return m; };
  mk((g) => {
    g.box(0, 0.3, -0.02, 0.32, 0.28, 0.66, fur, { faces: A, top: shade(fur, 1.1) });
    g.box(0, 0.3, 0.2, 0.28, 0.22, 0.2, white, { faces: A & ~4 });
    g.box(0, 0.5, 0.26, 0.34, 0.06, 0.1, 0xd8333a, { faces: A });
    g.box(0, 0.44, 0.32, 0.06, 0.07, 0.03, 0xf2c94c, { faces: A });
    g.box(0, 0.4, -0.1, 0.33, 0.12, 0.3, dark, { faces: 4 | 1 | 2 });
  }, body);
  const head = new Group(); head.position.set(0, 0.58, 0.34); body.add(head);
  mk((g) => {
    g.box(0, -0.12, 0, 0.3, 0.26, 0.28, fur, { faces: A });
    g.box(0, -0.12, 0.2, 0.17, 0.13, 0.16, white, { faces: A });
    g.box(0, -0.05, 0.285, 0.07, 0.05, 0.03, 0x1c1d26, { faces: A });
    g.box(0, -0.165, 0.26, 0.1, 0.03, 0.06, 0xe8707a, { faces: A });
    for (const s of [-1, 1]) {
      g.box(s * 0.08, -0.01, 0.141, 0.06, 0.06, 0.02, 0x1c1d26, { faces: 16 });
      g.box(s * 0.09, 0.0, 0.151, 0.02, 0.02, 0.01, 0xffffff, { faces: 16 });
      g.box(s * 0.17, -0.12, -0.02, 0.06, 0.22, 0.14, dark, { faces: A });
    }
  }, head);
  const legs = [];
  for (const [lx, lz] of [[-0.1, 0.2], [0.1, 0.2], [-0.1, -0.24], [0.1, -0.24]]) {
    const L = new Group(); L.position.set(lx, 0.3, lz); body.add(L); legs.push(L);
    mk((g) => { g.box(0, -0.3, 0, 0.09, 0.3, 0.1, fur, { faces: A }); g.box(0, -0.3, 0.015, 0.1, 0.05, 0.13, white, { faces: A }); }, L);
  }
  const tail = new Group(); tail.position.set(0, 0.42, -0.34); body.add(tail);
  mk((g) => g.box(0, 0, -0.1, 0.06, 0.06, 0.22, fur, { faces: A }), tail);
  tail.rotation.x = 0.7;
  body.scale.setScalar(1.1);
  return { root, body, head, legs, tail, mat, phase: 0, sq: 1, sqv: 0 };
}
export function animateDog(m, dt, move, t, bark) {
  m.phase += dt * (6 + 12 * move);
  const sw = Math.sin(m.phase) * 0.7 * move;
  m.legs[0].rotation.x = sw; m.legs[3].rotation.x = sw; m.legs[1].rotation.x = -sw; m.legs[2].rotation.x = -sw;
  m.tail.rotation.y = Math.sin(t * (bark ? 26 : 12)) * (bark ? 0.4 : 0.7);
  m.body.position.y = Math.abs(Math.sin(m.phase)) * 0.03 * move;
  m.head.rotation.x = bark ? -0.25 + Math.sin(t * 18) * 0.15 : Math.sin(t * 1.5) * 0.05;
  m.sqv += (1 - m.sq) * 260 * dt; m.sqv *= Math.exp(-11 * dt); m.sq += m.sqv * dt;
  const s = 1.1 * Math.max(0.6, m.sq);
  m.body.scale.set(1.1 / Math.sqrt(m.sq), s, 1.1);
}
