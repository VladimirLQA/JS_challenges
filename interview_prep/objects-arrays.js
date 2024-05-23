/*
  Create a function that will group student by age.
  As a return value we will get and object, key equals age,
  value equals array of students.
*/

const test = [
  { name: 'alex', age: 20 },
  { name: 'oleg', age: 24 },
  { name: 'roman', age: 20 },
  { name: 'ivan', age: 21 },
];

const groupByAge = (arr) =>
  arr.reduce((group, student) => {
    group[student.age]
      ? group[student.age].push(student)
      : group[student.age] = [student];
    return group;
  }, {});

console.log(groupByAge(test));

const numbers = [3, 5, 4, -8, -1, 0, 11];
const s = 10;
const getArgumentsOfSum = (arr, sum) => {
  const result = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const tempSum = arr[i] + arr[j];
      if (tempSum === sum) result.push(arr[i], arr[j]);
    }
  }
  return result.length ? result : [];
};

console.log(getArgumentsOfSum(numbers, s)); // [-1, 11]

const getArgumentsOfSum2 = (arr, sum) => {
  const hash = new Set();
  const result = [];

  for (const number of arr) {
    const complement = sum - number;
    if (hash.has(complement)) {
      result.push(complement, number);
    }
    hash.add(number);
  }
  return result.length ? result : [];
};

console.log(getArgumentsOfSum2(numbers, s)); // [-1, 11]

const friends = [
  { name: 'aaa', pizzas: ['1111', '2222'] },
  { name: 'bbb', pizzas: ['333', '4444'] },
  { name: 'aaa', pizzas: ['5555'] },
  { name: 'aaa', pizzas: ['6666'] },
];

const getPizzasArray = (arr) =>
  arr.reduce((favoritePizzas, friend) =>
    [...favoritePizzas, ...friend.pizzas], []);

console.log(getPizzasArray(friends));
