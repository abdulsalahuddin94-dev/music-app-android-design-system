---
name: music-app-android-foundation
description: Use before building, extending, auditing or coding anything in the Music App Android design system (Figma file "Brownfield DS"). Defines the variables (Primitives, Semantic Light/Dark, Spacing, Shape, Typography, Size), the 20 text styles and 6 elevation styles, the Material Symbols icon set, the ⭐Setup pages, the App Icon page, the category colors, the Status Bar and the rule that the source app wins over Material 3. Android only, Material Design 3 names (md.sys). Load it with the Component_Skills of this project.
---

# Music App (Android) - Foundation

> **Node IDs:** ids belong to the Figma file they were read from. Find components, styles and variables by **name**, never by id from this folder.

> **Data files (source of truth for values):** `../data/tokens.json` (every variable, mode, alias and shade scale), `../data/component-registry.json`, `../data/rules.json`, `../data/screen-templates.json`, `../docs/decisions.md`. When a number here and the JSON differ, the JSON wins. Colors change only through `tools/recolor.py`, never by editing components.

Product: a dark-first music and podcast player. Neon lime brand (`#D7FF00`), condensed bold titles, artwork-led cards, colorful genre tiles. Light mode exists and mirrors the Dark layout exactly.
Platform: Android, compact window 375 dp wide, Material Design 3 token names (`md/sys`, `md/ref`), dp / sp.
Figma: DS library `Brownfield DS`; screens live in `Brownfield Design` (page `Listen`). Tool: FigCli Yolo (`FIGMA_FILE="Brownfield DS"`).
Origin: Brownfield, Scenario C. The DS already existed (earlier trial built from screenshots); it was audited, fixed on create and extended. Decisions: `../docs/decisions.md` (DR-001 to DR-003).

Reference files: `references/variables.md` (every variable, generated), `references/gaps.md` (open items), `references/screens/` (Light and Dark pictures of each ⭐Setup page and the utilities preview).
Component skills: `../Component_Skills/Form_Elements_Skill`, `../Component_Skills/Navigation_Skill`, `../Component_Skills/Data_Display_Skill`.

---

## 1. The rule that decides conflicts: source over Material 3 (Abdul, 2026-10-13)

In this project the source app (the screenshots and the live app) wins over Material 3. Where the source differs from the M3 guideline, match the source: icon sizes, control heights, spacing, colors, shapes. M3 is the default only where the source does not show the answer. Accessibility floors stay (48 dp hit area, contrast); they are kept through the hit area or a nearby token, never by changing what the source shows. A gap between the source and the DS is fixed in the DS (a variant, a property, an override) so screens still use DS instances. Root rule: `memory/decisions.md` > "Reference fidelity over platform rules".

Sizes this rule set (Brownfield DS, round 3, 2026-10-13):

| Component | Source size | M3 default it replaced | Notes |
|---|---|---|---|
| Search Bar | 42 dp tall | 56 | Hit area stays 48 dp through the row |
| Bottom Navigation | 58 dp (items 52) | 80 | No active-indicator pill; selected item marked by color |
| Mini Player | 56 dp tall, 351 wide, 12 dp inset | 64 | Sits 4 dp above Bottom Navigation |
| Shortcut Card | 56 dp tall | 72 | |
| Podcast Episode Card | 186 dp tall, `outline_variant` border | taller, no border | |
| Switch | track 44 x 24, thumb 18 | 52 x 32, thumb 24 | Component stays 48 dp tall as the hit area |
| Playback Controls Play | 64 x 64 round, Inverse Icon Button | 48 | |
| Mini Player Play | 40 x 40 round | 48 | |
| Playlist App Bar Collapse | 40 dp Icon Button | 48 | |
| Genre Card | 80 dp tall, artwork 56 x 80 | - | New component, from the source |

