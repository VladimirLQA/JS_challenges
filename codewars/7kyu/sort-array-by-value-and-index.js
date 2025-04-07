/*
  https://www.codewars.com/kata/58e0cb3634a3027180000040
*/

{
  const sortByValueAndIndex = (array) =>
    array.map((v, i) => ({ value: v, sortValue: v * ++i }))
      .sort((a, b) => a.sortValue - b.sortValue)
      .map(({ value }) => value);

  console.log(sortByValueAndIndex([ 9, 5, 1, 4, 3 ])); // [ 1, 9, 5, 3, 4 ]
}
