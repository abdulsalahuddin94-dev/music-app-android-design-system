# Flow gap table + screen specs: Listen (Lyrics, Search & Discover)

Flow map: `audits/2026-10-13-flow-map-listen.md`. The four built screens are audited separately (`audits/2026-10-13-screens-brownfield-design.md`); this file covers the two screens still to build.
Platform: Android, compact 375 dp. UI direction left to right; Arabic song texts keep their own right-to-left alignment.

## Screen spec 1: Lyrics (source `image 6`, 375 x 813)

| # | Section | Pinned / scroll | DS component (variant) | Exact content |
|---|---|---|---|---|
| 1 | Status bar | pinned top, full-bleed | Status Bar | Time `12:00` |
| 2 | Collapse | pinned top, gutter 16 | Icon Button (Standard, Icon expand_more) | accessible name "Close player" |
| 3 | Track header | pinned, gutter 16 | **Lyrics Header (missing)** = Artwork 80 + Track Metadata + Share (Icon Button Tonal) + More (Icon Button Standard) | Title `كيفك ع فراقى`, subtitle `محمد شاكر وفضل شاكر - كيفك ع فراقى` (source shows it truncated) |
| 4 | Lyrics | scrolls vertically, gutter 16, lines right-aligned | **Lyrics Line (missing)** x 7 | Past: `كذبه وصدقتا` · Current: `كانت أكبر كذبه عشته` · Upcoming: `إنى انساك ومن وقته`, `ما اقدرت نسيت`, `عم عائد ماضى`, `بضحك وبقول عادى عادى`, `والميه كله ع الفاضى` (last one faded at the edge) |
| 5 | Progress | pinned bottom block | Playback Progress | `00:29` / `03:48` |
| 6 | Controls | pinned bottom block | Playback Controls | Like, Previous, Play, Next, Download |
| 7 | Utility bar | pinned bottom | **Player Utility Bar, Active = Lyrics (missing variant)** | `LYRICS` selected (white pill), `QUEUE`, `AUDIO` |

Background: the source tints the player with the artwork color (dynamic). The built Now Playing uses `md/sys/color/surface`; Lyrics does the same so both player views match (noted as a fidelity difference).

## Screen spec 2: Search & Discover (source `image 7`, 375 x 1399; built as a 375 x 812 viewport + a 375 long-scroll frame like Explore)

| # | Section | Pinned / scroll | DS component (variant) | Exact content |
|---|---|---|---|---|
| 1 | Status bar | pinned top | Status Bar | `11:58` |
| 2 | Title | top, gutter 16 | **Top App Bar with Show Actions = off (missing property)** | `SEARCH & DISCOVER` |
| 3 | Search | gutter 16 | Search Bar | Placeholder `Songs, artists, lyrics, playlists...`, search + mic icons |
| 4 | Radar | gutter 16, full width | **Button, Style = Outlined Accent (missing variant)**, Leading Icon on | `Radar songs around you` |
| 5 | Popular | gutter 16 | Section Header (Show More off) + 2 x **Genre Card (missing)** in a 2-column grid | `Popular`; cards `TOP` (magenta), `NEW MUSIC` (blue) |
| 6 | Moods & Genres | gutter 16, scrolls | Section Header (Show More off) + 18 x Genre Card, 2 columns | `ALTERNATIVE` blue, `ELITE` cyan, `ARABIC HIP HOP` green, `ARABIC INDIE` cyan, `CHILLING` blue, `DANCE / ELECTRONIC` red, `DECADES` magenta, `DRIVING` blue, `EGYPTIAN` yellow, `FEELING GOOD` red, `FOCUS` purple, `FRENCH` blue, `HIP-HOP/ RAP` green, `INDIE` blue, `IRAQI` green, `ISLAMIC` purple, `K-POP` magenta, `KHALEEJI` green |
| 7 | Mini player | pinned bottom, inset | Mini Player | `ولا بعد سنين` / `اليسا` |
| 8 | Bottom navigation | pinned bottom, full-bleed | Bottom Navigation (Search selected) | Explore, Search, Connect, Your Library |

Viewport frame (812): sections 1-6 up to the 4th row of Moods & Genres, mini player and bottom navigation pinned.

## Gap table

