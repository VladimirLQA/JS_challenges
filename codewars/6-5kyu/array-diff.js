/**
 * Your goal in this kata is to implement a difference function,
 * which subtracts one list from another and returns the result.
 * It should remove all values from list a, which are present in list b keeping their order.
 * arrayDiff([1,2],[1]) == [2]
 * If a value is present in b, all of its occurrences must be removed from the other:
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

{
  const arrayDiff = (firstList, secondList) => {
    if (!firstList.length || !secondList.length) return firstList;

    const result = [];

    for (let i = 0; i < firstList.length; i++) {
      if (secondList.indexOf(firstList[i]) === -1) result.push(firstList[i]);
    }
    return result;
  };

  console.log(arrayDiff([1, 2, 2, 2], [2]));
  console.log(arrayDiff([1, 2, 2, 2, 3], [1, 2]));
  console.log(arrayDiff([], [2]));
  console.log(arrayDiff([1, 2, 2, 2], []));
}
console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>`);

{
  const arrayDiff = (firstList, secondList) =>
    firstList.filter((item) => !secondList.includes(item));
  console.log(arrayDiff([1, 2, 2, 2], [2]));
  console.log(arrayDiff([1, 2, 2, 2, 3], [1, 2]));
  console.log(arrayDiff([], [2]));
  console.log(arrayDiff([1, 2, 2, 2], []));
}
