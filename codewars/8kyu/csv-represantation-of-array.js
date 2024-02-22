{
  const toCsvText = (x) => {
    return x
      .reduce((string, arr, idx) => {
        string.push([arr.join(',')]);
        return string;
      }, [])
      .join('\n');
  };

  console.log(
    toCsvText([
      [0, 1, 2, 3, 45],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
    ]),
  );
}

{
  const toCsvText = (x) => x.join('\n');
  console.log(
    toCsvText([
      [0, 1, 2, 3, 45],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
    ]),
  );
}