Consequence for Size tokens: `md/sys/size/*` exist (section 2.6) but are bound only to components that are never resized as instances. Button and Icon Button heights are not bound, because a bound height overrides every resized instance (Play button turned into a pill; lesson 2026-10-13). Icon Button: the icon fills the container minus its padding. Resize the instance and set its padding (spacing/8 for Play 64, spacing/4 for Mini Player Play 40) to size the glyph.

---

## 2. Variables

Six collections, 255 variables, 0 remote. Names exactly as in Figma, code syntax `ANDROID` = the name with `/` replaced by `_` (`md/sys/color/primary` -> `md_sys_color_primary`). Full tables: `references/variables.md`.

| Collection | Modes | Count | Scopes | Role |
|---|---|---|---|---|
| Primitives | Value | 99 | none (hidden from pickers) | 9 palettes x 11 tones |
| Semantic | Light, Dark | 50 | by role (FRAME/SHAPE/STROKE or TEXT_FILL), never ALL_SCOPES | Color roles; alias Primitives only |
| Spacing | Value | 11 | GAP | Padding and gap |
| Shape | Value | 7 | CORNER_RADIUS | Corner radius |
| Typography | Value | 77 | FONT_SIZE, LINE_HEIGHT, LETTER_SPACING, FONT_WEIGHT, FONT_FAMILY | Type scale parts |
| Size | Value | 11 | WIDTH_HEIGHT | Control, field, list and icon sizes |

### 2.1 Primitives (`md/ref/palette/<family>/<tone>`)

Tones 0, 10, 20, 30, 40, 50, 60, 70, 80, 95, 100 (there is no 90). Nine families: `neutral`, `primary` (the lime), `error`, `purple`, `cyan`, `magenta`, `yellow`, `blue`, `green`. Key tones:

| Family | 10 | 30 | 40 | 80 | 95 |
|---|---|---|---|---|---|
| neutral | `#101010` | `#202020` | `#303030` | `#A8AAAD` | `#F5F5F5` |
| primary | `#232900` | `#535C00` | `#6B7400` | `#D7FF00` | `#F4FFD9` |
| error | `#450A0A` | `#991B1B` | `#B91C1C` | `#FECACA` | `#FEF2F2` |
| purple | `#2E1065` | `#5B21B6` | `#6D28D9` | `#C4B5FD` | `#F5F3FF` |
| cyan | `#083344` | `#155E75` | `#0E7490` | `#67E8F9` | `#ECFEFF` |
| magenta | `#500724` | `#9D174D` | `#BE185D` | `#F9A8D4` | `#FDF2F8` |
| yellow | `#451A03` | `#92400E` | `#B45309` | `#FDE68A` | `#FFFBEB` |
| blue | `#1F2167` | `#3043AD` | `#3651D6` | `#B0D4FF` | `#F6F9FF` |
| green | `#00391F` | `#136834` | `#15803D` | `#A4EB73` | `#F0FFF2` |

Palettes are hand-picked (not HCT-generated); tone steps are uneven. Blue and green were added 2026-10-13 for Genre Card (curve of the cyan ramp, key tones from the source tiles). Brand neon = `primary/80`. Recolor: `tools/recolor.py` regenerates a full ramp and rechecks contrast; `tokens.json > recolor_readiness.ready` is `true` (0 raw values in Semantic, 0 unresolved aliases).

### 2.2 Semantic color (`md/sys/color/<role>`, modes Light / Dark)

Brand roles (Light / Dark resolved):

