/*
 Create a function called shortcut to remove the
 lowercase vowels (a, e, i, o, u ) in a given string.
*/

{
  const shortcut = (string) => string.replace(/[aeiou]/g, '');

  console.log(shortcut('hello'));
  console.log(shortcut('how are you today?'));
  console.log(shortcut('complain'));
  console.log(shortcut('never'));
}

{
  const shortcut = (string) =>
    string
      .toLowerCase()
      .split('')
      .filter((char) => !'aeiou'.includes(char))
      .join('');

  console.log(shortcut('hello'));
  console.log(shortcut('how are you today?'));
  console.log(shortcut('complain'));
  console.log(shortcut('never'));
}
