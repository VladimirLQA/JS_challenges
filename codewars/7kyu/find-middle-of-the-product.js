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
    const middleElements =
      findMiddleElements([...product.toString()].map(Number));

    return +middleElements.join('');
  };

  console.log(findMiddle('58jd9fgh/fgh6s.,sdf'));
}
