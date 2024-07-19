/*
 Given an array, find the duplicates in that array, and return
 a new array of those duplicates. The elements of the returned
 array should appear in the order when they first appeared as duplicates.

 Note: numbers and their corresponding string representations
 should not be treated as duplicates (i.e., "1" != 1).

 Examples
  [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
  [0, 1, 2, 3, 4, 5]                ==>  []
*/

{
  const duplicates = (arr) => {
    let seen = new Set();
    let duplicate = new Set();
    let result = [];

    for (let item of arr) {
      if (seen.has(item) && !duplicate.has(item)) {
        duplicate.add(item);
        result.push(item);
      }
      seen.add(item);
    }

    return result;
  };

  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])); // [4, 3, 1]
  console.log(duplicates([0, 1, 2, 3, 4, 5])); // []
}
{
  const duplicates = (arr) => [
    ...new Set(arr.filter((el, i) => i !== arr.indexOf(el))),
  ];

  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])); // [4, 3, 1]
  console.log(duplicates([0, 1, 2, 3, 4, 5])); // []
}
{
  const duplicates = (arr) =>
    arr.reduce((dup, cur, i, a) => {
      if (i !== a.indexOf(cur) && dup.indexOf(cur) === -1) {
        dup.push(cur);
      }
      return dup;
    }, []);

  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])); // [4, 3, 1]
  console.log(duplicates([0, 1, 2, 3, 4, 5])); // []
}
