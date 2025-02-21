/*
  https://www.codewars.com/kata/57c7231c484cf9e6ac000090/javascript
*/

{
  const addingShifted = (arrayOfArrays, shift) => {
    const result = [];

    arrayOfArrays.forEach((arr, i) => {
      const startIndex = i * shift;
      arr.forEach((num, j) => {
        const index = startIndex + j;
        result[index] = (result[index] || 0) + num;
      });
    });

    return result;
  };

  console.log(
    addingShifted(
      [
        [1, 2, 3, 4, 5, 6],
        [7, 7, 7, -7, 7, 7],
        [1, 1, 1, 1, 1, 1],
      ],
      3,
    ),
  ); // [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1]
}
{
  const addingShifted = (arrayOfArrays, shift) => {
    const result = arrayOfArrays.map((el, i) =>
      Array(shift * i)
        .fill(0)
        .concat(el),
    );

    return result.reduce(
      (acc, el) => acc.map((item, i) => item + el[i] || 0),
      Array(result.at(-1).length).fill(0),
    );
  };

  console.log(
    addingShifted(
      [
        [1, 2, 3, 4, 5, 6],
        [7, 7, 7, -7, 7, 7],
        [1, 1, 1, 1, 1, 1],
      ],
      3,
    ),
  ); // [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1]
}
