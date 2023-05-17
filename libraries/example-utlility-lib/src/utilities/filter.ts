export function* filter<Input>(
  iterable: Iterable<Input>,
  predicate: (value: Input) => boolean,
): Iterable<Input> {
  for (const item of iterable) {
    if (predicate(item)) {
      yield item;
    }
  }
}
