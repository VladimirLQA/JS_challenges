{
  const getDivisorsCnt = (n) => {
    let count = 0;

    for (let i = n; i > 0; i--) {
      if (n % i === 0) count++;
      continue;
    }
    return count;
  };
  console.log(getDivisorsCnt(10)); // 4
  console.log(getDivisorsCnt(11)); // 2
  console.log(getDivisorsCnt(54)); // 8
}

{
  const getDivisorsCnt = (n) => {
    if (n === 1) return 1;

    let count = 2; // Initialize count to 2 as 1 and n are always divisors

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (i !== n / i) { count += 2; } // Increment count by 2 for each pair of divisors
        else { count++; } // Increment count by 1 if the divisor is a perfect square
      }
    }

    return count;
  };
  console.log(getDivisorsCnt(10)); // 4
  console.log(getDivisorsCnt(11)); // 2
  console.log(getDivisorsCnt(54)); // 8
}
