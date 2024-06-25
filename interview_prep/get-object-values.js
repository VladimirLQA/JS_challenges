/*
 Objective:
 Write a function that extracts specific properties from an object
 and returns a new object containing only those properties with their corresponding values.
*/

const user = {
  name: 'a',
  age: 2,
  channel: 'new',
};

const getObjValues = (obj, values) =>
  values.reduce((res, property) =>
    (property in obj && (res[property] = obj[property]), res), {});

console.log(getObjValues(user, ['name', 'age'])); // { name: 'a', age: 2 }

