/*
 Given a string of characters, I want the function findMiddle()/find_middle()
 to return the middle number in the product of each digit in the string.
 Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

 Not all strings will contain digits. In this case and the case for any non-strings, return -1.
 If the product has an even number of digits, return the middle two digits

 Example: 1563 -> 56
 NOTE: Remove leading zeros if product is even and
 the first digit of the two is a zero. Example 2016 -> 1
*/
{
  const findMiddleElements = (arr) =>
    arr.length % 2 === 0
      ? [arr[arr.length / 2 - 1], arr[arr.length / 2]]
      : [arr[Math.floor(arr.length / 2)]];

  const findMiddle = (str) => {
    if (typeof str !== 'string') return -1;

    const numbers = str.replace(/\D/g, '');
    if (!numbers) return -1;

    const product = [...numbers].reduce((product, num) => product * +num, 1);
    const middleElements = findMiddleElements(
      [...product.toString()].map(Number),
    );

    return +middleElements.join('');
  };

  console.log(findMiddle('58jd9fgh/fgh6s.,sdf'));
}

{
  const findMiddle = (str) => {
    if (typeof str !== 'string' || !/\d/.test(str)) return -1;
    const product = Array.from(str.replace(/\D/g, ''))
      .reduce((x, y) => x * y)
      .toString();
    return +product.slice(
      Math.ceil(product.length / 2 - 1),
      Math.floor(product.length / 2 + 1),
    );
  };

  console.log(findMiddle('58jd9fgh/fgh6s.,sdf'));
}
