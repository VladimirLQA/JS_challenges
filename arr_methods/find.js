
function ownFind(array, callbackFunc) {
    let resultArr = [];

    for ( let i = 0; i < array.length; i++) {
        if(callbackFunc(array[i], i, array)) {
            resultArr.push(array[i]);
            break;
        }
    }
    return resultArr.length > 0 ? resultArr : undefined;
}

let testArray = [1, 2, 3, 4, 5];
console.log(ownFind(testArray, (el, i, arr) => el > 5))