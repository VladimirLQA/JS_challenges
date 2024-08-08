/*
 You are given two arrays a1 and a2 of strings.
 Each string is composed with letters from a to z.
 Let x be any string in the first array and y be
 any string in the second array.

  Find max(abs(length(x) − length(y)))

 If a1 and/or a2 are empty return -1 in each language
 except in Haskell (F#) where you will return Nothing (None).
*/
{
  const strLength = (strArr) => strArr.map((s) => s.length);

  const mxdiflg = (a1, a2) => {
    if (!a1.length || !a2.length) return -1;

    const max1 = Math.max(...strLength(a1));
    const min1 = Math.min(...strLength(a1));
    const max2 = Math.max(...strLength(a2));
    const min2 = Math.min(...strLength(a2));

    return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
  };
  const s1 = ['hoqq', 'bbllkw', 'oox', 'ejjuyyy',
    'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz'];
  const s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

  console.log(mxdiflg(s1, s2)); // 13
}
