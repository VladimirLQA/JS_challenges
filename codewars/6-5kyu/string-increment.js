/*
 Your job is to write a function which increments
 a string, to create a new string.

 If the string already ends with a number,
 the number should be incremented by 1.
 If the string does not end with a number.
 the number 1 should be appended to the new string.
*/

{
  const incrementString = (str) => {
    const match = str.match(/(\d+)$/);
    if (match) {
      const number = match[0];
      const incrementedNumber =
        `${parseInt(number, 10) + 1}`.padStart(number.length, '0');
      return str.slice(0, match.index) + incrementedNumber;
    } else {
      return str + '1';
    }
  };

  console.log(incrementString('foobar000')); // foobar001
  console.log(incrementString('foobar999')); // foobar1000
  console.log(incrementString('foobar00999')); // foobar01000
  console.log(incrementString('foo')); // foo1
}
{
  const incrementString = (str) =>
    str.replace(/([0-8]|\d?9+)?$/, (e) => e ? +e + 1 : 1);

  console.log(incrementString('foobar000')); // foobar001
  console.log(incrementString('foobar999')); // foobar1000
  console.log(incrementString('foobar00999')); // foobar01000
  console.log(incrementString('foo')); // foo1
}
