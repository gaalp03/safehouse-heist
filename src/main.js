import { WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Color, Vector3, Fog, ACESFilmicToneMapping } from 'three';
import { makeSky, makeNightSky, Dust } from './atmo.js';
import { Rain } from './weather.js';
import { Game } from './game.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { Particles, Shake, Floaters } from './fx.js';
import { SDK, ADS_ENABLED } from './sdk.js';
import { LEVELS, loadLevel } from './levels/index.js';
import { fmtTime, fmtMoney, damp, angDiff } from './util.js';
import { ViewModel } from './viewmodel.js';
import { DIFFS, diffKey } from './difficulty.js';
import { rankOf, xpForRun } from './rank.js';
import { todaysJobs, recordJobs, jobDef, JOB_CASH, JOB_BONUS } from './jobs.js';
import { GEAR, gearLv, nextPrice, gearMods } from './gear.js';
import { todaysDaily, prevDayKey, nextDailyIn, dayKey as dayKeyNow, MUTATORS, weekInfo } from './daily.js';
import { ACH, recordRun, blankStats } from './achievements.js';
import { OUTFITS, colorsOf, unlocked, needText } from './outfits.js';
import { TUT_STEPS } from './tutorial.js';
import { INTRO, SHOT_T } from './intro.js';

const $ = (id) => document.getElementById(id);
const pinIdx = (k) => (/^lvl\d+$/.test(k) ? +k.slice(3) - 1 : undefined);
const HINTS = {
  move: ['WASD to move · Mouse to look', 'Left side: move · Right side: look'],
  thunder: ['⚡ Thunder covers your noise for a moment. Dash now!', '⚡ Thunder covers your noise for a moment. Dash now!'],
  uniform: ['Hold E on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar', 'Hold ✋ on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar'],
  ctr: ['📋 The slips on the left are bonus contracts: optional side jobs worth extra cash', '📋 The slips on the left are bonus contracts: optional side jobs worth extra cash'],
  vent: ['Air vent! E to crawl through to another room, unseen', 'Air vent! Tap the hand to crawl through, unseen'],
  dash: ['SPACE / SHIFT to dash. Careful, it\'s noisy!', 'Tap DASH to dash. Careful, it\'s noisy!'],
  cone: ['Stay out of the vision cones!', 'Stay out of the vision cones!'],
  ko: ['Behind a guard? CLICK to hit = knock out!', 'Behind a guard? Tap HIT = knock out!'],
  safe: ['Hold E to crack the safe', 'Hold the hand button to crack the safe'],
  owner: ['Shh... the owner is asleep. No dashing near the bed!', 'Shh... the owner is asleep. No dashing near the bed!'],
  loot: ['Extra loot = more stars. Grab it all!', 'Extra loot = more stars. Grab it all!'],
  stash: ['Got the stash! Get back to the van!', 'Got the stash! Get back to the van!'],
  dog: ['A guard dog! It follows your scent and barks. Coins distract it.', 'A guard dog! It follows your scent and barks. Coins distract it.'],
  clerk: ['The clerk is running for the alarm button! Knock them out first!', 'The clerk is running for the alarm button! Knock them out first!'],
  camhit: ['Security camera! Hit it with a thrown coin (Q) to knock it out for 12s', 'Security camera! Hit it with a thrown coin to knock it out for 12s'],
  pocket: ['Behind a guard: CLICK to knock out, HOLD E to pickpocket his wallet (or spare keycard)', 'Behind a guard: tap HIT to knock out, HOLD ✋ to pickpocket his wallet'],
  slot: ['Slot machine! Hold E to hit a noisy jackpot that lures guards away', 'Slot machine! Hold ✋ to hit a noisy jackpot that lures guards away'],
  spot: ['Spotlight! Stay out of the moving light pools, or cut the power at the breaker', 'Spotlight! Stay out of the moving light pools, or cut the power at the breaker'],
  radio: ['A knocked-out guard\'s radio is calling! Hold E next to him to answer, or backup comes', 'A knocked-out guard\'s radio is calling! Hold ✋ next to him to answer, or backup comes'],
  case: ['Hold E to smash a display case. Loud! Guards who see a broken case raise the alarm', 'Hold ✋ to smash a display case. Loud! Guards who see a broken case raise the alarm'],
  pick: ['Locked! Press E when the pin is in the green zone. Slips are noisy!', 'Locked! Tap the hand when the pin is in the green zone. Slips are noisy!'],
  laser: ['Laser grid! Time your run, or cut the power at the breaker in the security room', 'Laser grid! Time your run, or cut the power at the breaker in the security room'],
  key: ['The vault door needs a keycard. Search the offices!', 'The vault door needs a keycard. Search the offices!'],
  door: ['Got the keycard! Swipe it at the vault door', 'Got the keycard! Swipe it at the vault door'],
  drill: ['Cracking the vault is LOUD. Guards will hear it!', 'Cracking the vault is LOUD. Guards will hear it!'],
  hide: ['E at a wardrobe: hide inside. Guards lose you if they did not see you!', 'Tap the hand at a wardrobe to hide inside'],
  heavy: ['Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them', 'Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them'],
  sneak: ['Z: crouch-sneak. Slower and quieter, and crouching behind counters or tables hides you', 'Tap 🦶 to sneak. Slower and quieter, and crouching behind low cover hides you'],
  smoke: ['C: drop a smoke bomb. Guards cannot see into or through the cloud!', 'Tap 💨 to drop a smoke bomb. Guards cannot see through it!'],
  coin: ['Hold Q to aim, release to throw a coin and lure guards away', 'Hold the coin button to aim, release to throw it and lure guards away'],
  alarm: ['ALARM! Escape or hold E at the keypad by the front door', 'ALARM! Escape or hold the hand at the keypad by the front door'],
};

class App {
  constructor() {
    this.els = {
      canvas: $('c'), fxl: $('fxl'), joyzone: $('joyzone'), lookzone: $('lookzone'), joy: $('joy'), knob: $('knob'), bAct: $('bAct'), bDash: $('bDash'), bThrow: $('bThrow'), bSmoke: $('bSmoke'), bSneak: $('bSneak'), bHit: $('bHit'),
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
    this.diff = DIFFS[this.save.diff] ? this.save.diff : 'normal';

    const mobile = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
    // phones: render near native resolution (retina screens looked blurry at 1.25x); desktop unchanged
    const ndpr = devicePixelRatio || 1;
    this.mobile = mobile;
    this.maxDpr = mobile ? Math.min(ndpr, 2.25) : 1.75;
    this.minDpr = mobile ? Math.min(ndpr, 1.5) : 0.6;
    this.dpr = Math.min(ndpr, this.maxDpr);
    const r = (this.renderer = new WebGLRenderer({ canvas: this.els.canvas, antialias: !mobile, powerPreference: 'high-performance', stencil: false }));
    // phones can drop the GPU context (app switch / low memory): keep progress, show a note, reload when it comes back
    this.els.canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      try { SDK.store(this.save); } catch (_) {}
      if (this.state === 'play') { this.state = 'pause'; SDK.gameplayStop(); }
      $('ctxlost').classList.remove('hidden');
    });
    this.els.canvas.addEventListener('webglcontextrestored', () => { location.reload(); });
    r.setPixelRatio(this.dpr);
    r.toneMapping = ACESFilmicToneMapping;
    r.toneMappingExposure = 1.15;
    this.scene = new Scene();
    this.scene.background = new Color(0xf4b98a);
    this.scene.fog = new Fog(0xf0c49a, 16, 70);
    this.sky = makeSky();
    this.scene.add(this.sky);
    this.nightSky = makeNightSky();
    this.scene.add(this.nightSky);
    r.autoClear = false;
    this.camera = new PerspectiveCamera(42, 1, 0.05, 120);
    this.camera.rotation.order = 'YXZ';
    this.vm = new ViewModel();
    this.hemi = new HemisphereLight(0xffe6c8, 0x7a6888, 1.8);
    this.scene.add(this.hemi);
    const sun = (this.sun = new DirectionalLight(0xffe0b8, 1.4));
    sun.position.set(-4, 10, 6);
    this.scene.add(sun);

    this.audio = new Audio();
    // haptics on phones: piggyback on the key sound effects (respects the screen-shake setting)
    const BUZZ = { ko: 35, zap: [60, 40, 60], alert: 25, bust: [90, 60, 160], alarm: [120, 80, 120], safe: [30, 40, 50], dash: 12, glass: 40, thunder: [20, 40, 60], clank: 25, jackpot: [20, 30, 20, 30, 40], win: [30, 50, 80] };
    const play = this.audio.play.bind(this.audio);
    this.audio.play = (n, p) => {
      play(n, p);
      const b = BUZZ[n];
      if (b && this.input && this.input.touch && this.shake && this.shake.scale > 0 && navigator.vibrate) { try { navigator.vibrate(b); } catch (_) {} }
    };
    this.audio.setMuted(!!this.save.muted);
    SDK.onSettings((st) => this.audio.setPlatformMuted(st && st.muteAudio));
    this.input = new Input(this.els);
    this.particles = new Particles(this.scene);
    this.shake = new Shake();
    this.floaters = new Floaters(this.els.fxl);
    this.dust = new Dust(this.scene);
    this.rain = new Rain(this.scene); this.boltK = 0;
    this.applySettings();
    this.game = new Game(this);
    this.levelIdx = 0;
    await this.useLevel(0);

    this.bindUI();
    this.applyOutfit();
    addEventListener('resize', () => this.resize());
    this.resize();
    this.renderer.compile(this.scene, this.camera);
    this.last = performance.now();
    this.renderer.setAnimationLoop(() => this.frame());

