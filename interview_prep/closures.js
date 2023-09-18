
// Create a counter function which has increment and getValue functionality

function counter() {
    let count = 0;

    return {
        increment: ( value = 1) => {
            count += value;
        },
        getValue: () => {
            return count;
        },
    }
}

let c = counter();

console.log(c.getValue());
c.increment(2);
c.increment();
console.log(c.getValue());

const privateSecret = () => {
    const secret = 'foo';
    return () => secret;
};

const getSecret = privateSecret();
console.log(getSecret());