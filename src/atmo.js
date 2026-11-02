// Atmosphere: gradient sky dome + floating dust motes that drift around the camera.
import {
  Group, PlaneGeometry, CircleGeometry, Mesh, SphereGeometry, MeshBasicMaterial, BackSide, Color, Points, PointsMaterial, BufferGeometry, BufferAttribute, AdditiveBlending,
} from 'three';
import { textures } from './textures.js';

export function makeSky() {
  const g = new SphereGeometry(90, 16, 10);
  const pos = g.attributes.position, col = new Float32Array(pos.count * 3), c = new Color();
  const top = new Color(0x6f8fd8), mid = new Color(0xf4b98a), low = new Color(0xffd9a8);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 90;
    if (y > 0.15) c.copy(mid).lerp(top, Math.min(1, (y - 0.15) / 0.6));
    else c.copy(low).lerp(mid, Math.max(0, (y + 0.1) / 0.25));
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  const m = new Mesh(g, new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false, toneMapped: false }));
  m.renderOrder = -10;
  m.frustumCulled = false;
  return m;
}

// night sky: starfield + glowing moon, follows the camera like the sky dome
export function makeNightSky() {
  const g = new Group();
  const N = 420, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const u = Math.random() * 6.283, v = 0.08 + Math.random() * 0.9, r = 80;
    pos.set([Math.cos(u) * Math.cos(v * 1.5) * r, Math.sin(v * 1.5) * r, Math.sin(u) * Math.cos(v * 1.5) * r], i * 3);
  }
  const sg = new BufferGeometry(); sg.setAttribute('position', new BufferAttribute(pos, 3));
  const stars = new Points(sg, new PointsMaterial({ color: 0xdfe6ff, size: 0.55, sizeAttenuation: true, transparent: true, opacity: 0.9, fog: false, depthWrite: false, toneMapped: false }));
  stars.renderOrder = -9;
  const moonMat = new MeshBasicMaterial({ map: textures().glow, color: 0xdfe8ff, transparent: true, depthWrite: false, fog: false, blending: AdditiveBlending, toneMapped: false });
  const moon = new Mesh(new PlaneGeometry(16, 16), moonMat);
  const disc = new Mesh(new CircleGeometry(2.6, 24), new MeshBasicMaterial({ color: 0xf2f4ff, fog: false, toneMapped: false, depthWrite: false }));
  moon.position.set(-38, 44, -52); disc.position.copy(moon.position);
  moon.lookAt(0, 0, 0); disc.lookAt(0, 0, 0);
  moon.renderOrder = -8; disc.renderOrder = -8;
  g.add(stars, moon, disc);
  g.visible = false;
  return g;
}

export class Dust {
  constructor(scene, n = 220) {
    this.n = n;
    this.box = 7;
    const pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * this.box; pos[i * 3 + 1] = Math.random() * 1.9; pos[i * 3 + 2] = (Math.random() - 0.5) * this.box;
      this.vel[i * 3] = (Math.random() - 0.5) * 0.06; this.vel[i * 3 + 1] = (Math.random() - 0.5) * 0.03; this.vel[i * 3 + 2] = (Math.random() - 0.5) * 0.06;
    }
    this.geo = new BufferGeometry();
    this.geo.setAttribute('position', new BufferAttribute(pos, 3));
    this.points = new Points(this.geo, new PointsMaterial({
      map: textures().glow, size: 0.035, color: 0xffe2b0, transparent: true, opacity: 0.6, depthWrite: false, blending: AdditiveBlending,
    }));
    this.points.frustumCulled = false;
    this.points.renderOrder = 7;
    this.t = 0;
    scene.add(this.points);
  }
  update(dt, cx, cz) {
    this.t += dt;
    const p = this.geo.attributes.position.array, v = this.vel, h = this.box / 2;
    for (let i = 0; i < this.n; i++) {
      const k = i * 3;
      p[k] += (v[k] + Math.sin(this.t * 0.5 + i) * 0.02) * dt;
      p[k + 1] += (v[k + 1] + Math.cos(this.t * 0.4 + i * 1.3) * 0.015) * dt;
      p[k + 2] += v[k + 2] * dt;
      // wrap around the camera
      if (p[k] < cx - h) p[k] += this.box; else if (p[k] > cx + h) p[k] -= this.box;
      if (p[k + 2] < cz - h) p[k + 2] += this.box; else if (p[k + 2] > cz + h) p[k + 2] -= this.box;
      if (p[k + 1] < 0.05) p[k + 1] = 1.85; else if (p[k + 1] > 1.88) p[k + 1] = 0.08;
    }
    this.geo.attributes.position.needsUpdate = true;
  }
}
