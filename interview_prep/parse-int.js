{
  const parseToInt = (value) => {
    if (typeof value !== 'string') return `TypeError: Input must be a string`;

    const strToIntObj = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    };
    let result = 0;
    let sign = 1;
    let numericPartFound = false;

    if (value[0] === '-') {
      sign = -1;
      value = value.slice(1);
    } else if (value[0] === '+') {
      value = value.slice(1);
    }

    for (let i = 0; i < value.length; i++) {
      const currentValue = value.charAt(i);
      const num = strToIntObj[currentValue];

      if (num === undefined) {
        break;
      }
      numericPartFound = true;
      result = result * 10 + num;
    }

    return numericPartFound ? result * sign : NaN;
  };

  console.log(parseToInt('10'));
  console.log(parseToInt('aaa'));
  console.log(parseToInt('11a1'));
  console.log(parseToInt('a10'));
  console.log(parseToInt('-1'));
  console.log(parseToInt(true));
  console.log(parseToInt(false));
  console.log(parseToInt(10));
}
