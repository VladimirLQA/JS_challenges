/*
https://www.codewars.com/kata/591e8c715b1d254f9e00005e/javascript
*/

{
  const roundAndRound = (n, a, b) =>
    ((a - 1 + b) % n + n) % n + 1;

  console.log(roundAndRound(5, 1, 3));  //  4
  console.log(roundAndRound(6, 2, -5)); //  3
}
{
  const roundAndRound = (n, a, b) => {
    const rest = (a + b) % n;
    return rest < 0 ? n + rest : rest || n;
  };

  console.log(roundAndRound(5, 1, 3));  //  4
  console.log(roundAndRound(6, 2, -5)); //  3
}
