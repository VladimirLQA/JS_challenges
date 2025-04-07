/*
  https://www.codewars.com/kata/59cacb2b09394a91cb0000d5/javascript
*/

{
  const refactoryString = (s) =>
    s.replace(/\d+/g, (d) => String.fromCharCode(+d + 97));

  console.log(refactoryString('str8ng is he17e')); // 'string is here'
}
