// ⭐Navigation - working replicas of the Music App Android Figma components (Brownfield DS, read with FigCli 2026-10-13).
// Props use the Figma property and variant names exactly, with the Figma defaults. States follow the Figma file:
// whole-variant opacity or a state-layer fill over the Enabled look (Hovered 0.88, Pressed 0.82-0.9, Disabled 0.38),
// Focused = 3px inside stroke included in the layout. The State prop forces a state for review; real :hover / :active /
// :focus-visible work too (styles/navigation.css). INSTANCE_SWAP properties that hold a nested component take the
// Figma variant name of that component (e.g. "Selected=True, State=Enabled"), like the Figma swap menu.
import React from 'react';
import { Icon } from '../lib/Icon';
import { Switch } from './FormElements';
import { Artwork, Avatar, Badge, TrackMetadata, ProgressIndicator, progressValues, type ProgressValue } from './DataDisplayAtoms';
import '../styles/navigation.css';

type Bool = 'False' | 'True';
type FullState = 'Enabled' | 'Pressed' | 'Disabled' | 'Hovered' | 'Focused';

/** Keeps internal state in step with a prop (the Storybook control) while the component stays usable. */
function useSynced<T>(value: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [v, setV] = React.useState(value);
  React.useEffect(() => setV(value), [value]);
  return [v, setV];
}

/** "Selected=True, State=Enabled" -> { Selected: 'True', State: 'Enabled' } (the variant name of a swapped instance). */
function parseVariant(name: string): Record<string, string> {
  const out: Record<string, string> = {};
  name.split(',').forEach((pair) => {
    const [k, v] = pair.split('=').map((s) => s && s.trim());
    if (k && v) out[k] = v;
  });
  return out;
}

