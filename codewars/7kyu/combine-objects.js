/* eslint-disable no-return-assign */
/*
  https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/javascript
*/

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
{
  const combine = (...objects) =>
    objects.reduce((result, currentObj) => {

      for (const [key, value] of Object.entries(currentObj)) {
        result[key] = (result[key] ?? 0) + value;
      }

      return result;

    }, {});

  console.log(combine(objA, objB, objC));
}
{
  const combine = (...args) =>
    args.reduce((pre, val) =>
      (Object.keys(val)
        .forEach((key) => pre[key] = (pre[key] || 0) + val[key]), pre), {});

  console.log(combine(objA, objB, objC));
}
