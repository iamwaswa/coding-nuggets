const sequentialNumberGenerator = getSequentialNumberGenerator();

/**
 * Generates a unique id.
 * @param prefix The prefix for the id
 * @returns A unique id
 */
export function useId(prefix = `prefix`): string {
  return `${prefix}-${sequentialNumberGenerator.next().value}`;
}

function* getSequentialNumberGenerator(): Generator<number, number, number> {
  let number = 0;

  while (true) {
    yield ++number;
  }
}
