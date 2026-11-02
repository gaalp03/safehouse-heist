// Level registry. Each level module is lazy-loaded (its own JS chunk) only when needed.
export const LEVELS = [
  { id: 'safehouse', num: 1, name: 'Safe House', load: () => import('./level1.js') },
  { id: 'bank', num: 2, name: 'The Bank', unlock: 'safehouse', load: () => import('./level2-bank.js') },
  { id: 'jewelry', num: 3, name: 'Jewelry Store', unlock: 'bank', load: () => import('./level3-jewelry.js') },
  { id: 'museum', num: 4, name: 'The Museum', unlock: 'jewelry', load: () => import('./level4-museum.js') },
  { id: 'casino', num: 5, name: 'The Casino', unlock: 'museum', load: () => import('./level5-casino.js') },
  { id: 'penthouse', num: 6, name: 'The Penthouse', unlock: 'casino', load: () => import('./level6-penthouse.js') },
];

const cache = {};
export async function loadLevel(i) {
  if (!cache[i]) cache[i] = (await LEVELS[i].load()).default;
  return cache[i];
}
