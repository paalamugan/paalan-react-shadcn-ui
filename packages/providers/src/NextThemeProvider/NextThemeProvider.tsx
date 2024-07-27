import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import type { FC } from 'react';
import type { ToastProviderProps } from '../ToastProvider';

import { ToastProvider } from '../ToastProvider';

export const THEME_STORAGE_KEY = 'theme';

export interface NextThemeProviderProps extends ThemeProviderProps {
  toastProps?: Omit<ToastProviderProps, 'children'>;
}

export const NextThemeProvider: FC<NextThemeProviderProps> = ({ children, toastProps, ...props }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="white"
      enableSystem
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
      {...props}
    >
      <ToastProvider {...toastProps}>{children}</ToastProvider>
    </NextThemesProvider>
  );
};
