// CrazyGames SDK v3 wrapper with a safe no-op fallback when not running on CrazyGames (or offline).
const SAVE_KEY = 'safehouse-heist-v1';
let sdk = null;
let playing = false;
let loadState = 0; // 0 idle, 1 loading, 2 done (loadingStop fires once)
const settingsFns = [];
const readyFns = [];
// Ads are OFF until full launch. Flip to true to enable midgame + rewarded ads (hooks are already wired).
export const ADS_ENABLED = false;

function parse(s) { try { return (s && JSON.parse(s)) || {}; } catch (_) { return {}; } }

export const SDK = {
  available: false,
  env: 'none',
  hooks: { adStart: () => {}, adEnd: () => {} },

  async init() {
    let cg;
    try { cg = window.CrazyGames && window.CrazyGames.SDK; } catch (_) { cg = null; }
    if (!cg || typeof cg.init !== 'function') return;
    let p;
    try { p = Promise.resolve(cg.init()); } catch (e) { console.warn('[SDK] init failed:', e && e.message); return; }
    // a slow init must not block the game forever: wait up to 15s, then keep going and attach when it resolves
    p.then(() => this._attach(cg), (e) => console.warn('[SDK] init failed:', e && e.message));
    let timer;
    try {
      await Promise.race([p, new Promise((_, rej) => { timer = setTimeout(() => rej(new Error('timeout')), 15000); })]);
    } catch (e) {
      if (e && e.message === 'timeout') console.warn('[SDK] init slow, attaching later');
    } finally { clearTimeout(timer); }
  },
  _attach(cg) {
    if (sdk) return;
    try { this.env = cg.environment; } catch (_) { this.env = 'none'; }
    if (this.env !== 'crazygames' && this.env !== 'local') return;
    sdk = cg; this.available = true;
    // late attach: bring the platform in line with what the game is doing right now
    if (playing) this._c((s) => s.game.gameplayStart());
    for (const fn of settingsFns) this._listen(fn);
    for (const fn of readyFns) { try { fn(); } catch (e) { console.warn('[SDK]', e); } }
  },
  onReady(fn) { if (sdk) { try { fn(); } catch (_) {} } else readyFns.push(fn); },
  // device type reported by CrazyGames: 'mobile' | 'tablet' | 'desktop' (null when unknown)
  deviceType() {
    try { const t = sdk && sdk.user && sdk.user.systemInfo && sdk.user.systemInfo.device && sdk.user.systemInfo.device.type; return t || null; } catch (_) { return null; }
  },
  _c(fn) { if (!sdk) return; try { fn(sdk); } catch (e) { console.warn('[SDK]', e); } },
  loadingStart() { if (loadState) return; loadState = 1; this._c((s) => s.game.loadingStart()); },
  loadingStop() { if (loadState !== 1) return; loadState = 2; this._c((s) => s.game.loadingStop()); },
  gameplayStart() { if (playing) return; playing = true; this._c((s) => s.game.gameplayStart()); },
  gameplayStop() { if (!playing) return; playing = false; this._c((s) => s.game.gameplayStop()); },
  happytime() { this._c((s) => s.game.happytime()); },
  // CrazyGames platform settings (e.g. the site-wide mute): call back now and on every change (also after a late attach)
  onSettings(fn) {
    settingsFns.push(fn);
    if (sdk) this._listen(fn);
  },
  _listen(fn) {
    this._c((s) => {
      const g = s.game;
      if (g.settings) fn(g.settings);
      if (g.addSettingsChangeListener) g.addSettingsChangeListener((st) => fn(st));
    });
  },

  // type: 'midgame' | 'rewarded'. Resolves true if the ad finished (reward granted).
  ad(type) {
    return new Promise((resolve) => {
      if (!sdk || !ADS_ENABLED) { resolve(false); return; }
      let started = false;
      const done = (ok) => { if (started) this.hooks.adEnd(); resolve(ok); };
      try {
        sdk.ad.requestAd(type, {
          adStarted: () => { started = true; this.hooks.adStart(); },
          adFinished: () => done(true),
          adError: (err) => { console.warn('[SDK] ad error', err); done(false); },
        });
      } catch (e) { done(false); }
    });
  },

  load() {
    if (sdk) {
      // on CrazyGames the SDK data module is the source of truth; migrate an old localStorage save once
      try {
        if (sdk.data) {
          let s = sdk.data.getItem(SAVE_KEY);
          if (s == null) {
            let ls = null;
            try { ls = localStorage.getItem(SAVE_KEY); } catch (_) {}
            if (ls != null) { sdk.data.setItem(SAVE_KEY, ls); s = ls; }
          }
          return parse(s);
        }
      } catch (e) { console.warn('[SDK] data load failed, using localStorage:', e && e.message); }
    }
    try { return parse(localStorage.getItem(SAVE_KEY)); } catch (_) { return {}; }
  },
  store(obj) {
    const s = JSON.stringify(obj);
    try { if (sdk && sdk.data) sdk.data.setItem(SAVE_KEY, s); } catch (e) { console.warn('[SDK] data save failed:', e && e.message); }
    try { localStorage.setItem(SAVE_KEY, s); } catch (_) {}
  },
};
