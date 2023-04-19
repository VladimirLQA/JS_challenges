/*
* Напишите функцию, принимающая массив с вложенными массивами и
* распакуйте в результирующий плоский массов.
* В результате должны получить новый одномерный массив.
* Input: Array
* Output: Array
*/

function flatten(array) {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            const flat = flatten(array[i])
            console.log(flat)
            for (let j = 0; j < flat.length; j++) {
                resultArray.push(flat[j])
            }
        } else {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]