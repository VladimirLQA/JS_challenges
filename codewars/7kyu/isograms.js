/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

{
  const isIsogram = (s) => {
    if (!s.trim().length) return true;
    const clearString = new Set();

    for (const char of s.toLowerCase()) {
      if (clearString.has(char)) return false;
      clearString.add(char);
    }

    return true;
  };

  console.log(isIsogram('Dermatoglyphics'));
  console.log(isIsogram('aba'));
  console.log(isIsogram('moOse'));
}

{
  const isIsogram = (s) => new Set(s.toLowerCase()).size === s.length;
  console.log(isIsogram('Dermatoglyphics'));
  console.log(isIsogram('aba'));
  console.log(isIsogram('moOse'));
}

{
  const isIsogram = (s) => !/(\w).*\1/i.test(s);
  console.log(isIsogram('Dermatoglyphics'));
  console.log(isIsogram('aba'));
  console.log(isIsogram('moOse'));
}
