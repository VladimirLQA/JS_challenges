/*
  Reverse and invert all integer values in a given list.

   [1,12,'a',3.4,87,99.9,-42,50,5.6] --> [-1,-21,-78,24,-5]

  Remove all types other than integer.
*/

{
  const isInteger = (number) => Number.isInteger(number);

  const reverseNumber = (number) =>
    Number([...Math.abs(number).toString()].reverse().join(''));

  const invertNumber = (number) =>
    number < 0 ? reverseNumber(number) : -reverseNumber(number);

  const reverseInvert = (array) =>
    [...array].filter(isInteger).map(invertNumber);

  console.log(reverseInvert([1, 2, 3, 4, 5]));
  console.log(reverseInvert([-10]));
  console.log(reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6]));
}
{
  const isInteger = (number) => Number.isInteger(number);

  const reverseInvert = (array) =>
    [...array].filter(isInteger).map((n) => {
      const [, sign, num] = /(\-)?(\d+)/.exec(n);
      const reversed = [...num].reverse().join('');
      return sign ? +reversed : reversed * -1;
    });
  console.log(reverseInvert([1, 2, 3, 4, 5]));
  console.log(reverseInvert([-10]));
  console.log(reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6]));
}
