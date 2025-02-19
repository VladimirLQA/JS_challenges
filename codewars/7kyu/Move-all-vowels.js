/*
  https://www.codewars.com/kata/56bf3287b5106eb10f000899/javascript
*/

{
  const vowelCollection = new Set('aeiou');

  const moveVowel = (input) =>
    [...input]
      .reduce(
        ([consonants, vowels], char) => (
          vowelCollection.has(char) ? (vowels += char) : (consonants += char),
          [consonants, vowels]
        ),
        ['', ''],
      )
      .join('');

  console.log(moveVowel('maker'));
  console.log(moveVowel('programming'));
}
{
  const moveVowel = (input) =>
    input.replace(/[aeiou]/g, '') + input.replace(/[^aeiou]/g, '');

  console.log(moveVowel('maker'));
  console.log(moveVowel('programming'));
}
