import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

import type { ClassValue } from 'clsx';

/**
 * Returns a string of concatenated class names.
 * @param inputs - An array of class names or class name objects.
 * @returns A string of concatenated class names.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Converts the keys of an object into an array for Zod enum.
 *
 * @template T - The type of the object.
 * @param obj - The object to convert.
 * @returns - The converted array of values.
 * @throws - Throws an error if the object is empty.
 */
export const convertObjectKeysForZodEnum = <
  T extends Record<string, unknown>,
  TKey = keyof T extends string ? keyof T : never,
>(
  obj: T,
) => {
  const keys = Object.keys(obj);
  if (!keys.length) {
    throw new Error('Empty object');
  }
  return [...keys] as [TKey, ...TKey[]];
};

/**
 * Converts an object's keys into a Zod enum.
 *
 * @param obj - The object containing key-value pairs.
 * @returns A Zod enum representing the keys of the object.
 */
export const convertObjectKeysIntoZodEnum = <T extends Record<string, unknown>>(obj: T) => {
  return z.enum(convertObjectKeysForZodEnum(obj));
};

/**
 * Converts the values of an object into an array for Zod enum.
 *
 * @template T - The type of the object.
 * @param obj - The object to convert.
 * @returns - The converted array of values.
 * @throws - Throws an error if the object is empty.
 */
export const convertObjectValuesForZodEnum = <T extends Record<string, string>>(obj: T) => {
  const values = Object.values(obj);
  if (!values.length) {
    throw new Error('Empty object');
  }
  return [...values] as [T[keyof T], ...T[keyof T][]];
};

/**
 * Converts the values of an object into a Zod enum.
 *
 * @param obj - The object whose values will be converted.
 * @returns A Zod enum with the converted values.
 */
export const convertObjectValuesIntoZodEnum = <T extends Record<string, string>>(obj: T) => {
  return z.enum(convertObjectValuesForZodEnum(obj));
};

/**
 * Converts a File object to a base64 string.
 * @param file - The File object to convert.
 * @returns A Promise that resolves with the base64 string representation of the file.
 */
export const toBase64 = (file: File) => {
  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
