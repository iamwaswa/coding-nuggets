import { createContext } from 'react';

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface IThemeType {
  themeType: ThemeType;
  toggleThemeType(): void;
}

export const ThemeContext = createContext<Partial<IThemeType>>({});
