import { isServer } from "../predicate/isServer";

export function requestFullscreen(mode = true, el = "body") {
  if (isServer()) return;
  if (mode) document.querySelector(el)?.requestFullscreen();
  else document.exitFullscreen();
}
