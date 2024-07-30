/*
 Numbers ending with zeros are boring.
 They might be fun in your world, but not here.
 Get rid of them. Only the ending ones.
*/

{
  const noBoringZeros = (n) => +n.toString().replaceAll(/0+$/g, '');

  console.log(noBoringZeros(960000)); // 96
  console.log(noBoringZeros(1050)); // 105
  console.log(noBoringZeros(0)); // 0
}

{
  const noBoringZeros = (n) => (n % 10 || n === 0 ? n : noBoringZeros(n / 10));

  console.log(noBoringZeros(960000)); // 96
  console.log(noBoringZeros(1050)); // 105
  console.log(noBoringZeros(0)); // 0
}
