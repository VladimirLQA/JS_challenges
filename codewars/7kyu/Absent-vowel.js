/*
  https://www.codewars.com/kata/56414fdc6488ee99db00002c/javascript
*/

const vowels = 'aeiou';
{
  const absentVowel = (x) => [...vowels].findIndex((v) => !x.includes(v));

  console.log(absentVowel('John Doe hs seven red pples under his bsket')); // 0
}
{
  const absentVowel = (x) => [...vowels].findIndex((v) => x.indexOf(v) < 0);

  console.log(absentVowel('John Doe hs seven red pples under his bsket')); // 0
}
