/*
* Реализуйте функцию `bind`.
* Input: Object, arguments
* Output: Function
*/

Function.prototype.ownBind = function (context, ...args) {
    return (...rest) => {
        return this.call(context, ...args.concat(rest))
    }
}

function log(...props) {
    console.log(this.name, this.age, ...props)
}

const obj = {name: 'Vova', age: 20};
log.ownBind(obj, 1, 2)();