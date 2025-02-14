type NotFalsy<T> = Exclude<T, false | null | 0 | "" | undefined>;

/**
 * Removes falsy values (false, null, 0, '', undefined, NaN) from an array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array to remove falsy values.
 * @returns {Array<Exclude<T, false | null | 0 | '' | undefined>>} - A new array with all falsy values removed.
 *
 * @example
 * removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5]);
 * Returns: [1, 2, 3, 4, 5]
 */
// @__NO_SIDE_EFFECTS__
export function removeFalsyValues<T>(arr: readonly T[]): Array<NotFalsy<T>> {
  const result: Array<NotFalsy<T>> = [];

  for (const item of arr) {
    if (item) {
      result.push(item as NotFalsy<T>);
    }
  }

  return result;
}
