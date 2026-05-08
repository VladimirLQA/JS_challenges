class Lazy<T> {
  private evaluated = false;
  private value!: T;
  private thunk: () => T;
  constructor(fn: () => T) {
    this.thunk = fn;
  }

  get(): T {
    if (!this.evaluated) {
      this.value = this.thunk();
      this.evaluated = true;
    }
    return this.value;
  }

  // Derive a new lazy without forcing evaluation
  map<R>(fn: (_value: T) => R): Lazy<R> {
    return new Lazy(() => fn(this.get()));
  }

  // Force two lazies together in one
  zip<U, R>(other: Lazy<U>, fn: (_a: T, _b: U) => R): Lazy<R> {
    return new Lazy(() => fn(this.get(), other.get()));
  }

  get isEvaluated(): boolean {
    return this.evaluated;
  }
}

const rawData = new Lazy(() => {
  console.log(`"[io] fetching dataset..."`);
  return [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
});

const sorted = rawData.map((data) => [...data].sort((a, b) => a - b));
const median = sorted.map((data) => data[Math.floor(data.length / 2)]);
const formatted = median.map((m) => `Median ${m}`);

// Nothing has run yet
console.log(rawData.isEvaluated);   // false
console.log(sorted.isEvaluated);    // false

console.log(formatted.get());
// [io] fetching dataset...   (fires once, here)
// "Median: 4"

console.log(sorted.get()); // (fully cached — no re-computation)
console.log(formatted.get()); // (fully cached — no re-computation)
console.log(median.get());    // (also cached — sorted was already forced)

