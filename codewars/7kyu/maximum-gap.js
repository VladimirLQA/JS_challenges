/*
 Given an array/list [] of integers ,
 Find The maximum difference between the successive elements in its sorted form.
*/

{
  const maxGap = (numbers) => {
    const sortedUniqueNumbers = [...new Set(numbers.sort((a, b) => a - b))];
    let maxDifference = 0;

    for (let i = 1; i < sortedUniqueNumbers.length; i++) {
      const difference = sortedUniqueNumbers[i] - sortedUniqueNumbers[i - 1];
      if (difference > maxDifference) maxDifference = difference;
    }

    return maxDifference;
  };

  console.log(maxGap([13, 10, 2, 9, 5])); // 4
  console.log(maxGap([24, 299, 131, 14, 26, 25])); // 168
  console.log(maxGap([1, 1, 1])); // 0
}
{
  const maxGap = (numbers) =>
    Math.max(...numbers.sort((a, b) => a - b)
      .slice(1).map((n, idx) => n - numbers[idx]));

  console.log(maxGap([13, 10, 2, 9, 5])); // 4
  console.log(maxGap([24, 299, 131, 14, 26, 25])); // 168
  console.log(maxGap([1, 1, 1])); // 0
}
