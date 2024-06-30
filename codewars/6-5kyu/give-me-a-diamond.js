/*
 You need to return a string that looks like a diamond shape
 when printed on the screen, using asterisk (*) characters.
 Trailing spaces should be removed, and every line
 must be terminated with a newline character (\n).

 Return null/nil/None/... if the input is an even number
 or negative, as it is not possible to print a diamond of even or negative size.

 Examples
 A size 3 diamond:
  *
 ***
  *
 ...which would appear as a string of " *\n***\n *\n"

 A size 5 diamond:
   *
  ***
 *****
  ***
   *
 ...that is:

 "  *\n ***\n*****\n ***\n  *\n"
*/

{
  const diamond = (n) => {
    if (n <= 0 || n % 2 === 0) return null;

    const star = '*';
    const space = ' ';
    let res = '';

    // top & middle
    for (let i = 0; i < Math.ceil(n / 2); i++) {
      const starsCount = 2 * i + 1;
      const spacesCount = (n - starsCount) / 2;
      res += space.repeat(spacesCount) + star.repeat(starsCount) + '\n';
    }

    // bottom
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      const starsCount = 2 * i + 1;
      const spacesCount = (n - starsCount) / 2;
      res += space.repeat(spacesCount) + star.repeat(starsCount) + '\n';
    }

    return res;
  };

  console.log(diamond(3));
}

{
  const diamond = (n) => {
    if (n <= 0 || n % 2 === 0) return null;

    let diamondStr = '';
    const middle = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
      const asterisks = i <= middle ? i * 2 + 1 : (n - i - 1) * 2 + 1;
      const spaces = (n - asterisks) / 2;

      diamondStr += ' '.repeat(spaces) + '*'.repeat(asterisks) + '\n';
    }

    return diamondStr;
  };
  console.log(diamond(3));
}
