// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

const twoDimensionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const max = (matrix) => {
  let max = 0;
  matrix.forEach((entity) => {
    entity.forEach((value) => {
      if (value > max) max = value;
    });
  });

  return max;
};

console.log(max(twoDimensionalArr)); // 9
