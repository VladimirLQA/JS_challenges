/*
    *****
    *****
    *****
    *****
    *****
* */

function square_pattern(star, times) {
    let str = '';
    for(let i = 0; i < times; i++) {
        for(let j = 0; j < times; j++) {
            str += star;
            console.log(str)
        }
        str += '\n';
    }
    return console.log(str);
 }

square_pattern('*', 5);