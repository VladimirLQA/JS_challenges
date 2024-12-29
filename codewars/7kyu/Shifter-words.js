/*
  https://www.codewars.com/kata/603b2bb1c7646d000f900083/javascript
*/
{
  const shifter = (s) => new Set(s.match(/\b[HINOSXZMW]+\b/g)).size;
  console.log(shifter('ON')); // 1
  console.log(shifter('SIN AND COS')); // 1
  console.log(shifter('I III I III')); // 2
  console.log(shifter('')); // 0
}
