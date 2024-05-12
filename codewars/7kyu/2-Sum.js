const pairOfTargetSum = (arr, target) => {
  const pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const tempSum = arr[i] + arr[j];
      if (tempSum === target) {
        pair.push(arr[i], arr[j]);
        return pair;
      }
    }
  }
  return pair;
};

console.log(pairOfTargetSum([1, 2, 3, 4, 5], 7));

// have a dependency on order of numbers in array
// it will change the final output
const pairOfTargetSum2 = (arr, target) => {
  const numSet = new Set();

  for (const num of arr) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return [complement, num];
    }
    numSet.add(num);
  }
  return [];
};

console.log(pairOfTargetSum2([1, 2, 3, 4, 5], 7));
