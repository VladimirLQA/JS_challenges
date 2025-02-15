const gen = (num, w) => (n) => (n % num === 0 ? w : '');
const fizz = gen(3, 'Fizz');
const buzz = gen(5, 'Buzz');

[...Array.from({ length: 100 }, (_, i) => i + 1)].forEach((num) =>
  console.log(fizz(num) + buzz(num) || num),
);
