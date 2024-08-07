/*

*/

{
  const solve = (arr) =>
    arr.reduce((acc, n) => {
      const idxN = acc.indexOf(n);
      if (idxN !== -1) {
        acc.splice(idxN, 1);
      }
      acc.push(n);
      return acc;
    }, []);

  console.log(solve([3, 4, 4, 3, 6, 3])); // [4, 6, 3]
  console.log(solve([1, 2, 3, 4])); // [1, 2, 3, 4]
  console.log(solve([1, 2, 1, 2, 1, 1, 3])); // [2, 1, 3]
}
{
  const solve = (arr) => arr.filter((n, idx) => arr.lastIndexOf(n) === idx);

  console.log(solve([3, 4, 4, 3, 6, 3])); // [4, 6, 3]
  console.log(solve([1, 2, 3, 4])); // [1, 2, 3, 4]
  console.log(solve([1, 2, 1, 2, 1, 1, 3])); // [2, 1, 3]
}
{
  const solve = (arr) => [...new Set(arr.reverse())].reverse();

  console.log(solve([3, 4, 4, 3, 6, 3])); // [4, 6, 3]
  console.log(solve([1, 2, 3, 4])); // [1, 2, 3, 4]
  console.log(solve([1, 2, 1, 2, 1, 1, 3])); // [2, 1, 3]
}
