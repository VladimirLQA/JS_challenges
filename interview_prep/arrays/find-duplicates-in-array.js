'use strict';

{
  const getDuplicates = (nums) => {
    const copyArray = [];
    return nums.reduce((duplicates, number) => {
      if (!copyArray.includes(number)) {
        copyArray.push(number);
      } else {
        duplicates.push(number);
      }
      return duplicates;
    }, []);
  };

  console.log(getDuplicates([1, 2, 3, 4, 1, 3]));
}

{
  const getDuplicates = (nums) => {
    const hash = nums.reduce((acc, number) => {
      acc[number] = (acc[number] || 0) + 1;
      return acc;
    }, {});

    const duplicates = [];
    for (const [key, value] of Object.entries(hash)) {
      if (value > 1) duplicates.push(+key);
    }
    return duplicates;
  };

  console.log(getDuplicates([1, 2, 3, 4, 1, 3]));
}

{
  const getDuplicates = (nums) =>
    nums.filter((el, idx) => nums.indexOf(el) !== idx);

  console.log(getDuplicates([1, 2, 3, 4, 1, 3]));
}

{
  const getDuplicates = (nums) => [
    ...new Set(nums.filter((el) => nums.filter((n) => n === el).length > 1)),
  ];

  console.log(getDuplicates([1, 2, 3, 4, 1, 3]));
}
