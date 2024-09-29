/*
 Step 1: Create a function called encode() to replace all
 the lowercase vowels in a given string with numbers according to the following pattern:
  a -> 1; e -> 2; i -> 3; o -> 4; u -> 5
 Step 2: Now create a function called decode() to
 turn the numbers back into vowels according to the same pattern shown above.
*/

{
  const mapVowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  const mapNumbers = Object.fromEntries(
    Object.entries(mapVowels)
      .map(([key, value]) => [value, key]),
  );

  const encode = (string) =>
    [...string].map((char) => mapVowels[char] || char).join('');

  console.log(encode('hello'));

  const decode = (string) =>
    [...string].map((char) => mapNumbers[char] || char).join('');

  console.log(decode('h2ll4'));
}
{
  const encode = (string) =>
    string.replace(/[aeiou]/g, (c) => '_aeiou'.indexOf(c));

  console.log(encode('hello'));

  const decode = (string) =>
    string.replace(/[1-5]/g, (c) => '_aeiou'.charAt(c));

  console.log(decode('h2ll4'));
}