const iconLabel = (name: string) => name.replace(/^Icon\//, '').replace(/_/g, ' ');

// ---------- Button (Atom) ----------
export type ButtonProps = {
  Style?: 'Filled' | 'Tonal' | 'Outlined' | 'Text' | 'Neutral' | 'Outlined Accent'; State?: FullState;
  'Label text'?: string; 'Show Leading Icon'?: boolean; 'Leading Icon'?: string; onClick?: () => void;
};
export function Button({
  Style = 'Filled', State = 'Enabled', 'Label text': label = 'Button', 'Show Leading Icon': showIcon = false, 'Leading Icon': leadingIcon = 'Icon/add', onClick,
}: ButtonProps) {
  return (
    <button type="button" className="nav-btn ts-m3-label_large" data-style={Style} data-state={State} disabled={State === 'Disabled'} onClick={onClick}>
      {showIcon && <Icon name={leadingIcon} size={18} />}
      <span>{label}</span>
    </button>
  );
}

// ---------- Icon Button (Atom) ----------
// `size` / `iconSize` are instance overrides used inside organisms (Figma resizes those instances), not Figma properties.
export type IconButtonProps = {
  Style?: 'Standard' | 'Filled' | 'Tonal' | 'Inverse'; State?: FullState; Icon?: string;
  label?: string; size?: number; iconSize?: number; pressed?: boolean; onClick?: () => void;
};
export function IconButton({ Style = 'Standard', State = 'Enabled', Icon: icon = 'Icon/play_arrow', label, size, iconSize, pressed, onClick }: IconButtonProps) {
  const style = size ? ({ width: size, height: size, '--nav-icon-size': `${iconSize ?? 24}px` } as React.CSSProperties) : iconSize ? ({ '--nav-icon-size': `${iconSize}px` } as React.CSSProperties) : undefined;
  return (
    <button
      type="button" className="nav-icon-btn" data-style={Style} data-state={State} disabled={State === 'Disabled'} style={style}
      aria-label={label || iconLabel(icon)} aria-pressed={pressed} onClick={onClick}
    >
      <Icon name={icon} size={iconSize ?? 24} />
    </button>
  );
}

// ---------- Filter Chip (Atom) ----------
export type FilterChipProps = { Selected?: Bool; State?: FullState; Label?: string; onChange?: (selected: boolean) => void };
export function FilterChip({ Selected = 'False', State = 'Enabled', Label = 'Filter', onChange }: FilterChipProps) {
  const [on, setOn] = useSynced(Selected === 'True');
  return (
    <button
      type="button" className="nav-chip" data-selected={on ? 'True' : 'False'} data-state={State} aria-pressed={on} disabled={State === 'Disabled'}
      onClick={() => { setOn(!on); onChange?.(!on); }}
    >
      <span className="nav-chip__container ts-m3-label_large">{Label}</span>
    </button>
  );
}

// ---------- Tab Item (Atom) ----------
export type TabItemProps = { Selected?: Bool; State?: FullState; Label?: string; onSelect?: () => void };
export function TabItem({ Selected = 'False', State = 'Enabled', Label = 'MUSIC', onSelect }: TabItemProps) {
  const on = Selected === 'True';
  return (
    <button type="button" role="tab" aria-selected={on} className="nav-tab" data-selected={Selected} data-state={State} disabled={State === 'Disabled'} onClick={onSelect}>
      <span className="nav-tab__label ts-m3-headline_small_emphasized">{Label}</span>
      {on && <span className="nav-tab__indicator" aria-hidden="true" />}
    </button>
  );
}

// ---------- Navigation Item (Atom) ----------
export type NavigationItemProps = { Selected?: Bool; State?: 'Enabled' | 'Pressed' | 'Disabled'; Label?: string; Icon?: string; onSelect?: () => void };
export function NavigationItem({ Selected = 'False', State = 'Enabled', Label = 'Explore', Icon: icon = 'Icon/explore', onSelect }: NavigationItemProps) {
  const on = Selected === 'True';
  return (
    <button type="button" className="nav-item" data-selected={Selected} data-state={State} aria-current={on ? 'page' : undefined} disabled={State === 'Disabled'} onClick={onSelect}>
      <Icon name={icon} size={24} />
      <span className="nav-item__label ts-m3-label_small">{Label}</span>
    </button>
  );
}

// ---------- Primary Tabs (Molecule) ----------
// Figma: First Tab / Second Tab swap a Tab Item variant; labels MUSIC and PODCASTS are instance overrides.
const TAB_VARIANTS = ['Selected=True, State=Enabled', 'Selected=False, State=Enabled'];
export type PrimaryTabsProps = { 'First Tab'?: string; 'Second Tab'?: string; labels?: [string, string]; onChange?: (index: number) => void };
export function PrimaryTabs({ 'First Tab': first = TAB_VARIANTS[0], 'Second Tab': second = TAB_VARIANTS[1], labels = ['MUSIC', 'PODCASTS'], onChange }: PrimaryTabsProps) {
  const tabs = [parseVariant(first), parseVariant(second)];
  const initial = tabs.findIndex((t) => t.Selected === 'True');
  const [sel, setSel] = useSynced(initial);
  return (
    <div className="nav-primary-tabs" role="tablist">
      {tabs.map((t, i) => (
        <TabItem
          key={i} Label={labels[i]} State={(t.State as FullState) || 'Enabled'} Selected={sel === i ? 'True' : 'False'}
          onSelect={() => { setSel(i); onChange?.(i); }}
        />
      ))}
    </div>
  );
}

// ---------- Bottom Navigation (Organism) ----------
// Figma: four Navigation Item swaps; icons and labels (Explore, Search, Connect, Your Library) are instance overrides.
const NAV_DEFAULT_ITEMS = [
  { Label: 'Explore', Icon: 'Icon/explore' }, { Label: 'Search', Icon: 'Icon/search' },
  { Label: 'Connect', Icon: 'Icon/groups' }, { Label: 'Your Library', Icon: 'Icon/library_music' },
];
const NAV_VARIANTS = ['Selected=True, State=Enabled', 'Selected=False, State=Enabled'];
export type BottomNavigationProps = {
  'First Item'?: string; 'Second Item'?: string; 'Third Item'?: string; 'Fourth Item'?: string;
  items?: { Label: string; Icon: string }[]; onChange?: (index: number) => void;
};
export function BottomNavigation({
  'First Item': i1 = NAV_VARIANTS[0], 'Second Item': i2 = NAV_VARIANTS[1], 'Third Item': i3 = NAV_VARIANTS[1], 'Fourth Item': i4 = NAV_VARIANTS[1],
  items = NAV_DEFAULT_ITEMS, onChange,
}: BottomNavigationProps) {
  const variants = [i1, i2, i3, i4].map(parseVariant);
  const [sel, setSel] = useSynced(variants.findIndex((v) => v.Selected === 'True'));
  return (
    <nav className="nav-bottom" aria-label="Main">
      {variants.map((v, i) => (
        <NavigationItem
          key={i} Label={items[i]?.Label} Icon={items[i]?.Icon} State={(v.State as NavigationItemProps['State']) || 'Enabled'}
          Selected={sel === i ? 'True' : 'False'} onSelect={() => { setSel(i); onChange?.(i); }}
        />
      ))}
    </nav>
  );
}

// ---------- Top App Bar (Organism) ----------
// Figma: title (M3/headline_small_emphasized) then Top App Bar Actions: Notifications and Community Icon Buttons and the
// Profile Avatar with a Plan Badge "plus".
export type TopAppBarProps = { Title?: string; 'Show Actions'?: boolean; onAction?: (name: 'Notifications' | 'Community' | 'Profile') => void };
export function TopAppBar({ Title = 'EXPLORE', 'Show Actions': showActions = true, onAction }: TopAppBarProps) {
  return (
    <header className="nav-top-bar">
      <h1 className="nav-top-bar__title ts-m3-headline_small_emphasized">{Title}</h1>
      {showActions && (
        <div className="nav-top-bar__actions">
          <IconButton Icon="Icon/notifications" label="Notifications" onClick={() => onAction?.('Notifications')} />
          <IconButton Icon="Icon/groups" label="Community" onClick={() => onAction?.('Community')} />
          <button type="button" className="nav-top-bar__profile" aria-label="Profile" onClick={() => onAction?.('Profile')}>
            <Avatar />
            <Badge Type="Plan" Label="plus" className="nav-top-bar__plan" />
          </button>
        </div>
      )}
    </header>
  );
}

// ---------- Playlist App Bar (Organism) ----------
export type PlaylistAppBarProps = {
  Title?: string; Switch?: string; 'AI Mix Label'?: string; 'Source Label'?: string;
  onCollapse?: () => void; onAiMixChange?: (on: boolean) => void;
};
export function PlaylistAppBar({
  Title = 'Arabic Music Mix', Switch: switchVariant = 'Selected=False, State=Enabled', 'AI Mix Label': aiLabel = 'AI MIX', 'Source Label': source = 'PLAYLIST',
  onCollapse, onAiMixChange,
}: PlaylistAppBarProps) {
  const sw = parseVariant(switchVariant);
  return (
    <header className="nav-playlist-bar">
      <IconButton Icon="Icon/expand_more" label="Collapse player" size={40} iconSize={24} onClick={onCollapse} />
      <div className="nav-playlist-bar__title">
        <span className="nav-playlist-bar__source ts-m3-label_medium_emphasized">{source}</span>
        <span className="nav-playlist-bar__name ts-m3-body_small">{Title}</span>
      </div>
      <div className="nav-playlist-bar__ai">
        <span className="nav-playlist-bar__ai-label">
          <span className="ts-m3-label_medium_emphasized">{aiLabel}</span>
          <span className="nav-playlist-bar__sparkle"><Icon name="Icon/auto_awesome" size={12} /></span>
        </span>
        <Switch Selected={(sw.Selected as Bool) || 'False'} State={(sw.State as FullState) || 'Enabled'} label={aiLabel} onChange={onAiMixChange} />
      </div>
    </header>
  );
}

// ---------- Mini Player (Organism) ----------
export type MiniPlayerProps = {
  Artwork?: string; 'Track Metadata'?: string;
  image?: string; title?: string; subtitle?: string; playing?: boolean; liked?: boolean; onOpen?: () => void;
};
export function MiniPlayer({ image, title = 'Track title', subtitle = 'Artist · Album', playing = false, liked = false, onOpen }: MiniPlayerProps) {
  const [isPlaying, setPlaying] = useSynced(playing);
  const [isLiked, setLiked] = useSynced(liked);
  return (
    <div className="nav-mini-player" onClick={onOpen}>
      <Artwork image={image} size={48} />
      <TrackMetadata Title={title} Subtitle={subtitle} fill />
      <span onClick={(e) => e.stopPropagation()} className="nav-mini-player__actions">
        <IconButton Icon={isLiked ? 'Icon/favorite' : 'Icon/favorite_outline'} label="Like" pressed={isLiked} onClick={() => setLiked(!isLiked)} />
        <IconButton Style="Inverse" Icon={isPlaying ? 'Icon/pause' : 'Icon/play_arrow'} label={isPlaying ? 'Pause' : 'Play'} size={40} iconSize={32} onClick={() => setPlaying(!isPlaying)} />
      </span>
    </div>
  );
}

// ---------- Playback Progress (Molecule) ----------
export type PlaybackProgressProps = { 'Elapsed Time'?: string; 'Total Time'?: string; 'Progress Indicator'?: string; onSeek?: (value: ProgressValue) => void };
export function PlaybackProgress({ 'Elapsed Time': elapsed = '00:03', 'Total Time': total = '03:48', 'Progress Indicator': indicator = 'Value=40', onSeek }: PlaybackProgressProps) {
  const [value, setValue] = useSynced<ProgressValue>(((parseVariant(indicator).Value as ProgressValue) || '40'));
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const pct = ((e.clientX - r.left) / r.width) * 100;
    const nearest = progressValues.reduce((a, b) => (Math.abs(Number(b) - pct) < Math.abs(Number(a) - pct) ? b : a));
    setValue(nearest); onSeek?.(nearest);
  };
  return (
    <div className="nav-progress">
      <div className="nav-progress__bar" onClick={seek}><ProgressIndicator Value={value} fill label="Track position" /></div>
      <div className="nav-progress__times ts-m3-body_small">
        <span>{elapsed}</span><span>{total}</span>
      </div>
    </div>
  );
}

