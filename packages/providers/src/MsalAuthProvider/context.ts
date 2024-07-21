import type { MsalAuthContextState } from './types';

import { createContext } from '@paalan/react-shared/utils';

export const [MsalAuthContextProvider, useMsalAuth] = createContext<MsalAuthContextState>({
  name: 'MsalAuthContextProvider',
  hookName: 'useMsalAuth',
  providerName: '<MsalAuthProvider />',
});
