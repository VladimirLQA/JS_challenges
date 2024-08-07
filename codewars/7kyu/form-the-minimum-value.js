/*

*/

{
  const minValue = (values) =>
    +[...new Set(values)].sort((a, b) => a - b).join('');

  console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); // 134679
  console.log(minValue([1, 3, 1])); // 13
  console.log(minValue([4, 7, 5, 7])); // 457
}

{
  const minValue = (values) =>
    +values
      .filter((v, idx, oArray) => oArray.indexOf(v) === idx)
      .sort((a, b) => a - b)
      .join('');

  console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); // 134679
  console.log(minValue([1, 3, 1])); // 13
  console.log(minValue([4, 7, 5, 7])); // 457
}
