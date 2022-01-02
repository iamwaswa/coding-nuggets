import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

/**
 * Maintains a listener for an event on the a given element.
 * @param eventType The event type to listen to
 * @param listener The callback to execute when the event is triggered
 * @param element The element listening for the event
 * @returns The resulting value from the listener callback being executed and a callback to override its value
 */
export function useEventListener<
  ElementType extends HTMLElement | Window,
  ListenerResultType = void
>(
  eventType: ElementType extends HTMLElement
    ? keyof HTMLElementEventMap
    : keyof WindowEventMap,
  listener: (
    event: ElementType extends HTMLElement
      ? HTMLElementEventMap[keyof HTMLElementEventMap]
      : WindowEventMap[keyof WindowEventMap]
  ) => ListenerResultType,
  element: ElementType | MutableRefObject<HTMLElement | null>
): [
  ListenerResultType | undefined,
  Dispatch<SetStateAction<ListenerResultType | undefined>>
] {
  const listenerRef = useRef<typeof listener>(listener);
  const [state, setState] = useState<ListenerResultType | undefined>(undefined);

  useEffect((): void => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect((): void | (() => void) => {
    function handler(
      event:
        | HTMLElementEventMap[keyof HTMLElementEventMap]
        | WindowEventMap[keyof WindowEventMap]
    ): void {
      setState(listenerRef.current(event));
    }

    let instance: HTMLElement | Window | null | undefined;

    if (element instanceof HTMLElement) {
      instance = element;
    } else if (element instanceof Window) {
      instance = element;
    } else {
      instance = element.current;
    }

    if (instance) {
      //@ts-ignore
      instance.addEventListener(eventType, handler);

      return (): void => {
        //@ts-ignore
        instance.removeEventListener(eventType, handler);
      };
    }
  }, [element, eventType, listener]);

  return [state, setState];
}
