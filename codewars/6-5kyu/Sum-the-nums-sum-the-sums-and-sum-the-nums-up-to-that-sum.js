/*
 Let's define two functions:

 S(N) — sum of all positive numbers not more than N
 S(N) = 1 + 2 + 3 + ... + N

 Z(N) — sum of all S(i), where 1 <= i <= N
 Z(N) = S(1) + S(2) + S(3) + ... + S(N)
 You will be given an integer N as input; your task is to return the value of S(Z(N)).

 For example, let N = 3:
  Z(3n) = 1n + 3n + 6n = 10n
  S(Z(3n)) = S(10n) = 55n

 The input range is 1 <= N <= 10^9 and there are 80 ( 40 in LC ) test cases, of which most are random.
 */

{
  const sumOfSums = (n) => {
    const s = (n) => (n * (n + 1n)) / 2n;
    const z = (n) => (n * (n + 1n) * (n + 2n)) / 6n;
    return s(z(n));
  };

  console.log(sumOfSums(3n)); // 55n
  console.log(sumOfSums(5n)); // 630n
  console.log(sumOfSums(100n)); // 14_740_530_850n
}
