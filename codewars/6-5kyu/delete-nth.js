/**
 * Given a list and a number, create a new list that contains each number of list at most N times,
 * without reordering. For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3],
 * you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times,
 * and then take 3, which leads to [1,2,3,1,2,3]. With list [20,37,20,21] and number 1,
 * the result would be [20,37,21].
 */

{
  const deleteNth = (arr, n) => {
    let resultList = [];
    const cache = {};

    for (let i = 0; i < arr.length; i++) {
      let count = (cache[arr[i]] = cache[arr[i]] + 1 || 1);
      if (count <= n) resultList.push(arr[i]);
    }
    return resultList;
  };

  console.log(deleteNth([20, 37, 20, 21], 1)); // 20, 37, 21
  console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // 1, 1, 3, 3, 7, 2, 2, 2
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const deleteNth = (arr, n) => {
    let cache = {};
    return arr.filter((v) => (cache[v] = (cache[v] || 0) + 1) <= n);
  };

  console.log(deleteNth([20, 37, 20, 21], 1)); // 20, 37, 21
  console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // 1, 1, 3, 3, 7, 2, 2, 2
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const deleteNth = (arr, n) => {
    let cache = {};
    return arr.filter((v) => (cache[v] = ~~cache[v] + 1) <= n);
  };

  console.log(deleteNth([20, 37, 20, 21], 1)); // 20, 37, 21
  console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // 1, 1, 3, 3, 7, 2, 2, 2
}
