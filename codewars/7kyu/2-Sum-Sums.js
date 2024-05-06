const sumOfSums = (arr, from, to) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const tempSum = arr[i] + arr[j];
      if (tempSum >= from && tempSum < to) {
        sum += tempSum;
      }
    }
  }
  return sum;
};

console.log(sumOfSums([2, 4, 6, 10], 6, 10));
