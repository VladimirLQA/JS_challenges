/*

*/
{
  const mapper = {
    'a': 6,
    'b': 1,
    'd': 7,
    'e': 4,
    'i': 3,
    'l': 2,
    'm': 9,
    'n': 8,
    'o': 0,
    't': 5,
  };

  const hiddenWord = (num) => {
    let word = '';
    const entries = Object.entries(mapper);
    for (const n of [...`${num}`]) {
      word += entries.find(([, v]) => `${v}` === n)[0];
    }
    return word;
  };

  console.log(hiddenWord(637)); // "aid"
}
const chars = 'oblietadnm';
{
  const hiddenWord = (num) => [...`${num}`].map((n) => chars[n]).join('');
  console.log(hiddenWord(637)); // "aid"
}
{
  const hiddenWord = (num) => `${num}`.replace(/\d/g, (n) => chars[n]);
  console.log(hiddenWord(637)); // "aid"
}

