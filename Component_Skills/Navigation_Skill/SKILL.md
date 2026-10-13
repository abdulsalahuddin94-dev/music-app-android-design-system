---
name: music-app-android-navigation
description: Use when building, auditing or coding actions and navigation in the Music App Android design system (Figma file "Brownfield DS"): buttons, icon buttons, filter chips, tabs, bottom navigation, app bars and the player controls (Mini Player, Playback Progress, Playback Controls, Player Utility Bar). Covers only the ⭐Navigation group; tells the agent which component to use and how it is sized and tokenized.
---

# Music App (Android) - Navigation

> **Node IDs:** ids belong to the Figma file they were read from. Find components by **name** (`figma.root.findAll(n => n.name === 'Button')`), never by an id from this folder.

> **Data files (source of truth):** `../../data/component-registry.json` (variants, properties, docs per component), `../../data/tokens.json`, `../../data/rules.json`, `../../data/screen-templates.json`, `../../docs/decisions.md`. When this file and the JSON differ, the JSON wins.

**Load `../../Foundation_Skill/SKILL.md` first** (variables, text styles, icons, and the rule that the source app wins over Material 3).

Scope: **⭐Navigation** pages: ➜ Buttons & links, ➜ Pagination & Tabs, ➜ App Bar, ➜ Player Controls. Platform Android, Material 3 names, compact 375 dp. File: Brownfield DS. References: `references/components.md` (generated usage lines plus spec notes), `references/gaps.md`, `references/screens/` (Light and Dark preview boards of each page).

Dependencies: Button, Icon Button, Filter Chip, Tab Item and Navigation Item are Atoms; Primary Tabs, Playback Progress and Player Utility Bar are Molecules; Bottom Navigation, Top App Bar, Playlist App Bar, Mini Player and Playback Controls are Organisms. Build Atoms first.

## 1. Inventory

| Component | Tier | Page | Variants | Properties | Nests |
|---|---|---|---|---|---|
| Button | Atom | ➜ Buttons & links | Style (6) x State (5) | Label text, Show Leading Icon, Leading Icon | - |
| Icon Button | Atom | ➜ Buttons & links | Style (4) x State (5) | Icon | - |
| Filter Chip | Atom | ➜ Pagination & Tabs | Selected (2) x State (5) | Label | - |
| Tab Item | Atom | ➜ Pagination & Tabs | Selected (2) x State (5) | Label | - |
| Navigation Item | Atom | ➜ Pagination & Tabs | Selected (2) x State (3) | Label, Icon | - |
| Primary Tabs | Molecule | ➜ Pagination & Tabs | 1 | First Tab, Second Tab | Tab Item |
| Bottom Navigation | Organism | ➜ Pagination & Tabs | 1 | First Item, Second Item, Third Item, Fourth Item | Navigation Item |
| Top App Bar | Organism | ➜ App Bar | 1 | Title, Show Actions | Icon Button, Avatar, Badge |
| Playlist App Bar | Organism | ➜ App Bar | 1 | Title, Switch, AI Mix Label, Source Label | Icon Button, Switch |
| Mini Player | Organism | ➜ Player Controls | 1 | Artwork, Track Metadata | Artwork, Track Metadata, Icon Button |
| Playback Progress | Molecule | ➜ Player Controls | 1 | Elapsed Time, Total Time, Progress Indicator | Progress Indicator |
| Playback Controls | Organism | ➜ Player Controls | 1 | - | Icon Button |
| Player Utility Bar | Molecule | ➜ Player Controls | Active (4) | Lyrics Label, Queue Label, Audio Label, Icon lyrics, Icon queue music, Icon graphic eq | - |

## 2. Rules for this group

1. One Filled Button per screen for the main action.
2. Moving between top-level destinations is Bottom Navigation only; switching content inside one destination is Primary Tabs (2) or Filter Chip (2 to 6 filters).
3. Icon-only actions are Icon Buttons with an accessible name; actions that need a label are Buttons.
4. Play is an Inverse Icon Button: 64 dp in Playback Controls, 40 dp in the Mini Player. Resize the instance and set its padding; do not rebuild it.
5. Every player view (Now Playing, Lyrics) has the collapse button; every top-level screen has Bottom Navigation, and the Mini Player sits 4 dp above it.
6. Heights follow the source app over Material 3 (Foundation_Skill section 1): Bottom Navigation 58, Mini Player 56. Hit areas stay 48 dp.
7. Top-level screens use Top App Bar; the full player uses Playlist App Bar.

## 3. Choose the component

