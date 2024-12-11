class Set<T> {
  private hash: { [key: string]: { exist: boolean; value: T } } = {};

  constructor(private items: T[]) {
    for (const item of items) {
      const key = this.makeKey(item);
      this.hash[key] = { exist: true, value: item };
    }
  }

  add(item: T): void {
    const key = this.makeKey(item);
    if (this.hash[key]?.exist) return;
    this.hash[key] = { exist: true, value: item };
  }

  has(item: T): boolean {
    const key = this.makeKey(item);
    return !!this.hash[key]?.exist;
  }

  delete(item: T): void {
    const key = this.makeKey(item);
    if (!this.has(item)) return;
    delete this.hash[key];
  }

  private makeKey(item: T): string {
    return typeof item === 'object' && item !== null
      ? JSON.stringify(item)
      : String(item);
  }
}

const s = new Set<number>([1, 1, 2, 3, 2]);

console.log(s.has(1)); // true
console.log(s.has(6)); // false

console.log(s.add(6));
console.log(s.has(6)); // true

console.log(s.delete(6));
console.log(s.has(6)); // false
