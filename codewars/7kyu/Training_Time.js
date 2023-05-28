/*
* Create a function shuffleIt.
* The function accepts two or more parameters.
* The first parameter arr is an array of numbers, followed by
* an arbitrary number of numeric arrays.
* Each numeric array contains two numbers, which are indices for elements in
* arr (the numbers will always be within bounds). For every such array, swap the elements.
* Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.
* Example:
* shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5
* shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
* shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
*/

{
    const shuffleIt = (arr, ...arbArr) => {
        for ( let i = 0; i < arbArr.length; i++) {
            let [a, b] = [arbArr[i][0], arbArr[i][1]];
            [arr[a], arr[b]] = [arr[b], arr[a]];
        }
        return arr;
    }

    console.log(shuffleIt([1,2,3,4,5],[1,2])); // [1,3,2,4,5]
    console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4])); // [1,3,2,5,4]
    console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])); // [1,3,5,2,4]
}

console.log(`==============================================================`);

{
    let shuffleIt = (arr,...ex) =>{
        for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
        return arr;
    }

    console.log(shuffleIt([1,2,3,4,5],[1,2])); // [1,3,2,4,5]
    console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4])); // [1,3,2,5,4]
    console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])); // [1,3,5,2,4]
}

console.log(`==============================================================`);

{
    const shuffleIt = (arr, ...args) =>
        args.reduce((pre, [a, b]) => ([pre[a], pre[b]] = [pre[b], pre[a]], pre), arr);

    console.log(shuffleIt([1,2,3,4,5],[1,2])); // [1,3,2,4,5]
    console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4])); // [1,3,2,5,4]
    console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])); // [1,3,5,2,4]
}