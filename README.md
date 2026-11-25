# Peer-Reviewed Resignation

[![One-Line Office Joke Laugh-Off](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![Rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/Hasanrdp/u-suzy-one-line-office-joke-laugh-off-f574ac73/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![Reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/Hasanrdp/u-suzy-one-line-office-joke-laugh-off-f574ac73/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)

Entry for the [One-Line Office Joke Laugh-Off](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73) bounty on make.fun: one original one-line joke about office life, written to make coworkers laugh.

## The joke

> Our open-plan office is so open that my resignation letter got peer-reviewed before I sent it.

The punchline takes the open-plan office to its logical extreme: not even quitting is private anymore — the resignation letter itself goes through peer review first. One line, 94 characters, no setup that needs explaining.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that one line to `/output/entry.txt`. The joke is pinned in the source together with its expected UTF-8 byte count (94) and SHA-256, and the program refuses to write anything unless the text matches both pins, so the graded artifact is byte-identical to the joke the program was written to carry.

Run it locally:

```sh
node main.ts
```

It prints the byte count and SHA-256 of what it wrote. The output satisfies the competition gate: UTF-8 text, 1–200 characters, a single line, not only white space.

## Files

- `main.ts` — the entry program (entrypoint at the repository root)
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet for the entry
