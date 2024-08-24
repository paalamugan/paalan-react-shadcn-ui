import { cva } from 'class-variance-authority';

import type { VariantProps } from 'class-variance-authority';
import type { Dict, FilterFn, FontSize } from '../../types';
import type { BoxColorVariant } from '../constants/colors';
import type { Breakpoints } from '../utils/generated-theme';

import { isDefinedValue } from '../../lib/helper';
import { BOX_COLOR_VARIANTS } from '../constants/colors';
import { isStyleProp, systemProps } from '../styled-props';
import { breakpoints } from '../utils/generated-theme';

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export const objectFilter = <T extends Dict>(object: T, fn: FilterFn<T>) => {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });

  return result;
};

/**
 * Filters out undefined values from an object.
 * @param object - The object to filter.
 * @returns A new object with only defined values.
 */
export const filterUndefined = (object: Dict) => objectFilter(object, isDefinedValue);

/**
 * Filters an object into two separate objects based on whether the keys are style props or attribute props.
 * @template T - The type of the object being filtered.
 * @param {T} object - The object to filter.
 * @returns {{ styledProps: Dict, attrProps: Dict }} - An object containing two dictionaries: one for style props and one for attribute props.
 */
export const objectStyledPropFilter = <T extends Dict>(object: T): Record<'styledProps' | 'attrProps', Dict> => {
  const result: Record<'styledProps' | 'attrProps', Dict> = {
    styledProps: {},
    attrProps: {},
  };

  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (!isDefinedValue(value)) return; // skip undefined values

    if (isStyleProp(key)) {
      result.styledProps[key] = value;
    } else {
      result.attrProps[key] = value;
    }
  });

  return result;
};

/**
 * Generates a Tailwind CSS class name based on the given styled props.
 *
 * @param styledProps - The styled props to generate the class name from.
 * @returns The generated Tailwind CSS class name.
 */
export const generateTailwindClassName = (styledProps: Dict) => {
  const classNames: string[] = [];
  Object.entries(styledProps).forEach(([key, value]) => {
    const val = value as string;
    const props = systemProps[key];
    if (!isDefinedValue(props)) return;
    if (typeof props === 'boolean') {
      classNames.push(val);
      return;
    }
    const prefix = props?.prefix || '';
    const prefixes = Array.isArray(prefix) ? prefix : [prefix];

    prefixes.map((prefixVal) => {
      let className = val;
      if (prefixVal) {
        className = `${prefixVal}-${val}`;
      } else if (breakpoints.includes(val as Breakpoints)) {
        className = val;
      }

      const tailwindClassName = (props.transform?.(className) || '') as string;
      if (tailwindClassName && typeof tailwindClassName === 'string') {
        classNames.push(tailwindClassName);
      }
    });
  });

  return classNames.join(' ').trim();
};

/**
 * Returns an array of random box colors from the available color variants.
 * @param count - The number of random colors to generate.
 * @returns An array of random box colors.
 */
export const getRandomBoxColors = (count: number) => {
  const result: BoxColorVariant[] = [];
  const ignoredColors = ['inherit', 'transparent', 'background', 'foreground', 'secondary', 'muted', 'white', 'black'];
  const variants = BOX_COLOR_VARIANTS.filter((variant) => !ignoredColors.includes(variant));
  for (let i = 0; i < count; i += 1) {
    const randomIndex = Math.floor(Math.random() * variants.length);
    const value = variants[randomIndex];
    if (value) {
      result.push();
    }
  }
  return result;
};

export const tailwindBoxVariants = cva<{
  bg: Record<BoxColorVariant, string>;
  color: Record<BoxColorVariant, string>;
  borderColor: Record<BoxColorVariant, string>;
  fontSize: Record<keyof FontSize, string>;
}>('', {
  variants: {
    bg: {
      gray: 'bg-gray-600',
      red: 'bg-red-600',
      orange: 'bg-orange-600',
      amber: 'bg-amber-600',
      yellow: 'bg-yellow-600',
      lime: 'bg-lime-600',
      green: 'bg-green-600',
      emerald: 'bg-emerald-600',
      teal: 'bg-teal-600',
      cyan: 'bg-cyan-600',
      sky: 'bg-sky-600',
      blue: 'bg-blue-600',
      indigo: 'bg-indigo-600',
      violet: 'bg-violet-600',
      purple: 'bg-purple-600',
      fuchsia: 'bg-fuchsia-600',
      pink: 'bg-pink-600',
      rose: 'bg-rose-600',
      black: 'bg-black',
      white: 'bg-white',
      transparent: 'bg-transparent',
      background: 'bg-background',
      foreground: 'bg-foreground',
      inherit: 'bg-inherit',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
      info: 'bg-info',
      success: 'bg-success',
      warning: 'bg-warning',
      danger: 'bg-danger',
      muted: 'bg-muted',
      currentColor: 'bg-current',
      dimmed: 'bg-gray-500',
    },
    color: {
      gray: 'text-gray-600',
      red: 'text-red-600',
      orange: 'text-orange-600',
      amber: 'text-amber-600',
      yellow: 'text-yellow-600',
      lime: 'text-lime-600',
      green: 'text-green-600',
      emerald: 'text-emerald-600',
      teal: 'text-teal-600',
      cyan: 'text-cyan-600',
      sky: 'text-sky-600',
      blue: 'text-blue-600',
      indigo: 'text-indigo-600',
      violet: 'text-violet-600',
      purple: 'text-purple-600',
      fuchsia: 'text-fuchsia-600',
      pink: 'text-pink-600',
      rose: 'text-rose-600',
      black: 'text-black',
      white: 'text-white',
      transparent: 'text-transparent',
      background: 'text-background',
      foreground: 'text-foreground',
      inherit: 'text-inherit',
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
      muted: 'text-muted',
      currentColor: 'text-current',
      dimmed: 'text-gray-500',
    },
    borderColor: {
      gray: 'border-gray-600',
      red: 'border-red-600',
      orange: 'border-orange-600',
      amber: 'border-amber-600',
      yellow: 'border-yellow-600',
      lime: 'border-lime-600',
      green: 'border-green-600',
      emerald: 'border-emerald-600',
      teal: 'border-teal-600',
      cyan: 'border-cyan-600',
      sky: 'border-sky-600',
      blue: 'border-blue-600',
      indigo: 'border-indigo-600',
      violet: 'border-violet-600',
      purple: 'border-purple-600',
      fuchsia: 'border-fuchsia-600',
      pink: 'border-pink-600',
      rose: 'border-rose-600',
      black: 'border-black',
      white: 'border-white',
      transparent: 'border-transparent',
      background: 'border-background',
      foreground: 'border-foreground',
      inherit: 'border-inherit',
      primary: 'border-primary',
      secondary: 'border-secondary',
      tertiary: 'border-tertiary',
      info: 'border-info',
      success: 'border-success',
      warning: 'border-warning',
      danger: 'border-danger',
      muted: 'border-muted',
      currentColor: 'border-current',
      dimmed: 'border-gray-500',
    },
    fontSize: {
      xs: 'text-xs',
      '2xs': 'text-2xs',
      '3xs': 'text-3xs',
      tiny: 'text-tiny',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {},
});

export type TailwindBoxVariants = VariantProps<typeof tailwindBoxVariants>;
