"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const filter_js_1 = require("./filter.js");
(0, vitest_1.describe)("filter", () => {
    (0, vitest_1.test)("iterates over an array and keeps even elements", () => {
        const arr = [1, 2, 4, 5, 6];
        const results = (0, filter_js_1.filter)(arr, (value) => value % 2 === 0);
        (0, vitest_1.expect)(results[Symbol.iterator]).toBeDefined();
    });
});
//# sourceMappingURL=filter.spec.js.map