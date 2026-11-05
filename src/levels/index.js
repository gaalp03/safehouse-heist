// Level registry. Each level module is lazy-loaded (its own JS chunk) only when needed.
export const LEVELS = [
  { id: 'safehouse', num: 1, name: 'Safe House', load: () => import('./level1.js') },
  { id: 'bank', num: 2, name: 'The Bank', unlock: 'safehouse', load: () => import('./level2-bank.js') },
  { id: 'jewelry', num: 3, name: 'Jewelry Store', unlock: 'bank', load: () => import('./level3-jewelry.js') },
  { id: 'museum', num: 4, dog: true, name: 'The Museum', unlock: 'jewelry', load: () => import('./level4-museum.js') },
  { id: 'casino', num: 5, name: 'The Casino', unlock: 'museum', load: () => import('./level5-casino.js') },
  { id: 'penthouse', num: 6, owner: true, name: 'The Penthouse', unlock: 'casino', load: () => import('./level6-penthouse.js') },
  { id: 'train', num: 7, name: 'Night Train', unlock: 'penthouse', load: () => import('./level7-train.js') },
  { id: 'warehouse', num: 8, dog: true, name: 'The Warehouse', unlock: 'train', load: () => import('./level8-warehouse.js') },
  { id: 'mansion', num: 9, name: 'Mansion Gala', unlock: 'warehouse', load: () => import('./level9-mansion.js') },
  { id: 'diamond', num: 10, dog: true, name: 'Diamond Exchange', unlock: 'mansion', load: () => import('./level10-diamond.js') },
  { id: 'depot', num: 11, dog: true, name: 'The Depot', unlock: 'diamond', load: () => import('./level11-depot.js') },
];

const cache = {};
export async function loadLevel(i) {
  if (!cache[i]) cache[i] = (await LEVELS[i].load()).default;
  return cache[i];
}
