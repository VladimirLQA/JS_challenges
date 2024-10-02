/*
 Jack really likes his number five: the trick here
 is that you have to multiply each number by 5
 raised to the number of digits of each numbers, so, for example:
*/
{
  const multiply = (number) =>
    number * Math.pow(5, `${Math.abs(number)}`.length);

  console.log(multiply(3)); // 15
  console.log(multiply(-2)); // -10
  console.log(multiply(200)); // 25000
}
