export function* map(iterable, predicate) {
    for (const item of iterable) {
        yield predicate(item);
    }
}
//# sourceMappingURL=map.js.map