/*
Given an array of numbers, return a new array of length number
containing the last even numbers from the original array (in the same order).
The original array will be not empty and
will contain at least "number" even numbers.

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
 */

const getEvenNumbers2 = (arr, amount) =>
  arr.filter((n) => !(n % 2)).slice(-amount);

console.log(getEvenNumbers2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]
console.log(getEvenNumbers2([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // [-8, 26]
console.log(getEvenNumbers2([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); // [6]

const getEvenNumbers = (arr, amount) =>
  arr.reduce((evenNums, currentNum) => {
    currentNum % 2 === 0 ? evenNums.push(currentNum) : evenNums;
    return evenNums;
  }, []).slice(-amount);


console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]
console.log(getEvenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // [-8, 26]
console.log(getEvenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); // [6]

