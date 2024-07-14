{
  const ox = (str) => {
    let ohs = 0;
    let exes = 0;

    str
      .toLowerCase()
      .split('')
      .forEach((ch) => {
        if (ch === 'o') ohs++;
        if (ch === 'x') exes++;
      });
    return ohs === exes;
  };

  console.log(ox('xxoo'));
  console.log(ox('xxoox'));
  console.log(ox('xXoOm'));
  console.log(ox('zpdwds'));
}

console.log(`<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);

{
  const ox = (str) =>
    str.toLowerCase().split('x').length ===
      str.toLowerCase().split('o').length
    ;

  console.log(ox('xxoo'));
  console.log(ox('xxoox'));
  console.log(ox('xXoOm'));
  console.log(ox('zpdwds'));
}

console.log(`<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);

{
  const ox = (str) => {
    const x = str.match(/x/gi);
    const o = str.match(/o/gi);
    return (o && o.length) === (x && x.length);
  };

  console.log(ox('xxoo'));
  console.log(ox('xxoox'));
  console.log(ox('xXoOm'));
  console.log(ox('zpdwds'));
}
