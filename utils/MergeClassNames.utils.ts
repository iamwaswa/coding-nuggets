/**
 * Merges an array of classNames.
 * @param classNames An array of classNames to merge
 * @returns a string containing all the classNames merged
 */
export function mergeClassNames(...classNames: Array<unknown>): string {
  return classNames.reduce(
    (mergedClasses: string, className: unknown): string => {
      if (typeof className !== `string`) {
        return mergedClasses;
      }

      return `${mergedClasses} ${className}`;
    },
    ``
  );
}
