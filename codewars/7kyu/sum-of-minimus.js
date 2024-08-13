/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n,
your task is to find the sum of the minimum values in each row.
*/

{
  const sumOfMinimums = (arr) =>
    arr.reduce((sum, n) => sum + Math.min(...n), 0);

  console.log(sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])); // 9
}
{
  const sumOfMinimums = (array) =>
    array.map((a) => Math.min(...a)).reduce((sum, n) => sum + n, 0);

  console.log(sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])); // 9
}
