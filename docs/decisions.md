# Music App - Decisions

Why each decision was made (intake answers, fix-on-create results, recolor log). Newest first.
Token, property and breaking changes, deprecations and trade-offs get a numbered decision record: format and when to write one in `Workflow_References/governance/decision-record.md`.

## DR-001 (2026-10-13): remove the danger family and surface_variant
- Context: Variable Map low-confidence rows. `md/sys/color/danger`, `on_danger`, `danger_container`, `on_danger_container` repeat the `error` role with near-identical values; `md/sys/color/surface_variant` is deprecated in Material 3 (replaced by `surface_container_highest`). None is bound in any DS component.
- Decision (Abdul): merge the danger family into `error` (delete the four variables) and delete `surface_variant`.
- Consequence: 5 fewer Semantic variables; no DS component changes. The Design file audit (Scenario C step 3) checks that no screen binds them before they are deleted; any screen binding is re-pointed to the error / surface_container_highest equivalent first.

## Fix on create, Scenario C step 2 (2026-10-13), applied without asking (nothing visible changes)
- Typography: 45 typescale variables had no scopes; set LINE_HEIGHT, LETTER_SPACING, FONT_WEIGHT, FONT_SIZE, FONT_FAMILY by leaf name.
- Pages: 22 page names moved to the reference convention (`⭐ Setup` -> `⭐Setup`, `→ Icons` -> `➜ Icons`, ...).
- DR-001 applied: `danger`, `on_danger`, `danger_container`, `on_danger_container`, `surface_variant` deleted (0 uses in DS components, 0 uses in Brownfield Design's 830 library instances).
- Not applied (proposal only): HCT tone normalization of the palettes (62 value changes, the brand neon `#D7FF00` would shift).

## DR-002 (2026-10-13): add the Size collection
- Context: no size tokens; control, field and list heights were raw in components.
- Decision (Abdul, new-token approval "1"): new collection `Size` (one mode `Value`), 11 FLOAT variables `md/sys/size/{control/xsmall 32, control/small 40, control/medium 56, control/large 96, control/xlarge 136, text_field 56, list_item/one_line 56, list_item/two_line 72, list_item/three_line 88, touch_target 48, icon 24}`, scope WIDTH_HEIGHT, Android code syntax.
- Consequence: components bind their heights to these in the Components phase. State layers, role radius and extra spacing were asked again (only "1" was received).

## DR-003 (2026-10-13): Listen flow tokens and Dark category tones
- New category colors for Genre Card: category_blue, category_green (new palettes, curve of cyan), category_red (error palette), category_purple (purple palette); Light tone 40 with on_primary text, Dark tone 80 with dark text (M3). Abdul kept the M3 Dark tones over the source's vivid Dark tiles.
- Kept by DS rule over pixel fidelity: Search Bar 56 dp, Bottom Navigation 80 dp, Mini Player 64 dp, player background `surface` (the source tints it from the artwork at runtime).
