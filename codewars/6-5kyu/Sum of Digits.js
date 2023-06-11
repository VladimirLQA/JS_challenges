/*
 * Given n, take the sum of the digits of n. 
 * If that value has more than one digit, continue reducing in this way until 
 * a single-digit number is produced. 
 * The input will be a non-negative integer.
 * 
    16  -->  1 + 6 = 7
    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
 * 
 */

{
    function summ(number) {
        let sum = number;
        while (sum > 9) {
            sum = sum.toString().split('').reduce((prev, current) => +prev + +current)
        }
        return console.log(sum);
    }

    summ(19); // 1
    summ(3); // 3
    summ(327); // 3
    summ(98993); // 2
}

console.log(`======================================================`);


{
    function digitalRoot(n) {
        return --n % 9 + 1;
    }

    console.log(digitalRoot(19)); // 1
    console.log(digitalRoot(3)); // 3
    console.log(digitalRoot(327)); // 3
    console.log(digitalRoot(98993)); // 2
}