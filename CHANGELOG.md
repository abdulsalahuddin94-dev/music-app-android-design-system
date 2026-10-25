# Music App - Changelog

What was built or changed in Figma, newest first. Every build or Figma change session adds one entry with `Storybook synced: no`; a Storybook update marks the entries `yes` (`python tools/project_status.py "My Projects/Music_App_Android" --mark-synced`). The daily check reads only this file and `status.json`, never Figma.

Entry format:

```
## YYYY-MM-DD - <what, e.g. Components: Button, Input Field>
- Storybook synced: yes
- Tool: <Claude Code / Codex / Cursor / Antigravity / ...>
- Changed: <components, variables or styles added, changed or removed>
- Figma file: <name>
- Library published: <yes / no> (DS changes only)
- Design files updated (Accept updates): <name: yes / no, one per linked Design file>
- Phase: <Intake / Foundation / Components / Screens / Storybook / Quick task> (one entry per phase session)
- Tokens: <from `python tools/session_cost.py`, run at the end of the session; `--since <date>` when the phase took several sessions>
- Time: <active time from the same command>
- Deprecated / Removed: <name -> replacement, usage count> (only when something was deprecated or removed; `Workflow_References/governance/deprecation.md`)
```

## 2026-10-25 · Live prototype: review comments applied code-first (Tool: Claude)
- Comment 4177a0cf (Ahmed, Explore - Full): "Discover What's New" section removed in the prototype through prototype/data/overrides.json (Dark 27:1708, Light 31:859; frame 1725 -> 1489). **Pending Figma sync** (status.json > prototype.pending_figma_sync).
- Comment f53a15dc (Ahmed, Explore - Viewport): Viewport frames no longer scroll in the prototype (generator rule, matches Figma). No Figma change.
- Figma: not changed. Storybook synced: n/a (no component change).

## 2026-10-22 - Storybook: 6 gaps found by the Live Prototype trial fixed (Figma is the source)
- Storybook synced: yes
- Tool: Claude Code (FigCli Yolo, Figma read only)
- Changed: storybook/ only, names unchanged, tokens only. Player Utility Bar actions at the top (Figma counter axis MIN); Library Shortcut Tile label wraps (Figma truncation off); Section Header without min-height (Figma hugs: 24 / 36 / 44); Top App Bar `image` for the Profile Avatar photo; Track Metadata `titleStyle` / `subtitleStyle` / `titleLines`, Podcast Episode Card `titleLines` / `hideActiveTrack`, Progress Indicator `hideActive` (instance overrides used in the Listen screens: Now Playing title M3/title_large_emphasized, podcast titles 2 lines, Active Track hidden); Button inside strokes as an inset ring so the padding is Figma's 0 24. The Player Utility Bar padding 0 24 in the screens is an instance override, applied by the prototype, not in the component.
- Figma file: Brownfield DS (read), Brownfield Design (read)
- Library published: no (no Figma change)
- Design files updated (Accept updates): none needed
- Checks: storybook_parity 40/40, 0 name problems, 0 docs pages missing sections; style_parity 100% (5280/5280, 0 differences; was 98.9% with 56); mode_check 0 problems on the 8 changed docs pages in Light and Dark.
- Live Prototype (Listen, 8 screens x Light/Dark) after the fixes: average 97.55% strict, 98.75% with 1px tolerance (was 97.21%); per screen in the trial PR.
- Phase: Storybook
- Storybook not pushed to the published repo (asked first).

## 2026-10-13 - Storybook: built and published
- Storybook synced: yes
- Tool: Claude Code
- Changed: storybook/ (React + Storybook 10, Android Material look in web): 40 components with stories and Docs pages, Welcome, Foundations (Colors, Typography, Sizing, Effects, Icons, Code with Jetpack Compose names and DesignTokens.kt), Light / Dark toolbar.
- Checks: parity 40/40, 0 name problems, 0 docs pages with missing sections; build passes; style check 98.9% (5224/5280), the 56 left are Button padding under a stroke, listed in storybook/README.md
- Published: https://abdulsalahuddin94-dev.github.io/music-app-android-design-system/ (repo abdulsalahuddin94-dev/music-app-android-design-system, gh-pages branch; CI workflows kept in docs/ci until the GitHub login has the workflow permission)

