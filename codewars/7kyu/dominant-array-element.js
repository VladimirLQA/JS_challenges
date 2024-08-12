/*

*/

{
  const solve = (arr, res = []) => {
    if (!arr.length) return  res;

    const leftElem = arr.shift();
    const t = arr.every((el) => leftElem > el);
    if (t) res.push(leftElem);
    return solve(arr, res);
  };

  console.log(solve([16, 17, 14, 3, 14, 5, 2])); // [17, 14, 5, 2]
}

{
  const solve = (arr) =>
    arr.filter((el, i) => arr.slice(i + 1).every((x) => x < el));

  console.log(solve([16, 17, 14, 3, 14, 5, 2])); // [17, 14, 5, 2]
}

{
  const solve = (arr) =>
    arr.filter((el, i) => el > Math.max(...arr.slice(i + 1)));

  console.log(solve([16, 17, 14, 3, 14, 5, 2])); // [17, 14, 5, 2]
}
