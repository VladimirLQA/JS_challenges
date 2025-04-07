/*
  https://www.codewars.com/kata/5772ded6914da62b4b0000f8/javascript
*/

const isPalindrome = (str) =>  str === str.split('').reverse().join('');
{
  const palindromePairs = (words) => {
    const result = [];
    words = words.map((w) => String(w));

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (i !== j) {
          if (isPalindrome(words[i] + words[j])) {
            result.push([i, j]);
          }
        }
      }
    }

    return result;
  };

  console.log(palindromePairs(['bat', 'tab', 'cat'])); // [[0, 1], [1, 0]]
  console.log(palindromePairs(['dog', 'cow', 'tap', 'god', 'pat'])); // [[0, 3], [2, 4], [3, 0], [4, 2]]
}
{
  const palindromePairs = (words) =>
    words.map(String)
      .reduce((pre, val, idx) =>
        [...pre,
          ...words.reduce((p, v, i) =>
            i !== idx && isPalindrome(val + v)
              ? [...p, [idx, i]]
              : p, [])],
      []);

  console.log(palindromePairs(['bat', 'tab', 'cat'])); // [[0, 1], [1, 0]]
  console.log(palindromePairs(['dog', 'cow', 'tap', 'god', 'pat'])); // [[0, 3], [2, 4], [3, 0], [4, 2]]
}
