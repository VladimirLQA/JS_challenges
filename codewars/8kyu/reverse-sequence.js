{
  const reverseSeq = (n) => Array.from({ length: 5 }, (v, i) => i + 1).reverse();
  console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
}

{
  const reverseSeq = (n) =>
    Array(n)
      .fill(0)
      .map((el, i) => n - i);
  console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
}
