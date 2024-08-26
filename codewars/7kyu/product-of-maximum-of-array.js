/*
Given an array/list [] of integers , Find the product of the k maximal numbers.
*/

{
  const maxProduct = (numbers, size) =>
    numbers.sort((a, b) => a - b).slice(-size).reduce((p, n) => p * n, 1);

  console.log(maxProduct([4, 3, 5], 2)); // 20
}
