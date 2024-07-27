import { useTheme } from 'next-themes';

export const useNextTheme = () => {
  const theme = useTheme();
  return {
    ...theme,
    isDark: theme.theme === 'dark',
    isLight: theme.theme === 'light',
    isSystem: theme.theme === 'system',
  };
};
