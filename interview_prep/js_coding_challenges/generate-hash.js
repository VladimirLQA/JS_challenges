/*
  You're required to implement function 'generateHash' that generate
  a hash tag from a given input string.

  Conditions
  - each word capitalized and concatened without spaces;
  - if input string length is greated than 280 characters
    or is empty, or contains only whitespace return false;
  - return generated hash prefixed with # sign
*/

{
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const generateHash = (str) => {
    if (!str.trim().length || str.length > 280) return false;
    const hashedString = str.split(' ').map(capitalize).join('');
    return `#${hashedString}`;
  };

  console.log(generateHash('my name some technical'));
  console.log(generateHash('      '));
}
{
  const generateHash = (str) => {
    if (!str.trim().length || str.length > 280) return false;

    let result = '#';
    let isCapitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (char === ' ') {
        isCapitalizeNext = true;
      } else if (isCapitalizeNext) {
        result += char.toUpperCase();
        isCapitalizeNext = false;
      } else {
        result += char;
      }
    }

    return result;
  };

  console.log(generateHash('my name some technical'));
  console.log(generateHash('      '));
}
