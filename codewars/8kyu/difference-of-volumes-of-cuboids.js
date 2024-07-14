{
  const findDifference = (a, b) =>
    Math.abs(
      a.reduce((cub, aValue) => (cub *= aValue), 1) -
        b.reduce((cub, bValue) => (cub *= bValue), 1),
    );

  console.log(findDifference([3, 2, 5], [1, 4, 4])); // 14
}

{
  const volume = (c) => c.reduce((x, y) => x * y);
  const findDifference = (a, b) => Math.abs(volume(a) - volume(b));
  console.log(findDifference([3, 2, 5], [1, 4, 4])); // 14
}
