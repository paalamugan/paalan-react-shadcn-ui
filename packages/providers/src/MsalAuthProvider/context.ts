import { createContext } from '@paalan/react-shared/utils';

import type { MsalAuthContextState } from './types';

export const [MsalAuthContextProvider, useMsalAuth] = createContext<MsalAuthContextState>({
  name: 'MsalAuthContextProvider',
  hookName: 'useMsalAuth',
  providerName: '<MsalAuthProvider />',
});