| Need | Use | Not for |
|---|---|---|
| Filled for the one main action of a screen | Button | Icon-only actions (use Icon Button) |
| Standard for toolbar and row actions (more_vert, favorite) | Icon Button | Actions that need a text label to be understood (use Button) |
| 2 to 6 visible filters above a feed or list | Filter Chip | 7 or more filters (use Text Field with Type Dropdown) |
| Inside Primary Tabs only, for Music / Podcasts style switching | Tab Item | On its own (use Primary Tabs) |
| Inside Bottom Navigation only | Navigation Item | Actions on the current screen (use Icon Button) |
| Top-level content switch inside one destination | Primary Tabs | Moving between app destinations (use Bottom Navigation) |
| Bottom of every top-level screen on compact windows | Bottom Navigation | Actions on the current screen |
| Top of top-level screens such as Explore | Top App Bar | The full player (use Playlist App Bar) |
| Top of the Now Playing and Lyrics screens | Playlist App Bar | Top-level screens (use Top App Bar) |
| Every top-level screen while something is playing | Mini Player | Inside the full player |
| Full player, under the track title | Playback Progress | Loading states (use Progress Indicator alone) |
| Full player (Now Playing and Lyrics) | Playback Controls | Compact contexts (use Mini Player) |
| Bottom of the Now Playing and Lyrics screens | Player Utility Bar | Primary playback actions (use Playback Controls) |

## 4. Components

### Atoms

#### Button

Starts an action; Style sets the emphasis.

- Spec: Atom, page ➜ Buttons & links, component set, 30 variants
- Variants: Style = Filled / Tonal / Outlined / Text / Neutral / Outlined Accent; State = Enabled / Pressed / Disabled / Hovered / Focused (default Style=Filled, State=Enabled)
- Properties: Label text (TEXT, default "Button"); Show Leading Icon (BOOLEAN, default off); Leading Icon (INSTANCE_SWAP, default Icon/add)
- Nests: nothing
- Note: Neutral = gray pill (secondary_container) used for More. Outlined Accent = tertiary (purple) border, label and icon, 5 states, used for Radar songs around you.
- Note: Height is not bound to a Size token: resized instances keep their own height.
- Note: The leading icon is 18 dp.
- Anatomy: Container; Leading icon (optional, 18 dp); Label
- Use for: Filled for the one main action of a screen; Tonal for secondary actions; Outlined for alternatives such as New playlist; Text for low-emphasis actions in dialogs; Neutral (gray pill) for More in section headers; Outlined Accent (tertiary purple) for a featured discovery action such as Radar songs around you
- Do not use for: Icon-only actions (use Icon Button); Filtering content (use Filter Chip); Moving between top-level destinations (use Bottom Navigation)
- Behavior: Show Leading Icon turns the icon on; pick it with the Leading Icon swap; Disabled uses on_surface at 38% for the label
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Outlined border: 3:1 (WCAG 1.4.11) in Light, Dark; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Icon Button

Compact action shown as an icon only, such as Like, Share, More or Play.

- Spec: Atom, page ➜ Buttons & links, component set, 20 variants
- Variants: Style = Standard / Filled / Tonal / Inverse; State = Enabled / Pressed / Disabled / Hovered / Focused (default Style=Standard, State=Enabled)
- Properties: Icon (INSTANCE_SWAP, default Icon/play_arrow)
- Nests: nothing
- Note: Styles: Standard (row and toolbar actions), Tonal (Share on the player), Inverse (Play), Filled.
- Note: The icon fills the container minus its padding. Play in Playback Controls is 64 x 64 with spacing/8 padding; Mini Player Play is 40 x 40 with spacing/4; Playlist App Bar Collapse is 40.
- Note: Height is not bound to a Size token (binding forced resized instances to 48).
- Anatomy: Container; Icon (swap)
- Use for: Standard for toolbar and row actions (more_vert, favorite); Tonal for secondary actions such as Share on the player; Inverse for the main Play action; Filled for a strong single action on media
- Do not use for: Actions that need a text label to be understood (use Button)
- Behavior: Swap play_arrow to pause while playing; The icon fills the container minus its padding: resize the instance and set its padding to size the glyph (Play 64 dp with spacing/8 padding, Mini Player Play 40 dp with spacing/4)
- Accessibility: Icon on its container: 3:1 (WCAG 1.4.11) in Light, Dark; Give every instance an accessible name (Like, Share, Play); Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Filter Chip

Filters content in place, such as All / Arabic / International / Podcasts on Explore.

- Spec: Atom, page ➜ Pagination & Tabs, component set, 10 variants
- Variants: Selected = False / True; State = Enabled / Pressed / Disabled / Hovered / Focused (default Selected=False, State=Enabled)
- Properties: Label (TEXT, default "Filter")
- Nests: nothing
- Note: The hit row is 48 dp tall while the visible chip is smaller.
- Use for: 2 to 6 visible filters above a feed or list; Switching Playlists / Albums / Artists in the Library
- Do not use for: 7 or more filters (use Text Field with Type Dropdown); Starting an action (use Button)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Announce the selected state; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Tab Item

