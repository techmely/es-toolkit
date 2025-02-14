import type { EntityId } from "@techmely/types";
import { isNumber } from "../../predicate/isNumber";
import { dividePrecision } from "../numberDivinePrecision";
import { timesPrecision } from "../numberTimesPrecision";

/**
 * Number precision: Accurate rounding method.
 *
 * @param num The number to round
 * @param decimal An integer specifying the decimal digits
 */
// @__NO_SIDE_EFFECTS__
export function roundPrecision(num: EntityId, decimal: number): number {
  const base = 10 ** decimal;
  let result = dividePrecision(Math.round(Math.abs(timesPrecision(num, base))), base);

  if (isNumber(num) && num < 0 && result !== 0) {
    result = timesPrecision(result, -1);
  }

  return result;
}
