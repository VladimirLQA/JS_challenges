/*
In this kata you are required to, given a string,
replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 */

const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

{
  const getAlphabetPos = (str) =>
    str.toLowerCase()
      .split('')
      .map((char) => alphabet[char] ?? null)
      .filter(Boolean)
      .join(' ');

  console.log(getAlphabetPos(`The sunset sets at twelve o' clock.`));
}

{
  const getAlphabetPos = (str) =>
    str.toLowerCase()
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 127) {
          return code - 96;
        }
      })
      .filter(Boolean)
      .join(' ');

  console.log(getAlphabetPos(`The sunset sets at twelve o' clock.`));
}

{
  const getAlphabetPos = (str, idx = 0, result = []) => {
    if (idx >= str.length) return result.join(' ');

    const code = str[idx].toLowerCase().charCodeAt(0);
    if (code >= 97 && code <= 127) {
      result.push(code - 96);
    }

    return getAlphabetPos(str, idx + 1, result);
  };

  console.log(getAlphabetPos(`The sunset sets at twelve o' clock.`));
}
