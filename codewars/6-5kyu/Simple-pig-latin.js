/*
 Move the first letter of each word to the end of it,
 then add "ay" to the end of the word.
 Leave punctuation marks untouched.

 Examples
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !
*/
const reverseStr = (string) =>
  string === '' ? '' : reverseStr(string.substring(1)) + string.charAt(0);

console.log(reverseStr('Pig latin is cool'));

const pigIt = (str) =>
  str
    .split(' ')
    .map((el) =>
      /^[a-z0-9]+$/i.test(el) ? `${el.substring(1) + el.charAt(0)}ay` : el,
    )
    .join(' ');

console.log(pigIt('Pig latin is cool !'));
console.log(pigIt('Hello world !'));
