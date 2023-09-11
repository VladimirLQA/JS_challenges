/*
* Complete the function that accepts a string parameter,
* and reverses each word in the string.
* All spaces in the string should be retained.
* Examples
* "This is an example!" ==> "sihT si na !elpmaxe"
* "double  spaces"      ==> "elbuod  secaps"
*/

{
    function reverseWords(str: string): string {
        return str
            .split(/\s+/)
            .map((word) => [...word].reverse().join(""))
            .join(" ");
    }

    console.log(reverseWords('a b c d'));
    console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
    console.log(reverseWords('double  spaced  words'));
}
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
{
     function reverseWords(str: string): string {
        // your code here
        return str.replace(/\S+/g, match => match.split('').reverse().join(''))
    }
    console.log(reverseWords('a b c d'));
    console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
    console.log(reverseWords('double  spaced  words'));
}
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
{
    function reverseStringRecursively(str: string): string {
        return (str === '') ? '' : reverseStringRecursively(str.substring(1)) + str.charAt(0);
    }

    console.log(reverseStringRecursively('a b c d'));
    console.log(reverseStringRecursively('The quick brown fox jumps over the lazy dog.'));
    console.log(reverseStringRecursively('double  spaced  words'));
}