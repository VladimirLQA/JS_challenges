/*
 In this Kata, you will be given a string that may have
 mixed uppercase and lowercase letters and your task is to
 convert that string to either lowercase only or uppercase only based on:

  - make as few changes as possible.
  - if the string contains equal number of uppercase and
  lowercase letters, convert the string to lowercase.
*/

{
  const solve = (s) =>
    (s.match(/[A-Z]/g) || []).length > (s.match(/[a-z]/g) || []).length
      ? s.toUpperCase()
      : s.toLowerCase();

  console.log(solve('CODe')); // "CODE"
  console.log(solve('COde')); // "code"
  console.log(solve('Code')); // "code"
  console.log(solve('code')); // "code"
}

{
  const solve = (s) =>
    s.replace(/[A-Z]/g, '').length < s.length / 2
      ? s.toUpperCase()
      : s.toLowerCase();

  console.log(solve('CODe')); // "CODE"
  console.log(solve('COde')); // "code"
  console.log(solve('Code')); // "code"
  console.log(solve('code')); // "code"
}
