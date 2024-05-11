const getFactorial = (n) =>
  n === 1 || n === 0 ? 1 : n * getFactorial(n - 1);

const getFactorial2 = (n) => {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
};

const getFactorial3 = (n) =>
  Array.from({ length: n }, (_, idx) => (idx + 1))
    .reduce((factorial, num) => factorial * num, 1);


const sumFactorial = (arr) =>
  arr.reduce((sum, num) => sum += getFactorial(num), 0);

console.log(sumFactorial([5, 4, 1])); // 145
console.log(sumFactorial([4, 6])); // 744
