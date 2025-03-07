/*
  https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/javascript
*/

{
  const reverseNumber = (n) =>
    (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('');

  console.log(reverseNumber(123));
  console.log(reverseNumber(-123));
  console.log(reverseNumber(0));
}
