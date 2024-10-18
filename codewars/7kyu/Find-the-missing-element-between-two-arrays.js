/*
 Given two integer arrays where the second array is a shuffled
 duplicate of the first array with one element missing, find the missing element.

 Please note, there may be duplicates in the arrays, so checking
 if a numerical value exists in one and not the other is not a valid solution.

    find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
    find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
 The first array will always have at least one element.
*/
{
  // O(n)
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);

  const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);

  console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));
  console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
}

{
  // O(n^2)
  const findMissing = (arr1, arr2) => {
    for (const n of arr1) {
      const idx = arr2.indexOf(n);
      if (idx !== -1) arr2.splice(idx, 1);
      else return n;
    }
  };

  console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));
  console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
}
