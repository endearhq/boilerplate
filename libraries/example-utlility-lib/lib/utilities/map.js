"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
function* map(iterable, predicate) {
    for (const item of iterable) {
        yield predicate(item);
    }
}
exports.map = map;
//# sourceMappingURL=map.js.map