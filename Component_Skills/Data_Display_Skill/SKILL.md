---
name: music-app-android-data-display
description: Use when building, auditing or coding anything that displays information in the Music App Android design system (Figma file "Brownfield DS"): artwork, avatars, badges, tooltips, section and list headers, cards and carousels, genre tiles, track and playlist rows, podcast episodes, lyrics, dialogs, sheets, progress and dividers. Covers only the ⭐Data display group.
---

# Music App (Android) - Data Display

> **Node IDs:** ids belong to the Figma file they were read from. Find components by **name** (`figma.root.findAll(n => n.name === 'Button')`), never by an id from this folder.

> **Data files (source of truth):** `../../data/component-registry.json` (variants, properties, docs per component), `../../data/tokens.json`, `../../data/rules.json`, `../../data/screen-templates.json`, `../../docs/decisions.md`. When this file and the JSON differ, the JSON wins.

**Load `../../Foundation_Skill/SKILL.md` first** (variables, text styles, icons, and the rule that the source app wins over Material 3).

Scope: **⭐Data display** pages: ➜ Avatars & upload image, ➜ Tooltips, ➜ Banners & Badges, ➜ Cards & Carousels, ➜ Lists, ➜ Lyrics, ➜ Dialogs & Sheets, ➜ Progress & Loading, ➜ Dividers. Platform Android, Material 3 names, compact 375 dp. File: Brownfield DS. References: `references/components.md` (generated usage lines plus spec notes), `references/gaps.md`, `references/screens/` (Light and Dark preview boards of each page).

Dependencies: Artwork, Avatar, Badge, Progress Indicator, Divider and Lyrics Line are Atoms; Track Metadata, cards, headers and Tooltip are Molecules; Media Carousel, Podcast Episode Card, Dialog and Sheet are Organisms. Cards nest Artwork and Track Metadata; Section Header and List Header nest Button.

## 1. Inventory

| Component | Tier | Page | Variants | Properties | Nests |
|---|---|---|---|---|---|
| Artwork | Atom | ➜ Avatars & upload image | 1 | - | - |
| Avatar | Atom | ➜ Avatars & upload image | 1 | - | - |
| Tooltip | Molecule | ➜ Tooltips | Type (2) | Text | - |
| Badge | Atom | ➜ Banners & Badges | Type (2) | Label | - |
| Section Header | Molecule | ➜ Cards & Carousels | 1 | Title, Show More, Show Supporting Text, Supporting Text | Button |
| Shortcut Card | Molecule | ➜ Cards & Carousels | 1 | Label, Artwork | Artwork |
| Media Carousel | Organism | ➜ Cards & Carousels | 1 | First Card, Second Card, Third Card | Media Card, Artwork, Track Metadata, Badge |
| Library Shortcut Tile | Molecule | ➜ Cards & Carousels | Color (4) | Label, Icon | - |
| Media Card | Molecule | ➜ Cards & Carousels | Size (2) | Artwork, Show Badge, Description | Artwork, Track Metadata, Badge |
| Track Metadata | Molecule | ➜ Lists | 1 | Title, Subtitle, Show Subtitle Icon, Subtitle Icon | - |
| Playlist List Item | Molecule | ➜ Lists | 1 | Artwork, Track Metadata, Show More | Artwork, Track Metadata, Icon Button |
| Podcast Episode Card | Organism | ➜ Lists | 1 | Description, Artwork, Track Metadata, Progress Indicator, Time Left, Show Download | Artwork, Track Metadata, Progress Indicator, Icon Button |
| List Header | Molecule | ➜ Lists | 1 | Title, Show Action | Button |
| Dialog | Organism | ➜ Dialogs & Sheets | Type (2) | Title | Button |
| Sheet | Organism | ➜ Dialogs & Sheets | Position (2) | Title | - |
| Progress Indicator | Atom | ➜ Progress & Loading | Value (7) | - | - |
| Divider | Atom | ➜ Dividers | 1 | - | - |
| Lyrics Line | Atom | ➜ Lyrics | State (3) x Align (2) | Line | - |
| Lyrics Header | Molecule | ➜ Lyrics | 1 | - | Artwork, Track Metadata, Icon Button |
| Genre Card | Molecule | ➜ Cards & Carousels | Color (7) | Label | Artwork |

## 2. Rules for this group

