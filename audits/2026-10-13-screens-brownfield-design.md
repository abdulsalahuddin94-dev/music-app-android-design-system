# Screens audit: Brownfield Design (Page 1) against Brownfield DS, 2026-10-13

Mode: screens (Scenario C step 3), read-only. Tool: FigCli Yolo, file "Brownfield Design" (confirmed `Brownfield Design visible`).
Scope: 10 frames, two sections both named `⭐ Screens (DS)`:
- **Dark** = section 27:815 (frame fill 32,32,32; collection mode 5:2). Frames 27:816, 27:931, 27:1155, 27:1463, 27:1765.
- **Light** = section 31:739 (frame fill 245,245,245; collection mode 5:1). Frames 31:740, 31:754, 31:780, 31:813, 31:868.
- Sources: image 1 to 5 (1:3, 1:6, 1:9, 1:12, 1:15). image 6 (54:1396) and image 7 (54:1399) are extra sources with no frame (see "Open points").
Captures: `audits/screens/` (`<screen>-dark.png`, `<screen>-light.png`, `source-<screen>.png`). Scripts: `audits/screens/check_screens_page1.figma.js` (structural checker copy, SCOPE page 1).

## Totals (identical in Dark and Light; each count is per frame)

| Check | Now Playing | Library - Podcasts | Library - Music | Explore - Full | Explore - Viewport |
|---|---|---|---|---|---|
| 1a Raw fills/strokes (incl. inside instances) | 0 | 0 | 0 | 0 | 0 |
| 1b Raw padding / gap / radius on screen layers | 0 | 0 | 0 | 0 | 0 |
| 1c Text without text style | 0 | 0 | 0 | 0 | 0 |
| 1d Effects without style | 0 | 0 | 0 | 0 | 0 |
| 2 Local / detached instances, local components | 0 | 0 | 0 | 0 | 0 |
| 2 Hand-drawn parts matching a DS component | 0 | 0 | 0 | 0 | 0 |
| 3 Misused variables (see note 1) | 0 | 0 | 0 | 0 | 0 |
| 4 Frames 2+ children without Auto Layout | 0 | 0 | 0 | 0 | 0 |
| 4 Default layer names | 0 | 0 | 0 | 0 | 0 |
| 5 Bindings to danger*, surface_variant, missing or local variables | 0 | 0 | 0 | 0 | 0 |
| 6 Placeholder texts | 0 | 0 | 0 | 0 | 0 |
| 6 Repeated text on sibling instances | 0 | 0 | 0 | 0 | 0 |
| 6 Overflow outside screen, squashed instances, bars not full-bleed | 0 | 0 | 0 | 0 | 0 |
| 6 Frame size (375 wide) | 375x813 (note) | 375x1132 (note) | 375x1132 (note) | 375x1725 (note) | 375x813 (note) |
| 6 Screen frame raw fill/padding/gap | 0 | 0 | 0 | 0 | 0 |
| 7 Visual differences vs source (count) | 9 | 8 | 5 | 6 | 6 |

Whole file: 10 frames, 0 raw values, 0 local or detached instances, 0 deleted-variable bindings. `check_screens.figma.js`: 10 issues, all the frame-size line (see note 2).

Instances per screen (all main components remote from Brownfield DS; 0 local):
- Now Playing: Status Bar 1, Playlist App Bar 1, Artwork 1, Track Metadata 1, Icon Button 2, Playback Progress 1, Playback Controls 1, Player Utility Bar 1.
- Library - Podcasts: Status Bar, Search Bar, Primary Tabs, Icon Button 2, Divider, Filter Chip 2, Library Shortcut Tile 3, Section Header, Podcast Episode Card 3, Bottom Navigation, Mini Player.
- Library - Music: same top part, Filter Chip 3, Library Shortcut Tile 4, List Header, Playlist List Item 8, Bottom Navigation, Mini Player.
- Explore - Full: Status Bar, Top App Bar, Filter Chip 4, Shortcut Card 2, Section Header 6, Media Card 18, Bottom Navigation, Mini Player.
- Explore - Viewport: same with Section Header 3, Media Card 9.

Bound variables seen (all remote, `md/sys/*`): color (surface, surface_container, _high, _highest, on_surface, on_surface_variant, primary, on_primary, outline, outline_variant, error, on_error, tertiary, category_cyan/magenta/yellow), spacing/0 to 64, shape/corner none/small/medium/full, typescale (font, size, weight, line_height, tracking per role), size (touch_target, list_item/two_line, text_field).

## Findings per screen

Layer-level tables: there are no raw-value, library, variable or naming findings, so the tables only carry notes and fidelity items.

