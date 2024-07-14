{
  /**
   * Write a function, isItLetter or is_it_letter or IsItLetter, which tells us
   * if a given character is a letter or not.
   */
  const isItLetter = (char) =>
    'qwertyuiopasdfghjklzxcvbnm'.includes(char.toLowerCase());

  console.log(isItLetter('a'));
  console.log(isItLetter('A'));
  console.log(isItLetter('1'));
}

{
  const isItLetter = (char) => /[a-z]/i.test(char);
  console.log(isItLetter('a'));
  console.log(isItLetter('A'));
  console.log(isItLetter('1'));
}
