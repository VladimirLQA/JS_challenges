/*
 An element is leader if it is greater than The Sum all the elements to its right side.
*/

{
  const arrayLeaders = (numbers) => {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
      const currentN = numbers[i];
      const rightSum = numbers.slice(i + 1).reduce((acc, n) => acc + n, 0);
      if (currentN > rightSum) result.push(currentN);
    }
    return result;
  };

  console.log(arrayLeaders([1, 2, 3, 4, 0])); // [4]
  console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17,5,2]
}
{
  const arrayLeaders = (numbers) =>
    numbers.filter((n, i) =>
      numbers.slice(++i).reduce((acc, number) => acc + number, 0) < n);

  console.log(arrayLeaders([1, 2, 3, 4, 0])); // [4]
  console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17,5,2]
}
{
  const arrayLeaders = (numbers) => {
    const result = [];
    let sum = 0;

    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] > sum) result.unshift(numbers[i]);
      sum += numbers[i];
    }
    return result;
  };

  console.log(arrayLeaders([1, 2, 3, 4, 0])); // [4]
  console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17,5,2]
}
