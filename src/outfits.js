// Unlockable robber outfits: colour-only (same proportions). need: trophy count or a specific achievement id.
import { shade } from './util.js';
export const OUTFITS = [
  { id: 'classic', name: 'Classic', sleeve: 0x2fa89a, glove: 0x2a2c3d, bar: 0xd8333a, band: 0xf2b134 },
  { id: 'midnight', name: 'Midnight', sleeve: 0x2f3a62, glove: 0x16171f, bar: 0x8a94a4, band: 0x5fb4ff, need: 1 },
  { id: 'hazard', name: 'Hazard', sleeve: 0xff8a2a, glove: 0x2a2c3d, bar: 0xf2c94c, band: 0x22242f, need: 3 },
  { id: 'camo', name: 'Woodland', sleeve: 0x5a7a3a, glove: 0x5a3a26, bar: 0x4a5a2a, band: 0xc9a063, ach: 'ghost' },
  { id: 'bubblegum', name: 'Bubblegum', sleeve: 0xff8fc0, glove: 0xf4f1ea, bar: 0xff4fa0, band: 0xffffff, ach: 'pacifist' },
  { id: 'tux', name: 'Black Tie', sleeve: 0x22242f, glove: 0xf4f1ea, bar: 0xb33951, band: 0xffffff, ach: 'bank' },
  { id: 'neon', name: 'Neon Laser', sleeve: 0x1a1430, glove: 0x0c0a16, bar: 0xff2a5a, band: 0x3affd0, ach: 'laser' },
  { id: 'gala', name: 'Gala Night', sleeve: 0xf4f1ea, glove: 0x17161d, bar: 0xd9b45a, band: 0xb33951, ach: 'mansion' },
  { id: 'chain', name: 'Gold Chain', sleeve: 0x2a2c3d, glove: 0xe8b33a, bar: 0xffd75a, band: 0xe8b33a, ach: 'loyal' },
  { id: 'dock', name: 'Dockhand', sleeve: 0xc9562a, glove: 0x3a3f4a, bar: 0x5a6a7a, band: 0xf2c94c, ach: 'warehouse' },
  { id: 'ice', name: 'Ice Cold', sleeve: 0x1c2a4a, glove: 0xeaf6ff, bar: 0xbfe8ff, band: 0x3affff, ach: 'diamond' },
  { id: 'armored', name: 'Armored', sleeve: 0x3a4a3a, glove: 0x22242f, bar: 0xf2c94c, band: 0xff8a2a, ach: 'depot' },
  { id: 'auction', name: 'Art Dealer', sleeve: 0x6a1f2e, glove: 0xf4f1ea, bar: 0xd9b45a, band: 0xf4f1ea, ach: 'auction' },
  { id: 'lucky', name: 'Lucky Cat', sleeve: 0xffc23a, glove: 0xf4f1ea, bar: 0xe8303e, band: 0xe8303e, ach: 'cats' },
  { id: 'royal', name: 'Royal', sleeve: 0x6a4ad8, glove: 0xd9b45a, bar: 0xe8b33a, band: 0xd9b45a, need: 6 },
  { id: 'golden', name: 'Golden Boy', sleeve: 0xe8b33a, glove: 0xf2d48a, bar: 0xffd75a, band: 0xffffff, need: 10 },
  // come-back rewards: unlocked by playing on 2 / 4 different days
  { id: 'l_owl', name: 'Night Owl', sleeve: 0x3a2f6a, glove: 0x1a1630, bar: 0xb48cff, band: 0xffd75a, days: 2 },
  { id: 'l_fox', name: 'Silver Fox', sleeve: 0x9aa3b2, glove: 0x2a2c3d, bar: 0xff8a2a, band: 0xf4f1ea, days: 4 },
  // Golden Heist exclusives: one per calendar day (rotating), earned only by finishing that day's Golden Heist
  { id: 'g_crew', name: 'Golden Crew', sleeve: 0xd9a52a, glove: 0x2a2c3d, bar: 0xffe07a, band: 0x2a2c3d, gold: true },
  { id: 'g_mask', name: 'Gilded Mask', sleeve: 0x1e1a2a, glove: 0xe8b33a, bar: 0xffd75a, band: 0xe8b33a, gold: true },
  { id: 'g_rose', name: 'Rose Gold', sleeve: 0xe8a09a, glove: 0xf6d2b8, bar: 0xffc9a8, band: 0xb76e79, gold: true },
  { id: 'g_leaf', name: 'Gold Leaf', sleeve: 0x2f5a3a, glove: 0xe8b33a, bar: 0xffd75a, band: 0xf2e6c0, gold: true },
  { id: 'g_champ', name: 'Champagne', sleeve: 0xf2e2b8, glove: 0xb08a4a, bar: 0xffe9b0, band: 0x8a5a2a, gold: true },
  { id: 'g_sun', name: 'Sunburst', sleeve: 0xff9a2a, glove: 0xffd75a, bar: 0xfff1a8, band: 0xe8303e, gold: true },
  { id: 'g_rush', name: 'Gold Rush', sleeve: 0x5a3a26, glove: 0xffd75a, bar: 0xe8b33a, band: 0xfff1a8, gold: true },
];
// today's Golden Heist reward, seeded by the local calendar date
export function goldenOfDay(d = new Date()) {
  const G = OUTFITS.filter((o) => o.gold), day = Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 864e5 + 0.5);
  return G[((day * 5 + 3) % G.length + G.length) % G.length];
}
export const colorsOf = (o) => ({
  sleeve: o.sleeve, sleeve2: shade(o.sleeve, 0.85), cuff: shade(o.sleeve, 0.66), glove: o.glove, glove2: shade(o.glove, 1.35) || 0x3a3d52,
  bar: o.bar, barHi: shade(o.bar, 1.35), band: o.band,
});
export function unlocked(o, save) {
  if (o.gold) return !!(save.goldOut || {})[o.id];
  if (o.days) return (save.dayN || 0) >= o.days;
  const ach = save.ach || {}, n = Object.keys(ach).length;
  if (o.ach) return !!ach[o.ach];
  return !o.need || n >= o.need;
}
export const needText = (o, ACH) => (o.days ? `Play on ${o.days} different days` : o.gold ? 'Golden Heist exclusive (only on its day)' : o.ach ? `Achievement: ${(ACH.find((a) => a.id === o.ach) || {}).name}` : `${o.need} ${o.need === 1 ? "trophy" : "trophies"}`);
