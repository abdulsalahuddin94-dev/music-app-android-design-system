---
name: music-app-android-form-elements
description: Use when building, auditing or coding anything the user enters data with in the Music App Android design system (Figma file "Brownfield DS"): Text Field, Text Area, Checkbox, Switch, Radio and Search Bar. Covers only the ⭐Form Elements group: which component to use, its variants, properties and states, source sizes and accessibility.
---

# Music App (Android) - Form Elements

> **Node IDs:** ids belong to the Figma file they were read from. Find components by **name** (`figma.root.findAll(n => n.name === 'Button')`), never by an id from this folder.

> **Data files (source of truth):** `../../data/component-registry.json` (variants, properties, docs per component), `../../data/tokens.json`, `../../data/rules.json`, `../../data/screen-templates.json`, `../../docs/decisions.md`. When this file and the JSON differ, the JSON wins.

**Load `../../Foundation_Skill/SKILL.md` first** (variables, text styles, icons, and the rule that the source app wins over Material 3).

Scope: **⭐Form Elements** pages: ➜ Input Fields and Dropdown, ➜ Text Area, ➜ Checkbox, ➜ Toggles, ➜ Radio Buttons, ➜ Search. Platform Android, Material 3 names, compact 375 dp. File: Brownfield DS. References: `references/components.md` (generated usage lines plus spec notes), `references/gaps.md`, `references/screens/` (Light and Dark preview boards of each page).

Dependencies for every field: Typography text styles, Semantic color, Spacing, Shape (Foundation). Search Bar uses the Icon set. The Listen scope has no sign-in or settings form, so only these six components exist.

## 1. Inventory

| Component | Tier | Page | Variants | Properties | Nests |
|---|---|---|---|---|---|
| Text Field | Molecule | ➜ Input Fields and Dropdown | Type (3) x State (5) | Label, Value | - |
| Text Area | Molecule | ➜ Text Area | State (5) | Placeholder | - |
| Checkbox | Atom | ➜ Checkbox | Selected (2) x State (6) | - | - |
| Switch | Atom | ➜ Toggles | Selected (2) x State (5) | - | - |
| Radio | Atom | ➜ Radio Buttons | Selected (2) x State (6) | - | - |
| Search Bar | Molecule | ➜ Search | 1 | Placeholder, Icon search, Icon mic | - |

## 2. Rules for this group

1. Radio holds 2 to 6 options; 7 or more use Text Field with Type Dropdown.
2. Every field has a persistent visible label. The placeholder is never the only label.
3. Errors are shown with text, not only with the red color.
4. Switch for settings that apply at once; Checkbox for choices that need a confirm step; Filter Chip (Navigation) for filtering a list.
5. States are separate variants (Enabled, Hovered, Focused, Pressed, Error, Disabled); disabled content uses `on_surface` at 38%.
6. Search the library or catalog with Search Bar, not Text Field.

## 3. Choose the component

| Need | Use | Not for |
|---|---|---|
| Filled for text entry in forms | Text Field | Long, multi-line text (use Text Area) |
| Free text longer than one line, such as a playlist description or feedback | Text Area | Short single values like a name or email (use Text Field) |
| Selecting several items at once | Checkbox | Settings that apply immediately (use Switch) |
| A binary setting that applies at once, without a Save button | Switch | Choices that need a confirm step (use Checkbox) |
| 2 to 6 mutually exclusive options that should all stay visible | Radio | 7 or more options (use Text Field with Type Dropdown) |
| Top of Library and Search screens | Search Bar | Form fields (use Text Field) |

## 4. Components

### Atoms

#### Checkbox

Independent on/off choice in a list of options, or a single consent.

- Spec: Atom, page ➜ Checkbox, component set, 12 variants
- Variants: Selected = False / True; State = Enabled / Hovered / Focused / Pressed / Disabled / Error (default Selected=False, State=Enabled)
- Nests: nothing
- Note: The component is the box only: build the row (box + label) in the screen; the whole row is the target.
- Use for: Selecting several items at once; One consent or opt-in line
- Do not use for: Settings that apply immediately (use Switch); Exactly one choice from a list (use Radio)
- Behavior: Error state marks a required choice that is missing
- Accessibility: Box border and check: 3:1 (WCAG 1.4.11) in Light, Dark; Label the whole row, not only the box; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Switch

Turns one setting on or off immediately, such as AI Mix in the player.

- Spec: Atom, page ➜ Toggles, component set, 10 variants
- Variants: Selected = False / True; State = Enabled / Pressed / Disabled / Hovered / Focused (default Selected=False, State=Enabled)
- Nests: nothing
- Note: Source size: track 44 x 24, thumb 18 (M3 is 52 x 32). The set stays 48 dp tall as the hit area.
- Note: Playlist App Bar nests a Switch for AI Mix through its `Switch` swap.
- Use for: A binary setting that applies at once, without a Save button
- Do not use for: Choices that need a confirm step (use Checkbox); Picking one of several options (use Radio or Filter Chip)
- Behavior: Track 44 x 24 with an 18 dp thumb (source app size); the component stays 48 dp tall as the hit area; Off: on_surface thumb on an outline track; On: the brand track
- Accessibility: Track and handle: 3:1 (WCAG 1.4.11) in Light, Dark; Announce the setting name and its on/off state; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Radio

