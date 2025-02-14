// @__NO_SIDE_EFFECTS__
export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
