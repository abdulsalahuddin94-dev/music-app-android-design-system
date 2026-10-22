// ⭐Data display (and Status Bar from ⭐Setup > ➜ Utilities) - working replicas of the Music App Android Figma components
// (Brownfield DS, read with FigCli 2026-10-13). Props use the Figma property and variant names exactly, with the Figma
// defaults. Nested atoms are reused, never duplicated: Artwork, Avatar, Badge, Track Metadata, Progress Indicator from
// ./DataDisplayAtoms and Button / Icon Button from ./Navigation. INSTANCE_SWAP properties that hold a nested component take
// the Figma name of that component (e.g. "Artwork", "Track Metadata", "Value=40", "Size=Default"), like the Figma swap menu;
// the content of those instances (image, title, subtitle) comes through extra lower-case props.
import React from 'react';
import { Icon } from '../lib/Icon';
import { Artwork, Badge, TrackMetadata, ProgressIndicator, type ProgressValue } from './DataDisplayAtoms';
import { Button, IconButton } from './Navigation';
import '../styles/data-display.css';

/** Keeps internal state in step with a prop (the Storybook control) while the component stays usable. */
function useSynced<T>(value: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [v, setV] = React.useState(value);
  React.useEffect(() => setV(value), [value]);
  return [v, setV];
}

/** "Value=40" -> { Value: '40' } (the variant name of a swapped instance). */
function parseVariant(name: string): Record<string, string> {
  const out: Record<string, string> = {};
  name.split(',').forEach((pair) => {
    const [k, v] = pair.split('=').map((s) => s && s.trim());
    if (k && v) out[k] = v;
  });
  return out;
}

// ---------- Status Bar (Atom, ⭐Setup > ➜ Utilities) ----------
// Figma: 375 x 32, padding 0 24, space between; Time M3/label_large; System Icons wifi, signal, battery 16, gap 4.
export type StatusBarProps = { Time?: string };
export function StatusBar({ Time = '5:00' }: StatusBarProps) {
  return (
    <div className="dd-status-bar">
      <span className="dd-status-bar__time ts-m3-label_large">{Time}</span>
      <span className="dd-status-bar__icons" aria-hidden="true">
        <Icon name="Icon/wifi" size={16} />
        <Icon name="Icon/signal_cellular_alt" size={16} />
        <Icon name="Icon/battery_full" size={16} />
      </span>
    </div>
  );
}

// ---------- Tooltip (Molecule) ----------
// Figma: Plain 160 x 40, Rich 280 x 88; padding 8 12, gap 4, corner small, inverse_surface, M3/body_small inverse_on_surface.
export type TooltipProps = { Type?: 'Plain' | 'Rich'; Text?: string; id?: string };
export function Tooltip({ Type = 'Plain', Text = 'Tooltip label', id }: TooltipProps) {
  return (
    <div className="dd-tooltip" data-type={Type} role="tooltip" id={id}>
      <span className="ts-m3-body_small">{Text}</span>
    </div>
  );
}

// ---------- Section Header (Molecule) ----------
// Figma: fill width x 36, space between, gap 8; Title M3/title_medium_emphasized (1 line), Supporting Text M3/body_small;
// More = Button Neutral resized to 36 high.
export type SectionHeaderProps = {
  Title?: string; 'Show More'?: boolean; 'Show Supporting Text'?: boolean; 'Supporting Text'?: string; onMore?: () => void;
};
export function SectionHeader({
  Title = 'Your new music', 'Show More': showMore = true, 'Show Supporting Text': showSupporting = false,
  'Supporting Text': supporting = 'Discover music based on your recent activity', onMore,
}: SectionHeaderProps) {
  return (
    <div className="dd-section-header">
      <div className="dd-section-header__titles">
        <h2 className="dd-section-header__title ts-m3-title_medium_emphasized">{Title}</h2>
        {showSupporting && <p className="dd-section-header__supporting ts-m3-body_small">{supporting}</p>}
      </div>
      {showMore && <Button Style="Neutral" {...{ 'Label text': 'More' }} onClick={onMore} />}
    </div>
  );
}

