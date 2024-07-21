import type { ThemeContextState } from './types';

import { createContext } from '@paalan/react-shared';

export const [ThemeContextProvider, useTheme] = createContext<ThemeContextState>({
  name: 'ThemeContextProvider',
  hookName: 'useTheme',
  providerName: '<ThemeProvider />',
});
