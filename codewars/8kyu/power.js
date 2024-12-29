/*
  https://www.codewars.com/kata/562926c855ca9fdc4800005b/javascript
*/
{
  const numberToPower = (number, power) => {
    if (power === 0) return 1;
    let result = 1;
    for (let i = power; i > 0; i--) {
      result *= number;
    }
    return result;
  };

  console.log(numberToPower(4, 2)); // 16
  console.log(numberToPower(10, 4)); // 10000
}
{
  const numberToPower = (number, power) =>
    power > 0 ? number * numberToPower(number, power - 1) : 1;

  console.log(numberToPower(4, 2)); // 16
  console.log(numberToPower(10, 4)); // 10000
}
{
  const numberToPower = (number, power) =>
    Array(power).fill(number).reduce((acc, n) => acc * n, 1);

  console.log(numberToPower(4, 2)); // 16
  console.log(numberToPower(10, 4)); // 10000
}
