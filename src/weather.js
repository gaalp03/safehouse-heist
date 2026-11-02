// Rain streaks that only fall on outdoor cells (seen through windows / out on the street), around the camera.
import { BufferGeometry, BufferAttribute, LineSegments, LineBasicMaterial } from 'three';

export class Rain {
  constructor(scene, n = 900) {
    this.n = n; this.box = 13; this.L = null;
    this.pos = new Float32Array(n * 6);
    this.speed = new Float32Array(n);
    this.geo = new BufferGeometry();
    this.geo.setAttribute('position', new BufferAttribute(this.pos, 3));
    this.lines = new LineSegments(this.geo, new LineBasicMaterial({ color: 0xa8bce6, transparent: true, opacity: 0.5, depthWrite: false, fog: true }));
    this.lines.frustumCulled = false;
    this.lines.renderOrder = 6;
    this.lines.visible = false;
    scene.add(this.lines);
  }
  setLevel(L) {
    this.L = L;
    this.lines.visible = !!L;
    if (L) for (let i = 0; i < this.n; i++) this.spawn(i, 0, 0, true);
  }
  outdoor(x, z) {
    const L = this.L, cx = Math.floor(x), cz = Math.floor(z);
    if (cx < 0 || cz < 0 || cx >= L.W || cz >= L.H) return true;
    return !!L.outdoor[cz * L.W + cx];
  }
  spawn(i, cx, cz, anyY) {
    const p = this.pos, k = i * 6, b = this.box;
    let x = 0, z = 0, ok = false;
    for (let t = 0; t < 4 && !ok; t++) { x = cx + (Math.random() - 0.5) * 2 * b; z = cz + (Math.random() - 0.5) * 2 * b; ok = this.outdoor(x, z); }
    const y = ok ? (anyY ? Math.random() * 7 : 6 + Math.random() * 2) : -50;
    this.speed[i] = 11 + Math.random() * 5;
    p[k] = x; p[k + 1] = y; p[k + 2] = z;
    p[k + 3] = x + 0.04; p[k + 4] = y + 0.42; p[k + 5] = z;
  }
  update(dt, cx, cz) {
    if (!this.lines.visible) return;
    const p = this.pos, b = this.box;
    for (let i = 0; i < this.n; i++) {
      const k = i * 6, dy = this.speed[i] * dt;
      p[k + 1] -= dy; p[k + 4] -= dy; p[k] -= dy * 0.08; p[k + 3] -= dy * 0.08;
      if (p[k + 1] < 0 || Math.abs(p[k] - cx) > b || Math.abs(p[k + 2] - cz) > b) this.spawn(i, cx, cz, p[k + 1] < -10);
    }
    this.geo.attributes.position.needsUpdate = true;
  }
}
