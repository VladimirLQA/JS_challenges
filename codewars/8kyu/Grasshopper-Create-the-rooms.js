/*
  https://www.codewars.com/kata/56a29b237e9e997ff2000048
*/

const generateRoom = () => (
  {
    name: '',
    description: '',
    completed: false,
  }
);

const rooms = Object.fromEntries(
  Array.from(
    { length: 3 },
    (_, i) => [`key-${i}`, generateRoom()]),
);
console.log(rooms);
