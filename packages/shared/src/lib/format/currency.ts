import type { CurrencyCode, CurrencyConverterOptions, ICurrencyConverter } from '../currency-converter';

import { CurrencyConverter } from '../currency-converter';

export interface ICurrencyIntl extends ICurrencyConverter {
  format(value: string | number, currency?: string): string;
}

export interface CurrencyIntlOptions extends CurrencyConverterOptions {
  currency: CurrencyCode;
  locale?: string;
  fallback?: string;
}

/**
 * Represents a currency formatter that formats numeric values into currency strings.
 */
export class CurrencyIntl extends CurrencyConverter implements ICurrencyIntl {
  readonly currency: CurrencyCode;
  readonly fallback: string;
  readonly locale?: string;

  /**
   * Constructs a new instance of the CurrencyIntl class.
   * @param options - The options for configuring the currency formatter.
   */
  constructor({ locale, currency, from, fallback, ...options }: CurrencyIntlOptions) {
    super({ ...options, from: from || currency });
    this.currency = currency;
    this.locale = locale || undefined;
    this.fallback = fallback ?? 'N/A';
  }

  /**
   * Formats the given value into a currency string.
   * @param value - The value to format.
   * @param currency - The currency code to use for formatting. Defaults to the currency specified in the constructor.
   * @returns The formatted currency string.
   */
  format(value: number | string | undefined | null, currency = this.currency): string {
    const convertedValue = value ?? 0;
    if (!this.isValid(convertedValue)) return this.fallback;

    return new Intl.NumberFormat(this.locale, {
      currency,
      currencyDisplay: 'symbol',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(Number(convertedValue));
  }

  private isValid(value: number | string | undefined | null): boolean {
    if (Number.isNaN(value) || Number.isNaN(Number(value))) return false;
    return true;
  }
}

export const currencyIntl = new CurrencyIntl({ currency: 'INR', locale: 'en-IN' });
