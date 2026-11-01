// CrazyGames SDK v3 wrapper with a safe no-op fallback when not running on CrazyGames (or offline).
const SAVE_KEY = 'safehouse-heist-v1';
let sdk = null;
let playing = false;
// Ads are OFF until full launch. Flip to true to enable midgame + rewarded ads (hooks are already wired).
export const ADS_ENABLED = false;

export const SDK = {
  available: false,
  env: 'none',
  hooks: { adStart: () => {}, adEnd: () => {} },

  async init() {
    try {
      const cg = window.CrazyGames && window.CrazyGames.SDK;
      if (!cg) return;
      await Promise.race([cg.init(), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000))]);
      this.env = cg.environment;
      if (this.env === 'crazygames' || this.env === 'local') { sdk = cg; this.available = true; }
    } catch (e) {
      console.warn('[SDK] not available:', e && e.message);
    }
  },
  _c(fn) { if (!sdk) return; try { fn(sdk); } catch (e) { console.warn('[SDK]', e); } },
  loadingStart() { this._c((s) => s.game.loadingStart()); },
  loadingStop() { this._c((s) => s.game.loadingStop()); },
  gameplayStart() { if (playing) return; playing = true; this._c((s) => s.game.gameplayStart()); },
  gameplayStop() { if (!playing) return; playing = false; this._c((s) => s.game.gameplayStop()); },
  happytime() { this._c((s) => s.game.happytime()); },

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
    try {
      let s = null;
      if (sdk && sdk.data) s = sdk.data.getItem(SAVE_KEY);
      if (s == null) s = localStorage.getItem(SAVE_KEY);
      return (s && JSON.parse(s)) || {};
    } catch (_) { return {}; }
  },
  store(obj) {
    const s = JSON.stringify(obj);
    try { if (sdk && sdk.data) sdk.data.setItem(SAVE_KEY, s); } catch (_) {}
    try { localStorage.setItem(SAVE_KEY, s); } catch (_) {}
  },
};
