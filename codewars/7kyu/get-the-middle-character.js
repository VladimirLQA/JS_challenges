/**
 * Kata.getMiddle("test") should return "es"
 * Kata.getMiddle("testing") should return "t"
 * Kata.getMiddle("middle") should return "dd"
 * Kata.getMiddle("A") should return "A"
 *
 * @param string
 * @return middle character or characters of input string
 */

const testStr1 = 'test'; // 'es'
const testStr2 = 'testint'; // 't'
const testStr3 = 'middle'; // 'dd'
const testStr4 = 'A'; // 'A'

{
  const getMiddleChar = (str) => {
    if (str.length === 1) return str;
    const middle = Math.floor(str.length / 2);
    return str.length % 2 === 0
      ? str.slice(middle - 1, middle + 1)
      : str.charAt(middle);
  };

  console.log(getMiddleChar(testStr1));
  console.log(getMiddleChar(testStr2));
  console.log(getMiddleChar(testStr3));
  console.log(getMiddleChar(testStr4));
}

{
  const getMiddleChar = (str) =>
    str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
  //   const getMiddleChar = (str) =>
  //     str.substring(Math.ceil(str.length / 2 - 1), Math.ceil(str.length / 2 - 1) + (str.length % 2 === 0 ? 2 : 1));

  console.log(getMiddleChar(testStr1));
  console.log(getMiddleChar(testStr2));
  console.log(getMiddleChar(testStr3));
  console.log(getMiddleChar(testStr4));
}

{
  const getMiddleChar = (str) =>
    str.slice((str.length - 1) / 2, str.length / 2 + 1);
  console.log(getMiddleChar(testStr3));
  console.log((testStr3 - 1) / 2);
}
