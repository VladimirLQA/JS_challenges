{
  const numberToLatin = (str: string) => {
    const latin = 'ABHTIOPKMXCE';
    const cyrilic = 'АВНТІОРКМХСЕ';

    return str
      .trim()
      .toUpperCase()
      .split('')
      .reduce((transformed, currentChar) => {
        const index = cyrilic.indexOf(currentChar);
        const converted = index !== -1 ? latin[index] : currentChar;
        transformed += converted;
        return transformed;
      }, '');
  };

  console.log(numberToLatin('АЕРГУ'));
}

{
  const numberToLatin = (str: string) => {
    const cyrilicLatin: Record<string, string> = {
      A: 'А',
      B: 'В',
      H: 'Н',
      T: 'Т',
      I: 'І',
      O: 'О',
      P: 'Р',
      K: 'К',
      M: 'М',
      X: 'Х',
      C: 'С',
      E: 'Е',
    };

    return str
      .trim()
      .toUpperCase()
      .split('')
      .reduce((converted: string, currentChar: string) => {
        converted += cyrilicLatin[currentChar] || currentChar;
        return converted;
      }, '');
  };

  console.log(numberToLatin('АЕРГУ'));
}
