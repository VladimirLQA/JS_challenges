/*
 Given an array/list of integers, find the Nth smallest element in the array.
*/

{
  const nthSmallest = (arr, pos) => arr.slice().sort((a, b) => a - b)[pos - 1];

  console.log(nthSmallest([3, 1, 2], 2)); // 2
  console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5)); // -2
  console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)); // 7
}
