const testArr = [1, 2, 3, 4, 5];

const sumNumbers = (numbers) => {
  if (numbers.length === 0) return 0;

  return numbers[0] + sumNumbers(numbers.splice(1));
};

console.log(sumNumbers(testArr));