### 1. Now Playing (27:816 Dark, 31:740 Light) - readiness 82
| Layer | Current | Problem | Proposed fix |
|---|---|---|---|
| frame | 375x813 | 1 px over 375x812 (checker line) | Resize to 375x812 (matches source 738x1600 ratio is 813; accept as designed size, see note 2) |
| Album Artwork (instance in Artwork Section) | image fill 288x288, radius bound | Image paint on a DS instance: false positive, it is the album photo cropped from the source | None; keep as is |
| Play Button (inside Playback Controls) | fill on_surface | Container fill with an `on_*` token; library-owned, not a screen override | Library owner: use `inverse_surface` style token or keep (note 1) |

Fidelity differences (source vs build):
1. Playlist App Bar: source shows "PLAYLIST Arabic Music Mix" left next to the chevron and "AI MIX" with the sparkle below the label, toggle at the right; build has a wider gap after PLAYLIST and the sparkle to the right of AI MIX (inline).
2. AI MIX toggle: source is an off switch with a light thumb (track light grey); build thumb is dark on a dark track (Dark) / dark outline (Light): off-state style differs.
3. Progress bar: source shows a round white thumb at 0:03 and no fill; build shows a lime (Dark) / olive (Light) fill at about 33 percent and no thumb. Position y 576 in source, 562 in build (14 px higher).
4. Time labels y 596 (source) vs 576 (build): 20 px higher, follows item 3.
5. Controls row: source download icon is a cloud with a pause mark (downloading); build shows a plain cloud-download. y 667 vs 664 (within 4 px).
6. Player Utility Bar: source y 778, build y 759 (19 px higher); source items are spread (LYRICS at x 32, AUDIO at x 297 with a gear icon), build AUDIO uses an equalizer icon and items sit at x 25 / 290.
7. Share button: same size; source circle is a lighter grey on the grey background, build is dark circle (Dark) / grey (Light). Colour follows the theme, acceptable.
8. Status bar: source shows location, notification and 66 battery icons; build shows wifi, signal, battery only (generic Status Bar component).
9. Background: source background is a tinted grey from the artwork; build uses flat `surface` (theme decision, no fix unless a dynamic colour is wanted).

### 2. Library - Podcasts (27:931 Dark, 31:754 Light) - readiness 88
| Layer | Current | Problem | Proposed fix |
|---|---|---|---|
| frame | 375x1132 | Long-scroll frame matching source image (1132) | None |
| Rail "Shortcut Tiles", "Tabs Row" | clip, no scroll overflow | Content wider than 375 clips, no horizontal scroll set | Optional: set overflow to horizontal scrolling in prototype |

Fidelity differences:
1. Search Bar: source 42 px tall at y 47 to 89; build 56 px at y 48 to 104.
2. Tabs: source tab text y 130, underline at 158; build y 140, underline 162 (10 px lower). Tab label weight in source is heavier for the active tab only.
3. Filter chips at y 204 (source) vs 217 (build), 13 px lower; chips are 32 px in both.
4. Shortcut tiles: "Your New Podcasts" icon is a microphone with lines in source, a podcast-radio icon in build.
5. "Continue playing" header y 379 vs 364 (build 15 px higher; spacing between tiles and header is smaller).
6. Episode cards: source card 1 at 403 to 584 (181 tall), build 393 to 597 (204 tall); each card is about 23 px taller in the build (more space above the progress row). Source cards have a visible border stroke; build cards have none.
7. Card 3 progress bar shows a lime partial fill in the source; build bar is empty (cropped by the mini player, cannot verify).
8. Mini player and bottom navigation: source nav is about 57 px tall (y 1075), build is 80 px (y 1052); mini player 57 vs 64.

### 3. Library - Music (27:1155 Dark, 31:780 Light) - readiness 90
| Layer | Current | Problem | Proposed fix |
|---|---|---|---|
| frame | 375x1132 | None | None |

Fidelity differences:
1. Search Bar 56 vs 42 px, tabs, chips and tiles 10 to 15 px lower than source (same cause as Podcasts).
2. Tabs: source highlights MUSIC with a lime underline across both; same in build; "PODCASTS" is greyed in source, in build it stays fairly bright.
3. Shortcut tile icons: "Created for you" is a magenta cassette in source, a pink record in build; "Your uploads" yellow circle-upload in source, plain yellow upload arrow in build; tile label "Downloads" wraps as "Download / s" in source (source defect), build correct.
4. Playlist rows: source pitch 75 px, build 72 px; the 8th row ("Music & OST") sits at y 963 (source) and 946 (build).
5. Sort header: "Playlists" icon is a sort-arrows glyph in source, a list-sort icon in build; "New playlist" button similar.

