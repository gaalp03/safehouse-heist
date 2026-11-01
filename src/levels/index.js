// Level registry. Each level module is lazy-loaded (its own JS chunk) only when needed.
export const LEVELS = [
  { id: 'safehouse', num: 1, name: 'Safe House', load: () => import('./level1.js') },
  { id: 'bank', num: 2, name: 'The Bank', unlock: 'safehouse', load: () => import('./level2-bank.js') },
];

const cache = {};
export async function loadLevel(i) {
  if (!cache[i]) cache[i] = (await LEVELS[i].load()).default;
  return cache[i];
}
