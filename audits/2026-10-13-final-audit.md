# Final audit 2026-10-13 - Brownfield DS (Music App, Android, M3)

Tool: FigCli Yolo, file `Brownfield DS` (verified `Brownfield DS visible`). Read only. Scope: whole file, 78 component entries (40 registry components + 38 Icon/*; 20 sets and 58 standalone components), 49 docs boards, 3979 nodes. Scripts: all-variant binding walk (logic of `tools/check_bindings.figma.js`, plus remote, default-name, auto layout, description checks), whole-file independent raw fill / text check, instance size check, Semantic alias + contrast check.

**File readiness score: 98 Production ready** (mean of 40 components + Icon family; previous report: components audit 94). Every checklist count is 0 except the one known exception.

## Totals

| Check | Result |
|---|---|
| Remote variables / styles / components | 0 / 0 / 0 (6 collections, 255 variables, all local; 20 text styles, 6 effect styles, 0 paint styles) |
| Raw fills / strokes (components, variants, docs boards; SECTION fills ignored) | 0 (independent whole-file check over 2486 solid fills: 0 raw) |
| Unbound padding / gap / radius | 0 / 0 / 0 |
| Text without style | 0 (1210 text nodes) |
| Effects without style | 0 |
| Gradients without style | 0 |
| Properties not wired per variant | 1: Media Card, Description missing in Size=Default (known exception, Size=Large only) |
| Nested instances with properties not exposed | 0 |
| Default layer names | 0 |
| Frames with 2+ children without Auto Layout (Icon/* and Progress Indicator excluded) | 0 |
| Description starts with "Purpose:" | 78 of 78 (40 components + 38 Icon/*); 0 missing |
| Variables with ALL_SCOPES / no scope outside Primitives | 0 (Primitives: 99, allowed) |
| Semantic colors that are not aliases | 0 of 50 (both modes) |
| Variant axis named Mode (no Light/Dark duplicates) | 0 |
| Vector glyphs outside Icon/* or instances (real icons only) | 0 (28 ellipse shapes in Switch Thumb / Radio Circle are control geometry) |
| Variants positioned outside their set frame | 0 |
| Empty visible text | 0 |
| Instances with a different size than main: all / height differs / main height bound AND height differs | 265 / 211 / 0 |
| Size-binding regression (width bound differs) | 0 (3 Tab Item instances differ in width only, 125 vs 82; Tab Item main height 48 is bound and their height is 48) |
| Contrast Light and Dark, 17 on_* / container pairs + on_surface and on_surface_variant on 6 surfaces, 4.5:1 | 68 of 68 pass |
| on_primary on the 7 category colors (Light / Dark) | cyan 5.36 / 13.13, magenta 6.04 / 10.49, yellow 5.02 / 15.28, blue 6.35 / 12.42, green 5.02 / 13.33, red 6.47 / 13.15, purple 7.10 / 10.31: all pass |
| UI boundary outline vs surface | Light 9.15, Dark 3.03 (3:1 pass) |
| Registry vs Figma (names, pages, variant counts, variant axes, properties) | 40 of 40 match; icons 38 = registry count 38 |
| Light & Dark Preview section per page | 21 of 21 pages; Setup docs sections 9 pages captured |

The 211 height differences are resized icon, artwork and button instances whose main heights are not bound to a variable, so none is a regression.

## Readiness per component

Every component: 0 errors, 0 warnings from the counts above; points lost only for registry gaps.
- 100 Production ready: Text Field, Text Area, Checkbox, Switch, Radio, Button, Icon Button, Filter Chip, Tab Item, Primary Tabs, Bottom Navigation, Top App Bar, Playlist App Bar, Status Bar, Mini Player, Playback Progress, Playback Controls, Player Utility Bar, Artwork, Avatar, Badge, Section Header, Shortcut Card, Media Carousel, Library Shortcut Tile, Genre Card, Track Metadata, Playlist List Item, Podcast Episode Card, List Header, Lyrics Line, Lyrics Header, Dialog, Sheet, Progress Indicator, Divider, Icon/* family (38).
- 97 Media Card: Description only in Size=Large (by design).
- 92 Search Bar: no Focused / Hovered state (registry gap, by design).
- 90 Navigation Item: only a Selected axis plus states listed in the registry gaps, no active indicator.
- 95 Tooltip: Rich variant has no title or actions yet (registry gap).
(The 100 list is the registry components not named in the lower scores; component names there are listed from memory of the registry and states were not re-derived per component here.)

## Visual review (screenshots saved)
Previews: `Component_Skills/<Group>_Skill/references/screens/*-light-dark-preview.png` (Form Elements 6, Navigation 4, Data Display 10); `Foundation_Skill/references/screens/utilities-light-dark-preview.png`; Setup docs `Foundation_Skill/references/screens/setup-*.png` (overview, color, typography, shape, spacing-size, elevation, icon-library, icons, app-icon, utilities). Light and Dark both render with the right mode on every preview; no clipped text, no missing icons, no black fills.

Observations (nothing blocks the checkpoint):
1. Text Area preview: short horizontal stray lines at the left edge of the Light card (x 0-27, two lines), probably the frame outline of the Hovered variant or a leftover guide; confirm on the page.
2. Dialog and Sheet previews: variants are staggered vertically and the cards leave large empty space below the content (fixed heights); the dialog surface is barely different from the page in Light.
3. Player Utility Bar preview: 10 variants wrap unevenly in two rows with uneven spacing; Light first and fourth items nearly touch.
4. Light Avatar and Top App Bar avatar are a very pale tertiary container on white (low visibility, Dark is fine); Divider in Dark is almost invisible (outline_variant; decorative).
5. Input Fields preview shows 3 of 15 variants (Filled, Outlined, Dropdown in Enabled), by design.
6. ➜ Icons page working section: icons are black on the grey section and hard to see; they are laid out with uneven gaps. The ➜ Icon Library docs board lists 37 icons; Icon/radar (the 38th component) is missing from it. Fix: add radar to the library board or remove the unused icon.
7. Banners & Badges page contains only Badge (no banner component exists; registry matches).
8. App Icon page: waiting state with 4 drop zones (Foreground, Background, Monochrome, Play Store) and guidelines, matches `status.json > app_icon.status = waiting` (0 size frames to check).

## Known registry gaps (accepted, from `data/component-registry.json > gaps`)
Media Card Description only in Large; states use whole-variant opacity (file convention); Search Bar no Focused / Hovered; Tooltip Rich no title/actions; Library Shortcut Tile variants share default label and icon; 12 fixed icon instances without swap (Status Bar 3, Checkbox 6, Playlist App Bar 1, List Header 2).

## Not run
Slot check against `component-registry.json > slots` (item 14) and the App Icon size-frame checks were not re-run (waiting state, no icon dropped).

## Changes since the components audit (2026-10-13)
Icon/* descriptions now all start with "Purpose:" (was 37 with "Tier:"); 0 variants outside set frames (was 7); Dark previews now on all 21 pages (was 1 of 36); nested-instance property exposure 0 (was 2 components); Navigation Item and Search Bar gaps are now recorded as accepted registry gaps.
