# Variables - Brownfield DS (Music App, Android)

Generated from `data/tokens.json` (Figma export 2026-10-13, 255 variables, 6 collections). The JSON wins if a number differs. Find variables by name, never by id. Code syntax is `ANDROID` only.

| Collection | Modes | Variables |
|---|---|---|
| Primitives | Value | 99 |
| Semantic | Light, Dark | 50 |
| Spacing | Value | 11 |
| Shape | Value | 7 |
| Typography | Value | 77 |
| Size | Value | 11 |

## Primitives (mode Value, scope none: not selectable in the pickers)

Palettes `md/ref/palette/<family>/<tone>`, tones 0, 10, 20, 30, 40, 50, 60, 70, 80, 95, 100 (no 90). Code syntax `md_ref_palette_<family>_<tone>`.

| Family | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 95 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| neutral | `#000000` | `#101010` | `#181818` | `#202020` | `#303030` | `#484848` | `#606060` | `#787878` | `#A8AAAD` | `#F5F5F5` | `#FFFFFF` |
| primary | `#000000` | `#232900` | `#434C00` | `#535C00` | `#6B7400` | `#8A9300` | `#A7B200` | `#BBCE00` | `#D7FF00` | `#F4FFD9` | `#FFFFFF` |
| error | `#000000` | `#450A0A` | `#7F1D1D` | `#991B1B` | `#B91C1C` | `#DC2626` | `#EF4444` | `#FCA5A5` | `#FECACA` | `#FEF2F2` | `#FFFFFF` |
| purple | `#000000` | `#2E1065` | `#4C1D95` | `#5B21B6` | `#6D28D9` | `#7C3AED` | `#8B5CF6` | `#A78BFA` | `#C4B5FD` | `#F5F3FF` | `#FFFFFF` |
| cyan | `#000000` | `#083344` | `#164E63` | `#155E75` | `#0E7490` | `#0891B2` | `#06B6D4` | `#22D3EE` | `#67E8F9` | `#ECFEFF` | `#FFFFFF` |
| magenta | `#000000` | `#500724` | `#831843` | `#9D174D` | `#BE185D` | `#DB2777` | `#EC4899` | `#F472B6` | `#F9A8D4` | `#FDF2F8` | `#FFFFFF` |
| yellow | `#000000` | `#451A03` | `#78350F` | `#92400E` | `#B45309` | `#D97706` | `#F59E0B` | `#FBBF24` | `#FDE68A` | `#FFFBEB` | `#FFFFFF` |
| blue | `#000000` | `#1F2167` | `#2E3891` | `#3043AD` | `#3651D6` | `#456DFF` | `#659DFF` | `#8DBCFF` | `#B0D4FF` | `#F6F9FF` | `#FFFFFF` |
| green | `#000000` | `#00391F` | `#07572F` | `#136834` | `#15803D` | `#219E49` | `#55C04C` | `#77DA53` | `#A4EB73` | `#F0FFF2` | `#FFFFFF` |

## Semantic color (modes Light, Dark; aliases to Primitives only)

Name prefix `md/sys/color/`. Code syntax `md_sys_color_<name>`. Resolved hex in brackets.

