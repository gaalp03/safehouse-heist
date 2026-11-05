// Daily challenge: one seeded run per calendar day (local time) with a mutator + fixed contracts.
import { mulberry32 } from './util.js';

const pad = (n) => String(n).padStart(2, '0');
export const dayKey = (d = new Date()) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
export const prevDayKey = () => { const d = new Date(); d.setDate(d.getDate() - 1); return dayKey(d); };
export const dayLabel = (d = new Date()) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export const MUTATORS = [
  { id: 'paranoid', name: 'Paranoid Guards', desc: 'Guards see 30% further', apply: (g) => g.guards.forEach((x) => { x.range *= 1.3; }) },
  { id: 'insomniac', needs: 'owner', name: 'Insomniac Owner', desc: 'The owner is awake and patrolling',
    apply: (g) => g.guards.forEach((x) => {
      if (x.state !== 'sleep') return;
      const p = x.def.path[0];
      x.state = 'patrol'; x.x = p[0] + 0.5; x.z = p[1] + 0.5; x.wp = 1;
      x.c.root.rotation.x = 0; x.c.root.position.y = 0;
    }) },
  { id: 'goldrush', name: 'Gold Rush', desc: 'Gold and jewels are worth 3x',
    apply: (g) => { for (const it of g.loot) if (it.type === 'gold' || it.type === 'jewel') { g.lootTotal += it.value * 2; it.value *= 3; } } },
  { id: 'butter', name: 'Butterfingers', desc: 'No coins this time', apply: (g) => { g.coinsLeft = 0; } },
  { id: 'rush', name: 'Rapid Response', desc: 'Police arrive in 20s', apply: (g) => { g.alarmTotal = 20; } },
  { id: 'hound', needs: 'dog', name: 'Hungry Hound', desc: 'The dog is 50% faster', apply: (g) => g.dogs.forEach((d) => { d.mul = 1.5; }) },
  { id: 'smokeshow', name: 'Smoke Show', desc: '+3 smoke bombs, guards see 15% further', apply: (g) => { g.smokesLeft += 3; g.guards.forEach((x) => { x.range *= 1.15; }); } },
  { id: 'insidejob', name: 'Inside Job', desc: 'You start in a guard uniform (30s)', apply: (g) => { g.disguiseT = 30; } },
  { id: 'sleepy', name: 'Sleepy Shift', desc: 'Guards are 20% slower, police come in 25s', apply: (g) => { g.guards.forEach((x) => { x.speed *= 0.8; }); g.alarmTotal = 25; } },
  { id: 'bounty', name: 'Big Bounty', desc: 'All loot worth 2x, guards are 15% faster', apply: (g) => { for (const it of g.loot) { g.lootTotal += it.value; it.value *= 2; } g.guards.forEach((x) => { x.speed *= 1.15; }); } },
];

// levels: the heists this player has unlocked, as { idx, owner, dog } (the daily rotates through them)
export function todaysDaily(levels = [{ idx: 0, owner: true, dog: true }]) {
  const key = dayKey();
  const rng = mulberry32(parseInt(key, 10) * 7919);
  const lv = levels[(rng() * levels.length) | 0] || levels[0];
  const fit = MUTATORS.filter((m) => !m.needs || lv[m.needs]);
  const mutator = fit[(rng() * fit.length) | 0];
  return { key, label: dayLabel(), mutator, level: lv.idx, seed: (rng() * 1e9) | 0 };
}

// time until the next daily (local midnight), e.g. "5h 12m"
export function nextDailyIn() {
  const n = new Date(), m = new Date(n); m.setHours(24, 0, 0, 0);
  const s = Math.max(0, (m - n) / 1000), h = Math.floor(s / 3600), mi = Math.floor((s % 3600) / 60);
  return h ? `${h}h ${mi}m` : `${mi}m`;
}

// weekly "hot target": week number since epoch (Mondays, local time) + time until it rotates
export function weekInfo() {
  const n = new Date(), d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  const dow = (d.getDay() + 6) % 7, mon = new Date(d); mon.setDate(d.getDate() - dow);
  const week = Math.round(mon.getTime() / 864e5 / 7), next = new Date(mon); next.setDate(mon.getDate() + 7);
  const left = Math.max(0, next - n), days = Math.floor(left / 864e5), hrs = Math.floor((left % 864e5) / 36e5);
  return { week, left: days ? `${days}d ${hrs}h` : `${hrs}h` };
}
