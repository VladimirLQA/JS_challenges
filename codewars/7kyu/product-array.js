/*
 Given an array/list [] of integers , Construct a product array Of
 same size Such That prod[i] is equal to
 The Product of all the elements of Arr[] except Arr[i].
*/

{

  const productArray = (numbers) => {
    const totalProduct = numbers.reduce((a, b) => a * b, 1);
    return numbers.map((n) => totalProduct / n);
  };

  console.log(productArray([12, 20])); // [20,12]
  console.log(productArray([10, 3, 5, 6, 2])); // [180,600,360,300,900]
}
