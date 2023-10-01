/*
 * Complete the function that takes a sequence of numbers as single parameter.
 * Your function must return the sum of the even values of this sequence.
 * Only numbers without decimals like 4 or 4.0 can be even.
 * The input is a sequence of numbers: integers and/or floats.
 */

{
  function sumEvenNumbers(input) {
    let result = 0;
    input.map((el) => {
      if (el % 2 === 0) result += el;
    });
    return result;
  }

  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30
}

console.log(`=====================================================`);

{
  const sumEvenNumbers = (input) => input.reduce((acc, cur) => (cur % 2 === 0 ? cur + acc : acc), 0);
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30
}

console.log(`=====================================================`);

{
  const sumEvenNumbers = (input) => input.filter((el) => el % 2 === 0).reduce((acc, curr) => acc + curr);
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30
}
