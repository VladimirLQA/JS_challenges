/*

*/

{
  const findIndexOfSubArray = (array) => {
    const sortedAsc = array.toSorted((a, b) => a - b);

    const findIndices = (sorted) => {
      const start = array.findIndex((n, idx) => n !== sorted[idx]);
      if (start < 0) return [0, 0];
      const end = array.findLastIndex((n, idx) => n !== sorted[idx]);
      return [start, end];
    };
    const indicesAsc = findIndices(sortedAsc);
    const indicesDesc = findIndices(sortedAsc.reverse());

    return indicesAsc[1] - indicesAsc[0] < indicesDesc[1] - indicesDesc[0]
      ? indicesAsc
      : indicesDesc;
  };

  console.log(findIndexOfSubArray([1, 2, 323, 45656, 2, 2, 345, 6, 2, 2])); // [2, 9]
  console.log(findIndexOfSubArray([6, 5, 4, 1, 2, 3])); // [3, 5]
}
{
  const solve = (arr, fn) => {
    const sorted = arr.slice().sort(fn);
    let m = 0;
    let n = arr.length - 1;

    while (arr[m] === sorted[m] && m < n) m++;
    while (arr[n] === sorted[n] && n > m) n++;
    return m < n ? [m, n] : [0, 0];
  };

  const findIndexOfSubArray = (array) =>
    [solve(array, (a, b) => a - b), solve(array, (a, b) => b - a)]
      .sort((a, b) => b[1] - b[0] - (a[1] - a[0]))
      .pop();

  console.log(findIndexOfSubArray([1, 2, 323, 45656, 2, 2, 345, 6, 2, 2])); // [2, 9]
  console.log(findIndexOfSubArray([6, 5, 4, 1, 2, 3])); // [3, 5]
}
