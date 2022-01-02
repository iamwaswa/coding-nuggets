import { Dispatch, SetStateAction, useState } from 'react';

import { Direction } from '../Direction.context';

/**
 * Reads the state from the direction context.
 * @returns The direction context state
 */
export function useDirectionContextState(): [
  Direction,
  Dispatch<SetStateAction<Direction>>
] {
  return useState<Direction>(Direction.LTR);
}
