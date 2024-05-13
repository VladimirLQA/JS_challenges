const eqSumPowdig = (hMax, exp) => {
  const result = [];
  for (let i = 2; i <= hMax; i++) {
    const sum = [...String(i)].reduce((sum, num) => sum + num ** exp, 0);
    if (sum === i) result.push(sum);
  }
  return result;
};

console.log(eqSumPowdig(100, 2)); // []
console.log(eqSumPowdig(200, 3)); // [153]
console.log(eqSumPowdig(370, 3)); // [153, 370]

const eqSumPowdig2 = (hMax, exp) =>
  [...Array(hMax - 1)]
    .map((_, idx) => idx + 2)
    .filter(val => [...`${val}`]
      .reduce((pre, val) => pre + val ** exp, 0) === val);

console.log(eqSumPowdig2(100, 2)); // []
console.log(eqSumPowdig2(200, 3)); // [153]
console.log(eqSumPowdig2(370, 3)); // [153, 370]
