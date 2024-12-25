{
  const twoSum = (nums, target) => {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
      const rest = target - nums[i];
      if (rest in hash) {
        return [hash[rest], i];
      }
      hash[nums[i]] = i;
    }
    return null;
  };

  console.log(twoSum([2, 7, 11, 15], 9)); // => [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // => [1, 2]
}
{
  const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      const remainingValue = target - nums[i];
      const valueIdx = nums.indexOf(remainingValue);
      if (valueIdx > -1 && valueIdx !== i) {
        return [i, valueIdx];
      }
    }
    return null;
  };

  console.log(twoSum([2, 7, 11, 15], 9)); // => [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // => [1, 2]
}
