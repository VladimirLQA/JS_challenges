/*

*/

{
  const add = (x, y) =>
    []['slice']['constructor'](
      'x', 'y', `return ${x} ${String.fromCharCode(43)} ${y}`,
    )();

  console.log(add(5, 19)); // 24
  console.log(add(-27, 18)); // -9
}
{
  const add = (x, y)  => {
    while (y !== 0) {
      const carry = x & y;
      x ^= y;
      y = carry << 1;
    }
    return x;
  };

  console.log(add(5, 19)); // 24
  console.log(add(-27, 18)); // -9
}
