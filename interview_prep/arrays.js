// Write a function which get's an array and an element and returns
// an array with this element at the end

const testArray = [1, 2, 3, 4];

const toTheEnd = (arr, element) => [...arr, element];
  // const arrayCopy = [...arr];
  // const arrayCopy = [].concat(arr);
  // const arrayCopy = Array.from(arr);


console.log(toTheEnd(testArray, 'el'));
console.log(testArray);

// Write a function which can concatenate 2 arrays

const testArray2 = ['1', '2', '3', '4'];

const concatArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(concatArrays(testArray, testArray2));