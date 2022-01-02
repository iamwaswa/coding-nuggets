/**
 * Takes a sentence cased value and transforms it to kebab case.
 * @param sentenceCase The sentence cased value to transform
 * @returns The kebab cased value
 */
export function sentenceCaseToKebabCase(sentenceCase: string): string {
  const spaceReplacedWithKebab = sentenceCase.replace(/\s/g, `-`);
  return spaceReplacedWithKebab.toLowerCase();
}
