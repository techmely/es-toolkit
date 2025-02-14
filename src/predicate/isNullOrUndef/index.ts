// @__NO_SIDE_EFFECTS__
export function isNullOrUndefined(value: unknown): value is undefined | null {
  return value === null || value === undefined;
}
