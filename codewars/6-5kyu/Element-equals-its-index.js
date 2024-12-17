/*
 Given a sorted array of distinct integers,
 write a function indexEqualsValue that returns
 the lowest index for which array[index] == index.
 Return -1 if there is no such index.

 Your algorithm should be very performant.
  input: [-8,0,2,5]
  output: 2 # since array[2] == 2

  input: [-1,0,3,6]
  output: -1 # since no index in array satisfies array[index] == index
*/

{
  const indexEqualsValue = (a = []) => a.findIndex((n, idx) => n === idx);

  console.log(indexEqualsValue([-8, 0, 2, 5])); // 2
  console.log(indexEqualsValue([-1, 0, 3, 6])); // -1
}
{
  const indexEqualsValue = (a) => {
    let left = 0;
    let right = a.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (a[mid] === mid) {
        result = mid;
        right = mid - 1;
      } else if (a[mid] < mid) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };

  console.log(indexEqualsValue([-8, 0, 2, 5])); // 2
  console.log(indexEqualsValue([-1, 0, 3, 6])); // -1
}
{
  const indexEqualsValue =
  (a, str = 0, end = a.length - 1, mid = (str + end) >> 1) => // mid = (str + end) / 2 ^ 0
    str < end
      ? mid <= a[mid]
        ? indexEqualsValue(a, str, mid)
        : indexEqualsValue(a, ++mid, end)
      : a[end] === end
        ? end
        : -1;

  console.log(indexEqualsValue([-8, 0, 2, 5])); // 2
  console.log(indexEqualsValue([-1, 0, 3, 6])); // -1
}
