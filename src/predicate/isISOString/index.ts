// @__NO_SIDE_EFFECTS__
export function isISOString(val: string) {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
}
