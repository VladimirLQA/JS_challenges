const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

{
  const generateKey = (length, characters) =>
    Array.from(characters,
      () => characters[Math.floor(Math.random() * characters.length)])
      .splice(0, length)
      .join('');
  const key = generateKey(16, characters);
  console.log(key); // eg599gb60q926j8i
}

{
  const generateKey = (length, possible) => {
    const base = possible.length;
    let key = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * base);
      key += possible[index];
    }
    return key;
  };
  const key = generateKey(16, characters);
  console.log(key); // eg599gb60q926j8i
}

{
  const generateKey = (length, possible) =>
    [...possible].reduce((key, _char, _, array) =>
      (key += array[Math.floor(Math.random() * possible.length)]), '')
      .slice(0, length);

  console.log(generateKey(16, characters));
}