1. Content rails: Section Header + Media Carousel of Media Cards. Sortable lists: List Header + Playlist List Item. Podcast episodes: Podcast Episode Card. Shortcut grids: Shortcut Card (with artwork), Library Shortcut Tile (icon), Genre Card (browse).
2. Every card is one touch target; its title is the accessible name.
3. Card titles use Track Metadata, never loose text; all text comes from a text style.
4. Genre and category colors are Semantic `category_*` tokens (Light tone 40, Dark tone 80) and neighbours differ.
5. Explicit content is Badge Type = Explicit, never a red `error` pill.
6. Arabic song and lyric text keeps its own right-to-left alignment (Lyrics Line Align = End); the UI stays left to right.
7. Blocking decisions use Dialog; supplemental tasks (queue, track menu) use Sheet.

## 3. Choose the component

| Need | Use | Not for |
|---|---|---|
| Inside cards, list items and players | Artwork | People (use Avatar) |
| Profile entry in Top App Bar | Avatar | Album or playlist covers (use Artwork) |
| Explaining an icon-only control | Tooltip | Essential instructions or errors (show them on screen) |
| Type Plan: plan label (plus) on the profile avatar | Badge | Long text or actions |
| Above every horizontal rail on Explore | Section Header | Above sortable lists (use List Header) |
| Two-column shortcut grid at the top of Explore | Shortcut Card | Category tiles without artwork (use Library Shortcut Tile) |
| Explore rails such as Your new music and For You | Media Carousel | Vertical lists (use Playlist List Item) |
| 3 or 4 equal-width tiles in a row at the top of the Library | Library Shortcut Tile | Media with artwork (use Shortcut Card) |
| Size Default for songs, albums and artists | Media Card | Vertical lists (use Playlist List Item) |
| Inside Mini Player, Media Card and list items | Track Metadata | Section titles (use Section Header) |
| Library lists of playlists, albums and artists | Playlist List Item | Podcast episodes (use Podcast Episode Card) |
| Continue playing and episode lists in Podcasts | Podcast Episode Card | Music playlists (use Playlist List Item) |
| Above Playlists in the Library, with New playlist | List Header | Above content rails (use Section Header) |
| Basic for confirmations | Dialog | Non-blocking messages |
| Bottom on phones for menus and details | Sheet | Blocking confirmations (use Dialog) |
| Episode progress | Progress Indicator | Seeking on its own (use Playback Progress) |
| Between groups that spacing alone does not separate | Divider | Between every list row (use spacing) |
| Lyrics screen, one instance per line | Lyrics Line | Body text or descriptions (use the text styles) |
| Top of the Lyrics screen, under the collapse button | Lyrics Header | Now Playing (artwork is large there) |
| Search & Discover grids (Popular, Moods & Genres), two per row | Genre Card | Library shortcuts with an icon (use Library Shortcut Tile) |

## 4. Components

### Atoms

#### Artwork

Square cover image for a song, album, playlist or podcast.

- Spec: Atom, page ➜ Avatars & upload image, single component, 160 x 160 dp
- Nests: nothing
- Note: 160 x 160 default; resize the instance (288 on Now Playing, 80 in Lyrics Header). Set the image fill per instance.
- Use for: Inside cards, list items and players
- Do not use for: People (use Avatar)
- Accessibility: Decorative when the title is next to it; otherwise give alt text with the title

#### Avatar

Round picture of the signed-in user or an artist.

- Spec: Atom, page ➜ Avatars & upload image, single component, 40 x 40 dp
- Nests: nothing
- Note: 40 x 40; the Plan Badge sits on it in the Top App Bar.
- Use for: Profile entry in Top App Bar; Artist rows
- Do not use for: Album or playlist covers (use Artwork)
- Accessibility: Accessible name is the person name or Profile; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Badge

Small label on artwork or an avatar: Plan shows the subscription plan, Explicit marks explicit content.

- Spec: Atom, page ➜ Banners & Badges, component set, 2 variants
- Variants: Type = Plan / Explicit (default Type=Plan)
- Properties: Label (TEXT, default "E")
- Nests: nothing
- Note: Type Plan: plan label on the avatar. Type Explicit: small square "E" on `surface_container_highest` with `on_surface` text and `corner/extra_small` (never the `error` red).
- Use for: Type Plan: plan label (plus) on the profile avatar; Type Explicit: the "E" marker on explicit songs and albums
- Do not use for: Long text or actions
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Include the meaning in the parent accessible name (Explicit)

#### Progress Indicator

Linear bar showing determinate progress, such as the listened part of an episode.

