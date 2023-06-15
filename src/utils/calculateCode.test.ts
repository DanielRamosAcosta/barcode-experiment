import { describe, it, expect } from "vitest";
import { Gate, calculateCode } from "./calculateCode";

describe("calculateCode", () => {
  it("generates the entrance code", () => {
    const date = new Date("2023-06-15T18:08:22.000Z");

    const result = calculateCode(date, Gate.ENTRANCE, 8);

    expect(result).toBe("2891166689028");
  });

  it("generates the exit code v1", () => {
    const date = new Date("2023-06-15T18:43:00.000Z");

    const result = calculateCode(date, Gate.EXIT, 7);

    expect(result).toBe("2899166709807");
  });

  it("generates the exit code v2", () => {
    const date = new Date("2023-06-15T19:42:00.000Z");

    const result = calculateCode(date, Gate.EXIT, 1);

    expect(result).toBe("2899166745201");
  });
});