// ---------- Shortcut Card (Molecule) ----------
// Figma: 164 x 56, padding 4 12, gap 12, corner medium, surface_container_high; Artwork 48; Label M3/label_large.
export type ShortcutCardProps = { Label?: string; Artwork?: string; image?: string; onClick?: () => void };
export function ShortcutCard({ Label = 'Music Mix', image, onClick }: ShortcutCardProps) {
  return (
    <button type="button" className="dd-shortcut-card" onClick={onClick}>
      <Artwork image={image} size={48} />
      <span className="dd-shortcut-card__label ts-m3-label_large">{Label}</span>
    </button>
  );
}

// ---------- Library Shortcut Tile (Molecule) ----------
// Figma: 80 x 80, vertical, padding 12 4, gap 8, corner medium, surface_container, 1px inside outline_variant stroke;
// Icon 28 colored by the Color variant (Purple = tertiary, others = category_<color>); Label M3/label_medium centered.
export type LibraryShortcutTileProps = { Color?: 'Purple' | 'Cyan' | 'Magenta' | 'Yellow'; Label?: string; Icon?: string; onClick?: () => void };
export function LibraryShortcutTile({ Color = 'Purple', Label = 'Likes', Icon: icon = 'Icon/favorite', onClick }: LibraryShortcutTileProps) {
  return (
    <button type="button" className="dd-library-tile" data-color={Color} onClick={onClick}>
      <Icon name={icon} size={28} className="dd-library-tile__icon" />
      <span className="dd-library-tile__label ts-m3-label_medium">{Label}</span>
    </button>
  );
}

// ---------- Media Card (Molecule) ----------
// Figma: Default 136 wide (Artwork 136 + Track Metadata), Large 156 wide (Artwork 156 + Description M3/body_small, 1 line);
// vertical, gap 8; Explicit Badge absolute 4 from the artwork's bottom-right corner (Show Badge).
export type MediaCardProps = {
  Size?: 'Default' | 'Large'; Artwork?: string; 'Show Badge'?: boolean; Description?: string;
  image?: string; title?: string; subtitle?: string; onClick?: () => void;
};
export function MediaCard({
  Size = 'Default', 'Show Badge': showBadge = false, Description = 'Your next favorite songs are in here',
  image, title = 'Track title', subtitle = 'Artist · Album', onClick,
}: MediaCardProps) {
  return (
    <button type="button" className="dd-media-card" data-size={Size} onClick={onClick}>
      <span className="dd-media-card__art">
        <Artwork image={image} size={Size === 'Large' ? 156 : 136} />
        {showBadge && <Badge Type="Explicit" Label="E" className="dd-media-card__badge" />}
      </span>
      {Size === 'Default'
        ? <TrackMetadata Title={title} Subtitle={subtitle} />
        : <span className="dd-media-card__description ts-m3-body_small">{Description}</span>}
    </button>
  );
}

// ---------- Media Carousel (Organism) ----------
// Figma: 520 x 244, horizontal, gap 16; First / Second / Third Card swap a Media Card variant ("Size=Default").
export type MediaCarouselProps = {
  'First Card'?: string; 'Second Card'?: string; 'Third Card'?: string;
  cards?: { image?: string; title?: string; subtitle?: string; Description?: string; 'Show Badge'?: boolean }[];
  onSelect?: (index: number) => void;
};
export function MediaCarousel({
  'First Card': c1 = 'Size=Default', 'Second Card': c2 = 'Size=Default', 'Third Card': c3 = 'Size=Default', cards = [], onSelect,
}: MediaCarouselProps) {
  return (
    <div className="dd-media-carousel" role="list">
      {[c1, c2, c3].map((v, i) => (
        <div role="listitem" key={i}>
          <MediaCard Size={(parseVariant(v).Size as MediaCardProps['Size']) || 'Default'} {...cards[i]} onClick={() => onSelect?.(i)} />
        </div>
      ))}
    </div>
  );
}

