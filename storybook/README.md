# Music App Android Storybook

Documentation Storybook (React) for the Music App Android design system. Names, variants, properties and tokens match the Figma DS file exactly; it is documentation, not production code.

## Run

From the workflow Root:

```
npm --prefix "My Projects/Music_App_Android/storybook" install
npm --prefix "My Projects/Music_App_Android/storybook" run storybook
```

Opens http://localhost:6009. Type check: `npx tsc --noEmit` in this folder.

## Style check

1. `node tools/storybook_snap.cjs "My Projects/Music_App_Android" --url http://localhost:6009` (writes `data/storybook-styles.json`; `--components "Button,Icon Button"` measures only some, but then the file holds only those).
2. `python tools/style_parity.py "My Projects/Music_App_Android"` (set `PYTHONIOENCODING=utf-8` on Windows) prints the fidelity and every difference.

The `Icon/*` components have no stories (they are shown on Foundations > Icons) and stay unmeasured.

## Style check

0 differences (5280/5280 properties, 2026-10-22). Figma inside strokes are drawn as an inset ring (`box-shadow: inset 0 0 0 Npx`), so the CSS padding is Figma's padding (Button: 0 24, focused stroke 3 with the first / last child taking 3 each for the 97 width). The style check reads that ring as the stroke (`tools/storybook_snap.cjs`, Live Prototype trial branch). Until that tool change is on master, run the snap from that branch, or the Button strokes read as missing.

Instance-override props (lower case, not Figma properties) that screens use: Track Metadata `titleStyle`, `subtitleStyle`, `titleLines`; Podcast Episode Card `titleLines`, `hideActiveTrack`; Progress Indicator `hideActive`; Top App Bar `image` (Profile Avatar photo).
