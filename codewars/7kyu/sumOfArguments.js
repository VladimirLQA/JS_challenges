/*
 * Return sum of arguments passed to function which 'typeof' is number 
 */

{
    function sum(a, b, c, d) {
        let plus = 0;
        for (let item of arguments) {
            if (typeof item === 'number') {
                plus += item
            }
        }
        return plus
    }

    console.log(sum('dfgdf', 3, '4', 5));
}

console.log(`===========================================`);

{
    function sum(...args) {
        let plus = 0;
        args.map(el => {
            if (typeof el == 'number') {
                plus += el
            }
        })
        return plus
    }

    console.log(sum('dfgdf', 3, '4', 5));
}

console.log(`===========================================`);

{
    function sum() {
        return [...arguments].filter(item => typeof item === 'number').reduce((a, b) => a + b);
    }

    console.log(sum('31231', 3, '4', 2323));
}