/*
https://www.codewars.com/kata/5da9973d06119a000e604cb6/javascript
*/
{
  const countingValleys = (path) => {
    let currentPosition = 0;
    let entry = 0;

    for (const step of path) {
      const prevPosition = currentPosition;

      if (step === 'U') currentPosition += 1;
      if (step === 'D') currentPosition -= 1;

      if (prevPosition < 0 && currentPosition === 0) entry += 1;
    }

    return entry;
  };

  console.log(
    countingValleys('UFFDDFDUDFUFUUFFDDUFFDDUFFDDUDUDUDUDUDUUUUUUUUU'),
  ); // 3
}
{
  const moves = { U: 1, D: -1, F: 0 };

  const countingValleys = (path) => {
    let currentPosition = 0;
    let entry = 0;

    Array.from(path).forEach((step) => {
      currentPosition += moves[step];
      if (currentPosition === 0 && moves[step] === 1) entry += 1;
    });

    return entry;
  };

  console.log(
    countingValleys('UFFDDFDUDFUFUUFFDDUFFDDUFFDDUDUDUDUDUDUUUUUUUUU'),
  ); // 3
}
