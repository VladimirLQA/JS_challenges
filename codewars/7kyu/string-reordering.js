/*
  https://www.codewars.com/kata/5b047875de4c7f9af800011b/javascript
*/

const sentence = (arrayOfObjects) =>
  arrayOfObjects
    .sort((a, b) => Object.keys(a) - Object.keys(b))
    .flatMap(Object.values)
    .join(' ');

console.log(sentence([ { '3': 'vatsan!' }, { '2': 'love' }, { '1': 'I' } ])); // I love vatsan!
console.log(sentence([ { '0': 'Wars' }, { '-1': 'Code' } ])); // Code Wars
