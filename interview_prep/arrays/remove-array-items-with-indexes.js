/*
Remove Items from an Array Based on Indexes
The function 'removeItemsWithIndexes' takes two parameters:
 - arr (an array) – The input array from which elements will be removed.
 - indexes (an array of numbers) – The indexes of elements that should be removed.
*/
{
  const removeItemsWithIndexes = (arr, indexes) =>
    arr.reduceRight((acc, v, idx) =>
      (indexes.includes(idx)
        ? acc.splice(idx, 1)
        : acc, acc), arr);

  console.log(removeItemsWithIndexes(['a', 'b', 'c'], [0, 2])); // ['b']
}
{
  const removeItemsWithIndexes = (arr, indexes) => {
    const set = new Set(indexes);
    return arr.filter((_, idx) => !set.has(idx));
  };

  console.log(removeItemsWithIndexes(['a', 'b', 'c'], [0, 2])); // ['b']
}
