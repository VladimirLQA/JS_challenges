/*
 Amy and May aren't allowed by their parents to have cell phones,
 so they still communitcate in class the good old fashioned way, by writing notes.
 So that no snoopy teachers can read any found notes, the girls communicate in code.
 May is having a hard time deciphering Amy's latest messages, can you help her figure it out?
   Input: String written in Amy's code
   Output: String decoded to Engligh so May can read it
*/
{
  const decipher = (codedMessage) =>
    [...codedMessage]
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const start = code >= 65 && code <= 90 ? 65 : 97;
          const newCode = (code - start + 7) % 26 + start;
          return String.fromCharCode(newCode);
        }
        return char;
      })
      .join('');

  console.log(
    decipher(
      'HFZ FTR RHNK WKXLL BL LH VNMX',
    ),
  );
}
{
  const shift = (x, y = x >= 97 ? 97 : 65) => y + (x - y + 7) % 26;

  const decipher = (codedMessage) =>
    codedMessage.replace(/[a-z]/gi,
      (char) => String.fromCharCode(shift(char.charCodeAt(0))));

  console.log(
    decipher(
      'HFZ FTR RHNK WKXLL BL LH VNMX',
    ),
  );
}
