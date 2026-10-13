# Form Elements gaps (Music App, Android) - 2026-10-13

Open items only. Source: `data/component-registry.json > gaps` and the components audit (`audits/2026-10-13-components-audit.md`, 94/100, its issues fixed or listed here).

1. **State layers.** States use whole-variant opacity (file convention) instead of M3 state-layer frames; state-layer tokens were not approved (DR-002 follow-up). Applies to Text Field, Text Area, Checkbox, Switch, Radio.
2. **Search Bar has no Focused or Hovered state.** Tapping it opens the Search screen, so the source needs none. Add the states if the bar becomes a real input.
3. **Search Bar and Switch sizes follow the source, not Material 3.** Search Bar 42 dp (M3 56), Switch track 44 x 24 with an 18 dp thumb (M3 52 x 32). Hit areas stay 48 dp. Rule: Foundation_Skill section 1.
4. **Checkbox has 6 icon instances without a swap property** (fixed control glyphs).
5. **No form patterns.** The Listen scope has no sign-in, settings or filter-sheet form, so there is no Select / Dropdown menu list, Slider, Date picker or OTP field. Text Field Type Dropdown is a field only (no option list component). Build the option list as its own component when a flow needs it.
6. **Radio 2 to 6 options (Abdul).** 7 or more must use Text Field Type Dropdown; no component enforces it.
7. **Screenshots.** Light and Dark preview boards of each page are in `screens/`. A per-variant screenshot set of all states is in `audits/components/` (one image per component, Light and Dark).
