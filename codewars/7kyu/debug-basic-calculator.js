/*
https://www.codewars.com/kata/56368f37d464c0a43c00007f/javascript
*/
{
  const signMapper = {
    '/': (a, b) => (b === 0 ? null : a / b),
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const calculate = (a, sign, b) => {
    if (!(sign in signMapper)) return null;
    return signMapper[sign](a, b);
  };

  console.log(calculate(1, '+', 2));
  console.log(calculate(4, '/', 2));
  console.log(calculate(4, '*', 2));
  console.log(calculate(3, '*', 2));
  console.log(calculate(1, 'm', 2));
}
{
  const calculate = (a, o, b) =>
    o === `+`
      ? a + b
      : o === `-`
        ? a - b
        : o === `*`
          ? a * b
          : o === `/` && b
            ? a / b
            : null;

  console.log(calculate(1, '+', 2));
  console.log(calculate(4, '/', 2));
  console.log(calculate(4, '*', 2));
  console.log(calculate(3, '*', 2));
  console.log(calculate(1, 'm', 2));
}
