/*

*/

{
  const multipleOfIndex = (array) =>
    array.filter((n, i) => n === 0 || n % i === 0);

  console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]
  console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])); // [-1, 10]
}
