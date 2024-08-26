/*
 With no arguments, array.every it returns every element of the array.
 With one argument, array.every(interval) it returns every intervalth element.
 With two arguments, array.every(interval, start_index)
 it returns every intervalth element starting at index start_index
*/

{
  const every = (arr, interval = 1, start = 0) => {
    const result = [];
    for (let i = start; i < arr.length; i += interval) {
      result.push(arr[i]);
    }
    return result;
  };

  console.log(every([0, 1, 2, 3, 4])); // [0,1,2,3,4]
  console.log(every([0, 1, 2, 3, 4], 1)); // [0,1,2,3,4]
  console.log(every([0, 1, 2, 3, 4], 3, 1)); // [1,4]
  console.log(every([0, 1, 2, 3, 4], 2)); // [0, 2, 4]
}
{
  const every = (arr, interval = 1, start = 0, res = []) => {
    if (start >= arr.length) return res;
    res.push(arr[start]);
    return every(arr, interval, start + interval, res);
  };

  console.log(every([0, 1, 2, 3, 4])); // [0,1,2,3,4]
  console.log(every([0, 1, 2, 3, 4], 1)); // [0,1,2,3,4]
  console.log(every([0, 1, 2, 3, 4], 3, 1)); // [1,4]
  console.log(every([0, 1, 2, 3, 4], 2)); // [0, 2, 4]
}
{
  const every = (arr, interval = 1, start = 0) =>
    arr.slice(start).filter((_, idx) => !(idx % interval));

  console.log(every([0, 1, 2, 3, 4])); // [0,1,2,3,4]
  console.log(every([0, 1, 2, 3, 4], 1)); // [0,1,2,3,4]
  console.log(every([0, 1, 2, 3, 4], 3, 1)); // [1,4]
  console.log(every([0, 1, 2, 3, 4], 2)); // [0, 2, 4]
}
