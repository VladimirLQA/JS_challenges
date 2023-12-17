{
  const isPangram = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...new Set(str.toLowerCase())].filter((ch) => ch.toUpperCase() !== ch).length === alphabet.length;
  };

  console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
}

{
  const isPangram = (str) => 'abcdefghijklmnopqrstuvwxyz'.split('').every((x) => str.toLowerCase().includes(x));
  console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
}

{
  const isPangram = (str) => (str.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
  console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
}