    SDK.loadingStop();
    setTimeout(() => this.audio.loadSamples(), 300);
    $('loading').classList.add('hidden');
    this.showMenu();
  }

  // ---------------- UI ----------------
  bindUI() {
    const click = (id, fn) => $(id).addEventListener('click', (e) => { e.stopPropagation(); this.audio.unlock(); this.audio.play('click'); fn(); });
    click('bPlay', () => this.playSel());
    for (const k of ['lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6', 'lvl7', 'lvl8', 'lvl9', 'lvl10', 'lvl11', 'lvl12', 'daily']) $(k).addEventListener('click', (e) => { e.stopPropagation(); this.audio.unlock(); this.audio.play('click'); this.selectPin(k); });
    for (const el of document.querySelectorAll('#diff button')) {
      el.addEventListener('click', (e) => {
        e.stopPropagation(); this.audio.unlock(); this.audio.play('click');
        if (el.dataset.d === 'ironman' && !this.ironUnlocked()) { this.audio.play('nope'); el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); return; }
        this.diff = el.dataset.d; this.save.diff = this.diff; SDK.store(this.save); this.showMenu();
      });
    }
    click('bResume', () => this.resume());
    click('bPSkip', () => { this.skipTutorial(); this.resume(); });
    click('bSet', () => this.showSettings());
    click('bPSet', () => this.showSettings());
    click('bSetBack', () => { if (this.setFrom === 'pause') { this.state = 'pause'; this.screen('pause'); } else this.showMenu(); });
    for (const el of document.querySelectorAll('#settings input')) el.addEventListener('input', () => this.readSettings());
    click('bRestart', () => this.start());
    click('bPMenu', () => this.showMenu());
    click('bRetry', () => this.retry());
    click('bNext', () => {
      if (this.mode === 'daily') this.showMenu();
      else if (this.levelIdx === 0 && this.bankUnlocked()) this.start('classic', 1);
      else if (this.levelIdx === 1 && this.jewelryUnlocked()) this.start('classic', 2);
      else if (this.levelIdx === 2 && this.museumUnlocked()) this.start('classic', 3);
      else if (this.levelIdx === 3 && this.casinoUnlocked()) this.start('classic', 4);
      else if (this.levelIdx === 4 && this.penthouseUnlocked()) this.start('classic', 5);
      else if (this.levelIdx === 5 && this.trainUnlocked()) this.start('classic', 6);
      else if (this.levelIdx === 6 && this.warehouseUnlocked()) this.start('classic', 7);
      else if (this.levelIdx === 7 && this.mansionUnlocked()) this.start('classic', 8);
      else if (this.levelIdx === 8 && this.diamondUnlocked()) this.start('classic', 9);
      else if (this.levelIdx >= 9 && this.levelIdx + 1 < LEVELS.length && this.levelUnlocked(this.levelIdx + 1)) this.start('classic', this.levelIdx + 1);
      else this.showSoon();
    });
    click('bRMenu', () => this.showMenu());
    click('bBRetry', () => this.retry());
    click('bBMenu', () => this.showMenu());
    click('bEasy', () => { this.diff = 'easy'; this.bustStreak = 0; this.start('classic', this.levelIdx); });
    click('bRevive', () => this.reviveAd());
    click('bSoonBack', () => this.showMenu());
    click('bTrophy', () => this.showTrophies());
    click('bOutfit', () => this.showOutfits());
    click('bOfBack', () => this.showMenu());
    click('bTut', () => { this.introSeen = false; this.start('tutorial', 0); });
    click('bISkip', () => this.endIntro());
    click('bHint', () => this.showHintTip());
    click('bINext', () => this.nextIntro());
    $('c').addEventListener('pointerdown', () => { if (this.state === 'intro' && this.introT > 0.6) this.nextIntro(); });
    $('tutSkip').addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); if (this.game.tut) this.skipTutorial(); });
    click('bTrBack', () => this.showMenu());
    click('bPause', () => this.pause());
    click('bMute', () => this.toggleMute());
    this.input.on('pause', () => { if (this.state === 'play') this.pause(); else if (this.state === 'pause') this.resume(); });
    this.input.on('restart', () => { if (['play', 'pause', 'result', 'busted'].includes(this.state)) this.start(); });
    this.input.on('mute', () => this.toggleMute());
    this.input.on('key', (code) => {
      if (code === 'KeyT' && this.state === 'play' && this.game.tut) this.skipTutorial();
      if (code === 'KeyH' && this.state === 'play') this.showHintTip();
      if (this.state === 'intro') { if (code === 'Escape') this.endIntro(); else if (code === 'Enter' || code === 'Space' || code === 'KeyE') this.nextIntro(); return; }
      if ((code === 'Enter' || code === 'Space') && this.state === 'menu') { this.audio.unlock(); this.playSel(); }
      else if (code === 'Enter' && this.state === 'result') { this.audio.unlock(); $('bNext').click(); }
      else if ((code === 'Enter' || code === 'Space') && (this.state === 'result' || this.state === 'busted')) { this.audio.unlock(); this.retry(); }
    });
    this.input.on('mode', () => this.syncTouch());
    // a pointer lock that lands late (async) must not trap the mouse during menus / the intro cutscene
    this.input.on('lock', () => { if (this.state !== 'play') this.input.exitLock(); });
    this.input.on('unlock', () => { if (this.state === 'play' && this.game.state === 'play' && !this.input.touch) this.pause(); });
    addEventListener('pointerdown', () => this.audio.unlock(), { capture: true });
    // iOS Safari only treats touchend/click as a user gesture for starting audio
    for (const ev of ['touchend', 'click']) addEventListener(ev, () => this.audio.unlock(), { capture: true, passive: true });
    addEventListener('keydown', () => this.audio.unlock(), { capture: true });
    addEventListener('blur', () => { if (this.state === 'play') this.pause(); });
    document.addEventListener('visibilitychange', () => {
      this.audio.setHidden(document.hidden);
      if (document.hidden && this.state === 'play') this.pause();
    });
    this.updateMuteIcon();
  }

  // win celebration: a burst of paper confetti + bills over the result screen (DOM, auto-removed)
  confetti(n) {
    const box = document.createElement('div'); box.className = 'confetti';
    const cols = ['#ffd23a', '#ff5a6a', '#4fe0a0', '#7fd8ff', '#c77dff', '#fff6e8'];
    for (let i = 0; i < n; i++) {
      const e = document.createElement('i'), bill = Math.random() < 0.25;
      e.className = bill ? 'bill' : '';
      e.style.left = (Math.random() * 100) + '%';
      e.style.background = bill ? '' : cols[(Math.random() * cols.length) | 0];
      e.style.animationDelay = (Math.random() * 0.6) + 's';
      e.style.animationDuration = (1.8 + Math.random() * 1.6) + 's';
      e.style.setProperty('--dx', ((Math.random() - 0.5) * 220) + 'px');
      e.style.setProperty('--r', ((Math.random() - 0.5) * 1440) + 'deg');
      box.appendChild(e);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 4500);
  }
  // cartoon iris-open reveal when a heist starts
  iris() {
    const e = $('iris'); if (!e) return;
    e.classList.remove('go'); void e.offsetWidth; e.classList.add('go');
    clearTimeout(this.irisT); this.irisT = setTimeout(() => e.classList.remove('go'), 850);
  }
  screen(id) {
    for (const s of document.querySelectorAll('.screen')) s.classList.toggle('hidden', s.id !== id);
    const inGame = this.state === 'play';
    this.input.active = inGame;
    if (!inGame) this.input.exitLock();
    $('fp').classList.toggle('hidden', !inGame);
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
    { const m = document.querySelector('meta[name=build]'), v = $('ver'); if (v && m) v.textContent = 'build ' + m.content; }
    this.lastTutLevel = null;
    // daily login bonus: cash for the Locker, growing with consecutive days
    if (this.save.tutDone) {
      const today = dayKeyNow(), lg = this.save.login || { last: '', n: 0 };
      if (lg.last !== today) {
        lg.n = lg.last === prevDayKey() ? lg.n + 1 : 1; lg.last = today; this.save.login = lg;
        const amt = 500 * Math.min(lg.n, 7);
        this.save.cash = (this.save.cash || 0) + amt; SDK.store(this.save);
        const el = $('bonus'); el.querySelector('b').textContent = '+' + fmtMoney(amt);
        const d7 = ((lg.n - 1) % 7) + 1;
        el.querySelector('.days').innerHTML = [1, 2, 3, 4, 5, 6, 7].map((d) => `<i class="${d < d7 ? 'on' : d === d7 ? 'now' : ''}">${d === 7 ? '🧤' : d}</i>`).join('');
        el.querySelector('em').textContent = lg.n >= 7 ? `Day ${lg.n} in a row! Max bonus` : `Day ${lg.n} of 7 · day 7 unlocks the Gold Chain outfit`;
        el.classList.remove('hidden'); el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
        clearTimeout(this.bonT); this.bonT = setTimeout(() => el.classList.add('hidden'), 4200);
        setTimeout(() => { this.audio.play('safe'); this.shake.add(0.15); }, 250);
      }
    }
    SDK.gameplayStop();
    this.audio.siren(false);
    this.state = 'menu';
    this.game.reset();
    const b = this.save.best[diffKey('safehouse', this.diff)];
    const bu = this.bankUnlocked(), bb = this.save.best[diffKey('bank', this.diff)];
    $('lvl2').classList.toggle('lock', !bu);
    $('daily').classList.toggle('lock', !bu);
    if (!bu && this.sel === 'daily') this.sel = this.save.sel = 'lvl1';
    $('lvl2art').textContent = bu ? '🏦' : '🔒';
    $('lvl2stars').innerHTML = bu ? this.starsHTML(bb ? bb.stars : 0) : '';
    $('lvl2best').textContent = bu ? (bb ? 'Best ' + fmtMoney(bb.score) : 'New!') : 'Escape Safe House to unlock';
    const ju = this.jewelryUnlocked(), jb = this.save.best[diffKey('jewelry', this.diff)];
    $('lvl3').classList.toggle('lock', !ju);
    $('lvl3art').textContent = ju ? '💎' : '🔒';
    $('lvl3stars').innerHTML = ju ? this.starsHTML(jb ? jb.stars : 0) : '';
    const cu = this.casinoUnlocked(), cb = this.save.best[diffKey('casino', this.diff)];
    $('lvl5').classList.toggle('lock', !cu);
    $('lvl5art').textContent = cu ? '🎰' : '🔒';
    $('lvl5stars').innerHTML = cu ? this.starsHTML(cb ? cb.stars : 0) : '';
    $('lvl5best').textContent = cu ? (cb ? 'Best ' + fmtMoney(cb.score) : 'New!') : 'Escape the Museum to unlock';
    const mnu = this.mansionUnlocked(), mnb = this.save.best[diffKey('mansion', this.diff)];
    $('lvl9').classList.toggle('lock', !mnu);
    $('lvl9art').textContent = mnu ? '🥂' : '🔒';
    $('lvl9stars').innerHTML = mnu ? this.starsHTML(mnb ? mnb.stars : 0) : '';
    $('lvl9best').textContent = mnu ? (mnb ? 'Best ' + fmtMoney(mnb.score) : 'New!') : 'Escape the Warehouse to unlock';
    { // generic pins for heists 11+
      const ICON = { depot: '🚚', auction: '🖼️' };
      for (let i = 10; i < LEVELS.length; i++) {
        const l = LEVELS[i], k = 'lvl' + (i + 1), el = $(k); if (!el) continue;
        const un = this.levelUnlocked(i), bb = this.save.best[diffKey(l.id, this.diff)];
        el.classList.toggle('lock', !un);
        $(k + 'art').textContent = un ? (ICON[l.id] || '💰') : '🔒';
        $(k + 'stars').innerHTML = un ? this.starsHTML(bb ? bb.stars : 0) : '';
        $(k + 'best').textContent = un ? (bb ? 'Best ' + fmtMoney(bb.score) : 'New!') : 'Escape ' + LEVELS[i - 1].name + ' to unlock';
      }
    }
    const du = this.diamondUnlocked(), dmb = this.save.best[diffKey('diamond', this.diff)];
    $('lvl10').classList.toggle('lock', !du);
    $('lvl10art').textContent = du ? '🏢' : '🔒';
    $('lvl10stars').innerHTML = du ? this.starsHTML(dmb ? dmb.stars : 0) : '';
    $('lvl10best').textContent = du ? (dmb ? 'Best ' + fmtMoney(dmb.score) : 'New!') : 'Escape the Mansion Gala to unlock';
    const wu = this.warehouseUnlocked(), wb = this.save.best[diffKey('warehouse', this.diff)];
    $('lvl8').classList.toggle('lock', !wu);
    $('lvl8art').textContent = wu ? '📦' : '🔒';
    $('lvl8stars').innerHTML = wu ? this.starsHTML(wb ? wb.stars : 0) : '';
    $('lvl8best').textContent = wu ? (wb ? 'Best ' + fmtMoney(wb.score) : 'New!') : 'Escape the Night Train to unlock';
    const tu = this.trainUnlocked(), tb = this.save.best[diffKey('train', this.diff)];
    $('lvl7').classList.toggle('lock', !tu);
    $('lvl7art').textContent = tu ? '🚂' : '🔒';
    $('lvl7stars').innerHTML = tu ? this.starsHTML(tb ? tb.stars : 0) : '';
    $('lvl7best').textContent = tu ? (tb ? 'Best ' + fmtMoney(tb.score) : 'New!') : 'Escape the Penthouse to unlock';
    const pu = this.penthouseUnlocked(), pb = this.save.best[diffKey('penthouse', this.diff)];
    $('lvl6').classList.toggle('lock', !pu);
    $('lvl6art').textContent = pu ? '🌃' : '🔒';
    $('lvl6stars').innerHTML = pu ? this.starsHTML(pb ? pb.stars : 0) : '';
    $('lvl6best').textContent = pu ? (pb ? 'Best ' + fmtMoney(pb.score) : 'New!') : 'Escape the Casino to unlock';
    const mu = this.museumUnlocked(), mb = this.save.best[diffKey('museum', this.diff)];
    $('lvl4').classList.toggle('lock', !mu);
    $('lvl4art').textContent = mu ? '🏛️' : '🔒';
    $('lvl4stars').innerHTML = mu ? this.starsHTML(mb ? mb.stars : 0) : '';
    $('lvl4best').textContent = mu ? (mb ? 'Best ' + fmtMoney(mb.score) : 'New!') : 'Escape the Jewelry Store to unlock';
    $('lvl3best').textContent = ju ? (jb ? 'Best ' + fmtMoney(jb.score) : 'New!') : 'Escape the Bank to unlock';
    // fresh unlocks that were never played get a pulsing NEW sticker on the map
    LEVELS.forEach((l, i) => { const el = $('lvl' + (i + 1)); if (!el || i === 0) return; const played = ['', '_easy', '_hard', '_ironman'].some((x) => this.save.best[l.id + x]) || (this.save.played || {})[l.id]; el.classList.toggle('fresh', this.levelUnlocked(i) && !played); });
    this.renderSel();
    if (this.diff === 'ironman' && !this.ironUnlocked()) this.diff = 'normal';
    for (const el of document.querySelectorAll('#diff button')) { el.classList.toggle('on', el.dataset.d === this.diff); if (el.dataset.d === 'ironman') { el.classList.toggle('lock', !this.ironUnlocked()); el.title = this.ironUnlocked() ? 'Ironman: x2.5 score, 1 coin, no smoke, 15s police' : 'Escape any heist on Hard to unlock'; } }
    $('lvl1stars').innerHTML = this.starsHTML(b ? b.stars : 0);
    $('lvl1best').textContent = b ? 'Best ' + fmtMoney(b.score) : 'New!';
    this.daily = this.todays();
    const db = (this.save.daily || {})[this.daily.key];
    $('dMut').textContent = this.daily.mutator.name;
    { const n = new Date(); $('dArt').innerHTML = `<span style="font-size:20px">${n.getDate()}</span>`; }
    $('dDesc').textContent = this.daily.mutator.desc + ' · ' + LEVELS[this.daily.level].name;
    $('dBest').textContent = (db ? 'Today ' + fmtMoney(db.score) : this.daily.label) + ((this.save.streak && this.save.streak.n > 1 && (this.save.streak.last === this.daily.key || this.save.streak.last === prevDayKey())) ? ` · 🔥${this.save.streak.n}` : '');
    this.screen('menu');
  }
  runRecord(win, res) {
    const g = this.game;
    return {
      win, level: this.level.id, diff: this.mode === 'daily' ? 'daily' : this.diff, ghost: win && res.ghost, time: g.time, kos: g.kos,
      frac: g.lootGot / g.lootTotal, loot: g.lootGot, contractsDone: win ? res.contracts.filter((c) => c.st === 'ok').length : 0,
      hides: g.hidesUsed, smokes: g.smokesUsed, coins: g.coinsThrown, radio: g.radioFaked, picks: g.picks, vents: g.ventsUsed, close: g.closeCalls, briefs: g.briefsGot, photo: g.photoFinish, streak: g.maxKoStreak || 0, disguised: g.disguiseT > 0 && g.disguises > 0, lasers: g.lasersTripped, power: g.powerOff,
    };
  }
  applyOutfit() {
    let o = OUTFITS.find((x) => x.id === this.save.outfit);
    if (!o || !unlocked(o, this.save)) o = OUTFITS[0];
    this.vm.setOutfit(colorsOf(o));
    return o;
  }
  gearMods(on) { return gearMods(this.save, on); }
  canAffordGear() { return GEAR.some((g) => { const p = nextPrice(this.save, g); return p != null && (this.save.cash || 0) >= p; }); }
  renderGear() {
    const cash = this.save.cash || 0;
    $('wallet').textContent = '💰 ' + fmtMoney(cash);
    $('gearGrid').innerHTML = GEAR.map((g) => {
      const lv = gearLv(this.save, g.id), p = nextPrice(this.save, g), max = p == null;
      return `<button class="gr ${max ? 'max' : cash >= p ? '' : 'cant'}" data-id="${g.id}"><span class="ic">${g.icon}</span><b>${g.name}</b><small>${g.desc}</small>
        <span class="pips">${g.prices.map((_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</span><span class="pr">${max ? 'MAXED' : fmtMoney(p)}</span></button>`;
    }).join('');
    for (const el of document.querySelectorAll('#gearGrid .gr')) el.addEventListener('click', (e) => {
      e.stopPropagation();
      const g = GEAR.find((x) => x.id === el.dataset.id), p = nextPrice(this.save, g);
      if (p == null || (this.save.cash || 0) < p) { this.audio.play('nope'); el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); return; }
      this.save.cash -= p; (this.save.gear = this.save.gear || {})[g.id] = gearLv(this.save, g.id) + 1;
      SDK.store(this.save);
      this.audio.play('safe'); this.shake.add(0.15);
      this.renderGear();
      const nb = document.querySelector(`#gearGrid .gr[data-id="${g.id}"]`); if (nb) nb.classList.add('buy');
    });
  }
  showOutfits() {
    SDK.gameplayStop();
    this.state = 'outfits';
    this.renderGear();
    const cur = this.applyOutfit();
    const sw = (c) => '#' + c.toString(16).padStart(6, '0');
    $('ofGrid').innerHTML = OUTFITS.map((o) => {
      const ok = unlocked(o, this.save);
      return `<button class="of ${ok ? '' : 'lock'} ${o.id === cur.id ? 'on' : ''}" data-id="${o.id}">
        <span class="sw"><i style="background:${sw(o.sleeve)}"></i><i style="background:${sw(o.glove)}"></i><i style="background:${sw(o.bar)}"></i></span>
        <b>${o.name}</b><small>${ok ? (o.id === cur.id ? 'EQUIPPED' : 'Tap to wear') : '🔒 ' + needText(o, ACH)}</small></button>`;
    }).join('');
    for (const el of document.querySelectorAll('#ofGrid .of')) {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const o = OUTFITS.find((x) => x.id === el.dataset.id);
        if (!unlocked(o, this.save)) { this.audio.play('nope'); el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); return; }
        this.audio.play('pick', 4);
        this.save.outfit = o.id; SDK.store(this.save);
        this.showOutfits();
      });
    }
    this.screen('outfits');
  }
  showTrophies() {
    SDK.gameplayStop();
    this.state = 'trophies';
    const s = Object.assign(blankStats(), this.save.stats || {}), got = this.save.ach || {};
    const bt = (id) => (s.best[id] != null ? fmtTime(s.best[id]) : '—');
    const rows = [['Heists', s.runs], ['Escapes', s.escapes], ['Busted', s.busts], ['Total loot', fmtMoney(s.loot)], ['Guards KO', s.kos],
      ['Contracts', s.contracts], ['Lucky cats', Object.keys(this.save.cats || {}).length + '/' + LEVELS.length], ['Best Safe House', bt('safehouse')], ['Best Bank', bt('bank')], ['Best Jewelry', bt('jewelry')],
      ['Best Museum', bt('museum')], ['Best Casino', bt('casino')], ['Best Penthouse', bt('penthouse')], ['Best Train', bt('train')], ['Best Warehouse', bt('warehouse')], ['Best Mansion', bt('mansion')], ['Best Diamond Exchange', bt('diamond')], ['Best Depot', bt('depot')], ['Best Auction House', bt('auction')]];
    $('trJobs').innerHTML = this.jobsHTML();
    $('jobsIn').textContent = `(new jobs in ${nextDailyIn()})`;
    for (let i = rows.length - 1; i >= 0; i--) if (String(rows[i][0]).startsWith('Best ') && rows[i][1] === '—') rows.splice(i, 1);
    $('trStats').innerHTML = rows.map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join('');
    $('trAch').innerHTML = ACH.map((a) => `<div class="ach ${got[a.id] ? 'on' : ''}"><i>${got[a.id] ? a.icon : '🔒'}</i><b>${a.name}</b><small>${a.desc}</small></div>`).join('');
    $('trCount').textContent = `${Object.keys(got).filter((k) => ACH.some((a) => a.id === k)).length} / ${ACH.length}`;
    this.screen('trophies');
  }
  chipify(id) {
    const el = $(id), parts = el.innerHTML.split(/<br\s*\/?>/).map((x) => x.trim()).filter(Boolean);
    el.innerHTML = parts.map((x, i) => `<span class="rw" style="animation-delay:${(1.3 + i * 0.12).toFixed(2)}s">${x}</span>`).join('');
  }
  jobsHTML() {
    const J = todaysJobs(this.save), fm = (d, v) => (d.money ? fmtMoney(v) : v);
    return J.ids.map((id) => { const d = jobDef(id), p = J.prog[id] || 0, ok = !!J.done[id];
      return `<li class="${ok ? 'ok' : ''}"><i></i><span>${d.text}</span><em>${ok ? '✔' : fm(d, p) + '/' + fm(d, d.n)}</em><b>+${fmtMoney(JOB_CASH)}</b></li>`; }).join('')
      + `<li class="bonus ${J.bonus ? 'ok' : ''}"><i></i><span>All 3 done</span><em>${J.bonus ? '✔' : ''}</em><b>+${fmtMoney(JOB_BONUS)}</b></li>`;
  }
  jobsToast(res) {
    if (!this.save.tutDone) return '';
    const out = res.fresh.map((d) => `📋 Job done: <b>${d.text}</b> +${fmtMoney(JOB_CASH)}`);
    if (res.bonus) out.push(`📋 <b>All daily jobs done!</b> +${fmtMoney(JOB_BONUS)}`);
    if (out.length) setTimeout(() => { if (this.state === 'result' || this.state === 'busted') { this.audio.play('contract'); this.shake.add(0.12); } }, 2000);
    return out.join('<br>');
  }
  showAchToast(list) {
    $('rAch').innerHTML = list.length ? '🏆 Unlocked: ' + list.map((a) => `<b>${a.icon} ${a.name}</b>`).join(' · ') : '';
    $('rAch').classList.toggle('hidden', !list.length);
    if (list.length) setTimeout(() => this.audio.play('contract'), 1600);
  }
  pinLocked(k) { return k === 'lvl2' ? !this.bankUnlocked() : k === 'lvl3' ? !this.jewelryUnlocked() : k === 'lvl4' ? !this.museumUnlocked() : k === 'lvl5' ? !this.casinoUnlocked() : k === 'lvl6' ? !this.penthouseUnlocked() : k === 'lvl7' ? !this.trainUnlocked() : k === 'lvl8' ? !this.warehouseUnlocked() : k === 'lvl9' ? !this.mansionUnlocked() : k === 'lvl10' ? !this.diamondUnlocked() : k === 'lvl11' ? !this.levelUnlocked(10) : k === 'lvl12' ? !this.levelUnlocked(11) : k === 'daily' ? !this.bankUnlocked() : false; }
  selectPin(k) {
    this.sel = k; this.save.sel = k;
    if (this.pinLocked(k)) { const c = $(k); c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake'); }
    this.renderSel();
  }
  renderSel() {
    let k = this.sel || this.save.sel || 'lvl1';
    if (!$(k)) k = 'lvl1';
    this.sel = k;
    for (const id of ['lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6', 'lvl7', 'lvl8', 'lvl9', 'lvl10', 'lvl11', 'lvl12', 'daily']) $(id).classList.toggle('on', id === k);
    const el = $(k), locked = this.pinLocked(k);
    $('selName').textContent = k === 'daily' ? 'Daily: ' + $('dMut').textContent : el.querySelector('.t').textContent;
    const st = el.querySelector('.stars');
    $('selStars').innerHTML = st ? st.innerHTML : '';
    const dPlayed = !!(this.save.daily || {})[this.daily && this.daily.key];
    const hotLine = k !== 'daily' && !locked && pinIdx(k) === this.hotTarget() ? `🎯 HOT TARGET: double cash this week (${weekInfo().left} left)  ·  ` : '';
    const catLine = k !== 'daily' && !locked && this.save.tutDone ? ((this.save.cats || {})[LEVELS[pinIdx(k)].id] ? '  ·  🐱 cat found' : '  ·  🐱 a lucky cat is hidden here') : '';
    $('selSub').textContent = k === 'daily' ? $('dDesc').textContent + ' · ' + $('dBest').textContent + (dPlayed ? ` · new Daily in ${nextDailyIn()}` : '') : hotLine + el.querySelector('.best').textContent + catLine;
    // next goal: missing stars on this heist + the next outfit unlock
    const goals = [];
    if (!locked && k !== 'daily' && this.save.tutDone) {
      const id = LEVELS[pinIdx(k)].id, n = (this.save.best[diffKey(id, this.diff)] || { stars: 0 }).stars;
      if (n === 0) goals.push('Escape to earn your first ★');
      else if (n < 3) goals.push('Next ★: grab 70% loot · or never get spotted');
    }
    if (this.save.tutDone && (this.save.hot || 0) >= 1) goals.unshift(`🔥 Hot streak ${this.save.hot}: next escape +${Math.min(50, 10 * this.save.hot)}% cash`);
    if (this.save.tutDone && this.canAffordGear()) goals.unshift('🧰 You can afford new gear in the Locker!');
    if (this.save.tutDone) { const J = todaysJobs(this.save), id = J.ids.find((x) => !J.done[x]); if (id) { const d = jobDef(id), p = J.prog[id] || 0; goals.push(`📋 Job: ${d.text} (${d.money ? fmtMoney(p) : p}/${d.money ? fmtMoney(d.n) : d.n})`); } }
    const sk = this.save.streak;
    if (sk && sk.n >= 1 && sk.last === prevDayKey()) goals.unshift(`🔥 Play today's Daily to keep your ${sk.n}-day streak`);
    const nT = Object.keys(this.save.ach || {}).length, nxt = OUTFITS.filter((o) => o.need && o.need > nT).sort((a, b) => a.need - b.need)[0];
    if (nxt && this.save.tutDone) goals.push(`🧤 ${nxt.need - nT} more troph${nxt.need - nT === 1 ? 'y' : 'ies'} → ${nxt.name} outfit`);
    $('selGoal').textContent = goals.slice(0, 2).join('  ·  ');
    $('selGoal').classList.toggle('hidden', !goals.length);
    $('bPlay').textContent = locked ? '🔒 LOCKED' : 'PLAY';
    $('bPlay').classList.toggle('dis', locked);
    $('daily').classList.toggle('done', dPlayed);
    $('bPlay').classList.toggle('pulse', !locked && !this.save.tutDone && !this.runs);
    let tot = 0;
    for (const id of LEVELS.map((l) => l.id)) tot += Math.max(...['', '_easy', '_hard', '_ironman'].map((x) => (this.save.best[id + x] || { stars: 0 }).stars));
    $('starTotal').textContent = `★ ${tot}/${LEVELS.length * 3}`;
    const ht = this.hotTarget();
    LEVELS.forEach((l, i) => { const el = $('lvl' + (i + 1)); if (el) { el.classList.toggle('gold', !!(this.save.mastered || {})[l.id]); el.classList.toggle('hot', i === ht); } });
    { const c = this.save.cash || 0, k = c >= 1e6 ? (c / 1e6).toFixed(1) + 'M' : c >= 1e3 ? (c / 1e3).toFixed(c >= 1e4 ? 0 : 1) + 'k' : String(c); $('bOutfit').innerHTML = `🧰 LOCKER${c ? ` <small>$${k}</small>` : ''}`; }
    { const J = todaysJobs(this.save), n = J.ids.filter((x) => J.done[x]).length; $('bTrophy').innerHTML = this.save.tutDone ? `📋 JOBS <small>${n}/3</small>` : '🏆 TROPHIES'; }
    $('bOutfit').classList.toggle('pulse', this.save.tutDone && this.canAffordGear());
    { const r = rankOf(this.save.xp || 0); $('rankChip').innerHTML = `🎖 ${r.name}<i style="width:${(r.frac * 100).toFixed(0)}%"></i>`; $('rankChip').title = r.next ? `${r.toNext} XP to ${r.next}` : 'Max rank'; }
  }
  playSel() {
    const k = this.sel || 'lvl1';
    if (this.pinLocked(k)) { this.audio.play('nope'); this.selectPin(k); return; }
    if (k === 'daily') this.start('daily');
    else this.start('classic', pinIdx(k));
  }
  // animated heist route recap on a minimap canvas
  drawRecap(id, win) {
    const cv = $(id), g = this.game, L = g.L, base = this.mmBase;
    if (!cv || !base) return;
    const S = this.mmS, k = Math.min(260 / base.width, 170 / base.height);
    cv.width = Math.round(base.width * k * 2); cv.height = Math.round(base.height * k * 2);
    const x = cv.getContext('2d'), sc = (cv.width / base.width) * S, trail = g.trail.slice(), marks = g.marks.slice();
    trail.push([g.player.x, g.player.z, trail.length ? trail[trail.length - 1][2] : 0]);
    const t0 = performance.now(), dur = 1600, my = (this.recapId = (this.recapId || 0) + 1);
    const icon = (m, a) => {
      const px = m.x * sc, pz = m.z * sc, r = 5.5;
      x.globalAlpha = a;
      if (m.t === 'ko') { x.strokeStyle = '#c77dff'; x.lineWidth = 3; x.beginPath(); x.moveTo(px - r, pz - r); x.lineTo(px + r, pz + r); x.moveTo(px + r, pz - r); x.lineTo(px - r, pz + r); x.stroke(); }
      else if (m.t === 'alarm' || m.t === 'caught') { x.fillStyle = '#ff3b4e'; x.beginPath(); x.arc(px, pz, r + 2, 0, 6.3); x.fill(); x.fillStyle = '#fff'; x.font = 'bold 11px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(m.t === 'caught' ? '✖' : '!', px, pz + 1); }
      else if (m.t === 'safe') { x.fillStyle = '#ffd23f'; x.fillRect(px - r, pz - r, r * 2, r * 2); x.strokeStyle = '#1c1330'; x.lineWidth = 2; x.strokeRect(px - r, pz - r, r * 2, r * 2); }
      else { x.fillStyle = m.t === 'cash' ? '#4fe0a0' : '#ffc94a'; x.beginPath(); x.arc(px, pz, m.t === 'cash' ? 3 : 4.5, 0, 6.3); x.fill(); }
      x.globalAlpha = 1;
    };
    const frame = () => {
      if (my !== this.recapId) return;
      const p = Math.min(1, (performance.now() - t0) / dur), n = Math.max(1, Math.floor(trail.length * p));
      x.drawImage(base, 0, 0, cv.width, cv.height);
      x.fillStyle = 'rgba(28,19,48,.18)'; x.fillRect(0, 0, cv.width, cv.height);
      x.lineCap = 'round'; x.lineJoin = 'round'; x.lineWidth = 3.5;
      for (let i = 1; i < n; i++) {
        const a = trail[i - 1], b = trail[i];
        x.strokeStyle = b[2] ? '#ff5a6a' : '#4fe0a0';
        x.beginPath(); x.moveTo(a[0] * sc, a[1] * sc); x.lineTo(b[0] * sc, b[1] * sc); x.stroke();
      }
      const shown = Math.floor(marks.length * p);
      for (let i = 0; i < marks.length; i++) if (i < shown || p >= 1) icon(marks[i], 1);
      const h = trail[n - 1];
      if (h) { x.fillStyle = '#fff6e8'; x.strokeStyle = '#1c1330'; x.lineWidth = 2; x.beginPath(); x.arc(h[0] * sc, h[1] * sc, 5, 0, 6.3); x.fill(); x.stroke(); }
      if (p < 1) requestAnimationFrame(frame);
    };
    frame();
    const seenPct = trail.length ? Math.round((trail.filter((t) => t[2]).length / trail.length) * 100) : 0;
    const lg = $(id + 'Lg');
    if (lg) lg.innerHTML = `<i style="background:#4fe0a0"></i>unseen <i style="background:#ff5a6a"></i>chased ${seenPct}% <i style="background:#ffc94a;border-radius:50%"></i>loot <b style="color:#c77dff">✕</b> KO`;
  }
  showSoon() {
    SDK.gameplayStop();
    this.state = 'soon';
    $('soonName').textContent = 'More heists';
    $('soonList').innerHTML = ['Harbor yacht party', 'Airport cargo hold', 'Royal train'].map((t) => `<li>${t}</li>`).join('');
    this.screen('soon');
  }
  hotTarget() {
    const open = LEVELS.map((l, i) => i).filter((i) => this.levelUnlocked(i));
    if (open.length < 2) return -1;
    const pool = open.filter((i) => i > 0), w = weekInfo().week;
    return pool[((w * 2654435761) >>> 0) % pool.length];
  }
  todays() {
    const d = todaysDaily(LEVELS.map((l, idx) => ({ idx, owner: !!l.owner, dog: !!l.dog })).filter((l) => this.levelUnlocked(l.idx)));
    // once today's daily has been played, keep the same heist + mutator even if more levels unlock later today
    const pk = this.save.dailyPick;
    if (pk && pk.key === d.key) { const m = MUTATORS.find((x) => x.id === pk.mut); if (m) { d.level = pk.level; d.mutator = m; } }
    return d;
  }
  levelUnlocked(i) {
    return [() => true, () => this.bankUnlocked(), () => this.jewelryUnlocked(), () => this.museumUnlocked(), () => this.casinoUnlocked(), () => this.penthouseUnlocked(), () => this.trainUnlocked(), () => this.warehouseUnlocked(), () => this.mansionUnlocked(), () => this.diamondUnlocked(), () => this.genUnlocked(10), () => this.genUnlocked(11)][i]?.() || false;
  }
  // later heists unlock generically: escape the previous one (any difficulty) or a debug/open flag
  genUnlocked(i) {
    const l = LEVELS[i], b = this.save.best, u = l.unlock;
    return !!(b[u] || b[u + '_easy'] || b[u + '_hard'] || b[u + '_ironman'] || this.save[l.id + 'Open']);
  }
  diamondUnlocked() {
    const b = this.save.best;
    return !!(b.mansion || b.mansion_easy || b.mansion_hard || b.mansion_ironman || this.save.diamondOpen);
  }
  mansionUnlocked() {
    const b = this.save.best;
    return !!(b.warehouse || b.warehouse_easy || b.warehouse_hard || b.warehouse_ironman || this.save.mansionOpen);
  }
  warehouseUnlocked() {
    const b = this.save.best;
    return !!(b.train || b.train_easy || b.train_hard || b.train_ironman || this.save.warehouseOpen);
  }
  trainUnlocked() {
    const b = this.save.best;
    return !!(b.penthouse || b.penthouse_easy || b.penthouse_hard || b.penthouse_ironman || this.save.trainOpen);
  }
  penthouseUnlocked() {
    const b = this.save.best;
    return !!(b.casino || b.casino_easy || b.casino_hard || b.casino_ironman || this.save.penthouseOpen);
  }
  casinoUnlocked() {
    const b = this.save.best;
    return !!(b.museum || b.museum_easy || b.museum_hard || b.museum_ironman || this.save.casinoOpen);
  }
  museumUnlocked() {
    const b = this.save.best;
    return !!(b.jewelry || b.jewelry_easy || b.jewelry_hard || b.jewelry_ironman || this.save.museumOpen);
  }
  jewelryUnlocked() {
    const b = this.save.best;
    return !!(b.bank || b.bank_easy || b.bank_hard || b.bank_ironman || this.save.jewelryOpen);
  }
  ironUnlocked() {
    return Object.keys(this.save.best).some((k) => k.endsWith('_hard') || k.endsWith('_ironman'));
  }
  bankUnlocked() {
    const b = this.save.best;
    return !!(b.safehouse || b.safehouse_easy || b.safehouse_hard || b.safehouse_ironman || this.save.bankOpen);
  }
  async useLevel(i) {
    if (this.loadedIdx === i) return;
    this.level = await loadLevel(i);
    this.game.load(this.level);
    this.buildMinimap();
    this.loadedIdx = i;
    this.audio.theme = i;
    // per-level environment (day / night)
    const n = !!this.level.night;
    this.scene.background.setHex(n ? 0x141a33 : 0xf4b98a);
    this.scene.fog.color.setHex(n ? 0x1a2240 : 0xf0c49a);
    this.scene.fog.near = n ? 10 : 16; this.scene.fog.far = n ? 48 : 70;
    this.sky.material.color.setHex(n ? 0x26305a : 0xffffff);
    this.nightSky.visible = n;
    this.rain.setLevel(this.level.rain ? this.game.L : null);
    this.dust.points.material.color.setHex(n ? 0xb8c8ff : 0xffe2b0);
    this.hemi.intensity = n ? 1.1 : 1.8; this.hemi.color.setHex(n ? 0xb8c4ff : 0xffe6c8);
    this.sun.intensity = n ? 0.5 : 1.4; this.sun.color.setHex(n ? 0x9fb0ff : 0xffe0b8);
    this.vm.hemi.intensity = n ? 1.6 : 2.4;
    this.renderer.compile(this.scene, this.camera);
  }
  starsHTML(n) {
    let s = '';
    for (let i = 0; i < 3; i++) s += `<span class="${i < n ? 'on' : ''}">★</span>`;
    return s;
  }

  async start(mode, idx) {
    if (mode) this.mode = mode;
    if (!this.mode) this.mode = 'classic';
    if (!mode && this.mode === 'tutorial' && this.save.tutDone) this.mode = 'classic';
    if (this.mode === 'classic' && (idx == null || idx === 0) && !this.save.tutDone && (this.levelIdx || 0) === 0) this.mode = 'tutorial';
    if (this.mode === 'daily') { if (!this.daily || this.daily.key !== dayKeyNow()) this.daily = this.todays(); idx = this.daily.level; this.save.dailyPick = { key: this.daily.key, level: idx, mut: this.daily.mutator.id }; }
    else if (this.mode === 'tutorial') idx = 0;
    if (idx != null) this.levelIdx = idx;
    const fresh = this.loadedIdx !== this.levelIdx;
    if (fresh) await this.useLevel(this.levelIdx);
    if (this.mode === 'daily' && (!this.daily || this.daily.key !== dayKeyNow())) this.daily = this.todays();
    this.audio.unlock();
    this.audio.siren(false);
    this.game.reset();
    this.input.clear();
    this.state = 'play';
    this.iris();
    this.input.requestLock();
    this.runs++;
    if (this.level && this.mode === 'classic') { this.save.played = this.save.played || {}; this.save.played[this.level.id] = 1; }
    this.startT = this.time;
    this.screen(null);
    this.hQ.length = 0;
    this.lastLoot = -1; this.lastSec = -1;
    this.onLoot(false, true);
    this.onCoins(this.game.coinsLeft);
    // ghost of your best escape on this level + difficulty (classic runs only)
    this.ghost = this.mode === 'classic' ? (this.save.ghost || {})[diffKey(this.level.id, this.diff)] || null : null;
    $('ghostp').classList.toggle('hidden', !this.ghost);
    if (this.ghost) $('ghostp').lastChild.textContent = fmtTime(this.ghost.t);
    this.onSmoke(this.game.smokesLeft);
    this.onCrouch(false);
    this.onDisguise(this.game.disguiseT);
    if (this.level.startDisguise) setTimeout(() => { if (this.state === 'play') this.announce('🍸 You\'re dressed as a waiter: from afar nobody looks twice'); }, 1300);
    this.renderContracts(this.game.contracts);
    this.tutStep = this.game.tut ? (this.lastTutLevel === this.level.id ? Math.min(this.tutStep || 0, 3) : 0) : TUT_STEPS.length; $('tut').dataset.k = '';
    this.lastTutLevel = this.game.tut ? this.level.id : null;
    clearTimeout(this.whyT); $('alarmwhy').classList.add('hidden');
    if (this.mode === 'daily') {
      const t = $('ctoast');
      t.innerHTML = `<small>DAILY CHALLENGE · ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`;
      t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
      clearTimeout(this.ctT); this.ctT = setTimeout(() => t.classList.add('hidden'), 3200);
    } else if (fresh && this.mode === 'classic' && this.save.tutDone) {
      if ((this.save.mmSeen || {})[this.level.id]) this.showIntel();
      else { $('ctoast').classList.add('hidden'); clearTimeout(this.intelT); this.intelT = setTimeout(() => { if (this.state === 'play') this.showIntel(); }, 5200); }
    }
    else $('ctoast').classList.add('hidden');
    if (!(fresh && this.mode === 'classic' && this.save.tutDone) && this.mode !== 'daily') {
      const gs = $('gostamp'); gs.querySelector('small').textContent = this.level.name.toUpperCase() + ((this.save.hot || 0) >= 1 && this.mode === 'classic' ? `  ·  🔥 STREAK ${this.save.hot}` : '');
      gs.classList.remove('hidden'); gs.style.animation = 'none'; void gs.offsetWidth; gs.style.animation = '';
      clearTimeout(this.goT); this.goT = setTimeout(() => gs.classList.add('hidden'), 1200);
      this.audio.play('dash');
    }
    if (this.mode === 'classic' && this.game.contracts.length && !this.save.seenCtr) { this.save.seenCtr = true; SDK.store(this.save); this.hint('ctr'); }
    this.hint('move');
    SDK.gameplayStart();
    { const hb = $('bHint'); hb.classList.remove('pulse'); if (this.hintPulse) { this.hintPulse = false; void hb.offsetWidth; hb.classList.add('pulse'); } }
    if (this.game.tut && this.tutStep === 0 && !this.introSeen) this.beginIntro();
    else this.mapIntro();
  }
  // first visit to a heist: the minimap blinks twice big in the middle, then glides into its corner
  mapIntro() {
    const id = this.level.id, seen = (this.save.mmSeen = this.save.mmSeen || {});
    if (seen[id]) return;
    seen[id] = 1; SDK.store(this.save);
    setTimeout(() => {
      const el = $('mm'); if (!el || this.state !== 'play' || !el.animate) return;
      const r = el.getBoundingClientRect(); if (!r.width) return;
      const s = Math.min(3, (Math.min(this.w, this.h) * 0.62) / r.width), dx = this.w / 2 - (r.left + r.width / 2), dy = this.h * 0.45 - (r.top + r.height / 2);
      const C = `translate(${dx}px,${dy}px) scale(${s})`, C0 = `translate(${dx}px,${dy}px) scale(${s * 0.7})`;
      // one calm reveal: pop in at the centre, a gold streak runs round the frame for 3s, then it glides into the corner
      el.animate([
        { transform: C0, opacity: 0, offset: 0 },
        { transform: C, opacity: 1, offset: 0.1, easing: 'linear' },
        { transform: C, opacity: 1, offset: 0.78, easing: 'cubic-bezier(.45,0,.2,1)' },
        { transform: 'none', opacity: 0.92, offset: 1 },
      ], { duration: 4300 });
      const ring = document.createElement('div'); ring.className = 'mmring';
      document.body.appendChild(ring);
      const t0 = performance.now(), follow = () => {
        if (!ring.isConnected) return;
        const q = el.getBoundingClientRect();
        Object.assign(ring.style, { left: (q.left - 7) + 'px', top: (q.top - 7) + 'px', width: (q.width + 14) + 'px', height: (q.height + 14) + 'px' });
        if (performance.now() - t0 < 3500) requestAnimationFrame(follow);
      };
      follow();
      ring.animate([{ opacity: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 1, offset: 0.92 }, { opacity: 0 }], { duration: 3400 });
      setTimeout(() => ring.remove(), 3400);
      this.audio.play('click'); setTimeout(() => this.audio.play('star', 0), 3350);
    }, 700);
  }
  // ---- intro cutscene (tutorial only) ----
  beginIntro() {
    this.introSeen = true;
    this.state = 'intro'; this.introI = -1;
    this.introHintSnap = new Set(this.hDone);
    this.floaters.minScale = 1.05;
    this.introKO = false; this.introCoin = this.introLured = this.introSafe = this.introDirty = this.introSmoke = this.introCough = this.introDisg = this.introNod = this.introR1 = this.introR2 = this.introMe = false;
    for (const g of this.game.guards) { g.cone.material.opacity = 3.2; g.cone.material.color.setHex(0xffc400); }
    this.input.active = false; this.input.exitLock();
    for (const id of ['hud', 'fp', 'touch', 'tut', 'hint', 'ctoast', 'gostamp']) $(id).classList.add('hidden');
    document.body.classList.remove('tutcard');
    this.introFrom = { p: this.camera.position.clone(), l: this._f.clone() };
    $('intro').classList.remove('hidden');
    this.nextIntro();
  }
  nextIntro() {
    if (this.state !== 'intro') return;
    const cam = this.camera;
    if (this.introI >= 0) { const s = INTRO[this.introI]; this.introFrom = { p: cam.position.clone(), l: this._introLook ? this._introLook.clone() : this._f.set(...s.look).clone() }; }
    this.introI++; this.introT = 0;
    if (this.introI >= INTRO.length) { this.endIntro(); return; }
    const s = INTRO[this.introI], c = $('intro').querySelector('.icard'), t = this.input.touch ? 1 : 0;
    c.querySelector('small').textContent = `HOW TO HEIST ${this.introI + 1}/${INTRO.length}`;
    c.querySelector('b').textContent = s.title;
    c.querySelector('span').textContent = s.text;
    c.querySelector('.ikeys').innerHTML = s.keys[t].map(([k, d]) => `<kbd>${k}<em>${d}</em></kbd>`).join('');
    c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop');
    $('bINext').textContent = this.introI === INTRO.length - 1 ? "LET'S GO! ▶" : 'NEXT ▶';
    this.audio.play('click');
  }
  updateIntro(dt) {
    const s = INTRO[this.introI]; if (!s) return;
    this.introT += dt;
    const cam = this.camera, k = Math.min(1, this.introT / 1.3), e = k * k * (3 - 2 * k);
    const f = this.introFrom, drift = this.introT * 0.12;
    const tx = s.pos[0] + Math.sin(this.introT * 0.4) * 0.4, tz = s.pos[2] - drift;
    cam.position.set(f.p.x + (tx - f.p.x) * e, f.p.y + (s.pos[1] - f.p.y) * e, f.p.z + (tz - f.p.z) * e);
    const L = (this._introLook = this._introLook || this._f.clone());
    L.set(f.l.x + (s.look[0] - f.l.x) * e, f.l.y + (s.look[1] - f.l.y) * e, f.l.z + (s.look[2] - f.l.z) * e);
    cam.lookAt(L);
    const bar = $('intro').querySelector('.ibar i'); bar.style.width = Math.min(100, (this.introT / (s.dur || SHOT_T)) * 100) + '%';
    // little scripted actor scenes
    const g = this.game, gd = g.guards[2], t = this.introT;
    if (s.act === 'sneak') g.actor(dt, 9.6 + Math.min(1, t / (s.dur || SHOT_T)) * 5.8, 12.45, Math.PI / 2, 0.55, true);
    else if (s.act === 'ko' && gd) {
      const bz = gd.z + 0.85;
      if (t < 1.9) g.actor(dt, gd.x, 6.6 - (t / 1.9) * (6.6 - bz), Math.PI, 0.6, true);
      else {
        const sw = Math.min(1, (t - 1.9) / 0.22);
        g.actor(dt, gd.x, bz, Math.PI, 0, false, sw);
        if (!this.introKO && sw >= 1) { this.introKO = true; g.player.x = gd.x; g.player.z = bz; g.knockout(gd); }
      }
    } else if (s.act === 'stand' && gd) {
      g.actor(dt, gd.x + 0.75, gd.z + 0.5, -2.4, 0, t > 2.0, t > 2.0 && t < 3.0 ? 0.8 : null);
      if (!this.introR1 && t > 0.6) { this.introR1 = true; this.audio.play('radio'); this.floaters.spawn('📻 "Unit, report in!"', gd.x, 0.9, gd.z, 'say warn', 1.6); }
      if (!this.introR2 && t > 2.4) { this.introR2 = true; this.audio.play('radioOk'); this.floaters.spawn('"All clear, over."', gd.x + 0.75, 1.3, gd.z + 0.5, 'say q', 1.8); }
    } else if (s.act === 'hide' && g.hides[0]) {
      // walk up to the wardrobe, hop in while the patrol strolls past, peek back out
      const h = g.hides[0], fx = h.ex + (h.ex - h.cx) * 1.6, fz = h.ez + (h.ez - h.cz) * 1.6 + 0.4, inF = Math.atan2(h.cx - h.ex, h.cz - h.ez);
      if (t < 1.3) { const k = t / 1.3; g.actor(dt, fx + (h.ex - fx) * k, fz + (h.ez - fz) * k, Math.atan2(h.ex - fx, h.ez - fz), 0.7, false); }
      else if (t < 3.7) { if (g.player.c.root.visible) { g.player.c.root.visible = false; this.audio.play('creak'); this.floaters.spawn('Shh... hidden!', h.ex, 0.7, h.ez + 0.3, 'say q', 2.2); } }
      else g.actor(dt, h.ex, h.ez, inF + Math.PI, 0, false);
    } else if (s.act === 'coin' && g.guards[3]) {
      const cg = g.guards[3], ax = 15.3, az = 4.5;
      g.actor(dt, ax, az, -Math.PI / 2 - 0.35, 0, t < 3.2, t > 0.7 && t < 1.1 ? (t - 0.7) / 0.4 : null);
      if (!this.introCoin && t > 1.0) {
        this.introCoin = true; this.introDirty = true;
        const pl = g.player; pl.x = ax; pl.z = az; pl.face = -Math.PI / 2 - 0.55; pl.yaw = pl.face - Math.PI; pl.pitch = 0.15; pl.vx = pl.vz = 0;
        g.coinsLeft = Math.max(1, g.coinsLeft); g.throwCoin();
      }
      if (this.introCoin && !this.introLured && t > 1.9) {
        this.introLured = true;
        const c = g.coins[g.coins.length - 1], lx = c ? c.x : 12, lz = c ? c.z : 6;
        g.makeNoise(lx, lz, 8, null, true);
        this.particles.ring(lx, 0.05, lz, 0xffd23f, 2.2); this.floaters.spawn('CLINK!', lx, 0.6, lz, 'big', 1.2);
        if (cg.state !== 'investigate') { cg.state = 'investigate'; cg.tx = lx; cg.tz = lz; cg.hurry = cg.speed * 1.4; }
      }
    } else if (s.act === 'disguise' && gd) {
      const pill = $('iDisg');
      if (t < 1.3) {
        g.actor(dt, gd.x + 0.6, gd.z + 0.45, -2.2, 0, true, 0.7 + Math.sin(t * 22) * 0.15);
        pill.classList.add('hidden');
      } else {
        if (!this.introDisg) { this.introDisg = true; this.audio.play('creak'); this.audio.play('pick', 6); this.floaters.spawn('UNIFORM ON!', gd.x + 0.6, 1.4, gd.z + 0.45, 'big', 1.3); this.particles.puff(gd.x + 0.6, 0.6, gd.z + 0.45, { count: 6, size: 0.4 }); }
        const P = [[gd.x + 0.6, gd.z + 0.45], [20.5, 6.2], [20.5, 7.4], [20.2, 8.7]], k = Math.max(0, Math.min(1, (t - 1.5) / 2.9));
        let seg = Math.min(2, Math.floor(k * 3)), u = k * 3 - seg; if (k >= 1) { seg = 2; u = 1; }
        const [x0, z0] = P[seg], [x1, z1] = P[seg + 1];
        g.actor(dt, x0 + (x1 - x0) * Math.max(0, u), z0 + (z1 - z0) * Math.max(0, u), Math.atan2(x1 - x0, z1 - z0), t > 1.5 && k < 1 ? 0.7 : 0, false, null, true);
        pill.classList.remove('hidden'); pill.textContent = '🕴 DISGUISED ' + Math.max(1, Math.ceil(25 - (t - 1.3))) + 's';
        if (!this.introMe && t > 2.0) { this.introMe = true; this.floaters.spawn('(that\'s you!)', 20.5, 1.3, 6.4, 'say zz', 1.6); }
        const pg = g.guards[1];
        if (pg && !this.introNod && t > 3.6) { this.introNod = true; this.floaters.spawn('Evening, partner.', pg.x, 1.2, pg.z, 'say q', 1.6); }
      }
    } else if (s.act === 'smoke') {
      const ax = 13.6, az = 4.6, f = -Math.PI / 2;
      g.actor(dt, ax, az, f, 0, false, t > 0.6 && t < 0.95 ? (t - 0.6) / 0.35 : null);
      if (!this.introSmoke && t > 0.9) {
        this.introSmoke = true; this.introDirty = true;
        const pl = g.player; pl.x = ax; pl.z = az; pl.face = f; pl.yaw = f - Math.PI; pl.vx = pl.vz = 0;
        g.smokesLeft = Math.max(1, g.smokesLeft); g.dropSmoke();
        this.floaters.spawn('POOF!', ax - 0.7, 0.9, az, 'big', 1.2);
      }
      if (this.introSmoke && t > 2.6 && !this.introCough) { this.introCough = true; const cg = g.guards[3]; if (cg) this.floaters.spawn('*cough* Where did he go?!', cg.x, 1.0, cg.z, 'say q', 1.8); }
    } else if (s.act === 'safe' && g.L.safe) {
      const sx = g.L.safe.x + 0.5, sz = g.L.safe.y + 1.35;
      if (t < 2.4) { g.actor(dt, sx, sz, Math.PI, 0, true, 0.75 + Math.sin(t * 30) * 0.12); if (g.safe.dial) g.safe.dial.rotation.z = t * 6; }
      else {
        if (!this.introSafe) { this.introSafe = true; this.introDirty = true; g.openSafe(); }
        const k = Math.min(1, (t - 2.6) / 1.6), vx = 2.6, vz = 4.5;
        if (t < 2.6) g.actor(dt, sx, sz, Math.PI, 0, false, 1);
        else g.actor(dt, sx + (vx - sx) * k, sz + (vz - sz) * k, Math.atan2(vx - sx, vz - sz), k < 1 ? 0.9 : 0, false);
      }
    }
    else if (g.actorOn) g.actorOff();
    if (s.act !== 'disguise') $('iDisg').classList.add('hidden');
    if (this.introT >= (s.dur || SHOT_T)) this.nextIntro();
  }
  endIntro() {
    if (this.state !== 'intro') return;
    $('intro').classList.add('hidden'); $('iDisg').classList.add('hidden');
    this.game.actorOff();
    for (const g of this.game.guards) { g.cone.material.opacity = 1; g.cone.material.color.setHex(0xffe14d); }
    if (this.introKO || this.introDirty) { this.game.reset(); this.introKO = this.introDirty = false; }
    this.onCoins(this.game.coinsLeft); this.onSmoke(this.game.smokesLeft); this.onDisguise(this.game.disguiseT);
    for (const id of this.introHintSnap ? [...this.hDone].filter((x) => !this.introHintSnap.has(x)) : []) this.hDone.delete(id);
    this.floaters.clear(); this.particles.clear(); this.floaters.minScale = 0;
    this.state = 'play';
    this.input.clear();
    this.screen(null);
    this.iris();
    this.input.requestLock();
    this.hint('move');
    this.audio.play('dash');
    this.mapIntro();
  }
  // first time you load a level this session: a quick intel card of what's waiting inside
  showIntel() {
    const g = this.game, d = this.level, L = g.L, it = [];
    if (L.keys.length) it.push('🔑 Keycard door');
    if (L.doors.some((x) => x.type === 'lock')) it.push('🔒 Locked door');
    if (g.lasers.length) it.push('🔴 Lasers');
    if (d.owner) it.push('😴 Sleeping owner');
    if ((d.dogs || []).length) it.push('🐕 Guard dog');
    if ((d.spots || []).length) it.push('🔦 Searchlights');
    if (g.cases.length) it.push('💎 Display cases');
    if (g.slots.length) it.push('🎰 Slot machines');
    if (g.vents.length) it.push('🕳️ Air vent');
    if (g.tvs.length) it.push('📺 TV lure');
    if ((d.cameras || []).length) it.push(`📹 ${d.cameras.length} camera${d.cameras.length > 1 ? 's' : ''}`);
    if (d.train) it.push('🚂 Moving train');
    if (d.startDisguise) it.push('🍸 Waiter disguise');
    if ((d.clerks || []).length) it.push(`🙋 ${d.clerks.length} panic-button witness${d.clerks.length > 1 ? 'es' : ''}`);
    it.push(d.heli ? '🚁 Roof extraction' : L.van ? '🚐 Van out front' : '🪜 Roof hatch exit');
    const t = $('ctoast');
    t.innerHTML = `<small>INTEL · ${d.name.toUpperCase()}</small>${d.brief ? `<span class="brief">${d.brief}</span>` : ''}<span class="intel">${it.map((x) => `<i>${x}</i>`).join('')}</span><span class="stargoal">★ Escape · ★ Grab 70% loot · ★ Never get spotted</span>`;
    t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    clearTimeout(this.ctT); this.ctT = setTimeout(() => t.classList.add('hidden'), 5200);
  }
  async retry() {
    await this.maybeMidgame();
    this.start();
  }
  settings() {
    return Object.assign({ sens: 1, fov: 70, music: 0.8, sfx: 1, invert: false, shake: true }, this.save.settings || {});
  }
  applySettings() {
    const s = this.settings();
    this.sens = 0.0024 * s.sens; this.invertY = s.invert; this.fovBase = s.fov;
    this.audio.setVolumes(s.music, s.sfx);
    this.shake.scale = s.shake ? 1 : 0;
    this.calm = !s.shake;   // 'Shake & flashes' off: no alarm strobe / siren edge flashes either
    document.body.classList.toggle('calm', this.calm);
  }
  showSettings() {
    this.setFrom = this.state === 'pause' ? 'pause' : 'menu';
    this.state = 'settings';
    const s = this.settings();
    $('sSens').value = s.sens; $('sFov').value = s.fov; $('sMus').value = s.music; $('sSfx').value = s.sfx;
    $('sInv').checked = s.invert; $('sShake').checked = s.shake;
    this.readSettings(true);
    this.screen('settings');
  }
  readSettings(noSave) {
    const s = { sens: +$('sSens').value, fov: +$('sFov').value, music: +$('sMus').value, sfx: +$('sSfx').value, invert: $('sInv').checked, shake: $('sShake').checked };
    $('vSens').textContent = s.sens.toFixed(1) + '×'; $('vFov').textContent = s.fov + '°';
    $('vMus').textContent = Math.round(s.music * 100) + '%'; $('vSfx').textContent = Math.round(s.sfx * 100) + '%';
    if (noSave) return;
    this.save.settings = s; SDK.store(this.save);
    this.applySettings();
    this.audio.play('click');
  }
  pause() {
    if (this.state !== 'play') return;
    this.audio.siren(false);
    this.state = 'pause';
    SDK.gameplayStop();
    $('pObj').textContent = '🎯 ' + (this.game.objText || '');
    $('pTip').textContent = this.game.tut ? '' : '💡 HINT: ' + (this.lastTip && this.lastTipLevel === this.level.id ? this.lastTip : this.bustTip()).replace(/^Tip: /, '') + (this.input.touch ? '' : '  (press H in game)');
    $('bPSkip').classList.toggle('hidden', !(this.game.tut && this.tutStep < TUT_STEPS.length));
    const t = this.input.touch, K = t
      ? [['◀▶', 'Left side: move'], ['👆', 'Right side: look'], ['🔨', 'HIT: knock out a guard from behind'], ['✋', 'Use · grab · crack (hold)'], ['⚡', 'Dash (loud!)'], ['🦶', 'Sneak (quiet, slower)'], ['🪙', 'Throw a coin (lure)'], ['💨', 'Smoke bomb']]
      : [['WASD', 'Move'], ['Mouse', 'Look'], ['Click', 'HIT: knock out a guard from behind'], ['E', 'Use · grab · crack (hold)'], ['Space', 'Dash (loud!)'], ['Z', 'Sneak (quiet, slower)'], ['Q', 'Throw a coin (lure)'], ['C', 'Smoke bomb'], ['R', 'Restart run']];
    $('pKeys').innerHTML = K.map(([k, d]) => `<li><kbd>${k}</kbd>${d}</li>`).join('');
    this.screen('pause');
  }
  resume() {
    if (this.state !== 'pause') return;
    this.state = 'play';
    this.input.clear();
    this.input.requestLock();
    if (this.game.alarm) this.audio.siren(true);
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
    if (!ADS_ENABLED || !SDK.available || this.runs < 2 || now - this.lastAd < 150000) return;
    this.lastAd = now;
    this.state = 'ad';
    await SDK.ad('midgame');
  }
  async reviveAd() {
    if (this.freeRevOk && !this.game.revived) {
      if (this.preBust) { const keep = JSON.parse(this.preBust); for (const k of Object.keys(this.save)) delete this.save[k]; Object.assign(this.save, keep); }
      this.save.freeRev = dayKeyNow(); this.freeRevOk = false; SDK.store(this.save);
      this.game.revive();
      this.state = 'play'; this.last = performance.now(); this.screen(null);
      this.input.requestLock();
      this.announce('💪 Second chance! You shook him off. Next free one tomorrow');
      SDK.gameplayStart();
      return;
    }
    if (!ADS_ENABLED || !SDK.available || this.game.revived) return;
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
  // HINT button: the same tip the busted screen gives (last bust on this heist, or a fresh one)
  showHintTip() {
    const t = this.lastTip && this.lastTipLevel === this.level.id ? this.lastTip : this.bustTip();
    const el = $('hint');
    this.hCur = '_tip'; this.hT = 6;
    el.textContent = '💡 ' + t.replace(/^Tip: /, '');
    el.classList.remove('hidden'); el.classList.add('tipnow');
    el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    this.audio.play('click');
  }
  hint(id) {
    if (!this.level || !this.level.tutorial || this.hShown.has(id) || this.hDone.has(id)) return;
    // during the guided tutorial the step card is the only instruction on screen
    if (this.game && this.game.tut && (this.tutStep < TUT_STEPS.length || ['move', 'loot', 'safe', 'pick', 'cone', 'stash'].includes(id))) { this.hShown.delete(id); return; }
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
      if (this.hT <= 0 || this.state !== 'play' || this.game.state !== 'play') { this.hCur = null; el.classList.add('hidden'); el.classList.remove('tipnow'); }
    } else if (this.hQ.length && this.state === 'play') {
      this.hCur = this.hQ.shift();
      if (this.hDone.has(this.hCur) && this.hCur !== 'stash') { this.hCur = null; return; }
      el.textContent = HINTS[this.hCur][this.input.touch ? 1 : 0];
      el.classList.remove('hidden');
      el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
      this.hT = 3.4;
    }
  }
  setPrompt(kind, prog = 0) {
    const p = $('prompt'), ring = $('ring'), t = this.input && this.input.touch;
    const sn = (this.level && this.level.safeName ? this.level.safeName : 'safe').toUpperCase();
    const txt = kind === 'slot' ? (t ? 'HOLD ✋ TO PULL THE LEVER' : 'HOLD E: PULL THE LEVER') : kind === 'radio' ? (t ? 'HOLD ✋ TO ANSWER THE RADIO' : 'HOLD E: ANSWER "ALL CLEAR"') : kind === 'case' ? (t ? 'HOLD ✋ TO SMASH' : 'HOLD E TO SMASH THE CASE') : kind === 'pick' ? (t ? 'TAP ✋ TO PICK THE LOCK' : 'E: PICK THE LOCK') : kind === 'picking' ? (t ? 'TAP ✋ IN THE GREEN · MOVE TO STOP' : 'E IN THE GREEN · MOVE TO STOP') : kind === 'breaker' ? (t ? 'HOLD ✋ TO CUT POWER' : 'HOLD E TO CUT THE POWER') : kind === 'door' ? (t ? 'TAP ✋ TO OPEN' : 'E: SWIPE KEYCARD') : kind === 'locked' ? 'LOCKED: FIND THE KEYCARD' : kind === 'uniform' ? (t ? 'HOLD ✋ TO TAKE THE UNIFORM' : 'HOLD E: TAKE HIS UNIFORM') : kind === 'tv' ? (t ? 'TAP ✋ TO TURN THE TV ON' : 'E: TURN THE TV ON (LURE)') : kind === 'vent' ? (t ? 'TAP ✋ TO CRAWL IN' : 'E: CRAWL INTO THE VENT') : kind === 'hide' ? (t ? 'TAP ✋ TO HIDE' : 'E: HIDE') : kind === 'leave' ? (t ? 'TAP ✋ OR MOVE TO LEAVE' : 'E / MOVE: LEAVE') : kind === 'panel' ? (t ? 'HOLD ✋ TO DISARM' : 'HOLD E TO DISARM ALARM') : kind === 'safe' ? (t ? 'HOLD ✋ TO CRACK ' + sn : 'HOLD E TO CRACK ' + sn) : kind === 'pocket' ? (t ? 'HIT: KO · HOLD ✋: PICKPOCKET' : 'CLICK: KO · HOLD E: PICKPOCKET') : kind === 'ko' ? (t ? 'TAP HIT TO KNOCK OUT' : 'CLICK TO KNOCK OUT') : '';
    if (p.dataset.k !== kind) {
      p.dataset.k = kind;
      p.innerHTML = txt.replace(/(^|[\s(])(E|✋|CLICK)(?=[\s:/]|$)/g, '$1<kbd>$2</kbd>');
      p.classList.toggle('hidden', !kind);
      $('xh').classList.toggle('ready', !!kind);
      this.els.bAct.classList.toggle('ready', !!kind && kind !== 'ko');
      if (this.els.bHit) this.els.bHit.classList.toggle('ready', kind === 'ko' || kind === 'pocket');
      this.els.bAct.lastChild.textContent = kind === 'pocket' ? 'LIFT' : kind === 'slot' ? 'PULL' : kind === 'radio' ? 'ANSWER' : kind === 'case' ? 'SMASH' : kind === 'pick' || kind === 'picking' ? 'PICK' : kind === 'breaker' ? 'CUT' : kind === 'door' ? 'OPEN' : kind === 'uniform' ? 'DISGUISE' : kind === 'tv' ? 'TV ON' : kind === 'vent' ? 'CRAWL' : kind === 'hide' ? 'HIDE' : kind === 'leave' ? 'LEAVE' : kind === 'panel' ? 'DISARM' : kind === 'safe' ? 'CRACK' : kind === 'ko' ? 'KO!' : 'GRAB';
    }
    if ((kind === 'safe' || kind === 'uniform' || kind === 'panel' || kind === 'breaker' || kind === 'case' || kind === 'radio' || kind === 'slot' || kind === 'pocket') && prog > 0) {
      ring.lastChild.style.strokeDashoffset = String(126 * (1 - Math.min(1, prog)));
      ring.classList.remove('hidden');
    } else ring.classList.add('hidden');
  }
  setObjective(t) {
    const o = $('obj');
    o.textContent = t;
    o.classList.remove('pop'); void o.offsetWidth; o.classList.add('pop');
  }
  // picked-up loot flies from where it was into the cash counter (screen space, DOM icons)
  lootFly(type, x, y, z) {
    const v = this._d.set(x, y, z).project(this.camera);
    if (v.z > 1) return;
    const sx = ((v.x + 1) / 2) * this.w, sy = ((1 - v.y) / 2) * this.h;
    const tg = $('loot').getBoundingClientRect(), tx = tg.left + 34, ty = tg.top + tg.height / 2;
    const n = type === 'cash' ? 3 : 1;
    for (let i = 0; i < n; i++) {
      const el = document.createElement('i'); el.className = 'lf ' + type; document.body.appendChild(el);
      const jx = (Math.random() - 0.5) * 40, jy = (Math.random() - 0.5) * 30, mx = (sx + tx) / 2 + jx * 2, my = Math.min(sy, ty) - 60 - Math.random() * 50;
      const an = el.animate([
        { transform: `translate(${sx + jx}px,${sy + jy}px) scale(.4) rotate(0deg)`, opacity: 0 },
        { transform: `translate(${sx + jx}px,${sy + jy - 20}px) scale(1.6) rotate(${jx}deg)`, opacity: 1, offset: 0.18 },
        { transform: `translate(${mx}px,${my}px) scale(1.3) rotate(${jx * 4}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(${tx}px,${ty}px) scale(.45) rotate(${jx * 8}deg)`, opacity: 0.9 },
      ], { duration: 650 + i * 90, delay: i * 70, easing: 'cubic-bezier(.45,.05,.55,.95)', fill: 'backwards' });
      an.onfinish = () => { el.remove(); const l = $('loot'); l.classList.remove('punch'); void l.offsetWidth; l.classList.add('punch'); };
    }
  }
  onLoot(big, silent) {
    const g = this.game;
    // rolling cash counter: the shown value climbs toward the real one in updateHud; a "+$X" pops beside it
    if (silent || this.lootShown == null) { this.lootShown = g.lootGot; $('lootv').textContent = fmtMoney(g.lootGot); }
    else if (g.lootGot > this.lootShown) {
      const d = g.lootGot - (this.lootTarget ?? this.lootShown); this.lootTarget = g.lootGot;
      if (d > 0) { const pe = $('lootplus'); pe.textContent = '+' + fmtMoney(d); pe.classList.remove('go'); void pe.offsetWidth; pe.classList.add('go'); }
    }
    $('lootp').textContent = Math.round((g.lootGot / g.lootTotal) * 100) + '%';
    $('lootbar').style.width = Math.min(100, (g.lootGot / g.lootTotal) * 100) + '%';
    // live "new record" moment: loot alone passes your best score on this heist
    if (!silent && this.mode === 'classic' && g.state === 'play' && !this.bestBeat) {
      const pb = (this.save.best[diffKey(this.level.id, this.diff)] || {}).score || 0;
      if (pb > 0 && g.lootGot * g.D.mult > pb) {
        this.bestBeat = true;
        this.announce('🏆 New record pace! You already beat your best loot');
        this.audio.play('combo', 8);
      }
    }
    const star = g.lootGot / g.lootTotal >= 0.7;
    $('lootbar').classList.toggle('star', star);
    if (silent) { this.lootStar = star; this.bestBeat = false; return; }
    if (star && !this.lootStar && g.state === 'play') {
      // second star earned mid-run: tell the player right away
      this.lootStar = true;
      const t = $('ctoast');
      t.innerHTML = `<small>LOOT STAR EARNED</small>★ 70% grabbed<b>Every extra dollar still counts!</b>`;
      t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
      clearTimeout(this.ctT); this.ctT = setTimeout(() => t.classList.add('hidden'), 2000);
      this.audio.play('star', 1); this.shake.add(0.12);
    }
    const l = $('loot');
    l.classList.remove('punch', 'bigpunch'); void l.offsetWidth; l.classList.add(big ? 'bigpunch' : 'punch');
  }
  onAlarm(on, why) {
    $('alarm').classList.toggle('hidden', !on);
    $('siren').classList.toggle('on', on);
    if (on) { this.lastAlarmS = -1; if (why) { const w = $('alarmwhy'); w.textContent = why; w.classList.remove('hidden'); w.style.animation = 'none'; void w.offsetWidth; w.style.animation = ''; clearTimeout(this.whyT); this.whyT = setTimeout(() => w.classList.add('hidden'), 2600); } }
  }
  announce(text) {
    const w = $('alarmwhy'); w.textContent = text; w.classList.remove('hidden');
    w.style.animation = 'none'; void w.offsetWidth; w.style.animation = '';
    clearTimeout(this.whyT); this.whyT = setTimeout(() => w.classList.add('hidden'), 3000);
  }
  onAlarmTime(t) {
    const s = Math.ceil(t);
    if (s === this.lastAlarmS) return;
    this.lastAlarmS = s;
    $('alarmt').textContent = fmtTime(s);
    $('alarm').classList.toggle('hurry', s <= 10);
    if (s <= 10 && s > 0) this.audio.play('tick', 1.5);
  }
  renderContracts(list, just) {
    $('ctr').innerHTML = list.map((c) => `<li class="${c.st}${c === just ? ' just' : ''}"><i></i>${c.text}<b>+${fmtMoney(c.bonus)}</b></li>`).join('');
  }
  onContract(c, list) {
    this.renderContracts(list, c);
    if (c.st === 'ok' && this.game.state === 'play') {
      this.audio.play('contract');
      const t = $('ctoast');
      t.innerHTML = `<small>CONTRACT COMPLETE</small>${c.text}<b>+${fmtMoney(c.bonus)}</b>`;
      t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
      clearTimeout(this.ctT); this.ctT = setTimeout(() => t.classList.add('hidden'), 2200);
      this.shake.add(0.1);
    } else if (c.st === 'fail' && this.game.state === 'play') this.audio.play('lost');
  }
  onPick(pk) {
    const el = $('lockpick');
    if (!pk) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    const z = el.querySelector('.lp-zone'), n = el.querySelector('.lp-needle');
    z.style.left = ((pk.zone - pk.w / 2) * 100).toFixed(1) + '%'; z.style.width = (pk.w * 100).toFixed(1) + '%';
    n.style.left = (pk.pos * 100).toFixed(1) + '%';
    el.querySelectorAll('.lp-pins b').forEach((b, i) => b.classList.toggle('on', i < pk.pin));
    el.classList.toggle('cool', pk.cool > 0);
  }
  onKey(on) { $('key').classList.toggle('hidden', !on); if (on) { const k = $('key'); k.classList.remove('punch'); void k.offsetWidth; k.classList.add('punch'); } }
  ventFx(a, k = 0) {
    const el = $('ventfx'); el.style.opacity = a.toFixed(3); el.classList.toggle('hidden', a <= 0);
    if (a <= 0) return;
    // exit glow grows as you near the far grate; the duct bobs with each crawl step
    const ex = Math.max(0, Math.min(1, (k - 0.58) / 0.22));
    el.style.setProperty('--ex', (ex * ex).toFixed(3));
    el.style.setProperty('--bob', (Math.sin(k * 58) * 6).toFixed(1) + 'px');
    el.style.setProperty('--sway', (Math.sin(k * 29) * 1.2).toFixed(2) + 'deg');
  }
  onHide(on) {
    const el = $('slats');
    if (!on && el.classList.contains('hidden')) return;
    clearTimeout(this.slatT);
    $('xh').classList.toggle('hidden', on);
    if (on) {
      // doors start open around you and swing shut
      el.classList.add('open'); el.classList.remove('hidden'); void el.offsetWidth; el.classList.remove('open');
    } else {
      // push the doors open and step out
      el.classList.add('open'); this.slatT = setTimeout(() => { el.classList.add('hidden'); el.classList.remove('open'); }, 380);
    }
  }
  foundCat(sc) {
    sc.mesh.visible = false; sc.got = true;
    const cats = (this.save.cats = this.save.cats || {}); cats[this.level.id] = 1;
    const n = Object.keys(cats).length;
    this.save.cash = (this.save.cash || 0) + 1000; SDK.store(this.save);
    this.floaters.spawn(`🐱 LUCKY CAT ${n}/${LEVELS.length}! +$1,000`, sc.x, 1.3, sc.z, 'big', 1.8);
    this.announce(`🐱 Secret found! Lucky cat ${n}/${LEVELS.length} (+$1,000 to your stash)`);
    this.audio.play('jackpot'); this.flash('gold'); this.shake.add(0.2);
    this.particles.burst(sc.x, 0.4, sc.z, { count: 24, colors: [0xffd23f, 0xffffff, 0xff9ec4], speed: 3, up: 4, size: 0.08, life: 0.9 });
  }
  onBrief(t) {
    const el = $('briefp'), s = Math.ceil(t), k = String(s);
    el.classList.toggle('hidden', t <= 0 || this.state !== 'play');
    if (t > 0 && el.dataset.s !== k) { el.dataset.s = k; el.textContent = `💼 BRIEFCASE ${s}s`; el.classList.toggle('low', s <= 5); }
  }
  onDisguise(t) {
    const el = $('disgp'), on = t > 0;
    el.classList.toggle('hidden', !on);
    const waiter = on && this.level && this.level.startDisguise && !this.game.disguises, look = !on ? '' : waiter ? 'w' : 'g';
    if (on) { const s = Math.ceil(t), k = look + s; if (el.dataset.s !== k) { el.dataset.s = k; el.textContent = (waiter ? '🍸 WAITER ' : '🕴 DISGUISED ') + s + 's'; el.classList.toggle('low', s <= 5); } }
    if (this.disgLook !== look) { this.disgLook = look; this.disgOn = on; look === 'w' ? this.vm.setOutfit(colorsOf({ sleeve: 0x17161d, glove: 0xf4f1ea, bar: 0x8a94a4, band: 0xd9b45a })) : look === 'g' ? this.vm.setOutfit(colorsOf({ sleeve: 0x2b3f7a, glove: 0x1a1c26, bar: 0x8a94a4, band: 0xf2c94c })) : this.applyOutfit(); }
  }
  onCrouch(on) {
    $('sneakp').classList.toggle('hidden', !on);
    this.els.bSneak.classList.toggle('on', on);
    document.body.classList.toggle('crouch', on);
  }
  onWeight(m) {
    const w = $('weight'), pct = Math.round((1 - m) * 100);
    w.classList.toggle('hidden', pct <= 0);
    w.textContent = `🏋 −${pct}%`;
    w.classList.toggle('hot', pct >= 25);
  }
  onSmoke(n) {
    const c = $('smokep');
    c.lastChild.textContent = '×' + n;
    c.classList.toggle('empty', n === 0);
    c.classList.remove('punch'); void c.offsetWidth; c.classList.add('punch');
    this.els.bSmoke.lastChild.textContent = '×' + n;
    this.els.bSmoke.classList.toggle('empty', n === 0);
  }
  onInSmoke(on) {
    if (this.inSmokeOn === on) return;
    this.inSmokeOn = on;
    $('smokeov').classList.toggle('on', on);
  }
  onCoins(n) {
    const c = $('coins');
    c.lastChild.textContent = '×' + n;
    c.classList.toggle('empty', n === 0);
    c.classList.remove('punch'); void c.offsetWidth; c.classList.add('punch');
    this.els.bThrow.lastChild.textContent = '×' + n;
  }
  lightning() {
    this.boltK = 1; this.flash('bolt');
  }
  flash(kind) {
    const f = $('flash');
    f.className = ''; void f.offsetWidth; f.className = kind;
  }
  onEscapeStart() { $('touch').classList.add('hidden'); $('fp').classList.add('hidden'); $('hud').classList.add('hidden'); $('alarm').classList.add('hidden'); this.audio.siren(false); this.input.exitLock(); }
  // award XP for a finished run and animate the rank bar in the given container
  awardXP(win, score, loot, elId) {
    const before = this.save.xp || 0, gain = xpForRun(win, score, loot), after = before + gain;
    this.save.xp = after;
    const r0 = rankOf(before), r1 = rankOf(after), el = $(elId);
    el.innerHTML = `<span class="rk">🎖 <b>${r0.name}</b></span><span class="xpbar"><i style="width:${(r0.frac * 100).toFixed(1)}%"></i></span><span class="xpg">+${gain} XP</span>`;
    const bar = el.querySelector('i'), nm = el.querySelector('b');
    setTimeout(() => {
      if (r1.i > r0.i) {
        bar.style.width = '100%';
        setTimeout(() => {
          nm.textContent = r1.name; bar.style.transition = 'none'; bar.style.width = '0%'; void bar.offsetWidth; bar.style.transition = '';
          bar.style.width = (r1.frac * 100).toFixed(1) + '%';
          el.classList.add('up'); el.querySelector('.xpg').textContent = 'RANK UP!';
          this.audio.play('contract'); this.shake.add(0.2);
        }, 650);
      } else bar.style.width = (r1.frac * 100).toFixed(1) + '%';
    }, 900);
    el.classList.remove('up');
    return { gain, up: r1.i > r0.i, rank: r1 };
  }
  bustTip() {
    const g = this.game, t = this.input.touch, Z = t ? 'the 🦶 button' : 'Z', E = t ? 'HIT' : 'a CLICK';
    if (g.policeBusted) return 'The police arrived! Knock out alerted guards before they radio in, or disarm the alarm keypad.';
    const C = {
      hide: 'Tip: a guard saw you climb in. Only hide when nobody is looking.',
      owner: 'Tip: the owner wakes up to noise. Sneak past slowly and never dash near him.',
      dash: `Tip: dashing is loud and gets you noticed. Walk, or sneak with ${Z}.`,
      dog: (this.level.dogs || []).some((d) => d.handler != null) ? 'Tip: the dog walks with its handler and barks if it sees you up close. Stay out of its sight, or take the handler out from behind.' : 'Tip: the dog follows your scent. Throw a coin and it runs off to sniff it.',
      los: 'Tip: once spotted, break line of sight: duck round a corner, hide in a wardrobe or drop smoke.',
      cone: `Tip: stay out of the yellow vision cones. Sneak with ${Z} behind low furniture, and hit guards from behind with ${E}.`,
    };
    const lv = this.level.tips || [];
    const cause = g.bustCause || 'cone';
    if (g.tut) return C[cause] || C.cone;
    if ((cause === 'cone' || cause === 'los') && lv.length && Math.random() < 0.5) return 'Tip: ' + lv[(Math.random() * lv.length) | 0];
    return C[cause] || C.cone;
  }
  onBusted() {
    this.state = 'busted';
    this.audio.siren(false);
    SDK.gameplayStop();
    // one free second chance per day (guard busts only; the police arriving can't be undone)
    this.freeRevOk = this.mode !== 'daily' && !this.game.revived && !this.game.policeBusted && this.save.freeRev !== dayKeyNow();
    const adRev = ADS_ENABLED && SDK.available && !this.game.revived && !this.game.policeBusted;
    $('bRevive').classList.toggle('hidden', !(this.freeRevOk || adRev));
    $('bRevive').innerHTML = this.freeRevOk ? '▶ SECOND CHANCE <small>free · 1 per day</small>' : '▶ SECOND CHANCE';
    const tipTxt = (this.game.hasStash && this.mode !== 'daily' && this.levelIdx + 1 < LEVELS.length && !this.levelUnlocked(this.levelIdx + 1)
      ? `So close! You had the stash: get it all the way back to the ${this.game.L.van ? 'van' : 'exit'} to unlock ${LEVELS[this.levelIdx + 1].name}. ` : '') + this.bustTip();
    $('bustTip').textContent = tipTxt;
    this.lastTip = this.bustTip(); this.lastTipLevel = this.level.id;
    { const bt = $('bustTip'), first = !this.save.tipSeen; bt.classList.remove('glow'); void bt.offsetWidth; bt.classList.toggle('glow', first); if (first) { this.save.tipSeen = 1; this.hintPulse = true; } }
    this.preBust = JSON.stringify(this.save);   // undone if the player takes a second chance
    const fresh = recordRun(this.save, this.runRecord(false));
    this.awardXP(false, 0, this.game.lootGot, 'bXP');
    if ((this.save.hot || 0) >= 2) this.lostStreak = this.save.hot;
    this.save.hot = 0;
    { const c = Math.round(this.game.lootGot * 0.25); this.save.cash = (this.save.cash || 0) + c; $('bCash').textContent = c ? `💰 Kept ${fmtMoney(c)} of the loot you grabbed` : ''; }
    // repeated busts on the same heist: offer Easy instead of letting frustration build
    this.bustStreak = this.bustKey === this.level.id ? (this.bustStreak || 0) + 1 : 1; this.bustKey = this.level.id;
    $('bEasy').classList.toggle('hidden', !(this.mode === 'classic' && this.bustStreak >= 3 && (this.diff === 'normal' || this.diff === 'hard')));
    SDK.store(this.save);
    const jt = this.mode === 'tutorial' ? '' : this.jobsToast(recordJobs(this.save, this.runRecord(false)));
    if (this.lostStreak) { const c = $('bCash'); c.textContent = (c.textContent ? c.textContent + ' · ' : '') + `🔥 ${this.lostStreak}-escape streak lost`; this.lostStreak = 0; }
    $('bAch').innerHTML = fresh.map((a) => `🏆 ${a.icon} ${a.name} unlocked!`).concat(jt ? [jt] : []).join('<br>');
    this.chipify('bAch');
    this.screen('busted');
    this.drawRecap('bMap', false);
  }
  onWin(res) {
    this.state = 'result';
    this.bustStreak = 0;
    this.audio.siren(false);
    $('alarm').classList.add('hidden'); $('siren').classList.remove('on');
    SDK.gameplayStop();
    SDK.happytime();
    const nStars = res.stars.filter(Boolean).length;
    setTimeout(() => { if (this.state === 'result') this.confetti(14 + nStars * 16); }, 450);
    let prev, newBest, bestScore;
    if (res.daily) {
      const k = this.daily.key, dd = (this.save.daily = this.save.daily || {});
      prev = dd[k] || { score: 0, stars: 0 };
      newBest = res.score > prev.score;
      dd[k] = { score: Math.max(prev.score, res.score), stars: Math.max(prev.stars, nStars) };
      bestScore = dd[k].score;
      const st = this.save.streak || { last: '', n: 0 };
      if (st.last !== k) { st.n = st.last === prevDayKey() ? st.n + 1 : 1; st.last = k; }
      this.save.streak = st;
      for (const key of Object.keys(dd).sort().slice(0, -14)) delete dd[key];
    } else {
      const bk = diffKey(this.level.id, this.diff);
      this.nextWasLocked = this.mode === 'classic' && this.levelIdx + 1 < LEVELS.length && !this.levelUnlocked(this.levelIdx + 1);
      prev = this.save.best[bk] || { score: 0, stars: 0 };
      newBest = res.score > prev.score;
      this.save.best[bk] = { score: Math.max(prev.score, res.score), stars: Math.max(prev.stars, nStars) };
      // first 3-star clear of a heist (any difficulty): gold pin + one-time cash reward
      const mastered = (this.save.mastered = this.save.mastered || {});
      this.justMastered = nStars >= 3 && this.mode === 'classic' && !mastered[this.level.id];
      if (this.justMastered) { mastered[this.level.id] = 1; this.save.cash = (this.save.cash || 0) + 2000; }
      bestScore = this.save.best[bk].score;
      const gh = this.ghost, faster = !gh || res.time < gh.t;
      this.ghostMsg = gh ? (faster ? `👻 Beat your ghost by ${(gh.t - res.time).toFixed(1)}s!` : `👻 Ghost was ${(res.time - gh.t).toFixed(1)}s faster`) : '';
      if (this.mode === 'classic' && (newBest || faster)) {
        const tr = this.game.trail, pts = [];
        for (let i = 0; i < tr.length; i += 2) pts.push(Math.round(tr[i][0] * 10), Math.round(tr[i][1] * 10));
        (this.save.ghost = this.save.ghost || {})[bk] = { t: res.time, dt: 0.7, pts };
      }
    }
    this.save.contracts = (this.save.contracts || 0) + res.contracts.filter((c) => c.st === 'ok').length;
    SDK.store(this.save);
    $('rStars').innerHTML = this.starsHTML(0);
    const labels = ['Escaped with the stash', 'Loot 70%+ (' + Math.round(res.frac * 100) + '%)', 'Ghost: never spotted'];
    $('rGoals').innerHTML = res.stars.map((s, i) => `<li class="${s ? 'ok' : ''}">${s ? '✔' : '✖'} ${labels[i]}</li>`).join('');
    $('rLoot').textContent = fmtMoney(res.loot);
    $('rTime').textContent = fmtTime(res.time) + (res.timeBonus ? `  (+${fmtMoney(res.timeBonus)})` : '');
    $('rGhost').textContent = res.ghost ? '+' + fmtMoney(res.ghostBonus) : '—';
    $('rScore').textContent = '$0';
    $('rCtr').innerHTML = res.contracts.map((c) => `<li class="${c.st === 'ok' ? 'ok' : 'no'}">${c.st === 'ok' ? '✔' : '✖'} ${c.text}<b>${c.st === 'ok' ? '+' + fmtMoney(c.bonus) : '—'}</b></li>`).join('');
    $('rCtrTotal').textContent = 'Contracts done (all time): ' + (this.save.contracts || 0);
    $('rBest').textContent = (newBest ? 'NEW BEST!' : 'Best ' + fmtMoney(bestScore)) + ' · ' + res.diff + (res.daily ? ` · 🔥${this.save.streak.n} day streak · next Daily in ${nextDailyIn()}` : '');
    $('rMult').textContent = res.mult === 1 ? '' : `${res.diff} ×${res.mult}`;
    $('rBest').classList.toggle('new', newBest);
    if (!res.daily && this.ghostMsg) $('rBest').textContent += '  ·  ' + this.ghostMsg;
    const tutJustDone = this.game.tut && !this.save.tutDone;
    if (this.game.tut) this.save.tutDone = true;
    const freshA = recordRun(this.save, this.runRecord(true, res));
    this.awardXP(true, res.score, res.loot, 'rXP');
    const jt = this.jobsToast(recordJobs(this.save, this.runRecord(true, res)));
    const hs = this.mode === 'tutorial' ? 0 : (this.save.hot = (this.save.hot || 0) + 1), hb = Math.min(0.5, 0.1 * Math.max(0, hs - 1)), extra = Math.round(res.score * hb);
    const hot = this.mode === 'classic' && this.levelIdx === this.hotTarget() ? res.score : 0;
    this.save.cash = (this.save.cash || 0) + res.score + extra + hot;
    $('rCash').textContent = `💰 +${fmtMoney(res.score + extra + hot)} to your stash${hot ? ' (🎯 hot target ×2)' : ''}${extra ? ` (🔥 streak ${hs}: +${Math.round(hb * 100)}%)` : ''} · ${fmtMoney(this.save.cash)}${this.canAffordGear() ? ' · 🧰 new gear!' : ''}`;
    const newOut = OUTFITS.filter((o) => o.id !== 'classic' && unlocked(o, this.save) && !(this.save.seenOut || []).includes(o.id));
    this.save.seenOut = OUTFITS.filter((o) => unlocked(o, this.save)).map((o) => o.id);
    this.showAchToast(freshA);
    if (tutJustDone) { $('rAch').innerHTML = '🎓 <b>Tutorial complete!</b> Contracts, difficulty and the Daily are yours now.' + ($('rAch').innerHTML ? '<br>' + $('rAch').innerHTML : ''); $('rAch').classList.remove('hidden'); }
    // next heist: label the button, and celebrate a fresh unlock
    const ni = this.levelIdx + 1, nextOk = !res.daily && ni < LEVELS.length && this.levelUnlocked(ni);
    $('bNext').textContent = res.daily ? 'MAP ▶' : nextOk ? 'NEXT: ' + LEVELS[ni].name.toUpperCase() + ' ▶' : 'NEXT ▶';
    if (!res.daily && this.nextWasLocked && nextOk) {
      this.sel = this.save.sel = 'lvl' + (ni + 1);
      $('rAch').innerHTML = `<span class="unlock">🔓 New heist unlocked: <b>${LEVELS[ni].name}</b></span>` + ($('rAch').innerHTML ? '<br>' + $('rAch').innerHTML : '');
      $('rAch').classList.remove('hidden');
      setTimeout(() => { if (this.state === 'result') { this.audio.play('unlock'); this.shake.add(0.15); } }, 1500);
    }
    this.nextWasLocked = false;
    if (this.justMastered) { $('rAch').innerHTML = `<span class="unlock">🏅 Heist mastered! +$2,000 bonus</span><br>` + $('rAch').innerHTML; $('rAch').classList.remove('hidden'); this.justMastered = false; }
    if (jt) { $('rAch').innerHTML += ($('rAch').innerHTML ? '<br>' : '') + jt; $('rAch').classList.remove('hidden'); }
    if (newOut.length) $('rAch').innerHTML += `<br>🧤 New outfit: <b>${newOut.map((o) => o.name).join(', ')}</b>`, $('rAch').classList.remove('hidden');
    SDK.store(this.save);
    this.chipify('rAch');
    this.screen('result');
    this.drawRecap('rMap', true);
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
    this.vm.resize(this.aspect);
  }
  frame() {
    const now = performance.now();
    const rdt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.time += rdt;
    const st = this.state;
    if (st === 'play' || (st === 'busted' && this.game.state === 'caught' && !this.game.endSent)) this.game.update(rdt, false);
    else if (st === 'menu' || st === 'soon' || st === 'intro') this.game.update(rdt, true);
    if (st !== 'pause' && st !== 'ad') {
      this.particles.update(rdt, this.camera);
      this.shake.update(rdt);
    }
    this.updateCamera(rdt);
    this.sky.position.copy(this.camera.position);
    this.nightSky.position.copy(this.camera.position);
    if (st !== 'pause') this.dust.update(rdt, this.camera.position.x, this.camera.position.z);
    if (st !== 'pause') this.rain.update(rdt, this.camera.position.x, this.camera.position.z);
    { // rain on the "lens" while standing outside in a storm
      const g = this.game, L = g.L, pl = g.player;
      const wet = st === 'play' && this.level && this.level.rain && L && L.outdoor[Math.floor(pl.z) * L.W + Math.floor(pl.x)] === 1;
      this.wetK = damp(this.wetK || 0, wet ? 1 : 0, wet ? 2.5 : 0.8, rdt);
      const el = $('wet'); el.style.opacity = this.wetK.toFixed(2); el.classList.toggle('hidden', this.wetK < 0.02);
    }
    this.audio.rain(!!(this.level && this.level.rain) && (st === 'play' || st === 'pause' || st === 'busted'));
    { const lv = this.level, g = this.game, on = !!(lv && lv.night && !lv.rain && !lv.train && !lv.skyline) && (st === 'play' || st === 'pause');
      let k = 0.07; if (on && g && g.L) { const p = g.player, c = Math.floor(p.z) * g.L.W + Math.floor(p.x); if (g.L.outdoor[c]) k = 0.32; }
      this.audio.crickets(on, st === 'pause' ? 0.03 : k); }
    this.audio.rumble(!!(this.level && this.level.train) && (st === 'play' || st === 'pause' || st === 'busted'));
    if (this.boltK > 0) { this.boltK = Math.max(0, this.boltK - rdt * 2.2); }
    this.renderer.toneMappingExposure = 1.15 + this.boltK * this.boltK * 1.6;
    this.dust.points.visible = st !== 'menu' && st !== 'soon';
    this.floaters.update(st === 'pause' ? 0 : rdt, this.camera, this.w, this.h);
    this.updateHints(rdt);
    if (st === 'play') this.updateHud();
    this.audio.setMuffle(st === 'play' && this.game.slowT > 0.05);
    this.audio.tension = st === 'play' ? this.game.tension : 0;
    this.audio.mode = st === 'menu' || st === 'soon' || st === 'trophies' || st === 'outfits' ? 'menu' : 'game';
    $('vignette').style.opacity = st === 'play' && this.game.tension ? 1 : 0;
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    if (st === 'outfits') { this.vm.mat.color.setRGB(1.05, 1.0, 0.95); this.vm.update(rdt, { move: 0, bob: 0, lookX: 0, lookY: 0, punch: 0, crack: false, grab: 0, dash: false, busted: false }); }
    this.vm.visible = st === 'outfits' || (st === 'play' || st === 'busted' || st === 'pause') && (this.game.state === 'play' || this.game.state === 'caught') && !this.game.player.hiding && !(this.game.player.venting && (this.game.player.venting.k || 0) > 0.12);
    this.vm.render(this.renderer);
    this.adaptRes(rdt);
  }
  skipTutorial() {
    this.save.tutDone = true; SDK.store(this.save);
    this.tutStep = TUT_STEPS.length;
    $('tut').classList.add('hidden');
    this.audio.play('click');
  }
  updateTutorial() {
    const el = $('tut'), g = this.game;
    if (!g.tut || this.tutStep >= TUT_STEPS.length) { g.tutAt = null; el.classList.add('hidden'); document.body.classList.remove('tutcard'); return; }
    if (this.tutStep == null) this.tutStep = 0;
    const step = TUT_STEPS[this.tutStep];
    if (step.done(g)) {
      this.tutStep++;
      if (!g.player.hiding && !g.player.venting) g.tutCheck = { x: g.player.x, z: g.player.z };
      this.audio.play('star', Math.min(2, this.tutStep % 3));
      el.classList.remove('done'); void el.offsetWidth; el.classList.add('done');
      if (this.tutStep >= TUT_STEPS.length) { setTimeout(() => el.classList.add('hidden'), 900); return; }
    }
    const s = TUT_STEPS[this.tutStep], key = this.tutStep + (this.input.touch ? 't' : 'k');
    g.tutAt = s.at || null;
    if (el.dataset.k !== key) {
      el.dataset.k = key;
      el.querySelector('small').textContent = `TUTORIAL ${this.tutStep + 1}/${TUT_STEPS.length}`;
      el.querySelector('span').textContent = s.text[this.input.touch ? 1 : 0];
      $('tutSkip').innerHTML = this.input.touch ? 'SKIP TUTORIAL ▶' : 'SKIP TUTORIAL <kbd>T</kbd>';
      el.querySelector('i').style.width = (this.tutStep / TUT_STEPS.length * 100) + '%';
    }
    el.classList.toggle('hidden', g.alarm || g.state !== 'play');
    document.body.classList.toggle('tutcard', !el.classList.contains('hidden'));
  }
  updateHud() {
    this.updateTutorial();
    const g = this.game, p = g.player;
    if (this.lootShown != null && this.lootShown < g.lootGot) {
      this.lootShown = Math.min(g.lootGot, this.lootShown + Math.max(7, (g.lootGot - this.lootShown) * 0.18));
      $('lootv').textContent = fmtMoney(Math.round(this.lootShown));
    } else if (this.lootShown != null && this.lootShown > g.lootGot) { this.lootShown = g.lootGot; $('lootv').textContent = fmtMoney(g.lootGot); }
    const s = Math.floor(g.time);
    if (s !== this.lastSec) { this.lastSec = s; $('time').textContent = fmtTime(s); }
    this.drawMinimap();
    // objective marker (clamped to screen edges when off-screen / behind)
    const wp = $('wp');
    const ot = g.objectiveTarget(), tx = ot.x, tz = ot.z, label = ot.label;
    const dist = Math.hypot(tx - p.x, tz - p.z);
    if (g.state !== 'play' || dist < 1.6) wp.classList.add('hidden');
    else {
      wp.classList.remove('hidden');
      const v = this._d.set(tx, 1.1, tz).project(this.camera);
      let x = v.x, y = v.y;
      const behind = v.z > 1;
      if (behind) { x = -x; y = -y; }
      const m = 0.88, off = behind || Math.abs(x) > m || Math.abs(y) > m;
      if (off) { const k = m / Math.max(Math.abs(x), Math.abs(y), 0.001); x *= k; y *= k; if (behind && Math.abs(y) < m - 0.01) y = -m; }
      if (off && x < -0.4 && y > -0.3) x = -0.4;
      wp.classList.toggle('edge', off);
      const wpx = Math.max(64, Math.min(this.w - 64, ((x + 1) / 2) * this.w));
      let wpy = Math.max(40, Math.min(this.h - 40, ((1 - y) / 2) * this.h));
      // phones: never let the marker hide under the touch buttons (push it above them)
      if (this.input.touch) {
        if (!this.btnRects || this.time - (this.btnRectT || 0) > 1) { this.btnRectT = this.time; this.btnRects = ['bAct', 'bHit', 'bDash', 'bThrow', 'bSmoke', 'bSneak'].map((id) => $(id).getBoundingClientRect()).filter((r) => r.width); }
        for (const r of this.btnRects) if (wpx > r.left - 70 && wpx < r.right + 70 && wpy > r.top - 24 && wpy < r.bottom + 24) wpy = Math.max(40, r.top - 30);
      }
      wp.style.transform = `translate(${wpx}px,${wpy}px) translate(-50%,-50%)`;
      const txt = label + ' ' + Math.round(dist * 1.5) + 'm';
      if (wp.dataset.t !== txt) { wp.dataset.t = txt; wp.lastChild.textContent = txt; }
    }
    // threat indicators around the crosshair
    const ind = $('ind');
    g.guards.forEach((gd, i) => {
      let el = ind.children[i];
      if (!el) { el = document.createElement('i'); ind.appendChild(el); }
      const alert = gd.state === 'alert' || gd.state === 'flee', sus = !alert && (gd.susp > 0.04 || gd.state === 'investigate' || gd.state === 'search');
      if (!alert && !sus) { el.style.display = 'none'; return; }
      const rel = angDiff(p.face, Math.atan2(gd.x - p.x, gd.z - p.z));
      el.style.display = '';
      el.className = alert ? 'alert' : '';
      el.style.opacity = alert ? 1 : (0.35 + gd.susp * 0.65).toFixed(2);
      el.style.transform = `translate(-50%,-50%) rotate(${(-rel * 180) / Math.PI}deg) translateY(-${this.h < 500 ? 70 : 96}px)`;
    });
  }
  buildMinimap() {
    const L = this.game.L, S = 5, c = document.createElement('canvas');
    c.width = L.W * S; c.height = L.H * S;
    const x = c.getContext('2d');
    for (let j = 0; j < L.H; j++) for (let i = 0; i < L.W; i++) {
      const k = j * L.W + i, ch = L.ch[k];
      const fl = L.floor[k];
      x.fillStyle = ch === '#' ? '#1d2140' : !L.walk[k] && !L.outdoor[k] ? '#9a8cc0' : L.outdoor[k] ? (fl === 'road' ? '#7d8596' : '#5fae4c') : fl === 'wood' ? '#f0d3a6' : fl === 'carpet' ? '#d9dcf6' : '#f4f0e8';
      x.fillRect(i * S, j * S, S, S);
    }
    // vent grates: little dark slotted squares on the wall line
    for (const v of this.game.vents || []) {
      const vx = v.gx * S, vz = v.gz * S;
      x.fillStyle = '#6a7484'; x.fillRect(vx - 3, vz - 3, 6, 6);
      x.fillStyle = '#1d2140'; x.fillRect(vx - 2, vz - 1.5, 4, 1); x.fillRect(vx - 2, vz + 0.5, 4, 1);
    }
    this.mmBase = c; this.mmS = S;
    const mm = $('mm');
    mm.width = c.width; mm.height = c.height;
    this.mmCtx = mm.getContext('2d');
  }
  drawMinimap() {
    const g = this.game, x = this.mmCtx, S = this.mmS, p = g.player;
    if (!x) return;
    x.drawImage(this.mmBase, 0, 0);
    for (const it of g.loot) { x.fillStyle = it.type === 'cash' ? '#2fbf5a' : it.type === 'gold' ? '#f5b301' : it.type === 'jewel' ? '#20c8e8' : '#ff6b9a'; x.fillRect(it.x * S - 1.5, it.z * S - 1.5, 3, 3); }
    if (g.brief && Math.sin(this.time * 10) > -0.2) { x.fillStyle = '#ffb000'; x.strokeStyle = '#fff'; x.lineWidth = 1.5; x.beginPath(); x.arc(g.brief.x * S, g.brief.z * S, 4.5, 0, 6.3); x.fill(); x.stroke(); }
    if (!g.safeOpen) { x.fillStyle = '#ffd23f'; x.fillRect((g.L.safe.x + 0.15) * S, (g.L.safe.y + 0.15) * S, S * 0.7, S * 0.7); }
    if (g.hasStash) { x.strokeStyle = '#3ddc84'; x.lineWidth = 2; x.beginPath(); x.arc(g.L.exit.x * S, g.L.exit.z * S, S, 0, 6.3); x.stroke(); }
    for (const gd of g.guards) {
      const ko = gd.state === 'ko' || gd.state === 'getup' || gd.state === 'sleep';
      const col = gd.state === 'alert' || gd.state === 'flee' ? '#ff3b4e' : gd.kind === 'clerk' ? '#f4f1ea' : gd.susp > 0.25 ? '#ff9f1c' : ko ? '#8a8fae' : '#3f6fe0';
      if (!ko) {
        x.fillStyle = gd.state === 'alert' ? 'rgba(255,59,78,.3)' : 'rgba(255,225,77,.35)';
        x.beginPath(); x.moveTo(gd.x * S, gd.z * S);
        const a0 = -gd.face + Math.PI / 2;
        x.arc(gd.x * S, gd.z * S, gd.range * S, a0 - gd.fov / 2, a0 + gd.fov / 2); x.closePath(); x.fill();
      }
      x.fillStyle = col; x.beginPath(); x.arc(gd.x * S, gd.z * S, 2.6, 0, 6.3); x.fill();
    }
    if (!g.powerOff) for (const sp of g.spots) { x.fillStyle = sp.cool > 0 ? 'rgba(255,48,64,.6)' : 'rgba(255,240,176,.55)'; x.beginPath(); x.arc(sp.x * S, sp.z * S, sp.def.r * S, 0, 6.3); x.fill(); }
    if (!g.powerOff) for (const l of g.lasers) { x.fillStyle = l.on ? '#ff3040' : 'rgba(255,48,64,.3)'; if (l.alongX) x.fillRect(l.lo * S, l.line * S - 1, (l.hi - l.lo) * S, 2); else x.fillRect(l.line * S - 1, l.lo * S, 2, (l.hi - l.lo) * S); }
    for (const d of g.doors) { x.fillStyle = d.open ? '#3ddc84' : '#ff3b4e'; x.fillRect(d.x * S, d.y * S, S, S); }
    for (const k of g.keyMeshes) if (k.m.visible) { x.fillStyle = '#2f7ae8'; x.fillRect(k.x * S + 0.5, k.y * S + 0.5, S - 1, S - 1); }
    for (const d of g.dogs) { x.fillStyle = d.state === 'bark' || d.state === 'barkHide' ? '#ff3b4e' : '#c98a4a'; x.fillRect(d.x * S - 2, d.z * S - 2, 4, 4); }
    // ghost run: faint best route + where your best run was right now
    const gh = this.ghost;
    if (gh && gh.pts.length > 3) {
      const P = gh.pts, n = P.length / 2;
      x.strokeStyle = 'rgba(199,125,255,.45)'; x.lineWidth = 1.5; x.setLineDash([3, 3]);
      x.beginPath(); x.moveTo(P[0] / 10 * S, P[1] / 10 * S);
      for (let i = 1; i < n; i++) x.lineTo(P[i * 2] / 10 * S, P[i * 2 + 1] / 10 * S);
      x.stroke(); x.setLineDash([]);
      const f = Math.min(n - 1, g.time / gh.dt), i0 = Math.floor(f), i1 = Math.min(n - 1, i0 + 1), k = f - i0;
      const gx = (P[i0 * 2] + (P[i1 * 2] - P[i0 * 2]) * k) / 10 * S, gz = (P[i0 * 2 + 1] + (P[i1 * 2 + 1] - P[i0 * 2 + 1]) * k) / 10 * S;
      x.fillStyle = 'rgba(199,125,255,.95)'; x.beginPath(); x.arc(gx, gz, 3.4, 0, 6.3); x.fill();
      x.strokeStyle = '#fff'; x.lineWidth = 1; x.stroke();
    }
    // player arrow
    const a = -p.face + Math.PI / 2, px = p.x * S, pz = p.z * S;
    x.fillStyle = '#fff'; x.strokeStyle = '#17c3a2'; x.lineWidth = 1.5;
    x.beginPath();
    x.moveTo(px + Math.cos(a) * 5, pz + Math.sin(a) * 5);
    x.lineTo(px + Math.cos(a + 2.5) * 4, pz + Math.sin(a + 2.5) * 4);
    x.lineTo(px + Math.cos(a - 2.5) * 4, pz + Math.sin(a - 2.5) * 4);
    x.closePath(); x.fill(); x.stroke();
  }
  updateCamera(dt) {
    const g = this.game, L = g.L, cam = this.camera;
    const zoom = this.aspect < 1 ? 1 + (1 - this.aspect) * 1.6 : 1;
    let fov;
    if (this.state === 'intro') { this.updateIntro(dt); fov = this.aspect < 1 ? 62 : 50; }
    else if (this.state === 'menu' || this.state === 'soon') {
      const a = this.time * 0.07;
      const look = this._f.set(L.W / 2, 0, L.H / 2 - 2);
      cam.position.set(look.x + Math.sin(a) * 17 * zoom, 19 * zoom, look.z + Math.cos(a) * 17 * zoom);
      cam.lookAt(look);
      fov = 42;
    } else {
      g.applyCamera(cam, dt);
      fov = (this.aspect < 1 ? this.fovBase + 14 : this.fovBase) + g.fovKick + (g.fovPunch || 0);
      const sp = $('speed'), so = Math.min(1, g.fovKick / 9).toFixed(2);
      if (sp.dataset.o !== so) { sp.dataset.o = so; sp.style.opacity = so; }
    }
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
  }
  adaptRes(dt) {
    // dynamic resolution: keep 60fps on weak devices
    this.frameAcc += dt; this.frameN++;
    if (this.frameAcc < 2) return;
    const avg = this.frameAcc / this.frameN;
    this.frameAcc = 0; this.frameN = 0;
    if (document.hidden) return;
    // phones often run at a capped 30fps (low power mode): only shed resolution when it's genuinely struggling
    const slow = this.mobile ? 1 / 26 : 1 / 45;
    if (avg > slow && this.dpr > this.minDpr) { this.dpr = Math.max(this.minDpr, this.dpr - 0.15); this.goodWin = 0; }
    else if (avg < (this.mobile ? 1 / 29 : 1 / 57)) { if (++this.goodWin >= 3 && this.dpr < Math.min(devicePixelRatio || 1, this.maxDpr)) { this.dpr = Math.min(this.maxDpr, this.dpr + 0.1); this.goodWin = 0; } else return; }
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
