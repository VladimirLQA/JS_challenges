/**
 * Take 2 strings s1 and s2 including only letters from a to z.
 * Return a new sorted string, the longest possible,
 * containing distinct letters - each taken only once - coming from s1 or s2.
 * Examples:
 * a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 * longest(a, b) -> "abcdefklmopqwxy"
 *
 * a = "abcdefghijklmnopqrstuvwxyz"
 * longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
{
  const longest = (str1, str2) => [...new Set(str1 + str2)].sort().join('');

  console.log(longest('acccdab', 'lqzywffe'));
}

{
  const longest = (str1, str2) =>
    [...str1, ...str2]
      .sort()
      .filter((item, index, arr) => item !== arr[index - 1])
      .join('');

  console.log(longest('acccdab', 'lqzywffe'));
}
