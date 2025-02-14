/*
  https://www.codewars.com/kata/5729c30961cecadc4f001878/javascript
*/

{
  const uniteUnique = (...arr) => [...new Set(arr.flat(Infinity))];

  console.log(uniteUnique([1, 2], [3, 4])); // [1, 2, 3, 4]
  console.log(uniteUnique([4, 'a', 2], [])); // [4, "a", 2]
}
{
  const flatten = (array) =>
    array.reduce(
      (flat, current) => (
        Array.isArray(current)
          ? flat.push(...flatten(current))
          : flat.push(current),
        flat
      ),
      [],
    );

  const uniteUnique = (...arr) => [...new Set(flatten(arr))];

  console.log(uniteUnique([1, 2], [3, 4])); // [1, 2, 3, 4]
  console.log(uniteUnique([4, 'a', 2], [])); // [4, "a", 2]
}
