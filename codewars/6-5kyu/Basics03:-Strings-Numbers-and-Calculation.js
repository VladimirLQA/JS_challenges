/*
  https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/javascript
*/
{
  const operations = {
    '/': (d1, d2) => d1 / d2,
    '*': (d1, d2) => d1 * d2,
    '+': (d1, d2) => d1 + d2,
    '-': (d1, d2) => d1 - d2,
  };

  const calculateString = (str) => {
    let num1 = '', num2 = '', operator = null;

    for (const char of str) {
      if (/[0-9.]/.test(char)) {
        if (operator === null) {
          num1 += char;
        } else {
          num2 += char;
        }
      } else if (/[+\-*/]/.test(char) && operator === null) {
        operator = char;
      }
    }

    return `${operations[operator](+num1, +num2).toFixed()}`;
  };

  console.log(calculateString(';$%§fsdfsd235??df/sdfgf5gh.000kk0000')); // 47
  console.log(calculateString('fsdfsd235???34.4554s4234df-sdfgf2g3h4j442')); // -210908
}
{
  const calculateString = (str) =>
    eval(str.replace(/[^\d+*/.()-]/g, '')).toFixed();

  console.log(calculateString(';$%§fsdfsd235??df/sdfgf5gh.000kk0000')); // 47
  console.log(calculateString('fsdfsd235???34.4554s4234df-sdfgf2g3h4j442')); // -210908
}
