// Compare two dictionaries

{
  // For first lvl keys
  const compare = (first_dictionary, second_dictionary) => {
    const keysFirstDictionary = Object.keys(first_dictionary);
    const keysSecondDictionary = Object.keys(second_dictionary);

    if (keysFirstDictionary.length !== keysSecondDictionary.length) {
      return false;
    }

    if (keysFirstDictionary.join('-') !== keysSecondDictionary.join('-')) {
      return false;
    }

    for (const key of keysFirstDictionary) {
      if (
        !second_dictionary.hasOwnProperty(key) ||
        first_dictionary[key] !== second_dictionary[key]
      ) {
        return false;
      }
    }

    return true;
  };

  console.log(compare({ a: 1, c: 'hello' }, { c: 'hello', a: 1 })); // false
}

{
  // For nested comparison
  const compareValues = (value1, value2) => {
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return compare(value1, value2);
    }
    return value1 === value2;
  };

  const compare = (first_dictionary, second_dictionary) => {
    const keysFirstDict = Object.keys(first_dictionary);
    const keysSecondDict = Object.keys(second_dictionary);

    if (keysFirstDict.length !== keysSecondDict.length) return false;

    if (keysFirstDict.join('-') !== keysSecondDict.join('-')) return false;

    for (const key of keysFirstDict) {
      if (
        !second_dictionary.hasOwnProperty(key) ||
        !compareValues(first_dictionary[key], second_dictionary[key])
      ) {
        return false;
      }
    }

    return true;
  };

  console.log(
    compare({ a: 1, c: { nested: 'hello' } }, { a: 2, c: { nested: 'hello' } }),
  ); // false
}
