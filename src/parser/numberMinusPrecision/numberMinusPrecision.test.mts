import { expect, test } from "vitest";
import { minusPrecision } from ".";

const dataMinus = [
  [0.07, 0.01, 0.06],
  [0.7, 0.1, 0.6],
  [1.0, 0.9, 0.1],
  [1, 0, 1],
  [1, -0, 1],
  [-1, 0, -1],
  [-1, -0, -1],
  [1, 22, -21],
  // biome-ignore lint/correctness/noPrecisionLoss: Ignore test
  [8893568.397103781249, -7.2967405955, 8893575.693844376749],
  [105468873, 0, 105468873],
  ["0.07", "0.01", 0.06],
  ["0.7", "0.1", 0.6],
  ["1.0", "0.9", 0.1],
  ["1", "0", 1],
  ["1", "-0", 1],
  ["-1", "0", -1],
  ["-1", "-0", -1],
  ["1", "22", -21],
  // biome-ignore lint/correctness/noPrecisionLoss: Ignore test
  ["8893568.397103781249", "-7.29674059550", 8893575.693844376749],
  ["105468873", "0", 105468873],
  [1.23e5, 10, 122990],
  [1.23e-5, 1.0023, -1.0022877],
  [1.3224e10, 21, 13223999979],
  [1.3224e10, 1.3224e3, 13223998677.6],
  [1.7e-30, 0.1e-30, 1.6e-30],
  ["1.23e5", "10", 122990],
  ["1.23e-5", "1.0023", -1.0022877],
  ["1.3224e10", "21", 13223999979],
  ["1.3224e10", "1.3224e3", 13223998677.6],
  ["1.7e-30", "0.1e-30", 1.6e-30],
];

test.concurrent.each(dataMinus)("Minus operation: %s - %s = %d", (a, b, output) => {
  expect(minusPrecision(a, b)).toBe(output);
});

expect(minusPrecision(6, 3, 2) === 1);
expect(minusPrecision(6, 3, 2, 1) === 0);
expect(minusPrecision(6, 3, 2, 1, 2, 3) === -5);
expect(minusPrecision(6, 3, 2, 1, 2, 3, -5) === -10);
expect(minusPrecision("6", "3", "2") === 1);
expect(minusPrecision("6", "3", "2", "1", "2", "3") === -5);
expect(minusPrecision(500, ...new Array(500).fill(1)) === 0);
