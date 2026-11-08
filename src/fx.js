// Juice: instanced cube particles (1 draw call), screen shake, floating DOM text.
import { InstancedMesh, BoxGeometry, PlaneGeometry, MeshBasicMaterial, Object3D, Color, Vector3, AdditiveBlending, CanvasTexture, SRGBColorSpace } from 'three';
import { rand } from './util.js';
import { textures } from './textures.js';

// cartoon smoke puff: flat disc with a soft lit rim (reads like a comic cloud ball)
function puffTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  const gr = g.createRadialGradient(26, 24, 4, 32, 32, 30);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.7, 'rgba(236,236,244,1)'); gr.addColorStop(0.93, 'rgba(200,200,214,1)'); gr.addColorStop(1, 'rgba(200,200,214,0)');
  g.fillStyle = gr; g.beginPath(); g.arc(32, 32, 30, 0, 6.3); g.fill();
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
}
// shockwave ring
function ringTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 14, 32, 32, 31);
  gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.55, 'rgba(255,255,255,.15)'); gr.addColorStop(0.8, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new CanvasTexture(c); return t;
}
// four-point twinkle star for loot sparkles
function starTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 14); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#fff'; g.beginPath();
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, r = i % 2 ? 5 : 31; g.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r); }
  g.fill();
  const t = new CanvasTexture(c); return t;
}

const _o = new Object3D(), _c = new Color(), _v = new Vector3();

export class Particles {
  constructor(scene, max = 360) {
    this.max = max;
    this.mesh = new InstancedMesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial(), max);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.setColorAt(0, _c.set(0xffffff));
    scene.add(this.mesh);
    this.list = [];
    this.fx = new Sprites(scene);
  }
  flash(x, y, z, col = 0xffffff, size = 1.6, life = 0.28) { this.fx.add('flash', x, y, z, { c: col, s: size, life }); }
  ring(x, y, z, col = 0xffffff, size = 2.6, life = 0.45) { this.fx.add('ring', x, Math.max(0.04, y), z, { c: col, s: size, life }); }
  puff(x, y, z, o = {}) {
    const n = o.count ?? 6;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.283, sp = rand(0.3, 1) * (o.speed ?? 1.2);
      this.fx.add('puff', x + rand(-1, 1) * (o.spread ?? 0.15), y + rand(0, 0.15), z + rand(-1, 1) * (o.spread ?? 0.15), {
        c: o.color ?? 0xffffff, s: rand(0.7, 1.2) * (o.size ?? 0.45), life: rand(0.7, 1) * (o.life ?? 0.8),
        vx: Math.cos(a) * sp, vy: rand(0.4, 1) * (o.up ?? 0.8), vz: Math.sin(a) * sp, drag: 2.5,
      });
    }
  }
  burst(x, y, z, o = {}) {
    const n = o.count ?? 10, cols = o.colors || [0xffffff];
    // tiny bits read better as glowing sparks / twinkles than as cubes
    if ((o.size ?? 0.12) < 0.065 && o.shape !== 'bill' && !o.cube) {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, sp = rand(0.4, 1) * (o.speed ?? 3);
        this.fx.add(Math.random() < 0.3 ? 'star' : 'spark', x + rand(-1, 1) * (o.spread ?? 0.1), y, z + rand(-1, 1) * (o.spread ?? 0.1), {
          c: cols[(Math.random() * cols.length) | 0], s: rand(0.7, 1.2) * (o.size ?? 0.05) * 5.5, life: rand(0.6, 1) * (o.life ?? 0.7) * 1.2,
          vx: Math.cos(a) * sp, vy: rand(0.5, 1) * (o.up ?? 3), vz: Math.sin(a) * sp, g: (o.gravity ?? 9) * 0.6, drag: o.drag ?? 1.8,
        });
      }
      return;
    }
    for (let i = 0; i < n && this.list.length < this.max; i++) {
      const a = Math.random() * Math.PI * 2, sp = rand(0.4, 1) * (o.speed ?? 3);
      this.list.push({
        x: x + rand(-1, 1) * (o.spread ?? 0.1), y, z: z + rand(-1, 1) * (o.spread ?? 0.1),
        vx: Math.cos(a) * sp, vy: rand(0.5, 1) * (o.up ?? 3), vz: Math.sin(a) * sp,
        g: o.gravity ?? 9, life: rand(0.6, 1) * (o.life ?? 0.7), t: 0,
        s: rand(0.6, 1.1) * (o.size ?? 0.12), c: cols[(Math.random() * cols.length) | 0],
        rx: rand(0, 6), rs: rand(-10, 10) * (o.spin ?? 1), drag: o.drag ?? 1.5,
        kx: o.shape === 'bill' ? 1.7 : 1, ky: o.shape === 'bill' ? 0.08 : 1, kz: o.shape === 'bill' ? 0.85 : 1, flut: o.shape === 'bill' ? rand(2, 5) : 0,
      });
    }
  }
  update(dt, camera) {
    if (camera) this.fx.update(dt, camera);
    const L = this.list, cp = camera && camera.position;
    let n = 0;
    for (let i = L.length - 1; i >= 0; i--) {
      const p = L[i];
      p.t += dt;
      if (p.t >= p.life) { L[i] = L[L.length - 1]; L.pop(); continue; }
    }
    for (const p of L) {
      const d = Math.exp(-p.drag * dt);
      p.vx *= d; p.vz *= d; p.vy -= p.g * dt;
      if (p.flut) { p.vy = Math.max(p.vy, -0.9); p.vx += Math.sin(p.t * p.flut * 2) * dt * 1.5; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < 0.03) { p.y = 0.03; p.vy *= -0.4; p.vx *= 0.7; p.vz *= 0.7; }
      p.rx += p.rs * dt;
      // never let a particle fill the screen: shrink it away as it nears the lens
      const near = cp ? Math.min(1, Math.max(0, (Math.hypot(p.x - cp.x, p.y - cp.y, p.z - cp.z) - 0.35) / 0.6)) : 1;
      const k = 1 - p.t / p.life, s = p.s * Math.min(1, k * 2.5) * near;
      _o.position.set(p.x, p.y, p.z);
      _o.rotation.set(p.flut ? Math.sin(p.rx) * 0.8 : p.rx, p.rx * 0.7, p.flut ? Math.cos(p.rx * 0.7) * 0.6 : 0);
      _o.scale.set(s * p.kx, s * p.ky, s * p.kz);
      _o.updateMatrix();
      this.mesh.setMatrixAt(n, _o.matrix);
      this.mesh.setColorAt(n, _c.setHex(p.c));
      n++;
    }
    this.mesh.count = n;
    if (n) {
      this.mesh.instanceMatrix.needsUpdate = true;
      this.mesh.instanceColor.needsUpdate = true;
    }
  }
  clear() { this.list.length = 0; this.mesh.count = 0; this.fx.clear(); }
}

