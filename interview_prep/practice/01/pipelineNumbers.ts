const pipe = <T extends number>(...fns: Function[]) => (input: T) =>
  fns.reduce((acc, fn) => fn(acc), input);

const add10 = (x: number) => x + 10;
const multiply2 = (x: number) => x * 2;

const remainderOf = (x: number, y: number) => x % y;
const remainderOf7 = (x: number) => remainderOf(x, 7);

const customToFixed = (x: number, y: number) => x.toFixed(y);
const toFixed2 = (x: number) => customToFixed(x, 2);

const pipelineNumbers = pipe(add10, multiply2, remainderOf7, toFixed2);

console.log(pipelineNumbers(7));
