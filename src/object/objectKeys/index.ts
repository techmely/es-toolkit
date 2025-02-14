/**
 * Strict typed `Object.keys`
 *
 * @category Object
 */
// @__NO_SIDE_EFFECTS__
export function objectKeys<T extends object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}
