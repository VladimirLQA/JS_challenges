function ownReduce(array, reduceFunction, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for ( let i = 0; i < array.length; i++) {
        accumulator = reduceFunction(accumulator, array[i], i, array)
    }
    return accumulator;
}

let testArray = [1, 2, 3, 4, 5];
console.log(ownReduce(testArray, (acc, value) => acc + value))