function downward_triangle(star, times){
    let str = '';
    for(let i = 0; i < times; i++){
        for(let j = 0; j < times - i; j++){
            str += star;
        }
        str += '\n';
    }
    return console.log(str);
}

downward_triangle('*', 5);