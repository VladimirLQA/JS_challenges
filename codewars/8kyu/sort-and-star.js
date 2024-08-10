/*
 You will be given a list of strings. You must sort
 it alphabetically (case-sensitive, and based on the ASCII
 values of the chars) and then return the first value.
 The returned value must be a string, and have "***" between each of its letters.
 You should not remove or add elements from/to the array.
*/
{
  const sortStrings = (a, b) => a > b ? 1 : b > a ? -1 : 0;

  const twoSort = (s) =>
    [...s.sort(sortStrings)[0]]
      .map((c, i, a) => i !== a.length - 1 ? `${c}***` : c).join('');

  console.log(twoSort(['bitcoin', 'take', 'over', 'the',
    'world', 'maybe', 'who', 'knows', 'perhaps'])); // b***i***t***c***o***i***n

  console.log(twoSort(['turns', 'out', 'random', 'test', 'cases', 'are',
    'easier', 'than', 'writing', 'out', 'basic', 'ones'])); // a***r***e
}
{
  const twoSort = (s) => s.sort()[0].split('').join('***');

  console.log(twoSort(['bitcoin', 'take', 'over', 'the',
    'world', 'maybe', 'who', 'knows', 'perhaps'])); // b***i***t***c***o***i***n

  console.log(twoSort(['turns', 'out', 'random', 'test', 'cases', 'are',
    'easier', 'than', 'writing', 'out', 'basic', 'ones'])); // a***r***e
}
