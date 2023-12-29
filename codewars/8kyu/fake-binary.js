/**
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 * Note: input will never be an empty string
 */

{
  const fakeBin = (x) => x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');

  console.log(fakeBin('45385593107843568'));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const fakeBin = (x) => x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));

  console.log(fakeBin('45385593107843568'));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const fakeBin = (x) =>
    x
      .split('')
      .map((digit) => (digit < 5 ? 0 : 1))
      .join('');

  console.log(fakeBin('45385593107843568'));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>');
