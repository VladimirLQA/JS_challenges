const isSimilar = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr2.filter((el) => arr1.indexOf(el) === -1).length === 0;
};

console.log(isSimilar([0, 1, 2], [2, 1, 0])); // true
console.log(isSimilar([0, 1], [2, 1, 0])); // false
console.log(isSimilar([0, 1, 3], [2, 1, 0])); // false
console.log(isSimilar([0, 1, 2, 2], [2, 1, 2, 0])); // true

console.log(`<<<<<>>>>>`);

const isSimilar2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return [...arr1].sort().every((el, idx) => el === [...arr2].sort()[idx]);
};

console.log(isSimilar2([0, 1, 2], [2, 1, 0])); // true
console.log(isSimilar2([0, 1], [2, 1, 0])); // false
console.log(isSimilar2([0, 1, 3], [2, 1, 0])); // false
console.log(isSimilar2([0, 1, 2, 2], [2, 1, 2, 0])); // true
