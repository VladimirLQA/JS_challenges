const testArr = [1, 3, 8, 5, 7];
const testArr2 = [42];
const testArr3 = [];

{
  const maxNumber = (numbers) => Math.max(numbers);
}

{
  const maxNumber = (numbers) => {
    if (numbers.length <= 1) {
      return numbers[0];
    }

    const numA = numbers[0];
    const numB = maxNumber(numbers.splice(1));

    return numA > numB ? numA : numB;
  };

  console.log(maxNumber(testArr));
  console.log(maxNumber(testArr2));
  console.log(maxNumber(testArr3));
}
