/*
 Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
 that checks whether the two arrays have the "same" elements,
 with the same multiplicities (the multiplicity of a member is
 the number of times it appears). "Same" means, here,
 that the elements in b are the elements in a squared, regardless of the order.
*/

{
  const compare = (arr1, arr2) => {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;

    const arr1Sorted = arr1.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
    const arr2Sorted = arr2.sort((a, b) => a - b);
    return arr1Sorted.every((n, idx) => n === arr2Sorted[idx]);
  };

  const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  const a2 = [
    11 * 11,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
  ];

  console.log(compare(a1, a2)); // true
}

{
  const compare = (arr1, arr2) =>
    !!arr1 &&
    !!arr2 &&
    arr1
      .map((n) => n * n)
      .sort()
      .join() === arr2.sort().join();

  const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  const a2 = [
    11 * 11,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
  ];

  console.log(compare(a1, a2)); // true
}
