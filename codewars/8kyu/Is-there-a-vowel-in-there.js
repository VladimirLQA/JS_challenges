{
  const generateCharCodes = (values) =>
    values.split('').map((v) => v.charCodeAt(0));

  const charCodes = generateCharCodes('aeiou');
  const isVow = (a) =>
    a.map((n) => (charCodes.includes(n) ? String.fromCharCode(n) : n));

  console.log(
    isVow([
      118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
      120, 106,
    ]),
  ); // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
}

{
  const isVow = (a) =>
    a.map((x) =>
      ['a', 'e', 'i', 'o', 'u'].includes((v = String.fromCharCode(x))) ? v : x,
    );

  console.log(
    isVow([
      118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
      120, 106,
    ]),
  ); // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
}
