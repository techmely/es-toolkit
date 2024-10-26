import { expect, test } from "vitest";
import { stripPrecision } from ".";

test("Np Strip can eliminate rounding errors", () => {
  expect(stripPrecision(0.09999999999999998)).toBe(0.1);
  // biome-ignore lint/correctness/noPrecisionLoss: Ignore test
  expect(stripPrecision(1.0000000000000001)).toBe(1);
  expect(stripPrecision("0.09999999999999998")).toBe(0.1);
  expect(stripPrecision("1.0000000000000001")).toBe(1);
});
