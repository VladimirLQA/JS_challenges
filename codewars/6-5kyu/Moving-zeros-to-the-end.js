{
  // will reorder whole array even non zero value - not very suitable
  const moveZeros = (arr) => arr.sort((el1, el2) => el2 - el1);

  console.log(moveZeros([false, 2, 0, 1, 'a', 0, 1, 0, 3, 0, 1]));
}

{
  const moveZeros = (arr) => arr.sort((el1, _) => {
    if (el1 === 0) return 1;
    else return -1;
  });

  console.log(moveZeros([false, 2, 0, 1, 'a', 0, 1, 0, 3, 0, 1]));
}

{
  const moveZeros = (arr) => arr.sort((a, b) => {
    if (a !== 0 && b === 0) return -1;
    if (a === 0 && b !== 0) return 1;
    return 0;
  });

  console.log(moveZeros([false, 2, 0, 1, 'a', 0, 1, 0, 3, 0, 1]));
}

{
  const isNotZero = (element) => element !== 0;
  const isZero = (element) => element === 0;
  const moveZeros = (arr) => arr.filter(isNotZero).concat(arr.filter(isZero));

  console.log(moveZeros([false, 2, 0, 1, 'a', 0, 1, 0, 3, 0, 1]));
}

{
  const moveZeros = (arr) => [
    ...arr.filter((el) => el !== 0),
    ...arr.filter((el) => el === 0),
  ];

  console.log(moveZeros([false, 2, 0, 1, 'a', 0, 1, 0, 3, 0, 1]));
}

{
  const moveZeros = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
      }
    }
    return arr;
  };

  console.log(moveZeros([false, 2, 0, 1, 'a', 0, 1, 0, 3, 0, 1]));
}
