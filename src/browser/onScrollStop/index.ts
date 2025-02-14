import { isServer } from "../../predicate/isServer";

/**
 * Runs the callback whenever the user has stopped scrolling.
 * @param {CallableFunction} callback
 */
// @__NO_SIDE_EFFECTS__
export function onScrollStop(callback: CallableFunction, timeout = 150) {
  if (isServer()) return;
  let isScrolling: number | any;
  window.addEventListener(
    "scroll",
    () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, timeout);
    },
    false,
  );
}
