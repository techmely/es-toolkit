import type { EntityId, NullList, UnDef } from "@techmely/types";
import { isNumber } from "../../predicate/isNumber";

/**
 * Format number with comma separator
 * @param value - The number to format
 * @param options - The options for formatting
 */
// @__NO_SIDE_EFFECTS__
export function formatNumber(
  num: NullList<EntityId>,
  precision = 0,
  defaultValue: UnDef<EntityId> = "-",
) {
  if (!isNumber(num)) {
    return defaultValue;
  }
  return num.toLocaleString("en", {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
}
