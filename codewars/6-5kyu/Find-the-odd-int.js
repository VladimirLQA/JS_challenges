{
  const findOdd = (n) => {
    const hash = {};
    let result = 0;

    n.forEach((el) => {
      hash[el] === undefined ? hash[el] = 1 : hash[el]++;
      for (const key in hash) {
        if (hash[key] % 2 !== 0) result = +key;
      }
    });
    return result;
  };

  console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
}

console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>');

{
  const findOdd = (n) => n.reduce((a, b) => a ^ b);

  console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
}
