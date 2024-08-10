/*
 https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript
*/

{
  const findEvenIndex = (a) => {
    const arrSum = a.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < a.length; i++) {
      if (leftSum === arrSum - leftSum - a[i]) {
        return i;
      }
      leftSum += a[i];
    }

    return -1;
  };

  console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
  console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
  console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
  console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
  console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
  console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20])); // 6
  console.log(findEvenIndex([8, 8])); // -1
  console.log(findEvenIndex([8, 0])); // 0
}

{
  const sum = (a, from, to) => a.slice(from, to).reduce((acc, b) => acc + b, 0);
  const findEvenIndex = (a) =>
    a.findIndex((_, i) => sum(a, 0, i) === sum(a, i + 1));

  console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
  console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
  console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
  console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
  console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
  console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20])); // 6
  console.log(findEvenIndex([8, 8])); // -1
  console.log(findEvenIndex([8, 0])); // 0
}

