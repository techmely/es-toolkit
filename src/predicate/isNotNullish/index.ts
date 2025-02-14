// @__NO_SIDE_EFFECTS__
export function isNotNullish<T>(v: T | null | undefined): v is NonNullable<T> {
  return v != null;
}
