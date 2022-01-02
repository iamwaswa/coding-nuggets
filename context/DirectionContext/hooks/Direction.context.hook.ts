import { Direction, DirectionContext } from '../Direction.context';
import { useContext } from 'react';

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
