/*

*/

{
  const contamination = (text, char) => text.replace(/./g, char);

  console.log(contamination('abc', 'd')); // ddd
  console.log(contamination('', 'a')); // Empty text
  console.log(contamination('abc', '')); // Empty text
}
{
  const contamination = (text, char) => char.repeat(text.length);

  console.log(contamination('abc', 'd')); // ddd
  console.log(contamination('', 'a')); // Empty text
  console.log(contamination('abc', '')); // Empty text
}
