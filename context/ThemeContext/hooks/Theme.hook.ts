import { useCallback, useEffect, useRef, useState } from 'react';
import { IThemeContext, ThemeState } from '../Theme.context';

const windowDefined = typeof window !== `undefined`;

/**
 * Gets the current theme and a way to update it.
 * @returns The current theme and a way to update it
 */
export function useTheme(): IThemeContext {
  const browserStorageThemeKey = useRef<string>(`theme`);

  const [theme, setTheme] = useState<ThemeState>((): ThemeState => {
    if (windowDefined) {
      const storedTheme = localStorage.getItem(browserStorageThemeKey.current);

      if (storedTheme) {
        return storedTheme as ThemeState;
      }
    }

    return ThemeState.LIGHT;
  });

  const toggleTheme = useCallback((): void => {
    setTheme((currentTheme: ThemeState): ThemeState => {
      return currentTheme === ThemeState.DARK
        ? ThemeState.LIGHT
        : ThemeState.DARK;
    });
  }, []);

  useEffect((): void => {
    if (windowDefined) {
      localStorage.setItem(browserStorageThemeKey.current, theme);
    }
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
}
