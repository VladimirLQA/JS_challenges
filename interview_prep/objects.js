// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: 'Jack',
    inActive: true,
    age: 20,
  },
  {
    id: 2,
    name: 'Oliver',
    inActive: false,
    age: 25,
  },
  {
    id: 3,
    name: 'July',
    inActive: true,
    age: 15,
  },
];

{
  const isNameExist = (array, name) => !!array.find((obj) => obj.name === name);
  // inefficient for such task
  /*let isExist = true;
  array.forEach((obj) => {
    isExist = obj.name === name;
  });
  return isExist; */

  console.log(isNameExist(users, 'July'));
}

{
  const isNameExist = (array, name) => array.some((obj) => obj.name === name);

  console.log(isNameExist(users, 'July'));
}
