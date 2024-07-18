/*
 Given two integers a and b, which can be positive or negative,
 find the sum of all the integers between and including them
 and return it. If the two numbers are equal return a or b.

 Note: a and b are not ordered!
*/
{
  const getSum = (a, b) => {
    if (a === b) return a;
    let sum = 0;
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  };
  console.log(getSum(0, -1));
  console.log(getSum(2, 2));
}

{
  const arrayRange = (start, stop, step = 1) => {
    if (start > stop) step = -step;
    return Array.from(
      { length: Math.abs((stop - start) / step) + 1 },
      (_, index) => start + index * step);
  };

  const getSum = (a, b) => {
    if (a === b) return a;
    return arrayRange(a, b).reduce((res, num) => res += num, 0);
  };

  console.log(getSum(0, -1));
  console.log(getSum(2, 2));
}

{
  const getSum = (a, b) => {
    if (a === b) return a;
    else if (a < b) return a + getSum(a + 1, b);
    else return a + getSum(a - 1, b);
  };

  console.log(getSum(0, -1));
  console.log(getSum(2, 2));
}
