export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

// @__NO_SIDE_EFFECTS__
export function sortByDate<T>(
  a: T,
  b: T,
  key: keyof T,
  direction: SortDirection = SortDirection.ASC,
) {
  if (a[key] < b[key]) {
    return direction === SortDirection.ASC ? 1 : -1;
  }
  if (a[key] > b[key]) {
    return direction === SortDirection.ASC ? -1 : 1;
  }
  return 0;
}
