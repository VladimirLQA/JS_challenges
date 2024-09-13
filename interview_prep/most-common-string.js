{
  const mostCommonString = (arr) => {
    const mapping = arr.reduce(
      (acc, el) => (acc[el] ? acc[el]++ : acc[el] = 1, acc), {},
    );

    return Object.entries(mapping)
      .reduce(
        (acc, [char, count]) => count > acc[1] ? [char, count] : acc, [null, 0],
      )[0];
  };

  console.log(mostCommonString(['a', 'b', 'c', 'd', 'd', 'c', 'c']));
}
{
  const mostCommonString = (arr) =>
    arr.reduce((acc, el) => {
      acc.mapping[el] ? acc.mapping[el]++ : acc.mapping[el] = 1;
      if (acc.mapping[el] > acc.maxCount) {
        acc.maxCommon = el;
        acc.maxCount = acc.mapping[el];
      }
      return acc;
    }, { mapping: {}, maxCommon: null, maxCount: 0 }).maxCommon;

  console.log(mostCommonString(['a', 'b', 'c', 'd', 'd', 'c', 'c']));
}
