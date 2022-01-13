import { useContext } from 'react';

enum Direction {
  LTR,
  RTL
}

const DirectionContext = {};

/**
 * Provides the current direction.
 * @returns The current direction
 */
export function useDirectionContext(): Direction {
  const { direction } = useContext(DirectionContext);

  if (direction === undefined) {
    throw new Error(`DirectionContext used outside its provider!`);
  }

  return direction;
}
