/*
 * Complete the square sum function so that it squares each number
 * passed into it and then sums the results together.
 * For example, for [1, 2, 2] it should return 9
 */

{
  function squareSum(numbers) {
    return numbers
      .map((v) => Math.pow(v, 2))
      .reduce((sum, curr) => sum + curr, 0);
  }
  console.log(squareSum([1, 2])); // 5
  console.log(squareSum([0, 3, 4, 5])); // 50
  console.log(squareSum([])); // 0
}

console.log(
  `=================================================================`,
);

{
  function squareSum(numbers) {
    return numbers.reduce((sum, curr) => sum + curr * curr, 0);
  }
  console.log(squareSum([1, 2])); // 5
  console.log(squareSum([0, 3, 4, 5])); // 50
  console.log(squareSum([])); // 0
}

console.log(
  `=================================================================`,
);

{
  function squareSum(numbers) {
    let result = 0;
    numbers.forEach((number) => {
      result += number * number;
    });
    return result;
  }
  console.log(squareSum([1, 2])); // 5
  console.log(squareSum([0, 3, 4, 5])); // 50
  console.log(squareSum([])); // 0
}
