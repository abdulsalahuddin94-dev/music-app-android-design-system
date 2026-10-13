// ⭐Form Elements - working replicas of the Music App Android Figma components (Brownfield DS). Props use the Figma
// property and variant names exactly, with the Figma defaults. States follow the Figma file: whole-variant opacity
// (Hovered 0.88, Pressed 0.82, Disabled 0.38) over the Enabled look, Focused = 3px stroke, Error = error stroke / label.
// The State prop forces a state for review; real :hover / :active / :focus-visible work too (styles/form-elements.css).
import React from 'react';
import { Icon } from '../lib/Icon';

type FieldState = 'Enabled' | 'Hovered' | 'Focused' | 'Error' | 'Disabled';
type ControlState = 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled' | 'Error';
type Bool = 'False' | 'True';

/** Keeps internal state in step with a prop (the Storybook control) while the component stays usable. */
function useSynced<T>(value: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [v, setV] = React.useState(value);
  React.useEffect(() => setV(value), [value]);
  return [v, setV];
}

// ---------- Text Field (Molecule) ----------
export type TextFieldProps = {
  Type?: 'Filled' | 'Outlined' | 'Dropdown';
  State?: FieldState;
  Label?: string;
  Value?: string;
  /** Options for Type=Dropdown (documentation helper, not a Figma property). */
  options?: string[];
  onChange?: (value: string) => void;
};
export function TextField({ Type = 'Filled', State = 'Enabled', Label = 'Label', Value = 'Value', options, onChange }: TextFieldProps) {
  const [value, setValue] = useSynced(Value);
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  const disabled = State === 'Disabled';
  const set = (v: string) => { setValue(v); onChange?.(v); };
  const list = options && options.length ? options : [Value, 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7'];

  if (Type === 'Dropdown') {
    return (
      <div className="fe-field-wrap">
        <button
          type="button" id={id} className="fe-field" data-type={Type} data-state={State} disabled={disabled}
          aria-haspopup="listbox" aria-expanded={open} aria-invalid={State === 'Error' || undefined}
          onClick={() => setOpen((o) => !o)} onBlur={() => setOpen(false)}
        >
          <span className="fe-field__label ts-m3-label_small">{Label}</span>
          <span className="fe-field__value ts-m3-body_large">{value}</span>
        </button>
        {open && (
          <ul className="fe-menu" role="listbox" aria-labelledby={id}>
            {list.map((o) => (
              <li key={o} role="option" aria-selected={o === value} className="fe-menu__item ts-m3-body_large"
                onMouseDown={(e) => { e.preventDefault(); set(o); setOpen(false); }}>{o}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  return (
    <label className="fe-field" data-type={Type} data-state={State} aria-disabled={disabled || undefined}>
      <span className="fe-field__label ts-m3-label_small">{Label}</span>
      <input
        className="fe-field__value fe-field__input ts-m3-body_large" value={value} disabled={disabled}
        aria-invalid={State === 'Error' || undefined} onChange={(e) => set(e.target.value)}
      />
    </label>
  );
}

// ---------- Text Area (Molecule) ----------
export type TextAreaProps = { State?: FieldState; Placeholder?: string; value?: string; onChange?: (value: string) => void };
export function TextArea({ State = 'Enabled', Placeholder = 'Write a message', value: initial = '', onChange }: TextAreaProps) {
  const [value, setValue] = useSynced(initial);
  return (
    <div className="fe-textarea" data-state={State}>
      <textarea
        className="fe-textarea__input ts-m3-body_large" placeholder={Placeholder} value={value} disabled={State === 'Disabled'}
        aria-label={Placeholder} aria-invalid={State === 'Error' || undefined}
        onChange={(e) => { setValue(e.target.value); onChange?.(e.target.value); }}
      />
    </div>
  );
}

// ---------- Checkbox (Atom) ----------
export type CheckboxProps = { Selected?: Bool; State?: ControlState; label?: string; onChange?: (selected: boolean) => void };
export function Checkbox({ Selected = 'False', State = 'Enabled', label = 'Checkbox', onChange }: CheckboxProps) {
  const [on, setOn] = useSynced(Selected === 'True');
  return (
    <label className="fe-control" data-state={State} data-selected={on ? 'True' : 'False'}>
      <input
        type="checkbox" className="fe-control__native" checked={on} disabled={State === 'Disabled'} aria-label={label}
        aria-invalid={State === 'Error' || undefined} onChange={(e) => { setOn(e.target.checked); onChange?.(e.target.checked); }}
      />
      <span className="fe-checkbox__box" aria-hidden="true">{on && <Icon name="Icon/check" size={18} className="fe-checkbox__check" />}</span>
    </label>
  );
}

// ---------- Switch (Atom) ----------
export type SwitchProps = { Selected?: Bool; State?: 'Enabled' | 'Pressed' | 'Disabled' | 'Hovered' | 'Focused'; label?: string; onChange?: (selected: boolean) => void };
export function Switch({ Selected = 'False', State = 'Enabled', label = 'Switch', onChange }: SwitchProps) {
  const [on, setOn] = useSynced(Selected === 'True');
  return (
    <label className="fe-control fe-switch" data-state={State} data-selected={on ? 'True' : 'False'}>
      <input
        type="checkbox" role="switch" className="fe-control__native" checked={on} disabled={State === 'Disabled'} aria-label={label}
        onChange={(e) => { setOn(e.target.checked); onChange?.(e.target.checked); }}
      />
      <span className="fe-switch__track" aria-hidden="true"><span className="fe-switch__thumb" /></span>
    </label>
  );
}

// ---------- Radio (Atom) ----------
export type RadioProps = { Selected?: Bool; State?: ControlState; label?: string; name?: string; onChange?: (selected: boolean) => void };
export function Radio({ Selected = 'False', State = 'Enabled', label = 'Radio', name, onChange }: RadioProps) {
  const [on, setOn] = useSynced(Selected === 'True');
  return (
    <label className="fe-control" data-state={State} data-selected={on ? 'True' : 'False'}>
      <input
        type="radio" className="fe-control__native" name={name} checked={on} disabled={State === 'Disabled'} aria-label={label}
        aria-invalid={State === 'Error' || undefined}
        // a lone radio (Storybook) can be toggled; inside a group the group sets Selected
        onClick={() => { if (!name) { setOn(!on); onChange?.(!on); } }}
        onChange={(e) => { if (name) { setOn(e.target.checked); onChange?.(e.target.checked); } }}
      />
      <span className="fe-radio__circle" aria-hidden="true">{on && <span className="fe-radio__dot" />}</span>
    </label>
  );
}

// ---------- Search Bar (Molecule) ----------
export type SearchBarProps = {
  Placeholder?: string; 'Icon search'?: string; 'Icon mic'?: string;
  value?: string; onChange?: (value: string) => void; onMic?: () => void;
};
export function SearchBar({ Placeholder = 'Search in your library', 'Icon search': iconSearch = 'Icon/search', 'Icon mic': iconMic = 'Icon/mic', value: initial = '', onChange, onMic }: SearchBarProps) {
  const [value, setValue] = useSynced(initial);
  return (
    <div className="fe-search" role="search">
      <Icon name={iconSearch} size={24} className="fe-search__icon" />
      <input
        type="search" className="fe-search__input ts-m3-body_large" placeholder={Placeholder} aria-label={Placeholder} value={value}
        onChange={(e) => { setValue(e.target.value); onChange?.(e.target.value); }}
      />
      <button type="button" className="fe-search__mic" aria-label="Voice search" onClick={onMic}>
        <Icon name={iconMic} size={24} className="fe-search__icon" />
      </button>
    </div>
  );
}

// ---------- In use examples ----------
export function CheckboxInUse() {
  const items = ['Download on Wi-Fi only', 'Show explicit content', 'Autoplay similar songs'];
  return (
    <div className="fe-list">
      {items.map((t, i) => (
        <div key={t} className="fe-list__row"><Checkbox Selected={i === 0 ? 'True' : 'False'} label={t} /><span className="ts-m3-body_large">{t}</span></div>
      ))}
    </div>
  );
}
export function RadioInUse() {
  const items = ['Low', 'Normal', 'High', 'Very high'];
  const [sel, setSel] = React.useState(1);
  return (
    <div className="fe-list" role="radiogroup" aria-label="Streaming quality">
      {items.map((t, i) => (
        <div key={t} className="fe-list__row">
          <Radio name="quality" label={t} Selected={sel === i ? 'True' : 'False'} onChange={(on) => on && setSel(i)} />
          <span className="ts-m3-body_large">{t}</span>
        </div>
      ))}
    </div>
  );
}
export function SwitchInUse() {
  return (
    <div className="fe-list">
      <div className="fe-list__row fe-list__row--between"><span className="ts-m3-body_large">AI Mix</span><Switch Selected="True" label="AI Mix" /></div>
      <div className="fe-list__row fe-list__row--between"><span className="ts-m3-body_large">Crossfade</span><Switch label="Crossfade" /></div>
    </div>
  );
}
