

{
  const leftSide = {
    w: 4, p: 3, b: 2, s: 1,
  };

  const rightSide = {
    m: 4, q: 3, d: 2, z: 1,

  };

  const alphabetWar = (fight) => {
    let leftSum = 0;
    let rightSum = 0;
    [...fight].forEach((c) => {
      if (leftSide[c]) leftSum += leftSide[c];
      if (rightSide[c]) rightSum += rightSide[c];
    });

    return leftSum > rightSum
      ? `Left side wins!`
      : leftSum < rightSum
        ? `Right side wins!`
        : `Let's fight again!`;
  };

  console.log(alphabetWar('z'));  // "Right side wins!"
  console.log(alphabetWar('zdqmwpbs'));  // "Let's fight again!"
  console.log(alphabetWar('wwwwww'));  // "Left side wins!"
}

{

  const alphabetWar = (fight) => {
    const map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    const result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result
      ? (result < 0 ? 'Left' : 'Right') + ' side wins!'
      : 'Let\'s fight again!';
  };

  console.log(alphabetWar('z'));  // "Right side wins!"
  console.log(alphabetWar('zdqmwpbs'));  // "Let's fight again!"
  console.log(alphabetWar('wwwwww'));  // "Left side wins!"
}

{
  const alphabetWar = (fight) =>
    ['Right side wins!', 'Let\'s fight again!', 'Left side wins!'][
      Math.sign([...fight]
        .reduce((r, cv) =>
          r + 'sbpw'.indexOf(cv) - 'zdqm'.indexOf(cv), 0)) + 1
    ];

  console.log(alphabetWar('z'));  // "Right side wins!"
  console.log(alphabetWar('zdqmwpbs'));  // "Let's fight again!"
  console.log(alphabetWar('wwwwww'));  // "Left side wins!"
}
