import { WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Color, Vector3 } from 'three';
import { Game } from './game.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { Particles, Shake, Floaters } from './fx.js';
import { SDK } from './sdk.js';
import { LEVELS, loadLevel } from './levels/index.js';
import { fmtTime, fmtMoney, damp } from './util.js';

const $ = (id) => document.getElementById(id);
const HINTS = {
  move: ['WASD / Arrows to move', 'Drag anywhere to move'],
  dash: ['SPACE / SHIFT to dash. Careful, it\'s noisy!', 'Tap DASH to dash. Careful, it\'s noisy!'],
  cone: ['Stay out of the vision cones!', 'Stay out of the vision cones!'],
  ko: ['Behind a guard? E / Click = knock out!', 'Behind a guard? Tap the hand = knock out!'],
  safe: ['Hold E / Mouse to crack the safe', 'Hold the hand button to crack the safe'],
  owner: ['Shh... the owner is asleep. No dashing near the bed!', 'Shh... the owner is asleep. No dashing near the bed!'],
  loot: ['Extra loot = more stars. Grab it all!', 'Extra loot = more stars. Grab it all!'],
  stash: ['Got the stash! Get back to the van!', 'Got the stash! Get back to the van!'],
};

class App {
  constructor() {
    this.els = {
      canvas: $('c'), fxl: $('fxl'), joyzone: $('joyzone'), joy: $('joy'), knob: $('knob'), bAct: $('bAct'), bDash: $('bDash'),
    };
    this.state = 'boot';
    this.hShown = new Set(); this.hDone = new Set(); this.hQ = []; this.hT = 0; this.hCur = null;
    this.lastAd = performance.now(); this.runs = 0; this.time = 0;
    this.camPos = new Vector3(15, 30, 40); this.camLook = new Vector3(15, 0, 9);
    this._f = new Vector3(); this._d = new Vector3();
    this.frameAcc = 0; this.frameN = 0; this.goodWin = 0;
  }

  async boot() {
    await SDK.init();
    SDK.loadingStart();
    SDK.hooks.adStart = () => { this.inAd = true; this.audio.setAdMuted(true); };
    SDK.hooks.adEnd = () => { this.inAd = false; this.audio.setAdMuted(false); };
    this.save = SDK.load();
    this.save.best = this.save.best || {};

    const mobile = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
    this.maxDpr = mobile ? 1.25 : 1.75;
    this.dpr = Math.min(devicePixelRatio || 1, this.maxDpr);
    const r = (this.renderer = new WebGLRenderer({ canvas: this.els.canvas, antialias: !mobile, powerPreference: 'high-performance', stencil: false }));
    r.setPixelRatio(this.dpr);
    this.scene = new Scene();
    this.scene.background = new Color(0x9ad8ff);
    this.camera = new PerspectiveCamera(42, 1, 0.5, 120);
    this.scene.add(new HemisphereLight(0xffffff, 0x9aa0c8, 1.9));
    const sun = new DirectionalLight(0xffffff, 1.7);
    sun.position.set(-4, 10, 6);
    this.scene.add(sun);

    this.audio = new Audio();
    this.audio.setMuted(!!this.save.muted);
    this.input = new Input(this.els);
    this.particles = new Particles(this.scene);
    this.shake = new Shake();
    this.floaters = new Floaters(this.els.fxl);
    this.game = new Game(this);
    this.level = await loadLevel(0);
    this.game.load(this.level);

    this.bindUI();
    addEventListener('resize', () => this.resize());
    this.resize();
    this.renderer.compile(this.scene, this.camera);
    this.last = performance.now();
    this.renderer.setAnimationLoop(() => this.frame());

    SDK.loadingStop();
    $('loading').classList.add('hidden');
    this.showMenu();
  }

  // ---------------- UI ----------------
  bindUI() {
    const click = (id, fn) => $(id).addEventListener('click', (e) => { e.stopPropagation(); this.audio.unlock(); this.audio.play('click'); fn(); });
    click('bPlay', () => this.start());
    click('lvl1', () => this.start());
    click('lvl2', () => this.showSoon());
    click('bResume', () => this.resume());
    click('bRestart', () => this.start());
    click('bPMenu', () => this.showMenu());
    click('bRetry', () => this.retry());
    click('bNext', () => this.showSoon());
    click('bRMenu', () => this.showMenu());
    click('bBRetry', () => this.retry());
    click('bBMenu', () => this.showMenu());
    click('bRevive', () => this.reviveAd());
    click('bSoonBack', () => this.showMenu());
    click('bPause', () => this.pause());
    click('bMute', () => this.toggleMute());
    this.input.on('pause', () => { if (this.state === 'play') this.pause(); else if (this.state === 'pause') this.resume(); });
    this.input.on('restart', () => { if (['play', 'pause', 'result', 'busted'].includes(this.state)) this.start(); });
    this.input.on('mute', () => this.toggleMute());
    this.input.on('key', (code) => {
      if ((code === 'Enter' || code === 'Space') && this.state === 'menu') { this.audio.unlock(); this.start(); }
      else if ((code === 'Enter' || code === 'Space') && (this.state === 'result' || this.state === 'busted')) { this.audio.unlock(); this.retry(); }
    });
    this.input.on('mode', () => this.syncTouch());
    addEventListener('pointerdown', () => this.audio.unlock(), { capture: true });
    addEventListener('keydown', () => this.audio.unlock(), { capture: true });
    addEventListener('blur', () => { if (this.state === 'play') this.pause(); });
    document.addEventListener('visibilitychange', () => {
      this.audio.setHidden(document.hidden);
      if (document.hidden && this.state === 'play') this.pause();
    });
    this.updateMuteIcon();
  }

