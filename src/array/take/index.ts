/**
 * @description Creates a slice of array with n elements taken from the beginning.
 * @template T
 * @param {T[]} array - The input array
 * @param {number} limit - The number you want to
 * @returns {T[]} - New array was sliced
 */
// @__NO_SIDE_EFFECTS__
export function take<T>(array: readonly T[], limit: number): T[] {
  return array.slice(0, limit);
}
