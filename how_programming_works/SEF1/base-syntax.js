/*
Implement function range(start: number, end: number): array returning array with all numbers from the range [15, 30] including endpoints.
Implement function rangeOdd(start: number, end: number) returning array with all odd numbers from the range [15, 30] including endpoints.
*/

/*
    [0, 1, [0, 1]],
    [0, 5, [0, 1, 2, 3, 4, 5]],
    [0, 6, [0, 1, 2, 3, 4, 5, 6]],
    [1, 3, [1, 2, 3]],
    [-2, 2, [-2, -1, 0, 1, 2]],
    [-3, -1, [-3, -2, -1]],
    [0, 0, [0]],
    [5, 5, [5]],
    [-1, -1, [-1]],
    [7, 5, []],
    [2, -1, []],
*/

/*
    [0, 1, [1]],
    [0, 5, [1, 3, 5]],
    [0, 6, [1, 3, 5]],
    [1, 3, [1, 3]],
    [-2, 2, [-1, 1]],
    [-3, -1, [-3, -1]],
    [0, 0, []],
    [5, 5, [5]],
    [-1, -1, [-1]],
    [7, 5, []],
    [2, -1, []],
  ]*/

console.log("range");
const range = (start, end) => {
  const len = Math.ceil(end - start);
  if (len < 0) return [];
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

console.log(range(0, 1));
console.log(range(7, 5));
console.log(range(-1, -1));
console.log(range(-3, -1));

console.log("rangeOdd");
const rangeOdd = (start, end) => {
  const len = Math.ceil(end - start);
  if (len < 0) return [];
  let result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(rangeOdd(0, 1));
console.log(rangeOdd(7, 5));
console.log(rangeOdd(-1, -1));
console.log(rangeOdd(-3, -1));
console.log(rangeOdd(-2, 2));
