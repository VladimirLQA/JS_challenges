/*
 * Write a function reverse which reverses a list
 * (or in clojure's case, any list-like data structure)
 * (the dedicated builtin(s) functionalities are deactivated)
 */

const testArray1 = [1, 2, 3];
const testArray2 = [1, null, 14, 'two'];

{
  function reverse(array) {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    return result;
  }

  console.log(reverse(testArray1));
  console.log(reverse(testArray2));
}

console.log(`========================================`);

{
  function reverse(array) {
    return array.reduceRight((a, b) => (a.push(b), a), []);
    // return array.reduceRight((a, b) => [...a, b], [])
  }

  console.log(reverse(testArray1));
  console.log(reverse(testArray2));
}

console.log(`========================================`);

{
  function reverse(array) {
    return array.reduce((a, b) => [b].concat(a), []);
  }

  console.log(reverse(testArray1));
  console.log(reverse(testArray2));
}

console.log(`========================================`);

{
  function reverse(array) {
    return array.map((v, i) => array[array.length - 1 - i]);
  }

  console.log(reverse(testArray1));
  console.log(reverse(testArray2));
}
