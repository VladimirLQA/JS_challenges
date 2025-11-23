/*
  https://www.codewars.com/kata/557226cd3554219bdf00019b/javascript
*/
{
  const fib = (num) => {
    if (num < 2) return num;

    let a = 0,
        b = 1;

    for (let i = 2; i <= num; i++) {
      const c = a + b;
      a = b;
      b = c;
    }

    return b;
  };

  console.log(fib(100)); // 354224848179262000000
}
{
  console.time('Execution time');
  const fib = (num, current = 0, next = 1) => {
    if (num === 0) return current;
    return fib(--num, next, current + next);
  };

  console.timeEnd('Execution time');
  console.log(fib(1000));
}
{
  const fib = (num) => {
    if (num < 2) return num;
    let a = 0,
        b = 1,
        c = 0;
    while (--num) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  };

  console.log(fib(100)); // 354224848179262000000
}
