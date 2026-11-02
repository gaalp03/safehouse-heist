// Daily Jobs: 3 rotating tasks per day, progress carries across runs, cash reward each (+ bonus for all 3).
import { mulberry32 } from './util.js';
import { dayKey } from './daily.js';

export const JOBS = [
  { id: 'ko', n: 5, text: 'Knock out 5 guards', v: (r) => r.kos },
  { id: 'loot', n: 8000, text: 'Steal $8,000 of loot', v: (r) => Math.round(r.loot || 0), money: true },
  { id: 'esc', n: 3, text: 'Escape 3 heists', v: (r) => (r.win ? 1 : 0) },
  { id: 'ghost', n: 1, text: 'Escape without being spotted', v: (r) => (r.win && r.ghost ? 1 : 0) },
  { id: 'pick', n: 3, text: 'Pickpocket 3 guards', v: (r) => r.picks || 0 },
  { id: 'vent', n: 2, text: 'Crawl through 2 air vents', v: (r) => r.vents || 0 },
  { id: 'close', n: 3, text: 'Survive 3 close calls', v: (r) => r.close || 0 },
  { id: 'coin', n: 6, text: 'Throw 6 coins', v: (r) => r.coins || 0 },
  { id: 'hide', n: 3, text: 'Hide in a wardrobe 3 times', v: (r) => r.hides || 0 },
  { id: 'ctr', n: 4, text: 'Complete 4 contracts', v: (r) => r.contractsDone || 0 },
  { id: 'fast', n: 1, text: 'Escape in under 90 seconds', v: (r) => (r.win && r.time < 90 ? 1 : 0) },
  { id: 'radio', n: 2, text: 'Fake 2 radio check-ins', v: (r) => r.radio || 0 },
  { id: 'sweep', n: 1, text: 'Escape with 70% of the loot', v: (r) => (r.win && r.frac >= 0.7 ? 1 : 0) },
];
export const JOB_CASH = 1500, JOB_BONUS = 2500;

export function todaysJobs(save) {
  const key = dayKey();
  if (!save.jobs || save.jobs.key !== key) {
    const rng = mulberry32(parseInt(key, 10) * 31 + 7), pool = JOBS.slice(), ids = [];
    while (ids.length < 3) ids.push(pool.splice((rng() * pool.length) | 0, 1)[0].id);
    save.jobs = { key, ids, prog: {}, done: {}, bonus: false };
  }
  return save.jobs;
}
export const jobDef = (id) => JOBS.find((j) => j.id === id);

// apply a finished run; returns list of { job, cash } newly completed (+ bonus flag)
export function recordJobs(save, run) {
  const J = todaysJobs(save), fresh = [];
  for (const id of J.ids) {
    if (J.done[id]) continue;
    const d = jobDef(id);
    J.prog[id] = Math.min(d.n, (J.prog[id] || 0) + (d.v(run) || 0));
    if (J.prog[id] >= d.n) { J.done[id] = true; fresh.push(d); save.cash = (save.cash || 0) + JOB_CASH; }
  }
  let bonus = false;
  if (!J.bonus && J.ids.every((id) => J.done[id])) { J.bonus = bonus = true; save.cash = (save.cash || 0) + JOB_BONUS; }
  return { fresh, bonus };
}
