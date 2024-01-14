{
  const solution = (str) => {
    if (!str.length) return str;

    return str
      .split('')
      .reduce((acc, currentChar) => {
        if (currentChar.match(/[A-Z]/)) {
          acc.push(' ');
        }
        acc.push(currentChar);
        return acc;
      }, [])
      .join('');
  };

  console.log(solution('camelCasing')); // 'camel Casing'
}

{
  const solution = (string) => string.replace(/[A-Z]/g, ' $&');
  console.log(solution('camelCasing')); // 'camel Casing'
}

{
  const solution = (string) => string.replace(/(?=[A-Z])/g, ' ');
  console.log(solution('camelCasing')); // 'camel Casing'
}
