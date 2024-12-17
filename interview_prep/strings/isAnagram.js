{
  const isAnagram = (str, testStr) =>
    ![...testStr.toLowerCase()].reduce((acc, char) => {
      const idx = acc.indexOf(char);
      if (idx >= 0) return acc.slice(0, idx) + acc.slice(idx + 1);
      return acc;
    }, str.toLowerCase()).length;

  console.log(isAnagram('finder', 'Friend'));
  console.log(isAnagram('finder', 'hello'));
}
{
  const isAnagram = (str, testStr) => {
    if (str.length !== testStr.length) return false;

    const map = {};
    for (const char of str.toLowerCase()) {
      map[char] = (map[char] || 0) + 1;
    }

    for (const char of testStr.toLowerCase()) {
      if (!map[char]) return false;
      map[char]--;
    }

    return true;
  };

  console.log(isAnagram('finder', 'Friend'));
  console.log(isAnagram('finder', 'hello'));
}
