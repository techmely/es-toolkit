import { nextEvent } from "../nextEvent";
export function transitionEnd(element) {
    return nextEvent(element, "transitionend");
}
