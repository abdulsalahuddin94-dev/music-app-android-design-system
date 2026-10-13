# Form Elements components (Music App, Android)

Generated usage lines come from data/component-registry.json (python tools/component_docs.py <folder> skills); spec notes below each block are written by hand.

## Text Field
<!-- docs:start -->
- Use: Filled for text entry in forms; Outlined where a form sits on a busy surface; Dropdown to pick one value from 7 or more options
- Do not use: Long, multi-line text (use Text Area); Searching the library or catalog (use Search Bar); 2 to 6 visible choices (use Radio)
- Content: Label in sentence case, 1 to 3 words; Error text says how to fix the value
- Accessibility: Label and value: 4.5:1 (WCAG 1.4.3) in Light, Dark; Container border / indicator: 3:1 (WCAG 1.4.11) in Light, Dark; Keep a persistent label; never use the placeholder as the only label; Error state shows a text message, not only the red color; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: input, text field, form, dropdown, select
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Input Fields and Dropdown, component set, 15 variants
- Variants: Type = Filled / Outlined / Dropdown; State = Enabled / Hovered / Focused / Error / Disabled (default Type=Filled, State=Enabled)
- Properties: Label (TEXT, default "Label"); Value (TEXT, default "Value")
- Nests: nothing
- Note: Default Type Filled, State Enabled. Hovered and Focused are separate variants.
- Note: Height can bind `md/sys/size/text_field` (56).
- Anatomy: Container; Label; Value; Trailing icon (Dropdown); Active indicator; Supporting text (Error)
- Behavior: Focused shows the 2 dp active indicator in primary; Error replaces the supporting text with the error message
<!-- spec:end -->

## Text Area
<!-- docs:start -->
- Use: Free text longer than one line, such as a playlist description or feedback
- Do not use: Short single values like a name or email (use Text Field)
- Content: Placeholder hints at the content, never replaces the label
- Accessibility: Text: 4.5:1 (WCAG 1.4.3) in Light, Dark; Container border: 3:1 (WCAG 1.4.11) in Light, Dark; Pair it with a visible label above it; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: textarea, multi-line, comment, description
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Text Area, component set, 5 variants
- Variants: State = Enabled / Hovered / Focused / Error / Disabled (default State=Enabled)
- Properties: Placeholder (TEXT, default "Write a message")
- Nests: nothing
- Note: Pair it with a visible label above it; the component holds only the placeholder or value.
- Anatomy: Container; Placeholder or value; Active indicator
<!-- spec:end -->

## Checkbox
<!-- docs:start -->
- Use: Selecting several items at once; One consent or opt-in line
- Do not use: Settings that apply immediately (use Switch); Exactly one choice from a list (use Radio)
- Accessibility: Box border and check: 3:1 (WCAG 1.4.11) in Light, Dark; Label the whole row, not only the box; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: checkbox, multi-select, consent
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Checkbox, component set, 12 variants
- Variants: Selected = False / True; State = Enabled / Hovered / Focused / Pressed / Disabled / Error (default Selected=False, State=Enabled)
- Nests: nothing
- Note: The component is the box only: build the row (box + label) in the screen; the whole row is the target.
- Behavior: Error state marks a required choice that is missing
<!-- spec:end -->

## Switch
<!-- docs:start -->
- Use: A binary setting that applies at once, without a Save button
- Do not use: Choices that need a confirm step (use Checkbox); Picking one of several options (use Radio or Filter Chip)
- Accessibility: Track and handle: 3:1 (WCAG 1.4.11) in Light, Dark; Announce the setting name and its on/off state; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: switch, toggle, on off, setting
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Toggles, component set, 10 variants
- Variants: Selected = False / True; State = Enabled / Pressed / Disabled / Hovered / Focused (default Selected=False, State=Enabled)
- Nests: nothing
- Note: Source size: track 44 x 24, thumb 18 (M3 is 52 x 32). The set stays 48 dp tall as the hit area.
- Note: Playlist App Bar nests a Switch for AI Mix through its `Switch` swap.
- Behavior: Track 44 x 24 with an 18 dp thumb (source app size); the component stays 48 dp tall as the hit area; Off: on_surface thumb on an outline track; On: the brand track
<!-- spec:end -->

## Radio
<!-- docs:start -->
- Use: 2 to 6 mutually exclusive options that should all stay visible
- Do not use: 7 or more options (use Text Field with Type Dropdown); Several answers allowed (use Checkbox)
- Accessibility: Ring and dot: 3:1 (WCAG 1.4.11) in Light, Dark; Group the options under one visible question; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: radio, single choice, option
<!-- docs:end -->

<!-- spec:start -->
- Spec: Atom, page ➜ Radio Buttons, component set, 12 variants
- Variants: Selected = False / True; State = Enabled / Hovered / Focused / Pressed / Disabled / Error (default Selected=False, State=Enabled)
- Nests: nothing
- Note: Group 2 to 6 options; 7 or more use Text Field Type Dropdown (Abdul).
<!-- spec:end -->

## Search Bar
<!-- docs:start -->
- Use: Top of Library and Search screens
- Do not use: Form fields (use Text Field)
- Content: Placeholder says what is searched: Search in your library
- Accessibility: Placeholder: 4.5:1 (WCAG 1.4.3) in Light, Dark; Mic has its own accessible name (Voice search); Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp
- Keywords: search, find, voice
<!-- docs:end -->

<!-- spec:start -->
- Spec: Molecule, page ➜ Search, single component, 360 x 42 dp
- Properties: Placeholder (TEXT, default "Search in your library"); Icon search (INSTANCE_SWAP, default Icon/search); Icon mic (INSTANCE_SWAP, default Icon/mic)
- Nests: nothing
- Note: Source size 42 dp tall (M3 56); default width 360, instances fill the row (343 or 351). The hit area stays 48 dp through the row.
- Note: Has no Focused or Hovered state: tapping it opens Search.
- Note: Lives on page ➜ Search in ⭐Form Elements.
- Anatomy: Container; Leading search icon; Placeholder; Trailing mic icon
<!-- spec:end -->
