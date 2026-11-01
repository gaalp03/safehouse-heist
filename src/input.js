// Keyboard + mouse + touch (dynamic virtual joystick + buttons). Auto-switches mode on use.
const MOVE = {
  KeyW: 'u', ArrowUp: 'u', KeyS: 'd', ArrowDown: 'd', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r',
};
const GAME_KEYS = new Set([...Object.keys(MOVE), 'Space', 'ShiftLeft', 'ShiftRight', 'KeyE', 'KeyF', 'Enter']);

export class Input {
  constructor(els) {
    this.k = {}; this.act = false; this.actP = false; this.dashP = false;
    this.joy = { id: -1, ox: 0, oy: 0, x: 0, y: 0 };
    this.handlers = {};
    this.touch = (matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0) && !matchMedia('(pointer: fine)').matches;
    this.els = els;

    addEventListener('keydown', (e) => {
      if (GAME_KEYS.has(e.code)) e.preventDefault();
      this.setTouch(false);
      if (e.repeat) return;
      if (MOVE[e.code]) this.k[MOVE[e.code]] = 1;
      if (e.code === 'Space' || e.code.startsWith('Shift')) this.dashP = true;
      if (e.code === 'KeyE' || e.code === 'KeyF' || e.code === 'Enter') { this.act = true; this.actP = true; }
      if (e.code === 'Escape' || e.code === 'KeyP') this.emit('pause');
      if (e.code === 'KeyR') this.emit('restart');
      if (e.code === 'KeyM') this.emit('mute');
      this.emit('key', e.code);
    });
    addEventListener('keyup', (e) => {
      if (MOVE[e.code]) this.k[MOVE[e.code]] = 0;
      if (e.code === 'KeyE' || e.code === 'KeyF' || e.code === 'Enter') this.act = false;
    });
    addEventListener('blur', () => { this.k = {}; this.act = false; this.joyEnd(); });

    const cv = els.canvas;
    cv.addEventListener('mousedown', (e) => {
      if (e.button === 0) { this.act = true; this.actP = true; }
      if (e.button === 2) this.dashP = true;
    });
    addEventListener('mouseup', (e) => { if (e.button === 0) this.act = false; });
    addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' && (e.movementX || e.movementY)) this.setTouch(false); });
    addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') this.setTouch(true); }, true);

    // joystick zone (left part of the screen)
    const z = els.joyzone;
    z.addEventListener('pointerdown', (e) => {
      if (this.joy.id !== -1) return;
      e.preventDefault();
      this.joy.id = e.pointerId; this.joy.ox = e.clientX; this.joy.oy = e.clientY; this.joy.x = 0; this.joy.y = 0;
      try { z.setPointerCapture(e.pointerId); } catch (_) {}
      els.joy.style.display = 'block';
      els.joy.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      els.knob.style.transform = 'translate(-50%,-50%)';
    });
    z.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.joy.id) return;
      const R = 56;
      let dx = e.clientX - this.joy.ox, dy = e.clientY - this.joy.oy;
      const d = Math.hypot(dx, dy);
      if (d > R) {
        // drag the base along so it never feels stuck
        this.joy.ox += (dx / d) * (d - R); this.joy.oy += (dy / d) * (d - R);
        els.joy.style.transform = `translate(${this.joy.ox}px,${this.joy.oy}px)`;
        dx = (dx / d) * R; dy = (dy / d) * R;
      }
      this.joy.x = dx / R; this.joy.y = dy / R;
      els.knob.style.transform = `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px))`;
    });
    const end = (e) => { if (e.pointerId === this.joy.id) this.joyEnd(); };
    z.addEventListener('pointerup', end);
    z.addEventListener('pointercancel', end);

    const btn = (el, down, up) => {
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); el.classList.add('down'); down(); });
      const u = (e) => { el.classList.remove('down'); up && up(); };
      el.addEventListener('pointerup', u); el.addEventListener('pointercancel', u); el.addEventListener('pointerleave', u);
    };
    btn(els.bAct, () => { this.act = true; this.actP = true; }, () => { this.act = false; });
    btn(els.bDash, () => { this.dashP = true; });
  }
  joyEnd() {
    this.joy.id = -1; this.joy.x = 0; this.joy.y = 0;
    if (this.els.joy) this.els.joy.style.display = 'none';
  }
  setTouch(t) {
    if (this.touch === t) return;
    this.touch = t;
    this.emit('mode', t);
  }
  on(n, f) { this.handlers[n] = f; }
  emit(n, a) { this.handlers[n] && this.handlers[n](a); }

  move(out) {
    let x = (this.k.r || 0) - (this.k.l || 0), y = (this.k.d || 0) - (this.k.u || 0);
    if (x || y) { const d = Math.hypot(x, y); x /= d; y /= d; }
    else if (this.joy.id !== -1) {
      const m = Math.hypot(this.joy.x, this.joy.y);
      if (m > 0.15) { const k = Math.min(1, (m - 0.15) / 0.65) / m; x = this.joy.x * k; y = this.joy.y * k; }
    }
    out.x = x; out.y = y;
    return out;
  }
  consumeAct() { const v = this.actP; this.actP = false; return v; }
  consumeDash() { const v = this.dashP; this.dashP = false; return v; }
  clear() { this.actP = false; this.dashP = false; }
}
