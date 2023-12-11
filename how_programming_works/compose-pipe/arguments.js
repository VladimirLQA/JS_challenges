'use strict';

// TODO compose invokes funcs from right to left
const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

// TODO pipe invokes funcs from left to right
const pipe =
  (f, g) =>
  (...args) =>
    g(f(...args));

// Usage

const upperFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = (s) => s.split(' ').map(upperFirst).join(' ');
const lower = (s) => s.toLowerCase();

const s = 'MARCUS AURELIUS';
console.log(s);
console.log(`lower('${s}') = '${lower(s)}'`);
console.log(`upperCapital('${s}') = '${upperCapital(s)}'`);

{
  console.log('Use compose');
  const capitalize = compose(upperCapital, lower);
  console.log(`capitalize('${s}') = '${capitalize(s)}'`);
}
{
  console.log('Use pipe');
  const capitalize = pipe(lower, upperCapital);
  console.log(`capitalize('${s}') = '${capitalize(s)}'`);
}
