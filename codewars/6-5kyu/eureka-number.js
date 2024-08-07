/*
 The number 89 is the first integer with more than one digit
 that fulfills the property partially introduced in the title
 of this kata. What's the use of saying "Eureka"? Because this sum gives the same number
 89 = 8 ** 1 + 9 ** 2

The next number in having this property is 135
 135 = 1 ** 1 + 3 ** 2 + 5 ** 3

 We need a function to collect these numbers, that may receive two integers a,
 b that defines the range [a,b] (inclusive) and outputs
 a list of the sorted numbers in the range that fulfills the property described above.
*/
{
  const isEurekaNum = (num) =>
    [...num.toString()]
      .reduce((sum, digit, idx) =>
        sum + Math.pow(+digit, idx + 1), 0) === num;

  const sumDigPow = (a, b) => {
    const result = [];
    for (let i = a; i <= b; i++) {
      if (isEurekaNum(i)) result.push(i);
    }
    return result;
  };

  console.log(sumDigPow(10, 150)); // [89, 135]
  console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(sumDigPow(90, 100)); // []
}
