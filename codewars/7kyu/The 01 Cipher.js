/**
 * It looks at the letter, and sees it's index in the alphabet,
 * the alphabet being a-z, if you didn't know. If it is odd,
 * it is replaced with 1, if it's even, its replaced with 0.
 *  Note that the index should start from 0. Also,
 * if the character isn't a letter, it remains the same.
 *
 * Example
 * encode("Hello World!"); // => "10110 00111!"
 */

function encode(p) {
  let dict = {
    a: 0,
    b: 1,
    c: 0,
    d: 1,
    e: 0,
    f: 1,
    g: 0,
    h: 1,
    i: 0,
    j: 1,
    k: 0,
    l: 1,
    m: 0,
    n: 1,
    o: 0,
    p: 1,
    q: 0,
    r: 1,
    s: 0,
    t: 1,
    u: 0,
    v: 1,
    w: 0,
    x: 1,
    y: 0,
    z: 1,
  };
  return p.toLowerCase().split``.map((v) => (dict.hasOwnProperty(v) ? dict[v] : v)).join``;
}

const isEven = (num) => num % 2 === 0;
const encode = (plaintext) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encoded = plaintext.split``.map((char) => {
    const index = alphabet.indexOf(char.toLowerCase());
    return index === -1 ? char : Number(!isEven(index));
  });

  return encoded.join("");
};

function encode(string) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  string = string.toLowerCase();
  let result = [];
  for (i = 0; i < string.length; i++) {
    let index = alpha.indexOf(string[i]);
    index < 0 ? result.push(string[i]) : index % 2 == 0 ? result.push("0") : result.push("1");
  }
  return result.join("");
}

const encode = (plaintext) => plaintext.replace(/[a-z]/gi, (c) => 1 - (c.charCodeAt(0) % 2));

// function encode(s) {
//     return s.split``.map(c => /[a-z]/i.test(c) ? (c.toLowerCase().charCodeAt() + 1) % 2 : c).join``;
// }

// function encode(plaintext) {
//     return plaintext.replace(/[a-z]/ig, c => (c.charCodeAt(0) + 1) & 1)
// }
