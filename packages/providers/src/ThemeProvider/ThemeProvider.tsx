import { useEffect, useState } from 'react';

import type { Theme, ThemeProviderProps } from './types';

import { ToastProvider } from '../ToastProvider';
import { ThemeContextProvider } from './context';

/**
 * The ThemeProvider component provides a theme to its child components
 * and persists the theme in local storage.
 */
export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
  storageKey = 'paalan-ui-theme',
  toasterProps,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (root.getAttribute('data-theme')) {
      root.removeAttribute('data-theme');
    }

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);
      root.setAttribute('data-theme', systemTheme);
      return;
    }

    root.setAttribute('data-theme', theme);
    root.classList.add(theme);
  }, [theme]);

  const setThemeHandler = (theme: Theme) => {
    localStorage.setItem(storageKey, theme);
    setTheme(theme);
  };

  const value = {
    theme,
    setTheme: setThemeHandler,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isSystem: theme === 'system',
    toggleTheme: () => {
      setThemeHandler(theme === 'light' ? 'dark' : 'light');
    },
  };

  return (
    <ThemeContextProvider value={value}>
      <ToastProvider theme={theme} {...toasterProps}>
        {children}
      </ToastProvider>
      {children}
    </ThemeContextProvider>
  );
};