| Role | Light | Dark | Use |
|---|---|---|---|
| `primary` | `primary/30` `#535C00` | `primary/80` `#D7FF00` | Brand action, selected state, Play. Neon only in Dark |
| `on_primary` | `neutral/100` | `neutral/10` | Content on primary |
| `primary_container` / `on_primary_container` | `primary/95` / `primary/10` | `primary/30` / `primary/95` | Tonal fills |
| `secondary` | `neutral/30` | `neutral/80` | Neutral emphasis |
| `secondary_container` / `on_secondary_container` | `neutral/95` / `neutral/10` | `neutral/30` / `neutral/95` | Neutral pills (Neutral Button, chips) |
| `tertiary`, `on_tertiary` | `purple/40`, `neutral/100` | `purple/80`, `purple/10` | Featured discovery (Outlined Accent Button, Info) |
| `tertiary_container` / `on_tertiary_container` | `purple/95` / `purple/10` | `purple/30` / `purple/95` | |
| `error`, `on_error`, `error_container`, `on_error_container` | `error/40`, `neutral/100`, `error/95`, `error/10` | `error/80`, `error/10`, `error/30`, `error/95` | Errors |
| `warning`, `success`, `info` (+ `on_`, `_container`, `on_*_container`) | `yellow/40`, `cyan/40`, `purple/40` | `yellow/80`, `cyan/80`, `purple/80` | Status roles. Success is cyan, not green |

Surfaces and lines:

| Role | Light | Dark |
|---|---|---|
| `surface` | `neutral/100` `#FFFFFF` | `neutral/10` `#101010` |
| `on_surface` | `neutral/10` | `neutral/100` |
| `on_surface_variant` | `neutral/30` | `neutral/80` |
| `surface_container_lowest` | `neutral/100` | `neutral/0` |
| `surface_container_low` | `neutral/95` | `neutral/10` |
| `surface_container` | `neutral/95` | `neutral/20` |
| `surface_container_high` | `neutral/95` | `neutral/30` |
| `surface_container_highest` | `neutral/80` | `neutral/40` |
| `outline` | `neutral/50` | `neutral/60` |
| `outline_variant` | `neutral/80` | `neutral/30` |
| `inverse_surface` / `inverse_on_surface` | `neutral/20` / `neutral/95` | `neutral/95` / `neutral/20` |
| `inverse_primary` | `primary/80` | `primary/40` |
| `scrim`, `shadow` | `neutral/0` | `neutral/0` |

Not in the file: `background` / `on_background` (use `surface` / `on_surface`), `surface_variant` (removed, DR-001), the `danger` family (removed, DR-001: use `error`), `surface_dim` / `surface_bright`, state-layer tokens (not approved; see section 5).

Scopes: container and surface roles `FRAME_FILL, SHAPE_FILL, STROKE_COLOR`; `on_*` roles `TEXT_FILL`; `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info`, `inverse_primary`, `category_*` all four (`FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR`); `outline`, `outline_variant` `TEXT_FILL, STROKE_COLOR`.

### 2.3 Category colors (Library Shortcut Tile, Genre Card)

`md/sys/color/category_<name>`: `cyan`, `magenta`, `yellow`, `blue`, `green`, `red`, `purple`. Each Light = tone 40, Dark = tone 80 of its family (`red` uses the `error` ramp). Text and icons on a category color use `on_primary` (white in Light, `#101010` in Dark).

| Category | Light (tone 40) | Dark (tone 80) | on_primary contrast Light / Dark |
|---|---|---|---|
| cyan | `#0E7490` | `#67E8F9` | 5.36 / 13.13 |
| magenta | `#BE185D` | `#F9A8D4` | 6.04 / 10.49 |
| yellow | `#B45309` | `#FDE68A` | 5.02 / 15.28 |
| blue | `#3651D6` | `#B0D4FF` | 6.35 / 12.42 |
| green | `#15803D` | `#A4EB73` | 5.02 / 13.33 |
| red | `#B91C1C` | `#FECACA` | 6.47 / 13.15 |
| purple | `#6D28D9` | `#C4B5FD` | 7.10 / 10.31 |

**Dark tone decision (Abdul, DR-003):** the source app shows saturated mid-tone tiles in Dark. The DS keeps the M3 Dark tone 80 (pastel) with dark text, because the saturated set would need a separate token layer and fails the one-token-two-modes recolor rule. Light matches the source closely. This is the one place where the source did not win; it is recorded as an open difference in `references/gaps.md`.

