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

console.log('<<<<>>>>');

{
  const isCanGetWordFromString = (str, word) => {
    if (word.length === 0) return true;
    if (str.length === 0) return false;

    const idx = str.indexOf(word[0]);
    if (idx === -1) return false;
    return isCanGetWordFromString(
      str.slice(0, idx) + str.slice(idx + 1), word.slice(1),
    );

  };

  console.log(isCanGetWordFromString(str, strTest)); // false
  console.log(isCanGetWordFromString(str2, strTest1)); // false
  console.log(isCanGetWordFromString(str, strTest3)); // false
  console.log(isCanGetWordFromString(str, strTest2)); // true
  console.log(isCanGetWordFromString(str, strTest4)); // false
}
