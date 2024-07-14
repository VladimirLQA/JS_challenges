/*
 * Coding in function grabDoll. function accept 1 parameter:dolls.
 * it's a string array, a list of some dolls.
 * You need traverse dolls by using for loop.
 * If element is "Hello Kitty" or "Barbie doll",
 * you should push it to a bag
 * When the bag has three element, bag is full. You should use break
 * jump out the loop; If bag is not full, you should traverse dolls until the last element.*/

{
  grabDoll = (dolls) =>
    dolls.filter((i) => i === 'Hello Kitty' || i === 'Barbie doll').slice(0, 3);

  console.log(
    grabDoll(['Mickey Mouse', 'Hello Kitty', 'Hello Kitty', 'Snow white']),
  ); //["Hello Kitty","Hello Kitty"]
  console.log(
    grabDoll([
      'Mickey Mouse',
      'Barbie doll',
      'Hello Kitty',
      'Hello Kitty',
      'Hello Kitty',
      'Snow white',
    ]),
  ); // ["Barbie doll","Hello Kitty","Hello Kitty"]
}
