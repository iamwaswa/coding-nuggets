import { PropsWithChildren } from 'react';

const ThemeContext = {
  Provider: null,
};

export function ThemeTypeContextProvider({
  children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
  return (
    <ThemeContext.Provider value={useConfigureThemeType()}>
      {children}
    </ThemeContext.Provider>
  );
}

function useConfigureThemeType(){
  throw new Error(`Use configure theme type hook not implemented!`);
}
