/*
 Given a string, capitalize the letters that occupy even
 indexes and odd indexes separately, and return as shown below.
 Index 0 will be considered even.

 For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
 The input will be a lowercase string with no spaces.
*/

{
  const capitalizeToCase = (s, flag) =>
    [...s].map((c, i) =>
      flag === 'U'
        ? i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()
        : i % 2 === 0 ? c.toLowerCase() : c.toUpperCase(),
    ).join('');

  const capitalize = (s) =>
    [capitalizeToCase(s, 'U'), capitalizeToCase(s, 'L')];

  console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']
}

{
  const capitalize = (s) =>
    [0, 1].map((r) =>
      [...s].map((c, i) => i % 2 === r ? c.toUpperCase() : c)
        .join(''));

  console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']
}
