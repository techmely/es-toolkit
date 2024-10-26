import { expect, test } from "vitest";
import { digitLengthPrecision } from ".";

const dataDigitLength = [
  [123.4567890123, 10],
  [1.23e-5, 7],
  [1.23e-5, 7],
  [1.233467e-5, 11],
  [123.45e-5, 7],
  [1.23e-10, 12],
  [1.23e1, 1],
  [1e20, 0],
  [1.12345e20, 0],
  [1.123e30, 0],
  [1.123e-100, 103],
  ["1.23e-5", 7],
  ["1.23E-5", 7],
  ["1.233467e-5", 11],
  ["123.45e-5", 7],
  ["1.23e-10", 12],
  ["1.23e1", 1],
  ["1e20", 0],
  ["1.12345e20", 0],
  ["1.123e30", 0],
  ["1.123e-100", 103],
];

test.concurrent.each(dataDigitLength)(
  "DigitLength can do digitLength operation from %s to %d",
  (input, output) => {
    expect(digitLengthPrecision(input)).toBe(output);
  },
);
