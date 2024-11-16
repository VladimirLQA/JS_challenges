/*
 https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript
*/
const bigArray = [
  [2, 3],
  [7, 2],
  [9, 20],
  [1, 2],
  [7, 2],
  [45, 4],
  [7, 87],
  [4, 5],
  [2, 7],
  [6, 32],
];

const searchFor = [9, 20];

{
  const searchArray = (input = [], query) => {
    if (input.some((arr) => arr.length !== 2)) throw Error();
    if (!input.some(Array.isArray)) throw Error();
    if (query.length !== 2) throw Error();

    const [x, y] = query;
    return input.findIndex(([a, b]) => a === x && b === y);
  };

  console.log(searchArray(bigArray, searchFor));
}
{
  const searchArray = (input, query) => {
    if ([...input, query].some((i) => !Array.isArray(i) || i.length !== 2)) {
      throw Error();
    }

    return input.map(String).indexOf(String(query));
  };

  console.log(searchArray(bigArray, searchFor));
}
