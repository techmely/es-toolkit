// @__NO_SIDE_EFFECTS__
export function nextFrame() {
  return new Promise(requestAnimationFrame);
}