  screen(id) {
    for (const s of document.querySelectorAll('.screen')) s.classList.toggle('hidden', s.id !== id);
    const inGame = this.state === 'play';
    $('hud').classList.toggle('hidden', !inGame && this.state !== 'pause');
    this.syncTouch();
    if (!inGame) { this.setPrompt(''); this.game && this.game.hideBadges(); }
  }
  syncTouch() {
    const t = this.input.touch;
    document.body.classList.toggle('touch', t);
    $('touch').classList.toggle('hidden', !(t && this.state === 'play'));
    this.input.joyEnd();
  }
  showMenu() {
    SDK.gameplayStop();
    this.state = 'menu';
    this.game.reset();
    const b = this.save.best.safehouse;
    $('lvl1stars').innerHTML = this.starsHTML(b ? b.stars : 0);
    $('lvl1best').textContent = b ? 'Best ' + fmtMoney(b.score) : 'New!';
    this.screen('menu');
  }
  async showSoon() {
    SDK.gameplayStop();
    this.state = 'soon';
    const def = await loadLevel(1);
    $('soonName').textContent = def.name;
    $('soonList').innerHTML = def.teaser.map((t) => `<li>${t}</li>`).join('');
    this.screen('soon');
  }
  starsHTML(n) {
    let s = '';
    for (let i = 0; i < 3; i++) s += `<span class="${i < n ? 'on' : ''}">★</span>`;
    return s;
  }

  start() {
    this.audio.unlock();
    this.game.reset();
    this.input.clear();
    this.state = 'play';
    this.runs++;
    this.startT = this.time;
    this.screen(null);
    this.hQ.length = 0;
    this.lastLoot = -1; this.lastSec = -1;
    this.onLoot(false, true);
    this.setObjective('Crack the safe!');
    this.hint('move');
    SDK.gameplayStart();
  }
  async retry() {
    await this.maybeMidgame();
    this.start();
  }
  pause() {
    if (this.state !== 'play') return;
    this.state = 'pause';
    SDK.gameplayStop();
    this.screen('pause');
  }
  resume() {
    if (this.state !== 'pause') return;
    this.state = 'play';
    this.input.clear();
    this.last = performance.now();
    this.screen(null);
    SDK.gameplayStart();
  }
  toggleMute() {
    this.audio.unlock();
    this.save.muted = !this.save.muted;
    this.audio.setMuted(this.save.muted);
    SDK.store(this.save);
    this.updateMuteIcon();
  }
  updateMuteIcon() { $('bMute').classList.toggle('off', !!this.save.muted); }

  async maybeMidgame() {
    const now = performance.now();
    if (!SDK.available || this.runs < 2 || now - this.lastAd < 150000) return;
    this.lastAd = now;
    this.state = 'ad';
    await SDK.ad('midgame');
  }
  async reviveAd() {
    if (!SDK.available || this.game.revived) return;
    this.state = 'ad';
    const ok = await SDK.ad('rewarded');
    if (ok) {
      this.game.revive();
      this.state = 'play';
      this.last = performance.now();
      this.screen(null);
      SDK.gameplayStart();
    } else {
      this.state = 'busted';
      $('bRevive').classList.add('hidden');
    }
  }

