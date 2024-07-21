import type { FormatIntlContextState } from './types';

import { createContext } from '@paalan/react-shared/utils';

export const [FormatIntlContextProvider, useFormatIntl] = createContext<FormatIntlContextState>({
  name: 'FormatIntlContextProvider',
  hookName: 'useFormatIntl',
  providerName: '<FormatIntlProvider />',
});
