const people = [
  { name: 'Alice', age: 25 },
  { name: 'Alice', age: 35 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
  {},
];
people.length = 10;

const moreThan = (v) => v > 25;
const personName = (name) => name === 'Alice';

const filter = (arr, key, predicate) =>
  arr.filter((obj) => key in obj && predicate(obj[key]));

console.log(filter(people, 'age', moreThan));
console.log(filter(people, 'name', personName));

const mapper = {
  '>': (a, b) => a > b,
};

const filter1 = (arr, key, operator, value) => {
  if (!(operator in mapper)) throw new Error('Operator was not found');
  const func = mapper[operator];
  return arr.filter((obj) => key in obj && func(obj[key], value));
};

console.log(filter1(people, 'age', '>', 25));
