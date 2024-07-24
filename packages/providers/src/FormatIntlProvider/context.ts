import { createContext } from '@paalan/react-shared/utils';

import type { FormatIntlContextState } from './types';

export const [FormatIntlContextProvider, useFormatIntl] = createContext<FormatIntlContextState>({
  name: 'FormatIntlContextProvider',
  hookName: 'useFormatIntl',
  providerName: '<FormatIntlProvider />',
});
