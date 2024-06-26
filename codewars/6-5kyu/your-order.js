/**
 * Your task is to sort a given string. Each word in the string will contain a single number.
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 * Examples
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 */

{
  const order = (str) => {
    if (!str.length) return str;
    const splittedStr = str.split(' ');
    const result = [];

    splittedStr.forEach((word) => {
      word.split('').forEach((char) => {
        if (+char) result[+char - 1] = word;
      });
    });
    return result.join(' ');
  };

  console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
  console.log(order(''));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const order = (str) =>
    str
      .split(' ')
      .sort((a, b) => a.match(/\d/) - b.match(/\d/))
      .join(' ');

  console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
  console.log(order(''));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const order = (str) =>
    str
      .split(' ')
      .reduce((acc, currWord) => {
        acc[currWord.match(/\d/) - 1] = currWord;
        return acc;
      }, [])
      .join(' ');
  console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
  console.log(order(''));
}
