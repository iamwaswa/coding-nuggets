import { createContext } from 'react';

export enum Direction {
  LTR = 'ltr',
  RTL = 'rtl',
}

export const DirectionContext = createContext<
  Partial<{ direction: Direction }>
>({});
