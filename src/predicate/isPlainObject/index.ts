// Reference: https://github.com/lodash/lodash/blob/master/isPlainObject.js
// @__NO_SIDE_EFFECTS__
export function isPlainObject(value: any) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

function isObjectLike(value: any) {
  return typeof value === "object" && value !== null;
}

// @__NO_SIDE_EFFECTS__
export function getTag(value: any) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
