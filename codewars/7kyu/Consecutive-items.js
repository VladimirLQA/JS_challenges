const consecutiveItems = (arr, a, b) =>
  Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;

console.log(consecutiveItems([1, 3, 5, 7], 3, 1)); // true
console.log(consecutiveItems([1, 3, 5, 7], 3, 7)); // false