// ---------- Genre Card (Molecule) ----------
// Figma: 164 x 80, horizontal, padding 0 4 0 0, gap 4, corner extra_small, fill category_<color>, clips; Genre Artwork
// 56 x 80 corner medium (image fill set per genre: `image`); Label M3/title_small_emphasized on_primary, centered.
export type GenreCardProps = {
  Color?: 'Magenta' | 'Blue' | 'Cyan' | 'Green' | 'Red' | 'Purple' | 'Yellow'; Label?: string; image?: string; onClick?: () => void;
};
export function GenreCard({ Color = 'Magenta', Label = 'ALTERNATIVE', image, onClick }: GenreCardProps) {
  return (
    <button type="button" className="dd-genre-card" data-color={Color} onClick={onClick}>
      <span className="dd-genre-card__art"><Artwork image={image} /></span>
      <span className="dd-genre-card__label ts-m3-title_small_emphasized">{Label}</span>
    </button>
  );
}

// ---------- Playlist List Item (Molecule) ----------
// Figma: 360 x 72 (size/list_item/two_line), padding 8, gap 12, corner small; Artwork 56, Track Metadata fills,
// More = Icon Button Standard more_vert (Show More).
export type PlaylistListItemProps = {
  Artwork?: string; 'Track Metadata'?: string; 'Show More'?: boolean;
  image?: string; title?: string; subtitle?: string; onClick?: () => void; onMore?: () => void;
};
export function PlaylistListItem({
  'Show More': showMore = true, image, title = 'Track title', subtitle = 'Artist · Album', onClick, onMore,
}: PlaylistListItemProps) {
  return (
    <div className="dd-list-item" role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.(); } }}>
      <Artwork image={image} size={56} />
      <TrackMetadata Title={title} Subtitle={subtitle} fill />
      {showMore && (
        <span onClick={(e) => e.stopPropagation()} className="dd-list-item__more">
          <IconButton Icon="Icon/more_vert" label="More options" onClick={onMore} />
        </span>
      )}
    </div>
  );
}

// ---------- Podcast Episode Card (Organism) ----------
// Figma: 360 wide, vertical, padding 12, gap 4, corner medium, surface_container, 1px inside outline_variant stroke.
// Header: Artwork 64 + Track Metadata (gap 12). Description M3/body_medium, 2 lines. Footer 48 high, space between:
// Progress Indicator 100 wide + Time Left M3/body_small (gap 8); Download + More Icon Buttons.
// Instance overrides (not Figma properties): `titleLines` lets the title wrap like the screen's override (2 in Library);
// `hideActiveTrack` hides the progress fill like the screen's hidden Active Track layer.
export type PodcastEpisodeCardProps = {
  Description?: string; Artwork?: string; 'Track Metadata'?: string; 'Progress Indicator'?: string; 'Time Left'?: string; 'Show Download'?: boolean;
  image?: string; title?: string; subtitle?: string; downloaded?: boolean; onMore?: () => void; titleLines?: number; hideActiveTrack?: boolean;
};
export function PodcastEpisodeCard({
  Description = 'Episode description continues across two concise lines.', 'Progress Indicator': progress = 'Value=40',
  'Time Left': timeLeft = '1h 42min left', 'Show Download': showDownload = true,
  image, title = 'Track title', subtitle = 'Artist · Album', downloaded = false, onMore, titleLines, hideActiveTrack = false,
}: PodcastEpisodeCardProps) {
  const [isDown, setDown] = useSynced(downloaded);
  const value = (parseVariant(progress).Value as ProgressValue) || '40';
  return (
    <article className="dd-episode">
      <div className="dd-episode__header">
        <Artwork image={image} size={64} />
        <TrackMetadata Title={title} Subtitle={subtitle} fill titleLines={titleLines} />
      </div>
      <p className="dd-episode__description ts-m3-body_medium">{Description}</p>
      <div className="dd-episode__footer">
        <div className="dd-episode__progress">
          <ProgressIndicator Value={value} label="Listened" hideActive={hideActiveTrack} />
          <span className="ts-m3-body_small">{timeLeft}</span>
        </div>
        <div className="dd-episode__actions">
          {showDownload && (
            <IconButton Icon={isDown ? 'Icon/cloud_done' : 'Icon/cloud_download'} label={isDown ? 'Downloaded' : 'Download'} pressed={isDown} onClick={() => setDown(!isDown)} />
          )}
          <IconButton Icon="Icon/more_vert" label="More options" onClick={onMore} />
        </div>
      </div>
    </article>
  );
}

