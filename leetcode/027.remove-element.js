{
  const removeElement = (nums, val) => nums.filter((n) => n !== val).length;

  console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
}
{
  const removeElement = (nums, val) => {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i]; // moving numbers that are not equal to val to the beginning of array
        k++;
      }
    }
    return k;
  };
  console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
}
