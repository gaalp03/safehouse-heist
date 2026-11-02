// Gameplay: player, guards (vision cones, suspicion, chase, noise), loot, safe, escape, scoring.
import {
  Group, Mesh, MeshBasicMaterial, MeshLambertMaterial, InstancedMesh, BufferGeometry, BufferAttribute, CircleGeometry, RingGeometry,
  CylinderGeometry, PlaneGeometry, Object3D, Vector3, DoubleSide, BoxGeometry, Points, PointsMaterial, ConeGeometry, AdditiveBlending,
} from 'three';
import { textures } from './textures.js';
import { GeoBuilder } from './geo.js';
import { parseLevel } from './level.js';
import { buildWorld, buildSafe, buildVan, lootGeometries, lootMat, buildPolice, buildPanel, buildSecDoor, buildWoodDoor, buildKeycard, buildLaser, buildBreaker, buildHeli, buildVent, propBack, WALL_H } from './world.js';
import { makeCharacter, animateChar, squash, probe, makeDog, animateDog } from './chars.js';
import { clamp, damp, angDiff, rand } from './util.js';
import { pickContracts } from './contracts.js';
import { DIFFS } from './difficulty.js';
import { mulberry32 } from './util.js';

const PR = 0.3, P_SPEED = 3.7, DASH_V = 11, DASH_T = 0.18, DASH_CD = 0.8, EYE = 1.02, CHASE = 3.2;
const CONE_N = 20;
const COL = { cone: 0xffe14d, sus: 0xff9f1c, alert: 0xff3b4e };
const _o = new Object3D(), _v = new Vector3(), _mv = { x: 0, y: 0 }, _lk = { x: 0, y: 0 };
const turn = (a, b, r) => a + clamp(angDiff(a, b), -r, r);
const turnTo = turn;

const shadowGeo = new CircleGeometry(0.36, 12).rotateX(-Math.PI / 2);
const shadowMat = new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22, depthWrite: false });

function makeCone() {
  const g = new BufferGeometry();
  const pos = new Float32Array((CONE_N + 2) * 3), col = new Float32Array((CONE_N + 2) * 4);
  col.set([1, 1, 1, 0.3], 0);
  for (let i = 1; i <= CONE_N + 1; i++) col.set([1, 1, 1, 0.05], i * 4);
  const idx = [];
  for (let i = 1; i <= CONE_N; i++) idx.push(0, i + 1, i);
  g.setAttribute('position', new BufferAttribute(pos, 3));
  g.setAttribute('color', new BufferAttribute(col, 4));
  g.setIndex(idx);
  const m = new Mesh(g, new MeshBasicMaterial({ color: COL.cone, vertexColors: true, transparent: true, depthWrite: false, side: DoubleSide }));
  m.frustumCulled = false; m.renderOrder = 3;
  return m;
}
function makeArrow() {
  const p = [0, 0, 0.5, -0.3, 0, 0.12, 0.3, 0, 0.12, -0.11, 0, 0.12, 0.11, 0, 0.12, 0.11, 0, -0.3, -0.11, 0, -0.3];
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(p), 3));
  g.setIndex([0, 1, 2, 3, 4, 5, 3, 5, 6]);
  const m = new Mesh(g, new MeshBasicMaterial({ color: 0xffd23f, side: DoubleSide, transparent: true, opacity: 0.95, depthWrite: false }));
  m.renderOrder = 4;
  return m;
}
function makeStars() {
  const grp = new Group();
  const geo = new BoxGeometry(0.13, 0.13, 0.13), mat = new MeshBasicMaterial({ color: 0xffd23f });
  for (let i = 0; i < 3; i++) { const s = new Mesh(geo, mat); grp.add(s); }
  grp.visible = false;
  return grp;
}

const fmt = (v) => '$' + Math.round(v).toLocaleString('en-US');
const CALM = new Set(['patrol', 'wait', 'post']);
const CHAT = [
  ['Quiet night, huh?', 'Too quiet.'],
  ['Did you hear something?', 'Just the pipes again.'],
  ['Coffee machine\'s broken again.', 'This job, I swear...'],
  ['Who has the keycard?', 'Not me. Ask the boss.'],
  ['My feet are killing me.', 'Two more hours, buddy.'],
  ['You watch the game last night?', 'Don\'t remind me.'],
  ['They say this place is unrobbable.', 'Yeah, yeah.'],
  ['Saw a weird van outside earlier.', 'Probably the pizza guy.'],
  ['Remember the drill if the alarm goes?', 'Run toward it, right?'],
  ['Is it just me or is it cold in here?', 'It\'s you.'],
];
export class Game {
  constructor(app) {
    this.app = app;
    this.root = new Group();
    app.scene.add(this.root);
    this.t = 0;
    this.noiseRings = [];
  }

