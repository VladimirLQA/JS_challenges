/*
 Consider the string "adfa" and the following rules:
  a) each character MUST be changed either to the one before or the one after in alphabet.
  b) "a" can only be changed to "b" and "z" to "y".

 From our string, we get:
  "adfa" -> ["begb","beeb","bcgb","bceb"]

 Here is another example:
  "bd" -> ["ae","ac","ce","cc"]

 --We see that in each example, one of the outcomes
 is a palindrome. That is, "beeb" and "cc".
 You will be given a lowercase string and your task is to
 return True if at least one of the outcomes is a palindrome or False otherwise.
*/

{
  const isPalindrome = (s) =>
    s.toLowerCase() === [...s.toLowerCase()].reverse().join('');

  const generateTransformations = (s) => {
    const results = [''];

    for (const char of s) {
      const nextResults = [];
      const prevChar = String.fromCharCode(char.charCodeAt(0) - 1);
      const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);

      for (const result of results) {
        if (char === 'a') {
          nextResults.push(result + 'b');
        } else if (char === 'z') {
          nextResults.push(result + 'y');
        } else {
          nextResults.push(result + prevChar);
          nextResults.push(result + nextChar);
        }
      }
      results.splice(0, results.length, ...nextResults);
    }
    return results;
  };

  const canTransformToPalindrome = (s) => {
    const transformations = generateTransformations(s);
    return transformations.some(isPalindrome);
  };

  console.log(canTransformToPalindrome('adfa')); // true
  console.log(canTransformToPalindrome('abaazaba')); // false
}

{
  const canTransformToPalindrome = (s) => {
    const n = s.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
      const leftChar = s[i];
      const rightChar = s[n - 1 - i];

      // If the characters are already the same, no transformation needed
      if (leftChar === rightChar) {
        continue;
      }

      // Check if one character can be transformed into the other
      const leftCode = leftChar.charCodeAt(0);
      const rightCode = rightChar.charCodeAt(0);

      // Check if they can match by transforming
      if (
        !(
          leftCode === rightCode || // Already the same
          leftCode === rightCode + 2 || // Two steps apart can transform to the same
          leftCode === rightCode - 2
        )
      ) {
        return false;
      }
    }
    return true;
  };

  console.log(canTransformToPalindrome('adfa')); // true
  console.log(canTransformToPalindrome('abaazaba')); // false
}
