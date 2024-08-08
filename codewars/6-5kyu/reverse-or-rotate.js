/*
 The input is a string str of digits. Cut the string into chunks
 (a chunk here is a substring of the initial string)
 of size sz (ignore the last chunk if its size is less than sz).

 If the sum of a chunk's digits is divisible by 2,
 reverse that chunk; otherwise rotate it to the left
 by one position. Put together these modified chunks and
 return the result as a string.

 If
  sz is <= 0 or if str == "" return ""
  sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
*/

{
  const rotate = (str) => `${str.slice(1)}${str[0]}`;
  const chunkString = (str, size) => str.match(new RegExp(`.{1,${size}}`, 'g'))
    .filter((s) => s.length >= size);
  // const chunkString = (str, size) => str.split(new RegExp(`(.{${size}})`));
  const sum = (str) => [...str].reduce((a, b) => a + +b, 0);
  const reverse = (str) => [...str].reverse().join('');

  const revrot = (str, sz) => {
    if (sz <= 0 || !str.length || sz > str.length) return '';

    const chunks = chunkString(str, sz);
    return chunks.reduce((acc, ch, idx) =>
      (sum(ch) % 2 === 0
        ? acc += reverse(ch)
        : acc += rotate(ch), acc), '');
  };

  console.log(revrot('1234', 0)); // ''
  console.log(revrot('', 0)); // ''
  console.log(revrot('1234', 5)); // ''
  console.log(revrot('733049910872815764', 5)); // 330479108928157
}

{
  const str2chunks = (s, c) => s.match(new RegExp('.{' + c + '}', 'g')) || [];
  const isSumOfCubesOfDigitsOdd = (str) =>
    str.replace(/[02468]/g, '').length % 2;
  const rotate = (str) => str.slice(1) + str[0];
  const reverse = (str) => str.split('').reverse().join('');

  const revrot = (str, sz) =>
    sz <= 0 || sz > str.length || str === ''
      ? ''
      : str2chunks(str, sz)
        .map((chunk) => isSumOfCubesOfDigitsOdd(chunk)
          ? rotate(chunk)
          : reverse(chunk))
        .join('');

  console.log(revrot('1234', 0)); // ''
  console.log(revrot('', 0)); // ''
  console.log(revrot('1234', 5)); // ''
  console.log(revrot('733049910872815764', 5)); // 330479108928157
}

{
  const rotate = ([head, ...tail]) => [...tail, head];
  const reverseOrRotate = ([...digits]) => {
    const sumOfCubes = digits.reduce((sum, x) => sum + +x, 0);
    const isEven = sumOfCubes % 2 === 0;

    const chunk = isEven
      ? digits.reverse()
      : rotate(digits);
    return chunk.join('');
  };

  const revrot = (string, size) => {
    if (size <= 0 || !string.length || size > string.length) return '';

    const chunkPattern = new RegExp('.'.repeat(size), 'g');  // Example: Given `size` of 4, the RegExp pattern will be /..../g
    const chunks = string.match(chunkPattern);

    return chunks
      .map(reverseOrRotate)
      .join('');
  };

  console.log(revrot('1234', 0)); // ''
  console.log(revrot('', 0)); // ''
  console.log(revrot('1234', 5)); // ''
  console.log(revrot('733049910872815764', 5)); // 330479108928157
}
