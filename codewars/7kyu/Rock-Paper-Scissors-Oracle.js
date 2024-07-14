{
  const oracle = (gestures) => {
    const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    const counts = [],
          hands = ['rock', 'paper', 'scissors'];

    for (const h of hands) {
      let points = 0;
      for (const g of gestures) {
        if (wins[h] === g) points++;
        else if (h !== g) points--;
      }
      counts.push(points);
    }

    return counts.every((c) => !c)
      ? 'tie'
      : counts
        .map((v, i) => (v > 0 ? hands[i] : null))
        .filter((v) => v)
        .join('/');
  };

  console.log(oracle(['rock', 'paper', 'scissors', 'rock'])); // "paper"
  console.log(oracle(['rock', 'paper', 'scissors'])); // "tie"
  console.log(oracle(['paper', 'scissors', 'scissors'])); // "rock/scissors"
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  function oracle(arr) {
    return (
      ['rock', 'paper', 'scissors'].filter(
        (s) =>
          arr.reduce(
            (a, b) =>
              a + (b == s ? 0 : 'pr sp rs'.includes(s[0] + b[0]) ? 1 : -1),
            0,
          ) > 0,
      ).join`/` || 'tie'
    );
  }

  console.log(oracle(['rock', 'paper', 'scissors', 'rock'])); // "paper"
  console.log(oracle(['rock', 'paper', 'scissors'])); // "tie"
  console.log(oracle(['paper', 'scissors', 'scissors'])); // "rock/scissors"
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  function oracle(gest) {
    const figure = ['rock', 'paper', 'scissors'];
    const arr = figure.filter(
      (_, i) =>
        gest.reduce(
          (acc, el) => acc + ((i - figure.indexOf(el) + 4) % 3) - 1,
          0,
        ) > 0,
    );
    return arr.join('/') || 'tie';
  }
  console.log(oracle(['rock', 'paper', 'scissors', 'rock'])); // "paper"
  console.log(oracle(['rock', 'paper', 'scissors'])); // "tie"
  console.log(oracle(['paper', 'scissors', 'scissors'])); // "rock/scissors"
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const oracle = (gs) =>
    ['rock', 'paper', 'scissors']
      .filter(
        (x) =>
          gs
            .map((y) => x[0] + y[0])
            .reduce(
              (sum, s) =>
                sum +
                ('pr,sp,rs'.includes(s) ? 1 : 'pp,ss,rr'.includes(s) ? 0 : -1),
              0,
            ) > 0,
      )
      .join('/') || 'tie';

  console.log(oracle(['rock', 'paper', 'scissors', 'rock'])); // "paper"
  console.log(oracle(['rock', 'paper', 'scissors'])); // "tie"
  console.log(oracle(['paper', 'scissors', 'scissors'])); // "rock/scissors"
}

console.log('================ functional =================');

{
  const oracle = (gestures) => {
    const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    const hands = ['rock', 'paper', 'scissors'];

    const calculatePoints = (h, g) => (wins[h] === g ? 1 : h !== g ? -1 : 0);
    const calculateCounts = (hands, gestures) =>
      hands.map((h) =>
        gestures.reduce((points, g) => points + calculatePoints(h, g), 0),
      );
    const counts = calculateCounts(hands, gestures);

    const mapToWinningHands = (counts, hands) =>
      counts.map((v, i) => (v > 0 ? hands[i] : null));
    const resultArray = mapToWinningHands(counts, hands);

    const filterNullValues = (arr) => arr.filter((v) => v !== null);
    const filteredResultArray = filterNullValues(resultArray);

    return filteredResultArray.length === 0
      ? 'tie'
      : filteredResultArray.join`/`;
  };
  console.log(oracle(['rock', 'paper', 'scissors', 'rock'])); // "paper"
  console.log(oracle(['rock', 'paper', 'scissors'])); // "tie"
  console.log(oracle(['paper', 'scissors', 'scissors'])); // "rock/scissors"
}
