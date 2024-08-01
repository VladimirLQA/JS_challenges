{
  const isAnagram = (test, original) =>
    test.length === original.length &&
    [...test.toLowerCase()].sort().join('') ===
      [...original.toLowerCase()].sort().join('');

  console.log(isAnagram('foefet', 'toffee')); // true
  console.log(isAnagram('Buckethead', 'DeathCubeK')); // true
  console.log(isAnagram('dumble', 'bumble')); // false
}

{
  const isAnagram = (test, original) => {
    const t = [...test.toLowerCase()];

    for (const char of [...original.toLowerCase()]) {
      const idx = t.indexOf(char);
      if (idx !== -1) t.splice(idx, 1);
      else return false;
    }
    return t.length === 0;
  };

  console.log(isAnagram('foefet', 'toffee')); // true
  console.log(isAnagram('Buckethead', 'DeathCubeK')); // true
  console.log(isAnagram('dumble', 'bumble')); // false
}

{
  const count = (str) =>
    [...str.toLowerCase()].reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

  const isAnagram = (test, original) => {
    if (test.length !== original.length) return false;

    const testCount = count(test);
    const originalCount = count(original);

    return Object.keys(testCount).every(
      (char) => testCount[char] === originalCount[char],
    );
  };

  console.log(isAnagram('foefet', 'toffee')); // true
  console.log(isAnagram('Buckethead', 'DeathCubeK')); // true
  console.log(isAnagram('dumble', 'bumble')); // false
}
