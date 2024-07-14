/*
* Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
* Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

{
  function sumMul(n, m) {
    if (n <= 0 || m <= 0 || !Number.isInteger(n) || !Number.isInteger(m)) {
      return 'INVALID';
    }

    let result = 0;
    let current = n;

    while (current < m) {
      result += current;
      current += n;
    }

    return result;
  }

  console.log(sumMul(2, 9)); // 20
  console.log(sumMul(3, 13)); // Output: 30
  console.log(sumMul(4, 123)); // Output: 1860
  console.log(sumMul(4, -7)); // Output: "INVALID"
}

console.log(
  '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
);

{
  const sumMul = (n, m) =>
    m <= 0
      ? 'INVALID'
      : Array.from({ length: m }).reduce(
        (acc, _, index) => (index % n === 0 ? acc + index : acc),
        0,
      );

  console.log(sumMul(2, 9)); // 20
  console.log(sumMul(3, 13)); // Output: 30
  console.log(sumMul(4, 123)); // Output: 1860
  console.log(sumMul(4, -7)); // Output: "INVALID"
}

console.log(
  '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
);

{
  function sumMul(n, m) {
    let res = 0;
    for (let i = n; i < m; i++) {
      if (i % n === 0) res += i;
    }
    return res > 0 ? res : 'INVALID';
  }

  console.log(sumMul(2, 9)); // 20
  console.log(sumMul(3, 13)); // Output: 30
  console.log(sumMul(4, 123)); // Output: 1860
  console.log(sumMul(4, -7)); // Output: "INVALID"
}
