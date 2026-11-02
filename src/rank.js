// Heist rank: every run earns XP (even a bust), filling a bar towards the next rank.
export const RANKS = [
  ['Rookie', 0], ['Pickpocket', 40], ['Burglar', 120], ['Safecracker', 250], ['Cat Burglar', 450], ['Infiltrator', 750],
  ['Phantom', 1150], ['Heist Pro', 1700], ['Vault Breaker', 2400], ['Mastermind', 3300], ['Kingpin', 4500], ['Legend', 6000],
];
export function rankOf(xp) {
  let i = 0;
  while (i + 1 < RANKS.length && xp >= RANKS[i + 1][1]) i++;
  const lo = RANKS[i][1], hi = i + 1 < RANKS.length ? RANKS[i + 1][1] : lo;
  return { i, name: RANKS[i][0], lvl: i + 1, frac: hi > lo ? (xp - lo) / (hi - lo) : 1, next: i + 1 < RANKS.length ? RANKS[i + 1][0] : null, toNext: hi - xp };
}
export const xpForRun = (win, score, loot) => (win ? Math.max(10, Math.round(score / 100)) : 4 + Math.round((loot || 0) / 250));
