/**
 * Examples:
 * Input: 42145 Output: 54421
 * Input: 145263 Output: 654321
 * Input: 123456789 Output: 987654321
 */

{
  const descendingOrder = (num) => {
    if (typeof num !== 'number' || num < 0) {
      return `Input value should be integer and greater or equal than '0'`;
    }

    return +num
      .toString()
      .split('')
      .sort((num1, num2) => num2 - num1)
      .join('');
  };

  console.log(descendingOrder(0)); // 0
  console.log(descendingOrder(1)); // 1
  console.log(descendingOrder(111)); // 111
  console.log(descendingOrder(15)); // 51
  console.log(descendingOrder(1021)); // 2110
}
