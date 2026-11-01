import { WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Color, Vector3, Fog, ACESFilmicToneMapping } from 'three';
import { makeSky, Dust } from './atmo.js';
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

const $ = (id) => document.getElementById(id);
const HINTS = {
  move: ['WASD to move · Mouse to look', 'Left side: move · Right side: look'],
  dash: ['SPACE / SHIFT to dash. Careful, it\'s noisy!', 'Tap DASH to dash. Careful, it\'s noisy!'],
  cone: ['Stay out of the vision cones!', 'Stay out of the vision cones!'],
  ko: ['Behind a guard? E / Click = knock out!', 'Behind a guard? Tap the hand = knock out!'],
  safe: ['Hold E / Mouse to crack the safe', 'Hold the hand button to crack the safe'],
  owner: ['Shh... the owner is asleep. No dashing near the bed!', 'Shh... the owner is asleep. No dashing near the bed!'],
  loot: ['Extra loot = more stars. Grab it all!', 'Extra loot = more stars. Grab it all!'],
  stash: ['Got the stash! Get back to the van!', 'Got the stash! Get back to the van!'],
  dog: ['A guard dog! It follows your scent and barks. Coins distract it.', 'A guard dog! It follows your scent and barks. Coins distract it.'],
  clerk: ['The clerk is running for the alarm button! Knock them out first!', 'The clerk is running for the alarm button! Knock them out first!'],
  laser: ['Laser grid! Time your run, or cut the power at the breaker in the security room', 'Laser grid! Time your run, or cut the power at the breaker in the security room'],
  key: ['The vault door needs a keycard. Search the offices!', 'The vault door needs a keycard. Search the offices!'],
  door: ['Got the keycard! Swipe it at the vault door', 'Got the keycard! Swipe it at the vault door'],
  drill: ['Cracking the vault is LOUD. Guards will hear it!', 'Cracking the vault is LOUD. Guards will hear it!'],
  hide: ['E at a wardrobe: hide inside. Guards lose you if they did not see you!', 'Tap the hand at a wardrobe to hide inside'],
  smoke: ['C: drop a smoke bomb. Guards cannot see into or through the cloud!', 'Tap 💨 to drop a smoke bomb. Guards cannot see through it!'],
  coin: ['Q: throw a coin to lure guards away', 'Tap the coin to lure guards away'],
  alarm: ['ALARM! Escape or hold E at the keypad by the front door', 'ALARM! Escape or hold the hand at the keypad by the front door'],
};

