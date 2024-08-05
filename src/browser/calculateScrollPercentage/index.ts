import { invariant } from "../../common/invariant";
import { isBrowser } from "../../predicate/isBrowser";

export function calculateScrollPercentage() {
  invariant(isBrowser());
  const scrollPosition = window.scrollY || window.scrollY || document.documentElement.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / totalHeight) * 100;
  return scrollPercentage;
}
