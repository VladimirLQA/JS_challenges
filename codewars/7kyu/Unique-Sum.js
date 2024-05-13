/*
Given a list of integers values, your job is to return the sum of the values;
however, if the same integer value appears multiple times in the list,
you can only count it once in your sum.
 */

const uniqueSum = lst =>
  [...new Set(lst)].reduce((pre, val) => pre + val, null);

console.log(uniqueSum([1, 2, 3])); // 6
console.log(uniqueSum([1, 3, 8, 1, 8])); // 12
console.log(uniqueSum([-1, -1, 5, 2, -7])); // -1
console.log(uniqueSum([])); // null

const uniqueSum2 = lst =>
  lst.filter((num, idx) => lst.indexOf(num) === idx)
    .reduce((a, b) => a + b, null);

console.log(uniqueSum2([1, 2, 3])); // 6
console.log(uniqueSum2([1, 3, 8, 1, 8])); // 12
console.log(uniqueSum2([-1, -1, 5, 2, -7])); // -1
console.log(uniqueSum2([])); // null
