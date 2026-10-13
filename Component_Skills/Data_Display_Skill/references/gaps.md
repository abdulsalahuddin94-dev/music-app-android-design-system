# Data Display gaps (Music App, Android) - 2026-10-13

Open items only. Source: `data/component-registry.json > gaps`, the components audit and the Listen screen audits.

1. **Tooltip Rich** has no title or actions yet.
2. **Library Shortcut Tile** variants (Purple, Cyan, Magenta, Yellow) share the default label (Likes) and icon (favorite); every instance sets its own Label and Icon.
3. **Media Card Description** is used only by Size = Large (Default shows Track Metadata). By design.
4. **Genre Card Dark colors.** The source shows saturated mid-tone tiles in Dark; the DS keeps M3 tone 80 pastel with dark text (DR-003, Abdul). Light matches. The slanted artwork edge is a static rounded thumbnail in the build.
5. **Genre Card face.** The source uses a condensed display face; the DS uses Roboto Condensed Bold (`M3/headline_small_emphasized`), caps.
6. **Lyrics** has no top or bottom fade on the lyric lines (Lyrics readiness 82).
7. **Podcast Episode Card** height is 186 to 190 depending on description length (source 186).
8. **Explicit Badge** is a surface-container square with an "E"; Plan Badge is for the avatar.
9. **List Header** has 2 fixed icon instances without a swap property (sort, arrow_drop_down).
10. **Shortcut Card** text is larger in the build than the source (about 14 vs 12 px, Explore).
11. **Not built:** Chip with avatar, Snackbar / Banner, Skeleton / loading list, Empty state, Table, Data list with selection, Album / playlist detail header. Offline, loading, empty library, no-results and Lyrics-not-available states are `not in source` (flow map `audits/2026-10-13-flow-map-listen.md` section 6).
12. **Media Carousel** holds exactly 3 Media Cards through swaps; more cards are added by hand on the screen.
