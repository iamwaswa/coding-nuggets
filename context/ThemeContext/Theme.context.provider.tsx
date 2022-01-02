import { ReactNode } from 'react';
import { ThemeContext } from './Theme.context';
import { useTheme } from './hooks';

interface IThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({
  children,
}: IThemeContextProviderProps): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
