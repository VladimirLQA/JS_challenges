const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

const compose = (...fns) => (...args) =>
  fns.reduceRight((acc, fn) => [fn(...acc)], args)[0];


console.log(compose(square, times2)(2));
console.log(compose(square, times2, sum)(3, 4));
