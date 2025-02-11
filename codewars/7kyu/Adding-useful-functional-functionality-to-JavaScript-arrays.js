/*
  https://www.codewars.com/kata/52195c9bb576caf14200007f/javascript
*/
{
  Array.range = function (start, count) {
    if (!count) return [];
    return [...Array(count)].map((_, i) => i + start);
  };

  Array.prototype.sum = function () {
    return this.reduce((acc, n) => (acc += n), 0);
  };

  console.log([0, 1, 2].sum()); // 3
  console.log(Array.range(-1, 3)); // [-1,0,1]
}
{
  Array.range = function (start, count) {
    if (!count) return [];
    const result = [];

    while (count > 0) {
      result.push(start++);
      count--;
    }
    return result;
  };

  console.log(Array.range(-1, 3)); // [-1,0,1]
}