One tab label inside Primary Tabs.

- Spec: Atom, page ➜ Pagination & Tabs, component set, 10 variants
- Variants: Selected = False / True; State = Enabled / Hovered / Focused / Pressed / Disabled (default Selected=False, State=Enabled)
- Properties: Label (TEXT, default "MUSIC")
- Nests: nothing
- Note: Condensed bold label (`M3/headline_small_emphasized`).
- Use for: Inside Primary Tabs only, for Music / Podcasts style switching
- Do not use for: On its own (use Primary Tabs); Filtering a list (use Filter Chip)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Selected tab is announced as selected; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Navigation Item

One destination inside Bottom Navigation: icon plus label.

- Spec: Atom, page ➜ Pagination & Tabs, component set, 6 variants
- Variants: Selected = False / True; State = Enabled / Pressed / Disabled (default Selected=False, State=Enabled)
- Properties: Label (TEXT, default "Explore"); Icon (INSTANCE_SWAP, default Icon/explore)
- Nests: nothing
- Note: The source marks the selected item by color only; there is no M3 active-indicator pill (open difference).
- Use for: Inside Bottom Navigation only
- Do not use for: Actions on the current screen (use Icon Button)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Selected item is announced as selected; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

### Molecules

#### Primary Tabs

Two large condensed tabs that switch the Library between Music and Podcasts.

- Spec: Molecule, page ➜ Pagination & Tabs, single component, 207 x 56 dp
- Properties: First Tab (INSTANCE_SWAP, default Selected=True, State=Enabled); Second Tab (INSTANCE_SWAP, default Selected=False, State=Enabled)
- Nests: Tab Item
- Note: Default 207 x 56. Tab Items are swapped in through First Tab and Second Tab; first selected, second reads PODCASTS.
- Anatomy: First Tab (Tab Item); Second Tab (Tab Item)
- Use for: Top-level content switch inside one destination
- Do not use for: Moving between app destinations (use Bottom Navigation); More than 2 small filters (use Filter Chip)
- Accessibility: Tabs are a tab list; the selected tab is announced; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Playback Progress

Track position bar with elapsed and total time.

- Spec: Molecule, page ➜ Player Controls, single component, 343 x 36 dp
- Properties: Elapsed Time (TEXT, default "00:03"); Total Time (TEXT, default "03:48"); Progress Indicator (INSTANCE_SWAP, default Value=40)
- Nests: Progress Indicator
- Note: 343 x 36. The Progress Indicator swap defaults to Value=40; set the value per track. The source bar is full-bleed 4 dp with a round thumb; the DS bar has no thumb and is inset (open difference).
- Anatomy: Progress Indicator; Elapsed Time; Total Time
- Use for: Full player, under the track title
- Do not use for: Loading states (use Progress Indicator alone)
- Accessibility: Times: 4.5:1 (WCAG 1.4.3) in Light, Dark; Announce position as elapsed of total; seeking needs a 48 dp tall hit area; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Player Utility Bar

Bottom row of the full player opening Lyrics, Queue and Audio settings.

- Spec: Molecule, page ➜ Player Controls, component set, 4 variants
- Variants: Active = None / Lyrics / Queue / Audio (default Active=None)
- Properties: Lyrics Label (TEXT, default "LYRICS"); Queue Label (TEXT, default "QUEUE"); Audio Label (TEXT, default "AUDIO"); Icon lyrics (INSTANCE_SWAP, default Icon/lyrics); Icon queue music (INSTANCE_SWAP, default Icon/queue_music); Icon graphic eq (INSTANCE_SWAP, default Icon/graphic_eq)
- Nests: nothing
- Note: Active = Lyrics shows the open view as an inverse pill; None on Now Playing. Labels are TEXT properties; icons are swaps.
- Anatomy: Lyrics (icon + label); Queue (icon + label); Audio (icon + label)
- Use for: Bottom of the Now Playing and Lyrics screens
- Do not use for: Primary playback actions (use Playback Controls)
- Behavior: Active marks the open view with an inverse pill (Lyrics on the Lyrics screen); None on Now Playing
- Accessibility: Labels: 4.5:1 (WCAG 1.4.3) in Light, Dark; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

### Organisms

#### Bottom Navigation

App navigation bar with the four destinations Explore, Search, Connect and Your Library.

