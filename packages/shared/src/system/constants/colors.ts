export const TAILWIND_COLOR_VARIANTS = [
  'gray',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;

export const COLOR_VARIANTS = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'link',
] as const;

export type TailwindColorVariant = (typeof TAILWIND_COLOR_VARIANTS)[number];
export type ColorVariant = (typeof COLOR_VARIANTS)[number];

export const ALL_COLOR_VARIANTS = [...TAILWIND_COLOR_VARIANTS, ...COLOR_VARIANTS] as const;
export type AllColorVariant = (typeof ALL_COLOR_VARIANTS)[number];

export const BOX_COLOR_VARIANTS = [
  ...ALL_COLOR_VARIANTS,
  'muted',
  'black',
  'white',
  'transparent',
  'background',
  'foreground',
  'inherit',
  'currentColor',
  'dimmed',
] as const;
export type BoxColorVariant = (typeof BOX_COLOR_VARIANTS)[number];
