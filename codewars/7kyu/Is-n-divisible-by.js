/*
  https://www.codewars.com/kata/558ee8415872565824000007/javascript
*/

const isDivisible = (first, ...rest) => rest.every((num) => first % num === 0);

console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4, 2, 5));
