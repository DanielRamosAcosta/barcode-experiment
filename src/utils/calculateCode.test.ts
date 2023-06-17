import { describe, it, expect } from "vitest";
import { Gate, calculateCode } from "./calculateCode";

describe("calculateCode", () => {
  it.each([
      ["2023-06-15T18:08:22.000Z", Gate.ENTRANCE, 8, "2891166689028"],
      ["2023-06-15T18:43:00.000Z", Gate.EXIT, 7, "2899166709807"],
      ["2023-06-15T19:42:00.000Z", Gate.EXIT, 1, "2899166745201"],
      ["2023-06-17T14:49:07.000Z", Gate.ENTRANCE, 2, "2891168569472"],
      ["2023-06-17T15:20:00.000Z", Gate.EXIT, 4, "2899168588004"],
  ])("%s %s %s generates %s", (dateIso, gate, magicNumber, expectedResult) => {
    const date = new Date(dateIso);

    const result = calculateCode(date, gate, magicNumber);

    expect(result).toBe(expectedResult);
  });
});
