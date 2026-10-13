# Screens audit round 3: Brownfield Design, page Listen, 2026-10-13

Mode: screens, read-only. Tool: FigCli Yolo, `FIGMA_FILE="Brownfield Design"` (`Brownfield Design visible`). Previous report: `2026-10-13-screens-listen-final.md`.
Scripts (in `audits/screens/`): `audit_listen.figma.js` (all nodes of all 16 frames), `r3-dock.figma.js` (top-level order, docking), `r3-size.figma.js` (Dark = Light layout, instance size vs main).
Captures: `audits/screens/r3-<screen>-<dark|light>.png`, sources `r3-src-*.png`, side by side (source, Dark, Light) `r3-<screen>-compare.png`. All viewed.

## Totals (16 frames)

| Check | Result |
|---|---|
| Raw fills / strokes / padding / gap / radius on screen layers | 0 / 0 / 0 / 0 |
| Text without text style, effects without style | 0 / 0 |
| Raw fills inside instances (overrides) | 0 (image fills on Artwork instances are intended) |
| Local or detached components, instances without main | 0 |
| Deleted-variable bindings, local variables, misused variables | 0 / 0 / 0 |
| Frames with 2+ children and no Auto Layout, default layer names | 0 / 0 |
| Mode pin (`Semantic`): Dark frames = Dark, Light frames = Light | 16 of 16 |
| Placeholder texts | 0 |
| Dark layout = Light layout (every top-level node x, y, w, h) | 8 of 8 pairs identical |
| Pinned bars: Bottom Navigation 375x58 at x 0 with bottom = frame bottom; Mini Player 351x56 at x 12, 4 px above the nav | pass in Explore x2, Search x2, Library x2 |
| Utility bar pinned at frame bottom | Lyrics pass (812 of 812). Now Playing: bar bottom 804 of 813, a 9 px gap (both modes) |
| Bar overlap with content | Explore Full: last rail (to y 1708) runs under the nav (y 1667) and Mini Player: intended scroll-under; Search Full and Library: content ends above the Mini Player |
| Instances clipped by size | 0 found. Instances narrower than main are Fill-container resizes of text rows (Search Bar 343/351 vs 360, Section Header 343 vs 340, Episode Card 343 vs 360); larger ones (Album Artwork 288 vs 160, Radar Button 343 vs 93, Shortcut Tile 109 vs 80, Filter Chip) clip nothing |
| Frame sizes | kept: Explore 1725 / 813, Search 1424 / 812, Library 1132, Now Playing 813, Lyrics 812 |

Library version up to date: the Plugin API cannot tell; not verified.

## Readiness

| Screen | Score | Main reason |
|---|---|---|
| Explore (Full, Viewport) | 86 | spacing offsets, nav active pill |
| Search & Discover | 82 | Dark card colors, Radar button, display face |
| Library - Music | 90 | small offsets |
| Library - Podcasts | 88 | header gap, card height, progress |
| Now Playing | 86 | utility bar gap, progress bar |
| Lyrics | 82 | progress bar, lyric fade, utility bar position |

File mean 86 (round 2: Explore 88, Search 80, Library 90 / 88, Now Playing 88, Lyrics 78). Structure counts are all 0; the score is the fidelity gap.

## Remaining differences (build vs source, Dark; Light has the same layout)

### Explore (Full and Viewport)
1. Vertical offsets: title EXPLORE y 63 vs 57 (+6); chips y 120 vs 107 (+13); shortcut cards y 188 vs 173 (+15); "Your new music" 257 vs 252; "For You" 513 vs 519 (-6); lower rail headings drift up to 21 px (Dance Floor title 755 vs 776).
2. Music Mix tile text is larger in the build (about 14 vs 12 px).
3. Filter chips look taller in the build (48 frame row vs about 32 visible in the source).
4. Mini Player: no progress line; Dark fill slightly lighter than the source.
5. Bottom Navigation: source has a lime filled pill behind the active Explore icon and solid icons; build shows an outlined icon without the pill.
6. "More" button 40 high vs 36 in the source, lighter fill (Light: grey on grey, readable).
7. For You captions truncate earlier than the source.

### Search & Discover
1. Dark colors: source genre and popular cards are saturated mid-tones with white or dark condensed bold text; the build uses pastel containers with dark text. Light matches the source closely. Needs a decision (source-over-M3 rule favors the saturated set).
2. Type: source uses a condensed display face for the title and card labels; build uses the regular face in caps.
3. Search bar: source light-grey bar at y 107; build dark pill at y 125 (+18). Title y 63 vs 56.
4. Radar button, Dark: source purple outline, purple icon and text (44 high, y 172); build white outline and text, 48 high (y 186), smaller icon. Light matches.
5. Popular cards y 250 vs 260; Moods & Genres title 389 vs 395; first genre row y 410 vs 424; row pitch 96 both.
6. Source thumbnails have a slanted edge over the colored card; build uses a static rounded thumbnail.
7. Mini Player has no progress line.

