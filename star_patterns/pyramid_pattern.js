function pyramid_pattern(star, times) {
    let str = '';
    for(let i = 1; i <= times; i++) {
        for(let j = 1; j <= times - i; j++) {
            str += ' ';
        }
        for(let k = 0; k < 2 * i - 1; k++) {
            str += star;
        }
        str += '\n';
    }
    return console.log(str);
}

pyramid_pattern('*', 5);