{
  const isDivisibleByThree = (n) => !(n % 3);
  const isDivisibleByFive = (n) => !(n % 5);
  const isDivisibleByFiveAndThree = (n) =>
    isDivisibleByThree(n) && isDivisibleByFive(n);

  const multiple = (x) =>
    isDivisibleByFiveAndThree(x)
      ? `BangBoom`
      : isDivisibleByThree(x)
        ? `Bang`
        : isDivisibleByFive(x)
          ? `Boom`
          : `Miss`;
}
