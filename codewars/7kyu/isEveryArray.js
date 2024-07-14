/*
 * Is every value in the array an array?
 * [[1],[2]] => true
 * ['1','2'] => false
 * [{1:1},{2:2}] => false
 */

{
  function isEveryArray(value) {
    return value.reduce((acc, curr) => Array.isArray(curr), Array.isArray(value));
  }

  console.log(isEveryArray([]));
  console.log(isEveryArray([['string']]));
  console.log(isEveryArray([[], {}]));
  console.log(isEveryArray(['A', 'R', 'R', 'A', 'Y']));
  console.log(isEveryArray([[1], [2], [3]]));
}

console.log(`==============================================`);

{
  function isEveryArray(value) {
    return value.every((el) => Array.isArray(el));
  }

  console.log(isEveryArray([]));
  console.log(isEveryArray([['string']]));
  console.log(isEveryArray([[], {}]));
  console.log(isEveryArray(['A', 'R', 'R', 'A', 'Y']));
  console.log(isEveryArray([[1], [2], [3]]));
}

console.log(`==============================================`);

{
  function isEveryArray(value) {
    return value.every(Array.isArray);
  }

  console.log(isEveryArray([]));
  console.log(isEveryArray([['string']]));
  console.log(isEveryArray([[], {}]));
  console.log(isEveryArray(['A', 'R', 'R', 'A', 'Y']));
  console.log(isEveryArray([[1], [2], [3]]));
}
