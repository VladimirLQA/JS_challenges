/*
* Напишите функцию, которая проверяет, являются ли все элементы
* в массиве анаграммами друг друга.
* Input: String[]
* Output: Boolean
*/

function isAnagram(array) {
    const sorted = array.map(str => str.split``.sort().join``);

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) return false;
    }
    return true;
}

console.log(isAnagram(['abcd', 'bdac', 'cabd'])) // true
console.log(isAnagram([ 'bdXc', 'abcd', 'cabd'])) // false