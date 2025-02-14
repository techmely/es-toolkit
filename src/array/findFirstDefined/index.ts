// @__NO_SIDE_EFFECTS__
export function findFirstDefined<T>(...args: (T | undefined)[]) {
  return args.find((arg) => arg !== undefined);
}
