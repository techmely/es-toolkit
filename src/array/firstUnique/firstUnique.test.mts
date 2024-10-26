import { expect, it } from "vitest";
import { firstUniqueArr } from ".";

const dataSetArr = [
  [[1, 1, 4, 2, 2, 2, 3, 1], 4],
  [[1, 1, 2, 2, 2, 1, 3, 1, 4, 4, 5], 3],
  [undefined, undefined],
  [[], undefined],
  [[1], 1],
];

it.concurrent.each(dataSetArr)(
  "When array is %s --> First unique item is %s",
  // @ts-expect-error Expect type error
  (data, expected) => {
    // @ts-expect-error Expect type error
    expect(firstUniqueArr(data)).toBe(expected);
  },
);
