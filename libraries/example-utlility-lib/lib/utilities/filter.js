"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
function* filter(iterable, predicate) {
    for (const item of iterable) {
        if (predicate(item)) {
            yield item;
        }
    }
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map