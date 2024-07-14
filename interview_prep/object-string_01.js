const myObj = {
  name: 'John',
  age: 25,
  city: 'Example',
  isStudent: true,
  hobbies: ['reading', 'coding', 'playing guitar', 'playing drams'],
};

const { city, hobbies } = myObj;

const getHobbies = hobbies.filter(
  (hobby) =>
    hobby === 'reading' || hobby === 'coding' || hobby.startsWith('playing'),
);

console.log(getHobbies);

const testStr = 'Welcome to this javascript playground!';

{
  const reverseStr = (str) =>
    str
      .split(' ')
      .map((word) => {
        const letters = word.match(/[a-z0-9]/gi) || [];
        return [...word]
          .map((char) => (/[a-z]/i.test(char) ? letters.pop() : char))
          .join('');
      })
      .join(' ');

  console.log(reverseStr(testStr));
}

{
  const reverseStr = (str) =>
    str
      .split(' ')
      .map((word) => word.split('').reduce((rev, char) => char + rev, ''))
      .join(' ');

  console.log(reverseStr(testStr));
}
