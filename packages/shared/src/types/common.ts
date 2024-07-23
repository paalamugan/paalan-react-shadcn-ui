import type { ReactNode } from 'react';

export type Dict<T = unknown> = Record<string, T>;
export type ValueOf<T> = T[keyof T];
export type FilterFn<T> = (value: unknown, key: string, object: T) => boolean;

export interface OptionType {
  /**
   * The value of the option. If labelContent is not provided, this will be displayed in the option.
   */
  label: string;
  /**
   * The value of the option.
   */
  value: string;
  /**
   * The key of the option. This is used to uniquely identify the option (optional). If not provided, the value will be used.
   */
  key?: string;
  /**
   * Optional content to display in the option. If not provided, the label will be displayed.
   */
  labelContent?: ReactNode;
  /**
   * Optional className for the option.
   */
  className?: string;
  /**
   * Optional disabled for the option.
   */
  disabled?: boolean;
  /**
   * Optional metadata for the option. This can be used to store additional information about the option.
   */
  metadata?: Dict;
}

export type Merge<T, P> = P & Omit<T, keyof P>;

export type UnionStringArray<T extends Readonly<string[]>> = T[number];

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type LiteralUnion<T extends U, U = string> = T | (U & { _?: never });

export type AnyFunction<T = never> = (...args: T[]) => never;

export type FunctionArguments<T extends VoidFunction> = T extends (...args: infer R) => never ? R : never;

export type Booleanish = boolean | 'true' | 'false';
export type StringOrNumber = string | number;

export type EventKeys =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'Backspace'
  | 'Control'
  | 'Meta'
  | 'Home'
  | 'End'
  | 'PageDown'
  | 'PageUp'
  | 'Delete'
  | 'Escape'
  | ' '
  | 'Shift';

export type SizeVariant = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
