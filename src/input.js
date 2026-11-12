// Keyboard + mouse (pointer-lock look) + touch (left: dynamic joystick, right: drag to look, buttons).
// Every keyboard/mouse action is remappable (two slots each), saved in localStorage.
export const ACTIONS = [
  { id: 'up', name: 'Move forward' },
  { id: 'down', name: 'Move back' },
  { id: 'left', name: 'Move left' },
  { id: 'right', name: 'Move right' },
  { id: 'dash', name: 'Dash (fast, but loud)' },
  { id: 'sneak', name: 'Sneak / crouch (toggle)' },
  { id: 'use', name: 'Use · grab · crack · hide · disguise (hold)' },
  { id: 'pick', name: 'Pick lock (tap in the green)' },
  { id: 'hit', name: 'Hit / knock out from behind' },
  { id: 'throw', name: 'Throw coin (hold to aim)' },
  { id: 'smoke', name: 'Smoke bomb' },
  { id: 'hint', name: 'Show hint' },
  { id: 'pause', name: 'Pause' },
  { id: 'restart', name: 'Restart heist' },
  { id: 'mute', name: 'Mute sound' },
  { id: 'skip', name: 'Skip tutorial' },
];
export const DEFAULT_BINDS = {
  up: ['KeyW', 'ArrowUp'], down: ['KeyS', 'ArrowDown'], left: ['KeyA', 'ArrowLeft'], right: ['KeyD', 'ArrowRight'],
  dash: ['Space', 'ShiftLeft'], sneak: ['KeyZ', 'ControlRight'], use: ['KeyE', 'KeyF'], pick: ['KeyE', 'KeyF'],
  hit: ['Mouse0', ''], throw: ['KeyQ', 'Mouse1'], smoke: ['KeyC', 'KeyX'], hint: ['KeyH', ''],
  pause: ['KeyP', ''], restart: ['KeyR', ''], mute: ['KeyM', ''], skip: ['KeyT', ''],
};
// 'use' and 'pick' never apply at the same moment (picking a lock is its own mode), so they may share keys
const SHARE = (a, b) => (a === 'use' && b === 'pick') || (a === 'pick' && b === 'use');
const MOVE = { up: 'u', down: 'd', left: 'l', right: 'r' };
const STORE = 'safehouseHeist.binds.v1';
export function keyLabel(code) {
  if (!code) return '—';
  if (code === 'Mouse0') return 'CLICK';
  if (code === 'Mouse1') return 'MIDDLE CLICK';
  if (code === 'Mouse2') return 'RIGHT CLICK';
  if (/^Mouse\d$/.test(code)) return 'MOUSE ' + code.slice(5);
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'NUM ' + code.slice(6);
  const M = { ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Space: 'SPACE', ShiftLeft: 'L-SHIFT', ShiftRight: 'R-SHIFT', ControlLeft: 'L-CTRL', ControlRight: 'R-CTRL',
    AltLeft: 'L-ALT', AltRight: 'R-ALT', Enter: 'ENTER', Tab: 'TAB', Backspace: 'BACKSPACE', CapsLock: 'CAPS', Backquote: '`', Minus: '-', Equal: '=', BracketLeft: '[', BracketRight: ']',
    Backslash: '\\', Semicolon: ';', Quote: "'", Comma: ',', Period: '.', Slash: '/', Delete: 'DEL', Insert: 'INS', Home: 'HOME', End: 'END', PageUp: 'PG UP', PageDown: 'PG DN' };
  return M[code] || code.toUpperCase();
}
const TOUCH_LOOK = 2.4; // touch px -> "mouse px" scale

