# Data Display components (Music App, Android)

Generated usage lines come from data/component-registry.json (python tools/component_docs.py <folder> skills); spec notes below each block are written by hand.

## Artwork
<!-- docs:start -->
- Use: Inside cards, list items and players
- Do not use: People (use Avatar)
- Accessibility: Decorative when the title is next to it; otherwise give alt text with the title
- Keywords: artwork, cover, album art, image
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Avatars & upload image, single component, 160 x 160 dp
- Nests: nothing
- Note: 160 x 160 default; resize the instance (288 on Now Playing, 80 in Lyrics Header). Set the image fill per instance.
<!-- spec:end -->

## Avatar
<!-- docs:start -->
- Use: Profile entry in Top App Bar; Artist rows
- Do not use: Album or playlist covers (use Artwork)
- Accessibility: Accessible name is the person name or Profile; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: avatar, profile, user
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Avatars & upload image, single component, 40 x 40 dp
- Nests: nothing
- Note: 40 x 40; the Plan Badge sits on it in the Top App Bar.
<!-- spec:end -->

## Tooltip
<!-- docs:start -->
- Use: Explaining an icon-only control
- Do not use: Essential instructions or errors (show them on screen)
- Accessibility: Text: 4.5:1 (WCAG 1.4.3) in Light, Dark; Also reachable by keyboard focus
- Keywords: tooltip, help, hint
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Tooltips, component set, 2 variants
- Variants: Type = Plain / Rich (default Type=Plain)
- Properties: Text (TEXT, default "Tooltip label")
- Nests: nothing
- Note: Rich has no title or actions yet (open gap).
- Anatomy: Container; Text
<!-- spec:end -->

## Badge
<!-- docs:start -->
- Use: Type Plan: plan label (plus) on the profile avatar; Type Explicit: the "E" marker on explicit songs and albums
- Do not use: Long text or actions
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Include the meaning in the parent accessible name (Explicit)
- Keywords: badge, explicit, label
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Banners & Badges, component set, 2 variants
- Variants: Type = Plan / Explicit (default Type=Plan)
- Properties: Label (TEXT, default "E")
- Nests: nothing
- Note: Type Plan: plan label on the avatar. Type Explicit: small square "E" on `surface_container_highest` with `on_surface` text and `corner/extra_small` (never the `error` red).
<!-- spec:end -->

## Section Header
<!-- docs:start -->
- Use: Above every horizontal rail on Explore
- Do not use: Above sortable lists (use List Header)
- Content: Title in sentence case, 1 to 4 words
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Title is a heading for screen readers; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: section, header, rail title
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Cards & Carousels, single component, 340 x 36 dp
- Properties: Title (TEXT, default "Your new music"); Show More (BOOLEAN, default on); Show Supporting Text (BOOLEAN, default off); Supporting Text (TEXT, default "Discover music based on your recent activity")
- Nests: Button
- Note: 340 x 36. Show More turns the Neutral Button on; Show Supporting Text adds the second line.
- Anatomy: Title; Supporting text (optional); More (Button, Neutral)
<!-- spec:end -->

## Shortcut Card
<!-- docs:start -->
- Use: Two-column shortcut grid at the top of Explore
- Do not use: Category tiles without artwork (use Library Shortcut Tile)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; The whole card is one target; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: shortcut, card, quick access
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Cards & Carousels, single component, 164 x 56 dp
- Properties: Label (TEXT, default "Music Mix"); Artwork (INSTANCE_SWAP, default Artwork)
- Nests: Artwork
- Note: Source size 56 dp tall (M3 72); default 164 x 56, instances fill a two-column grid.
- Anatomy: Container; Artwork; Label
<!-- spec:end -->

## Media Carousel
<!-- docs:start -->
- Use: Explore rails such as Your new music and For You
- Do not use: Vertical lists (use Playlist List Item)
- Accessibility: Cards stay reachable in reading order; the rail scrolls with the screen reader
- Keywords: carousel, rail, horizontal list
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ Cards & Carousels, single component, 520 x 244 dp
- Properties: First Card (INSTANCE_SWAP, default Size=Default); Second Card (INSTANCE_SWAP, default Size=Default); Third Card (INSTANCE_SWAP, default Size=Default)
- Nests: Media Card, Artwork, Track Metadata, Badge
- Note: Rail of three Media Cards (First, Second, Third Card swaps) that clips at the screen edge.
- Anatomy: First to Third Card (Media Card)
<!-- spec:end -->

## Library Shortcut Tile
<!-- docs:start -->
- Use: 3 or 4 equal-width tiles in a row at the top of the Library
- Do not use: Media with artwork (use Shortcut Card)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Icon: 3:1 (WCAG 1.4.11) in Light, Dark; Whole tile is the target, at least 80 x 80 dp; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: library, shortcut, category, tile
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Cards & Carousels, component set, 4 variants
- Variants: Color = Purple / Cyan / Magenta / Yellow (default Color=Purple)
- Properties: Label (TEXT, default "Likes"); Icon (INSTANCE_SWAP, default Icon/favorite)
- Nests: nothing
- Note: Color = Purple, Cyan, Magenta, Yellow. All variants share the default label (Likes) and icon (favorite); every instance sets its own Label and Icon.
- Note: 80 x 80 minimum; widens to fill a row of 3 (109) or 4 (80).
- Anatomy: Container; Icon (Color picks the accent); Label
<!-- spec:end -->

