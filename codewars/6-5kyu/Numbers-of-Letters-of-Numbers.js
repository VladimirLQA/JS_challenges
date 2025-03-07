/*
  https://www.codewars.com/kata/599febdc3f64cd21d8000117/javascript
*/
const digitToWord = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const convertToWord = (value) =>
  [...value.toString()].map((n) => digitToWord[n]).join('');
{
  const numbersOfLetters = (integer, res = []) => {
    if (res.at(-1) === 'four') return res;
    let temp;
    if (!res.length) temp = convertToWord(integer);
    else temp = convertToWord(res.at(-1).length, true);

    res.push(temp);

    return numbersOfLetters(integer, res);
  };

  console.log(numbersOfLetters(123)); // [ 'onetwothree', 'oneone', 'six', 'three', 'five', 'four' ]
  console.log(numbersOfLetters(9)); // [ 'nine', 'four' ]
  console.log(numbersOfLetters(1000)); // [ 'onezerozerozero', 'onefive', 'seven', 'five', 'four' ]
}
{
  const numbersOfLetters = (integer) => {
    const res = [];
    let current = convertToWord(integer);

    while (current !== 'four') {
      res.push(current);
      current = convertToWord(current.length, true);
    }

    res.push(current);
    return res;
  };

  console.log(numbersOfLetters(123)); // [ 'onetwothree', 'oneone', 'six', 'three', 'five', 'four' ]
  console.log(numbersOfLetters(9)); // [ 'nine', 'four' ]
  console.log(numbersOfLetters(1000)); // [ 'onezerozerozero', 'onefive', 'seven', 'five', 'four' ]
}
