function ownFilter(array, filterFunction) {
    let resultArr = [];

    for ( let i = 0; i < array.length; i++) {
        const result = filterFunction(array[i], i, array);
        if(result) {
            resultArr.push(array[i]);
        }
    }
    return resultArr;
}

let testArray = [1, 2, 3, 4, 5];
console.log(ownFilter(testArray, (el, i, arr) => el >= 3))