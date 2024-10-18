/*
 * Напишите функцию, которая будет генерировать последовательность Фиббоначи
 * длинны `n`, которую передали как аргумент.
 * Input: Number
 * Output: Number[]
 */

function fibonacci(n) {
  const sequence = [1, 1];

  if (n < 2) {
    return sequence.slice(0, n);
  }

  while (sequence.length < n) {
    const last = sequence[sequence.length - 1];
    const prev = sequence[sequence.length - 2];
    sequence.push(last + prev);
  }

  return sequence;
}

console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]

const fibonacciOptimizedVersion = (function(n) {
  const sequence = [1, 1];

  // eslint-disable-next-line consistent-return
  return function(n) {
    if (sequence.length >= n) {
      return sequence.slice(0, n);
    }

    while (sequence.length < n) {
      const last = sequence[sequence.length - 1];
      const prev = sequence[sequence.length - 2];
      sequence.push(last + prev);
    }
    return sequence.slice(0, n);
  };
})();

console.log(fibonacciOptimizedVersion(8));
console.log(fibonacciOptimizedVersion(10));
console.log(fibonacciOptimizedVersion(15));
console.log(fibonacciOptimizedVersion(13));
