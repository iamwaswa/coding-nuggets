/**
 * Merges an array of classes.
 * @param classNames An array of classes to merge
 * @returns a string containing all the classes merged
 */
export function mergeClasses(...classNames: Array<unknown>): string {
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
