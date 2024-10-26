import { expect, test } from "vitest";
import { plusPrecision } from ".";

const dataPlus = [
  [0.1, 0.2, 0.3],
  [2.3, 2.4, 4.7],
  [-1.6, -1, -2.6],
  [-2.0, 63, 61],
  [-3, 7, 4],
  [-221, 38, -183],
  [-1, 0, -1],
  [2.018, 0.001, 2.019],
  [1.3224e10, 1.3224e3, 13224001322.4],
  [1.6e-30, 1.6e-30, 3.2e-30],
  ["0.1", "0.2", 0.3],
  ["2.3", "2.4", 4.7],
  ["-1.6", "-1", -2.6],
  ["-2.0", "63", 61],
  ["-3", "7", 4],
  ["-221", "38", -183],
  ["-1", "0", -1],
  ["2.018", "0.001", 2.019],
  ["1.3224e10", "1.3224e3", 13224001322.4],
  ["1.6e-30", "1.6e-30", 3.2e-30],
];

test.concurrent.each(dataPlus)("Plus operation: %s + %s = %d", (a, b, output) => {
  expect(plusPrecision(a, b)).toBe(output);
});
expect(plusPrecision("-1", "0", "2", "3", 4)).toBe(8);
expect(plusPrecision(0.1, 0.2, 0.3)).toBe(0.6);
expect(plusPrecision("0.1", "0.2", "0.3")).toBe(0.6);
expect(plusPrecision(...new Array(500).fill(1)) === 500);
