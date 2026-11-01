// Chunky box characters. Each part is one vertex-colored mesh; one material per character (for hit-flash).
import { Group, Mesh, MeshLambertMaterial, MeshBasicMaterial, GreaterDepth } from 'three';
import { GeoBuilder } from './geo.js';

const cache = {};
const part = (key, fn) => {
  if (!cache[key]) { const g = new GeoBuilder(); fn(g); cache[key] = g.build(); }
  return cache[key];
};

const LOOKS = {
  player: { skin: 0xffd7b0, shirt: 0x17c3a2, pants: 0x3a3d55, shoe: 0x22242f, belt: 0x272a3a, hat: 0xff4f5a },
  guard: { skin: 0xf0bf8c, shirt: 0x3f6fe0, pants: 0x283050, shoe: 0x1b1e2b, belt: 0x1b1e2b, hat: 0x1f2a5c },
  owner: { skin: 0xf6c7a4, shirt: 0xff8fb8, pants: 0xff8fb8, shoe: 0xfff0f5, belt: 0xe66d98, hat: 0x8fd0ff },
};

function headGeo(kind, s) {
  return part(kind + 'head', (g) => {
    g.box(0, 0, 0, 0.5, 0.44, 0.44, s.skin, { faces: 63 });
    const eye = (ex, white) => {
      if (white) g.box(ex, 0.17, 0.222, 0.1, 0.09, 0.02, 0xffffff, { faces: 16 | 4 });
      g.box(ex, 0.18, 0.232, 0.05, 0.06, 0.02, 0x15161d, { faces: 16 });
    };
    if (kind === 'player') {
      g.box(0, 0.13, 0, 0.53, 0.14, 0.47, 0x15161d, { faces: 63 });
      eye(-0.11, true); eye(0.11, true);
      g.box(0, 0.33, 0, 0.55, 0.15, 0.49, s.hat, { faces: 63 });
      g.box(0, 0.33, 0, 0.56, 0.05, 0.5, 0xffffff, { faces: 63 & ~4 & ~8 });
      g.box(0, 0.48, 0, 0.13, 0.11, 0.13, 0xffffff, { faces: 63 });
    } else if (kind === 'guard') {
      eye(-0.11, false); eye(0.11, false);
      g.box(0, 0.06, 0.225, 0.22, 0.06, 0.03, 0x6b3f22, { faces: 63 });
      g.box(0, 0.34, 0, 0.54, 0.14, 0.48, s.hat, { faces: 63 });
      g.box(0, 0.34, 0.28, 0.5, 0.04, 0.18, s.hat, { faces: 63 });
      g.box(0, 0.38, 0.242, 0.1, 0.08, 0.02, 0xffd23f, { faces: 16 });
    } else {
      eye(-0.11, false); eye(0.11, false);
      g.box(0, 0.33, 0, 0.52, 0.12, 0.46, s.hat, { faces: 63 });
      g.box(0.06, 0.45, -0.05, 0.32, 0.12, 0.3, s.hat, { faces: 63 });
      g.box(0.16, 0.55, -0.1, 0.13, 0.13, 0.13, 0xffffff, { faces: 63 });
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
    g.box(0, -0.36, 0, 0.17, 0.36, 0.2, s.pants, { faces: 63 });
    g.box(0, -0.36, 0.03, 0.19, 0.09, 0.27, s.shoe, { faces: 63 });
  });
  const torsoGeo = part(kind + 'torso', (g) => {
    g.box(0, 0.34, 0, 0.5, 0.44, 0.3, s.shirt, { faces: 63 });
    g.box(0, 0.34, 0, 0.52, 0.07, 0.32, s.belt, { faces: 63 });
    if (kind === 'guard') g.box(0.12, 0.62, 0.155, 0.08, 0.09, 0.02, 0xffd23f, { faces: 16 });
    if (kind === 'player') g.box(0, 0.45, 0.155, 0.28, 0.12, 0.02, 0x10a888, { faces: 16 });
    if (kind === 'owner') for (let k = 0; k < 3; k++) g.box(0, 0.44 + k * 0.12, 0, 0.51, 0.04, 0.31, 0xffffff, { faces: 63 & ~4 & ~8 });
  });
  const armGeo = part(kind + 'arm', (g) => {
    g.box(0, -0.34, 0, 0.14, 0.34, 0.16, s.shirt, { faces: 63 });
    g.box(0, -0.45, 0, 0.13, 0.11, 0.14, s.skin, { faces: 63 });
  });
  const legL = new Group(); legL.position.set(-0.12, 0.36, 0); body.add(legL); mk(legGeo, legL);
  const legR = new Group(); legR.position.set(0.12, 0.36, 0); body.add(legR); mk(legGeo, legR);
  mk(torsoGeo, body);
  const armL = new Group(); armL.position.set(-0.32, 0.76, 0); body.add(armL); mk(armGeo, armL);
  const armR = new Group(); armR.position.set(0.32, 0.76, 0); body.add(armR); mk(armGeo, armR);
  const head = new Group(); head.position.set(0, 0.78, 0); body.add(head); mk(headGeo(kind, s), head);
  let bag = null;
  if (kind === 'player') {
    bag = new Group(); bag.position.set(0, 0.66, -0.16); body.add(bag);
    mk(part('bag', (g) => {
      g.box(0, -0.25, -0.18, 0.42, 0.44, 0.34, 0xc9a063, { faces: 63 });
      g.box(0, 0.19, -0.18, 0.14, 0.1, 0.14, 0xa47d45, { faces: 63 });
      g.box(0, -0.12, -0.355, 0.16, 0.2, 0.01, 0x7d5d30, { faces: 32 });
    }), bag);
  }
  return { kind, root, body, legL, legR, armL, armR, head, bag, mat, meshes, phase: 0, sq: 1, sqv: 0, flash: 0 };
}

// "X-ray" silhouette drawn only where the character is hidden behind walls.
export function addXray(c, color = 0x17c3a2) {
  const m = new MeshBasicMaterial({ color, depthWrite: false, depthFunc: GreaterDepth });
  for (const mesh of c.meshes.slice()) {
    const s = new Mesh(mesh.geometry, m);
    s.position.copy(mesh.position);
    s.renderOrder = 1;
    mesh.renderOrder = 2;
    mesh.parent.add(s);
  }
}

export function animateChar(c, dt, move, t) {
  c.phase += dt * (5 + 9 * move);
  const sw = Math.sin(c.phase) * 0.8 * move;
  c.legL.rotation.x = sw; c.legR.rotation.x = -sw;
  if (!c.armOverride) { c.armL.rotation.x = -sw * 0.9; c.armR.rotation.x = sw * 0.9; }
  c.body.position.y = Math.abs(Math.sin(c.phase)) * 0.07 * move + (1 - move) * Math.sin(t * 2.2) * 0.012;
  // springy squash & stretch
  c.sqv += (1 - c.sq) * 260 * dt;
  c.sqv *= Math.exp(-11 * dt);
  c.sq += c.sqv * dt;
  const sq = Math.max(0.5, c.sq), w = 1 / Math.sqrt(sq);
  c.body.scale.set(w, sq, w);
  if (c.flash > 0) {
    c.flash -= dt;
    const k = Math.max(0, c.flash) * 6;
    c.mat.emissive.setRGB(k, k, k);
  }
}
export const squash = (c, amt) => { c.sq = amt; c.sqv = 0; };
