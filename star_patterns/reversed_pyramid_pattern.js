/* * * * * *

*********
 *******
  *****
   ***
    *

* * * * * */

function reversed_pyramid_pattern(star, times) {
  let str = '';
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < i; j++) {
      str += ' ';
    }
    for (let k = 1; k <= 2 * (times - i) - 1; k++) {
      str += star;
    }
    str += '\n';
  }
  return console.log(str);
}
reversed_pyramid_pattern('*', 5);
