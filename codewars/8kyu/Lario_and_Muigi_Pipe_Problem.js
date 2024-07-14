/*
 * Issue
 * Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
 * The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
 * Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
 * Task
 * Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
 * Example
 * Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
 */

{
  function pipeFix(array) {
    const result = [];
    const pipe = Math.max.apply(null, array);
    for (let i = Math.min.apply(null, array); i <= pipe; i++) {
      result.push(i);
    }
    return console.log(result);
  }

  pipeFix([1, 2, 3, 5, 6, 8, 9]);
}

{
  function pipeFix(num) {
    const max = Math.max(...num);
    const min = Math.min(...num);
    return new Array(max - min + 1).fill(min).map((a, b) => a + b);
  }

  console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
}

{
  function pipeFix(numbers) {
    const result = [];
    let current = numbers[0];
    while (current <= numbers[numbers.length - 1]) {
      result.push(current);
      current++;
    }
    return result;
  }
  console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
}

{
  function pipeFix(numbers) {
    const [s, e] = [numbers[0], Math.max(...numbers)];
    return Array.from(Array(e - s + 1), (n, i) => s + i);
  }
  console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
}
