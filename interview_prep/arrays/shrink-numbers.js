/*
 The shrink function takes an array of integers and groups
 consecutive numbers into ranges, then returns a string
 representation of these ranges.
*/
const shrink = (arr) =>
  arr
    .sort((a, b) => a - b)
    .reduce((result, num, index) => {
      if (index === 0 || num !== arr[index - 1] + 1) result.push([num]);
      else result[result.length - 1].push(num);
      return result;
    }, [])
    .map((range) =>
      range.length > 1
        ? `${range[0]}-${range[range.length - 1]}`
        : `${range[0]}`,
    )
    .join(',');

const arr = [1, 5, 7, 6, 2, 9];
console.log(shrink(arr)); // ["1-2", "5-7", "9"]
