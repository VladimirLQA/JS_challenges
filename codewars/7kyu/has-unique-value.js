const hasUniqueValue = (str) =>
  str.split('').every((char, i, array) => array.indexOf(char) === i);

console.log(hasUniqueValue('  nAa'));
console.log(hasUniqueValue('abcdef'));
console.log(hasUniqueValue('++-'));
