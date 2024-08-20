/*
 Given a string "abc" and assuming that each letter in the string has
 a value equal to its position in the alphabet,
 our string will have a value of 1 + 2 + 3 = 6.
 This means that: a = 1, b = 2, c = 3 ....z = 26.

 You will be given a list of strings and your task will
 be to return the values of the strings as explained above
 multiplied by the position of that string in the list.
 For our purpose, position begins with 1.

 nameValue ["abc","abc abc"] should return [6,24]
 because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

 "abc" has a value of 6, while "abc abc" has a value of 12.
 Now, the value at position 1 is multiplied by 1 while
 the value at position 2 is multiplied by 2.

 Input will only contain lowercase characters and spaces.
*/

{
  const getAlphabet = () =>
    Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));

  const alphabet = getAlphabet();

  const wordValue = (a) =>
    a.map((w, idx) =>
      w.toLowerCase().split('').map((c) => alphabet.indexOf(c) + 1)
        .reduce((a, b) => a += b, 0) * (idx + 1));

  console.log(wordValue(['codewars', 'abc', 'xyz'])); // [88,12,225]
  console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc'])); // [12,24,18,24]
}
{
  const wordValue = (a) =>
    a.map((val, idx) => (val.match(/\w/g) || [])
      .reduce((pre, val) => pre + val.charCodeAt() - 96, 0) * ++idx);

  console.log(wordValue(['codewars', 'abc', 'xyz'])); // [88,12,225]
  console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc'])); // [12,24,18,24]
}
