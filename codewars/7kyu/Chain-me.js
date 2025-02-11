/*
  https://www.codewars.com/kata/54fb853b2c8785dd5e000957
*/

function add(x) {
  return x + 10;
}

function mul(x) {
  return x * 30;
}
{
  const chain = (input, fs) => fs.reduce((acc, fn) => fn(acc), input);

  console.log(chain(2, [add, mul]));
}