- Spec: Atom, page ➜ Progress & Loading, component set, 7 variants
- Variants: Value = 2 / 10 / 25 / 40 / 50 / 75 / 100 (default Value=2)
- Nests: nothing
- Note: Value variants 2, 10, 25, 40, 50, 75, 100; the active track scales with the instance width. Use the nearest variant; screens use 2, 10 and 40.
- Use for: Episode progress; Inside Playback Progress
- Do not use for: Seeking on its own (use Playback Progress)
- Behavior: Value sets the active track as a percent; the active track scales with the instance width
- Accessibility: Active track: 3:1 (WCAG 1.4.11) in Light, Dark; Announce the value as a percentage or time

#### Divider

Thin line that separates groups of content.

- Spec: Atom, page ➜ Dividers, single component, 320 x 1 dp
- Nests: nothing
- Use for: Between groups that spacing alone does not separate
- Do not use for: Between every list row (use spacing)
- Accessibility: Decorative; hidden from screen readers

#### Lyrics Line

One line of synced lyrics; State shows where playback is.

- Spec: Atom, page ➜ Lyrics, component set, 6 variants
- Variants: State = Past / Current / Upcoming; Align = Start / End (default State=Past, Align=Start)
- Properties: Line (TEXT, default "كانت أكبر كذبه عشته")
- Nests: nothing
- Note: Text style `M3/headline_small_emphasized`. Colors: Current `on_surface`; Past and Upcoming `outline` (dimmed). No top or bottom fade on the lyric list yet (open difference).
- Use for: Lyrics screen, one instance per line; Align End for right-to-left lines (Arabic), Start for left-to-right
- Do not use for: Body text or descriptions (use the text styles)
- Behavior: Current is on_surface; Past and Upcoming are outline (dimmed)
- Accessibility: Current line: 4.5:1 (WCAG 1.4.3) in Light, Dark; Past and Upcoming lines are dimmed on purpose; the screen reader reads every line; Respect the system font size; lines wrap

### Molecules

#### Tooltip

Short help text on long press or focus; Rich adds a title and longer text.

- Spec: Molecule, page ➜ Tooltips, component set, 2 variants
- Variants: Type = Plain / Rich (default Type=Plain)
- Properties: Text (TEXT, default "Tooltip label")
- Nests: nothing
- Note: Rich has no title or actions yet (open gap).
- Anatomy: Container; Text
- Use for: Explaining an icon-only control
- Do not use for: Essential instructions or errors (show them on screen)
- Accessibility: Text: 4.5:1 (WCAG 1.4.3) in Light, Dark; Also reachable by keyboard focus

#### Section Header

Title of a content rail with optional supporting text and a More button.

- Spec: Molecule, page ➜ Cards & Carousels, single component, 340 x 36 dp
- Properties: Title (TEXT, default "Your new music"); Show More (BOOLEAN, default on); Show Supporting Text (BOOLEAN, default off); Supporting Text (TEXT, default "Discover music based on your recent activity")
- Nests: Button
- Note: 340 x 36. Show More turns the Neutral Button on; Show Supporting Text adds the second line.
- Anatomy: Title; Supporting text (optional); More (Button, Neutral)
- Use for: Above every horizontal rail on Explore
- Do not use for: Above sortable lists (use List Header)
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Title is a heading for screen readers; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Shortcut Card

Compact card with artwork and label for quick access, such as Music Mix or Recently Played.

- Spec: Molecule, page ➜ Cards & Carousels, single component, 164 x 56 dp
- Properties: Label (TEXT, default "Music Mix"); Artwork (INSTANCE_SWAP, default Artwork)
- Nests: Artwork
- Note: Source size 56 dp tall (M3 72); default 164 x 56, instances fill a two-column grid.
- Anatomy: Container; Artwork; Label
- Use for: Two-column shortcut grid at the top of Explore
- Do not use for: Category tiles without artwork (use Library Shortcut Tile)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; The whole card is one target; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Library Shortcut Tile

Category tile with a colored icon and label, such as Likes, Downloads or Saved.

- Spec: Molecule, page ➜ Cards & Carousels, component set, 4 variants
- Variants: Color = Purple / Cyan / Magenta / Yellow (default Color=Purple)
- Properties: Label (TEXT, default "Likes"); Icon (INSTANCE_SWAP, default Icon/favorite)
- Nests: nothing
- Note: Color = Purple, Cyan, Magenta, Yellow. All variants share the default label (Likes) and icon (favorite); every instance sets its own Label and Icon.
- Note: 80 x 80 minimum; widens to fill a row of 3 (109) or 4 (80).
- Anatomy: Container; Icon (Color picks the accent); Label
- Use for: 3 or 4 equal-width tiles in a row at the top of the Library
- Do not use for: Media with artwork (use Shortcut Card)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Icon: 3:1 (WCAG 1.4.11) in Light, Dark; Whole tile is the target, at least 80 x 80 dp; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Media Card

