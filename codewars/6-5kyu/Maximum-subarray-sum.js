/*
 The maximum sum subarray problem consists in finding
 the maximum sum of a contiguous subsequence in an array or list of integers:

 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 // should be 6: [4, -1, 2, 1]
 Easy case is when the list is made up of only positive numbers and
 the maximum sum is the sum of the whole array.
 If the list is made up of only negative numbers, return 0 instead.

 Empty list is considered to have zero greatest sum.
 Note that the empty list or array is also a valid sublist/subarray.
*/

{
  const maxSequence = (arr) => {
    let maxEnding = 0;
    let maxFound = 0;
    for (const n of arr) {
      maxEnding = Math.max(0, maxEnding + n);
      maxFound = Math.max(maxFound, maxEnding);
    }
    return maxFound;
  };

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}

{
  const maxSequence = (arr, sum = 0) =>
    // eslint-disable-next-line no-return-assign
    arr.reduce((max, v) => Math.max(sum = Math.max(sum + v, 0), max), 0);

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}
