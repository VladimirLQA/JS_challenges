/*
* Write a function that produces an array with the numbers 0 to N-1 in it.
* arr(5) // => [0,1,2,3,4]
*/

{
    const arr = n => {
        if ( !n ) return Array(1);
        let result = [];
        for (let i = 0; i <= n - 1; i++) {
            result.push(i)
        }
        return result;
    };

    console.log(arr(5));
    console.log(arr());
}

console.log(`=======================================`);
{
    const arr = n => {
        if ( !n ) return [];
        return [...Array(n).keys()];
    };
    console.log(arr(5));
}