/*
 When provided with a letter, return its position in the alphabet.
 Input :: "a"
 Output :: "Position of alphabet: 1"
*/

{
  const getAlphabet = () =>
    Array.from({ length: 26 }, (_, idx) => String.fromCharCode(idx + 97)).join(
      '',
    );

  const position = (letter) => getAlphabet().indexOf(letter) + 1;

  console.log(position('a')); // 1
  console.log(position('z')); // 26
  console.log(position('e')); // 5
}

{
  const position = (l) => `Position of alphabet: ${l.charCodeAt(0) - 96}`;

  console.log(position('a')); // 1
  console.log(position('z')); // 26
  console.log(position('e')); // 5
}
