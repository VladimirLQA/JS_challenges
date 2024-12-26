/*
 Given a mixed array of number and string representations of integers,
 add up the non-string integers and subtract the total of the string integers.
 Return as a number.
*/
{
  const divCon = (x) =>
    x.reduce((acc, el) => typeof el === 'number'
      ? acc += el
      : acc -= +el, 0);

  console.log(divCon([9, 3, '7', '3'])); // 2
  console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 13
}
