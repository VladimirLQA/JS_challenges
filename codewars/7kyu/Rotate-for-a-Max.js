/*
https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript
*/

{
  const maxRot = (n) => {
    let stringifiedNumber = n.toString();
    let max = n;

    for (let i = 0; i < stringifiedNumber.length - 1; i++) {
      stringifiedNumber =
        stringifiedNumber.slice(0, i) +
        stringifiedNumber.slice(i + 1) + stringifiedNumber[i];
      max = Math.max(max, parseInt(stringifiedNumber));
    }

    return max;
  };

  console.log(maxRot(38458215)); // 85821534
  console.log(maxRot(195881031)); // 988103115
}

{
  const maxRot = (n) =>
    // eslint-disable-next-line no-return-assign
    [...`${n}`].reduce((pre, _, idx) =>
      Math.max(pre,
        n = `${n}`.slice(0, idx) +
        `${n}`.slice(idx + 1) + `${n}`.slice(idx, idx + 1)), n);

  console.log(maxRot(38458215)); // 85821534
  console.log(maxRot(195881031)); // 988103115
}
