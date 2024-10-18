/*
 Complete the function power_of_two/powerOfTwo (or equivalent,
 depending on your language) that determines if a given
 non-negative integer is a power of two. From the corresponding Wikipedia entry:

  a power of two is a number of the form 2n where n is an integer,
  i.e. the result of exponentiation with number two as the base and integer n as the exponent.

 You may assume the input is always valid.
  isPowerOfTwo(1024) // -> true
  isPowerOfTwo(4096) // -> true
  isPowerOfTwo(333)  // -> false
*/

{
  const isPowerOfTwo = (n) => {
    if (n <= 0) return false;
    while (n > 1) {
      if (n % 2 !== 0) return false;
      n /= 2;
    }
    return true;
  };

  console.log(isPowerOfTwo(1024));
  console.log(isPowerOfTwo(4096));
  console.log(isPowerOfTwo(333));
}
{
  const isPowerOfTwo = (n) => Number.isInteger(Math.log2(n));

  console.log(isPowerOfTwo(1024));
  console.log(isPowerOfTwo(4096));
  console.log(isPowerOfTwo(333));
}
{
  const isPowerOfTwo = (n) => {
    if (n === 1) return true;
    if (n < 1) return false;
    return isPowerOfTwo(n / 2);
  };

  console.log(isPowerOfTwo(1024));
  console.log(isPowerOfTwo(4096));
  console.log(isPowerOfTwo(333));
}