  // ---- called by Game ----
  hint(id) {
    if (!this.level || !this.level.tutorial || this.hShown.has(id) || this.hDone.has(id)) return;
    if (this.hCur === id || this.hQ.includes(id)) return;
    this.hShown.add(id);
    this.hQ.push(id);
  }
  hintDone(id) {
    this.hDone.add(id);
    const qi = this.hQ.indexOf(id);
    if (qi >= 0) this.hQ.splice(qi, 1);
    if (this.hCur === id && this.hT > 1.2) this.hT = Math.min(this.hT, 0.5);
  }
  updateHints(dt) {
    const el = $('hint');
    if (this.hCur) {
      this.hT -= dt;
      if (this.hT <= 0 || this.state !== 'play') { this.hCur = null; el.classList.add('hidden'); }
    } else if (this.hQ.length && this.state === 'play') {
      this.hCur = this.hQ.shift();
      if (this.hDone.has(this.hCur) && this.hCur !== 'stash') { this.hCur = null; return; }
      el.textContent = HINTS[this.hCur][this.input.touch ? 1 : 0];
      el.classList.remove('hidden');
      el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
      this.hT = 3.4;
    }
  }
  setPrompt(kind, prog = 0, sx = 0, sz = 0) {
    const p = $('prompt'), ring = $('ring'), t = this.input && this.input.touch;
    const txt = kind === 'safe' ? (t ? 'HOLD ✋ TO CRACK' : 'HOLD E TO CRACK') : kind === 'ko' ? (t ? 'TAP ✋ TO KNOCK OUT' : 'E: KNOCK OUT') : '';
    if (p.dataset.k !== kind) {
      p.dataset.k = kind;
      p.textContent = txt;
      p.classList.toggle('hidden', !kind);
      this.els.bAct.classList.toggle('ready', !!kind);
      this.els.bAct.lastChild.textContent = kind === 'safe' ? 'CRACK' : kind === 'ko' ? 'KO!' : 'GRAB';
    }
    if (kind === 'safe' && prog > 0) {
      const v = this._d.set(sx, 1.4, sz).project(this.camera);
      ring.style.transform = `translate(${((v.x + 1) / 2) * this.w}px,${((1 - v.y) / 2) * this.h}px) translate(-50%,-50%)`;
      ring.lastChild.style.strokeDashoffset = String(126 * (1 - Math.min(1, prog)));
      ring.classList.remove('hidden');
    } else ring.classList.add('hidden');
  }
  setObjective(t) {
    const o = $('obj');
    o.textContent = t;
    o.classList.remove('pop'); void o.offsetWidth; o.classList.add('pop');
  }
  onLoot(big, silent) {
    const g = this.game;
    $('lootv').textContent = fmtMoney(g.lootGot);
    $('lootp').textContent = Math.round((g.lootGot / g.lootTotal) * 100) + '%';
    $('lootbar').style.width = Math.min(100, (g.lootGot / g.lootTotal) * 100) + '%';
    $('lootbar').classList.toggle('star', g.lootGot / g.lootTotal >= 0.7);
    if (silent) return;
    const l = $('loot');
    l.classList.remove('punch', 'bigpunch'); void l.offsetWidth; l.classList.add(big ? 'bigpunch' : 'punch');
  }
  flash(kind) {
    const f = $('flash');
    f.className = ''; void f.offsetWidth; f.className = kind;
  }
  onEscapeStart() { $('touch').classList.add('hidden'); }
  onBusted() {
    this.state = 'busted';
    SDK.gameplayStop();
    $('bRevive').classList.toggle('hidden', !SDK.available || this.game.revived);
    $('bustTip').textContent = [
      'Tip: guards can\'t see behind them. Sneak up and knock them out!',
      'Tip: dashing is loud. Walk near guards and the sleeping owner.',
      'Tip: break line of sight and alerted guards will lose you.',
      'Tip: the camera in the office sweeps. Time your move!',
      'Tip: try the side door on the east of the house.',
    ][(Math.random() * 5) | 0];
    this.screen('busted');
  }
  onWin(res) {
    this.state = 'result';
    SDK.gameplayStop();
    SDK.happytime();
    const nStars = res.stars.filter(Boolean).length;
    const prev = this.save.best.safehouse || { score: 0, stars: 0 };
    const newBest = res.score > prev.score;
    this.save.best.safehouse = { score: Math.max(prev.score, res.score), stars: Math.max(prev.stars, nStars) };
    SDK.store(this.save);
    $('rStars').innerHTML = this.starsHTML(0);
    const labels = ['Escaped with the stash', 'Loot 70%+ (' + Math.round(res.frac * 100) + '%)', 'Ghost: never spotted'];
    $('rGoals').innerHTML = res.stars.map((s, i) => `<li class="${s ? 'ok' : ''}">${s ? '✔' : '✖'} ${labels[i]}</li>`).join('');
    $('rLoot').textContent = fmtMoney(res.loot);
    $('rTime').textContent = fmtTime(res.time) + (res.timeBonus ? `  (+${fmtMoney(res.timeBonus)})` : '');
    $('rGhost').textContent = res.ghost ? '+' + fmtMoney(res.ghostBonus) : '—';
    $('rScore').textContent = '$0';
    $('rBest').textContent = newBest ? 'NEW BEST!' : 'Best ' + fmtMoney(this.save.best.safehouse.score);
    $('rBest').classList.toggle('new', newBest);
    this.screen('result');
    const stars = $('rStars').children;
    res.stars.forEach((s, i) => {
      if (!s) return;
      setTimeout(() => {
        if (this.state !== 'result') return;
        stars[i].classList.add('on', 'pop');
        this.audio.play('star', i);
        this.shake.add(0.12);
      }, 450 + i * 380);
    });
    const t0 = performance.now(), dur = 1100;
    const tick = () => {
      const k = Math.min(1, (performance.now() - t0) / dur);
      $('rScore').textContent = fmtMoney(res.score * (1 - Math.pow(1 - k, 3)));
      if (k < 1 && this.state === 'result') requestAnimationFrame(tick);
    };
    tick();
  }

