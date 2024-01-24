// Input: n = 27
// Output: true

{
  const isPowerOfThee = (num) => {
    if (num < 1) return false;

    while (num % 3 === 0) {
      num /= 3;
    }

    return num === 1;
  };

  console.log(isPowerOfThee(27));
  console.log(isPowerOfThee(30));
}
