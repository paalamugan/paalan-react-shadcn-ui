import type { BoxColorVariant } from '@/constants/colors';
import type { Dict } from '@/types/common';
import type { Breakpoints } from './generated-theme';

import { BOX_COLOR_VARIANTS } from '@/constants/colors';
import { isStyleProp, systemProps } from '@/system';

import { breakpoints } from './generated-theme';

type FilterFn<T> = (value: unknown, key: string, object: T) => boolean;

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export function objectFilter<T extends Dict>(object: T, fn: FilterFn<T>) {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });

  return result;
}

/**
 * Checks if a value is defined and not null.
 * @param value - The value to check.
 * @returns `true` if the value is defined and not null, `false` otherwise.
 */
export const isDefinedValue = (value: unknown) => value !== undefined && value !== null;

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
 * Disables the argTypes for Storybook.
 * @param argTypes - An array of argTypes to be disabled.
 * @returns A dictionary object with the disabled argTypes.
 */
export const disableStorybookArgTypes = (argTypes: string[]) => {
  const result: Dict = {};
  argTypes.forEach((key) => {
    result[key] = { table: { disable: true } };
  });
  return result;
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

/**
 * Parses a JSON string into a typed object.
 * @param value - The JSON string to parse.
 * @returns The parsed object or null if parsing fails.
 */
export const jsonParser = <T>(value: unknown): T | null => {
  if (!value) return null;
  try {
    return JSON.parse(value as string) as T;
  } catch (error) {
    return null;
  }
};

/**
 * Checks if the given value is a positive integer greater than or equal to the specified startFrom value.
 * @param value - The value to check.
 * @param startFrom - The minimum value for the integer to be considered positive. Default is 0.
 * @returns A boolean indicating whether the value is a positive integer greater than or equal to startFrom.
 */
export const isPositiveInteger = (value: unknown, startFrom: number = 0) => {
  const intValue = +String(value);
  const isInteger = Number.isInteger(intValue);
  if (Number.isNaN(intValue) || !isInteger) return false;
  return intValue >= startFrom;
};

/**
 * Checks if a given value is a positive float starting from a specified number.
 * @param value - The value to check.
 * @param startFrom - The number to start checking from. Defaults to 0.
 * @returns True if the value is a positive float starting from the specified number, false otherwise.
 */
export const isPositiveFloat = (value: unknown, startFrom: number = 0) => {
  const intValue = +String(value);
  if (Number.isNaN(intValue)) return false;
  return intValue >= startFrom;
};

/**
 * Checks if the given value is considered as invalid according to the ARIA specification.
 * @param value - The value to check.
 * @returns True if the value is considered invalid, false otherwise.
 */
export const isAriaInvalid = (value: unknown) => {
  return value === 'true' || value === true;
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
 * Debounces a function to limit the rate at which it is called.
 * @param func - The function to be debounced.
 * @param wait - The number of milliseconds to wait before invoking the function. Default is 1000ms.
 * @param immediate - If true, the function will be invoked immediately on the leading edge instead of the trailing edge.
 * @returns A debounced function.
 */
export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait = 1000,
  immediate = false,
) => {
  let timeout: NodeJS.Timeout | null;

  function debounceFunction(this: ThisParameterType<T>, ...args: Parameters<T>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  }

  return debounceFunction;
};

/**
 * Retrieves the value of a nested property from an object, or returns a default value if the property is not found.
 *
 * @template T - The type of the value to be returned.
 * @param object - The object to retrieve the property from.
 * @param key - The key of the property to retrieve. Supports nested properties using dot notation.
 * @param defaultValue - The default value to return if the property is not found. Optional.
 * @returns The value of the property, or the default value if the property is not found.
 */
export const result = <T = unknown>(object: Record<string, unknown>, key: string, defaultValue?: T) => {
  const splitKeys = key.split('.');
  let result = object;
  for (const splitKey of splitKeys) {
    if (result && typeof result === 'object') {
      result = result[splitKey] as never;
    }
  }
  return (result || defaultValue) as T;
};
