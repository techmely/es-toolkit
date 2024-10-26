import { expect, test } from "vitest";
import { getRandomString } from ".";

test("Should get the right length string", () => {
  expect(getRandomString(10)).toHaveLength(10);
  expect(getRandomString(20)).toHaveLength(20);
  expect(getRandomString(3)).toHaveLength(3);
});
