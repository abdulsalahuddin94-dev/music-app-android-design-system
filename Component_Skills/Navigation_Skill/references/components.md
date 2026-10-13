# Navigation components (Music App, Android)

Generated usage lines come from data/component-registry.json (python tools/component_docs.py <folder> skills); spec notes below each block are written by hand.

## Button
<!-- docs:start -->
- Use: Filled for the one main action of a screen; Tonal for secondary actions; Outlined for alternatives such as New playlist; Text for low-emphasis actions in dialogs; Neutral (gray pill) for More in section headers; Outlined Accent (tertiary purple) for a featured discovery action such as Radar songs around you
- Do not use: Icon-only actions (use Icon Button); Filtering content (use Filter Chip); Moving between top-level destinations (use Bottom Navigation)
- Content: Sentence case; Start with a verb; 1 to 3 words
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Outlined border: 3:1 (WCAG 1.4.11) in Light, Dark; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: button, action, cta
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Buttons & links, component set, 30 variants
- Variants: Style = Filled / Tonal / Outlined / Text / Neutral / Outlined Accent; State = Enabled / Pressed / Disabled / Hovered / Focused (default Style=Filled, State=Enabled)
- Properties: Label text (TEXT, default "Button"); Show Leading Icon (BOOLEAN, default off); Leading Icon (INSTANCE_SWAP, default Icon/add)
- Nests: nothing
- Note: Neutral = gray pill (secondary_container) used for More. Outlined Accent = tertiary (purple) border, label and icon, 5 states, used for Radar songs around you.
- Note: Height is not bound to a Size token: resized instances keep their own height.
- Note: The leading icon is 18 dp.
- Anatomy: Container; Leading icon (optional, 18 dp); Label
- Behavior: Show Leading Icon turns the icon on; pick it with the Leading Icon swap; Disabled uses on_surface at 38% for the label
<!-- spec:end -->

## Icon Button
<!-- docs:start -->
- Use: Standard for toolbar and row actions (more_vert, favorite); Tonal for secondary actions such as Share on the player; Inverse for the main Play action; Filled for a strong single action on media
- Do not use: Actions that need a text label to be understood (use Button)
- Accessibility: Icon on its container: 3:1 (WCAG 1.4.11) in Light, Dark; Give every instance an accessible name (Like, Share, Play); Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: icon button, action, play, like, more
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Buttons & links, component set, 20 variants
- Variants: Style = Standard / Filled / Tonal / Inverse; State = Enabled / Pressed / Disabled / Hovered / Focused (default Style=Standard, State=Enabled)
- Properties: Icon (INSTANCE_SWAP, default Icon/play_arrow)
- Nests: nothing
- Note: Styles: Standard (row and toolbar actions), Tonal (Share on the player), Inverse (Play), Filled.
- Note: The icon fills the container minus its padding. Play in Playback Controls is 64 x 64 with spacing/8 padding; Mini Player Play is 40 x 40 with spacing/4; Playlist App Bar Collapse is 40.
- Note: Height is not bound to a Size token (binding forced resized instances to 48).
- Anatomy: Container; Icon (swap)
- Behavior: Swap play_arrow to pause while playing; The icon fills the container minus its padding: resize the instance and set its padding to size the glyph (Play 64 dp with spacing/8 padding, Mini Player Play 40 dp with spacing/4)
<!-- spec:end -->

## Filter Chip
<!-- docs:start -->
- Use: 2 to 6 visible filters above a feed or list; Switching Playlists / Albums / Artists in the Library
- Do not use: 7 or more filters (use Text Field with Type Dropdown); Starting an action (use Button)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Announce the selected state; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: chip, filter, segment
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Pagination & Tabs, component set, 10 variants
- Variants: Selected = False / True; State = Enabled / Pressed / Disabled / Hovered / Focused (default Selected=False, State=Enabled)
- Properties: Label (TEXT, default "Filter")
- Nests: nothing
- Note: The hit row is 48 dp tall while the visible chip is smaller.
<!-- spec:end -->

