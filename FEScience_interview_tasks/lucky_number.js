const num = 12233555554444;

const getLuckyNum = (number) => {
  let luckyNumber = 0;

  const hash = [...number.toString()].reduce((acc, currEl) => {
    acc[currEl] = (acc[currEl] || 0) + 1;
    return acc;
  }, {});

  for (const key in hash) {
    if (hash[key] === +key) luckyNumber = key;
  }

  return luckyNumber;
};

console.log(getLuckyNum(num));
