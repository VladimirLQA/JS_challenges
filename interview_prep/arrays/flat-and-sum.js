const testArray = [1, [1, 2, [3], [2, 3, [1]]]];
const testArray1 = [1, [3], [2, 3, [1]]];

const sum = (arr) =>
  arr.reduce((acc, val) =>
    acc + (Array.isArray(val) ? sum(val) : val), 0);

console.log(sum(testArray)); // 13
console.log(sum(testArray1)); // 10
