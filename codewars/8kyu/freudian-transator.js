{
  const toFreud = (str) => {
    if (!str.length) return '';
    return str
      .split(' ')
      .reduce((resultStr, currentWord) => {
        resultStr.push('sex');
        return resultStr;
      }, [])
      .join(' ');
  };

  console.log(toFreud('This is a test'));
}

{
  const toFreud = (str) =>
    str === ''
      ? ''
      : str
        .split(' ')
        .map((_) => 'sex')
        .join(' ');

  console.log(toFreud('This is a test'));
}

{
  const toFreud = (s) => s.replace(/[^ ]+/g, 'sex');
  console.log(toFreud('This is a test'));
}
