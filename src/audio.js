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
      this.lp = ctx.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 20000;
      this.master.connect(this.lp).connect(comp).connect(ctx.destination);
      this.sfx = ctx.createGain(); this.sfx.gain.value = 0.8 * (this.sfxVol ?? 1); this.sfx.connect(this.master);
      this.mus = ctx.createGain(); this.mus.gain.value = 0.32 * (this.musVol ?? 1); this.mus.connect(this.master);
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
    const bpm = this.mode === 'menu' ? 96 : [104, 110, 128, 140][lvl] || 104;
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
    // Am - F - C - G (each chord 16 steps)
    const chords = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]], roots = [45, 41, 48, 43];
    const ci = (s >> 4) & 3, root = roots[ci] + (lvl >= 2 ? 12 : 0), st = s & 15;
    // bass: sneaky pizzicato pattern
    const bassPat = [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0];
    if (bassPat[st]) T(midi(root + (st === 6 ? 7 : st === 13 ? 5 : 0)), 0.18, { type: 'triangle', vol: 0.3 });
    if (bassPat[st] && lvl >= 1) T(midi(root + 12), 0.08, { type: 'square', vol: 0.035 });
    // soft hats
    if (st % 4 === 2) N(0.03, { vol: 0.07, freq: 7000, type: 'highpass' });
    // pads
    if (st === 0) this.pad(chords[ci], 16 * (60 / ([104, 110, 128, 140][lvl] || 104) / 4), delay, lvl >= 2 ? 0.012 : 0.018);
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