// ---------- List Header (Molecule) ----------
// Figma: 343 x 48, space between; Sort Control (sort 24 + Title M3/title_medium_emphasized + arrow_drop_down 24, gap 4);
// Action = Button Outlined with leading add icon, "New playlist" (Show Action).
export type ListHeaderProps = { Title?: string; 'Show Action'?: boolean; actionLabel?: string; onSort?: () => void; onAction?: () => void };
export function ListHeader({ Title = 'Playlists', 'Show Action': showAction = true, actionLabel = 'New playlist', onSort, onAction }: ListHeaderProps) {
  return (
    <div className="dd-list-header">
      <button type="button" className="dd-list-header__sort" onClick={onSort}>
        <Icon name="Icon/sort" size={24} />
        <span className="ts-m3-title_medium_emphasized">{Title}</span>
        <Icon name="Icon/arrow_drop_down" size={24} />
      </button>
      {showAction && <Button Style="Outlined" {...{ 'Show Leading Icon': true, 'Leading Icon': 'Icon/add', 'Label text': actionLabel }} onClick={onAction} />}
    </div>
  );
}

// ---------- Dialog (Organism) ----------
// Figma: 320 x 240 (Basic) / 320 x 320 (List), vertical, padding 24, gap 16, corner extra_large, surface_container_high;
// Title M3/headline_small; body M3/body_medium on_surface_variant; Dialog Actions 272 x 48 aligned end, gap 8:
// Button Text + Button Filled ("Button").
export type DialogProps = {
  Type?: 'Basic' | 'List'; Title?: string; body?: string; options?: string[];
  confirmLabel?: string; dismissLabel?: string; onConfirm?: (option?: string) => void; onDismiss?: () => void;
};
export function Dialog({
  Type = 'Basic', Title = 'Confirm action', body = 'This action needs your confirmation.', options = ['Option one', 'Option two', 'Option three'],
  confirmLabel = 'Button', dismissLabel = 'Button', onConfirm, onDismiss,
}: DialogProps) {
  const [picked, setPicked] = React.useState<string | undefined>(undefined);
  const titleId = React.useId();
  return (
    <div className="dd-dialog" data-type={Type} role="dialog" aria-labelledby={titleId}>
      <h2 id={titleId} className="dd-dialog__title ts-m3-headline_small">{Title}</h2>
      {Type === 'Basic'
        ? <p className="dd-dialog__body ts-m3-body_medium">{body}</p>
        : (
          <ul className="dd-dialog__list ts-m3-body_medium" role="listbox" aria-label={Title}>
            {options.map((o) => (
              <li key={o} role="option" aria-selected={picked === o} tabIndex={0} data-selected={picked === o ? 'True' : 'False'}
                onClick={() => setPicked(o)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPicked(o); } }}>{o}</li>
            ))}
          </ul>
        )}
      <div className="dd-dialog__actions">
        <Button Style="Text" {...{ 'Label text': dismissLabel }} onClick={onDismiss} />
        <Button Style="Filled" {...{ 'Label text': confirmLabel }} onClick={() => onConfirm?.(picked)} />
      </div>
    </div>
  );
}

