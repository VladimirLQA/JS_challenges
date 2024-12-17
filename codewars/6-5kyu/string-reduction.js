/*
 https://www.codewars.com/kata/59fab1f0c9fc0e7cd4000072/javascript
*/
{
  const solve = (a, b) => {
    if (b.length > a.length) return 0;

    const hash = {};
    let count = a.length;

    for (const char of a.toLowerCase()) {
      hash[char] = (hash[char] || 0) + 1;
    }

    for (const char of b.toLowerCase()) {
      if (!hash[char]) return 0;
      hash[char]--;
      count--;
    }

    return count;
  };
  console.log(solve('aabcdefg', 'fbd')); // 5
  console.log(solve('xyz', 'yxz')); // 0
}
{
  const solve = (a, b) =>
    [...a].reduce((acc, v) => acc.replace(v, ''), b) ? 0 : a.length - b.length;

  console.log(solve('aabcdefg', 'fbd')); // 5
  console.log(solve('xyz', 'yxz')); // 0
}
