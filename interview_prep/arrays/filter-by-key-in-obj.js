const people = [
  { name: 'Alice', age: 25 },
  { name: 'Alice', age: 35 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
  {},
];

const numberMoreThan25 = (v) => v > 25;
const personNameEqualsToAlice = (name) => name === 'Alice';

const filter = (arr, key, predicate) =>
  arr.filter((obj) => key in obj && predicate(obj[key]));

console.log(filter(people, 'age', numberMoreThan25));
console.log(filter(people, 'name', personNameEqualsToAlice));

const mapper = {
  '>': (a, b) => a > b,
};

const keysOfPersonObject = ['age', 'name'];

const filterWithMapping = (arr, key, operator, value) => {
  if (!keysOfPersonObject.includes(key)) {
    throw new Error(`Key ${key} does not exist in person object`);
  }
  if (!(operator in mapper)) {
    throw new Error('Comparision operator was not found');
  }
  const func = mapper[operator];
  return arr.filter((obj) => key in obj && func(obj[key], value));
};

console.log(filterWithMapping(people, 'age', '>', 25));
console.log(filterWithMapping(people, 'isAdmin', '>', 25));
