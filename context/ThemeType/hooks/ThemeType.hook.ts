import { IThemeType, ThemeContext } from '~/context';

import { useContext } from 'react';

/**
 * Reads the state from the theme context.
 * @returns The theme context state
 */
export function useThemeType(): IThemeType {
  const { themeType: theme, toggleThemeType: toggleTheme } =
    useContext(ThemeContext);

  if (theme === undefined || toggleTheme === undefined) {
    throw new Error(`ThemeContext used outside its provider!`);
  }

  return {
    themeType: theme,
    toggleThemeType: toggleTheme,
  };
}
