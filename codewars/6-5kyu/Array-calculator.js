/*
  https://www.codewars.com/kata/54224ce3dda526a97d00127d/javascript
*/
{
  const evaluate = (arr) =>
    arr.length % 2 === 0
      ? undefined
      : arr.join('')
        .split('+')
        .reduce((sum, n) =>
          sum + (isNaN(n) ? n.split('*').reduce((a, b) => a * b) : +n),
        0);

  console.log(evaluate(['10', '+', '20', '*', '3'])); // 70
  console.log(evaluate(['10', '+', '20', '*', '3', '+', '30'])); // 100
  console.log(evaluate(['10', '+', '20', '*', '3', '*'])); // undefined
}
{
  const evaluate = (arr) => {
    if (!Array.isArray(arr) ||
    !arr.length ||
    arr.length % 2 === 0) return undefined;

    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        if (isNaN(arr[i])) return undefined;
      } else if (arr[i] !== '+' && arr[i] !== '*') { return undefined; }
    }

    let i = 1;

    while (i < arr.length) {
      if (arr[i] === '*') {
        arr[i - 1] = +arr[i - 1] * +arr[i + 1];
        arr.splice(i, 2);
      } else {
        i += 2;
      }
    }

    let result = +arr[0];
    for (let k = 1; k < arr.length; k += 2) {
      if (arr[k] === '+') result += +arr[k + 1];
    }
    return result;

  };

  console.log(evaluate(['10', '+', '20', '*', '3'])); // 70
  console.log(evaluate(['10', '+', '20', '*', '3', '+', '30'])); // 100
  console.log(evaluate(['10', '+', '20', '*', '3', '*'])); // undefined
}
{
  const evaluate = (arr) => {
    if (!Array.isArray(arr) ||
    !arr.length ||
    arr.length % 2 === 0) return undefined;

    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        if (isNaN(arr[i])) return undefined;
      } else if (arr[i] !== '+' && arr[i] !== '*') { return undefined; }
    }

    const temp = [];
    let i = 0;

    temp.push(+arr[0]);
    i = 1;

    while (i < arr.length) {
      const operator = arr[i];
      const nextNum = +arr[i + 1];

      if (operator === '*') {
        const prevNum = temp.pop();
        temp.push(prevNum * nextNum);
      } else {
        temp.push(nextNum);
      }

      i += 2;
    }

    return temp.reduce((sum, num) => sum + num, 0);

  };

  console.log(evaluate(['10', '+', '20', '*', '3'])); // 70
  console.log(evaluate(['10', '+', '20', '*', '3', '+', '30'])); // 100
  console.log(evaluate(['10', '+', '20', '*', '3', '*'])); // undefined
}
