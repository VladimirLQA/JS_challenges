const romanToIntegers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

{
  const romanToInt = (str) => {
    let total = 0;

    for (let i = 0; i < str.length; i++) {
      const curr = str[i];
      const next = str[i + 1];

      if (romanToIntegers[curr] < romanToIntegers[next]) {
        total -= romanToIntegers[curr];
      } else {
        total += romanToIntegers[curr];
      }
    }

    return total;
  };

  console.log(romanToInt('MCMXCIV'));
}

{
  const romanToInt = (str) => str.split('').reduce((total, curr, idx) => {
    const next = str[idx + 1];

    if (romanToIntegers[curr] < romanToIntegers[next]) {
      total -= romanToIntegers[curr];
    } else {
      total += romanToIntegers[curr];
    }
    return total;
  }, 0);

  console.log(romanToInt('MCMXCIV'));
}