  // ---------------- loop ----------------
  resize() {
    this.w = innerWidth; this.h = innerHeight;
    this.aspect = this.w / this.h;
    this.renderer.setSize(this.w, this.h, false);
    this.camera.aspect = this.aspect;
    this.camera.updateProjectionMatrix();
  }
  frame() {
    const now = performance.now();
    const rdt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.time += rdt;
    const st = this.state;
    if (st === 'play' || (st === 'busted' && this.game.state === 'caught' && !this.game.endSent)) this.game.update(rdt, false);
    else if (st === 'menu' || st === 'soon') this.game.update(rdt, true);
    if (st !== 'pause' && st !== 'ad') {
      this.particles.update(rdt);
      this.shake.update(rdt);
    }
    this.updateCamera(rdt);
    this.floaters.update(st === 'pause' ? 0 : rdt, this.camera, this.w, this.h);
    this.updateHints(rdt);
    if (st === 'play') this.updateHud();
    this.audio.tension = this.game.tension;
    $('vignette').style.opacity = st === 'play' && this.game.tension ? 1 : 0;
    this.renderer.render(this.scene, this.camera);
    this.adaptRes(rdt);
  }
  updateHud() {
    const s = Math.floor(this.game.time);
    if (s !== this.lastSec) { this.lastSec = s; $('time').textContent = fmtTime(s); }
  }
  updateCamera(dt) {
    const g = this.game, L = g.L;
    const zoom = this.aspect < 1 ? 1 + (1 - this.aspect) * 1.6 : 1;
    let look, pos, lam;
    if (this.state === 'menu' || this.state === 'soon') {
      const a = this.time * 0.07;
      look = this._f.set(L.W / 2, 0, L.H / 2 - 2);
      pos = this._d.set(look.x + Math.sin(a) * 17 * zoom, 19 * zoom, look.z + Math.cos(a) * 17 * zoom);
      lam = 2;
    } else {
      look = g.focus(this._f);
      const p = g.player;
      if (g.state === 'play') { look.x += p.vx * 0.18; look.z += p.vz * 0.18 - 0.4; }
      pos = this._d.set(look.x, look.y + 11.5 * zoom, look.z + 7.8 * zoom);
      lam = this.state === 'play' && this.time - (this.startT || 0) > 1 ? 6 : 4;
    }
    this.camPos.x = damp(this.camPos.x, pos.x, lam, dt);
    this.camPos.y = damp(this.camPos.y, pos.y, lam, dt);
    this.camPos.z = damp(this.camPos.z, pos.z, lam, dt);
    this.camLook.x = damp(this.camLook.x, look.x, lam * 1.3, dt);
    this.camLook.y = damp(this.camLook.y, look.y, lam * 1.3, dt);
    this.camLook.z = damp(this.camLook.z, look.z, lam * 1.3, dt);
    this.camera.position.set(this.camPos.x + this.shake.x, this.camPos.y + this.shake.y, this.camPos.z);
    this.camera.lookAt(this.camLook.x + this.shake.x * 0.5, this.camLook.y, this.camLook.z + this.shake.y * 0.5);
  }
  adaptRes(dt) {
    // dynamic resolution: keep 60fps on weak devices
    this.frameAcc += dt; this.frameN++;
    if (this.frameAcc < 2) return;
    const avg = this.frameAcc / this.frameN;
    this.frameAcc = 0; this.frameN = 0;
    if (document.hidden) return;
    if (avg > 1 / 45 && this.dpr > 0.6) { this.dpr = Math.max(0.6, this.dpr - 0.15); this.goodWin = 0; }
    else if (avg < 1 / 57) { if (++this.goodWin >= 3 && this.dpr < Math.min(devicePixelRatio || 1, this.maxDpr)) { this.dpr = Math.min(this.maxDpr, this.dpr + 0.1); this.goodWin = 0; } else return; }
    else return;
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(this.w, this.h, false);
  }
}

const app = new App();
window.__app = app;
app.boot().catch((e) => {
  console.error(e);
  const l = $('loading');
  l.classList.remove('hidden');
  l.querySelector('p').textContent = 'Oops! Your browser could not start the game (WebGL needed).';
});
