const sumOfIntegersInString = (s) =>
  s.replace(/[^\d]/g, ' ')
      .split(' ')
      .reduce((sum, number) => sum += +number, 0);


console.log(sumOfIntegersInString('12.4'));

const sumOfIntegersInString2 = (s) =>
    s.match(/\d/g)
        .reduce((sum, number) => sum += +number, 0);

console.log(sumOfIntegersInString('12.4'));
