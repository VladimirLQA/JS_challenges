/*
    Given a string consisting of lowercase letters, write a function that counts
    the occurrences of consecutive repeating characters and returns an array of pairs,
    where each pair contains the character and its count.
*/

const testStr = 'aaaabbbcca';
const testStr2 = 'abc';

const countConsequent = (str) => {
  if (!str || !str.trim()) return [];

  let count = 1;
  return [...str].reduce((obj, char, i, arr) => {
    if (char === arr[i + 1]) {
      count++;
    } else {
      obj.push([char, count]);
      count = 1;
    }
    return obj;
  }, []);
};

console.log(countConsequent(testStr)); // [ [ 'a', 4 ], [ 'b', 3 ], [ 'c', 2 ], [ 'a', 1 ] ]
console.log(countConsequent(testStr2)); // [ [ 'a', 1 ], [ 'b', 1 ], [ 'c', 1 ] ]
console.log(countConsequent('     ')); // []
