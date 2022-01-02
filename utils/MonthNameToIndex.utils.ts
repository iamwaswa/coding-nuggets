const monthNameToIndexMap = new Map<string, number>([
  [`January`, 0],
  [`Jan`, 0],
  [`February`, 1],
  [`Feb`, 1],
  [`March`, 2],
  [`Mar`, 2],
  [`April`, 3],
  [`Apr`, 3],
  [`May`, 4],
  [`June`, 5],
  [`Jun`, 5],
  [`July`, 6],
  [`Jul`, 6],
  [`August`, 7],
  [`Aug`, 7],
  [`September`, 8],
  [`Sep`, 8],
  [`October`, 9],
  [`Oct`, 9],
  [`November`, 10],
  [`Nov`, 10],
  [`December`, 11],
  [`Dec`, 11],
]);

export function monthNameToIndex(month: string): number {
  const index = monthNameToIndexMap.get(month);

  if (index !== undefined) {
    return index;
  }

  throw new Error(`Invalid month: ${month}`);
}
