/*
* Your task in this kata is to implement a function that calculates
* the sum of the integers inside a string.
* For example, in the string
* "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog",
* the sum of the integers is 3635.
* Note: only positive integers will be tested.
*/
const sumOfIntegersInString = (s) =>
  s.replace(/[^\d]/g, ' ')
    .split(' ')
    .reduce((sum, number) => sum += +number, 0);


console.log(sumOfIntegersInString('12.4'));

const sumOfIntegersInString2 = (s) =>
  s.match(/\d/g)
    .reduce((sum, number) => sum += +number, 0);

console.log(sumOfIntegersInString('12.4'));
