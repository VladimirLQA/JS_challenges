/*
  https://www.codewars.com/kata/55c098aa8468f3b9030000f1/javascript
*/

{
  const move_zeros = (arrNum, isRight = true) => {
    let zerosCount = 0;
    const arrWithoutZeros = arrNum.filter((n) => {
      if (n === 0) {
        zerosCount++;
        return false;
      } else {
        return true;
      }
    });

    const zeroesArr = Array(zerosCount).fill(0);

    return isRight
      ? [...arrWithoutZeros, ...zeroesArr]
      : [...zeroesArr, ...arrWithoutZeros];
  };

  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true));
  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false));
}
{
  const move_zeros = (arrNum, isRight = true) => {
    const zeroes = arrNum.filter((i) => i === 0);
    const nonZeroes = arrNum.filter((i) => i !== 0);

    return isRight
      ? nonZeroes.concat(zeroes)
      : zeroes.concat(nonZeroes);
  };
  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true));
  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false));
}
{
  const move_zeros = (arrNum, isRight = true) =>
    [...arrNum.filter((val) => !!val === isRight),
      ...arrNum.filter((val) => !!val !== isRight)];

  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true));
  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false));
}