// Billboard sprite FX: additive sparks / twinkle stars / flashes, flat shockwave rings, cartoon smoke puffs.
// One instanced mesh per material (4 draw calls total, only when something is alive).
const _q = new Object3D();
class Sprites {
  constructor(scene) {
    const plane = new PlaneGeometry(1, 1), T = textures();
    const mk = (map, add, max) => {
      const m = new InstancedMesh(plane, new MeshBasicMaterial({ map, transparent: true, depthWrite: false, blending: add ? AdditiveBlending : undefined, toneMapped: false, fog: false }), max);
      m.frustumCulled = false; m.count = 0; m.renderOrder = 8; m.setColorAt(0, _c.set(0xffffff)); scene.add(m); return m;
    };
    this.m = { spark: mk(T.glow, true, 240), star: mk(starTex(), true, 120), ring: mk(ringTex(), true, 24), puff: mk(puffTex(), false, 90) };
    this.m.flash = this.m.spark;
    this.list = [];
  }
  add(k, x, y, z, o) {
    if (this.list.length > 460) return;
    this.list.push({ k, x, y, z, t: 0, vx: 0, vy: 0, vz: 0, g: 0, drag: 0, rot: rand(0, 6.28), ...o });
  }
  update(dt, cam) {
    const L = this.list, n = { spark: 0, star: 0, ring: 0, puff: 0 };
    for (let i = L.length - 1; i >= 0; i--) { const p = L[i]; p.t += dt; if (p.t >= p.life) { L[i] = L[L.length - 1]; L.pop(); } }
    for (const p of L) {
      const u = p.t / p.life, d = Math.exp(-p.drag * dt);
      p.vx *= d; p.vz *= d; p.vy = p.vy * d - p.g * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < 0.03) { p.y = 0.03; p.vy *= -0.3; }
      let s = p.s, fade = 1;
      const near = Math.min(1, Math.max(0, (Math.hypot(p.x - cam.position.x, p.y - cam.position.y, p.z - cam.position.z) - 0.3) / 0.6));
      if (p.k === 'flash') { s = p.s * (0.5 + u * 0.9); fade = (1 - u) * (1 - u); }
      else if (p.k === 'ring') { s = p.s * (0.15 + Math.sqrt(u) * 0.85); fade = 1 - u; }
      else if (p.k === 'puff') { s = p.s * (u < 0.25 ? 0.4 + u * 2.4 : 1 - (u - 0.25) * 1.1); }
      else { fade = Math.min(1, (1 - u) * 2.5); s = p.s * (p.k === 'star' ? 0.6 + 0.4 * Math.abs(Math.sin(p.t * 14 + p.rot)) : 1); }
      const key = p.k === 'flash' ? 'spark' : p.k, mesh = this.m[key], j = n[key];
      if (j >= mesh.instanceMatrix.count) continue;
      _q.position.set(p.x, p.y, p.z);
      if (p.k === 'ring') _q.rotation.set(-Math.PI / 2, 0, 0); else { _q.quaternion.copy(cam.quaternion); if (p.k !== 'spark' && p.k !== 'flash') _q.rotateZ(p.rot + p.t * (p.k === 'star' ? 3 : 0.8)); }
      s *= near; _q.scale.set(s, s, s); _q.updateMatrix();
      mesh.setMatrixAt(j, _q.matrix);
      if (p.k === 'puff') { const sh = 0.82 + 0.18 * (1 - u); mesh.setColorAt(j, _c.setHex(p.c).multiplyScalar(sh)); }
      else mesh.setColorAt(j, _c.setHex(p.c).multiplyScalar(fade));
      n[key] = j + 1;
    }
    for (const k of ['spark', 'star', 'ring', 'puff']) {
      const m = this.m[k]; m.count = n[k];
      if (n[k]) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; }
    }
  }
  clear() { this.list.length = 0; for (const k of ['spark', 'star', 'ring', 'puff']) this.m[k].count = 0; }
}

