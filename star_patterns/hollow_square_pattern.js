/* * *

*****
*   *
*   *
*   *
*****

* * */

function hollow_square_pattern(star, times) {
  // `times` - rows/columns
  let str = '';
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < times; j++) {
      if (i === 0 || i === times - 1) {
        str += star;
      } else if (j === 0 || j === times - 1) {
        str += star;
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }
  return console.log(str);
}

hollow_square_pattern('*', 5);
