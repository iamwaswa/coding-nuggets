import { Direction, DirectionContext } from './Direction.context';
import { ReactNode } from 'react';

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
