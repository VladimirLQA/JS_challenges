/*

*/

{
  const toBinaryRepresentation = (char) =>
    char.codePointAt(0).toString(2).padStart(8, '0'); // instead of codePointAt can be used charCodeAt

  const wordToBin = (str) => Array.from(str, toBinaryRepresentation);
}
