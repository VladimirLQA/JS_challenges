/**
 * Consider an array/list of sheep where some sheep may be missing from their place.
 * We need a function that counts the number of sheep present in the array (true means present).
 * Hint: Don't forget to check for bad values like null/undefined
 */

{
  const countSheeps = (sheeps) => sheeps.filter(Boolean).length;
  console.log(
    countSheeps([
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ]),
  ); // 17
  console.log(countSheeps([])); // 0
  console.log(countSheeps([null])); // 0
  console.log(countSheeps([undefined])); // 0
}
{
  const countSheeps = (sheeps) =>
    sheeps.reduce((count, sheep) => count + (sheep === true ? 1 : 0), 0);
}
