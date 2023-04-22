/*
* Напишите функцию, которая принимает строку и возвращает новую,
* в которой все дублирующиеся символы будут удалены.
* Input: String
* Output: String
*/

function removeDuplicate(string) {
    let result = [];
    let map = {};

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if(!map[char]) {
            map[char] = true;
            result.push(char);
        }
    }
    return result.join(``)
}


console.log(removeDuplicate('abcd')) // -> 'abcd'
console.log(removeDuplicate('aabbccdd')) // -> 'abcd'
console.log(removeDuplicate('abcddbca')) // -> 'abcd'
console.log(removeDuplicate('abababcdcdcd')) // -> 'abcd'



// second option

function removeDuplicate(string) {
    return Array.from(new Set(string)).join('')
}

console.log(removeDuplicate('abcd')) // -> 'abcd'
console.log(removeDuplicate('aabbccdd')) // -> 'abcd'
console.log(removeDuplicate('abcddbca')) // -> 'abcd'
console.log(removeDuplicate('abababcdcdcd')) // -> 'abcd'