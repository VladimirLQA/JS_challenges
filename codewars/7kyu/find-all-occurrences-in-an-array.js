/*
 Given an array (a list in Python) of integers and an integer n,
 find all occurrences of n in the given array and return another array
 containing all the index positions of n in the given array.

 If n is not in the given array, return an empty array [].
 Assume that n and all values in the given array will always be integers.

 Example:
 findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/

{
  const findAll = (array, n) =>
    array.reduce((res, num, idx) => (num === n && res.push(idx), res), []);

  console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // => [2, 4]
}

{
  const findAll = (arr, n) =>
    arr.map((el, i) => (el === n ? i : 'str')).filter((e) => e !== 'str');

  console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // => [2, 4]
}

{
  const findAll = (nums, find) =>
    nums.reduce(
      (acc, num, index) => (num === find ? [...acc, index] : acc),
      [],
    );

  console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // => [2, 4]
}
