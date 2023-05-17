"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const map_js_1 = require("./map.js");
(0, vitest_1.describe)("map", () => {
    (0, vitest_1.test)("maps through an array and doubles each element", () => {
        const arr = [1, 2, 4, 5, 6];
        const results = (0, map_js_1.map)(arr, (value) => value * 2);
        (0, vitest_1.expect)(results[Symbol.iterator]).toBeDefined();
    });
});
//# sourceMappingURL=map.spec.js.map