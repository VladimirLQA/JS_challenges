{
  const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j];
        }
      }
    }
  };

  console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
  console.log(twoSum([3, 2, 4], 6)); // returns [1, 2] or [2, 1]
  console.log(twoSum([1234, 5678, 9012], 14690)); // [1, 2]
}

{

  const twoSum = (numbers, target) => {
    const hashMap = {};

    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      if (complement in hashMap) {
        return [hashMap[complement], i];
      }
      hashMap[numbers[i]] = i;
    }
    return null;
  };
  console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
  console.log(twoSum([3, 2, 4], 6)); // returns [1, 2] or [2, 1]
  console.log(twoSum([1234, 5678, 9012], 14690)); // [1, 2]
}
