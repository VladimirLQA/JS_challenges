function ownMap(array, callbackFunc) {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = callbackFunc(array[i], i, array);
    resultArray.push(result);
  }
  return resultArray;
}

const testArray = [1, 2, 3, 4, 5];
console.log(ownMap(testArray, (el, i, arr) => el ** 2));
