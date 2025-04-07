/*
  https://www.codewars.com/kata/5840107b6fcbf56d2000010b/javascript
*/
{
  const palindromization = (elements, n) => {
    if (elements.length === 0 || n < 2) {
      return 'Error!';
    }

    const result = [];
    for (let i = 0; i < n; i++) {
      const minVal = Math.min(i + 1, n - i);
      const index = (minVal - 1) % elements.length;
      result.push(elements[index]);
    }

    return result.join('');
  };

  const testPalindromization = () => {
    const element = '123';
    const tests = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log('Testing palindromization function:');
    tests.forEach((n) => {
      console.log(`n = ${n} => result = "${palindromization(element, n)}"`);
    });
  };

  testPalindromization();
}
{
  const getMiddleIndex = (value, round = 'floor') =>
    Math[round](value / 2);

  const palindromization = (elements, n) =>
    elements === '' || n < 2
      ? 'Error!'
      : elements.repeat(n).slice(0, getMiddleIndex(n, 'ceil')) +
        [...elements.repeat(n)]
          .reverse().slice(-getMiddleIndex(n, 'floor')).join('');


  const testPalindromization = () => {
    const element = '123';
    const tests = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log('Testing palindromization function:');
    tests.forEach((n) => {
      console.log(`n = ${n} => result = "${palindromization(element, n)}"`);
    });
  };

  testPalindromization();
}
