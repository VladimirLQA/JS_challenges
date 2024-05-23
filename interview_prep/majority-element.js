{
  const majorityElement = (nums) => {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      } else if (candidate === nums[i]) {
        count++;
      } else {
        count--;
      }
    }
    return candidate;
  };

  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
  console.log(majorityElement([3, 2, 3])); // 3
}

{
  const majorityElement = (nums) => {
    const hashTable = {};
    // Identifying the Threshold
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
      if (!hashTable[num]) {
        hashTable[num] = 1;
      } else {
        hashTable[num]++;
      }

      if (hashTable[num] > majorityCount) return num;
    }

    return null; // No majority element found
  };

  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
  console.log(majorityElement([3, 2, 3])); // 3
}