Single choice from 2 to 6 visible options.

- Spec: Atom, page ➜ Radio Buttons, component set, 12 variants
- Variants: Selected = False / True; State = Enabled / Hovered / Focused / Pressed / Disabled / Error (default Selected=False, State=Enabled)
- Nests: nothing
- Note: Group 2 to 6 options; 7 or more use Text Field Type Dropdown (Abdul).
- Use for: 2 to 6 mutually exclusive options that should all stay visible
- Do not use for: 7 or more options (use Text Field with Type Dropdown); Several answers allowed (use Checkbox)
- Accessibility: Ring and dot: 3:1 (WCAG 1.4.11) in Light, Dark; Group the options under one visible question; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

### Molecules

#### Text Field

Single-line input for short values; Type Dropdown picks one value from 7 or more options.

- Spec: Molecule, page ➜ Input Fields and Dropdown, component set, 15 variants
- Variants: Type = Filled / Outlined / Dropdown; State = Enabled / Hovered / Focused / Error / Disabled (default Type=Filled, State=Enabled)
- Properties: Label (TEXT, default "Label"); Value (TEXT, default "Value")
- Nests: nothing
- Note: Default Type Filled, State Enabled. Hovered and Focused are separate variants.
- Note: Height can bind `md/sys/size/text_field` (56).
- Anatomy: Container; Label; Value; Trailing icon (Dropdown); Active indicator; Supporting text (Error)
- Use for: Filled for text entry in forms; Outlined where a form sits on a busy surface; Dropdown to pick one value from 7 or more options
- Do not use for: Long, multi-line text (use Text Area); Searching the library or catalog (use Search Bar); 2 to 6 visible choices (use Radio)
- Behavior: Focused shows the 2 dp active indicator in primary; Error replaces the supporting text with the error message
- Accessibility: Label and value: 4.5:1 (WCAG 1.4.3) in Light, Dark; Container border / indicator: 3:1 (WCAG 1.4.11) in Light, Dark; Keep a persistent label; never use the placeholder as the only label; Error state shows a text message, not only the red color; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Text Area

Multi-line text input for comments, descriptions and notes.

- Spec: Molecule, page ➜ Text Area, component set, 5 variants
- Variants: State = Enabled / Hovered / Focused / Error / Disabled (default State=Enabled)
- Properties: Placeholder (TEXT, default "Write a message")
- Nests: nothing
- Note: Pair it with a visible label above it; the component holds only the placeholder or value.
- Anatomy: Container; Placeholder or value; Active indicator
- Use for: Free text longer than one line, such as a playlist description or feedback
- Do not use for: Short single values like a name or email (use Text Field)
- Accessibility: Text: 4.5:1 (WCAG 1.4.3) in Light, Dark; Container border: 3:1 (WCAG 1.4.11) in Light, Dark; Pair it with a visible label above it; Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

#### Search Bar

Entry point to search the library or catalog, with an optional voice search mic.

- Spec: Molecule, page ➜ Search, single component, 360 x 42 dp
- Properties: Placeholder (TEXT, default "Search in your library"); Icon search (INSTANCE_SWAP, default Icon/search); Icon mic (INSTANCE_SWAP, default Icon/mic)
- Nests: nothing
- Note: Source size 42 dp tall (M3 56); default width 360, instances fill the row (343 or 351). The hit area stays 48 dp through the row.
- Note: Has no Focused or Hovered state: tapping it opens Search.
- Note: Lives on page ➜ Search in ⭐Form Elements.
- Anatomy: Container; Leading search icon; Placeholder; Trailing mic icon
- Use for: Top of Library and Search screens
- Do not use for: Form fields (use Text Field)
- Accessibility: Placeholder: 4.5:1 (WCAG 1.4.3) in Light, Dark; Mic has its own accessible name (Voice search); Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp

## 5. Tokens

Every component binds Semantic color roles (`on_*` for content, `*_container` for fills, `outline` and `outline_variant` for lines), Spacing for padding and gap, Shape for radius, Typography text styles (`M3/...`) for text, and Size only where Foundation_Skill section 2.6 allows. No raw values: the components audit and the Listen screens audits report 0 raw values, 0 detached, 0 remote.

## 6. Where it is used

Screens built from this group are in `../../data/screen-templates.json` (Explore, Search & Discover, Library - Music, Library - Podcasts, Now Playing, Lyrics). Open items: `references/gaps.md`.
