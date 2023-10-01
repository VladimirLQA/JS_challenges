/*
 * Напишите функцию, которая принимает массив строк и
 * возвращает самую частовстречающуюся строку в этом массиве.
 * Если таких строк несколько, то нужно вернуть первую, идя слева на право.
 * Input: String[]
 * Output: String
 */

function highestFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqString = array[0];

  for (let i = 0; i < array.length; i++) {
    const char = array[i];

    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }

    if (map[char] > maxFreq) {
      maxFreq = map[char];
      maxFreqString = char;
    }
  }
  return maxFreqString;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(highestFrequency(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"])); // -> ghi
