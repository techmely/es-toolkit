// @__NO_SIDE_EFFECTS__
// @__NO_SIDE_EFFECTS__
export function isRegExp(value: any): value is RegExp {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}
