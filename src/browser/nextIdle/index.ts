// @__NO_SIDE_EFFECTS__
export function nextIdle() {
  // @ts-expect-error Ignore
  return window !== undefined ? new Promise(window.requestIdleCallback || setTimeout) : setTimeout;
}
