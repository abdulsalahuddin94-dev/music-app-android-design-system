# Foundation gaps (Music App, Android) - 2026-10-13

Open items only. Fixed items are in `../../CHANGELOG.md` and `../../docs/decisions.md`.

## Variables
1. **App Icon missing.** `➜ App Icon` is waiting for the icon (`status.json > app_icon.status = waiting`). The Play Store drop zone has about 15 px less right padding than the left (foundation audit issue 3, reported as fixed in the changelog; recheck when the icon arrives).
2. **No state-layer tokens.** Hover, focus and pressed use whole-variant opacity, not M3 state layers. State layers were offered in DR-002 but only the Size collection was approved. Decide before adding Hover / Press ripple states in code.
3. **No role radius aliases and no extra Shape steps.** Shape has 7 corner steps, no `radius/role/*`, no `*_increased`. Components bind scale steps directly.
4. **Palette tones not normalized.** The palettes are hand-picked, not HCT. A proposal (62 value changes, the brand neon `#D7FF00` would shift) was not applied (DR notes in `../../docs/decisions.md`, Fix on create section).
5. **No contrast modes.** Only Light and Dark; no Medium or High contrast schemes and no dynamic color strategy.
6. **Light primary is olive (`#535C00`), not the neon.** The brand neon `#D7FF00` is `primary/80` and appears only in Dark. By M3 contrast rules neon cannot carry white text in Light. Confirm this is intended before marketing assets.
7. **Name lint (0 errors, 9 warnings).** `hue-in-semantic` x6: `category_cyan`, `category_magenta`, `category_yellow`, `category_blue`, `category_green`, `category_red`, `category_purple` carry a hue. They are category slots for tiles, kept because the tile colors are fixed product categories (a rename would break Genre Card and Library Shortcut Tile bindings). `mixed-style` x3: Semantic, Typography and Size mix kebab and snake naming (M3 uses snake_case leaves such as `surface_container_high`). Not renamed (live bindings).
8. **Success is cyan.** `success` aliases the cyan ramp, `info` the purple ramp. Nothing in the Listen flow uses them.
9. ~~rules.json holds reference defaults~~ Fixed 2026-10-13: spacing, typography and elevation in `data/rules.json` now match `data/tokens.json`.

## Styles
10. **Elevation numbers are plain.** Shadow offset and blur are not variables. Elevation 1 to 5 are hard to tell apart on Dark surfaces (foundation audit issue 4, informational).
11. **No Arabic text style or font variable.** Arabic titles and lyrics use the fallback of Roboto. Add an Arabic font if Arabic must be set exactly.
12. **No grid styles.** Compact 375 only.

## Docs pages
13. ➜ Spacing has only a Light board (informational).
14. ➜ Color Light boards: `on_primary`, `on_secondary` and container swatches are near white on a white board; add an `outline_variant` hairline (informational).
15. ➜ Icons: 37 frames without Auto Layout are the Icon/* component frames themselves (normal for glyph components).

## Decisions kept against the source (listed here so they are not re-opened by accident)
16. **Dark category colors are M3 tone 80** (pastel with dark text) while the source app shows saturated mid-tones in Dark (DR-003, Abdul). Light matches.
17. **Player background is `surface`.** The source tints Now Playing and Lyrics from the artwork at runtime; the DS cannot (DR-003).
18. **Display face is approximate.** The typeface of the source title and card labels is a condensed display face; the DS maps it to Roboto Condensed Bold (`M3/headline_small_emphasized`), close but not identical.

## Screenshots
19. `references/screens/` holds the Setup page pictures (Light and Dark boards) and the Utilities preview from the foundation audit. They were taken at scale 0.5.
