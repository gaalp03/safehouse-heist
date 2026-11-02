// Lifetime stats + achievements (saved with the rest of the progress).
export const ACH = [
  { id: 'first', icon: '💰', name: 'First Score', desc: 'Escape with the stash', check: (s, r) => r.win },
  { id: 'ghost', icon: '👻', name: 'Ghost', desc: 'Escape without ever being spotted', check: (s, r) => r.win && r.ghost },
  { id: 'speed', icon: '⚡', name: 'Speed Demon', desc: 'Escape in under 45 seconds', check: (s, r) => r.win && r.time < 45 },
  { id: 'pacifist', icon: '🕊️', name: 'Pacifist', desc: 'Escape without knocking anyone out', check: (s, r) => r.win && r.kos === 0 },
  { id: 'sweep', icon: '🧹', name: 'Clean Sweep', desc: 'Escape with 100% of the loot', check: (s, r) => r.win && r.frac >= 0.999 },
  { id: 'contracts', icon: '📋', name: 'Overachiever', desc: 'Complete all 3 contracts in one run', check: (s, r) => r.win && r.contractsDone >= 3 },
  { id: 'bank', icon: '🏦', name: 'Bank Job', desc: 'Escape from the Bank', check: (s, r) => r.win && r.level === 'bank' },
  { id: 'phantom', icon: '🎭', name: 'Phantom of the Vault', desc: 'Ghost the Bank', check: (s, r) => r.win && r.level === 'bank' && r.ghost },
  { id: 'jewelry', icon: '💎', name: 'Night Owl', desc: 'Escape from the Jewelry Store', check: (s, r) => r.win && r.level === 'jewelry' },
  { id: 'hard', icon: '💀', name: 'Hardened', desc: 'Escape on Hard', check: (s, r) => r.win && r.diff === 'hard' },
  { id: 'ko10', icon: '🥊', name: 'Lights Out', desc: 'Knock out 10 guards (total)', check: (s) => s.kos >= 10 },
  { id: 'loot50', icon: '💵', name: 'Big Spender', desc: 'Steal $50,000 in total', check: (s) => s.loot >= 50000 },
  { id: 'loot250', icon: '🤑', name: 'Fat Stacks', desc: 'Steal $250,000 in total', check: (s) => s.loot >= 250000 },
  { id: 'hide5', icon: '🚪', name: 'Wardrobe Ninja', desc: 'Hide in wardrobes 5 times', check: (s) => s.hides >= 5 },
  { id: 'smoke3', icon: '💨', name: 'Now You See Me', desc: 'Use 3 smoke bombs', check: (s) => s.smokes >= 3 },
  { id: 'streak3', icon: '🔥', name: 'Regular', desc: 'Reach a 3 day daily streak', check: (s, r, save) => !!(save.streak && save.streak.n >= 3) },
  { id: 'busted10', icon: '🚓', name: 'Frequent Flyer', desc: 'Get busted 10 times', check: (s) => s.busts >= 10 },
];

export const blankStats = () => ({ runs: 0, escapes: 0, busts: 0, loot: 0, kos: 0, hides: 0, smokes: 0, coins: 0, contracts: 0, best: {} });

// apply one finished run; returns newly unlocked achievements
export function recordRun(save, run) {
  const s = (save.stats = Object.assign(blankStats(), save.stats || {}));
  s.runs++;
  if (run.win) {
    s.escapes++; s.loot += run.loot; s.contracts += run.contractsDone;
    const b = s.best[run.level];
    if (!b || run.time < b) s.best[run.level] = run.time;
  } else s.busts++;
  s.kos += run.kos; s.hides += run.hides; s.smokes += run.smokes; s.coins += run.coins;
  const got = (save.ach = save.ach || {}), fresh = [];
  for (const a of ACH) if (!got[a.id] && a.check(s, run, save)) { got[a.id] = Date.now(); fresh.push(a); }
  return fresh;
}
