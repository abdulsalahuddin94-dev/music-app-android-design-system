# Music App - Project Brief

Intake answers (Design_System_Intake_Skill). Paths are relative to the Root, never absolute. Fill as the intake runs; never re-ask what is recorded here.
Order asked: 0.0-0.2, then Platform 1.1-1.4, then 0.3-0.8, then Path.

## Basics
| # | Question | Answer |
|---|---|---|
| 0.1 | Project name | Music App (Abdul accepted the suggested name; 2026-10-13) |
| 0.2 | Figma links (DS file, Design files with names; connected file confirmed?) | DS: Brownfield DS (igARrYUXQ2K2nGvQPKKhXl); Design file: Brownfield Design (ev280FjNRmVhoCAvnnHfqT). Earlier trial in Figma only, no local folder. Figma plan: Professional or higher (0.2b) |
| 0.3 | Local folder (relative, with platform suffix) | `My Projects/Music_App_Android/` |
| 0.3d | Solo / Team | Solo |
| 0.4 | Color modes (Light only / Light and Dark / Dark only) | Light and Dark, from Brownfield DS (Semantic modes), confirmed 2026-10-13 |
| 0.5 | Arabic / RTL | No RTL layout (Arabic content only), from Brownfield DS, confirmed 2026-10-13 |
| 0.6 | Fonts (Latin / Arabic) | Roboto + Roboto Condensed Bold (emphasized headlines), from the DS text styles, confirmed 2026-10-13 |
| 0.6b | Icon library (platform default / existing set in the Figma project / Phosphor / Tabler / Heroicons / Remix Icon / other) | Existing set on → Icons (37 Material Symbols names), confirmed 2026-10-13. Token references: none |
| 0.7 | Storybook (Yes / Later, ask at: ... / No) | Published: https://abdulsalahuddin94-dev.github.io/music-app-android-design-system/ (repo abdulsalahuddin94-dev/music-app-android-design-system, gh-pages branch); local `storybook` on port 6009 |
| 0.8 | Example screens (Yes after components / No) | Skipped: Brownfield, the flow in Brownfield Design is organized and rebuilt from the DS |

## Platform
| # | Question | Answer |
|---|---|---|
| 1.1 | Web / Mobile | Mobile (screens are 375 wide) |
| 1.2 | iOS / Android / Both | Android |
| 1.3 | Both: Native / Cross-platform (one shared design) | |
| 1.4 | Native: shared Brand Foundation file (Yes / No) | |
| 1.5 | Cross-platform: framework (Flutter / React Native) and base (Material 3 / Apple HIG / Custom) | |
| - | Sibling platform folder (Both + Native) | |
| - | Main Skill(s) loaded | Android_Design_System_Skill |

## Path
| # | Question | Answer |
|---|---|---|
| 2.1 | Greenfield / Brownfield | Brownfield (Abdul's first message: earlier trial built from screenshots of a music app) |
| 2.2 | Brownfield type (1 screens, 2 live code, 3 DS + unlinked screens) | 3, Scenario C; DS in its own library file (2.3) |
| 3.1 | Existing AI-ready DS / Reference template (entry id from references.json) / No | |
| 3.3 | Brand color(s) and contrast pre-check | |
| 3.4 | Industry | |

## Inputs
- Brand: `Inputs/Brand/`
- Inspiration: `Inputs/Inspiration/`
- Screens: `Inputs/Screens/`
- Research: `Inputs/Research/`

## Design direction
- Style:
- Corners / density / elevation:
- Type personality / icon weight:
- Brand contrast result and fix:

## Intake Summary (approved: <date>)
```
Project: <name>            Local folder: <path>
Figma: <links and roles>
Platform: <Web / iOS / Android / Both native (+ Brand Foundation yes/no) / Both cross-platform (Flutter / RN, base) / Both Mobile Adaptive (EN or EN+AR)> -> Main Skill(s): <names>
Modes: <Light / Dark>      RTL: <Yes/No>      Fonts: <Latin / Arabic>
Icons: <library (license)> / existing set in <file or library>
Path: <Greenfield 3a/3b-3d | Brownfield type 1/2/3>
Inputs found: Brand <n files / empty>, Inspiration <n / empty>, Screens <n / link>, Research <n / empty>
Direction: <style, corner/density/elevation, brand contrast result and fix>
Screens: <Yes after components / No>
Storybook: <Yes after components / Later (ask at: ...) / No>
Next step: done. Optional follow-ups: drop the app icon into ➜ App Icon; progress thumb, downloading icon and lyrics fade (registry gaps); move docs/ci workflows to .github/workflows after `gh auth refresh -s workflow`.
```

## Figma
Registry: `status.json > figma` (register Design files with `python tools/project_status.py "<folder>" --add-design-file <url> --name "<name>"`).
- Design System file:
- Design files:
- Last library publish:

## Checkpoints
Status is `Ready for review` until the user replies; only the user's approval sets `Approved` (agents never write Approved, Passed or Completed).

| Checkpoint | Status | Date |
|---|---|---|
| Foundation | Approved (Abdul) | 2026-10-13 |
| Components | Approved (Abdul) | 2026-10-13 |
| Screens | Approved (Abdul) | 2026-10-13 |

## User to-do
- 

## Status
- Phase: Intake
- Next step (the next session starts here, Intake section 0c): 
