# Level 2: The Bank (plan)

Status: **planned**. The code stub lives in `src/levels/level2-bank.js` (`comingSoon: true`), is lazy-loaded through `src/levels/index.js`, and the menu shows a "Coming soon" screen for it.

## Fantasy

A bright downtown bank at closing time. Bigger, louder, more layered than the Safe House, still a 2-4 minute run.

## Loop

1. Arrive by van at the side alley.
2. Get through the lobby (tellers, a patrolling guard, a desk clerk who raises the alarm instead of chasing).
3. Find a **keycard** in the manager's office (or knock out the guard who carries one).
4. Open the **security door** to the vault corridor. **Laser grids** pulse on a timer; a breaker in the security room turns them off.
5. Place the **drill** on the vault (60 s timer). The drill is loud: guards investigate in waves. Defend by knocking them out or kiting them around.
6. Vault opens: cash carts, gold, a deposit-box wall (hold-to-open boxes, random loot).
7. Escape with heavy loot to the van (alarm timer: police arrive in 45 s after the vault opens).

## New mechanics (all data-driven, same ASCII map format)

| Mechanic | Map / data | Notes |
|---|---|---|
| Keycard | `K` pickup, `guards[i].carries: 'key'` | shown in HUD; required by `D` doors |
| Security door | `D` tile, opens with keycard | walkable + transparent once open |
| Laser grid | `lasers: [{cells, on, off}]` | entering while on = instant alert |
| Breaker | `B` tile (hold action) | disables lasers in a region |
| Drill | `vault: {pos, time}` | hold to place, timer + periodic noise events |
| Clerk | `guards[i].type: 'clerk'` | doesn't chase; runs to an alarm button |
| Heavy loot | `values.heavy` | slows the player more, gold bars on a cart |
| Alarm timer | `alarmTime` | HUD countdown; police cars block the street when it hits 0 |

## Stars

1. Escape with the vault loot.
2. Loot 70%+.
3. Ghost, or alternate: "no alarm triggered" (clerk never reached the button).

## Tech notes

- Reuses `parseLevel`, `buildWorld`, guard AI and pathfinding unchanged; new tile chars added to `FURN` / new props.
- Two floors are faked as two separate areas connected by a stairwell tile that teleports with a quick camera fade (keeps grid logic 2D).
- Keep the merged static mesh approach: target < 70 draw calls, < 40k triangles.
- New props: teller counters, ATM row, plants, vault door (big round door that swings open), cash carts, laser emitters (thin emissive boxes).
- Music: same synth, higher tempo during the drill, adding a pad layer.
