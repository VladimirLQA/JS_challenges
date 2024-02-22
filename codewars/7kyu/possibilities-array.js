{
  const isAllPossibilities = (x) => (x.length > 0 ? x.every((a, i) => x.includes(i)) : false);
  console.log(isAllPossibilities([1, 2, 3, 4]));
}

{
  const isAllPossibilities = (x) => {
    let output = x.length > 0;
    for (let i = 0; i < x.length; i++) {
      if (!x.includes(i)) output = false;
    }
    return output;
  };

  console.log(isAllPossibilities([1, 2, 3, 4]));
}

{
  const isAllPossibilities = (x) => {
    x = x.sort((a, b) => a - b);
    const arr = [];
    for (let i = 0; i <= Math.max(...x); i++) {
      arr.push(i);
    }
    return x.length ? arr.every((v, i) => v === x[i]) && arr.length === x.length : false;
  };
  console.log(isAllPossibilities([1, 2, 3, 4]));
}

{
  const isAllPossibilities = (arr) => {
    let set = new Set(arr);
    return arr.length !== 0 && arr.every((v, i) => set.has(i));
  };
  console.log(isAllPossibilities([1, 2, 3, 4]));
}