One item in a media rail: artwork with title and subtitle, or a mix with a description.

- Spec: Molecule, page ➜ Cards & Carousels, component set, 2 variants
- Variants: Size = Default / Large (default Size=Default)
- Properties: Artwork (INSTANCE_SWAP, default Artwork); Show Badge (BOOLEAN, default off); Description (TEXT, default "Your next favorite songs are in here")
- Nests: Artwork, Track Metadata, Badge
- Note: Description is used only by Size = Large (Default shows Track Metadata). This is by design.
- Anatomy: Artwork; Badge (optional); Track Metadata or Description
- Use for: Size Default for songs, albums and artists; Size Large for mixes such as Your Weekly Mixtape
- Do not use for: Vertical lists (use Playlist List Item)
- Accessibility: Title and subtitle: 4.5:1 (WCAG 1.4.3) in Light, Dark; The card is one target; title is its accessible name; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Track Metadata

Title and subtitle of a track or playlist, with an optional downloaded icon.

- Spec: Molecule, page ➜ Lists, single component, 220 x 44 dp
- Properties: Title (TEXT, default "Track title"); Subtitle (TEXT, default "Artist · Album"); Show Subtitle Icon (BOOLEAN, default off); Subtitle Icon (INSTANCE_SWAP, default Icon/cloud_done)
- Nests: nothing
- Note: The subtitle icon defaults to `cloud_done` (downloaded) and is off by default.
- Anatomy: Title; Subtitle icon (optional, 16 dp); Subtitle
- Use for: Inside Mini Player, Media Card and list items
- Do not use for: Section titles (use Section Header)
- Accessibility: Title and subtitle: 4.5:1 (WCAG 1.4.3) in Light, Dark; Truncated text stays fully readable by the screen reader

#### Playlist List Item

Row for a playlist, album or artist with artwork, metadata and a More action.

- Spec: Molecule, page ➜ Lists, single component, 360 x 72 dp
- Properties: Artwork (INSTANCE_SWAP, default Artwork); Track Metadata (INSTANCE_SWAP, default Track Metadata); Show More (BOOLEAN, default on)
- Nests: Artwork, Track Metadata, Icon Button
- Note: 72 dp tall (equals `md/sys/size/list_item/two_line`).
- Anatomy: Artwork; Track Metadata; More (Icon Button)
- Use for: Library lists of playlists, albums and artists
- Do not use for: Podcast episodes (use Podcast Episode Card)
- Accessibility: Title and subtitle: 4.5:1 (WCAG 1.4.3) in Light, Dark; The row and More are separate targets; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### List Header

Header above a sortable list with a sort control and an optional main action.

- Spec: Molecule, page ➜ Lists, single component, 343 x 48 dp
- Properties: Title (TEXT, default "Playlists"); Show Action (BOOLEAN, default on)
- Nests: Button
- Note: The sort and dropdown glyphs are fixed system glyphs without a swap property.
- Anatomy: Sort icon + Title + dropdown icon; Action (Button, Outlined)
- Use for: Above Playlists in the Library, with New playlist
- Do not use for: Above content rails (use Section Header)
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Sort control announces the current sort; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Lyrics Header

Track header at the top of the Lyrics screen: artwork, title, artist, Share and More.

- Spec: Molecule, page ➜ Lyrics, single component, 343 x 80 dp
- Nests: Artwork, Track Metadata, Icon Button
- Note: 343 x 80. Artwork 80, Track Metadata, Share (Tonal) and More (Standard) are exposed.
- Anatomy: Artwork (80 dp); Track Metadata (exposed); Share (Icon Button Tonal, exposed); More (Icon Button Standard, exposed)
- Use for: Top of the Lyrics screen, under the collapse button
- Do not use for: Now Playing (artwork is large there); Lists (use Playlist List Item)
- Accessibility: Title and artist: 4.5:1 (WCAG 1.4.3) in Light, Dark; Share and More have accessible names; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Genre Card

Tile that opens a genre, mood or chart: artist photo on a category color with the genre name.

