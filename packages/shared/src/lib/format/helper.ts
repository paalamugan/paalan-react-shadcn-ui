import type { Locale } from 'date-fns';
import type { TimeZone } from '../../constants/time-zones';

/**
 * Returns the default date format as a string.
 * The format is based on the current locale and follows the pattern "dd/MM/yyyy".
 * @returns The default date format.
 */
export const getDefaultDateFormat = (): string => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const currentLocaleDate = now.toLocaleDateString(undefined, options);
  const date = now.getDate();
  const twoDigitDate = `${date}`.length === 1 ? `0${date}` : date;
  const month = now.getMonth() + 1;
  const twoDigitMonth = `${month}`.length === 1 ? `0${month}` : month;
  const year = now.getFullYear();

  const localeDateFormat = currentLocaleDate
    .replace(`${twoDigitDate}`, 'dd')
    .replace(`${twoDigitMonth}`, 'MM')
    .replace(`${year}`, 'yyyy');
  return localeDateFormat;
};

/**
 * Retrieves the locale object based on the provided locale string.
 * If the locale is not found, it falls back to en-US.
 *
 * @param locale - The locale string.
 * @returns A promise that resolves to the locale object or undefined.
 */
export const getLocale = async (locale?: CountryBasedFormat['locale']): Promise<Locale | undefined> => {
  if (!locale) return;
  try {
    const data = await import(`date-fns/locale`);
    return data[locale];
  } catch (error) {
    console.warn(`Locale ${locale} not found. Using en-IN as fallback.`);
    return (await import(`date-fns/locale/en-IN`)).default;
  }
};

/**
 * Retrieves the local country-based format for date, time, and currency.
 * @returns The required country-based format object.
 */
export const getLocalCountryBasedFormat = (): Required<CountryBasedFormat> => {
  const defaultLocale = Intl.DateTimeFormat().resolvedOptions().locale?.replace(/-/g, '');
  const locale = defaultLocale as CountryBasedFormat['locale'];
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone;
  const dateFormat = getDefaultDateFormat();
  const dateTimeFormat = `${dateFormat} hh:mm a`;
  return {
    dateFormat,
    dateTimeFormat,
    locale: locale || 'enIN',
    timeZone,
    currency: 'INR',
  };
};