## 2026-10-13 - Finish: final audit, project skills, prototype
- Storybook synced: yes
- Tool: Claude Code (FigCli Yolo)
- Final DS audit: 0 remote, 0 raw values (3979 nodes), 1 known property exception (Media Card Description), 78/78 descriptions, contrast 68/68 pairs pass in Light and Dark, registry = Figma (40 components, 38 icons), readiness 98 (audits/2026-10-13-final-audit.md). Icon Library boards now show all 38 icons.
- Project skills: Foundation_Skill, Form_Elements / Navigation / Data_Display skills, gaps, data/screen-templates.json, DESIGN.md + AGENTS.md block; component_docs check 40/40, token lint 0 errors, recolor ready.
- Usability review: skipped (Abdul)
- Prototype: yes - flows "Listen (Dark)" and "Listen (Light)" from Explore - Viewport: Bottom Navigation (Explore, Search, Your Library), Library tabs (Music / Podcasts), Mini Player -> Now Playing, Lyrics action -> Lyrics and back, Collapse -> Back; 23 links per mode
- Figma files: Brownfield DS (description fix none), Brownfield Design (prototype)

## 2026-10-13 - Screens fidelity round 3 (Abdul's review): source over Material 3
- Storybook synced: yes
- Tool: Claude Code (FigCli Yolo)
- Changed (Brownfield DS): Button / Icon Button height unbound (it forced resized instances to 48); Icon Button icon fills the container minus padding; Playback Controls icons and Play glyph enlarged, Play 64 and Mini Player Play 40 round; Playlist App Bar (Source Label property, 12 px bold / regular, Collapse 40, AI MIX sparkle under the label); new text style M3/label_medium_emphasized; Switch 44 x 24, thumb 18; Search Bar 42; Bottom Navigation 58 (items 52); Mini Player 56; Shortcut Card 56; Podcast Episode Card 186 with an outline_variant border.
- Changed (Brownfield Design): bottom bars re-docked; Search Bar / Shortcut Card instance heights reset; Now Playing title "Arabic Music Mix"; Now Playing controls fill to the bottom.
- Library published: yes (Abdul) ; Design files updated (Accept updates): Brownfield Design: yes
- Design file audit round 3: 16 frames, 0 raw values, 0 detached / local, 16/16 modes, 0 placeholders, readiness 82-90 (audits/2026-10-13-screens-listen-round3.md)
- New standing rule (Abdul): source over platform rules in Brownfield / Code to Design (memory/decisions.md)
- Tokens / Time (whole project so far): 141.3M, 2h 33m active

## 2026-10-13 - Screens: Listen flow organized, Lyrics + Search & Discover built
- Storybook synced: yes
- Tool: Claude Code (FigCli Yolo)
- Changed (Brownfield Design): Page 1 -> Listen, one section per screen (`Listen / <Screen>`) with its source screenshot and Dark / Light frames named `Listen / <Screen> / <Mode>`; Semantic mode pinned on every frame. Now Playing: Audio icon -> settings, progress Value 2. Library - Podcasts: progress values 10 / 10 / 40. New screens: Lyrics (Dark, Light, 375 x 812) and Search & Discover (Full 375 x 1424 and Viewport 375 x 812, Dark and Light; 20 Genre Cards with photos cropped from the source).
- Changed (Brownfield DS): Progress Indicator became a set (Value 2-100, active track scales); Icon/radar added; Lyrics Line Past uses outline.
- Library published: yes (Abdul, twice) ; Design files updated (Accept updates): Brownfield Design: yes
- Design file audit: 16 frames, 0 raw values, 0 detached / local, 0 misused or deleted variables, 16/16 modes pinned, 0 placeholders; fidelity readiness 78-90 (audits/2026-10-13-screens-listen-final.md); fidelity round 2 applied (Lyrics progress block, Search spacing, radar icon, Past lines)
- Decisions: Dark genre colors stay M3 tone 80 (Abdul); Search Bar 56, Bottom Navigation 80, player background surface kept (DS sizes / runtime color)
- Prototype: not asked yet
- Phase: Screens
- Tokens: 50.7M (104.6M total since 2026-10-13 minus 53.9M at the end of Components)
- Time: 47m active (2h 03m total)

