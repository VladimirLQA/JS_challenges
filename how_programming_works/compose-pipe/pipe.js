const pipe = (...fns) => {
  for (const func of fns) {
    if (func !== 'function') {
      throw new Error(`All compose arguments should be functions`);
    }

    return (x) => fns.reduce((v, f) => f(v), x);
  }
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

{
  const f = pipe(inc, twice, cube);
  const x = f(5);
  if (x !== 1728) throw new Error(`Expected 1728 instead of ${x}`);
}
{
  const f = pipe(inc, inc);
  const x = f(7);
  if (x !== 9) throw new Error(`Expected 9 instead of ${x}`);
}
{
  let catched = false;
  try {
    pipe(7, 3);
  } catch (err) {
    catched = true;
  }
  if (!catched) throw new Error(`Function pipe should throw`);
}
