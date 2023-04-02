/* * * * *

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

* * * * * */

function diamond_pattern(star, times) {
    let str = ``;
    for (let i = 1; i <= times; i++) {
        for (let j = times; j > i; j--) {
            str += ` `;
        }
        for (let y = 0; y < 2 * i - 1; y++) {
            str += star;
        }
        str += `\n`;
    }

    for (let k = 1; k <= times; k++) {
        for (let t = 0; t < k; t++) {
            str += `-`;
        }
        for (let f = (times - k) * 2 - 1; f > 0; f--) {
            str += star;
        }
        str += `\n`;
    }
    return console.log(str);
}

diamond_pattern(`*`, 5);
