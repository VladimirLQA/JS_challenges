/*
 This time no story, no theory. The examples below show you how to write function accum:
 Examples:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
 The parameter of accum is a string which includes only letters from a...z and A...Z.
*/
{
  const toUpperCaseFirstChar = (str) =>
    str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

  const repeatChar = (str, time = 1) => str.repeat(time);

  const accum = (s) =>
    [...s]
      .reduce(
        (res, char, idx) => [
          ...res,
          toUpperCaseFirstChar(repeatChar(char, idx + 1)),
        ],
        [],
      )
      .join('-');

  console.log(accum('ZpglnRxqenU'));
  console.log(accum('NyffsGeyylB'));
  console.log(accum('MjtkuBovqrU'));
}

{
  const accum = (s) =>
    s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
      .join('-');

  console.log(accum('ZpglnRxqenU'));
  console.log(accum('NyffsGeyylB'));
  console.log(accum('MjtkuBovqrU'));
}
