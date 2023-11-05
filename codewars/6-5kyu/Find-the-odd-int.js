const findOdd = (n) => {
  const hash = {};
  let result = 0;

  n.forEach((el) => {
    hash[el] === undefined ? hash[el] = 1 : hash[el]++;

    for (const key in hash) {
      if (hash[key] % 2 !== 0) result = el;
    }

  });
  return result;
}

console.log(findOdd([1, 1, 1, 1, 2, 2, 3, 3, 3]));