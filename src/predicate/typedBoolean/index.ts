/**
 * convenient typing for array.filter(typedBoolean)
 * @see https://github.com/microsoft/TypeScript/issues/31164)
 */
export const typedBoolean = Boolean as unknown as <T>(
  value: T,
) => value is Exclude<T, false | 0 | "" | null | undefined>;
