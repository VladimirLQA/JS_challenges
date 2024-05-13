const reverseString = (str) =>
  str.split('').reverse().join('');

const reverseString2 = (str) => [...str].reverse().join('');

const reverseString3 = (str) =>
  str.length
    ? reverseString3(str.substring(1)) + str.charAt(0)
    : '';

console.log(reverseString('world'));
console.log(reverseString2('world'));
console.log(reverseString3('world'));
