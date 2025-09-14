const words: string[] = [
  'apple',
  'banana',
  'kiwi',
  'Avocado',
  'grape',
  'pear',
  'melon',
  'plum',
  'MaNgo',
];

const toLowerCase = (word: string): string => word.toLowerCase();
const minLength = (word: string, minLength: number): boolean =>
  word.length >= minLength;
const containsSubstring = (word: string, substring: string): boolean =>
  toLowerCase(word).includes(toLowerCase(substring));
const filterWord = (
  word: string,
  subString: string,
  length: number,
): boolean => minLength(word, length) && containsSubstring(word, subString);

const getWordsWith = (
  array: string[],
  subString: string,
  length: number,
): string[] =>
  array.filter((word) => filterWord(word, subString, length));

console.log(getWordsWith(words, 'an', 5));
