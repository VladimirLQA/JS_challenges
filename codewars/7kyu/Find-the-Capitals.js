/*
 Write a function that takes a single non-empty string of only
 lowercase and uppercase ascii letters (word) as its argument,
 and returns an ordered list containing the indices of
 all capital (uppercase) letters in the string.

 Example (Input --> Output)
  "CodEWaRs" --> [0,3,4,6]
*/

{
  const capitals = (word) =>
    [...word].reduce(
      (acc, currentChar, idx) => (
        /[A-Z]/g.test(currentChar) && acc.push(idx), acc
      ),
      [],
    );

  console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]
}

{
  const capitals = (word) =>
    word.match(/[A-Z]/g).map((char) => word.indexOf(char));

  console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]
}

{
  const capitals = (word) =>
    [...word]
      .map((char, idx) => (char.toUpperCase() === char ? idx : -1))
      .filter((el) => el >= 0);

  console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]
}
