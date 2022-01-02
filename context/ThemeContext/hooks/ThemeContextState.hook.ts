import { IThemeContext, ThemeContext } from '../Theme.context';

import { useContext } from 'react';

/**
 * Reads the state from the theme context.
 * @returns The theme context state
 */
export function useThemeContextState(): IThemeContext {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (theme === undefined || toggleTheme === undefined) {
    throw new Error(`ThemeContext used outside its provider!`);
  }

  return {
    theme,
    toggleTheme,
  };
}
