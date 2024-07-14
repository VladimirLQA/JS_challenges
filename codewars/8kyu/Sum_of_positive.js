/*
 * You get an array of numbers, return the sum of all of the positives ones.
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 * Note: if there is nothing to sum, the sum is default to 0.
 */

{
  function positiveSum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      const char = array[i];

      if (char > 0) result += char;
    }
    return result;
  }

  console.log(positiveSum([1, 2, 3, 4, 5])); // 15
  console.log(positiveSum([1, -2, 3, 4, 5])); // 13
  console.log(positiveSum([])); // 0
  console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
  console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
}
console.log(`=======================================================`);
{
  function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
  }

  console.log(positiveSum([1, 2, 3, 4, 5])); // 15
  console.log(positiveSum([1, -2, 3, 4, 5])); // 13
  console.log(positiveSum([])); // 0
  console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
  console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
}
console.log(`=======================================================`);
{
  const positiveSum = (arr) =>
    arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);

  console.log(positiveSum([1, 2, 3, 4, 5])); // 15
  console.log(positiveSum([1, -2, 3, 4, 5])); // 13
  console.log(positiveSum([])); // 0
  console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
  console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
}
console.log(`=======================================================`);
{
  function positiveSum(arr) {
    return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
  }

  console.log(positiveSum([1, 2, 3, 4, 5])); // 15
  console.log(positiveSum([1, -2, 3, 4, 5])); // 13
  console.log(positiveSum([])); // 0
  console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
  console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
}
