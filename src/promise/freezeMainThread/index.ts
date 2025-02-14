// @__NO_SIDE_EFFECTS__
export function freezeMainThread(duration: number) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}
