{
  const doubleChar = (str) => str.replace(/./g, (c) => c.repeat(2));

  console.log(doubleChar('Name')); // NNaammee
}
