# Navigation gaps (Music App, Android) - 2026-10-13

Open items only. Source: `data/component-registry.json > gaps`, the components audit and the Listen screen audits (`audits/2026-10-13-screens-listen-round3.md`).

1. **State layers.** Button, Icon Button, Filter Chip, Tab Item and Navigation Item use whole-variant opacity for Hovered, Pressed and Disabled; no M3 state-layer tokens (not approved).
2. **Navigation Item has no active-indicator pill.** The source marks the selected item by color only; the build shows an outlined icon without the lime pill (screen difference on Explore).
3. **Sizes follow the source over Material 3** (Abdul, 2026-10-13): Bottom Navigation 58 (items 52), Mini Player 56, Search Bar 42 (Form Elements), Playlist App Bar Collapse 40, Mini Player Play 40, Playback Controls Play 64. Hit areas stay 48 dp through item width and row height.
4. **Button and Icon Button heights are not bound to Size tokens** (binding forced resized instances to 48; see `memory/lessons.md`, "Size tokens bound on resizable components"). Do not rebind them.
5. **Playback Progress** has no thumb and is inset; the source bar is full-bleed 4 dp with a round thumb (Now Playing and Lyrics fidelity, readiness 82 to 86).
6. **Playback Controls** has no downloading state (cloud with pause icon).
7. **Mini Player** has no progress line; the Dark fill is slightly lighter than the source.
8. **Player background** is `surface`; the source tints the player from the artwork at runtime (DR-003).
9. **Icon swap exceptions:** Playlist App Bar has 1 fixed icon instance without a swap property.
10. **Header offsets.** Explore and Library headers are 5 to 20 px away from the source screenshots (title y 63 vs 57, chips 120 vs 107...). Screen layout, not a component defect.
11. **Not built:** Navigation Rail, Navigation Drawer, Medium and Expanded layouts, Floating Action Button, Snackbar, Menu, Segmented Button, Search results view. The Listen flow (compact 375) does not need them; the Connect tab, Queue and Audio views are `not in source`.
12. **Prototype.** Not asked yet (`CHANGELOG.md`: "Prototype: not asked yet"); the screens have no Figma prototype interactions.
