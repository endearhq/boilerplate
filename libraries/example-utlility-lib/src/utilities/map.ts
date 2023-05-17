export function* map<Input, Output>(
  iterable: Iterable<Input>,
  predicate: (value: Input) => Output,
): Iterable<Output> {
  for (const item of iterable) {
    yield predicate(item);
  }
}
