// Juice: instanced cube particles (1 draw call), screen shake, floating DOM text.
import { InstancedMesh, BoxGeometry, MeshBasicMaterial, Object3D, Color, Vector3 } from 'three';
import { rand } from './util.js';

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
  }
  burst(x, y, z, o = {}) {
    const n = o.count ?? 10, cols = o.colors || [0xffffff];
    for (let i = 0; i < n && this.list.length < this.max; i++) {
      const a = Math.random() * Math.PI * 2, sp = rand(0.4, 1) * (o.speed ?? 3);
      this.list.push({
        x: x + rand(-1, 1) * (o.spread ?? 0.1), y, z: z + rand(-1, 1) * (o.spread ?? 0.1),
        vx: Math.cos(a) * sp, vy: rand(0.5, 1) * (o.up ?? 3), vz: Math.sin(a) * sp,
        g: o.gravity ?? 9, life: rand(0.6, 1) * (o.life ?? 0.7), t: 0,
        s: rand(0.6, 1.1) * (o.size ?? 0.12), c: cols[(Math.random() * cols.length) | 0],
        rx: rand(0, 6), rs: rand(-10, 10), drag: o.drag ?? 1.5,
      });
    }
  }
  update(dt) {
    const L = this.list;
    let n = 0;
    for (let i = L.length - 1; i >= 0; i--) {
      const p = L[i];
      p.t += dt;
      if (p.t >= p.life) { L[i] = L[L.length - 1]; L.pop(); continue; }
    }
    for (const p of L) {
      const d = Math.exp(-p.drag * dt);
      p.vx *= d; p.vz *= d; p.vy -= p.g * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < 0.03) { p.y = 0.03; p.vy *= -0.4; p.vx *= 0.7; p.vz *= 0.7; }
      p.rx += p.rs * dt;
      const k = 1 - p.t / p.life, s = p.s * Math.min(1, k * 2.5);
      _o.position.set(p.x, p.y, p.z);
      _o.rotation.set(p.rx, p.rx * 0.7, 0);
      _o.scale.set(s, s, s);
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
  clear() { this.list.length = 0; this.mesh.count = 0; }
}

export class Shake {
  constructor() { this.trauma = 0; this.x = 0; this.y = 0; this.t = 0; }
  add(a) { this.trauma = Math.min(1, this.trauma + a); }
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
    el.className = 'ft ' + cls;
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
      f.el.style.transform = `translate(${((_v.x + 1) / 2) * w}px,${((1 - _v.y) / 2) * h}px) translate(-50%,-50%)`;
      if (f.t > f.life * 0.6) f.el.style.opacity = String(1 - (f.t - f.life * 0.6) / (f.life * 0.4));
    }
  }
  clear() {
    for (const f of this.live) { f.el.style.display = 'none'; this.pool.push(f.el); }
    this.live.length = 0;
  }
}
