// First-person hands + crowbar, rendered in a 2nd pass (depth cleared) so they never clip into walls.
import { Scene, PerspectiveCamera, Group, Mesh, MeshLambertMaterial, HemisphereLight, DirectionalLight } from 'three';
import { GeoBuilder } from './geo.js';
import { damp, clamp } from './util.js';

const DEF = { sleeve: 0x2fa89a, sleeve2: 0x268c80, cuff: 0x1f6f66, glove: 0x2a2c3d, glove2: 0x3a3d52, bar: 0xd8333a, barHi: 0xff8a8a, band: 0xf2b134 };

export class ViewModel {
  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(60, 1, 0.01, 10);
    this.hemi = new HemisphereLight(0xffe6c8, 0x6a5878, 2.4);
    this.scene.add(this.hemi);
    const sun = new DirectionalLight(0xffe0b8, 1.5);
    sun.position.set(-1, 2, 1.5);
    this.scene.add(sun);
    const mat = (this.mat = new MeshLambertMaterial({ vertexColors: true }));
    this.root = new Group();
    this.scene.add(this.root);

    this.R = new Group();
    this.R.position.set(0.23, -0.29, 0.0);
    this.R.rotation.y = 0.16;
    this.root.add(this.R);
    this.L = new Group();
    this.L.position.set(-0.2, -0.27, 0.0);
    this.L.rotation.y = -0.16;
    this.root.add(this.L);
    this.setOutfit(null);

