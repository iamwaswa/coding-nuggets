/**
 * Takes a kebab cased value and transforms it to sentence case.
 * @param kebabCase The kebab cased value to transform
 * @returns The sentence cased value
 */
export function kebabCaseToSentenceCase(kebabCase: string): string {
  const kebabReplacedWithSpace = kebabCase.replace(/-/g, ` `);
  return kebabReplacedWithSpace.length > 1
    ? `${kebabReplacedWithSpace[0].toUpperCase()}${kebabReplacedWithSpace.substring(
        1
      )}`
    : kebabReplacedWithSpace.toUpperCase();
}
