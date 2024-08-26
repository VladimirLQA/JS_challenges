/*
 Given an array of integers , Find the minimum sum which
 is obtained from summing each Two integers product .
*/

{
  const minSum = (arr) => {
    arr.sort((a, b) => a - b);

    let sum = 0;
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
      sum += arr[i] * arr[length - 1 - i];
    }
    return sum;
  };

  console.log(minSum([5, 4, 2, 3])); // 22
}
{
  const minSum = (arr) =>
    arr
      .sort((a, b) => a - b)
      .slice(0, arr.length / 2)
      .reduce((sum, n) => sum + n * arr.pop(), 0);

  console.log(minSum([5, 4, 2, 3])); // 22
}
