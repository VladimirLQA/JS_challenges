/*
 Each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
*/

{
  String.prototype.toAlternatingCase = function() {
    return this.split('')
      .map((char) =>
        char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase(),
      )
      .join('');
  };

  console.log('hello'.toAlternatingCase());
  console.log('HELLO'.toAlternatingCase());
  console.log('hELlo .123'.toAlternatingCase());
}

{
  const isLowerCase = (char) => char === char.toLowerCase();
  const changeCase = (char) =>
    isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

  String.prototype.toAlternatingCase = function() {
    return this.split('').map(changeCase).join('');
  };
  console.log('hello'.toAlternatingCase());
  console.log('HELLO'.toAlternatingCase());
  console.log('hELlo .123'.toAlternatingCase());
}
