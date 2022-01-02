const windowDefined = typeof window !== `undefined`;

/**
 * Takes the given URL and extracts a query map
 * @param keysToIncludeInQueryMap The keys to include in the query map
 * @returns A query map from the query string in the given URL
 */
export function getQueryMapFromURLQueryString(
  keysToIncludeInQueryMap: Array<string>
): Record<string, string> {
  if (windowDefined) {
    const splitSearch = window.location.search.split(`?`);

    if (splitSearch.length !== 2) {
      return {};
    }

    const [, search] = splitSearch;

    const query = search.split(`&`);

    return query.reduce(
      (
        map: Record<string, string>,
        queryEntry: string
      ): Record<string, string> => {
        const [key, value] = queryEntry.split(`=`);

        if (keysToIncludeInQueryMap.includes(key)) {
          map[key] = value;
        }

        return map;
      },
      {}
    );
  }

  return {};
}