| Screen | Section | Element | DS coverage | Tier | Atomic structure map |
|---|---|---|---|---|---|
| Lyrics | 2, 5, 6 | Collapse, progress, controls | existing | | |
| Lyrics | 3 | Track header | **missing: Lyrics Header** | Molecule (Data display) | Artwork (80) + Track Metadata + Icon Button (Tonal, share) + Icon Button (Standard, more_vert); spacing/12 gap, nested instances exposed |
| Lyrics | 4 | Lyric line | **missing: Lyrics Line** | Atom (Data display) | TEXT in `M3/headline_small_emphasized`; variants State = Past / Current / Upcoming x Align = Start / End; colors on_surface (Current), on_surface_variant (Past), outline (Upcoming) |
| Lyrics | 7 | Utility bar selected item | **missing variant: Player Utility Bar Active = None / Lyrics / Queue / Audio** | Molecule (change) | Selected item = pill container inverse_surface + label/icon inverse_on_surface, corner/full, spacing/12 x spacing/4 |
| Search | 2 | Title without actions | **missing property: Top App Bar `Show Actions` (BOOLEAN)** | Organism (change) | hides Notifications, Community, Profile |
| Search | 3, 5-8 | Search bar, section titles, mini player, nav | existing | | |
| Search | 4 | Radar button | **missing variant: Button Style = Outlined Accent** (5 states) | Atom (change) | Outlined anatomy, border + label + icon in md/sys/color/tertiary |
| Search | 5, 6 | Genre tile | **missing: Genre Card** | Molecule (Data display) | Artwork (image, slanted right edge) + Label (`M3/headline_small_emphasized`, caps, on_primary) on a color panel; variant Color = Magenta / Blue / Cyan / Green / Red / Purple / Yellow; radius corner/extra_small; height 80 |

## New tokens (approval needed)

Genre Card needs 4 more category colors. The DS has `category_cyan`, `category_magenta`, `category_yellow` (Semantic, Light / Dark).

| New token | Light / Dark | Aliases | Primitive needed |
|---|---|---|---|
| `md/sys/color/category_blue` | blue/40 / blue/80 | new palette `md/ref/palette/blue` (tones 0-100, key `#4F6BED`, from the source tiles) | yes, new ramp |
| `md/sys/color/category_green` | green/40 / green/80 | new palette `md/ref/palette/green` (key `#22B04B`) | yes, new ramp |
| `md/sys/color/category_red` | error/40 / error/80 | existing `md/ref/palette/error` | no |
| `md/sys/color/category_purple` | purple/40 / purple/80 | existing `md/ref/palette/purple` | no |

Label text on every category color uses `on_primary`-style contrast checks (4.5:1 for the condensed bold label) in both modes; any failing pair moves to the next tone of the same ramp.

## Existing screens: audit result and proposed fixes (Scenario C step 3)

Audit `audits/2026-10-13-screens-brownfield-design.md`: on all 10 frames (5 screens x Dark / Light) every DS count is 0 (raw values, local or detached instances, misused variables, deleted variables, missing Auto Layout, default names, placeholder texts). Readiness 82-90. What is left is fidelity to the screenshots.

| # | Fix | Screens | Proposed | Why |
|---|---|---|---|---|
| A | Icon swaps to match the source: Audio = `graphic_eq` kept vs source gear -> `settings`; "Created for you", "Your uploads", sort and the podcast tile icon swapped to the source glyphs from ➜ Icons | Now Playing, Library | Fix | Same icon set, wrong glyph |
| B | Playback progress: source shows a thumb at 0:03 and almost no fill; set the Progress Indicator value to match (about 1%) | Now Playing | Fix | Content value, not a DS change |
| C | Podcast card 3 progress fill not visible: set its value | Library - Podcasts | Fix | Content value |
| D | Explicit badge: source is a small dark square "E", build is a red pill (`error`) | Explore | Fix in the DS: Badge gets `Type = Explicit` (surface_container_highest + on_surface, corner/extra_small) | `error` is the wrong meaning for "explicit" |
| E | Heights: Search Bar 56 vs 42, Bottom Navigation 80 vs 57, Mini Player 64 vs 57, Shortcut Card 72 vs 58, cards +23 px | Library, Explore | Keep (DS sizes) | M3 minimums (48 dp targets, 56 dp search, 80 dp nav bar); the screenshots are a scaled phone capture |
| F | Player background tinted from the artwork | Now Playing, Lyrics | Keep `surface` | Dynamic artwork color is a runtime effect, documented in the Lyrics / Now Playing specs |
| G | Status bar icon count | All | Keep | System chrome |
| H | 813 px tall viewports (1 px over 812) | Now Playing, Explore - Viewport | Keep (Brownfield rule: existing sizes stay) | |
