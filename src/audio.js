// All sound is synthesized with WebAudio at runtime: zero audio files to download.
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

// music themes: [root offset from tonic, major?] x4 chords; bass grooves; one theme per level
const PROGS = [
  [[0, 0], [-4, 1], [3, 1], [-2, 1]],   // i  VI III VII
  [[0, 0], [5, 0], [7, 0], [0, 0]],     // i  iv v  i
  [[0, 0], [-2, 1], [-4, 1], [-5, 1]],  // i  VII VI V (andalusian)
  [[0, 0], [-4, 1], [5, 0], [7, 1]],    // i  VI iv V
];
const BASS = [
  [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
];
const THEMES = [
  { prog: 0, tr: 0, bass: 0, k: 1 }, { prog: 1, tr: 2, bass: 1, k: 1.02 }, { prog: 2, tr: -3, bass: 2, k: 0.96 }, { prog: 3, tr: -5, bass: 0, k: 0.94 },
  { prog: 0, tr: 3, bass: 2, k: 1.08 }, { prog: 2, tr: 1, bass: 1, k: 1 }, { prog: 1, tr: -2, bass: 2, k: 1.1 }, { prog: 3, tr: 4, bass: 1, k: 1 },
];
export class Audio {
  constructor() {
    this.ctx = null; this.muted = false; this.adMuted = false; this.hidden = false;
    this.tension = 0; this.step = 0; this.nextT = 0; this.musicOn = true;
  }
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const ctx = (this.ctx = new AC());
      this.master = ctx.createGain();
      const comp = ctx.createDynamicsCompressor();
      this.lp = ctx.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 20000;
      this.master.connect(this.lp).connect(comp).connect(ctx.destination);
      this.sfx = ctx.createGain(); this.sfx.gain.value = 0.8 * (this.sfxVol ?? 1); this.sfx.connect(this.master);
      this.mus = ctx.createGain(); this.mus.gain.value = 0.32 * (this.musVol ?? 1); this.mus.connect(this.master);
      const len = ctx.sampleRate;
      this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.apply();
      this.decodeSamples();
      this.timer = setInterval(() => this.sched(), 40);
    }
    if (this.ctx.state === 'suspended' && !this.hidden && !this.adMuted) this.ctx.resume();
  }
  apply() {
    if (!this.ctx) return;
    const v = this.muted || this.adMuted ? 0 : 1;
    this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.03);
  }
  setVolumes(music, sfx) {
    this.musVol = music; this.sfxVol = sfx;
    if (this.mus) { this.mus.gain.value = 0.32 * music; this.sfx.gain.value = 0.8 * sfx; }
  }
  setMuffle(on) {
    if (!this.lp || this.muffled === on) return;
    this.muffled = on;
    this.lp.frequency.setTargetAtTime(on ? 900 : 20000, this.ctx.currentTime, on ? 0.03 : 0.15);
  }
  setMuted(m) { this.muted = m; this.apply(); }
  setAdMuted(m) {
    this.adMuted = m; this.apply();
    if (!this.ctx) return;
    if (m) this.ctx.suspend(); else if (!this.hidden) this.ctx.resume();
  }
  setHidden(h) {
    this.hidden = h;
    if (!this.ctx) return;
    if (h) this.ctx.suspend(); else if (!this.adMuted) this.ctx.resume();
  }

  tone(f, dur, o = {}) {
    const ctx = this.ctx, t = ctx.currentTime + (o.delay || 0);
    const osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = o.type || 'square';
    osc.frequency.setValueAtTime(f, t);
    if (o.slide) osc.frequency.exponentialRampToValueAtTime(o.slide, t + dur);
    const v = o.vol ?? 0.15;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(v, t + (o.attack || 0.006));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(o.dest || this.sfx);
    osc.start(t); osc.stop(t + dur + 0.05);
  }
  noise(dur, o = {}) {
    const ctx = this.ctx, t = ctx.currentTime + (o.delay || 0);
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = o.type || 'bandpass';
    f.frequency.setValueAtTime(o.freq || 1000, t);
    if (o.slide) f.frequency.exponentialRampToValueAtTime(o.slide, t + dur);
    f.Q.value = o.q ?? 1;
    const g = ctx.createGain(), v = o.vol ?? 0.2;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(v, t + (o.attack || 0.005));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(o.dest || this.sfx);
    src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
  }

  // ---- recorded sound effects (CC0, see CREDITS.md): fetched in the background after the menu is up ----
  loadSamples(base = './sfx/') {
    if (this.raw) return;
    this.raw = {}; this.bufs = {};
    fetch(base + 'manifest.json').then((r) => r.json()).then((man) => {
      this.man = man;
      const files = Object.values(man).flat();
      // small parallel batches so the network stays free for gameplay
      const next = () => { const f = files.shift(); if (!f) return; fetch(base + f).then((r) => r.arrayBuffer()).then((ab) => { this.raw[f] = ab; this.decodeSamples(); }).catch(() => {}).finally(next); };
      for (let i = 0; i < 4; i++) next();
    }).catch(() => {});
  }
  decodeSamples() {
    if (!this.ctx || !this.raw) return;
    for (const f of Object.keys(this.raw)) {
      const ab = this.raw[f]; delete this.raw[f];
      try { this.ctx.decodeAudioData(ab, (b) => { this.bufs[f] = b; }, () => {}); } catch (_) {}
    }
  }
  // play a sample by logical name (random variant); returns false if not loaded so the caller can fall back
  sample(name, o = {}) {
    const list = this.man && this.man[name]; if (!list) return false;
    const ready = list.filter((f) => this.bufs[f]); if (!ready.length) return false;
    const ctx = this.ctx, src = ctx.createBufferSource(), g = ctx.createGain();
    src.buffer = this.bufs[ready[(Math.random() * ready.length) | 0]];
    src.playbackRate.value = (o.rate || 1) * (o.jitter ? 1 + (Math.random() - 0.5) * o.jitter : 1);
    g.gain.value = o.vol ?? 0.6;
    let out = g;
    if (o.pan) { const pn = ctx.createStereoPanner(); pn.pan.value = o.pan; g.connect(pn); out = pn; }
    src.connect(g); out.connect(o.dest || this.sfx);
    src.start(ctx.currentTime + (o.delay || 0));
    return true;
  }

  play(name, p = 0) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const S = (n, o) => this.sample(n, o);
    const semi = (k) => Math.pow(2, k / 12);
    const REC = {
      dash: () => S('dash', { vol: 0.55, jitter: 0.1 }),
      pick: () => S('pick', { vol: 0.5, rate: semi(Math.min(p, 12) * 0.6), jitter: 0.06 }),
      gold: () => S('gold', { vol: 0.6 }), jewel: () => S('jewel', { vol: 0.55 }), art: () => S('art', { vol: 0.55 }),
      ko: () => S('ko', { vol: 0.8, jitter: 0.12 }), alert: () => S('alert', { vol: 0.55 }), lost: () => S('lost', { vol: 0.45 }),
      tick: () => S('tick', { vol: 0.35, rate: 1 + Math.min(1, p) * 0.35, jitter: 0.08 }),
      safe: () => S('safe', { vol: 0.7 }) && (S('coins', { vol: 0.55, delay: 0.25 }), true),
      win: () => S('win', { vol: 0.6 }), bust: () => S('bust', { vol: 0.6 }), alarm: () => S('alarm', { vol: 0.5 }),
      thunder: () => S('thunder', { vol: 0.8, jitter: 0.1 }), vent: () => S('vent', { vol: 0.6 }), clank: () => S('clank', { vol: 0.6, jitter: 0.1 }),
      click: () => S('click', { vol: 0.5 }), star: () => S('star', { vol: 0.5, rate: semi([0, 4, 7][Math.min(2, p | 0)] || 0) }),
      throw: () => S('throw', { vol: 0.5, jitter: 0.1 }), clink: () => S('clink', { vol: 0.5 * Math.max(0.3, p || 1), jitter: 0.1 }),
      disarm: () => S('disarm', { vol: 0.5 }), contract: () => S('contract', { vol: 0.55 }), creak: () => S('creak', { vol: 0.5, jitter: 0.1 }),
      zap: () => S('zap', { vol: 0.55 }), powerdown: () => S('powerdown', { vol: 0.6 }), smoke: () => S('smoke', { vol: 0.6 }),
      pin: () => S('pin', { vol: 0.6, rate: 1 + p * 0.12 }), slip: () => S('slip', { vol: 0.6 }), glass: () => S('glass', { vol: 0.75, jitter: 0.1 }),
      radio: () => S('radio', { vol: 0.35 }), radioOk: () => S('radioOk', { vol: 0.5 }),
      jackpot: () => S('jackpot', { vol: 0.6 }) && (S('coins', { vol: 0.5, delay: 0.3 }), true),
      nope: () => S('nope', { vol: 0.45 }), combo: () => S('combo', { vol: 0.4, rate: semi(Math.min(p, 12)) }),
      tvon: () => S('tvon', { vol: 0.5 }), unlock: () => S('unlock', { vol: 0.55 }),
    };
    if (REC[name] && REC[name]()) return;
    const T = (f, d, o) => this.tone(f, d, o), N = (d, o) => this.noise(d, o);
    switch (name) {
      case 'step': N(0.05, { vol: 0.05, freq: 500, type: 'lowpass' }); break;
      case 'dash':
        N(0.28, { vol: 0.3, freq: 500, slide: 3000, q: 2 });
        T(200, 0.15, { type: 'sine', slide: 420, vol: 0.12 }); break;
      case 'pick': {
        const f = 880 * Math.pow(2, Math.min(p, 14) / 12);
        T(f, 0.07, { vol: 0.1 }); T(f * 1.5, 0.12, { vol: 0.09, delay: 0.05 }); break;
      }
      case 'gold':
        [1046, 1318, 1568, 2093].forEach((f, i) => T(f, 0.18, { type: 'triangle', vol: 0.14, delay: i * 0.045 }));
        N(0.3, { vol: 0.06, freq: 8000, type: 'highpass', delay: 0.1 }); break;
      case 'jewel':
        [1568, 2093, 2637].forEach((f, i) => T(f, 0.25, { type: 'sine', vol: 0.16, delay: i * 0.06 })); break;
      case 'art':
        [523, 659, 784, 1046, 1318].forEach((f, i) => T(f, 0.2, { type: 'triangle', vol: 0.13, delay: i * 0.05 })); break;
      case 'ko':
        T(170, 0.28, { type: 'sine', slide: 45, vol: 0.55 });
        N(0.14, { vol: 0.35, freq: 900 });
        T(560, 0.12, { slide: 260, vol: 0.12 });
        T(1800, 0.25, { type: 'triangle', slide: 2400, vol: 0.06, delay: 0.12 }); break;
      case 'huh': T(400, 0.2, { type: 'triangle', slide: 640, vol: 0.16 }); break;
      case 'alert':
        T(880, 0.09, { vol: 0.16 }); T(1320, 0.16, { vol: 0.16, delay: 0.1 }); break;
      case 'lost': T(620, 0.32, { type: 'triangle', slide: 300, vol: 0.13 }); break;
      case 'tick':
        N(0.03, { vol: 0.22, freq: 4000, type: 'highpass' });
        T(1500 + p * 600, 0.04, { vol: 0.05 }); break;
      case 'safe':
        T(110, 0.45, { type: 'sine', slide: 40, vol: 0.6 });
        N(0.45, { vol: 0.45, freq: 1200, type: 'lowpass' });
        [523, 659, 784, 1046, 1318, 1568].forEach((f, i) => T(f, 0.16, { vol: 0.09, delay: 0.1 + i * 0.05 }));
        for (let i = 0; i < 12; i++) T(2000 + Math.random() * 2000, 0.06, { type: 'triangle', vol: 0.06, delay: 0.3 + i * 0.05 });
        break;
      case 'win':
        [523, 659, 784, 1046].forEach((f, i) => T(f, 0.22, { vol: 0.12, delay: i * 0.1 }));
        [523, 659, 784].forEach((f) => T(f * 2, 0.6, { type: 'triangle', vol: 0.1, delay: 0.42 })); break;
      case 'bust':
        T(392, 0.3, { type: 'sawtooth', slide: 370, vol: 0.12 });
        T(370, 0.3, { type: 'sawtooth', slide: 349, vol: 0.12, delay: 0.3 });
        T(349, 0.7, { type: 'sawtooth', slide: 250, vol: 0.12, delay: 0.6 });
        for (let i = 0; i < 4; i++) T(i % 2 ? 660 : 880, 0.22, { type: 'square', vol: 0.05, delay: i * 0.22 });
        break;
      case 'alarm':
        for (let i = 0; i < 6; i++) T(i % 2 ? 700 : 950, 0.15, { vol: 0.09, delay: i * 0.15 }); break;
      case 'wake': T(300, 0.25, { type: 'sawtooth', slide: 520, vol: 0.1 }); T(520, 0.2, { type: 'sawtooth', slide: 700, vol: 0.08, delay: 0.22 }); break;
      case 'thunder':
        N(0.25, { vol: 0.5, freq: 900, type: 'lowpass', q: 0.5 });
        N(2.8, { vol: 0.55, freq: 220, slide: 60, type: 'lowpass', q: 0.7, attack: 0.08 });
        N(1.6, { vol: 0.3, freq: 120, type: 'lowpass', delay: 0.5, attack: 0.3 }); break;
      case 'tvon': T(60, 0.4, { type: 'sawtooth', vol: 0.06 }); N(0.35, { vol: 0.12, freq: 5000, type: 'highpass', delay: 0.05 }); break;
      case 'tv': {
        const v = Math.max(0.05, p);
        T(180 + Math.random() * 260, 0.1 + Math.random() * 0.08, { type: 'sawtooth', vol: 0.035 * v, slide: 150 + Math.random() * 300 });
        if (Math.random() < 0.3) T(600 + Math.random() * 500, 0.08, { type: 'triangle', vol: 0.03 * v, delay: 0.05 });
        N(0.12, { vol: 0.03 * v, freq: 1600, q: 2 });
        break;
      }
      case 'mumble': for (let i = 0; i < 4; i++) T(150 + Math.random() * 90, 0.07, { type: 'triangle', vol: 0.04, delay: i * 0.09, slide: 120 + Math.random() * 80 }); break;
      case 'clack': N(0.05, { vol: 0.16, freq: 260, type: 'lowpass' }); N(0.05, { vol: 0.13, freq: 240, type: 'lowpass', delay: 0.13 }); T(70, 0.06, { type: 'sine', vol: 0.08 }); T(65, 0.06, { type: 'sine', vol: 0.07, delay: 0.13 }); break;
      case 'vent':
        T(140, 0.12, { type: 'square', vol: 0.12 }); N(0.12, { vol: 0.3, freq: 2200, q: 3 });
        for (let i = 0; i < 9; i++) N(0.11, { vol: 0.16, freq: 600 + (i % 3) * 250, q: 4, delay: 0.25 + i * 0.14 });
        break;
      case 'clank':
        T(180, 0.1, { type: 'square', vol: 0.13 }); T(95, 0.18, { type: 'triangle', vol: 0.14, delay: 0.03 }); N(0.16, { vol: 0.3, freq: 2600, q: 3 }); break;
      case 'chopper':
        // rotor thump: ~11 Hz low noise pulses that swell then fade as it flies off
        for (let i = 0; i < 34; i++) { const a = i < 8 ? i / 8 : 1 - (i - 8) / 30; N(0.07, { vol: 0.08 + a * 0.32, freq: 160 + a * 120, type: 'lowpass', delay: i * 0.09 }); }
        N(3.0, { vol: 0.08, freq: 2400, type: 'bandpass', q: 0.8, attack: 0.6 }); break;
      case 'engine':
        N(1.4, { vol: 0.35, freq: 200, slide: 600, type: 'lowpass' });
        T(55, 1.2, { type: 'sawtooth', slide: 140, vol: 0.12 }); break;
      case 'click': T(700, 0.05, { vol: 0.08 }); break;
      case 'star':
        T(784 * Math.pow(2, (p * 4) / 12), 0.35, { type: 'triangle', vol: 0.2 });
        T(1568 * Math.pow(2, (p * 4) / 12), 0.25, { type: 'sine', vol: 0.08, delay: 0.05 }); break;
      case 'throw': N(0.12, { vol: 0.15, freq: 1800, slide: 900, q: 1.5 }); T(900, 0.06, { type: 'triangle', vol: 0.06 }); break;
      case 'clink': {
        const v = 0.05 + p * 0.12;
        T(2400 + Math.random() * 300, 0.12, { type: 'triangle', vol: v }); T(3700 + Math.random() * 300, 0.18, { type: 'sine', vol: v * 0.7, delay: 0.02 });
        if (p > 0.5) T(3100, 0.25, { type: 'sine', vol: v * 0.5, delay: 0.09 });
        break;
      }
      case 'disarm': [1046, 1318, 1568, 2093].forEach((f, i) => T(f, 0.12, { type: 'square', vol: 0.07, delay: i * 0.06 })); break;
      case 'contract':
        [784, 988, 1175, 1568].forEach((f, i) => T(f, 0.16, { type: 'triangle', vol: 0.12, delay: i * 0.07 }));
        T(2093, 0.4, { type: 'sine', vol: 0.08, delay: 0.3 }); break;
      case 'creak': N(0.35, { vol: 0.12, freq: 300, slide: 900, q: 8 }); T(140, 0.25, { type: 'sawtooth', slide: 190, vol: 0.03 }); break;
      case 'beat': T(62, 0.12, { type: 'sine', slide: 40, vol: 0.45 }); T(58, 0.12, { type: 'sine', slide: 38, vol: 0.32, delay: 0.17 }); break;
      case 'woof':
        T(330, 0.09, { type: 'sawtooth', slide: 170, vol: 0.22 }); N(0.08, { freq: 800, vol: 0.18, q: 2 });
        T(300, 0.11, { type: 'sawtooth', slide: 150, vol: 0.2, delay: 0.15 }); N(0.09, { freq: 700, vol: 0.16, q: 2, delay: 0.15 }); break;
      case 'sniff': for (let i = 0; i < 3; i++) N(0.04, { freq: 2500, vol: 0.05, q: 3, delay: i * 0.07 }); break;
      case 'zap': T(1400, 0.25, { type: 'sawtooth', slide: 200, vol: 0.18 }); N(0.2, { freq: 3000, vol: 0.2, type: 'highpass' }); break;
      case 'powerdown': T(440, 0.8, { type: 'sawtooth', slide: 40, vol: 0.16 }); N(0.15, { freq: 2000, vol: 0.25, q: 0.7 }); T(60, 0.5, { type: 'sine', vol: 0.4, delay: 0.05 }); break;
      case 'scream': T(900, 0.45, { type: 'sawtooth', slide: 1400, vol: 0.09 }); T(1100, 0.4, { type: 'square', slide: 1600, vol: 0.04, delay: 0.05 }); break;
      case 'smoke': T(160, 0.12, { type: 'sine', slide: 60, vol: 0.4 }); N(1.4, { freq: 4000, slide: 900, vol: 0.22, q: 0.6 }); N(0.5, { freq: 900, vol: 0.12, type: 'lowpass', delay: 0.05 }); break;
      case 'pin': T(2400 + p * 300, 0.05, { type: 'square', vol: 0.08 }); T(1600 + p * 200, 0.08, { type: 'triangle', vol: 0.1, delay: 0.03 }); N(0.03, { freq: 6000, vol: 0.1, type: 'highpass' }); break;
      case 'slip': N(0.18, { freq: 2200, vol: 0.22, q: 3 }); T(320, 0.15, { type: 'square', slide: 180, vol: 0.08 }); N(0.12, { freq: 1500, vol: 0.15, q: 4, delay: 0.08 }); break;
      case 'glass':
        N(0.5, { freq: 5000, vol: 0.35, type: 'highpass' }); N(0.25, { freq: 2500, vol: 0.25, q: 0.8, delay: 0.02 });
        for (let i = 0; i < 8; i++) T(2500 + Math.random() * 3500, 0.12, { type: 'triangle', vol: 0.06, delay: 0.03 + i * 0.035 });
        T(140, 0.2, { type: 'sine', slide: 60, vol: 0.3 }); break;
      case 'radio': N(0.35, { freq: 1800, vol: 0.12, q: 1.2 }); T(1200, 0.05, { type: 'square', vol: 0.05, delay: 0.02 }); T(900, 0.05, { type: 'square', vol: 0.05, delay: 0.12 }); N(0.15, { freq: 2400, vol: 0.08, q: 2, delay: 0.25 }); break;
      case 'radioOk': N(0.12, { freq: 1800, vol: 0.12, q: 1.2 }); T(1400, 0.06, { type: 'square', vol: 0.06, delay: 0.05 }); T(1800, 0.08, { type: 'square', vol: 0.06, delay: 0.13 }); break;
      case 'jackpot':
        for (let i = 0; i < 14; i++) T([1046, 1318, 1568, 2093][i % 4] * (i > 9 ? 1.5 : 1), 0.1, { type: 'square', vol: 0.07, delay: i * 0.08 });
        for (let i = 0; i < 18; i++) T(2400 + Math.random() * 1800, 0.06, { type: 'triangle', vol: 0.05, delay: 0.3 + i * 0.07 });
        T(523, 0.6, { type: 'triangle', vol: 0.1, delay: 1.1 }); break;
      case 'nope': T(220, 0.12, { vol: 0.08 }); T(180, 0.15, { vol: 0.08, delay: 0.1 }); break;
      case 'combo': T(1320 + p * 80, 0.12, { type: 'triangle', vol: 0.1 }); break;
    }
  }

  // looping train rumble
  rumble(on) {
    if (!this.ctx || !this.noiseBuf) return;
    if (on && !this.rb) {
      const ctx = this.ctx, src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
      src.buffer = this.noiseBuf; src.loop = true; src.playbackRate.value = 0.5;
      f.type = 'lowpass'; f.frequency.value = 260;
      g.gain.value = 0.0001; g.gain.setTargetAtTime(0.16, ctx.currentTime, 0.6);
      src.connect(f).connect(g).connect(this.sfx); src.start();
      this.rb = { src, g };
    } else if (!on && this.rb) {
      const r = this.rb, t = this.ctx.currentTime;
      r.g.gain.setTargetAtTime(0.0001, t, 0.2); r.src.stop(t + 1);
      this.rb = null;
    }
  }
  // looping rain bed (muffled, we're indoors)
  rain(on) {
    if (!this.ctx || !this.noiseBuf) return;
    if (on && !this.rn) {
      const ctx = this.ctx, src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), f2 = ctx.createBiquadFilter(), g = ctx.createGain();
      src.buffer = this.noiseBuf; src.loop = true;
      f.type = 'lowpass'; f.frequency.value = 1400; f2.type = 'highpass'; f2.frequency.value = 220;
      g.gain.value = 0.0001; g.gain.setTargetAtTime(0.09, ctx.currentTime, 0.6);
      src.connect(f).connect(f2).connect(g).connect(this.sfx);
      src.start();
      this.rn = { src, g };
    } else if (!on && this.rn) {
      const r = this.rn, t = this.ctx.currentTime;
      r.g.gain.setTargetAtTime(0.0001, t, 0.2); r.src.stop(t + 1);
      this.rn = null;
    }
  }

  siren(on) {
    if (!this.ctx) return;
    if (on && !this.sir) {
      const ctx = this.ctx, o = ctx.createOscillator(), lfo = ctx.createOscillator(), lg = ctx.createGain(), g = ctx.createGain();
      o.type = 'sawtooth'; o.frequency.value = 780;
      lfo.type = 'square'; lfo.frequency.value = 1.6; lg.gain.value = 170;
      lfo.connect(lg).connect(o.frequency);
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1800;
      g.gain.value = 0.0001; g.gain.setTargetAtTime(0.045, ctx.currentTime, 0.2);
      o.connect(f).connect(g).connect(this.sfx);
      o.start(); lfo.start();
      this.sir = { o, lfo, g };
    } else if (!on && this.sir) {
      const s = this.sir, t = this.ctx.currentTime;
      s.g.gain.setTargetAtTime(0.0001, t, 0.1);
      s.o.stop(t + 0.5); s.lfo.stop(t + 0.5);
      this.sir = null;
    }
  }

  // tiny sneaky bass loop (lookahead scheduler), gets busier when guards are alerted
  // adaptive score: tension 0 calm, 1 suspicious, 2 alert, 3 alarm; mode 'game' | 'menu'
  sched() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running' || !this.musicOn) return;
    const lvl = this.mode === 'menu' ? 0 : this.tension | 0;
    const bpm = this.mode === 'menu' ? 96 : ([104, 110, 128, 140][lvl] || 104) * ((THEMES[this.theme || 0] || THEMES[0]).k);
    const spb = 60 / bpm / 4;
    this.lvl = this.lvl == null ? lvl : this.lvl + Math.sign(lvl - this.lvl) * 0; // snap per bar below
    if (this.nextT < ctx.currentTime) this.nextT = ctx.currentTime + 0.03;
    while (this.nextT < ctx.currentTime + 0.15) {
      if (this.step % 16 === 0) this.lvl = lvl; // change layers on bar lines
      if (this.mode === 'menu') this.menuBeat(this.step, this.nextT - ctx.currentTime);
      else this.beat(this.step, this.nextT - ctx.currentTime, this.lvl);
      this.nextT += spb;
      this.step = (this.step + 1) % 64;
    }
  }
  pad(notes, dur, delay, vol) {
    for (const n of notes) for (const det of [-5, 5]) {
      const ctx = this.ctx, t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = 'sawtooth'; o.frequency.value = midi(n); o.detune.value = det;
      f.type = 'lowpass'; f.frequency.value = 900;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + dur * 0.35); g.gain.linearRampToValueAtTime(0.0001, t + dur);
      o.connect(f).connect(g).connect(this.mus); o.start(t); o.stop(t + dur + 0.05);
    }
  }
  beat(s, delay, lvl) {
    const dest = this.mus, T = (f, d, o) => this.tone(f, d, { ...o, delay, dest }), N = (d, o) => this.noise(d, { ...o, delay, dest });
    // per-level theme: progression (root offset + chord quality), transposition, bass groove
    const th = THEMES[this.theme || 0] || THEMES[0], pr = PROGS[th.prog];
    const ci = (s >> 4) & 3, [ro, q] = pr[ci], base = 45 + th.tr + ro;
    const chords = pr.map(([o, qq]) => [45 + th.tr + o + 12, 45 + th.tr + o + (qq ? 16 : 15), 45 + th.tr + o + 19]);
    const root = base + (lvl >= 2 ? 12 : 0), st = s & 15;
    void q;
    // bass: sneaky pizzicato pattern
    const bassPat = BASS[th.bass];
    if (bassPat[st]) T(midi(root + (st === 6 ? 7 : st === 13 ? 5 : 0)), 0.18, { type: 'triangle', vol: 0.3 });
    if (bassPat[st] && lvl >= 1) T(midi(root + 12), 0.08, { type: 'square', vol: 0.035 });
    // soft hats
    if (st % 4 === 2) N(0.03, { vol: 0.07, freq: 7000, type: 'highpass' });
    // pads
    if (st === 0) this.pad(chords[ci], 16 * (60 / (([104, 110, 128, 140][lvl] || 104) * th.k) / 4), delay, lvl >= 2 ? 0.012 : 0.018);
    // level 1: plucky arpeggio + finger snaps
    if (lvl >= 1) {
      const arp = chords[ci], k = st % 3;
      if (st % 2 === 0) T(midi(arp[k] + 12), 0.1, { type: 'sine', vol: 0.06 });
      if (st === 4 || st === 12) N(0.04, { vol: 0.12, freq: 2500, q: 3 });
    }
    // level 2: drums
    if (lvl >= 2) {
      if (st % 4 === 0) T(120, 0.15, { type: 'sine', slide: 40, vol: 0.45 });
      if (st === 4 || st === 12) { N(0.12, { vol: 0.18, freq: 1800, q: 0.8 }); T(200, 0.08, { type: 'triangle', slide: 120, vol: 0.12 }); }
      if (st % 2 === 1) N(0.02, { vol: 0.06, freq: 9000, type: 'highpass' });
      if (st === 14) T(midi(root + 24), 0.1, { type: 'square', vol: 0.04 });
    }
    // level 3: alarm stabs
    if (lvl >= 3 && (st === 0 || st === 3 || st === 6)) { T(midi(root + 24), 0.12, { type: 'sawtooth', vol: 0.05 }); T(midi(root + 27), 0.12, { type: 'sawtooth', vol: 0.04 }); }
  }
  // menu: laid-back heist groove
  menuBeat(s, delay) {
    const dest = this.mus, T = (f, d, o) => this.tone(f, d, { ...o, delay, dest }), N = (d, o) => this.noise(d, { ...o, delay, dest });
    const chords = [[57, 60, 64, 67], [50, 53, 57, 60], [52, 55, 59, 62], [57, 60, 64, 67]], roots = [45, 38, 40, 45];
    const ci = (s >> 4) & 3, st = s & 15, root = roots[ci];
    if (st === 0 || st === 7 || st === 10) T(midi(root), 0.25, { type: 'triangle', vol: 0.3 });
    if (st === 0) this.pad(chords[ci], 2.4, delay, 0.014);
    if (st === 4 || st === 12) N(0.05, { vol: 0.1, freq: 2600, q: 2.5 });
    if (st % 2 === 0) N(0.025, { vol: 0.05, freq: 8000, type: 'highpass' });
    if (st === 2 || st === 6 || st === 9 || st === 14) T(midi(chords[ci][(st >> 1) % 4] + 12), 0.12, { type: 'sine', vol: 0.05 });
  }

  // footsteps per surface; pan/vol for guards
  stepSound(surface, vol = 1, pan = 0) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const sn = { carpet: 'step_carpet', tile: 'step_tile', road: 'step_tile', grass: 'step_grass', boot: 'step_tile' }[surface] || 'step_wood';
    if (this.sample(sn, { vol: 0.3 * vol * (surface === 'boot' ? 1.2 : 1), rate: surface === 'boot' ? 0.82 : 1, jitter: 0.12, pan })) return;
    let dest = this.sfx;
    if (pan) { const p = this.ctx.createStereoPanner(); p.pan.value = pan; p.connect(this.sfx); dest = p; }
    const N = (d, o) => this.noise(d, { ...o, vol: (o.vol || 0.1) * vol, dest }), T = (f, d, o) => this.tone(f, d, { ...o, vol: (o.vol || 0.1) * vol, dest });
    switch (surface) {
      case 'carpet': N(0.07, { vol: 0.05, freq: 300, type: 'lowpass' }); break;
      case 'tile': N(0.03, { vol: 0.09, freq: 3200, q: 1.5 }); T(900 + Math.random() * 200, 0.03, { type: 'triangle', vol: 0.03 }); break;
      case 'grass': N(0.09, { vol: 0.07, freq: 1400, q: 0.6 }); break;
      case 'road': N(0.06, { vol: 0.08, freq: 900, q: 0.9 }); break;
      case 'boot': N(0.06, { vol: 0.1, freq: 450, type: 'lowpass' }); T(110, 0.06, { type: 'sine', vol: 0.08 }); break;
      default: N(0.05, { vol: 0.07, freq: 600, type: 'lowpass' }); T(170 + Math.random() * 30, 0.05, { type: 'sine', vol: 0.06 }); // wood
    }
  }
}