// ---------- Sheet (Organism) ----------
// Figma: Bottom 360 x 280, Side 320 x 520; vertical, padding 24, gap 16, corner extra_large, surface_container;
// Title M3/headline_small; content M3/body_medium on_surface_variant.
export type SheetProps = { Position?: 'Bottom' | 'Side'; Title?: string; content?: React.ReactNode };
export function Sheet({ Position = 'Bottom', Title = 'Sheet title', content = 'Supplemental content belongs here.' }: SheetProps) {
  const titleId = React.useId();
  return (
    <section className="dd-sheet" data-position={Position} role="dialog" aria-labelledby={titleId}>
      <h2 id={titleId} className="dd-sheet__title ts-m3-headline_small">{Title}</h2>
      <div className="dd-sheet__content ts-m3-body_medium">{content}</div>
    </section>
  );
}

// ---------- Divider (Atom) ----------
// Figma: 320 x 1, outline_variant.
export function Divider() {
  return <hr className="dd-divider" />;
}

// ---------- Lyrics Line (Atom) ----------
// Figma: 343 x 40, padding 8 0; Line M3/headline_small_emphasized; Current = on_surface, Past / Upcoming = outline;
// Align Start = left, End = right (as in the Figma file).
export type LyricsLineProps = { State?: 'Past' | 'Current' | 'Upcoming'; Align?: 'Start' | 'End'; Line?: string; onClick?: () => void };
export function LyricsLine({ State = 'Past', Align = 'Start', Line = 'كانت أكبر كذبه عشته', onClick }: LyricsLineProps) {
  return (
    <p className="dd-lyrics-line ts-m3-headline_small_emphasized" data-state={State} data-align={Align} dir="auto"
      aria-current={State === 'Current' ? 'true' : undefined} onClick={onClick}>
      {Line}
    </p>
  );
}

// ---------- Lyrics Header (Molecule) ----------
// Figma: 343 x 80, gap 12, center; Artwork 80, Track Metadata fills, Share = Icon Button Tonal, More = Icon Button Standard.
export type LyricsHeaderProps = { image?: string; title?: string; subtitle?: string; onShare?: () => void; onMore?: () => void };
export function LyricsHeader({
  image, title = 'كيفك ع فراقى', subtitle = 'محمد شاكر وفضل شاكر - كيفك ع فراقى', onShare, onMore,
}: LyricsHeaderProps) {
  return (
    <div className="dd-lyrics-header">
      <Artwork image={image} size={80} />
      <TrackMetadata Title={title} Subtitle={subtitle} fill />
      <IconButton Style="Tonal" Icon="Icon/share" label="Share" onClick={onShare} />
      <IconButton Icon="Icon/more_vert" label="More options" onClick={onMore} />
    </div>
  );
}

// ---------- In use examples ----------
export function TooltipInUse() {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  return (
    <div className="dd-demo dd-demo--tooltip">
      <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
        <IconButton Icon="Icon/share" label="Share" />
      </span>
      {open && <div className="dd-demo__tooltip"><Tooltip Text="Share this track" id={id} /></div>}
    </div>
  );
}

export function ExploreRailInUse() {
  const [picked, setPicked] = React.useState<number | null>(null);
  return (
    <div className="dd-demo dd-demo--column">
      <div className="dd-demo__shortcuts">
        {['Music Mix', 'Liked songs', 'Daily Mix 1', 'On repeat'].map((l) => <ShortcutCard key={l} Label={l} />)}
      </div>
      <SectionHeader />
      <MediaCarousel onSelect={setPicked} cards={[{ title: 'Track one' }, { title: 'Track two', 'Show Badge': true }, { title: 'Track three' }]} />
      <div className="ts-m3-body_medium dd-demo__note">{picked === null ? 'Pick a card' : `Opened card ${picked + 1}`}</div>
    </div>
  );
}

