{
  const buildRowText = (index, character) =>
    Array.from({ length: 10 }, (_, i) => (i === index ? `|${character}` : '| '))
      .join('')
      .trim();

  console.log(buildRowText(2, 'A'));
  console.log(buildRowText(8, 'A'));
}
{
  const buildRowText = (index, character) =>
    `${`| `.repeat(index)}|${character}|${` |`.repeat(8 - index)}`;
  console.log(buildRowText(2, 'A'));
  console.log(buildRowText(8, 'A'));
}
