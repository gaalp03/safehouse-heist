// All sound is synthesized with WebAudio at runtime: zero audio files to download.
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

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
      this.master.connect(comp).connect(ctx.destination);
      this.sfx = ctx.createGain(); this.sfx.gain.value = 0.8; this.sfx.connect(this.master);
      this.mus = ctx.createGain(); this.mus.gain.value = 0.32; this.mus.connect(this.master);
      const len = ctx.sampleRate;
      this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.apply();
      this.timer = setInterval(() => this.sched(), 40);
    }
    if (this.ctx.state === 'suspended' && !this.hidden && !this.adMuted) this.ctx.resume();
  }
  apply() {
    if (!this.ctx) return;
    const v = this.muted || this.adMuted ? 0 : 1;
    this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.03);
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
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf;
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

  play(name, p = 0) {
    if (!this.ctx || this.ctx.state !== 'running') return;
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
      case 'nope': T(220, 0.12, { vol: 0.08 }); T(180, 0.15, { vol: 0.08, delay: 0.1 }); break;
      case 'combo': T(1320 + p * 80, 0.12, { type: 'triangle', vol: 0.1 }); break;
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
  sched() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running' || !this.musicOn) return;
    const spb = (60 / 108 / 4) * (this.tension > 0.5 ? 0.8 : 1);
    if (this.nextT < ctx.currentTime) this.nextT = ctx.currentTime + 0.03;
    while (this.nextT < ctx.currentTime + 0.15) {
      this.beat(this.step, this.nextT - ctx.currentTime);
      this.nextT += spb;
      this.step = (this.step + 1) % 32;
    }
  }
  beat(s, delay) {
    const bass = [45, 0, 0, 45, 0, 0, 48, 0, 45, 0, 0, 43, 0, 40, 0, 0, 45, 0, 0, 45, 0, 0, 48, 0, 50, 0, 48, 0, 47, 0, 43, 0];
    const n = bass[s], dest = this.mus, hot = this.tension > 0.5;
    if (n) {
      this.tone(midi(n + (hot ? 12 : 0)), 0.2, { type: 'triangle', vol: 0.32, delay, dest });
      this.tone(midi(n), 0.12, { type: 'square', vol: 0.04, delay, dest });
    }
    if (s % 4 === 2) this.noise(0.03, { vol: 0.08, freq: 7000, type: 'highpass', delay, dest });
    if (s % 8 === 4) this.tone(midi(69 + (s % 16 === 4 ? 3 : 0)), 0.06, { type: 'sine', vol: 0.05, delay, dest });
    if (hot) {
      if (s % 4 === 0) { this.tone(120, 0.15, { type: 'sine', slide: 40, vol: 0.4, delay, dest }); }
      if (s % 2 === 1) this.noise(0.02, { vol: 0.06, freq: 9000, type: 'highpass', delay, dest });
      if (s % 8 === 6) this.tone(midi(81), 0.08, { vol: 0.04, delay, dest });
    }
  }
}