## Tab Item
<!-- docs:start -->
- Use: Inside Primary Tabs only, for Music / Podcasts style switching
- Do not use: On its own (use Primary Tabs); Filtering a list (use Filter Chip)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Selected tab is announced as selected; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: tab, segment
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Pagination & Tabs, component set, 10 variants
- Variants: Selected = False / True; State = Enabled / Hovered / Focused / Pressed / Disabled (default Selected=False, State=Enabled)
- Properties: Label (TEXT, default "MUSIC")
- Nests: nothing
- Note: Condensed bold label (`M3/headline_small_emphasized`).
<!-- spec:end -->

## Navigation Item
<!-- docs:start -->
- Use: Inside Bottom Navigation only
- Do not use: Actions on the current screen (use Icon Button)
- Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Selected item is announced as selected; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: navigation, tab bar, destination
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Pagination & Tabs, component set, 6 variants
- Variants: Selected = False / True; State = Enabled / Pressed / Disabled (default Selected=False, State=Enabled)
- Properties: Label (TEXT, default "Explore"); Icon (INSTANCE_SWAP, default Icon/explore)
- Nests: nothing
- Note: The source marks the selected item by color only; there is no M3 active-indicator pill (open difference).
<!-- spec:end -->

## Primary Tabs
<!-- docs:start -->
- Use: Top-level content switch inside one destination
- Do not use: Moving between app destinations (use Bottom Navigation); More than 2 small filters (use Filter Chip)
- Content: Tab labels in capitals as in the source: MUSIC, PODCASTS
- Accessibility: Tabs are a tab list; the selected tab is announced; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: tabs, music, podcasts
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Pagination & Tabs, single component, 207 x 56 dp
- Properties: First Tab (INSTANCE_SWAP, default Selected=True, State=Enabled); Second Tab (INSTANCE_SWAP, default Selected=False, State=Enabled)
- Nests: Tab Item
- Note: Default 207 x 56. Tab Items are swapped in through First Tab and Second Tab; first selected, second reads PODCASTS.
- Anatomy: First Tab (Tab Item); Second Tab (Tab Item)
<!-- spec:end -->

## Bottom Navigation
<!-- docs:start -->
- Use: Bottom of every top-level screen on compact windows
- Do not use: Actions on the current screen; Fewer than 3 destinations
- Accessibility: Each item has a visible label; Selected destination is announced; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: bottom navigation, navigation bar, tab bar
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ Pagination & Tabs, single component, 375 x 58 dp
- Properties: First Item (INSTANCE_SWAP, default Selected=True, State=Enabled); Second Item (INSTANCE_SWAP, default Selected=False, State=Enabled); Third Item (INSTANCE_SWAP, default Selected=False, State=Enabled); Fourth Item (INSTANCE_SWAP, default Selected=False, State=Enabled)
- Nests: Navigation Item
- Note: 58 dp tall, items 52 (source; M3 80). Full width, docked to the bottom of the frame.
- Note: Default items: Explore (selected), Search, Connect, Your Library.
- Anatomy: Container; First to Fourth Item (Navigation Item)
<!-- spec:end -->

## Top App Bar
<!-- docs:start -->
- Use: Top of top-level screens such as Explore; Show Actions off for screens with a title only, such as Search & Discover
- Do not use: The full player (use Playlist App Bar)
- Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark; Every action has an accessible name; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: app bar, header, top bar
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ App Bar, single component, 375 x 64 dp
- Properties: Title (TEXT, default "EXPLORE"); Show Actions (BOOLEAN, default on)
- Nests: Icon Button, Avatar, Badge
- Note: 64 dp tall, title in `M3/headline_small_emphasized`, caps.
- Anatomy: Title; Notifications (Icon Button); Community (Icon Button); Profile (Avatar + Badge)
<!-- spec:end -->

## Playlist App Bar
<!-- docs:start -->
- Use: Top of the Now Playing and Lyrics screens
- Do not use: Top-level screens (use Top App Bar)
- Accessibility: Title and AI Mix label: 4.5:1 (WCAG 1.4.3) in Light, Dark; Collapse is announced as Close player; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: player header, now playing, ai mix
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ App Bar, single component, 375 x 64 dp
- Properties: Title (TEXT, default "Arabic Music Mix"); Switch (INSTANCE_SWAP, default Selected=False, State=Enabled); AI Mix Label (TEXT, default "AI MIX"); Source Label (TEXT, default "PLAYLIST")
- Nests: Icon Button, Switch
- Note: 64 dp tall. Source Label property (default PLAYLIST) in `M3/label_medium_emphasized`; AI MIX label with an `auto_awesome` sparkle under its end; the Collapse Icon Button is 40 dp.
- Anatomy: Collapse (Icon Button 40 dp, expand_more); Source Label (M3/label_medium_emphasized, e.g. PLAYLIST); Title (M3/body_small); AI Mix label (M3/label_medium_emphasized) + sparkle under its end; Switch
<!-- spec:end -->

