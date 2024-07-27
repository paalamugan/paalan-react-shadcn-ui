import { Toaster } from '@paalan/react-ui';

import type { ToasterProps } from '@paalan/react-ui';
import type { FC, ReactNode } from 'react';

import { useNextTheme } from '../NextThemeProvider/hooks';

export interface ToastProviderProps extends ToasterProps {
  children: ReactNode;
  currentTheme?: 'light' | 'dark';
}

export const ToastProvider: FC<ToastProviderProps> = ({ children, ...props }) => {
  const theme = useNextTheme();
  const currentTheme = theme.resolvedTheme === 'dark' ? 'dark' : 'light';
  return (
    <>
      <Toaster richColors closeButton theme={currentTheme} {...props} />
      {children}
    </>
  );
};
