/*
 Write a function 'findLongestWord' that takes a string as input
 and returns the longest  word in the string. Return the first
 encountered.
*/

{
  const findLongestWord = (str) =>
    str.split(' ').reduce((longestWord, currentWord) =>
      currentWord.length > longestWord.length
        ? (longestWord = currentWord)
        : longestWord,
    '',
    );

  console.log(findLongestWord('Watch technical javascript on youtube'));
  console.log(findLongestWord('Watch1 Watch2'));
}
