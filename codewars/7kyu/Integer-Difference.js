/*
  https://www.codewars.com/kata/57741d8f10a0a66915000001
*/
{
  const intDiff = (arr, testNumber) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(arr[i] - arr[j]) === testNumber) count++;
      }
    }
    return count;
  };

  console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)); // 3
  console.log(intDiff([1, 1, 3, 3], 2)); // 4
}

{
  const intDiff = (arr, testNumber) =>
    arr.reduce((count, currentNum, i) =>
      (count += arr.slice(i + 1)
        .filter((n) => Math.abs(currentNum - n) === testNumber).length, count), 0);

  console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)); // 3
  console.log(intDiff([1, 1, 3, 3], 2)); // 4

}
