/*
  https://www.codewars.com/kata/58dace86b809ca6c62000ccf
*/

{
  const hasPair = (nums, sum) => {
    const map = {};
    for (const n of nums) {
      const diff = sum - n;
      if (diff in map) return true;
      map[n] = diff;
    }

    return false;
  };

  console.log(hasPair([1, 3, 7], 10)); // true
  console.log(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 3)); // false
}
