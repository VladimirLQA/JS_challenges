/*
 Implement function that will sum numbers and log them
 sum(5)(4)(11)...
 result log -> 5 9 20
*/

const sum = (num) => {
  console.log(num);
  return (a) => sum(num + a);
};

sum(5)(4)(11);

const getSum = (num) => {
  let totalSum = num;

  const calcSum = (a) => {
    totalSum += a;
    return calcSum;
  };

  calcSum.getTotal = () => totalSum;
  return calcSum;
};

console.log(getSum(5)(4)(11).getTotal());
