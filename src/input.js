// Keyboard + mouse (pointer-lock look) + touch (left: dynamic joystick, right: drag to look, buttons).
const MOVE = {
  KeyW: 'u', ArrowUp: 'u', KeyS: 'd', ArrowDown: 'd', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r',
};
const GAME_KEYS = new Set([...Object.keys(MOVE), 'Space', 'ShiftLeft', 'ShiftRight', 'KeyE', 'KeyF', 'Enter']);
const TOUCH_LOOK = 2.4; // touch px -> "mouse px" scale

export class Input {
  constructor(els) {
    this.k = {}; this.act = false; this.actP = false; this.dashP = false;
    this.lx = 0; this.ly = 0;
    this.joy = { id: -1, ox: 0, oy: 0, x: 0, y: 0 };
    this.look = { id: -1, x: 0, y: 0 };
    this.handlers = {};
    this.touch = (matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0) && !matchMedia('(pointer: fine)').matches;
    this.els = els;
    this.locked = false; this.lockFailed = false; this.active = false; this.dragLook = false;

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
      if (e.code === 'KeyQ' || e.code === 'KeyG') this.aimQ = true;   // hold to aim (arc preview), release to throw
      if (e.code === 'KeyC' || e.code === 'KeyX') this.smokeP = true;
      if (e.code === 'KeyZ' || e.code === 'ControlRight') this.crouchP = true;
      this.emit('key', e.code);
    });
    addEventListener('keyup', (e) => {
      if (MOVE[e.code]) this.k[MOVE[e.code]] = 0;
      if (e.code === 'KeyE' || e.code === 'KeyF' || e.code === 'Enter') this.act = false;
      if ((e.code === 'KeyQ' || e.code === 'KeyG') && this.aimQ) { this.aimQ = false; this.throwP = true; }
    });
    addEventListener('blur', () => { this.k = {}; this.act = false; this.aimQ = false; this.joyEnd(); this.look.id = -1; });

    // ---- mouse ----
    const cv = els.canvas;
    cv.addEventListener('mousedown', (e) => {
      if (!this.active) return;
      if (!this.locked && !this.lockFailed && !this.touch) { this.requestLock(); return; }
      if (e.button === 0) this.atkP = true;
      if (e.button === 2) this.dashP = true;
      if (e.button === 1) this.throwP = true;
      this.dragLook = true;
    });
    addEventListener('mouseup', () => { this.dragLook = false; });
    addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('mousemove', (e) => {
      if (!this.active) return;
      // pointer lock = free look; fallback (lock unavailable) = drag to look
      if (this.locked || (this.lockFailed && this.dragLook)) {
        // browsers often report one huge bogus delta right after pointer lock (or a cursor warp): drop those
        const mx = e.movementX || 0, my = e.movementY || 0;
        if (performance.now() - (this.lockT || 0) < 150 || Math.abs(mx) > 260 || Math.abs(my) > 260) return;
        this.lx += mx; this.ly += my;
      }
    });
    addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' && (e.movementX || e.movementY)) this.setTouch(false); });
    addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') this.setTouch(true); }, true);
    document.addEventListener('pointerlockchange', () => {
      const was = this.locked;
      this.locked = document.pointerLockElement === cv;
      if (this.locked && !was) { this.lockT = performance.now(); this.lx = 0; this.ly = 0; this.emit('lock'); }
      if (was && !this.locked) this.emit('unlock');
    });
    document.addEventListener('pointerlockerror', () => { this.lockFailed = true; });

    // ---- touch: joystick (left half) ----
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

    // ---- touch: look (right half) ----
    const lz = els.lookzone;
    lz.addEventListener('pointerdown', (e) => {
      if (this.look.id !== -1) return;
      e.preventDefault();
      this.look.id = e.pointerId; this.look.x = e.clientX; this.look.y = e.clientY;
      try { lz.setPointerCapture(e.pointerId); } catch (_) {}
    });
    lz.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.look.id) return;
      this.lx += (e.clientX - this.look.x) * TOUCH_LOOK;
      this.ly += (e.clientY - this.look.y) * TOUCH_LOOK;
      this.look.x = e.clientX; this.look.y = e.clientY;
    });
    const lend = (e) => { if (e.pointerId === this.look.id) this.look.id = -1; };
    lz.addEventListener('pointerup', lend);
    lz.addEventListener('pointercancel', lend);

    const btn = (el, down, up) => {
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); el.classList.add('down'); down(); });
      const u = (cancel) => { el.classList.remove('down'); up && up(cancel); };
      el.addEventListener('pointerup', () => u()); el.addEventListener('pointercancel', () => u(true)); el.addEventListener('pointerleave', () => u());
    };
    btn(els.bAct, () => { this.act = true; this.actP = true; }, () => { this.act = false; });
    if (els.bHit) btn(els.bHit, () => { this.atkP = true; });
    btn(els.bDash, () => { this.dashP = true; });
    btn(els.bThrow, () => { this.aimQ = true; }, (cancel) => { if (this.aimQ) { this.aimQ = false; if (!cancel) this.throwP = true; } });
    btn(els.bSmoke, () => { this.smokeP = true; });
    btn(els.bSneak, () => { this.crouchP = true; });
  }
  requestLock() {
    if (this.touch || this.locked) return;
    const cv = this.els.canvas;
    if (!cv.requestPointerLock) { this.lockFailed = true; return; }
    try {
      const r = cv.requestPointerLock();
      if (r && r.catch) r.catch(() => { this.lockFailed = true; });
    } catch (_) { this.lockFailed = true; }
  }
  exitLock() { if (document.pointerLockElement) try { document.exitPointerLock(); } catch (_) {} }
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
  consumeLook(out) { out.x = this.lx; out.y = this.ly; this.lx = 0; this.ly = 0; return out; }
  consumeAtk() { const v = this.atkP; this.atkP = false; return v; }
  consumeAct() { const v = this.actP; this.actP = false; return v; }
  consumeDash() { const v = this.dashP; this.dashP = false; return v; }
  consumeCrouch() { const v = this.crouchP; this.crouchP = false; return v; }
  consumeSmoke() { const v = this.smokeP; this.smokeP = false; return v; }
  consumeThrow() { const v = this.throwP; this.throwP = false; return v; }
  clear() { this.aimQ = false; this.atkP = false; this.actP = false; this.dashP = false; this.throwP = false; this.smokeP = false; this.lx = 0; this.ly = 0; }
}
