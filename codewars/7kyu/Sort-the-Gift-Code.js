/*
 Sort the Gift Code
 Write a function called sortGiftCode/sort_gift_code/SortGiftCode
 that accepts a string containing up to 26 unique alphabetical
 characters, and returns a string containing the same
 characters in alphabetical order.

 Examples (Input -- => Output):
  "abcdef"                      -- => "abcdef"
  "pqksuvy"                     -- => "kpqsuvy"
  "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/
{
  const sortGiftCode = (code = '') =>
    [...code].sort((charA, charB) => charA.localeCompare(charB)).join('');

  console.log(sortGiftCode('abcdef'));
  console.log(sortGiftCode('pqksuvy'));
  console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'));
}
