/*
 Given positive integers n and m, find all integers less than n
 whose the square of the sum of thier digits is equal to m.
 If you haven't such integers return No result.

  m=5, n=4    -> [2]
  m=50, n=15  -> 'No result'
  m=156, n=16 -> [4,13,22,31,40,103,112,121,130]
  m=297, n=25 -> [5,14,23,32,41,50,104,113,122,131,140,203,212,221,230]
*/

{
  const squareOfSumOfDigits = (int) =>
    Math.pow([...int.toString()].reduce((acc, d) => acc + +d, 0), 2);

  const intSumSq = (n, m) => {
    const result = [];

    for (let i = 1; i < n; i++) {
      if (squareOfSumOfDigits(i) === m) result.push(i);
    }
    return result.length ? result : `No result`;
  };

  console.log(intSumSq(5, 4));
  console.log(intSumSq(50, 15));
  console.log(intSumSq(156, 16));
  console.log(intSumSq(297, 25));
}

{

  const intSumSq = (n, m) => {
    const result = Array.from({ length: n }, (_, i) => i)
      .filter((d) =>
        Math.pow([...d + ''].reduce((a, b) => a + +b, 0), 2) === m);
    return result.length ? result : `No result`;
  };

  console.log(intSumSq(5, 4));
  console.log(intSumSq(50, 15));
  console.log(intSumSq(156, 16));
  console.log(intSumSq(297, 25));
}
