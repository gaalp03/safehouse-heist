// Gear upgrades bought with stashed cash in the Locker. Not used on Daily, Ironman or the tutorial (fair runs).
export const GEAR = [
  { id: 'coins', icon: '🪙', name: 'Coin Pouch', desc: '+1 coin per run', prices: [3000, 8000, 20000] },
  { id: 'smoke', icon: '💨', name: 'Smoke Belt', desc: '+1 smoke bomb per run', prices: [6000, 18000] },
  { id: 'shoes', icon: '👟', name: 'Soft Shoes', desc: 'Sneak 15% faster', prices: [4000, 10000, 25000] },
  { id: 'pick', icon: '🔓', name: 'Lockpick Kit', desc: 'Wider pick zone, crack safes 12% faster', prices: [3500, 9000, 22000] },
  { id: 'tailor', icon: '🕴', name: 'Tailor', desc: '+8 s in a guard uniform', prices: [5000, 15000] },
];
export const gearLv = (save, id) => Math.min((save.gear || {})[id] || 0, GEAR.find((g) => g.id === id).prices.length);
export const nextPrice = (save, g) => g.prices[gearLv(save, g.id)] ?? null;
export function gearMods(save, on) {
  const L = (id) => (on ? gearLv(save, id) : 0);
  return { coins: L('coins'), smoke: L('smoke'), sneak: 1 + 0.15 * L('shoes'), pickW: 1 + 0.15 * L('pick'), crack: 1 + 0.12 * L('pick'), disguise: 8 * L('tailor') };
}
