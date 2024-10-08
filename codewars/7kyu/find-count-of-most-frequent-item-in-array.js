/*
 Complete the function to find the count of the most frequent
 item of an array. You can assume that input is an array of
 integers. For an empty array return 0

 Example
  input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
  ouptut: 5
 The most frequent number in the array is -1 and it occurs 5 times.
*/

{
  const mostFrequentItemCount = (collection = []) =>
    collection.length
      ? Math.max(...collection
        .map((n, _, arr) => arr.filter((val) => n === val).length),
      )
      : 0;

  console.log(mostFrequentItemCount(
    [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3],
  ));
}
{
  const mostFrequentItemCount = (collection = []) => {
    if (!collection.length) return 0;

    const hash = collection.reduce((obj, n) => {
      obj[n] ? obj[n]++ : obj[n] = 1;
      return obj;
    }, {});

    return Math.max(...Object.values(hash));
  };

  console.log(mostFrequentItemCount(
    [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3],
  ));
}