export class Shake {
  constructor() { this.trauma = 0; this.x = 0; this.y = 0; this.t = 0; }
  add(a) { this.trauma = Math.min(1, this.trauma + a * (this.scale ?? 1)); }
  update(dt) {
    this.t += dt;
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
    const s = this.trauma * this.trauma * 0.6;
    this.x = s * (Math.sin(this.t * 71) + Math.sin(this.t * 37) * 0.5);
    this.y = s * (Math.cos(this.t * 63) + Math.sin(this.t * 29) * 0.5);
  }
}

// Floating world-anchored text (cash numbers, KO!, ...) rendered with pooled DOM nodes.
export class Floaters {
  constructor(layer) {
    this.layer = layer; this.pool = []; this.live = [];
  }
  spawn(text, x, y, z, cls = '', life = 1.0) {
    let el = this.pool.pop();
    if (!el) { el = document.createElement('div'); this.layer.appendChild(el); }
    el.className = 'ft ' + cls + (cls.startsWith('say') && text.length <= 3 ? ' short' : '');
    el.textContent = text;
    el.style.opacity = '1';
    el.style.display = '';
    // restart pop animation
    el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    this.live.push({ el, x, y, z, t: 0, life });
  }
  update(dt, camera, w, h) {
    for (let i = this.live.length - 1; i >= 0; i--) {
      const f = this.live[i];
      f.t += dt; f.y += dt * 0.9;
      if (f.t >= f.life) {
        f.el.style.display = 'none'; this.pool.push(f.el);
        this.live.splice(i, 1); continue;
      }
      _v.set(f.x, f.y, f.z).project(camera);
      f.el.style.visibility = _v.z > 1 ? 'hidden' : '';
      const dist = Math.hypot(f.x - camera.position.x, f.y - camera.position.y, f.z - camera.position.z), k = Math.max(this.minScale || 0.55, Math.min(1.1, 3.4 / (dist || 1)));
      f.el.style.transform = `translate(${((_v.x + 1) / 2) * w}px,${((1 - _v.y) / 2) * h}px) translate(-50%,-50%) scale(${k.toFixed(2)})`;
      if (f.t > f.life * 0.6) f.el.style.opacity = String(1 - (f.t - f.life * 0.6) / (f.life * 0.4));
    }
  }
  clear() {
    for (const f of this.live) { f.el.style.display = 'none'; this.pool.push(f.el); }
    this.live.length = 0;
  }
}
