/*
* Напишите функцию, которая принимает матрицу 3х3 и
* переворачивает на 90 градусов по часовой стрелке.

**Дополнительно**: Напишите еще 2 функции, которые переворачивают
* матрицу на 180 и 270 градусов.
*
[1, 2, 3]    [7,4,1]
[4, 5, 6] -> [8,5,2]
[7, 8, 9]    [9,6,3]
* */

/*
 * 0:0 0:1 0:2    0:2 1:2 2:2
 * 1:0 1:1 1:2 -> 0:1 1:1 2:1
 * 2:0 2:1 2:2    0:0 1:0 2:0
 * */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(source) {
  const rotated = source[0].map((_) => []);

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[j][source.length - 1 - i] = source[i][j];
    }
  }
  return rotated;
}

function rotate180(array) {
  return rotate(rotate(array));
}

function rotate270(array) {
  return rotate(rotate180(array));
}

function rotate360(array) {
  return rotate(rotate270(array));
}

function print(array) {
  array.forEach((el) => console.log(el));
}

print(rotate(matrix));
console.log('---------------------');
print(rotate180(matrix));
console.log('---------------------');
print(rotate270(matrix));
console.log('---------------------');
print(rotate360(matrix));
