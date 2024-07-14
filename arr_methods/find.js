function ownFind(array, callbackFunc) {
  let result = undefined;

  for (let i = 0; i < array.length; i++) {
    if (callbackFunc(array[i], i, array)) {
      result = array[i];
      break;
    }
  }
  return result;
}

const testArray = [1, 2, 3, 4, 5];
console.log(ownFind(testArray, (el, i, arr) => el > 5));
