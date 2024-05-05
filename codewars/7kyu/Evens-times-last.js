const evenLast = (numbers) =>
  numbers.reduce((result, currentValue, idx) =>
    idx % 2 ? result : result + currentValue, 0) * numbers.at(-1) || 0;


console.log(evenLast([2, 3, 4, 5])); // 30

const evenLast2 = (numbers) =>
  numbers.filter((e, i) => i % 2 === 0)
    .reduce((a, b) => a + b, 0) * numbers.at(-1) || 0;

console.log(evenLast2([2, 3, 4, 5])); // 30
