/*
  https://www.codewars.com/kata/585de79128bc74912d0001c5/javascript
*/
const tArr1 = [1, 3, 5, 23, 5];
const tArr2 = [45, 34, 67, 2, 0];
const longArr = [23, 4, 4, 2, 5, 6, 3434, 5, 7788, 3,
  2, 45, 2, 56, 78, 89, 900, 2, 3, 4, 5, 6, 7, 8, 10,
  5, 7, 23, 2222, 45, 34, 56, 56, 23, 45, 56, 45454, 33,
  45, 12, 16, 23, 2, 67, 78, 7, 99, 31, 27, 14, 13, 56,
  72, 2, 78, 89, 34, 33, 2, 22, 55, 6, 22, 19, 45, 37, 19, 10, 2, 3, 4, 9];
const negArr = [-3, -1, -5, -56];

{
  const smallestDiff = (arr1, arr2) => {
    if (!arr1.length && !arr2.length) return -1;
    let result = 0;

    if (!arr1.length || !arr2.length) {
      result = Math.min(...arr1, ...arr2);
    } else {
      result = Math.min(...arr1.map((num1) =>
        Math.min(...arr2.map((num2) => Math.abs(num1 - num2)))));
    }
    return result;
  };

  console.log(smallestDiff(tArr1, tArr2)); // 1
  console.log(smallestDiff(tArr1, longArr)); // 0
  console.log(smallestDiff(negArr, longArr)); // 3
}
{
  const smallestDiff = (arr1, arr2) =>
    !arr1.length && !arr2.length
      ? -1
      : !arr1.length ? Math.min(...arr1)
        : !arr2.length ? Math.min(...arr2)
          : Math.min(
            ...arr1.map((n1) =>
              Math.min(...arr2.map((n2) => Math.abs(n1 - n2)))),
          );

  console.log(smallestDiff(tArr1, tArr2)); // 1
  console.log(smallestDiff(tArr1, longArr)); // 0
  console.log(smallestDiff(negArr, longArr)); // 3
}
{

  const smallestDiff = (arr1, arr2) => {
    if (!arr1.length && !arr2.length) return -1;
    if (!arr1.length || !arr2.length) return Math.min(...arr1, ...arr2);

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0, j = 0, minDiff = Infinity;

    while (i < arr1.length && j < arr2.length) {
      const diff = Math.abs(arr1[i] - arr2[j]);
      minDiff = Math.min(minDiff, diff);

      if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
    return minDiff;
  };

  console.log(smallestDiff(tArr1, tArr2)); // 1
  console.log(smallestDiff(tArr1, longArr)); // 0
  console.log(smallestDiff(negArr, longArr)); // 3
}
