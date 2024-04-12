{
  const calculateSpeed = (distance, time) => {
    const mS = 2.23694;
    let d = 0;
    let t = 0;

    if (distance.slice(-2) === 'km') d = distance.slice(0, -2) * 1000;
    else d = distance.slice(0, -1);

    if (time.slice(-3) === 'min') t = time.slice(0, -3) * 60;
    else t = time.slice(0, -1);

    return `${((d / t) * mS).toFixed()}mph`;
  };

  console.log(calculateSpeed('100m', '10s')); // 22mph
  console.log(calculateSpeed('3km', '5min')); // 22mph
  console.log(calculateSpeed('35m', '293s')); // 0mph
  console.log(calculateSpeed('573km', '39min')); // 548mph
}

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

{
  const calculateSpeed = (distance, time) => {
    const mS = 2.23694;
    let d = parseInt(distance, 10) * (distance.endsWith('km') ? 1000 : 1);
    let t = parseInt(time, 10) * (time.endsWith('min') ? 60 : 1);

    return `${((d / t) * mS).toFixed()}mph`;
  };

  console.log(calculateSpeed('100m', '10s')); // 22mph
  console.log(calculateSpeed('3km', '5min')); // 22mph
  console.log(calculateSpeed('35m', '293s')); // 0mph
  console.log(calculateSpeed('573km', '39min')); // 548mph
}

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

{
  function calculateSpeed(distance, time) {
    let d = parseInt(distance, 10) * (distance.match(/km$/) ? 1000 : 1);
    let t = parseInt(time, 10) * (time.match(/min$/) ? 60 : 1);

    return Math.round((d / t) * 2.23694) + 'mph';
  }

  console.log(calculateSpeed('100m', '10s')); // 22mph
  console.log(calculateSpeed('3km', '5min')); // 22mph
  console.log(calculateSpeed('35m', '293s')); // 0mph
  console.log(calculateSpeed('573km', '39min')); // 548mph
}
