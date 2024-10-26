import { describe, expect, it } from "vitest";
import { uniqueObjs } from ".";

describe("Unique array object", () => {
  type Sample = {
    id: number;
    content: string;
  };
  const samples: Sample[] = [
    { id: 1, content: "Hello" },
    { id: 2, content: "World" },
    { id: 3, content: "Hello World" },
    { id: 4, content: "Hello World" },
  ];

  it("Should return the same array when not duplicate any ID", () => {
    expect(uniqueObjs(samples, "id")).toStrictEqual(samples);
  });
  it("Should omit the 4th item in the array when duplicate content", () => {
    expect(uniqueObjs(samples, "content")).toStrictEqual([
      { id: 1, content: "Hello" },
      { id: 2, content: "World" },
      { id: 3, content: "Hello World" },
    ]);
  });
});
