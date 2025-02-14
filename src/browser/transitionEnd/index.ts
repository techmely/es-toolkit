import { nextEvent } from "../nextEvent";

// @__NO_SIDE_EFFECTS__
export function transitionEnd(element: HTMLElement) {
  return nextEvent(element, "transitionend");
}
