# Components audit 2026-10-13 - Brownfield DS (Music App, Android, M3)

Tool: FigCli Yolo, file `Brownfield DS` (verified `Brownfield DS visible`). Read only. Scope: 36 components (15 sets, 21 standalone) on Form Elements, Navigation, Data display, Utilities, plus 37 Icon/* on Icons.

**File readiness score: 94 Production ready** (mean of 37 entries: 36 components + Icon family as one; sd 8). Previous components audit: none (earlier reports are Foundation and Variable Map). The score ranks work; the checkpoint needs every count at 0, which is not met (see issues).

## Totals

| Check | Result |
|---|---|
| 1 Remote variables / styles / components | 0 / 0 / 0 (74 variables and 9 styles referenced, all local) |
| 1 Raw fills/strokes, unbound padding/gap/radius, text without style, effect without style (all variants, 36 components + 37 icons) | 0 |
| 2 Property coverage gaps per variant | 1 (Media Card Description, known exception, Size=Large only) |
| 2 Nested instances with properties not exposed | 2 components (Media Card: Explicit Badge; Dialog: Button x2 per variant) |
| 3 Registry match (names, pages, variant counts, properties) | 36 of 36; State uses Enabled; 0 'Default' |
| 3 Default layer names / frames with 2+ children without Auto Layout | 0 / 0 |
| 4 Description Purpose / Usage rules / Accessibility | 36 of 36; the 37 Icon/* start with 'Tier:' (no Purpose, no Usage rules) |
| 5 Group placement | 0 wrong |
| 6 Icon/* with one vector bound to a color variable | 37 of 37; icon instances without a swap: 12 (Status Bar 3, Checkbox 6, Playlist App Bar 1, List Header 2) |
| 7 Dark previews | 1 of 36 components (Button only) |
| Visual / structural defects | 15 issues below (7 on variants) |

## Per component

| Component | Page | Type | Variants | Score | Label | Where it lost points |
|---|---|---|---|---|---|---|
| Status Bar | ➜ Utilities | component | 1 | 94 | Production ready | 3 icon instances without swap (system icons); no Dark preview |
| Text Field | ➜ Input Fields and Dropdown | set | 15 | 97 | Production ready | no Dark preview |
| Text Area | ➜ Text Area | set | 5 | 83 | Nearly ready | Hovered variant outside the set frame (clipped); no Dark preview |
| Checkbox | ➜ Checkbox | set | 12 | 94 | Production ready | check icon without swap; no Dark preview |
| Switch | ➜ Toggles | set | 10 | 97 | Production ready | no Dark preview |
| Radio | ➜ Radio Buttons | set | 12 | 97 | Production ready | no Dark preview |
| Search Bar | ➜ Search | component | 1 | 76 | Nearly ready | no Focused/Hovered state; no Dark preview |
| Button | ➜ Buttons & links | set | 25 | 78 | Nearly ready | Neutral Disabled solid black fill, Neutral Hovered/Pressed identical to Enabled |
| Icon Button | ➜ Buttons & links | set | 20 | 75 | Nearly ready | 4 Inverse variants outside set frame (clipped); no Dark preview |
| Filter Chip | ➜ Pagination & Tabs | set | 10 | 97 | Production ready | no Dark preview |
| Tab Item | ➜ Pagination & Tabs | set | 10 | 97 | Production ready | no Dark preview |
| Navigation Item | ➜ Pagination & Tabs | set | 2 | 63 | Needs work | only Selected axis, no interaction states, no active indicator; no Dark preview |
| Primary Tabs | ➜ Pagination & Tabs | component | 1 | 94 | Production ready | both tabs read "MUSIC"; no Dark preview |
| Bottom Navigation | ➜ Pagination & Tabs | component | 1 | 97 | Production ready | no Dark preview |
| Top App Bar | ➜ App Bar | component | 1 | 97 | Production ready | no Dark preview |
| Playlist App Bar | ➜ App Bar | component | 1 | 94 | Production ready | 1 icon without swap; no Dark preview |
| Mini Player | ➜ Player Controls | component | 1 | 97 | Production ready | no Dark preview |
| Playback Progress | ➜ Player Controls | component | 1 | 97 | Production ready | no Dark preview |
| Playback Controls | ➜ Player Controls | component | 1 | 97 | Production ready | no Dark preview |
| Player Utility Bar | ➜ Player Controls | component | 1 | 97 | Production ready | no Dark preview |
| Artwork | ➜ Avatars & upload image | component | 1 | 97 | Production ready | no Dark preview |
| Avatar | ➜ Avatars & upload image | component | 1 | 97 | Production ready | no Dark preview |
| Tooltip | ➜ Tooltips | set | 2 | 97 | Production ready | no Dark preview |
| Badge | ➜ Banners & Badges | component | 1 | 97 | Production ready | no Dark preview |
| Section Header | ➜ Cards & Carousels | component | 1 | 97 | Production ready | no Dark preview |
| Shortcut Card | ➜ Cards & Carousels | component | 1 | 97 | Production ready | no Dark preview |
| Media Carousel | ➜ Cards & Carousels | component | 1 | 97 | Production ready | no Dark preview |
| Library Shortcut Tile | ➜ Cards & Carousels | set | 4 | 97 | Production ready | no Dark preview |
| Media Card | ➜ Cards & Carousels | set | 2 | 92 | Production ready | nested Explicit Badge not exposed; no Dark preview |
| Track Metadata | ➜ Lists | component | 1 | 97 | Production ready | no Dark preview |
| Playlist List Item | ➜ Lists | component | 1 | 97 | Production ready | no Dark preview |
| Podcast Episode Card | ➜ Lists | component | 1 | 97 | Production ready | no Dark preview |
| List Header | ➜ Lists | component | 1 | 94 | Production ready | 2 icon instances without swap; no Dark preview |
| Dialog | ➜ Dialogs & Sheets | set | 2 | 92 | Production ready | Button instances not exposed (labels fixed to "Button"); no Dark preview |
| Sheet | ➜ Dialogs & Sheets | set | 2 | 97 | Production ready | no Dark preview |
| Progress Indicator | ➜ Progress & Loading | component | 1 | 97 | Production ready | no Dark preview |
| Divider | ➜ Dividers | component | 1 | 97 | Production ready | no Dark preview |
| Icon/* (37) | ➜ Icons | components | 37 | 97 | Production ready | description format; Dark only in the Icon Library docs frame |

All rows: 0 raw values, 0 remote, 0 default names, 0 non-Auto-Layout frames, Purpose / Usage rules / Accessibility present. Contrast and touch targets were not measured here (accessibility term 100; Button 90 for the Neutral Disabled defect).

## Issues

| # | Component | Variant / layer | Problem | Suggested fix |
|---|---|---|---|---|
| 1 | Text Area | State=Hovered (x1408) | Variant sits outside the 1400 px set frame, which clips content: it is not visible | Resize the set or arrange the variants inside the frame |
| 2 | Icon Button | Style=Inverse, Pressed / Disabled / Hovered / Focused (y312) | 4 variants below the 304 px set height and clipped (cut-off row in the screenshot) | Resize the set frame to contain all variants |
| 3 | Button | Style=Neutral, State=Disabled | Container fill md/sys/color/on_surface at 100% opacity: solid black with an unreadable label (Icon Button Inverse Disabled uses 12%) | Container fill opacity 12% like the other Disabled variants |
| 4 | Button | Style=Neutral, Hovered and Pressed | Identical to Enabled (same fills, strokes, opacity): no hover or press feedback | Add the M3 state layer (8% / 10% on_surface) or another surface_container step |
| 5 | Media Card | Size=Default, Explicit Badge instance | Nested Badge has its own Label property but is not exposed (Show Badge boolean exists) | Mark the Badge instance as exposed |
| 6 | Dialog | Button instances (both Types) | Two nested Buttons not exposed: labels stay 'Button' and cannot be edited from the Dialog | Expose both Buttons or add TEXT properties for the action labels |
| 7 | Primary Tabs | 2nd Tab Item | Both tabs read 'MUSIC' in the main component | Set the second label (for example Podcasts) |
| 8 | Navigation Item | Selected=True | Only a label color change; no M3 active indicator, no Hovered/Focused/Pressed/Disabled states | Add the indicator and a State axis, or record the choice in decisions |
| 9 | Search Bar | single component | Input without Focused / Hovered state | Add a State axis (Enabled, Hovered, Focused) |
| 10 | ➜ Buttons & links | stray TEXT 'BUTTON' (9:204) | Loose layer on the page: raw #000000 fill, no text style, not part of the Button set | Delete it, or bind it to a text style and variable |
| 11 | ➜ Icons | section 9:220 | Section fill is raw #444444 and the black icons are barely visible on it | Bind to a surface variable or use a light fill |
| 12 | Status Bar, Checkbox, Playlist App Bar, List Header | icon instances | 12 icon instances have no INSTANCE_SWAP reference (system or fixed glyphs) | Accept for system icons; add swaps where the icon should vary |
| 13 | Icon/* (37) | description | Starts with 'Tier:' and has no 'Purpose:' / 'Usage rules:' | Rewrite to Purpose / Usage rules / Accessibility if icons must pass check 4 |
| 14 | Tooltip | Plain and Rich | Text pinned top-left with empty space; Rich has no title or actions | Center vertically; add title / action slots to Rich if intended |
| 15 | Library Shortcut Tile | 4 colors | All show 'Likes' and the same heart, so colors are the only difference | Informational; override on screens |

## Dark previews (Android Main Skill section 1)

Only Button has a Light and Dark preview frame (`Button - Light & Dark preview`, 9:205, frames bound to Semantic Light / Dark; it shows 3 styles in Enabled only). Missing for the other 35 components and sets: Status Bar, Text Field, Text Area, Checkbox, Switch, Radio, Search Bar, Icon Button, Filter Chip, Tab Item, Navigation Item, Primary Tabs, Bottom Navigation, Top App Bar, Playlist App Bar, Mini Player, Playback Progress, Playback Controls, Player Utility Bar, Artwork, Avatar, Tooltip, Badge, Section Header, Shortcut Card, Media Carousel, Library Shortcut Tile, Media Card, Track Metadata, Playlist List Item, Podcast Episode Card, List Header, Dialog, Sheet, Progress Indicator, Divider. Icons have Light and Dark frames in the Icon Library docs section.

## Screenshots

`My Projects/Music_App_Android/audits/components/`: `light-<component>.png` for all 36 components, `buttons-light-dark-preview.png`, `icons-section.png`. Light only: no Dark counterparts exist to capture.