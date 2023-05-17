import { describe, expect, test } from "vitest";

import { filter } from "./filter.js";

describe("filter", () => {
  test("iterates over an array and keeps even elements", () => {
    const arr = [1, 2, 4, 5, 6];

    const results = filter(arr, (value) => value % 2 === 0);

    expect(results[Symbol.iterator]).toBeDefined();
  });
});
