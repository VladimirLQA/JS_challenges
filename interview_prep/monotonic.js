{
  const monotonic = (array) => {
    if (!array.length || array.length === 1) return true;

    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) isIncreasing = false;
      if (array[i] < array[i + 1]) isDecreasing = false;
    }

    return isIncreasing || isDecreasing;
  };

  const isMonotonic = [1, 2, 2, 3];
  const notMonotonic = [1, 2, 4, 3];

  console.log(monotonic(isMonotonic));
  console.log(monotonic(notMonotonic));
}
