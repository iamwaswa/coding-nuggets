export function eventTargetIsHTMLInputElement(
  target: EventTarget | null
): target is HTMLInputElement {
  return Boolean(
    typeof target === `object` &&
      // @ts-ignore
      target?.value !== undefined
  );
}
