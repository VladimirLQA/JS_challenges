/*
* Given the number (n), populate an array with all numbers up to
* and including that number, but excluding zero.
* For example(Input --> Output)
*/

{
    function monkeyCount(n) {
        let arr = [];
        for ( let i = 1; i < n + 1; i ++) {
            arr.push(i)
        }
        return arr;
    }
    console.log(monkeyCount(3)); // [1, 2, 3]
}

console.log(`===========================================================`);

{
    function monkeyCount(n) {
        return Array.from({ length: n}, (_, i)=> i + 1);
    }
    console.log(monkeyCount(3)); // [1, 2, 3]

}

console.log(`===========================================================`);

{
    function monkeyCount(n) {
        for (var i = 0, arr = []; i < n; arr.push(++i));
        return arr;
    }
    console.log(monkeyCount(3)); // [1, 2, 3]
}

console.log(`===========================================================`);

{
    function monkeyCount(n) {
        return [...Array(n).keys()].map(el => el + 1);
    }
    console.log(monkeyCount(3)); // [1, 2, 3]
}