### 4. Explore - Full (27:1463 Dark, 31:813 Light) - readiness 88
| Layer | Current | Problem | Proposed fix |
|---|---|---|---|
| frame | 375x1725 | Long-scroll frame matching source (source image is only 270 px wide, blurry) | None |
| 6 "Rail Cards" frames | clip at 375 | Third card is cut at the screen edge on purpose (matches source) | None |
| Bottom Navigation / Mini Player | absolute, pinned at bottom (y 1645, 1577) | Matches pinned layout | None |

Fidelity differences:
1. Header "EXPLORE" y 57 (source) vs 63; filter chips 107 vs 120; shortcut cards 58 px tall in the source, 72 px in the build, so every later section is shifted down (Your new music header 252 vs 273, rail 285 vs 300, For You 518 vs 529).
2. Shortcut card thumbnails: source "Music Mix" 4-image collage is square left-aligned; build similar, "Recently Played" icon matches.
3. Counts match: 6 rails, 6 headers, 18 media cards, 4 chips, 2 shortcut cards. "Just You" subtitle present.
4. Media card badge: the "E" badge in source is a dark square at the image corner; build uses a red (error) pill (`error` / `on_error` tokens).
5. Avatar "plus" badge: source is a small blue pill, build pink (Dark) / red (Light).
6. Light mode: "More" buttons are mid grey (`surface_container_highest`); acceptable theme mapping.

### 5. Explore - Viewport (27:1765 Dark, 31:868 Light) - readiness 87
| Layer | Current | Problem | Proposed fix |
|---|---|---|---|
| frame | 375x813 | 1 px over 375x812 | See note 2 |
| Bottom Navigation / Mini Player | absolute, y 733 and 665 | Pinned, 80 and 64 tall | None |

Fidelity differences:
1. Same vertical offsets as Explore - Full (header 6 px, chips 13 px, shortcut cards 14 px taller, rail headers 11 to 21 px lower).
2. Bottom navigation 80 px (source about 60 px, labels directly under the icon); the mini player is 64 px (source 57 px).
3. The caption row of the For You rail ("Songs you loved but haven't...") peeks out in the gap between the mini player and the bottom navigation; in the source nothing shows there.
4. Counts match: 3 rails, 9 media cards visible, header chips 4.

## Totals per issue type (10 frames)
- Raw values: 0. Library problems: 0. Misused variables: 0. Missing, deleted or local variables: 0. Frames without Auto Layout: 0. Default names: 0. Placeholders: 0.
- Frame size: 10 of 10 flagged by the checker (813 and long-scroll heights); no action needed, see note 2.
- Fidelity differences: 34 per mode (9 + 8 + 5 + 6 + 6), the same in Dark and Light.

## Readiness score (0-100, from readiness-scoring.md logic: counts 0 give the base, fidelity deducts)
| Screen | Dark | Light |
|---|---|---|
| 1. Now Playing | 82 | 82 |
| 2. Library - Podcasts | 88 | 88 |
| 3. Library - Music | 90 | 90 |
| 4. Explore - Full | 88 | 88 |
| 5. Explore - Viewport | 87 | 87 |
| File mean | 87 | 87 |
Label: Nearly ready. Every DS count is 0; the points lost are fidelity, so the screens do not pass the section 7f gate until the differences above are fixed or accepted.

## Notes
1. Variable names that contain `surface_variant`: only `on_surface_variant` (valid, used for secondary text and icons: 4 to 41 bindings per screen). There is no binding to `surface_variant` itself or to `danger*`. If `on_surface_variant` is also on your delete list, 117 bindings per mode would break; confirm before deleting. `Play Button` (library instance inside Playback Controls and Mini Player) fills with `on_surface`; it is a library-owned fill and the icon on top is readable, so it is noted, not counted.
2. Frame heights 813, 1132 and 1725 follow the source images (Brownfield rule: keep designed sizes). The 813 frames are 1 px over the 812 mobile standard; resize them if exact 375x812 is wanted. Width is 375 everywhere.
3. Rails clip (`clipsContent` true, overflow none) at the screen edge, which matches the source cropping; the prototype has no horizontal scrolling yet.
4. Source `image 4` is a 270 px wide upscaled capture, so pixel positions were compared by proportion.

## Open points
- `image 6` (54:1396, 375x813) and `image 7` (54:1399, 375x1399) have no screen frame in either section; the checklist does not cover them. Ask if they are intended for further screens (likely Now Playing variant and a Library or Explore long screen).
- Fix order proposal: (a) Search Bar height and the spacing between tabs, chips, tiles and headers (Podcasts, Music, Explore); (b) Now Playing progress thumb and position, utility bar y, header layout; (c) icon swaps (download-in-progress, tile icons, E badge); (d) nav and mini player height variants.
- No fixes were applied; the caller decides.
