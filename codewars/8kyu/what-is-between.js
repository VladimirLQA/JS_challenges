{
  const between = (a, b) => {
    let result = [];
    for (let i = a; i <= b; i++) {
      result.push(i);
    }
    return result;
  };

  console.log(between(-3, 4));
}

{
  const between = (a, b) => [...Array(b - a + 1)].map((_, i) => a + i);
  console.log(between(-3, 4));
}