// ---------- Playback Controls (Organism) ----------
// Figma: Like 48 (icon 24), Previous 48 (icon 40), Play 64 Inverse (icon 56), Next 48 (icon 40), Download 48 (icon 32).
export type PlaybackControlsProps = { playing?: boolean; liked?: boolean; downloaded?: boolean; onPrevious?: () => void; onNext?: () => void };
export function PlaybackControls({ playing = false, liked = false, downloaded = false, onPrevious, onNext }: PlaybackControlsProps) {
  const [isPlaying, setPlaying] = useSynced(playing);
  const [isLiked, setLiked] = useSynced(liked);
  const [isDown, setDown] = useSynced(downloaded);
  return (
    <div className="nav-controls">
      <IconButton Icon={isLiked ? 'Icon/favorite' : 'Icon/favorite_outline'} label="Like" pressed={isLiked} onClick={() => setLiked(!isLiked)} />
      <IconButton Icon="Icon/skip_previous" label="Previous" iconSize={40} onClick={onPrevious} />
      <IconButton Style="Inverse" Icon={isPlaying ? 'Icon/pause' : 'Icon/play_arrow'} label={isPlaying ? 'Pause' : 'Play'} size={64} iconSize={56} onClick={() => setPlaying(!isPlaying)} />
      <IconButton Icon="Icon/skip_next" label="Next" iconSize={40} onClick={onNext} />
      <IconButton Icon={isDown ? 'Icon/cloud_done' : 'Icon/cloud_download'} label="Download" pressed={isDown} iconSize={32} onClick={() => setDown(!isDown)} />
    </div>
  );
}

