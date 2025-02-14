import { isUndefined } from "../../predicate/isUndefined";

/**
 * @description Remove undefined fields from an object - This will mutates the object
 * @param {any} obj - The input obj
 * @returns {any} - the clean obj
 */
// @__NO_SIDE_EFFECTS__
export function removeUndefObj<T extends Record<string, unknown>>(obj: T): T {
  const keys = Object.keys(obj);
  for (const key of keys) {
    isUndefined(obj[key]) ? obj[key] === undefined : {};
  }
  return obj;
}
