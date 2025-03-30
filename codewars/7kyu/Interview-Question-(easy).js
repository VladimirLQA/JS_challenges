/*
  https://www.codewars.com/kata/5b358a1e228d316283001892/javascript
*/
{
  const getStrings = (city) => {
    const result = {};
    for (const char of city.toLowerCase()) {
      if (/[a-z]/g.test(char)) {
        result[char] ??= '';
        result[char] += '*';
      }
    }

    return Object.entries(result)
      .map(([key, value]) => `${key}:${value}`).join(',');
  };

  console.log(getStrings('Chicago')); // "c:**,h:*,i:*,a:*,g:*,o:*"
}
{
  const getStrings = (city) =>
    ((arr) => [...new Set(arr)]
      .join(``)
      .match(/[a-z]/g)
      .map((val) => `${val}:${`*`.repeat(arr.filter((v) => v === val).length)}`)
      .join(`,`))([...city.toLowerCase()]);

  console.log(getStrings('Chicago')); // "c:**,h:*,i:*,a:*,g:*,o:*"
}
