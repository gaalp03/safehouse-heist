// "How to heist" cutscene before the guided tutorial: the camera tours the training house room by room,
// a comic caption explains the trick each room teaches. pos/look are world coords (x, y, z).
export const INTRO = [
  { pos: [13, 12.5, 25], look: [13, 0, 8], title: 'THE JOB', text: "Sneak into the landlord's house, crack his safe and get back to the van.",
    keys: [[['WASD', 'move'], ['MOUSE', 'look']], [['LEFT', 'move'], ['RIGHT', 'look']]] },
  { pos: [17.8, 5.0, 10.6], look: [12.2, 0, 10.4], title: 'YELLOW CONE = WHERE HE SEES', text: "Never step into a guard's yellow cone. Press sneak and crouch behind low furniture: he can't see you there.",
    keys: [[['Z', 'sneak']], [['BOOT', 'sneak']]], act: 'sneak' },
  { pos: [19.5, 4.2, 15.5], look: [19.5, 0.2, 10.5], title: 'HIDE IN WARDROBES', text: 'A patrol is coming? Jump in and the guard walks right past you.',
    keys: [[['E', 'hide']], [['HAND', 'hide']]] },
  { pos: [23.6, 3.0, 5.2], look: [20.4, 0.5, 4.6], title: 'HIT THEM FROM BEHIND', text: "Sneak up on a guard's back and smack him with your crowbar.",
    keys: [[['CLICK', 'hit']], [['HIT', 'hit']]], act: 'ko' },
  { pos: [22.6, 2.4, 6], look: [20.5, 0.5, 3.6], title: 'RADIO & DISGUISE', text: 'Knocked-out guards get radio calls: answer them! Then wear the uniform and nobody spots you from afar.',
    keys: [[['HOLD E', 'answer · wear']], [['HOLD HAND', 'answer · wear']]], act: 'stand' },
  { pos: [15.2, 3.6, 7.6], look: [10.5, 0.5, 4.5], title: 'LURE THEM AWAY', text: 'Throw a coin to make a guard look somewhere else. Smoke bombs block their view.',
    keys: [[['Q', 'coin'], ['C', 'smoke']], [['COIN', 'coin'], ['CLOUD', 'smoke']]] },
  { pos: [7, 3.6, 8.2], look: [4.5, 0.5, 3.5], title: 'CRACK IT & ESCAPE', text: 'Pick the lock, crack the safe, then crawl through the vent back to the van. Dashing is fast but LOUD!',
    keys: [[['E', 'lock · safe · vent'], ['SPACE', 'dash']], [['HAND', 'lock · safe · vent'], ['DASH', 'dash']]] },
];
export const SHOT_T = 4.6;
