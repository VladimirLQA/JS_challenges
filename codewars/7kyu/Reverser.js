/*
  https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/javascript
*/
{
  const reverse = (n = 0, values = []) => {
    if (n > 0) {
      const digit = n % 10;
      n = Math.floor(n / 10);
      values.push(digit);
      return reverse(n, values);
    } else {
      return values.reduce((acc, n) => acc * 10 + n, 0);
    }
  };

  console.log(reverse(1234));
}
{
  const reverse = (n) => +Array.of(n).join().split([]).reverse().join([]);
  console.log(reverse(1234));
}
