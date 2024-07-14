{
  const didWeWin = (plays) => {
    let win = 0;
    plays.forEach((play) => {
      if (play[1] === 'run' || play[1] === 'pass') win += play[0];
      else win -= play[0] || 0;
    });
    return win > 10;
  };
  console.log(
    didWeWin([
      [8, 'pass'],
      [5, 'sack'],
      [3, 'sack'],
      [5, 'run'],
    ]),
  ); // false

  console.log(
    didWeWin([
      [2, 'run'],
      [5, 'pass'],
      [3, 'sack'],
      [8, 'pass'],
    ]),
  ); // true
}

{
  const didWeWin = (plays) =>
    plays.reduce(
      (t, [y, p]) => (!y ? t : t + y * (/sack|turnover/.test(p) ? -1 : 1)),
      0,
    ) > 10;
  console.log(
    didWeWin([
      [8, 'pass'],
      [5, 'sack'],
      [3, 'sack'],
      [5, 'run'],
    ]),
  ); // false

  console.log(
    didWeWin([
      [2, 'run'],
      [5, 'pass'],
      [3, 'sack'],
      [8, 'pass'],
    ]),
  ); // true

  console.log(5 * -1);
}
