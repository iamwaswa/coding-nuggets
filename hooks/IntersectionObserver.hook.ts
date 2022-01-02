import { useEffect, useRef, useState } from 'react';

/**
 * Manages the intersection observer state of an element.
 * @param callback The callback to execute when the intersection is achieved
 * @param options The options for the intersection observer
 * @returns A callback to set the element to observe
 */
export function useIntersectionObserver<TElement extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit
) {
  const [element, setElement] = useState<TElement | null>(null);

  const latestCallback = useRef<IntersectionObserverCallback>(callback);
  useEffect((): void => {
    latestCallback.current = callback;
  }, [callback]);

  useEffect((): void | (() => void) => {
    if (element) {
      const observer = new IntersectionObserver(
        latestCallback.current,
        options
      );

      observer.observe(element);

      return (): void => {
        observer.unobserve(element);
      };
    }
  }, [element, options]);

  return setElement;
}
