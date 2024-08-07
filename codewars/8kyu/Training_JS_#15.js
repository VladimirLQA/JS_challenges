/*
 * Coding in function howManySmaller, function accept 2 parameter:arr and n.
 * arr is a decimal array. n is a decimal.
 * The first mission: let all elements in the array keep two decimal places(No need to convert number n).
 * The second mission: Traversal arr, count the number of the element which smaller than n and return it.
 * for example:
 * howManySmaller([1.234,1.235,1.228],1.24) should return 2
 * howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
 * howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
 */

{
  const howManySmaller = (arr, n) => arr.map((el) => el.toFixed(2)).filter((fixed) => fixed < n).length;

  console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); // 2
  console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // 1
  console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); // 2
}

console.log(`===============================================`);

{
  const howManySmaller = (arr, n) => arr.filter((fixed) => fixed.toFixed(2) < n).length;

  console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); // 2
  console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // 1
  console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); // 2
}
