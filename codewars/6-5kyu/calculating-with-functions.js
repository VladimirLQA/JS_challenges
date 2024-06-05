{
  const zero = (action) => action ? action(0) : 0;
  const one = (action) => action ? action(1) : 1;
  const two = (action) => action ? action(2) : 2;
  const three = (action) => action ? action(3) : 3;
  const four = (action) => action ? action(4) : 4;
  const five = (action) => action ? action(5) : 5;
  const six = (action) => action ? action(6) : 6;
  const seven = (action) => action ? action(7) : 7;
  const eight = (action) => action ? action(8) : 8;
  const nine = (action) => action ? action(9) : 9;

  const plus = (rightO) => (leftO) => leftO + rightO;
  const minus = (rightO) => (leftO) => leftO - rightO;
  const times = (rightO) => (leftO) => leftO * rightO;
  const dividedBy = (rightO) => (leftO) => Math.floor(leftO / rightO);

  console.log(one(plus(two())));
}

{
  const num = n => f => f ? f(n) : n;

  const zero = num(0),
        one = num(1),
        two = num(2),
        three = num(3),
        four = num(4),
        five = num(5),
        six = num(6),
        seven = num(7),
        eight = num(8),
        nine = num(9);

  const plus = a => b => a + b,
        minus = a => b => b - a,
        times = a => b => a * b,
        dividedBy = a => b => Math.floor(b / a);

  console.log(one(plus(two())));
}
