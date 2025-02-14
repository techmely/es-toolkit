/**
 * Strict typed `Object.entries`
 *
 * @category Object
 */
// @__NO_SIDE_EFFECTS__
export function objectEntries<T extends object>(obj: T) {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}
