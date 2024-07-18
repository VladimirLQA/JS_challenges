{
  const powersOfTwo = (n) =>
    Array.from({ length: n + 1 }, (_, idx) => Math.pow(2, idx));

  console.log(powersOfTwo(0)); // [1]
  console.log(powersOfTwo(1)); // [1, 2]
  console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]
}