## Mini Player
<!-- docs:start -->
- Use: Every top-level screen while something is playing
- Do not use: Inside the full player
- Accessibility: Title and artist: 4.5:1 (WCAG 1.4.3) in Light, Dark; Tapping the bar opens Now Playing; Like and Play are separate targets; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: mini player, now playing, playback
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ Player Controls, single component, 351 x 56 dp
- Properties: Artwork (INSTANCE_SWAP, default Artwork); Track Metadata (INSTANCE_SWAP, default Track Metadata)
- Nests: Artwork, Track Metadata, Icon Button
- Note: 351 x 56 dp, 12 dp inset from the screen edges, sits 4 dp above Bottom Navigation. No progress line (open difference).
- Anatomy: Artwork; Track Metadata; Like (Icon Button); Play (Icon Button, Inverse)
<!-- spec:end -->

## Playback Progress
<!-- docs:start -->
- Use: Full player, under the track title
- Do not use: Loading states (use Progress Indicator alone)
- Accessibility: Times: 4.5:1 (WCAG 1.4.3) in Light, Dark; Announce position as elapsed of total; seeking needs a 48 dp tall hit area; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: progress, seek, scrubber, timeline
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Player Controls, single component, 343 x 36 dp
- Properties: Elapsed Time (TEXT, default "00:03"); Total Time (TEXT, default "03:48"); Progress Indicator (INSTANCE_SWAP, default Value=40)
- Nests: Progress Indicator
- Note: 343 x 36. The Progress Indicator swap defaults to Value=40; set the value per track. The source bar is full-bleed 4 dp with a round thumb; the DS bar has no thumb and is inset (open difference).
- Anatomy: Progress Indicator; Elapsed Time; Total Time
<!-- spec:end -->

## Playback Controls
<!-- docs:start -->
- Use: Full player (Now Playing and Lyrics)
- Do not use: Compact contexts (use Mini Player)
- Accessibility: Every control has an accessible name; Play switches to Pause; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: player, controls, play, pause, next
<!-- docs:end -->

<!-- spec:start -->
- Spec: Organism, page ➜ Player Controls, single component, 343 x 72 dp
- Nests: Icon Button
- Note: 343 x 72. Play is a 64 dp round Inverse Icon Button. Like, Previous, Next and Download are Standard Icon Buttons.
- Note: No downloading (cloud with pause) icon yet.
- Anatomy: Like; Previous; Play (Inverse, 64 dp); Next; Download
<!-- spec:end -->

## Player Utility Bar
<!-- docs:start -->
- Use: Bottom of the Now Playing and Lyrics screens
- Do not use: Primary playback actions (use Playback Controls)
- Accessibility: Labels: 4.5:1 (WCAG 1.4.3) in Light, Dark; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: lyrics, queue, audio, player
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Player Controls, component set, 4 variants
- Variants: Active = None / Lyrics / Queue / Audio (default Active=None)
- Properties: Lyrics Label (TEXT, default "LYRICS"); Queue Label (TEXT, default "QUEUE"); Audio Label (TEXT, default "AUDIO"); Icon lyrics (INSTANCE_SWAP, default Icon/lyrics); Icon queue music (INSTANCE_SWAP, default Icon/queue_music); Icon graphic eq (INSTANCE_SWAP, default Icon/graphic_eq)
- Nests: nothing
- Note: Active = Lyrics shows the open view as an inverse pill; None on Now Playing. Labels are TEXT properties; icons are swaps.
- Anatomy: Lyrics (icon + label); Queue (icon + label); Audio (icon + label)
- Behavior: Active marks the open view with an inverse pill (Lyrics on the Lyrics screen); None on Now Playing
<!-- spec:end -->