const GENRES: { Label: string; Color: NonNullable<GenreCardProps['Color']> }[] = [
  { Label: 'ALTERNATIVE', Color: 'Blue' }, { Label: 'ELITE', Color: 'Cyan' }, { Label: 'ARABIC HIP HOP', Color: 'Green' }, { Label: 'ARABIC INDIE', Color: 'Cyan' },
  { Label: 'CHILLING', Color: 'Blue' }, { Label: 'DANCE / ELECTRONIC', Color: 'Red' }, { Label: 'DECADES', Color: 'Magenta' }, { Label: 'DRIVING', Color: 'Blue' },
];
/** Search & Discover grid (Moods & Genres), two Genre Cards per row; `images` gives each tile its artist photo. */
export function GenreGridInUse({ images = [] }: { images?: string[] }) {
  return (
    <div className="dd-demo dd-demo--column">
      <SectionHeader Title="Moods & Genres" {...{ 'Show More': false }} />
      <div className="dd-demo__genre-grid">
        {GENRES.map((g, i) => <GenreCard key={i} {...g} image={images[i]} />)}
      </div>
    </div>
  );
}

export function LibraryInUse() {
  const tiles: { Label: string; Icon: string; Color: NonNullable<LibraryShortcutTileProps['Color']> }[] = [
    { Label: 'Likes', Icon: 'Icon/favorite', Color: 'Purple' }, { Label: 'Downloads', Icon: 'Icon/download', Color: 'Cyan' },
    { Label: 'Albums', Icon: 'Icon/album', Color: 'Magenta' }, { Label: 'Uploads', Icon: 'Icon/upload', Color: 'Yellow' },
  ];
  return (
    <div className="dd-demo dd-demo--column">
      <div className="dd-demo__tiles">{tiles.map((t) => <LibraryShortcutTile key={t.Label} {...t} />)}</div>
      <ListHeader />
      <PlaylistListItem title="Arabic Music Mix" subtitle="Playlist · 50 songs" />
      <Divider />
      <PlaylistListItem title="Workout" subtitle="Playlist · 32 songs" />
    </div>
  );
}

export function LyricsInUse() {
  const lines = ['كانت أكبر كذبه عشته', 'كيفك ع فراقى', 'كانت أكبر كذبه عشته', 'كيفك ع فراقى'];
  const [current, setCurrent] = React.useState(1);
  return (
    <div className="dd-demo dd-demo--column">
      <LyricsHeader />
      {lines.map((l, i) => (
        <LyricsLine key={i} Line={l} Align="End" State={i < current ? 'Past' : i === current ? 'Current' : 'Upcoming'} onClick={() => setCurrent(i)} />
      ))}
    </div>
  );
}

export function DialogInUse() {
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState('');
  return (
    <div className="dd-demo dd-demo--column">
      <Button {...{ 'Label text': 'Remove download' }} onClick={() => setOpen(true)} />
      {result && <div className="ts-m3-body_medium dd-demo__note">{result}</div>}
      {open && (
        <div className="dd-demo__scrim" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Dialog
              Title="Remove download?" body="The episode stays in your library." dismissLabel="Cancel" confirmLabel="Remove"
              onDismiss={() => { setOpen(false); setResult('Cancelled'); }} onConfirm={() => { setOpen(false); setResult('Removed'); }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function SheetInUse() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="dd-demo dd-demo--column dd-demo--sheet">
      <Button Style="Tonal" {...{ 'Label text': 'Open sheet' }} onClick={() => setOpen(true)} />
      {open && (
        <div className="dd-demo__scrim dd-demo__scrim--bottom" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}><Sheet Title="Sort by" content="Recently added · Alphabetical · Creator" /></div>
        </div>
      )}
    </div>
  );
}
