/*

*/
{
  const arrAdder = (arr) => {
    let result = '';
    const idxMax = arr[1].length - 1;
    let index = 0;

    while (index <= idxMax) {
      result +=
        arr.reduce((acc, arr, i) => ((acc += arr[index]), acc), '') +
        `${index === idxMax ? '' : ' '}`;

      index++;
    }

    return result;
  };

  console.log(
    arrAdder([
      ['J', 'L', 'L', 'M'],
      ['u', 'i', 'i', 'a'],
      ['s', 'v', 'f', 'n'],
      ['t', 'e', 'e', ''],
    ]),
  ); // "Just Live Life Man"
}
{
  const arrAdder = (arr) =>
    Array.from({ length: arr[0].length }, (_, i) =>
      arr.map((row) => row[i]).join(''),
    ).join(' ');

  console.log(
    arrAdder([
      ['J', 'L', 'L', 'M'],
      ['u', 'i', 'i', 'a'],
      ['s', 'v', 'f', 'n'],
      ['t', 'e', 'e', ''],
    ]),
  ); // "Just Live Life Man"
}
{
  const arrAdder = (arr) =>
    arr[0].map((_, i) => arr.map((r) => r[i]).join('')).join(' ');

  console.log(
    arrAdder([
      ['J', 'L', 'L', 'M'],
      ['u', 'i', 'i', 'a'],
      ['s', 'v', 'f', 'n'],
      ['t', 'e', 'e', ''],
    ]),
  ); // "Just Live Life Man"
}
