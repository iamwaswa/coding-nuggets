import { ReactNode } from 'react';

enum Direction {
  LTR,
  RTL
}

const DirectionContext = {
  Provider: null,
};

interface IDirectionContextProviderProps {
  children: ReactNode;
  direction: Direction;
}

export function DirectionContextProvider({
  children,
  direction,
}: IDirectionContextProviderProps): JSX.Element {
  return (
    <DirectionContext.Provider value={{ direction }}>
      {children}
    </DirectionContext.Provider>
  );
}
