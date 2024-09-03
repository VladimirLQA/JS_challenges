/*

*/

{
  const minimumSteps = (numbers, value) => {
    numbers.sort((a, b) => a - b);

    let sum = 0;
    let steps = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      steps++;

      if (sum >= value) return steps - 1;
    }
  };

  console.log(minimumSteps([4, 6, 3], 7)); // 1
  console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
  console.log(minimumSteps([4, 6, 3], 2)); // 0
}
{
  const minimumSteps = (numbers, value) =>
    numbers.sort((a, b) => a - b).filter((n) => (value -= n) > 0).length;

  console.log(minimumSteps([4, 6, 3], 7)); // 1
  console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
  console.log(minimumSteps([4, 6, 3], 2)); // 0
}
{
  const minimumSteps = (numbers, value) => {
    let sum = 0;
    return numbers.sort((a, b) => a - b).findIndex((n) => (sum += n) >= value);
  };

  console.log(minimumSteps([4, 6, 3], 7)); // 1
  console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
  console.log(minimumSteps([4, 6, 3], 2)); // 0
}
