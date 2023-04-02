/* * * *

    *
   * *
  *   *
 *     *
*********

* * * * * */

function hollow_pyramid_pattern(star, times) {
    let str = ``;
    for (let i = 1; i <= times; i++) {
        for (let j = 1; j <= times - i; j++) {
            str += ` `;
        }

        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === times) {
                str += star;
            } else {
                if (k === 0 || k === 2 * i - 2) {
                    str += star;
                } else {
                    str += ` `;
                }
            }
        }
        str += `\n`;
    }
    return console.log(str);
}

hollow_pyramid_pattern('*', 5);