{
  const customSplit = (initialStr, delimiter) => {
    const splitted = [];
    let current = '';

    for (const char of initialStr) {
      if (char === delimiter) {
        splitted.push(current);
        current = '';
      } else {
        current += char;
      }
    }

    splitted.push(current);
    return splitted;
  };

  console.log(customSplit('how are you feeling?', ' '));
}
