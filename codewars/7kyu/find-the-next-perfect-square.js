/*

 */

{
  const findNextSquare = (sq) =>
    Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;

  console.log(findNextSquare(121)); // 144
}
