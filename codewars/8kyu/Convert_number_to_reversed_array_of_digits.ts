function digitize(n: number): number[] {
  return [...String(n)].map(v => +v).reverse();
}

console.log(digitize(23582357));
console.log(digitize(984764738));
console.log(digitize(45762893920));
console.log(digitize(548702838394));

