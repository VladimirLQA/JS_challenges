const getLargestNumberIndex1 = (arr) =>
  arr.reduce(
    (largestNumIdx, currentNum, idx, originalArray) =>
      currentNum > originalArray[largestNumIdx] ? idx : largestNumIdx,
    0,
  );

console.log(getLargestNumberIndex1([1, 3, 5, 2, 8])); // 4

const getLargestNumberIndex = (arr) =>
  arr.indexOf(arr.sort((a, b) => b - a).at(-1));

console.log(getLargestNumberIndex([1, 3, 5, 2, 8])); // 4
