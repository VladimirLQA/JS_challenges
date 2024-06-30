/*
 You will be given a number and you will need
 to return it as a string in Expanded Form. For example:

 expandedForm(12); // Should return '10 + 2'
 expandedForm(42); // Should return '40 + 2'
 expandedForm(70304); // Should return '70000 + 300 + 4'
 NOTE: All numbers will be whole numbers greater than 0.
*/

{
  const expandedForm = (num) => {
    const numStr = num.toString();
    const expandedParts = [];

    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i]);

      if (digit !== 0) {
        const placeValue = digit * Math.pow(10, numStr.length - i - 1);
        expandedParts.push(placeValue);
      }
    }

    return expandedParts.join(' + ');
  };

  console.log(expandedForm(10));
  console.log(expandedForm(42));
  console.log(expandedForm(70304));
}

{
  const expandedForm = (n) => n.toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');

  console.log(expandedForm(10));
  console.log(expandedForm(42));
  console.log(expandedForm(70304));
}

{
  const expandedForm = (num) => {
    if (num < 10) return `${num}`;
    const over = num % Math.pow(10, num.toString().length - 1);
    if (!over) return `${num}`;
    return `${num - over} + ${expandedForm(over)}`;
  };

  console.log(expandedForm(10));
  console.log(expandedForm(42));
  console.log(expandedForm(70304));
}

{
  const expandedForm = (num) =>
    num.toString()
      .split('')
      .reduce((acc, n, idx) => {
        if (n !== '0') {
          acc.push(n * Math.pow(10, num.toString().length - idx - 1));
        }
        return acc;
      }, [])
      .join(' + ');

  console.log(expandedForm(10));
  console.log(expandedForm(42));
  console.log(expandedForm(70304));
}
