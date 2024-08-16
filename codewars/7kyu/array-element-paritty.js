/*
 In this Kata, you will be given an array of integers whose elements
 have both a negative and a positive value, except for one integer
 that is either only negative or only positive.
 Your task will be to find that integer.

 Examples:
  [1, -1, 2, -2, 3] => 3 - 3 has no matching negative appearance
  [-3, 1, 2, 3, -1, -4, -2] => -4
   -4 has no matching positive appearance
  [1, -1, 2, -2, 3, 3] => 3

  k(the only-positive or only-negative integer may appear more than once)
*/

{
  const solve = (arr) => {
    const negative = arr.map((n) => n * -1);
    const number = negative.filter((n) => !arr.includes(n)).at(0);
    return number ? number * -1 : null;
  };

  console.log(solve([1, -1, 2, -2, 3])); // 3
  console.log(solve([1, -1, 2, -2, 3, 3])); // 3
  console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])); // -38
}

{
  const solve = (arr) => arr.find((el) => !arr.includes(-el));

  console.log(solve([1, -1, 2, -2, 3])); // 3
  console.log(solve([1, -1, 2, -2, 3, 3])); // 3
  console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])); // -38
}
{
  const solve = (arr) => [...new Set(arr)].reduce((res, n) => res + n);

  console.log(solve([1, -1, 2, -2, 3])); // 3
  console.log(solve([1, -1, 2, -2, 3, 3])); // 3
  console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])); // -38
}
