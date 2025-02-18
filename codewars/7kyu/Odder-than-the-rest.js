/*
  https://www.codewars.com/kata/5983cba828b2f1fd55000114/javascript
*/
{
  const isOdd = (n) => n % 2 !== 0;
  const oddOne = (arr) => arr.findIndex(isOdd);

  console.log(oddOne([2, 4, 6, 7, 10])); // 3
  console.log(oddOne([4, -8, 98, -12, -7, 90, 100])); // 4
}
