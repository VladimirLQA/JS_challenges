const testArray = [6.1, 4.2, 6.3];
const callBackFunction = Math.floor;

const groupBy = (arr, callBack) =>
  arr.reduce((result, currentEl) => {
    const key = callBack(currentEl);
    key in result ? result[key].push(currentEl) : (result[key] = [currentEl]);
    return result;
  }, {});

console.log(groupBy(testArray, callBackFunction));
