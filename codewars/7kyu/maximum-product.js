/*

*/

{
  const adjacentElementsProduct = (array) => {
    let maxProduct = array[0] * array[1];

    for (let i = 1; i < array.length; i++) {
      const product = array[i] * array[i + 1];
      if (product > maxProduct) maxProduct = product;
    }
    return maxProduct;
  };

  console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
  console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
}
{

  const adjacentElementsProduct = (array) =>
    Math.max(...array.map((n, idx) =>
      idx > 0 ? n * array[idx - 1] : -Infinity));
  console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
  console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
}
{

  const adjacentElementsProduct = (array) =>
    Math.max(...array.slice(1).map((n, idx) => n * array[idx]));
  console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
  console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
}
