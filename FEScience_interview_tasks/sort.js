const words = [
  'banana',
  'grapefruit',
  'banana',
  'grapefruit',
  'banana',
  'orange',
  'orange',
  'orange',
  'orange',
];

{
  const sortAndIndividualize = (array) => {
    const hash = {};

    array.forEach((el) => {
      hash[el] = (hash[el] || 0) + 1;
    });

    let temp = 0;

    return [...Object.entries(hash)].reduce((acc, currEl) => {
      if (currEl[1] > temp) {
        acc.unshift(currEl[0]);
      } else {
        acc.push(currEl[0]);
      }
      temp = currEl[1];
      return acc;
    }, []);
  };

  console.log(sortAndIndividualize(words)); // ["orange", "banana", "grapefruit"]
}

{
  const sortAndIndividualize = (array) => {
    const hash = [...array].reduce((acc, currEl) => {
      acc[currEl] ? acc[currEl]++ : acc[currEl] = 1;
      return acc;
    }, {});

    return Object.keys(hash).sort((key1, key2) => hash[key2] - hash[key1]);
  };

  console.log(sortAndIndividualize(words)); // ["orange", "banana", "grapefruit"]
}

{
  const sortAndIndividualize = (array) => {
    const hash = new Map();
    array.forEach((el) => hash.set(el, (hash.get(el) || 0) + 1));

    return Array.from(hash)
      .sort((a, b) => b[1] - a[1])
      .map(([key]) => key);
  };

  console.log(sortAndIndividualize(words)); // ["orange", "banana", "grapefruit"]
}
