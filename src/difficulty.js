// Difficulty presets: tune perception, speed, tools and the alarm, plus a score multiplier.
export const DIFFS = {
  easy: { label: 'Easy', range: 0.82, speed: 0.85, susp: 0.7, coins: 4, smoke: 2, alarm: 60, radio: 3.6, mult: 0.75, safeAlarm: false },
  normal: { label: 'Normal', range: 1, speed: 1, susp: 1, coins: 3, smoke: 1, alarm: 45, radio: 2.6, mult: 1, safeAlarm: true },
  hard: { label: 'Hard', range: 1.18, speed: 1.15, susp: 1.4, coins: 2, smoke: 1, alarm: 30, radio: 1.8, mult: 1.5, safeAlarm: true },
};
export const diffKey = (levelId, d) => (d === 'normal' ? levelId : levelId + '_' + d);
