import { useCallback } from 'react';

/**
 * Manages dispatching an event
 * @param element The element to dispatch the event
 * @returns A callback to dispatch the event
 */
export function useDispatchEvent<TEvent extends Event>(
  element: HTMLElement | Window = window
): (event: TEvent) => void {
  return useCallback(
    (event: TEvent): void => {
      element.dispatchEvent(event);
    },
    [element]
  );
}
