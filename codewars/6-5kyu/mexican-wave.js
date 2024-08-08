/*
 wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
*/

{
  const charToUpperCaseByIdx = (str, index) =>
    str !== ''
      ? index >= 0 &&
        str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1)
      : str;

  const wave = (str) =>
    [...str]
      .map((c, idx, oArr) =>
        oArr[idx] !== ' '
          ? charToUpperCaseByIdx(oArr.join(''), idx)
          : c)
      .filter((s) => s !== ' ');

  console.log(wave('hello'));
}
