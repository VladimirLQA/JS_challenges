{
  const rootSum = (n) => {
    let sum = 0;
    // alternative - maxK = Math.round(Math.sqrt(n));
    // Upper bound for k based on logarithm properties
    const maxK = Math.floor(Math.log(n) / Math.log(2)) + 1;

    for (let k = 1; k <= maxK; k++) {
      const root = Math.round(Math.pow(n, 1 / k));
      if (Math.pow(root, k) === n) {
        sum += root;
      }
    }
    return sum;
  };

  console.log(rootSum(0)); // 0
  console.log(rootSum(27)); // 30
  console.log(rootSum(125)); // 130
  console.log(rootSum(64)); // 78
  console.log(rootSum(16777216)); // 16781662

}
