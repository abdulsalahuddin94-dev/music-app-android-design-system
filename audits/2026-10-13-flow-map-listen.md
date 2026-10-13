# Flow map: Listen (Music App, Android)
Status: approved by Abdul (2026-10-13).

Source: the 7 screenshots on Brownfield Design > Page 1 (`image 1` to `image 7`). Five of them were already rebuilt from the DS by the earlier trial (section `⭐ Screens (DS)`, once Dark and once Light); Lyrics (`image 6`) and Search & Discover (`image 7`) were not.

## 1. Flow overview
- **Feature:** browse, find and play music and podcasts.
- **User:** a listener on an Android phone (compact window, 375 dp), Arabic and English content in a left-to-right UI.
- **Goal:** start or continue playback and control it.
- **Entry points:** app start (Explore tab), the four Bottom Navigation tabs, the Mini Player (opens Now Playing), a notification (opens Now Playing).
- **Success exit:** a track plays; the user controls it from Now Playing, the Mini Player or Lyrics.
- **Failure exits:** no network, nothing in the library, a search with no results (all `not in source`).

## 2. Screen map

| # | Screen | Type | Opened by | Status | Notes |
|---|---|---|---|---|---|
| 1 | Explore | Screen (long scroll) | App start, Explore tab | Built (Explore - Full + Explore - Viewport) | Filter chips All / Arabic / International / Podcasts |
| 2 | Search & Discover | Screen (long scroll) | Search tab | **To build** (`image 7`) | Search bar, Radar button, Popular and Moods & Genres grids |
| 3 | Library - Music | Screen | Your Library tab, Primary Tabs = MUSIC | Built | Playlists / Albums / Artists chips |
| 4 | Library - Podcasts | Screen | Primary Tabs = PODCASTS | Built | Episodes / Shows chips, Continue playing |
| 5 | Now Playing | Screen (full player) | Mini Player tap, notification | Built | Collapse returns to the previous tab |
| 6 | Lyrics | Screen (full player) | Lyrics in the Player Utility Bar | **To build** (`image 6`) | Current line highlighted, past and next lines dimmed |
| - | Connect | Screen | Connect tab | `not in source` | Out of scope (below) |

## 3. State matrix

**Explore:** Default (built) · Loading (`not in source`: rails show skeletons) · Offline (`not in source`) · Filter selected (built: chip selected, rails filtered).

**Search & Discover**

| State | Trigger | What changes | What the user can do |
|---|---|---|---|
| Default | Search tab opens | Popular and Moods & Genres grids | Type a search, tap Radar, tap a genre |
| Typing / results | Taps the search bar | `not in source`: results list | Pick a result, clear, go back |
| No results | Search returns nothing | `not in source`: empty message with a hint | Edit the search |
| Offline | No network | `not in source` | Retry |

**Library - Music / Podcasts:** Default (built) · Empty library (`not in source`: empty state with a Create playlist action) · Chip selected (built).

**Now Playing**

| State | Trigger | What changes | What the user can do |
|---|---|---|---|
| Playing | Track starts | Play shows pause | Pause, skip, like, download, open Lyrics / Queue / Audio |
| Paused | Taps pause | Pause shows play_arrow | Play |
| AI Mix on | Switch on | Switch selected | Turn it off |

**Lyrics**

| State | Trigger | What changes | What the user can do |
|---|---|---|---|
| Synced | Lyrics open | Current line bright, past lines dimmed, next lines faded | Scroll lines, control playback, close (collapse) |
| No lyrics | Track has none | `not in source`: message "Lyrics not available" | Go back to Now Playing |

## 4. Decision points
- `Decision: Library tab` MUSIC -> 3, PODCASTS -> 4.
- `Decision: Player view` Lyrics -> 6, Queue -> `not in source`, Audio -> `not in source`; collapse -> back to the tab the player opened from.
- `Decision: Search` result picked -> 5 (plays) or an album / playlist page (`not in source`).

## 5. Usability pre-check (Nielsen 3, 4, 5, 9)
- **3, exit:** every player view has a collapse (expand_more); every tab screen has Bottom Navigation. OK.
- **4, one name per concept:** "Your Library" (tab) vs "Library" (title): keep "Your Library" on the tab only. Lyrics / Queue / Audio labels match between Now Playing and Lyrics. OK.
- **5, destructive steps:** none in this flow.
- **9, recover from errors:** offline and no-results states are `not in source`; listed below for Abdul to decide.

## 6. Not designed now
Connect tab, Queue and Audio views, search results and no-results, offline and loading states, empty library, album / playlist detail. The source has none of them; each can be added later as its own flow.

## 7. Figma placement (Brownfield Design)
- Page `Listen` (renamed from `Page 1`): one Section per screen, `Listen / <Screen>`, holding the Dark frame, the Light frame and its source screenshot side by side, frames named `Listen / <Screen> / Dark` and `Listen / <Screen> / Light`.
- Screen order left to right follows the tabs: Explore, Search & Discover, Library - Music, Library - Podcasts, Now Playing, Lyrics.
- Sizes: kept as built (375 x 813 viewports, long-scroll frames 375 x 1132 / 1725, Brownfield rule); new screens 375 x 812 viewport, Search & Discover also as a 375 long-scroll frame like Explore - Full.
- Page `Archive` stays as it is.
