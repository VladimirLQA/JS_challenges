/*
 Write a function that accepts a sequence of unique
 integers between 0 and 9 (inclusive), and returns the missing element.

 Examples:
  [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
  [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/
{
  const getMissingElement = (superImportantArray) =>
    superImportantArray.reduce((pre, val) => pre - val, 45);

  console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
  console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));
}
{
  const getMissingElement = (superImportantArray) =>
    Array.from({ length: 10 }, (_, i) => i)
      .find((n) => !superImportantArray.includes(n));

  console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
  console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));
}
