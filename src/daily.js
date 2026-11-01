// Daily challenge: one seeded run per calendar day (local time) with a mutator + fixed contracts.
import { mulberry32 } from './util.js';

const pad = (n) => String(n).padStart(2, '0');
export const dayKey = (d = new Date()) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
export const prevDayKey = () => { const d = new Date(); d.setDate(d.getDate() - 1); return dayKey(d); };
export const dayLabel = (d = new Date()) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export const MUTATORS = [
  { id: 'paranoid', name: 'Paranoid Guards', desc: 'Guards see 30% further', apply: (g) => g.guards.forEach((x) => { x.range *= 1.3; }) },
  { id: 'insomniac', name: 'Insomniac Owner', desc: 'The owner is awake and patrolling',
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
  { id: 'hound', name: 'Hungry Hound', desc: 'The dog is 50% faster', apply: (g) => g.dogs.forEach((d) => { d.mul = 1.5; }) },
];

export function todaysDaily() {
  const key = dayKey();
  const rng = mulberry32(parseInt(key, 10) * 7919);
  const mutator = MUTATORS[(rng() * MUTATORS.length) | 0];
  return { key, label: dayLabel(), mutator, seed: (rng() * 1e9) | 0 };
}
