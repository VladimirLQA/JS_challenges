/**
 * Write a function that will return the count of distinct case-insensitive alphabetic characters
 * and numeric digits that occur more than once in the input string.
 * The input string can be assumed to contain only alphabets (both uppercase and lowercase)
 * and numeric digits.
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

{
  const duplicateCount = (str) => {
    let count = 0;
    const hash = [...str.toLowerCase()].reduce((hash, currItem) => {
      hash[currItem] = (hash[currItem] || 0) + 1;
      return hash;
    }, {});

    for (const item in hash) {
      if (hash[item] > 1) count++;
    }
    return count;
  };

  console.log(duplicateCount('abcde'));
  console.log(duplicateCount('aabbcde'));
  console.log(duplicateCount('aabBcde'));
  console.log(duplicateCount('indivisibility'));
  console.log(duplicateCount('Indivisibilities'));
  console.log(duplicateCount('aA11'));
  console.log(duplicateCount('ABBA'));
}
console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
{
  const duplicateCount = (text) =>
    (
      text
        .toLowerCase()
        .split('')
        .sort()
        .join('')
        .match(/([^])\1+/g) || []
    ).length;

  console.log(duplicateCount('abcde'));
  console.log(duplicateCount('aabbcde'));
  console.log(duplicateCount('aabBcde'));
  console.log(duplicateCount('indivisibility'));
  console.log(duplicateCount('Indivisibilities'));
  console.log(duplicateCount('aA11'));
  console.log(duplicateCount('ABBA'));
}
console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
{
  const duplicateCount = (text) =>
    text
      .toLowerCase()
      .split('')
      .reduce(
        (resObj, currItem) => {
          resObj[currItem] = resObj[currItem] ? resObj[currItem] + 1 : 1;
          if (resObj[currItem] === 2) resObj.count++;
          return resObj;
        },
        { count: 0 },
      ).count;

  console.log(duplicateCount('abcde'));
  console.log(duplicateCount('aabbcde'));
  console.log(duplicateCount('aabBcde'));
  console.log(duplicateCount('indivisibility'));
  console.log(duplicateCount('Indivisibilities'));
  console.log(duplicateCount('aA11'));
  console.log(duplicateCount('ABBA'));
}
