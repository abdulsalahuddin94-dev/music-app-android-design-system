# Screens audit (final): Brownfield Design, page Listen, 2026-10-13

Mode: screens, read-only. Tool: FigCli Yolo, `FIGMA_FILE="Brownfield Design"` (confirmed `Brownfield Design visible`).
Scope: 6 sections, 16 frames (Explore Full/Viewport x2 modes, Search & Discover Full/Viewport x2, Library Music x2, Library Podcasts x2, Now Playing x2, Lyrics x2).
Scripts: `audits/screens/audit_listen.figma.js` (walks every node of every frame; ignores nodes owned by instances for raw checks), `detail*.figma.js`, `list.figma.js`.
Captures: `audits/screens/final-*.png` (Lyrics and Search & Discover, Dark, Light, source).

## Totals (all 16 frames, every count 0 unless noted)

| Check | Result |
|---|---|
| 1a Raw fills / strokes on screen layers | 0 |
| 1b Raw padding / gap / radius on screen layers | 0 |
| 1c Text without text style / local text style | 0 / 0 |
| 1d Effects without style | 0 |
| 1e Raw fills/strokes inside instances (overrides) | 0 |
| 2 Instances remote from Brownfield DS | all (Explore 34 / 22, Search 28, Library Music 24, Podcasts 17, Now Playing 9, Lyrics 13 top-level instances) |
| 2 Local or detached components, instances without main | 0 |
| 3 Misused variables (text fill on surface/background tokens, shape fill on on_* tokens, stroke on surface tokens) | 0 |
| 3 Bindings to deleted variables / local variables | 0 / 0 |
| 4 Frames with 2+ children and no Auto Layout | 0 |
| 4 Default layer names | 0 |
| 5 Mode pin: every frame has `Semantic` pinned; Dark frames = Dark, Light frames = Light | 16 of 16 correct |
| 6 Placeholder texts | 0 |
| 6 Item counts: Search 2 Popular + 18 Moods & Genres Genre Cards (20 per frame, colors match the spec for all 20); Lyrics 7 Lyrics Lines, Player Utility Bar Active = Lyrics | pass |
| 6 Frame sizes | all 375 wide; Lyrics 375x812, Search Viewport 375x812, Search Full 375x1424; kept sizes: Now Playing 813, Explore Viewport 813, Explore Full 1725, Library 1132 (existing sizes stay) |
| 6 Pinned bars | Status Bar and Bottom Navigation full-bleed (375 wide, x 0) and docked at the bottom; Mini Player inset 12 (floating, by spec); Lyrics Player Utility Bar 375 wide, pinned at the bottom (y 756, h 56) |
| Image fills | all on Artwork-type instances (Media Card, Shortcut Card, Genre Card, Playlist List Item, Podcast Episode Card, Mini Player, Top App Bar avatar): intended |

Latest library version: the Plugin API cannot read whether a published update is pending; not verified here. Run "Accept updates" check by eye in Figma (Assets > Libraries) if the DS was published after the last accept.

## Per-frame table

| Frame | Size | Remote / local inst | Raw | Misused / deleted | No AL / default names | Mode pin | Placeholders | Readiness |
|---|---|---|---|---|---|---|---|---|
| Explore - Full / Dark, Light | 375x1725 | 34 / 0 | 0 | 0 / 0 | 0 / 0 | Dark, Light ok | 0 | 88 |
| Explore - Viewport / Dark, Light | 375x813 | 22 / 0 | 0 | 0 / 0 | 0 / 0 | ok | 0 | 88 |
| Search & Discover - Full / Dark, Light | 375x1424 | 28 / 0 | 0 | 0 / 0 | 0 / 0 | ok | 0 | 80 |
| Search & Discover - Viewport / Dark, Light | 375x812 | 28 / 0 | 0 | 0 / 0 | 0 / 0 | ok | 0 | 80 |
| Library - Music / Dark, Light | 375x1132 | 24 / 0 | 0 | 0 / 0 | 0 / 0 | ok | 0 | 90 |
| Library - Podcasts / Dark, Light | 375x1132 | 17 / 0 | 0 | 0 / 0 | 0 / 0 | ok | 0 | 88 |
| Now Playing / Dark, Light | 375x813 | 9 / 0 | 0 | 0 / 0 | 0 / 0 | ok | 0 | 88 |
| Lyrics / Dark, Light | 375x812 | 13 / 0 | 0 | 0 / 0 | 0 / 0 | ok | 0 | 78 |

Dark and Light of one screen give identical numbers. Readiness: structure counts all 0, so the score is the fidelity gap. Explore, Library and Now Playing were not re-compared visually in this round (scores carried from the earlier audit with the fixes of today counted); Lyrics and Search are scored from the visual loop below.

## Fidelity differences, Lyrics (source `Source / Lyrics`, build `56:5281` Dark, `56:5418` Light)

