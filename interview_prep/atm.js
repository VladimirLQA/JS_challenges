const testLimits = {
  5000: 5,
  1000: 5,
  500: 5,
  100: 5,
  23: 13,
  543: 1,
  3: 5,
};

const atm = (sum, limits) => {
  const denominates = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  const result = {};

  for (const denom of denominates) {
    const count = Math.min(Math.floor(sum / denom), limits[denom]);
    if (count > 0) {
      result[denom] = count;
      sum -= count * denom;
      limits[denom] -= count;
    }
  }

  if (sum > 0 && Object.keys(result).length === 0) {
    return `Insufficient funds to dispense any amount.`;
  }

  if (sum > 0) {
    result['remainder'] = sum;
  }

  return { limits, withdrawal: result };
};

console.log(atm(15600, testLimits));
