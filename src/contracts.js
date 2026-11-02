// Bonus contracts: 3 random side objectives per run for replay value.
// check(g, end) -> 'ok' | 'fail' | 'pending'. Live ones complete mid-run; others settle on escape.
const P = (cond) => (cond ? 'ok' : 'pending');
export const CONTRACTS = [
  { id: 'art', text: 'Steal the painting', bonus: 600, needs: (g) => g.totals.art > 0, check: (g) => P(g.got.art > 0) },
  { id: 'jewels', text: 'Grab every jewel', bonus: 700, needs: (g) => g.totals.jewel > 0, check: (g) => P(g.got.jewel >= g.totals.jewel) },
  { id: 'gold', text: 'Grab every gold bar', bonus: 500, needs: (g) => g.totals.gold > 0, check: (g) => P(g.got.gold >= g.totals.gold) },
  { id: 'cash', text: 'Pocket all loose cash', bonus: 500, check: (g) => P(g.got.cashLoose >= g.totals.cash) },
  { id: 'hide', text: 'Hide from an alerted guard', bonus: 500, needs: (g) => g.hides.length > 0, check: (g) => P(g.hidFromAlert) },
  { id: 'nodog', text: "Don't get barked at", bonus: 600, needs: (g) => g.dogs.length > 0, check: (g, end) => (g.barkedAt ? 'fail' : end ? 'ok' : 'pending') },
  { id: 'nolaser', text: 'Never trip a laser', bonus: 600, needs: (g) => g.lasers.length > 0, check: (g, end) => (g.lasersTripped > 0 ? 'fail' : end ? 'ok' : 'pending') },
  { id: 'power', text: 'Cut the power', bonus: 500, needs: (g) => !!g.breaker, check: (g) => P(g.powerOff) },
  { id: 'clerk', text: 'Stop a fleeing clerk', bonus: 500, needs: (g) => g.buttons.length > 0, check: (g) => P(g.clerkStopped) },
  { id: 'smoke', text: "Break a guard's sight with smoke", bonus: 500, check: (g) => P(g.smokeHid) },
  { id: 'cleanpick', text: 'Pick a lock without a slip', bonus: 500, needs: (g) => g.doors.some((d) => d.type === 'lock'), check: (g) => P(g.cleanPick) },
  { id: 'cases', text: 'Smash every display case', bonus: 900, needs: (g) => g.cases.length > 0, check: (g) => P(g.casesSmashed >= g.cases.length) },
  { id: 'radio', text: 'Fake a radio check-in', bonus: 500, check: (g) => P(g.radioFaked > 0) },
  { id: 'lure', text: 'Lure a guard with a coin', bonus: 400, check: (g) => P(g.lures > 0) },
  { id: 'ko2', text: 'Knock out 2 guards', bonus: 500, tag: 'ko', check: (g) => P(g.kos >= 2) },
  { id: 'noko', text: 'No knockouts', bonus: 700, tag: 'ko', check: (g, end) => (g.kos > 0 ? 'fail' : end ? 'ok' : 'pending') },
  { id: 'noalarm', text: 'Never trigger the alarm', bonus: 600, check: (g, end) => (g.alarms > 0 ? 'fail' : end ? 'ok' : 'pending') },
  { id: 'owner', text: "Don't wake the owner", bonus: 500, needs: (g) => g.guards.some((x) => x.kind === 'owner'), check: (g, end) => (g.ownerWoke ? 'fail' : end ? 'ok' : 'pending') },
  { id: 'fast', text: 'Escape in under 60s', bonus: 800, check: (g, end) => (g.time >= 60 ? 'fail' : end ? 'ok' : 'pending') },
  { id: 'nodash', text: 'Never dash', bonus: 500, check: (g, end) => (g.dashes > 0 ? 'fail' : end ? 'ok' : 'pending') },
];

export function pickContracts(n = 3, rnd = Math.random, g = null) {
  const pool = CONTRACTS.filter((c) => !g || !c.needs || c.needs(g)), out = [];
  while (out.length < n && pool.length) {
    const c = pool.splice((rnd() * pool.length) | 0, 1)[0];
    if (c.tag && out.some((o) => o.tag === c.tag)) continue;
    out.push({ ...c, st: 'pending' });
  }
  return out;
}
