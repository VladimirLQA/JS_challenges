/*
 Write a program that outputs the top n elements from a list.
  Example:
  largest(2, [7,6,5,4,3,2,1]) // => [6,7]
*/
{
  const largest = (n, arr) =>
    [...arr].sort((a, b) => a - b).splice(-n);

  console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // [6, 7]
}
{
  const largest = (n, arr) =>
    arr.sort((a, b) => b - a)
      .filter((e, i) => i < n)
      .reverse();

  console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // [6, 7]
}
