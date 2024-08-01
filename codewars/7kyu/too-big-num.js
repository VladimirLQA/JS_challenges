{
  const certainSum = (a, b) =>
    [a, b, a + b].every(Number.isSafeInteger) && a + b;

  console.log(certainSum(2, 2)); // 4
  console.log(certainSum(22, -3)); // 19
  console.log(certainSum(-9007199254740900, -999)); // false
}
