import { expect } from "vitest";
import createSteps, { Step } from "./createSteps";

describe("createSteps", () => {
  test("creates an array of arrays that are sequentially sorted", () => {
    const startArray = [6, 3, 7, 2, 1];
    const expected: Step[] = [
      { numbers: [6, 3, 7, 2, 1], evaluated: 0, moved: false },
      { numbers: [3, 6, 7, 2, 1], evaluated: 0, moved: true },
      { numbers: [3, 6, 7, 2, 1], evaluated: 1, moved: false },
      { numbers: [3, 6, 2, 7, 1], evaluated: 2, moved: true },
      { numbers: [3, 6, 2, 1, 7], evaluated: 3, moved: true },
      { numbers: [3, 6, 2, 1, 7], evaluated: 4, moved: false },
      { numbers: [3, 6, 2, 1, 7], evaluated: 0, moved: false },
      { numbers: [3, 2, 6, 1, 7], evaluated: 1, moved: true },
      { numbers: [3, 2, 1, 6, 7], evaluated: 2, moved: true },
      { numbers: [3, 2, 1, 6, 7], evaluated: 3, moved: false },
      { numbers: [3, 2, 1, 6, 7], evaluated: 4, moved: false },
      { numbers: [2, 3, 1, 6, 7], evaluated: 0, moved: true },
      { numbers: [2, 1, 3, 6, 7], evaluated: 1, moved: true },
      { numbers: [2, 1, 3, 6, 7], evaluated: 2, moved: false },
      { numbers: [2, 1, 3, 6, 7], evaluated: 3, moved: false },
      { numbers: [2, 1, 3, 6, 7], evaluated: 4, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 0, moved: true },
      { numbers: [1, 2, 3, 6, 7], evaluated: 1, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 2, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 3, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 4, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 0, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 1, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 2, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 3, moved: false },
      { numbers: [1, 2, 3, 6, 7], evaluated: 4, moved: false }
    ];
    const actual = createSteps(startArray);
    expect(actual.length).toEqual(26);

    for (const i in actual) {
      expect(actual[i], `incorrect idx: ${i}`).toEqual(expected[i]);
    }
  });
});
