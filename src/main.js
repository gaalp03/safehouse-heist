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
import { todaysDaily, prevDayKey } from './daily.js';
import { ACH, recordRun, blankStats } from './achievements.js';
import { OUTFITS, colorsOf, unlocked, needText } from './outfits.js';
import { TUT_STEPS } from './tutorial.js';

const $ = (id) => document.getElementById(id);
const HINTS = {
  move: ['WASD to move · Mouse to look', 'Left side: move · Right side: look'],
  thunder: ['⚡ Thunder covers your noise for a moment. Dash now!', '⚡ Thunder covers your noise for a moment. Dash now!'],
  uniform: ['Hold E on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar', 'Hold ✋ on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar'],
  vent: ['Air vent! E to crawl through to another room, unseen', 'Air vent! Tap the hand to crawl through, unseen'],
  dash: ['SPACE / SHIFT to dash. Careful, it\'s noisy!', 'Tap DASH to dash. Careful, it\'s noisy!'],
  cone: ['Stay out of the vision cones!', 'Stay out of the vision cones!'],
  ko: ['Behind a guard? E / Click = knock out!', 'Behind a guard? Tap the hand = knock out!'],
  safe: ['Hold E / Mouse to crack the safe', 'Hold the hand button to crack the safe'],
  owner: ['Shh... the owner is asleep. No dashing near the bed!', 'Shh... the owner is asleep. No dashing near the bed!'],
  loot: ['Extra loot = more stars. Grab it all!', 'Extra loot = more stars. Grab it all!'],
  stash: ['Got the stash! Get back to the van!', 'Got the stash! Get back to the van!'],
  dog: ['A guard dog! It follows your scent and barks. Coins distract it.', 'A guard dog! It follows your scent and barks. Coins distract it.'],
  clerk: ['The clerk is running for the alarm button! Knock them out first!', 'The clerk is running for the alarm button! Knock them out first!'],
  camhit: ['Security camera! Hit it with a thrown coin (Q) to knock it out for 12s', 'Security camera! Hit it with a thrown coin to knock it out for 12s'],
  pocket: ['Behind a guard: tap E to knock out, HOLD E to pickpocket his wallet (or spare keycard)', 'Behind a guard: tap ✋ to knock out, HOLD ✋ to pickpocket his wallet'],
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
  coin: ['Q: throw a coin to lure guards away', 'Tap the coin to lure guards away'],
  alarm: ['ALARM! Escape or hold E at the keypad by the front door', 'ALARM! Escape or hold the hand at the keypad by the front door'],
};