### Library - Music
1. Tabs: MUSIC / PODCASTS y 126 vs 131; underline about 3 px vs 4 px; settings and help icons y 133 vs 128 (+5).
2. Chips 32 vs 36 high (within 4 px); positions match (y 203 vs 204).
3. Shortcut tiles 80 high, y 243 vs 252 (source icons slightly smaller); the source wraps "Download s" (source defect), build wraps cleanly.
4. Playlists header y 363 vs 383 (-20); list starts y 428 vs 437 (-9); row pitch 72 vs 75.
Light readable.

### Library - Podcasts
1. Same header offsets as Library - Music.
2. "Continue playing" y 350 vs 379 (-29).
3. Episode card 189 vs 183 high; title 16 vs 18 px (within 4 px).
4. Download icon is a filled cloud-download, 24 px; source is a small outline cloud, 16 px.
5. Progress bar 4 px grey, no lime fill on card 3 (source has a lime start).
Light readable.

### Now Playing
1. App bar: title y 63 vs 59; sparkle small and left of the switch; the source sparkle is gold below the AI MIX text.
2. Artwork 288 at the same position (match). Track header text y matches within 3 px; Share circle 40 in both but 14 px more to the left in the build.
3. Progress: source full-bleed 4 px with a white thumb at y 575; build inset 16, 3 px, no thumb, y 562 (-13); time labels y 576 vs 596 (-20).
4. Play button y 664 vs 670; cloud icon is a plain cloud-download, the source is a cloud with a pause mark (downloading).
5. Utility bar labels y 760 vs 779 (-19), 12 vs 11 px; bar ends at y 804 of 813, so 9 px stays empty under it.

### Lyrics
1. Track header row y 80 to 160 vs 88 to 172 (-8); Share circle 48 vs 40; title y 109 vs 103.
2. Lyrics pitch 64 from y 191; source pitch 66 from y 203 (-12). 7th line fully visible; the source fades it half out; no edge fades in the build.
3. Active line y 256 vs 269 (-13).
4. Progress: source full-bleed 4 px with a thumb at y 637; build inset, thin, no thumb, y 626 (-11); time labels y 639 vs 659 (-20).
5. Play at y 704 vs 703 (match); download icon plain vs downloading.
6. Utility bar: Lyrics pill matches in style; y 768 vs 779 (-11). Docked correctly (812).
Light readable.

## Findings table

| # | Node / screen | Issue | Fix |
|---|---|---|---|
| 1 | Now Playing, Player Utility Bar (Dark, Light) | bottom 804 of 813: 9 px gap under the pinned bar | dock it so its bottom is 813 |
| 2 | Now Playing, Lyrics: Playback Progress | inset 16, no thumb, 3 px; source full-bleed 4 px with a thumb, 11 to 13 px higher, labels 20 px higher | add a full-bleed + thumb variant, re-space the section |
| 3 | Utility bar content | labels 11 to 19 px higher than the source | align the label row lower in the bar |
| 4 | Search, Dark | pastel vs saturated card colors | decision on a saturated Dark set |
| 5 | Search, Radar Button Dark | white outline and text vs purple | bind to the same primary tokens as Light |
| 6 | Explore, Search, Library headers | offsets of 5 to 20 px (title, search bar, chips, shortcuts) | adjust section paddings |
| 7 | Library - Podcasts | "Continue playing" 29 px high, card 6 px tall, download icon large, progress fill missing | fix gap, icon size, fill |
| 8 | Lyrics | no top/bottom edge fade, 7th line fully visible, lines 12 px high | add edge fades |
| 9 | Now Playing, Lyrics | plain download icon | downloading icon variant |
| 10 | Mini Player (all) | no progress line at the top edge | add Progress line |
| 11 | Bottom Navigation | no filled pill behind the active icon | add the active pill |

All 16 frames are readable in Light. No binding or structure errors; every remaining item is a visual difference.

## Changed since the last report
- Raw / binding / structure counts: still 0 after the DS changes and the re-docking.
- Docking: all bars pass except the Now Playing utility bar (9 px gap, new).
- Fixed since round 2: Lyrics 7th line visible, round Play buttons, Radar icon, Playlist App Bar layout, Search Bar 42, Switch 44x24.
- Still open from round 2: full-bleed progress with thumb, Download icon state, lyric edge fade.
