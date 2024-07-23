import { createContext } from '@paalan/react-shared';

import type { ThemeContextState } from './types';

export const [ThemeContextProvider, useTheme] = createContext<ThemeContextState>({
  name: 'ThemeContextProvider',
  hookName: 'useTheme',
  providerName: '<ThemeProvider />',
});
