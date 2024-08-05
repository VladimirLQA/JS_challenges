/*
Your task is to create a function called addArrays,
which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9,
it would equal '3' + '2' + '9' converted to an integer for this kata,
meaning it would equal 329. The output should be an array of the sum in a
similar fashion to the input (for example, if the sum is 341,
you would return [3,4,1]).
Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number
as the first index in the array.
In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
 */
{
  const toNumber = (arr) => parseInt(arr.join(''));
  const toArray = (num) => Math.abs(num).toString().split('').map(Number);

  const addArrays = (arr1, arr2) => {
    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;

    const sum = toNumber(arr1) + toNumber(arr2);
    const result = toArray(sum);

    if (sum < 0) {
      return [-result[0]].concat(result.slice(1));
    }

    return result;
  };

  console.log(addArrays([3, 2, 9], [1, 2]));
  console.log(addArrays([4, 7, 3], [1, 2, 3]));
  console.log(addArrays([1], [5, 7, 6]));
  console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]));
}
{
  const addArrays = (arr1, arr2) =>
    arr1.length || arr2.length
      ? `${+arr1.join(``) + +arr2.join(``)}`.match(/-?\d/g).map(Number)
      : [];

  console.log(addArrays([3, 2, 9], [1, 2]));
  console.log(addArrays([4, 7, 3], [1, 2, 3]));
  console.log(addArrays([1], [5, 7, 6]));
  console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]));
}

