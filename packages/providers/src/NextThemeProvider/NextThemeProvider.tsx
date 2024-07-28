import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import type { FC } from 'react';
import type { ToastProviderProps } from '../ToastProvider';

import { ToastProvider } from '../ToastProvider';
import { useNextTheme } from './hooks';

export const THEME_STORAGE_KEY = 'theme';

export interface NextThemeProviderProps extends ThemeProviderProps {
  toastProps?: Omit<ToastProviderProps, 'children'>;
}

const ToastProviderWrapper: FC<ToastProviderProps> = ({ children, ...props }) => {
  const theme = useNextTheme();
  const currentTheme = theme.resolvedTheme === 'dark' ? 'dark' : 'light';
  return (
    <ToastProvider theme={currentTheme} {...props}>
      {children}
    </ToastProvider>
  );
};

export const NextThemeProvider: FC<NextThemeProviderProps> = ({ children, toastProps, ...props }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
      {...props}
    >
      <ToastProviderWrapper {...toastProps}>{children}</ToastProviderWrapper>
    </NextThemesProvider>
  );
};
