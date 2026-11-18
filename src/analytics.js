// ByteBrew analytics (CrazyGames partner). Anonymous funnel events only: no names, emails or CrazyGames IDs.
// - Runs only on CrazyGames (SDK env 'crazygames'), or anywhere with ?bb=1 for testing (events are also logged to the console).
// - The vendored SDK is injected async after the first gameplayStart, during idle time: it never delays loading or gameplay.
// - Opt-out is remembered locally; once off, nothing is queued or sent.
import { SDK } from './sdk.js';

const GAME_ID = '1s4RUN57c';
const GAME_KEY = 'QeGFYnWxIHwbPhuYyRQGW/FaZW9J00oAitAV6AAwGjYgJN1UEzPeNSYxH/2V/sOm';
const SRC = './vendor/bytebrew-web-sdk-1.0.1.min.js';
const OFF_KEY = 'safehouseHeist.analyticsOff';
const ONCE_KEY = 'safehouseHeist.analyticsOnce';
const QMAX = 100;

let q = [];
let bb = null;
let st = 'idle'; // idle | loading | ready | dead
let gpSeen = false;
let envOk = null; // null until the CrazyGames SDK settles
let once = {};
try { once = JSON.parse(localStorage.getItem(ONCE_KEY) || '{}') || {}; } catch (_) { once = {}; }

const debug = /[?&]bb=1(&|$)/.test(location.search);
const build = (() => { try { const m = document.querySelector('meta[name=build]'); return (m && m.content) || 'dev'; } catch (_) { return 'dev'; } })();

export const AN = {
  debug,
  device: 'desktop',
  log: [],

  off() { try { return localStorage.getItem(OFF_KEY) === '1'; } catch (_) { return false; } },
  // true when stats are (or will be) collected in this session: used to decide whether to show the privacy notice
  active() { return !this.off() && st !== 'dead' && (debug || envOk === true); },

  init() {
    // start after the first real gameplayStart, without touching its timing
    const gs = SDK.gameplayStart.bind(SDK);
    SDK.gameplayStart = () => { gs(); gpSeen = true; this._start(); };
    const settle = () => { envOk = debug || (SDK.available && SDK.env === 'crazygames'); if (!envOk) q = []; this._start(); };
    SDK.onReady(settle);
    if (SDK.available || debug) settle();
    else setTimeout(() => { if (envOk === null && !SDK.available) { envOk = false; q = []; } }, 20000);
  },

  setOff(v) {
    if (v) {
      this.ev('privacy_opt_out');
      try { localStorage.setItem(OFF_KEY, '1'); } catch (_) {}
      q = [];
      try { if (bb) bb.stopTracking(); } catch (_) {}
    } else {
      try { localStorage.removeItem(OFF_KEY); } catch (_) {}
      try { if (bb) bb.restartTracking(); } catch (_) {}
      this._start();
    }
  },

  _start() {
    if (st !== 'idle' || !gpSeen || !envOk || this.off()) return;
    st = 'loading';
    const go = () => {
      try {
        const s = document.createElement('script');
        s.async = true; s.src = SRC;
        s.onload = () => {
          try {
            const B = window.ByteBrewSDK && window.ByteBrewSDK.ByteBrew;
            B.initializeByteBrew(GAME_ID, GAME_KEY, build);
            bb = B; st = 'ready';
            if (debug) console.log('[BB] ByteBrew initialized, user', B.getUserID && B.getUserID());
            const pend = q; q = [];
            for (const [n, v] of pend) this._send(n, v);
          } catch (e) { st = 'dead'; q = []; if (debug) console.warn('[BB] init failed', e); }
        };
        s.onerror = () => { st = 'dead'; q = []; if (debug) console.warn('[BB] SDK file failed to load'); };
        document.head.appendChild(s);
      } catch (_) { st = 'dead'; q = []; }
    };
    const ric = window.requestIdleCallback;
    if (ric) ric(go, { timeout: 3000 }); else setTimeout(go, 1500);
  },

  _send(name, v) {
    try { if (bb && !this.off()) bb.newCustomEvent(name, v); } catch (e) { if (debug) console.warn('[BB] send failed', e); }
  },

  // name: lowercase with underscores; params: numbers or short fixed strings only
  ev(name, params) {
    try {
      if (st === 'dead' || envOk === false || this.off()) return;
      const v = Object.assign({}, params || {}, { build, device: this.device });
      for (const k of Object.keys(v)) if (typeof v[k] === 'number') v[k] = Math.round(v[k] * 10) / 10;
      if (debug) { console.log('[BB]', name, v); this.log.push([name, v]); }
      if (st === 'ready') this._send(name, v);
      else if (q.length < QMAX) q.push([name, v]);
    } catch (_) {}
  },
  // fires at most once per player (remembered locally)
  once(name, params) {
    if (once[name]) return;
    once[name] = 1;
    try { localStorage.setItem(ONCE_KEY, JSON.stringify(once)); } catch (_) {}
    this.ev(name, params);
  },
};
