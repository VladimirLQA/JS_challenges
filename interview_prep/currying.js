// Write a function which helps to achieve
// multiply(a)(b) and returns product of a and b

const multiply = (a) => (b) => a * b;

const result = multiply(3)(4);
console.log('Result of first multiply', result);

// Create a curry function
const curry = (fn) => {
  const startArgLength = fn.length;
  return function f1(...args) {
    if (args.length >= startArgLength) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        const newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);

console.log('CurriedSum', curriedSum(1, 2, 3));
console.log('PartiallyCurriedSum - type 1', partiallyCurriedSum(2)(3));
console.log('PartiallyCurriedSum - type 2', partiallyCurriedSum(2, 3));

// What can your curried function do ?

const get = curry((property, object) => object[property]);
console.log('Get', get('id', { id: 1 }));
const getId = get('id');
console.log('GetId', getId({ id: 1 }));

const map = curry((fn, values) => values.map(fn));
console.log('Map with getId', map(getId, [{ id: 1 }]));

const getIds = map(getId());
console.log('GetIds', getIds([{ id: 2 }]));

{
  const curry =
    (fn, length = fn.length) =>
      (...args) => {
        if (args.length < length) {
          return curry(
            (...moreArgs) => fn(...args, ...moreArgs),
            length - args.length,
          );
        }
        return fn(...args);
      };

  const sum = (a, b, c) => a + b + c;
  const curriedSum = curry(sum);
  const partiallyCurriedSum = curriedSum(3);

  console.log(curriedSum(1)(2, 3));
  console.log(curriedSum(1, 2)(3));
  console.log(partiallyCurriedSum(2)(3));
  console.log(partiallyCurriedSum(3, 3));
}
{
  const curry = (fn) => (...args) => {
    if (fn.length > args.length) {
      const f = fn.bind(null, ...args);
      return curry(f);
    } else {
      return fn(...args);
    }
  };

  const sum = (a, b, c) => a + b + c;
  const curriedSum = curry(sum);
  const partiallyCurriedSum = curriedSum(3);

  console.log(curriedSum(1)(2, 3));
  console.log(curriedSum(1, 2)(3));
  console.log(partiallyCurriedSum(2)(3));
  console.log(partiallyCurriedSum(3, 3));
}
{
  const curry = (fn, ...par) => {
    const curried = (...args) => (
      fn.length > args.length
        ? curry(fn.bind(null, ...args))
        : fn(...args)
    );

    return par.length ? curried(...par) : curried;
  };

  const sum = (a, b, c) => a + b + c;
  const curriedSum = curry(sum);
  const curriedSumWithPar = curry(sum, 2);
  const partiallyCurriedSum = curriedSum(3);

  console.log(curriedSum(1)(2, 3));
  console.log(curriedSum(1, 2)(3));
  console.log(partiallyCurriedSum(2)(3));
  console.log(partiallyCurriedSum(3, 3));
  console.log(curriedSumWithPar(2)(3));
}
