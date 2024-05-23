const str = 'мадагаскар';
const str2 = 'мадгскр';
const strTest = 'гамаааак';
const strTest1 = 'гамак';
const strTest2 = 'маска';
const strTest3 = 'карта';
const strTest4 = 'скала';

const isCanGetWordFromString = (str, word) => {
  const wChars = [...word];
  [...str].forEach((sChar) => {
    const i = wChars.indexOf(sChar);
    if (i !== -1) wChars.splice(i, 1);
  });
  return !wChars.length;
};

console.log(isCanGetWordFromString(str, strTest)); // false
console.log(isCanGetWordFromString(str2, strTest1)); // false
console.log(isCanGetWordFromString(str, strTest3)); // false
console.log(isCanGetWordFromString(str, strTest2)); // true
console.log(isCanGetWordFromString(str, strTest4)); // false
