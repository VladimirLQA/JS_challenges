/*
Given a string s, your task is to return another string
such that even-indexed and odd-indexed characters
of s are grouped and the groups are space-separated.
Even-indexed group comes as first, followed by a space,
and then by the odd-indexed part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
*/
{
  const sortMyString = (S) => {
    const { even, odd } = [...S].reduce(
      (acc, char, i) => {
        if (!(i % 2)) {
          acc.even += char;
        } else {
          acc.odd += char;
        }
        return acc;
      },
      { even: '', odd: '' },
    );

    return `${even} ${odd}`;
  };

  console.log(sortMyString('CodeWars'));
}
{
  const sortMyString = (s) =>
    [...s].reduce((a, c, i) => ((a[i & 1] += c), a), ['', '']).join(' ');

  console.log(sortMyString('CodeWars'));
}
{
  const sortMyString = (s) =>
    s.replace(/(.)./g, '$1') + ' ' + s.replace(/.(.)?/g, '$1');

  console.log(sortMyString('CodeWars'));
}