// ---------- Player Utility Bar (Molecule) ----------
type Active = 'None' | 'Lyrics' | 'Queue' | 'Audio';
export type PlayerUtilityBarProps = {
  Active?: Active; 'Lyrics Label'?: string; 'Queue Label'?: string; 'Audio Label'?: string;
  'Icon lyrics'?: string; 'Icon queue music'?: string; 'Icon graphic eq'?: string; onChange?: (active: Active) => void;
};
export function PlayerUtilityBar({
  Active: activeProp = 'None', 'Lyrics Label': lyrics = 'LYRICS', 'Queue Label': queue = 'QUEUE', 'Audio Label': audio = 'AUDIO',
  'Icon lyrics': iLyrics = 'Icon/lyrics', 'Icon queue music': iQueue = 'Icon/queue_music', 'Icon graphic eq': iAudio = 'Icon/graphic_eq', onChange,
}: PlayerUtilityBarProps) {
  const [active, setActive] = useSynced<Active>(activeProp);
  const actions: { key: Active; label: string; icon: string }[] = [
    { key: 'Lyrics', label: lyrics, icon: iLyrics }, { key: 'Queue', label: queue, icon: iQueue }, { key: 'Audio', label: audio, icon: iAudio },
  ];
  return (
    <div className="nav-utility-bar" data-active={active}>
      {actions.map((a) => (
        <button
          key={a.key} type="button" className="nav-utility-bar__action" data-active={active === a.key ? 'True' : 'False'} aria-pressed={active === a.key}
          onClick={() => { const next = active === a.key ? 'None' : a.key; setActive(next); onChange?.(next); }}
        >
          <Icon name={a.icon} size={24} />
          <span className="ts-m3-label_medium">{a.label}</span>
        </button>
      ))}
    </div>
  );
}

