/*
 The parseLines function processes a multiline string where
 some lines begin with a number and period (e.g., "1. ", "2. ")
 and some do not. It groups lines based on this pattern,
 combining lines that don’t start with a number into the
 most recent numbered line above them. This allows related
 lines to be grouped together as a single entry.
*/
const testString = '1. boo\n2. Foo\nnot\n3. foo: dar\n4. top\npot';

{
  const parseLines = (text = '') =>
    text.split('\n').reduce((matches, line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return matches;

      const matchedLine = trimmedLine.match(/^\d+\.\s+/);
      if (!matches.length || matchedLine) {
        matches.push(line);
        return matches;
      }

      matches[matches.length - 1] += ` ${trimmedLine}`;
      return matches;
    }, []);

  console.log(parseLines(testString));
}
{
  const parseLines = (text = '') =>
    text
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .reduce(
        (matches, line) =>
          /^\d+\.\s/.test(line)
            ? [...matches, line]
            : ((matches[matches.length - 1] += ` ${line}`), matches),
        [],
      );

  console.log(parseLines(testString));
}