## Media Card
<!-- docs:start -->
- Use: Size Default for songs, albums and artists; Size Large for mixes such as Your Weekly Mixtape
- Do not use: Vertical lists (use Playlist List Item)
- Accessibility: Title and subtitle: 4.5:1 (WCAG 1.4.3) in Light, Dark; The card is one target; title is its accessible name; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: media card, song, album, mix
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Cards & Carousels, component set, 2 variants
- Variants: Size = Default / Large (default Size=Default)
- Properties: Artwork (INSTANCE_SWAP, default Artwork); Show Badge (BOOLEAN, default off); Description (TEXT, default "Your next favorite songs are in here")
- Nests: Artwork, Track Metadata, Badge
- Note: Description is used only by Size = Large (Default shows Track Metadata). This is by design.
- Anatomy: Artwork; Badge (optional); Track Metadata or Description
<!-- spec:end -->

## Track Metadata
<!-- docs:start -->
- Use: Inside Mini Player, Media Card and list items
- Do not use: Section titles (use Section Header)
- Accessibility: Title and subtitle: 4.5:1 (WCAG 1.4.3) in Light, Dark; Truncated text stays fully readable by the screen reader
- Keywords: metadata, title, artist, subtitle
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Lists, single component, 220 x 44 dp
- Properties: Title (TEXT, default "Track title"); Subtitle (TEXT, default "Artist · Album"); Show Subtitle Icon (BOOLEAN, default off); Subtitle Icon (INSTANCE_SWAP, default Icon/cloud_done)
- Nests: nothing
- Note: The subtitle icon defaults to `cloud_done` (downloaded) and is off by default.
- Anatomy: Title; Subtitle icon (optional, 16 dp); Subtitle
<!-- spec:end -->

## Playlist List Item
<!-- docs:start -->
- Use: Library lists of playlists, albums and artists
- Do not use: Podcast episodes (use Podcast Episode Card)
- Accessibility: Title and subtitle: 4.5:1 (WCAG 1.4.3) in Light, Dark; The row and More are separate targets; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: list item, playlist, row
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Lists, single component, 360 x 72 dp
- Properties: Artwork (INSTANCE_SWAP, default Artwork); Track Metadata (INSTANCE_SWAP, default Track Metadata); Show More (BOOLEAN, default on)
- Nests: Artwork, Track Metadata, Icon Button
- Note: 72 dp tall (equals `md/sys/size/list_item/two_line`).
- Anatomy: Artwork; Track Metadata; More (Icon Button)
<!-- spec:end -->

## Podcast Episode Card
<!-- docs:start -->
- Use: Continue playing and episode lists in Podcasts
- Do not use: Music playlists (use Playlist List Item)
- Accessibility: Texts: 4.5:1 (WCAG 1.4.3) in Light, Dark; Progress is announced as time left; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: podcast, episode, card
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ Lists, single component, 360 x 186 dp
- Properties: Description (TEXT, default "Episode description continues across two concise lines."); Artwork (INSTANCE_SWAP, default Artwork); Track Metadata (INSTANCE_SWAP, default Track Metadata); Progress Indicator (INSTANCE_SWAP, default Value=40); Time Left (TEXT, default "1h 42min left"); Show Download (BOOLEAN, default on)
- Nests: Artwork, Track Metadata, Progress Indicator, Icon Button
- Note: Source size 186 dp tall with an `outline_variant` border; instances fill 343 wide.
- Anatomy: Artwork; Track Metadata; Description (2 lines); Progress Indicator + Time Left; Download (optional); More
<!-- spec:end -->

## List Header
<!-- docs:start -->
- Use: Above Playlists in the Library, with New playlist
- Do not use: Above content rails (use Section Header)
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Sort control announces the current sort; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: list header, sort, new playlist
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Lists, single component, 343 x 48 dp
- Properties: Title (TEXT, default "Playlists"); Show Action (BOOLEAN, default on)
- Nests: Button
- Note: The sort and dropdown glyphs are fixed system glyphs without a swap property.
- Anatomy: Sort icon + Title + dropdown icon; Action (Button, Outlined)
<!-- spec:end -->

## Dialog
<!-- docs:start -->
- Use: Basic for confirmations; List to pick from a short list
- Do not use: Non-blocking messages; Supplemental tasks (use Sheet)
- Accessibility: Title and body: 4.5:1 (WCAG 1.4.3) in Light, Dark; Focus moves into the dialog and returns on close; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: dialog, modal, confirm
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ Dialogs & Sheets, component set, 2 variants
- Variants: Type = Basic / List (default Type=Basic)
- Properties: Title (TEXT, default "Confirm action")
- Nests: Button
- Note: Actions are Button instances (Text style), exposed on the instance.
- Anatomy: Container; Title; Body or list; Actions (Button)
<!-- spec:end -->

