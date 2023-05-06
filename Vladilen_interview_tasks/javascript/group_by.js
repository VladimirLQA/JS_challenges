/*
* Напишите функцию 'groupBy'
* Input: Number[] & String[], Function & String
* Output: Object
* */

function groupBy(array, fn) {
    return array.reduce((res, current) => {
        for (let i = 0; i < array.length; i++) {
            const current = array[i];
            const key = typeof fn === 'function' ? fn(current) : current[fn]

            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(current)
        }

        return res;
    }, {})
}

console.log(groupBy(['one', 'two', 'three'], 'length'))
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