class App {
  constructor() {
    this.els = {
      canvas: $('c'), fxl: $('fxl'), joyzone: $('joyzone'), lookzone: $('lookzone'), joy: $('joy'), knob: $('knob'), bAct: $('bAct'), bDash: $('bDash'), bThrow: $('bThrow'), bSmoke: $('bSmoke'),
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
    r.autoClear = false;
    this.camera = new PerspectiveCamera(42, 1, 0.05, 120);
    this.camera.rotation.order = 'YXZ';
    this.vm = new ViewModel();
    this.scene.add(new HemisphereLight(0xffe6c8, 0x7a6888, 1.8));
    const sun = new DirectionalLight(0xffe0b8, 1.4);
    sun.position.set(-4, 10, 6);
    this.scene.add(sun);

    this.audio = new Audio();
    this.audio.setMuted(!!this.save.muted);
    this.input = new Input(this.els);
    this.particles = new Particles(this.scene);
    this.shake = new Shake();
    this.floaters = new Floaters(this.els.fxl);
    this.dust = new Dust(this.scene);
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
    click('bPlay', () => this.start('classic', this.levelIdx || 0));
    for (const el of document.querySelectorAll('#diff button')) {
      el.addEventListener('click', (e) => {
        e.stopPropagation(); this.audio.unlock(); this.audio.play('click');
        this.diff = el.dataset.d; this.save.diff = this.diff; SDK.store(this.save); this.showMenu();
      });
    }
    click('lvl1', () => this.start('classic', 0));
    click('lvl2', () => { if (this.bankUnlocked()) this.start('classic', 1); else { this.audio.play('nope'); const c = $('lvl2'); c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake'); } });
    click('daily', () => this.start('daily'));
    click('bResume', () => this.resume());
    click('bRestart', () => this.start());
    click('bPMenu', () => this.showMenu());
    click('bRetry', () => this.retry());
    click('bNext', () => { if (this.levelIdx === 0 && this.mode !== 'daily' && this.bankUnlocked()) this.start('classic', 1); else this.showSoon(); });
    click('bRMenu', () => this.showMenu());
    click('bBRetry', () => this.retry());
    click('bBMenu', () => this.showMenu());
    click('bRevive', () => this.reviveAd());
    click('bSoonBack', () => this.showMenu());
    click('bTrophy', () => this.showTrophies());
    click('bOutfit', () => this.showOutfits());
    click('bOfBack', () => this.showMenu());
    click('bTrBack', () => this.showMenu());
    click('bPause', () => this.pause());
    click('bMute', () => this.toggleMute());
    this.input.on('pause', () => { if (this.state === 'play') this.pause(); else if (this.state === 'pause') this.resume(); });
    this.input.on('restart', () => { if (['play', 'pause', 'result', 'busted'].includes(this.state)) this.start(); });
    this.input.on('mute', () => this.toggleMute());
    this.input.on('key', (code) => {
      if ((code === 'Enter' || code === 'Space') && this.state === 'menu') { this.audio.unlock(); this.start('classic'); }
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
    for (const el of document.querySelectorAll('#diff button')) el.classList.toggle('on', el.dataset.d === this.diff);
    $('lvl1stars').innerHTML = this.starsHTML(b ? b.stars : 0);
    $('lvl1best').textContent = b ? 'Best ' + fmtMoney(b.score) : 'New!';
    this.daily = todaysDaily();
    const db = (this.save.daily || {})[this.daily.key];
    $('dMut').textContent = this.daily.mutator.name;
    { const n = new Date(); $('dArt').innerHTML = `<small>${n.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</small>${n.getDate()}`; }
    $('dDesc').textContent = this.daily.mutator.desc;
    $('dBest').textContent = (db ? 'Today ' + fmtMoney(db.score) : this.daily.label) + ((this.save.streak && this.save.streak.n > 1 && (this.save.streak.last === this.daily.key || this.save.streak.last === prevDayKey())) ? ` · 🔥${this.save.streak.n}` : '');
    this.screen('menu');
  }
  runRecord(win, res) {
    const g = this.game;
    return {
      win, level: this.level.id, diff: this.mode === 'daily' ? 'daily' : this.diff, ghost: win && res.ghost, time: g.time, kos: g.kos,
      frac: g.lootGot / g.lootTotal, loot: g.lootGot, contractsDone: win ? res.contracts.filter((c) => c.st === 'ok').length : 0,
      hides: g.hidesUsed, smokes: g.smokesUsed, coins: g.coinsThrown,
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
      ['Contracts', s.contracts], ['Best Safe House', bt('safehouse')], ['Best Bank', bt('bank')]];
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
  showSoon() {
    SDK.gameplayStop();
    this.state = 'soon';
    $('soonName').textContent = 'More heists';
    $('soonList').innerHTML = ['Downtown jewelry store', 'Penthouse with laser grids', 'Night train job'].map((t) => `<li>${t}</li>`).join('');
    this.screen('soon');
  }
  bankUnlocked() {
    const b = this.save.best;
    return !!(b.safehouse || b.safehouse_easy || b.safehouse_hard || this.save.bankOpen);
  }
  async useLevel(i) {
    if (this.loadedIdx === i) return;
    this.level = await loadLevel(i);
    this.game.load(this.level);
    this.buildMinimap();
    this.loadedIdx = i;
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
    if (this.mode === 'daily') idx = 0;
    if (idx != null) this.levelIdx = idx;
    if (this.loadedIdx !== this.levelIdx) await this.useLevel(this.levelIdx);
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
    this.onSmoke(this.game.smokesLeft);
    this.renderContracts(this.game.contracts);
    clearTimeout(this.whyT); $('alarmwhy').classList.add('hidden');
    if (this.mode === 'daily') {
      const t = $('ctoast');
      t.innerHTML = `<small>DAILY CHALLENGE · ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`;
      t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
      clearTimeout(this.ctT); this.ctT = setTimeout(() => t.classList.add('hidden'), 3200);
    } else $('ctoast').classList.add('hidden');
    this.hint('move');
    SDK.gameplayStart();
  }
  async retry() {
    await this.maybeMidgame();
    this.start();
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
    const txt = kind === 'breaker' ? (t ? 'HOLD ✋ TO CUT POWER' : 'HOLD E TO CUT THE POWER') : kind === 'door' ? (t ? 'TAP ✋ TO OPEN' : 'E: SWIPE KEYCARD') : kind === 'locked' ? 'LOCKED: FIND THE KEYCARD' : kind === 'hide' ? (t ? 'TAP ✋ TO HIDE' : 'E: HIDE') : kind === 'leave' ? (t ? 'TAP ✋ OR MOVE TO LEAVE' : 'E / MOVE: LEAVE') : kind === 'panel' ? (t ? 'HOLD ✋ TO DISARM' : 'HOLD E TO DISARM ALARM') : kind === 'safe' ? (t ? 'HOLD ✋ TO CRACK ' + sn : 'HOLD E / CLICK TO CRACK ' + sn) : kind === 'ko' ? (t ? 'TAP ✋ TO KNOCK OUT' : 'E / CLICK: KNOCK OUT') : '';
    if (p.dataset.k !== kind) {
      p.dataset.k = kind;
      p.textContent = txt;
      p.classList.toggle('hidden', !kind);
      $('xh').classList.toggle('ready', !!kind);
      this.els.bAct.classList.toggle('ready', !!kind);
      this.els.bAct.lastChild.textContent = kind === 'breaker' ? 'CUT' : kind === 'door' ? 'OPEN' : kind === 'hide' ? 'HIDE' : kind === 'leave' ? 'LEAVE' : kind === 'panel' ? 'DISARM' : kind === 'safe' ? 'CRACK' : kind === 'ko' ? 'KO!' : 'GRAB';
    }
    if ((kind === 'safe' || kind === 'panel' || kind === 'breaker') && prog > 0) {
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
  onKey(on) { $('key').classList.toggle('hidden', !on); if (on) { const k = $('key'); k.classList.remove('punch'); void k.offsetWidth; k.classList.add('punch'); } }
  onHide(on) {
    $('slats').classList.toggle('hidden', !on);
    $('xh').classList.toggle('hidden', on);
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
  flash(kind) {
    const f = $('flash');
    f.className = ''; void f.offsetWidth; f.className = kind;
  }
  onEscapeStart() { $('touch').classList.add('hidden'); $('fp').classList.add('hidden'); this.input.exitLock(); }
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
    const freshA = recordRun(this.save, this.runRecord(true, res));
    const newOut = OUTFITS.filter((o) => o.id !== 'classic' && unlocked(o, this.save) && !(this.save.seenOut || []).includes(o.id));
    this.save.seenOut = OUTFITS.filter((o) => unlocked(o, this.save)).map((o) => o.id);
    this.showAchToast(freshA);
    if (newOut.length) $('rAch').innerHTML += `<br>🧤 New outfit: <b>${newOut.map((o) => o.name).join(', ')}</b>`, $('rAch').classList.remove('hidden');
    SDK.store(this.save);
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
    if (st !== 'pause') this.dust.update(rdt, this.camera.position.x, this.camera.position.z);
    this.dust.points.visible = st !== 'menu' && st !== 'soon';
    this.floaters.update(st === 'pause' ? 0 : rdt, this.camera, this.w, this.h);
    this.updateHints(rdt);
    if (st === 'play') this.updateHud();
    this.audio.tension = this.game.tension;
    $('vignette').style.opacity = st === 'play' && this.game.tension ? 1 : 0;
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    if (st === 'outfits') { this.vm.mat.color.setRGB(1.05, 1.0, 0.95); this.vm.update(rdt, { move: 0, bob: 0, lookX: 0, lookY: 0, punch: 0, crack: false, grab: 0, dash: false, busted: false }); }
    this.vm.visible = st === 'outfits' || (st === 'play' || st === 'busted' || st === 'pause') && (this.game.state === 'play' || this.game.state === 'caught') && !this.game.player.hiding;
    this.vm.render(this.renderer);
    this.adaptRes(rdt);
  }
  updateHud() {
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
      wp.style.transform = `translate(${((x + 1) / 2) * this.w}px,${((1 - y) / 2) * this.h}px) translate(-50%,-50%)`;
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
    if (!g.powerOff) for (const l of g.lasers) { x.fillStyle = l.on ? '#ff3040' : 'rgba(255,48,64,.3)'; if (l.alongX) x.fillRect(l.lo * S, l.line * S - 1, (l.hi - l.lo) * S, 2); else x.fillRect(l.line * S - 1, l.lo * S, 2, (l.hi - l.lo) * S); }
    for (const d of g.doors) { x.fillStyle = d.open ? '#3ddc84' : '#ff3b4e'; x.fillRect(d.x * S, d.y * S, S, S); }
    for (const k of g.keyMeshes) if (k.m.visible) { x.fillStyle = '#2f7ae8'; x.fillRect(k.x * S + 0.5, k.y * S + 0.5, S - 1, S - 1); }
    for (const d of g.dogs) { x.fillStyle = d.state === 'bark' || d.state === 'barkHide' ? '#ff3b4e' : '#c98a4a'; x.fillRect(d.x * S - 2, d.z * S - 2, 4, 4); }
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
      fov = (this.aspect < 1 ? 84 : 70) + g.fovKick;
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
