/**
 * Formats a given date into the ISO string date format.
 * @param date The given date
 * @param dateHasDay Whether the date is formatted with the day
 * @returns The resulting ISO string date format
 */
export function isoStringFormatDate(
  date: string | undefined,
  monthNameToIndex: (monthName: string) => number,
  dateHasDay?: boolean
): string | undefined {
  if (!date) {
    return undefined;
  }

  const formatted = date.split(` `);

  const [formattedDateMonth, formattedDateYear] = dateHasDay
    ? formatted.slice(1)
    : formatted;

  const day = dateHasDay ? Number(formatted[0].replace(/[^0-9]/g, ``)) : 1;
  const month = monthNameToIndex(formattedDateMonth);
  const year = Number(formattedDateYear);

  return new Date(year, month, day).toISOString();
}
