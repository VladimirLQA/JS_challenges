/*
 Given a string str, reverse it and omit all non-alphabetic characters.
 Example
  For str = "krishan", the output should be "nahsirk".
  For str = "ultr53o?n", the output should be "nortlu".
*/
{
  const reverseLetter = (str) =>
    [...str].reverse()
      .filter((char) => /[a-z]/gi.test(char))
      .join('');

  console.log(reverseLetter('ultr53o?n'));
}

{
  const reverseLetter = (str) => str.match(/[a-z]/gi).reverse().join('');
  console.log(reverseLetter('ultr53o?n'));
}
