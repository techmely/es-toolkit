import { expect, test } from "vitest";
import { float2FixedPrecision } from ".";

const dataFloat2Fixed = [
  [1e-1, 1],
  [1e-6, 1],
  [1e-7, 1],
  [1e-13, 1],
  [1.123e30, 1.123e30],
  [1.6e-30, 16],
  [1.234567e-13, 1234567],
  [1.2345678912345e10, 12345678912345],
  [0.000000123456, 123456],
  [1.23456e-7, 123456],
  ["1e-1", 1],
  ["1e-6", 1],
  ["1e-7", 1],
  ["1e-13", 1],
  ["1.123e30", 1.123e30],
  ["1.6e-30", 16],
  ["1.234567e-13", 1234567],
  ["1.2345678912345e10", 12345678912345],
  ["0.000000123456", 123456],
  ["1.23456e-7", 123456],
];

test.concurrent.each(dataFloat2Fixed)(
  "Float2Fixed can change float %s to fixed %d",
  (input, output) => {
    expect(float2FixedPrecision(input)).toBe(output);
  },
);