- Spec: Molecule, page ➜ Cards & Carousels, component set, 7 variants
- Variants: Color = Magenta / Blue / Cyan / Green / Red / Purple / Yellow (default Color=Magenta)
- Properties: Label (TEXT, default "ALTERNATIVE")
- Nests: Artwork
- Note: Two per row, 80 dp tall, artwork 56 x 80 with an image fill set per genre, `corner/extra_small`, label in `M3/headline_small_emphasized` on `on_primary`.
- Note: Color maps to `md/sys/color/category_<name>`: Light tone 40, Dark tone 80 (M3 pastel, kept by Abdul, DR-003).
- Note: Neighbouring cards use different colors.
- Anatomy: Container (category color); Artwork (56 x 80, image fill set per genre); Label
- Use for: Search & Discover grids (Popular, Moods & Genres), two per row; Color picks the category accent; neighbours use different colors
- Do not use for: Library shortcuts with an icon (use Library Shortcut Tile); Songs or albums (use Media Card)
- Accessibility: Label on the category color: 4.5:1 (WCAG 1.4.3) in Light, Dark; The whole card is one target; the label is its accessible name; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

### Organisms

#### Media Carousel

Horizontal rail of Media Cards that scrolls and clips at the screen edge.

- Spec: Organism, page ➜ Cards & Carousels, single component, 520 x 244 dp
- Properties: First Card (INSTANCE_SWAP, default Size=Default); Second Card (INSTANCE_SWAP, default Size=Default); Third Card (INSTANCE_SWAP, default Size=Default)
- Nests: Media Card, Artwork, Track Metadata, Badge
- Note: Rail of three Media Cards (First, Second, Third Card swaps) that clips at the screen edge.
- Anatomy: First to Third Card (Media Card)
- Use for: Explore rails such as Your new music and For You
- Do not use for: Vertical lists (use Playlist List Item)
- Accessibility: Cards stay reachable in reading order; the rail scrolls with the screen reader

#### Podcast Episode Card

Episode card with artwork, title, description, listened progress, Download and More.

- Spec: Organism, page ➜ Lists, single component, 360 x 186 dp
- Properties: Description (TEXT, default "Episode description continues across two concise lines."); Artwork (INSTANCE_SWAP, default Artwork); Track Metadata (INSTANCE_SWAP, default Track Metadata); Progress Indicator (INSTANCE_SWAP, default Value=40); Time Left (TEXT, default "1h 42min left"); Show Download (BOOLEAN, default on)
- Nests: Artwork, Track Metadata, Progress Indicator, Icon Button
- Note: Source size 186 dp tall with an `outline_variant` border; instances fill 343 wide.
- Anatomy: Artwork; Track Metadata; Description (2 lines); Progress Indicator + Time Left; Download (optional); More
- Use for: Continue playing and episode lists in Podcasts
- Do not use for: Music playlists (use Playlist List Item)
- Accessibility: Texts: 4.5:1 (WCAG 1.4.3) in Light, Dark; Progress is announced as time left; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Dialog

Modal window for a focused decision that blocks the screen until answered.

- Spec: Organism, page ➜ Dialogs & Sheets, component set, 2 variants
- Variants: Type = Basic / List (default Type=Basic)
- Properties: Title (TEXT, default "Confirm action")
- Nests: Button
- Note: Actions are Button instances (Text style), exposed on the instance.
- Anatomy: Container; Title; Body or list; Actions (Button)
- Use for: Basic for confirmations; List to pick from a short list
- Do not use for: Non-blocking messages; Supplemental tasks (use Sheet)
- Accessibility: Title and body: 4.5:1 (WCAG 1.4.3) in Light, Dark; Focus moves into the dialog and returns on close; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Sheet

Bottom or side surface for supplemental tasks such as the queue or a track menu.

- Spec: Organism, page ➜ Dialogs & Sheets, component set, 2 variants
- Variants: Position = Bottom / Side (default Position=Bottom)
- Properties: Title (TEXT, default "Sheet title")
- Nests: nothing
- Note: Bottom on phones; Side on large screens (not used in the Listen flow).
- Anatomy: Container; Title; Content
- Use for: Bottom on phones for menus and details; Side on large screens
- Do not use for: Blocking confirmations (use Dialog)
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Has a visible close or drag handle and closes with Back

## 5. Tokens

Every component binds Semantic color roles (`on_*` for content, `*_container` for fills, `outline` and `outline_variant` for lines), Spacing for padding and gap, Shape for radius, Typography text styles (`M3/...`) for text, and Size only where Foundation_Skill section 2.6 allows. No raw values: the components audit and the Listen screens audits report 0 raw values, 0 detached, 0 remote.

## 6. Where it is used

Screens built from this group are in `../../data/screen-templates.json` (Explore, Search & Discover, Library - Music, Library - Podcasts, Now Playing, Lyrics). Open items: `references/gaps.md`.
