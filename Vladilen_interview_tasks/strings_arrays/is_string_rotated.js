/*
 * Напишите функцию, которая принимает 2 строки.
 * Верните `true` если строки являются перевернутым
 * вариантом друг друга. Иначе верните `false`.
 * Input: String, String
 * Output: Boolean
 */

function isStringRotated(source, test) {
  if (source.length !== test.length) {
    return false;
  }

  for (let i = 0; i < source.length; i++) {
    const rotate = source.slice(i, source.length) + source.slice(0, i);

    if (rotate === test) {
      return true;
    }
  }
  return false;
}

console.log(isStringRotated("javascript", "scriptjava")); // -> true
console.log(isStringRotated("javascript", "iptjavascr")); // -> true
console.log(isStringRotated("javascript", "java")); // -> false

// second option

function isStringRotated(source, test) {
  return (source + source).includes(test) && source.length === test.length;
}

console.log(isStringRotated("javascript", "scriptjava")); // -> true
console.log(isStringRotated("javascript", "iptjavascr")); // -> true
console.log(isStringRotated("javascript", "java")); // -> false