export class Input {
  constructor(els) {
    this.k = {}; this.act = false; this.actP = false; this.dashP = false; this.pickP = false;
    this.lx = 0; this.ly = 0;
    this.joy = { id: -1, ox: 0, oy: 0, x: 0, y: 0 };
    this.look = { id: -1, x: 0, y: 0 };
    this.handlers = {};
    this.touch = (matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0) && !matchMedia('(pointer: fine)').matches;
    this.els = els;
    this.locked = false; this.lockFailed = false; this.active = false; this.dragLook = false;
    this.loadBinds();

    addEventListener('keydown', (e) => {
      if (this.capture) { e.preventDefault(); if (!e.repeat) this.finishCapture(e.code); return; }
      const acts = this.map[e.code];
      if (acts || e.code === 'Escape') e.preventDefault();
      this.setTouch(false);
      if (e.repeat) return;
      if (e.code === 'Escape') this.emit('pause');   // Esc always pauses (browsers reserve it for pointer lock)
      if (acts) for (const a of acts) this.press(a);
      this.emit('key', e.code);
    });
    addEventListener('keyup', (e) => { const acts = this.map[e.code]; if (acts) for (const a of acts) this.release(a); });
    addEventListener('blur', () => { this.k = {}; this.act = false; this.aimQ = false; this.joyEnd(); this.look.id = -1; });
    // capture a mouse button while rebinding (window-level so clicks on the controls screen work)
    addEventListener('mousedown', (e) => {
      if (!this.capture) return;
      e.preventDefault(); e.stopPropagation(); this.capGuard = performance.now();
      this.finishCapture('Mouse' + e.button);
    }, true);
    addEventListener('click', (e) => { if (performance.now() - (this.capGuard || 0) < 400) { e.preventDefault(); e.stopPropagation(); } }, true);

    // ---- mouse ----
    const cv = els.canvas;
    cv.addEventListener('mousedown', (e) => {
      if (!this.active) return;
      if (!this.locked && !this.lockFailed && !this.touch) { this.requestLock(); return; }
      const acts = this.map['Mouse' + e.button];
      if (acts) for (const x of acts) this.press(x);
      this.dragLook = true;
    });
    addEventListener('mouseup', (e) => { this.dragLook = false; const acts = this.map['Mouse' + e.button]; if (acts) for (const x of acts) this.release(x); });
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
  // ---- bindings ----
  loadBinds() {
    let b = null;
    try { b = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (_) {}
    this.binds = {};
    for (const a of ACTIONS) {
      const v = b && Array.isArray(b[a.id]) && b[a.id].length === 2 && b[a.id].every((c) => typeof c === 'string') ? b[a.id] : DEFAULT_BINDS[a.id];
      this.binds[a.id] = v.slice();
    }
    this.rebuild();
  }
  saveBinds() { try { localStorage.setItem(STORE, JSON.stringify(this.binds)); } catch (_) {} }
  rebuild() {
    this.map = {};
    for (const [a, codes] of Object.entries(this.binds)) for (const c of codes) if (c) (this.map[c] = this.map[c] || []).push(a);
    this.bindVer = (this.bindVer || 0) + 1;
  }
  resetBinds() { for (const a of ACTIONS) this.binds[a.id] = DEFAULT_BINDS[a.id].slice(); this.rebuild(); this.saveBinds(); }
  // assign code to action slot; a conflicting action gets this slot's old key (swap). Returns the swapped action id or null.
  setBind(action, slot, code) {
    const old = this.binds[action][slot];
    const swapped = [];
    if (code) for (const [a, codes] of Object.entries(this.binds)) {
      if (a === action || SHARE(a, action)) continue;
      const i = codes.indexOf(code);
      if (i >= 0) { codes[i] = old; swapped.push(a); }
    }
    const other = this.binds[action].indexOf(code);
    if (code && other >= 0 && other !== slot) this.binds[action][other] = old;
    this.binds[action][slot] = code;
    this.rebuild(); this.saveBinds();
    return swapped.length ? swapped : null;
  }
  captureNext(cb) { this.capture = cb; this.k = {}; this.act = false; }
  cancelCapture() { this.capture = null; }
  finishCapture(code) {
    const cb = this.capture; this.capture = null;
    if (cb) cb(code === 'Escape' ? null : code);
  }
  // display label of an action ('E', 'CLICK', 'WASD' for move)
  label(action) {
    if (action === 'move') {
      const k = ['up', 'left', 'down', 'right'].map((a) => keyLabel(this.binds[a][0] || this.binds[a][1]));
      return k.every((x) => x.length === 1) ? k.join('') : k.join(' ');
    }
    const b = this.binds[action]; if (!b) return action;
    return keyLabel(b[0] || b[1]);
  }
  // replace {action} tokens; html=true wraps them in <kbd>
  fmt(str, html) { return str.replace(/\{(\w+)\}/g, (m, a) => (a === 'move' || this.binds[a] ? (html ? '<kbd>' + this.label(a) + '</kbd>' : this.label(a)) : m)); }
  press(a) {
    if (MOVE[a]) { this.k[MOVE[a]] = 1; return; }
    switch (a) {
      case 'dash': this.dashP = true; break;
      case 'sneak': this.crouchP = true; break;
      case 'use': this.act = true; this.actP = true; break;
      case 'pick': this.pickP = true; break;
      case 'hit': this.atkP = true; break;
      case 'throw': this.aimQ = true; break;   // hold to aim (arc preview), release to throw
      case 'smoke': this.smokeP = true; break;
      case 'pause': this.emit('pause'); break;
      case 'restart': this.emit('restart'); break;
      case 'mute': this.emit('mute'); break;
      default: this.emit('action', a);
    }
  }
  release(a) {
    if (MOVE[a]) { this.k[MOVE[a]] = 0; return; }
    if (a === 'use') this.act = false;
    if (a === 'throw' && this.aimQ) { this.aimQ = false; this.throwP = true; }
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
  consumePick() { const v = this.pickP; this.pickP = false; return v; }
  consumeAct() { const v = this.actP; this.actP = false; return v; }
  consumeDash() { const v = this.dashP; this.dashP = false; return v; }
  consumeCrouch() { const v = this.crouchP; this.crouchP = false; return v; }
  consumeSmoke() { const v = this.smokeP; this.smokeP = false; return v; }
  consumeThrow() { const v = this.throwP; this.throwP = false; return v; }
  clear() { this.aimQ = false; this.atkP = false; this.actP = false; this.pickP = false; this.dashP = false; this.throwP = false; this.smokeP = false; this.lx = 0; this.ly = 0; }
}