- Spec: Organism, page ➜ Pagination & Tabs, single component, 375 x 58 dp
- Properties: First Item (INSTANCE_SWAP, default Selected=True, State=Enabled); Second Item (INSTANCE_SWAP, default Selected=False, State=Enabled); Third Item (INSTANCE_SWAP, default Selected=False, State=Enabled); Fourth Item (INSTANCE_SWAP, default Selected=False, State=Enabled)
- Nests: Navigation Item
- Note: 58 dp tall, items 52 (source; M3 80). Full width, docked to the bottom of the frame.
- Note: Default items: Explore (selected), Search, Connect, Your Library.
- Anatomy: Container; First to Fourth Item (Navigation Item)
- Use for: Bottom of every top-level screen on compact windows
- Do not use for: Actions on the current screen; Fewer than 3 destinations
- Accessibility: Each item has a visible label; Selected destination is announced; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Top App Bar

Screen header with a condensed title and the Notifications, Community and Profile actions.

- Spec: Organism, page ➜ App Bar, single component, 375 x 64 dp
- Properties: Title (TEXT, default "EXPLORE"); Show Actions (BOOLEAN, default on)
- Nests: Icon Button, Avatar, Badge
- Note: 64 dp tall, title in `M3/headline_small_emphasized`, caps.
- Anatomy: Title; Notifications (Icon Button); Community (Icon Button); Profile (Avatar + Badge)
- Use for: Top of top-level screens such as Explore; Show Actions off for screens with a title only, such as Search & Discover
- Do not use for: The full player (use Playlist App Bar)
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Every action has an accessible name; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Playlist App Bar

Header of the full player: collapse, the playing source and the AI Mix switch.

- Spec: Organism, page ➜ App Bar, single component, 375 x 64 dp
- Properties: Title (TEXT, default "Arabic Music Mix"); Switch (INSTANCE_SWAP, default Selected=False, State=Enabled); AI Mix Label (TEXT, default "AI MIX"); Source Label (TEXT, default "PLAYLIST")
- Nests: Icon Button, Switch
- Note: 64 dp tall. Source Label property (default PLAYLIST) in `M3/label_medium_emphasized`; AI MIX label with an `auto_awesome` sparkle under its end; the Collapse Icon Button is 40 dp.
- Anatomy: Collapse (Icon Button 40 dp, expand_more); Source Label (M3/label_medium_emphasized, e.g. PLAYLIST); Title (M3/body_small); AI Mix label (M3/label_medium_emphasized) + sparkle under its end; Switch
- Use for: Top of the Now Playing and Lyrics screens
- Do not use for: Top-level screens (use Top App Bar)
- Accessibility: Title and AI Mix label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Collapse is announced as Close player; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Mini Player

Persistent bar above Bottom Navigation showing the playing track with Like and Play.

- Spec: Organism, page ➜ Player Controls, single component, 351 x 56 dp
- Properties: Artwork (INSTANCE_SWAP, default Artwork); Track Metadata (INSTANCE_SWAP, default Track Metadata)
- Nests: Artwork, Track Metadata, Icon Button
- Note: 351 x 56 dp, 12 dp inset from the screen edges, sits 4 dp above Bottom Navigation. No progress line (open difference).
- Anatomy: Artwork; Track Metadata; Like (Icon Button); Play (Icon Button, Inverse)
- Use for: Every top-level screen while something is playing
- Do not use for: Inside the full player
- Accessibility: Title and artist: 4.5:1 (WCAG 1.4.3) in Light, Dark; Tapping the bar opens Now Playing; Like and Play are separate targets; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Playback Controls

Main player controls: Like, Previous, Play/Pause, Next and Download.

- Spec: Organism, page ➜ Player Controls, single component, 343 x 72 dp
- Nests: Icon Button
- Note: 343 x 72. Play is a 64 dp round Inverse Icon Button. Like, Previous, Next and Download are Standard Icon Buttons.
- Note: No downloading (cloud with pause) icon yet.
- Anatomy: Like; Previous; Play (Inverse, 64 dp); Next; Download
- Use for: Full player (Now Playing and Lyrics)
- Do not use for: Compact contexts (use Mini Player)
- Accessibility: Every control has an accessible name; Play switches to Pause; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

## 5. Tokens

Every component binds Semantic color roles (`on_*` for content, `*_container` for fills, `outline` and `outline_variant` for lines), Spacing for padding and gap, Shape for radius, Typography text styles (`M3/...`) for text, and Size only where Foundation_Skill section 2.6 allows. No raw values: the components audit and the Listen screens audits report 0 raw values, 0 detached, 0 remote.

## 6. Where it is used

Screens built from this group are in `../../data/screen-templates.json` (Explore, Search & Discover, Library - Music, Library - Podcasts, Now Playing, Lyrics). Open items: `references/gaps.md`.
