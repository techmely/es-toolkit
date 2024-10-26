import { describe, expect, it } from "vitest";
import { timeSpan } from ".";
import { sleep } from "../../promise";

describe("Time span", () => {
  it("Should check correctly", async () => {
    const time = timeSpan();
    await sleep(100);
    expect(time()).toBeGreaterThanOrEqual(80);
    expect(time()).toBeLessThanOrEqual(120);
  });
});