// ---------- In use examples ----------
export function FilterChipInUse() {
  const filters = ['All', 'Arabic', 'International', 'Podcasts'];
  const [sel, setSel] = React.useState(0);
  return (
    <div className="nav-demo nav-demo--row">
      {filters.map((f, i) => <FilterChip key={f} Label={f} Selected={sel === i ? 'True' : 'False'} onChange={() => setSel(i)} />)}
    </div>
  );
}

export function PrimaryTabsInUse() {
  const [i, setI] = React.useState(0);
  return (
    <div className="nav-demo">
      <PrimaryTabs onChange={setI} />
      <div className="ts-m3-body_medium nav-demo__note">Showing: {i === 0 ? 'Music' : 'Podcasts'}</div>
    </div>
  );
}

export function BottomNavigationInUse() {
  const [i, setI] = React.useState(0);
  const names = ['EXPLORE', 'SEARCH', 'CONNECT', 'YOUR LIBRARY'];
  return (
    <div className="nav-demo nav-demo--screen">
      <TopAppBar Title={names[i]} />
      <div className="nav-demo__spacer" />
      <MiniPlayer />
      <BottomNavigation onChange={setI} />
    </div>
  );
}

export function PlayerInUse() {
  return (
    <div className="nav-demo nav-demo--screen nav-demo--player">
      <PlaylistAppBar />
      <div className="nav-demo__player-body">
        <Artwork size={343} />
        <TrackMetadata Title="Track title" fill />
        <PlaybackProgress />
        <PlaybackControls />
        <PlayerUtilityBar />
      </div>
    </div>
  );
}
