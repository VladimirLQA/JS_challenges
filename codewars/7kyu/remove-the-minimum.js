/*
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

{
  const removeSmallest = (ratings) => {
    const minRate = Math.min(...ratings);
    const indexMinRate = ratings.indexOf(minRate);

    return [
      ...ratings.slice(0, indexMinRate),
      ...ratings.slice(indexMinRate + 1),
    ];
  };

  console.log(removeSmallest([1, 2, 3, 4, 5]));
  console.log(removeSmallest([5, 3, 2, 1, 4]));
  console.log(removeSmallest([2, 2, 1, 2, 1]));
}

{
  const removeSmallest = (numbers) =>
    numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
  console.log(removeSmallest([1, 2, 3, 4, 5]));
  console.log(removeSmallest([5, 3, 2, 1, 4]));
  console.log(removeSmallest([2, 2, 1, 2, 1]));
}
