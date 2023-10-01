/*
 * Напишите функцию, которая определяет уникальны ли все символы в строке.
 * Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
 * Input: String
 * Output: Boolean
 * */

function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (string.lastIndexOf(char) !== i) {
      return false;
    }
  }
  return true;
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false

// second option ------------------

function isUnique(string) {
  const set = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (set.has(char)) {
      return false;
    }
    set.add(char);
  }
  return true;
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false

// third option -----------------

function isUnique(string) {
  return (new Set(string).size = string.length);
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false
