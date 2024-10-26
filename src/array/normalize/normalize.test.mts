import { describe, it } from "vitest";
import { normalize } from ".";

describe("Normalize array", () => {
  const dataset = [
    [
      [
        { id: 1, name: "HelloKitty", description: "OK" },
        { id: 2, name: "Doraemon", description: "WOW" },
      ],
      "id",
      {
        1: { id: 1, name: "HelloKitty", description: "OK" },
        2: { id: 2, name: "Doraemon", description: "WOW" },
      },
    ],
    [
      [{ id: 1, name: "HelloKitty", description: "OK" }],
      "id",
      {
        1: { id: 1, name: "HelloKitty", description: "OK" },
      },
    ],
    [[{ id: 1, name: "HelloKitty", description: "OK" }], "not-in-object", {}],
    [[], "not-in-object", {}],
  ];
  it.concurrent.each(dataset)(
    "Should normalize array %s with key %s will return new object %s",
    // @ts-expect-error Expect type error
    (data, key, expected) => {
      // @ts-expect-error Expect type error
      expect(normalize(data, key)).toStrictEqual(expected);
    },
  );
});
