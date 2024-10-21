import type { DefaultCountryBasedFormatOptionKey } from './types';

import { getLocalCountryBasedFormat } from './helper';

export const DEFAULT_LOCAL_VALUE = 'LOCAL';

export const DEFAULT_COUNTRY_BASED_FORMAT_OPTIONS = {
  LOCAL: getLocalCountryBasedFormat(),
  US: {
    dateFormat: 'd MMMM yyyy',
    dateTimeFormat: 'd MMMM yyyy HH:mm',
    currency: 'USD',
    locale: 'enUS',
    timeZone: 'America/Los_Angeles',
  },
  IN: {
    dateFormat: 'MMMM d, yyyy',
    dateTimeFormat: 'MMMM d, yyyy HH:mm',
    currency: 'INR',
    locale: 'enIN',
    timeZone: 'Asia/Kolkata',
  },
} satisfies Record<DefaultCountryBasedFormatOptionKey, CountryBasedFormat>;

export const formatRelativeLocale: Record<string, string> = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'Pp',
};
