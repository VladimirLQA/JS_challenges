/*

*/

{
  const mazeRunner = (m, d) => {
    let startPosition;

    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
        if (m[i][j] === 2) {
          startPosition = [i, j];
          break;
        }
      }
    }
    let [x, y] = startPosition;
    for (const dir of d) {
      if (dir === 'N') x--;
      if (dir === 'S') x++;
      if (dir === 'W') y--;
      if (dir === 'E') y++;

      if (x < 0 || x >= m.length || y < 0 || y >= m[x].length) {
        return 'Dead';
      }

      const currentPostion = m[x][y];
      if (currentPostion === 1) return 'Dead';
      if (currentPostion === 3) return 'Finish';
    }
    return 'Lost';
  };

  const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ];

  const directions = ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'];
  console.log(mazeRunner(maze, directions)); // "Finish"
}

{
  const mazeRunner = (m, d) => {
    let y = m.findIndex((a) => a.includes(2));
    let x = m[y].indexOf(2);

    let currentPosition;
    for (let i = 0; i < d.length; i++) {

      if (d[i] === 'N') y--;
      if (d[i] === 'S') y++;
      if (d[i] === 'W') x--;
      if (d[i] === 'E') x++;

      if (!m[y]) return `Dead`;
      currentPosition = m[y][x];
      if (currentPosition === 3) return 'Finish';
      if (currentPosition === 1 || currentPosition === undefined) return 'Dead';
    }
    return 'Lost';
  };

  const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ];

  const directions = ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'];
  console.log(mazeRunner(maze, directions)); // "Finish"
}
