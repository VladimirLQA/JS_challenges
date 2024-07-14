{
  const sameCase = (a, b) =>
    !/^[A-Za-z]$/.test(a) || !/^[A-Za-z]$/.test(b)
      ? -1
      : (/^[A-Z]$/.test(a) && /^[A-Z]$/.test(b)) ||
          (/^[a-z]$/.test(a) && /^[a-z]$/.test(b))
        ? 1
        : 0;

  console.log(sameCase('C', 'B'));
  console.log(sameCase('\t', 'Z'));
}

{
  const isNumber = (s) => s === s.toUpperCase() && s === s.toLowerCase();
  const getCharCase = (s) => (s === s.toUpperCase() ? 'u' : 'l');

  const sameCase = (a, b) => {
    if (isNumber(a) || isNumber(b)) return -1;
    return getCharCase(a) === getCharCase(b) ? 1 : 0;
  };

  console.log(sameCase('C', 'B'));
  console.log(sameCase('\t', 'Z'));
}
