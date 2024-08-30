/*
 Given an array/list [] of n integers,
 find maximum triplet sum in the array Without duplications .
*/

{
  const maxTriSum = (numbers) =>
    [...new Set(numbers)]
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);

  console.log(maxTriSum([3, 2, 6, 8, 2, 3])); // 17
  console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])); // 18
}
