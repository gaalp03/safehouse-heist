// Difficulty presets: tune perception, speed, tools and the alarm, plus a score multiplier.
// range/fov/speed: guards; susp: suspicion build-up, decay: how fast it fades; cam*: security cameras;
// pickW/pickSpd: lockpick green-zone width / needle speed; noise: how far your noise carries; ko: knockout seconds
export const DIFFS = {
  easy: { label: 'Easy', range: 0.72, fov: 0.85, speed: 0.8, susp: 0.5, decay: 1.8, camR: 0.8, camSweep: 0.7, camRate: 0.55, pickW: 1.4, pickSpd: 0.8, noise: 0.7, ko: 13,
    coins: 5, smoke: 2, alarm: 70, radio: 4.2, mult: 0.75, safeAlarm: false },
  normal: { label: 'Normal', range: 1, fov: 1, speed: 1, susp: 1, decay: 1, camR: 1, camSweep: 1, camRate: 1, pickW: 1, pickSpd: 1, noise: 1, ko: 9,
    coins: 3, smoke: 1, alarm: 45, radio: 2.6, mult: 1, safeAlarm: true },
  hard: { label: 'Hard', range: 1.25, fov: 1.15, speed: 1.2, susp: 1.65, decay: 0.55, camR: 1.2, camSweep: 1.4, camRate: 1.6, pickW: 0.72, pickSpd: 1.3, noise: 1.35, ko: 6,
    coins: 2, smoke: 1, alarm: 30, radio: 1.6, mult: 1.5, safeAlarm: true },
  ironman: { label: 'Ironman', range: 1.3, fov: 1.2, speed: 1.25, susp: 1.8, decay: 0.5, camR: 1.25, camSweep: 1.5, camRate: 1.8, pickW: 0.65, pickSpd: 1.35, noise: 1.4, ko: 5,
    coins: 1, smoke: 0, alarm: 15, radio: 1.2, mult: 2.5, safeAlarm: true },
};
export const diffKey = (levelId, d) => (d === 'normal' ? levelId : levelId + '_' + d);
