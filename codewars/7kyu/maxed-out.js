/*
 For this task you will be given an array of numbers,
 each number in turn has to be cubed and once all numbers
 have been cubed all of them have to be added to get a final sum.

 If the final sum is less than or equal to the maximum
 value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

 You can assume that you will receive a valid array of numbers.
*/

{
  const maxedOut = (arr) => {
    const sum = arr.map((n) => Math.pow(n, 3)).reduce((sum, n) => sum + n, 0);
    return sum > Number.MAX_SAFE_INTEGER ? `You've pushed me to the max!` : sum;
  };

  console.log(maxedOut([-530, 230, 5600, 40, 5, 7200])); // 548727354125
  console.log(maxedOut([7600, 32300, 66700, 22200, 4554, 323000, 5555])); // `You've pushed me to the max!`
}
{
  const maxedOut = (arr) =>
    ((sum) =>
      Number.isSafeInteger(sum) ? sum : `You've pushed me to the max!`)(
      arr.reduce((prev, n) => prev + n ** 3, 0),
    );

  console.log(maxedOut([-530, 230, 5600, 40, 5, 7200])); // 548727354125
  console.log(maxedOut([7600, 32300, 66700, 22200, 4554, 323000, 5555])); // `You've pushed me to the max!`
}
{
  const MAX = Math.pow(2, 53) - 1;
  const safely = (value, message) => (value <= MAX ? value : message);
  const cube = (n) => n ** 3;
  const total = (acc, currentValue) => acc + currentValue;

  const maxedOut = (arr) =>
    safely(arr.map(cube).reduce(total), `You've pushed me to the max!`);

  console.log(maxedOut([-530, 230, 5600, 40, 5, 7200])); // 548727354125
  console.log(maxedOut([7600, 32300, 66700, 22200, 4554, 323000, 5555])); // `You've pushed me to the max!`
}
