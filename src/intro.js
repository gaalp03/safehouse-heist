// "How to heist" cutscene before the guided tutorial: the camera tours the training house room by room,
// a comic caption explains the trick each room teaches. pos/look are world coords (x, y, z).
export const INTRO = [
  { pos: [13, 12.5, 25], look: [13, 0, 8], dur: 3.0, title: 'THE JOB', text: "Sneak into the landlord's house, crack his safe and get back to the van.",
    keys: [[['{move}', 'move'], ['MOUSE', 'look']], [['LEFT', 'move'], ['RIGHT', 'look']]] },
  { pos: [17.8, 5.0, 10.6], look: [12.2, 0, 10.4], title: 'YELLOW CONE = WHERE HE SEES', text: "Never step into a guard's yellow cone. Press sneak and crouch behind low furniture: he can't see you there.",
    keys: [[['{sneak}', 'sneak']], [['BOOT', 'sneak']]], act: 'sneak' },
  { pos: [22.2, 3.8, 8.0], look: [19.2, 0.4, 11.0], act: 'hide', dur: 4.1, title: 'HIDE IN WARDROBES', text: 'A patrol is coming? Jump in and the guard walks right past you.',
    keys: [[['{use}', 'hide']], [['HAND', 'hide']]] },
  { pos: [23.6, 3.0, 5.2], look: [20.4, 0.5, 4.6], title: 'HIT THEM FROM BEHIND', text: "Sneak up on a guard's back and smack him with your crowbar.",
    keys: [[['{hit}', 'hit']], [['HIT', 'hit']]], act: 'ko', dur: 4.0 },
  { pos: [22.6, 2.4, 6], look: [20.5, 0.5, 3.6], title: 'ANSWER HIS RADIO', text: 'Knocked-out guards get radio calls. Hold the button next to him and answer "All clear", or backup comes looking.',
    keys: [[['HOLD {use}', 'answer']], [['HOLD HAND', 'answer']]], act: 'stand', dur: 3.5 },
  { pos: [24.4, 7.6, 13.4], look: [20.3, 0, 6.0], title: 'WEAR HIS UNIFORM', text: 'Hold the button on a knocked-out guard to put on his uniform. While DISGUISED counts down, guards think you are one of them!',
    keys: [[['HOLD {use}', 'disguise']], [['HOLD HAND', 'disguise']]], act: 'disguise', dur: 4.5 },
  { pos: [14.6, 4.0, 8.4], look: [11.6, 0.3, 4.6], act: 'coin', title: 'LURE THEM AWAY', text: 'Throw a coin: the guard hears the clink and walks over to check. Sneak past while he looks away!',
    keys: [[['HOLD {throw}', 'aim · release to throw']], [['HOLD COIN', 'aim · release to throw']]] },
  { pos: [15.6, 3.4, 7.6], look: [12.6, 0.4, 4.4], act: 'smoke', title: 'SMOKE BOMBS', text: "Spotted? Drop a smoke bomb: guards can't see into or through the cloud. Slip away inside it!",
    keys: [[['{smoke}', 'smoke bomb']], [['CLOUD', 'smoke bomb']]] },
  { pos: [7.4, 3.6, 7.9], look: [4.6, 0.2, 5.0], act: 'safe', dur: 4.4, title: 'CRACK IT & ESCAPE', text: 'Pick the lock, crack the safe, then crawl through the vent back to the van. Dashing is fast but LOUD!',
    keys: [[['{use}', 'lock · safe · vent'], ['{dash}', 'dash']], [['HAND', 'lock · safe · vent'], ['DASH', 'dash']]] },
];
export const SHOT_T = 3.8;
