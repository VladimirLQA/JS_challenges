function ownFilter(array, callbackFunc) {
  const resultArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFunc(array[i], i, array)) {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
}

const testArray = [1, 2, 3, 4, 5];
console.log(ownFilter(testArray, (el, i, arr) => el > 5));
