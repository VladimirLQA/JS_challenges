/*
* Complete the square sum function so that it squares each number
* passed into it and then sums the results together.
* For example, for [1, 2, 2] it should return 9
*/

function squareSum(numbers){
    if(numbers.length === 0) return 0;
    return numbers.map(v => Math.pow(v, 2)).reduce((a, b) => a + b);
}

console.log(squareSum([1,2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0
