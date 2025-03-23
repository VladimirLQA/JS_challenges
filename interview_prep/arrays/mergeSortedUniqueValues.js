/* eslint-disable no-return-assign */
/*
  Write a function or a sequence of operations that returns a result satisfying the following conditions:
  - The result is a string consisting of concatenated value elements from the collection, with their characters reversed.
  - Only non-expired records are included, and they are concatenated in ascending order.
  - The result does not contain duplicate characters.
*/
const input = [
  { value: 'abcd', order: 4, expired: false },
  { value: 'qwer', order: 2, expired: true },
  { value: 'xyz1', order: 1, expired: false },
  { value: 'abx2', order: 3, expired: false },
];

const getUniqueReversed = (str, compareString) =>
  [...str].reverse().filter((char) =>
    !compareString.toLowerCase().includes(char.toLowerCase())).join('');

const mergeSortedUniqueValues = (arr) =>
  arr.filter(({ expired }) => !expired)
    .sort(({ order: aOrder }, { order: bOrder }) => aOrder - bOrder)
    .reduce((mergedString, { value }) =>
      (mergedString += getUniqueReversed(value, mergedString),
      mergedString), '');

console.log(mergeSortedUniqueValues(input));
