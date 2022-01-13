import { PropsWithChildren } from 'react';
import { ThemeContext, useConfigureThemeType } from '~/context';

export function ThemeTypeContextProvider({
  children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
  return (
    <ThemeContext.Provider value={useConfigureThemeType()}>
      {children}
    </ThemeContext.Provider>
  );
}
