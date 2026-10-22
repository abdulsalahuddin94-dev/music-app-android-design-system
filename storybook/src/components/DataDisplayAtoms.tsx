// ⭐Data display atoms used inside ⭐Navigation components (Artwork, Avatar, Badge, Track Metadata, Progress Indicator).
// Working replicas of the Music App Android Figma components (Brownfield DS, read with FigCli 2026-10-13). Props use the
// Figma property and variant names exactly, with the Figma defaults. The rest of ⭐Data display reuses these exports.
import React from 'react';
import { Icon } from '../lib/Icon';
import '../styles/data-display-atoms.css';

// ---------- Artwork (Atom) ----------
// Figma: 160 x 160, corner medium, fill md/sys/color/primary_container (stands for the cover image).
export type ArtworkProps = { image?: string; size?: number; alt?: string };
export function Artwork({ image, size, alt = '' }: ArtworkProps) {
  const style = size ? ({ width: size, height: size } as React.CSSProperties) : undefined;
  return (
    <div className="dd-artwork" style={style} role={image ? 'img' : undefined} aria-label={image ? alt : undefined}>
      {image && <img src={image} alt="" />}
    </div>
  );
}

// ---------- Avatar (Atom) ----------
// Figma: 40 x 40, corner full, fill md/sys/color/tertiary_container.
export type AvatarProps = { image?: string; size?: number; alt?: string };
export function Avatar({ image, size, alt = '' }: AvatarProps) {
  const style = size ? ({ width: size, height: size } as React.CSSProperties) : undefined;
  return (
    <div className="dd-avatar" style={style} role={image ? 'img' : undefined} aria-label={image ? alt : undefined}>
      {image && <img src={image} alt="" />}
    </div>
  );
}

// ---------- Badge (Atom) ----------
export type BadgeProps = { Type?: 'Plan' | 'Explicit'; Label?: string; className?: string };
export function Badge({ Type = 'Plan', Label = 'E', className }: BadgeProps) {
  return <span className={['dd-badge ts-m3-label_small', className].filter(Boolean).join(' ')} data-type={Type}>{Label}</span>;
}

// ---------- Track Metadata (Molecule) ----------
// `titleStyle` / `subtitleStyle` (Figma text style names) and `titleLines` are instance overrides used in screens and
// organisms (Now Playing sets M3/title_large_emphasized; Podcast Episode Card allows 2 title lines), not Figma properties.
export type TrackMetadataProps = {
  Title?: string; Subtitle?: string; 'Show Subtitle Icon'?: boolean; 'Subtitle Icon'?: string; fill?: boolean;
  titleStyle?: string; subtitleStyle?: string; titleLines?: number;
};
const textStyleClass = (name: string) => 'ts-' + name.replace(/\//g, '-').toLowerCase();
export function TrackMetadata({
  Title = 'Track title', Subtitle = 'Artist · Album', 'Show Subtitle Icon': showIcon = false, 'Subtitle Icon': subtitleIcon = 'Icon/cloud_done', fill = false,
  titleStyle = 'M3/title_medium_emphasized', subtitleStyle = 'M3/body_small', titleLines = 1,
}: TrackMetadataProps) {
  const lines = titleLines > 1 ? ({ '--dd-title-lines': titleLines } as React.CSSProperties) : undefined;
  return (
    <div className={`dd-track-meta${fill ? ' dd-track-meta--fill' : ''}`}>
      <div className={`dd-track-meta__title ${textStyleClass(titleStyle)}`} data-lines={titleLines > 1 ? titleLines : undefined} style={lines}>{Title}</div>
      <div className="dd-track-meta__subtitle">
        {showIcon && <Icon name={subtitleIcon} size={16} />}
        <span className={textStyleClass(subtitleStyle)}>{Subtitle}</span>
      </div>
    </div>
  );
}

// ---------- Progress Indicator (Atom) ----------
export type ProgressValue = '2' | '10' | '25' | '40' | '50' | '75' | '100';
export const progressValues: ProgressValue[] = ['2', '10', '25', '40', '50', '75', '100'];
// `hideActive` is an instance override (Figma hides the Active Track layer, e.g. episodes not started yet).
export type ProgressIndicatorProps = { Value?: ProgressValue; fill?: boolean; label?: string; hideActive?: boolean };
export function ProgressIndicator({ Value = '2', fill = false, label = 'Progress', hideActive = false }: ProgressIndicatorProps) {
  return (
    <div className={`dd-progress${fill ? ' dd-progress--fill' : ''}`} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={hideActive ? 0 : Number(Value)}>
      {!hideActive && <div className="dd-progress__active" style={{ width: `${Value}%` }} />}
    </div>
  );
}
