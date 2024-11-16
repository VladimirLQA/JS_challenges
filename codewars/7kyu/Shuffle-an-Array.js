/*
 Write a function to shuffle an array.
*/

const testArr = [1, 2, 3, 4];

{
  // Fisher-Yates
  const shuffle = (arr) => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
    }
    return result;
  };

  console.log(shuffle(testArr));
}
{
  const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
  console.log(shuffle(testArr));
}
{
  const shuffle = (arr) =>
    arr.reduce((shuffled, item) => {
      const randomIndex = Math.floor(Math.random() * (shuffled.length + 1));
      shuffled.splice(randomIndex, 0, item);
      return shuffled;
    }, []);

  console.log(shuffle(testArr));
}
{
  const randomIndexes = (length) => {
    const idxs = new Set();
    while (idxs.size < length) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!idxs.has(randomIndex)) idxs.add(randomIndex);
    }
    return idxs;
  };

  const shuffle = (arr) => {
    const idxs = [...randomIndexes(arr.length)];
    return arr.map((n, i, self) => self[idxs[i]]);
  };

  console.log(shuffle(testArr));
}
