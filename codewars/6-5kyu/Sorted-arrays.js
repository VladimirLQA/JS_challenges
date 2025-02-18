/*
  https://www.codewars.com/kata/56f2d43fe40b70a442000f26/javascript
*/

{
  const nthSmallest = (...args) => {
    let n = args.pop();
    const arrays = args;
    return arrays
      .reduce((acc, arr) => acc.concat(arr), [])
      .sort((a, b) => a - b)[--n];
  };

  console.log(nthSmallest([2, 4, 6, 8, 10, 12], 5)); // 10
  console.log(nthSmallest([1], [2], [3], [4], [5, 6, 7, 8], [9], [10], 7)); // 7
}
{
  const nthSmallest = (...args) =>
    args
      .slice(0, -1)
      .flat(Infinity)
      .sort((a, b) => a - b)[args.at(-1) - 1];

  console.log(nthSmallest([2, 4, 6, 8, 10, 12], 5)); // 10
  console.log(nthSmallest([1], [2], [3], [4], [5, 6, 7, 8], [9], [10], 7)); // 7
}
