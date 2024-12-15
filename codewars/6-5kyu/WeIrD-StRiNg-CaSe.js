/*
 https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
*/

{
  const isEven = (n) => !(n % 2);

  const wordToWeirdCase = (word) =>
    [...word].map((char, idx) => isEven(idx)
      ? char.toUpperCase()
      : char.toLowerCase())
      .join('');

  const toWeirdCase = (string = '') =>
    string.split(' ')
      .map(wordToWeirdCase)
      .join(' ');

  console.log(toWeirdCase('Weird string case')); // => WeIrD StRiNg CaSe
}