class App {
  constructor() {
    this.els = {
      canvas: $('c'), fxl: $('fxl'), joyzone: $('joyzone'), lookzone: $('lookzone'), joy: $('joy'), knob: $('knob'), bAct: $('bAct'), bDash: $('bDash'), bThrow: $('bThrow'), bSmoke: $('bSmoke'), bSneak: $('bSneak'),
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
    this.maxDpr = mobile ? 1.25 : 1.75;
    this.dpr = Math.min(devicePixelRatio || 1, this.maxDpr);
    const r = (this.renderer = new WebGLRenderer({ canvas: this.els.canvas, antialias: !mobile, powerPreference: 'high-performance', stencil: false }));
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
    $('loading').classList.add('hidden');
    this.showMenu();
  }

  // ---------------- UI ----------------
  bindUI() {
    const click = (id, fn) => $(id).addEventListener('click', (e) => { e.stopPropagation(); this.audio.unlock(); this.audio.play('click'); fn(); });
    click('bPlay', () => this.playSel());
    for (const k of ['lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6', 'lvl7', 'daily']) $(k).addEventListener('click', (e) => { e.stopPropagation(); this.audio.unlock(); this.audio.play('click'); this.selectPin(k); });
    for (const el of document.querySelectorAll('#diff button')) {
      el.addEventListener('click', (e) => {
        e.stopPropagation(); this.audio.unlock(); this.audio.play('click');
        if (el.dataset.d === 'ironman' && !this.ironUnlocked()) { this.audio.play('nope'); el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); return; }
        this.diff = el.dataset.d; this.save.diff = this.diff; SDK.store(this.save); this.showMenu();
      });
    }
    click('bResume', () => this.resume());
    click('bSet', () => this.showSettings());
    click('bPSet', () => this.showSettings());
    click('bSetBack', () => { if (this.setFrom === 'pause') { this.state = 'pause'; this.screen('pause'); } else this.showMenu(); });
    for (const el of document.querySelectorAll('#settings input')) el.addEventListener('input', () => this.readSettings());
    click('bRestart', () => this.start());
    click('bPMenu', () => this.showMenu());
    click('bRetry', () => this.retry());
    click('bNext', () => {
      if (this.levelIdx === 0 && this.mode !== 'daily' && this.bankUnlocked()) this.start('classic', 1);
      else if (this.levelIdx === 1 && this.jewelryUnlocked()) this.start('classic', 2);
      else if (this.levelIdx === 2 && this.museumUnlocked()) this.start('classic', 3);
      else if (this.levelIdx === 3 && this.casinoUnlocked()) this.start('classic', 4);
      else if (this.levelIdx === 4 && this.penthouseUnlocked()) this.start('classic', 5);
      else if (this.levelIdx === 5 && this.trainUnlocked()) this.start('classic', 6);
      else this.showSoon();
    });
    click('bRMenu', () => this.showMenu());
    click('bBRetry', () => this.retry());
    click('bBMenu', () => this.showMenu());
    click('bRevive', () => this.reviveAd());
    click('bSoonBack', () => this.showMenu());
    click('bTrophy', () => this.showTrophies());
    click('bOutfit', () => this.showOutfits());
    click('bOfBack', () => this.showMenu());
    click('bTut', () => this.start('tutorial', 0));
    $('tut').addEventListener('pointerdown', (e) => { if (this.input.touch && this.game.tut) { e.stopPropagation(); this.skipTutorial(); } });
    click('bTrBack', () => this.showMenu());
    click('bPause', () => this.pause());
    click('bMute', () => this.toggleMute());
    this.input.on('pause', () => { if (this.state === 'play') this.pause(); else if (this.state === 'pause') this.resume(); });
    this.input.on('restart', () => { if (['play', 'pause', 'result', 'busted'].includes(this.state)) this.start(); });
    this.input.on('mute', () => this.toggleMute());
    this.input.on('key', (code) => {
      if (code === 'KeyT' && this.state === 'play' && this.game.tut) this.skipTutorial();
      if ((code === 'Enter' || code === 'Space') && this.state === 'menu') { this.audio.unlock(); this.playSel(); }
      else if ((code === 'Enter' || code === 'Space') && (this.state === 'result' || this.state === 'busted')) { this.audio.unlock(); this.retry(); }
    });
    this.input.on('mode', () => this.syncTouch());
    this.input.on('unlock', () => { if (this.state === 'play' && this.game.state === 'play' && !this.input.touch) this.pause(); });
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
    SDK.gameplayStop();
    this.audio.siren(false);
    this.state = 'menu';
    this.game.reset();
    const b = this.save.best[diffKey('safehouse', this.diff)];
    const bu = this.bankUnlocked(), bb = this.save.best[diffKey('bank', this.diff)];
    $('lvl2').classList.toggle('lock', !bu);
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
    this.renderSel();
    if (this.diff === 'ironman' && !this.ironUnlocked()) this.diff = 'normal';
    for (const el of document.querySelectorAll('#diff button')) { el.classList.toggle('on', el.dataset.d === this.diff); if (el.dataset.d === 'ironman') { el.classList.toggle('lock', !this.ironUnlocked()); el.title = this.ironUnlocked() ? 'Ironman: x2.5 score, 1 coin, no smoke, 15s police' : 'Escape any heist on Hard to unlock'; } }
    $('lvl1stars').innerHTML = this.starsHTML(b ? b.stars : 0);
    $('lvl1best').textContent = b ? 'Best ' + fmtMoney(b.score) : 'New!';
    this.daily = todaysDaily();
    const db = (this.save.daily || {})[this.daily.key];
    $('dMut').textContent = this.daily.mutator.name;
    { const n = new Date(); $('dArt').innerHTML = `<span style="font-size:20px">${n.getDate()}</span>`; }
    $('dDesc').textContent = this.daily.mutator.desc;
    $('dBest').textContent = (db ? 'Today ' + fmtMoney(db.score) : this.daily.label) + ((this.save.streak && this.save.streak.n > 1 && (this.save.streak.last === this.daily.key || this.save.streak.last === prevDayKey())) ? ` · 🔥${this.save.streak.n}` : '');
    this.screen('menu');
  }
  runRecord(win, res) {
    const g = this.game;
    return {
      win, level: this.level.id, diff: this.mode === 'daily' ? 'daily' : this.diff, ghost: win && res.ghost, time: g.time, kos: g.kos,
      frac: g.lootGot / g.lootTotal, loot: g.lootGot, contractsDone: win ? res.contracts.filter((c) => c.st === 'ok').length : 0,
      hides: g.hidesUsed, smokes: g.smokesUsed, coins: g.coinsThrown, radio: g.radioFaked, picks: g.picks, vents: g.ventsUsed, disguised: g.disguiseT > 0, lasers: g.lasersTripped, power: g.powerOff,
    };
  }
  applyOutfit() {
    let o = OUTFITS.find((x) => x.id === this.save.outfit);
    if (!o || !unlocked(o, this.save)) o = OUTFITS[0];
    this.vm.setOutfit(colorsOf(o));
    return o;
  }
  showOutfits() {
    SDK.gameplayStop();
    this.state = 'outfits';
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
      ['Contracts', s.contracts], ['Best Safe House', bt('safehouse')], ['Best Bank', bt('bank')], ['Best Jewelry', bt('jewelry')],
      ['Best Museum', bt('museum')], ['Best Casino', bt('casino')], ['Best Penthouse', bt('penthouse')], ['Best Train', bt('train')]];
    $('trStats').innerHTML = rows.map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join('');
    $('trAch').innerHTML = ACH.map((a) => `<div class="ach ${got[a.id] ? 'on' : ''}"><i>${got[a.id] ? a.icon : '🔒'}</i><b>${a.name}</b><small>${a.desc}</small></div>`).join('');
    $('trCount').textContent = `${Object.keys(got).filter((k) => ACH.some((a) => a.id === k)).length} / ${ACH.length}`;
    this.screen('trophies');
  }
  showAchToast(list) {
    $('rAch').innerHTML = list.length ? '🏆 Unlocked: ' + list.map((a) => `<b>${a.icon} ${a.name}</b>`).join(' · ') : '';
    $('rAch').classList.toggle('hidden', !list.length);
    if (list.length) setTimeout(() => this.audio.play('contract'), 1600);
  }
  pinLocked(k) { return k === 'lvl2' ? !this.bankUnlocked() : k === 'lvl3' ? !this.jewelryUnlocked() : k === 'lvl4' ? !this.museumUnlocked() : k === 'lvl5' ? !this.casinoUnlocked() : k === 'lvl6' ? !this.penthouseUnlocked() : k === 'lvl7' ? !this.trainUnlocked() : false; }
  selectPin(k) {
    this.sel = k; this.save.sel = k;
    if (this.pinLocked(k)) { const c = $(k); c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake'); }
    this.renderSel();
  }
  renderSel() {
    let k = this.sel || this.save.sel || 'lvl1';
    if (!$(k)) k = 'lvl1';
    this.sel = k;
    for (const id of ['lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6', 'lvl7', 'daily']) $(id).classList.toggle('on', id === k);
    const el = $(k), locked = this.pinLocked(k);
    $('selName').textContent = k === 'daily' ? 'Daily: ' + $('dMut').textContent : el.querySelector('.t').textContent;
    const st = el.querySelector('.stars');
    $('selStars').innerHTML = st ? st.innerHTML : '';
    $('selSub').textContent = k === 'daily' ? $('dDesc').textContent + ' · ' + $('dBest').textContent : el.querySelector('.best').textContent;
    $('bPlay').textContent = locked ? '🔒 LOCKED' : 'PLAY';
    $('bPlay').classList.toggle('dis', locked);
    let tot = 0;
    for (const id of ['safehouse', 'bank', 'jewelry', 'museum', 'casino', 'penthouse', 'train']) tot += Math.max(...['', '_easy', '_hard', '_ironman'].map((x) => (this.save.best[id + x] || { stars: 0 }).stars));
    $('starTotal').textContent = `★ ${tot}/21`;
  }
  playSel() {
    const k = this.sel || 'lvl1';
    if (this.pinLocked(k)) { this.audio.play('nope'); this.selectPin(k); return; }
    if (k === 'daily') this.start('daily');
    else this.start('classic', { lvl1: 0, lvl2: 1, lvl3: 2, lvl4: 3, lvl5: 4, lvl6: 5, lvl7: 6 }[k]);
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
      x.fillStyle = 'rgba(28,19,48,.35)'; x.fillRect(0, 0, cv.width, cv.height);
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
    $('soonList').innerHTML = ['Harbor container yard', 'Mayor\'s mansion gala', 'Armored truck ambush'].map((t) => `<li>${t}</li>`).join('');
    this.screen('soon');
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
    if (this.mode === 'daily' || this.mode === 'tutorial') idx = 0;
    if (idx != null) this.levelIdx = idx;
    const fresh = this.loadedIdx !== this.levelIdx;
    if (fresh) await this.useLevel(this.levelIdx);
    if (this.mode === 'daily' && (!this.daily || this.daily.key !== todaysDaily().key)) this.daily = todaysDaily();
    this.audio.unlock();
    this.audio.siren(false);
    this.game.reset();
    this.input.clear();
    this.state = 'play';
    this.input.requestLock();
    this.runs++;
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
    this.renderContracts(this.game.contracts);
    this.tutStep = this.game.tut ? 0 : TUT_STEPS.length; $('tut').dataset.k = '';
    clearTimeout(this.whyT); $('alarmwhy').classList.add('hidden');
    if (this.mode === 'daily') {
      const t = $('ctoast');
      t.innerHTML = `<small>DAILY CHALLENGE · ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`;
      t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
      clearTimeout(this.ctT); this.ctT = setTimeout(() => t.classList.add('hidden'), 3200);
    } else if (fresh && this.mode === 'classic' && this.save.tutDone) this.showIntel();
    else $('ctoast').classList.add('hidden');
    this.hint('move');
    SDK.gameplayStart();
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
    it.push(d.heli ? '🚁 Roof extraction' : L.van ? '🚐 Van out front' : '🪜 Roof hatch exit');
    const t = $('ctoast');
    t.innerHTML = `<small>INTEL · ${d.name.toUpperCase()}</small><span class="intel">${it.map((x) => `<i>${x}</i>`).join('')}</span>`;
    t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    clearTimeout(this.ctT); this.ctT = setTimeout(() => t.classList.add('hidden'), 4200);
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
  hint(id) {
    if (!this.level || !this.level.tutorial || this.hShown.has(id) || this.hDone.has(id)) return;
    if (this.game && this.game.tut && ['move', 'loot', 'safe', 'pick', 'cone', 'stash'].includes(id)) return;
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
      if (this.hT <= 0 || this.state !== 'play' || this.game.state !== 'play') { this.hCur = null; el.classList.add('hidden'); }
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
    const txt = kind === 'slot' ? (t ? 'HOLD ✋ TO PULL THE LEVER' : 'HOLD E: PULL THE LEVER') : kind === 'radio' ? (t ? 'HOLD ✋ TO ANSWER THE RADIO' : 'HOLD E: ANSWER "ALL CLEAR"') : kind === 'case' ? (t ? 'HOLD ✋ TO SMASH' : 'HOLD E TO SMASH THE CASE') : kind === 'pick' ? (t ? 'TAP ✋ TO PICK THE LOCK' : 'E: PICK THE LOCK') : kind === 'picking' ? (t ? 'TAP ✋ IN THE GREEN · MOVE TO STOP' : 'E IN THE GREEN · MOVE TO STOP') : kind === 'breaker' ? (t ? 'HOLD ✋ TO CUT POWER' : 'HOLD E TO CUT THE POWER') : kind === 'door' ? (t ? 'TAP ✋ TO OPEN' : 'E: SWIPE KEYCARD') : kind === 'locked' ? 'LOCKED: FIND THE KEYCARD' : kind === 'uniform' ? (t ? 'HOLD ✋ TO TAKE THE UNIFORM' : 'HOLD E: TAKE HIS UNIFORM') : kind === 'tv' ? (t ? 'TAP ✋ TO TURN THE TV ON' : 'E: TURN THE TV ON (LURE)') : kind === 'vent' ? (t ? 'TAP ✋ TO CRAWL IN' : 'E: CRAWL INTO THE VENT') : kind === 'hide' ? (t ? 'TAP ✋ TO HIDE' : 'E: HIDE') : kind === 'leave' ? (t ? 'TAP ✋ OR MOVE TO LEAVE' : 'E / MOVE: LEAVE') : kind === 'panel' ? (t ? 'HOLD ✋ TO DISARM' : 'HOLD E TO DISARM ALARM') : kind === 'safe' ? (t ? 'HOLD ✋ TO CRACK ' + sn : 'HOLD E / CLICK TO CRACK ' + sn) : kind === 'pocket' ? (t ? 'TAP ✋ KO · HOLD ✋ PICKPOCKET' : 'TAP E: KO · HOLD E: PICKPOCKET') : kind === 'ko' ? (t ? 'TAP ✋ TO KNOCK OUT' : 'E / CLICK: KNOCK OUT') : '';
    if (p.dataset.k !== kind) {
      p.dataset.k = kind;
      p.textContent = txt;
      p.classList.toggle('hidden', !kind);
      $('xh').classList.toggle('ready', !!kind);
      this.els.bAct.classList.toggle('ready', !!kind);
      this.els.bAct.lastChild.textContent = kind === 'pocket' ? 'KO / LIFT' : kind === 'slot' ? 'PULL' : kind === 'radio' ? 'ANSWER' : kind === 'case' ? 'SMASH' : kind === 'pick' || kind === 'picking' ? 'PICK' : kind === 'breaker' ? 'CUT' : kind === 'door' ? 'OPEN' : kind === 'uniform' ? 'DISGUISE' : kind === 'tv' ? 'TV ON' : kind === 'vent' ? 'CRAWL' : kind === 'hide' ? 'HIDE' : kind === 'leave' ? 'LEAVE' : kind === 'panel' ? 'DISARM' : kind === 'safe' ? 'CRACK' : kind === 'ko' ? 'KO!' : 'GRAB';
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
  renderContracts(list) {
    $('ctr').innerHTML = list.map((c) => `<li class="${c.st}"><i></i>${c.text}<b>+${fmtMoney(c.bonus)}</b></li>`).join('');
  }
  onContract(c, list) {
    this.renderContracts(list);
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
  ventFx(a) {
    const el = $('ventfx'); el.style.opacity = a.toFixed(3); el.classList.toggle('hidden', a <= 0);
  }
  onHide(on) {
    $('slats').classList.toggle('hidden', !on);
    $('xh').classList.toggle('hidden', on);
  }
  onDisguise(t) {
    const el = $('disgp'), on = t > 0;
    el.classList.toggle('hidden', !on);
    if (on) { const s = Math.ceil(t); if (el.dataset.s !== String(s)) { el.dataset.s = s; el.textContent = '🕴 DISGUISED ' + s + 's'; el.classList.toggle('low', s <= 5); } }
    if (this.disgOn !== on) { this.disgOn = on; on ? this.vm.setOutfit(colorsOf({ sleeve: 0x2b3f7a, glove: 0x1a1c26, bar: 0x8a94a4, band: 0xf2c94c })) : this.applyOutfit(); }
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
  onBusted() {
    this.state = 'busted';
    this.audio.siren(false);
    SDK.gameplayStop();
    $('bRevive').classList.toggle('hidden', !ADS_ENABLED || !SDK.available || this.game.revived);
    $('bustTip').textContent = this.game.policeBusted ? 'The police arrived! Knock out alerted guards before they radio in, or disarm the keypad by the front door.' : [
      'Tip: guards can\'t see behind them. Sneak up and knock them out!',
      'Tip: dashing is loud. Walk near guards and the sleeping owner.',
      'Tip: break line of sight and alerted guards will lose you.',
      'Tip: the camera in the office sweeps. Time your move!',
      'Tip: try the side door on the east of the house.',
    ][(Math.random() * 5) | 0];
    const fresh = recordRun(this.save, this.runRecord(false));
    SDK.store(this.save);
    $('bAch').innerHTML = fresh.map((a) => `🏆 ${a.icon} ${a.name} unlocked!`).join('<br>');
    this.screen('busted');
    this.drawRecap('bMap', false);
  }
  onWin(res) {
    this.state = 'result';
    this.audio.siren(false);
    $('alarm').classList.add('hidden'); $('siren').classList.remove('on');
    SDK.gameplayStop();
    SDK.happytime();
    const nStars = res.stars.filter(Boolean).length;
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
      prev = this.save.best[bk] || { score: 0, stars: 0 };
      newBest = res.score > prev.score;
      this.save.best[bk] = { score: Math.max(prev.score, res.score), stars: Math.max(prev.stars, nStars) };
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
    $('rBest').textContent = (newBest ? 'NEW BEST!' : 'Best ' + fmtMoney(bestScore)) + ' · ' + res.diff + (res.daily ? ` · 🔥${this.save.streak.n} day streak` : '');
    $('rMult').textContent = res.mult === 1 ? '' : `${res.diff} ×${res.mult}`;
    $('rBest').classList.toggle('new', newBest);
    if (!res.daily && this.ghostMsg) $('rBest').textContent += '  ·  ' + this.ghostMsg;
    const tutJustDone = this.game.tut && !this.save.tutDone;
    if (this.game.tut) this.save.tutDone = true;
    const freshA = recordRun(this.save, this.runRecord(true, res));
    const newOut = OUTFITS.filter((o) => o.id !== 'classic' && unlocked(o, this.save) && !(this.save.seenOut || []).includes(o.id));
    this.save.seenOut = OUTFITS.filter((o) => unlocked(o, this.save)).map((o) => o.id);
    this.showAchToast(freshA);
    if (tutJustDone) { $('rAch').innerHTML = '🎓 <b>Tutorial complete!</b> Contracts, difficulty and the Daily are yours now.' + ($('rAch').innerHTML ? '<br>' + $('rAch').innerHTML : ''); $('rAch').classList.remove('hidden'); }
    if (newOut.length) $('rAch').innerHTML += `<br>🧤 New outfit: <b>${newOut.map((o) => o.name).join(', ')}</b>`, $('rAch').classList.remove('hidden');
    SDK.store(this.save);
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
    else if (st === 'menu' || st === 'soon') this.game.update(rdt, true);
    if (st !== 'pause' && st !== 'ad') {
      this.particles.update(rdt);
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
    this.vm.visible = st === 'outfits' || (st === 'play' || st === 'busted' || st === 'pause') && (this.game.state === 'play' || this.game.state === 'caught') && !this.game.player.hiding;
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
    if (!g.tut || this.tutStep >= TUT_STEPS.length) { el.classList.add('hidden'); return; }
    if (this.tutStep == null) this.tutStep = 0;
    const step = TUT_STEPS[this.tutStep];
    if (step.done(g)) {
      this.tutStep++;
      this.audio.play('star', Math.min(2, this.tutStep % 3));
      el.classList.remove('done'); void el.offsetWidth; el.classList.add('done');
      if (this.tutStep >= TUT_STEPS.length) { setTimeout(() => el.classList.add('hidden'), 900); return; }
    }
    const s = TUT_STEPS[this.tutStep], key = this.tutStep + (this.input.touch ? 't' : 'k');
    if (el.dataset.k !== key) {
      el.dataset.k = key;
      el.querySelector('small').textContent = `TUTORIAL ${this.tutStep + 1}/${TUT_STEPS.length}`;
      el.querySelector('span').textContent = s.text[this.input.touch ? 1 : 0];
      el.querySelector('em').textContent = this.input.touch ? 'tap to skip' : 'T to skip';
      el.querySelector('i').style.width = (this.tutStep / TUT_STEPS.length * 100) + '%';
    }
    el.classList.toggle('hidden', g.alarm || g.state !== 'play');
  }
  updateHud() {
    this.updateTutorial();
    const g = this.game, p = g.player;
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
      const wpx = Math.max(64, Math.min(this.w - 64, ((x + 1) / 2) * this.w)), wpy = Math.max(40, Math.min(this.h - 40, ((1 - y) / 2) * this.h));
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
      x.fillStyle = ch === '#' ? '#1d2140' : !L.walk[k] && !L.outdoor[k] ? '#a7a3bd' : L.outdoor[k] ? (L.floor[k] === 'road' ? '#7d8596' : '#5fae4c') : '#efe9df';
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
    if (this.state === 'menu' || this.state === 'soon') {
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
