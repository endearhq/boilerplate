import { describe, expect, test } from "vitest";

import { map } from "./map.js";

describe("map", () => {
  test("maps through an array and doubles each element", () => {
    const arr = [1, 2, 4, 5, 6];

    const results = map(arr, (value) => value * 2);

    expect(results[Symbol.iterator]).toBeDefined();
  });
});