## 2026-10-13 - Screens prep: Listen flow components and tokens (DS file)
- Storybook synced: yes
- Tool: Claude Code (FigCli Yolo)
- Changed: flow map (audits/2026-10-13-flow-map-listen.md) and gap table + specs (audits/2026-10-13-flow-listen.md) approved. New Primitives md/ref/palette/blue and green (11 tones each, curve of the cyan ramp); new Semantic md/sys/color/category_blue, category_green, category_red (error palette), category_purple. New components Lyrics Line (6 variants), Lyrics Header, Genre Card (7 colors), new page ➜ Lyrics. Badge became a set (Type Plan / Explicit; Media Card uses Explicit); Button Style Outlined Accent (5 states); Top App Bar Show Actions; Player Utility Bar became a set (Active None / Lyrics / Queue / Audio). Descriptions from the registry (40 components). Light & Dark previews refreshed.
- Figma file: Brownfield DS
- Library published: yes (Abdul)
- Design files updated (Accept updates): Brownfield Design: yes
- Existing screens audit: 10 frames, 0 raw values, 0 detached, readiness 82-90; fidelity fixes approved (audits/2026-10-13-screens-brownfield-design.md)

## 2026-10-13 - Components: docs, states, Size bindings, Light/Dark previews
- Storybook synced: yes
- Tool: Claude Code (FigCli Yolo)
- Changed: component registry written (37 components, docs blocks); Purpose / Usage rules / Accessibility descriptions applied to 37 components (tools/component_docs.py + apply_descriptions) and to 37 Icon/* components. State Default -> Enabled (Text Field, Text Area, Checkbox, Radio); Hovered added (Text Field 3, Text Area, Checkbox 2, Radio 2, Tab Item 2); Navigation Item gets State Enabled / Pressed / Disabled; Button Neutral Disabled / Hovered / Pressed fixed. Heights bound to Size tokens on 101 variants. Search Bar moved to ⭐Form Elements ➜ Search, Status Bar to ⭐Setup ➜ Utilities, ➜ App Bar & Search renamed ➜ App Bar. Media Card Badge and Dialog Buttons exposed; Primary Tabs second tab reads PODCASTS. Component set frames resized, padding / gap / radius bound. Light & Dark Preview boards on all 19 component pages.
- Figma file: Brownfield DS
- Library published: yes (Abdul, 2026-10-13)
- Design files updated (Accept updates): Brownfield Design: yes
- Components audit: 94/100, 0 raw values, 0 remote, 36/36 descriptions, 0 default layer names; its 15 issues fixed or listed as gaps in data/component-registry.json (audits/2026-10-13-components-audit.md)
- Phase: Components
- Tokens: 18.0M (session total 53.9M minus 35.9M at the end of Foundation)
- Time: 18m active (session total 1h 16m)

## 2026-10-13 - Intake + Foundation: Variable Map, safe fixes, Size tokens, linked ⭐Setup pages
- Storybook synced: yes
- Tool: Claude Code (FigCli Yolo)
- Changed: Variable Map written and approved (audits/2026-10-13-variable-map.md). Typography scopes set on 45 variables. Removed md/sys/color/danger, on_danger, danger_container, on_danger_container, surface_variant (DR-001, 0 uses). New collection Size (11 variables, DR-002). 22 pages renamed to ⭐Setup / ➜ convention. New linked pages ➜ Color, ➜ Typography, ➜ Shape, ➜ Spacing (spacing + size), ➜ Elevation, ➜ App Icon (drop zones), Icon Library boards on ➜ Icons; the static Setup preview (96 raw values) replaced by a linked Foundation Overview (Light/Dark).
- Figma file: Brownfield DS
- Library published: no (published after the Components phase)
- Design files updated (Accept updates): Brownfield Design: no
- Foundation audit: 0 raw values on docs boards, 0 remote, contrast 24/24 pass, readiness 92/100 (audits/2026-10-13-foundation-audit.md); its 3 visual issues fixed (typography captions, icon boards, App Icon padding).
- Deprecated / Removed: danger family -> error (0 uses); surface_variant -> surface_container_highest (0 uses)
- Phase: Intake + Foundation (one session)
- Tokens: 35.9M (input 298, cache write 400.4K, cache read 35.4M, output 82.3K; 148 model calls, 1 session(s))
- Time: 58m active (1h 21m from first to last message)

