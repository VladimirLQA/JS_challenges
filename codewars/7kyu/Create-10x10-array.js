/*
  https://www.codewars.com/kata/56aea73c2283945da300004b
*/

{
  const alphabet = ['A', 'B', 'C', 'D'];

  const getRandomChar = () =>
    alphabet[Math.floor(Math.random() * alphabet.length)];

  const array10 = () => Array.from(
    { length: 10 },
    (_) => {
      const row = ['A', 'B', 'C', 'D'];

      for (let i = 0; i < 6; i++) {
        row.push(getRandomChar());
      }

      return row.sort(() => 0.5 - Math.random());
    },
  );

  console.log(array10());
}
{
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const array10 = () =>
    Array.from({ length: 10 }, () =>
      shuffleArray([...'ABCDABCDAB']));

  console.log(array10());
}