  // ---------- setup ----------
  load(def) {
    // free the previous level's GPU resources (geometries, materials, canvas textures) before building the next
    const shared = new Set([lootMat && this.lootMeshes ? Object.values(this.lootMeshes).map((m) => m.material) : []].flat());
    this.root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      for (const m of mats) { if (shared.has(m)) continue; if (m.map && !m.map.userData.keep) m.map.dispose(); m.dispose(); }
    });
    this.root.clear();
    for (const g of this.guards || []) g.badge.remove();
    this.def = def;
    const L = (this.L = parseLevel(def));
    const world = buildWorld(L);
    this.root.add(world);
    this.trainMats = world.userData.trainMats || null; this.clackT = 0; this.sway = 0;

    this.safe = buildSafe();
    this.prev = null;
    this.safe.group.position.set(L.safe.x + 0.5, 0, L.safe.y + 0.5);
    this.safeScale = def.safeScale || 1;
    this.safe.group.scale.setScalar(this.safeScale);
    // security doors + keycards
    const isW = (x, y) => L.ch[y * L.W + x] === '#';
    this.doors = L.doors.map((d) => {
      const alongX = isW(d.x - 1, d.y) && isW(d.x + 1, d.y);
      const m = d.type === 'lock' ? buildWoodDoor(alongX) : buildSecDoor(alongX);
      if (d.type === 'lock') m.group.position.set(alongX ? d.x + 0.01 : d.x + 0.5, 0, alongX ? d.y + 0.5 : d.y + 0.01);
      else m.group.position.set(d.x + 0.5, 0, d.y + 0.5);
      d.alongX = alongX;
      this.root.add(m.group);
      return { ...d, m, open: false, t: 0 };
    });
    this.lasers = (def.lasers || []).map((ld) => { const m = buildLaser(ld.cells); this.root.add(m.group); return { def: ld, ...m, on: true }; });
    this.breaker = null;
    if (def.breaker) {
      const bd = def.breaker, m = buildBreaker();
      m.group.position.set(bd.x + 0.5 + bd.dx * 0.53, 0.75, bd.y + 0.5 + bd.dy * 0.53);
      m.group.rotation.y = Math.atan2(bd.dx, bd.dy);
      this.root.add(m.group);
      this.breaker = { ...m, at: { x: bd.x + 0.5 + bd.dx * 1.15, z: bd.y + 0.5 + bd.dy * 1.15 } };
    }
    this.keyMeshes = L.keys.map((k) => { const m = buildKeycard(); m.position.set(k.x + 0.5, 0.8, k.y + 0.5); this.root.add(m); return { ...k, m }; });
    this.root.add(this.safe.group);

    this.police = buildPolice();
    this.police.group.visible = false;
    this.root.add(this.police.group);
    this.panel = null;
    if (def.panel) {
      const pd = def.panel;
      this.panel = buildPanel();
      this.panel.group.position.set(pd.x + 0.5 + pd.dx * 0.53, 0.85, pd.y + 0.5 + pd.dy * 0.53);
      this.panel.group.rotation.y = Math.atan2(pd.dx, pd.dy);
      this.panel.at = { x: pd.x + 0.5 + pd.dx * 1.1, z: pd.y + 0.5 + pd.dy * 1.1 };
      this.root.add(this.panel.group);
    }
    // air vents: linked wall grates you can crawl between
    this.vents = [];
    for (const vd of def.vents || []) {
      const ends = [vd.a, vd.b].map(([x, y, dx, dy]) => {
        const m = buildVent();
        m.group.position.set(x + 0.5 + dx * 0.47, 0.06, y + 0.5 + dy * 0.47);
        m.group.rotation.y = Math.atan2(-dx, -dy);
        this.root.add(m.group);
        return { ...m, cx: x + 0.5, cz: y + 0.5, gx: x + 0.5 + dx * 0.5, gz: y + 0.5 + dy * 0.5, out: Math.atan2(-dx, -dy) };
      });
      ends[0].other = ends[1]; ends[1].other = ends[0];
      this.vents.push(...ends);
    }
    // TVs you can switch on as a distraction (a guard comes over to turn it off)
    this.tvs = L.furn.filter((f) => f.type === 'tv').map((f) => {
      const bk = propBack(L, f), rot = Math.atan2(-bk[0], -bk[1]), W = bk[0] ? f.d : f.w, D = bk[0] ? f.w : f.d;
      const cx = f.x0 + f.w / 2, cz = f.y0 + f.d / 2;
      const scr = new Mesh(new PlaneGeometry(W - 0.52, 0.8), new MeshBasicMaterial({ color: 0x9fd0ff, toneMapped: false }));
      scr.position.set(cx + bk[0] * 0.15, 1.07, cz + bk[1] * 0.15); scr.rotation.y = rot;
      const glow = new Mesh(new PlaneGeometry(3.2, 2.2), new MeshBasicMaterial({ map: textures().glow, color: 0x6fa8ff, transparent: true, opacity: 0.5, depthWrite: false, blending: AdditiveBlending, fog: false }));
      glow.position.set(cx - bk[0] * 0.7, 0.03, cz - bk[1] * 0.7); glow.rotation.x = -Math.PI / 2;
      scr.visible = glow.visible = false;
      this.root.add(scr, glow);
      return { scr, glow, cx, cz, fx: cx - bk[0] * (D / 2 + 0.9), fz: cz - bk[1] * (D / 2 + 0.9), on: false, used: false, t: 0, flick: 0, babble: 0 };
    });
    this.heli = def.heli ? buildHeli() : null;
    { // golden briefcase (timed bonus event)
      const gb = new GeoBuilder(), gold = 0xf0b02a;
      gb.box(0, 0, 0, 0.56, 0.4, 0.16, gold, { faces: 63, top: 0xffd75a });
      gb.box(0, 0.19, 0, 0.58, 0.03, 0.17, 0xc8861a, { faces: 63 });
      gb.box(0, 0.4, 0, 0.2, 0.05, 0.06, 0x3a2418, { faces: 63 }); for (const sx of [-1, 1]) gb.box(sx * 0.09, 0.36, 0, 0.04, 0.06, 0.06, 0x3a2418, { faces: 63 });
      for (const sx of [-1, 1]) gb.box(sx * 0.17, 0.27, 0.081, 0.07, 0.06, 0.02, 0xd8deea, { faces: 63 });
      gb.box(0, 0.1, 0.082, 0.14, 0.1, 0.01, 0xfff1c0, { faces: 16 });
      const grp = new Group(); grp.add(new Mesh(gb.build(), new MeshBasicMaterial({ vertexColors: true })));
      const halo = new Mesh(new PlaneGeometry(2.2, 2.2), new MeshBasicMaterial({ map: textures().glow, color: 0xffc23a, transparent: true, opacity: 0.9, depthWrite: false, blending: AdditiveBlending, fog: false }));
      halo.rotation.x = -Math.PI / 2; halo.position.y = -0.6; halo.renderOrder = 4; grp.add(halo);
      grp.visible = false; this.root.add(grp);
      this.briefcase = { group: grp, halo };
    }
    if (this.heli) this.root.add(this.heli.group);
    this.van = buildVan();
    this.root.add(this.van.group);

    // loot instancing
    const geos = lootGeometries(), mat = lootMat();
    this.lootMeshes = {};
    const counts = { cash: def.values.bundles, gold: 0, jewel: 0, art: 0 };
    for (const l of L.loot) counts[l.type]++;
    for (const k in geos) {
      const m = new InstancedMesh(geos[k], mat, Math.max(1, counts[k]));
      m.frustumCulled = false; m.count = 0;
      this.lootMeshes[k] = m; this.root.add(m);
    }

    // player
    const pc = makeCharacter('player');
    pc.root.rotation.order = 'YXZ';
    this.root.add(pc.root);
    this.player = { c: pc, shadow: this.addShadow() };

    // guards + owner
    this.guards = [];
    const mkGuard = (kind, gdef) => {
      const c = makeCharacter(kind);
      c.root.rotation.order = 'YXZ';
      this.root.add(c.root);
      const cone = makeCone(); this.root.add(cone);
      const stars = makeStars(); this.root.add(stars);
      const badge = document.createElement('div');
      badge.className = 'badge'; badge.innerHTML = '<i></i><b></b>';
      this.app.els.fxl.appendChild(badge);
      const g = { kind, def: gdef, c, cone, stars, badge, shadow: this.addShadow() };
      if (kind === 'guard') {
        // wallet in the back pocket + optional spare keycard on the belt (visible from behind)
        g.walletMesh = new Mesh(new BoxGeometry(0.13, 0.09, 0.035), new MeshBasicMaterial({ color: 0x6a3f22 }));
        g.walletMesh.position.set(0.12, 0.34, -0.17);
        g.keyMesh = new Mesh(new BoxGeometry(0.1, 0.07, 0.02), new MeshBasicMaterial({ color: 0x2f7ae8 }));
        g.keyMesh.position.set(-0.13, 0.36, -0.17);
        c.body.add(g.walletMesh, g.keyMesh);
      }
      this.guards.push(g);
      return g;
    };
    for (const gd of def.guards) mkGuard('guard', gd);
    this.buttons = [];
    for (const cd of def.clerks || []) {
      const g = mkGuard('clerk', cd), bd = cd.button;
      const m = new Mesh(new BoxGeometry(0.2, 0.26, 0.06), new MeshBasicMaterial({ color: 0xd8dde6 }));
      const btn = new Mesh(new BoxGeometry(0.11, 0.11, 0.05), new MeshBasicMaterial({ color: 0xff2a3a }));
      btn.position.z = 0.04; m.add(btn);
      m.position.set(bd.x + 0.5 + bd.dx * 0.53, 1.05, bd.y + 0.5 + bd.dy * 0.53);
      m.rotation.y = Math.atan2(-bd.dx, -bd.dy);
      this.root.add(m);
      g.button = { x: bd.x + 0.5 + bd.dx * 0.15, z: bd.y + 0.5 + bd.dy * 0.15, btn };
      this.buttons.push(g.button);
    }
    if (def.owner) {
      const o = def.owner;
      mkGuard('owner', { path: o.patrol, wait: 1.2, speed: o.speed, loop: true, owner: o });
    }
    // shift-change reinforcements: created now, kept off-stage until called in
    {
      const W = L.W, seen = new Uint8Array(W * L.H), q = [L.start.y * W + L.start.x];
      seen[q[0]] = 1; this.entrance = { x: L.start.x, y: L.start.y };
      while (q.length) {
        const c = q.shift(), x = c % W, y = (c / W) | 0;
        if (!L.outdoor[c] && L.walk[c]) { this.entrance = { x, y }; break; }
        for (const [dx, dy] of [[0, -1], [1, 0], [-1, 0], [0, 1]]) { const k = (y + dy) * W + x + dx; if (x + dx >= 0 && y + dy >= 0 && x + dx < W && y + dy < L.H && !seen[k] && L.walk[k]) { seen[k] = 1; q.push(k); } }
      }
      this.reserve = [];
      for (let i = 0; i < 2; i++) {
        const e = this.entrance;
        const g = mkGuard('guard', { roam: [1, 1, L.W - 2, L.H - 2], path: [[e.x, e.y], [e.x, e.y]], wait: 1.3, speed: 1.7, reinforce: true });
        this.guards.pop(); this.reserve.push(g);
      }
    }
    // guard dogs
    this.dogs = (def.dogs || []).map((dd) => {
      const m = makeDog();
      this.root.add(m.root);
      return { def: dd, m, shadow: this.addShadow() };
    });
    // security cameras
    this.cams = (def.cameras || []).map((cd) => {
      const cone = makeCone(); this.root.add(cone);
      // ceiling-mounted CCTV: plate + drop pole stay fixed, the head swivels/tilts
      const mount = new Group();
      const gb = new GeoBuilder();
      gb.box(0, 0.36, 0, 0.26, 0.04, 0.26, 0xdfe3e8, { faces: 63 });            // ceiling plate
      gb.box(0, -0.06, 0, 0.05, 0.42, 0.05, 0x9aa3ae, { faces: 63 });            // drop pole
      mount.add(new Mesh(gb.build(), new MeshLambertMaterial({ vertexColors: true })));
      mount.position.set(cd.pos[0], WALL_H - 0.4, cd.pos[1]);
      this.root.add(mount);
      const hb = new GeoBuilder();
      hb.box(0, -0.06, -0.04, 0.2, 0.15, 0.36, 0xf2f4f6, { faces: 63, top: 0xffffff }); // housing
      hb.box(0, 0.09, 0.0, 0.24, 0.025, 0.44, 0x2a2b36, { faces: 63 });         // sunshade
      hb.box(0, -0.075, 0.15, 0.15, 0.13, 0.03, 0x2a2b36, { faces: 63 });      // lens bezel
      hb.box(0, -0.06, -0.06, 0.04, 0.12, 0.04, 0x9aa3ae, { faces: 63 });      // swivel joint
      const m = new Mesh(hb.build(), new MeshLambertMaterial({ vertexColors: true }));
      const lens = new Mesh(new BoxGeometry(0.09, 0.08, 0.03), new MeshBasicMaterial({ color: 0xff3b4e }));
      lens.position.set(0, -0.075, 0.17); m.add(lens);
      const glass = new Mesh(new BoxGeometry(0.05, 0.045, 0.012), new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 }));
      glass.position.set(-0.015, -0.06, 0.188); m.add(glass);
      m.position.set(cd.pos[0], WALL_H - 0.56, cd.pos[1]);
      this.root.add(m);
      return { def: cd, cone, mesh: m, lens };
    });

    // exit marker
    this.exitRing = new Mesh(new RingGeometry(0.62, 0.9, 28).rotateX(-Math.PI / 2),
      new MeshBasicMaterial({ color: 0x3ddc84, transparent: true, opacity: 0.95, depthWrite: false }));
    this.exitBeam = new Mesh(new CylinderGeometry(0.85, 0.85, 2.4, 20, 1, true),
      new MeshBasicMaterial({ color: 0x3ddc84, transparent: true, opacity: 0.2, depthWrite: false, side: DoubleSide }));
    this.exitRing.position.set(L.exit.x, 0.03, L.exit.z);
    this.exitBeam.position.set(L.exit.x, 1.2, L.exit.z);
    this.root.add(this.exitRing, this.exitBeam);

    // throwable coins (distraction)
    // round gold coin: rim cylinder + a slightly raised face
    const cg = new CylinderGeometry(0.065, 0.065, 0.022, 14); cg.rotateX(Math.PI / 2);
    const fg = new CylinderGeometry(0.045, 0.045, 0.026, 12); fg.rotateX(Math.PI / 2);
    this.coinMeshes = [];
    for (let i = 0; i < 6; i++) {
      const m = new Mesh(cg, new MeshBasicMaterial({ color: 0xe8a520 }));
      m.add(new Mesh(fg, new MeshBasicMaterial({ color: 0xffd75a })));
      m.visible = false; this.root.add(m); this.coinMeshes.push(m);
    }
    // hiding spots (wardrobes): exit tile + facing direction
    this.hides = L.furn.filter((f) => f.type === 'wardrobe').map((f) => {
      const cx = f.x0 + 0.5, cz = f.y0 + 0.5;
      for (const [dx, dz] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        if (this.walkable(f.x0 + dx, f.y0 + dz)) return { cx, cz, ex: cx + dx * 0.95, ez: cz + dz * 0.95, face: Math.atan2(dx, dz) };
      }
      return null;
    }).filter(Boolean);
    // smoke clouds (pooled Points)
    this.smokeFx = [];
    for (let i = 0; i < 2; i++) {
      const N = 46, geo = new BufferGeometry();
      geo.setAttribute('position', new BufferAttribute(new Float32Array(N * 3), 3));
      const pts = new Points(geo, new PointsMaterial({ map: textures().glow, size: 1.5, color: 0xd9d4e2, transparent: true, opacity: 0, depthWrite: false }));
      pts.frustumCulled = false; pts.renderOrder = 8; pts.visible = false;
      const off = new Float32Array(N * 4);
      for (let k = 0; k < N; k++) { const a = Math.random() * 6.28, r = Math.sqrt(Math.random()); off.set([Math.cos(a) * r, Math.random(), Math.sin(a) * r, Math.random() * 6.28], k * 4); }
      this.root.add(pts);
      this.smokeFx.push({ pts, geo, off, N });
    }
    this.arrow = makeArrow();
    this.root.add(this.arrow);

    // noise rings pool
    this.noiseRings = [];
    const rg = new RingGeometry(0.9, 1, 32).rotateX(-Math.PI / 2);
    for (let i = 0; i < 4; i++) {
      const m = new Mesh(rg, new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
      m.visible = false; m.renderOrder = 4;
      this.root.add(m);
      this.noiseRings.push({ m, t: 1, r: 1 });
    }

    // totals
    const v = def.values;
    // display cases (dynamic glass + jewels so they can be smashed)
    this.cases = L.furn.filter((f) => f.type === 'case').map((f) => {
      const cx = f.x0 + f.w / 2, cz = f.y0 + f.d / 2;
      const glass = new Mesh(new BoxGeometry(f.w - 0.12, 0.46, f.d - 0.12), new MeshBasicMaterial({ color: 0xbfe6ff, transparent: true, opacity: 0.28, depthWrite: false }));
      glass.position.set(cx, 1.05, cz); glass.renderOrder = 5;
      const gems = new Group();
      const gcols = [0x4cdcff, 0xff4f7a, 0x7cff9a, 0xffd75a, 0xc77dff];
      for (let k = 0; k < 5; k++) {
        const m = new Mesh(new BoxGeometry(0.09, 0.09, 0.09), new MeshBasicMaterial({ color: gcols[(k + f.x0) % 5] }));
        m.position.set(cx + (k % 3 - 1) * (f.w * 0.25), 0.88, cz + ((k / 3 | 0) - 0.5) * (f.d * 0.3));
        m.rotation.set(0.6, k, 0.6);
        gems.add(m);
      }
      this.root.add(glass, gems);
      return { f, cx, cz, glass, gems, smashed: false, prog: 0 };
    });
    this.caseLoot = def.caseLoot || 0;
    // slot machine banks (pull a lever: jackpot distraction)
    this.slots = L.furn.filter((f) => f.type === 'slots').map((f) => {
      const cx = f.x0 + f.w / 2, cz = f.y0 + f.d / 2, face = f.y0 < L.H / 2 ? 1 : -1;
      const top = new Mesh(new BoxGeometry(f.w - 0.2, 0.08, 0.08), new MeshBasicMaterial({ color: 0xffd75a, toneMapped: false }));
      top.position.set(cx, 1.66, cz + face * 0.22);
      top.visible = false;
      this.root.add(top);
      return { f, cx, cz, face, top, used: false, prog: 0, t: 0 };
    });
    // sweeping ceiling spotlights
    this.spots = (def.spots || []).map((sd) => {
      const pool = new Mesh(new CircleGeometry(sd.r, 28).rotateX(-Math.PI / 2), new MeshBasicMaterial({
        map: textures().glow, color: 0xfff0b0, transparent: true, opacity: 0.85, depthWrite: false, blending: AdditiveBlending, toneMapped: false }));
      pool.renderOrder = 4;
      const cone = new Mesh(new ConeGeometry(sd.r * 0.95, WALL_H, 20, 1, true), new MeshBasicMaterial({
        color: 0xfff0b0, transparent: true, opacity: 0.09, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, toneMapped: false }));
      cone.rotation.x = Math.PI; cone.renderOrder = 5;
      const fix = new Mesh(new BoxGeometry(0.3, 0.16, 0.3), new MeshBasicMaterial({ color: 0x2a2b36 }));
      const lens = new Mesh(new BoxGeometry(0.2, 0.02, 0.2), new MeshBasicMaterial({ color: 0xfff6d0 }));
      lens.position.y = -0.09; fix.add(lens);
      this.root.add(pool, cone, fix);
      const [a, b] = sd.path;
      return { def: sd, pool, cone, fix, ax: a[0] + 0.5, az: a[1] + 0.5, bx: b[0] + 0.5, bz: b[1] + 0.5, len: Math.hypot(b[0] - a[0], b[1] - a[1]), susp: 0, cool: 0, x: 0, z: 0, tickT: 0 };
    });
    this.policeLane = L.van ? { x: L.exit.x, z: L.exit.z + 2.5 } : { x: L.start.x + 0.5, z: L.start.y + 1.5 };
    this.baseLootTotal = v.stash + v.bundle * v.bundles + L.loot.reduce((s, l) => s + v[l.type], 0) + this.cases.length * this.caseLoot * v.jewel + this.slots.length * v.cash;
    this.lootTotal = this.baseLootTotal;
    this.reset();
  }

  addShadow() {
    const s = new Mesh(shadowGeo, shadowMat);
    s.renderOrder = 0;
    this.root.add(s);
    return s;
  }

  reset() {
    const L = this.L, def = this.def;
    this.state = 'play';
    this.time = 0; this.lootGot = 0; this.spotted = false; this.kos = 0;
    this.hasKey = false; this.objText = ''; this.crackNoiseT = 0;
    for (const b of this.buttons || []) b.btn.material.color.setHex(0xff2a3a);
    this.powerOff = false; this.breakProg = 0; this.lasersTripped = 0;
    if (this.breaker) { this.breaker.lever.rotation.x = 0; this.breaker.led.material.color.setHex(0xff2a3a); }
    for (const l of this.lasers || []) l.group.visible = true;
    this.spotHit = false;
    for (const sp of this.spots || []) { sp.susp = 0; sp.cool = 0; sp.pool.visible = sp.cone.visible = true; }
    for (const d of this.doors || []) {
      const i = d.y * this.L.W + d.x;
      d.open = false; d.t = 0; this.L.walk[i] = 0; this.L.opaque[i] = 1;
      d.m.group.position.y = 0; d.m.group.rotation.y = 0; d.m.group.visible = true; if (d.m.led) d.m.led.material.color.setHex(0xff2a3a);
      this.picking = null; this.cleanPick = false; this.app.onPick && this.app.onPick(null);
    }
    for (const k of this.keyMeshes || []) k.m.visible = true;
    this.app.onKey && this.app.onKey(false);
    this.hasStash = false; this.safeOpen = false; this.safeProg = 0; this.safeTick = 0; this.doorT = 0;
    this.combo = 0; this.comboT = 0; this.revived = false; this.endT = 0; this.hitstop = 0;
    this.nopeT = 0; this.tension = 0; this.catcher = null; this.fovKick = 0; this.cineInit = false; this.slowT = 0; this.fovPunch = 0; this.kickP = 0; this.kickR = 0;
    this.daily = this.app.mode === 'daily' ? this.app.daily : null;
    this.tut = this.app.mode === 'tutorial';
    this.D = this.daily || this.tut ? DIFFS.normal : DIFFS[this.app.diff] || DIFFS.normal;
    this.lookTotal = 0;
    this.lootTotal = this.baseLootTotal;
    this.gear = this.app.gearMods ? this.app.gearMods(!this.tut && !this.daily && this.D.label !== 'Ironman') : { coins: 0, smoke: 0, sneak: 1, pickW: 1, crack: 1, disguise: 0 };
    this.smokesLeft = this.D.smoke + this.gear.smoke; this.clouds = []; this.smokeHid = false; for (const s of this.smokeFx || []) s.pts.visible = false;
    this.coinsLeft = this.D.coins + this.gear.coins; this.coins = []; this.lures = 0; this.revives = 0;
    this.hidFromAlert = false; this.clerkStopped = false; this.hidesUsed = 0; this.smokesUsed = 0; this.coinsThrown = 0; this.radioFaked = 0;
    this.trail = []; this.trailT = 0; this.marks = [];
    this.heavy = []; this.stashRuns = 0; this.stashedEarly = false; this.app.onWeight && this.app.onWeight(1);
    this.got = { cash: 0, cashLoose: 0, gold: 0, jewel: 0, art: 0 }; this.ownerWoke = false; this.dashes = 0;
    this.totals = { cash: 0, gold: 0, jewel: 0, art: 0 };
    for (const l of this.L.loot) this.totals[l.type]++;
    this.contracts = this.tut ? [] : pickContracts(3, this.daily ? mulberry32(this.daily.seed) : Math.random, this);
    this.alarm = false; this.alarmT = 0; this.alarmTotal = this.D.alarm; this.disarmProg = 0; this.alarms = 0; this.policeBusted = false;
    if (this.police) this.police.group.visible = false;
    this.app.onAlarm && this.app.onAlarm(false);
    for (const m of this.coinMeshes || []) m.visible = false;

    const p = this.player;
    Object.assign(p, {
      x: L.start.x + 0.5, z: L.start.y + 0.5, okX: undefined, okZ: undefined, vx: 0, vz: 0, face: Math.PI, dashT: 0, dashCd: 0, ddx: 0, ddz: 0,
      inv: 0, stepAcc: 0, bagS: 0.5, bagV: 0, punchT: 0, hidden: false, y: 0, moving: 0,
      hiding: null, hideT: 0, beatT: 0, crouch: false, crouchK: 0, yaw: 0, pitch: -0.05, roll: 0, bob: 0, strafe: 0, lookX: 0, lookY: 0, grabT: 0, crack: false,
    });
    p.c.root.visible = true;
    p.c.root.rotation.set(0, Math.PI, 0);
    this.app.onHide && this.app.onHide(false);
    for (const g of this.guards || []) g.knowsHide = false;
    squash(p.c, 1);

    for (const g of this.reserve || []) {
      const i = this.guards.indexOf(g);
      if (i >= 0) this.guards.splice(i, 1);
      g.c.root.visible = false; g.cone.visible = false; g.shadow.visible = false; g.stars.visible = false; g.badge.className = 'badge';
    }
    this.shiftN = 0; this.shiftWarn = 0;
    this.chatT = 6 + Math.random() * 6; this.chatQ = null; this.chatI = Math.floor(Math.random() * 20);
    this.boltT = 8 + Math.random() * 8; this.thunderIn = 0; this.thunderT = 0;
    if (this.heli) this.heli.group.visible = false;
    this.brief = null; this.briefsGot = 0; this.app.onBrief && this.app.onBrief(0); if (this.briefcase) this.briefcase.group.visible = false;
    this.briefAt = this.app.mode === 'classic' && Math.random() < 0.55 ? 18 + Math.random() * 30 : Infinity;
    for (const v of this.vents || []) v.flap.rotation.x = 0;
    for (const tv of this.tvs || []) { tv.on = tv.used = false; tv.scr.visible = tv.glow.visible = false; }
    this.tvLures = 0; this.photoFinish = false; this.closeCalls = 0; this.koStreak = 0; this.maxKoStreak = 0; this.lastKo = -99;
    for (const g of this.guards) g.peak = 0; this.disguiseT = this.def.startDisguise && !this.tut ? this.def.startDisguise : 0; this.disguises = 0; this.uniformProg = 0;
    for (const g of this.guards) g.stripped = false;
    this.ventsUsed = 0; this.player.venting = null;
    for (const g of this.guards) this.resetGuard(g);
    // pickpocket targets: every guard carries a wallet; one patrol guard carries a spare keycard
    this.picks = 0; this.pocketProg = 0; this.koHold = 0; this.koTarget = null;
    let spare = !!(this.keyMeshes && this.keyMeshes.length);
    for (const g of this.guards) {
      g.wallet = g.kind === 'guard' ? 150 + ((Math.random() * 6) | 0) * 50 : 0; g.spareKey = false;
      if (spare && g.kind === 'guard' && g.def.path && !g.def.roam) { g.spareKey = true; spare = false; }
      if (g.walletMesh) { g.walletMesh.visible = g.wallet > 0; g.keyMesh.visible = g.spareKey; }
      this.lootTotal += g.wallet;
    }
    this.crumbs = []; this.crumbT = 0; this.barkedAt = false;
    for (const d of this.dogs) {
      const s = d.def.path[0];
      Object.assign(d, { x: s[0] + 0.5, z: s[1] + 0.5, wp: 1 % d.def.path.length, state: 'roam', t: 0, barkT: 0, sniffT: 0, ci: 0, lostT: 0,
        nav: [], navGoal: -1, navT: 0, face: 0, moving: 0, tx: 0, tz: 0, waitT: 0, smellT: 0, mul: 1 });
    }
    for (const cam of this.cams) { Object.assign(cam, { susp: 0, cool: 0, face: cam.def.face, off: 0 }); cam.cone.visible = true; cam.mesh.rotation.x = 0; }
    this.camsHit = 0;

    this.loot = L.loot.map((l, i) => ({
      type: l.type, x: l.x + 0.5, y: 0.45, z: l.y + 0.5, vx: 0, vy: 0, vz: 0, st: 'idle', t: 0,
      value: def.values[l.type], ph: i * 1.7, ms: 0, s: 1, rot: i,
    }));
    this.safe.door.rotation.y = 0; if (this.safe.dial) this.safe.dial.rotation.z = 0;
    this.van.group.visible = !!L.van;
    if (L.van) this.van.group.position.set(L.van.x + 0.5, 0, L.van.y + 1);
    this.casesSmashed = 0; this.slotLures = 0;
    for (const sl of this.slots || []) { sl.used = false; sl.prog = 0; sl.t = 0; sl.top.visible = false; }
    for (const c of this.cases || []) { c.smashed = false; c.prog = 0; c.glass.visible = true; c.gems.visible = true; }
    this.van.group.rotation.set(0, 0, 0);
    this.van.vx = 0;
    this.exitRing.visible = this.exitBeam.visible = false;
    for (const r of this.noiseRings) { r.m.visible = false; r.t = 1; }
    this.app.particles.clear();
    this.app.floaters.clear();
    if (this.daily) this.daily.mutator.apply(this);
    if (this.tut) for (const g of this.guards) { g.range *= 0.85; g.speed *= 0.9; }
  }

  resetGuard(g) {
    const d = g.def;
    Object.assign(g, {
      susp: 0, lastX: 0, lastZ: 0, lostT: 99, koT: 0, t: 0, wp: 0, dir: 1, nav: [], navGoal: -1, navT: 0,
      tx: 0, tz: 0, hurry: 0, baseFace: 0, fallT: 0, zz: 0.5, prevBadge: '',
      speed: (d.speed || 1.8) * this.D.speed, range: (g.kind === 'owner' ? 4.6 : 5.6) * this.D.range, fov: g.kind === 'owner' ? 1.2 : 1.35,
      reviveT: null, sawSafe: false, safeRun: false, sawCase: false,
      ...(g.kind === 'clerk' ? { range: 4.6 * this.D.range, fov: 1.5 } : {}),
    });
    g.c.root.rotation.set(0, 0, 0);
    g.c.root.position.y = 0;
    g.stars.visible = false;
    g.c.armOverride = false;
    if (d.owner) {
      const b = d.owner.bed;
      g.x = b[0] + b[2] / 2; g.z = b[1] + 1.0; g.face = 0;
      g.state = 'sleep';
      g.c.root.rotation.x = -Math.PI / 2;
      g.c.root.position.y = 0.62;
    } else if (d.post) {
      g.x = d.post[0] + 0.5; g.z = d.post[1] + 0.5; g.face = d.face; g.state = 'post';
    } else {
      g.x = d.path[0][0] + 0.5; g.z = d.path[0][1] + 0.5; g.wp = 1 % d.path.length;
      const n = d.path[g.wp];
      g.face = Math.atan2(n[0] + 0.5 - g.x, n[1] + 0.5 - g.z);
      g.state = 'patrol';
    }
  }

  // ---------- grid helpers ----------
  walkable(cx, cz) {
    const L = this.L;
    return cx >= 0 && cz >= 0 && cx < L.W && cz < L.H && L.walk[cz * L.W + cx] === 1;
  }
  opaqueAt(cx, cz) {
    const L = this.L;
    return cx < 0 || cz < 0 || cx >= L.W || cz >= L.H || L.opaque[cz * L.W + cx] === 1;
  }
  rayLen(x, z, a, max) {
    const dx = Math.sin(a), dz = Math.cos(a);
    for (let d = 0.1; d < max; d += 0.1) {
      if (this.opaqueAt(Math.floor(x + dx * d), Math.floor(z + dz * d))) return d - 0.05;
    }
    return max;
  }
  los(x0, z0, x1, z1) {
    const dx = x1 - x0, dz = z1 - z0, n = Math.ceil(Math.hypot(dx, dz) / 0.12);
    for (let i = 1; i < n; i++) {
      const t = i / n;
      if (this.opaqueAt(Math.floor(x0 + dx * t), Math.floor(z0 + dz * t))) return false;
    }
    return true;
  }
  clearLine(x0, z0, x1, z1) {
    const dx = x1 - x0, dz = z1 - z0, d = Math.hypot(dx, dz);
    if (d < 0.01) return true;
    const px = (-dz / d) * 0.28, pz = (dx / d) * 0.28, n = Math.ceil(d / 0.25);
    for (let i = 1; i <= n; i++) {
      const t = i / n, x = x0 + dx * t, z = z0 + dz * t;
      if (!this.walkable(Math.floor(x), Math.floor(z)) || !this.walkable(Math.floor(x + px), Math.floor(z + pz)) ||
        !this.walkable(Math.floor(x - px), Math.floor(z - pz))) return false;
    }
    return true;
  }
  collide(e, r) {
    const cx = Math.floor(e.x), cz = Math.floor(e.z);
    for (let iz = cz - 1; iz <= cz + 1; iz++) for (let ix = cx - 1; ix <= cx + 1; ix++) {
      if (this.walkable(ix, iz)) continue;
      const nx = clamp(e.x, ix, ix + 1), nz = clamp(e.z, iz, iz + 1);
      const dx = e.x - nx, dz = e.z - nz, d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (d2 > 1e-9) {
        const d = Math.sqrt(d2);
        e.x += (dx / d) * (r - d); e.z += (dz / d) * (r - d);
      } else {
        // center inside a block: push out along the shortest axis
        const l = e.x - ix, rr = ix + 1 - e.x, t = e.z - iz, b = iz + 1 - e.z, m = Math.min(l, rr, t, b);
        if (m === l) e.x = ix - r; else if (m === rr) e.x = ix + 1 + r; else if (m === t) e.z = iz - r; else e.z = iz + 1 + r;
      }
    }
  }
  moveEnt(e, dx, dz, r) {
    const n = Math.max(1, Math.ceil(Math.max(Math.abs(dx), Math.abs(dz)) / 0.15));
    for (let i = 0; i < n; i++) { e.x += dx / n; e.z += dz / n; this.collide(e, r); }
  }
  path(sx, sz, tx, tz) {
    const { W, H, walk } = this.L, N = W * H;
    if (!this.prev) { this.prev = new Int32Array(N); this.q = new Int32Array(N); }
    const prev = this.prev, q = this.q;
    if (tx < 0 || tz < 0 || tx >= W || tz >= H) return [];
    prev.fill(-1);
    const s = sz * W + sx, t = tz * W + tx;
    let h = 0, tl = 0;
    q[tl++] = s; prev[s] = s;
    while (h < tl) {
      const c = q[h++];
      if (c === t) break;
      const cx = c % W, cy = (c / W) | 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const n = ny * W + nx;
        if (!walk[n] || prev[n] !== -1) continue;
        if (dx && dy && (!walk[cy * W + nx] || !walk[ny * W + cx])) continue;
        prev[n] = c; q[tl++] = n;
      }
    }
    if (prev[t] === -1) return [];
    const out = [];
    for (let c = t; c !== s; c = prev[c]) out.push(c);
    return out.reverse();
  }
  // steer an entity along a BFS path (with line-of-sight smoothing). Returns true on arrival.
  navTo(g, tx, tz, speed, dt) {
    const W = this.L.W;
    const goal = Math.floor(tz) * W + Math.floor(tx);
    if (goal !== g.navGoal || g.navT <= 0) {
      g.nav = this.path(Math.floor(g.x), Math.floor(g.z), Math.floor(tx), Math.floor(tz));
      g.navGoal = goal; g.navT = 0.5;
    }
    g.navT -= dt;
    const nav = g.nav;
    let sx = tx, sz = tz;
    if (nav.length > 1) {
      const lim = Math.min(nav.length - 1, 6);
      let k = 0;
      for (let i = lim; i >= 1; i--) {
        const cx = (nav[i] % W) + 0.5, cz = ((nav[i] / W) | 0) + 0.5;
        if (this.clearLine(g.x, g.z, i === nav.length - 1 ? tx : cx, i === nav.length - 1 ? tz : cz)) { k = i; break; }
      }
      if (k === nav.length - 1) { sx = tx; sz = tz; }
      else { sx = (nav[k] % W) + 0.5; sz = ((nav[k] / W) | 0) + 0.5; }
      if (k > 0) nav.splice(0, k);
      else if (Math.hypot(sx - g.x, sz - g.z) < 0.3) nav.shift();
    }
    const dx = sx - g.x, dz = sz - g.z, d = Math.hypot(dx, dz);
    const fd = Math.hypot(tx - g.x, tz - g.z);
    if (fd < 0.12) return true;
    const step = Math.min(d, speed * dt);
    if (d > 0.001) {
      this.moveEnt(g, (dx / d) * step, (dz / d) * step, 0.28);
      g.face = turn(g.face, Math.atan2(dx, dz), 8 * dt);
    }
    g.moving = 1;
    return false;
  }

  // ---------- main update ----------
  update(rdt, demo) {
    let dt = rdt;
    if (this.trainMats) this.updateTrain(rdt, demo);
    if (this.hitstop > 0) { this.hitstop -= rdt; dt *= 0.08; }
    else if (this.slowT > 0) { this.slowT -= rdt; dt *= this.slowK + (1 - this.slowK) * clamp(1 - this.slowT / 0.15, 0, 1); }
    this.fovPunch = damp(this.fovPunch || 0, 0, 6, rdt); this.kickP = damp(this.kickP || 0, 0, 9, rdt); this.kickR = damp(this.kickR || 0, 0, 7, rdt);
    this.t += dt;
    const playing = !demo && this.state === 'play';
    if (playing) {
      this.time += dt; this.updatePlayer(dt);
      // shift change: reinforcements walk in from the entrance
      const sched = this.app.mode === 'tutorial' || this.daily || this.D.label === 'Easy' || this.def.noShift ? [] : this.D.mult >= 1.5 ? [45, 90] : [60, 120];
      if (this.shiftWarn === this.shiftN && this.shiftN < sched.length && this.time >= sched[this.shiftN] - 10) {
        this.shiftWarn++; this.app.audio.play('radio');
        this.app.announce('📻 "Relief guard arriving in 10 seconds" — grab what you can!');
      }
      if (this.def.rain) this.updateStorm(rdt);
      if (this.disguiseT > 0) { this.disguiseT -= dt; this.app.onDisguise(Math.max(0, this.disguiseT)); if (this.disguiseT <= 0) { this.app.audio.play('lost'); this.app.floaters.spawn('Disguise worn off', this.player.x, 1.6, this.player.z, 'warn', 1.2); } }
      if (this.tvs.length) this.updateTVs(dt);
      this.updateBriefcase(dt);
      if (this.shiftN < sched.length && this.time >= sched[this.shiftN] && this.reserve[this.shiftN]) this.callReinforcement(this.reserve[this.shiftN++]);
      // route recap: sample position + whether anyone is onto us
      this.trailT -= dt;
      if (this.trailT <= 0) {
        this.trailT = 0.35;
        const hot = this.alarm || this.guards.some((g) => g.state === 'alert' || g.state === 'flee' || g.susp > 0.35);
        this.trail.push([this.player.x, this.player.z, hot ? 1 : 0]);
        if (this.trail.length > 900) this.trail.splice(0, 2);
      }
    }
    else if (demo) this.player.c.root.visible = false;

    let alertN = 0;
    for (const g of this.guards) {
      g.moving = 0;
      this.updateGuard(g, dt, playing);
      if (g.state === 'alert' || g.state === 'flee') alertN++;
      this.syncGuard(g, dt);
    }
    if (playing) this.updateChatter(dt);
    for (const cam of this.cams) this.updateCam(cam, dt, playing);
    for (const d of this.dogs) this.updateDog(d, dt, playing);
    let susN = 0;
    for (const g of this.guards) if (g.susp > 0.3 || g.state === 'investigate' || g.state === 'search') susN++;
    this.tension = this.alarm ? 3 : alertN > 0 ? 2 : susN > 0 ? 1 : 0;
    this.updateAlarm(dt, playing);
    this.updateLasers(dt, playing);
    this.updateSpots(dt, playing);
    this.updateSlots(dt);

    this.updateLoot(dt, playing);
    this.updateProps(dt);
    if (!demo) this.syncPlayer(dt);
    this.updateNoiseRings(dt);
    this.updateCoins(dt, playing);
    this.updateSmoke(dt);

    if (this.state === 'escape') this.updateEscape(dt);
    if (this.state === 'caught') {
      this.endT += rdt;
      if (this.endT > 1.2 && !this.endSent) { this.endSent = true; this.app.onBusted(); }
    }
  }

  updatePlayer(dt) {
    const p = this.player, app = this.app, inp = app.input;
    inp.move(_mv);
    inp.consumeLook(_lk);
    const sens = app.sens || 0.0024;
    p.lookX = _lk.x; p.lookY = _lk.y;
    p.yaw -= _lk.x * sens;
    this.lookTotal += Math.abs(_lk.x * sens) + Math.abs(_lk.y * sens);
    p.pitch = clamp(p.pitch - _lk.y * sens * (app.invertY ? -1 : 1), -1.25, 1.2);
    p.face = p.yaw + Math.PI;
    if (p.hiding) { this.updateHiding(dt, inp); return; }
    if (p.venting) { this.updateVent(dt, inp); return; }
    if (this.picking) { this.updatePicking(dt, inp); return; }
    const fx = Math.sin(p.face), fz = Math.cos(p.face), rx = -fz, rz = fx;
    const wx = rx * _mv.x - fx * _mv.y, wz = rz * _mv.x - fz * _mv.y;
    p.strafe = _mv.x;
    const frac = this.lootGot / this.lootTotal;
    if (inp.consumeCrouch()) { p.crouch = !p.crouch; app.onCrouch(p.crouch); app.hintDone('sneak'); }
    if (p.dashT > 0 && p.crouch) { p.crouch = false; app.onCrouch(false); }
    p.crouchK = damp(p.crouchK || 0, p.crouch ? 1 : 0, 10, dt);
    const spd = P_SPEED * (1 - 0.1 * frac) * (p.crouch ? 0.5 * this.gear.sneak : 1) * this.weightMul();
    p.vx = damp(p.vx, wx * spd, 14, dt);
    p.vz = damp(p.vz, wz * spd, 14, dt);
    p.dashCd -= dt; p.inv -= dt; p.punchT -= dt;
    if (inp.consumeDash() && p.dashCd <= 0) {
      let dx = wx, dz = wz;
      if (Math.abs(dx) + Math.abs(dz) < 0.01) { dx = fx; dz = fz; }
      const l = Math.hypot(dx, dz); dx /= l; dz /= l;
      p.dashT = DASH_T; p.dashCd = DASH_CD; p.ddx = dx; p.ddz = dz; this.dashes++; this.lastDash = this.time;
      app.audio.play('dash');
      app.shake.add(0.18);
      squash(p.c, 0.7);
      app.particles.burst(p.x, 0.1, p.z, { count: 8, colors: [0xffffff, 0xdfe6ee], speed: 2, up: 1.5, size: 0.16, gravity: 2, life: 0.5 });
      this.makeNoise(p.x, p.z, 4.2, null);
      app.hintDone('dash');
    }
    let vx = p.vx, vz = p.vz;
    if (p.dashT > 0) {
      p.dashT -= dt;
      const k = Math.max(0, p.dashT / DASH_T);
      vx += p.ddx * DASH_V * k; vz += p.ddz * DASH_V * k;
      if (Math.random() < 0.6) app.particles.burst(p.x, 0.15, p.z, { count: 1, colors: [0xffffff], speed: 0.5, up: 0.5, size: 0.12, gravity: 0, life: 0.35 });
    }
    this.moveEnt(p, vx * dt, vz * dt, PR);
    // scent trail for dogs
    this.crumbT -= dt;
    if (this.crumbT <= 0 && Math.hypot(p.vx, p.vz) > 0.5) {
      this.crumbT = 0.4; this.crumbs.push({ x: p.x, z: p.z, t: this.time });
      if (this.crumbs.length > 60) this.crumbs.shift();
    }
    for (const d of this.dogs) {
      const dx = p.x - d.x, dz = p.z - d.z, dd = Math.hypot(dx, dz);
      if (dd < 0.5 && dd > 0.001) this.moveEnt(p, (dx / dd) * (0.5 - dd), (dz / dd) * (0.5 - dd), PR);
    }
    // soft-collide with standing guards
    for (const g of this.guards) {
      if (g.state === 'sleep') continue;
      const dx = p.x - g.x, dz = p.z - g.z, d = Math.hypot(dx, dz);
      if (d < 0.55 && d > 0.001) this.moveEnt(p, (dx / d) * (0.55 - d), (dz / d) * (0.55 - d), PR);
    }
    // safety net: never let the robber end up inside a wall / prop block
    if (this.walkable(Math.floor(p.x), Math.floor(p.z))) { p.okX = p.x; p.okZ = p.z; }
    else if (p.okX !== undefined) { p.x = p.okX; p.z = p.okZ; p.vx = p.vz = 0; }
    const sp = Math.hypot(vx, vz);
    p.moving = Math.min(1, sp / P_SPEED);
    const ph = Math.floor(p.bob / Math.PI);
    p.bob += Math.min(sp, P_SPEED) * dt * 2.6;
    if (Math.floor(p.bob / Math.PI) !== ph) {
      const L = this.L, cx = clamp(Math.floor(p.x), 0, L.W - 1), cz = clamp(Math.floor(p.z), 0, L.H - 1);
      app.audio.stepSound(L.floor[cz * L.W + cx], p.dashT > 0 ? 1.6 : p.crouch ? 0.35 : 1);
    }
    if (sp > 0.5) app.hintDone('move');

    // ---- interactions ----
    const sx = this.L.safe.x + 0.5, sz = this.L.safe.y + 0.5;
    const nearSafe = !this.safeOpen && Math.hypot(p.x - sx, p.z - sz) < 1.45 + (this.safeScale - 1) * 0.8 && Math.abs(angDiff(p.face, Math.atan2(sx - p.x, sz - p.z))) < 1.1;
    let ko = null, best = 9;
    for (const g of this.guards) {
      if (!this.canKO(g)) continue;
      const d = Math.hypot(p.x - g.x, p.z - g.z);
      if (p.dashT <= 0 && Math.abs(angDiff(p.face, Math.atan2(g.x - p.x, g.z - p.z))) > 0.9) continue;
      if (d < best) { best = d; ko = g; }
      if (p.dashT > 0 && d < 0.95) { this.knockout(g); ko = null; break; }
    }
    const pressed = inp.consumeAct();
    p.crack = false;
    // alarm keypad
    // keycards + security doors
    for (const k of this.keyMeshes) {
      if (!k.m.visible) continue;
      k.m.rotation.y = this.t * 2; k.m.position.y = 0.8 + Math.sin(this.t * 3) * 0.06;
      const hl = k.m.userData.halo; if (hl) { hl.position.y = -0.76 - Math.sin(this.t * 3) * 0.06; hl.material.opacity = 0.75 + Math.sin(this.t * 4) * 0.25; hl.rotation.z = -this.t * 2; }
      if (Math.hypot(p.x - (k.x + 0.5), p.z - (k.y + 0.5)) < 0.85) {
        k.m.visible = false; this.hasKey = true;
        app.audio.play('gold'); app.onKey(true); app.hint('door');
        app.floaters.spawn('KEYCARD!', k.x + 0.5, 1.3, k.y + 0.5, 'big', 1.2);
        app.particles.burst(k.x + 0.5, 0.8, k.y + 0.5, { count: 12, colors: [0x2f7ae8, 0xffffff, 0xf2c94c], speed: 2, up: 2, size: 0.04, life: 0.6 });
      }
    }
    let nearDoor = null;
    for (const d of this.doors) {
      if (d.open) continue;
      const dx = d.x + 0.5, dz = d.y + 0.5;
      if (Math.hypot(p.x - dx, p.z - dz) < 1.5 && Math.abs(angDiff(p.face, Math.atan2(dx - p.x, dz - p.z))) < 1.0) nearDoor = d;
    }
    // slot machines: hold E to pull the lever
    let nearSlot = null;
    for (const sl of this.slots) {
      if (sl.used) continue;
      const fz = sl.cz + sl.face * 0.9;
      if (Math.abs(p.z - fz) < 0.9 && Math.abs(p.x - sl.cx) < sl.f.w / 2 + 0.3) nearSlot = sl;
    }
    for (const sl of this.slots) if (sl !== nearSlot) sl.prog = Math.max(0, sl.prog - dt * 2);
    if (nearSlot) {
      app.hint('slot');
      if (inp.act) { nearSlot.prog += dt / 0.5; p.crack = true; if (nearSlot.prog >= 1) this.pullSlot(nearSlot); }
    }
    // display cases: hold E to smash
    let nearCase = null;
    for (const c of this.cases) {
      if (c.smashed) continue;
      const d = Math.hypot(p.x - c.cx, p.z - c.cz);
      if (d < 1.3 + Math.max(c.f.w, c.f.d) * 0.35 && Math.abs(angDiff(p.face, Math.atan2(c.cx - p.x, c.cz - p.z))) < 1.0) nearCase = c;
    }
    for (const c of this.cases) if (c !== nearCase) c.prog = Math.max(0, c.prog - dt * 2);
    if (nearCase) {
      app.hint('case');
      if (inp.act) {
        nearCase.prog += dt / 0.55; p.crack = true;
        if (nearCase.prog >= 1) this.smashCase(nearCase);
      }
    }
    // breaker box (cuts the lasers)
    let nearBreaker = false;
    if (this.breaker && !this.powerOff) {
      const a = this.breaker.at, bp = this.breaker.group.position;
      nearBreaker = Math.hypot(p.x - a.x, p.z - a.z) < 1.0 && Math.abs(angDiff(p.face, Math.atan2(bp.x - p.x, bp.z - p.z))) < 1.0;
      if (nearBreaker && inp.act) {
        this.breakProg += dt / 1.2; p.crack = true;
        this.safeTick -= dt;
        if (this.safeTick <= 0) { this.safeTick = 0.15; app.audio.play('tick', this.breakProg * 0.5); app.particles.burst(bp.x, bp.y + 0.3, bp.z, { count: 2, colors: [0xfff1a8, 0x7fd8ff], speed: 2, up: 1.5, size: 0.03, life: 0.3 }); }
        if (this.breakProg >= 1) this.cutPower();
      } else this.breakProg = Math.max(0, this.breakProg - dt);
    }
    let nearPanel = false;
    const hide = this.nearHide();
    if (this.alarm && this.panel) {
      const a = this.panel.at, pg = this.panel.group.position;
      nearPanel = Math.hypot(p.x - a.x, p.z - a.z) < 1.0 && Math.abs(angDiff(p.face, Math.atan2(pg.x - p.x, pg.z - p.z))) < 1.0;
      if (nearPanel && inp.act) {
        this.disarmProg += dt / 1.3; p.crack = true;
        this.safeTick -= dt;
        if (this.safeTick <= 0) { this.safeTick = 0.13; app.audio.play('tick', this.disarmProg); }
        if (this.disarmProg >= 1) this.disarm();
      } else this.disarmProg = Math.max(0, this.disarmProg - dt);
    }
    if (nearSafe) {
      app.hint('safe');
      if (inp.act) {
        this.safeProg += dt * this.gear.crack / (this.def.crackTime || 1.4);
        if (this.safe.dial) this.safe.dial.rotation.z = Math.sin(this.safeProg * 9.4) * 2.6 + this.safeProg * 3;
        if (this.def.crackNoise) {
          this.crackNoiseT -= dt;
          if (this.crackNoiseT <= 0) { this.crackNoiseT = 1.1; this.makeNoise(sx, sz, this.def.crackNoise, null); app.hint('drill'); }
        }
        this.safeTick -= dt;
        p.crack = true;
        if (this.safeTick <= 0) {
          this.safeTick = 0.11; app.audio.play('tick', this.safeProg);
          app.particles.burst(sx, 0.7, sz + 0.4, { count: 1, colors: [0xffd23f, 0xffffff], speed: 1.5, up: 2, size: 0.06, life: 0.3 });
        }
        if (this.safeProg >= 1) this.openSafe();
      } else this.safeProg = Math.max(0, this.safeProg - dt * 0.5);
    } else this.safeProg = Math.max(0, this.safeProg - dt);
    // behind an unaware guard: tap E = knock out, hold E = pickpocket
    const canPocket = ko && (ko.wallet > 0 || ko.spareKey);
    if (ko && !nearSafe) {
      app.hint(canPocket ? 'pocket' : 'ko');
      if (inp.act) {
        if (this.koTarget !== ko) { this.koTarget = ko; this.koHold = 0; this.pocketProg = 0; }
        this.koHold += dt;
        if (canPocket && this.koHold > 0.22) {
          this.pocketProg += dt / 0.9; p.crack = true;
          ko.susp = Math.min(0.9, ko.susp + dt * 0.12);
          if (this.pocketProg >= 1) { this.pickpocket(ko); this.koHold = 99; }
        }
      } else if (this.koHold > 0) {
        if (this.koHold < 0.22 && this.koTarget === ko) this.knockout(ko);
        this.koHold = 0; this.pocketProg = 0;
      }
    } else { this.koHold = 0; this.pocketProg = 0; this.koTarget = null; }
    if (nearSlot && !nearSafe && !ko) { app.setPrompt('slot', nearSlot.prog); this.updateObjective(); return; }
    if (nearCase && !nearSafe && !ko) { app.setPrompt('case', nearCase.prog); this.updateObjective(); return; }
    // answer a knocked-out guard's radio
    let caller = null;
    for (const g of this.guards) {
      if (g.state !== 'ko' || g.radioCall !== 1) { g.answerProg = 0; continue; }
      if (Math.hypot(p.x - g.x, p.z - g.z) < 1.6) caller = g;
    }
    if (caller && !nearSafe) {
      if (inp.act) {
        caller.answerProg += dt / 0.7; p.crack = true;
        if (caller.answerProg >= 1) this.fakeCheckIn(caller);
      } else caller.answerProg = Math.max(0, caller.answerProg - dt);
      app.setPrompt('radio', caller.answerProg);
      this.updateObjective();
      return;
    }
    // take a knocked-out guard's uniform (hold E): a short-lived disguise
    let strip = null;
    if (!nearSafe && !ko && this.disguiseT <= 0) for (const g of this.guards) {
      if (g.kind === 'guard' && g.state === 'ko' && !g.stripped && g.radioCall !== 1 && Math.hypot(p.x - g.x, p.z - g.z) < 1.5) strip = g;
    }
    if (strip) {
      if (inp.act) { this.uniformProg += dt / 1.1; p.crack = true; if (this.uniformProg >= 1) { this.uniformProg = 0; this.takeUniform(strip); } }
      else this.uniformProg = Math.max(0, this.uniformProg - dt * 2);
      app.hint('uniform');
      app.setPrompt('uniform', this.uniformProg);
      this.updateObjective();
      return;
    } else this.uniformProg = 0;
    if (nearDoor && !nearSafe && !ko && nearDoor.type === 'lock') {
      app.hint('pick');
      if (pressed) this.startPick(nearDoor); else app.setPrompt('pick');
      this.updateObjective();
      return;
    }
    if (nearDoor && !nearSafe && !ko) {
      if (pressed) {
        if (this.hasKey) this.openDoor(nearDoor);
        else if (this.nopeT <= 0) { this.nopeT = 1.5; app.audio.play('nope'); app.floaters.spawn('Need the keycard!', nearDoor.x + 0.5, 1.3, nearDoor.y + 0.5, 'warn', 1.2); app.hint('key'); }
      }
      app.setPrompt(this.hasKey ? 'door' : 'locked');
      this.updateObjective();
      return;
    }
    if (nearBreaker && !nearSafe && !ko) { app.setPrompt('breaker', this.breakProg); this.updateObjective(); return; }
    const tvN = !nearPanel && !nearSafe && !ko ? this.nearTV() : null;
    if (tvN) { if (pressed) { this.tvOn(tvN); this.updateObjective(); return; } else { app.setPrompt('tv'); this.updateObjective(); return; } }
    const vent = !nearPanel && !nearSafe && !ko && !this.heavy.length ? this.nearVent() : null;
    if (vent) { app.hint('vent'); if (pressed) { this.enterVent(vent); return; } app.setPrompt('vent'); this.updateObjective(); return; }
    const hideOk = hide && !nearPanel && !nearSafe && !ko;
    if (hideOk) { app.hint('hide'); if (pressed) { this.enterHide(hide); return; } }
    app.setPrompt(nearPanel ? 'panel' : nearSafe ? 'safe' : ko ? (canPocket ? 'pocket' : 'ko') : hideOk ? 'hide' : '', nearPanel ? this.disarmProg : ko && canPocket ? this.pocketProg : this.safeProg);

    // exit
    const ex = this.L.exit;
    const de = Math.hypot(p.x - ex.x, p.z - ex.z);
    if (de < 2.4 && this.heavy.length) this.stashHeavy();
    this.nopeT -= dt;
    if (de < 0.95) {
      if (this.hasStash) this.escape();
      else if (this.nopeT <= 0) {
        this.nopeT = 3; app.audio.play('nope');
        app.floaters.spawn('Crack the safe first!', p.x + fx * 1.6, 1.2, p.z + fz * 1.6, 'warn', 1.4);
      }
    }
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.combo = 0; }
    if (inp.consumeThrow()) this.throwCoin();
    if (inp.consumeSmoke()) this.dropSmoke();
    this.checkContracts(false);
    this.updateObjective();

    // contextual hints
    if (this.time > 3.5) app.hint('dash');
    for (const g of this.guards) {
      const d = Math.hypot(p.x - g.x, p.z - g.z);
      if (g.state === 'sleep' && d < 6) app.hint('owner');
      for (const dg of this.dogs) if (Math.hypot(p.x - dg.x, p.z - dg.z) < 7) app.hint('dog');
      if (!this.powerOff) for (const l of this.lasers) { const al = l.alongX ? p.x : p.z, ac = l.alongX ? p.z : p.x; if (al > l.lo - 1 && al < l.hi + 1 && Math.abs(ac - l.line) < 3.5) app.hint('laser'); }
      else if (g.state !== 'sleep' && d < 6.5) { app.hint('cone'); if (this.time > 8) app.hint('coin'); if (this.time > 14) app.hint('sneak'); }
    }
    for (const it of this.loot) if (Math.hypot(p.x - it.x, p.z - it.z) < 4) { app.hint('loot'); break; }
  }

  canKO(g) {
    if (g.state === 'ko' || g.state === 'sleep' || g.state === 'waking' || g.state === 'getup') return false;
    const p = this.player, dx = p.x - g.x, dz = p.z - g.z, d = Math.hypot(dx, dz);
    if (d > 1.35) return false;
    if (Math.abs(angDiff(g.face, Math.atan2(dx, dz))) < 1.75) return false;
    return this.los(g.x, g.z, p.x, p.z);
  }

  // game-feel: slow-motion window, FOV punch (negative = zoom in) and camera kick
  juice(slow, slowK, fov, kickP, kickR) {
    if (slow > 0 && (!this.slowT || this.slowT < slow)) { this.slowT = slow; this.slowK = slowK; }
    const sc = this.app.shake.scale ?? 1;
    this.fovPunch = (this.fovPunch || 0) + fov * sc; this.kickP = (this.kickP || 0) + kickP * sc; this.kickR = (this.kickR || 0) + kickR * sc;
  }
  mark(t, x, z) { this.marks.push({ t, x, z }); }
  knockout(g) {
    this.mark('ko', g.x, g.z);
    const app = this.app, p = this.player;
    if (g.reviveT) { g.reviveT.claimed = false; g.reviveT = null; }
    g.safeRun = false; g.claimed = false;
    if (g.kind === 'clerk' && g.state === 'flee') { this.clerkStopped = true; this.app.floaters.spawn('ALARM STOPPED', g.x, 2.2, g.z, 'big', 1.2); }
    g.state = 'ko'; g.koT = 9; g.susp = 0; g.fallT = 0; g.radioCall = 0; g.answerProg = 0; g.callT = 0;
    this.koStreak = this.time - (this.lastKo ?? -99) < 8 ? (this.koStreak || 1) + 1 : 1; this.lastKo = this.time; this.maxKoStreak = Math.max(this.maxKoStreak || 0, this.koStreak);
    if (this.koStreak >= 2) {
      app.floaters.spawn(['', '', 'DOUBLE TAKEDOWN!', 'TRIPLE TAKEDOWN!'][this.koStreak] || 'UNSTOPPABLE!', g.x, 2.3, g.z, 'big', 1.3);
      app.audio.play('combo', this.koStreak * 3); app.shake.add(0.2);
    }    g.c.flash = 0.2;
    squash(g.c, 0.6);
    this.kos++;
    this.hitstop = 0.08; this.juice(0.38, 0.3, -9, -0.05, (Math.random() < 0.5 ? -1 : 1) * 0.07);
    app.shake.add(0.35);
    p.punchT = 0.28;
    squash(p.c, 1.25);
    app.audio.play('ko');
    app.particles.burst(g.x, 1.0, g.z, { count: 14, colors: [0xffd23f, 0xffffff, 0xff9f1c], speed: 3.5, up: 4, size: 0.13, life: 0.7 });
    app.floaters.spawn('KO!', g.x, 1.7, g.z, 'ko', 0.9);
    this.makeNoise(g.x, g.z, 2.5, g);
    app.hintDone('ko');
  }

  nearHide() {
    const p = this.player;
    let best = null, bd = 1.25;
    for (const h of this.hides) {
      const d = Math.hypot(p.x - h.cx, p.z - h.cz);
      if (d < bd && Math.abs(angDiff(p.face, Math.atan2(h.cx - p.x, h.cz - p.z))) < 0.9) { bd = d; best = h; }
    }
    return best;
  }
  enterHide(h) {
    this.hidesUsed++;
    const p = this.player, app = this.app;
    let witnessed = false, alertN = 0;
    for (const g of this.guards) {
      if (g.state === 'alert' || g.state === 'flee') alertN++;
      if (g.state !== 'ko' && g.state !== 'sleep' && g.state !== 'getup' && this.canSee(g)) {
        witnessed = true; g.knowsHide = true;
        if (g.state !== 'alert') this.alert(g);
        app.floaters.spawn('I saw that!', g.x, 2.0, g.z, 'alert', 1.2);
      }
    }
    p.hiding = h; p.hideT = 0; p.vx = p.vz = 0; p.x = h.ex; p.z = h.ez;
    p.yaw = h.face - Math.PI; p.pitch = -0.05;
    if (alertN > 0 && !witnessed) {
      this.hidFromAlert = true;
      for (const g of this.guards) if (g.state === 'alert') { g.lostT = 99; }
    }
    app.audio.play('creak');
    app.onHide(true);
    app.hintDone('hide');
  }
  leaveHide(silent) {
    const p = this.player;
    if (!p.hiding) return;
    const h = p.hiding;
    p.hiding = null; p.x = h.ex; p.z = h.ez; p.yaw = h.face - Math.PI;
    if (!silent) this.app.audio.play('creak');
    this.app.onHide(false);
  }
  updateHiding(dt, inp) {
    const p = this.player, h = p.hiding, app = this.app;
    p.hideT += dt;
    // look around through the slats (limited arc)
    const base = h.face - Math.PI;
    p.yaw = base + clamp(angDiff(base, p.yaw), -1.0, 1.0);
    p.pitch = clamp(p.pitch, -0.5, 0.4);
    p.moving = 0; p.crack = false;
    inp.consumeDash(); inp.consumeThrow();
    // heartbeat when a guard is close
    let near = 9;
    for (const g of this.guards) if (g.state !== 'ko' && g.state !== 'sleep') near = Math.min(near, Math.hypot(g.x - h.cx, g.z - h.cz));
    p.beatT -= dt;
    if (near < 4.5 && p.beatT <= 0) { p.beatT = 0.45 + near * 0.12; app.audio.play('beat'); app.shake.add(0.04); }
    inp.move(_mv);
    app.setPrompt('leave');
    if (p.hideT > 0.35 && (inp.consumeAct() || Math.hypot(_mv.x, _mv.y) > 0.5)) this.leaveHide(false);
  }

  // ---------- disguise ----------
  takeUniform(g) {
    const app = this.app;
    g.stripped = true; this.disguises++;
    this.disguiseT = 25 + this.gear.disguise;
    g.koT = Math.max(g.koT, 6);
    app.audio.play('creak'); app.audio.play('pick', 6);
    app.floaters.spawn('Uniform on!', g.x, 1.4, g.z, 'big', 1.2);
    app.onDisguise(this.disguiseT);
    app.hintDone('uniform');
  }

  // ---------- golden briefcase: a timed bonus that appears somewhere in the building ----------
  updateBriefcase(dt) {
    const app = this.app, p = this.player, bc = this.briefcase;
    if (!bc) return;
    if (!this.brief) {
      if (this.time < this.briefAt || this.hasStash || this.alarm) return;
      this.briefAt = Infinity;
      const L = this.L, cells = [];
      for (let y = 1; y < L.H - 1; y++) for (let x = 1; x < L.W - 1; x++) {
        const k = y * L.W + x;
        if (!L.walk[k] || L.outdoor[k]) continue;
        const d = Math.hypot(x + 0.5 - p.x, y + 0.5 - p.z);
        if (d > 6 && d < 16) cells.push([x, y]);
      }
      const px = Math.floor(p.x), pz = Math.floor(p.z);
      for (let tries = 0; tries < 12 && cells.length; tries++) {
        const [x, y] = cells.splice((Math.random() * cells.length) | 0, 1)[0];
        if (!this.path(px, pz, x, y).length) continue;
        const value = Math.round((this.def.values.stash || 2000) * 0.3 / 50) * 50;
        this.brief = { x: x + 0.5, z: y + 0.5, t: 30, value };
        bc.group.position.set(x + 0.5, 0.7, y + 0.5); bc.group.visible = true;
        app.announce(`💼 A courier dropped a golden briefcase! ${fmt(value)} · 30s`);
        app.audio.play('jackpot');
        break;
      }
      return;
    }
    const b = this.brief;
    b.t -= dt;
    app.onBrief(Math.max(0, b.t));
    bc.group.rotation.y += dt * 2; bc.group.position.y = 0.7 + Math.sin(this.t * 3) * 0.08;
    bc.halo.position.y = -0.6 - Math.sin(this.t * 3) * 0.08; bc.halo.material.opacity = 0.7 + Math.sin(this.t * 5) * 0.25;
    bc.group.visible = b.t > 5 || Math.sin(this.t * 14) > -0.3;            // blinks in the last 5 s
    if (Math.random() < dt * 3) app.particles.burst(b.x, 0.9, b.z, { count: 1, colors: [0xffe680, 0xffffff], speed: 0.3, up: 0.6, size: 0.05, gravity: 0, life: 0.6 });
    if (this.state === 'play' && Math.hypot(p.x - b.x, p.z - b.z) < 0.85) {
      this.lootGot += b.value; this.lootTotal += b.value; this.briefsGot++;
      app.floaters.spawn('+' + fmt(b.value) + ' BRIEFCASE!', b.x, 1.6, b.z, 'big', 1.5);
      app.audio.play('gold'); app.audio.play('combo', 10); app.flash('gold');
      this.juice(0.35, 0.4, -8, 0.03, 0); app.shake.add(0.25);
      app.particles.burst(b.x, 0.8, b.z, { count: 26, colors: [0xffd23f, 0xffffff, 0xffe680], speed: 4, up: 5, size: 0.09, life: 0.9 });
      app.onLoot(true);
      bc.group.visible = false; this.brief = null; app.onBrief(0);
    } else if (b.t <= 0) {
      app.onBrief(0);
      app.floaters.spawn('The courier took it back...', b.x, 1.4, b.z, 'q', 1.4);
      bc.group.visible = false; this.brief = null;
    }
  }

  // ---------- TVs ----------
  nearTV() {
    const p = this.player;
    for (const tv of this.tvs) {
      if (tv.on || tv.used) continue;
      if (Math.hypot(p.x - tv.cx, p.z - tv.cz) < 1.9 && Math.abs(angDiff(p.face, Math.atan2(tv.cx - p.x, tv.cz - p.z))) < 0.7) return tv;
    }
    return null;
  }
  tvOn(tv) {
    const app = this.app;
    tv.on = true; tv.t = 0; tv.scr.visible = tv.glow.visible = true;
    app.audio.play('click'); app.audio.play('tvon');
    this.makeNoise(tv.fx, tv.fz, 7.5, null, 'Who turned the TV on?');
    app.setPrompt('');
  }
  tvOff(tv, g) {
    tv.on = false; tv.used = true; tv.scr.visible = tv.glow.visible = false;
    this.app.audio.play('click');
    if (g) { this.tvLures++; this.app.floaters.spawn('Stupid TV...', g.x, 2.0, g.z, 'q', 1.2); }
  }
  updateTVs(dt) {
    const p = this.player;
    for (const tv of this.tvs) {
      if (!tv.on) continue;
      tv.t += dt; tv.flick -= dt; tv.babble -= dt;
      if (tv.flick <= 0) {
        tv.flick = 0.12 + Math.random() * 0.25;
        const c = [0x9fd0ff, 0xffd27a, 0x8affc0, 0xff9ad0, 0xffffff][(Math.random() * 5) | 0];
        tv.scr.material.color.setHex(c); tv.glow.material.color.setHex(c); tv.glow.material.opacity = 0.35 + Math.random() * 0.3;
      }
      const d = Math.hypot(p.x - tv.cx, p.z - tv.cz);
      if (tv.babble <= 0) { tv.babble = 0.2 + Math.random() * 0.12; if (d < 14) this.app.audio.play('tv', Math.max(0, 1 - d / 14)); }
      if (tv.t > 18) this.tvOff(tv, null);
    }
  }

  // ---------- air vents ----------
  nearVent() {
    const p = this.player;
    for (const v of this.vents) {
      if (Math.hypot(p.x - v.cx, p.z - v.cz) < 0.85 && Math.abs(angDiff(p.face, Math.atan2(v.gx - p.x, v.gz - p.z))) < 1.0) return v;
    }
    return null;
  }
  enterVent(v) {
    const p = this.player, app = this.app;
    for (const g of this.guards) {
      if (g.state !== 'ko' && g.state !== 'sleep' && g.state !== 'getup' && this.canSee(g)) {
        if (g.state !== 'alert') this.alert(g);
        app.floaters.spawn('Hey! The vent!', g.x, 2.0, g.z, 'alert', 1.2);
      }
    }
    this.ventsUsed++;
    p.venting = { t: 0, from: v, to: v.other, dur: 1.7, moved: false };
    p.vx = p.vz = 0; p.crouch = true; app.onCrouch(true);
    app.audio.play('vent'); app.setPrompt('');
    app.hintDone('vent');
  }
  updateVent(dt, inp) {
    const p = this.player, v = p.venting, app = this.app;
    v.t += dt;
    p.inv = 0.5; p.moving = 0; p.crack = false; p.crouchK = 1;
    inp.consumeDash(); inp.consumeThrow(); inp.consumeAct(); inp.consumeSmoke();
    const k = v.t / v.dur;
    v.from.flap.rotation.x = Math.min(1.3, v.t * 6) * (k < 0.5 ? 1 : Math.max(0, 1 - (k - 0.5) * 6));
    v.to.flap.rotation.x = k > 0.55 ? Math.min(1.3, (k - 0.55) * 8) * Math.max(0, 1 - Math.max(0, k - 0.85) * 7) : 0;
    if (!v.moved && k >= 0.5) {
      v.moved = true;
      p.x = v.to.cx; p.z = v.to.cz; p.yaw = v.to.out - Math.PI; p.pitch = -0.1;
      if (this.trail) this.trail.push([p.x, p.z, 0]);
    }
    app.ventFx(k < 0.22 ? k / 0.22 : k > 0.78 ? (1 - k) / 0.22 : 1);
    if (k >= 1) {
      p.venting = null; p.inv = 0.4;
      v.from.flap.rotation.x = 0; v.to.flap.rotation.x = 0;
      app.ventFx(0);
      app.audio.play('clank');
      app.shake.add(0.12);
      this.makeNoise(p.x, p.z, 2.4, null);
      app.particles.burst(p.x, 0.3, p.z, { count: 10, colors: [0xb8b0a0, 0x8a8478], speed: 1.2, up: 1.2, size: 0.07, gravity: -0.5, life: 0.8 });
    }
  }

  // ---------- smoke bomb ----------
  dropSmoke() {
    const p = this.player, app = this.app;
    if (this.smokesLeft <= 0) { app.audio.play('nope'); return; }
    if (this.clouds.length >= this.smokeFx.length) return;
    this.smokesLeft--; this.smokesUsed++;
    let x = p.x + Math.sin(p.face) * 0.7, z = p.z + Math.cos(p.face) * 0.7;
    if (!this.walkable(Math.floor(x), Math.floor(z))) { x = p.x; z = p.z; }
    const fx = this.smokeFx.find((f) => !f.pts.visible);
    fx.pts.visible = true;
    this.clouds.push({ x, z, t: 0, dur: 7.5, r: 0, fx });
    app.audio.play('smoke');
    app.shake.add(0.12);
    app.particles.burst(x, 0.2, z, { count: 14, colors: [0xffffff, 0xd9d4e2, 0xb8b2c6], speed: 3, up: 2, size: 0.12, life: 0.7, gravity: 1 });
    app.onSmoke(this.smokesLeft);
    app.hintDone('smoke');
  }
  smokeBlocks(x0, z0, x1, z1) {
    for (const c of this.clouds) {
      const R = c.r * 0.9;
      if (R < 0.3) continue;
      if (Math.hypot(x1 - c.x, z1 - c.z) < R || Math.hypot(x0 - c.x, z0 - c.z) < R) return true;
      const dx = x1 - x0, dz = z1 - z0, L2 = dx * dx + dz * dz || 1;
      const t = clamp(((c.x - x0) * dx + (c.z - z0) * dz) / L2, 0, 1);
      if (Math.hypot(x0 + dx * t - c.x, z0 + dz * t - c.z) < R) return true;
    }
    return false;
  }
  // crouching behind low furniture (counters, tables, cases...) hides you from that viewer
  lowCover(x0, z0, x1, z1) {
    const L = this.L, dx = x1 - x0, dz = z1 - z0, d = Math.hypot(dx, dz), n = Math.ceil(d / 0.2);
    for (let i = 1; i < n; i++) {
      const t = i / n;
      if (t * d > d - 0.25 && t * d > 0) continue;
      const cx = Math.floor(x0 + dx * t), cz = Math.floor(z0 + dz * t);
      if (Math.hypot(x0 + dx * t - x1, z0 + dz * t - z1) > 1.6) continue;
      const k = cz * L.W + cx;
      if (k >= 0 && k < L.W * L.H && !L.walk[k] && !L.opaque[k] && !L.outdoor[k] && L.ch[k] !== 'D' && L.ch[k] !== 'L') return true;
    }
    return false;
  }
  inSmoke(x, z) { return this.clouds.some((c) => Math.hypot(x - c.x, z - c.z) < c.r * 0.85); }
  updateSmoke(dt) {
    for (let i = this.clouds.length - 1; i >= 0; i--) {
      const c = this.clouds[i];
      c.t += dt;
      const grow = Math.min(1, c.t / 0.6), fade = clamp((c.dur - c.t) / 1.6, 0, 1);
      c.r = 2.1 * (1 - Math.pow(1 - grow, 3)) * (0.75 + 0.25 * fade);
      const f = c.fx, pos = f.geo.attributes.position.array;
      for (let k = 0; k < f.N; k++) {
        const o = k * 4, sw = Math.sin(c.t * 0.8 + f.off[o + 3]) * 0.15;
        pos[k * 3] = c.x + f.off[o] * c.r + sw;
        pos[k * 3 + 1] = 0.2 + f.off[o + 1] * 1.5 * grow + c.t * 0.04;
        pos[k * 3 + 2] = c.z + f.off[o + 2] * c.r + sw;
      }
      f.geo.attributes.position.needsUpdate = true;
      f.pts.material.opacity = 0.55 * fade * grow;
      f.pts.material.size = 1.2 + grow * 0.6;
      // guards caught inside cough and lose their bearings
      for (const g of this.guards) {
        if (g.coughT > 0) g.coughT -= dt;
        if (g.state === 'ko' || g.state === 'sleep' || Math.hypot(g.x - c.x, g.z - c.z) > c.r * 0.8) continue;
        if (!(g.coughT > 0)) { g.coughT = 2.2; this.app.floaters.spawn('*cough*', g.x, 1.9, g.z, 'q', 0.9); if (g.state === 'alert') g.lostT = Math.max(g.lostT, 1.5); }
      }
      if (c.t >= c.dur) { f.pts.visible = false; this.clouds.splice(i, 1); }
    }
    this.app.onInSmoke(this.state === 'play' && this.inSmoke(this.player.x, this.player.z));
  }

  throwCoin() {
    const p = this.player, app = this.app;
    if (this.coinsLeft <= 0) { app.audio.play('nope'); app.floaters.spawn('No coins!', p.x + Math.sin(p.face) * 1.5, 1.2, p.z + Math.cos(p.face) * 1.5, 'warn', 0.9); return; }
    const mesh = this.coinMeshes.find((m) => !m.visible);
    if (!mesh) return;
    this.coinsLeft--; this.coinsThrown++;
    const fx = Math.sin(p.face), fz = Math.cos(p.face), cp = Math.cos(p.pitch), sp = Math.sin(p.pitch);
    const v = 7.5;
    this.coins.push({ mesh, x: p.x + fx * 0.35, y: 0.95, z: p.z + fz * 0.35, vx: fx * cp * v + p.vx * 0.5, vy: sp * v + 2.6, vz: fz * cp * v + p.vz * 0.5, st: 'fly', t: 0, bounces: 0 });
    mesh.visible = true;
    p.grabT = 1;
    app.audio.play('throw');
    app.onCoins(this.coinsLeft);
    app.hintDone('coin');
  }

  updateCoins(dt, playing) {
    const p = this.player, app = this.app;
    for (let i = this.coins.length - 1; i >= 0; i--) {
      const c = this.coins[i];
      c.t += dt;
      if (c.st === 'fly') {
        c.vy -= 16 * dt;
        const ox = c.x, oz = c.z;
        c.x += c.vx * dt; c.y += c.vy * dt; c.z += c.vz * dt;
        const cx = Math.floor(c.x), cz = Math.floor(c.z);
        if (!this.walkable(cx, cz) && (this.opaqueAt(cx, cz) || c.y < 0.9)) {
          // bounce off walls / furniture
          if (Math.floor(ox) !== cx) c.vx *= -0.4; else c.vx *= 0.6;
          if (Math.floor(oz) !== cz) c.vz *= -0.4; else c.vz *= 0.6;
          c.x = ox; c.z = oz;
          app.audio.play('clink', 0.4);
        }
        if (c.y < 0.03) {
          c.y = 0.03;
          if (c.bounces === 0) {
            this.makeNoise(c.x, c.z, 4.6, null, true);
            app.audio.play('clink', 1);
            app.particles.burst(c.x, 0.06, c.z, { count: 6, colors: [0xffe680, 0xffffff], speed: 1.5, up: 1.5, size: 0.04, life: 0.4 });
          } else app.audio.play('clink', 0.3);
          c.bounces++;
          c.vy = Math.abs(c.vy) * 0.35; c.vx *= 0.5; c.vz *= 0.5;
          if (c.bounces > 2 || Math.abs(c.vy) < 0.5) { c.st = 'rest'; c.vy = 0; }
        }
        c.mesh.rotation.set(c.t * 18, c.t * 7, 0);
        // coin vs security camera: knocks it out for a while
        for (const cam of this.cams) {
          if (cam.off > 0) continue;
          const cp = cam.mesh.position;
          if (Math.hypot(c.x - cp.x, c.y - cp.y, c.z - cp.z) < 0.5) {
            cam.off = 12; cam.susp = 0; this.camsHit++;
            c.vx *= -0.3; c.vz *= -0.3; c.vy = 1;
            app.audio.play('zap'); app.shake.add(0.1);
            app.particles.burst(cp.x, cp.y, cp.z, { count: 16, colors: [0xfff1a8, 0x7fd8ff, 0xffffff], speed: 2.5, up: 2, size: 0.04, life: 0.6 });
            app.floaters.spawn('CAMERA DOWN', cp.x, cp.y + 0.5, cp.z, 'big', 1.2);
            app.hintDone('camhit');
          }
        }
      } else {
        c.mesh.rotation.set(Math.PI / 2, 0, c.t * 2);
        c.mesh.position.y = 0.03;
        // walk over a landed coin to pick it back up
        if (playing && c.t > 0.6 && Math.hypot(p.x - c.x, p.z - c.z) < 0.6) {
          this.coinsLeft++;
          c.mesh.visible = false;
          this.coins.splice(i, 1);
          app.audio.play('pick', 6);
          app.onCoins(this.coinsLeft);
          continue;
        }
      }
      c.mesh.position.set(c.x, c.y, c.z);
    }
  }

  makeNoise(x, z, r, except, lure) {
    // thunder masks the robber's own racket (not lures / guard noises)
    if (this.thunderT > 0 && except == null && !lure) r *= 0.3;
    const ring = this.noiseRings.find((n) => n.t >= 1);
    if (ring) { ring.t = 0; ring.r = r; ring.x = x; ring.z = z; ring.m.visible = true; }
    for (const g of this.guards) {
      if (g === except || g.state === 'ko' || g.state === 'getup' || g.state === 'alert' || g.state === 'waking') continue;
      if (Math.hypot(g.x - x, g.z - z) > r) continue;
      if (g.state === 'sleep') { this.wake(g, x, z); continue; }
      if (g.state !== 'investigate' && g.state !== 'suspicious') {
        this.app.audio.play('huh');
        this.app.floaters.spawn(typeof lure === 'string' ? lure : lure ? 'Huh? A coin?' : '?', g.x, 1.9, g.z, 'q', 0.9);
        if (lure === true) this.lures++;
        if (lure === 'Jackpot!?') this.slotLures++;
      }
      g.state = 'investigate'; g.tx = x; g.tz = z; g.hurry = g.speed * 1.4;
      g.susp = Math.max(g.susp, 0.3);
    }
    if (lure) for (const d of this.dogs) {
      if ((d.state === 'roam' || d.state === 'sniff') && Math.hypot(d.x - x, d.z - z) < r + 2) {
        d.state = 'coin'; d.tx = x; d.tz = z; d.waitT = 5; d.navGoal = -1;
        this.app.floaters.spawn('!', d.x, 1.0, d.z, 'q', 0.7);
      }
    }
  }

  // ---------- guard dog ----------
  updateDog(d, dt, playing) {
    const p = this.player, app = this.app;
    d.t += dt; d.moving = 0;
    const dist = Math.hypot(p.x - d.x, p.z - d.z);
    const hide = p.hiding;
    // senses: sees/smells you close, or sniffs you out in a wardrobe
    if (playing && d.state !== 'bark' && d.state !== 'barkHide') {
      if (!hide && p.inv <= 0 && dist < 3.0 && this.los(d.x, d.z, p.x, p.z) && !this.smokeBlocks(d.x, d.z, p.x, p.z)) {
        d.state = 'bark'; d.barkT = 0.25; d.lostT = 0;
        app.floaters.spawn('!', d.x, 1.1, d.z, 'alert', 0.8);
      } else if (hide && Math.hypot(hide.ex - d.x, hide.ez - d.z) < 1.4) {
        d.state = 'barkHide'; d.barkT = 0.3; d.hide = hide;
      }
    }
    const P = d.def.path;
    switch (d.state) {
      case 'roam': {
        if (d.waitT > 0) { d.waitT -= dt; d.face += Math.sin(d.t * 3) * dt; break; }
        const w = P[d.wp];
        if (this.navTo(d, w[0] + 0.5, w[1] + 0.5, d.def.speed * d.mul, dt)) { d.wp = (d.wp + 1) % P.length; d.waitT = 1.2; }
        // pick up a fresh scent
        d.smellT -= dt;
        if (playing && d.smellT <= 0) {
          d.smellT = 0.5;
          for (let i = this.crumbs.length - 1; i >= 0; i--) {
            const c = this.crumbs[i];
            if (this.time - c.t > 14) break;
            if (Math.hypot(c.x - d.x, c.z - d.z) < 2.2) { d.state = 'sniff'; d.ci = i; d.sniffT = 0; app.audio.play('sniff'); break; }
          }
        }
        break;
      }
      case 'sniff': {
        d.sniffT += dt;
        const c = this.crumbs[d.ci];
        if (!c || d.sniffT > 16) { d.state = 'roam'; d.navGoal = -1; break; }
        if (this.navTo(d, c.x, c.z, 2.5 * d.mul, dt) || Math.hypot(c.x - d.x, c.z - d.z) < 0.45) {
          if (d.ci < this.crumbs.length - 1) d.ci++;
          else { d.state = 'roam'; d.waitT = 2; d.navGoal = -1; }
        }
        if (Math.random() < dt * 1.5) app.audio.play('sniff');
        break;
      }
      case 'coin':
        if (this.navTo(d, d.tx, d.tz, 3.2 * d.mul, dt) || Math.hypot(d.tx - d.x, d.tz - d.z) < 0.6) {
          d.waitT -= dt;
          d.face += Math.sin(d.t * 6) * dt * 3;
          if (Math.random() < dt * 2) app.audio.play('sniff');
          if (d.waitT <= 0) { d.state = 'roam'; d.navGoal = -1; }
        }
        break;
      case 'bark': {
        const sees = !hide && dist < 6 && this.los(d.x, d.z, p.x, p.z);
        if (sees) d.lostT = 0; else d.lostT += dt;
        if (dist > 1.3 && !hide) this.navTo(d, p.x, p.z, 3.3 * d.mul, dt);
        d.face = turnTo(d.face, Math.atan2(p.x - d.x, p.z - d.z), 8 * dt);
        this.dogBark(d, dt, d.x, d.z);
        if (d.lostT > 2.5 || hide) { d.state = 'sniff'; d.ci = Math.max(0, this.crumbs.length - 6); d.sniffT = 0; }
        if (playing && sees) this.lastBark = this.time;
        if (playing && sees && !this.barkedAt) { this.barkedAt = true; this.spotted = true; }
        break;
      }
      case 'barkHide': {
        const h = d.hide;
        if (!p.hiding) { d.state = 'bark'; d.lostT = 0; break; }
        d.face = turnTo(d.face, Math.atan2(h.cx - d.x, h.cz - d.z), 8 * dt);
        this.dogBark(d, dt, h.ex, h.ez, 10);
        if (!this.barkedAt) { this.barkedAt = true; }
        break;
      }
    }
    // render
    const m = d.m;
    m.root.position.set(d.x, 0, d.z);
    m.root.rotation.y = d.face;
    d.shadow.position.set(d.x, 0.02, d.z);
    d.shadow.scale.set(0.8, 1, 1.1);
    animateDog(m, dt, d.moving ? 1 : 0, this.t, d.state === 'bark' || d.state === 'barkHide');
    probe(m, this.L, d.x, d.z, dt);
  }
  dogBark(d, dt, nx, nz, r = 7) {
    d.barkT -= dt;
    if (d.barkT > 0) return;
    d.barkT = 0.85;
    const app = this.app;
    app.audio.play('woof');
    app.floaters.spawn('WOOF!', d.x, 1.0, d.z, 'woof', 0.7);
    d.m.sq = 1.3; d.m.sqv = 0;
    this.makeNoise(nx, nz, r, null);
  }

  wake(g, x, z) {
    const b = g.def.owner.bed;
    this.ownerWoke = true;
    g.state = 'waking'; g.t = 0.9; g.tx = x; g.tz = z; g.hurry = g.speed * 1.3;
    g.x = b[0] - 0.5; g.z = b[1] + 1.5;
    g.c.root.rotation.x = 0; g.c.root.position.y = 0;
    g.face = Math.atan2(x - g.x, z - g.z);
    squash(g.c, 1.4);
    this.app.audio.play('wake');
    this.app.floaters.spawn('WHO\'S THERE?!', g.x, 2.0, g.z, 'warn', 1.3);
    this.app.shake.add(0.15);
  }

  seesPoint(g, x, z, range) {
    const dx = x - g.x, dz = z - g.z, d = Math.hypot(dx, dz);
    if (d > range || (d > 0.6 && Math.abs(angDiff(g.face, Math.atan2(dx, dz))) > g.fov / 2)) return false;
    return this.los(g.x, g.z, x, z);
  }
  noticeThings(g) {
    const app = this.app;
    for (const o of this.guards) {
      if (o === g || o.state !== 'ko' || o.koT < 1.2 || o.claimed) continue;
      if (!this.seesPoint(g, o.x, o.z, g.range)) continue;
      o.claimed = true;
      g.state = 'investigate'; g.tx = o.x; g.tz = o.z; g.hurry = g.speed * 1.7; g.reviveT = o; g.susp = Math.max(g.susp, 0.6); g.navGoal = -1;
      app.audio.play('huh');
      app.floaters.spawn('Man down!', g.x, 2.0, g.z, 'warn', 1.3);
      return;
    }
    if (this.casesSmashed && g.kind === 'guard' && !g.sawCase) {
      const c = this.cases.find((c) => c.smashed && this.seesPoint(g, c.cx, c.cz, g.range));
      if (c) {
        g.sawCase = true; g.safeRun = true;
        g.state = 'investigate'; g.tx = c.cx; g.tz = c.cz + 1.2; g.hurry = g.speed * 1.6; g.susp = Math.max(g.susp, 0.7); g.navGoal = -1;
        app.audio.play('huh');
        app.floaters.spawn('The display case!?', g.x, 2.0, g.z, 'warn', 1.3);
        return;
      }
    }
    if (this.safeOpen && !g.sawSafe && g.kind === 'guard') {
      const sx = this.L.safe.x + 0.5, sz = this.L.safe.y + 0.5;
      if (this.seesPoint(g, sx, sz, g.range)) {
        g.sawSafe = true; g.safeRun = true;
        g.state = 'investigate'; g.tx = sx; g.tz = sz + 1; g.hurry = g.speed * 1.6; g.susp = Math.max(g.susp, 0.7); g.navGoal = -1;
        app.audio.play('huh');
        app.floaters.spawn('The safe!?', g.x, 2.0, g.z, 'warn', 1.3);
      }
    }
  }
  arrive(g) {
    const app = this.app;
    for (const tv of this.tvs) if (tv.on && Math.hypot(tv.fx - g.x, tv.fz - g.z) < 2.2) { g.face = Math.atan2(tv.cx - g.x, tv.cz - g.z); this.tvOff(tv, g); return; }
    // after investigating/searching, guards sometimes check a nearby wardrobe
    if (g.kind === 'guard' && this.hides.length && !g.reviveT && !g.safeRun && Math.random() < (this.player.hiding ? 0.55 : 0.35)) {
      let best = null, bd = 4.5;
      for (const h of this.hides) {
        const d = Math.hypot(h.ex - g.x, h.ez - g.z);
        if (d < bd && (!h.checkedT || this.t - h.checkedT > 15)) { bd = d; best = h; }
      }
      if (best) {
        best.checkedT = this.t;
        g.state = 'checkHide'; g.chk = best; g.navGoal = -1;
        app.floaters.spawn('Hmm... the wardrobe?', g.x, 2.0, g.z, 'q', 1.2);
        return;
      }
    }
    if (g.reviveT) {
      const o = g.reviveT;
      g.reviveT = null; o.claimed = false;
      if (o.state === 'ko' && Math.hypot(o.x - g.x, o.z - g.z) < 1.8) {
        o.koT = 0.25; this.revives++;
        g.face = Math.atan2(o.x - g.x, o.z - g.z);
        app.floaters.spawn('Wake up!', o.x, 1.4, o.z, 'warn', 1.1);
        app.audio.play('wake');
      }
    }
    const ph = this.player.hiding;
    if (ph && this.state === 'play' && this.dogs.some((d) => d.state === 'barkHide') && Math.hypot(ph.ex - g.x, ph.ez - g.z) < 1.8) {
      app.floaters.spawn('Got you!', g.x, 2.0, g.z, 'alert', 1.2);
      this.leaveHide(true);
      this.bust(g);
      return;
    }
    if (g.safeRun) {
      g.safeRun = false;
      if (this.D.safeAlarm && this.state === 'play' && !this.alarm) {
        app.floaters.spawn('We\'ve been robbed!', g.x, 2.0, g.z, 'alert', 1.4);
        this.triggerAlarm('A guard found the open safe!');
      }
    }
  }

  alert(g) {
    if (g.kind === 'clerk') {
      if (g.state === 'flee' || g.state === 'cower') return;
      g.state = 'flee'; g.susp = 1; g.navGoal = -1;
      this.spotted = true;
      this.app.audio.play('scream');
      this.app.floaters.spawn('AAAH! A ROBBER!', g.x, 2.0, g.z, 'alert', 1.2);
      this.app.shake.add(0.12);
      squash(g.c, 1.35);
      this.app.hint('clerk');
      return;
    }
    g.state = 'alert'; g.susp = 1; g.lostT = 0; g.radioT = 0; g.radioSaid = false; g.alertAt = this.time;
    if (this.disguiseT > 0) { this.disguiseT = 0; this.app.onDisguise(0); this.app.floaters.spawn("You're not Dave!", g.x, 2.3, g.z, 'alert', 1.3); }
    if (!this.spotted) this.app.hintDone('cone');
    this.spotted = true;
    this.app.audio.play('alert');
    this.app.floaters.spawn('!', g.x, 2.0, g.z, 'alert', 0.8);
    if (this.smokesLeft > 0) this.app.hint('smoke');
    this.app.shake.add(0.15);
    squash(g.c, 1.3);
  }

  baseState(g) {
    g.state = g.def.post ? 'post' : 'patrol';
    g.navGoal = -1;
  }

  // night train: scenery scrolls past the windows, the carriage sways and the wheels clack over rail joints
  updateTrain(dt, demo) {
    for (const m of this.trainMats) m.map.offset.x += m.userData.sgn * dt * 0.9;
    this.sway = Math.sin(this.t * 1.3) * 0.006 + Math.sin(this.t * 3.1) * 0.002;
    if (demo || this.state !== 'play') return;
    this.clackT -= dt;
    if (this.clackT <= 0) { this.clackT = 0.95 + Math.random() * 0.15; this.app.audio.play('clack'); this.app.shake.add(0.015); }
  }
  // idle chatter: two calm guards passing each other trade a line (only when the robber is near enough to hear)
  updateChatter(dt) {
    const app = this.app, p = this.player;
    if (this.chatQ) {
      const q = this.chatQ; q.t -= dt;
      if (q.t <= 0) { this.chatQ = null; if (CALM.has(q.g.state)) { app.floaters.spawn(q.text, q.g.x, 2.0, q.g.z, 'zz', 1.6); app.audio.play('mumble'); } }
      return;
    }
    this.chatT -= dt;
    if (this.chatT > 0 || this.alarm) return;
    const gs = this.guards.filter((g) => g.kind === 'guard' && CALM.has(g.state) && g.susp < 0.1 && Math.hypot(g.x - p.x, g.z - p.z) < 11);
    for (let i = 0; i < gs.length; i++) for (let j = i + 1; j < gs.length; j++) {
      const a = gs[i], b = gs[j];
      if (Math.hypot(a.x - b.x, a.z - b.z) > 2.6 || !this.los(a.x, a.z, b.x, b.z)) continue;
      const lines = CHAT.slice();
      if (this.def.rain) lines.push(['Nasty storm out there.', 'Better than standing in it.']);
      if (a.def.reinforce || b.def.reinforce) lines.push(['You the new guy?', 'First night. Anything I should know?']);
      if (this.kos > 0) lines.push(['Anyone seen Dave? He\'s not answering.', 'Probably asleep on the job again.']);
      const [l1, l2] = lines[this.chatI++ % lines.length];
      app.floaters.spawn(l1, a.x, 2.0, a.z, 'zz', 1.6); app.audio.play('mumble');
      a.face = Math.atan2(b.x - a.x, b.z - a.z);
      this.chatQ = { g: b, text: l2, t: 1.5 };
      this.chatT = 16 + Math.random() * 10;
      return;
    }
    this.chatT = 1.5;
  }
  // thunderstorm: lightning flash, then a rolling thunder that covers your noise for ~2.5s
  updateStorm(dt) {
    const app = this.app;
    this.thunderT = Math.max(0, this.thunderT - dt);
    if (this.thunderIn > 0) {
      this.thunderIn -= dt;
      if (this.thunderIn <= 0) { this.thunderT = 2.6; app.audio.play('thunder'); app.shake.add(0.12); app.hint('thunder'); }
    }
    this.boltT -= dt;
    if (this.boltT <= 0) { this.boltT = 12 + Math.random() * 12; this.thunderIn = 0.35 + Math.random() * 0.6; app.lightning(); }
  }
  callReinforcement(g) {
    const app = this.app, e = this.entrance;
    g.def.path = [[e.x, e.y], this.roamCell(g.def.roam, e.x, e.y)];
    this.resetGuard(g);
    g.wallet = 0; g.spareKey = false; g.walletMesh.visible = false; g.keyMesh.visible = false;
    g.c.root.visible = true;
    this.guards.push(g);
    app.audio.play('radio');
    app.announce('📻 Shift change! A new guard is on duty');
    app.floaters.spawn('Reporting for duty!', g.x, 2.0, g.z, 'warn', 1.4);
  }
  roamCell(z, fx, fz) {
    let tries = 0;
    for (let i = 0; i < 40; i++) {
      const x = z[0] + Math.floor(Math.random() * (z[2] - z[0] + 1)), y = z[1] + Math.floor(Math.random() * (z[3] - z[1] + 1));
      if (!this.walkable(x, y) || this.L.outdoor[y * this.L.W + x]) continue;
      // only accept targets the guard can actually reach (closed rooms / vaults are skipped)
      if (fx !== undefined && (x !== fx || y !== fz)) { if (tries++ >= 8) break; if (!this.path(fx, fz, x, y).length) continue; }
      return [x, y];
    }
    return fx !== undefined ? [fx, fz] : [z[0], z[1]];
  }
  effRange(g) { return g.yawnT > 0 ? g.range * 0.35 : g.range; }
  canSee(g) {
    const p = this.player, dx = p.x - g.x, dz = p.z - g.z, d = Math.hypot(dx, dz);
    if (p.hiding || p.venting) return 0;
    if (d > this.effRange(g)) return 0;
    if (d > 0.35 && Math.abs(angDiff(g.face, Math.atan2(dx, dz))) > g.fov / 2) return 0;
    if (!this.los(g.x, g.z, p.x, p.z)) return 0;
    if (p.crouch && this.lowCover(g.x, g.z, p.x, p.z)) return 0;
    if (this.smokeBlocks(g.x, g.z, p.x, p.z)) { if (g.susp > 0.2 || g.state === 'alert') this.smokeHid = true; return 0; }
    return d + 0.001;
  }

  updateGuard(g, dt, perceive) {
    const p = this.player, app = this.app;
    switch (g.state) {
      case 'sleep':
        g.zz -= dt;
        if (g.zz <= 0) { g.zz = 1.5; if (Math.hypot(p.x - g.x, p.z - g.z) < 7 || !perceive) app.floaters.spawn('z', g.x + 0.3, 1.0, g.z - 0.4, 'zz', 1.4); }
        return;
      case 'waking':
        g.t -= dt;
        if (g.t <= 0) g.state = 'investigate';
        return;
      case 'ko':
        g.koT -= dt; g.fallT += dt;
        // radio check-in: answer it (hold E next to him) or someone comes looking
        if (g.kind === 'guard' && perceive) {
          if (!g.radioCall && g.koT < 5.5) { g.radioCall = 1; g.callT = 0; app.hint('radio'); }
          if (g.radioCall === 1) {
            g.callT -= dt;
            if (g.callT <= 0) { g.callT = 1.1; app.audio.play('radio'); app.floaters.spawn('📻 "Unit, report in!"', g.x, 1.2, g.z, 'warn', 1.0); }
            if (g.koT < 1.8) this.missedCheckIn(g);
          }
        }
        if (g.koT <= 0) { g.state = 'getup'; g.t = 0.5; }
        return;
      case 'getup':
        g.t -= dt;
        if (g.t <= 0) {
          this.baseState(g); g.susp = 0.2;
          app.floaters.spawn(g.stripped ? 'Hey! Where\'s my uniform?!' : '?!', g.x, 1.9, g.z, 'q', g.stripped ? 1.4 : 0.8);
        }
        return;
    }
    if (g.yawnT > 0) { g.yawnT -= dt; if (g.state !== 'wait') g.yawnT = 0; }
    if (g.state !== g.lastState) { g.lastState = g.state; g.stateT = 0; }
    g.stateT += dt;
    // ---- perception ----
    const seen = perceive && p.inv <= 0 ? this.canSee(g) : 0;
    if (seen) {
      const close = 1 - clamp(seen / this.effRange(g), 0, 1);
      let rate = (0.65 + 2.3 * close * close) * (p.dashT > 0 ? 1.6 : p.crouch ? 0.55 : 1) * this.D.susp;
      // in uniform: from a distance you're just another guard (up close they see your face)
      if (this.disguiseT > 0 && g.kind !== 'owner' && seen > 2.3 && p.dashT <= 0) rate *= 0.12;
      g.susp = Math.min(1, g.susp + rate * dt);
      if (g.state !== 'alert') g.peak = Math.max(g.peak || 0, g.susp); else g.peak = 0;
      g.lastX = p.x; g.lastZ = p.z; g.lostT = 0;
      if (g.state !== 'alert') {
        if (g.susp >= 1) this.alert(g);
        else if (g.susp > 0.25 && g.state !== 'suspicious') { g.state = 'suspicious'; app.audio.play('huh'); }
      }
    } else {
      g.lostT += dt;
      if (g.state !== 'alert') g.susp = Math.max(0, g.susp - dt * 0.3);
      // close call: he almost had you, then lost interest
      if (g.state !== 'alert' && g.peak > 0.72 && g.susp < 0.15 && perceive) {
        g.peak = 0; this.closeCalls++;
        const p = this.player, fx = Math.sin(p.face), fz = Math.cos(p.face);
        app.floaters.spawn('PHEW! Close call +$50', p.x + fx * 1.5, 1.35, p.z + fz * 1.5, 'combo', 1.2);
        app.audio.play('star', 1); this.lootGot += 50; this.lootTotal += 50; app.onLoot(true);
      }
    }
    // smarter guards: notice knocked-out colleagues and an open safe
    if (perceive && (g.state === 'patrol' || g.state === 'wait' || g.state === 'post' || g.state === 'look' || g.state === 'suspicious')) this.noticeThings(g);
    // bumping into a guard's face = instantly spotted
    if (perceive && p.inv <= 0 && g.state !== 'alert' && !p.hiding) {
      const d = Math.hypot(p.x - g.x, p.z - g.z);
      if (d < 0.7 && !this.canKO(g) && Math.abs(angDiff(g.face, Math.atan2(p.x - g.x, p.z - g.z))) < 1.75) this.alert(g);
    }

    const d = g.def;
    switch (g.state) {
      case 'patrol': {
        const w = d.path[g.wp];
        if (this.navTo(g, w[0] + 0.5, w[1] + 0.5, g.speed, dt) || g.stateT > 14) {
          g.state = 'wait'; g.t = d.wait ?? 1; g.baseFace = g.face;
          if (g.kind === 'guard' && g.susp < 0.1 && Math.random() < 0.35) { g.yawnT = 2.2; g.t = Math.max(g.t, 2.2); app.floaters.spawn('*yaaawn*', g.x, 1.9, g.z, 'zz', 1.4); }
        }
        break;
      }
      case 'wait': {
        g.t -= dt;
        const k = (d.wait ?? 1) - g.t;
        g.face = g.baseFace + Math.sin(k * 2.4) * 0.9;
        if (g.t <= 0) {
          const n = d.path.length;
          if (d.roam) { const fx = Math.floor(g.x), fz = Math.floor(g.z); d.path = [[fx, fz], this.roamCell(d.roam, fx, fz)]; g.wp = 1; }
          else if (d.loop) g.wp = (g.wp + 1) % n;
          else { if (g.wp + g.dir >= n || g.wp + g.dir < 0) g.dir *= -1; g.wp += g.dir; }
          g.state = 'patrol';
        }
        break;
      }
      case 'post': {
        const px = d.post[0] + 0.5, pz = d.post[1] + 0.5;
        if (Math.hypot(g.x - px, g.z - pz) > 0.15) this.navTo(g, px, pz, g.speed, dt);
        else g.face = turn(g.face, d.face + Math.sin(this.t * d.sweepSpeed) * d.sweep, 3 * dt);
        break;
      }
      case 'suspicious': {
        const a = Math.atan2(g.lastX - g.x, g.lastZ - g.z);
        g.face = turn(g.face, a, 5 * dt);
        if (g.kind !== 'clerk' && Math.hypot(g.lastX - g.x, g.lastZ - g.z) > 1.6 && g.susp > 0.45) this.navTo(g, g.lastX, g.lastZ, g.speed * 0.6, dt);
        if (g.susp < 0.1) this.baseState(g);
        break;
      }
      case 'alert': {
        g.radioT = (g.radioT || 0) + dt;
        if (!this.alarm && g.radioT > 0.7 && !g.radioSaid) { g.radioSaid = true; app.floaters.spawn('Calling it in...', g.x, 2.0, g.z, 'warn', 1.4); }
        if (!this.alarm && g.radioT > this.D.radio) this.triggerAlarm('A guard radioed the police!');
        let tx = seen ? p.x : g.lastX, tz = seen ? p.z : g.lastZ;
        if (g.knowsHide && p.hiding) {
          tx = p.hiding.ex; tz = p.hiding.ez; g.lostT = 0;
          if (this.state === 'play' && Math.hypot(tx - g.x, tz - g.z) < 0.9) { g.knowsHide = false; this.leaveHide(true); this.bust(g); break; }
        }
        this.navTo(g, tx, tz, CHASE, dt);
        if (!seen && g.lostT > 2.2) {
          g.state = 'search'; g.tx = g.lastX; g.tz = g.lastZ; g.hurry = 2.8; g.susp = 0.6;
          app.audio.play('lost');
          app.floaters.spawn('?', g.x, 1.9, g.z, 'q', 0.8);
        }
        if (this.state === 'play' && p.inv <= 0 && !p.hiding && Math.hypot(p.x - g.x, p.z - g.z) < 0.78) this.bust(g);
        break;
      }
      case 'investigate':
      case 'search':
        if (this.navTo(g, g.tx, g.tz, g.hurry || g.speed, dt) || g.stateT > 9 || (g.nav.length === 0 && Math.hypot(g.tx - g.x, g.tz - g.z) < 0.9)) {
          g.state = 'look'; g.t = 2.2; g.baseFace = g.face;
          this.arrive(g);
        }
        break;
      case 'checkHide': {
        const h = g.chk;
        if (this.navTo(g, h.ex, h.ez, g.speed * 1.15, dt) || g.stateT > 8) {
          g.face = Math.atan2(h.cx - g.x, h.cz - g.z);
          if (this.player.hiding === h && this.state === 'play') {
            app.floaters.spawn('Found you!', g.x, 2.0, g.z, 'alert', 1.2);
            this.leaveHide(true); this.bust(g);
          } else {
            app.audio.play('creak');
            app.floaters.spawn('Nobody here...', g.x, 2.0, g.z, 'q', 1.1);
            g.state = 'look'; g.t = 1.6; g.baseFace = g.face;
          }
        }
        break;
      }
      case 'flee':
        if (this.navTo(g, g.button.x, g.button.z, 3.4, dt)) {
          g.state = 'cower'; g.t = 0;
          g.face = Math.atan2(g.button.x - g.x, g.button.z - g.z) ;
          g.button.btn.material.color.setHex(0x3ddc84);
          if (this.state === 'play' && !this.alarm) { this.triggerAlarm('The clerk hit the silent alarm!'); }
          app.audio.play('click');
        }
        break;
      case 'cower':
        g.face += Math.sin(this.t * 9) * dt * 2;
        break;
      case 'look':
        g.t -= dt;
        g.face = g.baseFace + Math.sin((2.2 - g.t) * 2.6) * 1.2;
        if (g.t <= 0) this.baseState(g);
        break;
    }
  }

  syncGuard(g, dt) {
    const c = g.c;
    // positional guard footsteps (stereo panned by direction relative to view)
    if (g.moving && this.state === 'play') {
      g.stepAcc = (g.stepAcc || 0) + dt * (g.state === 'alert' || g.state === 'flee' ? 3.4 : 2.2);
      if (g.stepAcc > 1) {
        g.stepAcc = 0;
        const p = this.player, d = Math.hypot(g.x - p.x, g.z - p.z);
        if (d < 8) {
          const rel = angDiff(p.face, Math.atan2(g.x - p.x, g.z - p.z));
          const muffle = this.los(g.x, g.z, p.x, p.z) ? 1 : 0.45;
          this.app.audio.stepSound('boot', (1 - d / 8) * 0.9 * muffle, clamp(-Math.sin(rel), -0.9, 0.9));
        }
      }
    }
    c.root.position.x = g.x; c.root.position.z = g.z;
    c.root.rotation.y = g.face;
    g.shadow.position.set(g.x, 0.02, g.z);
    g.shadow.visible = g.state !== 'sleep';
    const fast = g.state === 'alert';
    animateChar(c, dt * (fast ? 1.5 : 1), g.moving ? 1 : 0, this.t);
    probe(c, this.L, g.x, g.z, dt);
    if (c.beam) {
      const on = g.state !== 'ko' && g.state !== 'getup' && g.state !== 'sleep';
      c.beam.visible = on;
      if (on) c.beam.material.color.setHex(g.state === 'alert' ? 0xff5a5a : g.susp > 0.25 ? 0xffb35a : 0xffe6a8);
    }
    if (g.state === 'ko' || g.state === 'getup') {
      const k = g.state === 'ko' ? Math.min(1, g.fallT / 0.25) : g.t / 0.5;
      const e = g.state === 'ko' ? 1 - Math.pow(1 - k, 3) * Math.cos(k * 7) : k;
      c.root.rotation.x = -Math.PI / 2 * e;
      c.root.position.y = 0.16 * e;
      g.stars.visible = g.state === 'ko';
      if (g.stars.visible) {
        const hx = g.x - Math.sin(g.face) * 1.0, hz = g.z - Math.cos(g.face) * 1.0;
        g.stars.children.forEach((s, i) => {
          const a = this.t * 5 + (i * Math.PI * 2) / 3;
          s.position.set(hx + Math.cos(a) * 0.35, 0.55 + Math.sin(a * 2) * 0.05, hz + Math.sin(a) * 0.35);
          s.rotation.set(a, a, 0);
        });
      }
    } else if (g.state !== 'sleep') {
      c.root.rotation.x = 0; c.root.position.y = 0; g.stars.visible = false;
    }
    if (this.state === 'caught' && this.catcher === g) {
      c.armOverride = true; c.armL.rotation.x = c.armR.rotation.x = -2.6;
    }
    // vision cone
    const showCone = g.state !== 'ko' && g.state !== 'getup' && g.state !== 'sleep' && g.state !== 'waking';
    g.cone.visible = showCone;
    if (showCone) {
      const col = g.state === 'alert' || g.state === 'flee' ? COL.alert : g.susp > 0.25 ? COL.sus : COL.cone;
      this.updateCone(g.cone, g.x, g.z, g.face, g.fov, this.effRange(g), col);
    }
    // status badge (DOM)
    let b = '';
    if (g.state === 'alert' || g.state === 'flee') b = 'alert';
    else if (g.state === 'investigate' || g.state === 'search' || g.state === 'look' || g.state === 'checkHide' || g.susp > 0.04) b = 'sus';
    if (b !== g.prevBadge) {
      g.prevBadge = b;
      g.badge.className = 'badge ' + b;
      g.badge.lastChild.textContent = b === 'alert' ? '!' : '?';
    }
    if (b) {
      _v.set(g.x, 1.8, g.z).project(this.app.camera);
      g.badge.classList.toggle('off', _v.z > 1);
      g.badge.style.transform = `translate(${((_v.x + 1) / 2) * this.app.w}px,${((1 - _v.y) / 2) * this.app.h}px) translate(-50%,-50%)`;
      g.badge.style.setProperty('--p', b === 'alert' ? 1 : g.susp.toFixed(2));
    }
  }

  updateCone(cone, x, z, face, fov, range, color) {
    const pos = cone.geometry.attributes.position.array;
    pos[0] = x; pos[1] = 0.04; pos[2] = z;
    for (let i = 0; i <= CONE_N; i++) {
      const a = face - fov / 2 + (fov * i) / CONE_N, r = this.rayLen(x, z, a, range);
      const k = (i + 1) * 3;
      pos[k] = x + Math.sin(a) * r; pos[k + 1] = 0.04; pos[k + 2] = z + Math.cos(a) * r;
    }
    cone.geometry.attributes.position.needsUpdate = true;
    cone.material.color.setHex(color);
  }

  updateCam(cam, dt, perceive) {
    const d = cam.def, p = this.player;
    if (cam.off > 0) {
      cam.off -= dt;
      cam.cone.visible = false;
      cam.mesh.rotation.x = 0.6;
      cam.lens.material.color.setHex(Math.random() < 0.04 ? 0xfff1a8 : 0x1a1a22);
      if (Math.random() < dt * 3) this.app.particles.burst(cam.mesh.position.x, cam.mesh.position.y, cam.mesh.position.z, { count: 2, colors: [0xfff1a8, 0x7fd8ff], speed: 1.2, up: 0.5, size: 0.03, life: 0.3 });
      if (cam.off <= 0) { cam.cone.visible = true; cam.mesh.rotation.x = 0; this.app.audio.play('click'); }
      return;
    }
    if (perceive && Math.hypot(p.x - d.pos[0], p.z - d.pos[1]) < 7 && this.coinsLeft > 0) this.app.hint('camhit');
    cam.face = d.face + Math.sin(this.t * d.sweepSpeed) * d.sweep;
    const x = d.pos[0], z = d.pos[1];
    cam.mesh.rotation.y = cam.face;
    cam.cool -= dt;
    let seen = false;
    if (perceive && p.inv <= 0 && cam.cool <= 0) {
      const dx = p.x - x, dz = p.z - z, dist = Math.hypot(dx, dz);
      seen = this.disguiseT <= 0 && dist < 6.5 && Math.abs(angDiff(cam.face, Math.atan2(dx, dz))) < 0.45 && this.los(x, z, p.x, p.z) && !this.smokeBlocks(x, z, p.x, p.z);
    }
    cam.susp = clamp(cam.susp + (seen ? dt * 1.5 : -dt * 0.8), 0, 1);
    if (cam.susp >= 1) {
      cam.susp = 0; cam.cool = 4;
      this.triggerAlarm('The camera triggered the alarm!');
      this.spotted = true;
      this.app.audio.play('alarm');
      this.app.flash('alarm');
      this.app.floaters.spawn('ALARM!', x, 2.0, z, 'alert', 1.2);
      for (const g of this.guards) {
        if (g.state === 'ko' || g.state === 'sleep' || g.state === 'getup' || g.state === 'alert' || g.state === 'waking') continue;
        if (Math.hypot(g.x - p.x, g.z - p.z) < 18) { g.state = 'investigate'; g.tx = p.x; g.tz = p.z; g.hurry = 3.2; g.susp = Math.max(g.susp, 0.6); }
      }
    }
    const hot = cam.cool > 0;
    cam.lens.material.color.setHex(hot || (Math.sin(this.t * 6) > 0) ? 0xff3b4e : 0x7a1f28);
    this.updateCone(cam.cone, x, z, cam.face, 0.9, 6.5, hot ? COL.alert : cam.susp > 0.2 ? COL.sus : 0x9fe8ff);
  }

  openSafe() {
    this.mark('safe', this.L.safe.x + 0.5, this.L.safe.y + 0.5);
    const app = this.app, sx = this.L.safe.x + 0.5, sz = this.L.safe.y + 0.5, v = this.def.values;
    this.safeOpen = true; this.hasStash = true; this.doorT = 0;
    this.lootGot += v.stash;
    this.hitstop = 0.12; this.juice(0.6, 0.35, -12, 0.04, 0);
    app.shake.add(0.55);
    app.audio.play('safe');
    app.flash('gold');
    app.particles.burst(sx, 0.8, sz + 0.4, { count: 24, colors: [0xffd23f, 0xffffff, 0xffe680], speed: 4, up: 6, size: 0.1, life: 1.0 });
    app.particles.burst(sx, 1.0, sz + 0.5, { count: 30, colors: [0x6fcf7a, 0x9be39a, 0x4fae5a], speed: 3, up: 4, size: 0.13, life: 2.2, shape: 'bill', gravity: 3, drag: 1.5 });
    app.floaters.spawn('+$' + v.stash.toLocaleString('en-US') + ' STASH!', sx, 1.8, sz, 'big', 1.6);
    for (let i = 0; i < v.bundles; i++) {
      const a = -0.9 + (1.8 * i) / (v.bundles - 1);
      this.loot.push({
        type: 'cash', x: sx, y: 0.7, z: sz + 0.4 * this.safeScale + 0.1, vx: Math.sin(a) * rand(2, 3.2), vy: rand(5, 7), vz: Math.cos(a) * rand(1.5, 3),
        st: 'fly', t: 0, value: v.bundle, ph: i, ms: 0, s: 1, rot: i, bundle: true,
      });
    }
    this.exitRing.visible = this.exitBeam.visible = true;
    app.onLoot(true);
    app.hintDone('safe');
    app.hint('stash');
  }

  weightMul() {
    let w = 0;
    for (const t of this.heavy) w += t === 'art' ? 0.1 : 0.06;
    return Math.max(0.65, 1 - w);
  }
  stashHeavy() {
    const app = this.app, p = this.player, n = this.heavy.length;
    this.heavy = []; this.stashRuns++;
    if (!this.hasStash) this.stashedEarly = true;
    app.audio.play('disarm');
    app.floaters.spawn(`STASHED ${n} IN THE ${this.L.van ? 'VAN' : 'HIDEOUT'}!`, p.x + Math.sin(p.face) * 1.5, 1.3, p.z + Math.cos(p.face) * 1.5, 'big', 1.3);
    app.particles.burst(p.x, 0.9, p.z, { count: 10, colors: [0xffd23f, 0xffffff], speed: 1.6, up: 2, size: 0.04, life: 0.6 });
    this.juice(0, 1, -3, 0, 0);
    app.onWeight(1);
    app.hintDone('heavy');
  }
  collect(it) {
    if ((it.type === 'gold' || it.type === 'art') && !it.bundle) { this.heavy.push(it.type); this.app.onWeight(this.weightMul()); this.app.hint('heavy'); }
    if (it.type !== 'cash' || !it.bundle) this.mark(it.type === 'cash' ? 'cash' : 'loot', it.x, it.z);
    const app = this.app;
    this.lootGot += it.value;
    this.got[it.type]++;
    if (it.type === 'cash' && !it.bundle) this.got.cashLoose++;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = 1.6;
    const cls = it.type === 'cash' ? 'cash' : it.type === 'gold' ? 'gold' : it.type === 'jewel' ? 'jewel' : 'art';
    const p = this.player, fx = Math.sin(p.face), fz = Math.cos(p.face), j = rand(-0.35, 0.35);
    const ox = p.x + fx * 1.4 - fz * j, oz = p.z + fz * 1.4 + fx * j;
    app.floaters.spawn('+$' + it.value, ox, 1.0, oz, cls, 0.9);
    p.grabT = 1;
    if (this.combo >= 3) {
      app.floaters.spawn('COMBO x' + this.combo, p.x + fx * 1.4, 1.45, p.z + fz * 1.4, 'combo', 0.8);
      app.audio.play('combo', this.combo);
    }
    const cols = { cash: [0x3fb950, 0x9df59f, 0xffffff], gold: [0xffd23f, 0xfff1a8], jewel: [0x3ee8ff, 0xffffff, 0xb7f6ff], art: [0xff6b6b, 0x4ecdc4, 0xffe66d] }[it.type];
    app.particles.burst(p.x + fx * 1.4, 0.8, p.z + fz * 1.4, { count: it.type === 'cash' ? 4 : 10, colors: cols, speed: 1.4, up: 1.6, size: 0.03, life: 0.5 });
    if (it.type === 'cash') app.particles.burst(p.x + fx * 1.0, 1.0, p.z + fz * 1.0, { count: 6, colors: [0x6fcf7a, 0x9be39a, 0x4fae5a], speed: 1.4, up: 1.6, size: 0.1, life: 1.1, shape: 'bill', gravity: 3, drag: 2.5 });
    else app.particles.burst(p.x + fx * 1.5, 1.0, p.z + fz * 1.5, { count: 8, colors: [0xffffff, 0xfff1a8], speed: 1.2, up: 1, size: 0.025, life: 0.6, gravity: 0 });
    app.audio.play(it.type === 'cash' ? 'pick' : it.type, this.combo);
    this.player.bagV += 4; this.juice(0, 1, it.type === 'cash' ? -1.2 : -3, it.type === 'cash' ? 0 : -0.015, 0);
    squash(this.player.c, 1.12);
    app.onLoot(false);
  }

  updateLoot(dt, playing) {
    const p = this.player;
    const n = { cash: 0, gold: 0, jewel: 0, art: 0 };
    for (let i = this.loot.length - 1; i >= 0; i--) {
      const it = this.loot[i];
      it.t += dt;
      const base = it.type === 'art' ? 0.9 : 0.62;
      if (it.st === 'fly') {
        it.vy -= 18 * dt;
        const ox = it.x, oz = it.z;
        it.x += it.vx * dt; it.y += it.vy * dt; it.z += it.vz * dt;
        if (!this.walkable(Math.floor(it.x), Math.floor(it.z))) { it.x = ox; it.z = oz; it.vx *= -0.5; it.vz *= -0.5; }
        if (it.y < 0.3) { it.y = 0.3; it.vy *= -0.45; it.vx *= 0.6; it.vz *= 0.6; }
        it.rot += dt * 8;
        if (it.t > 0.8) it.st = 'idle';
      } else if (it.st === 'idle') {
        it.y += (base + Math.sin(this.t * 3 + it.ph) * 0.08 - it.y) * Math.min(1, dt * 6);
        it.rot += dt * 1.8;
        if (playing && Math.hypot(p.x - it.x, p.z - it.z) < 1.5) { it.st = 'mag'; it.ms = 2; }
      } else {
        it.ms += dt * 30;
        const dx = p.x - it.x, dy = 0.7 - it.y, dz = p.z - it.z, d = Math.hypot(dx, dy, dz);
        const step = Math.min(d, it.ms * dt);
        it.x += (dx / d) * step; it.y += (dy / d) * step; it.z += (dz / d) * step;
        it.rot += dt * 12;
        if (d < 0.45) { this.collect(it); this.loot.splice(i, 1); continue; }
      }
      if (it.st === 'idle' && Math.random() < dt * 1.6) this.app.particles.burst(it.x + rand(-0.2, 0.2), it.y + rand(0, 0.25), it.z + rand(-0.2, 0.2), { count: 1, colors: [0xffffff, 0xfff1a8], speed: 0.1, up: 0.3, size: 0.05, gravity: 0, life: 0.5, spin: 3 });
      const m = this.lootMeshes[it.type];
      const s = it.st === 'mag' ? Math.max(0.4, 1 - it.ms * 0.02) : 1 + (it.type === 'art' ? 0 : Math.sin(this.t * 6 + it.ph) * 0.06);
      _o.position.set(it.x, it.y, it.z);
      _o.rotation.set(0, it.rot, 0);
      _o.scale.setScalar(s * (it.type === 'jewel' ? 1.5 : 1.25));
      _o.updateMatrix();
      m.setMatrixAt(n[it.type]++, _o.matrix);
    }
    for (const k in n) {
      const m = this.lootMeshes[k];
      m.count = n[k];
      m.instanceMatrix.needsUpdate = true;
    }
  }

  updateProps(dt) {
    for (const d of this.doors) if (d.open && d.t < 1) {
      d.t = Math.min(1, d.t + dt * 1.6);
      const e = 1 - Math.pow(1 - d.t, 3);
      if (d.type === 'lock') d.m.group.rotation.y = (d.alongX ? 1 : -1) * 1.55 * (e + Math.sin(d.t * Math.PI) * 0.12);
      else d.m.group.position.y = e * (WALL_H - 0.12);
    }
    if (this.safeOpen && this.doorT < 1) {
      this.doorT = Math.min(1, this.doorT + dt * 3);
      const k = this.doorT, e = 1 + 2.7 * Math.pow(k - 1, 3) + 1.7 * Math.pow(k - 1, 2);
      this.safe.door.rotation.y = -1.9 * e;
    }
    if (this.exitRing.visible) {
      const s = 1 + Math.sin(this.t * 5) * 0.08;
      this.exitRing.scale.set(s, 1, s);
      this.exitBeam.material.opacity = 0.16 + Math.sin(this.t * 4) * 0.06;
    }
    this.arrow.visible = false;
  }

  syncPlayer(dt) {
    const p = this.player, c = p.c;
    const show = this.state === 'escape' && !p.hidden;
    c.root.visible = show; p.shadow.visible = show;
    if (show) {
      c.root.position.set(p.x, p.y, p.z);
      c.root.rotation.y = p.face;
      p.shadow.position.set(p.x, 0.02, p.z);
      animateChar(c, dt, 1, this.t);
      c.bag.scale.setScalar(0.5 + 0.95 * Math.min(1, this.lootGot / this.lootTotal));
    }
    if (this.state !== 'play') p.moving = damp(p.moving, 0, 8, dt);
    p.grabT = Math.max(0, p.grabT - dt * 4);
    probe(this.app.vm, this.L, p.x, p.z, dt);
    this.app.vm.update(dt, {
      move: p.moving, bob: p.bob, lookX: p.lookX, lookY: p.lookY, punch: p.punchT > 0 ? p.punchT / 0.28 : 0,
      crack: p.crack && this.state === 'play', grab: p.grabT, dash: p.dashT > 0, busted: this.state === 'caught',
    });
    p.lookX = p.lookY = 0;
  }

  // first-person camera (plus escape cinematic)
  applyCamera(cam, dt) {
    const p = this.player, app = this.app;
    if (this.state === 'escape' && this.heli && this.heli.group.visible) {
      // climb out of the hatch looking up at the chopper, then pull back to watch it fly off
      const ex = this.L.exit, t = this.endT, hp = this.heli.group.position;
      if (t < 1.1) { const k = Math.min(1, t / 1.1), e = k * k * (3 - 2 * k); cam.position.set(ex.x, EYE + e * 1.6, ex.z + e * 0.6); }
      else { const k = Math.min(1, (t - 1.1) * 1.4); cam.position.x += (ex.x + 3 - cam.position.x) * k * dt * 2; cam.position.y += (6 - cam.position.y) * dt * 1.5; cam.position.z += (ex.z + 7 - cam.position.z) * dt * 1.5; }
      cam.lookAt(hp.x, hp.y, hp.z);
      this.fovKick = 0;
      return;
    }
    if (this.state === 'escape' && !this.L.van) {
      // rooftop escape: climb the hatch and rise above the store
      const ex = this.L.exit, t = this.endT, k = Math.min(1, Math.max(0, (t - 0.3) / 2.0)), e = k * k * (3 - 2 * k);
      cam.position.set(ex.x, EYE + e * 9, ex.z + e * 3.5);
      cam.rotation.set(-0.1 - e * 1.0, Math.PI + e * 0.5, 0);
      this.fovKick = 0;
      return;
    }
    if (this.state === 'escape') {
      const v = this.van.group.position, ex = this.L.exit;
      if (!this.cineInit) { this.cineInit = true; cam.position.set(ex.x - 2.5, 1.6, ex.z + 5); }
      cam.position.x += (v.x - 1.5 - cam.position.x) * Math.min(1, dt * 1.2);
      cam.lookAt(v.x + 0.3, 0.7, v.z);
      this.fovKick = 0;
      return;
    }
    if (p.hiding) {
      const h = p.hiding;
      cam.position.set(h.cx + Math.sin(h.face) * 0.12, EYE - 0.06, h.cz + Math.cos(h.face) * 0.12);
      cam.rotation.set(p.pitch + app.shake.y * 0.06, p.yaw + app.shake.x * 0.06, 0);
      this.fovKick = damp(this.fovKick, -6, 6, dt);
      return;
    }
    if (this.state === 'caught' && this.catcher) {
      const g = this.catcher, ty = Math.atan2(g.x - p.x, g.z - p.z) - Math.PI;
      p.yaw += angDiff(p.yaw, ty) * Math.min(1, dt * 8);
      p.pitch += (0.08 - p.pitch) * Math.min(1, dt * 8);
    }
    const m = p.moving;
    const bobY = Math.abs(Math.sin(p.bob)) * 0.05 * m, bobX = Math.cos(p.bob) * 0.03 * m;
    const fz = Math.cos(p.yaw + Math.PI), fx = Math.sin(p.yaw + Math.PI), rx = -fz, rz = fx;
    p.roll = damp(p.roll, -p.strafe * 0.03 * m, 8, dt);
    this.fovKick = damp(this.fovKick, p.dashT > 0 ? 12 : 0, p.dashT > 0 ? 25 : 6, dt);
    const sh = app.shake, drop = this.state === 'caught' ? 0.3 * Math.min(1, this.endT * 3) : 0;
    cam.position.set(p.x + rx * bobX, EYE - (p.crouchK || 0) * 0.42 + bobY * (1 - (p.crouchK || 0) * 0.5) - drop, p.z + rz * bobX);
    cam.rotation.set(p.pitch + sh.y * 0.06 + (this.kickP || 0), p.yaw + sh.x * 0.06, p.roll + sh.x * 0.02 + (this.kickR || 0) + this.sway);
  }

  updateNoiseRings(dt) {
    for (const r of this.noiseRings) {
      if (r.t >= 1) continue;
      r.t = Math.min(1, r.t + dt * 2.2);
      const s = 0.3 + (r.r - 0.3) * (1 - Math.pow(1 - r.t, 3));
      r.m.position.set(r.x, 0.05, r.z);
      r.m.scale.set(s, 1, s);
      r.m.material.opacity = 0.6 * (1 - r.t);
      if (r.t >= 1) r.m.visible = false;
    }
  }

  // ---------- endings ----------
  escape() {
    const app = this.app;
    this.checkContracts(true);
    this.state = 'escape'; this.endT = 0; this.endSent = false; this.cineInit = false; this.whooshed = false;
    const p = this.player;
    p.sx = p.x; p.sz = p.z;
    app.setPrompt('');
    app.audio.play('win');
    app.shake.add(0.2);
    if (this.alarm && this.alarmT < 10) {
      // photo finish: the police were seconds away
      this.photoFinish = true;
      this.juice(0.9, 0.25, -10, 0, 0); app.shake.add(0.4);
      app.floaters.spawn('JUST IN TIME!', p.x, 1.7, p.z - 1.2, 'big', 1.6);
      app.audio.play('jackpot');
    }
    app.onEscapeStart();
  }
  // helicopter extraction: hover over the hatch, then lift off and bank away over the city
  updateHeli(dt) {
    const h = this.heli, g = h.group, ex = this.L.exit, t = this.endT;
    if (!g.visible) { g.visible = true; this.heliV = 0; g.position.set(ex.x, 4.4, ex.z - 1.2); g.rotation.set(0, 0, 0); }
    h.rotor.rotation.y += dt * 32; h.tail.rotation.x += dt * 40;
    h.blink.visible = (t * 2.5) % 1 < 0.4;
    h.beam.rotation.z = Math.sin(t * 1.3) * 0.25;
    if (t < 1.3) g.position.y = 4.4 + Math.sin(t * 3) * 0.08;
    else {
      this.heliV = Math.min(14, this.heliV + dt * 9);
      g.position.x -= this.heliV * dt; g.position.y += (1.5 + this.heliV * 0.25) * dt;
      g.rotation.z += (0.22 - g.rotation.z) * Math.min(1, dt * 3);
      g.rotation.x += (-0.12 - g.rotation.x) * Math.min(1, dt * 2);
    }
    if (t > 0.6 && t < 1.4) this.app.shake.add(dt * 0.25);
  }
  updateEscape(dt) {
    const p = this.player, van = this.van.group, app = this.app;
    if (!this.L.van) {
      this.endT += dt;
      if (!p.hidden) { p.hidden = true; p.c.root.visible = false; app.audio.play('creak'); }
      if (this.endT > 0.5 && !this.whooshed) { this.whooshed = true; app.audio.play(this.heli ? 'chopper' : 'dash'); }
      if (this.heli) this.updateHeli(dt);
      if (this.endT > (this.heli ? 3.6 : 2.8) && !this.endSent) { this.endSent = true; app.onWin(this.results()); }
      return;
    }
    this.endT += dt;
    const t = this.endT;
    if (t < 0.4) {
      const k = t / 0.4;
      p.x = p.sx + (van.position.x - p.sx) * k;
      p.z = p.sz + (van.position.z - 0.3 - p.sz) * k;
      p.y = Math.sin(k * Math.PI) * 0.9;
      p.face = Math.PI;
    } else if (!p.hidden) {
      p.hidden = true; p.c.root.visible = false;
      van.scale.set(1.08, 0.88, 1.08);
      app.audio.play('engine');
      app.shake.add(0.3);
    }
    van.scale.x += (1 - van.scale.x) * Math.min(1, dt * 10);
    van.scale.y += (1 - van.scale.y) * Math.min(1, dt * 10);
    van.scale.z = van.scale.x;
    if (t > 0.6) {
      this.van.vx = Math.min(16, this.van.vx + dt * 14);
      van.position.x += this.van.vx * dt;
      van.rotation.z = Math.min(0.06, this.van.vx * 0.01);
      if (Math.random() < 0.7) app.particles.burst(van.position.x - 1.5, 0.25, van.position.z, { count: 2, colors: [0xdddddd, 0xbbbbbb], speed: 1, up: 1, size: 0.22, gravity: -1, life: 0.6 });
    }
    if (t > 2.0 && !this.endSent) { this.endSent = true; app.onWin(this.results()); }
  }
  // ---------- alarm / police ----------
  triggerAlarm(why) {
    if (this.alarm || this.state !== 'play') return;
    this.mark('alarm', this.player.x, this.player.z);
    const app = this.app, ex = this.L.exit;
    this.alarm = true; this.alarmT = this.alarmTotal; this.alarms++; this.spotted = true;
    this.police.group.visible = true;
    this.police.group.position.set(this.policeLane.x + 40, 0, this.policeLane.z);
    this.police.group.rotation.y = Math.PI;
    app.audio.play('alarm');
    app.audio.siren(true);
    app.flash('alarm');
    app.shake.add(0.25);
    app.onAlarm(true, why);
    app.hint('alarm');
  }
  disarm() {
    const app = this.app, pg = this.panel.group.position;
    this.alarm = false; this.disarmProg = 0;
    app.audio.siren(false);
    app.audio.play('disarm');
    app.onAlarm(false);
    app.floaters.spawn('ALARM DISARMED', pg.x, 1.5, pg.z, 'big', 1.4);
    app.particles.burst(pg.x, 1.1, pg.z, { count: 14, colors: [0x3ddc84, 0xffffff], speed: 2, up: 2, size: 0.04, life: 0.6 });
    app.hintDone('alarm');
  }
  updateAlarm(dt, playing) {
    if (this.panel) {
      const on = this.alarm && Math.sin(this.t * 14) > 0;
      this.panel.led.material.color.setHex(this.alarm ? (on ? 0xff2a3a : 0x5a0a10) : 0x3ddc84);
    }
    const pc = this.police;
    if (!this.alarm) {
      // police drive away after disarm
      if (pc.group.visible && this.state === 'play') { pc.group.position.x += dt * 10; if (pc.group.position.x > this.policeLane.x + 45) pc.group.visible = false; }
      return;
    }
    const k = Math.sin(this.t * 16) > 0;
    pc.red.material.color.setHex(k ? 0xff2a3a : 0x55101a);
    pc.blue.material.color.setHex(k ? 0x14205a : 0x2a6aff);
    if (!playing) return;
    this.alarmT -= dt;
    const ex = this.L.exit, f = Math.max(0, this.alarmT / this.alarmTotal);
    pc.group.position.x = this.policeLane.x + 2.5 + f * 37;
    this.app.onAlarmTime(Math.max(0, this.alarmT));
    if (this.alarmT <= 0) this.policeBust();
  }
  policeBust() {
    this.mark('caught', this.player.x, this.player.z);
    const app = this.app, p = this.player;
    if (this.picking) this.stopPick();
    this.state = 'caught'; this.endT = 0; this.endSent = false; this.catcher = null; this.policeBusted = true;
    this.hitstop = 0.15; this.juice(0.5, 0.3, -14, 0.06, 0.04);
    app.shake.add(0.7);
    app.flash('red');
    app.audio.play('bust');
    app.audio.siren(false);
    app.floaters.spawn('POLICE!', p.x + Math.sin(p.face) * 1.6, 1.3, p.z + Math.cos(p.face) * 1.6, 'alert big', 1.2);
    app.setPrompt('');
  }

  bust(g) {
    this.mark('caught', this.player.x, this.player.z);
    // remember why, so the busted screen can give a tip that actually helps
    const t = this.time;
    this.bustCause = this.player.hiding ? 'hide' : g.kind === 'owner' ? 'owner' : t - (this.lastDash ?? -99) < 2.5 ? 'dash'
      : t - (this.lastBark ?? -99) < 6 ? 'dog' : t - (g.alertAt ?? t) > 3 ? 'los' : 'cone';
    const app = this.app;
    if (this.picking) this.stopPick();
    this.state = 'caught'; this.endT = 0; this.endSent = false; this.catcher = g;
    g.face = Math.atan2(this.player.x - g.x, this.player.z - g.z);
    squash(this.player.c, 0.55);
    this.hitstop = 0.15; this.juice(0.5, 0.3, -14, 0.06, -0.04);
    app.shake.add(0.7);
    app.flash('red');
    app.audio.play('bust');
    app.audio.siren(false);
    app.floaters.spawn('BUSTED!', g.x, 1.5, g.z, 'alert big', 1.2);
    app.setPrompt('');
  }
  revive() {
    const g = this.catcher, p = this.player;
    this.state = 'play'; this.revived = true; this.catcher = null;
    p.inv = 2.5;
    squash(p.c, 1.3);
    if (g) { this.knockout(g); this.kos--; }
    for (const o of this.guards) if (o.state === 'alert') { o.state = 'search'; o.tx = o.lastX; o.tz = o.lastZ; o.hurry = 2.4; o.susp = 0.5; }
  }
  cutPower() {
    const app = this.app, bp = this.breaker.group.position;
    this.powerOff = true; this.breakProg = 0;
    this.breaker.lever.rotation.x = -2.2;
    this.breaker.led.material.color.setHex(0x3ddc84);
    for (const l of this.lasers) l.group.visible = false;
    for (const sp of this.spots) { sp.pool.visible = sp.cone.visible = false; }
    app.audio.play('powerdown');
    app.shake.add(0.2);
    app.particles.burst(bp.x, bp.y + 0.3, bp.z, { count: 24, colors: [0xfff1a8, 0x7fd8ff, 0xffffff], speed: 3, up: 3, size: 0.04, life: 0.6 });
    app.floaters.spawn('LASERS OFF', bp.x, 1.6, bp.z, 'big', 1.3);
  }
  updateSlots(dt) {
    for (const sl of this.slots) {
      if (sl.t <= 0) { sl.top.visible = false; continue; }
      sl.t -= dt;
      sl.top.visible = true;
      sl.top.material.color.setHSL((this.t * 2) % 1, 1, 0.6);
      sl.top.scale.y = 1 + Math.sin(this.t * 30) * 0.5;
    }
  }
  updateSpots(dt, playing) {
    const p = this.player, app = this.app;
    for (const sp of this.spots) {
      const d = sp.def, L = sp.len || 1, s = (this.t * d.speed + (d.phase || 0)) % (2 * L), k = (s < L ? s : 2 * L - s) / L;
      sp.x = sp.ax + (sp.bx - sp.ax) * k; sp.z = sp.az + (sp.bz - sp.az) * k;
      sp.pool.position.set(sp.x, 0.03, sp.z);
      sp.cone.position.set(sp.x, WALL_H / 2, sp.z);
      sp.fix.position.set(sp.x, WALL_H - 0.08, sp.z);
      if (this.powerOff) continue;
      sp.cool -= dt;
      const inside = playing && !p.hiding && p.inv <= 0 && sp.cool <= 0 && Math.hypot(p.x - sp.x, p.z - sp.z) < d.r * 0.9 && !this.inSmoke(p.x, p.z);
      sp.susp = clamp(sp.susp + (inside ? dt * 1.7 : -dt * 0.7), 0, 1);
      if (inside) {
        this.spotHit = true;
        sp.tickT -= dt;
        if (sp.tickT <= 0) { sp.tickT = 0.22; app.audio.play('tick', 1 + sp.susp); }
        app.hint('spot');
      }
      if (sp.susp >= 1) {
        sp.susp = 0; sp.cool = 5; this.spotted = true;
        app.flash('alarm'); app.shake.add(0.2);
        this.triggerAlarm('Caught in the spotlight!');
      }
      const hot = sp.cool > 0 && Math.sin(this.t * 14) > 0;
      const c = hot ? 0xff3040 : sp.susp > 0.05 ? (sp.susp > 0.6 ? 0xff5a3a : 0xffa040) : 0xfff0b0;
      sp.pool.material.color.setHex(c); sp.cone.material.color.setHex(c);
      sp.pool.scale.setScalar(1 + sp.susp * 0.15);
    }
  }
  updateLasers(dt, playing) {
    if (this.powerOff) return;
    const p = this.player, app = this.app;
    for (const l of this.lasers) {
      const d = l.def, per = d.on + d.off, ph = (this.t + (d.phase || 0)) % per;
      const on = ph < d.on, warn = !on && per - ph < 0.45;
      l.on = on;
      l.mat.opacity = on ? 0.75 + Math.sin(this.t * 40) * 0.15 : warn ? (Math.sin(this.t * 50) > 0 ? 0.35 : 0) : 0.0;
      if (!playing || !on || p.hiding) continue;
      const along = l.alongX ? p.x : p.z, across = l.alongX ? p.z : p.x;
      if (along > l.lo && along < l.hi && Math.abs(across - l.line) < 0.28) {
        if (!this.laserHitT || this.t - this.laserHitT > 1.5) {
          this.laserHitT = this.t; this.lasersTripped++;
          app.audio.play('zap'); app.flash('red'); app.shake.add(0.3);
          app.particles.burst(p.x, 0.8, p.z, { count: 14, colors: [0xff3040, 0xffffff], speed: 2.5, up: 2, size: 0.04, life: 0.5 });
          this.spotted = true;
          this.triggerAlarm('You tripped a laser!');
        }
      }
    }
  }
  fakeCheckIn(g) {
    const app = this.app;
    g.radioCall = 2; g.answerProg = 0; g.koT += 8; this.radioFaked++;
    app.audio.play('radioOk');
    app.floaters.spawn('"All clear, over."', g.x, 1.3, g.z, 'big', 1.3);
    app.hintDone('radio');
  }
  missedCheckIn(g) {
    const app = this.app;
    g.radioCall = 3;
    app.audio.play('radio');
    app.floaters.spawn('📻 "No answer... sending backup!"', g.x, 1.4, g.z, 'alert', 1.4);
    let best = null, bd = 1e9;
    for (const o of this.guards) {
      if (o === g || o.kind !== 'guard' || ['ko', 'getup', 'sleep', 'alert', 'waking'].includes(o.state)) continue;
      const d = Math.hypot(o.x - g.x, o.z - g.z);
      if (d < bd) { bd = d; best = o; }
    }
    if (best) {
      g.claimed = true;
      best.state = 'investigate'; best.tx = g.x; best.tz = g.z; best.hurry = best.speed * 1.8; best.reviveT = g; best.susp = Math.max(best.susp, 0.7); best.navGoal = -1;
      app.floaters.spawn('On my way!', best.x, 2.0, best.z, 'warn', 1.1);
    }
    if (this.app.diff === 'hard' && this.app.mode !== 'daily' && this.app.mode !== 'tutorial') this.triggerAlarm('A guard missed his radio check-in!');
  }

  pullSlot(sl) {
    const app = this.app, v = this.def.values;
    sl.used = true; sl.prog = 0; sl.t = 3;
    app.audio.play('jackpot');
    app.shake.add(0.15);
    app.floaters.spawn('JACKPOT!', sl.cx, 1.9, sl.cz + sl.face * 0.6, 'big', 1.4);
    for (let i = 0; i < 4; i++) setTimeout(() => app.particles.burst(sl.cx, 1.3, sl.cz + sl.face * 0.4, { count: 10, colors: [0xffd75a, 0xfff1a8, 0xffffff], speed: 2.2, up: 3.5, size: 0.06, life: 0.9 }), i * 250);
    this.makeNoise(sl.cx, sl.cz, 8, null, 'Jackpot!?');
    this.loot.push({ type: 'cash', x: sl.cx, y: 1.0, z: sl.cz + sl.face * 0.5, vx: (Math.random() - 0.5) * 2, vy: 4, vz: sl.face * 2.2, st: 'fly', t: 0, value: v.cash, ph: 0, ms: 0, s: 1, rot: 0 });
  }

  pickpocket(g) {
    const app = this.app, p = this.player, fx = Math.sin(p.face), fz = Math.cos(p.face);
    this.picks++; this.pocketProg = 0;
    if (g.spareKey) {
      g.spareKey = false; g.keyMesh.visible = false;
      if (!this.hasKey) {
        this.hasKey = true;
        for (const k of this.keyMeshes) k.m.visible = false;
        app.onKey(true); app.hint('door');
      }
      app.floaters.spawn('SPARE KEYCARD!', g.x, 1.6, g.z, 'big', 1.2);
      app.audio.play('gold');
    }
    if (g.wallet > 0) {
      const v = g.wallet;
      g.wallet = 0; g.walletMesh.visible = false;
      this.lootGot += v; this.got.cash++;
      app.floaters.spawn('+$' + v + ' WALLET', p.x + fx * 1.2, 1.1, p.z + fz * 1.2, 'cash', 1.0);
      app.particles.burst(p.x + fx * 0.9, 1.0, p.z + fz * 0.9, { count: 5, colors: [0x6fcf7a, 0x9be39a], speed: 1.2, up: 1.4, size: 0.09, life: 1.0, shape: 'bill', gravity: 3, drag: 2.5 });
      app.audio.play('pick', 8);
      app.onLoot(false);
    }
    p.grabT = 1;
    app.floaters.spawn('?', g.x, 2.0, g.z, 'q', 0.7);
    app.hintDone('pocket');
  }

  smashCase(c) {
    const app = this.app, v = this.def.values;
    c.smashed = true; c.prog = 0; this.casesSmashed++;
    c.glass.visible = false; c.gems.visible = false;
    app.audio.play('glass');
    app.shake.add(0.28);
    this.hitstop = 0.06; this.juice(0, 1, -4, -0.06, (Math.random() - 0.5) * 0.08);
    app.particles.burst(c.cx, 1.05, c.cz, { count: 26, colors: [0xdff4ff, 0xbfe6ff, 0xffffff], speed: 3.2, up: 3, size: 0.07, life: 0.9, spin: 2 });
    app.particles.burst(c.cx, 0.95, c.cz, { count: 8, colors: [0x4cdcff, 0xff4f7a, 0xffd75a], speed: 1.5, up: 2.5, size: 0.05, life: 0.7 });
    this.makeNoise(c.cx, c.cz, 3.6, null);
    for (let i = 0; i < this.caseLoot; i++) {
      const a = Math.atan2(this.player.x - c.cx, this.player.z - c.cz) + (i - 0.5) * 0.9;
      this.loot.push({ type: 'jewel', x: c.cx, y: 1.0, z: c.cz, vx: Math.sin(a) * rand(1.5, 2.4), vy: rand(3.5, 5), vz: Math.cos(a) * rand(1.5, 2.4),
        st: 'fly', t: 0, value: v.jewel, ph: i, ms: 0, s: 1, rot: i });
    }
    app.floaters.spawn('SMASH!', c.cx, 1.6, c.cz, 'ko', 0.8);
  }

  // ---------- lockpicking minigame ----------
  startPick(d) {
    this.picking = { d, pin: 0, t: Math.random() * 6, speed: this.tut ? 1.7 : 2.2, w: (this.tut ? 0.36 : 0.26) * this.gear.pickW, zone: 0.5, pos: 0.5, slips: 0, cool: 0 };
    this.newPinZone();
    this.app.audio.play('click');
    this.app.onPick(this.picking);
  }
  newPinZone() {
    const pk = this.picking;
    let z;
    do z = 0.18 + Math.random() * 0.64; while (Math.abs(z - pk.pos) < 0.25);
    pk.zone = z;
  }
  stopPick() { this.picking = null; this.app.onPick(null); }
  updatePicking(dt, inp) {
    const pk = this.picking, p = this.player, app = this.app, d = pk.d;
    inp.move(_mv); inp.consumeDash(); inp.consumeThrow(); inp.consumeSmoke();
    p.vx = p.vz = 0; p.moving = 0; p.crack = true;
    if (Math.hypot(_mv.x, _mv.y) > 0.5) { this.stopPick(); return; }
    pk.t += dt * pk.speed; pk.cool -= dt;
    pk.pos = 0.5 + 0.5 * Math.sin(pk.t);
    if (inp.consumeAct() && pk.cool <= 0) {
      if (Math.abs(pk.pos - pk.zone) < pk.w / 2) {
        pk.pin++;
        app.audio.play('pin', pk.pin);
        app.shake.add(0.05);
        app.particles.burst(d.x + 0.5, 0.72, d.y + 0.5, { count: 4, colors: [0xfff1a8, 0xffffff], speed: 1, up: 1, size: 0.025, life: 0.3 });
        if (pk.pin >= 3) {
          if (pk.slips === 0) this.cleanPick = true;
          this.stopPick(); this.openDoor(d);
          return;
        }
        pk.w *= 0.78; pk.speed *= 1.25; this.newPinZone();
      } else {
        pk.slips++; pk.cool = 0.45;
        app.audio.play('slip');
        app.shake.add(0.15);
        app.floaters.spawn('*rattle*', d.x + 0.5, 1.2, d.y + 0.5, 'warn', 0.8);
        this.makeNoise(d.x + 0.5, d.y + 0.5, 3.4, null);
      }
    }
    app.onPick(pk);
    app.setPrompt('picking');
  }

  openDoor(d) {
    const app = this.app, i = d.y * this.L.W + d.x;
    d.open = true; d.t = 0;
    this.L.walk[i] = 1; this.L.opaque[i] = 0;
    for (const g of this.guards) g.navGoal = -1;
    if (d.type === 'lock') {
      app.audio.play('creak');
      app.hintDone('pick');
      app.floaters.spawn('UNLOCKED!', d.x + 0.5, 1.5, d.y + 0.5, 'big', 1.2);
      app.particles.burst(d.x + 0.5, 0.75, d.y + 0.5, { count: 10, colors: [0xd9b45a, 0xffffff], speed: 1.5, up: 1.5, size: 0.03, life: 0.5 });
      return;
    }
    d.m.led.material.color.setHex(0x3ddc84);
    app.audio.play('disarm'); app.audio.play('creak');
    app.shake.add(0.25);
    app.particles.burst(d.x + 0.5, 1.5, d.y + 0.5, { count: 18, colors: [0xd8deea, 0xffffff], speed: 1.5, up: 0.5, size: 0.06, life: 0.8 });
    app.floaters.spawn('ACCESS GRANTED', d.x + 0.5, 1.6, d.y + 0.5, 'big', 1.2);
  }
  objectiveTarget() {
    const L = this.L;
    if (this.hasStash) return { x: L.exit.x, z: L.exit.z, label: L.van ? 'VAN' : 'ROOF HATCH' };
    // tutorial: point at the nearest cash until the first grab
    if (this.tut && this.lootGot === 0) {
      const p = this.player; let best = null, bd = 1e9;
      for (const it of this.loot) { const d = Math.hypot(it.x - p.x, it.z - p.z); if (it.type === 'cash' && d < bd) { bd = d; best = it; } }
      if (best) return { x: best.x, z: best.z, label: 'CASH' };
    }
    const closed = this.doors.find((d) => !d.open && d.type !== 'lock');
    if (closed && !this.hasKey) { const k = this.keyMeshes.find((k) => k.m.visible); if (k) return { x: k.x + 0.5, z: k.y + 0.5, label: 'KEYCARD' }; }
    if (closed) return { x: closed.x + 0.5, z: closed.y + 0.5, label: 'DOOR' };
    const lock = this.doors.find((d) => !d.open && d.type === 'lock');
    if (lock) return { x: lock.x + 0.5, z: lock.y + 0.5, label: 'LOCKED DOOR' };
    return { x: L.safe.x + 0.5, z: L.safe.y + 0.5, label: (this.def.safeName || 'safe').toUpperCase() };
  }
  updateObjective() {
    const closed = this.doors.find((d) => !d.open && d.type !== 'lock'), lock = this.doors.find((d) => !d.open && d.type === 'lock');
    const t = this.hasStash ? (this.L.van ? 'Escape to the van!' : 'Escape through the roof hatch!') : closed && !this.hasKey ? 'Find the keycard!' : closed ? 'Open the vault door!' : lock ? 'Pick the lock!' : `Crack the ${this.def.safeName || 'safe'}!`;
    if (t !== this.objText) { this.objText = t; this.app.setObjective(t); }
  }

  checkContracts(end) {
    for (const c of this.contracts) {
      if (c.st !== 'pending') continue;
      const r = c.check(this, end);
      if (r === 'pending') continue;
      c.st = r;
      this.app.onContract(c, this.contracts);
    }
  }

  results() {
    const par = this.def.parTime, frac = this.lootGot / this.lootTotal;
    const contractBonus = this.contracts.reduce((s, c) => s + (c.st === 'ok' ? c.bonus : 0), 0);
    const timeBonus = Math.max(0, Math.round((par - this.time) * 25));
    const ghost = !this.spotted;
    const stars = [true, frac >= 0.7, ghost];
    return {
      loot: this.lootGot, total: this.lootTotal, frac, time: this.time, ghost, kos: this.kos, stars,
      timeBonus, ghostBonus: ghost ? 1000 : 0, contracts: this.contracts, contractBonus,
      diff: this.daily ? 'Daily ' + this.daily.label : this.D.label, mult: this.D.mult, daily: !!this.daily,
      score: Math.round((this.lootGot + timeBonus + (ghost ? 1000 : 0) + contractBonus) * this.D.mult),
    };
  }

  hideBadges() { for (const g of this.guards) { g.badge.className = 'badge'; g.prevBadge = ''; } }
}
