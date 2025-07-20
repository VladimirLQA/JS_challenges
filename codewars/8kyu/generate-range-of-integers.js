/*
https://www.codewars.com/kata/55eca815d0d20962e1000106/javascript
*/

{
  const generateRange = (min, max, step) =>
    Array.from(
      { length: Math.floor((max - min) / step) + 1 },
      (_, i) => min + i * step,
    );

  console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
}
