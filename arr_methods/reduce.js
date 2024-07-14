function ownReduce(array, callbackFunc, initialValue) {
  let accumulator = initialValue;
  if (array.length === 0) {
    return accumulator;
  }

  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callbackFunc(accumulator, array[i], i, array);
  }
  return accumulator;
}

const testArray = [1, 2, 3, 4, 5];
console.log(ownReduce(testArray, (acc, value) => acc + value));
