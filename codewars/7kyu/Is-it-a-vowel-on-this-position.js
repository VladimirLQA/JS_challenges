/*
  https://www.codewars.com/kata/5a2b7edcb6486a856e00005b/javascript
*/

{
  const isVowel = (char) => /[aeiou]/i.test(char);

  const checkVowel = (string, position) =>
    position < 0 || position > string.length - 1
      ? false
      : !!isVowel([...string][position]);

  console.log(checkVowel('cat', 1)); // true
  console.log(checkVowel('cat', 0)); // false
}
{
  const checkVowel = (string, position) =>
    /[aeiou]/i.test(string[position] ?? '');

  console.log(checkVowel('cat', 1)); // true
  console.log(checkVowel('cat', 0)); // false
}
{
  const checkVowel = (string, position) =>
    !!string.charAt(position).match(/[aeiou]/i);

  console.log(checkVowel('cat', 1)); // true
  console.log(checkVowel('cat', 0)); // false
}
