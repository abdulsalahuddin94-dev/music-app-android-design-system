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

## Style check exceptions

Differences that cannot be matched in CSS. Each one renders the same as Figma; only the measurement model differs.

| Component | Variants | Property | Figma | Storybook | Reason |
|---|---|---|---|---|---|
| Button | Style=Outlined and Style=Outlined Accent, State=Enabled / Hovered / Pressed / Disabled (Light, Dark) | paddingTop, paddingBottom | 0 | 1 | Figma has vertical padding 0 with a 1px inside stroke on a fixed 48 height, so the stroke overlaps the padding. The check measures CSS padding + border width, and CSS padding cannot be negative, so a 1px border always reads as at least 1. The label is centred in the fixed 48 height either way, so the render is identical. |
| Button | every Style, State=Focused (Light, Dark) | paddingTop, paddingBottom | 0 | 3 | Same cause with the 3px focus stroke (stroke included in the layout, vertical padding 0, fixed height 48). Horizontal padding and the 97 width match: CSS padding 21 + border 3, and the first / last child take the other 3. |

56 measured differences in total (14 variants x 2 modes x 2 properties). They would disappear if `tools/storybook_snap.cjs` or `tools/style_parity.py` treated a Figma padding smaller than the stroke weight as equal to the stroke weight.
