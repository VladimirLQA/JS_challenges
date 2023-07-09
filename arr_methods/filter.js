function ownFilter(array, callbackFunc) {
    let resultArr = undefined;

    for ( let i = 0; i < array.length; i++) {
        if(callbackFunc(array[i], i, array)) {
            resultArr = array[i];
            break;
        }
    }
    return resultArr;
}

let testArray = [1, 2, 3, 4, 5];
console.log(ownFilter(testArray, (el, i, arr) => el > 3))