// Gameplay: player, guards (vision cones, suspicion, chase, noise), loot, safe, escape, scoring.
import {
  Group, Mesh, MeshBasicMaterial, InstancedMesh, BufferGeometry, BufferAttribute, CircleGeometry, RingGeometry,
  CylinderGeometry, Object3D, Vector3, DoubleSide, BoxGeometry,
} from 'three';
import { parseLevel } from './level.js';
import { buildWorld, buildSafe, buildVan, lootGeometries, lootMat } from './world.js';
import { makeCharacter, animateChar, squash, probe } from './chars.js';
import { clamp, damp, angDiff, rand } from './util.js';

const PR = 0.3, P_SPEED = 3.7, DASH_V = 11, DASH_T = 0.18, DASH_CD = 0.8, EYE = 1.02, CHASE = 3.2;
const CONE_N = 20;
const COL = { cone: 0xffe14d, sus: 0xff9f1c, alert: 0xff3b4e };
const _o = new Object3D(), _v = new Vector3(), _mv = { x: 0, y: 0 }, _lk = { x: 0, y: 0 };
const turn = (a, b, r) => a + clamp(angDiff(a, b), -r, r);

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
    this.root.clear();
    for (const g of this.guards || []) g.badge.remove();
    this.def = def;
    const L = (this.L = parseLevel(def));
    this.root.add(buildWorld(L));

    this.safe = buildSafe();
    this.safe.group.position.set(L.safe.x + 0.5, 0, L.safe.y + 0.5);
    this.root.add(this.safe.group);

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
      this.guards.push(g);
      return g;
    };
    for (const gd of def.guards) mkGuard('guard', gd);
    if (def.owner) {
      const o = def.owner;
      mkGuard('owner', { path: o.patrol, wait: 1.2, speed: o.speed, loop: true, owner: o });
    }
    // security cameras
    this.cams = (def.cameras || []).map((cd) => {
      const cone = makeCone(); this.root.add(cone);
      const m = new Mesh(new BoxGeometry(0.22, 0.18, 0.36), new MeshBasicMaterial({ color: 0x2d3150 }));
      const lens = new Mesh(new BoxGeometry(0.12, 0.1, 0.06), new MeshBasicMaterial({ color: 0xff3b4e }));
      lens.position.z = 0.2; m.add(lens);
      m.position.set(cd.pos[0], 1.3, cd.pos[1]);
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
    this.lootTotal = v.stash + v.bundle * v.bundles + L.loot.reduce((s, l) => s + v[l.type], 0);
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
    this.hasStash = false; this.safeOpen = false; this.safeProg = 0; this.safeTick = 0; this.doorT = 0;
    this.combo = 0; this.comboT = 0; this.revived = false; this.endT = 0; this.hitstop = 0;
    this.nopeT = 0; this.tension = 0; this.catcher = null; this.fovKick = 0; this.cineInit = false;

    const p = this.player;
    Object.assign(p, {
      x: L.start.x + 0.5, z: L.start.y + 0.5, vx: 0, vz: 0, face: Math.PI, dashT: 0, dashCd: 0, ddx: 0, ddz: 0,
      inv: 0, stepAcc: 0, bagS: 0.5, bagV: 0, punchT: 0, hidden: false, y: 0, moving: 0,
      yaw: 0, pitch: -0.05, roll: 0, bob: 0, strafe: 0, lookX: 0, lookY: 0, grabT: 0, crack: false,
    });
    p.c.root.visible = true;
    p.c.root.rotation.set(0, Math.PI, 0);
    squash(p.c, 1);

    for (const g of this.guards) this.resetGuard(g);
    for (const cam of this.cams) Object.assign(cam, { susp: 0, cool: 0, face: cam.def.face });

    this.loot = L.loot.map((l, i) => ({
      type: l.type, x: l.x + 0.5, y: 0.45, z: l.y + 0.5, vx: 0, vy: 0, vz: 0, st: 'idle', t: 0,
      value: def.values[l.type], ph: i * 1.7, ms: 0, s: 1, rot: i,
    }));
    this.safe.door.rotation.y = 0;
    this.van.group.position.set(L.van.x + 0.5, 0, L.van.y + 1);
    this.van.group.rotation.set(0, 0, 0);
    this.van.vx = 0;
    this.exitRing.visible = this.exitBeam.visible = false;
    for (const r of this.noiseRings) { r.m.visible = false; r.t = 1; }
    this.app.particles.clear();
    this.app.floaters.clear();
  }

  resetGuard(g) {
    const d = g.def;
    Object.assign(g, {
      susp: 0, lastX: 0, lastZ: 0, lostT: 99, koT: 0, t: 0, wp: 0, dir: 1, nav: [], navGoal: -1, navT: 0,
      tx: 0, tz: 0, hurry: 0, baseFace: 0, fallT: 0, zz: 0.5, prevBadge: '',
      speed: d.speed || 1.8, range: g.kind === 'owner' ? 4.6 : 5.6, fov: g.kind === 'owner' ? 1.2 : 1.35,
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
    if (this.hitstop > 0) { this.hitstop -= rdt; dt *= 0.08; }
    this.t += dt;
    const playing = !demo && this.state === 'play';
    if (playing) { this.time += dt; this.updatePlayer(dt); }
    else if (demo) this.player.c.root.visible = false;

    let alertN = 0;
    for (const g of this.guards) {
      g.moving = 0;
      this.updateGuard(g, dt, playing);
      if (g.state === 'alert') alertN++;
      this.syncGuard(g, dt);
    }
    for (const cam of this.cams) this.updateCam(cam, dt, playing);
    this.tension = alertN > 0 ? 1 : 0;

    this.updateLoot(dt, playing);
    this.updateProps(dt);
    if (!demo) this.syncPlayer(dt);
    this.updateNoiseRings(dt);

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
    p.pitch = clamp(p.pitch - _lk.y * sens, -1.25, 1.2);
    p.face = p.yaw + Math.PI;
    const fx = Math.sin(p.face), fz = Math.cos(p.face), rx = -fz, rz = fx;
    const wx = rx * _mv.x - fx * _mv.y, wz = rz * _mv.x - fz * _mv.y;
    p.strafe = _mv.x;
    const frac = this.lootGot / this.lootTotal;
    const spd = P_SPEED * (1 - 0.1 * frac);
    p.vx = damp(p.vx, wx * spd, 14, dt);
    p.vz = damp(p.vz, wz * spd, 14, dt);
    p.dashCd -= dt; p.inv -= dt; p.punchT -= dt;
    if (inp.consumeDash() && p.dashCd <= 0) {
      let dx = wx, dz = wz;
      if (Math.abs(dx) + Math.abs(dz) < 0.01) { dx = fx; dz = fz; }
      const l = Math.hypot(dx, dz); dx /= l; dz /= l;
      p.dashT = DASH_T; p.dashCd = DASH_CD; p.ddx = dx; p.ddz = dz;
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
    // soft-collide with standing guards
    for (const g of this.guards) {
      if (g.state === 'sleep') continue;
      const dx = p.x - g.x, dz = p.z - g.z, d = Math.hypot(dx, dz);
      if (d < 0.55 && d > 0.001) { p.x += (dx / d) * (0.55 - d); p.z += (dz / d) * (0.55 - d); this.collide(p, PR); }
    }
    const sp = Math.hypot(vx, vz);
    p.moving = Math.min(1, sp / P_SPEED);
    const ph = Math.floor(p.bob / Math.PI);
    p.bob += Math.min(sp, P_SPEED) * dt * 2.6;
    if (Math.floor(p.bob / Math.PI) !== ph) app.audio.play('step');
    if (sp > 0.5) app.hintDone('move');

    // ---- interactions ----
    const sx = this.L.safe.x + 0.5, sz = this.L.safe.y + 0.5;
    const nearSafe = !this.safeOpen && Math.hypot(p.x - sx, p.z - sz) < 1.45 && Math.abs(angDiff(p.face, Math.atan2(sx - p.x, sz - p.z))) < 1.1;
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
    if (nearSafe) {
      app.hint('safe');
      if (inp.act) {
        this.safeProg += dt / 1.4;
        this.safeTick -= dt;
        p.crack = true;
        if (this.safeTick <= 0) {
          this.safeTick = 0.11; app.audio.play('tick', this.safeProg);
          app.particles.burst(sx, 0.7, sz + 0.4, { count: 1, colors: [0xffd23f, 0xffffff], speed: 1.5, up: 2, size: 0.06, life: 0.3 });
        }
        if (this.safeProg >= 1) this.openSafe();
      } else this.safeProg = Math.max(0, this.safeProg - dt * 0.5);
    } else this.safeProg = Math.max(0, this.safeProg - dt);
    if (ko) {
      app.hint('ko');
      if (pressed && !nearSafe) this.knockout(ko);
    }
    app.setPrompt(nearSafe ? 'safe' : ko ? 'ko' : '', this.safeProg);

    // exit
    const ex = this.L.exit;
    const de = Math.hypot(p.x - ex.x, p.z - ex.z);
    this.nopeT -= dt;
    if (de < 0.95) {
      if (this.hasStash) this.escape();
      else if (this.nopeT <= 0) {
        this.nopeT = 3; app.audio.play('nope');
        app.floaters.spawn('Crack the safe first!', p.x + fx * 1.6, 1.2, p.z + fz * 1.6, 'warn', 1.4);
      }
    }
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.combo = 0; }

    // contextual hints
    if (this.time > 3.5) app.hint('dash');
    for (const g of this.guards) {
      const d = Math.hypot(p.x - g.x, p.z - g.z);
      if (g.state === 'sleep' && d < 6) app.hint('owner');
      else if (g.state !== 'sleep' && d < 6.5) app.hint('cone');
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

  knockout(g) {
    const app = this.app, p = this.player;
    g.state = 'ko'; g.koT = 9; g.susp = 0; g.fallT = 0;
    g.c.flash = 0.2;
    squash(g.c, 0.6);
    this.kos++;
    this.hitstop = 0.08;
    app.shake.add(0.35);
    p.punchT = 0.28;
    squash(p.c, 1.25);
    app.audio.play('ko');
    app.particles.burst(g.x, 1.0, g.z, { count: 14, colors: [0xffd23f, 0xffffff, 0xff9f1c], speed: 3.5, up: 4, size: 0.13, life: 0.7 });
    app.floaters.spawn('KO!', g.x, 1.7, g.z, 'ko', 0.9);
    this.makeNoise(g.x, g.z, 2.5, g);
    app.hintDone('ko');
  }

  makeNoise(x, z, r, except) {
    const ring = this.noiseRings.find((n) => n.t >= 1);
    if (ring) { ring.t = 0; ring.r = r; ring.x = x; ring.z = z; ring.m.visible = true; }
    for (const g of this.guards) {
      if (g === except || g.state === 'ko' || g.state === 'getup' || g.state === 'alert' || g.state === 'waking') continue;
      if (Math.hypot(g.x - x, g.z - z) > r) continue;
      if (g.state === 'sleep') { this.wake(g, x, z); continue; }
      if (g.state !== 'investigate' && g.state !== 'suspicious') {
        this.app.audio.play('huh');
        this.app.floaters.spawn('?', g.x, 1.9, g.z, 'q', 0.8);
      }
      g.state = 'investigate'; g.tx = x; g.tz = z; g.hurry = g.speed * 1.4;
      g.susp = Math.max(g.susp, 0.3);
    }
  }

  wake(g, x, z) {
    const b = g.def.owner.bed;
    g.state = 'waking'; g.t = 0.9; g.tx = x; g.tz = z; g.hurry = g.speed * 1.3;
    g.x = b[0] - 0.5; g.z = b[1] + 1.5;
    g.c.root.rotation.x = 0; g.c.root.position.y = 0;
    g.face = Math.atan2(x - g.x, z - g.z);
    squash(g.c, 1.4);
    this.app.audio.play('wake');
    this.app.floaters.spawn('WHO\'S THERE?!', g.x, 2.0, g.z, 'warn', 1.3);
    this.app.shake.add(0.15);
  }

  alert(g) {
    g.state = 'alert'; g.susp = 1; g.lostT = 0;
    if (!this.spotted) this.app.hintDone('cone');
    this.spotted = true;
    this.app.audio.play('alert');
    this.app.floaters.spawn('!', g.x, 2.0, g.z, 'alert', 0.8);
    this.app.shake.add(0.15);
    squash(g.c, 1.3);
  }

  baseState(g) {
    g.state = g.def.post ? 'post' : 'patrol';
    g.navGoal = -1;
  }

  canSee(g) {
    const p = this.player, dx = p.x - g.x, dz = p.z - g.z, d = Math.hypot(dx, dz);
    if (d > g.range) return 0;
    if (d > 0.35 && Math.abs(angDiff(g.face, Math.atan2(dx, dz))) > g.fov / 2) return 0;
    if (!this.los(g.x, g.z, p.x, p.z)) return 0;
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
        if (g.koT <= 0) { g.state = 'getup'; g.t = 0.5; }
        return;
      case 'getup':
        g.t -= dt;
        if (g.t <= 0) {
          this.baseState(g); g.susp = 0.2;
          app.floaters.spawn('?!', g.x, 1.9, g.z, 'q', 0.8);
        }
        return;
    }
    if (g.state !== g.lastState) { g.lastState = g.state; g.stateT = 0; }
    g.stateT += dt;
    // ---- perception ----
    const seen = perceive && p.inv <= 0 ? this.canSee(g) : 0;
    if (seen) {
      const close = 1 - clamp(seen / g.range, 0, 1);
      const rate = (0.65 + 2.3 * close * close) * (p.dashT > 0 ? 1.6 : 1);
      g.susp = Math.min(1, g.susp + rate * dt);
      g.lastX = p.x; g.lastZ = p.z; g.lostT = 0;
      if (g.state !== 'alert') {
        if (g.susp >= 1) this.alert(g);
        else if (g.susp > 0.25 && g.state !== 'suspicious') { g.state = 'suspicious'; app.audio.play('huh'); }
      }
    } else {
      g.lostT += dt;
      if (g.state !== 'alert') g.susp = Math.max(0, g.susp - dt * 0.3);
    }
    // bumping into a guard's face = instantly spotted
    if (perceive && p.inv <= 0 && g.state !== 'alert') {
      const d = Math.hypot(p.x - g.x, p.z - g.z);
      if (d < 0.7 && !this.canKO(g) && Math.abs(angDiff(g.face, Math.atan2(p.x - g.x, p.z - g.z))) < 1.75) this.alert(g);
    }

    const d = g.def;
    switch (g.state) {
      case 'patrol': {
        const w = d.path[g.wp];
        if (this.navTo(g, w[0] + 0.5, w[1] + 0.5, g.speed, dt)) {
          g.state = 'wait'; g.t = d.wait ?? 1; g.baseFace = g.face;
        }
        break;
      }
      case 'wait': {
        g.t -= dt;
        const k = (d.wait ?? 1) - g.t;
        g.face = g.baseFace + Math.sin(k * 2.4) * 0.9;
        if (g.t <= 0) {
          const n = d.path.length;
          if (d.loop) g.wp = (g.wp + 1) % n;
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
        if (Math.hypot(g.lastX - g.x, g.lastZ - g.z) > 1.6 && g.susp > 0.45) this.navTo(g, g.lastX, g.lastZ, g.speed * 0.6, dt);
        if (g.susp < 0.1) this.baseState(g);
        break;
      }
      case 'alert': {
        const tx = seen ? p.x : g.lastX, tz = seen ? p.z : g.lastZ;
        this.navTo(g, tx, tz, CHASE, dt);
        if (!seen && g.lostT > 2.2) {
          g.state = 'search'; g.tx = g.lastX; g.tz = g.lastZ; g.hurry = 2.8; g.susp = 0.6;
          app.audio.play('lost');
          app.floaters.spawn('?', g.x, 1.9, g.z, 'q', 0.8);
        }
        if (this.state === 'play' && p.inv <= 0 && Math.hypot(p.x - g.x, p.z - g.z) < 0.78) this.bust(g);
        break;
      }
      case 'investigate':
      case 'search':
        if (this.navTo(g, g.tx, g.tz, g.hurry || g.speed, dt) || g.stateT > 9 || (g.nav.length === 0 && Math.hypot(g.tx - g.x, g.tz - g.z) < 0.9)) {
          g.state = 'look'; g.t = 2.2; g.baseFace = g.face;
        }
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
      const col = g.state === 'alert' ? COL.alert : g.susp > 0.25 ? COL.sus : COL.cone;
      this.updateCone(g.cone, g.x, g.z, g.face, g.fov, g.range, col);
    }
    // status badge (DOM)
    let b = '';
    if (g.state === 'alert') b = 'alert';
    else if (g.state === 'investigate' || g.state === 'search' || g.state === 'look' || g.susp > 0.04) b = 'sus';
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
    cam.face = d.face + Math.sin(this.t * d.sweepSpeed) * d.sweep;
    const x = d.pos[0], z = d.pos[1];
    cam.mesh.rotation.y = cam.face;
    cam.cool -= dt;
    let seen = false;
    if (perceive && p.inv <= 0 && cam.cool <= 0) {
      const dx = p.x - x, dz = p.z - z, dist = Math.hypot(dx, dz);
      seen = dist < 6.5 && Math.abs(angDiff(cam.face, Math.atan2(dx, dz))) < 0.45 && this.los(x, z, p.x, p.z);
    }
    cam.susp = clamp(cam.susp + (seen ? dt * 1.5 : -dt * 0.8), 0, 1);
    if (cam.susp >= 1) {
      cam.susp = 0; cam.cool = 4;
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
    const app = this.app, sx = this.L.safe.x + 0.5, sz = this.L.safe.y + 0.5, v = this.def.values;
    this.safeOpen = true; this.hasStash = true; this.doorT = 0;
    this.lootGot += v.stash;
    this.hitstop = 0.12;
    app.shake.add(0.55);
    app.audio.play('safe');
    app.flash('gold');
    app.particles.burst(sx, 0.8, sz + 0.4, { count: 24, colors: [0xffd23f, 0xffffff, 0xffe680], speed: 4, up: 6, size: 0.1, life: 1.0 });
    app.particles.burst(sx, 1.0, sz + 0.5, { count: 30, colors: [0x6fcf7a, 0x9be39a, 0x4fae5a], speed: 3, up: 4, size: 0.13, life: 2.2, shape: 'bill', gravity: 3, drag: 1.5 });
    app.floaters.spawn('+$' + v.stash.toLocaleString('en-US') + ' STASH!', sx, 1.8, sz, 'big', 1.6);
    for (let i = 0; i < v.bundles; i++) {
      const a = -0.9 + (1.8 * i) / (v.bundles - 1);
      this.loot.push({
        type: 'cash', x: sx, y: 0.7, z: sz + 0.5, vx: Math.sin(a) * rand(2, 3.2), vy: rand(5, 7), vz: Math.cos(a) * rand(1.5, 3),
        st: 'fly', t: 0, value: v.bundle, ph: i, ms: 0, s: 1, rot: i,
      });
    }
    this.exitRing.visible = this.exitBeam.visible = true;
    app.onLoot(true);
    app.setObjective('Escape to the van!');
    app.hint('stash');
  }

  collect(it) {
    const app = this.app;
    this.lootGot += it.value;
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
    app.particles.burst(p.x + fx * 0.9, 0.75, p.z + fz * 0.9, { count: it.type === 'cash' ? 5 : 14, colors: cols, speed: 1.6, up: 2, size: 0.05, life: 0.5 });
    if (it.type === 'cash') app.particles.burst(p.x + fx * 1.0, 1.0, p.z + fz * 1.0, { count: 6, colors: [0x6fcf7a, 0x9be39a, 0x4fae5a], speed: 1.4, up: 1.6, size: 0.1, life: 1.1, shape: 'bill', gravity: 3, drag: 2.5 });
    else app.particles.burst(p.x + fx * 1.0, 1.0, p.z + fz * 1.0, { count: 8, colors: [0xffffff, 0xfff1a8], speed: 1.2, up: 1, size: 0.035, life: 0.6, gravity: 0 });
    app.audio.play(it.type === 'cash' ? 'pick' : it.type, this.combo);
    this.player.bagV += 4;
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
    if (this.state === 'escape') {
      const v = this.van.group.position, ex = this.L.exit;
      if (!this.cineInit) { this.cineInit = true; cam.position.set(ex.x - 2.5, 1.6, ex.z + 5); }
      cam.position.x += (v.x - 1.5 - cam.position.x) * Math.min(1, dt * 1.2);
      cam.lookAt(v.x + 0.3, 0.7, v.z);
      this.fovKick = 0;
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
    cam.position.set(p.x + rx * bobX, EYE + bobY - drop, p.z + rz * bobX);
    cam.rotation.set(p.pitch + sh.y * 0.06, p.yaw + sh.x * 0.06, p.roll + sh.x * 0.02);
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
    this.state = 'escape'; this.endT = 0; this.endSent = false; this.cineInit = false;
    const p = this.player;
    p.sx = p.x; p.sz = p.z;
    app.setPrompt('');
    app.audio.play('win');
    app.shake.add(0.2);
    app.onEscapeStart();
  }
  updateEscape(dt) {
    const p = this.player, van = this.van.group, app = this.app;
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
  bust(g) {
    const app = this.app;
    this.state = 'caught'; this.endT = 0; this.endSent = false; this.catcher = g;
    g.face = Math.atan2(this.player.x - g.x, this.player.z - g.z);
    squash(this.player.c, 0.55);
    this.hitstop = 0.15;
    app.shake.add(0.7);
    app.flash('red');
    app.audio.play('bust');
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
  results() {
    const par = this.def.parTime, frac = this.lootGot / this.lootTotal;
    const timeBonus = Math.max(0, Math.round((par - this.time) * 25));
    const ghost = !this.spotted;
    const stars = [true, frac >= 0.7, ghost];
    return {
      loot: this.lootGot, total: this.lootTotal, frac, time: this.time, ghost, kos: this.kos, stars,
      timeBonus, ghostBonus: ghost ? 1000 : 0, score: this.lootGot + timeBonus + (ghost ? 1000 : 0),
    };
  }

  hideBadges() { for (const g of this.guards) { g.badge.className = 'badge'; g.prevBadge = ''; } }
}
