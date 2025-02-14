/**
 * @see https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex/6969486#6969486
 */
// @__NO_SIDE_EFFECTS__
export function escapeRegExp(val: string) {
  return val.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
