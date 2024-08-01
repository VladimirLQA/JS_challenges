{
  const invert = (arr) => [...arr].map((n) => (n === n * 1 ? -n : n));

  console.log(invert([1, 2, 3, 4, 5]));
  console.log(invert([1, -2, 3, -4, 5]));
  console.log(invert([]));
}
