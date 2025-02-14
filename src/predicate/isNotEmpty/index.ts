import { isEmpty } from "../isEmpty";

// @__NO_SIDE_EFFECTS__
export function isNotEmpty<T = unknown>(val: T): boolean {
  return !isEmpty(val);
}
