// @__NO_SIDE_EFFECTS__
export function isNotNull<T>(v: T | null): v is Exclude<T, null> {
  return v !== null;
}
