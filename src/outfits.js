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
  { id: 'lucky', name: 'Lucky Cat', sleeve: 0xffc23a, glove: 0xf4f1ea, bar: 0xe8303e, band: 0xe8303e, ach: 'cats' },
  { id: 'royal', name: 'Royal', sleeve: 0x6a4ad8, glove: 0xd9b45a, bar: 0xe8b33a, band: 0xd9b45a, need: 6 },
  { id: 'golden', name: 'Golden Boy', sleeve: 0xe8b33a, glove: 0xf2d48a, bar: 0xffd75a, band: 0xffffff, need: 10 },
];
export const colorsOf = (o) => ({
  sleeve: o.sleeve, sleeve2: shade(o.sleeve, 0.85), cuff: shade(o.sleeve, 0.66), glove: o.glove, glove2: shade(o.glove, 1.35) || 0x3a3d52,
  bar: o.bar, barHi: shade(o.bar, 1.35), band: o.band,
});
export function unlocked(o, save) {
  const ach = save.ach || {}, n = Object.keys(ach).length;
  if (o.ach) return !!ach[o.ach];
  return !o.need || n >= o.need;
}
export const needText = (o, ACH) => (o.ach ? `Achievement: ${(ACH.find((a) => a.id === o.ach) || {}).name}` : `${o.need} ${o.need === 1 ? "trophy" : "trophies"}`);