### 2.4 Spacing (`md/sys/spacing/<n>`, scope GAP)

0, 4, 8, 12, 16, 20, 24, 32, 48, 56, 64 dp. Screens use a 16 dp gutter (`spacing/16`). Bind padding and gap to these; no raw numbers.

### 2.5 Shape (`md/sys/shape/corner/<name>`, scope CORNER_RADIUS)

`none` 0, `extra_small` 4, `small` 8, `medium` 12, `large` 16, `extra_large` 28, `full` 999. Genre Card uses `extra_small`; Switch, Play and pills use `full`. Read each component's bound radius in Figma before changing it. No role aliases (`radius/role/*`) and no `*_increased` steps exist.

### 2.6 Size (`md/sys/size/<name>`, scope WIDTH_HEIGHT, DR-002)

`control/xsmall` 32, `control/small` 40, `control/medium` 56, `control/large` 96, `control/xlarge` 136, `text_field` 56, `list_item/one_line` 56, `list_item/two_line` 72, `list_item/three_line` 88, `touch_target` 48, `icon` 24. Bound on 101 component variants in the Components phase; unbound again where an instance is resized or the source size wins (section 1). Before binding a Size token, list every instance whose size differs from its main component; any such instance means do not bind.

### 2.7 Typography variables (`md/sys/typescale/<role>/<prop>`)

15 roles (display, headline, title, body, label x large / medium / small) with `size`, `line_height`, `tracking`, `weight`, `font`, plus `emphasized/weight` = 700 and `emphasized/condensed_font` = Roboto Condensed. Font family Roboto (Latin; Arabic song titles fall back to the system Arabic face, no Arabic font variable). Scale is the standard M3 scale: display 57 / 45 / 36, headline 32 / 28 / 24, title 22 / 16 / 14, body 16 / 14 / 12, label 14 / 12 / 11.

---

## 3. Styles

### 3.1 Text styles (20), all bound to the Typography variables

Name `M3/<role>_<size>`; every style binds fontFamily, fontSize, lineHeight, letterSpacing and fontWeight. 0 raw text in components or screens.

| Group | Styles |
|---|---|
| Display | `M3/display_large` 57/64, `display_medium` 45/52, `display_small` 36/44 (Roboto Regular) |
| Headline | `M3/headline_large` 32/40, `headline_medium` 28/36, `headline_small` 24/32 (Roboto Regular) |
| Title | `M3/title_large` 22/28 Regular, `title_medium` 16/24 Medium, `title_small` 14/20 Medium |
| Body | `M3/body_large` 16/24, `body_medium` 14/20, `body_small` 12/16 (Roboto Regular) |
| Label | `M3/label_large` 14/20, `label_medium` 12/16, `label_small` 11/16 (Roboto Medium) |
| Emphasized | `M3/title_large_emphasized` 22/28, `title_medium_emphasized` 16/24, `title_small_emphasized` 14/20, `label_medium_emphasized` 12/16 (Roboto Bold); `M3/headline_small_emphasized` 24/32 (**Roboto Condensed Bold**) |

`M3/label_medium_emphasized` was added 2026-10-13 for the Playlist App Bar Source Label and AI Mix label (12 px bold). The condensed bold face carries the product look: screen titles (Top App Bar), Primary Tabs, Genre Card labels, lyric lines and rail titles all use `M3/headline_small_emphasized`. Use caps for screen titles (`EXPLORE`, `SEARCH & DISCOVER`) and genre labels.

### 3.2 Effect styles (6)

`M3/Elevation/0` (flat), `M3/Elevation/1` to `M3/Elevation/5` (drop shadow, color bound to `md/sys/color/shadow`): blur 2 / 6 / 8 / 10 / 12, y offset 1 / 2 / 4 / 6 / 8. Dark surfaces show little shadow; separate with `outline_variant` or a container step instead. Offsets and blur are plain numbers (no elevation variables).

