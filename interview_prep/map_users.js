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

// 1. Write code to get array of names from given array of users
console.log('1. Write code to get array of names from given array of users');
{
  const getUserNames = (array) =>
    array.reduce((arrayOfNames, user) => {
      arrayOfNames.push(user.name);
      return arrayOfNames;
    }, []);


  console.log(getUserNames(users));

  const names = users.map((user) => user.name);
  console.log(names);
}

console.log('2. Get back only active users');

{
  const activeUsers = users.filter((user) => user.inActive === true);
  console.log(activeUsers);
}

console.log('3. Sort users by age descending');

{
  const sortedUsersByAgeDESC =
    [...users].sort((user1, user2) => user2.age - user1.age);
  const sortedUsersByAgeDESC1 =
    [...users].sort((user1, user2) => (user1.age < user2.age ? 1 : -1));

  console.log(sortedUsersByAgeDESC1);
  console.log(sortedUsersByAgeDESC);
}
