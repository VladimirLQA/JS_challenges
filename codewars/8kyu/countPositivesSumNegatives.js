/*
 * Given an array of integers.
 * Return an array, where the first element is the count of positives numbers
 * and the second element is sum of negative numbers. 0 is neither positive nor negative.
 * If the input is an empty array or is null, return an empty array.
 */

{
  function countPositivesSumNegatives(array) {
    if (array.length === 0) return [];
    const countPositive = array.filter((el) => el > 0).length;
    const sumNegatives = array.filter((el) => el < 0).reduce((a, b) => a + b, 0);
    return [countPositive, sumNegatives];
  }

  console.log(
    countPositivesSumNegatives([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ]),
  ); // [10, -65]
  console.log(
    countPositivesSumNegatives([
      0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
    ]),
  ); // [8, -50]
  console.log(countPositivesSumNegatives([])); // []
}

console.log(`===================================`);

{
  function countPositivesSumNegatives(input) {
    return input && input.length
      ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
      : [];
  }

  console.log(
    countPositivesSumNegatives([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ]),
  ); // [10, -65]
  console.log(
    countPositivesSumNegatives([
      0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
    ]),
  ); // [8, -50]
  console.log(countPositivesSumNegatives([])); // []
}

console.log(`===================================`);

{
  function countPositivesSumNegatives(array) {
    if (array.length === 0) return [];
    return array.reduce(
      (result, el) => {
        if (el > 0) result[0]++;
        else result[1] += el;
        return result;
      },
      [0, 0],
    );
  }

  console.log(
    countPositivesSumNegatives([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ]),
  ); // [10, -65]
  console.log(
    countPositivesSumNegatives([
      0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
    ]),
  ); // [8, -50]
  console.log(countPositivesSumNegatives([])); // []
}
