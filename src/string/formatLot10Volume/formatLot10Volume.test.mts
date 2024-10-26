import { expect, test } from "vitest";
import { formatLot10Volume } from ".";
import { isNumber } from "../../predicate";

const dataTestFormat10Volume = [
  [123123, 0, "-", "1,231,23"],
  [232323, 1, "-", "2,323,230."],
  [69696969, 2, "+", "696,969,690.0"],
  [undefined, 2, "*"],
];

test.concurrent.each(dataTestFormat10Volume)(
  "Should return %s when input is %d, %d, %s, %s",
  (input, precision, fallbackValue, expected) => {
    if (input && isNumber(precision)) {
      expect(formatLot10Volume(input, precision, fallbackValue)).toBe(expected);
    } else {
      expect(formatLot10Volume(input, precision ? +precision : 0, fallbackValue)).toBe(
        fallbackValue,
      );
    }
  },
);
