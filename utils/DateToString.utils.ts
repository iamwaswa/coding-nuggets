/**
 * Takes a Date and stringifies it into a specific format
 * @param date A Javascript Date object
 * @returns A year-month-day stringified date
 */
export const convertDateToString = (date: Date): string => {
  function padWith(
    value: string,
    expectedLength: number,
    pad = `0`,
    pre = true
  ): string {
    if (value.length > expectedLength) {
      throw new Error(
        `Expected value length: ${value.length} to be at most expected length: ${expectedLength}`
      );
    }

    const padLength = expectedLength - value.length;

    return pre
      ? `${pad.repeat(padLength)}${value}`
      : `${value}${pad.repeat(padLength)}`;
  }

  return `${date.getFullYear()}-${padWith(
    String(date.getMonth() + 1),
    2
  )}-${padWith(String(date.getDate()), 2)}`;
};
