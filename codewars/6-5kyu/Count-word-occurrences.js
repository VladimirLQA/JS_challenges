/*

*/
{
  // not efficient enough
  const regexp = (w) => new RegExp(`\\b(${w})\\b`, 'g');
  const wordCounter = (text) => ({
    count: (word) => (text.match(regexp(word)) || []).length,
  });

  const counter = wordCounter('Lorem ipsum');
  console.log(counter.count('Lorem')); // 1
  console.log(counter.count('hey')); // 0
}
{
  const wordCounter = (text) => {
    const wordMap = new Map();
    text
      .toLowerCase()
      .split(/\s+/)
      .forEach((word) => {
        word = word.replace(/[^a-z0-9']/g, '');
        if (word) {
          wordMap.set(word, (wordMap.get(word) || 0) + 1);
        }
      });

    return {
      count: (word) => wordMap.get(word.toLowerCase()) || 0,
    };
  };

  const counter = wordCounter('Lorem ipsum');
  console.log(counter.count('Lorem')); // 1
  console.log(counter.count('hey')); // 0
}
{
  const wordCounter = (text) => {
    const mapper = {};
    text.split(/[ ,.]+/)
      .forEach((w) => w ? mapper[`$${w}`] = (mapper[`$${w}`] || 0) + 1 : null);
    return {
      count: (word) => mapper[`$${word}`] || 0,
    };
  };

  const counter = wordCounter('Lorem ipsum');
  console.log(counter.count('Lorem')); // 1
  console.log(counter.count('hey')); // 0
}
