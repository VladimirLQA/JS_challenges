class Memoized<T, R> {
  private cache: Map<string, R> = new Map();
  private fn: (_arg: T) => R;

  constructor(fn: (_arg: T) => R) {
    this.fn = fn;
  }

  call(arg: T): R {
    const key = JSON.stringify(arg);

    if (!this.cache.has(key)) {
      const result = this.fn(arg);
      this.cache.set(key, result);
    }

    return this.cache.get(key)!;
  }
}

const expensiveSqrt = new Memoized((n: number) => {
  console.log(`Computing sqrt(${n})...`);
  return Math.sqrt(n);
});

expensiveSqrt.call(16); // Computing sqrt(16)...  → 4
expensiveSqrt.call(16); // (cache hit)             → 4
expensiveSqrt.call(25); // Computing sqrt(25)...  → 5
