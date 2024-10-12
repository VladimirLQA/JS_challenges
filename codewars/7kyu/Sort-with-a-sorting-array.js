/*
 Sort an array according to the indices in another array.
 It is guaranteed that the two arrays have the same size,
 and that the sorting array has all the required indices.

    sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/
{
  const sort = (initial, sorting) =>
    initial.map((v, idx) => initial[sorting.indexOf(idx)]);

  console.log(sort(['x', 'y', 'z'], [1, 2, 0]));
  console.log(sort(['z', 'x', 'y'], [0, 2, 1]));
}
{
  const sort = (initial, sorting) => {
    const result = [];
    sorting.forEach((sortIdx, i) => {
      result[sortIdx] = initial[i];
    });
    return result;
  };

  console.log(sort(['x', 'y', 'z'], [1, 2, 0]));
  console.log(sort(['z', 'x', 'y'], [0, 2, 1]));
}
{
  const sort = (initial, sorting) =>
    sorting.reduce((result, v, i) => ((result[v] = initial[i]), result), []);

  console.log(sort(['x', 'y', 'z'], [1, 2, 0]));
  console.log(sort(['z', 'x', 'y'], [0, 2, 1]));
}
