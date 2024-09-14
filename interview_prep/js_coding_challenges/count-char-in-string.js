/*
 Write a function called 'countChar' that takes two
 parameters: a string and a character to count. The function
 should return the number of times the specified character
 appears in the string.
*/

{
  const countChar = (str, charToCount) =>
    [...str.toLowerCase()].reduce((count, char) =>
      char === charToCount.toLowerCase() ? ++count : count, 0);

  console.log(countChar('MissIssippi', 'I')); // 4
}
