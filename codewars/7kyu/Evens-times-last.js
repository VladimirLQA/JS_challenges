/*
* Given a sequence of integers, return the sum of all
* the integers that have an even index (odd index in COBOL),
* multiplied by the integer at the last index.
* Indices in sequence start from 0.
* If the sequence is empty, you should return 0.
*/
const evenLast = (numbers) =>
  numbers.reduce((result, currentValue, idx) =>
    idx % 2 ? result : result + currentValue, 0) * numbers.at(-1) || 0;


console.log(evenLast([2, 3, 4, 5])); // 30

const evenLast2 = (numbers) =>
  numbers.filter((e, i) => i % 2 === 0)
    .reduce((a, b) => a + b, 0) * numbers.at(-1) || 0;

console.log(evenLast2([2, 3, 4, 5])); // 30
