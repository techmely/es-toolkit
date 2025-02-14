type EmptyArray<T> = readonly [T, ...ReadonlyArray<T>];

// @__NO_SIDE_EFFECTS__
export function isEmptyArr<T>(array: ReadonlyArray<T> | undefined): array is EmptyArray<T> {
  return Array.isArray(array) && array?.length === 0;
}
