{
  const sumDigits = (n) =>
    Math.abs(n)
      .toString()
      .split('')
      .reduce((acc, d) => acc + parseInt(d), 0);

  console.log(sumDigits(88)); // 16
  console.log(sumDigits(-32)); // 5
}
