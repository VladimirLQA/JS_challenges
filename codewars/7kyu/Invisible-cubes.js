/*
  https://www.codewars.com/kata/560d6ebe7a8c737c52000084/javascript
*/
{
  const notVisibleCubes = (n) =>
    n > 3
      ? (n - 2) * (n - 2) * (n - 2)
      : n === 3
        ? 1
        : 0;

  console.log(notVisibleCubes(0)); // 0
  console.log(notVisibleCubes(3)); // 1
  console.log(notVisibleCubes(5)); // 27
}
{
  const notVisibleCubes = (n) => {
    if (n < 3) return 0;
    const invisibleCubesPerDimension = n - 2;
    return Math.pow(invisibleCubesPerDimension, 3);
  };
  console.log(notVisibleCubes(0)); // 0
  console.log(notVisibleCubes(3)); // 1
  console.log(notVisibleCubes(5)); // 27
}