## Sheet
<!-- docs:start -->
- Use: Bottom on phones for menus and details; Side on large screens
- Do not use: Blocking confirmations (use Dialog)
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Has a visible close or drag handle and closes with Back
- Keywords: sheet, bottom sheet, menu
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ Dialogs & Sheets, component set, 2 variants
- Variants: Position = Bottom / Side (default Position=Bottom)
- Properties: Title (TEXT, default "Sheet title")
- Nests: nothing
- Note: Bottom on phones; Side on large screens (not used in the Listen flow).
- Anatomy: Container; Title; Content
<!-- spec:end -->

## Progress Indicator
<!-- docs:start -->
- Use: Episode progress; Inside Playback Progress
- Do not use: Seeking on its own (use Playback Progress)
- Accessibility: Active track: 3:1 (WCAG 1.4.11) in Light, Dark; Announce the value as a percentage or time
- Keywords: progress, linear, loading
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Progress & Loading, component set, 7 variants
- Variants: Value = 2 / 10 / 25 / 40 / 50 / 75 / 100 (default Value=2)
- Nests: nothing
- Note: Value variants 2, 10, 25, 40, 50, 75, 100; the active track scales with the instance width. Use the nearest variant; screens use 2, 10 and 40.
- Behavior: Value sets the active track as a percent; the active track scales with the instance width
<!-- spec:end -->

## Divider
<!-- docs:start -->
- Use: Between groups that spacing alone does not separate
- Do not use: Between every list row (use spacing)
- Accessibility: Decorative; hidden from screen readers
- Keywords: divider, separator, line
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Dividers, single component, 320 x 1 dp
- Nests: nothing
<!-- spec:end -->

## Lyrics Line
<!-- docs:start -->
- Use: Lyrics screen, one instance per line; Align End for right-to-left lines (Arabic), Start for left-to-right
- Do not use: Body text or descriptions (use the text styles)
- Content: Keep the original language and line breaks of the song
- Accessibility: Current line: 4.5:1 (WCAG 1.4.3) in Light, Dark; Past and Upcoming lines are dimmed on purpose; the screen reader reads every line; Respect the system font size; lines wrap
- Keywords: lyrics, line, karaoke, synced
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Lyrics, component set, 6 variants
- Variants: State = Past / Current / Upcoming; Align = Start / End (default State=Past, Align=Start)
- Properties: Line (TEXT, default "كانت أكبر كذبه عشته")
- Nests: nothing
- Note: Text style `M3/headline_small_emphasized`. Colors: Current `on_surface`; Past and Upcoming `outline` (dimmed). No top or bottom fade on the lyric list yet (open difference).
- Behavior: Current is on_surface; Past and Upcoming are outline (dimmed)
<!-- spec:end -->

## Lyrics Header
<!-- docs:start -->
- Use: Top of the Lyrics screen, under the collapse button
- Do not use: Now Playing (artwork is large there); Lists (use Playlist List Item)
- Accessibility: Title and artist: 4.5:1 (WCAG 1.4.3) in Light, Dark; Share and More have accessible names; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: lyrics, header, track
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Lyrics, single component, 343 x 80 dp
- Nests: Artwork, Track Metadata, Icon Button
- Note: 343 x 80. Artwork 80, Track Metadata, Share (Tonal) and More (Standard) are exposed.
- Anatomy: Artwork (80 dp); Track Metadata (exposed); Share (Icon Button Tonal, exposed); More (Icon Button Standard, exposed)
<!-- spec:end -->

## Genre Card
<!-- docs:start -->
- Use: Search & Discover grids (Popular, Moods & Genres), two per row; Color picks the category accent; neighbours use different colors
- Do not use: Library shortcuts with an icon (use Library Shortcut Tile); Songs or albums (use Media Card)
- Content: Genre name in capitals, 1 to 3 words, may wrap to 2 lines
- Accessibility: Label on the category color: 4.5:1 (WCAG 1.4.3) in Light, Dark; The whole card is one target; the label is its accessible name; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: genre, mood, category, browse, search
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Cards & Carousels, component set, 7 variants
- Variants: Color = Magenta / Blue / Cyan / Green / Red / Purple / Yellow (default Color=Magenta)
- Properties: Label (TEXT, default "ALTERNATIVE")
- Nests: Artwork
- Note: Two per row, 80 dp tall, artwork 56 x 80 with an image fill set per genre, `corner/extra_small`, label in `M3/headline_small_emphasized` on `on_primary`.
- Note: Color maps to `md/sys/color/category_<name>`: Light tone 40, Dark tone 80 (M3 pastel, kept by Abdul, DR-003).
- Note: Neighbouring cards use different colors.
- Anatomy: Container (category color); Artwork (56 x 80, image fill set per genre); Label
<!-- spec:end -->
