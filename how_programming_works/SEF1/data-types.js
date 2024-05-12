/*
* Count different type values in array.
Prepare array with values of different types, for example: [true, 'hello', 5, 12, -200, false, false, 'word'] but preferably longer and more varied.
Prepare collection-object (hash) with type names as keys and 0 as values, for example: { number: 0, string: 0, boolean: 0 }
Iterate array with for..of loop and increment occurrence counter there to get collection of types occurrences count for all types in array.
Modify this example: remove all keys from initial collection literal and add all keys dynamically from the loop.*/

/*
    [[true, true, false], { 'boolean': 3 }],
    [[1, true, 'hello'], { 'number': 1, 'boolean': 1, string: 1 }],
    [[1, 2, true, false, 'a', 'b'], { 'number': 2, 'boolean': 2, string: 2 }]
*/

const countTypesInArray = (array) => {
  const result = {};
  for (const item of array) {
    const type = typeof item;
    result[type] ? result[type] += 1 : result[type] = 1;
  }
  return result;
};

console.log(countTypesInArray([true, true, false]));
console.log(countTypesInArray([1, true, 'hello']));
console.log(countTypesInArray([1, 2, true, false, 'a', 'b']));
