// Procedural low-poly geometry builder: merges many vertex-colored boxes into ONE BufferGeometry
// so a whole level renders in a single draw call.
import { BufferGeometry, BufferAttribute, Color } from 'three';

// faces: +x, -x, +y, -y, +z, -z  (corners CCW seen from outside)
const F = [
  [[1, 0, 0], [[1, -1, 1], [1, -1, -1], [1, 1, -1], [1, 1, 1]]],
  [[-1, 0, 0], [[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]]],
  [[0, 1, 0], [[-1, 1, 1], [1, 1, 1], [1, 1, -1], [-1, 1, -1]]],
  [[0, -1, 0], [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]]],
  [[0, 0, 1], [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]],
  [[0, 0, -1], [[1, -1, -1], [-1, -1, -1], [-1, 1, -1], [1, 1, -1]]],
];
export const PX = 1, NX = 2, PY = 4, NY = 8, PZ = 16, NZ = 32, ALL = 63, NOBOT = 63 & ~8;
const _c = new Color();

export class GeoBuilder {
  constructor() { this.p = []; this.n = []; this.c = []; this.i = []; }

  // Box with center x/z and bottom y. o: {faces, top, fc:[6 colors], ry}
  box(cx, y0, cz, w, h, d, color, o = {}) {
    const faces = o.faces ?? NOBOT;
    const hw = w / 2, hh = h / 2, hd = d / 2, cy = y0 + hh;
    const ry = o.ry || 0, cs = Math.cos(ry), sn = Math.sin(ry);
    for (let f = 0; f < 6; f++) {
      if (!(faces & (1 << f))) continue;
      const col = (o.fc && o.fc[f] != null) ? o.fc[f] : (f === 2 && o.top != null ? o.top : color);
      _c.setHex(col);
      const [nn, vs] = F[f];
      const base = this.p.length / 3;
      const nx = nn[0] * cs + nn[2] * sn, nz = -nn[0] * sn + nn[2] * cs;
      for (const v of vs) {
        const lx = v[0] * hw, lz = v[2] * hd;
        this.p.push(cx + lx * cs + lz * sn, cy + v[1] * hh, cz - lx * sn + lz * cs);
        this.n.push(nx, nn[1], nz);
        this.c.push(_c.r, _c.g, _c.b);
      }
      this.i.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
    return this;
  }

  // Append any three.js geometry (translated) with a flat color.
  add(geom, color, ox = 0, oy = 0, oz = 0) {
    const g = geom.index ? geom.toNonIndexed() : geom;
    const pa = g.attributes.position.array, na = g.attributes.normal.array;
    _c.setHex(color);
    const base = this.p.length / 3;
    for (let k = 0; k < pa.length; k += 3) {
      this.p.push(pa[k] + ox, pa[k + 1] + oy, pa[k + 2] + oz);
      this.n.push(na[k], na[k + 1], na[k + 2]);
      this.c.push(_c.r, _c.g, _c.b);
    }
    for (let k = 0; k < pa.length / 3; k++) this.i.push(base + k);
    return this;
  }

  build() {
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(this.p), 3));
    g.setAttribute('normal', new BufferAttribute(new Float32Array(this.n), 3));
    g.setAttribute('color', new BufferAttribute(new Float32Array(this.c), 3));
    const n = this.p.length / 3;
    g.setIndex(new BufferAttribute(n > 65535 ? new Uint32Array(this.i) : new Uint16Array(this.i), 1));
    g.computeBoundingSphere();
    return g;
  }
}
