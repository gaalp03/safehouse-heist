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
  { id: 'radio3', icon: '📻', name: 'Smooth Talker', desc: 'Fake 3 radio check-ins (total)', check: (s) => (s.radio || 0) >= 3 },
  { id: 'museum', icon: '🏛️', name: 'Night at the Museum', desc: 'Escape from the Museum', check: (s, r) => r.win && r.level === 'museum' },
  { id: 'penthouse', icon: '🌃', name: 'Sky High', desc: 'Escape from the Penthouse', check: (s, r) => r.win && r.level === 'penthouse' },
  { id: 'laser', icon: '🔴', name: 'Laser Dancer', desc: 'Escape the Penthouse with the power on and no lasers tripped', check: (s, r) => r.win && r.level === 'penthouse' && !r.power && r.lasers === 0 },
  { id: 'vent5', icon: '🕳️', name: 'Duct Rat', desc: 'Crawl through 5 air vents (total)', check: (s) => (s.vents || 0) >= 5 },
  { id: 'inside', icon: '🕴', name: 'Inside Man', desc: 'Escape while wearing a guard uniform', check: (s, r) => r.win && r.disguised },
  { id: 'train', icon: '🚂', name: 'Great Train Robbery', desc: 'Escape from the Night Train', check: (s, r) => r.win && r.level === 'train' },
  { id: 'warehouse', icon: '📦', name: 'Dock Rat', desc: 'Escape from the Warehouse', check: (s, r) => r.win && r.level === 'warehouse' },
  { id: 'close10', icon: '😅', name: 'Nerves of Steel', desc: 'Survive 10 close calls (total)', check: (s) => (s.close || 0) >= 10 },
  { id: 'triple', icon: '💥', name: 'Combo Breaker', desc: 'Pull off a triple takedown', check: (s, r) => (r.streak || 0) >= 3 },
  { id: 'kitted', icon: '🧰', name: 'Fully Kitted', desc: 'Buy 5 gear upgrades', check: (s, r, save) => Object.values(save.gear || {}).reduce((a, b) => a + b, 0) >= 5 },
  { id: 'loyal', icon: '📅', name: 'Loyal Crew', desc: 'Log in 7 days in a row', check: (s, r, save) => !!(save.login && save.login.n >= 7) },
  { id: 'photo', icon: '🚨', name: 'Photo Finish', desc: 'Escape with under 10 s left on the police timer', check: (s, r) => r.win && r.photo },
  { id: 'casino', icon: '🎰', name: 'High Roller', desc: 'Escape from the Casino', check: (s, r) => r.win && r.level === 'casino' },
  { id: 'pick10', icon: '👛', name: 'Sticky Fingers', desc: 'Pickpocket 10 guards (total)', check: (s) => (s.picks || 0) >= 10 },
  { id: 'iron', icon: '🛡️', name: 'Iron Will', desc: 'Escape on Ironman', check: (s, r) => r.win && r.diff === 'ironman' },
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
  s.radio = (s.radio || 0) + (run.radio || 0);
  s.picks = (s.picks || 0) + (run.picks || 0);
  s.vents = (s.vents || 0) + (run.vents || 0);
  s.close = (s.close || 0) + (run.close || 0);
  s.kos += run.kos; s.hides += run.hides; s.smokes += run.smokes; s.coins += run.coins;
  const got = (save.ach = save.ach || {}), fresh = [];
  for (const a of ACH) if (!got[a.id] && a.check(s, run, save)) { got[a.id] = Date.now(); fresh.push(a); }
  return fresh;
}
