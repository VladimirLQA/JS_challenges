/*
 You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
 For each word:

 - the second and the last letter is switched (e.g. Hello becomes Holle)
 - the first letter is replaced by its character code (e.g. H becomes 72)
 - there are no special characters used, only letters and spaces
 - words are separated by a single space
 - there are no leading or trailing spaces
*/
{
  const switchLastFirst = (word: string) =>
    word.length < 1
      ? word
      : `${word.slice(-1)}${word.slice(1, word.length - 1)}${word.slice(0, 1)}`;

  const decipherThis = (str: string): string =>
    str
      .split(" ")
      .map(
        (word) =>
          `${String.fromCharCode(parseInt(word))}${
            word.length > parseInt(word).toString().length + 1
              ? switchLastFirst(word.slice(parseInt(word).toString().length))
              : word.slice(parseInt(word).toString().length)
          }`,
      )
      .join(" ");

  console.log(
    decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"),
  );
}
{
  const decipherThis = (str: string) =>
    str
      .replace(/(\d+)/g, (code) => String.fromCharCode(+code))
      .replace(/\b(\w)(\w?)(\w*)(\w)/g, "$1$4$3$2");

  console.log(
    decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"),
  );
}
