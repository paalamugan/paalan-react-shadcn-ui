import { useTheme } from 'next-themes';

export const useNextTheme = () => {
  const theme = useTheme();
  return {
    ...theme,
    isDark: theme.resolvedTheme === 'dark',
    isLight: theme.resolvedTheme === 'light',
    isSystem: theme.theme === 'system',
  };
};
