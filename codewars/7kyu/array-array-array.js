/*
 You are given an initial 2-value array (x).
 You will use this to calculate a score.

 If both values in (x) are numbers, the score is
 the sum of the two. If only one is a number,
 the score is that number. If neither is a number, return 'Void!'.

 Once you have your score, you must return an array of arrays.
 Each sub array will be the same as (x) and
 the number of sub arrays should be equal to the score.

 For example:
  if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

{

  const explode = (x) => {
    const filtered = x.filter((v) => typeof v === 'number');
    if (!filtered.length) return `Void!`;
    return Array.from({
      length: filtered.reduce((a, b) => typeof b === 'number' && a + b, 0),
    }).fill(x);
  };

  console.log(explode([9, 3]));
  console.log(explode(['a', 3]));
}

{
  const explode = ([x, y]) =>
    x + 0 !== x && y + 0 !== y
      ? 'Void!'
      : Array((+x || 0) + (+y || 0)).fill([x, y]);

  console.log(explode([9, 3]));
  console.log(explode(['a', 3]));
}
