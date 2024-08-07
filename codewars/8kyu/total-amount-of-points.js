{
  const getMatchAward = (str) => {
    const [x, y] = str.split(':');
    return x > y ? 3 : x === y;
  };

  const points = (games) =>
    games.map(getMatchAward).reduce((acc, p) => acc + p, 0);

  console.log(
    points([
      '1:0',
      '2:0',
      '3:0',
      '4:0',
      '2:1',
      '3:1',
      '4:1',
      '3:2',
      '4:2',
      '4:3',
    ]),
  ); // 30
  console.log(
    points([
      '0:1',
      '0:2',
      '0:3',
      '0:4',
      '1:2',
      '1:3',
      '1:4',
      '2:3',
      '2:4',
      '3:4',
    ]),
  ); // 0
}

{
  const points = (g) => g.reduce((a, [x, , y]) => a + (x > y ? 3 : x === y), 0);

  console.log(
    points([
      '1:0',
      '2:0',
      '3:0',
      '4:0',
      '2:1',
      '3:1',
      '4:1',
      '3:2',
      '4:2',
      '4:3',
    ]),
  ); // 30
  console.log(
    points([
      '0:1',
      '0:2',
      '0:3',
      '0:4',
      '1:2',
      '1:3',
      '1:4',
      '2:3',
      '2:4',
      '3:4',
    ]),
  ); // 0
}
