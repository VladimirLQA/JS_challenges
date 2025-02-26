/*
  https://www.codewars.com/kata/57cf50a7eca2603de0000090/javascript
*/

{
  const moveTen = (s) =>
    [...s].map((v) => {
      const code = v.charCodeAt(0);
      const start = code >= 65 && code <= 90 ? 65 : 97;
      const shiftedCode = ((code - start + 10) % 26) + start;
      return String.fromCharCode(shiftedCode);
    }).join('');

  console.log(moveTen('testcase')); // docdmkco
}
{
  const moveTen = (s) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...s].map((char) =>
      alphabet[(alphabet.indexOf(char) + 10) % 26])
      .join('');
  };

  console.log(moveTen('testcase')); // docdmkco
}
