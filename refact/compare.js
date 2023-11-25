// Compare two dictionaries

const compare = (first_dictionary, second_dictionary) => {
    let keysFirstDictionary = Object.keys(first_dictionary);
    let keysSecondDictionary = Object.keys(second_dictionary);
    if(keysFirstDictionary.length !== keysSecondDictionary)
    return false;

    if (a.join('-') !== b.join('-')) return false;

    for (let key of keysFirstDictionary ) {
      if (first_dictionary[c] === second_dictionary[c]) result = true;
      else result = false
    }
    return result;
}

console.log(compare({ a: 1, c: 'hello' }, { b: 1, c: 'hello' })) // false

  
//   const test = require('../test.js');

//   const cases = [
//     [[{ a: 1, c: 'hello' }, { a: 1, c: 'hello' }], true],
//     [[{ a: 1, c: 'hello' }, { a: 2, c: 'hello' }], false],
//     [[{ a: 2, c: 'hello' }, { a: 1, c: 'hello' }], false],
//     [[{ a: 1, c: 'helo' }, { a: 1, c: 'hello' }], false],
//     [[{ a: 1, c: 'hello' }, { a: 1, c: 'helo' }], false],
//     [[{ c: 'hello', a: 1 }, { a: 1, c: 'hello' }], false],
//     [[{ a: 1, c: 'hello' }, { c: 'hello', a: 1 }], false],
//   ];