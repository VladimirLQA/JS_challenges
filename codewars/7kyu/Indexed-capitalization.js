/*
 Given a string and an array of integers representing indices,
 capitalize all letters at the given indices.

 For example:
  capitalize("abcdef",[1,2,5]) = "aBCdeF"
  capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
 The input will be a lowercase string with no spaces and an array of digits.
*/

{
  const capitalize = (s, arr) =>
    [...s].map((c, i) => arr.includes(i) ? c.toUpperCase() : c).join('');

  console.log(capitalize('abcdef', [1, 2, 5])); // aBCdeF
  console.log(capitalize('abcdef', [1, 2, 5, 100])); // aBCdeF
  console.log(capitalize('indexinglessons', [0])); // Indexinglessons
}

const delay = (value, callback, ms) => {
  setTimeout(() => callback(value), ms);
};

delay('1111111', console.log, 1999);

// delay(() => console.log('hello'), 1000);
