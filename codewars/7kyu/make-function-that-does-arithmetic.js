{
  const action = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    subtract: (a, b) => a - b,
  };
  const arithmetic = (a, b, operator) => action[operator](a, b);

  console.log(arithmetic(1, 2, 'add'));
  console.log(arithmetic(8, 2, 'subtract'));
  console.log(arithmetic(5, 2, 'multiply'));
  console.log(arithmetic(8, 2, 'divide'));
}

{
  const arithmetic = (a, b, operator) => {
    const optable = {
      'add': '+',
      'subtract': '-',
      'multiply': '*',
      'divide': '/',
    };
    return eval(a + optable[operator] + b);
  };

  console.log(arithmetic(1, 2, 'add'));
  console.log(arithmetic(8, 2, 'subtract'));
  console.log(arithmetic(5, 2, 'multiply'));
  console.log(arithmetic(8, 2, 'divide'));
}
