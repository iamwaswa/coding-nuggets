import { createContext } from 'react';

export enum ThemeState {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface IThemeContext {
  theme: ThemeState;
  toggleTheme(): void;
}

export const ThemeContext = createContext<Partial<IThemeContext>>({});
