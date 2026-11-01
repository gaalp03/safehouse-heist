// Procedural canvas textures (generated at load: zero image downloads).
import { CanvasTexture, RepeatWrapping, SRGBColorSpace, ClampToEdgeWrapping } from 'three';
import { mulberry32 } from './util.js';

const R = mulberry32(99);
const rr = (a, b) => a + R() * (b - a);
const hsl = (h, s, l, a = 1) => `hsla(${h},${s}%,${l}%,${a})`;

function make(size, draw, repeat = true, srgb = true) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new CanvasTexture(c);
  if (srgb) t.colorSpace = SRGBColorSpace;
  t.wrapS = t.wrapT = repeat ? RepeatWrapping : ClampToEdgeWrapping;
  t.anisotropy = 4;
  return t;
}
function speckle(g, s, n, h, sat, l0, l1, a, size = 2) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = hsl(h, sat, rr(l0, l1), a);
    g.fillRect(R() * s, R() * s, size * rr(0.5, 1.5), size * rr(0.5, 1.5));
  }
}

const T = {};
export function textures() {
  if (T.wood) return T;
  // honey wood floor planks (2x2 world units)
  T.wood = make(256, (g, s) => {
    const rows = 8, rh = s / rows;
    for (let r = 0; r < rows; r++) {
      let x = -rr(0, 120);
      while (x < s) {
        const len = rr(90, 190), l = rr(52, 64), h = rr(26, 33);
        g.fillStyle = hsl(h, 55, l * 0.75);
        g.fillRect(x, r * rh, len, rh);
        for (let k = 0; k < 6; k++) {
          g.strokeStyle = hsl(h, 50, l * 0.62, 0.35);
          g.lineWidth = rr(0.6, 1.6);
          g.beginPath();
          const y = r * rh + rr(3, rh - 3);
          g.moveTo(x, y);
          g.bezierCurveTo(x + len * 0.3, y + rr(-3, 3), x + len * 0.7, y + rr(-3, 3), x + len, y + rr(-2, 2));
          g.stroke();
        }
        if (R() < 0.3) { g.fillStyle = hsl(h, 50, l * 0.55, 0.5); g.beginPath(); g.ellipse(x + rr(10, len - 10), r * rh + rh / 2, rr(3, 6), rr(1.5, 3), 0, 0, 7); g.fill(); }
        g.fillStyle = 'rgba(60,30,10,.55)';
        g.fillRect(x, r * rh, 2, rh);
        x += len;
      }
      g.fillStyle = 'rgba(60,30,10,.6)';
      g.fillRect(0, r * rh, s, 2);
      g.fillStyle = 'rgba(255,240,210,.12)';
      g.fillRect(0, r * rh + 2, s, 2);
    }
  });
  // light wood grain for furniture (tinted by vertex colors)
  T.woodfine = make(128, (g, s) => {
    g.fillStyle = '#e9dccb'; g.fillRect(0, 0, s, s);
    for (let k = 0; k < 40; k++) {
      g.strokeStyle = `rgba(120,80,40,${rr(0.06, 0.18)})`;
      g.lineWidth = rr(0.5, 2);
      g.beginPath(); const y = rr(0, s);
      g.moveTo(0, y); g.bezierCurveTo(s * 0.3, y + rr(-4, 4), s * 0.6, y + rr(-4, 4), s, y);
      g.stroke();
    }
  });
  T.carpet = make(128, (g, s) => {
    g.fillStyle = '#e4e4e4'; g.fillRect(0, 0, s, s);
    speckle(g, s, 2600, 0, 0, 70, 98, 0.5, 1.6);
    for (let y = 0; y < s; y += 8) { g.fillStyle = 'rgba(0,0,0,.035)'; g.fillRect(0, y, s, 3); }
  });
  T.tile = make(128, (g, s) => {
    g.fillStyle = '#aab5bd'; g.fillRect(0, 0, s, s);
    const n = 2, ts = s / n;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      g.fillStyle = hsl(200, 10, rr(93, 98)); g.fillRect(x * ts + 2, y * ts + 2, ts - 4, ts - 4);
      g.fillStyle = 'rgba(255,255,255,.6)'; g.fillRect(x * ts + 3, y * ts + 3, ts - 8, 3);
      g.fillStyle = 'rgba(0,0,0,.06)'; g.fillRect(x * ts + 3, y * ts + ts - 7, ts - 6, 3);
    }
  });
  T.wallpaper = make(128, (g, s) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, s, s);
    for (let x = 0; x < s; x += 32) { g.fillStyle = 'rgba(0,0,0,.045)'; g.fillRect(x, 0, 14, s); }
    for (let y = 8; y < s; y += 32) for (let x = 23; x < s; x += 32) {
      g.fillStyle = 'rgba(0,0,0,.08)';
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + 4, y + 6); g.lineTo(x, y + 12); g.lineTo(x - 4, y + 6); g.fill();
    }
    speckle(g, s, 500, 0, 0, 60, 100, 0.04, 2);
  });
  T.panel = make(128, (g, s) => {
    g.fillStyle = '#f0f0f0'; g.fillRect(0, 0, s, s);
    for (let x = 0; x < s; x += 64) {
      g.strokeStyle = 'rgba(0,0,0,.18)'; g.lineWidth = 3; g.strokeRect(x + 10, 14, 44, s - 28);
      g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 2; g.strokeRect(x + 13, 17, 44, s - 28);
    }
  });
  T.brick = make(256, (g, s) => {
    g.fillStyle = '#d8c6b0'; g.fillRect(0, 0, s, s);
    const bh = s / 8, bw = s / 4;
    for (let r = 0; r < 8; r++) for (let c = -1; c < 5; c++) {
      const x = c * bw + (r % 2 ? bw / 2 : 0);
      g.fillStyle = hsl(rr(10, 20), rr(35, 50), rr(42, 52));
      g.fillRect(x + 3, r * bh + 3, bw - 6, bh - 6);
      g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(x + 3, r * bh + 3, bw - 6, 4);
    }
    speckle(g, s, 900, 10, 30, 20, 60, 0.15, 2);
  });
  T.plaster = make(128, (g, s) => { g.fillStyle = '#f4f2ef'; g.fillRect(0, 0, s, s); speckle(g, s, 1500, 30, 10, 75, 100, 0.12, 2); });
  T.plain = make(64, (g, s) => { g.fillStyle = '#f2f2f2'; g.fillRect(0, 0, s, s); speckle(g, s, 500, 0, 0, 82, 100, 0.25, 2); });
  T.grass = make(128, (g, s) => {
    g.fillStyle = '#6dbb4a'; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 1400; i++) {
      g.strokeStyle = hsl(rr(85, 110), rr(45, 65), rr(32, 55), 0.7);
      g.lineWidth = 1; g.beginPath(); const x = R() * s, y = R() * s;
      g.moveTo(x, y); g.lineTo(x + rr(-2, 2), y - rr(3, 7)); g.stroke();
    }
  });
  T.asphalt = make(128, (g, s) => { g.fillStyle = '#4a4f5c'; g.fillRect(0, 0, s, s); speckle(g, s, 2200, 220, 8, 22, 60, 0.4, 1.6); });
  T.concrete = make(128, (g, s) => {
    g.fillStyle = '#cfd2d6'; g.fillRect(0, 0, s, s); speckle(g, s, 1400, 210, 6, 60, 95, 0.2, 2);
    g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(0, 0, s, 2); g.fillRect(0, 0, 2, s);
  });
  T.rug = make(256, (g, s) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#9a9a9a'; g.fillRect(10, 10, s - 20, s - 20);
    g.fillStyle = '#ffffff'; g.fillRect(22, 22, s - 44, s - 44);
    g.fillStyle = '#c8c8c8'; g.fillRect(30, 30, s - 60, s - 60);
    g.fillStyle = '#ffffff';
    for (let y = 46; y < s - 46; y += 32) for (let x = 46; x < s - 46; x += 32) {
      g.beginPath(); g.moveTo(x + 16, y + 2); g.lineTo(x + 30, y + 16); g.lineTo(x + 16, y + 30); g.lineTo(x + 2, y + 16); g.fill();
    }
    g.fillStyle = '#8a8a8a';
    for (let x = 4; x < s; x += 6) { g.fillRect(x, 0, 2, 8); g.fillRect(x, s - 8, 2, 8); }
    speckle(g, s, 1500, 0, 0, 50, 100, 0.12, 1.5);
  }, false);
  T.shadow = make(64, (g, s) => {
    const gr = g.createRadialGradient(s / 2, s / 2, 4, s / 2, s / 2, s / 2);
    gr.addColorStop(0, 'rgba(0,0,0,.55)'); gr.addColorStop(0.6, 'rgba(0,0,0,.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, s, s);
  }, false, false);
  T.glow = make(64, (g, s) => {
    const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, s, s);
  }, false, false);
  T.beam = make(64, (g, s) => {
    const gr = g.createLinearGradient(0, s, 0, 0);
    gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.7, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,.9)');
    g.fillStyle = gr; g.fillRect(0, 0, s, s);
  }, false, false);
  T.patch = make(64, (g, s) => {
    for (let i = 0; i < 12; i++) { g.fillStyle = `rgba(255,255,255,${0.06})`; const m = i * 2.5; g.fillRect(m, m, s - 2 * m, s - 2 * m); }
  }, false, false);
  return T;
}
