import { expect, it } from "vitest";
import { firstUniqueChar } from ".";

const datasetString = [
  ["techmely-love-coding", "t"],
  ["techmely-too-get-high", "c"],
  ["dreams-tree", "d"],
  ["", undefined],
  [undefined, undefined],
];

it.concurrent.each(datasetString)(
  "When string value is %s --> First unique char is %s",
  (data, expected) => {
    // @ts-expect-error Expect type error
    expect(firstUniqueChar(data)).toBe(expected);
  },
);
