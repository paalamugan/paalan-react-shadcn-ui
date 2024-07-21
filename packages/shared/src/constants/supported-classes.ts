import type { TailwindStyledTheme } from '../types';

export const SUPPORTED_TAILWIND_CLASSES: Array<keyof TailwindStyledTheme> = [
  'padding',
  'margin',
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'gap',
  'order',
  'inset',
  'flex',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridColumn',
  'gridRow',
  'gridColumnStart',
  'gridColumnEnd',
  'gridRowStart',
  'gridRowEnd',
];
