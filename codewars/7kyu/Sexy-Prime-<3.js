const isPrime = (n) => {
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
};

const sexyPrime = (x, y) =>
  isPrime(x) && isPrime(y) && Math.abs(x - y) === 6;

console.log(sexyPrime(61, 67)); // true
console.log(sexyPrime(7, 13)); // true
console.log(sexyPrime(5, 7)); // false
console.log(sexyPrime(1, 7)); // false
