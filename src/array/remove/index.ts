/**
 * Remove item if that item exist on the array
 */
// @__NO_SIDE_EFFECTS__
export function remove<T>(arr: T[], el: T) {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
}