    this.swX = 0; this.swY = 0; this.down = 0; this.lIn = 0; this.t = 0; this.kick = 0;
    this.visible = true;
  }

  // (re)build arms + crowbar with outfit colours; geometry/proportions never change
  setOutfit(c) {
    c = c || DEF;
    const mat = this.mat;
    for (const m of this.parts || []) { m.parent.remove(m); m.geometry.dispose(); }
    const armGeo = (left) => {
      const g = new GeoBuilder();
      g.box(0, -0.075, -0.285, 0.14, 0.14, 0.17, c.sleeve, { faces: 63 });
      g.box(0, -0.082, -0.24, 0.152, 0.152, 0.05, c.sleeve2, { faces: 63 });
      g.box(0, -0.08, -0.36, 0.148, 0.148, 0.1, c.sleeve, { faces: 63 });
      g.box(0, -0.082, -0.44, 0.155, 0.155, 0.07, c.cuff, { faces: 63 });
      g.box(0, -0.082, -0.448, 0.158, 0.02, 0.05, c.band, { faces: 63 });
      if (left) {
        g.box(0, -0.065, -0.5, 0.12, 0.13, 0.05, c.glove, { faces: 63 });
        g.box(0, -0.0, -0.5, 0.05, 0.03, 0.055, 0xd9b45a, { faces: 63 });
        g.box(0, -0.07, -0.57, 0.15, 0.06, 0.13, c.glove, { faces: 63, top: c.glove2 });
        for (let k = 0; k < 4; k++) g.box(-0.055 + k * 0.037, -0.072, -0.67, 0.032, 0.05, 0.09, c.glove, { faces: 63, top: c.glove2 });
        g.box(0.09, -0.07, -0.56, 0.045, 0.05, 0.08, c.glove, { faces: 63, ry: -0.5 });
      } else {
        g.box(0, -0.07, -0.56, 0.13, 0.12, 0.14, c.glove, { faces: 63, top: c.glove2 });
        for (let k = 0; k < 4; k++) g.box(-0.045 + k * 0.03, -0.01, -0.6, 0.027, 0.03, 0.05, c.glove2, { faces: 63 });
        g.box(-0.07, -0.04, -0.55, 0.04, 0.05, 0.08, c.glove, { faces: 63 });
      }
      return g.build();
    };
    const armR = new Mesh(armGeo(false), mat);
    armR.scale.set(0.56, 0.6, 1);
    this.R.add(armR);
    const bar = new GeoBuilder();
    const steel = 0xb8c2d0, dark = 0x7a8496;
    bar.box(0, -0.2, 0, 0.034, 0.08, 0.034, steel, { faces: 63 });
    bar.box(0, -0.235, 0.012, 0.03, 0.04, 0.02, dark, { faces: 63 });
    bar.box(0, -0.12, 0, 0.042, 0.42, 0.042, c.bar, { faces: 63 });
    bar.box(0, -0.1, 0, 0.046, 0.12, 0.046, 0x22242f, { faces: 63 });
    bar.box(0, 0.3, 0, 0.038, 0.07, 0.038, steel, { faces: 63 });
    bar.box(0, 0.36, -0.035, 0.036, 0.036, 0.1, steel, { faces: 63, top: 0xdfe6ef });
    bar.box(0, 0.33, -0.095, 0.034, 0.05, 0.03, steel, { faces: 63 });
    bar.box(0, 0.305, -0.1, 0.03, 0.03, 0.022, steel, { faces: 63 });
    bar.box(0.02, -0.05, 0.022, 0.006, 0.3, 0.002, c.barHi, { faces: 16 });
    this.bar = new Mesh(bar.build(), mat);
    this.bar.position.set(0, -0.035, -0.57);
    this.bar.scale.set(0.8, 0.88, 0.8);
    this.bar.rotation.set(-0.72, 0.15, -0.5);
    this.R.add(this.bar);
    const armL = new Mesh(armGeo(true), mat);
    armL.scale.set(0.56, 0.6, 1);
    this.L.add(armL);
    this.parts = [armR, this.bar, armL];
  }

  resize(aspect, fov) {
    this.camera.aspect = aspect;
    this.camera.fov = aspect < 1 ? 88 : 60;
    this.camera.updateProjectionMatrix();
    // keep hands inside narrow portrait screens
    this.root.scale.setScalar(aspect < 1 ? 0.9 : 0.92);
    this.root.userData.px = aspect < 1 ? -0.03 : 0;
  }

  // s: {move, bob, lookX, lookY, punch (0..1 or <0), crack, grab, dash, busted}
  update(dt, s) {
    this.t += dt;
    const R = this.R, L = this.L;
    this.swX = damp(this.swX, clamp(-s.lookX * 0.0009, -0.06, 0.06), 10, dt);
    this.swY = damp(this.swY, clamp(s.lookY * 0.0009, -0.06, 0.06), 10, dt);
    this.down = damp(this.down, s.busted ? 0.7 : 0, 6, dt);
    this.kick = damp(this.kick, s.dash ? 1 : 0, 14, dt);
    const m = s.move;
    const bx = Math.cos(s.bob) * 0.014 * m, by = -Math.abs(Math.sin(s.bob)) * 0.02 * m + Math.sin(this.t * 1.8) * 0.004;
    this.root.position.set((this.root.userData.px || 0) + this.swX + bx, this.swY + by - this.down, -0.12 + this.kick * 0.08);
    this.root.rotation.z = this.kick * 0.08;

    // right arm: idle pose / swing / crack jiggle
    let rx = 0.14, rz = 0, rpz = 0.0, rpx = 0, ry = 0;
    if (s.punch > 0) {
      // big diagonal crowbar slash: wind up high right, whip down-left across the screen, recover
      const t = 1 - s.punch; // 0..1
      const W = { rx: 0.9, rz: -0.45, ry: -0.3, px: 0.05 }, X = { rx: 0.0, rz: 0.7, ry: 0.62, px: -0.12 };
      const lerp = (a, b, k) => a + (b - a) * k;
      if (t < 0.22) { const k = t / 0.22; rx = lerp(0.14, W.rx, k); rz = W.rz * k; ry = W.ry * k; rpx = W.px * k; }
      else if (t < 0.5) { const k = (t - 0.22) / 0.28; rx = lerp(W.rx, X.rx, k); rz = lerp(W.rz, X.rz, k); ry = lerp(W.ry, X.ry, k); rpx = lerp(W.px, X.px, k); rpz = -0.08 * k; }
      else { const k = (t - 0.5) / 0.5; rx = lerp(X.rx, 0.14, k); rz = X.rz * (1 - k); ry = X.ry * (1 - k); rpx = X.px * (1 - k); rpz = -0.08 * (1 - k); }
    } else if (s.crack) {
      rx = 0.35 + Math.sin(this.t * 38) * 0.08;
      rz = Math.sin(this.t * 23) * 0.1;
      rpz = -0.06;
    }
    const fast = s.punch > 0 ? 45 : 14;
    R.rotation.x = damp(R.rotation.x, rx, fast, dt);
    R.rotation.z = damp(R.rotation.z, rz, s.punch > 0 ? 45 : 20, dt);
    R.rotation.y = damp(R.rotation.y, 0.16 + ry, fast, dt);
    R.position.x = damp(R.position.x, 0.23 + rpx, fast, dt);
    R.position.z = damp(R.position.z, rpz, s.punch > 0 ? 40 : 12, dt);

    // left hand slides in for grabs and while cracking
    const want = s.grab > 0 || s.crack ? 1 : 0;
    this.lIn = damp(this.lIn, want, want ? 18 : 8, dt);
    L.visible = this.lIn > 0.02;
    L.position.y = -0.27 - (1 - this.lIn) * 0.45;
    L.position.z = 0.02 - (s.grab > 0 ? Math.sin(Math.min(1, s.grab) * Math.PI) * 0.12 : 0);
    L.rotation.x = s.crack ? 0.25 : 0.1;
    L.rotation.z = s.crack ? Math.sin(this.t * 9) * 0.35 : 0;
  }

  render(renderer) {
    if (!this.visible) return;
    renderer.clearDepth();
    renderer.render(this.scene, this.camera);
  }
}
