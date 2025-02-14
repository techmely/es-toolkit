/**
 * convenient typing for array.filter(typedBoolean)
 * @see https://github.com/microsoft/TypeScript/issues/31164
 * @example
 * const a = [0, 1, false, true, "", "foo", null, undefined];
 * const b = a.filter(typedBoolean);
 * // b is [1, true, "foo"]
 */
// @__NO_SIDE_EFFECTS__
export const typedBoolean = Boolean as unknown as <T>(
  value: T,
) => value is Exclude<T, false | 0 | "" | null | undefined>;