| Name | Light | Dark | Scopes |
|---|---|---|---|
| `primary` | `primary/30` [#535C00] | `primary/80` [#D7FF00] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `on_primary` | `neutral/100` [#FFFFFF] | `neutral/10` [#101010] | TEXT_FILL |
| `primary_container` | `primary/95` [#F4FFD9] | `primary/30` [#535C00] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_primary_container` | `primary/10` [#232900] | `primary/95` [#F4FFD9] | TEXT_FILL |
| `secondary` | `neutral/30` [#202020] | `neutral/80` [#A8AAAD] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `on_secondary` | `neutral/100` [#FFFFFF] | `neutral/10` [#101010] | TEXT_FILL |
| `secondary_container` | `neutral/95` [#F5F5F5] | `neutral/30` [#202020] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_secondary_container` | `neutral/10` [#101010] | `neutral/95` [#F5F5F5] | TEXT_FILL |
| `tertiary` | `purple/40` [#6D28D9] | `purple/80` [#C4B5FD] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `on_tertiary` | `neutral/100` [#FFFFFF] | `purple/10` [#2E1065] | TEXT_FILL |
| `tertiary_container` | `purple/95` [#F5F3FF] | `purple/30` [#5B21B6] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_tertiary_container` | `purple/10` [#2E1065] | `purple/95` [#F5F3FF] | TEXT_FILL |
| `error` | `error/40` [#B91C1C] | `error/80` [#FECACA] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `on_error` | `neutral/100` [#FFFFFF] | `error/10` [#450A0A] | TEXT_FILL |
| `error_container` | `error/95` [#FEF2F2] | `error/30` [#991B1B] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_error_container` | `error/10` [#450A0A] | `error/95` [#FEF2F2] | TEXT_FILL |
| `surface` | `neutral/100` [#FFFFFF] | `neutral/10` [#101010] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_surface` | `neutral/10` [#101010] | `neutral/100` [#FFFFFF] | TEXT_FILL |
| `on_surface_variant` | `neutral/30` [#202020] | `neutral/80` [#A8AAAD] | TEXT_FILL |
| `surface_container_lowest` | `neutral/100` [#FFFFFF] | `neutral/0` [#000000] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `surface_container_low` | `neutral/95` [#F5F5F5] | `neutral/10` [#101010] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `surface_container` | `neutral/95` [#F5F5F5] | `neutral/20` [#181818] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `surface_container_high` | `neutral/95` [#F5F5F5] | `neutral/30` [#202020] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `surface_container_highest` | `neutral/80` [#A8AAAD] | `neutral/40` [#303030] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `outline` | `neutral/50` [#484848] | `neutral/60` [#606060] | TEXT_FILL, STROKE_COLOR |
| `outline_variant` | `neutral/80` [#A8AAAD] | `neutral/30` [#202020] | TEXT_FILL, STROKE_COLOR |
| `inverse_surface` | `neutral/20` [#181818] | `neutral/95` [#F5F5F5] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `inverse_on_surface` | `neutral/95` [#F5F5F5] | `neutral/20` [#181818] | TEXT_FILL |
| `inverse_primary` | `primary/80` [#D7FF00] | `primary/40` [#6B7400] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `scrim` | `neutral/0` [#000000] | `neutral/0` [#000000] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `shadow` | `neutral/0` [#000000] | `neutral/0` [#000000] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `category_cyan` | `cyan/40` [#0E7490] | `cyan/80` [#67E8F9] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `category_magenta` | `magenta/40` [#BE185D] | `magenta/80` [#F9A8D4] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `category_yellow` | `yellow/40` [#B45309] | `yellow/80` [#FDE68A] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `warning` | `yellow/40` [#B45309] | `yellow/80` [#FDE68A] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `on_warning` | `yellow/100` [#FFFFFF] | `yellow/20` [#78350F] | TEXT_FILL |
| `warning_container` | `yellow/95` [#FFFBEB] | `yellow/30` [#92400E] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_warning_container` | `yellow/20` [#78350F] | `yellow/95` [#FFFBEB] | TEXT_FILL |
| `success` | `cyan/40` [#0E7490] | `cyan/80` [#67E8F9] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `on_success` | `cyan/100` [#FFFFFF] | `cyan/20` [#164E63] | TEXT_FILL |
| `success_container` | `cyan/95` [#ECFEFF] | `cyan/30` [#155E75] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_success_container` | `cyan/20` [#164E63] | `cyan/95` [#ECFEFF] | TEXT_FILL |
| `info` | `purple/40` [#6D28D9] | `purple/80` [#C4B5FD] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `on_info` | `purple/100` [#FFFFFF] | `purple/20` [#4C1D95] | TEXT_FILL |
| `info_container` | `purple/95` [#F5F3FF] | `purple/30` [#5B21B6] | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `on_info_container` | `purple/20` [#4C1D95] | `purple/95` [#F5F3FF] | TEXT_FILL |
| `category_blue` | `blue/40` [#3651D6] | `blue/80` [#B0D4FF] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `category_green` | `green/40` [#15803D] | `green/80` [#A4EB73] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `category_red` | `error/40` [#B91C1C] | `error/80` [#FECACA] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |
| `category_purple` | `purple/40` [#6D28D9] | `purple/80` [#C4B5FD] | FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR |

## Spacing (mode Value, scope GAP)

| Name | Value (dp) | Code syntax |
|---|---|---|
| `0` | 0 | `md_sys_spacing_0` |
| `4` | 4 | `md_sys_spacing_4` |
| `8` | 8 | `md_sys_spacing_8` |
| `12` | 12 | `md_sys_spacing_12` |
| `16` | 16 | `md_sys_spacing_16` |
| `20` | 20 | `md_sys_spacing_20` |
| `24` | 24 | `md_sys_spacing_24` |
| `32` | 32 | `md_sys_spacing_32` |
| `48` | 48 | `md_sys_spacing_48` |
| `56` | 56 | `md_sys_spacing_56` |
| `64` | 64 | `md_sys_spacing_64` |

## Shape (mode Value, scope CORNER_RADIUS)

| Name | Value (dp) | Code syntax |
|---|---|---|
| `none` | 0 | `md_sys_shape_corner_none` |
| `extra_small` | 4 | `md_sys_shape_corner_extra_small` |
| `small` | 8 | `md_sys_shape_corner_small` |
| `medium` | 12 | `md_sys_shape_corner_medium` |
| `large` | 16 | `md_sys_shape_corner_large` |
| `extra_large` | 28 | `md_sys_shape_corner_extra_large` |
| `full` | 999 | `md_sys_shape_corner_full` |

## Size (mode Value, scope WIDTH_HEIGHT)

| Name | Value (dp) | Code syntax |
|---|---|---|
| `control/xsmall` | 32 | `md_sys_size_control_xsmall` |
| `control/small` | 40 | `md_sys_size_control_small` |
| `control/medium` | 56 | `md_sys_size_control_medium` |
| `control/large` | 96 | `md_sys_size_control_large` |
| `control/xlarge` | 136 | `md_sys_size_control_xlarge` |
| `text_field` | 56 | `md_sys_size_text_field` |
| `list_item/one_line` | 56 | `md_sys_size_list_item_one_line` |
| `list_item/two_line` | 72 | `md_sys_size_list_item_two_line` |
| `list_item/three_line` | 88 | `md_sys_size_list_item_three_line` |
| `touch_target` | 48 | `md_sys_size_touch_target` |
| `icon` | 24 | `md_sys_size_icon` |

## Typography (mode Value)

Name `md/sys/typescale/<role>/<size|line_height|tracking|weight|font>`; scopes FONT_SIZE, LINE_HEIGHT, LETTER_SPACING, FONT_WEIGHT, FONT_FAMILY. Code syntax `md_sys_typescale_<role>_<prop>`.

| Role | size | line_height | tracking | weight | font |
|---|---|---|---|---|---|
| `display_large` | 57 | 64 | -0.25 | 400 | Roboto |
| `display_medium` | 45 | 52 | 0 | 400 | Roboto |
| `display_small` | 36 | 44 | 0 | 400 | Roboto |
| `headline_large` | 32 | 40 | 0 | 400 | Roboto |
| `headline_medium` | 28 | 36 | 0 | 400 | Roboto |
| `headline_small` | 24 | 32 | 0 | 400 | Roboto |
| `title_large` | 22 | 28 | 0 | 400 | Roboto |
| `title_medium` | 16 | 24 | 0.15 | 500 | Roboto |
| `title_small` | 14 | 20 | 0.1 | 500 | Roboto |
| `body_large` | 16 | 24 | 0.5 | 400 | Roboto |
| `body_medium` | 14 | 20 | 0.25 | 400 | Roboto |
| `body_small` | 12 | 16 | 0.4 | 400 | Roboto |
| `label_large` | 14 | 20 | 0.1 | 500 | Roboto |
| `label_medium` | 12 | 16 | 0.5 | 500 | Roboto |
| `label_small` | 11 | 16 | 0.5 | 500 | Roboto |

Emphasized: `md/sys/typescale/emphasized/weight` = 700, `md/sys/typescale/emphasized/condensed_font` = Roboto Condensed.
