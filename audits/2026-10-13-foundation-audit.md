# Foundation audit, Brownfield DS (Music_App_Android), 2026-10-13
Tool: FigCli Yolo, file "Brownfield DS" (confirmed visible). Read-only. Scope: the eight Setup pages, local variables, text and effect styles.
Score: Foundation 92/100 (Production ready needs 0 on every count; two doc-quality issues and one visual issue remain). Previous report: none.

## Numbers
1. Variables: Primitives 77 (COLOR), Semantic 46 (COLOR, Light + Dark), Spacing 11, Shape 7, Typography 77 (61 FLOAT, 16 STRING), Size 11. Remote 0. ALL_SCOPES outside Primitives 0, empty scopes 0. Semantic colors not aliasing a Primitive 0 (92 mode values checked). Without description 0.
2. Styles: 19 text styles, all with fontSize, lineHeight, letterSpacing, fontFamily, fontWeight bound (0 missing). 6 effect styles: Elevation/1-5 shadow color bound, Elevation/0 has no effect (flat, correct). Remote styles 0. Shadow offset and blur are plain numbers (no Elevation variables exist; informational).
3. Docs pages (1,286 nodes walked, instances skipped): raw fills 0, raw strokes 0, raw padding 0, raw gap 0, raw radius 0 (the only hit is each SECTION's default corner radius 2, ignored), TEXT without text style 0, bindings to non-local variables 0, non-local text styles 0. Light boards pin Semantic to Light (5:1), Dark boards to Dark (5:2), on every page; Color page Primitives board pinned Light. ➜ Icons has no board and no pinned mode.
4. Contrast (Light / Dark), all pass, text min 4.5: on_surface/surface 19.03 / 19.03; on_surface_variant/surface 16.29 / 8.17; on_surface/surface_container_high 17.45 / 16.29; on_primary/primary 7.24 / 16.49; on_primary_container/primary_container 14.51 / 6.95; on_secondary_container/secondary_container 17.45 / 14.94; on_tertiary/tertiary 7.10 / 8.25; on_error/error 6.47 / 11.16; inverse_on_surface/inverse_surface 16.29 / 16.29; on_primary/category_cyan 5.36 / 13.13; on_primary/category_magenta 6.04 / 10.49; on_primary/category_yellow 5.02 / 15.28. Failures 0 of 24.
5. Default layer names 0. Frames without Auto Layout inside docs 37, all on ➜ Icons (the Icon/* component frames and the grid; e.g. Icon/play_arrow, Icon/pause, Icon/skip_previous, Icon/skip_next, Icon/favorite, Icon/favorite_outline, Icon/download, Icon/more_vert). Icon glyph components without Auto Layout are normal; the grid itself should be checked. Other pages 0.
6. Screenshots (scale 0.5): `My Projects/Music_App_Android/audits/foundation/` setup.png, color.png, typography.png, shape.png, spacing.png, elevation.png, icons.png, app-icon.png.

## Issues (visual and structure)
| # | Page / layer | Issue | Fix |
|---|---|---|---|
| 1 | ➜ Typography, spec captions under title_medium, title_small, body_small, label_large, title_*_emphasized | Letter-spacing printed as float noise (0.150000005960464, 0.400000005960464, 0.10000000149011612) and clipped at the column edge | Round to 2 decimals in the caption text (or round the variable values to 0.15, 0.1, 0.4) |
| 2 | ➜ Icons, section "Icons" | Icons sit directly on the dark grey section with no white board; glyphs are dark on #444 and barely readable. No icon names, no Light/Dark board, no mode pin | Put the grid in a Light and a Dark board like the other pages, add name labels |
| 3 | ➜ App Icon, Play Store drop zone | Right edge of the dashed zone touches the board edge (about 15 px of padding lost on the right vs 16 on the left) | Reduce the zone width or widen the board |
| 4 | ➜ Elevation, Dark board | Levels 1-5 are hard to tell apart (shadow on near-black surface); no surface tint cue | Informational: add a note, or use outline_variant stroke in Dark |
| 5 | ➜ Spacing | Only a Light board (Spacing and Size); no Dark board | Informational, acceptable if the team accepts Light-only for non-color docs |
| 6 | Color, Setup boards | Light boards: on_primary / on_secondary / container swatches are white or near white on a white board, outline is faint | Informational: add a hairline outline_variant stroke to swatches |

No clipped text, overlaps or unreadable text on the other pages. Shadows are visible on Elevation Light.

## Changed since previous report
No earlier foundation report in this folder (only 2026-10-13-variable-map.md).