### 3.3 Grids and paint styles

None. Use the window rule: Compact 4 columns, margin 16, gutter 16. Only Compact (375 dp) screens exist.

---

## 4. Icons (➜ Icons)

- Set: **existing** icon set of the file, recorded in `status.json > icons` (source `Brownfield DS` > ➜ Icons, Material Symbols names, 24 dp, one style, weight 400). 38 components named `Icon/<material_symbols_name>`.
- Names: `add`, `album`, `arrow_back`, `arrow_drop_down`, `auto_awesome`, `battery_full`, `bookmark`, `check`, `cloud_done`, `cloud_download`, `download`, `expand_more`, `explore`, `favorite`, `favorite_outline`, `graphic_eq`, `groups`, `help`, `history`, `library_music`, `lyrics`, `mic`, `more_vert`, `notifications`, `pause`, `play_arrow`, `podcasts`, `queue_music`, `radar`, `search`, `settings`, `share`, `signal_cellular_alt`, `skip_next`, `skip_previous`, `sort`, `upload`, `wifi`.
- Add a glyph as a new `Icon/<snake_case_name>` component in ➜ Icons (24 dp, vector fill bound to `on_surface`); never draw an icon inside a component.
- Always use an Icon instance with an INSTANCE_SWAP property (Button `Leading Icon`, Icon Button `Icon`, Navigation Item `Icon`, Search Bar `Icon search` / `Icon mic`). 12 icon instances are fixed system or control glyphs without a swap property (Status Bar 3, Checkbox 6, Playlist App Bar 1, List Header 2).
- Color: the icon takes its color from the parent component with an `on_*` role (`on_surface`, `on_surface_variant`, `on_primary`, `inverse_on_surface`); never a raw color.
- Sizes: 24 default, 18 inside Button, 16 for the Track Metadata downloaded icon. In an Icon Button the glyph fills the container minus its padding (section 1).
- Glyph choices from the source: Audio = `settings` (not `graphic_eq`), Like = `favorite` / `favorite_outline`, Collapse = `expand_more`, Radar = `radar`, AI Mix sparkle = `auto_awesome`, downloaded = `cloud_done`, Download = `download`.
- Boards: ➜ Icons shows the grid on a Light and a Dark board with name labels.

---

## 5. Build and usage rules

1. Colors: Semantic roles only, never Primitives, in components and screens. Light and Dark share one layout.
2. States: whole-variant opacity (disabled content 38%, container 12% of `on_surface`) is the file convention. No M3 state-layer variables exist (not approved); do not invent them. Pressed / Hovered / Focused are separate variants.
3. Touch target 48 x 48 dp for every interactive element; a smaller visual size keeps the 48 dp hit area (Search Bar 42 sits in a 48 dp row).
4. Contrast: text 4.5:1, large text and UI boundaries 3:1. Foundation audit: 24 of 24 pairs pass in Light and Dark (`audits/2026-10-13-foundation-audit.md`). Category pairs in section 2.3 pass.
5. Atomic order: Primitives, Semantics, Spacing / Shape / Size / Typography, styles, icons, Atoms, Molecules, Organisms, screens. Never build an Organism before its Molecules.
6. No component-specific tokens and no raw values. Token names are checked with `node tools/lint_token_names.cjs "My Projects/Music_App_Android"` (0 errors; 9 warnings listed in `references/gaps.md`).
7. New or changed tokens, properties and removals get a decision record in `../docs/decisions.md`.
8. Screen frames: Mobile 375 x 812 (kept sizes: Explore Full 375 x 1725 and viewports 375 x 813 stay as built). The Semantic mode is pinned on every screen frame (`Listen / <Screen> / Dark`, `... / Light`), not on the section.

---

## 6. File structure (Brownfield DS, page order)

