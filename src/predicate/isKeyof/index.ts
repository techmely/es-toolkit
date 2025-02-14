/**
 * Type guard for any key, `k`.
 * Marks `k` as a key of `T` if `k` is in `obj`.
 *
 * @category Object
 * @param obj object to query for key `k`
 * @param k key to check existence in `obj`
 */
// @__NO_SIDE_EFFECTS__
export function isKeyOf<T extends object>(obj: T, k: keyof any): k is keyof T {
  return k in obj;
}
