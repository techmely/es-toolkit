import { expect, test } from "vitest";
import { formatNumber } from ".";
import { isNumber } from "../../predicate";

const dataTestFormatNumber = [
  [123123, 0, "-", "123,123"],
  [9999, 1, "-", "9,999.0"],
  [9999, 2, "+", "9,999.00"],
  [undefined, 0, "*", "*"],
];

test.concurrent.each(dataTestFormatNumber)(
  "When input is %d, precision %d, fallbackValue %s, should return %s ",
  (input, precision, fallbackValue, expected) => {
    if (input && isNumber(precision)) {
      expect(formatNumber(input, precision, fallbackValue)).toBe(expected);
    } else {
      expect(formatNumber(input, precision ? +precision : 0, fallbackValue)).toBe(fallbackValue);
    }
  },
);
