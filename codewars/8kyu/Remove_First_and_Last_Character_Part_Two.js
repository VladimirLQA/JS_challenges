/*
* This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except
* the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting
* string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

{
  function array(string) {
    const splitedArray = string.split(',');
    if (splitedArray.length < 3) {
      return null;
    } else {
      const middleArray = splitedArray.slice(1, -1);
      return middleArray.length === 1 ? middleArray[0] : middleArray.join(' ');
    }
  }

  console.log(array('1,2,3'));
  console.log(array('1,2,3,4'));
  console.log(array('1,2,3,4,5'));
  console.log(array(''));
  console.log(array('1'));
  console.log(array('1,2'));
}

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

{
  const array = (arr) => arr.split(',').slice(1, -1).join(' ') || null;

  console.log(array('1,2,3'));
  console.log(array('1,2,3,4'));
  console.log(array('1,2,3,4,5'));
  console.log(array(''));
  console.log(array('1'));
  console.log(array('1,2'));
}
