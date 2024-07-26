/*
 The goal of this exercise is to convert a string to a
 new string where each character in the new string is
 "(" if that character appears only once in the original string,
 or ")" if that character appears more than once in the original
 string. Ignore capitalization when determining if a character is a duplicate.

 Examples
  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))(("
*/

{
  const duplicateEncode = (word) =>
    [...word.toLowerCase()].reduce((res, char) =>
      ([...word.toLowerCase()].filter((c) => c === char).length > 1
        ? res += ')'
        : res += '(', res), '');

  console.log(duplicateEncode('din'));
  console.log(duplicateEncode('recede'));
  console.log(duplicateEncode('Success'));
  console.log(duplicateEncode('(( @'));
}

{
  const duplicateEncode = (word) =>
    word.toLowerCase().replace(/./g, (char) =>
      word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')');

  console.log(duplicateEncode('din'));
  console.log(duplicateEncode('recede'));
  console.log(duplicateEncode('Success'));
  console.log(duplicateEncode('(( @'));
}

{
  const duplicateEncode = (word) =>
    [...word.toLowerCase()].map((char) =>
      word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')')
      .join('');

  console.log(duplicateEncode('din'));
  console.log(duplicateEncode('recede'));
  console.log(duplicateEncode('Success'));
  console.log(duplicateEncode('(( @'));
}
