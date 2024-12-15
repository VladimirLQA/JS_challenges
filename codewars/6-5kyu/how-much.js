/*
 https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/javascript
*/

{
  const howMuch = (m, n) => {
    if (m > n) [m, n] = [n, m];
    const result = [];

    for (let f = m; f <= n; f++) {
      if ((f - 1) % 9 === 0 && (f - 2) % 7 === 0) {
        const c = (f - 1) / 9;
        const b = (f - 2) / 7;
        result.push([`M: ${f}`, `B: ${b}`, `C: ${c}`]);
      }
    }

    return result;
  };

  console.log(howMuch(1, 100)); // [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
  console.log(howMuch(2950, 2950)); // []
}
{
  const howMuch = (m, n) =>
    Array.from(
      { length: Math.max(m, n) - Math.min(m, n) + 1 },
      (_, i) => Math.min(m, n) + i,
    ).reduce((acc, v) => {
      const M = v, C = --v / 9, B = --v / 7;
      return !(B % 1) && !(C % 1)
        ? [...acc, [`M: ${M}`, `B: ${B}`, `C: ${C}`]]
        : acc;
    }, []);

  console.log(howMuch(1, 100)); // [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
  console.log(howMuch(2950, 2950)); // []
}
