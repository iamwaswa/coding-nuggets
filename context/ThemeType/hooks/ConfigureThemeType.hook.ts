import { useCallback, useEffect, useRef, useState } from 'react';
import { IThemeType, ThemeType } from '~/context';

const windowDefined = typeof window !== `undefined`;

/**
 * Configures the current theme type and a way to update it.
 * @returns The current theme type and a way to update it
 */
export function useConfigureThemeType(): IThemeType {
  const browserStorageThemeKey = useRef<string>(`themeType`);

  const [themeType, setThemeType] = useState<ThemeType>((): ThemeType => {
    if (windowDefined) {
      const storedTheme = localStorage.getItem(browserStorageThemeKey.current);

      if (storedTheme) {
        return storedTheme as ThemeType;
      }
    }

    return ThemeType.LIGHT;
  });

  const toggleThemeType = useCallback((): void => {
    setThemeType((currentTheme: ThemeType): ThemeType => {
      return currentTheme === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;
    });
  }, []);

  useEffect((): void => {
    if (windowDefined) {
      localStorage.setItem(browserStorageThemeKey.current, themeType);
    }
  }, [themeType]);

  return {
    themeType,
    toggleThemeType,
  };
}
