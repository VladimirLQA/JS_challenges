/*

*
**
* *
*  *
*   *
******

*/

function hollow_triangle(star, times) {
    let str = '';
    for (let i = 0; i <= times; i++) {
        for (let j = 0; j < i; j++) {
            if (i === times) {
                str += star;
            } else {
                if (j === 0 || j === i - 1) {
                    str += star;
                } else {
                    str += ' ';
                }
            }
        }
        str += `\n`;
    }
    return console.log(str);
}

hollow_triangle('*', 5);

