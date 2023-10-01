/*
* Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
* We translate the sentence into an alien language according to the following rules:
* Each word in the sentence is separated by spaces.
* The last letter of each word in the sentence turns to lowercase,
* and the other letters are capitalized.
* for example:
* alienLanguage("My name is John") should return "My NAMe Is JOHn"
* alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
* alienLanguage("Hello World") should return "HELLo WORLd"
*/

{
  const alienLanguage = (str: string): string => {
    return str.split(" ").map(word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()).join(" ");
  };

  console.log(alienLanguage("My name is John")); // "My NAMe Is JOHn"
  console.log(alienLanguage("this is an example")); // "THIs Is An EXAMPLe"
  console.log(alienLanguage("Hello World")); // "HELLo WORLd"
  console.log(alienLanguage("HELLO WORLD")); // "HELLo WORLd"
}