/*
 Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
 Square all numbers k (0 <= k <= n) between 0 and n.
 Count the numbers of digits d used in the writing of all the k**2.
 Implement the function taking n and d as parameters and returning this count.
  n = 10, d = 1
  the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
  We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
*/

{
  const countMatch = (str, matchValue) =>
    [...str].reduce((acc, v) => (+v === +matchValue ? acc++ : acc, acc), 0);

  const nbDig = (n, d) =>
    Array.from({ length: n + 1 }, (_, i = 1) => `${i * i}`)
      .map((v) => countMatch(v, d))
      .reduce((count, n) => count + n);

  console.log(nbDig(10, 1));
}

{
  const nbDig = (n, d) =>
    Array.from(Array(n + 1), (_, i) => i * i)
      .join('')
      .match(new RegExp(d, 'g')).length;

  console.log(nbDig(10, 1));
}

{
  const nbDig = (n, d) =>
    [...Array(++n)]
      .map((_, idx) => idx ** 2)
      .join(``)
      .split(d).length - 1;

  console.log(nbDig(10, 1));
}
