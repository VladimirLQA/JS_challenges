/* * * * * *

    *
   **
  ***
 ****
*****

*
**
***
****
*****

* * * * */

function left_pattern(star, times) {
  let str = "";
  for (let i = 1; i <= times; i++) {
    for (let j = 0; j < times - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str += star;
    }
    str += `\n`;
  }
  return console.log(str);
}

left_pattern("*", 5);

function right_pattern(star, times) {
  let str = "";
  for (let i = 1; i <= times; i++) {
    for (let j = 0; j < i; j++) {
      str += star;
    }
    str += "\n";
  }
  return console.log(str);
}

right_pattern("*", 5);
