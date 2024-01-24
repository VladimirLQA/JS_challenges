{
  const isPowerOfTwo = (num) => {
    if (num === 1) return true;
    if (num <= 0) return false;

    if (num % 2 !== 0) {
      return false;
    } else {
      return isPowerOfTwo(num / 2);
    }
  };

  console.log(isPowerOfTwo(1)); // true
  console.log(isPowerOfTwo(16)); // true
  console.log(isPowerOfTwo(10)); // false
}