| Page | Content |
|---|---|
| Cover | Cover |
| ⭐Setup | Foundation Overview (linked, Light and Dark) |
| ➜ Color | Primitives board and Semantic swatches, Light and Dark, bound to variables |
| ➜ Typography | The 20 text styles at real size with name and size |
| ➜ Shape | Corner scale |
| ➜ Spacing | Spacing and Size scales (Light board only) |
| ➜ Elevation | Elevation 0 to 5, Light and Dark |
| ➜ Icons | The 38 `Icon/*` components on Light and Dark boards |
| ➜ App Icon | Standard App Icon page, drop zones (section 7) |
| ➜ Utilities | Status Bar and other utilities |
| ⭐Form Elements | ➜ Input Fields and Dropdown, ➜ Text Area, ➜ Checkbox, ➜ Toggles, ➜ Radio Buttons, ➜ Search |
| ⭐Navigation | ➜ Buttons & links, ➜ Pagination & Tabs, ➜ App Bar, ➜ Player Controls |
| ⭐Data display | ➜ Avatars & upload image, ➜ Tooltips, ➜ Banners & Badges, ➜ Cards & Carousels, ➜ Lists, ➜ Lyrics, ➜ Dialogs & Sheets, ➜ Progress & Loading, ➜ Dividers |

Every docs page has a Light board (Semantic pinned to Light) and a Dark board (pinned to Dark) so swatches and samples show the matching mode. Search Bar lives on ⭐Form Elements > ➜ Search; Status Bar on ⭐Setup > ➜ Utilities. 22 pages were renamed to this convention in the Scenario C fix on create.

---

## 7. App Icon (➜ App Icon)

Status: **waiting** (`status.json > app_icon`). The page exists with labeled drop zones and the Android guidelines; no icon has been supplied yet. When the user drops an icon, check it and present it the Android standard way (rules: Intake section 7h, `tools/app_icon_specs.json`):

- Adaptive icon: 108 x 108 dp canvas, 66 x 66 dp safe zone, three layers: Foreground, Background, Monochrome (themed icon).
- Masks (circle, squircle, rounded square, teardrop), themed-icon preview, Play Store icon 512 x 512.
- Previews are instances of an `App Icon` component; each size frame exports its file; the docs list where each file goes in code (`mipmap-anydpi-v26/ic_launcher.xml`, `drawable/ic_launcher_foreground`, `ic_launcher_monochrome`, Play Console 512 px).
- Known layout fix: the Play Store drop zone touches the board edge (about 15 px of right padding).
Do not invent an icon. Brand color for the background layer is `primary/80` `#D7FF00` with a dark glyph.

---

## 8. Status Bar (➜ Utilities)

Component `Status Bar` (Atom, 375 x 32, property `Time` TEXT). System chrome for mockups: time, Wi-Fi, signal, battery (decorative, not interactive; the only Atom in group "Setup"). Use it as the first full-bleed row of every 375 dp screen, above the Top App Bar or the first section; Do not stretch it or put actions in it. Screens use the real time shown in the source (`4:59`, `5:00`, `12:00`, `11:58`). Light and Dark follow the screen mode. Docs block: `../data/component-registry.json` (entry `Status Bar`).

---

## 9. Direction decisions from the intake

- Modes: Light and Dark (taken from the file). Dark is the design reference; the brand neon appears only in Dark.
- Arabic: content only (Arabic song and artist titles, lyrics right-aligned through Lyrics Line Align = End). The UI layout stays left to right; no RTL layout.
- Fonts: Roboto + Roboto Condensed Bold.
- Icons: existing set (section 4).
- Storybook: Yes, after components, published on GitHub Pages (not built yet).
- Screens skipped as "example screens" (Brownfield); the Listen flow was rebuilt from the DS: Explore, Search & Discover, Library - Music, Library - Podcasts, Now Playing, Lyrics (6 screens, 16 frames). Specs: `../data/screen-templates.json`.
