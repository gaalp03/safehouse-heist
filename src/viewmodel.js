// First-person hands + crowbar, rendered in a 2nd pass (depth cleared) so they never clip into walls.
import { Scene, PerspectiveCamera, Group, Mesh, MeshLambertMaterial, HemisphereLight, DirectionalLight } from 'three';
import { GeoBuilder } from './geo.js';
import { damp, clamp } from './util.js';

const SLEEVE = 0x2fa89a, SLEEVE2 = 0x268c80, CUFF = 0x1f6f66, GLOVE = 0x2a2c3d, GLOVE2 = 0x3a3d52;

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

    const armGeo = (left) => {
      const g = new GeoBuilder();
      // hoodie sleeve with folds
      g.box(0, -0.075, -0.24, 0.14, 0.14, 0.26, SLEEVE, { faces: 63 });
      g.box(0, -0.082, -0.24, 0.152, 0.152, 0.05, SLEEVE2, { faces: 63 });
      g.box(0, -0.08, -0.36, 0.148, 0.148, 0.1, SLEEVE, { faces: 63 });
      g.box(0, -0.082, -0.44, 0.155, 0.155, 0.07, CUFF, { faces: 63 });
      g.box(0, -0.082, -0.448, 0.158, 0.02, 0.05, 0xf2b134, { faces: 63 });
      if (left) {
        g.box(0, -0.065, -0.5, 0.12, 0.13, 0.05, GLOVE, { faces: 63 });
        g.box(0, -0.0, -0.5, 0.05, 0.03, 0.055, 0xd9b45a, { faces: 63 });
        g.box(0, -0.07, -0.57, 0.15, 0.06, 0.13, GLOVE, { faces: 63, top: GLOVE2 });
        for (let k = 0; k < 4; k++) g.box(-0.055 + k * 0.037, -0.072, -0.67, 0.032, 0.05, 0.09, GLOVE, { faces: 63, top: GLOVE2 });
        g.box(0.09, -0.07, -0.56, 0.045, 0.05, 0.08, GLOVE, { faces: 63, ry: -0.5 });
      } else {
        g.box(0, -0.07, -0.56, 0.13, 0.12, 0.14, GLOVE, { faces: 63, top: GLOVE2 });
        for (let k = 0; k < 4; k++) g.box(-0.045 + k * 0.03, -0.01, -0.6, 0.027, 0.03, 0.05, GLOVE2, { faces: 63 });
        g.box(-0.07, -0.04, -0.55, 0.04, 0.05, 0.08, GLOVE, { faces: 63 });
      }
      return g.build();
    };
    // right arm + crowbar
    this.R = new Group();
    this.R.position.set(0.28, -0.29, 0.0);
    this.R.rotation.y = 0.16;
    this.root.add(this.R);
    this.R.add(new Mesh(armGeo(false), mat));
    const bar = new GeoBuilder();
    const red = 0xd8333a, steel = 0xb8c2d0, dark = 0x7a8496;
    bar.box(0, -0.2, 0, 0.034, 0.08, 0.034, steel, { faces: 63 });
    bar.box(0, -0.235, 0.012, 0.03, 0.04, 0.02, dark, { faces: 63 });
    bar.box(0, -0.12, 0, 0.042, 0.42, 0.042, red, { faces: 63 });
    bar.box(0, -0.1, 0, 0.046, 0.12, 0.046, 0x22242f, { faces: 63 });
    bar.box(0, 0.3, 0, 0.038, 0.07, 0.038, steel, { faces: 63 });
    bar.box(0, 0.36, -0.035, 0.036, 0.036, 0.1, steel, { faces: 63, top: 0xdfe6ef });
    bar.box(0, 0.33, -0.095, 0.034, 0.05, 0.03, steel, { faces: 63 });
    bar.box(0, 0.305, -0.1, 0.03, 0.03, 0.022, steel, { faces: 63 });
    bar.box(0.02, -0.05, 0.022, 0.006, 0.3, 0.002, 0xff8a8a, { faces: 16 });
    this.bar = new Mesh(bar.build(), mat);
    this.bar.position.set(0, -0.02, -0.57);
    this.bar.rotation.set(-0.35, 0, -0.25);
    this.R.add(this.bar);
    // left hand (appears when grabbing / cracking)
    this.L = new Group();
    this.L.position.set(-0.28, -0.29, 0.0);
    this.L.rotation.y = -0.16;
    this.root.add(this.L);
    this.L.add(new Mesh(armGeo(true), mat));

    this.swX = 0; this.swY = 0; this.down = 0; this.lIn = 0; this.t = 0; this.kick = 0;
    this.visible = true;
  }

  resize(aspect, fov) {
    this.camera.aspect = aspect;
    this.camera.fov = aspect < 1 ? 70 : 60;
    this.camera.updateProjectionMatrix();
    // keep hands inside narrow portrait screens
    this.root.scale.setScalar(aspect < 1 ? 0.6 : 0.92);
    this.root.userData.px = aspect < 1 ? 0.01 : 0;
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
    let rx = 0.14, rz = 0, rpz = 0.0;
    if (s.punch > 0) {
      const t = 1 - s.punch; // 0..1
      if (t < 0.3) rx = (t / 0.3) * 0.9;
      else if (t < 0.55) rx = 0.9 - ((t - 0.3) / 0.25) * 1.9;
      else rx = -1.0 + ((t - 0.55) / 0.45) * 1.14;
      rz = -rx * 0.3;
    } else if (s.crack) {
      rx = 0.35 + Math.sin(this.t * 38) * 0.08;
      rz = Math.sin(this.t * 23) * 0.1;
      rpz = -0.06;
    }
    R.rotation.x = damp(R.rotation.x, rx, s.punch > 0 ? 40 : 14, dt);
    R.rotation.z = damp(R.rotation.z, rz, 20, dt);
    R.position.z = damp(R.position.z, rpz, 12, dt);

    // left hand slides in for grabs and while cracking
    const want = s.grab > 0 || s.crack ? 1 : 0;
    this.lIn = damp(this.lIn, want, want ? 18 : 8, dt);
    L.visible = this.lIn > 0.02;
    L.position.y = -0.29 - (1 - this.lIn) * 0.45;
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
