{
  const buildTower = (nFloors) => {
    let space,
      star,
      tower = [];
    for (let i = 1; i <= nFloors; i++) {
      space = ' '.repeat(nFloors - i);
      star = '*'.repeat(2 * i - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower;
  };

  console.log(buildTower(10));
}

{
  const towerBuilder = (n) => {
    return [...Array(n)].map(
      (_, i) => ' '.repeat(n - 1 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - 1 - i),
    );
  };
  console.log(towerBuilder(10));
}

{
  const towerBuilder = (nFloors) =>
    Array.from(Array(nFloors).keys())
      .map((i) => 2 * i + 1)
      .reverse()
      .map((i, index) => ' '.repeat(index) + '*'.repeat(i) + ' '.repeat(index))
      .reverse();

  console.log(towerBuilder(10));
}
