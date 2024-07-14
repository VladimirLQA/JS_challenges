const getMaxNumbers = (arr) =>
  arr.map(
    (item) =>
      +item
        .toString()
        .split('')
        .sort((a, b) => +b - +a)
        .join(''),
  );

console.log(getMaxNumbers([123, 902])); // [321, 920]
