/*

*/
{
  const superSecretChars = [
    ['a', '@'],
    ['s', '$'],
    ['o', '0'],
    ['h', '5'],
    ['x', '*'],
  ];
  const createSSP = (password) => {
    const map = new Map(superSecretChars);
    return [...password.toString()]
      .map((char) => {
        const loweredChar = char.toLowerCase();
        if (map.has(loweredChar)) return map.get(loweredChar);
        else return char;
      })
      .join('');
  };

  console.log(createSSP('haxorpassword')); // "5@*0rp@$$w0rd"
  console.log(createSSP('MuchSecureVeryPassword')); // "Muc5$ecureVeryP@$$w0rd"
}
{
  const chars = { a: '@', s: '$', o: '0', h: '5', x: '*' };
  const createSSP = (password) =>
    password.replace(/[asohx]/gi, (c) => chars[c.toLowerCase()]);

  console.log(createSSP('haxorpassword')); // "5@*0rp@$$w0rd"
  console.log(createSSP('MuchSecureVeryPassword')); // "Muc5$ecureVeryP@$$w0rd"
}
