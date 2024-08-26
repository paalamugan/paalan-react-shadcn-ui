/**
 * Checks if a value is defined and not null.
 * @param value - The value to check.
 * @returns `true` if the value is defined and not null, `false` otherwise.
 */
export const isDefinedValue = (value: unknown) => value !== undefined && value !== null;

/**
 * Disables the argTypes for Storybook.
 * @param argTypes - An array of argTypes to be disabled.
 * @returns A dictionary object with the disabled argTypes.
 */
export const disableStorybookArgTypes = (argTypes: string[]) => {
  const result: Record<string, unknown> = {};
  argTypes.forEach((key) => {
    result[key] = { table: { disable: true } };
  });
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

  const debounceFunction = (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };

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