1. Seventh line `والميه كله ع الفاضى` exists (7 Lyrics Lines) but is fully clipped; the source shows it half visible and faded at the edge. The Lyrics Section (388 high) is too short; also no fade at the top and bottom edges as in the source.
2. Playback Progress: source bar is full-bleed (x 0 to 375), 4 px, white fill about 13% with a round white thumb at 0:29, at y 637; build is inset 16, thin lime (Dark) / olive (Light) fill, no thumb, at y 570 (67 px higher). Time labels y 658 in source, 584 in build (74 px higher). Controls row y 672 vs 671 (ok), so the build has an empty gap of about 70 px between lyrics and the controls that the source does not.
3. Download icon: source is a cloud with a pause mark (downloading), build is a plain cloud-download.
4. Track header: source artwork y 88 to 172 (84 px), build y 80 to 160 (80 px, 8 px higher). Source Share circle is 40 px at x 280, build is 48 px at x 252 and the title right edge is 205 vs 217. The subtitle truncates at a different end (source shows the tail `ر - كيفك ع فراقى`, build shows `محمد شاكر وفضل شاكر -`).
5. Collapse chevron: source x 23, bolder and larger; build x 32, thinner (9 px apart).
6. Line pitch: 66 px in source (first line y 202), 64 px in build (first line y 190, 12 px higher); the source Past line is brighter than Upcoming. Dark: build matches this. Light: Past (on_surface_variant) and Current (on_surface) are nearly the same dark, so the current line does not stand out as in the source.
7. Utility bar: positions within 4 px (y 772 vs 773). LYRICS pill is 93 wide in build vs 88 in source (5 px); AUDIO gear matches (issue from Now Playing fixed).
8. Accepted differences (spec): background is `surface`, the source tints with the artwork color; system status icons; no darker bottom panel behind progress and controls (source has a slightly darker band).

Texts: all match (12:00, track title, 7 lines, 00:29, 03:48, LYRICS, QUEUE, AUDIO). Order matches. Active = Lyrics ok.

## Fidelity differences, Search & Discover (source `Source / Search & Discover`, build Full `56:5501` Dark, `56:6072` Light; Viewport `56:5926`, `56:6107`)

1. Genre Card colors in Dark: build uses pastel panels (tone 80) with black labels; source uses vivid saturated panels (magenta, blue, cyan, green, red, purple, yellow) with white labels. Light mode is close to the source (saturated panels, white labels). Consequence of the Light 40 / Dark 80 token pairs from the spec.
2. Card shape: source image has a slanted right edge that cuts into the panel; build image is a rounded rectangle with a colored outline. Label font: source is condensed bold white caps; build is Roboto medium caps.
3. Title: source `SEARCH & DISCOVER` is larger bold condensed white at y 56; build at y 64 (8 px lower), same text.
4. Search bar: source is a light grey filled bar (even in Dark) 42 px high at y 87 to 129; build is a surface container bar 56 px high at y 104 to 160 (DS minimum 56, kept as decided).
5. Radar button: source icon is a radar ring glyph, 44 px high, purple filled label bolder; build uses a compass icon, 46 px high, regular weight label. Colors are the tertiary accent in both, border matches.
6. Vertical rhythm: Popular header y 231 in source vs 259 in build (28 px lower); Popular cards y 260 vs 280; source gap between Popular cards and the Moods & Genres header 55 px, build 36 px; Moods header y 395 vs 396 (ok); rows pitch 96 in both; last row 1192 vs 1184.
7. Mini Player: source shows a thin progress line at its top edge; build has none visible. Bottom Navigation: source 57 px with dimmed inactive items, build 80 px with full-white inactive icons (E, kept).
8. Viewport frame: shows the first 3 rows with the 4th behind the Mini Player (clipped), pinned Mini Player and Bottom Navigation; matches the spec.
9. Counts and texts: 2 + 18 cards, every card text and color, `Popular`, `Moods & Genres`, `Radar songs around you`, search placeholder, mini player texts all match. Top App Bar `Show Actions` = off in all four frames; Button Style = Outlined Accent.

## Issues to fix, by priority

| # | Frame | Layer | Issue | Fix |
|---|---|---|---|---|
| 1 | Lyrics | Lyrics Section, Progress Section | Progress 67 px too high, inset, no thumb; empty gap above controls | Move progress block to the bottom group, full-bleed, add thumb in Playback Progress (also helps Now Playing) |
| 2 | Lyrics | Lyrics Section | 7th line fully clipped, no edge fade | Let the section show half of line 7 (increase height or reduce pitch to 66) and fade the edges via the DS |
| 3 | Search Dark | Genre Card (Color variants) | Pastel panels and dark labels vs vivid with white | Decide: keep tone 80 (documented) or add a vivid Dark pair for category colors (needs token approval) |
| 4 | Search | Genre Card | Image shape and label font differ | Optional DS change (slanted mask, label font) |
| 5 | Search | Radar Button | Icon glyph (compass vs radar) | Swap icon |
| 6 | Search | Popular section | 28 px lower title and 19 px gap difference | Adjust section spacing tokens |
| 7 | Lyrics Light | Lyrics Line Past | Past vs Current almost same color | Past uses `outline` or a lighter token |
| 8 | Lyrics | Track header, Collapse, download icon | sizes, positions and glyph | minor |

No DS-structure issue found: 0 raw values, 0 local or detached, 0 misused or deleted variables, 0 default names, 0 frames without Auto Layout, mode pin correct on all 16 frames.
