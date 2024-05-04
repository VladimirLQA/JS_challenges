const sum = (num) => {
  let result = num ?? 0;
  if (num === undefined) return result;

  const calculate = (nextNum) => {
    if (nextNum !== undefined) {
      result += nextNum;
      return calculate;
    } else {
      return result;
    }
  };

  return calculate;
};

console.log(sum()); // 0
console.log(sum(1)()); // 1
console.log(sum(2)(2)()); // 4
console.log(sum(2)(2)(4)()); // 8
