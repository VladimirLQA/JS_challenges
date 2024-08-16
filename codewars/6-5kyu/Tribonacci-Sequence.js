/*
https://www.codewars.com/kata/556deca17c58da83c00002db/solutions/javascript
*/

{
  const tribonacci = (signature, n) => {
    const tribonacci = [...signature];
    for (let i = 0; i < n; i++) {
      const nextNum = tribonacci.slice(i, i + 3).reduce((a, b) => a + b, 0);
      tribonacci.push(nextNum);
    }
    return tribonacci.slice(0, -3);
  };

  console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
  console.log(tribonacci([1, 2, 3], 10)); //  [1,2,3,6,11,20,37,68,125,230]
}

{
  const tribonacci = (signature, n) => {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-3).reduce((acc, n) => acc + n, 0);
    }
    return result;
  };

  console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
  console.log(tribonacci([1, 2, 3], 10)); //  [1,2,3,6,11,20,37,68,125,230]
}
