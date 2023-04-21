/*
 * написать функцию которая принимает на вход 2 аргумента, переменную и тип даных к которому следует привести переменную
 * например при вызове функции с параметрами (1, 'str') возвращается '1', если преобразование невозможно выводим ошибку 
 * с типом введеных даных
 */

function some(a, b) {
    let result
    if (b === 'string' || b === 'number' || b === 'boolean') {

        if (b === 'string') {
            result = a.toString();

        } else if (b === 'number') {
            result = a;

        } else if (b === 'boolean') {
            result = Boolean(a)
        }
    }
    else {
        throw new Error(`Cannot convert to ${b}`)
    }

    return result
}

console.log(some(1, 'string'));
console.log(some('dfd', 'number'));
console.log(some(1, 'boolean'));
console.log(some(1, 'dfs'));

/*
 * написать функцию которая принимает на вход строку и заменяет каждую букву на её порядковый номер в алфавите,
 * если строка не содержит букв, игнорировать её и вернуть текст что в строке нету букв.
 * например при вызове такой функии с параметром ("абаба") возвращается 12121
 */

function name(string) {
    if (!string) {
        return new Error('Empty string')
    }
    let alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',')
    let result = string.toLowerCase().split('').map(char => {
        return alphabet.indexOf(char) + 1;
    })

    return result.join(',');
}
console.log(name('ababa'));
console.log(name('jkhuifugy'));


/*
 * написать функцию которая принимает на вход строку где каждое слово содержит цифру от 1 до 9,
 * а потом сортирует заданную строку по возрастанию чисел
 * например при вызове функции с параметром ("4of Fo1r pe6ople g3ood th5e the2")
 * возвращается "Fo1r the2 g3ood 4of th5e pe6ople"
 */

function sort(string) {

    let result = string.split(' ');
    let newArr = [];
    result.forEach((word) => {

        let chars = word.split('');
        chars.forEach((char) => {

            if (+char) {
                newArr[+char - 1] = word;
            };
        });
    });
    return console.log(newArr.join(' '));
}
sort('4of Fo1r pe6ople g3ood th5e the2');


