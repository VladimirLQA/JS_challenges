// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

const multiply = (a) => {
  return (b) => {
    return a * b;
  };
};

const multiply_2 = (num1) => (num2) => num1 * num2;

const result = multiply(3)(4);
const result_2 = multiply_2(3)(4);
console.log("Result of first multiply", result);
console.log("Result of second multiply", result_2);

// Create a curry function
const curry = function (fn) {
  let startArgLength = fn.length;
  return function f1(...args) {
    if (args.length >= startArgLength) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        let newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);

console.log("CurriedSum", curriedSum(1, 2, 3));
console.log("PartiallyCurriedSum - type 1", partiallyCurriedSum(2)(3));
console.log("PartiallyCurriedSum - type 2", partiallyCurriedSum(2, 3));

// What can your curried function do ?

const get = curry((property, object) => object[property]);
console.log("Get", get("id", { id: 1 }));
const getId = get("id");
console.log("GetId", getId({ id: 1 }));

const map = curry((fn, values) => values.map(fn));
console.log("Map with getId", map(getId, [{ id: 1 }]));

const getIds = map(getId());
console.log("GetIds", getIds([{ id: 2 }]));
